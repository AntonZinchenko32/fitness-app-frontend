import styled from '@emotion/styled';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  .ant-card-body {
    width: 100%;
    height: 100%;
    padding-left: 15px;
    padding-top: 34px;
    padding-bottom: 30px;

    display: flex;
    justify-content: start;
    align-items: center;
  }

  width: 257px;
  background-color: #ef8964;
  height: 80px;
  opacity: 0.95;
  .ant-card-meta-avatar,
  .ant-card-meta-title,
  .ant-card-meta-description {
    color: #efede8;
    font-size: 20px;
  }

  .ant-card-meta {
    &-title {
    }
    &-description {
    }
    &-avatar {
      height: 20px;
    }
  }
`;
