import{h as H,i as U,j as e,W as D,k as R,m as w,o as x,U as E,p as I,q as L,s as P,t as M,v as q,w as W,x as k,y as C,z as A,A as N,D as z,g as G,E as J,F as f,L as o,G as n,S as c,H as F,J as h,K,R as S,M as V,O as r,P as t,Q as l,V as a,X as O,Y as Q,Z as X,c as Y,_ as Z}from"./index-VAh8bqNJ.js";import{P as _}from"./PageTitle-u4FycKhg.js";import{u as $}from"./formik.esm-M0fylz1E.js";const ee=()=>{const[s,j]=H.useState(!1),i=U(u=>u.auth.user);return e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(R,{children:[e.jsx(w,{children:e.jsx(x,{name:"user",iconWidth:{mobile:"64px",tablet:"102px"},iconHeight:{mobile:"64px",tablet:"102px"}})}),e.jsx(E,{children:e.jsx(I,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:e.jsx(x,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"32px"},iconHeight:{mobile:"24px",tablet:"32px"},stroke:s?"#efede8":"#e6533c"})})})]}),e.jsxs(L,{children:[e.jsx(P,{children:i.name}),e.jsx(M,{children:"User"})]}),e.jsxs(q,{children:[e.jsxs(W,{children:[e.jsxs(k,{children:[e.jsx(x,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(C,{children:"Daily calorie intake"})]}),e.jsx(A,{children:i.dailyCalories||0})]}),e.jsxs(W,{children:[e.jsxs(k,{children:[e.jsx(x,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(C,{children:"Daily physical activity"})]}),e.jsxs(A,{children:[i.dailyActivity||0,e.jsx("span",{children:" min"})]})]})]}),e.jsxs(N,{children:[e.jsx(x,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(z,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})]})})})},ie=()=>{var u,m,v,g,p,y,b;const{user:s}=G(),j={name:(s==null?void 0:s.name)||"",height:((u=s==null?void 0:s.settings)==null?void 0:u.height)||0,currentWeight:((m=s==null?void 0:s.settings)==null?void 0:m.currentWeight)||0,desiredWeight:((v=s==null?void 0:s.settings)==null?void 0:v.desiredWeight)||0,birthday:((g=s==null?void 0:s.settings)==null?void 0:g.birthday.split("T")[0])||"2000-10-10",blood:((p=s==null?void 0:s.settings)==null?void 0:p.blood)||null,sex:((y=s==null?void 0:s.settings)==null?void 0:y.sex)||"",levelActivity:((b=s==null?void 0:s.settings)==null?void 0:b.levelActivity)||null},i=$({initialValues:j,validationSchema:Q,onSubmit:async d=>{const B={name:d.name,height:d.height,currentWeight:d.currentWeight,desiredWeight:d.desiredWeight,birthday:d.birthday,blood:d.blood,sex:d.sex,levelActivity:d.levelActivity};try{await X({method:"patch",url:"/users",data:B})}catch(T){console.log(T)}}});return e.jsx(e.Fragment,{children:e.jsx(J,{children:e.jsxs("form",{onSubmit:i.handleSubmit,children:[e.jsxs(f,{children:[e.jsxs(o,{children:[e.jsx(n,{htmlFor:"name",children:"Name"}),e.jsx(c,{id:"name",name:"name",type:"text",bordercolor:"default",onChange:i.handleChange,value:i.values.name})]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(c,{id:"email",name:"email",type:"text",placeholder:s.email,bordercolor:"default",disabled:!0})]})]}),e.jsxs(f,{children:[e.jsxs(F,{children:[e.jsxs(o,{children:[e.jsx(n,{htmlFor:"height",children:"Height"}),e.jsx(c,{bordercolor:i.errors.height&&i.touched.height?"error":"default",id:"height",name:"height",type:"number",onChange:i.handleChange,value:i.values.height}),i.errors.height&&i.touched.height&&e.jsx(h,{children:i.errors.height})]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(c,{bordercolor:i.errors.currentWeight&&i.touched.currentWeight?"error":"default",id:"currentWeight",name:"currentWeight",type:"number",onChange:i.handleChange,value:i.values.currentWeight}),i.errors.currentWeight&&i.touched.currentWeight&&e.jsx(h,{children:i.errors.currentWeight})]})]}),e.jsxs(F,{children:[e.jsxs(o,{children:[e.jsx(n,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(c,{bordercolor:i.errors.desiredWeight&&i.touched.desiredWeight?"error":"default",id:"desiredWeight",name:"desiredWeight",type:"number",onChange:i.handleChange,value:i.values.desiredWeight}),i.errors.desiredWeight&&i.touched.desiredWeight&&e.jsx(h,{children:i.errors.desiredWeight})]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"birthday",children:"Date of birth"}),e.jsx(c,{bordercolor:i.errors.birthday&&i.touched.birthday?"error":"default",id:"birthday",name:"birthday",type:"date",onChange:i.handleChange,value:i.values.birthday}),i.errors.birthday&&i.touched.birthday&&e.jsx(h,{children:i.errors.birthday})]})]})]}),e.jsx(n,{children:"Blood"}),e.jsxs(K,{children:[e.jsxs(S,{children:[e.jsxs(V,{children:[e.jsxs(r,{children:[e.jsx(t,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",1),checked:i.values.blood===1,value:1}),e.jsx(l,{}),e.jsx(a,{children:"1"})]}),e.jsxs(r,{children:[e.jsx(t,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",2),checked:i.values.blood===2,value:2}),e.jsx(l,{}),e.jsx(a,{children:"2"})]}),e.jsxs(r,{children:[e.jsx(t,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",3),checked:i.values.blood===3,value:3}),e.jsx(l,{}),e.jsx(a,{children:"3"})]}),e.jsxs(r,{children:[e.jsx(t,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",4),checked:i.values.blood===4,value:4}),e.jsx(l,{}),e.jsx(a,{children:"4"})]})]}),i.errors.blood&&i.touched.blood&&e.jsx(h,{children:i.errors.blood})]}),e.jsxs(S,{children:[e.jsxs(V,{children:[e.jsxs(r,{children:[e.jsx(t,{name:"sex",type:"radio",onChange:i.handleChange,checked:i.values.sex==="male",value:"male"}),e.jsx(l,{}),e.jsx(a,{children:"Male"})]}),e.jsxs(r,{children:[e.jsx(t,{name:"sex",type:"radio",onChange:i.handleChange,checked:i.values.sex==="female",value:"female"}),e.jsx(l,{}),e.jsx(a,{children:"Female"})]})]}),i.errors.sex&&i.touched.sex&&e.jsx(h,{children:i.errors.sex})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(t,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",1),checked:i.values.levelActivity===1,value:1}),e.jsx(l,{}),e.jsx(a,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(t,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",2),checked:i.values.levelActivity===2,value:2}),e.jsx(l,{}),e.jsx(a,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(t,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",3),checked:i.values.levelActivity===3,value:3}),e.jsx(l,{}),e.jsx(a,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(t,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",4),checked:i.values.levelActivity===4,value:4}),e.jsx(l,{}),e.jsx(a,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx("div",{children:e.jsxs(r,{children:[e.jsx(t,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",5),value:5}),e.jsx(l,{}),e.jsx(a,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})}),i.errors.levelActivity&&i.touched.levelActivity&&e.jsx(h,{children:i.errors.levelActivity})]}),e.jsx(O,{htmlType:"submit",type:"primary",children:"Save"})]})})})},le=()=>e.jsxs(Y,{children:[e.jsx(_,{text:"Profile Settings"}),e.jsxs(Z,{children:[e.jsx(ee,{}),e.jsx(ie,{})]})]});export{le as default};
