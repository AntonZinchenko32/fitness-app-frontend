import{n as t,b as y,j as e,I as h,B as f,S as o,c as W,C as w}from"./index-lmvRKozl.js";import{P as C}from"./PageTitle-3atxyyTE.js";import{c as k,a as p,b as c,d as A,u as F}from"./index.esm-EGpk0IHI.js";const q=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,R=t.div`
  width: 90px;
  height: 90px;
  border: 2px solid #e6533c;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;

  @media screen and (min-width: 769px) {
    width: 150px;
    height: 150px;
    margin: 22px auto 30px;
  }
`,S=t.div`
  position: relative;
  top: 15px;
`,V=t.div`
  position: relative;
  top: 10px;

  @media screen and (min-width: 769px) {
    top: 22px;
  }
`,B=t.button`
  padding: 0;
  border: none;
  background-color: transparent;
`,z=t.div`
  text-align: center;
`,D=t.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 4px;

  @media screen and (min-width: 769px) {
    font-size: 24px;
    line-height: 28px;
  }
`,H=t.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;
`,T=t.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 14px;
`,u=t.div`
  width: 157px;
  height: 96px;
  padding: 13px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #e6533c;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
  }
`,g=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`,m=t.p`
  font-size: 12px;
  color: rgba(239, 237, 232, 0.8);
  line-height: 16px;
`,U=t.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`,j=t.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 769px) {
    font-size: 32px;
  }
`,I=t.p`
  width: 310px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: 16px;
    width: 410px;
  }
`,E=()=>{const[i,r]=y.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(q,{children:e.jsxs("div",{children:[e.jsxs(R,{children:[e.jsx(S,{children:e.jsx(h,{name:"user",iconWidth:{mobile:"64px",tablet:"102px"},iconHeight:{mobile:"64px",tablet:"102px"}})}),e.jsx(V,{children:e.jsx(B,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:e.jsx(h,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"32px"},iconHeight:{mobile:"24px",tablet:"32px"},stroke:i?"#efede8":"#e6533c"})})})]}),e.jsxs(z,{children:[e.jsx(D,{children:"Name Name"}),e.jsx(H,{children:"User"})]}),e.jsxs(T,{children:[e.jsxs(u,{children:[e.jsxs(g,{children:[e.jsx(h,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(m,{children:"Daily calorie intake"})]}),e.jsx(j,{children:"0"})]}),e.jsxs(u,{children:[e.jsxs(g,{children:[e.jsx(h,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(m,{children:"Daily physical activity"})]}),e.jsx(j,{children:"0 min"})]})]}),e.jsxs(U,{children:[e.jsx(h,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(I,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})]})})})},a=t.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin: 0 0 5px;
`,P=t.div`
  display: flex;
  gap: 21px;
  margin: 0 0 32px;
`,v=t.div`
  position: relative;
  display: flex;
  gap: 8px;
`,n=t.label`
  display: flex;
  height: 28px;
`,d=t.input`
  position: relative;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + span {
    border: 2px solid #ef8964;
  }
  &:checked + span:after {
    opacity: 1;
  }
`,s=t.span`
  top: 0px;
  left: 0px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid #9a9a9a;
  border-radius: 50%;
  display: flex;
  position: relative;
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #ef8964;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`,l=t.span`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 8px;
`,$=t(f)`
  width: 115px;
  height: 42px;
  border: none;
  background-color: #e6533c;
  color: #efede8;
  margin-top: 64px;
  // padding: 12px 40px;

  &:hover,
  &:focus {
    background-color: #ef8964;
  }
`,L={name:"",height:0,currentWeight:0,desiredWeight:0,birthday:"",blood:null,sex:"",levelActivity:null},M=k({name:p().required("Required field"),height:c().min(150,"minimum 150(cm)").required("Required field"),currentWeight:c().min(35,"minimum 35(kg)").required("Required field"),desiredWeight:c().min(35,"minimum 35(kg)").required("Required field"),birthday:A().max(new Date(Date.now()-567648e6),"You must be older than 18 years").required("Required field"),blood:c().required("Required field"),sex:p().required("Required field"),levelActivity:c().required("Required field")}),N=()=>{const i=F({initialValues:L,validationSchema:M,onSubmit:async r=>{const b={name:r.name,height:r.height,currentWeight:r.currentWeight,desiredWeight:r.desiredWeight,birthday:r.birthday,blood:r.blood,sex:r.sex,levelActivity:r.levelActivity};try{const{data:x}=await W({method:"patch",url:"/users",data:b});console.log(x)}catch(x){console.log(x)}}});return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs("form",{onSubmit:i.handleSubmit,children:[e.jsx(a,{htmlFor:"name",children:"Name"}),e.jsx(o,{id:"name",name:"name",type:"text",placeholder:"name",bordercolor:"default",onChange:i.handleChange,value:i.values.name}),e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(o,{id:"email",name:"email",type:"text",placeholder:"email",bordercolor:"default"}),e.jsx(a,{htmlFor:"height",children:"Height"}),e.jsx(o,{bordercolor:i.errors.height&&i.touched.height?"error":"default",id:"height",name:"height",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.height}),i.errors.height&&i.touched.height&&e.jsx("div",{children:i.errors.height}),e.jsx(a,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(o,{bordercolor:i.errors.currentWeight&&i.touched.currentWeight?"error":"default",id:"currentWeight",name:"currentWeight",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.currentWeight}),i.errors.currentWeight&&i.touched.currentWeight&&e.jsx("div",{children:i.errors.currentWeight}),e.jsx(a,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(o,{bordercolor:i.errors.desiredWeight&&i.touched.desiredWeight?"error":"default",id:"desiredWeight",name:"desiredWeight",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.desiredWeight}),i.errors.desiredWeight&&i.touched.desiredWeight&&e.jsx("div",{children:i.errors.desiredWeight}),e.jsx(a,{htmlFor:"birthday",children:"Date of birth"}),e.jsx(o,{bordercolor:i.errors.birthday&&i.touched.birthday?"error":"default",id:"birthday",name:"birthday",type:"date",placeholder:"0",onChange:i.handleChange,value:i.values.birthday}),i.errors.birthday&&i.touched.birthday&&e.jsx("div",{children:i.errors.birthday}),e.jsx(a,{children:"Blood"}),e.jsxs(P,{children:[e.jsxs(v,{children:[e.jsxs(n,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",1),value:1}),e.jsx(s,{}),e.jsx(l,{children:"1"})]}),e.jsxs(n,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",2),value:2}),e.jsx(s,{}),e.jsx(l,{children:"2"})]}),e.jsxs(n,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",3),value:3}),e.jsx(s,{}),e.jsx(l,{children:"3"})]}),e.jsxs(n,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",4),value:4}),e.jsx(s,{}),e.jsx(l,{children:"4"})]}),i.errors.blood&&i.touched.blood&&e.jsx("div",{children:i.errors.blood})]}),e.jsxs(v,{children:[e.jsxs(n,{children:[e.jsx(d,{name:"sex",type:"radio",onChange:i.handleChange,value:"male"}),e.jsx(s,{}),e.jsx(l,{children:"Male"})]}),e.jsxs(n,{children:[e.jsx(d,{name:"sex",type:"radio",onChange:i.handleChange,value:"female"}),e.jsx(s,{}),e.jsx(l,{children:"Female"})]}),i.errors.sex&&i.touched.sex&&e.jsx("div",{children:i.errors.sex})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(d,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",1),value:1}),e.jsx(s,{}),e.jsx(l,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(d,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",2),value:2}),e.jsx(s,{}),e.jsx(l,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(d,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",3),value:3}),e.jsx(s,{}),e.jsx(l,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(d,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",4),value:4}),e.jsx(s,{}),e.jsx(l,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(d,{name:"levelActivity",type:"radio",onChange:()=>i.setFieldValue("levelActivity",5),value:5}),e.jsx(s,{}),e.jsx(l,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})}),i.errors.levelActivity&&i.touched.levelActivity&&e.jsx("div",{children:i.errors.levelActivity})]}),e.jsx($,{htmlType:"submit",type:"primary",children:"Save"})]})})})},K=()=>e.jsxs(w,{children:[e.jsx(C,{text:"Profile Settings"}),e.jsx(E,{}),e.jsx(N,{})]});export{K as default};
