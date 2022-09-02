import{a as S,N as W,G as _,c as B,aU as O,ap as T,aq as j,aY as z,aW as L,aX as N,aV as A,o as f,p as F,q as d,f as t,h as o,t as s,u as i,b as P,A as q,F as I,aZ as l,n as Y}from"./vendor-a79da16d.js";import{_ as U}from"./baseChart-246f681e.js";import{_ as G}from"./index-1081cf71.js";const K={class:"clearfix"},R={class:"right"},X={class:"hv-class"},Z={class:"r-value hv-class"},H=S({__name:"sale",setup(J){const{t:a}=W(),v=[{index:1,name:a("_dashboard.food_ranking.KFC"),count:"323,234"},{index:2,name:a("_dashboard.food_ranking.Mcdonald"),count:"299,132"},{index:3,name:a("_dashboard.food_ranking.Milky_Tea"),count:"283,998"},{index:4,name:a("_dashboard.food_ranking.h_d_l"),count:"266,323"},{index:5,name:a("_dashboard.food_ranking.tk_yr"),count:"223,445"},{index:6,name:a("_dashboard.food_ranking.m_r"),count:"219,663"},{index:7,name:a("_dashboard.food_ranking.f_c"),count:"200,997"}],b=_("small"),h=_("sale"),p=B(()=>h.value==="sale"?a("_dashboard.cart_chart.sale_amount")+" ":a("_dashboard.cart_chart.visit_amount")+" "),c=_([]);let m=_({});const g=()=>{const e=l().format("YYYY-MM-DD");c.value=[e,e]},y=()=>{const e=l().day(1).format("YYYY-MM-DD"),n=l().day(7).format("YYYY-MM-DD");c.value=[e,n]},D=()=>{const e=l().startOf("month").format("YYYY-MM-DD"),n=l().endOf("month").format("YYYY-MM-DD");c.value=[e,n]},M=()=>{const e=l().startOf("year").format("YYYY-MM-DD"),n=l().endOf("year").format("YYYY-MM-DD");c.value=[e,n]};return O(()=>{m.value={title:{text:p.value+" "+a("_dashboard.cart_chart.tendency")},xAxis:{type:"category",data:[a("_datepicker.months.jan"),a("_datepicker.months.feb"),a("_datepicker.months.mar"),a("_datepicker.months.apr"),a("_datepicker.months.may"),a("_datepicker.months.jul"),a("_datepicker.months.jun"),a("_datepicker.months.aug"),a("_datepicker.months.sep"),a("_datepicker.months.oct"),a("_datepicker.months.nov"),a("_datepicker.months.dec")],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{name:"Direct",type:"bar",barWidth:"40%",data:[100,520,130,330,550,880,220,660,85,770,580,110]}],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0}}}),(e,n)=>{const u=T,x=j,C=z,E=U,k=L,V=N,$=A;return f(),F($,{class:"box-card",style:{margin:"10px 0"}},{default:d(()=>[t("div",K,[o(x,{class:"tabs",modelValue:h.value,"onUpdate:modelValue":n[0]||(n[0]=r=>h.value=r)},{default:d(()=>[o(u,{class:"hv-class",label:e.$t("_dashboard.cart_chart.sale_amount"),name:"sale"},null,8,["label"]),o(u,{class:"hv-class",label:e.$t("_dashboard.cart_chart.visit_amount"),name:"visit"},null,8,["label"])]),_:1},8,["modelValue"]),t("div",R,[t("span",{class:"hv-class",onClick:g},s(e.$t("_datepicker.today")),1),t("span",{class:"hv-class",onClick:y},s(e.$t("_datepicker.week")),1),t("span",{class:"hv-class",onClick:D},s(e.$t("_datepicker.month")),1),t("span",{class:"hv-class",onClick:M},s(e.$t("_datepicker.year")),1),o(C,{clearable:!1,"model-Value":c.value,class:"date","value-format":"YYYY-MM-DD",placeholder:"",type:"daterange","range-separator":"\u2014","start-placeholder":e.$t("_datepicker.startDate"),"end-placeholder":e.$t("_datepicker.endDate"),size:b.value},null,8,["model-Value","start-placeholder","end-placeholder","size"])])]),t("div",null,[o(V,{gutter:10},{default:d(()=>[o(k,{span:18},{default:d(()=>[o(E,{class:"charts",options:i(m)},null,8,["options"])]),_:1}),o(k,{span:6,class:"col-right"},{default:d(()=>[t("h3",X,s(i(a)("_dashboard.cart_chart.store"))+" "+s(i(p))+s(i(a)("_dashboard.cart_chart.ranking")),1),t("ul",null,[(f(),P(I,null,q(v,(r,w)=>t("li",{key:w},[t("span",{class:Y(r.index<=4?"r-index":"r-other-index")},s(r.index),3),t("span",{class:Y(["hv-class",r.index<=4?" r-other-name r-medium-1":"r-medium-2"])},s(r.name),3),t("span",Z,s(r.count),1)])),64))])]),_:1})]),_:1})])]),_:1})}}});const ta=G(H,[["__scopeId","data-v-6a4c9438"]]);export{ta as default};