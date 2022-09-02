import{B as y,D as $,d as m,P as v,a4 as r,a5 as h,a8 as u,a9 as n,aa as p,aE as a,al as C,a6 as _,ab as s,am as E,an as b,ap as k,E as S,ac as f,ad as i,ae as w,af as P,bk as B,ah as d}from"./index.7567c870.js";const V=y({header:{type:String,default:""},bodyStyle:{type:$([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),G={name:"ElCard"},N=m({...G,props:V,setup(c){const l=v("card");return(e,o)=>(r(),h("div",{class:u([n(l).b(),n(l).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),h("div",{key:0,class:u(n(l).e("header"))},[p(e.$slots,"header",{},()=>[a(C(e.header),1)])],2)):_("v-if",!0),s("div",{class:u(n(l).e("body")),style:E(e.bodyStyle)},[p(e.$slots,"default")],6)],2))}});var T=b(N,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const I=k(T),L=y({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:S,default:""}}),D={click:c=>c instanceof MouseEvent},z=["href"],A={name:"ElLink"},M=m({...A,props:L,emits:D,setup(c,{emit:l}){const e=c,o=v("link");function g(t){e.disabled||l("click",t)}return(t,_e)=>(r(),h("a",{class:u([n(o).b(),n(o).m(t.type),n(o).is("disabled",t.disabled),n(o).is("underline",t.underline&&!t.disabled)]),href:t.disabled||!t.href?void 0:t.href,onClick:g},[t.icon?(r(),f(n(P),{key:0},{default:i(()=>[(r(),f(w(t.icon)))]),_:1})):_("v-if",!0),t.$slots.default?(r(),h("span",{key:1,class:u(n(o).e("inner"))},[p(t.$slots,"default")],2)):_("v-if",!0),t.$slots.icon?p(t.$slots,"icon",{key:2}):_("v-if",!0)],10,z))}});var j=b(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const H=k(j);const O={},R=s("h2",null,"\u9879\u76EE\u4ECB\u7ECD",-1),q=s("p",null," \u672C\u9879\u76EE\u57FA\u4E8EVue3\u3001Typescript\u3001Element Plus\u3001Vue Router4\u3001Pinia\u3001Axios\u3001Vite2\u7B49\u5F00\u53D1\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F ",-1),F=s("p",null," \u672C\u9879\u76EE\u4F7F\u7528\u95E8\u69DB\u6781\u4F4E,\u91C7\u7528\u5F00\u6E90MIT\u534F\u8BAE,\u5B8C\u5168\u514D\u8D39\u5F00\u6E90\u4E14\u7EC8\u8EAB\u514D\u8D39,\u53EF\u4EE5\u514D\u8D39\u7528\u4E8E\u5546\u7528\u7B49\u9879\u76EE\u573A\u666F ",-1),J=a(" \u5F00\u53D1\u6587\u6863\uFF1A"),K=a(" https://gitee.com/lishaohui666/vue3-ts-vite-admin"),Q=a(" \u6F14\u793A\u73AF\u5883\uFF1A"),U=a(" https://gitee.com/lishaohui666/vue3-ts-vite-admin"),W=s("br",null,null,-1),X=a(" Github\u4ED3\u5E93:"),Y=a(" https://github.com/lshlshlsh93/vue3-ts-vite-admin"),Z=a(" Gitee\u4ED3\u5E93:"),x=a(" https://gitee.com/lishaohui666/vue3-ts-vite-admin"),ee=s("p",null,"\u6280\u672F\u89E3\u7B54\u3001\u4EA4\u6D41\u3001\u53CD\u9988\u3001\u5EFA\u8BAE\u7B49,\u53EF\u4EE5\u5230gitee\u6216\u8005GitHub\u53CA\u65F6\u7559\u8A00",-1),te=s("br",null,null,-1),se=s("br",null,null,-1),ae=s("h2",null,"\u652F\u6301",-1),ne=a(" \u5982\u679C\u89C9\u5F97\u6846\u67B6\u8FD8\u4E0D\u9519\uFF0C\u6216\u8005\u5DF2\u7ECF\u5728\u4F7F\u7528\u4E86\uFF0C\u5E0C\u671B\u4F60\u53EF\u4EE5\u26A1\u26A1\u26A1\u53BB "),le=a("Github"),oe=a(" \u6216 "),ie=a("Gitee"),re=a(" \u5E2E\u4F5C\u8005\u70B9\u4E2A\u2B50\u2B50\u2B50\u2B50\u2B50Star,\u8FD9\u5C06\u662F\u5BF9\u4F5C\u8005\u6781\u5927\u7684\u9F13\u52B1\u4E0E\u652F\u6301\u3002 ");function de(c,l){const e=H,o=I;return r(),f(o,{class:"intro-container"},{default:i(()=>[R,q,F,s("p",null,[J,d(e,{href:"https://gitee.com/lishaohui666/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[K]),_:1})]),s("p",null,[Q,d(e,{href:"https://gitee.com/lishaohui666/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[U]),_:1})]),W,s("p",null,[X,d(e,{href:"https://github.com/lshlshlsh93/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[Y]),_:1})]),s("p",null,[Z,d(e,{href:"https://gitee.com/lishaohui666/vue3-ts-vite-admin",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[x]),_:1})]),ee,te,se,ae,s("p",null,[ne,d(e,{href:"https://github.com/lshlshlsh93",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[le]),_:1}),oe,d(e,{href:"https://gitee.com/lishaohui666",underline:!1,type:"primary",target:"_blank"},{default:i(()=>[ie]),_:1}),re])]),_:1})}const ce=B(O,[["render",de]]),ue={class:"dashboard-container"},he={class:"card-container"},fe=m({__name:"dashboard",setup(c){return(l,e)=>(r(),h("div",ue,[s("div",he,[d(ce)])]))}});export{fe as default};
