import{f as p,g as n,u,t as g,h as x,j as e,i as j,k as w,l as S,P as f,F as v,W as t,v as l,c as k,p as y,L as I,s as P,w as d,e as b}from"./index-ACawLhJB.js";import{u as C}from"./formik.esm-dVJtVKDL.js";import{i as U}from"./imgForWelcomePage-t-lFdlDu.js";const A=p().shape({email:n().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email format").required(),password:n().min(6,"password is too short - should be 6 characters minimum.").required("Required")}),F=()=>{const s=u(),c=g(),{isLoading:h}=x(),a=C({initialValues:{email:"",password:""},validationSchema:A,onSubmit:async(r,{resetForm:m})=>{var i,o;if(await s(d(r)),(o=(i=(await s(d(r))).payload)==null?void 0:i.data)==null?void 0:o.token)return c("/profile");m()}});return e.jsxs(j,{children:[e.jsxs(w,{children:[e.jsx(S,{children:"Sign In"}),e.jsx(f,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(v,{onSubmit:a.handleSubmit,children:[e.jsx(t,{children:e.jsx(l,{bordercolor:a.errors.email&&a.touched.email?"error":"default",id:"email",name:"email",type:"text",placeholder:"Email",onChange:a.handleChange,value:a.values.email})}),a.errors.email&&a.touched.email&&e.jsx("div",{children:a.errors.email}),e.jsx(t,{children:e.jsx(l,{bordercolor:a.errors.password&&a.touched.password?"error":"default",id:"password",name:"password",type:"password",placeholder:"Password",onChange:a.handleChange,value:a.values.password})}),a.errors.password&&a.touched.password&&e.jsx("div",{children:a.errors.password}),e.jsx(k,{htmlType:"submit",type:"primary",loading:h,children:"Sign In"}),e.jsxs(y,{children:["Don’t have an account? ",e.jsx(I,{to:"/signup",children:"Sign Up"})]})]})]}),e.jsx(P,{src:U,alt:"The girl shows an example of a forward leg kick"})]})},$=()=>e.jsx(b,{children:e.jsx(F,{})});export{$ as default};