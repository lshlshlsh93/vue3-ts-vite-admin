import{Q as k,bc as v,d as y,$ as b,o as r,f as _,ao as c,w as i,ar as g,k as o,aK as E,as as d,a7 as p,a6 as f,a8 as C,av as $,_ as V,g as t,i as a,q as s}from"./index.2c8784c4.js";import{E as B}from"./el-card.929f101a.js";const w=k({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:v,default:""}}),G={click:u=>u instanceof MouseEvent},N=["href"],P={name:"ElLink"},L=y({...P,props:w,emits:G,setup(u,{emit:h}){const n=u,l=b("link");function m(e){n.disabled||h("click",e)}return(e,ne)=>(r(),_("a",{class:p([o(l).b(),o(l).m(e.type),o(l).is("disabled",e.disabled),o(l).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(r(),c(o(E),{key:0},{default:i(()=>[(r(),c(g(e.icon)))]),_:1})):d("v-if",!0),e.$slots.default?(r(),_("span",{key:1,class:p(o(l).e("inner"))},[f(e.$slots,"default")],2)):d("v-if",!0),e.$slots.icon?f(e.$slots,"icon",{key:2}):d("v-if",!0)],10,N))}});var S=C(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const T=$(S);const I={},M=t("h2",null,"\u9879\u76EE\u4ECB\u7ECD",-1),q=t("p",null," \u672C\u9879\u76EE\u57FA\u4E8EVue3\u3001Typescript\u3001Element Plus\u3001Vue Router4\u3001Pinia\u3001Axios\u3001Vite2\u7B49\u5F00\u53D1\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F ",-1),z=t("p",null," \u672C\u9879\u76EE\u4F7F\u7528\u95E8\u69DB\u6781\u4F4E,\u91C7\u7528\u5F00\u6E90MIT\u534F\u8BAE,\u5B8C\u5168\u514D\u8D39\u5F00\u6E90\u4E14\u7EC8\u8EAB\u514D\u8D39,\u53EF\u4EE5\u514D\u8D39\u7528\u4E8E\u5546\u7528\u7B49\u9879\u76EE\u573A\u666F ",-1),A=s(" \u5F00\u53D1\u6587\u6863\uFF1A"),D=s(" https://gitee.com/lishaohui666/vue3-ts-vite-admin"),H=s(" \u6F14\u793A\u73AF\u5883\uFF1A"),K=s(" https://gitee.com/lishaohui666/vue3-ts-vite-admin"),Q=t("br",null,null,-1),R=s(" Github\u4ED3\u5E93:"),j=s(" https://github.com/lshlshlsh93/vue3-ts-vite-admin"),F=s(" Gitee\u4ED3\u5E93:"),J=s(" https://gitee.com/lishaohui666/vue3-ts-vite-admin"),O=t("p",null,"\u6280\u672F\u89E3\u7B54\u3001\u4EA4\u6D41\u3001\u53CD\u9988\u3001\u5EFA\u8BAE\u7B49,\u53EF\u4EE5\u5230gitee\u6216\u8005GitHub\u53CA\u65F6\u7559\u8A00",-1),U=t("br",null,null,-1),W=t("br",null,null,-1),X=t("h2",null,"\u652F\u6301",-1),Y=s(" \u5982\u679C\u89C9\u5F97\u6846\u67B6\u8FD8\u4E0D\u9519\uFF0C\u6216\u8005\u5DF2\u7ECF\u5728\u4F7F\u7528\u4E86\uFF0C\u5E0C\u671B\u4F60\u53EF\u4EE5\u26A1\u26A1\u26A1\u53BB "),Z=s("Github"),x=s(" \u6216 "),ee=s("Gitee"),te=s(" \u5E2E\u4F5C\u8005\u70B9\u4E2A\u2B50\u2B50\u2B50\u2B50\u2B50Star,\u8FD9\u5C06\u662F\u5BF9\u4F5C\u8005\u6781\u5927\u7684\u9F13\u52B1\u4E0E\u652F\u6301\u3002 ");function se(u,h){const n=T,l=B;return r(),c(l,{class:"intro-container"},{default:i(()=>[M,q,z,t("p",null,[A,a(n,{href:"https://gitee.com/lishaohui666/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[D]),_:1})]),t("p",null,[H,a(n,{href:"https://gitee.com/lishaohui666/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[K]),_:1})]),Q,t("p",null,[R,a(n,{href:"https://github.com/lshlshlsh93/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[j]),_:1})]),t("p",null,[F,a(n,{href:"https://gitee.com/lishaohui666/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[J]),_:1})]),O,U,W,X,t("p",null,[Y,a(n,{href:"https://github.com/lshlshlsh93",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[Z]),_:1}),x,a(n,{href:"https://gitee.com/lishaohui666",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[ee]),_:1}),te])]),_:1})}const oe=V(I,[["render",se]]);export{oe as default};