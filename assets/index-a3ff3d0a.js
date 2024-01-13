import{_ as B,r as F,a as E,t as j,b as y,o as V,d as b,e as f,f as s,w as m,u as r,i as M,l as N,m as O,F as P,s as $,p as J,n as C,x as D}from"./index-7aa050ab.js";const v=x=>(J("data-v-3136298c"),x=x(),C(),x),T={class:"image-water"},W={class:"upload-area"},X=v(()=>f("div",{class:"el-upload__text"},"拖拽或点击上传图片",-1)),Y={class:"parse-result"},q=v(()=>f("div",{class:"label"},"处理结果",-1)),G={class:"result"},K=["src"],Q={class:"form"},Z=v(()=>f("div",{class:"tip"},"建议取值范围1-5，值越大，水印越多，可能会导致水印重叠",-1)),H=v(()=>f("div",{class:"tip"},"单个水印文字的行数",-1)),ee={__name:"index",setup(x){const S=F(),c={color:"rgba(255,255,255,0.7)",fontSize:16,density:3,row:1,textArray:["水印"]},a=E({fileList:[],resultSrc:"",form:{color:c.color,fontSize:c.fontSize,density:c.density,row:c.row,textArray:c.textArray}}),U=t=>{console.log(t),t&&(a.fileList=[t],g())},L=()=>{if(a.form.row>0){let t=JSON.parse(JSON.stringify(a.form.textArray));a.form.textArray=[];for(let e=0;e<a.form.row;e++)a.form.textArray.push(t[e]??"")}},R=t=>{S.value.clearFiles();const e=t[0];e.uid=N(),S.value.handleStart(e)},g=()=>{if(!a.fileList.length)return;let t=new FileReader;t.readAsDataURL(a.fileList[0].raw),t.onload=()=>{const e=new Image;e.src=t.result;const _={font:"microsoft yahei",textArray:a.form.textArray.filter(o=>o!==void 0&&o!=="").length>0?a.form.textArray:c.textArray,density:a.form.density||c.density,color:a.form.color||c.color,fontSize:a.form.fontSize||c.fontSize};e.onload=()=>{const o=document.createElement("canvas");o.width=e.width,o.height=e.height;const p=o.getContext("2d");p.drawImage(e,0,0,o.width,o.height),z(p,o.width,o.height,_),o.toBlob(u=>{const l=document.createElement("img"),i=URL.createObjectURL(u);l.onload=function(){URL.revokeObjectURL(i)},a.resultSrc=i})}}},z=(t,e,_,o)=>{t.font=`${o.fontSize}px ${o.font}`,t.lineWidth=1,t.fillStyle=o.color,t.textAlign="left",t.textBaseline="middle";const p=Math.max(e,_),u=Math.floor(p/o.density),l=[0];for(;l[l.length-1]<p/2;)l.push(l[l.length-1]+u);l.push(...l.slice(1,l.length).map(i=>-i));for(let i=0;i<l.length;i++)for(let n=0;n<l.length;n++)t.save(),t.translate(e/2,_/2),t.rotate(-Math.PI/5),o.textArray.length>3&&(o.textArray=o.textArray.slice(0,3)),o.textArray.forEach((h,w)=>{const k=o.fontSize*w+2;t.fillText(h,l[i],l[n]+k)}),t.restore()},{fileList:A,resultSrc:I,form:d}=j(a);return(t,e)=>{const _=y("el-icon"),o=y("el-upload"),p=y("el-color-picker"),u=y("el-form-item"),l=y("el-input"),i=y("el-form");return V(),b("div",T,[f("div",W,[s(o,{ref_key:"uploadRef",ref:S,class:"upload-demo",drag:"",action:"","auto-upload":!1,accept:".jpg,.png,.gif","on-exceed":R,"on-change":U,limit:1,"file-list":r(A),"onUpdate:fileList":e[0]||(e[0]=n=>M(A)?A.value=n:null)},{default:m(()=>[s(_,{class:"el-icon--upload"},{default:m(()=>[s(r(O))]),_:1}),X]),_:1},8,["file-list"])]),f("div",Y,[q,f("div",G,[f("img",{src:r(I),alt:""},null,8,K)])]),f("div",Q,[s(i,{"label-wdith":"80px"},{default:m(()=>[s(u,{label:"水印颜色："},{default:m(()=>[s(p,{modelValue:r(d).color,"onUpdate:modelValue":e[1]||(e[1]=n=>r(d).color=n),"show-alpha":"",onChange:g},null,8,["modelValue"])]),_:1}),s(u,{label:"水印大小："},{default:m(()=>[s(l,{type:"number",min:1,modelValue:r(d).fontSize,"onUpdate:modelValue":e[2]||(e[2]=n=>r(d).fontSize=n),onChange:g},null,8,["modelValue"])]),_:1}),s(u,{label:"水印密度："},{default:m(()=>[s(l,{type:"number",min:1,modelValue:r(d).density,"onUpdate:modelValue":e[3]||(e[3]=n=>r(d).density=n),onChange:g},null,8,["modelValue"])]),_:1}),Z,s(u,{label:"水印行数："},{default:m(()=>[s(l,{type:"number",min:1,modelValue:r(d).row,"onUpdate:modelValue":e[4]||(e[4]=n=>r(d).row=n),onChange:L},null,8,["modelValue"])]),_:1}),H,s(u,{label:"水印内容："},{default:m(()=>[(V(!0),b(P,null,$(r(d).textArray,(n,h)=>(V(),D(l,{style:{"margin-bottom":"2px"},key:h,modelValue:r(d).textArray[h],"onUpdate:modelValue":w=>r(d).textArray[h]=w,onChange:g,placeholder:`第${h+1}行水印`},null,8,["modelValue","onUpdate:modelValue","placeholder"]))),128))]),_:1})]),_:1})])])}}},oe=B(ee,[["__scopeId","data-v-3136298c"]]);export{oe as default};
