import{x as D,h as L,j as e,y as E,z as P,A as M,D as C,E as f,a as j,U as $,G as q,H as O,J as z,K as N,M as G,O as A,Q as F,R as B,S,V as J,X as K,Y as Q,Z as X,_ as R,$ as T,a0 as h,a1 as c,a2 as o,a3 as V,a4 as p,a5 as Y,a6 as Z,a7 as _,a8 as I,a9 as U,aa as t,ab as i,ac as r,ad as l,ae as y,af as k,ag as ee,ah as se,e as ae,ai as te}from"./index-9sNlvgP-.js";import{P as ie}from"./PageTitle-EiJGDNPL.js";import{u as re}from"./formik.esm-kgvPS0EH.js";import{P as le}from"./PrimaryButton-gdZbUy1U.js";const ne=()=>{const[s,d]=D.useState(!1),{user:a}=L(),g=async u=>{const x=new FormData;x.append("avatar",u.target.files[0]);const v=await R({method:"post",url:"/users/avatars",data:x,config:{headers:{"Content-Type":"multipart/form-data"}}});console.log(v)};return e.jsx(e.Fragment,{children:e.jsxs(E,{children:[e.jsxs(P,{children:[e.jsx(M,{children:a!=null&&a.avatarURL?e.jsx(C,{children:e.jsx(f,{src:a==null?void 0:a.avatarURL,alt:"Avatar"})}):e.jsx(C,{children:e.jsx(j,{name:"user",iconWidth:{mobile:"64px",tablet:"102px"},iconHeight:{mobile:"64px",tablet:"102px"}})})}),e.jsx($,{children:e.jsx("form",{id:"file",children:e.jsxs("label",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsx(j,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"32px"},iconHeight:{mobile:"24px",tablet:"32px"},stroke:s?"#efede8":"#e6533c"}),e.jsx(q,{id:"file",name:"file",type:"file",onChange:g})]})})})]}),e.jsxs(O,{children:[e.jsx(z,{children:a.name}),e.jsx(N,{children:"User"})]}),e.jsxs(G,{children:[e.jsxs(A,{children:[e.jsxs(F,{children:[e.jsx(j,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(B,{children:"Daily calorie intake"})]}),e.jsx(S,{children:a.dailyCalories||0})]}),e.jsxs(A,{children:[e.jsxs(F,{children:[e.jsx(j,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(B,{children:"Daily physical activity"})]}),e.jsxs(S,{children:[a.dailyActivity||0,e.jsx("span",{children:" min"})]})]})]}),e.jsxs(J,{children:[e.jsx(j,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(K,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx(Q,{children:e.jsx(X,{})})]})})},de=({formik:s,user:d})=>e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"name",children:"Name"}),e.jsx(o,{id:"name",name:"name",type:"text",bordercolor:"default",onChange:s.handleChange,value:s.values.name})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"email",children:"Email"}),e.jsx(o,{id:"email",name:"email",type:"text",placeholder:d.email,bordercolor:"default",disabled:!0})]})]}),e.jsxs(T,{children:[e.jsxs(V,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"height",children:"Height"}),e.jsx(o,{bordercolor:s.errors.height&&s.touched.height?"error":"default",id:"height",name:"height",type:"number",onChange:s.handleChange,value:s.values.height}),s.errors.height&&s.touched.height&&e.jsx(p,{children:s.errors.height})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(o,{bordercolor:s.errors.currentWeight&&s.touched.currentWeight?"error":"default",id:"currentWeight",name:"currentWeight",type:"number",onChange:s.handleChange,value:s.values.currentWeight}),s.errors.currentWeight&&s.touched.currentWeight&&e.jsx(p,{children:s.errors.currentWeight})]})]}),e.jsxs(V,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(o,{bordercolor:s.errors.desiredWeight&&s.touched.desiredWeight?"error":"default",id:"desiredWeight",name:"desiredWeight",type:"number",onChange:s.handleChange,value:s.values.desiredWeight}),s.errors.desiredWeight&&s.touched.desiredWeight&&e.jsx(p,{children:s.errors.desiredWeight})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"birthday",children:"Date of birth"}),e.jsx(o,{bordercolor:s.errors.birthday&&s.touched.birthday?"error":"default",id:"birthday",name:"birthday",type:"date",onChange:s.handleChange,value:s.values.birthday}),s.errors.birthday&&s.touched.birthday&&e.jsx(p,{children:s.errors.birthday})]})]})]})]}),he=()=>{var g,u,x,v,b,m,W;const{user:s}=L(),d={name:(s==null?void 0:s.name)||"",height:((g=s==null?void 0:s.settings)==null?void 0:g.height)||0,currentWeight:((u=s==null?void 0:s.settings)==null?void 0:u.currentWeight)||0,desiredWeight:((x=s==null?void 0:s.settings)==null?void 0:x.desiredWeight)||0,birthday:((v=s==null?void 0:s.settings)==null?void 0:v.birthday.split("T")[0])||"",blood:((b=s==null?void 0:s.settings)==null?void 0:b.blood)||null,sex:((m=s==null?void 0:s.settings)==null?void 0:m.sex)||"",levelActivity:((W=s==null?void 0:s.settings)==null?void 0:W.levelActivity)||null},a=re({initialValues:d,validationSchema:ee,onSubmit:async n=>{const H={name:n.name,height:n.height,currentWeight:n.currentWeight,desiredWeight:n.desiredWeight,birthday:n.birthday,blood:n.blood,sex:n.sex,levelActivity:n.levelActivity};await R({method:"patch",url:"/users",data:H},w=>(se("error","Request error, try again"),console.log(w),""))}});return e.jsx(e.Fragment,{children:e.jsx(Y,{children:e.jsxs("form",{onSubmit:a.handleSubmit,children:[e.jsx(de,{formik:a,user:s}),e.jsx(Z,{children:"Blood"}),e.jsxs(_,{children:[e.jsxs(I,{children:[e.jsxs(U,{children:[e.jsxs(t,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>a.setFieldValue("blood",1),checked:a.values.blood===1,value:1}),e.jsx(r,{}),e.jsx(l,{children:"1"})]}),e.jsxs(t,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>a.setFieldValue("blood",2),checked:a.values.blood===2,value:2}),e.jsx(r,{}),e.jsx(l,{children:"2"})]}),e.jsxs(t,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>a.setFieldValue("blood",3),checked:a.values.blood===3,value:3}),e.jsx(r,{}),e.jsx(l,{children:"3"})]}),e.jsxs(t,{children:[e.jsx(i,{name:"blood",type:"radio",onChange:()=>a.setFieldValue("blood",4),checked:a.values.blood===4,value:4}),e.jsx(r,{}),e.jsx(l,{children:"4"})]})]}),a.errors.blood&&a.touched.blood&&e.jsx(y,{children:a.errors.blood})]}),e.jsxs(I,{children:[e.jsxs(U,{children:[e.jsxs(t,{children:[e.jsx(i,{name:"sex",type:"radio",onChange:a.handleChange,checked:a.values.sex==="male",value:"male"}),e.jsx(r,{}),e.jsx(l,{children:"Male"})]}),e.jsxs(t,{children:[e.jsx(i,{name:"sex",type:"radio",onChange:a.handleChange,checked:a.values.sex==="female",value:"female"}),e.jsx(r,{}),e.jsx(l,{children:"Female"})]})]}),a.errors.sex&&a.touched.sex&&e.jsx(y,{children:a.errors.sex})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>a.setFieldValue("levelActivity",1),checked:a.values.levelActivity===1,value:1}),e.jsx(r,{}),e.jsx(l,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>a.setFieldValue("levelActivity",2),checked:a.values.levelActivity===2,value:2}),e.jsx(r,{}),e.jsx(l,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>a.setFieldValue("levelActivity",3),checked:a.values.levelActivity===3,value:3}),e.jsx(r,{}),e.jsx(l,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>a.setFieldValue("levelActivity",4),checked:a.values.levelActivity===4,value:4}),e.jsx(r,{}),e.jsx(l,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(i,{name:"levelActivity",type:"radio",onChange:()=>a.setFieldValue("levelActivity",5),value:5}),e.jsx(r,{}),e.jsx(l,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})}),a.errors.levelActivity&&a.touched.levelActivity&&e.jsx(y,{children:a.errors.levelActivity})]}),e.jsx(k,{children:e.jsx(le,{htmlType:"submit",type:"primary",text:"Save",sizes:"extraSmall",disabled:!a.dirty})})]})})})},ge=()=>e.jsxs(ae,{children:[e.jsx(ie,{text:"Profile Settings"}),e.jsxs(te,{children:[e.jsx(ne,{}),e.jsx(he,{})]})]});export{ge as default};
