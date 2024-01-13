import{j as e,S as j,r as i,D as m,a as f,b as w,I as E,T as S,c as v,d as I,e as g,A as y,f as F,h as D,i as C,k as R,l as B,m as c,o as d,p as l,n as x,C as u}from"./index-EHOMzuBz.js";import{S as H}from"./InputPrimary.styled-_RRbAHAK.js";const N="/fitness-app-frontend/assets/sprite-ZzmR_mOR.svg",a=({name:t,width:n="20px",height:s="20px",fill:r,stroke:o})=>e.jsx(j,{width:n,height:s,fill:r,stroke:o,children:e.jsx("use",{xlinkHref:`${N}#icon-${t}`})}),p=({children:t,items:n})=>{const[s,r]=i.useState(!1);return e.jsxs(m,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[t,e.jsx(a,{name:"chevron",width:"18px",stroke:s?"#E6533C":"#EFEDE8"}),e.jsx(f,{visible:s,children:n.map((o,h)=>e.jsx(w,{children:o},h))})]})},O=({recommended:t})=>{const[n,s]=i.useState(!1),[r,o]=i.useState(!1);return e.jsxs(E,{children:[e.jsxs(S,{children:[e.jsx(v,{children:"DIET"}),e.jsxs(I,{children:[e.jsx(g,{recommended:t}),t?"Recommended":"Not recommended"]}),e.jsxs(y,{type:"text",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onFocus:()=>o(!0),onBlur:()=>o(!1),children:["Add",e.jsx(a,{name:"arrow-secondary",width:"16px",stroke:n||r?"#efede8":"#e6533c"})]})]}),e.jsxs(F,{children:[e.jsxs(D,{children:[e.jsx(C,{children:e.jsx(a,{name:"running",width:"18px",fill:"#EFEDE8",stroke:"#EFEDE8"})}),e.jsx(R,{children:"Rice semolina Garnets gluten-free"})]}),e.jsxs(B,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Calories:"}),e.jsx(l,{children:"340"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Category:"}),e.jsx(l,{children:"Cereals"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Weight:"}),e.jsx(l,{children:"100"})]})]})]})]})},b=({placeholder:t,bordercolor:n,...s})=>e.jsx(H,{placeholder:t,bordercolor:n,...s}),k=x.div`
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
`,L=()=>{const[t,n]=i.useState(!1),[s,r]=i.useState(!1);return e.jsx(u,{children:e.jsxs("div",{className:"filters wrapper",style:{gap:"20px"},children:[e.jsxs(k,{onFocus:()=>r(!0),onBlur:()=>r(!1),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{marginBottom:40},children:[e.jsx(b,{placeholder:"Search",bordercolor:"default"}),e.jsx(M,{children:e.jsx(a,{name:"search",width:"18px",height:"18px",stroke:t||s?"#E6533C":"#EFEDE8"})})]}),e.jsxs("div",{className:"dropdowns wrapper",style:{display:"flex",gap:"16px"},children:[e.jsx(p,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"Categories"})}),e.jsx(p,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"All"})})]})]})})},T=()=>e.jsxs(u,{children:[e.jsx(L,{}),e.jsx("div",{style:{marginTop:50},children:e.jsx(O,{recommended:!1})})]});export{T as default};
