import{a as w,i as B,G as r,aN as b,aO as y,af as V,aP as C,o as E,b as k,f as d,h as e,q as s,aQ as I,u as m,aR as R,aS as S,L as D,M as N,s as f}from"./vendor-a79da16d.js";import{u as q,_ as K}from"./index-d4fdab2b.js";const U="/static/png/logo-03d6d6da.png",L=a=>(D("data-v-850dfa36"),a=a(),N(),a),A={class:"login-container"},G={class:"login-box"},M=L(()=>d("div",{class:"avatar-box"},[d("img",{src:U,alt:""})],-1)),O=f("\u767B\u5F55 "),P=f("\u91CD\u7F6E "),Q=w({__name:"login",setup(a){const g=q(),F=B(),u=r(null),o=r({username:"admin",password:"admin"}),h=r({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E",trigger:"blur"}]}),i=()=>{u.value.validate(_=>{if(!_)return console.error("error submit!"),!1;g.loginAction(o).then(()=>{F.push({path:"/"})})})},v=()=>{u.resetFields()};return(_,t)=>{const c=b,l=y,p=V,x=C;return E(),k("div",A,[d("div",G,[M,e(x,{class:"login-form",ref_key:"loginFormRef",ref:u,"label-width":"0px",rules:h.value,model:o.value,onKeyup:I(i,["enter"])},{default:s(()=>[e(l,{prop:"username",class:"form-item"},{default:s(()=>[e(c,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D","prefix-icon":m(R),modelValue:o.value.username,"onUpdate:modelValue":t[0]||(t[0]=n=>o.value.username=n)},null,8,["prefix-icon","modelValue"])]),_:1}),e(l,{prop:"password"},{default:s(()=>[e(c,{modelValue:o.value.password,"onUpdate:modelValue":t[1]||(t[1]=n=>o.value.password=n),"show-password":"","prefix-icon":m(S),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue","prefix-icon"])]),_:1}),e(l,{class:"form-btn"},{default:s(()=>[e(p,{type:"primary",onClick:i},{default:s(()=>[O]),_:1}),e(p,{type:"danger",onClick:v},{default:s(()=>[P]),_:1})]),_:1})]),_:1},8,["rules","model","onKeyup"])])])}}});const z=K(Q,[["__scopeId","data-v-850dfa36"]]);export{z as default};