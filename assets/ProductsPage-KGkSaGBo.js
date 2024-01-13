import{r as o,j as e,D as j,a as m,b as f,I as w,T as E,c as S,S as v,d as I,A as g,e as F,f as y,h as D,i as C,k as B,l as c,m as d,o as l,n as x,C as u}from"./index-P-idwfza.js";import{S as N}from"./InputPrimary.styled-z-XLOWoD.js";import{I as a}from"./Icon-ZQx7ADUN.js";const p=({children:t,items:n})=>{const[s,r]=o.useState(!1);return e.jsxs(j,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[t,e.jsx(a,{name:"chevron",width:"18px",stroke:s?"#E6533C":"#EFEDE8"}),e.jsx(m,{visible:s,children:n.map((i,h)=>e.jsx(f,{children:i},h))})]})},R=({recommended:t})=>{const[n,s]=o.useState(!1),[r,i]=o.useState(!1);return e.jsxs(w,{children:[e.jsxs(E,{children:[e.jsx(S,{children:"DIET"}),e.jsxs(v,{children:[e.jsx(I,{recommended:t}),t?"Recommended":"Not recommended"]}),e.jsxs(g,{type:"text",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onFocus:()=>i(!0),onBlur:()=>i(!1),children:["Add",e.jsx(a,{name:"arrow-secondary",width:"16px",stroke:n||r?"#efede8":"#e6533c"})]})]}),e.jsxs(F,{children:[e.jsxs(y,{children:[e.jsx(D,{children:e.jsx(a,{name:"running",width:"18px",fill:"#EFEDE8",stroke:"#EFEDE8"})}),e.jsx(C,{children:"Rice semolina Garnets gluten-free"})]}),e.jsxs(B,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Calories:"}),e.jsx(l,{children:"340"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Category:"}),e.jsx(l,{children:"Cereals"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Weight:"}),e.jsx(l,{children:"100"})]})]})]})]})},b=({placeholder:t,bordercolor:n,...s})=>e.jsx(N,{placeholder:t,bordercolor:n,...s}),H=x.div`
  position: relative;

  @media screen and (min-width: 376px) {
    width: 335px;
  }

  @media screen and (min-width: 769px) {
    width: 236px;
  }
`,M=x.div`
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  right: 14px;
  z-index: -1;
`,O=()=>{const[t,n]=o.useState(!1),[s,r]=o.useState(!1);return e.jsx(u,{children:e.jsxs("div",{className:"filters wrapper",style:{gap:"20px"},children:[e.jsxs(H,{onFocus:()=>r(!0),onBlur:()=>r(!1),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{marginBottom:40},children:[e.jsx(b,{placeholder:"Search",bordercolor:"default"}),e.jsx(M,{children:e.jsx(a,{name:"search",width:"18px",height:"18px",stroke:t||s?"#E6533C":"#EFEDE8"})})]}),e.jsxs("div",{className:"dropdowns wrapper",style:{display:"flex",gap:"16px"},children:[e.jsx(p,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"Categories"})}),e.jsx(p,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"All"})})]})]})})},P=()=>e.jsxs(u,{children:[e.jsx(O,{}),e.jsx("div",{style:{marginTop:50},children:e.jsx(R,{recommended:!1})})]});export{P as default};
