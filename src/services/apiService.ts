import axios, { AxiosRequestConfig } from 'axios';
import { ApiServiceOptions } from './types';
import { setToken } from './token.ts';
const baseURL = 'https://goit-be.onrender.com/';

interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

// Create a list to hold the request queue
const refreshAndRetryQueue: RetryQueueItem[] = [];

// Flag to prevent multiple token refresh requests
let isRefreshing = false;

const axiosInstance = axios.create({
  baseURL,
});

const apiService = async (
  { method, url, data, config }: ApiServiceOptions,
  errorHandler = error => {
    return `An error occurred: ${error}`;
  }
) => {
  try {
    const response = await axiosInstance.request({
      method,
      url,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

axiosInstance.interceptors.request.use(
  async config => {
    const sessionString = localStorage.getItem('session');
    if (!sessionString) return config;
    const session = JSON.parse(sessionString);

    if (session?.accessToken) {
      config.headers.authorization = `Bearer ${session?.accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const config = error?.config;
    if (error?.response?.status === 401 && !config?.sent) {
      if (!isRefreshing) {
        isRefreshing = true;
        config.sent = true;
        try {
          const sessionString = localStorage.getItem('session');
          if (!sessionString) throw new Error('no token');
          const session = JSON.parse(sessionString);
          const {
            data: { data },
          } = await axios.request({
            method: 'POST',
            baseURL,
            url: 'users/refresh',
            headers: {
              ...config.headers,
              authorization: `Bearer ${session?.refreshToken}`,
            },
          });
          if (data) {
            setToken(data.accessToken, data.refreshToken);
            // console.log('interceptors.response', data)
            config.headers = {
              ...config.headers,
              authorization: `Bearer ${data?.accessToken}`,
            };

            // Retry all requests in the queue with the new token
            refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
              axiosInstance
                .request(config)
                .then(response => resolve(response))
                .catch(err => reject(err));
            });

            // Clear the queue
            refreshAndRetryQueue.length = 0;
          }
          return axios(config);
        } catch (e) {
          localStorage.removeItem('session')
        } finally {
          isRefreshing = false;
        }
      }
      // Add the original request to the queue
      return new Promise<void>((resolve, reject) => {
        refreshAndRetryQueue.push({ config, resolve, reject });
      });
    }

    return Promise.reject(error);
  }
);

export default apiService;
