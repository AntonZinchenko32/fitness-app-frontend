import{h as Se,r as a,c as N,M as d,W as p,s as we,i as lt,a as K,m as j,b as ve,R as Mt,d as be,K as xe,e as Yt,f as D,D as Ce,g as Ie,l as z,j as _t,k as Rt,o as J,n as Ae,p as Ee,q as qt,t as P,C as Pe,u as _e,N as $t,B as Nt}from"./index-fuQB8xLW.js";function Ht(t,e,r){switch(Se(t,e)){case 5103:return p+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return p+t+t;case 4789:return K+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return p+t+K+t+d+t+t;case 5936:switch(N(t,e+11)){case 114:return p+t+d+a(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return p+t+d+a(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return p+t+d+a(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return p+t+d+t+t;case 6165:return p+t+d+"flex-"+t+t;case 5187:return p+t+a(t,/(\w+).+(:[^]+)/,p+"box-$1$2"+d+"flex-$1$2")+t;case 5443:return p+t+d+"flex-item-"+a(t,/flex-|-self/g,"")+(j(t,/flex-|baseline/)?"":d+"grid-row-"+a(t,/flex-|-self/g,""))+t;case 4675:return p+t+d+"flex-line-pack"+a(t,/align-content|flex-|-self/g,"")+t;case 5548:return p+t+d+a(t,"shrink","negative")+t;case 5292:return p+t+d+a(t,"basis","preferred-size")+t;case 6060:return p+"box-"+a(t,"-grow","")+p+t+d+a(t,"grow","positive")+t;case 4554:return p+a(t,/([^-])(transform)/g,"$1"+p+"$2")+t;case 6187:return a(a(a(t,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),t,"")+t;case 5495:case 3959:return a(t,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return a(a(t,/(.+:)(flex-)?(.*)/,p+"box-pack:$3"+d+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+p+t+t;case 4200:if(!j(t,/flex-|baseline/))return d+"grid-column-align"+ve(t,e)+t;break;case 2592:case 3360:return d+a(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,o){return e=o,j(n.props,/grid-\w+-end/)})?~lt(t+(r=r[e].value),"span",0)?t:d+a(t,"-start","")+t+d+"grid-row-span:"+(~lt(r,"span",0)?j(r,/\d+/):+j(r,/\d+/)-+j(t,/\d+/))+";":d+a(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return j(n.props,/grid-\w+-start/)})?t:d+a(a(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return a(t,/(.+)-inline(.+)/,p+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(we(t)-1-e>6)switch(N(t,e+1)){case 109:if(N(t,e+4)!==45)break;case 102:return a(t,/(.+:)(.+)-([^]+)/,"$1"+p+"$2-$3$1"+K+(N(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~lt(t,"stretch",0)?Ht(a(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return a(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,i,u,c,f){return d+o+":"+s+f+(i?d+o+"-span:"+(u?c:+c-+s)+f:"")+t});case 4949:if(N(t,e+6)===121)return a(t,":",":"+p)+t;break;case 6444:switch(N(t,N(t,14)===45?18:11)){case 120:return a(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(N(t,14)===45?"inline-":"")+"box$3$1"+p+"$2$3$1"+d+"$2box$3")+t;case 100:return a(t,":",":"+d)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return a(t,"scroll-","scroll-snap-")+t}return t}function Re(t){var e=Ie(t);return function(r,n,o,s){for(var i="",u=0;u<e;u++)i+=t[u](r,n,o,s)||"";return i}}function $e(t){return function(e){e.root||(e=e.return)&&t(e)}}function Ne(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Ce:t.return=Ht(t.value,t.length,r);return;case xe:return Yt([D(t,{value:a(t.value,"@","@"+p)})],n);case Mt:if(t.length)return be(r=t.props,function(o){switch(j(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":z(D(t,{props:[a(o,/:(read-\w+)/,":"+K+"$1")]})),z(D(t,{props:[o]})),_t(t,{props:Rt(r,n)});break;case"::placeholder":z(D(t,{props:[a(o,/:(plac\w+)/,":"+p+"input-$1")]})),z(D(t,{props:[a(o,/:(plac\w+)/,":"+K+"$1")]})),z(D(t,{props:[a(o,/:(plac\w+)/,d+"input-$1")]})),z(D(t,{props:[o]})),_t(t,{props:Rt(r,n)});break}return""})}}var b=function(){return b=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},b.apply(this,arguments)};function at(t,e,r){if(r||arguments.length===2)for(var n=0,o=e.length,s;n<o;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return t.concat(s||Array.prototype.slice.call(e))}var je={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},x={},G=typeof process<"u"&&x!==void 0&&(x.REACT_APP_SC_ATTR||x.SC_ATTR)||"data-styled",Ut="active",Kt="data-styled-version",ut="6.1.8",xt=`/*!sc*/
`,Ct=typeof window<"u"&&"HTMLElement"in window,Oe=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&x!==void 0&&x.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&x.REACT_APP_SC_DISABLE_SPEEDY!==""?x.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&x.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&x!==void 0&&x.SC_DISABLE_SPEEDY!==void 0&&x.SC_DISABLE_SPEEDY!==""&&x.SC_DISABLE_SPEEDY!=="false"&&x.SC_DISABLE_SPEEDY),pt=Object.freeze([]),W=Object.freeze({});function ke(t,e,r){return r===void 0&&(r=W),t.theme!==r.theme&&t.theme||e||r.theme}var Jt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Te=/(^-|-$)/g;function jt(t){return t.replace(De,"-").replace(Te,"")}var Fe=/(a)(d)/gi,nt=52,Ot=function(t){return String.fromCharCode(t+(t>25?39:97))};function St(t){var e,r="";for(e=Math.abs(t);e>nt;e=e/nt|0)r=Ot(e%nt)+r;return(Ot(e%nt)+r).replace(Fe,"$1-$2")}var gt,Zt=5381,B=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Vt=function(t){return B(Zt,t)};function ze(t){return St(Vt(t)>>>0)}function Be(t){return t.displayName||t.name||"Component"}function mt(t){return typeof t=="string"&&!0}var Xt=typeof Symbol=="function"&&Symbol.for,Qt=Xt?Symbol.for("react.memo"):60115,Ge=Xt?Symbol.for("react.forward_ref"):60112,We={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Le={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},te={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Me=((gt={})[Ge]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gt[Qt]=te,gt);function kt(t){return("type"in(e=t)&&e.type.$$typeof)===Qt?te:"$$typeof"in t?Me[t.$$typeof]:We;var e}var Ye=Object.defineProperty,qe=Object.getOwnPropertyNames,Dt=Object.getOwnPropertySymbols,He=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,Tt=Object.prototype;function ee(t,e,r){if(typeof e!="string"){if(Tt){var n=Ue(e);n&&n!==Tt&&ee(t,n,r)}var o=qe(e);Dt&&(o=o.concat(Dt(e)));for(var s=kt(t),i=kt(e),u=0;u<o.length;++u){var c=o[u];if(!(c in Le||r&&r[c]||i&&c in i||s&&c in s)){var f=He(e,c);try{Ye(t,c,f)}catch{}}}}return t}function L(t){return typeof t=="function"}function It(t){return typeof t=="object"&&"styledComponentId"in t}function T(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ft(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function Z(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function wt(t,e,r){if(r===void 0&&(r=!1),!r&&!Z(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=wt(t[n],e[n]);else if(Z(e))for(var n in e)t[n]=wt(t[n],e[n]);return t}function At(t,e){Object.defineProperty(t,"toString",{value:e})}function V(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Ke=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;e>=s;)if((s<<=1)<0)throw V(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var i=o;i<s;i++)this.groupSizes[i]=0}for(var u=this.indexOfGroup(e+1),c=(i=0,r.length);i<c;i++)this.tag.insertRule(u,r[i])&&(this.groupSizes[e]++,u++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r;this.groupSizes[e]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),s=o+n,i=o;i<s;i++)r+="".concat(this.tag.getRule(i)).concat(xt);return r},t}(),st=new Map,ct=new Map,it=1,ot=function(t){if(st.has(t))return st.get(t);for(;ct.has(it);)it++;var e=it++;return st.set(t,e),ct.set(e,t),e},Je=function(t,e){it=e+1,st.set(t,e),ct.set(e,t)},Ze="style[".concat(G,"][").concat(Kt,'="').concat(ut,'"]'),Ve=new RegExp("^".concat(G,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xe=function(t,e,r){for(var n,o=r.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&t.registerName(e,n)},Qe=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(xt),o=[],s=0,i=n.length;s<i;s++){var u=n[s].trim();if(u){var c=u.match(Ve);if(c){var f=0|parseInt(c[1],10),h=c[2];f!==0&&(Je(h,f),Xe(t,h,c[3]),t.getTag().insertRules(f,o)),o.length=0}else o.push(u)}}};function tr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var re=function(t){var e=document.head,r=t||e,n=document.createElement("style"),o=function(u){var c=Array.from(u.querySelectorAll("style[".concat(G,"]")));return c[c.length-1]}(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(G,Ut),n.setAttribute(Kt,ut);var i=tr();return i&&n.setAttribute("nonce",i),r.insertBefore(n,s),n},er=function(){function t(e){this.element=re(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var i=n[o];if(i.ownerNode===r)return i}throw V(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),rr=function(){function t(e){this.element=re(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),nr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),zt=Ct,or={isServer:!Ct,useCSSOMInjection:!Oe},ne=function(){function t(e,r,n){e===void 0&&(e=W),r===void 0&&(r={});var o=this;this.options=b(b({},or),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ct&&zt&&(zt=!1,function(s){for(var i=document.querySelectorAll(Ze),u=0,c=i.length;u<c;u++){var f=i[u];f&&f.getAttribute(G)!==Ut&&(Qe(s,f),f.parentNode&&f.parentNode.removeChild(f))}}(this)),At(this,function(){return function(s){for(var i=s.getTag(),u=i.length,c="",f=function(w){var l=function(C){return ct.get(C)}(w);if(l===void 0)return"continue";var g=s.names.get(l),y=i.getGroup(w);if(g===void 0||y.length===0)return"continue";var _="".concat(G,".g").concat(w,'[id="').concat(l,'"]'),O="";g!==void 0&&g.forEach(function(C){C.length>0&&(O+="".concat(C,","))}),c+="".concat(y).concat(_,'{content:"').concat(O,'"}').concat(xt)},h=0;h<u;h++)f(h);return c}(o)})}return t.registerId=function(e){return ot(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(b(b({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new nr(o):n?new er(o):new rr(o)}(this.options),new Ke(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(ot(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(ot(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ot(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),sr=/&/g,ir=/^\s*\/\/.*$/gm;function oe(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=oe(r.children,e)),r})}function ar(t){var e,r,n,o=t===void 0?W:t,s=o.options,i=s===void 0?W:s,u=o.plugins,c=u===void 0?pt:u,f=function(l,g,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(e):l},h=c.slice();h.push(function(l){l.type===Mt&&l.value.includes("&")&&(l.props[0]=l.props[0].replace(sr,r).replace(n,f))}),i.prefix&&h.push(Ne),h.push(Ae);var w=function(l,g,y,_){g===void 0&&(g=""),y===void 0&&(y=""),_===void 0&&(_="&"),e=_,r=g,n=new RegExp("\\".concat(r,"\\b"),"g");var O=l.replace(ir,""),C=Ee(y||g?"".concat(y," ").concat(g," { ").concat(O," }"):O);i.namespace&&(C=oe(C,i.namespace));var M=[];return Yt(C,Re(h.concat($e(function(S){return M.push(S)})))),M};return w.hash=c.length?c.reduce(function(l,g){return g.name||V(15),B(l,g.name)},Zt).toString():"",w}var cr=new ne,vt=ar(),se=J.createContext({shouldForwardProp:void 0,styleSheet:cr,stylis:vt});se.Consumer;J.createContext(void 0);function Bt(){return qt.useContext(se)}var ur=function(){function t(e,r){var n=this;this.inject=function(o,s){s===void 0&&(s=vt);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,At(this,function(){throw V(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=vt),this.name+e.hash},t}(),pr=function(t){return t>="A"&&t<="Z"};function Gt(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;pr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var ie=function(t){return t==null||t===!1||t===""},ae=function(t){var e,r,n=[];for(var o in t){var s=t[o];t.hasOwnProperty(o)&&!ie(s)&&(Array.isArray(s)&&s.isCss||L(s)?n.push("".concat(Gt(o),":"),s,";"):Z(s)?n.push.apply(n,at(at(["".concat(o," {")],ae(s),!1),["}"],!1)):n.push("".concat(Gt(o),": ").concat((e=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in je||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function F(t,e,r,n){if(ie(t))return[];if(It(t))return[".".concat(t.styledComponentId)];if(L(t)){if(!L(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var o=t(e);return F(o,e,r,n)}var s;return t instanceof ur?r?(t.inject(r,n),[t.getName(n)]):[t]:Z(t)?ae(t):Array.isArray(t)?Array.prototype.concat.apply(pt,t.map(function(i){return F(i,e,r,n)})):[t.toString()]}function fr(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(L(r)&&!It(r))return!1}return!0}var dr=Vt(ut),hr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&fr(e),this.componentId=r,this.baseHash=B(dr,r),this.baseStyle=n,ne.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=T(o,this.staticRulesId);else{var s=Ft(F(this.rules,e,r,n)),i=St(B(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,i)){var u=n(s,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,u)}o=T(o,i),this.staticRulesId=i}else{for(var c=B(this.baseHash,n.hash),f="",h=0;h<this.rules.length;h++){var w=this.rules[h];if(typeof w=="string")f+=w;else if(w){var l=Ft(F(w,e,r,n));c=B(c,l+h),f+=l}}if(f){var g=St(c>>>0);r.hasNameForId(this.componentId,g)||r.insertRules(this.componentId,g,n(f,".".concat(g),void 0,this.componentId)),o=T(o,g)}}return o},t}(),ce=J.createContext(void 0);ce.Consumer;var yt={};function lr(t,e,r){var n=It(t),o=t,s=!mt(t),i=e.attrs,u=i===void 0?pt:i,c=e.componentId,f=c===void 0?function(v,I){var m=typeof v!="string"?"sc":jt(v);yt[m]=(yt[m]||0)+1;var A="".concat(m,"-").concat(ze(ut+m+yt[m]));return I?"".concat(I,"-").concat(A):A}(e.displayName,e.parentComponentId):c,h=e.displayName,w=h===void 0?function(v){return mt(v)?"styled.".concat(v):"Styled(".concat(Be(v),")")}(t):h,l=e.displayName&&e.componentId?"".concat(jt(e.displayName),"-").concat(e.componentId):e.componentId||f,g=n&&o.attrs?o.attrs.concat(u).filter(Boolean):u,y=e.shouldForwardProp;if(n&&o.shouldForwardProp){var _=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;y=function(v,I){return _(v,I)&&O(v,I)}}else y=_}var C=new hr(r,l,n?o.componentStyle:void 0);function M(v,I){return function(m,A,Y){var X=m.attrs,fe=m.componentStyle,de=m.defaultProps,he=m.foldedComponentIds,le=m.styledComponentId,ge=m.target,me=J.useContext(ce),ye=Bt(),ft=m.shouldForwardProp||ye.shouldForwardProp,Et=ke(A,me,de)||W,E=function(tt,H,et){for(var U,k=b(b({},H),{className:void 0,theme:et}),ht=0;ht<tt.length;ht+=1){var rt=L(U=tt[ht])?U(k):U;for(var $ in rt)k[$]=$==="className"?T(k[$],rt[$]):$==="style"?b(b({},k[$]),rt[$]):rt[$]}return H.className&&(k.className=T(k.className,H.className)),k}(X,A,Et),Q=E.as||ge,q={};for(var R in E)E[R]===void 0||R[0]==="$"||R==="as"||R==="theme"&&E.theme===Et||(R==="forwardedAs"?q.as=E.forwardedAs:ft&&!ft(R,Q)||(q[R]=E[R]));var Pt=function(tt,H){var et=Bt(),U=tt.generateAndInjectStyles(H,et.styleSheet,et.stylis);return U}(fe,E),dt=T(he,le);return Pt&&(dt+=" "+Pt),E.className&&(dt+=" "+E.className),q[mt(Q)&&!Jt.has(Q)?"class":"className"]=dt,q.ref=Y,qt.createElement(Q,q)}(S,v,I)}M.displayName=w;var S=J.forwardRef(M);return S.attrs=g,S.componentStyle=C,S.displayName=w,S.shouldForwardProp=y,S.foldedComponentIds=n?T(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=l,S.target=n?o.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=n?function(I){for(var m=[],A=1;A<arguments.length;A++)m[A-1]=arguments[A];for(var Y=0,X=m;Y<X.length;Y++)wt(I,X[Y],!0);return I}({},o.defaultProps,v):v}}),At(S,function(){return".".concat(S.styledComponentId)}),s&&ee(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Wt(t,e){for(var r=[t[0]],n=0,o=e.length;n<o;n+=1)r.push(e[n],t[n+1]);return r}var Lt=function(t){return Object.assign(t,{isCss:!0})};function gr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(L(t)||Z(t))return Lt(F(Wt(pt,at([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?F(n):Lt(F(Wt(n,e)))}function bt(t,e,r){if(r===void 0&&(r=W),!e)throw V(1,e);var n=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return t(e,r,gr.apply(void 0,at([o],s,!1)))};return n.attrs=function(o){return bt(t,e,b(b({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return bt(t,e,b(b({},r),o))},n}var ue=function(t){return bt(lr,t)},pe=ue;Jt.forEach(function(t){pe[t]=ue(t)});const mr=pe.div`
.photo-welcome-page{
float: right;
}
`,yr="/fitness-app-frontend/assets/imgForWelcomePage-sUIJYmJw.jpg",Sr=()=>P.jsx(Pe,{children:P.jsxs(mr,{children:[P.jsxs(_e,{theme:{token:{colorPrimary:"#E6533C",borderRadius:5,colorTextBase:"#ffffff"}},children:[P.jsx($t,{to:"/signup",children:P.jsx(Nt,{type:"primary",children:"Sing Up"})}),P.jsx($t,{to:"/signin",children:P.jsx(Nt,{ghost:!0,children:"Sing in"})})]}),P.jsx("img",{src:yr,alt:"",width:670,height:900,className:"photo-welcome-page"})]})}),vr=()=>P.jsx(Sr,{});export{vr as default};