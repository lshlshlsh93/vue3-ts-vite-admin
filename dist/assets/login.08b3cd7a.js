import{a as w,G as d,aR as B,aS as V,ai as b,aT as y,b as C,f as i,h as e,p as a,aU as E,K as k,L as I,o as R,u as m,aV as S,aW as D,r as f,s as K}from"./vendor.4ef58cd9.js";import{u as U,_ as N}from"./index.dced291f.js";const q="/vue3-ts-vite-admin/assets/logo.03d6d6da.png",L=t=>(k("data-v-c9ade2f6"),t=t(),I(),t),T={class:"login-container"},A={class:"login-box"},G=L(()=>i("div",{class:"avatar-box"},[i("img",{src:q,alt:""})],-1)),W=f("\u767B\u5F55 "),$=f("\u91CD\u7F6E "),j=w({__name:"login",setup(t){const g=U(),v=K(),n=d(null),o=d({username:"admin",password:"admin"}),F=d({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E",trigger:"blur"}]}),p=()=>{n.value.validate(u=>{if(!u)return console.error("error submit!"),!1;g.loginAction(o).then(()=>{v.push({path:"/"})})})},h=u=>{u.resetFields()};return(u,s)=>{const _=B,r=V,c=b,x=y;return R(),C("div",T,[i("div",A,[G,e(x,{class:"login-form",ref_key:"loginFormRef",ref:n,"label-width":"0px",rules:F.value,model:o.value,onKeyup:E(p,["enter"])},{default:a(()=>[e(r,{prop:"username",class:"form-item"},{default:a(()=>[e(_,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D","prefix-icon":m(S),modelValue:o.value.username,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value.username=l)},null,8,["prefix-icon","modelValue"])]),_:1}),e(r,{prop:"password"},{default:a(()=>[e(_,{modelValue:o.value.password,"onUpdate:modelValue":s[1]||(s[1]=l=>o.value.password=l),"show-password":"","prefix-icon":m(D),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue","prefix-icon"])]),_:1}),e(r,{class:"form-btn"},{default:a(()=>[e(c,{type:"primary",onClick:p},{default:a(()=>[W]),_:1}),e(c,{type:"danger",onClick:s[2]||(s[2]=l=>h(n.value))},{default:a(()=>[$]),_:1})]),_:1})]),_:1},8,["rules","model","onKeyup"])])])}}});const J=N(j,[["__scopeId","data-v-c9ade2f6"]]);export{J as default};