import{h as c,j as e,ad as f,m as l,ae as g,af as E,u as v,ag as x,ah as h,ai as w,aj as b,ak as S,g as I,al as L,am as D,an as R,ao as y,ap as F,aq as H,ar as N,as as B,at as W,au as C,av as P,aw as d,ax as u,ay as p,c as m,az as A,aA as M}from"./index-FVnREtQj.js";import{I as O}from"./InputPrimary-CT7aY4xw.js";const j=({children:s,items:a})=>{const[n,o]=c.useState(!1);return e.jsxs(f,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[s,e.jsx(l,{name:"chevron",iconWidth:{mobile:"18px",tablet:"18px"},stroke:n?"#E6533C":"#EFEDE8"}),e.jsx(g,{visible:n,children:a.map((r,t)=>e.jsx(E,{children:r},t))})]})},k=s=>s.products.products,T=s=>s.products.isLoading,q=()=>{const s=v(),a=x(k),n=x(T),o=c.useRef(null),r=c.useRef(1);return c.useEffect(()=>{s(h(r.current)),r.current=r.current+1},[s]),c.useEffect(()=>{const t=o.current,i=w(()=>{n||!t||t.scrollTop+t.clientHeight>=t.scrollHeight-20&&(s(h(r.current)),r.current=r.current+1)},600);return t==null||t.addEventListener("scroll",i),()=>{t==null||t.removeEventListener("scroll",i)}},[s,r]),e.jsx(b,{children:e.jsx(S,{className:"scrollbar-outer",ref:o,children:a.map((t,i)=>e.jsx(z,{product:t},i))})})},z=({product:s})=>{const[a,n]=c.useState(!1),{groupBloodNotAllowed:o}=s,{user:r}=I(),t=r.settings.blood,i=t?o[t]:void 0;return e.jsxs(L,{children:[e.jsxs(D,{children:[e.jsx(R,{children:"DIET"}),e.jsxs(y,{children:[e.jsx(F,{recommended:i||!1}),i?"Recommended":"Not recommended"]}),e.jsxs(H,{type:"text",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:["Add",e.jsx(l,{name:"arrow-secondary",iconWidth:{mobile:"16px",tablet:"16px"},stroke:a?"#efede8":"#e6533c"})]})]}),e.jsxs(N,{children:[e.jsxs(B,{children:[e.jsx(W,{children:e.jsx(l,{name:"running",iconWidth:{mobile:"16px",tablet:"16px"},fill:"#EFEDE8",stroke:"#EFEDE8"})}),e.jsx(C,{children:s.title})]}),e.jsxs(P,{children:[e.jsxs(d,{children:[e.jsx(u,{children:"Calories:"}),e.jsx(p,{children:s.calories})]}),e.jsxs(d,{children:[e.jsx(u,{children:"Category:"}),e.jsx(p,{children:s.category})]}),e.jsxs(d,{children:[e.jsx(u,{children:"Weight:"}),e.jsx(p,{children:s.weight})]})]})]})]})},G=()=>{const[s,a]=c.useState(!1),[n,o]=c.useState(!1);return e.jsx(m,{children:e.jsxs("div",{className:"filters wrapper",style:{gap:"20px"},children:[e.jsxs(A,{onFocus:()=>o(!0),onBlur:()=>o(!1),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{marginBottom:40},children:[e.jsx(O,{placeholder:"Search",bordercolor:"default"}),e.jsx(M,{children:e.jsx(l,{name:"search",iconWidth:{mobile:"18px",tablet:"18px"},iconHeight:{mobile:"18px",tablet:"18px"},stroke:s||n?"#E6533C":"#EFEDE8"})})]}),e.jsxs("div",{className:"dropdowns wrapper",style:{display:"flex",gap:"16px"},children:[e.jsx(j,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"Categories"})}),e.jsx(j,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"All"})})]})]})})},K=()=>e.jsxs(m,{children:[e.jsx(G,{}),e.jsx(q,{})]});export{K as default};