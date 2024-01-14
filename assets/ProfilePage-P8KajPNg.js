import{n as t,B as c,b as x,j as e,C as l}from"./index-iz7jYxxu.js";import{I as n}from"./Icon-IYTW5-z8.js";const p=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,h=t.h2`
margin: 40px 0;
// text-align: center;
`,u=t.div`
width: 90px;
height: 90px;
border: 2px solid #E6533C;
border-radius: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto ;
padding: 6px 0 0
`,g=t.div`
position: relative;
top: 15px;
`,j=t.button`
 padding: 0;
  border: none;
  background-color: transparent;

`,f=t.div`
margin: 40px 0 ;
display: flex;
justify-content: center;
gap: 14px;
`,r=t.div`
width: 157px;
height: 96px;
padding: 13px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: #E6533C;

display: flex;
justify-content: space-between;
flex-direction: column;
`,o=t.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`,s=t.p`
font-size: 12px;
color: rgba(239, 237, 232, 0.80);
line-height: 16px;
`,m=t.div`
display: flex;
gap: 8px;
justify-content: center;
`,a=t.p`
font-size: 18px;
font-weight: 700;
line-height: 20px;
`,y=t.p`
width: 310px;
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
font-style: normal;
line-height: 18px; 
`,b=t(c)`
width: 115px;
height: 42px;
border: none;
background-color: #e6533c;
color: #EFEDE8;
// margin-top: 64px;
// padding: 12px 40px;

  &:hover,
  &:focus {
    background-color:#EF8964;
  }
`,v=()=>{const[d,i]=x.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(p,{children:[e.jsx(h,{children:"Profile Settings"}),e.jsxs("div",{children:[e.jsxs(u,{children:[e.jsx(n,{name:"user",width:"64px",height:"64px"}),e.jsx(g,{children:e.jsx(j,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:e.jsx(n,{name:"add-foto",width:"24px",height:"24px",stroke:d?"#efede8":"#e6533c"})})})]}),e.jsxs(f,{children:[e.jsxs(r,{children:[e.jsxs(o,{children:[e.jsx(n,{name:"food",width:"20px",height:"20px"}),e.jsx(s,{children:"Daily calorie intake"})]}),e.jsx(a,{children:"0"})]}),e.jsxs(r,{children:[e.jsxs(o,{children:[e.jsx(n,{name:"dumbbell",width:"20px",height:"20px"}),e.jsx(s,{children:"Daily physical activity"})]}),e.jsx(a,{children:"0 min"})]})]}),e.jsxs(m,{children:[e.jsx(n,{name:"warning",width:"24px",height:"24px"}),e.jsx(y,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx("div",{children:e.jsx(b,{htmlType:"submit",type:"primary",children:"Save"})})]})]})})},B=()=>e.jsx(l,{children:e.jsx(v,{})});export{B as default};
