import{h as w,g as U,j as e,W as L,i as R,k as D,m as x,U as P,o as M,p as $,q,s as N,t as z,v as C,w as A,x as F,y as V,z as G,A as J,D as S,L as h,E as c,S as o,F as B,G as g,H as K,J as O,K as Q,R as T,M as I,O as r,P as i,Q as l,V as a,X as v,Y as X,Z as Y,_ as Z,c as _,$ as k}from"./index-7T5PGSjv.js";import{P as f}from"./PageTitle-Pm4jZxNJ.js";import{u as ee}from"./formik.esm-ga6asqpS.js";const se=async s=>{try{return await s()}catch(n){return n instanceof Error?n.message:"An error occurred"}},te=()=>{const[s,n]=w.useState(!1),{user:t}=U(),j=u=>{console.log(u.target.files[0])};return e.jsx(e.Fragment,{children:e.jsx(L,{children:e.jsxs("div",{children:[e.jsxs(R,{children:[e.jsx(D,{children:e.jsx(x,{name:"user",iconWidth:{mobile:"64px",tablet:"102px"},iconHeight:{mobile:"64px",tablet:"102px"}})}),e.jsx(P,{children:e.jsx("form",{children:e.jsxs("label",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[e.jsx(x,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"32px"},iconHeight:{mobile:"24px",tablet:"32px"},stroke:s?"#efede8":"#e6533c"}),e.jsx(M,{name:"file",type:"file",onChange:j})]})})})]}),e.jsxs($,{children:[e.jsx(q,{children:t.name}),e.jsx(N,{children:"User"})]}),e.jsxs(z,{children:[e.jsxs(C,{children:[e.jsxs(A,{children:[e.jsx(x,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(F,{children:"Daily calorie intake"})]}),e.jsx(V,{children:t.dailyCalories||0})]}),e.jsxs(C,{children:[e.jsxs(A,{children:[e.jsx(x,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(F,{children:"Daily physical activity"})]}),e.jsxs(V,{children:[t.dailyActivity||0,e.jsx("span",{children:" min"})]})]})]}),e.jsxs(G,{children:[e.jsx(x,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(J,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})]})})})},re=({formik:s,user:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"name",children:"Name"}),e.jsx(o,{id:"name",name:"name",type:"text",bordercolor:"default",onChange:s.handleChange,value:s.values.name})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"email",children:"Email"}),e.jsx(o,{id:"email",name:"email",type:"text",placeholder:n.email,bordercolor:"default",disabled:!0})]})]}),e.jsxs(S,{children:[e.jsxs(B,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"height",children:"Height"}),e.jsx(o,{bordercolor:s.errors.height&&s.touched.height?"error":"default",id:"height",name:"height",type:"number",onChange:s.handleChange,value:s.values.height}),s.errors.height&&s.touched.height&&e.jsx(g,{children:s.errors.height})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(o,{bordercolor:s.errors.currentWeight&&s.touched.currentWeight?"error":"default",id:"currentWeight",name:"currentWeight",type:"number",onChange:s.handleChange,value:s.values.currentWeight}),s.errors.currentWeight&&s.touched.currentWeight&&e.jsx(g,{children:s.errors.currentWeight})]})]}),e.jsxs(B,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(o,{bordercolor:s.errors.desiredWeight&&s.touched.desiredWeight?"error":"default",id:"desiredWeight",name:"desiredWeight",type:"number",onChange:s.handleChange,value:s.values.desiredWeight}),s.errors.desiredWeight&&s.touched.desiredWeight&&e.jsx(g,{children:s.errors.desiredWeight})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"birthday",children:"Date of birth"}),e.jsx(o,{bordercolor:s.errors.birthday&&s.touched.birthday?"error":"default",id:"birthday",name:"birthday",type:"date",onChange:s.handleChange,value:s.values.birthday}),s.errors.birthday&&s.touched.birthday&&e.jsx(g,{children:s.errors.birthday})]})]})]})]}),ie=()=>{var j,u,p,y,b,m,W;const{user:s}=U(),n={name:(s==null?void 0:s.name)||"",height:((j=s==null?void 0:s.settings)==null?void 0:j.height)||0,currentWeight:((u=s==null?void 0:s.settings)==null?void 0:u.currentWeight)||0,desiredWeight:((p=s==null?void 0:s.settings)==null?void 0:p.desiredWeight)||0,birthday:((y=s==null?void 0:s.settings)==null?void 0:y.birthday.split("T")[0])||"2000-10-10",blood:((b=s==null?void 0:s.settings)==null?void 0:b.blood)||null,sex:((m=s==null?void 0:s.settings)==null?void 0:m.sex)||"",levelActivity:((W=s==null?void 0:s.settings)==null?void 0:W.levelActivity)||null},t=ee({initialValues:n,validationSchema:Y,onSubmit:async d=>{const E={name:d.name,height:d.height,currentWeight:d.currentWeight,desiredWeight:d.desiredWeight,birthday:d.birthday,blood:d.blood,sex:d.sex,levelActivity:d.levelActivity},H=await Z({method:"patch",url:"/users",data:E});se(H)}});return e.jsx(e.Fragment,{children:e.jsx(K,{children:e.jsxs("form",{onSubmit:t.handleSubmit,children:[e.jsx(re,{formik:t,user:s}),e.jsx(O,{children:"Blood"}),e.jsxs(Q,{children:[e.jsxs(T,{children:[e.jsxs(I,{children:[e.jsxs(r,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",1),checked:t.values.blood===1,value:1}),e.jsx(l,{}),e.jsx(a,{children:"1"})]}),e.jsxs(r,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",2),checked:t.values.blood===2,value:2}),e.jsx(l,{}),e.jsx(a,{children:"2"})]}),e.jsxs(r,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",3),checked:t.values.blood===3,value:3}),e.jsx(l,{}),e.jsx(a,{children:"3"})]}),e.jsxs(r,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",4),checked:t.values.blood===4,value:4}),e.jsx(l,{}),e.jsx(a,{children:"4"})]})]}),t.errors.blood&&t.touched.blood&&e.jsx(v,{children:t.errors.blood})]}),e.jsxs(T,{children:[e.jsxs(I,{children:[e.jsxs(r,{children:[e.jsx(i,{name:"sex",type:"radio",onChange:t.handleChange,checked:t.values.sex==="male",value:"male"}),e.jsx(l,{}),e.jsx(a,{children:"Male"})]}),e.jsxs(r,{children:[e.jsx(i,{name:"sex",type:"radio",onChange:t.handleChange,checked:t.values.sex==="female",value:"female"}),e.jsx(l,{}),e.jsx(a,{children:"Female"})]})]}),t.errors.sex&&t.touched.sex&&e.jsx(v,{children:t.errors.sex})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",1),checked:t.values.levelActivity===1,value:1}),e.jsx(l,{}),e.jsx(a,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",2),checked:t.values.levelActivity===2,value:2}),e.jsx(l,{}),e.jsx(a,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",3),checked:t.values.levelActivity===3,value:3}),e.jsx(l,{}),e.jsx(a,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",4),checked:t.values.levelActivity===4,value:4}),e.jsx(l,{}),e.jsx(a,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",5),value:5}),e.jsx(l,{}),e.jsx(a,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})}),t.errors.levelActivity&&t.touched.levelActivity&&e.jsx(v,{children:t.errors.levelActivity})]}),e.jsx(X,{htmlType:"submit",type:"primary",style:{background:"tomato"},disabled:!(t.isValid&&t.dirty),children:"Save"})]})})})},de=()=>e.jsxs(_,{children:[e.jsx(f,{text:"Profile Settings"}),e.jsxs(k,{children:[e.jsx(te,{}),e.jsx(ie,{})]})]});export{de as default};
