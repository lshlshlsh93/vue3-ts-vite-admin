import{_ as m}from"./baseChart.vue_vue_type_script_setup_true_lang.6ac7a2ad.js";import{a as B,G as i,b5 as C,aU as v,b1 as D,b2 as A,o as b,b as g,h as u,q as e,f as o,u as d,s as a,aV as x,L as w,M as y}from"./vendor.633ba629.js";import{_ as I}from"./index.1feeb4a3.js";const S=s=>(w("data-v-c42ac409"),s=s(),y(),s),V={class:"page-container"},T=a("\u5C0F\u63D0\u793A"),M=S(()=>o("div",{class:"content"},[a(" 1. \u5F53\u524D\u56FE\u8868\u4F7F\u7528\u7684\u662F\u767E\u5EA6\u7684Echarts\uFF0C\u4F7F\u7528\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F "),o("br"),a(" 2. \u5728 src/components/common/Echarts/base-echart.vue \u8DEF\u5F84\u4E2D\uFF0C\u5DF2\u7ECF\u5C01\u88C5\u597D\u4E86\u4E00\u4E2A\u57FA\u7840\u7684Echarts\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u4F20\u5165option\u53EF\u4EE5\u76F4\u63A5\u5B9E\u73B0\u6E32\u67D3 "),o("br"),a(" 3. \u5982\u679C\u53D1\u73B0\u81EA\u5DF1\u7684\u56FE\u8868\u6CA1\u6709\u6E32\u67D3\u51FA\u6765\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0\u662F\u5426\u63D0\u793A\u6709\u54EA\u4E2A\u5185\u5BB9\u4E0D\u5B58\u5728\uFF0C\u7136\u540E\u53BB src/plugins/echarts/index.ts \u6587\u4EF6\u91CC\u9762\u5F15\u5165 "),o("br"),a(' 4. \u56FE\u8868\u9ED8\u8BA4\u4F7F\u7528 SVG \u7684\u65B9\u5F0F\u6E32\u67D3\uFF0C\u5BF9\u4E8E\u5C0F\u578B\u56FE\u8868\u6548\u7387\u8F83\u9AD8\uFF0C\u8981\u6E32\u67D3\u5927\u578B\u56FE\u8868\uFF0C\u8BF7\u4F7F\u7528 Canvas \u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u5728\u4F7F\u7528base-echart.vue\u65F6\uFF0C\u4F20\u5165renderType="canvas"\u5373\u53EF ')],-1)),L=a("\u6570\u636E\u52A8\u6001\u53D8\u5316"),N={class:"content"},O=a("\u6570\u636E\u52A8\u6001\u53D8\u5316"),U={class:"content"},k=B({__name:"index",setup(s){const p="\u56FE\u8868",E=[{name:"height",type:"string",default:"100%",info:"\u9AD8\u5EA6"},{name:"width",type:"string",default:"100%",info:"\u5BBD\u5EA6"},{name:"renderType",type:"'canvas' | 'svg'",default:"svg",info:"\u6E32\u67D3\u7C7B\u578B"},{name:"options",type:"ECOption",default:"\u5FC5\u4F20",info:"\u56FE\u8868\u6E32\u67D3\u9879\uFF0C\u8BF7\u4E0A\u5B98\u7F51\u67E5\u770B"}],_=i([393,438,485,631,689]),h=setInterval(()=>{let l=[];for(let c=0;c<5;c++){const t=Math.floor(20+Math.random()*300);l.push(t)}_.value=l},5e3);C(()=>{clearInterval(h)});let n=i({});return v(()=>{n.value={tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},xAxis:{show:!1},yAxis:{show:!1},series:[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!1,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}],grid:{}}}),(l,c)=>{const t=D,f=A,F=x,r=m;return b(),g("div",V,[u(F,{header:p,class:"tip module",shadow:"hover"},{header:e(()=>[T]),default:e(()=>[M,u(f,{data:E,border:""},{default:e(()=>[u(t,{label:"props",prop:"name"}),u(t,{label:"\u5B57\u6BB5\u7C7B\u578B",prop:"type"}),u(t,{label:"\u9ED8\u8BA4\u503C",prop:"default"}),u(t,{label:"\u4ECB\u7ECD",prop:"info"})]),_:1})]),_:1}),u(F,{class:"module",shadow:"hover"},{header:e(()=>[L]),default:e(()=>[o("div",N,[u(r,{height:"200px",options:d(n)},null,8,["options"])])]),_:1}),u(F,{class:"module",shadow:"hover"},{header:e(()=>[O]),default:e(()=>[o("div",U,[u(r,{height:"200px",options:d(n)},null,8,["options"])])]),_:1})])}}});const W=I(k,[["__scopeId","data-v-c42ac409"]]);export{W as default};
