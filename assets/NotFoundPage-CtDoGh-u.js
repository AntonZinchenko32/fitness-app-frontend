import{r as n,u as r,j as s}from"./index-mC8Pvzli.js";//! Чисто для прикладу як має бути зробив, реалізуйте таку логіку як зараз є але можливо якимось кращим підходом
const i=()=>{const[t,o]=n.useState(5),e=r();return n.useEffect(()=>{const a=setInterval(()=>o(t-1),1e3);if(t===0)return e("/"),()=>clearInterval(a)},[t,e]),s.jsxs("div",{children:["Page not found, redirecting to the homepage in ",t]})};export{i as default};
