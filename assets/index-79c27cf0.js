import{_ as Lt,a as Dt,t as Ut,b as Ft,o as vt,d as kt,e as L,f as zt,u as Z,i as Vt,q as Ht,v as Kt,p as Jt,n as Yt}from"./index-dc23012a.js";var H={},Ot=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},wt={},N={};let ut;const $t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return $t[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ut=t};N.isKanjiModeEnabled=function(){return typeof ut<"u"};N.toSJIS=function(t){return ut(t)};var q={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(q);function mt(){this.buffer=[],this.length=0}mt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var qt=mt;function K(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}K.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};K.prototype.get=function(e,t){return this.data[e*this.size+t]};K.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};K.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var jt=K,yt={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,c=[n-7];for(let u=1;u<o-1;u++)c[u]=c[u-1]-s;return c.push(6),c.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let c=0;c<s;c++)for(let u=0;u<s;u++)c===0&&u===0||c===0&&u===s-1||c===s-1&&u===0||o.push([n[c],n[u]]);return o}})(yt);var Et={};const Gt=N.getSymbolSize,dt=7;Et.getPositions=function(t){const i=Gt(t);return[[0,0],[i-dt,0],[0,i-dt]]};var Ct={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,c=0,u=0,a=null,l=null;for(let p=0;p<n;p++){c=u=0,a=l=null;for(let w=0;w<n;w++){let f=o.get(p,w);f===a?c++:(c>=5&&(s+=t.N1+(c-5)),a=f,c=1),f=o.get(w,p),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}c>=5&&(s+=t.N1+(c-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let c=0;c<n-1;c++)for(let u=0;u<n-1;u++){const a=o.get(c,u)+o.get(c,u+1)+o.get(c+1,u)+o.get(c+1,u+1);(a===4||a===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,c=0,u=0;for(let a=0;a<n;a++){c=u=0;for(let l=0;l<n;l++)c=c<<1&2047|o.get(a,l),l>=10&&(c===1488||c===93)&&s++,u=u<<1&2047|o.get(l,a),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let u=0;u<s;u++)n+=o.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let c=0;c<s;c++)for(let u=0;u<s;u++)n.isReserved(u,c)||n.xor(u,c,i(o,u,c))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let c=0,u=1/0;for(let a=0;a<s;a++){n(a),e.applyMask(a,o);const l=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(a,o),l<u&&(u=l,c=a)}return c}})(Ct);var j={};const P=q,J=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Y=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];j.getBlocksCount=function(t,i){switch(i){case P.L:return J[(t-1)*4+0];case P.M:return J[(t-1)*4+1];case P.Q:return J[(t-1)*4+2];case P.H:return J[(t-1)*4+3];default:return}};j.getTotalCodewordsCount=function(t,i){switch(i){case P.L:return Y[(t-1)*4+0];case P.M:return Y[(t-1)*4+1];case P.Q:return Y[(t-1)*4+2];case P.H:return Y[(t-1)*4+3];default:return}};var pt={},G={};const z=new Uint8Array(512),O=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)z[i]=t,O[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)z[i]=z[i-255]})();G.log=function(t){if(t<1)throw new Error("log("+t+")");return O[t]};G.exp=function(t){return z[t]};G.mul=function(t,i){return t===0||i===0?0:z[O[t]+O[i]]};(function(e){const t=G;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let c=0;c<o.length;c++)n[s+c]^=t.mul(r[s],o[c]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let u=0;u<o.length;u++)n[u]^=t.mul(o[u],s);let c=0;for(;c<n.length&&n[c]===0;)c++;n=n.slice(c)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(pt);const Bt=pt;function ct(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ct.prototype.initialize=function(t){this.degree=t,this.genPoly=Bt.generateECPolynomial(this.degree)};ct.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Bt.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var Qt=ct,At={},R={},at={};at.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var b={};const It="[0-9]+",Wt="[A-Z $%*+\\-./:]+";let V="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";V=V.replace(/u/g,"\\u");const Zt="(?:(?![A-Z0-9 $%*+\\-./:]|"+V+`)(?:.|[\r
]))+`;b.KANJI=new RegExp(V,"g");b.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");b.BYTE=new RegExp(Zt,"g");b.NUMERIC=new RegExp(It,"g");b.ALPHANUMERIC=new RegExp(Wt,"g");const Xt=new RegExp("^"+V+"$"),xt=new RegExp("^"+It+"$"),te=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");b.testKanji=function(t){return Xt.test(t)};b.testNumeric=function(t){return xt.test(t)};b.testAlphanumeric=function(t){return te.test(t)};(function(e){const t=at,i=b;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(R);(function(e){const t=N,i=j,r=q,o=R,n=at,s=7973,c=t.getBCHDigit(s);function u(w,f,m){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,m,w))return y}function a(w,f){return o.getCharCountIndicator(w,f)+4}function l(w,f){let m=0;return w.forEach(function(y){const I=a(y.mode,f);m+=I+y.getBitsLength()}),m}function p(w,f){for(let m=1;m<=40;m++)if(l(w,m)<=e.getCapacity(m,f,o.MIXED))return m}e.from=function(f,m){return n.isValid(f)?parseInt(f,10):m},e.getCapacity=function(f,m,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const I=t.getSymbolTotalCodewords(f),h=i.getTotalCodewordsCount(f,m),E=(I-h)*8;if(y===o.MIXED)return E;const g=E-a(y,f);switch(y){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,m){let y;const I=r.from(m,r.M);if(Array.isArray(f)){if(f.length>1)return p(f,I);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),I)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let m=f<<12;for(;t.getBCHDigit(m)-c>=0;)m^=s<<t.getBCHDigit(m)-c;return f<<12|m}})(At);var Nt={};const ot=N,Tt=1335,ee=21522,gt=ot.getBCHDigit(Tt);Nt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;ot.getBCHDigit(o)-gt>=0;)o^=Tt<<ot.getBCHDigit(o)-gt;return(r<<10|o)^ee};var St={};const ne=R;function D(e){this.mode=ne.NUMERIC,this.data=e.toString()}D.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var oe=D;const re=R,X=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function U(e){this.mode=re.ALPHANUMERIC,this.data=e}U.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=X.indexOf(this.data[i])*45;r+=X.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(X.indexOf(this.data[i]),6)};var ie=U,se=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const ue=se,ce=R;function F(e){this.mode=ce.BYTE,typeof e=="string"&&(e=ue(e)),this.data=new Uint8Array(e)}F.getBitsLength=function(t){return t*8};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var ae=F;const le=R,fe=N;function v(e){this.mode=le.KANJI,this.data=e}v.getBitsLength=function(t){return t*13};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=fe.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var de=v,bt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var c=t.PriorityQueue.make();c.push(r,0);for(var u,a,l,p,w,f,m,y,I;!c.empty();){u=c.pop(),a=u.value,p=u.cost,w=i[a]||{};for(l in w)w.hasOwnProperty(l)&&(f=w[l],m=p+f,y=s[l],I=typeof s[l]>"u",(I||y>m)&&(s[l]=m,c.push(l,m),n[l]=a))}if(typeof o<"u"&&typeof s[o]>"u"){var h=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(h)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(bt);var ge=bt.exports;(function(e){const t=R,i=oe,r=ie,o=ae,n=de,s=b,c=N,u=ge;function a(h){return unescape(encodeURIComponent(h)).length}function l(h,E,g){const d=[];let C;for(;(C=h.exec(g))!==null;)d.push({data:C[0],index:C.index,mode:E,length:C[0].length});return d}function p(h){const E=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,C;return c.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),C=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),C=[]),E.concat(g,d,C).sort(function(A,T){return A.index-T.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function w(h,E){switch(E){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return r.getBitsLength(h);case t.KANJI:return n.getBitsLength(h);case t.BYTE:return o.getBitsLength(h)}}function f(h){return h.reduce(function(E,g){const d=E.length-1>=0?E[E.length-1]:null;return d&&d.mode===g.mode?(E[E.length-1].data+=g.data,E):(E.push(g),E)},[])}function m(h){const E=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:E.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:E.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:E.push([d,{data:d.data,mode:t.BYTE,length:a(d.data)}]);break;case t.BYTE:E.push([{data:d.data,mode:t.BYTE,length:a(d.data)}])}}return E}function y(h,E){const g={},d={start:{}};let C=["start"];for(let B=0;B<h.length;B++){const A=h[B],T=[];for(let _=0;_<A.length;_++){const S=A[_],k=""+B+_;T.push(k),g[k]={node:S,lastCount:0},d[k]={};for(let W=0;W<C.length;W++){const M=C[W];g[M]&&g[M].node.mode===S.mode?(d[M][k]=w(g[M].lastCount+S.length,S.mode)-w(g[M].lastCount,S.mode),g[M].lastCount+=S.length):(g[M]&&(g[M].lastCount=S.length),d[M][k]=w(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,E))}}C=T}for(let B=0;B<C.length;B++)d[C[B]].end=0;return{map:d,table:g}}function I(h,E){let g;const d=t.getBestModeForData(h);if(g=t.from(E,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!c.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new r(h);case t.KANJI:return new n(h);case t.BYTE:return new o(h)}}e.fromArray=function(E){return E.reduce(function(g,d){return typeof d=="string"?g.push(I(d,null)):d.data&&g.push(I(d.data,d.mode)),g},[])},e.fromString=function(E,g){const d=p(E,c.isKanjiModeEnabled()),C=m(d),B=y(C,g),A=u.find_path(B.map,"start","end"),T=[];for(let _=1;_<A.length-1;_++)T.push(B.table[A[_]].node);return e.fromArray(f(T))},e.rawSplit=function(E){return e.fromArray(p(E,c.isKanjiModeEnabled()))}})(St);const Q=N,x=q,he=qt,we=jt,me=yt,ye=Et,rt=Ct,it=j,Ee=Qt,$=At,Ce=Nt,pe=R,tt=St;function Be(e,t){const i=e.size,r=ye.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let c=-1;c<=7;c++)if(!(n+c<=-1||i<=n+c))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(c>=0&&c<=6&&(u===0||u===6)||u>=0&&u<=6&&(c===0||c===6)||c>=2&&c<=4&&u>=2&&u<=4?e.set(n+c,s+u,!0,!0):e.set(n+c,s+u,!1,!0))}}function Ae(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Ie(e,t){const i=me.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?e.set(o+s,n+c,!0,!0):e.set(o+s,n+c,!1,!0)}}function Ne(e,t){const i=e.size,r=$.getEncodedBits(t);let o,n,s;for(let c=0;c<18;c++)o=Math.floor(c/3),n=c%3+i-8-3,s=(r>>c&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function et(e,t,i){const r=e.size,o=Ce.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function Te(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let u=0;u<2;u++)if(!e.isReserved(o,c-u)){let a=!1;s<t.length&&(a=(t[s]>>>n&1)===1),e.set(o,c-u,a),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Se(e,t,i){const r=new he;i.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),pe.getCharCountIndicator(u.mode,e)),u.write(r)});const o=Q.getSymbolTotalCodewords(e),n=it.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const c=(s-r.getLengthInBits())/8;for(let u=0;u<c;u++)r.put(u%2?17:236,8);return be(r,e,t)}function be(e,t,i){const r=Q.getSymbolTotalCodewords(t),o=it.getTotalCodewordsCount(t,i),n=r-o,s=it.getBlocksCount(t,i),c=r%s,u=s-c,a=Math.floor(r/s),l=Math.floor(n/s),p=l+1,w=a-l,f=new Ee(w);let m=0;const y=new Array(s),I=new Array(s);let h=0;const E=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const T=A<u?l:p;y[A]=E.slice(m,m+T),I[A]=f.encode(y[A]),m+=T,h=Math.max(h,T)}const g=new Uint8Array(r);let d=0,C,B;for(C=0;C<h;C++)for(B=0;B<s;B++)C<y[B].length&&(g[d++]=y[B][C]);for(C=0;C<w;C++)for(B=0;B<s;B++)g[d++]=I[B][C];return g}function Me(e,t,i,r){let o;if(Array.isArray(e))o=tt.fromArray(e);else if(typeof e=="string"){let a=t;if(!a){const l=tt.rawSplit(e);a=$.getBestVersionForData(l,i)}o=tt.fromString(e,a||40)}else throw new Error("Invalid data");const n=$.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Se(t,i,o),c=Q.getSymbolSize(t),u=new we(c);return Be(u,t),Ae(u),Ie(u,t),et(u,i,0),t>=7&&Ne(u,t),Te(u,s),isNaN(r)&&(r=rt.getBestMask(u,et.bind(null,u,i))),rt.applyMask(r,u),et(u,i,r),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}wt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=x.M,o,n;return typeof i<"u"&&(r=x.from(i.errorCorrectionLevel,x.M),o=$.from(i.version),n=rt.from(i.maskPattern),i.toSJISFunc&&Q.setToSJISFunction(i.toSJISFunc)),Me(t,o,r,n)};var Mt={},lt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,c=o.modules.data,u=e.getScale(s,n),a=Math.floor((s+n.margin*2)*u),l=n.margin*u,p=[n.color.light,n.color.dark];for(let w=0;w<a;w++)for(let f=0;f<a;f++){let m=(w*a+f)*4,y=n.color.light;if(w>=l&&f>=l&&w<a-l&&f<a-l){const I=Math.floor((w-l)/u),h=Math.floor((f-l)/u);y=p[c[I*s+h]?1:0]}r[m++]=y.r,r[m++]=y.g,r[m++]=y.b,r[m]=y.a}}})(lt);(function(e){const t=lt;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,c){let u=c,a=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(a=r()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),p=a.getContext("2d"),w=p.createImageData(l,l);return t.qrToImageData(w.data,n,u),i(p,a,l),p.putImageData(w,0,0),a},e.renderToDataURL=function(n,s,c){let u=c;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const a=e.render(n,s,u),l=u.type||"image/png",p=u.rendererOpts||{};return a.toDataURL(l,p.quality)}})(Mt);var _t={};const _e=lt;function ht(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function nt(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function Pe(e,t,i){let r="",o=0,n=!1,s=0;for(let c=0;c<e.length;c++){const u=Math.floor(c%t),a=Math.floor(c/t);!u&&!n&&(n=!0),e[c]?(s++,c>0&&u>0&&e[c-1]||(r+=n?nt("M",u+i,.5+a+i):nt("m",o,0),o=0,n=!1),u+1<t&&e[c+1]||(r+=nt("h",s),s=0)):o++}return r}_t.render=function(t,i,r){const o=_e.getOptions(i),n=t.modules.size,s=t.modules.data,c=n+o.margin*2,u=o.color.light.a?"<path "+ht(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",a="<path "+ht(o.color.dark,"stroke")+' d="'+Pe(s,n,o.margin)+'"/>',l='viewBox="0 0 '+c+" "+c+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+a+`</svg>
`;return typeof r=="function"&&r(null,w),w};const Re=Ot,st=wt,Pt=Mt,Le=_t;function ft(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,c=typeof n[s-1]=="function";if(!c&&!Re())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(u,a){try{const l=st.create(i,r);u(e(l,t,r))}catch(l){a(l)}})}try{const u=st.create(i,r);o(null,e(u,t,r))}catch(u){o(u)}}H.create=st.create;H.toCanvas=ft.bind(null,Pt.render);H.toDataURL=ft.bind(null,Pt.renderToDataURL);H.toString=ft.bind(null,function(e,t,i){return Le.render(e,i)});const Rt=e=>(Jt("data-v-2137bd32"),e=e(),Yt(),e),De={class:"qrcode-create"},Ue={class:"create-form"},Fe=Rt(()=>L("div",{class:"label"},"链接",-1)),ve={class:"qrcode-img"},ke=Rt(()=>L("div",{class:"label"},"二维码",-1)),ze={class:"qrcode-container"},Ve=["src"],He={__name:"index",setup(e){const t=Dt({link:"",qrcodeSrc:""}),i=()=>{t.qrcodeSrc="",t.link!==""&&H.toDataURL(t.link,{type:"image/png"},(n,s)=>{if(n){console.error(n);return}t.qrcodeSrc=s})},{link:r,qrcodeSrc:o}=Ut(t);return(n,s)=>{const c=Ft("el-input");return vt(),kt("div",De,[L("div",Ue,[Fe,zt(c,{type:"textarea",row:2,placeholder:"请输入链接",modelValue:Z(r),"onUpdate:modelValue":s[0]||(s[0]=u=>Vt(r)?r.value=u:null),onInput:i},null,8,["modelValue"])]),L("div",ve,[ke,L("div",ze,[Ht(L("img",{src:Z(o),alt:""},null,8,Ve),[[Kt,Z(o)]])])])])}}},Je=Lt(He,[["__scopeId","data-v-2137bd32"]]);export{Je as default};
