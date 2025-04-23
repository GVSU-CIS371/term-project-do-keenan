(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},es=[],sn=()=>{},ov=()=>!1,ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vl=t=>t.startsWith("onUpdate:"),pt=Object.assign,El=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},av=Object.prototype.hasOwnProperty,Pe=(t,e)=>av.call(t,e),le=Array.isArray,ts=t=>ta(t)==="[object Map]",np=t=>ta(t)==="[object Set]",de=t=>typeof t=="function",He=t=>typeof t=="string",cr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",rp=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),sp=Object.prototype.toString,ta=t=>sp.call(t),cv=t=>ta(t).slice(8,-1),ip=t=>ta(t)==="[object Object]",Tl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lv=/-(\w)/g,$t=na(t=>t.replace(lv,(e,n)=>n?n.toUpperCase():"")),uv=/\B([A-Z])/g,Dr=na(t=>t.replace(uv,"-$1").toLowerCase()),ra=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=na(t=>t?`on${ra(t)}`:""),Gn=(t,e)=>!Object.is(t,e),lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},op=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wh;const sa=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Il(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?pv(r):Il(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Le(t))return t}const hv=/;(?![^(]*\))/g,dv=/:([^]+)/,fv=/\/\*[^]*?\*\//g;function pv(t){const e={};return t.replace(fv,"").split(hv).forEach(n=>{if(n){const r=n.split(dv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vr(t){let e="";if(He(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Vr(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mv=yl(gv);function ap(t){return!!t||t===""}const cp=t=>!!(t&&t.__v_isRef===!0),Ve=t=>He(t)?t:t==null?"":le(t)||Le(t)&&(t.toString===sp||!de(t.toString))?cp(t)?Ve(t.value):JSON.stringify(t,lp,2):String(t),lp=(t,e)=>cp(e)?lp(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nc(r,i)+" =>"]=s,n),{})}:np(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:cr(e)?nc(e):Le(e)&&!le(e)&&!ip(e)?String(e):e,nc=(t,e="")=>{var n;return cr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class up{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function _v(t){return new up(t)}function yv(){return St}let De;const rc=new WeakSet;class hp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rc.has(this)&&(rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ah(this),pp(this);const e=De,n=Gt;De=this,Gt=!0;try{return this.fn()}finally{gp(this),De=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bl(e);this.deps=this.depsTail=void 0,Ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kc(this)&&this.run()}get dirty(){return kc(this)}}let dp=0,Zs,ei;function fp(t,e=!1){if(t.flags|=8,e){t.next=ei,ei=t;return}t.next=Zs,Zs=t}function wl(){dp++}function Al(){if(--dp>0)return;if(ei){let e=ei;for(ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),bl(r),vv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function kc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===di))return;t.globalVersion=di;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!kc(t)){t.flags&=-3;return}const n=De,r=Gt;De=t,Gt=!0;try{pp(t);const s=t.fn(t._value);(e.version===0||Gn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Gt=r,gp(t),t.flags&=-3}}function bl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)bl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const _p=[];function lr(){_p.push(Gt),Gt=!1}function ur(){const t=_p.pop();Gt=t===void 0?!0:t}function Ah(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let di=0;class Ev{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Gt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new Ev(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,yp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,di++,this.notify(e)}notify(e){wl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Al()}}}function yp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Oc=new WeakMap,Ir=Symbol(""),Dc=Symbol(""),fi=Symbol("");function lt(t,e,n){if(Gt&&De){let r=Oc.get(t);r||Oc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Rl),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const o=Oc.get(t);if(!o){di++;return}const c=l=>{l&&l.trigger()};if(wl(),e==="clear")o.forEach(c);else{const l=le(t),h=l&&Tl(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===fi||!cr(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(fi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Ir)),ts(t)&&c(o.get(Dc)));break;case"delete":l||(c(o.get(Ir)),ts(t)&&c(o.get(Dc)));break;case"set":ts(t)&&c(o.get(Ir));break}}Al()}function zr(t){const e=Se(t);return e===t?e:(lt(e,"iterate",fi),Ft(t)?e:e.map(ut))}function ia(t){return lt(t=Se(t),"iterate",fi),t}const Tv={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,ut)},concat(...t){return zr(this).concat(...t.map(e=>le(e)?zr(e):e))},entries(){return sc(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return _n(this,"find",t,e,ut,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return ic(this,"includes",t)},indexOf(...t){return ic(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return ic(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return bh(this,"reduce",t,e)},reduceRight(t,...e){return bh(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return sc(this,"values",ut)}};function sc(t,e,n){const r=ia(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Iv=Array.prototype;function _n(t,e,n,r,s,i){const o=ia(t),c=o!==t&&!Ft(t),l=o[e];if(l!==Iv[e]){const p=l.apply(t,i);return c?ut(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function bh(t,e,n,r){const s=ia(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ut(c),l,t)}),s[e](i,...r)}function ic(t,e,n){const r=Se(t);lt(r,"iterate",fi);const s=r[e](...n);return(s===-1||s===!1)&&Cl(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Bs(t,e,n=[]){lr(),wl();const r=Se(t)[e].apply(t,n);return Al(),ur(),r}const wv=yl("__proto__,__v_isRef,__isVue"),vp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cr));function Av(t){cr(t)||(t=String(t));const e=Se(this);return lt(e,"has",t),e.hasOwnProperty(t)}class Ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Nv:Ap:i?wp:Ip).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=Tv[n]))return l;if(n==="hasOwnProperty")return Av}const c=Reflect.get(e,n,ft(e)?e:r);return(cr(n)?vp.has(n):wv(n))||(s||lt(e,"get",n),i)?c:ft(c)?o&&Tl(n)?c:c.value:Le(c)?s?Rp(c):oa(c):c}}class Tp extends Ep{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=wr(i);if(!Ft(r)&&!wr(r)&&(i=Se(i),r=Se(r)),!le(e)&&ft(i)&&!ft(r))return l?!1:(i.value=r,!0)}const o=le(e)&&Tl(n)?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,ft(e)?e:s);return e===Se(s)&&(o?Gn(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!cr(n)||!vp.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",le(e)?"length":Ir),Reflect.ownKeys(e)}}class bv extends Ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rv=new Tp,Sv=new bv,Pv=new Tp(!0);const Vc=t=>t,eo=t=>Reflect.getPrototypeOf(t);function Cv(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=ts(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?Vc:e?Nc:ut;return!e&&lt(i,"iterate",l?Dc:Ir),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function to(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kv(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),c=Se(s);t||(Gn(s,c)&&lt(o,"get",s),lt(o,"get",c));const{has:l}=eo(o),h=e?Vc:t?Nc:ut;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&lt(Se(s),"iterate",Ir),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),c=Se(s);return t||(Gn(s,c)&&lt(o,"has",s),lt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Se(c),h=e?Vc:t?Nc:ut;return!t&&lt(l,"iterate",Ir),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return pt(n,t?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(s){!e&&!Ft(s)&&!wr(s)&&(s=Se(s));const i=Se(this);return eo(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!Ft(i)&&!wr(i)&&(i=Se(i));const o=Se(this),{has:c,get:l}=eo(o);let h=c.call(o,s);h||(s=Se(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?Gn(i,d)&&Tn(o,"set",s,i):Tn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:c}=eo(i);let l=o.call(i,s);l||(s=Se(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Tn(i,"delete",s,void 0),h},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Tn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Cv(s,t,e)}),n}function Sl(t,e){const n=kv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const Ov={get:Sl(!1,!1)},Dv={get:Sl(!1,!0)},Vv={get:Sl(!0,!1)};const Ip=new WeakMap,wp=new WeakMap,Ap=new WeakMap,Nv=new WeakMap;function xv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mv(t){return t.__v_skip||!Object.isExtensible(t)?0:xv(cv(t))}function oa(t){return wr(t)?t:Pl(t,!1,Rv,Ov,Ip)}function bp(t){return Pl(t,!1,Pv,Dv,wp)}function Rp(t){return Pl(t,!0,Sv,Vv,Ap)}function Pl(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Mv(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ns(t){return wr(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function wr(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Cl(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Sp(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&op(t,"__v_skip",!0),t}const ut=t=>Le(t)?oa(t):t,Nc=t=>Le(t)?Rp(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function Pp(t){return Cp(t,!1)}function Lv(t){return Cp(t,!0)}function Cp(t,e){return ft(t)?t:new Fv(t,e)}class Fv{constructor(e,n){this.dep=new Rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||wr(e);e=r?e:Se(e),Gn(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function rs(t){return ft(t)?t.value:t}const Uv={get:(t,e,n)=>e==="__v_raw"?t:rs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kp(t){return ns(t)?t:new Proxy(t,Uv)}class $v{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return fp(this,!0),!0}get value(){const e=this.dep.track();return mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jv(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new $v(r,s,n)}const no={},bo=new WeakMap;let yr;function Bv(t,e=!1,n=yr){if(n){let r=bo.get(n);r||bo.set(n,r=[]),r.push(t)}}function Hv(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=K=>s?K:Ft(K)||s===!1||s===0?In(K,1):In(K);let d,p,m,_,k=!1,O=!1;if(ft(t)?(p=()=>t.value,k=Ft(t)):ns(t)?(p=()=>h(t),k=!0):le(t)?(O=!0,k=t.some(K=>ns(K)||Ft(K)),p=()=>t.map(K=>{if(ft(K))return K.value;if(ns(K))return h(K);if(de(K))return l?l(K,2):K()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){lr();try{m()}finally{ur()}}const K=yr;yr=d;try{return l?l(t,3,[_]):t(_)}finally{yr=K}}:p=sn,e&&s){const K=p,pe=s===!0?1/0:s;p=()=>In(K(),pe)}const x=yv(),q=()=>{d.stop(),x&&x.active&&El(x.effects,d)};if(i&&e){const K=e;e=(...pe)=>{K(...pe),q()}}let j=O?new Array(t.length).fill(no):no;const H=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(e){const pe=d.run();if(s||k||(O?pe.some((me,w)=>Gn(me,j[w])):Gn(pe,j))){m&&m();const me=yr;yr=d;try{const w=[pe,j===no?void 0:O&&j[0]===no?[]:j,_];l?l(e,3,w):e(...w),j=pe}finally{yr=me}}}else d.run()};return c&&c(H),d=new hp(p),d.scheduler=o?()=>o(H,!1):H,_=K=>Bv(K,!1,d),m=d.onStop=()=>{const K=bo.get(d);if(K){if(l)l(K,4);else for(const pe of K)pe();bo.delete(d)}},e?r?H(!0):j=d.run():o?o(H.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function In(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ft(t))In(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(np(t)||ts(t))t.forEach(r=>{In(r,e,n)});else if(ip(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pi(t,e,n,r){try{return r?t(...r):t()}catch(s){aa(s,e,n)}}function hn(t,e,n,r){if(de(t)){const s=Pi(t,e,n,r);return s&&rp(s)&&s.catch(i=>{aa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(hn(t[i],e,n,r));return s}}function aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){lr(),Pi(i,null,10,[t,l,h]),ur();return}}qv(t,n,s,r,o)}function qv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const vt=[];let tn=-1;const ss=[];let $n=null,Wr=0;const Op=Promise.resolve();let Ro=null;function Dp(t){const e=Ro||Op;return t?e.then(this?t.bind(this):t):e}function zv(t){let e=tn+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=pi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function kl(t){if(!(t.flags&1)){const e=pi(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=pi(n)?vt.push(t):vt.splice(zv(e),0,t),t.flags|=1,Vp()}}function Vp(){Ro||(Ro=Op.then(xp))}function Wv(t){le(t)?ss.push(...t):$n&&t.id===-1?$n.splice(Wr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),Vp()}function Rh(t,e,n=tn+1){for(;n<vt.length;n++){const r=vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Np(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>pi(n)-pi(r));if(ss.length=0,$n){$n.push(...e);return}for($n=e,Wr=0;Wr<$n.length;Wr++){const n=$n[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$n=null,Wr=0}}const pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function xp(t){try{for(tn=0;tn<vt.length;tn++){const e=vt[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<vt.length;tn++){const e=vt[tn];e&&(e.flags&=-2)}tn=-1,vt.length=0,Np(),Ro=null,(vt.length||ss.length)&&xp()}}let Pt=null,Mp=null;function So(t){const e=Pt;return Pt=t,Mp=t&&t.type.__scopeId||null,e}function Mt(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mh(-1);const i=So(e);let o;try{o=t(...s)}finally{So(i),r._d&&Mh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xc(t,e){if(Pt===null)return t;const n=ha(Pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&In(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function mr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(lr(),hn(l,n,8,[t.el,c,t,e]),ur())}}const Kv=Symbol("_vte"),Gv=t=>t.__isTeleport;function Ol(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ol(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Dl(t,e){return de(t)?pt({name:t.name},e,{setup:t}):t}function Lp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Po(t,e,n,r,s=!1){if(le(t)){t.forEach((k,O)=>Po(k,e&&(le(e)?e[O]:e),n,r,s));return}if(ti(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Po(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ha(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Oe?c.refs={}:c.refs,p=c.setupState,m=Se(p),_=p===Oe?()=>!1:k=>Pe(m,k);if(h!=null&&h!==l&&(He(h)?(d[h]=null,_(h)&&(p[h]=null)):ft(h)&&(h.value=null)),de(l))Pi(l,c,12,[o,d]);else{const k=He(l),O=ft(l);if(k||O){const x=()=>{if(t.f){const q=k?_(l)?p[l]:d[l]:l.value;s?le(q)&&El(q,i):le(q)?q.includes(i)||q.push(i):k?(d[l]=[i],_(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else k?(d[l]=o,_(l)&&(p[l]=o)):O&&(l.value=o,t.k&&(d[t.k]=o))};o?(x.id=-1,Rt(x,n)):x()}}}sa().requestIdleCallback;sa().cancelIdleCallback;const ti=t=>!!t.type.__asyncLoader,Fp=t=>t.type.__isKeepAlive;function Qv(t,e){Up(t,"a",e)}function Yv(t,e){Up(t,"da",e)}function Up(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ca(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fp(s.parent.vnode)&&Jv(r,e,n,s),s=s.parent}}function Jv(t,e,n,r){const s=ca(e,t,r,!0);$p(()=>{El(r[e],s)},n)}function ca(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lr();const c=Ci(n),l=hn(e,n,t,o);return c(),ur(),l});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=dt)=>{(!mi||t==="sp")&&ca(t,(...r)=>e(...r),n)},Xv=Dn("bm"),Zv=Dn("m"),eE=Dn("bu"),tE=Dn("u"),nE=Dn("bum"),$p=Dn("um"),rE=Dn("sp"),sE=Dn("rtg"),iE=Dn("rtc");function oE(t,e=dt){ca("ec",t,e)}const jp="components";function Mc(t,e){return Hp(jp,t,!0,e)||t}const Bp=Symbol.for("v-ndc");function aE(t){return He(t)?Hp(jp,t,!1)||t:t||Bp}function Hp(t,e,n=!0,r=!1){const s=Pt||dt;if(s){const i=s.type;{const c=KE(i,!1);if(c&&(c===e||c===$t(e)||c===ra($t(e))))return i}const o=Sh(s[t]||i[t],e)||Sh(s.appContext[t],e);return!o&&r?i:o}}function Sh(t,e){return t&&(t[e]||t[$t(e)]||t[ra($t(e))])}function Sn(t,e,n,r){let s;const i=n,o=le(t);if(o||He(t)){const c=o&&ns(t);let l=!1;c&&(l=!Ft(t),t=ia(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?ut(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Lc=t=>t?ug(t)?ha(t):Lc(t.parent):null,ni=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lc(t.parent),$root:t=>Lc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zp(t),$forceUpdate:t=>t.f||(t.f=()=>{kl(t.update)}),$nextTick:t=>t.n||(t.n=Dp.bind(t.proxy)),$watch:t=>PE.bind(t)}),oc=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Pe(t,e),cE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(oc(r,e))return o[e]=1,r[e];if(s!==Oe&&Pe(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Pe(h,e))return o[e]=3,i[e];if(n!==Oe&&Pe(n,e))return o[e]=4,n[e];Fc&&(o[e]=0)}}const d=ni[e];let p,m;if(d)return e==="$attrs"&&lt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Pe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Pe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return oc(s,e)?(s[e]=n,!0):r!==Oe&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Oe&&Pe(t,o)||oc(e,o)||(c=i[0])&&Pe(c,o)||Pe(r,o)||Pe(ni,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ph(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fc=!0;function lE(t){const e=zp(t),n=t.proxy,r=t.ctx;Fc=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:k,activated:O,deactivated:x,beforeDestroy:q,beforeUnmount:j,destroyed:H,unmounted:K,render:pe,renderTracked:me,renderTriggered:w,errorCaptured:y,serverPrefetch:I,expose:A,inheritAttrs:b,components:S,directives:T,filters:mt}=e;if(h&&uE(h,r,null),o)for(const Te in o){const ye=o[Te];de(ye)&&(r[Te]=ye.bind(n))}if(s){const Te=s.call(n,n);Le(Te)&&(t.data=oa(Te))}if(Fc=!0,i)for(const Te in i){const ye=i[Te],At=de(ye)?ye.bind(n,n):de(ye.get)?ye.get.bind(n,n):sn,Bt=!de(ye)&&de(ye.set)?ye.set.bind(n):sn,Vt=qt({get:At,set:Bt});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Fe=>Vt.value=Fe})}if(c)for(const Te in c)qp(c[Te],r,n,Te);if(l){const Te=de(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ye=>{uo(ye,Te[ye])})}d&&Ch(d,t,"c");function qe(Te,ye){le(ye)?ye.forEach(At=>Te(At.bind(n))):ye&&Te(ye.bind(n))}if(qe(Xv,p),qe(Zv,m),qe(eE,_),qe(tE,k),qe(Qv,O),qe(Yv,x),qe(oE,y),qe(iE,me),qe(sE,w),qe(nE,j),qe($p,K),qe(rE,I),le(A))if(A.length){const Te=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(Te,ye,{get:()=>n[ye],set:At=>n[ye]=At})})}else t.exposed||(t.exposed={});pe&&t.render===sn&&(t.render=pe),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),T&&(t.directives=T),I&&Lp(t)}function uE(t,e,n=sn){le(t)&&(t=Uc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=on(s.from||r,s.default,!0):i=on(s.from||r):i=on(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ch(t,e,n){hn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){let s=r.includes(".")?ig(n,r):()=>n[r];if(He(t)){const i=e[t];de(i)&&ho(s,i)}else if(de(t))ho(s,t.bind(n));else if(Le(t))if(le(t))t.forEach(i=>qp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&ho(s,i,t)}}function zp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Co(l,h,o,!0)),Co(l,e,o)),Le(e)&&i.set(e,l),l}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(o=>Co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=hE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const hE={data:kh,props:Oh,emits:Oh,methods:zs,computed:zs,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:zs,directives:zs,watch:fE,provide:kh,inject:dE};function kh(t,e){return e?t?function(){return pt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function dE(t,e){return zs(Uc(t),Uc(e))}function Uc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function zs(t,e){return t?pt(Object.create(null),t,e):e}function Oh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:pt(Object.create(null),Ph(t),Ph(e??{})):e}function fE(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function Wp(){return{app:null,config:{isNativeTag:ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pE=0;function gE(t,e){return function(r,s=null){de(r)||(r=pt({},r)),s!=null&&!Le(s)&&(s=null);const i=Wp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:pE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:QE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&de(d.install)?(o.add(d),d.install(h,...p)):de(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const _=h._ceVNode||xe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),l=!0,h._container=d,d.__vue_app__=h,ha(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(hn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=is;is=h;try{return d()}finally{is=p}}};return h}}let is=null;function uo(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function on(t,e,n=!1){const r=dt||Pt;if(r||is){const s=is?is._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const Kp={},Gp=()=>Object.create(Kp),Qp=t=>Object.getPrototypeOf(t)===Kp;function mE(t,e,n,r=!1){const s={},i=Gp();t.propsDefaults=Object.create(null),Yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _E(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(la(t.emitsOptions,m))continue;const _=e[m];if(l)if(Pe(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const k=$t(m);s[k]=$c(l,c,k,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Yp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Pe(e,p)&&((d=Dr(p))===p||!Pe(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=$c(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],h=!0)}h&&Tn(t.attrs,"set","")}function Yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Xs(l))continue;const h=e[l];let d;s&&Pe(s,d=$t(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:la(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Se(n),h=c||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=$c(s,l,p,h[p],t,!Pe(h,p))}}return o}function $c(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ci(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Dr(n))&&(r=!0))}return r}const yE=new WeakMap;function Jp(t,e,n=!1){const r=n?yE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const d=p=>{l=!0;const[m,_]=Jp(p,e,!0);pt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Le(t)&&r.set(t,es),es;if(le(i))for(let d=0;d<i.length;d++){const p=$t(i[d]);Dh(p)&&(o[p]=Oe)}else if(i)for(const d in i){const p=$t(d);if(Dh(p)){const m=i[d],_=o[p]=le(m)||de(m)?{type:m}:pt({},m),k=_.type;let O=!1,x=!0;if(le(k))for(let q=0;q<k.length;++q){const j=k[q],H=de(j)&&j.name;if(H==="Boolean"){O=!0;break}else H==="String"&&(x=!1)}else O=de(k)&&k.name==="Boolean";_[0]=O,_[1]=x,(O||Pe(_,"default"))&&c.push(p)}}const h=[o,c];return Le(t)&&r.set(t,h),h}function Dh(t){return t[0]!=="$"&&!Xs(t)}const Xp=t=>t[0]==="_"||t==="$stable",Vl=t=>le(t)?t.map(rn):[rn(t)],vE=(t,e,n)=>{if(e._n)return e;const r=Mt((...s)=>Vl(e(...s)),n);return r._c=!1,r},Zp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Xp(s))continue;const i=t[s];if(de(i))e[s]=vE(s,i,r);else if(i!=null){const o=Vl(i);e[s]=()=>o}}},eg=(t,e)=>{const n=Vl(e);t.slots.default=()=>n},tg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},EE=(t,e,n)=>{const r=t.slots=Gp();if(t.vnode.shapeFlag&32){const s=e._;s?(tg(r,e,n),n&&op(r,"_",s,!0)):Zp(e,r)}else e&&eg(t,e)},TE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:tg(s,e,n):(i=!e.$stable,Zp(e,s)),o=e}else e&&(eg(t,e),o={default:1});if(i)for(const c in s)!Xp(c)&&o[c]==null&&delete s[c]},Rt=xE;function IE(t){return wE(t)}function wE(t,e){const n=sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=sn,insertStaticContent:k}=t,O=(v,E,R,V=null,F=null,M=null,G=void 0,z=null,B=!!E.dynamicChildren)=>{if(v===E)return;v&&!Hs(v,E)&&(V=D(v),Fe(v,F,M,!0),v=null),E.patchFlag===-2&&(B=!1,E.dynamicChildren=null);const{type:$,ref:re,shapeFlag:Y}=E;switch($){case ua:x(v,E,R,V);break;case Ar:q(v,E,R,V);break;case cc:v==null&&j(E,R,V,G);break;case We:S(v,E,R,V,F,M,G,z,B);break;default:Y&1?pe(v,E,R,V,F,M,G,z,B):Y&6?T(v,E,R,V,F,M,G,z,B):(Y&64||Y&128)&&$.process(v,E,R,V,F,M,G,z,B,Z)}re!=null&&F&&Po(re,v&&v.ref,M,E||v,!E)},x=(v,E,R,V)=>{if(v==null)r(E.el=c(E.children),R,V);else{const F=E.el=v.el;E.children!==v.children&&h(F,E.children)}},q=(v,E,R,V)=>{v==null?r(E.el=l(E.children||""),R,V):E.el=v.el},j=(v,E,R,V)=>{[v.el,v.anchor]=k(v.children,E,R,V,v.el,v.anchor)},H=({el:v,anchor:E},R,V)=>{let F;for(;v&&v!==E;)F=m(v),r(v,R,V),v=F;r(E,R,V)},K=({el:v,anchor:E})=>{let R;for(;v&&v!==E;)R=m(v),s(v),v=R;s(E)},pe=(v,E,R,V,F,M,G,z,B)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),v==null?me(E,R,V,F,M,G,z,B):I(v,E,F,M,G,z,B)},me=(v,E,R,V,F,M,G,z)=>{let B,$;const{props:re,shapeFlag:Y,transition:ee,dirs:oe}=v;if(B=v.el=o(v.type,M,re&&re.is,re),Y&8?d(B,v.children):Y&16&&y(v.children,B,null,V,F,ac(v,M),G,z),oe&&mr(v,null,V,"created"),w(B,v,v.scopeId,G,V),re){for(const fe in re)fe!=="value"&&!Xs(fe)&&i(B,fe,null,re[fe],M,V);"value"in re&&i(B,"value",null,re.value,M),($=re.onVnodeBeforeMount)&&en($,V,v)}oe&&mr(v,null,V,"beforeMount");const se=AE(F,ee);se&&ee.beforeEnter(B),r(B,E,R),(($=re&&re.onVnodeMounted)||se||oe)&&Rt(()=>{$&&en($,V,v),se&&ee.enter(B),oe&&mr(v,null,V,"mounted")},F)},w=(v,E,R,V,F)=>{if(R&&_(v,R),V)for(let M=0;M<V.length;M++)_(v,V[M]);if(F){let M=F.subTree;if(E===M||ag(M.type)&&(M.ssContent===E||M.ssFallback===E)){const G=F.vnode;w(v,G,G.scopeId,G.slotScopeIds,F.parent)}}},y=(v,E,R,V,F,M,G,z,B=0)=>{for(let $=B;$<v.length;$++){const re=v[$]=z?jn(v[$]):rn(v[$]);O(null,re,E,R,V,F,M,G,z)}},I=(v,E,R,V,F,M,G)=>{const z=E.el=v.el;let{patchFlag:B,dynamicChildren:$,dirs:re}=E;B|=v.patchFlag&16;const Y=v.props||Oe,ee=E.props||Oe;let oe;if(R&&_r(R,!1),(oe=ee.onVnodeBeforeUpdate)&&en(oe,R,E,v),re&&mr(E,v,R,"beforeUpdate"),R&&_r(R,!0),(Y.innerHTML&&ee.innerHTML==null||Y.textContent&&ee.textContent==null)&&d(z,""),$?A(v.dynamicChildren,$,z,R,V,ac(E,F),M):G||ye(v,E,z,null,R,V,ac(E,F),M,!1),B>0){if(B&16)b(z,Y,ee,R,F);else if(B&2&&Y.class!==ee.class&&i(z,"class",null,ee.class,F),B&4&&i(z,"style",Y.style,ee.style,F),B&8){const se=E.dynamicProps;for(let fe=0;fe<se.length;fe++){const Ie=se[fe],rt=Y[Ie],Je=ee[Ie];(Je!==rt||Ie==="value")&&i(z,Ie,rt,Je,F,R)}}B&1&&v.children!==E.children&&d(z,E.children)}else!G&&$==null&&b(z,Y,ee,R,F);((oe=ee.onVnodeUpdated)||re)&&Rt(()=>{oe&&en(oe,R,E,v),re&&mr(E,v,R,"updated")},V)},A=(v,E,R,V,F,M,G)=>{for(let z=0;z<E.length;z++){const B=v[z],$=E[z],re=B.el&&(B.type===We||!Hs(B,$)||B.shapeFlag&70)?p(B.el):R;O(B,$,re,null,V,F,M,G,!0)}},b=(v,E,R,V,F)=>{if(E!==R){if(E!==Oe)for(const M in E)!Xs(M)&&!(M in R)&&i(v,M,E[M],null,F,V);for(const M in R){if(Xs(M))continue;const G=R[M],z=E[M];G!==z&&M!=="value"&&i(v,M,z,G,F,V)}"value"in R&&i(v,"value",E.value,R.value,F)}},S=(v,E,R,V,F,M,G,z,B)=>{const $=E.el=v?v.el:c(""),re=E.anchor=v?v.anchor:c("");let{patchFlag:Y,dynamicChildren:ee,slotScopeIds:oe}=E;oe&&(z=z?z.concat(oe):oe),v==null?(r($,R,V),r(re,R,V),y(E.children||[],R,re,F,M,G,z,B)):Y>0&&Y&64&&ee&&v.dynamicChildren?(A(v.dynamicChildren,ee,R,F,M,G,z),(E.key!=null||F&&E===F.subTree)&&ng(v,E,!0)):ye(v,E,R,re,F,M,G,z,B)},T=(v,E,R,V,F,M,G,z,B)=>{E.slotScopeIds=z,v==null?E.shapeFlag&512?F.ctx.activate(E,R,V,G,B):mt(E,R,V,F,M,G,B):Dt(v,E,B)},mt=(v,E,R,V,F,M,G)=>{const z=v.component=BE(v,V,F);if(Fp(v)&&(z.ctx.renderer=Z),HE(z,!1,G),z.asyncDep){if(F&&F.registerDep(z,qe,G),!v.el){const B=z.subTree=xe(Ar);q(null,B,E,R)}}else qe(z,v,E,R,F,M,G)},Dt=(v,E,R)=>{const V=E.component=v.component;if(VE(v,E,R))if(V.asyncDep&&!V.asyncResolved){Te(V,E,R);return}else V.next=E,V.update();else E.el=v.el,V.vnode=E},qe=(v,E,R,V,F,M,G)=>{const z=()=>{if(v.isMounted){let{next:Y,bu:ee,u:oe,parent:se,vnode:fe}=v;{const st=rg(v);if(st){Y&&(Y.el=fe.el,Te(v,Y,G)),st.asyncDep.then(()=>{v.isUnmounted||z()});return}}let Ie=Y,rt;_r(v,!1),Y?(Y.el=fe.el,Te(v,Y,G)):Y=fe,ee&&lo(ee),(rt=Y.props&&Y.props.onVnodeBeforeUpdate)&&en(rt,se,Y,fe),_r(v,!0);const Je=Nh(v),Nt=v.subTree;v.subTree=Je,O(Nt,Je,p(Nt.el),D(Nt),v,F,M),Y.el=Je.el,Ie===null&&NE(v,Je.el),oe&&Rt(oe,F),(rt=Y.props&&Y.props.onVnodeUpdated)&&Rt(()=>en(rt,se,Y,fe),F)}else{let Y;const{el:ee,props:oe}=E,{bm:se,m:fe,parent:Ie,root:rt,type:Je}=v,Nt=ti(E);_r(v,!1),se&&lo(se),!Nt&&(Y=oe&&oe.onVnodeBeforeMount)&&en(Y,Ie,E),_r(v,!0);{rt.ce&&rt.ce._injectChildStyle(Je);const st=v.subTree=Nh(v);O(null,st,R,V,v,F,M),E.el=st.el}if(fe&&Rt(fe,F),!Nt&&(Y=oe&&oe.onVnodeMounted)){const st=E;Rt(()=>en(Y,Ie,st),F)}(E.shapeFlag&256||Ie&&ti(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&v.a&&Rt(v.a,F),v.isMounted=!0,E=R=V=null}};v.scope.on();const B=v.effect=new hp(z);v.scope.off();const $=v.update=B.run.bind(B),re=v.job=B.runIfDirty.bind(B);re.i=v,re.id=v.uid,B.scheduler=()=>kl(re),_r(v,!0),$()},Te=(v,E,R)=>{E.component=v;const V=v.vnode.props;v.vnode=E,v.next=null,_E(v,E.props,V,R),TE(v,E.children,R),lr(),Rh(v),ur()},ye=(v,E,R,V,F,M,G,z,B=!1)=>{const $=v&&v.children,re=v?v.shapeFlag:0,Y=E.children,{patchFlag:ee,shapeFlag:oe}=E;if(ee>0){if(ee&128){Bt($,Y,R,V,F,M,G,z,B);return}else if(ee&256){At($,Y,R,V,F,M,G,z,B);return}}oe&8?(re&16&&Tt($,F,M),Y!==$&&d(R,Y)):re&16?oe&16?Bt($,Y,R,V,F,M,G,z,B):Tt($,F,M,!0):(re&8&&d(R,""),oe&16&&y(Y,R,V,F,M,G,z,B))},At=(v,E,R,V,F,M,G,z,B)=>{v=v||es,E=E||es;const $=v.length,re=E.length,Y=Math.min($,re);let ee;for(ee=0;ee<Y;ee++){const oe=E[ee]=B?jn(E[ee]):rn(E[ee]);O(v[ee],oe,R,null,F,M,G,z,B)}$>re?Tt(v,F,M,!0,!1,Y):y(E,R,V,F,M,G,z,B,Y)},Bt=(v,E,R,V,F,M,G,z,B)=>{let $=0;const re=E.length;let Y=v.length-1,ee=re-1;for(;$<=Y&&$<=ee;){const oe=v[$],se=E[$]=B?jn(E[$]):rn(E[$]);if(Hs(oe,se))O(oe,se,R,null,F,M,G,z,B);else break;$++}for(;$<=Y&&$<=ee;){const oe=v[Y],se=E[ee]=B?jn(E[ee]):rn(E[ee]);if(Hs(oe,se))O(oe,se,R,null,F,M,G,z,B);else break;Y--,ee--}if($>Y){if($<=ee){const oe=ee+1,se=oe<re?E[oe].el:V;for(;$<=ee;)O(null,E[$]=B?jn(E[$]):rn(E[$]),R,se,F,M,G,z,B),$++}}else if($>ee)for(;$<=Y;)Fe(v[$],F,M,!0),$++;else{const oe=$,se=$,fe=new Map;for($=se;$<=ee;$++){const Xe=E[$]=B?jn(E[$]):rn(E[$]);Xe.key!=null&&fe.set(Xe.key,$)}let Ie,rt=0;const Je=ee-se+1;let Nt=!1,st=0;const Nn=new Array(Je);for($=0;$<Je;$++)Nn[$]=0;for($=oe;$<=Y;$++){const Xe=v[$];if(rt>=Je){Fe(Xe,F,M,!0);continue}let xt;if(Xe.key!=null)xt=fe.get(Xe.key);else for(Ie=se;Ie<=ee;Ie++)if(Nn[Ie-se]===0&&Hs(Xe,E[Ie])){xt=Ie;break}xt===void 0?Fe(Xe,F,M,!0):(Nn[xt-se]=$+1,xt>=st?st=xt:Nt=!0,O(Xe,E[xt],R,null,F,M,G,z,B),rt++)}const Cs=Nt?bE(Nn):es;for(Ie=Cs.length-1,$=Je-1;$>=0;$--){const Xe=se+$,xt=E[Xe],Fi=Xe+1<re?E[Xe+1].el:V;Nn[$]===0?O(null,xt,R,Fi,F,M,G,z,B):Nt&&(Ie<0||$!==Cs[Ie]?Vt(xt,R,Fi,2):Ie--)}}},Vt=(v,E,R,V,F=null)=>{const{el:M,type:G,transition:z,children:B,shapeFlag:$}=v;if($&6){Vt(v.component.subTree,E,R,V);return}if($&128){v.suspense.move(E,R,V);return}if($&64){G.move(v,E,R,Z);return}if(G===We){r(M,E,R);for(let Y=0;Y<B.length;Y++)Vt(B[Y],E,R,V);r(v.anchor,E,R);return}if(G===cc){H(v,E,R);return}if(V!==2&&$&1&&z)if(V===0)z.beforeEnter(M),r(M,E,R),Rt(()=>z.enter(M),F);else{const{leave:Y,delayLeave:ee,afterLeave:oe}=z,se=()=>r(M,E,R),fe=()=>{Y(M,()=>{se(),oe&&oe()})};ee?ee(M,se,fe):fe()}else r(M,E,R)},Fe=(v,E,R,V=!1,F=!1)=>{const{type:M,props:G,ref:z,children:B,dynamicChildren:$,shapeFlag:re,patchFlag:Y,dirs:ee,cacheIndex:oe}=v;if(Y===-2&&(F=!1),z!=null&&Po(z,null,R,v,!0),oe!=null&&(E.renderCache[oe]=void 0),re&256){E.ctx.deactivate(v);return}const se=re&1&&ee,fe=!ti(v);let Ie;if(fe&&(Ie=G&&G.onVnodeBeforeUnmount)&&en(Ie,E,v),re&6)Zt(v.component,R,V);else{if(re&128){v.suspense.unmount(R,V);return}se&&mr(v,null,E,"beforeUnmount"),re&64?v.type.remove(v,E,R,Z,V):$&&!$.hasOnce&&(M!==We||Y>0&&Y&64)?Tt($,E,R,!1,!0):(M===We&&Y&384||!F&&re&16)&&Tt(B,E,R),V&&Ue(v)}(fe&&(Ie=G&&G.onVnodeUnmounted)||se)&&Rt(()=>{Ie&&en(Ie,E,v),se&&mr(v,null,E,"unmounted")},R)},Ue=v=>{const{type:E,el:R,anchor:V,transition:F}=v;if(E===We){Vn(R,V);return}if(E===cc){K(v);return}const M=()=>{s(R),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:G,delayLeave:z}=F,B=()=>G(R,M);z?z(v.el,M,B):B()}else M()},Vn=(v,E)=>{let R;for(;v!==E;)R=m(v),s(v),v=R;s(E)},Zt=(v,E,R)=>{const{bum:V,scope:F,job:M,subTree:G,um:z,m:B,a:$}=v;Vh(B),Vh($),V&&lo(V),F.stop(),M&&(M.flags|=8,Fe(G,v,E,R)),z&&Rt(z,E),Rt(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Tt=(v,E,R,V=!1,F=!1,M=0)=>{for(let G=M;G<v.length;G++)Fe(v[G],E,R,V,F)},D=v=>{if(v.shapeFlag&6)return D(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const E=m(v.anchor||v.el),R=E&&E[Kv];return R?m(R):E};let J=!1;const Q=(v,E,R)=>{v==null?E._vnode&&Fe(E._vnode,null,null,!0):O(E._vnode||null,v,E,null,null,null,R),E._vnode=v,J||(J=!0,Rh(),Np(),J=!1)},Z={p:O,um:Fe,m:Vt,r:Ue,mt,mc:y,pc:ye,pbc:A,n:D,o:t};return{render:Q,hydrate:void 0,createApp:gE(Q)}}function ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function AE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ng(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=jn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ng(o,c)),c.type===ua&&(c.el=o.el)}}function bE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function rg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rg(e)}function Vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const RE=Symbol.for("v-scx"),SE=()=>on(RE);function ho(t,e,n){return sg(t,e,n)}function sg(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,c=pt({},n),l=e&&r||!e&&i!=="post";let h;if(mi){if(i==="sync"){const _=SE();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=sn,_.resume=sn,_.pause=sn,_}}const d=dt;c.call=(_,k,O)=>hn(_,d,k,O);let p=!1;i==="post"?c.scheduler=_=>{Rt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,k)=>{k?_():kl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=Hv(t,e,c);return mi&&(h?h.push(m):l&&m()),m}function PE(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?ig(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Ci(this),c=sg(s,i.bind(r),n);return o(),c}function ig(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const CE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${Dr(e)}Modifiers`];function kE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&CE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>He(d)?d.trim():d)),o.number&&(s=n.map(Cc)));let c,l=r[c=tc(e)]||r[c=tc($t(e))];!l&&i&&(l=r[c=tc(Dr(e))]),l&&hn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,hn(h,t,6,s)}}function og(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const d=og(h,e,!0);d&&(c=!0,pt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):pt(o,i),Le(t)&&r.set(t,o),o)}function la(t,e){return!t||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Dr(e))||Pe(t,e))}function Nh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:k,inheritAttrs:O}=t,x=So(t);let q,j;try{if(n.shapeFlag&4){const K=s||r,pe=K;q=rn(h.call(pe,K,d,p,_,m,k)),j=c}else{const K=e;q=rn(K.length>1?K(p,{attrs:c,slots:o,emit:l}):K(p,null)),j=e.props?c:OE(c)}}catch(K){ri.length=0,aa(K,t,1),q=xe(Ar)}let H=q;if(j&&O!==!1){const K=Object.keys(j),{shapeFlag:pe}=H;K.length&&pe&7&&(i&&K.some(vl)&&(j=DE(j,i)),H=us(H,j,!1,!0))}return n.dirs&&(H=us(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Ol(H,n.transition),q=H,So(x),q}const OE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ea(n))&&((e||(e={}))[n]=t[n]);return e},DE=(t,e)=>{const n={};for(const r in t)(!vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function VE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!la(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?xh(r,o,h):!0:!!o;return!1}function xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!la(n,i))return!0}return!1}function NE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ag=t=>t.__isSuspense;function xE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Wv(t)}const We=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),ri=[];let Ct=null;function he(t=!1){ri.push(Ct=t?null:[])}function ME(){ri.pop(),Ct=ri[ri.length-1]||null}let gi=1;function Mh(t,e=!1){gi+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function cg(t){return t.dynamicChildren=gi>0?Ct||es:null,ME(),gi>0&&Ct&&Ct.push(t),t}function ge(t,e,n,r,s,i){return cg(N(t,e,n,r,s,i,!0))}function Nl(t,e,n,r,s){return cg(xe(t,e,n,r,s,!0))}function ko(t){return t?t.__v_isVNode===!0:!1}function Hs(t,e){return t.type===e.type&&t.key===e.key}const lg=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||ft(t)||de(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lg(e),ref:e&&fo(e),scopeId:Mp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return c?(xl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),gi>0&&!o&&Ct&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ct.push(l),l}const xe=LE;function LE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Bp)&&(t=Ar),ko(t)){const c=us(t,e,!0);return n&&xl(c,n),gi>0&&!i&&Ct&&(c.shapeFlag&6?Ct[Ct.indexOf(t)]=c:Ct.push(c)),c.patchFlag=-2,c}if(GE(t)&&(t=t.__vccOpts),e){e=FE(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=Vr(c)),Le(l)&&(Cl(l)&&!le(l)&&(l=pt({},l)),e.style=Il(l))}const o=He(t)?1:ag(t)?128:Gv(t)?64:Le(t)?4:de(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function FE(t){return t?Cl(t)||Qp(t)?pt({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?UE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&lg(h),ref:e&&e.ref?n&&i?le(i)?i.concat(fo(e)):[i,fo(e)]:fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ol(d,l.clone(d)),d}function vn(t=" ",e=0){return xe(ua,null,t,e)}function hs(t="",e=!1){return e?(he(),Nl(Ar,null,t)):xe(Ar,null,t)}function rn(t){return t==null||typeof t=="boolean"?xe(Ar):le(t)?xe(We,null,t.slice()):ko(t)?jn(t):xe(ua,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qp(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function UE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Vr([e.class,r.class]));else if(s==="style")e.style=Il([e.style,r.style]);else if(ea(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){hn(t,e,7,[n,r])}const $E=Wp();let jE=0;function BE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$E,i={uid:jE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(r,s),emitsOptions:og(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kE.bind(null,i),t.ce&&t.ce(i),i}let dt=null,Oo,jc;{const t=sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),jc=e("__VUE_SSR_SETTERS__",n=>mi=n)}const Ci=t=>{const e=dt;return Oo(t),t.scope.on(),()=>{t.scope.off(),Oo(e)}},Lh=()=>{dt&&dt.scope.off(),Oo(null)};function ug(t){return t.vnode.shapeFlag&4}let mi=!1;function HE(t,e=!1,n=!1){e&&jc(e);const{props:r,children:s}=t.vnode,i=ug(t);mE(t,r,i,e),EE(t,s,n);const o=i?qE(t,e):void 0;return e&&jc(!1),o}function qE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cE);const{setup:r}=n;if(r){lr();const s=t.setupContext=r.length>1?WE(t):null,i=Ci(t),o=Pi(r,t,0,[t.props,s]),c=rp(o);if(ur(),i(),(c||t.sp)&&!ti(t)&&Lp(t),c){if(o.then(Lh,Lh),e)return o.then(l=>{Fh(t,l)}).catch(l=>{aa(l,t,0)});t.asyncDep=o}else Fh(t,o)}else hg(t)}function Fh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=kp(e)),hg(t)}function hg(t,e,n){const r=t.type;t.render||(t.render=r.render||sn);{const s=Ci(t);lr();try{lE(t)}finally{ur(),s()}}}const zE={get(t,e){return lt(t,"get",""),t[e]}};function WE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,zE),slots:t.slots,emit:t.emit,expose:e}}function ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kp(Sp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)},has(e,n){return n in e||n in ni}})):t.proxy}function KE(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function GE(t){return de(t)&&"__vccOpts"in t}const qt=(t,e)=>jv(t,e,mi);function dg(t,e,n){const r=arguments.length;return r===2?Le(e)&&!le(e)?ko(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ko(n)&&(n=[n]),xe(t,e,n))}const QE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bc;const Uh=typeof window<"u"&&window.trustedTypes;if(Uh)try{Bc=Uh.createPolicy("vue",{createHTML:t=>t})}catch{}const fg=Bc?t=>Bc.createHTML(t):t=>t,YE="http://www.w3.org/2000/svg",JE="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,$h=En&&En.createElement("template"),XE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(YE,t):e==="mathml"?En.createElementNS(JE,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$h.innerHTML=fg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=$h.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ZE=Symbol("_vtc");function eT(t,e,n){const r=t[ZE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jh=Symbol("_vod"),tT=Symbol("_vsh"),nT=Symbol(""),rT=/(^|;)\s*display\s*:/;function sT(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&po(r,c,"")}else for(const o in e)n[o]==null&&po(r,o,"");for(const o in n)o==="display"&&(i=!0),po(r,o,n[o])}else if(s){if(e!==n){const o=r[nT];o&&(n+=";"+o),r.cssText=n,i=rT.test(n)}}else e&&t.removeAttribute("style");jh in t&&(t[jh]=i?r.display:"",t[tT]&&(r.display="none"))}const Bh=/\s*!important$/;function po(t,e,n){if(le(n))n.forEach(r=>po(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=iT(t,e);Bh.test(n)?t.setProperty(Dr(r),n.replace(Bh,""),"important"):t[r]=n}}const Hh=["Webkit","Moz","ms"],lc={};function iT(t,e){const n=lc[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return lc[e]=r;r=ra(r);for(let s=0;s<Hh.length;s++){const i=Hh[s]+r;if(i in t)return lc[e]=i}return e}const qh="http://www.w3.org/1999/xlink";function zh(t,e,n,r,s,i=mv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qh,e.slice(6,e.length)):t.setAttributeNS(qh,e,n):n==null||i&&!ap(n)?t.removeAttribute(e):t.setAttribute(e,i?"":cr(n)?String(n):n)}function Wh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ap(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function oT(t,e,n,r){t.removeEventListener(e,n,r)}const Kh=Symbol("_vei");function aT(t,e,n,r,s=null){const i=t[Kh]||(t[Kh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=cT(e);if(r){const h=i[e]=hT(r,s);Kr(t,c,h,l)}else o&&(oT(t,c,o,l),i[e]=void 0)}}const Gh=/(?:Once|Passive|Capture)$/;function cT(t){let e;if(Gh.test(t)){e={};let r;for(;r=t.match(Gh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let uc=0;const lT=Promise.resolve(),uT=()=>uc||(lT.then(()=>uc=0),uc=Date.now());function hT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;hn(dT(r,n.value),e,5,[r])};return n.value=t,n.attached=uT(),n}function dT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?eT(t,r,o):e==="style"?sT(t,n,r):ea(e)?vl(e)||aT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pT(t,e,r,o))?(Wh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?Wh(t,$t(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zh(t,e,r,o))};function pT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qh(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qh(e)&&He(n)?!1:e in t}const Yh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>lo(e,n):e};function gT(t){t.target.composing=!0}function Jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hc=Symbol("_assign"),Hc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[hc]=Yh(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Cc(c)),t[hc](c)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",gT),Kr(t,"compositionend",Jh),Kr(t,"change",Jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[hc]=Yh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Cc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},mT=pt({patchProp:fT},XE);let Xh;function _T(){return Xh||(Xh=IE(mT))}const yT=(...t)=>{const e=_T().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ET(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,vT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ET(t){return He(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const TT=Symbol();var Zh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zh||(Zh={}));function IT(){const t=_v(!0),e=t.run(()=>Pp({}));let n=[],r=[];const s=Sp({install(i){s._a=i,i.provide(TT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const wT="/assets/asus-motherboard-DaC8ubwh.jpg",pg=Object.freeze(Object.defineProperty({__proto__:null,default:wT},Symbol.toStringTag,{value:"Module"})),AT="/assets/corsair-ram-BCA5X9TK.jpg",gg=Object.freeze(Object.defineProperty({__proto__:null,default:AT},Symbol.toStringTag,{value:"Module"})),bT="/assets/rtx4080-CZVJeLan.jpg",mg=Object.freeze(Object.defineProperty({__proto__:null,default:bT},Symbol.toStringTag,{value:"Module"})),RT="/assets/ryzen9-DQMQJf1T.jpg",_g=Object.freeze(Object.defineProperty({__proto__:null,default:RT},Symbol.toStringTag,{value:"Module"})),ST="/assets/cyberpunk-BKK2PMYP.jpg",yg=Object.freeze(Object.defineProperty({__proto__:null,default:ST},Symbol.toStringTag,{value:"Module"})),PT="/assets/elden-ring-BspWVaDS.jpg",vg=Object.freeze(Object.defineProperty({__proto__:null,default:PT},Symbol.toStringTag,{value:"Module"})),CT="/assets/horizon-CxqjN45K.jpg",Eg=Object.freeze(Object.defineProperty({__proto__:null,default:CT},Symbol.toStringTag,{value:"Module"})),kT="/assets/zelda-BkD6ze42.jpg",Tg=Object.freeze(Object.defineProperty({__proto__:null,default:kT},Symbol.toStringTag,{value:"Module"})),OT="/assets/logitech-keyboard-D93Uf1tf.jpg",Ig=Object.freeze(Object.defineProperty({__proto__:null,default:OT},Symbol.toStringTag,{value:"Module"})),DT="/assets/razer-mouse-DAlukP4q.jpg",wg=Object.freeze(Object.defineProperty({__proto__:null,default:DT},Symbol.toStringTag,{value:"Module"})),VT="/assets/samsung-monitor-DUmbARo8.jpg",Ag=Object.freeze(Object.defineProperty({__proto__:null,default:VT},Symbol.toStringTag,{value:"Module"})),NT="/assets/xbox-controller-CMrGYDnt.jpg",bg=Object.freeze(Object.defineProperty({__proto__:null,default:NT},Symbol.toStringTag,{value:"Module"})),jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xT=Object.assign({"../assets/images/hardware/asus-motherboard.jpg":pg,"../assets/images/hardware/corsair-ram.jpg":gg,"../assets/images/hardware/rtx4080.jpg":mg,"../assets/images/hardware/ryzen9.jpg":_g}),MT=Object.assign({"../assets/images/games/cyberpunk.jpg":yg,"../assets/images/games/elden-ring.jpg":vg,"../assets/images/games/horizon.jpg":Eg,"../assets/images/games/zelda.jpg":Tg}),LT=Object.assign({"../assets/images/accessories/logitech-keyboard.jpg":Ig,"../assets/images/accessories/razer-mouse.jpg":wg,"../assets/images/accessories/samsung-monitor.jpg":Ag,"../assets/images/accessories/xbox-controller.jpg":bg}),FT={name:"HomePage",data(){return{featuredProducts:[{id:1,name:"RTX 4080 Graphics Card",category:"Hardware",price:799.99,imageFile:"rtx4080.jpg"},{id:2,name:"AMD Ryzen 9 7950X CPU",category:"Hardware",price:549.99,imageFile:"ryzen9.jpg"},{id:3,name:"Cyberpunk 2077",category:"Games",price:59.99,imageFile:"cyberpunk.jpg"},{id:4,name:"Mechanical Gaming Keyboard",category:"Accessories",price:129.99,imageFile:"logitech-keyboard.jpg"}]}},methods:{navigateToCategory(t){var e;console.log(`Navigating to ${t}`),(e=this.$router)==null||e.push(`/${t}`)},getImageUrl(t){if(!t.imageFile)return"https://placehold.co/300x200?text=Product";let e;switch(t.category.toLowerCase()){case"hardware":e=xT;break;case"games":e=MT;break;case"accessories":e=LT;break;default:return`https://placehold.co/300x200?text=${encodeURIComponent(t.name)}`}for(const n in e)if(n.includes(t.imageFile))return e[n].default;return`https://placehold.co/300x200?text=${encodeURIComponent(t.name)}`},addToCart(t){console.log("Added to cart:",t),alert(`${t.name} added to cart!`)}}},UT={class:"homepage"},$T={class:"featured-products"},jT={class:"product-grid"},BT=["src","alt"],HT={class:"product-details"},qT={class:"product-name"},zT={class:"product-category"},WT={class:"product-price"},KT=["onClick"],GT={class:"categories"},QT={class:"category-grid"};function YT(t,e,n,r,s,i){return he(),ge("div",UT,[e[8]||(e[8]=N("header",{class:"hero"},[N("div",{class:"hero-content"},[N("h1",null,"371 Hardware"),N("p",null,"Your one-stop shop for premium computer hardware and the latest games"),N("button",{class:"cta-button"},"Shop Now")])],-1)),N("section",$T,[e[3]||(e[3]=N("h2",null,"Featured Products",-1)),N("div",jT,[(he(!0),ge(We,null,Sn(s.featuredProducts,o=>(he(),ge("div",{key:o.id,class:"product-card"},[N("img",{src:i.getImageUrl(o),alt:o.name,class:"product-image"},null,8,BT),N("div",HT,[N("h3",qT,Ve(o.name),1),N("p",zT,Ve(o.category),1),N("p",WT,"$"+Ve(o.price.toFixed(2)),1)]),N("button",{class:"add-to-cart",onClick:c=>i.addToCart(o)},"Add to Cart",8,KT)]))),128))])]),N("section",GT,[e[7]||(e[7]=N("h2",null,"Browse Categories",-1)),N("div",QT,[N("div",{class:"category-card",onClick:e[0]||(e[0]=o=>i.navigateToCategory("hardware"))},e[4]||(e[4]=[N("h3",null,"Computer Hardware",-1),N("p",null,"CPUs, GPUs, Motherboards, and more",-1)])),N("div",{class:"category-card",onClick:e[1]||(e[1]=o=>i.navigateToCategory("games"))},e[5]||(e[5]=[N("h3",null,"Games",-1),N("p",null,"Latest PC and console titles",-1)])),N("div",{class:"category-card",onClick:e[2]||(e[2]=o=>i.navigateToCategory("accessories"))},e[6]||(e[6]=[N("h3",null,"Accessories",-1),N("p",null,"Keyboards, mice, headsets, and more",-1)]))])])])}const Rg=jt(FT,[["render",YT],["__scopeId","data-v-57b3dd27"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof document<"u";function Sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function JT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sg(t.default)}const Re=Object.assign;function dc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Qt(s)?s.map(t):t(s)}return n}const si=()=>{},Qt=Array.isArray,Pg=/#/g,XT=/&/g,ZT=/\//g,eI=/=/g,tI=/\?/g,Cg=/\+/g,nI=/%5B/g,rI=/%5D/g,kg=/%5E/g,sI=/%60/g,Og=/%7B/g,iI=/%7C/g,Dg=/%7D/g,oI=/%20/g;function Ml(t){return encodeURI(""+t).replace(iI,"|").replace(nI,"[").replace(rI,"]")}function aI(t){return Ml(t).replace(Og,"{").replace(Dg,"}").replace(kg,"^")}function qc(t){return Ml(t).replace(Cg,"%2B").replace(oI,"+").replace(Pg,"%23").replace(XT,"%26").replace(sI,"`").replace(Og,"{").replace(Dg,"}").replace(kg,"^")}function cI(t){return qc(t).replace(eI,"%3D")}function lI(t){return Ml(t).replace(Pg,"%23").replace(tI,"%3F")}function uI(t){return t==null?"":lI(t).replace(ZT,"%2F")}function _i(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hI=/\/$/,dI=t=>t.replace(hI,"");function fc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=mI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:_i(o)}}function fI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ds(e.matched[r],n.matched[s])&&Vg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gI(t[n],e[n]))return!1;return!0}function gI(t,e){return Qt(t)?td(t,e):Qt(e)?td(e,t):t===e}function td(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var yi;(function(t){t.pop="pop",t.push="push"})(yi||(yi={}));var ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ii||(ii={}));function _I(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dI(t)}const yI=/^[^#]+#/;function vI(t,e){return t.replace(yI,"#")+e}function EI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const da=()=>({left:window.scrollX,top:window.scrollY});function TI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=EI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nd(t,e){return(history.state?history.state.position-e:-1)+t}const zc=new Map;function II(t,e){zc.set(t,e)}function wI(t){const e=zc.get(t);return zc.delete(t),e}let AI=()=>location.protocol+"//"+location.host;function Ng(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),ed(l,"")}return ed(n,t)+r+s}function bI(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=Ng(t,location),k=n.value,O=e.value;let x=0;if(m){if(n.value=_,e.value=m,o&&o===k){o=null;return}x=O?m.position-O.position:0}else r(_);s.forEach(q=>{q(n.value,k,{delta:x,type:yi.pop,direction:x?x>0?ii.forward:ii.back:ii.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:da()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function rd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?da():null}}function RI(t){const{history:e,location:n}=window,r={value:Ng(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:AI()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,h){const d=Re({},e.state,rd(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Re({},s.value,e.state,{forward:l,scroll:da()});i(d.current,d,!0);const p=Re({},rd(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function SI(t){t=_I(t);const e=RI(t),n=bI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:vI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),SI(t)}function CI(t){return typeof t=="string"||t&&typeof t=="object"}function xg(t){return typeof t=="string"||typeof t=="symbol"}const Mg=Symbol("");var sd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sd||(sd={}));function fs(t,e){return Re(new Error,{type:t,[Mg]:!0},e)}function yn(t,e){return t instanceof Error&&Mg in t&&(e==null||!!(t.type&e))}const id="[^/]+?",kI={sensitive:!1,strict:!1,start:!0,end:!0},OI=/[.+*?^${}()[\]/\\]/g;function DI(t,e){const n=Re({},kI,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(OI,"\\$&"),_+=40;else if(m.type===1){const{value:k,repeatable:O,optional:x,regexp:q}=m;i.push({name:k,repeatable:O,optional:x});const j=q||id;if(j!==id){_+=10;try{new RegExp(`(${j})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+K.message)}}let H=O?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(H=x&&h.length<2?`(?:/${H})`:"/"+H),x&&(H+="?"),s+=H,_+=20,x&&(_+=-8),O&&(_+=-20),j===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",k=i[m-1];p[k.name]=_&&k.repeatable?_.split("/"):_}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:k,repeatable:O,optional:x}=_,q=k in h?h[k]:"";if(Qt(q)&&!O)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=Qt(q)?q.join("/"):q;if(!j)if(x)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function VI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=VI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(od(r))return 1;if(od(s))return-1}return s.length-r.length}function od(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NI={type:0,value:""},xI=/[a-zA-Z0-9_]/;function MI(t){if(!t)return[[]];if(t==="/")return[[NI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:xI.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function LI(t,e,n){const r=DI(MI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FI(t,e){const n=[],r=new Map;e=ud({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const k=!_,O=cd(p);O.aliasOf=_&&_.record;const x=ud(e,p),q=[O];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const pe of K)q.push(cd(Re({},O,{components:_?_.record.components:O.components,path:pe,aliasOf:_?_.record:O})))}let j,H;for(const K of q){const{path:pe}=K;if(m&&pe[0]!=="/"){const me=m.record.path,w=me[me.length-1]==="/"?"":"/";K.path=m.record.path+(pe&&w+pe)}if(j=LI(K,m,x),_?_.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),k&&p.name&&!ld(j)&&o(p.name)),Fg(j)&&l(j),O.children){const me=O.children;for(let w=0;w<me.length;w++)i(me[w],j,_&&_.children[w])}_=_||j}return H?()=>{o(H)}:si}function o(p){if(xg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=jI(p,n);n.splice(m,0,p),p.record.name&&!ld(p)&&r.set(p.record.name,p)}function h(p,m){let _,k={},O,x;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw fs(1,{location:p});x=_.record.name,k=Re(ad(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&ad(p.params,_.keys.map(H=>H.name))),O=_.stringify(k)}else if(p.path!=null)O=p.path,_=n.find(H=>H.re.test(O)),_&&(k=_.parse(O),x=_.record.name);else{if(_=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw fs(1,{location:p,currentLocation:m});x=_.record.name,k=Re({},m.params,p.params),O=_.stringify(k)}const q=[];let j=_;for(;j;)q.unshift(j.record),j=j.parent;return{name:x,path:O,params:k,matched:q,meta:$I(q)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function ad(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $I(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function ud(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function jI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Lg(t,e[i])<0?r=i:n=i+1}const s=BI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function BI(t){let e=t;for(;e=e.parent;)if(Fg(e)&&Lg(t,e)===0)return e}function Fg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function HI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cg," "),o=i.indexOf("="),c=_i(o<0?i:i.slice(0,o)),l=o<0?null:_i(i.slice(o+1));if(c in e){let h=e[c];Qt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function hd(t){let e="";for(let n in t){const r=t[n];if(n=cI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(i=>i&&qc(i)):[r&&qc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const zI=Symbol(""),dd=Symbol(""),fa=Symbol(""),Ug=Symbol(""),Wc=Symbol("");function qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(fs(4,{from:n,to:e})):m instanceof Error?l(m):CI(m)?l(fs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function pc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Sg(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Bn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=JT(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Bn(_,n,r,o,c,s)()}))}}return i}function fd(t){const e=on(fa),n=on(Ug),r=qt(()=>{const l=rs(t.to);return e.resolve(l)}),s=qt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ds.bind(null,d));if(m>-1)return m;const _=pd(l[h-2]);return h>1&&pd(d)===_&&p[p.length-1].path!==_?p.findIndex(ds.bind(null,l[h-2])):m}),i=qt(()=>s.value>-1&&YI(n.params,r.value.params)),o=qt(()=>s.value>-1&&s.value===n.matched.length-1&&Vg(n.params,r.value.params));function c(l={}){if(QI(l)){const h=e[rs(t.replace)?"replace":"push"](rs(t.to)).catch(si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function WI(t){return t.length===1?t[0]:t}const KI=Dl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fd,setup(t,{slots:e}){const n=oa(fd(t)),{options:r}=on(fa),s=qt(()=>({[gd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&WI(e.default(n));return t.custom?i:dg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GI=KI;function QI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gd=(t,e,n)=>t??e??n,JI=Dl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=on(Wc),s=qt(()=>t.route||r.value),i=on(dd,0),o=qt(()=>{let h=rs(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=qt(()=>s.value.matched[o.value]);uo(dd,qt(()=>o.value+1)),uo(zI,c),uo(Wc,s);const l=Pp();return ho(()=>[l.value,c.value,t.name],([h,d,p],[m,_,k])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!ds(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(O=>O(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return md(n.default,{Component:m,route:h});const _=p.props[d],k=_?_===!0?h.params:typeof _=="function"?_(h):_:null,x=dg(m,Re({},k,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return md(n.default,{Component:x,route:h})||x}}});function md(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XI=JI;function ZI(t){const e=FI(t.routes,t),n=t.parseQuery||HI,r=t.stringifyQuery||hd,s=t.history,i=qs(),o=qs(),c=qs(),l=Lv(Fn);let h=Fn;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=dc.bind(null,D=>""+D),p=dc.bind(null,uI),m=dc.bind(null,_i);function _(D,J){let Q,Z;return xg(D)?(Q=e.getRecordMatcher(D),Z=J):Z=D,e.addRoute(Z,Q)}function k(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(D=>D.record)}function x(D){return!!e.getRecordMatcher(D)}function q(D,J){if(J=Re({},J||l.value),typeof D=="string"){const R=fc(n,D,J.path),V=e.resolve({path:R.path},J),F=s.createHref(R.fullPath);return Re(R,V,{params:m(V.params),hash:_i(R.hash),redirectedFrom:void 0,href:F})}let Q;if(D.path!=null)Q=Re({},D,{path:fc(n,D.path,J.path).path});else{const R=Re({},D.params);for(const V in R)R[V]==null&&delete R[V];Q=Re({},D,{params:p(R)}),J.params=p(J.params)}const Z=e.resolve(Q,J),Ae=D.hash||"";Z.params=d(m(Z.params));const v=fI(r,Re({},D,{hash:aI(Ae),path:Z.path})),E=s.createHref(v);return Re({fullPath:v,hash:Ae,query:r===hd?qI(D.query):D.query||{}},Z,{redirectedFrom:void 0,href:E})}function j(D){return typeof D=="string"?fc(n,D,l.value.path):Re({},D)}function H(D,J){if(h!==D)return fs(8,{from:J,to:D})}function K(D){return w(D)}function pe(D){return K(Re(j(D),{replace:!0}))}function me(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let Z=typeof Q=="function"?Q(D):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=j(Z):{path:Z},Z.params={}),Re({query:D.query,hash:D.hash,params:Z.path!=null?{}:D.params},Z)}}function w(D,J){const Q=h=q(D),Z=l.value,Ae=D.state,v=D.force,E=D.replace===!0,R=me(Q);if(R)return w(Re(j(R),{state:typeof R=="object"?Re({},Ae,R.state):Ae,force:v,replace:E}),J||Q);const V=Q;V.redirectedFrom=J;let F;return!v&&pI(r,Z,Q)&&(F=fs(16,{to:V,from:Z}),Vt(Z,Z,!0,!1)),(F?Promise.resolve(F):A(V,Z)).catch(M=>yn(M)?yn(M,2)?M:Bt(M):ye(M,V,Z)).then(M=>{if(M){if(yn(M,2))return w(Re({replace:E},j(M.to),{state:typeof M.to=="object"?Re({},Ae,M.to.state):Ae,force:v}),J||V)}else M=S(V,Z,!0,E,Ae);return b(V,Z,M),M})}function y(D,J){const Q=H(D,J);return Q?Promise.reject(Q):Promise.resolve()}function I(D){const J=Vn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function A(D,J){let Q;const[Z,Ae,v]=ew(D,J);Q=pc(Z.reverse(),"beforeRouteLeave",D,J);for(const R of Z)R.leaveGuards.forEach(V=>{Q.push(Bn(V,D,J))});const E=y.bind(null,D,J);return Q.push(E),Tt(Q).then(()=>{Q=[];for(const R of i.list())Q.push(Bn(R,D,J));return Q.push(E),Tt(Q)}).then(()=>{Q=pc(Ae,"beforeRouteUpdate",D,J);for(const R of Ae)R.updateGuards.forEach(V=>{Q.push(Bn(V,D,J))});return Q.push(E),Tt(Q)}).then(()=>{Q=[];for(const R of v)if(R.beforeEnter)if(Qt(R.beforeEnter))for(const V of R.beforeEnter)Q.push(Bn(V,D,J));else Q.push(Bn(R.beforeEnter,D,J));return Q.push(E),Tt(Q)}).then(()=>(D.matched.forEach(R=>R.enterCallbacks={}),Q=pc(v,"beforeRouteEnter",D,J,I),Q.push(E),Tt(Q))).then(()=>{Q=[];for(const R of o.list())Q.push(Bn(R,D,J));return Q.push(E),Tt(Q)}).catch(R=>yn(R,8)?R:Promise.reject(R))}function b(D,J,Q){c.list().forEach(Z=>I(()=>Z(D,J,Q)))}function S(D,J,Q,Z,Ae){const v=H(D,J);if(v)return v;const E=J===Fn,R=Gr?history.state:{};Q&&(Z||E?s.replace(D.fullPath,Re({scroll:E&&R&&R.scroll},Ae)):s.push(D.fullPath,Ae)),l.value=D,Vt(D,J,Q,E),Bt()}let T;function mt(){T||(T=s.listen((D,J,Q)=>{if(!Zt.listening)return;const Z=q(D),Ae=me(Z);if(Ae){w(Re(Ae,{replace:!0,force:!0}),Z).catch(si);return}h=Z;const v=l.value;Gr&&II(nd(v.fullPath,Q.delta),da()),A(Z,v).catch(E=>yn(E,12)?E:yn(E,2)?(w(Re(j(E.to),{force:!0}),Z).then(R=>{yn(R,20)&&!Q.delta&&Q.type===yi.pop&&s.go(-1,!1)}).catch(si),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(E,Z,v))).then(E=>{E=E||S(Z,v,!1),E&&(Q.delta&&!yn(E,8)?s.go(-Q.delta,!1):Q.type===yi.pop&&yn(E,20)&&s.go(-1,!1)),b(Z,v,E)}).catch(si)}))}let Dt=qs(),qe=qs(),Te;function ye(D,J,Q){Bt(D);const Z=qe.list();return Z.length?Z.forEach(Ae=>Ae(D,J,Q)):console.error(D),Promise.reject(D)}function At(){return Te&&l.value!==Fn?Promise.resolve():new Promise((D,J)=>{Dt.add([D,J])})}function Bt(D){return Te||(Te=!D,mt(),Dt.list().forEach(([J,Q])=>D?Q(D):J()),Dt.reset()),D}function Vt(D,J,Q,Z){const{scrollBehavior:Ae}=t;if(!Gr||!Ae)return Promise.resolve();const v=!Q&&wI(nd(D.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return Dp().then(()=>Ae(D,J,v)).then(E=>E&&TI(E)).catch(E=>ye(E,D,J))}const Fe=D=>s.go(D);let Ue;const Vn=new Set,Zt={currentRoute:l,listening:!0,addRoute:_,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:O,resolve:q,options:t,push:K,replace:pe,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:qe.add,isReady:At,install(D){const J=this;D.component("RouterLink",GI),D.component("RouterView",XI),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),Gr&&!Ue&&l.value===Fn&&(Ue=!0,K(s.location).catch(Ae=>{}));const Q={};for(const Ae in Fn)Object.defineProperty(Q,Ae,{get:()=>l.value[Ae],enumerable:!0});D.provide(fa,J),D.provide(Ug,bp(Q)),D.provide(Wc,l);const Z=D.unmount;Vn.add(D),D.unmount=function(){Vn.delete(D),Vn.size<1&&(h=Fn,T&&T(),T=null,l.value=Fn,Ue=!1,Te=!1),Z()}}};function Tt(D){return D.reduce((J,Q)=>J.then(()=>I(Q)),Promise.resolve())}return Zt}function ew(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ds(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ds(h,l))||s.push(l))}return[n,r,s]}function $g(){return on(fa)}const tw=()=>{};var _d={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new rw;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sw=function(t){const e=jg(t);return Bg.encodeByteArray(e,!0)},Do=function(t){return sw(t).replace(/\./g,"")},Hg=function(t){try{return Bg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=()=>iw().__FIREBASE_DEFAULTS__,aw=()=>{if(typeof process>"u"||typeof _d>"u")return;const t=_d.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hg(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return tw()||ow()||aw()||cw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qg=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lw=t=>{const e=qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zg=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},Wg=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function fw(){var t;const e=(t=pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mw(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _w(){return!fw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gg(){try{return typeof indexedDB=="object"}catch{return!1}}function Qg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function yw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vw,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ew(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Xt(s,c,r)}}function Ew(t,e){return t.replace(Tw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tw=/\{\$([^}]+)}/g;function Iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yd(i)&&yd(o)){if(!er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ww(t,e){const n=new Aw(t,e);return n.subscribe.bind(n)}class Aw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gc),s.error===void 0&&(s.error=gc),s.complete===void 0&&(s.complete=gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=1e3,Sw=2,Pw=4*60*60*1e3,Cw=.5;function vd(t,e=Rw,n=Sw){const r=e*Math.pow(n,t),s=Math.round(Cw*r*(Math.random()-.5)*2);return Math.min(Pw,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ow(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ow(t){return t===vr?void 0:t}function Dw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const Nw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},xw=ve.INFO,Mw={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Lw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ga{constructor(e){this.name=e,this._logLevel=xw,this._logHandler=Lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Fw=(t,e)=>e.some(n=>t instanceof n);let Ed,Td;function Uw(){return Ed||(Ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $w(){return Td||(Td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,Kc=new WeakMap,Jg=new WeakMap,mc=new WeakMap,Ll=new WeakMap;function jw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,t)}).catch(()=>{}),Ll.set(e,t),e}function Bw(t){if(Kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kc.set(t,e)}let Gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hw(t){Gc=t(Gc)}function qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return Jg.set(r,e.sort?e.sort():[e]),Qn(r)}:$w().includes(t)?function(...e){return t.apply(_c(this),e),Qn(Yg.get(this))}:function(...e){return Qn(t.apply(_c(this),e))}}function zw(t){return typeof t=="function"?qw(t):(t instanceof IDBTransaction&&Bw(t),Fw(t,Uw())?new Proxy(t,Gc):t)}function Qn(t){if(t instanceof IDBRequest)return jw(t);if(mc.has(t))return mc.get(t);const e=zw(t);return e!==t&&(mc.set(t,e),Ll.set(e,t)),e}const _c=t=>Ll.get(t);function Xg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qn(o.result),l.oldVersion,l.newVersion,Qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Ww=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],yc=new Map;function Id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ww.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return yc.set(e,i),i}Hw(t=>({...t,get:(e,n,r)=>Id(e,n)||t.get(e,n,r),has:(e,n)=>!!Id(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",wd="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new ga("@firebase/app"),Yw="@firebase/app-compat",Jw="@firebase/analytics-compat",Xw="@firebase/analytics",Zw="@firebase/app-check-compat",eA="@firebase/app-check",tA="@firebase/auth",nA="@firebase/auth-compat",rA="@firebase/database",sA="@firebase/data-connect",iA="@firebase/database-compat",oA="@firebase/functions",aA="@firebase/functions-compat",cA="@firebase/installations",lA="@firebase/installations-compat",uA="@firebase/messaging",hA="@firebase/messaging-compat",dA="@firebase/performance",fA="@firebase/performance-compat",pA="@firebase/remote-config",gA="@firebase/remote-config-compat",mA="@firebase/storage",_A="@firebase/storage-compat",yA="@firebase/firestore",vA="@firebase/vertexai",EA="@firebase/firestore-compat",TA="firebase",IA="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="[DEFAULT]",wA={[Qc]:"fire-core",[Yw]:"fire-core-compat",[Xw]:"fire-analytics",[Jw]:"fire-analytics-compat",[eA]:"fire-app-check",[Zw]:"fire-app-check-compat",[tA]:"fire-auth",[nA]:"fire-auth-compat",[rA]:"fire-rtdb",[sA]:"fire-data-connect",[iA]:"fire-rtdb-compat",[oA]:"fire-fn",[aA]:"fire-fn-compat",[cA]:"fire-iid",[lA]:"fire-iid-compat",[uA]:"fire-fcm",[hA]:"fire-fcm-compat",[dA]:"fire-perf",[fA]:"fire-perf-compat",[pA]:"fire-rc",[gA]:"fire-rc-compat",[mA]:"fire-gcs",[_A]:"fire-gcs-compat",[yA]:"fire-fst",[EA]:"fire-fst-compat",[vA]:"fire-vertex","fire-js":"fire-js",[TA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,AA=new Map,Jc=new Map;function Ad(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(Jc.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of Vo.values())Ad(n,t);for(const n of AA.values())Ad(n,t);return!0}function xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Nr("app","Firebase",bA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=IA;function Fl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yn.create("bad-app-name",{appName:String(s)});if(n||(n=zg()),!n)throw Yn.create("no-options");const i=Vo.get(s);if(i){if(er(n,i.options)&&er(r,i.config))return i;throw Yn.create("duplicate-app",{appName:s})}const o=new Vw(s);for(const l of Jc.values())o.addComponent(l);const c=new RA(n,r,o);return Vo.set(s,c),c}function Ul(t=Yc){const e=Vo.get(t);if(!e&&t===Yc&&zg())return Fl();if(!e)throw Yn.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let s=(r=wA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(c.join(" "));return}dn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="firebase-heartbeat-database",PA=1,vi="firebase-heartbeat-store";let vc=null;function Zg(){return vc||(vc=Xg(SA,PA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),vc}async function CA(t){try{const n=(await Zg()).transaction(vi),r=await n.objectStore(vi).get(em(t));return await n.done,r}catch(e){if(e instanceof Xt)Pn.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function bd(t,e){try{const r=(await Zg()).transaction(vi,"readwrite");await r.objectStore(vi).put(e,em(t)),await r.done}catch(n){if(n instanceof Xt)Pn.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function em(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1024,OA=30;class DA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>OA){const o=xA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rd(),{heartbeatsToSend:r,unsentEntries:s}=VA(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function Rd(){return new Date().toISOString().substring(0,10)}function VA(t,e=kA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gg()?Qg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sd(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}function xA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){dn(new Yt("platform-logger",e=>new Gw(e),"PRIVATE")),dn(new Yt("heartbeat",e=>new DA(e),"PRIVATE")),Ut(Qc,wd,t),Ut(Qc,wd,"esm2017"),Ut("fire-js","")}MA("");function $l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LA=tm,nm=new Nr("auth","Firebase",tm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new ga("@firebase/auth");function FA(t,...e){No.logLevel<=ve.WARN&&No.warn(`Auth (${Is}): ${t}`,...e)}function go(t,...e){No.logLevel<=ve.ERROR&&No.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw jl(t,...e)}function an(t,...e){return jl(t,...e)}function rm(t,e,n){const r=Object.assign(Object.assign({},LA()),{[e]:n});return new Nr("auth","Firebase",r).create(e,{appName:t.name})}function Jn(t){return rm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nm.create(t,...e)}function ie(t,e,...n){if(!t)throw jl(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function Cn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UA(){return Pd()==="http:"||Pd()==="https:"}function Pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UA()||Kg()||"connection"in navigator)?navigator.onLine:!0}function jA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=dw()||gw()}get(){return $A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qA=new Oi(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hr(t,e,n,r,s={}){return im(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return pw()||(h.referrerPolicy="no-referrer"),sm.fetch()(await om(t,t.config.apiHost,n,c),h)})}async function im(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BA),e);try{const s=new WA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ro(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rm(t,d,h);Jt(t,d)}}catch(s){if(s instanceof Xt)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function ma(t,e,n,r,s={}){const i=await hr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function om(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Bl(t.config,s):`${t.config.apiScheme}://${s}`;return HA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function zA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),qA.get())})}}function ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Cd(t){return t!==void 0&&t.enterprise!==void 0}class KA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GA(t,e){return hr(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function xo(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YA(t,e=!1){const n=Et(t),r=await n.getIdToken(e),s=Hl(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(Ec(s.auth_time)),issuedAtTime:oi(Ec(s.iat)),expirationTime:oi(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function Hl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hg(n);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kd(t){const e=Hl(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&JA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ei(t,xo(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?am(i.providerUserInfo):[],c=eb(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function ZA(t){const e=Et(t);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function am(t){return t.map(e=>{var{providerId:n}=e,r=$l(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){const n=await im(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await om(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",sm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nb(t,e){return hr(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=kd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new os;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YA(this,e)}reload(){return ZA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await Ei(this,QA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:K,isAnonymous:pe,providerData:me,stsTokenManager:w}=n;ie(H&&w,e,"internal-error");const y=os.fromJSON(this.name,w);ie(typeof H=="string",e,"internal-error"),Un(p,e.name),Un(m,e.name),ie(typeof K=="boolean",e,"internal-error"),ie(typeof pe=="boolean",e,"internal-error"),Un(_,e.name),Un(k,e.name),Un(O,e.name),Un(x,e.name),Un(q,e.name),Un(j,e.name);const I=new Wt({uid:H,auth:e,email:m,emailVerified:K,displayName:p,isAnonymous:pe,photoURL:k,phoneNumber:_,tenantId:O,stsTokenManager:y,createdAt:q,lastLoginAt:j});return me&&Array.isArray(me)&&(I.providerData=me.map(A=>Object.assign({},A))),x&&(I._redirectEventId=x),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new os;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?am(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const l=new Wt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new Map;function An(t){Cn(t instanceof Function,"Expected a class definition");let e=Od.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Od.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cm.type="NONE";const Dd=cm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xo(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(An(Dd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||An(Dd);const o=mo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const m=await xo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,d)}else p=Wt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pm(e))return"Blackberry";if(gm(e))return"Webos";if(um(e))return"Safari";if((e.includes("chrome/")||hm(e))&&!e.includes("edge/"))return"Chrome";if(fm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lm(t=gt()){return/firefox\//i.test(t)}function um(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hm(t=gt()){return/crios\//i.test(t)}function dm(t=gt()){return/iemobile/i.test(t)}function fm(t=gt()){return/android/i.test(t)}function pm(t=gt()){return/blackberry/i.test(t)}function gm(t=gt()){return/webos/i.test(t)}function ql(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rb(t=gt()){var e;return ql(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sb(){return mw()&&document.documentMode===10}function mm(t=gt()){return ql(t)||fm(t)||gm(t)||pm(t)||/windows phone/i.test(t)||dm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t,e=[]){let n;switch(t){case"Browser":n=Vd(gt());break;case"Worker":n=`${Vd(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e={}){return hr(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=6;class cb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ab,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nd(this),this.idTokenSubscription=new Nd(this),this.beforeStateQueue=new ib(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xo(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(Jn(this));const n=e?Et(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ob(this),n=new cb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ws(t){return Et(t)}class Nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=ww(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ub(t){_a=t}function ym(t){return _a.loadJS(t)}function hb(){return _a.recaptchaEnterpriseScript}function db(){return _a.gapiScript}function fb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pb{constructor(){this.enterprise=new gb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mb="recaptcha-enterprise",vm="NO_RECAPTCHA";class _b{constructor(e){this.type=mb,this.auth=ws(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{GA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new KA(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Cd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(vm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Cd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hb();l.length!==0&&(l+=c),ym(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function xd(t,e,n,r=!1,s=!1){const i=new _b(t);let o;if(s)o=vm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Md(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await xd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t,e){const n=xr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(er(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function vb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Eb(t,e,n){const r=ws(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Em(e),{host:o,port:c}=Tb(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(er(h,r.config.emulator)&&er(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ib()}function Em(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tb(t){const e=Em(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ld(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ld(o)}}}function Ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ib(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function wb(t,e){return hr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e){return ma(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function Rb(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends zl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ti(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ti(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,n,"signInWithPassword",Ab);case"emailLink":return bb(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,r,"signUpPassword",wb);case"emailLink":return Rb(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="http://localhost";class br extends zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$l(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:Sb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cb(t){const e=Ws(Ks(t)).link,n=e?Ws(Ks(e)).deep_link_id:null,r=Ws(Ks(t)).deep_link_id;return(r?Ws(Ks(r)).link:null)||r||n||e||t}class Wl{constructor(e){var n,r,s,i,o,c;const l=Ws(Ks(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Pb((s=l.mode)!==null&&s!==void 0?s:null);ie(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Cb(e);try{return new Wl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return Ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wl.parseLink(n);return ie(r,"argument-error"),Ti._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Tm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Di{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Di{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Di{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=Fd(r);return new ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fd(r);return new ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lo(e,n,r,s)}}function Im(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(t,i,e,r):i})}async function kb(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(Jn(r));const s="reauthenticate";try{const i=await Ei(t,Im(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=Hl(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),ps._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(t,e,n=!1){if(zt(t.app))return Promise.reject(Jn(t));const r="signIn",s=await Im(t,r,e),i=await ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Db(t,e){return wm(ws(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t){const e=ws(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Nb(t,e,n){return zt(t.app)?Promise.reject(Jn(t)):Db(Et(t),As.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vb(t),r})}function xb(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function Mb(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function Lb(t){return Et(t).signOut()}const Fo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fo,"1"),this.storage.removeItem(Fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=1e3,Ub=10;class bm extends Am{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ub):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bm.type="LOCAL";const $b=bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm extends Am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rm.type="SESSION";const Sm=Rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await jb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Kl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function Hb(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function qb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wb(){return Pm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="firebaseLocalStorageDb",Kb=1,Uo="firebaseLocalStorage",km="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function va(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function Gb(){const t=indexedDB.deleteDatabase(Cm);return new Vi(t).toPromise()}function el(){const t=indexedDB.open(Cm,Kb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:km})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await Gb(),e(await el()))})})}async function Ud(t,e,n){const r=va(t,!0).put({[km]:e,value:n});return new Vi(r).toPromise()}async function Qb(t,e){const n=va(t,!1).get(e),r=await new Vi(n).toPromise();return r===void 0?null:r.value}function $d(t,e){const n=va(t,!0).delete(e);return new Vi(n).toPromise()}const Yb=800,Jb=3;class Om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await el(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(Wb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qb(),!this.activeServiceWorker)return;this.sender=new Bb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await el();return await Ud(e,Fo,"1"),await $d(e,Fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ud(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$d(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=va(s,!1).getAll();return new Vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Om.type="LOCAL";const Xb=Om;new Oi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t,e){return e?An(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends zl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e0(t){return wm(t.auth,new Gl(t),t.bypassAuthState)}function t0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Ob(n,new Gl(t),t.bypassAuthState)}async function n0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),kb(n,new Gl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e0;case"linkViaPopup":case"linkViaRedirect":return n0;case"reauthViaPopup":case"reauthViaRedirect":return t0;default:Jt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Oi(2e3,1e4);class Zr extends Dm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r0.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="pendingRedirect",_o=new Map;class i0 extends Dm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await o0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o0(t,e){const n=l0(e),r=c0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function a0(t,e){_o.set(t._key(),e)}function c0(t){return An(t._redirectPersistence)}function l0(t){return mo(s0,t.config.apiKey,t.name)}async function u0(t,e,n=!1){if(zt(t.app))return Promise.reject(Jn(t));const r=ws(t),s=Zb(r,e),o=await new i0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=10*60*1e3;class d0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h0&&this.cachedEventUids.clear(),this.cachedEventUids.has(jd(e))}saveEventToCache(e){this.cachedEventUids.add(jd(e)),this.lastProcessedEventTime=Date.now()}}function jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m0=/^https?/;async function _0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p0(t);for(const n of e)try{if(y0(n))return}catch{}Jt(t,"unauthorized-domain")}function y0(t){const e=Xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m0.test(n))return!1;if(g0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new Oi(3e4,6e4);function Bd(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E0(t){return new Promise((e,n)=>{var r,s,i;function o(){Bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bd(),n(an(t,"network-request-failed"))},timeout:v0.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const c=fb("iframefcb");return cn()[c]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},ym(`${db()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw yo=null,e})}let yo=null;function T0(t){return yo=yo||E0(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Oi(5e3,15e3),w0="__/auth/iframe",A0="emulator/auth/iframe",b0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S0(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bl(e,A0):`https://${t.config.authDomain}/${w0}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=R0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ki(r).slice(1)}`}async function P0(t){const e=await T0(t),n=cn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:S0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},I0.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k0=500,O0=600,D0="_blank",V0="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N0(t,e,n,r=k0,s=O0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},C0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=gt().toLowerCase();n&&(c=hm(h)?D0:n),lm(h)&&(e=e||V0,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,k])=>`${m}${_}=${k},`,"");if(rb(h)&&c!=="_self")return x0(e||"",c),new Hd(null);const p=window.open(e||"",c,d);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Hd(p)}function x0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="__/auth/handler",L0="emulator/auth/handler",F0=encodeURIComponent("fac");async function qd(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof Tm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Iw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Di){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${F0}=${encodeURIComponent(l)}`:"";return`${U0(t)}?${ki(c).slice(1)}${h}`}function U0({config:t}){return t.emulator?Bl(t,L0):`https://${t.authDomain}/${M0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class $0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sm,this._completeRedirectFn=u0,this._overrideRedirectResult=a0}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qd(e,n,r,Xc(),s);return N0(e,o,Kl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qd(e,n,r,Xc(),s);return Hb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P0(e),r=new d0(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mm()||um()||ql()}}const j0=$0;var zd="@firebase/auth",Wd="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q0(t){dn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_m(t)},h=new lb(r,s,i,l);return vb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Yt("auth-internal",e=>{const n=ws(e.getProvider("auth").getImmediate());return(r=>new B0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(zd,Wd,H0(t)),Ut(zd,Wd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=5*60,W0=Wg("authIdTokenMaxAge")||z0;let Kd=null;const K0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W0)return;const s=n==null?void 0:n.token;Kd!==s&&(Kd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Rr(t=Ul()){const e=xr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yb(t,{popupRedirectResolver:j0,persistence:[Xb,$b,Sm]}),r=Wg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=K0(i.toString());Mb(n,o,()=>o(n.currentUser)),xb(n,c=>o(c))}}const s=qg("auth");return s&&Eb(n,`http://${s}`),n}function G0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ub({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",G0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q0("Browser");const Q0=Dl({name:"SiteNavigation",setup(){return{router:$g()}},data(){return{searchQuery:"",showUserMenu:!1,isLoggedIn:!1,cartItemCount:0}},mounted(){Rr().onAuthStateChanged(e=>{this.isLoggedIn=!!e})},methods:{toggleUserMenu(){this.showUserMenu=!this.showUserMenu},logout(){const t=Rr();Lb(t).then(()=>{this.isLoggedIn=!1,this.showUserMenu=!1,this.router.push("/"),console.log("User logged out")}).catch(e=>{console.error("Logout error:",e)})}}}),Y0={class:"site-navigation"},J0={class:"nav-container"},X0={class:"search-bar"},Z0={class:"nav-links"},eR={class:"user-actions"},tR={key:0,class:"cart-count"},nR={key:0,class:"user-menu"};function rR(t,e,n,r,s,i){const o=Mc("router-link");return he(),ge("nav",Y0,[N("div",J0,[xe(o,{class:"logo",to:"/"},{default:Mt(()=>e[3]||(e[3]=[N("span",{class:"logo-text"},"371 Hardware",-1)])),_:1}),N("div",X0,[xc(N("input",{type:"text",placeholder:"Search for products...","onUpdate:modelValue":e[0]||(e[0]=c=>t.searchQuery=c)},null,512),[[Hc,t.searchQuery]]),e[4]||(e[4]=N("button",{class:"search-button"},"Search",-1))]),N("div",Z0,[xe(o,{class:"nav-link",to:"/hardware"},{default:Mt(()=>e[5]||(e[5]=[vn("Hardware")])),_:1}),xe(o,{class:"nav-link",to:"/games"},{default:Mt(()=>e[6]||(e[6]=[vn("Games")])),_:1}),xe(o,{class:"nav-link",to:"/accessories"},{default:Mt(()=>e[7]||(e[7]=[vn("Accessories")])),_:1}),xe(o,{class:"nav-link",to:"/deals"},{default:Mt(()=>e[8]||(e[8]=[vn("Deals")])),_:1})]),N("div",eR,[xe(o,{class:"cart-icon",to:"/cart"},{default:Mt(()=>[e[9]||(e[9]=N("span",{class:"material-icons"},"Shopping Cart",-1)),t.cartItemCount>0?(he(),ge("span",tR,Ve(t.cartItemCount),1)):hs("",!0)]),_:1}),N("div",{class:"user-icon",onClick:e[2]||(e[2]=(...c)=>t.toggleUserMenu&&t.toggleUserMenu(...c))},[e[14]||(e[14]=N("span",{class:"material-icons"},"Profile",-1)),t.showUserMenu?(he(),ge("div",nR,[xe(o,{class:"menu-item",to:"/profile"},{default:Mt(()=>e[10]||(e[10]=[vn("My Profile")])),_:1}),xe(o,{class:"menu-item",to:"/orders"},{default:Mt(()=>e[11]||(e[11]=[vn("Order History")])),_:1}),xe(o,{class:"menu-item",to:"/games-library"},{default:Mt(()=>e[12]||(e[12]=[vn("My Games")])),_:1}),t.isLoggedIn?(he(),ge("div",{key:0,class:"menu-item",onClick:e[1]||(e[1]=(...c)=>t.logout&&t.logout(...c))},"Logout")):(he(),Nl(o,{key:1,class:"menu-item",to:"/login"},{default:Mt(()=>e[13]||(e[13]=[vn("Login")])),_:1}))])):hs("",!0)])])])])}const sR=jt(Q0,[["render",rR],["__scopeId","data-v-365e01e3"]]),iR={name:"App",components:{HomePage:Rg,SiteNavigation:sR}},oR={id:"app"};function aR(t,e,n,r,s,i){const o=Mc("SiteNavigation"),c=Mc("router-view");return he(),ge("div",oR,[xe(o),N("main",null,[xe(c,null,{default:Mt(({Component:l})=>[(he(),Nl(aE(l)))]),_:1})])])}const cR=jt(iR,[["render",aR]]),lR={name:"Login",setup(){return{router:$g()}},data(){return{email:"",password:""}},methods:{signin:function(){const t=Rr();Nb(t,this.email,this.password).then(e=>{var n;console.log("Signed in as",(n=e.user)==null?void 0:n.email),this.router.back()}).catch(e=>{console.error("Oops, error is ",e)})}}},uR={class:"border"};function hR(t,e,n,r,s,i){return he(),ge(We,null,[e[5]||(e[5]=N("h1",{class:"title"}," Login with Email and Password ",-1)),N("div",uR,[e[3]||(e[3]=N("h3",null," Email ",-1)),xc(N("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),placeholder:"Email"},null,512),[[Hc,s.email]]),e[4]||(e[4]=N("h3",{class:"header"}," Password ",-1)),xc(N("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),placeholder:"Password"},null,512),[[Hc,s.password]]),N("button",{onClick:e[2]||(e[2]=(...o)=>i.signin&&i.signin(...o))},"Login")])],64)}const dR=jt(lR,[["render",hR],["__scopeId","data-v-53c010c5"]]),fR={};function pR(t,e){return he(),ge("div",null," This is Deals ")}const gR=jt(fR,[["render",pR]]);var mR="firebase",_R="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(mR,_R,"app");const Nm="@firebase/installations",Ql="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=1e4,Mm=`w:${Ql}`,Lm="FIS_v2",yR="https://firebaseinstallations.googleapis.com/v1",vR=60*60*1e3,ER="installations",TR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Sr=new Nr(ER,TR,IR);function Fm(t){return t instanceof Xt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um({projectId:t}){return`${yR}/projects/${t}/installations`}function $m(t){return{token:t.token,requestStatus:2,expiresIn:AR(t.expiresIn),creationTime:Date.now()}}async function jm(t,e){const r=(await e.json()).error;return Sr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Bm({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wR(t,{refreshToken:e}){const n=Bm(t);return n.append("Authorization",bR(e)),n}async function Hm(t){const e=await t();return e.status>=500&&e.status<600?t():e}function AR(t){return Number(t.replace("s","000"))}function bR(t){return`${Lm} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Um(t),s=Bm(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:Lm,appId:t.appId,sdkVersion:Mm},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Hm(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:$m(h.authToken)}}else throw await jm("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=/^[cdef][\w-]{21}$/,tl="";function CR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=kR(t);return PR.test(n)?n:tl}catch{return tl}}function kR(t){return SR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Map;function Wm(t,e){const n=Ea(t);Km(n,e),OR(n,e)}function Km(t,e){const n=zm.get(t);if(n)for(const r of n)r(e)}function OR(t,e){const n=DR();n&&n.postMessage({key:t,fid:e}),VR()}let Er=null;function DR(){return!Er&&"BroadcastChannel"in self&&(Er=new BroadcastChannel("[Firebase] FID Change"),Er.onmessage=t=>{Km(t.data.key,t.data.fid)}),Er}function VR(){zm.size===0&&Er&&(Er.close(),Er=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="firebase-installations-database",xR=1,Pr="firebase-installations-store";let Ic=null;function Yl(){return Ic||(Ic=Xg(NR,xR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}})),Ic}async function $o(t,e){const n=Ea(t),s=(await Yl()).transaction(Pr,"readwrite"),i=s.objectStore(Pr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Wm(t,e.fid),e}async function Gm(t){const e=Ea(t),r=(await Yl()).transaction(Pr,"readwrite");await r.objectStore(Pr).delete(e),await r.done}async function Ta(t,e){const n=Ea(t),s=(await Yl()).transaction(Pr,"readwrite"),i=s.objectStore(Pr),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&Wm(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(t){let e;const n=await Ta(t.appConfig,r=>{const s=MR(r),i=LR(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===tl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function MR(t){const e=t||{fid:CR(),registrationStatus:0};return Qm(e)}function LR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Sr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=FR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:UR(t)}:{installationEntry:e}}async function FR(t,e){try{const n=await RR(t,e);return $o(t.appConfig,n)}catch(n){throw Fm(n)&&n.customData.serverCode===409?await Gm(t.appConfig):await $o(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function UR(t){let e=await Gd(t.appConfig);for(;e.registrationStatus===1;)await qm(100),e=await Gd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jl(t);return r||n}return e}function Gd(t){return Ta(t,e=>{if(!e)throw Sr.create("installation-not-found");return Qm(e)})}function Qm(t){return $R(t)?{fid:t.fid,registrationStatus:0}:t}function $R(t){return t.registrationStatus===1&&t.registrationTime+xm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR({appConfig:t,heartbeatServiceProvider:e},n){const r=BR(t,n),s=wR(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:Mm,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Hm(()=>fetch(r,c));if(l.ok){const h=await l.json();return $m(h)}else throw await jm("Generate Auth Token",l)}function BR(t,{fid:e}){return`${Um(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(t,e=!1){let n;const r=await Ta(t.appConfig,i=>{if(!Ym(i))throw Sr.create("not-registered");const o=i.authToken;if(!e&&zR(o))return i;if(o.requestStatus===1)return n=HR(t,e),i;{if(!navigator.onLine)throw Sr.create("app-offline");const c=KR(i);return n=qR(t,c),c}});return n?await n:r.authToken}async function HR(t,e){let n=await Qd(t.appConfig);for(;n.authToken.requestStatus===1;)await qm(100),n=await Qd(t.appConfig);const r=n.authToken;return r.requestStatus===0?Xl(t,e):r}function Qd(t){return Ta(t,e=>{if(!Ym(e))throw Sr.create("not-registered");const n=e.authToken;return GR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qR(t,e){try{const n=await jR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $o(t.appConfig,r),n}catch(n){if(Fm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gm(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $o(t.appConfig,r)}throw n}}function Ym(t){return t!==void 0&&t.registrationStatus===2}function zR(t){return t.requestStatus===2&&!WR(t)}function WR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vR}function KR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function GR(t){return t.requestStatus===1&&t.requestTime+xm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Jl(e);return r?r.catch(console.error):Xl(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e=!1){const n=t;return await JR(n),(await Xl(n,e)).token}async function JR(t){const{registrationPromise:e}=await Jl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t){if(!t||!t.options)throw wc("App Configuration");if(!t.name)throw wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wc(t){return Sr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="installations",ZR="installations-internal",eS=t=>{const e=t.getProvider("app").getImmediate(),n=XR(e),r=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tS=t=>{const e=t.getProvider("app").getImmediate(),n=xr(e,Jm).getImmediate();return{getId:()=>QR(n),getToken:s=>YR(n,s)}};function nS(){dn(new Yt(Jm,eS,"PUBLIC")),dn(new Yt(ZR,tS,"PRIVATE"))}nS();Ut(Nm,Ql);Ut(Nm,Ql,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="analytics",rS="firebase_id",sS="origin",iS=60*1e3,oS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new ga("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Nr("analytics","Analytics",aS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){if(!t.startsWith(Zl)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return wt.warn(e.message),""}return t}function Xm(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function lS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function uS(t,e){const n=lS("firebase-js-sdk-policy",{createScriptURL:cS}),r=document.createElement("script"),s=`${Zl}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function hS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dS(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Xm(n)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){wt.error(c)}t("config",s,i)}async function fS(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Xm(n);for(const l of o){const h=c.find(p=>p.measurementId===l),d=h&&e[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){wt.error(i)}}function pS(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await fS(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await dS(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,h]=o;t("get",c,l,h)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){wt.error(c)}}return s}function gS(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=pS(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function mS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zl)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=30,yS=1e3;class vS{constructor(e={},n=yS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zm=new vS;function ES(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function TS(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:ES(r)},i=oS.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function IS(t,e=Zm,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw kt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new bS;return setTimeout(async()=>{c.abort()},iS),e_({appId:r,apiKey:s,measurementId:i},o,c,e)}async function e_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Zm){var i;const{appId:o,measurementId:c}=t;try{await wS(r,e)}catch(l){if(c)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await TS(t);return s.deleteThrottleMetadata(o),l}catch(l){const h=l;if(!AS(h)){if(s.deleteThrottleMetadata(o),c)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?vd(n,s.intervalMillis,_S):vd(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),wt.debug(`Calling attemptFetch again in ${d} millis`),e_(t,p,r,s)}}function wS(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function AS(t){if(!(t instanceof Xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function RS(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(){if(Gg())try{await Qg()}catch(t){return wt.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return wt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function PS(t,e,n,r,s,i,o){var c;const l=IS(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>wt.error(_)),e.push(l);const h=SS().then(_=>{if(_)return r.getId()}),[d,p]=await Promise.all([l,h]);mS(i)||uS(i,d.measurementId),s("js",new Date);const m=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return m[sS]="firebase",m.update=!0,p!=null&&(m[rS]=p),s("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.app=e}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},Yd=[];const Jd={};let Ac="dataLayer",kS="gtag",Xd,t_,Zd=!1;function OS(){const t=[];if(Kg()&&t.push("This is a browser extension environment."),yw()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});wt.warn(n.message)}}function DS(t,e,n){OS();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(ai[r]!=null)throw kt.create("already-exists",{id:r});if(!Zd){hS(Ac);const{wrappedGtag:i,gtagCore:o}=gS(ai,Yd,Jd,Ac,kS);t_=i,Xd=o,Zd=!0}return ai[r]=PS(t,Yd,Jd,e,Xd,Ac,n),new CS(t)}function VS(t=Ul()){t=Et(t);const e=xr(t,jo);return e.isInitialized()?e.getImmediate():NS(t)}function NS(t,e={}){const n=xr(t,jo);if(n.isInitialized()){const s=n.getImmediate();if(er(e,n.getOptions()))return s;throw kt.create("already-initialized")}return n.initialize({options:e})}function xS(t,e,n,r){t=Et(t),RS(t_,ai[t.app.options.appId],e,n,r).catch(s=>wt.error(s))}const ef="@firebase/analytics",tf="0.10.12";function MS(){dn(new Yt(jo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return DS(r,s,n)},"PUBLIC")),dn(new Yt("analytics-internal",t,"PRIVATE")),Ut(ef,tf),Ut(ef,tf,"esm2017");function t(e){try{const n=e.getProvider(jo).getImmediate();return{logEvent:(r,s,i)=>xS(n,r,s,i)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}MS();var nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,n_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,b,S){for(var T=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)T[mt-2]=arguments[mt];return y.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,I){I||(I=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(b=0;16>b;++b)A[b]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],b=w.g[2];var S=w.g[3],T=y+(S^I&(b^S))+A[0]+3614090360&4294967295;y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[3]+3250441966&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(S^I&(b^S))+A[4]+4118548399&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[7]+4249261313&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(S^I&(b^S))+A[8]+1770035416&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[11]+2304563134&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(S^I&(b^S))+A[12]+1804603682&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[15]+1236535329&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(b^S&(I^b))+A[1]+4129170786&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[0]+3921069994&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(I^b))+A[5]+3593408605&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[4]+3889429448&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(I^b))+A[9]+568446438&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[8]+1163531501&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(I^b))+A[13]+2850285829&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[12]+2368359562&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(I^b^S)+A[5]+4294588738&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[14]+4259657740&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(I^b^S)+A[1]+2763975236&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[10]+3200236656&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(I^b^S)+A[13]+681279174&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[6]+76029189&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(I^b^S)+A[9]+3654602809&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[2]+3299628645&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(b^(I|~S))+A[0]+4096336452&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[5]+4237533241&4294967295,I=b+(T<<21&4294967295|T>>>11),T=y+(b^(I|~S))+A[12]+1700485571&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[1]+2240044497&4294967295,I=b+(T<<21&4294967295|T>>>11),T=y+(b^(I|~S))+A[8]+1873313359&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[13]+1309151649&4294967295,I=b+(T<<21&4294967295|T>>>11),T=y+(b^(I|~S))+A[4]+4149444226&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,A=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[b++]=w.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<y;)if(A[b++]=w[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var A=0;32>A;A+=8)w[I++]=this.g[y]>>>A&255;return w};function i(w,y){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;for(var I=[],A=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;A&&S==y||(I[b]=S,A=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return x(h(-w));for(var y=[],I=1,A=0;w>=I;A++)y[A]=w/I|0,I*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(y,8)),A=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-x(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(O(this))return"-"+x(this).toString(w);for(var y=h(Math.pow(w,6)),I=this,A="";;){var b=K(I,y).g;I=q(I,b.j(y));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=b,k(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=q(this,w),O(w)?-1:k(w)?0:1};function x(w){for(var y=w.g.length,I=[],A=0;A<y;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return O(this)?x(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0,b=0;b<=y;b++){var S=A+(this.i(b)&65535)+(w.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=T>>>16,S&=65535,T&=65535,I[b]=T<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function q(w,y){return w.add(x(y))}t.j=function(w){if(k(this)||k(w))return p;if(O(this))return O(w)?x(this).j(x(w)):x(x(this).j(w));if(O(w))return x(this.j(x(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var S=this.i(A)>>>16,T=this.i(A)&65535,mt=w.i(b)>>>16,Dt=w.i(b)&65535;I[2*A+2*b]+=T*Dt,j(I,2*A+2*b),I[2*A+2*b+1]+=S*Dt,j(I,2*A+2*b+1),I[2*A+2*b+1]+=T*mt,j(I,2*A+2*b+1),I[2*A+2*b+2]+=S*mt,j(I,2*A+2*b+2)}for(A=0;A<y;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=y;A<2*y;A++)I[A]=0;return new o(I,0)};function j(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function H(w,y){this.g=w,this.h=y}function K(w,y){if(k(y))throw Error("division by zero");if(k(w))return new H(p,p);if(O(w))return y=K(x(w),y),new H(x(y.g),x(y.h));if(O(y))return y=K(w,x(y)),new H(x(y.g),y.h);if(30<w.g.length){if(O(w)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;0>=A.l(w);)I=pe(I),A=pe(A);var b=me(I,1),S=me(A,1);for(A=me(A,2),I=me(I,2);!k(A);){var T=S.add(A);0>=T.l(w)&&(b=b.add(I),S=T),A=me(A,1),I=me(I,1)}return y=q(w,b.j(y)),new H(b,y)}for(b=p;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),T=S.j(y);O(T)||0<T.l(w);)I-=A,S=h(I),T=S.j(y);k(S)&&(S=m),b=b.add(S),w=q(w,T)}return new H(b,w)}t.A=function(w){return K(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function pe(w){for(var y=w.g.length+1,I=[],A=0;A<y;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function me(w,y){var I=y>>5;y%=32;for(var A=w.g.length-I,b=[],S=0;S<A;S++)b[S]=0<y?w.i(S+I)>>>y|w.i(S+I+1)<<32-y:w.i(S+I);return new o(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,n_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Xn=o}).apply(typeof nf<"u"?nf:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r_,Gs,s_,vo,nl,i_,o_,a_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in f))break e;f=f[P]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,P={next:function(){if(!g&&f<a.length){var C=f++;return{value:u(C,a[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,P,C){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return u.prototype[P].apply(g,W)}}function O(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function x(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const P=a.length||0,C=g.length||0;a.length=P+C;for(let W=0;W<C;W++)a[P+W]=g[W]}else a.push(g)}}class q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var pe=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function me(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function w(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)a[f]=g[f];for(let C=0;C<I.length;C++)f=I[C],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=At;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class mt{constructor(){this.h=this.g=null}add(u,f){const g=Dt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Dt=new q(()=>new qe,a=>a.reset());class qe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ye=!1,At=new mt,Bt=()=>{const a=c.Promise.resolve(void 0);Te=()=>{a.then(Vt)}};var Vt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){S(f)}var u=Dt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ye=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Zt(a,u){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(pe){e:{try{K(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}k(Zt,Ue);var Tt={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,u,f,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=P,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,u,f,g,P){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var W=E(a,u,g,P);return-1<W?(u=a[W],f||(u.fa=!1)):(u=new Q(u,this.src,C,!!g,P),u.fa=f,a.push(u)),u};function v(a,u){var f=u.type;if(f in a.g){var g=a.g[f],P=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(g,P,1),C&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function E(a,u,f,g){for(var P=0;P<a.length;++P){var C=a[P];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return P}return-1}var R="closure_lm_"+(1e6*Math.random()|0),V={};function F(a,u,f,g,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)F(a,u[C],f,g,P);return null}return f=oe(f),a&&a[D]?a.K(u,f,h(g)?!!g.capture:!1,P):M(a,u,f,!1,g,P)}function M(a,u,f,g,P,C){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,ke=Y(a);if(ke||(a[R]=ke=new Ae(a)),f=ke.add(u,f,g,W,C),f.proxy)return f;if(g=G(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Vn||(P=W),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent($(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return u.call(a.src,a.listener,f)}const u=re;return a}function z(a,u,f,g,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)z(a,u[C],f,g,P);else g=h(g)?!!g.capture:!!g,f=oe(f),a&&a[D]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],f=E(C,f,g,P),-1<f&&(Z(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,f,g,P)),(f=-1<a?u[a]:null)&&B(f))}function B(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[D])v(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent($(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Y(u))?(v(f,a),f.h==0&&(f.src=null,u[R]=null)):Z(a)}}}function $(a){return a in V?V[a]:V[a]="on"+a}function re(a,u){if(a.da)a=!0;else{u=new Zt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&B(a),a=f.call(g,u)}return a}function Y(a){return a=a[R],a instanceof Ae?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function se(){Fe.call(this),this.i=new Ae(this),this.M=this,this.F=null}k(se,Fe),se.prototype[D]=!0,se.prototype.removeEventListener=function(a,u,f,g){z(this,a,u,f,g)};function fe(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Ue(u,a);else if(u instanceof Ue)u.target=u.target||a;else{var P=u;u=new Ue(g,a),A(u,P)}if(P=!0,f)for(var C=f.length-1;0<=C;C--){var W=u.g=f[C];P=Ie(W,g,!0,u)&&P}if(W=u.g=a,P=Ie(W,g,!0,u)&&P,P=Ie(W,g,!1,u)&&P,f)for(C=0;C<f.length;C++)W=u.g=f[C],P=Ie(W,g,!1,u)&&P}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Z(f[g]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},se.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ie(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var W=u[C];if(W&&!W.da&&W.capture==f){var ke=W.listener,Ze=W.ha||W.src;W.fa&&v(a.i,W),P=ke.call(Ze,g)!==!1&&P}}return P&&!g.defaultPrevented}function rt(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Je(a){a.g=rt(()=>{a.g=null,a.i&&(a.i=!1,Je(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Nt extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){Fe.call(this),this.h=a,this.g={}}k(st,Fe);var Nn=[];function Cs(a){me(a.g,function(u,f){this.g.hasOwnProperty(f)&&B(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),Cs(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=c.JSON.stringify,xt=c.JSON.parse,Fi=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function $a(){}$a.prototype.h=null;function Du(a){return a.h||(a.h=a.i())}function Vu(){}var ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ja(){Ue.call(this,"d")}k(ja,Ue);function Ba(){Ue.call(this,"c")}k(Ba,Ue);var dr={},Nu=null;function Ui(){return Nu=Nu||new se}dr.La="serverreachability";function xu(a){Ue.call(this,dr.La,a)}k(xu,Ue);function Os(a){const u=Ui();fe(u,new xu(u))}dr.STAT_EVENT="statevent";function Mu(a,u){Ue.call(this,dr.STAT_EVENT,a),this.stat=u}k(Mu,Ue);function _t(a){const u=Ui();fe(u,new Mu(u,a))}dr.Ma="timingevent";function Lu(a,u){Ue.call(this,dr.Ma,a),this.size=u}k(Lu,Ue);function Ds(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function Ly(a,u,f,g,P,C){a.info(function(){if(a.g)if(C)for(var W="",ke=C.split("&"),Ze=0;Ze<ke.length;Ze++){var be=ke[Ze].split("=");if(1<be.length){var it=be[0];be=be[1];var ot=it.split("_");W=2<=ot.length&&ot[1]=="type"?W+(it+"="+be+"&"):W+(it+"=redacted&")}}else W=null;else W=C;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+f+`
`+W})}function Fy(a,u,f,g,P,C,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+f+`
`+C+" "+W})}function jr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+$y(a,f)+(g?" "+g:"")})}function Uy(a,u){a.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function $y(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return Xe(f)}catch{return u}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ha;function ji(){}k(ji,$a),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Ha=new ji;function xn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var $u={},qa={};function za(a,u,f){a.L=1,a.v=zi(gn(u)),a.m=f,a.P=!0,ju(a,null)}function ju(a,u){a.F=Date.now(),Bi(a),a.A=gn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),th(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Uu,a.g=vh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Nt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Nn[0]=P.toString()),P=Nn);for(var C=0;C<P.length;C++){var W=F(f,P[C],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Os(),Ly(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const u=this.M;u&&mn(a)==3?u.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=mn(this.g);var u=this.g.Ba();const qr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ch(this.g)))){this.J||ot!=4||u==7||(u==8||0>=qr?Os(3):Os(2)),Wa(this);var f=this.g.Z();this.X=f;t:if(Bu(this)){var g=ch(this.g);a="";var P=g.length,C=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Ns(this);var W="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(C&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Fy(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ze=this.g;if((ke=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ke)){var be=ke;break t}}be=null}if(f=be)jr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ka(this,f);else{this.o=!1,this.s=3,_t(12),fr(this),Ns(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<W.length;)if(Ht=jy(this,W),Ht==qa){ot==4&&(this.s=4,_t(14),f=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==$u){this.s=4,_t(15),jr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else jr(this.i,this.l,Ht,null),Ka(this,Ht);if(Bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||W.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)jr(this.i,this.l,W,"[Invalid Chunked Response]"),fr(this),Ns(this);else if(0<W.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Za(it),it.M=!0,_t(11))}}else jr(this.i,this.l,W,null),Ka(this,W);ot==4&&fr(this),this.o&&!this.J&&(ot==4?gh(this.j,this):(this.o=!1,Bi(this)))}else sv(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),fr(this),Ns(this)}}}catch{}finally{}};function Bu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jy(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?qa:(f=Number(u.substring(f,g)),isNaN(f)?$u:(g+=1,g+f>u.length?qa:(u=u.slice(g,g+f),a.C=g+f,u)))}xn.prototype.cancel=function(){this.J=!0,fr(this)};function Bi(a){a.S=Date.now()+a.I,Hu(a,a.I)}function Hu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ds(m(a.ba,a),u)}function Wa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Uy(this.i,this.A),this.L!=2&&(Os(),_t(17)),fr(this),this.s=2,Ns(this)):Hu(this,this.S-a)};function Ns(a){a.j.G==0||a.J||gh(a.j,a)}function fr(a){Wa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Cs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ka(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ga(f.h,a))){if(!a.K&&Ga(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ji(f),Qi(f);else break e;Xa(f),_t(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ds(m(f.Za,f),6e3));if(1>=Wu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else gr(f,11)}else if((a.K||f.g==a)&&Ji(f),!j(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let be=P[u];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const it=be[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=be[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const qr=be[5];qr!=null&&typeof qr=="number"&&0<qr&&(g=1.5*qr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ht=a.g;if(Ht){const Zi=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var C=g.h;C.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Qa(C,C.h),C.h=null))}if(g.D){const ec=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(g.ya=ec,Ne(g.I,g.D,ec))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=a;if(g.qa=yh(g,g.J?g.ia:null,g.W),W.K){Ku(g.h,W);var ke=W,Ze=g.L;Ze&&(ke.I=Ze),ke.B&&(Wa(ke),Bi(ke)),g.g=W}else fh(g);0<f.i.length&&Yi(f)}else be[0]!="stop"&&be[0]!="close"||gr(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?gr(f,7):Ja(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}Os(4)}catch{}}var By=class{constructor(a,u){this.g=a,this.map=u}};function qu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wu(a){return a.h?1:a.g?a.g.size:0}function Ga(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Qa(a,u){a.g?a.g.add(u):a.h=u}function Ku(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}qu.prototype.cancel=function(){if(this.i=Gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return O(a.i)}function Hy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function qy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Qu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=qy(a),g=Hy(a),P=g.length,C=0;C<P;C++)u.call(void 0,g[C],f&&f[C],a)}var Yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),P=null;if(0<=g){var C=a[f].substring(0,g);P=a[f].substring(g+1)}else C=a[f];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pr){this.h=a.h,Hi(this,a.j),this.o=a.o,this.g=a.g,qi(this,a.s),this.l=a.l;var u=a.i,f=new Ls;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Ju(this,f),this.m=a.m}else a&&(u=String(a).match(Yu))?(this.h=!1,Hi(this,u[1]||"",!0),this.o=xs(u[2]||""),this.g=xs(u[3]||"",!0),qi(this,u[4]),this.l=xs(u[5]||"",!0),Ju(this,u[6]||"",!0),this.m=xs(u[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}pr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ms(u,Xu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ms(u,Xu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ms(f,f.charAt(0)=="/"?Gy:Ky,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ms(f,Yy)),a.join("")};function gn(a){return new pr(a)}function Hi(a,u,f){a.j=f?xs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function qi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ju(a,u,f){u instanceof Ls?(a.i=u,Jy(a.i,a.h)):(f||(u=Ms(u,Qy)),a.i=new Ls(u,a.h))}function Ne(a,u,f){a.i.set(u,f)}function zi(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Wy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xu=/[#\/\?@]/g,Ky=/[#\?:]/g,Gy=/[#\?]/g,Qy=/[#\?@]/g,Yy=/#/g;function Ls(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&zy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ls.prototype,t.add=function(a,u){Mn(this),this.i=null,a=Br(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Zu(a,u){Mn(a),u=Br(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function eh(a,u){return Mn(a),u=Br(a,u),a.g.has(u)}t.forEach=function(a,u){Mn(this),this.g.forEach(function(f,g){f.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const P=a[g];for(let C=0;C<P.length;C++)f.push(u[g])}return f},t.V=function(a){Mn(this);let u=[];if(typeof a=="string")eh(this,a)&&(u=u.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Mn(this),this.i=null,a=Br(this,a),eh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function th(a,u,f){Zu(a,u),0<f.length&&(a.i=null,a.g.set(Br(a,u),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var P=C;W[g]!==""&&(P+="="+encodeURIComponent(String(W[g]))),a.push(P)}}return this.i=a.join("&")};function Br(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Jy(a,u){u&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Zu(this,g),th(this,P,f))},a)),a.j=u}function Xy(a,u){const f=new Vs;if(c.Image){const g=new Image;g.onload=_(Ln,f,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Ln,f,"TestLoadImage: error",!1,u,g),g.onabort=_(Ln,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Ln,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Zy(a,u){const f=new Vs,g=new AbortController,P=setTimeout(()=>{g.abort(),Ln(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(P),C.ok?Ln(f,"TestPingServer: ok",!0,u):Ln(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Ln(f,"TestPingServer: error",!1,u)})}function Ln(a,u,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function ev(){this.g=new Fi}function tv(a,u,f){const g=f||"";try{Qu(a,function(P,C){let W=P;h(P)&&(W=Xe(P)),u.push(g+C+"="+encodeURIComponent(W))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Wi(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Wi,$a),Wi.prototype.g=function(){return new Ki(this.l,this.j)},Wi.prototype.i=function(a){return function(){return a}}({});function Ki(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ki,se),t=Ki.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Fs(this):Us(this),this.readyState==3&&nh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fs(this))},t.Qa=function(a){this.g&&(this.response=a,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Us(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rh(a){let u="";return me(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ya(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=rh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ne(a,u,f))}function je(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(je,se);var nv=/^https?$/i,rv=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ha.g(),this.v=this.o?Du(this.o):Du(Ha),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){sh(this,C);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rv,u,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,W]of f)this.g.setRequestHeader(C,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ah(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){sh(this,C)}};function sh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,ih(a),Gi(a)}function ih(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),Gi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?oh(this):this.bb())},t.bb=function(){oh(this)};function oh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)rt(a.Ea,0,a);else if(fe(a,"readystatechange"),mn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=W===0){var P=String(a.D).match(Yu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!nv.test(P?P.toLowerCase():"")}f=g}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var C=2<mn(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",ih(a)}}finally{Gi(a)}}}}function Gi(a,u){if(a.g){ah(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||fe(a,"ready");try{f.onreadystatechange=g}catch{}}}function ah(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),xt(u)}};function ch(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sv(a){const u={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(j(a[g]))continue;var f=b(a[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[P]||[];u[P]=C,C.push(f)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function lh(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$s("baseRetryDelayMs",5e3,a),this.cb=$s("retryDelaySeedMs",1e4,a),this.Wa=$s("forwardChannelMaxRetries",2,a),this.wa=$s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new qu(a&&a.concurrentRequestLimit),this.Da=new ev,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){_t(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=yh(this,null,this.W),Yi(this)};function Ja(a){if(uh(a),a.G==3){var u=a.U++,f=gn(a.I);if(Ne(f,"SID",a.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),js(a,f),u=new xn(a,a.j,u),u.L=2,u.v=zi(gn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=vh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Bi(u)}_h(a)}function Qi(a){a.g&&(Za(a),a.g.cancel(),a.g=null)}function uh(a){Qi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ji(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Yi(a){if(!zu(a.h)&&!a.s){a.s=!0;var u=a.Ga;Te||Bt(),ye||(Te(),ye=!0),At.add(u,a),a.B=0}}function iv(a,u){return Wu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ds(m(a.Ga,a,u),mh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new xn(this,this.j,a);let C=this.o;if(this.S&&(C?(C=y(C),A(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=dh(this,P,u),f=gn(this.I),Ne(f,"RID",a),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),js(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(rh(C)))+"&"+u:this.m&&Ya(f,this.m,C)),Qa(this.h,P),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),P.T=!0,za(P,f,null)):za(P,f,u),this.G=2}}else this.G==3&&(a?hh(this,a):this.i.length==0||zu(this.h)||hh(this))};function hh(a,u){var f;u?f=u.l:f=a.U++;const g=gn(a.I);Ne(g,"SID",a.K),Ne(g,"RID",f),Ne(g,"AID",a.T),js(a,g),a.m&&a.o&&Ya(g,a.m,a.o),f=new xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=dh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qa(a.h,f),za(f,g,u)}function js(a,u){a.H&&me(a.H,function(f,g){Ne(u,g,f)}),a.l&&Qu({},function(f,g){Ne(u,g,f)})}function dh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let C=-1;for(;;){const W=["count="+f];C==-1?0<f?(C=P[0].g,W.push("ofs="+C)):C=0:W.push("ofs="+C);let ke=!0;for(let Ze=0;Ze<f;Ze++){let be=P[Ze].g;const it=P[Ze].map;if(be-=C,0>be)C=Math.max(0,P[Ze].g-100),ke=!1;else try{tv(it,W,"req"+be+"_")}catch{g&&g(it)}}if(ke){g=W.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function fh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Te||Bt(),ye||(Te(),ye=!0),At.add(u,a),a.v=0}}function Xa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ds(m(a.Fa,a),mh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ph(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ds(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Qi(this),ph(this))};function Za(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function ph(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=gn(a.qa);Ne(u,"RID","rpc"),Ne(u,"SID",a.K),Ne(u,"AID",a.T),Ne(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(u,"TO",a.ja),Ne(u,"TYPE","xmlhttp"),js(a,u),a.m&&a.o&&Ya(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=zi(gn(u)),f.m=null,f.P=!0,ju(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Qi(this),Xa(this),_t(19))};function Ji(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function gh(a,u){var f=null;if(a.g==u){Ji(a),Za(a),a.g=null;var g=2}else if(Ga(a.h,u))f=u.D,Ku(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=Ui(),fe(g,new Lu(g,f)),Yi(a)}else fh(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&iv(a,u)||g==2&&Xa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),P){case 1:gr(a,5);break;case 4:gr(a,10);break;case 3:gr(a,6);break;default:gr(a,2)}}}function mh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function gr(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const P=!g;g=new pr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hi(g,"https"),zi(g),P?Xy(g.toString(),f):Zy(g.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(u),_h(a),uh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function _h(a){if(a.G=0,a.ka=[],a.l){const u=Gu(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function yh(a,u,f){var g=f instanceof pr?gn(f):new pr(f);if(g.g!="")u&&(g.g=u+"."+g.g),qi(g,g.s);else{var P=c.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new pr(null);g&&Hi(C,g),u&&(C.g=u),P&&qi(C,P),f&&(C.l=f),g=C}return f=a.D,u=a.ya,f&&u&&Ne(g,f,u),Ne(g,"VER",a.la),js(a,g),g}function vh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new je(new Wi({eb:f})):new je(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eh(){}t=Eh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xi(){}Xi.prototype.g=function(a,u){return new bt(a,u)};function bt(a,u){se.call(this),this.g=new lh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Hr(this)}k(bt,se),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Ja(this.g)},bt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Xe(a),a=f);u.i.push(new By(u.Ya++,a)),u.G==3&&Yi(u)},bt.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,bt.aa.N.call(this)};function Th(a){ja.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(Th,ja);function Ih(){Ba.call(this),this.status=1}k(Ih,Ba);function Hr(a){this.g=a}k(Hr,Eh),Hr.prototype.ua=function(){fe(this.g,"a")},Hr.prototype.ta=function(a){fe(this.g,new Th(a))},Hr.prototype.sa=function(a){fe(this.g,new Ih)},Hr.prototype.ra=function(){fe(this.g,"b")},Xi.prototype.createWebChannel=Xi.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,a_=function(){return new Xi},o_=function(){return Ui()},i_=dr,nl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,vo=$i,Fu.COMPLETE="complete",s_=Fu,Vu.EventType=ks,ks.OPEN="a",ks.CLOSE="b",ks.ERROR="c",ks.MESSAGE="d",se.prototype.listen=se.prototype.K,Gs=Vu,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,r_=je}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const rf="@firebase/firestore",sf="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new ga("@firebase/firestore");function Qr(){return Cr.logLevel}function X(t,...e){if(Cr.logLevel<=ve.DEBUG){const n=e.map(eu);Cr.debug(`Firestore (${bs}): ${t}`,...n)}}function kn(t,...e){if(Cr.logLevel<=ve.ERROR){const n=e.map(eu);Cr.error(`Firestore (${bs}): ${t}`,...n)}}function gs(t,...e){if(Cr.logLevel<=ve.WARN){const n=e.map(eu);Cr.warn(`Firestore (${bs}): ${t}`,...n)}}function eu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function Ce(t,e){t||ae()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class FS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class US{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new c_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new ct(e)}}class $S{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $S(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class of{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BS{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,zt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new of(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new of(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=HS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function rl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=l_(),o=qS(i.encode(af(t,n)),i.encode(af(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function af(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function qS(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=-62135596800,lf=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*lf);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<cf)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lf}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-cf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ge(0,0))}static max(){return new ce(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=nn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),s=nn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?nn.extractNumericId(e).compare(nn.extractNumericId(n)):rl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xn.fromString(e.substring(4,e.length-2))}}class Me extends nn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const zS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends nn{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return zS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uf}static keyField(){return new tt([uf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Me.fromString(e))}static fromName(e){return new ne(Me.fromString(e).popFirst(5))}static empty(){return new ne(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Me(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=-1;function WS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new tr(s,ne.empty(),e)}function KS(t){return new tr(t.readTime,t.key,Ii)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(ce.min(),ne.empty(),Ii)}static max(){return new tr(ce.max(),ne.empty(),Ii)}}function GS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==QS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function JS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ia.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=-1;function wa(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function XS(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="";function ZS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hf(e)),e=eP(t.get(n),e);return hf(e)}function eP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case h_:n+="";break;default:n+=i}}return n}function hf(t){return t+h_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ff(this.data.getIterator())}getIteratorFrom(e){return new ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new Qe(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f_("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const tP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=tP.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="server_timestamp",g_="__type__",m_="__previous_value__",__="__local_write_time__";function nu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[g_])===null||n===void 0?void 0:n.stringValue)===p_}function Aa(t){const e=t.mapValue.fields[m_];return nu(e)?Aa(e):e}function wi(t){const e=nr(t.mapValue.fields[__].timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const Ho="(default)";class Ai{constructor(e,n){this.projectId=e,this.database=n||Ho}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database===Ho}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="__type__",rP="__max__",oo={mapValue:{}},v_="__vector__",qo="value";function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nu(t)?4:iP(t)?9007199254740991:sP(t)?10:11:ae()}function fn(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=nr(s.timestampValue),c=nr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rr(s.bytesValue).isEqual(rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),c=Be(i.doubleValue);return o===c?Bo(o)===Bo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(df(o)!==df(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!fn(o[l],c[l])))return!1;return!0}(t,e);default:return ae()}}function bi(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=sr(t),r=sr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Be(i.integerValue||i.doubleValue),l=Be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return pf(t.timestampValue,e.timestampValue);case 4:return pf(wi(t),wi(e));case 5:return rl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=rr(i),l=rr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=_e(c[h],l[h]);if(d!==0)return d}return _e(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=_e(Be(i.latitude),Be(o.latitude));return c!==0?c:_e(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},m=o.fields||{},_=(c=p[qo])===null||c===void 0?void 0:c.arrayValue,k=(l=m[qo])===null||l===void 0?void 0:l.arrayValue,O=_e(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:gf(_,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===oo.mapValue&&o===oo.mapValue)return 0;if(i===oo.mapValue)return 1;if(o===oo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=rl(l[p],d[p]);if(m!==0)return m;const _=_s(c[l[p]],h[d[p]]);if(_!==0)return _}return _e(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ae()}}function pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=nr(t),r=nr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function gf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function ys(t){return sl(t)}function sl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sl(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function Eo(t){switch(sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Aa(t);return e?16+Eo(e):16;case 5:return 2*t.stringValue.length;case 6:return rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Eo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Lr(r.fields,(i,o)=>{s+=i.length+Eo(o)}),s}(t.mapValue);default:throw ae()}}function il(t){return!!t&&"integerValue"in t}function ru(t){return!!t&&"arrayValue"in t}function mf(t){return!!t&&"nullValue"in t}function _f(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function To(t){return!!t&&"mapValue"in t}function sP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[y_])===null||n===void 0?void 0:n.stringValue)===v_}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!To(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ci(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());To(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];To(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(ci(this.value))}}function E_(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new tt([n]);if(To(r)){const i=E_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ht(e,0,ce.min(),ce.min(),ce.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,ce.min(),ce.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ce.min(),ce.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.position=e,this.inclusive=n}}function yf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function oP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{}class Ke extends T_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cP(e,n,r):n==="array-contains"?new hP(e,r):n==="in"?new dP(e,r):n==="not-in"?new fP(e,r):n==="array-contains-any"?new pP(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lP(e,r):new uP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends T_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new pn(e,n)}matches(e){return I_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function I_(t){return t.op==="and"}function w_(t){return aP(t)&&I_(t)}function aP(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function ol(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(w_(t))return t.filters.map(e=>ol(e)).join(",");{const e=t.filters.map(n=>ol(n)).join(",");return`${t.op}(${e})`}}function A_(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&A_(o,s.filters[c]),!0):!1}(t,e):void ae()}function b_(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(b_).join(" ,")+"}"}(t):"Filter"}class cP extends Ke{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class lP extends Ke{constructor(e,n){super(e,"in",n),this.keys=R_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uP extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=R_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class hP extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ru(n)&&bi(n.arrayValue,this.value)}}class dP extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bi(this.value.arrayValue,n)}}class fP extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bi(this.value.arrayValue,n)}}class pP extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.le=null}}function Ef(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gP(t,e,n,r,s,i,o)}function su(t){const e=ue(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ol(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.le=n}return e.le}function iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vf(t.startAt,e.startAt)&&vf(t.endAt,e.endAt)}function al(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function mP(t,e,n,r,s,i,o,c){return new ba(t,e,n,r,s,i,o,c)}function ou(t){return new ba(t)}function Tf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _P(t){return t.collectionGroup!==null}function li(t){const e=ue(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Wo(i,r))}),n.has(tt.keyField().canonicalString())||e.he.push(new Wo(tt.keyField(),r))}return e.he}function ln(t){const e=ue(t);return e.Pe||(e.Pe=yP(e,li(t))),e.Pe}function yP(t,e){if(t.limitType==="F")return Ef(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wo(s.field,i)});const n=t.endAt?new zo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zo(t.startAt.position,t.startAt.inclusive):null;return Ef(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cl(t,e,n){return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ra(t,e){return iu(ln(t),ln(e))&&t.limitType===e.limitType}function S_(t){return`${su(ln(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>b_(s)).join(", ")}]`),wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=yf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,li(r),s)||r.endAt&&!function(o,c,l){const h=yf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,li(r),s))}(t,e)}function vP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function P_(t){return(e,n)=>{let r=!1;for(const s of li(t)){const i=EP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function EP(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?_s(l,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return d_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new $e(ne.comparator);function On(){return TP}const C_=new $e(ne.comparator);function Qs(...t){let e=C_;for(const n of t)e=e.insert(n.key,n);return e}function k_(t){let e=C_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return ui()}function O_(){return ui()}function ui(){return new Fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const IP=new $e(ne.comparator),wP=new Qe(ne.comparator);function Ee(...t){let e=wP;for(const n of t)e=e.add(n);return e}const AP=new Qe(_e);function bP(){return AP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function D_(t){return{integerValue:""+t}}function RP(t,e){return XS(e)?D_(e):au(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this._=void 0}}function SP(t,e,n){return t instanceof Ko?function(s,i){const o={fields:{[g_]:{stringValue:p_},[__]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nu(i)&&(i=Aa(i)),i&&(o.fields[m_]=i),{mapValue:o}}(n,e):t instanceof Ri?N_(t,e):t instanceof Si?x_(t,e):function(s,i){const o=V_(s,i),c=If(o)+If(s.Ie);return il(o)&&il(s.Ie)?D_(c):au(s.serializer,c)}(t,e)}function PP(t,e,n){return t instanceof Ri?N_(t,e):t instanceof Si?x_(t,e):n}function V_(t,e){return t instanceof Go?function(r){return il(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ko extends Pa{}class Ri extends Pa{constructor(e){super(),this.elements=e}}function N_(t,e){const n=M_(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Si extends Pa{constructor(e){super(),this.elements=e}}function x_(t,e){let n=M_(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class Go extends Pa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function If(t){return Be(t.integerValue||t.doubleValue)}function M_(t){return ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function CP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Si&&s instanceof Si?ms(r.elements,s.elements,fn):r instanceof Go&&s instanceof Go?fn(r.Ie,s.Ie):r instanceof Ko&&s instanceof Ko}(t.transform,e.transform)}class kP{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new U_(t.key,Rn.none()):new Ni(t.key,t.data,Rn.none());{const n=t.data,r=Lt.empty();let s=new Qe(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ur(t.key,r,new Kt(s.toArray()),Rn.none())}}function OP(t,e,n){t instanceof Ni?function(s,i,o){const c=s.value.clone(),l=Af(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(s,i,o){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Af(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(F_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hi(t,e,n,r){return t instanceof Ni?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=i.value.clone(),d=bf(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=bf(i.fieldTransforms,l,o),d=o.data;return d.setAll(F_(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function DP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=V_(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,(i,o)=>CP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ur extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function F_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,PP(o,c,n[s]))}return r}function bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,SP(i,o,e))}return r}class U_ extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VP extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=O_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=L_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>wf(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>wf(n,r))}}class cu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return IP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new cu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,we;function LP(t){switch(t){case U.OK:return ae();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ae()}}function $_(t){if(t===void 0)return kn("GRPC error has no .code"),U.UNKNOWN;switch(t){case ze.OK:return U.OK;case ze.CANCELLED:return U.CANCELLED;case ze.UNKNOWN:return U.UNKNOWN;case ze.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ze.INTERNAL:return U.INTERNAL;case ze.UNAVAILABLE:return U.UNAVAILABLE;case ze.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ze.NOT_FOUND:return U.NOT_FOUND;case ze.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ze.ABORTED:return U.ABORTED;case ze.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ze.DATA_LOSS:return U.DATA_LOSS;default:return ae()}}(we=ze||(ze={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=new Xn([4294967295,4294967295],0);function Rf(t){const e=l_().encode(t),n=new n_;return n.update(e),new Uint8Array(n.digest())}function Sf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xn([n,r],0),new Xn([s,i],0)]}class lu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Xn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Xn.fromNumber(r)));return s.compare(FP)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Rf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const n=Rf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ka(ce.min(),s,new $e(_e),On(),Ee())}}class xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xi(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class j_{constructor(e,n){this.targetId=e,this.ge=n}}class B_{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.pe=0,this.ye=Cf(),this.we=nt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ee(),n=Ee(),r=Ee();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new xi(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Cf()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ce(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class UP{constructor(e){this.ke=e,this.qe=new Map,this.Qe=On(),this.$e=ao(),this.Ue=ao(),this.Ke=new $e(_e)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(al(i))if(r===0){const o=new ne(i.path);this.ze(n,o,ht.newNoDocument(o,ce.min()))}else Ce(r===1);else{const o=this.et(n);if(o!==r){const c=this.tt(e),l=c?this.nt(c,e,o):1;if(l!==0){this.Ye(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=rr(r).toUint8Array()}catch(l){if(l instanceof f_)return gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new lu(o,s,i)}catch(l){return gs(l instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const c=this.Xe(o);if(c){if(i.current&&al(c.target)){const l=new ne(c.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,ht.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Ee();this.Ue.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Xe(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new ka(e,n,this.Ke,this.Qe,r);return this.Qe=On(),this.$e=ao(),this.Ue=ao(),this.Ke=new $e(_e),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Pf,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Qe(_e),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Qe(_e),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Pf),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function ao(){return new $e(ne.comparator)}function Cf(){return new $e(ne.comparator)}const $P={asc:"ASCENDING",desc:"DESCENDING"},jP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BP={and:"AND",or:"OR"};class HP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ll(t,e){return t.useProto3Json||wa(e)?e:{value:e}}function Qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qP(t,e){return Qo(t,e.toTimestamp())}function un(t){return Ce(!!t),ce.fromTimestamp(function(n){const r=nr(n);return new Ge(r.seconds,r.nanos)}(t))}function uu(t,e){return ul(t,e).canonicalString()}function ul(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q_(t){const e=Me.fromString(t);return Ce(Q_(e)),e}function hl(t,e){return uu(t.databaseId,e.path)}function bc(t,e){const n=q_(e);if(n.get(1)!==t.databaseId.projectId)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(W_(n))}function z_(t,e){return uu(t.databaseId,e)}function zP(t){const e=q_(t);return e.length===4?Me.emptyPath():W_(e)}function dl(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kf(t,e,n){return{name:hl(t,e),fields:n.value.mapValue.fields}}function WP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ce(d===void 0||typeof d=="string"),nt.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),nt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?U.UNKNOWN:$_(h.code);return new te(d,h.message||"")}(o);n=new B_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bc(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):ce.min(),c=new Lt({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new wo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bc(t,r.document),i=r.readTime?un(r.readTime):ce.min(),o=ht.newNoDocument(s,i),c=r.removedTargetIds||[];n=new wo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bc(t,r.document),i=r.removedTargetIds||[];n=new wo([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new MP(s,i),c=r.targetId;n=new j_(c,o)}}return n}function KP(t,e){let n;if(e instanceof Ni)n={update:kf(t,e.key,e.value)};else if(e instanceof U_)n={delete:hl(t,e.key)};else if(e instanceof Ur)n={update:kf(t,e.key,e.data),updateMask:nC(e.fieldMask)};else{if(!(e instanceof VP))return ae();n={verify:hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Go)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function GP(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(ce.min())&&(o=un(i)),new kP(o,s.transformResults||[])}(n,e))):[]}function QP(t,e){return{documents:[z_(t,e.path)]}}function YP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=z_(t,s);const i=function(h){if(h.length!==0)return G_(pn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Jr(m.field),direction:ZP(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ll(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function JP(t){let e=zP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=K_(p);return m instanceof pn&&w_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(k){return new Wo(Xr(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,wa(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new zo(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new zo(_,m)}(n.endAt)),mP(e,s,o,i,c,"F",l,h)}function XP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>K_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function ZP(t){return $P[t]}function eC(t){return jP[t]}function tC(t){return BP[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return tt.fromServerFormat(t.fieldPath)}function G_(t){return t instanceof Ke?function(n){if(n.op==="=="){if(_f(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(mf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_f(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(mf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:eC(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>G_(s));return r.length===1?r[0]:{compositeFilter:{op:tC(n.op),filters:r}}}(t):ae()}function nC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.Tt=e}}function sC(t){const e=JP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.Tn=new oC}addToCollectionParentIndex(e,n){return this.Tn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(tr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class oC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Y_=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Y_,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new vs(0)}static Kn(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="LruGarbageCollector",aC=1048576;function Vf([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class cC{constructor(e){this.Hn=e,this.buffer=new Qe(Vf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(Df,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ss(n)?X(Df,"Ignoring IndexedDB error during garbage collection: ",n):await Rs(n)}await this.er(3e5)})}}class uC{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ia.ae);const r=new cC(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Of)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Of):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Qr()<=ve.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function hC(t,e){return new uC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.changes=new Fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&hi(r.mutation,s,Kt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Qs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=On();const o=ui(),c=function(){return ui()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Ur)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),hi(d.mutation,h,d.mutation.getFieldMask(),Ge.now())):o.set(h.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new fC(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ui();let s=new $e((o,c)=>o-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Kt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=O_();d.forEach(m=>{if(!i.has(m)){const _=L_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_P(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Tr());let c=Ii,l=i;return o.next(h=>L.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ee())).next(d=>({batchId:c,changes:k_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=Qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Qs();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,m){return new ba(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,ht.newInvalidDocument(d)))});let c=Qs();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&hi(d.mutation,h,Kt.empty(),Ge.now()),Sa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return L.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:sC(s.bundledQuery),readTime:un(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.overlays=new $e(ne.comparator),this.Rr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Tr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Tr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return L.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xP(n,r));let i=this.Rr.get(n);i===void 0&&(i=Ee(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.Vr=new Qe(Ye.mr),this.gr=new Qe(Ye.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ye(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new ne(new Me([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ne(new Me([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=Ee();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ne.comparator(e.key,n.key)||_e(e.Cr,n.Cr)}static pr(e,n){return _e(e.Cr,n.Cr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Qe(Ye.mr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Mr=this.Mr.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?tu:this.Fr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const c=this.Or(o.Cr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(_e);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],c=>{r=r.add(c.Cr)})}),L.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new ne(i),0);let c=new Qe(_e);return this.Mr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Cr)),!0)},o),L.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return L.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Mr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.kr=e,this.docs=function(){return new $e(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||GS(KS(d),r)<=0||(s.has(d.key)||Sa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}qr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EC(this)}getSize(e){return L.resolve(this.size)}}class EC extends dC{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.persistence=e,this.Qr=new Fr(n=>su(n),iu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.$r=0,this.Ur=new hu,this.targetCount=0,this.Kr=vs.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),L.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.zn(n),L.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ia(0),this.zr=!1,this.zr=!0,this.jr=new _C,this.referenceDelegate=e(this),this.Hr=new TC(this),this.indexManager=new iC,this.remoteDocumentCache=function(s){return new vC(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new rC(n),this.Yr=new gC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new yC(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new IC(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return L.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class IC extends YS{constructor(e){super(),this.currentSequenceNumber=e}}class du{constructor(e){this.persistence=e,this.ti=new hu,this.ni=null}static ri(e){return new du(e)}get ii(){if(this.ni)return this.ni;throw ae()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),L.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ii,r=>{const s=ne.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return L.or([()=>L.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Yo{constructor(e,n){this.persistence=e,this.oi=new Fr(r=>ZS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hC(this,n)}static ri(e,n){return new Yo(e,n)}Zr(){}Xr(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return L.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Eo(e.data.value)),n}ar(e,n,r){return L.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _w()?8:JS(gt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wC;return this._s(e,n,o).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,o,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Qr()<=ve.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),L.resolve()):(Qr()<=ve.DEBUG&&X("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Qr()<=ve.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):L.resolve())}rs(e,n){if(Tf(n))return L.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=cl(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.cs(n,c);return this.ls(n,h,o,l.readTime)?this.rs(e,cl(n,null,"F")):this.hs(e,h,n,l)}))})))}ss(e,n,r,s){return Tf(n)||s.isEqual(ce.min())?L.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?L.resolve(null):(Qr()<=ve.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.hs(e,o,n,WS(s,Ii)).next(c=>c))})}cs(e,n){let r=new Qe(P_(e));return n.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Qr()<=ve.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.ns.getDocumentsMatchingQuery(e,n,tr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="LocalStore",bC=3e8;class RC{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new $e(_e),this.Is=new Fr(i=>su(i),iu),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function SC(t,e,n,r){return new RC(t,e,n,r)}async function X_(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ee();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:c}))})})}function PC(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let _=L.resolve();return m.forEach(k=>{_=_.next(()=>d.getEntry(l,k)).next(O=>{const x=h.docVersions.get(k);Ce(x!==null),O.version.compareTo(x)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Z_(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function CC(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(nt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(O,x,q){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=bC?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,_,d)&&c.push(n.Hr.updateTargetData(i,_))});let l=On(),h=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(kC(i,o,e.documentUpdates).next(d=>{l=d.Vs,h=d.fs})),!r.isEqual(ce.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ts=s,i))}function kC(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(pu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Vs:o,fs:s}})}function OC(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=tu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DC(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function fl(t,e,n){const r=ue(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ss(o))throw o;X(pu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Nf(t,e,n){const r=ue(t);let s=ce.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=ue(l),m=p.Is.get(d);return m!==void 0?L.resolve(p.Ts.get(m)):p.Hr.getTargetData(h,d)}(r,o,ln(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:Ee())).next(c=>(VC(r,vP(e),c),{documents:c,gs:i})))}function VC(t,e,n){let r=t.Es.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class xf{constructor(){this.activeTargetIds=bP()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NC{constructor(){this.ho=new xf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new xf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="ConnectivityMonitor";class Lf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(Mf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(Mf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co=null;function pl(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="RestConnection",MC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LC{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ho?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=pl(),c=this.bo(e,n.toUriEncodedString());X(Rc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(h=>(X(Rc,`Received RPC '${e}' ${o}: `,h),h),h=>{throw gs(Rc,`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=MC[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class UC extends LC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=pl();return new Promise((o,c)=>{const l=new r_;l.setWithCredentials(!0),l.listenOnce(s_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vo.NO_ERROR:const d=l.getResponseJson();X(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case vo.TIMEOUT:X(at,`RPC '${e}' ${i} timed out`),c(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const p=l.getStatus();if(X(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const k=function(x){const q=x.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(q)>=0?q:U.UNKNOWN}(_.status);c(new te(k,_.message))}else c(new te(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new te(U.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{X(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=pl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=a_(),c=o_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const k=new FC({Fo:x=>{_?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(X(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(at,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Mo:()=>p.close()}),O=(x,q,j)=>{x.listen(q,H=>{try{j(H)}catch(K){setTimeout(()=>{throw K},0)}})};return O(p,Gs.EventType.OPEN,()=>{_||(X(at,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),O(p,Gs.EventType.CLOSE,()=>{_||(_=!0,X(at,`RPC '${e}' stream ${s} transport closed`),k.Uo())}),O(p,Gs.EventType.ERROR,x=>{_||(_=!0,gs(at,`RPC '${e}' stream ${s} transport errored:`,x),k.Uo(new te(U.UNAVAILABLE,"The operation could not be completed")))}),O(p,Gs.EventType.MESSAGE,x=>{var q;if(!_){const j=x.data[0];Ce(!!j);const H=j,K=(H==null?void 0:H.error)||((q=H[0])===null||q===void 0?void 0:q.error);if(K){X(at,`RPC '${e}' stream ${s} received error:`,K);const pe=K.status;let me=function(I){const A=ze[I];if(A!==void 0)return $_(A)}(pe),w=K.message;me===void 0&&(me=U.INTERNAL,w="Unknown error status: "+pe+" with message "+K.message),_=!0,k.Uo(new te(me,w)),p.close()}else X(at,`RPC '${e}' stream ${s} received:`,j),k.Ko(j)}}),O(c,i_.STAT_EVENT,x=>{x.stat===nl.PROXY?X(at,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===nl.NOPROXY&&X(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){return new HP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="PersistentStream";class ty{constructor(e,n,r,s,i,o,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new ey(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new te(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Ff,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Ff,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $C extends ty{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=WP(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?un(o.readTime):ce.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=dl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=al(l)?{documents:QP(i,l)}:{query:YP(i,l).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=H_(i,o.resumeToken);const h=ll(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Qo(i,o.snapshotVersion.toTimestamp());const h=ll(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=XP(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=dl(this.serializer),n.removeTarget=e,this.I_(n)}}class jC extends ty{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=GP(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=dl(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KP(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{}class HC extends BC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,ul(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(U.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,ul(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(U.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class qC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(kn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="RemoteStore";class zC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{$r(this)&&(X(kr,"Restarting streams for network reachability change."),await async function(l){const h=ue(l);h.W_.add(4),await Mi(h),h.j_.set("Unknown"),h.W_.delete(4),await Da(h)}(this))})}),this.j_=new qC(r,s)}}async function Da(t){if($r(t))for(const e of t.G_)await e(!0)}async function Mi(t){for(const e of t.G_)await e(!1)}function ny(t,e){const n=ue(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),yu(n)?_u(n):Ps(n).c_()&&mu(n,e))}function gu(t,e){const n=ue(t),r=Ps(n);n.K_.delete(e),r.c_()&&ry(n,e),n.K_.size===0&&(r.c_()?r.P_():$r(n)&&n.j_.set("Unknown"))}function mu(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).y_(e)}function ry(t,e){t.H_.Ne(e),Ps(t).w_(e)}function _u(t){t.H_=new UP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.j_.B_()}function yu(t){return $r(t)&&!Ps(t).u_()&&t.K_.size>0}function $r(t){return ue(t).W_.size===0}function sy(t){t.H_=void 0}async function WC(t){t.j_.set("Online")}async function KC(t){t.K_.forEach((e,n)=>{mu(t,e)})}async function GC(t,e){sy(t),yu(t)?(t.j_.q_(e),_u(t)):t.j_.set("Unknown")}async function QC(t,e,n){if(t.j_.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.K_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){X(kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jo(t,r)}else if(e instanceof wo?t.H_.We(e):e instanceof j_?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ce.min()))try{const r=await Z_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.H_.ot(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.K_.get(h);d&&i.K_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.K_.get(l);if(!d)return;i.K_.set(l,d.withResumeToken(nt.EMPTY_BYTE_STRING,d.snapshotVersion)),ry(i,l);const p=new Kn(d.target,l,h,d.sequenceNumber);mu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(kr,"Failed to raise snapshot:",r),await Jo(t,r)}}async function Jo(t,e,n){if(!Ss(e))throw e;t.W_.add(1),await Mi(t),t.j_.set("Offline"),n||(n=()=>Z_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(kr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Da(t)})}function iy(t,e){return e().catch(n=>Jo(t,n,e))}async function Va(t){const e=ue(t),n=ir(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:tu;for(;YC(e);)try{const s=await OC(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,JC(e,s)}catch(s){await Jo(e,s)}oy(e)&&ay(e)}function YC(t){return $r(t)&&t.U_.length<10}function JC(t,e){t.U_.push(e);const n=ir(t);n.c_()&&n.S_&&n.b_(e.mutations)}function oy(t){return $r(t)&&!ir(t).u_()&&t.U_.length>0}function ay(t){ir(t).start()}async function XC(t){ir(t).C_()}async function ZC(t){const e=ir(t);for(const n of t.U_)e.b_(n.mutations)}async function ek(t,e,n){const r=t.U_.shift(),s=cu.from(r,e,n);await iy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Va(t)}async function tk(t,e){e&&ir(t).S_&&await async function(r,s){if(function(o){return LP(o)&&o!==U.ABORTED}(s.code)){const i=r.U_.shift();ir(r).h_(),await iy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Va(r)}}(t,e),oy(t)&&ay(t)}async function Uf(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X(kr,"RemoteStore received new credentials");const r=$r(n);n.W_.add(3),await Mi(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Da(n)}async function nk(t,e){const n=ue(t);e?(n.W_.delete(2),await Da(n)):e||(n.W_.add(2),await Mi(n),n.j_.set("Unknown"))}function Ps(t){return t.J_||(t.J_=function(n,r,s){const i=ue(n);return i.M_(),new $C(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:WC.bind(null,t),No:KC.bind(null,t),Lo:GC.bind(null,t),p_:QC.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),yu(t)?_u(t):t.j_.set("Unknown")):(await t.J_.stop(),sy(t))})),t.J_}function ir(t){return t.Y_||(t.Y_=function(n,r,s){const i=ue(n);return i.M_(),new jC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:XC.bind(null,t),Lo:tk.bind(null,t),D_:ZC.bind(null,t),v_:ek.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Va(t)):(await t.Y_.stop(),t.U_.length>0&&(X(kr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new vu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eu(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Ss(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(e){return new ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Qs(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.Z_=new $e(ne.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ae():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Es(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class sk{constructor(){this.queries=jf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=jf(),i.forEach((o,c)=>{for(const l of c.ta)l.onError(r)})})(this,new te(U.ABORTED,"Firestore shutting down"))}}function jf(){return new Fr(t=>S_(t),Ra)}async function cy(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new rk,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Eu(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Tu(n)}async function ly(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ik(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ta)c.oa(s)&&(r=!0);o.ea=s}}r&&Tu(n)}function ok(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Tu(t){t.ia.forEach(e=>{e.next()})}var gl,Bf;(Bf=gl||(gl={}))._a="default",Bf.Cache="cache";class uy{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==gl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.key=e}}class dy{constructor(e){this.key=e}}class ak{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ee(),this.mutatedKeys=Ee(),this.ya=P_(e),this.wa=new ls(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new $f,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Sa(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),O=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;m&&_?m.data.isEqual(_.data)?k!==O&&(r.track({type:3,doc:_}),x=!0):this.va(m,_)||(r.track({type:2,doc:_}),x=!0,(l&&this.ya(_,l)>0||h&&this.ya(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),x=!0):m&&!_&&(r.track({type:1,doc:m}),x=!0,(l||h)&&(c=!0)),x&&(_?(o=o.add(_),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(_,k){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return O(_)-O(k)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,h=l!==this.ga;return this.ga=l,o.length!==0||h?{snapshot:new Es(this.query,e.wa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new $f,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ee(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new dy(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new hy(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ee();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Es.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Iu="SyncEngine";class ck{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lk{constructor(e){this.key=e,this.Ba=!1}}class uk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Fr(c=>S_(c),Ra),this.qa=new Map,this.Qa=new Set,this.$a=new $e(ne.comparator),this.Ua=new Map,this.Ka=new hu,this.Wa={},this.Ga=new Map,this.za=vs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function hk(t,e,n=!0){const r=yy(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await fy(r,e,n,!0),s}async function dk(t,e){const n=yy(t);await fy(n,e,!0,!1)}async function fy(t,e,n,r){const s=await DC(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await fk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ny(t.remoteStore,s),c}async function fk(t,e,n,r,s){t.Ha=(p,m,_)=>async function(O,x,q,j){let H=x.view.ba(q);H.ls&&(H=await Nf(O.localStore,x.query,!1).then(({documents:w})=>x.view.ba(w,H)));const K=j&&j.targetChanges.get(x.targetId),pe=j&&j.targetMismatches.get(x.targetId)!=null,me=x.view.applyChanges(H,O.isPrimaryClient,K,pe);return qf(O,x.targetId,me.Ma),me.snapshot}(t,p,m,_);const i=await Nf(t.localStore,e,!0),o=new ak(e,i.gs),c=o.ba(i.documents),l=xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);qf(t,n,h.Ma);const d=new ck(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function pk(t,e,n){const r=ue(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Ra(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&gu(r.remoteStore,s.targetId),ml(r,s.targetId)}).catch(Rs)):(ml(r,s.targetId),await fl(r.localStore,s.targetId,!0))}async function gk(t,e){const n=ue(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gu(n.remoteStore,r.targetId))}async function mk(t,e,n){const r=wk(t);try{const s=await function(o,c){const l=ue(o),h=Ge.now(),d=c.reduce((_,k)=>_.add(k.key),Ee());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let k=On(),O=Ee();return l.ds.getEntries(_,d).next(x=>{k=x,k.forEach((q,j)=>{j.isValidDocument()||(O=O.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,k)).next(x=>{p=x;const q=[];for(const j of c){const H=DP(j,p.get(j.key).overlayedDocument);H!=null&&q.push(new Ur(j.key,H,E_(H.value.mapValue),Rn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,q,c)}).next(x=>{m=x;const q=x.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(_,x.batchId,q)})}).then(()=>({batchId:m.batchId,changes:k_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Wa[o.currentUser.toKey()];h||(h=new $e(_e)),h=h.insert(c,l),o.Wa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Li(r,s.changes),await Va(r.remoteStore)}catch(s){const i=Eu(s,"Failed to persist write");n.reject(i)}}async function py(t,e){const n=ue(t);try{const r=await CC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ce(o.Ba):s.removedDocuments.size>0&&(Ce(o.Ba),o.Ba=!1))}),await Li(n,r,e)}catch(r){await Rs(r)}}function Hf(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const c=o.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ue(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(c)&&(h=!0)}),h&&Tu(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _k(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new $e(ne.comparator);o=o.insert(i,ht.newNoDocument(i,ce.min()));const c=Ee().add(i),l=new ka(ce.min(),new Map,new $e(_e),o,c);await py(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),wu(r)}else await fl(r.localStore,e,!1).then(()=>ml(r,e,n)).catch(Rs)}async function yk(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await PC(n.localStore,e);my(n,r,null),gy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Li(n,s)}catch(s){await Rs(s)}}async function vk(t,e,n){const r=ue(t);try{const s=await function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ce(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);my(r,e,n),gy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Li(r,s)}catch(s){await Rs(s)}}function gy(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function my(t,e,n){const r=ue(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||_y(t,r)})}function _y(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(gu(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),wu(t))}function qf(t,e,n){for(const r of n)r instanceof hy?(t.Ka.addReference(r.key,e),Ek(t,r)):r instanceof dy?(X(Iu,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||_y(t,r.key)):ae()}function Ek(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(Iu,"New document in limbo: "+n),t.Qa.add(r),wu(t))}function wu(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new ne(Me.fromString(e)),r=t.za.next();t.Ua.set(r,new lk(n)),t.$a=t.$a.insert(n,r),ny(t.remoteStore,new Kn(ln(ou(n.path)),r,"TargetPurposeLimboResolution",Ia.ae))}}async function Li(t,e,n){const r=ue(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{o.push(r.Ha(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=fu.Yi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(l,h){const d=ue(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.Hi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>L.forEach(m.Ji,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ss(p))throw p;X(pu,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.Ts.get(m),k=_.snapshotVersion,O=_.withLastLimboFreeSnapshotVersion(k);d.Ts=d.Ts.insert(m,O)}}}(r.localStore,i))}async function Tk(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X(Iu,"User change. New user:",e.toKey());const r=await X_(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new te(U.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Li(n,r.Rs)}}function Ik(t,e){const n=ue(t),r=n.Ua.get(e);if(r&&r.Ba)return Ee().add(r.key);{let s=Ee();const i=n.qa.get(e);if(!i)return s;for(const o of i){const c=n.ka.get(o);s=s.unionWith(c.view.Sa)}return s}}function yy(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ik.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_k.bind(null,e),e.La.p_=ik.bind(null,e.eventManager),e.La.Ja=ok.bind(null,e.eventManager),e}function wk(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vk.bind(null,e),e}class Xo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oa(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return SC(this.persistence,new AC,e.initialUser,this.serializer)}Xa(e){return new J_(du.ri,this.serializer)}Za(e){return new NC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xo.provider={build:()=>new Xo};class Ak extends Xo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ce(this.persistence.referenceDelegate instanceof Yo);const r=this.persistence.referenceDelegate.garbageCollector;return new lC(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new J_(r=>Yo.ri(r,n),this.serializer)}}class _l{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tk.bind(null,this.syncEngine),await nk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sk}()}createDatastore(e){const n=Oa(e.databaseInfo.databaseId),r=function(i){return new UC(i)}(e.databaseInfo);return function(i,o,c,l){return new HC(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new zC(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Hf(this.syncEngine,n,0),function(){return Lf.D()?new Lf:new xC}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new uk(s,i,o,c,l,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);X(kr,"RemoteStore shutting down."),i.W_.add(5),await Mi(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_l.provider={build:()=>new _l};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="FirestoreClient";class bk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=u_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Eu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pc(t,e){t.asyncQueue.verifyOperationInProgress(),X(or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await X_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Rk(t);X(or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Uf(e.remoteStore,s)),t._onlineComponents=e}async function Rk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(or,"Using user provided OfflineComponentProvider");try{await Pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Pc(t,new Xo)}}else X(or,"Using default OfflineComponentProvider"),await Pc(t,new Ak(void 0));return t._offlineComponents}async function Ey(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(or,"Using user provided OnlineComponentProvider"),await zf(t,t._uninitializedComponentsProvider._online)):(X(or,"Using default OnlineComponentProvider"),await zf(t,new _l))),t._onlineComponents}function Sk(t){return Ey(t).then(e=>e.syncEngine)}async function Ty(t){const e=await Ey(t),n=e.eventManager;return n.onListen=hk.bind(null,e.syncEngine),n.onUnlisten=pk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gk.bind(null,e.syncEngine),n}function Pk(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new vy({next:m=>{d.su(),o.enqueueAndForget(()=>ly(i,p));const _=m.docs.has(c);!_&&m.fromCache?h.reject(new te(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?h.reject(new te(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new uy(ou(c.path),d,{includeMetadataChanges:!0,Ta:!0});return cy(i,p)}(await Ty(t),t.asyncQueue,e,n,r)),r.promise}function Ck(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new vy({next:m=>{d.su(),o.enqueueAndForget(()=>ly(i,p)),m.fromCache&&l.source==="server"?h.reject(new te(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new uy(c,d,{includeMetadataChanges:!0,Ta:!0});return cy(i,p)}(await Ty(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kk(t,e,n,r){if(e===!0&&r===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!ne.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gf(t){if(ne.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Au(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firestore.googleapis.com",Qf=!0;class Yf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ay,this.ssl=Qf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Qf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Y_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aC)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Na{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LS;switch(r.type){case"firstParty":return new jS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wf.get(n);r&&(X("ComponentProvider","Removing Datastore"),Wf.delete(n),r.terminate())}(this),Promise.resolve()}}function Ok(t,e,n,r={}){var s;const i=(t=Or(t,Na))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==Ay&&i.host!==c&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!er(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=ct.MOCK_USER;else{h=hw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new te(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ct(p)}t._authCredentials=new FS(new c_(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xa(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Zn extends xa{constructor(e,n,r){super(e,n,ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new ne(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function Ma(t,e,...n){if(t=Et(t),wy("collection","path",e),t instanceof Na){const r=Me.fromString(e,...n);return Gf(r),new Zn(t,null,r)}{if(!(t instanceof Ot||t instanceof Zn))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Gf(r),new Zn(t.firestore,null,r)}}function La(t,e,...n){if(t=Et(t),arguments.length===1&&(e=u_.newId()),wy("doc","path",e),t instanceof Na){const r=Me.fromString(e,...n);return Kf(r),new Ot(t,null,new ne(r))}{if(!(t instanceof Ot||t instanceof Zn))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Kf(r),new Ot(t.firestore,t instanceof Zn?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="AsyncQueue";class Xf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new ey(this,"async_queue_retry"),this.Su=()=>{const r=Sc();r&&X(Jf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new bn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ss(e))throw e;X(Jf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=vu.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ae()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Fa extends Na{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xf(e),this._firestoreClient=void 0,await e}}}function Dk(t,e){const n=typeof t=="object"?t:Ul(),r=typeof t=="string"?t:Ho,s=xr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lw("firestore");i&&Ok(s,...i)}return s}function bu(t){if(t._terminated)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Vk(t),t._firestoreClient}function Vk(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new nP(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Iy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new bk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(nt.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=/^__.*__$/;class xk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}function Ry(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Cu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Zo(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Ry(this.Lu)&&Nk.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Mk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oa(e)}ju(e,n,r,s=!1){return new Cu({Lu:e,methodName:n,zu:r,path:tt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lk(t){const e=t._freezeSettings(),n=Oa(t._databaseId);return new Mk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fk(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);ky("Data must be an object, but it was:",o,r);const c=Py(r,o);let l,h;if(i.merge)l=new Kt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Uk(e,p,n);if(!o.contains(m))throw new te(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jk(d,m)||d.push(m)}l=new Kt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new xk(new Lt(c),l,h)}function Sy(t,e){if(Cy(t=Et(t)))return ky("Unsupported field value:",e,t),Py(t,e);if(t instanceof by)return function(r,s){if(!Ry(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Sy(c,s.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Qo(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qo(s.serializer,i)}}if(r instanceof Su)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:H_(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pu)return function(o,c){return{mapValue:{fields:{[y_]:{stringValue:v_},[qo]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Wu("VectorValues must only contain numeric values.");return au(c.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Au(r)}`)}(t,e)}function Py(t,e){const n={};return d_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=Sy(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Su||t instanceof Ts||t instanceof Ot||t instanceof by||t instanceof Pu)}function ky(t,e,n){if(!Cy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Au(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Uk(t,e,n){if((e=Et(e))instanceof Ru)return e._internalPath;if(typeof e=="string")return Oy(t,e);throw Zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const $k=new RegExp("[~\\*/\\[\\]]");function Oy(t,e,n){if(e.search($k)>=0)throw Zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ru(...e.split("."))._internalPath}catch{throw Zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te(U.INVALID_ARGUMENT,c+t+l)}function jk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bk extends Dy{data(){return super.data()}}function Vy(t,e){return typeof e=="string"?Oy(t,e):e instanceof Ru?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qk{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[qo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Be(o.doubleValue));return new Pu(i)}convertGeoPoint(e){return new Su(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Aa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=nr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Ce(Q_(r));const s=new Ai(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ny extends Dy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ao extends Ny{data(e={}){return super.data(e)}}class Wk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ao(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:Kk(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Kk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){t=Or(t,Ot);const e=Or(t.firestore,Fa);return Pk(bu(e),t._key).then(n=>Yk(e,t,n))}class xy extends qk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Ua(t){t=Or(t,xa);const e=Or(t.firestore,Fa),n=bu(e),r=new xy(e);return Hk(t._query),Ck(n,t._query).then(s=>new Wk(e,r,t,s))}function ku(t,e,n){t=Or(t,Ot);const r=Or(t.firestore,Fa),s=zk(t.converter,e);return Qk(r,[Fk(Lk(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Rn.none())])}function Qk(t,e){return function(r,s){const i=new bn;return r.asyncQueue.enqueueAndForget(async()=>mk(await Sk(r),s,i)),i.promise}(bu(t),e)}function Yk(t,e,n){const r=n.docs.get(e._key),s=new xy(t);return new Ny(t,s,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){bs=s})(Is),dn(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Fa(new US(r.getProvider("auth-internal")),new BS(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ut(rf,sf,e),Ut(rf,sf,"esm2017")})();const Jk={apiKey:"AIzaSyCXCUVe43qi1sXa9MeYjxNica_mrylumYg",authDomain:"do-keenan-final.firebaseapp.com",projectId:"do-keenan-final",storageBucket:"do-keenan-final.firebasestorage.app",messagingSenderId:"416708817663",appId:"1:416708817663:web:318c624639b64cc36252ca",measurementId:"G-D4L5W1HXND"},My=Fl(Jk);VS(My);const ar=Dk(My),Zf=Object.assign({"../assets/images/accessories/logitech-keyboard.jpg":Ig,"../assets/images/accessories/razer-mouse.jpg":wg,"../assets/images/accessories/samsung-monitor.jpg":Ag,"../assets/images/accessories/xbox-controller.jpg":bg}),Xk={name:"AccessoriesPage",data(){return{accessories:[],isLoading:!0}},methods:{async fetchAccessories(){this.isLoading=!0;const t=Ma(ar,"Accessories");try{console.log("Fetching from collection:",t.path);const e=await Ua(t);console.log("Documents found:",e.docs.length),this.accessories=e.docs.map(n=>{if(typeof n.data!="function")return console.error("Invalid document:",n),null;const r=n.data();return console.log("Document data:",r),{id:n.id,name:r.name,price:r.price,salePrice:r.salePrice,rating:r.rating,reviewCount:r.reviewCount,brand:r.brand,type:r.type,imageFile:r.image}}).filter(n=>n!==null)}catch(e){console.error("Error fetching accessories:",e)}finally{this.isLoading=!1}},getImageUrl(t){if(!t)return"https://placehold.co/400x300?text=Accessory";const e=`../assets/images/accessories/${t}`;return Zf[e]?Zf[e].default:"https://placehold.co/400x300?text=Accessory"},truncateTitle(t){return t.length<=40?t:t.substring(0,38)+"..."},addToCart(t){Rr().onAuthStateChanged(n=>{if(this.isLogged=!!n,this.isLogged){const r=t.id,s=La(ar,`Users/${n.uid}/ownedItems`,r);ku(s,{name:t.name,rating:t.rating,image:t.imageFile,reviewCount:t.reviewCount}),console.log(n.uid),console.log("Added to cart:",t),alert(`${t.name} added to cart!`)}else alert("Please Log in first")})}},mounted(){this.fetchAccessories()}},Zk={class:"accessories-page"},eO={class:"accessories-container"},tO={key:0,class:"loading"},nO={key:1,class:"accessories-grid"},rO={class:"accessory-image"},sO=["src","alt"],iO={class:"accessory-type-tag"},oO={class:"accessory-details"},aO=["title"],cO={class:"accessory-brand"},lO={class:"accessory-rating"},uO={class:"stars"},hO={class:"review-count"},dO={class:"accessory-price"},fO={key:0,class:"original-price"},pO={class:"current-price"},gO=["onClick"];function mO(t,e,n,r,s,i){return he(),ge("div",Zk,[e[1]||(e[1]=N("div",{class:"category-banner"},[N("h1",null,"Gaming Accessories"),N("p",null,"Enhance your gaming experience with premium peripherals")],-1)),N("div",eO,[s.isLoading?(he(),ge("div",tO,e[0]||(e[0]=[N("div",{class:"loading-spinner"},null,-1),N("p",null,"Loading accessories...",-1)]))):(he(),ge("div",nO,[(he(!0),ge(We,null,Sn(s.accessories,o=>(he(),ge("div",{key:o.id,class:"accessory-card"},[N("div",rO,[N("img",{src:i.getImageUrl(o.imageFile),alt:o.name},null,8,sO),N("div",iO,Ve(o.type),1)]),N("div",oO,[N("h3",{class:"accessory-title",title:o.name},Ve(i.truncateTitle(o.name)),9,aO),N("div",cO,Ve(o.brand),1),N("div",lO,[N("div",uO,[(he(),ge(We,null,Sn(5,c=>N("span",{key:c,class:Vr({filled:c<=o.rating})},"★",2)),64))]),N("span",hO,"("+Ve(o.reviewCount)+")",1)]),N("div",dO,[o.salePrice?(he(),ge("span",fO,"$"+Ve(o.price.toFixed(2)),1)):hs("",!0),N("span",pO,"$"+Ve((o.salePrice||o.price).toFixed(2)),1)])]),N("button",{class:"add-to-cart-button",onClick:c=>i.addToCart(o)},"Add to Cart",8,gO)]))),128))]))])])}const _O=jt(Xk,[["render",mO],["__scopeId","data-v-3f9b4ff5"]]),yO={};function vO(t,e){return he(),ge("div",null," This is Games Library ")}const EO=jt(yO,[["render",vO]]),ep=Object.assign({"../assets/images/hardware/asus-motherboard.jpg":pg,"../assets/images/hardware/corsair-ram.jpg":gg,"../assets/images/hardware/rtx4080.jpg":mg,"../assets/images/hardware/ryzen9.jpg":_g}),TO={name:"HardwarePage",data(){return{hardware:[],isLoading:!0}},methods:{async fetchHardware(){this.isLoading=!0;const t=Ma(ar,"Hardware");try{console.log("Fetching from collection:",t.path);const e=await Ua(t);console.log("Documents found:",e.docs.length),this.hardware=e.docs.map(n=>{if(typeof n.data!="function")return console.error("Invalid document:",n),null;const r=n.data();return console.log("Document data:",r),{id:n.id,name:r.name,price:r.price,salePrice:r.salePrice,rating:r.rating,reviewCount:r.reviewCount,brand:r.brand,type:r.type,imageFile:r.image}}).filter(n=>n!==null)}catch(e){console.error("Error fetching hardware:",e)}finally{this.isLoading=!1}},getImageUrl(t){if(!t)return"https://placehold.co/400x300?text=Hardware";const e=`../assets/images/hardware/${t}`;return ep[e]?ep[e].default:"https://placehold.co/400x300?text=Hardware"},truncateTitle(t){return t.length<=40?t:t.substring(0,38)+"..."},addToCart(t){Rr().onAuthStateChanged(n=>{if(this.isLogged=!!n,this.isLogged){const r=t.id,s=La(ar,`Users/${n.uid}/ownedItems`,r);ku(s,{name:t.name,rating:t.rating,image:t.imageFile,reviewCount:t.reviewCount}),console.log(n.uid),console.log("Added to cart:",t),alert(`${t.name} added to cart!`)}else alert("Please Log in first")})}},mounted(){this.fetchHardware()}},IO={class:"hardware-page"},wO={class:"hardware-container"},AO={key:0,class:"loading"},bO={key:1,class:"hardware-grid"},RO={class:"hardware-image"},SO=["src","alt"],PO={class:"hardware-type-tag"},CO={class:"hardware-details"},kO=["title"],OO={class:"hardware-brand"},DO={class:"hardware-rating"},VO={class:"stars"},NO={class:"review-count"},xO={class:"hardware-price"},MO={key:0,class:"original-price"},LO={class:"current-price"},FO=["onClick"];function UO(t,e,n,r,s,i){return he(),ge("div",IO,[e[1]||(e[1]=N("div",{class:"category-banner"},[N("h1",null,"Computer Hardware"),N("p",null,"Premium components to build and upgrade your PC")],-1)),N("div",wO,[s.isLoading?(he(),ge("div",AO,e[0]||(e[0]=[N("div",{class:"loading-spinner"},null,-1),N("p",null,"Loading hardware components...",-1)]))):(he(),ge("div",bO,[(he(!0),ge(We,null,Sn(s.hardware,o=>(he(),ge("div",{key:o.id,class:"hardware-card"},[N("div",RO,[N("img",{src:i.getImageUrl(o.imageFile),alt:o.name},null,8,SO),N("div",PO,Ve(o.type),1)]),N("div",CO,[N("h3",{class:"hardware-title",title:o.name},Ve(i.truncateTitle(o.name)),9,kO),N("div",OO,Ve(o.brand),1),N("div",DO,[N("div",VO,[(he(),ge(We,null,Sn(5,c=>N("span",{key:c,class:Vr({filled:c<=o.rating})},"★",2)),64))]),N("span",NO,"("+Ve(o.reviewCount)+")",1)]),N("div",xO,[o.salePrice?(he(),ge("span",MO,"$"+Ve(o.price.toFixed(2)),1)):hs("",!0),N("span",LO,"$"+Ve((o.salePrice||o.price).toFixed(2)),1)])]),N("button",{class:"add-to-cart-button",onClick:c=>i.addToCart(o)},"Add to Cart",8,FO)]))),128))]))])])}const $O=jt(TO,[["render",UO],["__scopeId","data-v-ebb1ca68"]]),jO={name:"profile",data(){return{ownedItem:[],isLogged:!1,userID:"",userName:""}},mounted(){Rr().onAuthStateChanged(e=>{if(this.isLogged=!!e,this.isLogged){this.userID=e.uid;const n=Ma(ar,`Users/${this.userID}/ownedItems`),r=La(ar,`Users/${this.userID}`);Gk(r).then(s=>{this.userName=s.data().name}),console.log(n),Ua(n).then(s=>{this.ownedItem=s.docs.map(i=>({id:i.id,name:i.data().name,rating:i.data().rating,reviewCount:i.data().reviewCount,imageFile:i.data().image}))}),console.log(e.uid),this.loadItems()}})},methods:{getImageUrl(t){return`https://via.placeholder.com/300x400?text=${t.replace(".jpg","")}`}}},BO={key:0,class:"name-header"},HO={key:1},qO={class:"name-header"},zO={class:"name-header"},WO={class:"games-grid"},KO={class:"game-image"},GO=["src","alt"],QO={class:"game-details"},YO={class:"game-title"},JO={class:"game-rating"},XO={class:"stars"},ZO={class:"review-count"};function eD(t,e,n,r,s,i){return s.isLogged?(he(),ge("div",HO,[N("h1",qO," Hello "+Ve(s.userName),1),N("h2",zO," ID: "+Ve(s.userID),1),e[0]||(e[0]=N("h2",{class:"item-header"}," Owned Items ",-1)),N("div",WO,[(he(!0),ge(We,null,Sn(s.ownedItem,o=>(he(),ge("div",{key:o.id,class:"game-card"},[N("div",KO,[N("img",{src:i.getImageUrl(o.imageFile),alt:o.name},null,8,GO)]),N("div",QO,[N("h3",YO,Ve(o.name),1),N("div",JO,[N("div",XO,[(he(),ge(We,null,Sn(5,c=>N("span",{key:c,class:Vr({filled:c<=o.rating})},"★",2)),64))]),N("span",ZO,"("+Ve(o.reviewCount)+")",1)])])]))),128))])])):(he(),ge("h1",BO," Not Logged In "))}const tD=jt(jO,[["render",eD],["__scopeId","data-v-904b2aaf"]]),tp=Object.assign({"../assets/images/games/cyberpunk.jpg":yg,"../assets/images/games/elden-ring.jpg":vg,"../assets/images/games/horizon.jpg":Eg,"../assets/images/games/zelda.jpg":Tg}),nD={name:"GamesPage",data(){return{games:[],isLoading:!0}},methods:{async fetchGames(){this.isLoading=!0;const t=Ma(ar,"Games");try{console.log("Fetching from collection:",t.path);const e=await Ua(t);console.log("Documents found:",e.docs.length),this.games=e.docs.map(n=>{if(typeof n.data!="function")return console.error("Invalid document:",n),null;const r=n.data();return console.log("Document data:",r),{id:n.id,name:r.name,price:r.price,salePrice:r.salePrice,rating:r.rating,reviewCount:r.reviewCount,platform:r.platform,image:r.image}}).filter(n=>n!==null)}catch(e){console.error("Error fetching games:",e)}finally{this.isLoading=!1}},getImageUrl(t){if(!t)return"https://placehold.co/400x300?text=Game";const e=`../assets/images/games/${t}`;return tp[e]?tp[e].default:"https://placehold.co/400x300?text=Game"},truncateTitle(t){return t.length<=40?t:t.substring(0,38)+"..."},addToCart(t){console.log(t.name),console.log(t.rating),Rr().onAuthStateChanged(n=>{if(this.isLogged=!!n,this.isLogged){const r=t.id,s=La(ar,`Users/${n.uid}/ownedItems`,r);ku(s,{name:t.name,rating:t.rating,image:t.image,reviewCount:t.reviewCount}),console.log(n.uid),console.log("Added to cart:",t),alert(`${t.name} added to cart!`)}else alert("Please Log in first")})}},mounted(){this.fetchGames()}},rD={class:"games-page"},sD={class:"games-container"},iD={key:0,class:"loading"},oD={key:1,class:"games-grid"},aD={class:"game-image"},cD=["src","alt"],lD={key:0,class:"game-platform-tag"},uD={class:"game-details"},hD=["title"],dD={class:"game-rating"},fD={class:"stars"},pD={class:"review-count"},gD={class:"game-price"},mD={key:0,class:"original-price"},_D={class:"current-price"},yD=["onClick"];function vD(t,e,n,r,s,i){return he(),ge("div",rD,[e[1]||(e[1]=N("div",{class:"category-banner"},[N("h1",null,"Games"),N("p",null,"Discover the latest and greatest PC and console games")],-1)),N("div",sD,[s.isLoading?(he(),ge("div",iD,e[0]||(e[0]=[N("div",{class:"loading-spinner"},null,-1),N("p",null,"Loading games...",-1)]))):(he(),ge("div",oD,[(he(!0),ge(We,null,Sn(s.games,o=>(he(),ge("div",{key:o.id,class:"game-card"},[N("div",aD,[N("img",{src:i.getImageUrl(o.image),alt:o.name},null,8,cD),o.platform?(he(),ge("div",lD,Ve(o.platform),1)):hs("",!0)]),N("div",uD,[N("h3",{class:"game-title",title:o.name},Ve(i.truncateTitle(o.name)),9,hD),N("div",dD,[N("div",fD,[(he(),ge(We,null,Sn(5,c=>N("span",{key:c,class:Vr({filled:c<=o.rating})},"★",2)),64))]),N("span",pD,"("+Ve(o.reviewCount)+")",1)]),N("div",gD,[o.salePrice?(he(),ge("span",mD,"$"+Ve(o.price.toFixed(2)),1)):hs("",!0),N("span",_D,"$"+Ve((o.salePrice||o.price).toFixed(2)),1)])]),N("button",{class:"add-to-cart-button",onClick:c=>i.addToCart(o)},"Add to Cart",8,yD)]))),128))]))])])}const ED=jt(nD,[["render",vD],["__scopeId","data-v-7aec04d7"]]),TD={};function ID(t,e){return he(),ge("div",null," This is Order History ")}const wD=jt(TD,[["render",ID]]),AD={};function bD(t,e){return he(),ge("div",null," This is Cart ")}const RD=jt(AD,[["render",bD]]),SD={apiKey:"AIzaSyCXCUVe43qi1sXa9MeYjxNica_mrylumYg",authDomain:"do-keenan-final.firebaseapp.com",projectId:"do-keenan-final",storageBucket:"do-keenan-final.firebasestorage.app",messagingSenderId:"416708817663",appId:"1:416708817663:web:318c624639b64cc36252ca",measurementId:"G-D4L5W1HXND"},Ou=yT(cR),PD=[{path:"/",component:Rg},{path:"/login",component:dR},{path:"/hardware",component:$O},{path:"/profile",component:tD},{path:"/cart",component:RD},{path:"/deals",component:gR},{path:"/games",component:ED},{path:"/accessories",component:_O},{path:"/orders",component:wD},{path:"/games-library",component:EO}],CD=ZI({history:PI(),routes:PD});Ou.use(IT());Fl(SD);Ou.use(CD);Ou.mount("#app");
