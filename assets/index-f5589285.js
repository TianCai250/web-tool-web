import{_ as U,r as T,a as F,t as J,b as t,o as r,d as g,e as i,f as e,w as o,u as n,E as b,y as M,F as O,s as P,x as k,j as W,h as j,p as R,n as $}from"./index-6f1b7875.js";const q=s=>(R("data-v-3415051d"),s=s(),$(),s),A={class:"lottery-draw"},D={class:"form"},G=q(()=>i("div",{class:"tip"},"依次设置奖品名称，中奖概率",-1)),H={class:"circle"},K={__name:"index",setup(s){const d=["#e9e8fe","#b8c5f2"],h={fonts:[{text:"",top:"10px"}],background:d[0],range:10},u=T(),a=F({blocks:[{padding:"13px",background:"#617df2"}],defaultConfig:{gutter:"5px"},buttons:[{radius:"40%",background:"#617df2"},{radius:"35%",background:"#afc8ff"},{radius:"30%",background:"#869cfa",pointer:!0,fonts:[{text:"开始",top:"-10px"}]}],prizes:[{fonts:[{text:"奖品1",top:"10px"}],background:d[0],range:10},{fonts:[{text:"奖品2",top:"10px"}],background:d[0],range:10}]}),y=()=>{a.prizes.push(JSON.parse(JSON.stringify(h)))},v=()=>{if(a.prizes.length<2){b({type:"info",message:"至少设置两个奖品"});return}if(a.prizes.find(l=>l.fonts[0].text.trim()==="")){b({type:"info",message:"请填入完整名称"});return}u.value.play(),setTimeout(()=>{u.value.stop()},3e3)},V=l=>{M.alert(`恭喜您抽中了奖品【${l.fonts[0].text}】`,"中奖通知",{confirmButtonText:"确认"})},{blocks:z,defaultConfig:C,buttons:w,prizes:p}=J(a);return(l,Q)=>{const f=t("el-form-item"),m=t("el-col"),x=t("el-row"),B=t("el-input"),N=t("el-input-number"),S=t("el-button"),E=t("el-form"),L=t("LuckyWheel");return r(),g("div",A,[i("div",D,[e(E,null,{default:o(()=>[e(x,null,{default:o(()=>[e(m,{span:24},{default:o(()=>[e(f,{label:"奖品设置："},{default:o(()=>[G]),_:1})]),_:1})]),_:1}),(r(!0),g(O,null,P(n(p),(c,I)=>(r(),k(x,null,{default:o(()=>[e(m,{span:24},{default:o(()=>[e(f,null,{default:o(()=>[e(B,{class:"text",modelValue:c.fonts[0].text,"onUpdate:modelValue":_=>c.fonts[0].text=_,placeholder:"奖品名称"},null,8,["modelValue","onUpdate:modelValue"]),e(N,{class:"range",size:"small",min:0,max:100,modelValue:c.range,"onUpdate:modelValue":_=>c.range=_},null,8,["modelValue","onUpdate:modelValue"]),I===n(p).length-1?(r(),k(S,{key:0,type:"info",plain:"",class:"btn",circle:"",onClick:y},{default:o(()=>[W("＋")]),_:1})):j("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),i("div",H,[e(L,{ref_key:"myLucky",ref:u,width:"250px",height:"250px",blocks:n(z),prizes:n(p),defaultConfig:n(C),buttons:n(w),onStart:v,onEnd:V},null,8,["blocks","prizes","defaultConfig","buttons"])])])}}},Y=U(K,[["__scopeId","data-v-3415051d"]]);export{Y as default};
