import{d as h,e as i,u,f as g,g as x,j as r,l as w,c as j}from"./index-m-bZ-bII.js";import{u as f}from"./formik.esm-a3S8HYwJ.js";import{C as S,B as I,T as v,F as y,W as n,a as k,I as C}from"./SignUp.styled-9vwm3MMM.js";import{I as t}from"./InputPrimary-18eVZMM0.js";import{i as b}from"./imgForWelcomePage-t-lFdlDu.js";const U=h().shape({email:i().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email format").required(),password:i().min(6,"password is too short - should be 6 characters minimum.").required("Required")}),F=()=>{const l=u(),d=g(),{isLoading:m}=x(),e=f({initialValues:{email:"",password:""},validationSchema:U,onSubmit:async(c,{resetForm:p})=>{var a,s;try{if((s=(a=(await l(w(c))).payload)==null?void 0:a.data)==null?void 0:s.token)return d("/profile");p()}catch(o){console.error("Вхід не вдається",o)}}});return r.jsxs(S,{children:[r.jsxs(I,{children:[r.jsx(v,{children:"Sign In"}),r.jsxs(y,{onSubmit:e.handleSubmit,children:[r.jsx(n,{children:r.jsx(t,{bordercolor:e.errors.email&&e.touched.email?"error":"default",id:"email",name:"email",type:"text",placeholder:"Email",onChange:e.handleChange,value:e.values.email})}),e.errors.email&&e.touched.email&&r.jsx("div",{children:e.errors.email}),r.jsx(n,{children:r.jsx(t,{bordercolor:e.errors.password&&e.touched.password?"error":"default",id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password})}),e.errors.password&&e.touched.password&&r.jsx("div",{children:e.errors.password}),r.jsx(k,{htmlType:"submit",type:"primary",loading:m,children:"Sign In"})]})]}),r.jsx(C,{src:b,alt:"The girl shows an example of a forward leg kick"})]})},$=()=>r.jsx(j,{children:r.jsx(F,{})});export{$ as default};
