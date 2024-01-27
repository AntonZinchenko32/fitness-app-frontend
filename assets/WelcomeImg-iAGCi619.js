import{R as ae,r as l,A as ie,D as le,E as re,G as oe,H as U,J as y,_ as C,k as ne,K as $,M as ce,j as e,N as g,a as de,O as ue,Q as me,U as pe,V as D,X as R,Y as ge,Z as xe,$ as fe}from"./index-dH64_iyp.js";function I(t){return["small","middle","large"].includes(t)}function V(t){return t?typeof t=="number"&&!Number.isNaN(t):!1}const W=ae.createContext({latestIndex:0}),he=W.Provider,ve=t=>{let{className:s,index:r,children:i,split:o,style:a}=t;const{latestIndex:d}=l.useContext(W);return i==null?null:l.createElement(l.Fragment,null,l.createElement("div",{className:s,style:a},i),r<d&&o&&l.createElement("span",{className:`${s}-split`},o))},ye=ve;var Ce=function(t,s){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&s.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)s.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(r[i[o]]=t[i[o]]);return r};const be=l.forwardRef((t,s)=>{var r,i;const{getPrefixCls:o,space:a,direction:d}=l.useContext(le),{size:n=(a==null?void 0:a.size)||"small",align:u,className:m,rootClassName:H,children:k,direction:N="horizontal",prefixCls:L,split:T,style:B,wrap:G=!1,classNames:b,styles:j}=t,Y=Ce(t,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[f,h]=Array.isArray(n)?n:[n,n],P=I(h),A=I(f),J=V(h),K=V(f),E=re(k,{keepEmpty:!0}),F=u===void 0&&N==="horizontal"?"center":u,c=o("space",L),[Q,X,Z]=oe(c),q=U(c,a==null?void 0:a.className,X,`${c}-${N}`,{[`${c}-rtl`]:d==="rtl",[`${c}-align-${F}`]:F,[`${c}-gap-row-${h}`]:P,[`${c}-gap-col-${f}`]:A},m,H,Z),M=U(`${c}-item`,(r=b==null?void 0:b.item)!==null&&r!==void 0?r:(i=a==null?void 0:a.classNames)===null||i===void 0?void 0:i.item);let z=0;const ee=E.map((p,S)=>{var w,O;p!=null&&(z=S);const se=p&&p.key||`${M}-${S}`;return l.createElement(ye,{className:M,key:se,index:S,split:T,style:(w=j==null?void 0:j.item)!==null&&w!==void 0?w:(O=a==null?void 0:a.styles)===null||O===void 0?void 0:O.item},p)}),te=l.useMemo(()=>({latestIndex:z}),[z]);if(E.length===0)return null;const v={};return G&&(v.flexWrap="wrap"),!A&&K&&(v.columnGap=f),!P&&J&&(v.rowGap=h),Q(l.createElement("div",Object.assign({ref:s,className:q,style:Object.assign(Object.assign(Object.assign({},v),a==null?void 0:a.style),B)},Y),l.createElement(he,{value:te},ee)))}),_=be;_.Compact=ie;const je=_,ze="/powerpulse/assets/imgAuthPageMob-CYnpVfFA.webp";var Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 01140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 00-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 000 79.2 55.95 55.95 0 0079.2 0 55.87 55.87 0 0014.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 00-11.3 0l-56.6 56.6a8.03 8.03 0 000 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 00-11.3 0l-31.1 31.1a8.03 8.03 0 000 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"}}]},name:"dashboard",theme:"outlined"};const we=Se;var Oe=function(s,r){return l.createElement(y,C({},s,{ref:r,icon:we}))};const $e=l.forwardRef(Oe);var Ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9z"}}]},name:"fire",theme:"filled"};const Pe=Ne;var Ae=function(s,r){return l.createElement(y,C({},s,{ref:r,icon:Pe}))};const Ee=l.forwardRef(Ae);var Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"};const Me=Fe;var Ue=function(s,r){return l.createElement(y,C({},s,{ref:r,icon:Me}))};const Ie=l.forwardRef(Ue);var Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"}}]},name:"usergroup-add",theme:"outlined"};const De=Ve;var Re=function(s,r){return l.createElement(y,C({},s,{ref:r,icon:De}))};const We=l.forwardRef(Re),_e=({statistics:t})=>t.statistics,He=({statistics:t})=>t.isLoading,ke=({statistics:t})=>t.error,{Meta:x}=me,Le=()=>{const t=ne(),s=$(_e),r=$(He),i=$(ke);let o,a,d,n,u;s.totalVideo?(o=s.totalVideo,a=s.totalUsersCalories+" cal",d=s.totalUsers+" users",n=s.totalTrainingHoursUsers+" hours",u=s.totalTrainingUsers+" workouts"):(o="Data is coming",a="Data is coming",d="Data is coming",n="Data is coming",u="Data is coming"),l.useEffect(()=>{t(ce({}))},[t]);const m={fontSize:"30px",color:"#efede8"};return e.jsxs(e.Fragment,{children:[e.jsxs(je,{direction:"vertical",size:"middle",style:{display:"flex"},children:[e.jsx(g,{bordered:!1,size:"default",style:{width:215,backgroundColor:"#303030"},children:e.jsx(x,{avatar:e.jsx(Ie,{style:m}),title:o,description:"Video tutorial"})}),e.jsx(g,{bordered:!1,size:"default",children:e.jsx(x,{avatar:e.jsx(Ee,{style:m}),title:a,description:"Calories burned"})}),e.jsx(g,{bordered:!1,size:"default",children:e.jsx(x,{avatar:e.jsx(We,{style:m}),title:d,description:"Registered users"})}),e.jsx(g,{bordered:!1,size:"default",children:e.jsx(x,{avatar:e.jsx($e,{style:m}),title:n,description:"Total training time"})}),e.jsx(g,{bordered:!1,size:"default",children:e.jsx(x,{avatar:e.jsx(de,{name:"statistics",iconWidth:{mobile:"30px",tablet:"30px"},iconHeight:{mobile:"30px",tablet:"30px"}}),title:u,description:"Number of trainings"})})]}),r&&!i&&e.jsx(ue,{})]})},Be=()=>e.jsxs(e.Fragment,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 768px)",srcSet:pe}),e.jsx("source",{media:"((min-width: 769px) and (max-width: 1439px))",srcSet:D}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:R}),e.jsx(ge,{alt:"Example of a lunge forward on the leg",loading:"lazy"})]}),e.jsx(xe,{children:e.jsx(Le,{})})]}),Ge=()=>e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 768px)",srcSet:ze}),e.jsx("source",{media:"((min-width: 769px) and (max-width: 1439px))",srcSet:D}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:R}),e.jsx(fe,{alt:"Example of a lunge forward on the leg",loading:"lazy"})]});export{Ge as A,Le as S,Be as W};
