import{g as we,_ as be,r as _e,a as Le,t as Ee,b as Q,o as ce,d as le,e as F,f as z,w as J,u as X,i as ke,h as Se,j as ee,l as Oe,E as Te,z as Re,m as Ae,p as je,n as Ne}from"./index-f6a3eef9.js";var $e={exports:{}};(function(o){var a=function(i){var u=Object.prototype,m=u.hasOwnProperty,E=Object.defineProperty||function(r,e,n){r[e]=n.value},h,g=typeof Symbol=="function"?Symbol:{},_=g.iterator||"@@iterator",S=g.asyncIterator||"@@asyncIterator",L=g.toStringTag||"@@toStringTag";function l(r,e,n){return Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),r[e]}try{l({},"")}catch{l=function(e,n,c){return e[n]=c}}function y(r,e,n,c){var t=e&&e.prototype instanceof G?e:G,s=Object.create(t.prototype),d=new K(c||[]);return E(s,"_invoke",{value:re(r,n,d)}),s}i.wrap=y;function k(r,e,n){try{return{type:"normal",arg:r.call(e,n)}}catch(c){return{type:"throw",arg:c}}}var R="suspendedStart",O="suspendedYield",A="executing",$="completed",w={};function G(){}function P(){}function b(){}var W={};l(W,_,function(){return this});var Y=Object.getPrototypeOf,D=Y&&Y(Y(x([])));D&&D!==u&&m.call(D,_)&&(W=D);var I=b.prototype=G.prototype=Object.create(W);P.prototype=b,E(I,"constructor",{value:b,configurable:!0}),E(b,"constructor",{value:P,configurable:!0}),P.displayName=l(b,L,"GeneratorFunction");function q(r){["next","throw","return"].forEach(function(e){l(r,e,function(n){return this._invoke(e,n)})})}i.isGeneratorFunction=function(r){var e=typeof r=="function"&&r.constructor;return e?e===P||(e.displayName||e.name)==="GeneratorFunction":!1},i.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,b):(r.__proto__=b,l(r,L,"GeneratorFunction")),r.prototype=Object.create(I),r},i.awrap=function(r){return{__await:r}};function U(r,e){function n(s,d,f,p){var v=k(r[s],r,d);if(v.type==="throw")p(v.arg);else{var Z=v.arg,j=Z.value;return j&&typeof j=="object"&&m.call(j,"__await")?e.resolve(j.__await).then(function(N){n("next",N,f,p)},function(N){n("throw",N,f,p)}):e.resolve(j).then(function(N){Z.value=N,f(Z)},function(N){return n("throw",N,f,p)})}}var c;function t(s,d){function f(){return new e(function(p,v){n(s,d,p,v)})}return c=c?c.then(f,f):f()}E(this,"_invoke",{value:t})}q(U.prototype),l(U.prototype,S,function(){return this}),i.AsyncIterator=U,i.async=function(r,e,n,c,t){t===void 0&&(t=Promise);var s=new U(y(r,e,n,c),t);return i.isGeneratorFunction(e)?s:s.next().then(function(d){return d.done?d.value:s.next()})};function re(r,e,n){var c=R;return function(s,d){if(c===A)throw new Error("Generator is already running");if(c===$){if(s==="throw")throw d;return V()}for(n.method=s,n.arg=d;;){var f=n.delegate;if(f){var p=H(f,n);if(p){if(p===w)continue;return p}}if(n.method==="next")n.sent=n._sent=n.arg;else if(n.method==="throw"){if(c===R)throw c=$,n.arg;n.dispatchException(n.arg)}else n.method==="return"&&n.abrupt("return",n.arg);c=A;var v=k(r,e,n);if(v.type==="normal"){if(c=n.done?$:O,v.arg===w)continue;return{value:v.arg,done:n.done}}else v.type==="throw"&&(c=$,n.method="throw",n.arg=v.arg)}}}function H(r,e){var n=e.method,c=r.iterator[n];if(c===h)return e.delegate=null,n==="throw"&&r.iterator.return&&(e.method="return",e.arg=h,H(r,e),e.method==="throw")||n!=="return"&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var t=k(c,r.iterator,e.arg);if(t.type==="throw")return e.method="throw",e.arg=t.arg,e.delegate=null,w;var s=t.arg;if(!s)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w;if(s.done)e[r.resultName]=s.value,e.next=r.nextLoc,e.method!=="return"&&(e.method="next",e.arg=h);else return s;return e.delegate=null,w}q(I),l(I,L,"Generator"),l(I,_,function(){return this}),l(I,"toString",function(){return"[object Generator]"});function oe(r){var e={tryLoc:r[0]};1 in r&&(e.catchLoc=r[1]),2 in r&&(e.finallyLoc=r[2],e.afterLoc=r[3]),this.tryEntries.push(e)}function C(r){var e=r.completion||{};e.type="normal",delete e.arg,r.completion=e}function K(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(oe,this),this.reset(!0)}i.keys=function(r){var e=Object(r),n=[];for(var c in e)n.push(c);return n.reverse(),function t(){for(;n.length;){var s=n.pop();if(s in e)return t.value=s,t.done=!1,t}return t.done=!0,t}};function x(r){if(r){var e=r[_];if(e)return e.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var n=-1,c=function t(){for(;++n<r.length;)if(m.call(r,n))return t.value=r[n],t.done=!1,t;return t.value=h,t.done=!0,t};return c.next=c}}return{next:V}}i.values=x;function V(){return{value:h,done:!0}}return K.prototype={constructor:K,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(C),!r)for(var e in this)e.charAt(0)==="t"&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=h)},stop:function(){this.done=!0;var r=this.tryEntries[0],e=r.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(p,v){return s.type="throw",s.arg=r,e.next=p,v&&(e.method="next",e.arg=h),!!v}for(var c=this.tryEntries.length-1;c>=0;--c){var t=this.tryEntries[c],s=t.completion;if(t.tryLoc==="root")return n("end");if(t.tryLoc<=this.prev){var d=m.call(t,"catchLoc"),f=m.call(t,"finallyLoc");if(d&&f){if(this.prev<t.catchLoc)return n(t.catchLoc,!0);if(this.prev<t.finallyLoc)return n(t.finallyLoc)}else if(d){if(this.prev<t.catchLoc)return n(t.catchLoc,!0)}else if(f){if(this.prev<t.finallyLoc)return n(t.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(r,e){for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n];if(c.tryLoc<=this.prev&&m.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var t=c;break}}t&&(r==="break"||r==="continue")&&t.tryLoc<=e&&e<=t.finallyLoc&&(t=null);var s=t?t.completion:{};return s.type=r,s.arg=e,t?(this.method="next",this.next=t.finallyLoc,w):this.complete(s)},complete:function(r,e){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&e&&(this.next=e),w},finish:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===r)return this.complete(n.completion,n.afterLoc),C(n),w}},catch:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===r){var c=n.completion;if(c.type==="throw"){var t=c.arg;C(n)}return t}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:x(r),resultName:e,nextLoc:n},this.method==="next"&&(this.arg=h),w}},i}(o.exports);try{regeneratorRuntime=a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}})($e);var ae=(o,a)=>`${o}-${a}-${Math.random().toString(16).slice(3,8)}`;const Ie=ae;let ue=0;var ge=({id:o,action:a,payload:i={}})=>{let u=o;return typeof u>"u"&&(u=Ie("Job",ue),ue+=1),{id:u,action:a,payload:i}},B={};let ie=!1;B.logging=ie;B.setLogging=o=>{ie=o};B.log=(...o)=>ie?console.log.apply(globalThis,o):null;const Pe=ge,{log:te}=B,Ce=ae;let de=0;var Me=()=>{const o=Ce("Scheduler",de),a={},i={};let u=[];de+=1;const m=()=>u.length,E=()=>Object.keys(a).length,h=()=>{if(u.length!==0){const l=Object.keys(a);for(let y=0;y<l.length;y+=1)if(typeof i[l[y]]>"u"){u[0](a[l[y]]);break}}},g=(l,y)=>new Promise((k,R)=>{const O=Pe({action:l,payload:y});u.push(async A=>{u.shift(),i[A.id]=O;try{k(await A[l].apply(globalThis,[...y,O.id]))}catch($){R($)}finally{delete i[A.id],h()}}),te(`[${o}]: Add ${O.id} to JobQueue`),te(`[${o}]: JobQueue length=${u.length}`),h()});return{addWorker:l=>(a[l.id]=l,te(`[${o}]: Add ${l.id}`),te(`[${o}]: Number of workers=${E()}`),h(),l.id),addJob:async(l,...y)=>{if(E()===0)throw Error(`[${o}]: You need to have at least one worker before adding jobs`);return g(l,y)},terminate:async()=>{Object.keys(a).forEach(async l=>{await a[l].terminate()}),u=[]},getQueueLen:m,getNumWorkers:E}};function Ge(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function De(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Ue=De;const ze=Ue;var Fe=o=>{const a={};return typeof WorkerGlobalScope<"u"?a.type="webworker":ze()?a.type="electron":typeof document=="object"?a.type="browser":typeof process=="object"&&typeof Ge=="function"&&(a.type="node"),typeof o>"u"?a:a[o]};const Be=Fe("type")==="browser",We=Be?o=>new URL(o,window.location.href).href:o=>o;var Ye=o=>{const a={...o};return["corePath","workerPath","langPath"].forEach(i=>{o[i]&&(a[i]=We(a[i]))}),a},He=o=>{const a=[],i=[],u=[],m=[],E=[];return o.blocks&&o.blocks.forEach(h=>{h.paragraphs.forEach(g=>{g.lines.forEach(_=>{_.words.forEach(S=>{S.symbols.forEach(L=>{E.push({...L,page:o,block:h,paragraph:g,line:_,word:S})}),m.push({...S,page:o,block:h,paragraph:g,line:_})}),u.push({..._,page:o,block:h,paragraph:g})}),i.push({...g,page:o,block:h})}),a.push({...h,page:o})}),{...o,blocks:a,paragraphs:i,lines:u,words:m,symbols:E}},ve={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Ke="tesseract.js",xe="5.0.4",Je="Pure Javascript Multilingual OCR",qe="src/index.js",Ve="src/index.d.ts",Ze="dist/tesseract.min.js",Qe="dist/tesseract.min.js",Xe={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},et={"./src/worker/node/index.js":"./src/worker/browser/index.js"},tt="",rt=["jeromewu"],ot="Apache-2.0",nt={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},st={"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^5.0.0","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},at={"@rollup/pluginutils":"^5.0.2"},it={type:"git",url:"https://github.com/naptha/tesseract.js.git"},ct={url:"https://github.com/naptha/tesseract.js/issues"},lt="https://github.com/naptha/tesseract.js",ut={type:"opencollective",url:"https://opencollective.com/tesseractjs"},dt={name:Ke,version:xe,description:Je,main:qe,types:Ve,unpkg:Ze,jsdelivr:Qe,scripts:Xe,browser:et,author:tt,contributors:rt,license:ot,devDependencies:nt,dependencies:st,overrides:at,repository:it,bugs:ct,homepage:lt,collective:ut};var ft={workerBlobURL:!0,logger:()=>{}};const pt=dt.version,ht=ft;var gt={...ht,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${pt}/dist/worker.min.js`},vt=({workerPath:o,workerBlobURL:a})=>{let i;if(Blob&&URL&&a){const u=new Blob([`importScripts("${o}");`],{type:"application/javascript"});i=new Worker(URL.createObjectURL(u))}else i=new Worker(o);return i},mt=o=>{o.terminate()},yt=(o,a)=>{o.onmessage=({data:i})=>{a(i)}},wt=async(o,a)=>{o.postMessage(a)};const ne=o=>new Promise((a,i)=>{const u=new FileReader;u.onload=()=>{a(u.result)},u.onerror=({target:{error:{code:m}}})=>{i(Error(`File could not be read! Code=${m}`))},u.readAsArrayBuffer(o)}),se=async o=>{let a=o;if(typeof o>"u")return"undefined";if(typeof o=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(o)?a=atob(o.split(",")[1]).split("").map(i=>i.charCodeAt(0)):a=await(await fetch(o)).arrayBuffer();else if(typeof HTMLElement<"u"&&o instanceof HTMLElement)o.tagName==="IMG"&&(a=await se(o.src)),o.tagName==="VIDEO"&&(a=await se(o.poster)),o.tagName==="CANVAS"&&await new Promise(i=>{o.toBlob(async u=>{a=await ne(u),i()})});else if(typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas){const i=await o.convertToBlob();a=await ne(i)}else(o instanceof File||o instanceof Blob)&&(a=await ne(o));return new Uint8Array(a)};var bt=se;const _t=gt,Lt=vt,Et=mt,kt=yt,St=wt,Ot=bt;var Tt={defaultOptions:_t,spawnWorker:Lt,terminateWorker:Et,onMessage:kt,send:St,loadImage:Ot};const Rt=Ye,At=He,T=ge,{log:fe}=B,jt=ae,M=ve,{defaultOptions:Nt,spawnWorker:$t,terminateWorker:It,onMessage:Pt,loadImage:pe,send:Ct}=Tt;let he=0;var me=async(o="eng",a=M.LSTM_ONLY,i={},u={})=>{const m=jt("Worker",he),{logger:E,errorHandler:h,...g}=Rt({...Nt,...i}),_={},S={},L=typeof o=="string"?o.split("+"):o;let l=a,y=u;const k=[M.DEFAULT,M.LSTM_ONLY].includes(a)&&!g.legacyCore;let R,O;const A=new Promise((t,s)=>{O=t,R=s}),$=t=>{R(t.message)};let w=$t(g);w.onerror=$,he+=1;const G=(t,s)=>{_[t]=s},P=(t,s)=>{S[t]=s},b=({id:t,action:s,payload:d})=>new Promise((f,p)=>{fe(`[${m}]: Start ${t}, action=${s}`),G(s,f),P(s,p),Ct(w,{workerId:m,jobId:t,action:s,payload:d})}),W=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),Y=t=>b(T({id:t,action:"load",payload:{options:{lstmOnly:k,corePath:g.corePath,logging:g.logging}}})),D=(t,s,d)=>b(T({id:d,action:"FS",payload:{method:"writeFile",args:[t,s]}})),I=(t,s)=>b(T({id:s,action:"FS",payload:{method:"readFile",args:[t,{encoding:"utf8"}]}})),q=(t,s)=>b(T({id:s,action:"FS",payload:{method:"unlink",args:[t]}})),U=(t,s,d)=>b(T({id:d,action:"FS",payload:{method:t,args:s}})),re=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),H=(t,s)=>b(T({id:s,action:"loadLanguage",payload:{langs:t,options:{langPath:g.langPath,dataPath:g.dataPath,cachePath:g.cachePath,cacheMethod:g.cacheMethod,gzip:g.gzip,lstmOnly:[M.LSTM_ONLY,M.TESSERACT_LSTM_COMBINED].includes(l)&&!g.legacyLang}}})),oe=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),C=(t,s,d,f)=>b(T({id:f,action:"initialize",payload:{langs:t,oem:s,config:d}})),K=(t="eng",s,d,f)=>{if(k&&[M.TESSERACT_ONLY,M.TESSERACT_LSTM_COMBINED].includes(s))throw Error("Legacy model requested but code missing.");const p=s||l;l=p;const v=d||y;y=v;const j=(typeof t=="string"?t.split("+"):t).filter(N=>!L.includes(N));return L.push(...j),j.length>0?H(j,f).then(()=>C(t,p,v,f)):C(t,p,v,f)},x=(t={},s)=>b(T({id:s,action:"setParameters",payload:{params:t}})),V=async(t,s={},d={blocks:!0,text:!0,hocr:!0,tsv:!0},f)=>b(T({id:f,action:"recognize",payload:{image:await pe(t),options:s,output:d}})),r=(t="Tesseract OCR Result",s=!1,d)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),b(T({id:d,action:"getPDF",payload:{title:t,textonly:s}}))),e=async(t,s)=>{if(k)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return b(T({id:s,action:"detect",payload:{image:await pe(t)}}))},n=async()=>(w!==null&&(It(w),w=null),Promise.resolve());Pt(w,({workerId:t,jobId:s,status:d,action:f,data:p})=>{if(d==="resolve"){fe(`[${t}]: Complete ${s}`);let v=p;f==="recognize"?v=At(p):f==="getPDF"&&(v=Array.from({...p,length:Object.keys(p).length})),_[f]({jobId:s,data:v})}else if(d==="reject")if(S[f](p),f==="load"&&R(p),h)h(p);else throw Error(p);else d==="progress"&&E({...p,userJobId:s})});const c={id:m,worker:w,setResolve:G,setReject:P,load:W,writeText:D,readText:I,removeFile:q,FS:U,loadLanguage:re,initialize:oe,reinitialize:K,setParameters:x,recognize:V,getPDF:r,detect:e,terminate:n};return Y().then(()=>H(o)).then(()=>C(o,a,u)).then(()=>O(c)).catch(()=>{}),A};const ye=me,Mt=async(o,a,i)=>{const u=await ye(a,1,i);return u.recognize(o).finally(async()=>{await u.terminate()})},Gt=async(o,a)=>{const i=await ye("osd",0,a);return i.detect(o).finally(async()=>{await i.terminate()})};var Dt={recognize:Mt,detect:Gt},Ut={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},zt={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Ft=Me,Bt=me,Wt=Dt,Yt=Ut,Ht=ve,Kt=zt,{setLogging:xt}=B;var Jt={languages:Yt,OEM:Ht,PSM:Kt,createScheduler:Ft,createWorker:Bt,setLogging:xt,...Wt};const qt=we(Jt);const Vt=o=>(je("data-v-1bc9a372"),o=o(),Ne(),o),Zt={class:"image-ocr"},Qt=Vt(()=>F("div",{class:"el-upload__text"},"拖拽或点击上传图片",-1)),Xt={key:0,class:"parse-btn"},er={class:"parse-result"},tr={class:"label"},rr=["innerHTML"],or={__name:"index",setup(o){const a=_e(),i=Le({fileList:[],result:""}),u=L=>{console.log(L),L&&(i.fileList=[L])},m=L=>{a.value.clearFiles();const l=L[0];l.uid=Oe(),a.value.handleStart(l)},E=()=>{if(!i.fileList.length){Te({type:"info",message:"请上传图片"});return}const L=Re.service({fullscreen:!0});let l=i.fileList[0].raw,y=URL.createObjectURL(l);qt.recognize(y,"chi_sim").then(k=>{L.close(),console.log(k.data),i.result=k.data.text.replace(/\n/g,"<br>")})},h=()=>{i.result=i.result.replace(/\s/g,"")},g=()=>{navigator.clipboard.writeText(i.result.replace(/<br>/g,`
`))},{fileList:_,result:S}=Ee(i);return(L,l)=>{const y=Q("el-icon"),k=Q("el-upload"),R=Q("el-button"),O=Q("el-link");return ce(),le("div",Zt,[F("div",null,[z(k,{ref_key:"uploadRef",ref:a,drag:"",action:"","auto-upload":!1,accept:".bmp,.jpg,.png,.pbm,.webp","on-exceed":m,"on-change":u,limit:1,"file-list":X(_),"onUpdate:fileList":l[0]||(l[0]=A=>ke(_)?_.value=A:null)},{default:J(()=>[z(y,{class:"el-icon--upload"},{default:J(()=>[z(X(Ae))]),_:1}),Qt]),_:1},8,["file-list"])]),X(_).length?(ce(),le("div",Xt,[z(R,{type:"info",onClick:E},{default:J(()=>[ee("开始识别")]),_:1})])):Se("",!0),F("div",er,[F("div",tr,[ee(" 识别结果 "),F("div",null,[z(O,{type:"info",onClick:g},{default:J(()=>[ee("复制内容")]),_:1}),z(O,{style:{"margin-left":"10px"},type:"info",onClick:h},{default:J(()=>[ee("去除空格")]),_:1})])]),F("div",{class:"result",innerHTML:X(S)},null,8,rr)])])}}},sr=be(or,[["__scopeId","data-v-1bc9a372"]]);export{sr as default};
