import{r as n,ab as Oe,a9 as Se,ad as xe,_ as Pe,aj as Te,ak as ee,ci as $e,al as Ne,am as Q,ao as je,aa as K,M as z,H as te,aq as Ae,ac as Ie,dG as _e,cM as Ve,dH as Ee,ar as Re,bd as De,bi as ze,as as Be,cO as Me}from"./index-9akA7q-a.js";import{P as B,c as oe,M as He,g as Le,a as We,b as ke}from"./placements-2WzMlth4.js";function Xe(e,t){return B.reduce((a,o)=>{const r=e[`${o}1`],l=e[`${o}3`],s=e[`${o}6`],c=e[`${o}7`];return Object.assign(Object.assign({},a),t(o,{lightColor:r,lightBorderColor:l,darkColor:s,textColor:c}))},{})}var P={shiftX:64,adjustY:1},T={adjustX:1,shiftY:!0},u=[0,0],Fe={left:{points:["cr","cl"],overflow:T,offset:[-4,0],targetOffset:u},right:{points:["cl","cr"],overflow:T,offset:[4,0],targetOffset:u},top:{points:["bc","tc"],overflow:P,offset:[0,-4],targetOffset:u},bottom:{points:["tc","bc"],overflow:P,offset:[0,4],targetOffset:u},topLeft:{points:["bl","tl"],overflow:P,offset:[0,-4],targetOffset:u},leftTop:{points:["tr","tl"],overflow:T,offset:[-4,0],targetOffset:u},topRight:{points:["br","tr"],overflow:P,offset:[0,-4],targetOffset:u},rightTop:{points:["tl","tr"],overflow:T,offset:[4,0],targetOffset:u},bottomRight:{points:["tr","br"],overflow:P,offset:[0,4],targetOffset:u},rightBottom:{points:["bl","br"],overflow:T,offset:[4,0],targetOffset:u},bottomLeft:{points:["tl","bl"],overflow:P,offset:[0,4],targetOffset:u},leftBottom:{points:["br","bl"],overflow:T,offset:[-4,0],targetOffset:u}},Ue=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],Ye=function(t,a){var o=t.overlayClassName,r=t.trigger,l=r===void 0?["hover"]:r,s=t.mouseEnterDelay,c=s===void 0?0:s,i=t.mouseLeaveDelay,y=i===void 0?.1:i,f=t.overlayStyle,m=t.prefixCls,p=m===void 0?"rc-tooltip":m,b=t.children,v=t.onVisibleChange,g=t.afterVisibleChange,$=t.transitionName,A=t.animation,N=t.motion,I=t.placement,_=I===void 0?"right":I,C=t.align,M=C===void 0?{}:C,j=t.destroyTooltipOnHide,H=j===void 0?!1:j,L=t.defaultVisible,V=t.getTooltipContainer,E=t.overlayInnerStyle;t.arrowContent;var W=t.overlay,k=t.id,h=t.showArrow,X=h===void 0?!0:h,F=Oe(t,Ue),O=n.useRef(null);n.useImperativeHandle(a,function(){return O.current});var R=Se({},F);"visible"in t&&(R.popupVisible=t.visible);var U=function(){return n.createElement(oe,{key:"content",prefixCls:p,id:k,overlayInnerStyle:E},W)};return n.createElement(xe,Pe({popupClassName:o,prefixCls:p,popup:U,action:l,builtinPlacements:Fe,popupPlacement:_,ref:O,popupAlign:M,getPopupContainer:V,onPopupVisibleChange:v,afterPopupVisibleChange:g,popupTransitionName:$,popupAnimation:A,popupMotion:N,defaultPopupVisible:L,autoDestroy:H,mouseLeaveDelay:y,popupStyle:f,mouseEnterDelay:c,arrow:X},R),b)};const Ze=n.forwardRef(Ye),qe=e=>{const{componentCls:t,tooltipMaxWidth:a,tooltipColor:o,tooltipBg:r,tooltipBorderRadius:l,zIndexPopup:s,controlHeight:c,boxShadowSecondary:i,paddingSM:y,paddingXS:f}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},Ne(e)),{position:"absolute",zIndex:s,display:"block",width:"max-content",maxWidth:a,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${t}-inner`]:{minWidth:c,minHeight:c,padding:`${Q(e.calc(y).div(2).equal())} ${Q(f)}`,color:o,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:l,boxShadow:i,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${t}-inner`]:{borderRadius:e.min(l,He)}},[`${t}-content`]:{position:"relative"}}),Xe(e,(m,p)=>{let{darkColor:b}=p;return{[`&${t}-${m}`]:{[`${t}-inner`]:{backgroundColor:b},[`${t}-arrow`]:{"--antd-arrow-background-color":b}}}})),{"&-rtl":{direction:"rtl"}})},Le(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},Ge=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},We({contentRadius:e.borderRadius,limitVerticalRadius:!0})),je(ee(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),re=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Te("Tooltip",o=>{const{borderRadius:r,colorTextLightSolid:l,colorBgSpotlight:s}=o,c=ee(o,{tooltipMaxWidth:250,tooltipColor:l,tooltipBorderRadius:r,tooltipBg:s});return[qe(c),$e(o,"zoom-big-fast")]},Ge,{resetStyle:!1,injectStyle:t})(e)},Je=B.map(e=>`${e}-inverse`);function Qe(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(K(Je),K(B)).includes(e):B.includes(e)}function ne(e,t){const a=Qe(t),o=z({[`${e}-${t}`]:t&&a}),r={},l={};return t&&!a&&(r.background=t,l["--antd-arrow-background-color"]=t),{className:o,overlayStyle:r,arrowStyle:l}}const Ke=e=>{const{prefixCls:t,className:a,placement:o="top",title:r,color:l,overlayInnerStyle:s}=e,{getPrefixCls:c}=n.useContext(te),i=c("tooltip",t),[y,f,m]=re(i),p=ne(i,l),b=p.arrowStyle,v=Object.assign(Object.assign({},s),p.overlayStyle),g=z(f,m,i,`${i}-pure`,`${i}-placement-${o}`,a,p.className);return y(n.createElement("div",{className:g,style:b},n.createElement("div",{className:`${i}-arrow`}),n.createElement(oe,Object.assign({},e,{className:f,prefixCls:i,overlayInnerStyle:v}),r)))},et=Ke;var tt=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};const ae=n.forwardRef((e,t)=>{var a,o;const{prefixCls:r,openClassName:l,getTooltipContainer:s,overlayClassName:c,color:i,overlayInnerStyle:y,children:f,afterOpenChange:m,afterVisibleChange:p,destroyTooltipOnHide:b,arrow:v=!0,title:g,overlay:$,builtinPlacements:A,arrowPointAtCenter:N=!1,autoAdjustOverflow:I=!0}=e,_=!!v,[,C]=Ae(),{getPopupContainer:M,getPrefixCls:j,direction:H}=n.useContext(te),L=Me(),V=n.useRef(null),E=()=>{var d;(d=V.current)===null||d===void 0||d.forceAlign()};n.useImperativeHandle(t,()=>({forceAlign:E,forcePopupAlign:()=>{L.deprecated(!1,"forcePopupAlign","forceAlign"),E()}}));const[W,k]=Ie(!1,{value:(a=e.open)!==null&&a!==void 0?a:e.visible,defaultValue:(o=e.defaultOpen)!==null&&o!==void 0?o:e.defaultVisible}),h=!g&&!$&&g!==0,X=d=>{var w,x;k(h?!1:d),h||((w=e.onOpenChange)===null||w===void 0||w.call(e,d),(x=e.onVisibleChange)===null||x===void 0||x.call(e,d))},F=n.useMemo(()=>{var d,w;let x=N;return typeof v=="object"&&(x=(w=(d=v.pointAtCenter)!==null&&d!==void 0?d:v.arrowPointAtCenter)!==null&&w!==void 0?w:N),A||ke({arrowPointAtCenter:x,autoAdjustOverflow:I,arrowWidth:_?C.sizePopupArrow:0,borderRadius:C.borderRadius,offset:C.marginXXS,visibleFirst:!0})},[N,v,A,C]),O=n.useMemo(()=>g===0?g:$||g||"",[$,g]),R=n.createElement(_e,null,typeof O=="function"?O():O),{getPopupContainer:U,placement:G="top",mouseEnterDelay:le=.1,mouseLeaveDelay:ie=.1,overlayStyle:se,rootClassName:ce}=e,J=tt(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),S=j("tooltip",r),ue=j(),fe=e["data-popover-inject"];let Y=W;!("open"in e)&&!("visible"in e)&&h&&(Y=!1);const Z=Ve(f)&&!Ee(f)?f:n.createElement("span",null,f),D=Z.props,de=!D.className||typeof D.className=="string"?z(D.className,l||`${S}-open`):D.className,[me,pe,ge]=re(S,!fe),q=ne(S,i),ve=q.arrowStyle,be=Object.assign(Object.assign({},y),q.overlayStyle),ye=z(c,{[`${S}-rtl`]:H==="rtl"},q.className,ce,pe,ge),[Ce,we]=Re("Tooltip",J.zIndex),he=n.createElement(Ze,Object.assign({},J,{zIndex:Ce,showArrow:_,placement:G,mouseEnterDelay:le,mouseLeaveDelay:ie,prefixCls:S,overlayClassName:ye,overlayStyle:Object.assign(Object.assign({},ve),se),getTooltipContainer:U||s||M,ref:V,builtinPlacements:F,overlay:R,visible:Y,onVisibleChange:X,afterVisibleChange:m??p,overlayInnerStyle:be,arrowContent:n.createElement("span",{className:`${S}-arrow-content`}),motion:{motionName:De(ue,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!b}),Y?ze(Z,{className:de}):Z);return me(n.createElement(Be.Provider,{value:we},he))});ae._InternalPanelDoNotUseOrYouWillBeFired=et;const nt=ae;export{nt as T};
