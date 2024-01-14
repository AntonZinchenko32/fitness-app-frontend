import{j as e,T as u,n as r,b as g,I as a,B as m,S as n,C as j}from"./index-DTxfbDWE.js";import{c as b,b as d,d as v,a as y,u as f}from"./index.esm--zpkwpKI.js";const W=({text:i})=>e.jsx(u,{children:i}),C=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,w=r.div`
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
`,k=r.div`
  position: relative;
  top: 15px;
`,q=r.div`
  position: relative;
  top: 10px;

  @media screen and (min-width: 769px) {
    top: 22px;
  }
`,A=r.button`
  padding: 0;
  border: none;
  background-color: transparent;
`,S=r.div`
  text-align: center;
`,B=r.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 4px;

  @media screen and (min-width: 769px) {
    font-size: 24px;
    line-height: 28px;
  }
`,F=r.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;
`,z=r.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  gap: 14px;
`,o=r.div`
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
`,h=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`,c=r.p`
  font-size: 12px;
  color: rgba(239, 237, 232, 0.8);
  line-height: 16px;
`,T=r.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`,x=r.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 769px) {
    font-size: 32px;
  }
`,R=r.p`
  width: 310px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 769px) {
    font-size: 16px;
    width: 410px;
  }
`,H=()=>{const[i,s]=g.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(C,{children:e.jsxs("div",{children:[e.jsxs(w,{children:[e.jsx(k,{children:e.jsx(a,{name:"user",iconWidth:{mobile:"64px",tablet:"102px"},iconHeight:{mobile:"64px",tablet:"102px"}})}),e.jsx(q,{children:e.jsx(A,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:e.jsx(a,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"32px"},iconHeight:{mobile:"24px",tablet:"32px"},stroke:i?"#efede8":"#e6533c"})})})]}),e.jsxs(S,{children:[e.jsx(B,{children:"Name Name"}),e.jsx(F,{children:"User"})]}),e.jsxs(z,{children:[e.jsxs(o,{children:[e.jsxs(h,{children:[e.jsx(a,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(c,{children:"Daily calorie intake"})]}),e.jsx(x,{children:"0"})]}),e.jsxs(o,{children:[e.jsxs(h,{children:[e.jsx(a,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(c,{children:"Daily physical activity"})]}),e.jsx(x,{children:"0 min"})]})]}),e.jsxs(T,{children:[e.jsx(a,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(R,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})]})})})},t=r.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin: 0 0 5px;
`,l=r.span`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 8px;
`,U=r.div`
  display: flex;
  gap: 8px;
`,D=r(m)`
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
`,I={height:0,currentWeight:0,desiredWeight:0,birthday:"",blood:null,sex:"",levelActivity:null},E=b({height:d().min(150,"minimum 150(cm)").required("Required field"),currentWeight:d().min(35,"minimum 35(kg)").required("Required field"),desiredWeight:d().min(35,"minimum 35(kg)").required("Required field"),birthday:v().max(new Date(Date.now()-567648e6),"You must be older than 18 years").required("Required field"),blood:d().required("Required field"),sex:y().required("Required field"),levelActivity:d().required("Required field")}),M=()=>{const i=f({initialValues:I,validationSchema:E,onSubmit:(s,p)=>{console.log("yes"),console.log(s),console.log(p)}});return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(t,{htmlFor:"name",children:"Name"}),e.jsx(n,{id:"name",name:"name",type:"text",placeholder:"name",bordercolor:"default"}),e.jsx(t,{htmlFor:"email",children:"Email"}),e.jsx(n,{id:"email",name:"name",type:"text",placeholder:"email",bordercolor:"default"}),e.jsxs("form",{onSubmit:i.handleSubmit,children:[e.jsx(t,{htmlFor:"height",children:"Height"}),e.jsx(n,{bordercolor:i.errors.height&&i.touched.height?"error":"default",id:"height",name:"height",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.height}),i.errors.height&&i.touched.height&&e.jsx("div",{children:i.errors.height}),e.jsx(t,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(n,{bordercolor:i.errors.currentWeight&&i.touched.currentWeight?"error":"default",id:"currentWeight",name:"currentWeight",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.currentWeight}),i.errors.currentWeight&&i.touched.currentWeight&&e.jsx("div",{children:i.errors.currentWeight}),e.jsx(t,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(n,{bordercolor:i.errors.desiredWeight&&i.touched.desiredWeight?"error":"default",id:"desiredWeight",name:"desiredWeight",type:"number",placeholder:"0",onChange:i.handleChange,value:i.values.desiredWeight}),i.errors.desiredWeight&&i.touched.desiredWeight&&e.jsx("div",{children:i.errors.desiredWeight}),e.jsx(t,{htmlFor:"birthday",children:"Date of birth"}),e.jsx(n,{bordercolor:i.errors.birthday&&i.touched.birthday?"error":"default",id:"birthday",name:"birthday",type:"date",placeholder:"0",onChange:i.handleChange,value:i.values.birthday}),i.errors.birthday&&i.touched.birthday&&e.jsx("div",{children:i.errors.birthday}),e.jsx(t,{children:"Blood"}),e.jsxs(U,{children:[e.jsxs("label",{children:[e.jsx("input",{name:"blood",type:"radio",onChange:i.handleChange,value:1}),e.jsx(l,{children:"1"})]}),e.jsxs("label",{children:[e.jsx("input",{name:"blood",type:"radio",onChange:i.handleChange,value:2}),e.jsx(l,{children:"2"})]}),e.jsxs("label",{children:[e.jsx("input",{name:"blood",type:"radio",onChange:i.handleChange,value:3}),e.jsx(l,{children:"3"})]}),e.jsxs("label",{children:[e.jsx("input",{name:"blood",type:"radio",onChange:i.handleChange,value:4}),e.jsx(l,{children:"4"})]}),i.errors.blood&&i.touched.blood&&e.jsx("div",{children:i.errors.blood})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{name:"sex",type:"radio",onChange:i.handleChange,value:"male"}),e.jsx(l,{children:"Male"})]}),e.jsxs("label",{children:[e.jsx("input",{name:"sex",type:"radio",onChange:i.handleChange,value:"female"}),e.jsx(l,{children:"Female"})]}),i.errors.sex&&i.touched.sex&&e.jsx("div",{children:i.errors.sex})]}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:1}),"Sedentary lifestyle (little or no physical activity)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:2}),"Light activity (light exercises/sports 1-3 days per week)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:3}),"Moderately active (moderate exercises/sports 3-5 days per week)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:4}),"Very active (intense exercises/sports 6-7 days per week)"]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{name:"levelActivity",type:"radio",onChange:i.handleChange,value:5}),"Extremely active (very strenuous exercises/sports and physical work)"]})}),i.errors.levelActivity&&i.touched.levelActivity&&e.jsx("div",{children:i.errors.levelActivity})]}),e.jsx(D,{htmlType:"submit",type:"primary",children:"Save"})]})]})})},$=()=>e.jsxs(j,{children:[e.jsx(W,{text:"Profile Settings"}),e.jsx(H,{}),e.jsx(M,{})]});export{$ as default};
