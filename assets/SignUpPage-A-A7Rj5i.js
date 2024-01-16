import{d as h,e as i,f as u,u as d,j as r,g,r as x,c as f}from"./index-ycM4_Keg.js";import{u as j}from"./formik.esm-Fkxmt5TJ.js";import{I as n}from"./InputPrimary-i-3GwX26.js";import{i as w}from"./imgForWelcomePage-t-lFdlDu.js";import{C as S,B as v,T as y,P as U,F as C,W as t,a as b,I as k}from"./SignUp.styled-g5AzKc5T.js";import{u as I}from"./useAuth-NwFnWa7H.js";const P=h().shape({name:i().min(2,"must be at least 2, maximum 50 characters!").required("Required!"),email:i().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email format").required(),password:i().min(6,"password is too short - should be 6 characters minimum.").required("Required")}),T=()=>{const a=u(),s=d(),e=j({initialValues:{name:"",email:"",password:""},validationSchema:P,onSubmit:async(c,{resetForm:p})=>{var l,m;try{const o=await a(g(c));if(p(),(m=(l=o.payload)==null?void 0:l.data)==null?void 0:m.token)return s("/profile")}catch(o){console.error("Registration failed",o)}}});return r.jsxs(S,{children:[r.jsxs(v,{children:[r.jsx(y,{children:"Sign up"}),r.jsx(U,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),r.jsxs(C,{onSubmit:e.handleSubmit,children:[r.jsx(t,{children:r.jsx(n,{bordercolor:e.errors.name&&e.touched.name?"error":"default",name:"name",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.name})}),e.errors.name&&e.touched.name&&r.jsx("div",{children:e.errors.name}),r.jsx(t,{children:r.jsx(n,{bordercolor:e.errors.email&&e.touched.email?"error":"default",id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email})}),e.errors.email&&e.touched.email&&r.jsx("div",{children:e.errors.email}),r.jsx(t,{children:r.jsx(n,{bordercolor:e.errors.password&&e.touched.password?"error":"default",id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password})}),e.errors.password&&e.touched.password&&r.jsx("div",{children:e.errors.password}),r.jsx(b,{htmlType:"submit",type:"primary",children:"Sign Up"})]})]}),r.jsx(k,{src:w,alt:"The girl shows an example of a forward leg kick"})]})},$=()=>{const{isLoggedIn:a,isRefreshing:s}=I(),e=d();return x.useEffect(()=>{a&&!s&&e("/diary")},[a,s,e]),r.jsx(f,{children:r.jsx(T,{})})};export{$ as default};
