import{x as H,h as L,j as e,y as D,z as P,A as f,D as C,E as M,a as j,U as $,G as O,H as q,J as z,K as N,M as G,O as A,Q as F,R as B,S,V as J,X as K,Y as Q,Z as X,_ as R,$ as V,a0 as h,a1 as c,a2 as o,a3 as I,a4 as p,a5 as Y,a6 as Z,a7 as _,a8 as T,a9 as U,aa as a,ab as r,ac as i,ad as l,ae as y,af as k,ag as ee,e as se,ah as te}from"./index-94NJaBc3.js";import{P as ae}from"./PageTitle-GXt4RLK3.js";import{u as re}from"./formik.esm-3UQaV61I.js";import{P as ie}from"./PrimaryButton-PvxGG62d.js";const le=async s=>{try{return await s()}catch(n){return n instanceof Error?n.message:"An error occurred"}},ne=()=>{const[s,n]=H.useState(!1),{user:t}=L(),u=async g=>{const x=new FormData;x.append("avatar",g.target.files[0]);const v=await R({method:"post",url:"/users/avatars",data:x,config:{headers:{"Content-Type":"multipart/form-data"}}});console.log(v)};return e.jsx(e.Fragment,{children:e.jsxs(D,{children:[e.jsxs(P,{children:[e.jsx(f,{children:t!=null&&t.avatarURL?e.jsx(C,{children:e.jsx(M,{src:t==null?void 0:t.avatarURL,alt:"Avatar"})}):e.jsx(C,{children:e.jsx(j,{name:"user",iconWidth:{mobile:"64px",tablet:"102px"},iconHeight:{mobile:"64px",tablet:"102px"}})})}),e.jsx($,{children:e.jsx("form",{id:"file",children:e.jsxs("label",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[e.jsx(j,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"32px"},iconHeight:{mobile:"24px",tablet:"32px"},stroke:s?"#efede8":"#e6533c"}),e.jsx(O,{id:"file",name:"file",type:"file",onChange:u})]})})})]}),e.jsxs(q,{children:[e.jsx(z,{children:t.name}),e.jsx(N,{children:"User"})]}),e.jsxs(G,{children:[e.jsxs(A,{children:[e.jsxs(F,{children:[e.jsx(j,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(B,{children:"Daily calorie intake"})]}),e.jsx(S,{children:t.dailyCalories||0})]}),e.jsxs(A,{children:[e.jsxs(F,{children:[e.jsx(j,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(B,{children:"Daily physical activity"})]}),e.jsxs(S,{children:[t.dailyActivity||0,e.jsx("span",{children:" min"})]})]})]}),e.jsxs(J,{children:[e.jsx(j,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(K,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx(Q,{children:e.jsx(X,{})})]})})},de=({formik:s,user:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"name",children:"Name"}),e.jsx(o,{id:"name",name:"name",type:"text",bordercolor:"default",onChange:s.handleChange,value:s.values.name})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"email",children:"Email"}),e.jsx(o,{id:"email",name:"email",type:"text",placeholder:n.email,bordercolor:"default",disabled:!0})]})]}),e.jsxs(V,{children:[e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"height",children:"Height"}),e.jsx(o,{bordercolor:s.errors.height&&s.touched.height?"error":"default",id:"height",name:"height",type:"number",onChange:s.handleChange,value:s.values.height}),s.errors.height&&s.touched.height&&e.jsx(p,{children:s.errors.height})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(o,{bordercolor:s.errors.currentWeight&&s.touched.currentWeight?"error":"default",id:"currentWeight",name:"currentWeight",type:"number",onChange:s.handleChange,value:s.values.currentWeight}),s.errors.currentWeight&&s.touched.currentWeight&&e.jsx(p,{children:s.errors.currentWeight})]})]}),e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx(c,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(o,{bordercolor:s.errors.desiredWeight&&s.touched.desiredWeight?"error":"default",id:"desiredWeight",name:"desiredWeight",type:"number",onChange:s.handleChange,value:s.values.desiredWeight}),s.errors.desiredWeight&&s.touched.desiredWeight&&e.jsx(p,{children:s.errors.desiredWeight})]}),e.jsxs(h,{children:[e.jsx(c,{htmlFor:"birthday",children:"Date of birth"}),e.jsx(o,{bordercolor:s.errors.birthday&&s.touched.birthday?"error":"default",id:"birthday",name:"birthday",type:"date",onChange:s.handleChange,value:s.values.birthday}),s.errors.birthday&&s.touched.birthday&&e.jsx(p,{children:s.errors.birthday})]})]})]})]}),he=()=>{var u,g,x,v,b,m,W;const{user:s}=L(),n={name:(s==null?void 0:s.name)||"",height:((u=s==null?void 0:s.settings)==null?void 0:u.height)||0,currentWeight:((g=s==null?void 0:s.settings)==null?void 0:g.currentWeight)||0,desiredWeight:((x=s==null?void 0:s.settings)==null?void 0:x.desiredWeight)||0,birthday:((v=s==null?void 0:s.settings)==null?void 0:v.birthday.split("T")[0])||"",blood:((b=s==null?void 0:s.settings)==null?void 0:b.blood)||null,sex:((m=s==null?void 0:s.settings)==null?void 0:m.sex)||"",levelActivity:((W=s==null?void 0:s.settings)==null?void 0:W.levelActivity)||null},t=re({initialValues:n,validationSchema:ee,onSubmit:async d=>{const w={name:d.name,height:d.height,currentWeight:d.currentWeight,desiredWeight:d.desiredWeight,birthday:d.birthday,blood:d.blood,sex:d.sex,levelActivity:d.levelActivity},E=await R({method:"patch",url:"/users",data:w});le(E)}});return e.jsx(e.Fragment,{children:e.jsx(Y,{children:e.jsxs("form",{onSubmit:t.handleSubmit,children:[e.jsx(de,{formik:t,user:s}),e.jsx(Z,{children:"Blood"}),e.jsxs(_,{children:[e.jsxs(T,{children:[e.jsxs(U,{children:[e.jsxs(a,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",1),checked:t.values.blood===1,value:1}),e.jsx(i,{}),e.jsx(l,{children:"1"})]}),e.jsxs(a,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",2),checked:t.values.blood===2,value:2}),e.jsx(i,{}),e.jsx(l,{children:"2"})]}),e.jsxs(a,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",3),checked:t.values.blood===3,value:3}),e.jsx(i,{}),e.jsx(l,{children:"3"})]}),e.jsxs(a,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:()=>t.setFieldValue("blood",4),checked:t.values.blood===4,value:4}),e.jsx(i,{}),e.jsx(l,{children:"4"})]})]}),t.errors.blood&&t.touched.blood&&e.jsx(y,{children:t.errors.blood})]}),e.jsxs(T,{children:[e.jsxs(U,{children:[e.jsxs(a,{children:[e.jsx(r,{name:"sex",type:"radio",onChange:t.handleChange,checked:t.values.sex==="male",value:"male"}),e.jsx(i,{}),e.jsx(l,{children:"Male"})]}),e.jsxs(a,{children:[e.jsx(r,{name:"sex",type:"radio",onChange:t.handleChange,checked:t.values.sex==="female",value:"female"}),e.jsx(i,{}),e.jsx(l,{children:"Female"})]})]}),t.errors.sex&&t.touched.sex&&e.jsx(y,{children:t.errors.sex})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs(a,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",1),checked:t.values.levelActivity===1,value:1}),e.jsx(i,{}),e.jsx(l,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx("div",{children:e.jsxs(a,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",2),checked:t.values.levelActivity===2,value:2}),e.jsx(i,{}),e.jsx(l,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx("div",{children:e.jsxs(a,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",3),checked:t.values.levelActivity===3,value:3}),e.jsx(i,{}),e.jsx(l,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx("div",{children:e.jsxs(a,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",4),checked:t.values.levelActivity===4,value:4}),e.jsx(i,{}),e.jsx(l,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx("div",{children:e.jsxs(a,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:()=>t.setFieldValue("levelActivity",5),value:5}),e.jsx(i,{}),e.jsx(l,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})}),t.errors.levelActivity&&t.touched.levelActivity&&e.jsx(y,{children:t.errors.levelActivity})]}),e.jsx(k,{children:e.jsx(ie,{htmlType:"submit",type:"primary",text:"Save",sizes:"extraSmall",disabled:!t.dirty})})]})})})},ue=()=>e.jsxs(se,{children:[e.jsx(ae,{text:"Profile Settings"}),e.jsxs(te,{children:[e.jsx(ne,{}),e.jsx(he,{})]})]});export{ue as default};
