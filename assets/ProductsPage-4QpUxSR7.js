import{j as e,n as r,r as a,C as l}from"./index-h4nWNNrb.js";import{S as x}from"./InputPrimary.styled-K82meX7N.js";const u=({placeholder:t,bordercolor:s,...o})=>e.jsx(x,{placeholder:t,bordercolor:s,...o}),h=r.svg`
  width: ${({width:t})=>t};
  height: ${({height:t})=>t};

  fill: ${({fill:t})=>t};
  stroke: ${({stroke:t})=>t};
  transition-duration: 150ms;
`,m="/fitness-app-frontend/assets/sprite-ZzmR_mOR.svg",d=({name:t,width:s="20px",height:o="20px",fill:n,stroke:i})=>e.jsx(h,{width:s,height:o,fill:n,stroke:i,children:e.jsx("use",{xlinkHref:`${m}#icon-${t}`})}),f=r.div`
  position: relative;

  width: 146px;
  height: 46px;
  padding: 14px;
  border: 1px solid #efede84d;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  border-radius: 12px;
  transition-duration: 150ms;

  &:is(:hover, :focus) {
    cursor: pointer;
    border-color: #e6533c;
  }
`,j=r.ul`
  position: absolute;
  top: 80%;
  left: 0;

  width: 100%;
  padding: 14px 28px 14px 14px;

  background-color: #1c1c1c;
  border-radius: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
  transform-origin: top;

  transform: scaleY(${({visible:t})=>t?1:0});
`,w=r.li`
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`,p=({children:t,items:s})=>{const[o,n]=a.useState(!1);return e.jsxs(f,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[t,e.jsx(d,{name:"chevron",width:"18px",stroke:o?"#E6533C":"#EFEDE8"}),e.jsx(j,{visible:o,children:s.map((i,c)=>e.jsx(w,{children:i},c))})]})},v=r.div`
  position: relative;

  @media screen and (min-width: 376px) {
    width: 335px;
  }

  @media screen and (min-width: 769px) {
    width: 236px;
  }
`,g=r.div`
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  right: 14px;
  z-index: -1;
`,y=()=>{const[t,s]=a.useState(!1),[o,n]=a.useState(!1);return e.jsx(l,{children:e.jsxs("div",{className:"filters wrapper",style:{gap:"20px"},children:[e.jsxs(v,{onFocus:()=>n(!0),onBlur:()=>n(!1),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{marginBottom:40},children:[e.jsx(u,{placeholder:"Search",bordercolor:"default"}),e.jsx(g,{children:e.jsx(d,{name:"search",width:"18px",height:"18px",stroke:t||o?"#E6533C":"#EFEDE8"})})]}),e.jsxs("div",{className:"dropdowns wrapper",style:{display:"flex",gap:"16px"},children:[e.jsx(p,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"Categories"})}),e.jsx(p,{items:["Option 1","Option 2","Option 3"],children:e.jsx("p",{children:"All"})})]})]})})},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"ProductsPage"}),e.jsx(y,{})]});export{S as default};
