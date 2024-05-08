import{d as B,r as F,a as j,t as E,b as U,e as f,f as r,w as p,u as n,i as M,l as N,m,o as V,n as O,F as P,x as $,y as C,p as J,q,_ as D}from"./index-9fca570e.js";const b=v=>(J("data-v-b1c6be20"),v=v(),q(),v),T={class:"image-water"},W={class:"upload-area"},X=b(()=>f("div",{class:"el-upload__text"},"拖拽或点击上传图片",-1)),Y={class:"parse-result"},G=b(()=>f("div",{class:"label"},"处理结果",-1)),K={class:"result"},Q=["src"],Z={class:"form"},H=b(()=>f("div",{class:"tip"},"建议取值范围1-5，值越大，水印越多，可能会导致水印重叠",-1)),ee=b(()=>f("div",{class:"tip"},"单个水印文字的行数",-1)),te=B({__name:"index",setup(v){const S=F(),c={color:"rgba(255,255,255,0.7)",fontSize:16,density:3,row:1,textArray:["水印"]},a=j({fileList:[],resultSrc:"",form:{color:c.color,fontSize:c.fontSize,density:c.density,row:c.row,textArray:c.textArray}}),L=t=>{console.log(t),t&&(a.fileList=[t],g())},R=()=>{if(a.form.row>0){let t=JSON.parse(JSON.stringify(a.form.textArray));a.form.textArray=[];for(let e=0;e<a.form.row;e++)a.form.textArray.push(t[e]??"")}},z=t=>{S.value.clearFiles();const e=t[0];e.uid=N(),S.value.handleStart(e)},g=()=>{if(!a.fileList.length)return;let t=new FileReader;t.readAsDataURL(a.fileList[0].raw),t.onload=()=>{const e=new Image;e.src=t.result;const h={font:"microsoft yahei",textArray:a.form.textArray.filter(o=>o!==void 0&&o!=="").length>0?a.form.textArray:c.textArray,density:a.form.density||c.density,color:a.form.color||c.color,fontSize:a.form.fontSize||c.fontSize};e.onload=()=>{const o=document.createElement("canvas");o.width=e.width,o.height=e.height;const _=o.getContext("2d");_.drawImage(e,0,0,o.width,o.height),I(_,o.width,o.height,h),o.toBlob(u=>{const l=document.createElement("img"),i=URL.createObjectURL(u);l.onload=function(){URL.revokeObjectURL(i)},a.resultSrc=i})}}},I=(t,e,h,o)=>{t.font=`${o.fontSize}px ${o.font}`,t.lineWidth=1,t.fillStyle=o.color,t.textAlign="left",t.textBaseline="middle";const _=Math.max(e,h),u=Math.floor(_/o.density),l=[0];for(;l[l.length-1]<_/2;)l.push(l[l.length-1]+u);l.push(...l.slice(1,l.length).map(i=>-i));for(let i=0;i<l.length;i++)for(let x=0;x<l.length;x++)t.save(),t.translate(e/2,h/2),t.rotate(-Math.PI/5),o.textArray.length>3&&(o.textArray=o.textArray.slice(0,3)),o.textArray.forEach((s,y)=>{const A=o.fontSize*y+2;t.fillText(s,l[i],l[x]+A)}),t.restore()},{fileList:w,resultSrc:k,form:d}=E(a);return(t,e)=>{const h=m("el-icon"),o=m("el-upload"),_=m("el-color-picker"),u=m("el-form-item"),l=m("el-input-number"),i=m("el-input"),x=m("el-form");return V(),U("div",T,[f("div",W,[r(o,{ref_key:"uploadRef",ref:S,class:"upload-demo",drag:"",action:"","auto-upload":!1,accept:".jpg,.png,.gif.jpeg,.webp","on-exceed":z,"on-change":L,limit:1,"file-list":n(w),"onUpdate:fileList":e[0]||(e[0]=s=>M(w)?w.value=s:null)},{default:p(()=>[r(h,{class:"el-icon--upload"},{default:p(()=>[r(n(O))]),_:1}),X]),_:1},8,["file-list"])]),f("div",Y,[G,f("div",K,[f("img",{src:n(k),alt:""},null,8,Q)])]),f("div",Z,[r(x,{"label-wdith":"80px"},{default:p(()=>[r(u,{label:"水印颜色："},{default:p(()=>[r(_,{modelValue:n(d).color,"onUpdate:modelValue":e[1]||(e[1]=s=>n(d).color=s),"show-alpha":"",onChange:g},null,8,["modelValue"])]),_:1}),r(u,{label:"水印大小："},{default:p(()=>[r(l,{min:1,modelValue:n(d).fontSize,"onUpdate:modelValue":e[2]||(e[2]=s=>n(d).fontSize=s),onChange:g},null,8,["modelValue"])]),_:1}),r(u,{label:"水印密度："},{default:p(()=>[r(l,{min:1,modelValue:n(d).density,"onUpdate:modelValue":e[3]||(e[3]=s=>n(d).density=s),onChange:g},null,8,["modelValue"])]),_:1}),H,r(u,{label:"水印行数："},{default:p(()=>[r(l,{min:1,modelValue:n(d).row,"onUpdate:modelValue":e[4]||(e[4]=s=>n(d).row=s),onChange:R},null,8,["modelValue"])]),_:1}),ee,r(u,{label:"水印内容："},{default:p(()=>[(V(!0),U(P,null,$(n(d).textArray,(s,y)=>(V(),C(i,{style:{"margin-bottom":"2px"},key:y,modelValue:n(d).textArray[y],"onUpdate:modelValue":A=>n(d).textArray[y]=A,onChange:g,placeholder:`第${y+1}行水印`},null,8,["modelValue","onUpdate:modelValue","placeholder"]))),128))]),_:1})]),_:1})])])}}});const le=D(te,[["__scopeId","data-v-b1c6be20"]]);export{le as default};
