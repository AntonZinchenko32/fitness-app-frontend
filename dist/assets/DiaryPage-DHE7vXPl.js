import{r as l,D as O,H as S,ba as je,ag as fe,ac as ge,ad as ye,ae as Q,bb as Ce,bc as ve,bd as Z,a9 as Pe,be as Ee,bf as De,bg as Te,j as e,bh as we,bi as $e,bj as ke,bk as Oe,k as N,aL as H,bl as Se,bm as Ne,bn as A,bo as q,bp as We,bq as Be,br as Ie,bs as Re,bt as I,bu as Me,bv as R,bw as Ve,bx as Le,by as Fe,a as h,bz as _e,bA as ze,K as g,bB as Ye,bC as ee,bD as He,bE as Ae,bF as qe,bG as Ke,bH as M,bI as Ue,bJ as Xe,bK as V,bL as L,bM as Ge,bN as Je,bO as Qe,bP as Ze,bQ as et,bR as F,bS as tt,bT as _,bU as nt,bV as ot,bW as st,bX as rt,bY as lt,bZ as at,b_ as it,b$ as ct,c0 as z,c1 as dt,u as xt,c2 as pt,c3 as K,c4 as U,c5 as X,c6 as G,e as te,c7 as mt,c8 as ht,c9 as ut,ca as bt,cb as ne,aO as $,cc as jt,cd as ft,ce as gt,cf as yt,cg as Ct,w as oe,ch as vt,aM as f,ci as Pt,cj as Et,f as Dt,ck as Tt}from"./index-QfM5dVvM.js";import{C as wt,P as $t}from"./PageTitle-5v_KRcde.js";import{u as kt,P as se,g as k}from"./PurePanel-c43MHhKO.js";import{T as Ot}from"./index-kEr4QD9g.js";import"./placements-o8q0ggcH.js";var St=function(t,o){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(s[n[r]]=t[n[r]]);return s};const Nt=t=>{let{title:o,content:s,prefixCls:n}=t;return l.createElement(l.Fragment,null,o&&l.createElement("div",{className:`${n}-title`},k(o)),l.createElement("div",{className:`${n}-inner-content`},k(s)))},re=l.forwardRef((t,o)=>{const{prefixCls:s,title:n,content:r,overlayClassName:x,placement:p="top",trigger:m="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:i=.1,overlayStyle:C={}}=t,u=St(t,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:y}=l.useContext(O),v=y("popover",s),[w,E,b]=kt(v),j=y(),D=S(x,E,b);return w(l.createElement(Ot,Object.assign({placement:p,trigger:m,mouseEnterDelay:c,mouseLeaveDelay:i,overlayStyle:C},u,{prefixCls:v,overlayClassName:D,ref:o,overlay:n||r?l.createElement(Nt,{prefixCls:v,title:n,content:r}):null,transitionName:je(j,"zoom-big",u.transitionName),"data-popover-inject":!0})))});re._InternalPanelDoNotUseOrYouWillBeFired=se;const P=re,Wt=t=>{const{componentCls:o,iconCls:s,antCls:n,zIndexPopup:r,colorText:x,colorWarning:p,marginXXS:m,marginXS:c,fontSize:i,fontWeightStrong:C,colorTextHeading:u}=t;return{[o]:{zIndex:r,[`&${n}-popover`]:{fontSize:i},[`${o}-message`]:{marginBottom:c,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${o}-message-icon ${s}`]:{color:p,fontSize:i,lineHeight:1,marginInlineEnd:c},[`${o}-title`]:{fontWeight:C,color:u,"&:only-child":{fontWeight:"normal"}},[`${o}-description`]:{marginTop:m,color:x}},[`${o}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:c}}}}},Bt=t=>{const{zIndexPopupBase:o}=t;return{zIndexPopup:o+60}},le=fe("Popconfirm",t=>Wt(t),Bt,{resetStyle:!1});var It=function(t,o){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(s[n[r]]=t[n[r]]);return s};const ae=t=>{const{prefixCls:o,okButtonProps:s,cancelButtonProps:n,title:r,description:x,cancelText:p,okText:m,okType:c="primary",icon:i=l.createElement(Z,null),showCancel:C=!0,close:u,onConfirm:y,onCancel:v,onPopupClick:w}=t,{getPrefixCls:E}=l.useContext(O),[b]=ge("Popconfirm",ye.Popconfirm),j=k(r),D=k(x);return l.createElement("div",{className:`${o}-inner-content`,onClick:w},l.createElement("div",{className:`${o}-message`},i&&l.createElement("span",{className:`${o}-message-icon`},i),l.createElement("div",{className:`${o}-message-text`},j&&l.createElement("div",{className:S(`${o}-title`)},j),D&&l.createElement("div",{className:`${o}-description`},D))),l.createElement("div",{className:`${o}-buttons`},C&&l.createElement(Q,Object.assign({onClick:v,size:"small"},n),p||(b==null?void 0:b.cancelText)),l.createElement(Ce,{buttonProps:Object.assign(Object.assign({size:"small"},ve(c)),s),actionFn:y,close:u,prefixCls:E("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},m||(b==null?void 0:b.okText))))},Rt=t=>{const{prefixCls:o,placement:s,className:n,style:r}=t,x=It(t,["prefixCls","placement","className","style"]),{getPrefixCls:p}=l.useContext(O),m=p("popconfirm",o),[c]=le(m);return c(l.createElement(se,{placement:s,className:S(m,n),style:r,content:l.createElement(ae,Object.assign({prefixCls:m},x))}))},Mt=Rt;var Vt=function(t,o){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(s[n[r]]=t[n[r]]);return s};const ie=l.forwardRef((t,o)=>{var s,n;const{prefixCls:r,placement:x="top",trigger:p="click",okType:m="primary",icon:c=l.createElement(Z,null),children:i,overlayClassName:C,onOpenChange:u,onVisibleChange:y}=t,v=Vt(t,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:w}=l.useContext(O),[E,b]=Pe(!1,{value:(s=t.open)!==null&&s!==void 0?s:t.visible,defaultValue:(n=t.defaultOpen)!==null&&n!==void 0?n:t.defaultVisible}),j=(a,d)=>{b(a,!0),y==null||y(a),u==null||u(a,d)},D=a=>{j(!1,a)},xe=a=>{var d;return(d=t.onConfirm)===null||d===void 0?void 0:d.call(void 0,a)},pe=a=>{var d;j(!1,a),(d=t.onCancel)===null||d===void 0||d.call(void 0,a)},me=a=>{a.keyCode===Te.ESC&&E&&j(!1,a)},he=a=>{const{disabled:d=!1}=t;d||j(a)},W=w("popconfirm",r),ue=S(W,C),[be]=le(W);return be(l.createElement(P,Object.assign({},Ee(v,["title"]),{trigger:p,placement:x,onOpenChange:he,open:E,ref:o,overlayClassName:ue,content:l.createElement(ae,Object.assign({okType:m,icon:c},t,{prefixCls:W,close:D,onConfirm:xe,onCancel:pe})),"data-popover-inject":!0}),De(i,{onKeyDown:a=>{var d,B;l.isValidElement(i)&&((B=i==null?void 0:(d=i.props).onKeyDown)===null||B===void 0||B.call(d,a)),me(a)}})))});ie._InternalPanelDoNotUseOrYouWillBeFired=Mt;const ce=ie,T=({text:t,backgroundColor:o,textColor:s,whiteSpace:n,children:r,value:x,borderColor:p})=>e.jsxs(we,{backgroundColor:o,borderColor:p,children:[e.jsxs($e,{whiteSpace:n,children:[r,e.jsx(ke,{textColor:s,children:t})]}),e.jsx(Oe,{children:x})]}),J=t=>t&&t[0].toUpperCase()+t.slice(1),Lt=({product:t,id:o})=>{const s=N(),n=()=>{s(_e(o))};return e.jsx(H,{theme:{components:{Popover:{colorText:"#EFEDE8"}}},children:e.jsxs(Se,{children:[e.jsxs(Ne,{children:[e.jsxs(A,{children:[e.jsx(q,{children:"Title"}),e.jsx(P,{placement:"topLeft",content:t.title,children:e.jsx(We,{children:e.jsx("p",{children:J(t.title)})})})]}),e.jsxs(A,{children:[e.jsx(q,{children:"Category"}),e.jsx(P,{placement:"topLeft",content:t.category,children:e.jsx(Be,{children:e.jsx("p",{children:J(t.category)})})})]})]}),e.jsxs(Ie,{children:[e.jsxs(Re,{children:[e.jsx(I,{children:"Calories"}),e.jsx(I,{children:"Weight"}),e.jsx(I,{children:"Recommended"})]}),e.jsxs(Me,{children:[e.jsx(R,{children:e.jsx("p",{children:t.calories})}),e.jsx(R,{children:e.jsx("p",{children:t.amount})}),e.jsx(R,{children:e.jsxs(Ve,{children:[e.jsx(Le,{recommended:t.recommend||!1}),t.recommend?"Yes":"No"]})}),e.jsx(Fe,{children:e.jsx(ce,{title:"Delete a product",description:"Are you sure to delete this product?",onConfirm:n,children:e.jsx(h,{name:"delete",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"},stroke:"#EF8964"})})})]})]})]})})},de=({items:t})=>e.jsxs(ze,{children:["You haven't added any ",t," yet"]}),Ft=()=>{const t=g(Ye),o=g(ee);return l.useEffect(()=>{if(!t.length&&!o){const s=setTimeout(()=>e.jsx(de,{items:"products"}),100);return()=>{clearTimeout(s)}}},[t,o]),t&&e.jsxs(He,{className:"scrollbar-inner",children:[e.jsxs(Ae,{children:[e.jsx(qe,{children:e.jsx("p",{children:"Title"})}),e.jsx(Ke,{children:e.jsx("p",{children:"Category"})}),e.jsx(M,{children:e.jsx("p",{children:"Calories"})}),e.jsx(M,{children:e.jsx("p",{children:"Weight"})}),e.jsx(M,{children:e.jsx("p",{children:"Recommended"})})]}),t.map((s,n)=>e.jsx(Lt,{product:s,id:s._id},n))]})},Y=t=>t&&t[0].toUpperCase()+t.slice(1),_t=({exercise:t,id:o})=>{const s=N(),n=()=>{s(ot(o))};return e.jsx(H,{theme:{components:{Popover:{colorText:"#EFEDE8"}}},children:e.jsxs(Ue,{children:[e.jsxs(Xe,{children:[e.jsxs(V,{children:[e.jsx(L,{children:"Body Part"}),e.jsx(P,{placement:"topLeft",content:t.bodyPart,children:e.jsx(Ge,{children:e.jsx("p",{children:Y(t.bodyPart)})})})]}),e.jsxs(V,{children:[e.jsx(L,{children:"Equipment"}),e.jsx(P,{placement:"topLeft",content:t.equipment,children:e.jsx(Je,{children:e.jsx("p",{children:Y(t.equipment)})})})]}),e.jsxs(V,{children:[e.jsx(L,{children:"Name"}),e.jsx(P,{placement:"topLeft",content:t.name,children:e.jsx(Qe,{children:e.jsx("p",{children:Y(t.name)})})})]})]}),e.jsxs(Ze,{children:[e.jsxs(et,{children:[e.jsx(F,{children:"Target"}),e.jsx(F,{children:"Burned Calories"}),e.jsx(F,{children:"Time"})]}),e.jsxs(tt,{children:[e.jsx(_,{children:e.jsx(P,{placement:"topLeft",content:t.target,children:e.jsx("p",{children:t.target})})}),e.jsx(_,{children:e.jsx("p",{children:t.calories||0})}),e.jsx(_,{children:t.time}),e.jsx(nt,{className:"icon-delete",children:e.jsx(ce,{title:"Delete a product",description:"Are you sure to delete this product?",onConfirm:n,children:e.jsx(Q,{type:"text",style:{padding:0,height:0,margin:0},children:e.jsx(h,{name:"delete",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"},stroke:"#EF8964"})})})})]})]})]})})},zt=()=>{const t=g(st),o=g(ee);return l.useEffect(()=>{if(!t.length&&!o){const s=setTimeout(()=>e.jsx(de,{items:"products"}),100);return()=>{clearTimeout(s)}}},[t,o]),t&&e.jsxs(rt,{className:"scrollbar-inner",children:[e.jsxs(lt,{children:[e.jsx(at,{children:e.jsx("p",{children:"Body Part"})}),e.jsx(it,{children:e.jsx("p",{children:"Equipment"})}),e.jsx(ct,{children:e.jsx("p",{children:"Name"})}),e.jsx(z,{children:e.jsx("p",{children:"Target"})}),e.jsx(z,{children:e.jsx("p",{children:"Burned Calor."})}),e.jsx(z,{children:e.jsx("p",{children:"Time"})})]}),t.map((s,n)=>e.jsx(_t,{exercise:s,id:s._id},n))]})},Yt=()=>{const t=dt(),o=xt();return e.jsxs(pt,{children:[e.jsxs(K,{children:[e.jsxs(U,{children:[e.jsx(X,{children:"Products"}),e.jsxs(G,{type:"text",onClick:()=>o("/products",{state:{from:t}}),children:[e.jsx("span",{children:"Add product"}),e.jsx(h,{name:"arrow-right",iconWidth:{mobile:"16px",tablet:"16px"},iconHeight:{mobile:"16px",tablet:"16px"},stroke:"#E6533C"})]})]}),e.jsx(Ft,{})]}),e.jsxs(K,{children:[e.jsxs(U,{children:[e.jsx(X,{children:"Exercises"}),e.jsxs(G,{type:"text",onClick:()=>o("/exercises",{state:{from:t}}),children:[e.jsx("span",{children:"Add exercise"}),e.jsx(h,{name:"arrow-right",iconWidth:{mobile:"16px",tablet:"16px"},iconHeight:{mobile:"16px",tablet:"16px"},stroke:"#E6533C"})]})]}),e.jsx(zt,{})]})]})},Ht=()=>{const{user:t}=te(),o=g(mt),s=g(ht),n=g(ut),r=g(bt),x=i=>Math.sign(i)===1?i+" min":"+ "+Math.abs(i)+" min",p=Math.sign(n)===-1,m=Math.sign(r)===1,c=N();return l.useEffect(()=>{c(ne($().format("DD/MM/YYYY")))},[c]),e.jsx(e.Fragment,{children:e.jsxs(jt,{children:[e.jsxs(ft,{children:[e.jsxs(gt,{children:[e.jsx(T,{text:"Daily calorie intake",backgroundColor:"#E6533C",textColor:"rgba(239, 237, 232, 0.80)",borderColor:"rgba(239, 237, 232, 0.20)",children:e.jsx(h,{name:"food",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),value:t.dailyCalories||0}),e.jsx(T,{text:"Daily physical activity",backgroundColor:"#E6533C",borderColor:"rgba(239, 237, 232, 0.20)",textColor:"rgba(239, 237, 232, 0.80)",children:e.jsx(h,{name:"dumbbell",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),whiteSpace:"none",value:(t.dailyActivity||0)+" min"}),e.jsx(T,{borderColor:"rgba(239, 237, 232, 0.20)",text:"Сalories consumed",children:e.jsx(h,{name:"apple",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),value:s}),e.jsx(T,{borderColor:"rgba(239, 237, 232, 0.20)",text:"Сalories burned",children:e.jsx(h,{name:"fire",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),value:o}),e.jsx(T,{borderColor:m?"#3CBF61":"#E9101D",text:"Сalories remaining",children:e.jsx(h,{name:"bubble",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"}}),value:r}),e.jsx(T,{borderColor:p?"#3CBF61":"#E9101D",text:"Sports remaining",children:e.jsx(h,{name:"running-figure",iconWidth:{mobile:"20px",tablet:"20px"},iconHeight:{mobile:"20px",tablet:"20px"},fill:"#EF8964"}),value:x(n)})]}),e.jsxs(yt,{children:[e.jsx(h,{name:"warning",iconWidth:{mobile:"24px",tablet:"24px"},iconHeight:{mobile:"24px",tablet:"24px"}}),e.jsx(Ct,{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]}),e.jsx(Yt,{})]})})},At=oe.div`


  @media screen and (min-width: 769px) {

  }
`,qt=oe(vt)`
  .ant-picker-input > input {
    font-size: ${f.fontSizes.tiny}px;
    padding: 6px;
    color: ${f.colors.white};
.ant-picker-clear{display:none !important;}
    @media screen and (min-width: 769px) {
      font-size: ${f.fontSizes.default}px;
      padding: 8px;
    }

    @media screen and (max-width: 375px) {
      width: 100% !important;
      max-width: 330px !important;
    }
  }

  .anticon > * {
    color: ${f.colors.orange};
  }

  &:hover,
  &:focus,
  &:focus-within {
    border-color: transparent !important;
  }
`,Kt=()=>{const t=g(Pt),o=N();return e.jsx(e.Fragment,{children:e.jsx(At,{children:e.jsx(H,{theme:{components:{DatePicker:{colorPrimary:`${f.colors.black}`,colorBgElevated:`${f.colors.lightOrange}`,colorText:`${f.colors.white}`,fontSize:14,borderRadiusSM:50,colorIcon:"#EF8964;"}}},children:e.jsx(qt,{disabledDate:s=>s>$(),defaultValue:$(t),value:$(t),format:"DD/MM/YYYY",style:{border:"none",background:`${f.colors.black}`,fontSize:"18px",color:`${f.colors.white}`},showToday:!1,onChange:s=>{o(ne($(s).format("DD/MM/YYYY"))),o(Et(s))},allowClear:!1})})})})},Zt=()=>{const{isRefreshing:t}=te();return l.useEffect(()=>{if(t){const o=setTimeout(()=>{Dt("loading","If you are experiencing a long load time, please wait, our servers go into hibernation when not in use for a long time and need time to get up and running.")},5e3);return()=>clearTimeout(o)}},[t]),e.jsxs(wt,{children:[e.jsxs(Tt,{children:[e.jsx($t,{text:"Diary"}),e.jsx(Kt,{})]}),e.jsx(Ht,{})]})};export{Zt as default};
