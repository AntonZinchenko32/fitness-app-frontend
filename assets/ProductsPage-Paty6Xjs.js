import{j as e,c as u,b as a,D as x,I as p,d as h,e as j,L as m,S as f,C as l,f as y,h as g,M as w,O as i}from"./index-JTsaKQwp.js";const E=({type:r,text:s,sizes:t,padding:o,fontSize:n})=>e.jsx(u,{type:r,sizes:t,fontSize:n,padding:o,children:s}),c=({children:r,items:s})=>{const[t,o]=a.useState(!1);return e.jsxs(x,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[r,e.jsx(p,{name:"chevron",iconWidth:{mobile:"18px",tablet:"18px"},stroke:t?"#E6533C":"#EFEDE8"}),e.jsx(h,{visible:t,children:s.map((n,d)=>e.jsx(j,{children:n},d))})]})},v=()=>e.jsx(m,{children:e.jsx(I,{})}),b=({placeholder:r,bordercolor:s,...t})=>e.jsx(f,{placeholder:r,bordercolor:s,...t}),F=()=>{const[r,s]=a.useState(!1),[t,o]=a.useState(!1);return e.jsx(l,{children:e.jsxs("div",{className:"filters wrapper",style:{gap:"20px"},children:[e.jsxs(y,{onFocus:()=>o(!0),onBlur:()=>o(!1),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{marginBottom:40},children:[e.jsx(b,{placeholder:"Search",bordercolor:"default"}),e.jsx(g,{children:e.jsx(p,{name:"search",iconWidth:{mobile:"18px",tablet:"18px"},iconHeight:{mobile:"18px",tablet:"18px"},stroke:r||t?"#E6533C":"#EFEDE8"})})]}),e.jsxs("div",{className:"dropdowns wrapper",style:{display:"flex",gap:"16px"},children:[e.jsx(c,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"Categories"})}),e.jsx(c,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"All"})})]})]})})},I=()=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(i,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(i,{children:"Try changing the search parameters."})]}),S=()=>e.jsxs(l,{children:[e.jsx(F,{}),e.jsx(v,{}),e.jsx(E,{type:"primary",text:"Button",sizes:"large"})]});export{S as default};