import{e as o,h as t,j as e,i as l,k as d,v as c,w as u,F as h,x as p,y as m,n,o as g,c as x,z as j,L as S,A as f,D as w,E as I,r as y,f as b,g as v}from"./index-9akA7q-a.js";import{u as C}from"./formik.esm-c_7P5koi.js";import{A,S as P}from"./WelcomeImg-uwurnvra.js";const U=()=>{const{isLoading:s}=o(),a=t(),r=C({initialValues:{email:"",password:""},validationSchema:w,onSubmit:async i=>{await a(I(i))}});return e.jsxs(l,{children:[e.jsxs(d,{children:[e.jsx(c,{children:"Sign In"}),e.jsx(u,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(h,{onSubmit:r.handleSubmit,children:[e.jsxs(p,{children:[e.jsx(m,{bordercolor:r.errors.email&&r.touched.email?"error":"default",id:"email",name:"email",type:"text",placeholder:"Email",onChange:r.handleChange,value:r.values.email}),r.errors.email&&r.touched.email&&e.jsx(n,{children:r.errors.email}),e.jsx(g,{bordercolor:r.errors.password&&r.touched.password?"error":"default",id:"password",name:"password",type:"password",placeholder:"Password",onChange:r.handleChange,value:r.values.password}),r.errors.password&&r.touched.password&&e.jsx(n,{children:r.errors.password})]}),e.jsx(x,{htmlType:"submit",type:"primary",loading:s,children:"Sign In"}),e.jsxs(j,{children:["Don’t have an account? ",e.jsx(S,{to:"/signup",children:"Sign Up"})]})]})]}),e.jsx(A,{}),e.jsx(f,{children:e.jsx(P,{})})]})},B=()=>{const{isRefreshing:s,error:a}=o();return y.useEffect(()=>{if(s||a==="Unable to get current user"){const r=setTimeout(()=>{b("loading","If you are experiencing a long load time, please wait, our servers go into hibernation when not in use for a long time and need time to get up and running.",1e4)},5e3);return()=>clearTimeout(r)}},[s,a]),e.jsx(v,{children:e.jsx(U,{})})};export{B as default};