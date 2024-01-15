import{n as r,b,j as e,I as s,B as v,S as n,C as y}from"./index-rlror1fa.js";import{P as f}from"./PageTitle-fxiHZZOP.js";import{c as W,b as h,d as C,a as w,u as k}from"./index.esm-fwU-Ua-2.js";const q=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,F=r.div`
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
`,A=r.div`
  position: relative;
  top: 15px;
`,S=r.div`
  position: relative;
  top: 10px;

  @media screen and (min-width: 769px) {
    top: 22px;
  }
`,B=r.button`
  padding: 0;
  border: none;
  background-color: transparent;
`,R=r.div`
  text-align: center;
`,z=r.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 4px;

  @media screen and (min-width: 769px) {
    font-size: 24px;
    line-height: 28px;
  }
`,H=r.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;
`,T=r.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 14px;
`,x=r.div`
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
`,p=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`,u=r.p`
  font-size: 12px;
  color: rgba(239, 237, 232, 0.8);
  line-height: 16px;
`,U=r.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`,g=r.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 769px) {
    font-size: 32px;
  }
`,D=r.p`
  width: 310px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: 16px;
    width: 410px;
  }
`,I=()=>{const[i,c]=b.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(q,{children:e.jsxs("div",{children:[e.jsxs(F,{children:[e.jsx(A,{children:e.jsx(s,{name:"user",iconWidth:{mobile:"64px",tablet:"102px"},iconHeight:{mobile:"64px",tablet:"102px"}})}),e.jsx(S,{children:e.jsx(B,{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:e.jsx(s,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"32px"},iconHeight:{mobile:"24px",tablet:"32px"},stroke:i?"#efede8":"#e6533c"})})})]}),e.jsxs(R,{children:[e.jsx(z,{children:"Name Name"}),e.jsx(H,{children:"User"})]}),e.jsxs(T,{children:[e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(s,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(u,{children:"Daily calorie intake"})]}),e.jsx(g,{children:"0"})]}),e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(s,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(u,{children:"Daily physical activity"})]}),e.jsx(g,{children:"0 min"})]})]}),e.jsxs(U,{children:[e.jsx(s,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(D,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})]})})})},t=r.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin: 0 0 5px;
`,m=r.div`
  position: relative;
  display: flex;
  gap: 8px;
`,o=r.label`
  display: flex;
  height: 20px;
`,d=r.input`
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
`,a=r.span`
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
`,l=r.span`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 8px;
`,V=r(v)`
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
`,E={height:0,currentWeight:0,desiredWeight:0,birthday:"",blood:null,sex:"",levelActivity:null},P=W({height:h().min(150,"minimum 150(cm)").required("Required field"),currentWeight:h().min(35,"minimum 35(kg)").required("Required field"),desiredWeight:h().min(35,"minimum 35(kg)").required("Required field"),birthday:C().max(new Date(Date.now()-567648e6),"You must be older than 18 years").required("Required field"),blood:h().required("Required field"),sex:w().required("Required field"),levelActivity:h().required("Required field")}),L=()=>{const i=k({initialValues:E,validationSchema:P,onSubmit:(c,j)=>{console.log("yes"),console.log(c),console.log(j)}});return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(t,{htmlFor:"name",children:"Name"}),e.jsx(n,{id:"name",name:"name",type:"text",placeholder:"name",bordercolor:"default"}),e.jsx(t,{htmlFor:"email",children:"Email"}),e.jsx(n,{id:"email",name:"name",type:"text",placeholder:"email",bordercolor:"default"}),e.jsxs("form",{onSubmit:i.handleSubmit,children:[e.jsx(t,{htmlFor:"height",children:"Height"}),e.jsx(n,{bordercolor:i.errors.height&&i.touched.height?"error":"default",id:"height",name:"height",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.height}),i.errors.height&&i.touched.height&&e.jsx("div",{children:i.errors.height}),e.jsx(t,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(n,{bordercolor:i.errors.currentWeight&&i.touched.currentWeight?"error":"default",id:"currentWeight",name:"currentWeight",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.currentWeight}),i.errors.currentWeight&&i.touched.currentWeight&&e.jsx("div",{children:i.errors.currentWeight}),e.jsx(t,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(n,{bordercolor:i.errors.desiredWeight&&i.touched.desiredWeight?"error":"default",id:"desiredWeight",name:"desiredWeight",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.desiredWeight}),i.errors.desiredWeight&&i.touched.desiredWeight&&e.jsx("div",{children:i.errors.desiredWeight}),e.jsx(t,{htmlFor:"birthday",children:"Date of birth"}),e.jsx(n,{bordercolor:i.errors.birthday&&i.touched.birthday?"error":"default",id:"birthday",name:"birthday",type:"date",placeholder:"0",onChange:i.handleChange,value:i.values.birthday}),i.errors.birthday&&i.touched.birthday&&e.jsx("div",{children:i.errors.birthday}),e.jsx(t,{children:"Blood"}),e.jsxs(m,{children:[e.jsxs(o,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",1),value:1}),e.jsx(a,{}),e.jsx(l,{children:"1"})]}),e.jsxs(o,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",2),value:2}),e.jsx(a,{}),e.jsx(l,{children:"2"})]}),e.jsxs(o,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",3),value:3}),e.jsx(a,{}),e.jsx(l,{children:"3"})]}),e.jsxs(o,{children:[e.jsx(d,{name:"blood",type:"radio",onChange:()=>i.setFieldValue("blood",4),value:4}),e.jsx(a,{}),e.jsx(l,{children:"4"})]}),i.errors.blood&&i.touched.blood&&e.jsx("div",{children:i.errors.blood})]}),e.jsxs(m,{children:[e.jsxs(o,{children:[e.jsx(d,{name:"sex",type:"radio",onChange:i.handleChange,value:"male"}),e.jsx(a,{}),e.jsx(l,{children:"Male"})]}),e.jsxs(o,{children:[e.jsx(d,{name:"sex",type:"radio",onChange:i.handleChange,value:"female"}),e.jsx(a,{}),e.jsx(l,{children:"Female"})]}),i.errors.sex&&i.touched.sex&&e.jsx("div",{children:i.errors.sex})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:1}),"Sedentary lifestyle (little or no physical activity)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:2}),"Light activity (light exercises/sports 1-3 days per week)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:3}),"Moderately active (moderate exercises/sports 3-5 days per week)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:4}),"Very active (intense exercises/sports 6-7 days per week)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:5}),"Extremely active (very strenuous exercises/sports and physical work)"]})}),i.errors.levelActivity&&i.touched.levelActivity&&e.jsx("div",{children:i.errors.levelActivity})]}),e.jsx(V,{htmlType:"submit",type:"primary",children:"Save"})]})]})})},Y=()=>e.jsxs(y,{children:[e.jsx(f,{text:"Profile Settings"}),e.jsx(I,{}),e.jsx(L,{})]});export{Y as default};
