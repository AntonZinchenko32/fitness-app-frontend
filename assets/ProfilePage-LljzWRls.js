import{n as t,B as c,b as x,j as e,C as d}from"./index-NjD-pEKb.js";import{I as i}from"./Icon-QmYx75ku.js";const p=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,h=t.h2`
margin: 40px 0;
// text-align: center;
`,b=t.div`
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
`,u=t.div`
position: relative;
top: 15px;
`,g=t.button`
 padding: 0;
  border: none;
  background-color: transparent;

`,m=t.div`
margin: 40px 0 ;
display: flex;
justify-content: center;
gap: 14px;
`,o=t.div`
width: 157px;
height: 96px;
padding: 13px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: #E6533C;

display: flex;
justify-content: space-between;
flex-direction: column;
`,r=t.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`,s=t.p`
font-size: 12px;
color: rgba(239, 237, 232, 0.80);
line-height: 16px;
`,j=t.div`
display: flex;
gap: 8px;
justify-content: center;
`,l=t.p`
font-size: 18px;
font-weight: 700;
line-height: 20px;
`,f=t.p`
width: 310px;
color: rgba(239, 237, 232, 0.30);
font-size: 14px;
font-style: normal;
line-height: 18px; 
`,y=t(c)`
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
`,v=()=>{const[a,n]=x.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(p,{children:[e.jsx(h,{children:"Profile Settings"}),e.jsxs("div",{children:[e.jsxs(b,{children:[e.jsx(i,{name:"user",iconWidth:{mobile:"64px",tablet:"64px"},iconHeight:{mobile:"64px",tablet:"64px"}}),e.jsx(u,{children:e.jsx(g,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:e.jsx(i,{name:"add-foto",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"},stroke:a?"#efede8":"#e6533c"})})})]}),e.jsxs(m,{children:[e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(i,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(s,{children:"Daily calorie intake"})]}),e.jsx(l,{children:"0"})]}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(i,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),e.jsx(s,{children:"Daily physical activity"})]}),e.jsx(l,{children:"0 min"})]})]}),e.jsxs(j,{children:[e.jsx(i,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(f,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx("div",{children:e.jsx(y,{htmlType:"submit",type:"primary",children:"Save"})})]})]})})},w=()=>e.jsx(d,{children:e.jsx(v,{})});export{w as default};
