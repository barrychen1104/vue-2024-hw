import{_ as dt,r as N,b as ft,c as J,a as g,w as B,v as j,t as q,F as pt,d as ht,o as W,n as _e,p as mt,e as yt}from"./index-ozRDJ2BE.js";function qe(e,t){return function(){return e.apply(t,arguments)}}const{toString:wt}=Object.prototype,{getPrototypeOf:be}=Object,se=(e=>t=>{const r=wt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),v=e=>(e=e.toLowerCase(),t=>se(t)===e),oe=e=>t=>typeof t===e,{isArray:z}=Array,G=oe("undefined");function gt(e){return e!==null&&!G(e)&&e.constructor!==null&&!G(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const He=v("ArrayBuffer");function Et(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&He(e.buffer),t}const bt=oe("string"),P=oe("function"),Me=oe("number"),ie=e=>e!==null&&typeof e=="object",St=e=>e===!0||e===!1,ee=e=>{if(se(e)!=="object")return!1;const t=be(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=v("Date"),Tt=v("File"),Ot=v("Blob"),_t=v("FileList"),At=e=>ie(e)&&P(e.pipe),xt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||P(e.append)&&((t=se(e))==="formdata"||t==="object"&&P(e.toString)&&e.toString()==="[object FormData]"))},Ct=v("URLSearchParams"),[Nt,Pt,kt,Ut]=["ReadableStream","Request","Response","Headers"].map(v),Ft=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function X(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),z(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function $e(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const H=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ze=e=>!G(e)&&e!==H;function pe(){const{caseless:e}=ze(this)&&this||{},t={},r=(n,s)=>{const o=e&&$e(t,s)||s;ee(t[o])&&ee(n)?t[o]=pe(t[o],n):ee(n)?t[o]=pe({},n):z(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&X(arguments[n],r);return t}const vt=(e,t,r,{allOwnKeys:n}={})=>(X(t,(s,o)=>{r&&P(s)?e[o]=qe(s,r):e[o]=s},{allOwnKeys:n}),e),Lt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Dt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Bt=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&be(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},jt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},It=e=>{if(!e)return null;if(z(e))return e;let t=e.length;if(!Me(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},qt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&be(Uint8Array)),Ht=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Mt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},$t=v("HTMLFormElement"),zt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ae=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Vt=v("RegExp"),Ve=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};X(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Jt=e=>{Ve(e,(t,r)=>{if(P(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(P(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Wt=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return z(e)?n(e):n(String(e).split(t)),r},Kt=()=>{},Gt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,le="abcdefghijklmnopqrstuvwxyz",xe="0123456789",Je={DIGIT:xe,ALPHA:le,ALPHA_DIGIT:le+le.toUpperCase()+xe},Xt=(e=16,t=Je.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Qt(e){return!!(e&&P(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Zt=e=>{const t=new Array(10),r=(n,s)=>{if(ie(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=z(n)?[]:{};return X(n,(i,c)=>{const d=r(i,s+1);!G(d)&&(o[c]=d)}),t[s]=void 0,o}}return n};return r(e,0)},Yt=v("AsyncFunction"),en=e=>e&&(ie(e)||P(e))&&P(e.then)&&P(e.catch),We=((e,t)=>e?setImmediate:t?((r,n)=>(H.addEventListener("message",({source:s,data:o})=>{s===H&&o===r&&n.length&&n.shift()()},!1),s=>{n.push(s),H.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",P(H.postMessage)),tn=typeof queueMicrotask<"u"?queueMicrotask.bind(H):typeof process<"u"&&process.nextTick||We,a={isArray:z,isArrayBuffer:He,isBuffer:gt,isFormData:xt,isArrayBufferView:Et,isString:bt,isNumber:Me,isBoolean:St,isObject:ie,isPlainObject:ee,isReadableStream:Nt,isRequest:Pt,isResponse:kt,isHeaders:Ut,isUndefined:G,isDate:Rt,isFile:Tt,isBlob:Ot,isRegExp:Vt,isFunction:P,isStream:At,isURLSearchParams:Ct,isTypedArray:qt,isFileList:_t,forEach:X,merge:pe,extend:vt,trim:Ft,stripBOM:Lt,inherits:Dt,toFlatObject:Bt,kindOf:se,kindOfTest:v,endsWith:jt,toArray:It,forEachEntry:Ht,matchAll:Mt,isHTMLForm:$t,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:Ve,freezeMethods:Jt,toObjectSet:Wt,toCamelCase:zt,noop:Kt,toFiniteNumber:Gt,findKey:$e,global:H,isContextDefined:ze,ALPHABET:Je,generateString:Xt,isSpecCompliantForm:Qt,toJSONObject:Zt,isAsyncFn:Yt,isThenable:en,setImmediate:We,asap:tn};function y(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ke=y.prototype,Ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ge[e]={value:e}});Object.defineProperties(y,Ge);Object.defineProperty(Ke,"isAxiosError",{value:!0});y.from=(e,t,r,n,s,o)=>{const i=Object.create(Ke);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const nn=null;function he(e){return a.isPlainObject(e)||a.isArray(e)}function Xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ce(e,t,r){return e?e.concat(t).map(function(s,o){return s=Xe(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function rn(e){return a.isArray(e)&&!e.some(he)}const sn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ae(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,f){return!a.isUndefined(f[w])});const n=r.metaTokens,s=r.visitor||u,o=r.dots,i=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,w,f){let A=p;if(p&&!f&&typeof p=="object"){if(a.endsWith(w,"{}"))w=n?w:w.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&rn(p)||(a.isFileList(p)||a.endsWith(w,"[]"))&&(A=a.toArray(p)))return w=Xe(w),A.forEach(function(E,C){!(a.isUndefined(E)||E===null)&&t.append(i===!0?Ce([w],C,o):i===null?w:w+"[]",l(E))}),!1}return he(p)?!0:(t.append(Ce(f,w,o),l(p)),!1)}const h=[],T=Object.assign(sn,{defaultVisitor:u,convertValue:l,isVisitable:he});function O(p,w){if(!a.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(p),a.forEach(p,function(A,_){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(_)?_.trim():_,w,T))===!0&&O(A,w?w.concat(_):[_])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return O(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Se(e,t){this._pairs=[],e&&ae(e,this,t)}const Qe=Se.prototype;Qe.append=function(t,r){this._pairs.push([t,r])};Qe.toString=function(t){const r=t?function(n){return t.call(this,n,Ne)}:Ne;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function on(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ze(e,t,r){if(!t)return e;const n=r&&r.encode||on,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new Se(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Pe{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},an=typeof URLSearchParams<"u"?URLSearchParams:Se,cn=typeof FormData<"u"?FormData:null,ln=typeof Blob<"u"?Blob:null,un={isBrowser:!0,classes:{URLSearchParams:an,FormData:cn,Blob:ln},protocols:["http","https","file","blob","url","data"]},Re=typeof window<"u"&&typeof document<"u",dn=(e=>Re&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),fn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pn=Re&&window.location.href||"http://localhost",hn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Re,hasStandardBrowserEnv:dn,hasStandardBrowserWebWorkerEnv:fn,origin:pn},Symbol.toStringTag,{value:"Module"})),F={...hn,...un};function mn(e,t){return ae(e,new F.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return F.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function yn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wn(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function et(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=wn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(yn(n),s,r,0)}),r}return null}function gn(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Q={transitional:Ye,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(et(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return mn(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ae(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),gn(t)):t}],transformResponse:[function(t){const r=this.transitional||Q.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:F.classes.FormData,Blob:F.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{Q.headers[e]={}});const En=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bn=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&En[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},ke=Symbol("internals");function K(e){return e&&String(e).trim().toLowerCase()}function te(e){return e===!1||e==null?e:a.isArray(e)?e.map(te):String(e)}function Sn(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ue(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function Tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function On(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class x{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,d,l){const u=K(d);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||d]=te(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(a.isString(t)&&(t=t.trim())&&!Rn(t))i(bn(t),r);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,n);else t!=null&&o(r,t,n);return this}get(t,r){if(t=K(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Sn(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=K(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ue(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=K(i),i){const c=a.findKey(n,i);c&&(!r||ue(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||ue(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=te(s),delete r[o];return}const c=t?Tn(o):String(o).trim();c!==o&&delete r[o],r[c]=te(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[ke]=this[ke]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=K(i);n[c]||(On(s,i),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}x.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(x.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(x);function de(e,t){const r=this||Q,n=t||r,s=x.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function tt(e){return!!(e&&e.__CANCEL__)}function V(e,t,r){y.call(this,e??"canceled",y.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(V,y,{__CANCEL__:!0});function nt(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new y("Request failed with status code "+r.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function _n(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function An(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=n[o];i||(i=l),r[s]=d,n[s]=l;let h=o,T=0;for(;h!==s;)T+=r[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const O=u&&l-u;return O?Math.round(T*1e3/O):void 0}}function xn(e,t){let r=0,n=1e3/t,s,o;const i=(l,u=Date.now())=>{r=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),h=u-r;h>=n?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},n-h)))},()=>s&&i(s)]}const ne=(e,t,r=3)=>{let n=0;const s=An(50,250);return xn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-n,l=s(d),u=i<=c;n=i;const h={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(h)},r)},Ue=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Fe=e=>(...t)=>a.asap(()=>e(...t)),Cn=F.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}(),Nn=F.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function rt(e,t){return e&&!Pn(t)?kn(e,t):t}const ve=e=>e instanceof x?{...e}:e;function $(e,t){t=t||{};const r={};function n(l,u,h){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:h},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,h){if(a.isUndefined(u)){if(!a.isUndefined(l))return n(void 0,l,h)}else return n(l,u,h)}function o(l,u){if(!a.isUndefined(u))return n(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return n(void 0,l)}else return n(void 0,u)}function c(l,u,h){if(h in t)return n(l,u);if(h in e)return n(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(ve(l),ve(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=d[u]||s,T=h(e[u],t[u],u);a.isUndefined(T)&&h!==c||(r[u]=T)}),r}const st=e=>{const t=$({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=x.from(i),t.url=Ze(rt(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(r)){if(F.hasStandardBrowserEnv||F.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[l,...u]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(F.hasStandardBrowserEnv&&(n&&a.isFunction(n)&&(n=n(t)),n||n!==!1&&Cn(t.url))){const l=s&&o&&Nn.read(o);l&&i.set(s,l)}return t},Un=typeof XMLHttpRequest<"u",Fn=Un&&function(e){return new Promise(function(r,n){const s=st(e);let o=s.data;const i=x.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,h,T,O,p;function w(){O&&O(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let f=new XMLHttpRequest;f.open(s.method.toUpperCase(),s.url,!0),f.timeout=s.timeout;function A(){if(!f)return;const E=x.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),D={data:!c||c==="text"||c==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:E,config:e,request:f};nt(function(U){r(U),w()},function(U){n(U),w()},D),f=null}"onloadend"in f?f.onloadend=A:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(A)},f.onabort=function(){f&&(n(new y("Request aborted",y.ECONNABORTED,e,f)),f=null)},f.onerror=function(){n(new y("Network Error",y.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let C=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const D=s.transitional||Ye;s.timeoutErrorMessage&&(C=s.timeoutErrorMessage),n(new y(C,D.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,f)),f=null},o===void 0&&i.setContentType(null),"setRequestHeader"in f&&a.forEach(i.toJSON(),function(C,D){f.setRequestHeader(D,C)}),a.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),c&&c!=="json"&&(f.responseType=s.responseType),l&&([T,p]=ne(l,!0),f.addEventListener("progress",T)),d&&f.upload&&([h,O]=ne(d),f.upload.addEventListener("progress",h),f.upload.addEventListener("loadend",O)),(s.cancelToken||s.signal)&&(u=E=>{f&&(n(!E||E.type?new V(null,e,f):E),f.abort(),f=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const _=_n(s.url);if(_&&F.protocols.indexOf(_)===-1){n(new y("Unsupported protocol "+_+":",y.ERR_BAD_REQUEST,e));return}f.send(o||null)})},vn=(e,t)=>{let r=new AbortController,n;const s=function(d){if(!n){n=!0,i();const l=d instanceof Error?d:this.reason;r.abort(l instanceof y?l:new V(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d&&(d.removeEventListener?d.removeEventListener("abort",s):d.unsubscribe(s))}),e=null)};e.forEach(d=>d&&d.addEventListener&&d.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},Ln=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},Dn=async function*(e,t,r){for await(const n of e)yield*Ln(ArrayBuffer.isView(n)?n:await r(String(n)),t)},Le=(e,t,r,n,s)=>{const o=Dn(e,t,s);let i=0,c,d=l=>{c||(c=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:u,value:h}=await o.next();if(u){d(),l.close();return}let T=h.byteLength;if(r){let O=i+=T;r(O)}l.enqueue(new Uint8Array(h))}catch(u){throw d(u),u}},cancel(l){return d(l),o.return()}},{highWaterMark:2})},ce=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ot=ce&&typeof ReadableStream=="function",me=ce&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),it=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Bn=ot&&it(()=>{let e=!1;const t=new Request(F.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),De=64*1024,ye=ot&&it(()=>a.isReadableStream(new Response("").body)),re={stream:ye&&(e=>e.body)};ce&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!re[t]&&(re[t]=a.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,n)})})})(new Response);const jn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await me(e)).byteLength},In=async(e,t)=>{const r=a.toFiniteNumber(e.getContentLength());return r??jn(t)},qn=ce&&(async e=>{let{url:t,method:r,data:n,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:T}=st(e);l=l?(l+"").toLowerCase():"text";let[O,p]=s||o||i?vn([s,o],i):[],w,f;const A=()=>{!w&&setTimeout(()=>{O&&O.unsubscribe()}),w=!0};let _;try{if(d&&Bn&&r!=="get"&&r!=="head"&&(_=await In(u,n))!==0){let k=new Request(t,{method:"POST",body:n,duplex:"half"}),U;if(a.isFormData(n)&&(U=k.headers.get("content-type"))&&u.setContentType(U),k.body){const[m,b]=Ue(_,ne(Fe(d)));n=Le(k.body,De,m,b,me)}}a.isString(h)||(h=h?"include":"omit"),f=new Request(t,{...T,signal:O,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:h});let E=await fetch(f);const C=ye&&(l==="stream"||l==="response");if(ye&&(c||C)){const k={};["status","statusText","headers"].forEach(S=>{k[S]=E[S]});const U=a.toFiniteNumber(E.headers.get("content-length")),[m,b]=c&&Ue(U,ne(Fe(c),!0))||[];E=new Response(Le(E.body,De,m,()=>{b&&b(),C&&A()},me),k)}l=l||"text";let D=await re[a.findKey(re,l)||"text"](E,e);return!C&&A(),p&&p(),await new Promise((k,U)=>{nt(k,U,{data:D,headers:x.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:f})})}catch(E){throw A(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,f),{cause:E.cause||E}):y.from(E,E&&E.code,e,f)}}),we={http:nn,xhr:Fn,fetch:qn};a.forEach(we,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Be=e=>`- ${e}`,Hn=e=>a.isFunction(e)||e===null||e===!1,at={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!Hn(r)&&(n=we[(i=String(r)).toLowerCase()],n===void 0))throw new y(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Be).join(`
`):" "+Be(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:we};function fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new V(null,e)}function je(e){return fe(e),e.headers=x.from(e.headers),e.data=de.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),at.getAdapter(e.adapter||Q.adapter)(e).then(function(n){return fe(e),n.data=de.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return tt(n)||(fe(e),n&&n.response&&(n.response.data=de.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}const ct="1.7.3",Te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Te[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ie={};Te.transitional=function(t,r,n){function s(o,i){return"[Axios v"+ct+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(r?" in "+r:"")),y.ERR_DEPRECATED);return r&&!Ie[i]&&(Ie[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Mn(e,t,r){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const ge={assertOptions:Mn,validators:Te},I=ge.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new Pe,response:new Pe}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=$(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&ge.assertOptions(n,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:ge.assertOptions(s,{encode:I.function,serialize:I.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),r.headers=x.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(d=d&&w.synchronous,c.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,h=0,T;if(!d){const p=[je.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),T=p.length,u=Promise.resolve(r);h<T;)u=u.then(p[h++],p[h++]);return u}T=c.length;let O=r;for(h=0;h<T;){const p=c[h++],w=c[h++];try{O=p(O)}catch(f){w.call(this,f);break}}try{u=je.call(this,O)}catch(p){return Promise.reject(p)}for(h=0,T=l.length;h<T;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=$(this.defaults,t);const r=rt(t.baseURL,t.url);return Ze(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(r,n){return this.request($(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request($(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=r(),M.prototype[t+"Form"]=r(!0)});class Oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new V(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Oe(function(s){t=s}),cancel:t}}}function $n(e){return function(r){return e.apply(null,r)}}function zn(e){return a.isObject(e)&&e.isAxiosError===!0}const Ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ee).forEach(([e,t])=>{Ee[t]=e});function lt(e){const t=new M(e),r=qe(M.prototype.request,t);return a.extend(r,M.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return lt($(e,s))},r}const R=lt(Q);R.Axios=M;R.CanceledError=V;R.CancelToken=Oe;R.isCancel=tt;R.VERSION=ct;R.toFormData=ae;R.AxiosError=y;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=$n;R.isAxiosError=zn;R.mergeConfig=$;R.AxiosHeaders=x;R.formToJSON=e=>et(a.isHTMLForm(e)?new FormData(e):e);R.getAdapter=at.getAdapter;R.HttpStatusCode=Ee;R.default=R;const Z=e=>(mt("data-v-eaf9de88"),e=e(),yt(),e),Vn={class:"container"},Jn={class:"auth-section"},Wn={class:"auth-form"},Kn=Z(()=>g("h2",null,"註冊",-1)),Gn={class:"message"},Xn={class:"auth-form"},Qn=Z(()=>g("h2",null,"登入",-1)),Zn={class:"message"},Yn={class:"auth-form"},er=Z(()=>g("h2",null,"驗證",-1)),tr={class:"message"},nr={class:"auth-form"},rr=Z(()=>g("h2",null,"登出",-1)),sr={class:"message"},or={class:"todo-section"},ir=Z(()=>g("h2",null,"Todo list",-1)),ar={key:0,class:"todo-content"},cr={class:"todo-input"},lr={class:"todo-list"},ur={class:"todo-info"},dr={class:"todo-actions"},fr=["placeholder","onChange"],pr=["onClick"],hr=["onClick"],mr=["onClick"],yr={key:1,class:"message"},L="https://todolist-api.hexschool.io",wr={__name:"Hw2View",setup(e){const t=async()=>{try{const m=await R.post(`${L}/users/sign_up`,n.value);console.log("res",m),s.value=m.data.uid}catch(m){r.value=`註冊失敗: ${m.message}`}},r=N(""),n=N({email:"",password:"",nickname:""}),s=N(""),o=N({email:"",password:""}),i=N(""),c=async()=>{try{const m=await R.post(`${L}/users/sign_in`,o.value);i.value=m.data.token;const b=new Date;b.setDate(b.getDate()+1),document.cookie=`customTodoToken=${m.data.token}; expires=${b.toUTCString()}; path=/`}catch(m){i.value=`登入失敗: ${m.message}`}},d=N(""),l=N(""),u=async()=>{try{const m=await R.get(`${L}/users/checkout`,{headers:{authorization:d.value}});l.value=`驗證功 UID: ${m.data.uid}`}catch(m){l.value=`驗證失敗: ${m.message}`}},h=N(""),T=N(""),O=async()=>{try{const m=await R.post(`${L}/users/sign_out`,{},{headers:{authorization:h.value}});console.log("res",m),T.value="登出成功"}catch(m){T.value=`登出失敗: ${m.message}`}},p=N(""),w=N([]),f=N(""),A=N({}),_=async()=>{try{const m=await R.get(`${L}/todos`,{headers:{authorization:p.value}});w.value=m.data.data}catch(m){console.error("Error fetching todos:",m)}},E=async()=>{if(f.value.trim())try{await R.post(`${L}/todos`,{content:f.value},{headers:{authorization:p.value}}),f.value="",_()}catch(m){console.error("Error adding todo:",m)}},C=(m,b)=>{A.value[b]=m.target.value},D=async m=>{try{await R.put(`${L}/todos/${m}`,{content:A.value[m]},{headers:{authorization:p.value}}),_(),A.value[m]=""}catch(b){console.error("Error updating todo:",b)}},k=async m=>{try{await R.patch(`${L}/todos/${m}/toggle`,{},{headers:{authorization:p.value}}),_()}catch(b){console.error("Error toggling todo status:",b)}},U=async m=>{if(confirm("Are you sure you want to delete this todo?"))try{await R.delete(`${L}/todos/${m}`,{headers:{authorization:p.value}}),_()}catch(b){console.error("Error deleting todo:",b)}};return ft(async()=>{if(p.value=document.cookie.replace(/(?:(?:^|.*;\s*)customTodoToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),p.value)try{const m=await R.get(`${L}/users/checkout`,{headers:{authorization:p.value}});console.log("res",m),_()}catch(m){console.error("Error checking token:",m),p.value=""}}),(m,b)=>(W(),J("div",Vn,[g("div",Jn,[g("div",Wn,[Kn,B(g("input",{"onUpdate:modelValue":b[0]||(b[0]=S=>n.value.email=S),placeholder:"Email",type:"text"},null,512),[[j,n.value.email]]),B(g("input",{"onUpdate:modelValue":b[1]||(b[1]=S=>n.value.password=S),placeholder:"Password",type:"password"},null,512),[[j,n.value.password]]),B(g("input",{"onUpdate:modelValue":b[2]||(b[2]=S=>n.value.nickname=S),placeholder:"Nickname",type:"text"},null,512),[[j,n.value.nickname]]),g("button",{onClick:t},"Sign Up"),g("p",Gn,q(r.value),1)]),g("div",Xn,[Qn,B(g("input",{"onUpdate:modelValue":b[3]||(b[3]=S=>o.value.email=S),placeholder:"Email",type:"email"},null,512),[[j,o.value.email]]),B(g("input",{"onUpdate:modelValue":b[4]||(b[4]=S=>o.value.password=S),placeholder:"Password",type:"password"},null,512),[[j,o.value.password]]),g("button",{onClick:c},"Sign In"),g("p",Zn,q(i.value),1)]),g("div",Yn,[er,B(g("input",{"onUpdate:modelValue":b[5]||(b[5]=S=>d.value=S),placeholder:"Token"},null,512),[[j,d.value]]),g("button",{onClick:u},"Check Out"),g("p",tr,q(l.value),1)]),g("div",nr,[rr,B(g("input",{"onUpdate:modelValue":b[6]||(b[6]=S=>h.value=S),placeholder:"Token"},null,512),[[j,h.value]]),g("button",{onClick:O},"Sign Out"),g("p",sr,q(T.value),1)])]),g("div",or,[ir,p.value?(W(),J("div",ar,[g("div",cr,[B(g("input",{"onUpdate:modelValue":b[7]||(b[7]=S=>f.value=S),placeholder:"New Todo"},null,512),[[j,f.value]]),g("button",{onClick:E},"Add Todo")]),g("ul",lr,[(W(!0),J(pt,null,ht(w.value,(S,ut)=>(W(),J("li",{key:ut,class:"todo-item"},[g("div",ur,[g("span",{class:_e({completed:S.status})},q(S.content),3),g("span",{class:_e(["status-badge",{completed:S.status}])},q(S.status?"完成":"未完成"),3)]),g("div",dr,[g("input",{type:"text",placeholder:S.content,onChange:Y=>C(Y,S.id)},null,40,fr),g("button",{onClick:Y=>D(S.id),class:"update"},"Update",8,pr),g("button",{onClick:Y=>k(S.id),class:"toggle"},q(S.status?"Undo":"Complete"),9,hr),g("button",{onClick:Y=>U(S.id),class:"delete"},"Delete",8,mr)])]))),128))])])):(W(),J("p",yr,"Please sign in to view and manage your todos."))])]))}},Er=dt(wr,[["__scopeId","data-v-eaf9de88"]]);export{Er as default};
