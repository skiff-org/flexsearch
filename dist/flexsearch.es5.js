/**!
 * FlexSearch.js v0.7.21 (ES5)
 * Copyright 2018-2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(self){'use strict';var u;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var w="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var y=ba(this);function C(a,b){if(b)a:{var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&w(c,a,{configurable:!0,writable:!0,value:b})}}
C("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(h||"")+"_"+f++,h)}function c(h,e){this.h=h;w(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.h};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
C("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=y[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&w(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
C("Promise",function(a){function b(e){this.l=0;this.m=void 0;this.h=[];this.J=!1;var g=this.o();try{e(g.resolve,g.reject)}catch(k){g.reject(k)}}function c(){this.h=null}function d(e){return e instanceof b?e:new b(function(g){g(e)})}if(a)return a;c.prototype.l=function(e){if(null==this.h){this.h=[];var g=this;this.m(function(){g.C()})}this.h.push(e)};var f=y.setTimeout;c.prototype.m=function(e){f(e,0)};c.prototype.C=function(){for(;this.h&&this.h.length;){var e=this.h;this.h=[];for(var g=0;g<e.length;++g){var k=
e[g];e[g]=null;try{k()}catch(l){this.o(l)}}}this.h=null};c.prototype.o=function(e){this.m(function(){throw e;})};b.prototype.o=function(){function e(l){return function(p){k||(k=!0,l.call(g,p))}}var g=this,k=!1;return{resolve:e(this.S),reject:e(this.C)}};b.prototype.S=function(e){if(e===this)this.C(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.U(e);else{a:switch(typeof e){case "object":var g=null!=e;break a;case "function":g=!0;break a;default:g=!1}g?this.R(e):this.I(e)}};
b.prototype.R=function(e){var g=void 0;try{g=e.then}catch(k){this.C(k);return}"function"==typeof g?this.V(g,e):this.I(e)};b.prototype.C=function(e){this.N(2,e)};b.prototype.I=function(e){this.N(1,e)};b.prototype.N=function(e,g){if(0!=this.l)throw Error("Cannot settle("+e+", "+g+"): Promise already settled in state"+this.l);this.l=e;this.m=g;2===this.l&&this.T();this.O()};b.prototype.T=function(){var e=this;f(function(){if(e.P()){var g=y.console;"undefined"!==typeof g&&g.error(e.m)}},1)};b.prototype.P=
function(){if(this.J)return!1;var e=y.CustomEvent,g=y.Event,k=y.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof g?e=new g("unhandledrejection",{cancelable:!0}):(e=y.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.m;return k(e)};b.prototype.O=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)h.l(this.h[e]);this.h=null}};var h=new c;b.prototype.U=
function(e){var g=this.o();e.K(g.resolve,g.reject)};b.prototype.V=function(e,g){var k=this.o();try{e.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,g){function k(m,q){return"function"==typeof m?function(r){try{l(m(r))}catch(t){p(t)}}:q}var l,p,n=new b(function(m,q){l=m;p=q});this.K(k(e,l),k(g,p));return n};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.K=function(e,g){function k(){switch(l.l){case 1:e(l.m);break;case 2:g(l.m);break;default:throw Error("Unexpected state: "+
l.l);}}var l=this;null==this.h?h.l(k):this.h.push(k);this.J=!0};b.resolve=d;b.reject=function(e){return new b(function(g,k){k(e)})};b.race=function(e){return new b(function(g,k){for(var l=v(e),p=l.next();!p.done;p=l.next())d(p.value).K(g,k)})};b.all=function(e){var g=v(e),k=g.next();return k.done?d([]):new b(function(l,p){function n(r){return function(t){m[r]=t;q--;0==q&&l(m)}}var m=[],q=0;do m.push(void 0),q++,d(k.value).K(n(m.length-1),p),k=g.next();while(!k.done)})};return b});
function da(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var h=c++;return{value:b(h,a[h]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}C("Array.prototype.keys",function(a){return a?a:function(){return da(this,function(b){return b})}});
var ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};C("Object.assign",function(a){return a||ea});C("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});function D(a){return"undefined"!==typeof a?a:!0}function fa(a){for(var b=Array(a),c=0;c<a;c++)b[c]=E();return b}function E(){return Object.create(null)}function ha(a,b){return b.length-a.length}function F(a){return"string"===typeof a}function H(a){return"object"===typeof a}function I(a){return"function"===typeof a};function ia(a,b){var c=ja;if(a&&(b&&(a=J(a,b)),this.L&&(a=J(a,this.L)),this.M&&1<a.length&&(a=J(a,this.M)),c||""===c)){a=a.split(c);if(this.filter){b=this.filter;c=a.length;for(var d=[],f=0,h=0;f<c;f++){var e=a[f];e&&!b[e]&&(d[h++]=e)}a=d}return a}return a}var ja=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ka=/[\u0300-\u036f]/g;
function la(a,b){for(var c=Object.keys(a),d=c.length,f=[],h="",e=0,g=0,k,l;g<d;g++)k=c[g],(l=a[k])?(f[e++]=L(b?"(?!\\b)"+k+"(\\b|_)":k),f[e++]=l):h+=(h?"|":"")+k;h&&(f[e++]=L(b?"(?!\\b)("+h+")(\\b|_)":"("+h+")"),f[e]="");return f}function J(a,b){for(var c=0,d=b.length;c<d&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function L(a){return new RegExp(a,"g")}function ma(a){for(var b="",c="",d=0,f=a.length,h=void 0;d<f;d++)(h=a[d])!==c&&(b+=c=h);return b};var oa={encode:na,G:!1,H:""};function na(a){return ia.call(this,(""+a).toLowerCase(),!1)};var pa={},M={};function qa(a){N(a,"add");N(a,"append");N(a,"search");N(a,"update");N(a,"remove")}function N(a,b){a[b+"Async"]=function(){var c=this,d=arguments,f=d[d.length-1];if(I(f)){var h=f;delete d[d.length-1]}f=new Promise(function(e){setTimeout(function(){c.async=!0;var g=c[b].apply(c,d);c.async=!1;e(g)})});return h?(f.then(h),this):f}};function ra(a,b,c,d){var f=a.length,h=[],e,g=0;d&&(d=[]);for(var k=f-1;0<=k;k--){for(var l=a[k],p=l.length,n=E(),m=!B,q=0;q<p;q++){var r=l[q],t=r.length;if(t)for(var A=0,x=void 0,z;A<t;A++)if(z=r[A],B){if(B[z]){if(!k)if(c)c--;else if(h[g++]=z,g===b)return h;if(k||d)n[z]=1;m=!0}if(d&&(e[z]=(x=e[z])?++x:x=1,x<f)){var K=d[x-2]||(d[x-2]=[]);K[K.length]=z}}else n[z]=1}if(d)B||(e=n);else if(!m)return[];var B=n}if(d)for(a=d.length-1;0<=a;a--)for(f=d[a],e=f.length,k=0;k<e;k++)if(l=f[k],!B[l]){if(c)c--;else if(h[g++]=
l,g===b)return h;B[l]=1}return h}function sa(a,b){for(var c=E(),d=E(),f=[],h=0;h<a.length;h++)c[a[h]]=1;for(a=0;a<b.length;a++){h=b[a];for(var e=0,g;e<h.length;e++)g=h[e],c[g]&&!d[g]&&(d[g]=1,f[f.length]=g)}return f};function O(a){this.l=!0!==a&&a;this.cache=E();this.h=[]}function ta(a,b,c){H(a)&&(a=a.query);var d=this.cache.get(a);d||(d=this.search(a,b,c),this.cache.set(a,d));return d}O.prototype.set=function(a,b){if(!this.cache[a]){var c=this.h.length;c===this.l?delete this.cache[this.h[c-1]]:c++;for(--c;0<c;c--)this.h[c]=this.h[c-1];this.h[0]=a}this.cache[a]=b};O.prototype.get=function(a){var b=this.cache[a];if(this.l&&b&&(a=this.h.indexOf(a))){var c=this.h[a-1];this.h[a-1]=this.h[a];this.h[a]=c}return b};var ua={memory:{charset:"latin:extra",F:3,B:4,D:!1},performance:{F:3,B:3,A:!1,context:{depth:2,F:1}},match:{charset:"latin:extra",H:"reverse"},score:{charset:"latin:advanced",F:20,B:3,context:{depth:3,F:9}},"default":{}};function P(a,b){if(!(this instanceof P))return new P(a);var c;if(a){F(a)?a=ua[a]:(c=a.preset)&&(a=Object.assign({},c[c],a));c=a.charset;var d=a.lang;F(c)&&(-1===c.indexOf(":")&&(c+=":default"),c=M[c]);F(d)&&(d=pa[d])}else a={};var f,h,e=a.context||{};this.encode=a.encode||c&&c.encode||na;this.register=b||E();this.F=f=a.resolution||9;this.H=b=c&&c.H||a.tokenize||"strict";this.depth="strict"===b&&e.depth;this.l=D(e.bidirectional);this.A=h=D(a.optimize);this.D=D(a.fastupdate);this.B=a.minlength||1;this.o=
a.boost;this.map=h?fa(f):E();this.m=f=e.resolution||1;this.h=h?fa(f):E();this.G=c&&c.G||a.rtl;this.L=(b=a.matcher||d&&d.L)&&la(b,!1);this.M=(b=a.stemmer||d&&d.M)&&la(b,!0);if(c=b=a.filter||d&&d.filter){c=b;d=E();e=0;for(f=c.length;e<f;e++)d[c[e]]=1;c=d}this.filter=c;this.cache=(b=a.cache)&&new O(b)}u=P.prototype;u.append=function(a,b){return this.add(a,b,!0)};
u.add=function(a,b,c,d){if(b&&(a||0===a)){if(!d&&!c&&this.register[a])return this.update(a,b);b=this.encode(b);if(d=b.length){for(var f=E(),h=E(),e=this.depth,g=this.F,k=0;k<d;k++){var l=b[this.G?d-1-k:k],p=l.length;if(l&&p>=this.B&&(e||!h[l])){var n=Q(g,d,k),m="";switch(this.H){case "full":if(3<p){for(n=0;n<p;n++)for(var q=p;q>n;q--)if(q-n>=this.B){var r=Q(g,d,k,p,n);m=l.substring(n,q);R(this,h,m,r,a,c)}break}case "reverse":if(2<p){for(q=p-1;0<q;q--)m=l[q]+m,m.length>=this.B&&R(this,h,m,Q(g,d,k,
p,q),a,c);m=""}case "forward":if(1<p){for(q=0;q<p;q++)m+=l[q],m.length>=this.B&&R(this,h,m,n,a,c);break}default:if(this.o&&(n=Math.min(n/this.o(b,l,k)|0,g-1)),R(this,h,l,n,a,c),e&&1<d&&k<d-1)for(p=E(),m=this.m,n=l,q=Math.min(e+1,d-k),r=p[n]=1;r<q;r++)if((l=b[this.G?d-1-k-r:k+r])&&l.length>=this.B&&!p[l]){p[l]=1;var t=this.l&&l>n;R(this,f,t?n:l,Q(m+(d/2>m?0:1),d,k,q-1,r-1),a,c,t?l:n)}}}}this.D||(this.register[a]=1)}}return this};
function Q(a,b,c,d,f){return c&&1<a?b+(d||0)<=a?c+(f||0):(a-1)/(b+(d||0))*(c+(f||0))+1|0:0}function R(a,b,c,d,f,h,e){var g=e?a.h:a.map;if(!b[c]||e&&!b[c][e])a.A&&(g=g[d]),e?(b=b[c]||(b[c]=E()),b[e]=1,g=g[e]||(g[e]=E())):b[c]=1,g=g[c]||(g[c]=[]),a.A||(g=g[d]||(g[d]=[])),h&&-1!==g.indexOf(f)||(g[g.length]=f,a.D&&(a=a.register[f]||(a.register[f]=[]),a[a.length]=g))}
u.search=function(a,b,c){c||(!b&&H(a)?(c=a,a=c.query):H(b)&&(c=b));var d=[],f=0;if(c){b=c.limit;f=c.offset||0;var h=c.context;var e=c.suggest}if(a){a=this.encode(a);var g=a.length;if(1<g){c=E();for(var k=[],l=0,p=0,n;l<g;l++)if((n=a[l])&&n.length>=this.B&&!c[n])if(this.A||e||this.map[n])k[p++]=n,c[n]=1;else return d;a=k;g=a.length}}if(!g)return d;b||(b=100);h=this.depth&&1<g&&!1!==h;c=0;if(h){var m=a[0];c=1}else 1<g&&a.sort(ha);for(;c<g;c++){l=a[c];h?(k=va(this,d,e,b,f,2===g,l,m),e&&!1===k&&d.length||
(m=l)):k=va(this,d,e,b,f,1===g,l);if(k)return k;if(e&&c===g-1){k=d.length;if(!k){if(h){h=0;c=-1;continue}return d}if(1===k)return wa(d[0],b,f)}}return ra(d,b,f,e)};
function va(a,b,c,d,f,h,e,g){var k=[],l=g?a.h:a.map;a.A||(l=xa(l,e,g,a.l));if(l){for(var p=0,n=Math.min(l.length,g?a.m:a.F),m=0,q=0,r,t;m<n;m++)if(r=l[m])if(a.A&&(r=xa(r,e,g,a.l)),f&&r&&h&&(t=r.length,t<=f?(f-=t,r=null):(r=r.slice(f),f=0)),r&&(k[p++]=r,h&&(q+=r.length,q>=d)))break;if(p){if(h)return wa(k,d,0);b[b.length]=k;return}}return!c&&k}function wa(a,b,c){a=1===a.length?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a}
function xa(a,b,c,d){c?(d=d&&b>c,a=(a=a[d?b:c])&&a[d?c:b]):a=a[b];return a}u.contain=function(a){return!!this.register[a]};u.update=function(a,b){return this.remove(a).add(a,b)};
u.remove=function(a,b){var c=this.register[a];if(c){if(this.D)for(var d=0,f;d<c.length;d++)f=c[d],f.splice(f.indexOf(a),1);else S(this.map,a,this.F,this.A),this.depth&&S(this.h,a,this.m,this.A);b||delete this.register[a];if(this.cache)for(b=this.cache,c=0;c<b.h.length;c++)f=b.h[c],d=b.cache[f],-1!==d.indexOf(a)&&(b.h.splice(c--,1),delete b.cache[f])}return this};
function S(a,b,c,d,f){var h=0;if(a.constructor===Array)if(f)b=a.indexOf(b),-1!==b?1<a.length&&(a.splice(b,1),h++):h++;else{f=Math.min(a.length,c);for(var e=0,g;e<f;e++)if(g=a[e])h=S(g,b,c,d,f),d||h||delete a[e]}else for(e in a)(h=S(a[e],b,c,d,f))||delete a[e];return h}u.searchCache=ta;u.export=function(){return{reg:this.register,cfg:{opt:this.A},map:this.map,ctx:this.h}};u.import=function(a){this.A=a.cfg.opt;this.register=a.reg;this.map=a.map;this.h=a.ctx;return this};qa(P.prototype);function ya(a){a=a.data;var b=self._index,c=a.args,d=a.task;switch(d){case "init":d=a.options||{};a=a.factory;b=d.encode;d.cache=!1;b&&0===b.indexOf("function")&&(d.encode=Function("return "+b)());a?(Function("return "+a)()(self),self._index=new self.FlexSearch.Index(d),delete self.FlexSearch):self._index=new P(d);break;default:a=a.id,b=b[d].apply(b,c),postMessage("search"===d?{id:a,msg:b}:{id:a})}};var za=0;function T(a){if(!(this instanceof T))return new T(a);var b;a?I(b=a.encode)&&(a.encode=b.toString()):a={};(b=(self||window)._factory)&&(b=b.toString());var c=self.exports,d=this;this.s=Aa(b,c,a.worker);this.h=E();if(this.s){if(c)this.s.on("message",function(f){d.h[f.id](f.msg);delete d.h[f.id]});else this.s.onmessage=function(f){f=f.data;d.h[f.id](f.msg);delete d.h[f.id]};this.s.postMessage({task:"init",factory:b,options:a})}}U("add");U("append");U("search");U("update");U("remove");
function U(a){T.prototype[a]=T.prototype[a+"Async"]=function(){var b=this,c=[].slice.call(arguments),d=c[c.length-1];if(I(d)){var f=d;c.splice(c.length-1,1)}d=new Promise(function(h){setTimeout(function(){b.h[++za]=h;b.s.postMessage({task:a,id:za,args:c})})});return f?(d.then(f),this):d}}
function Aa(a,b,c){try{var d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+ya.toString()],{type:"text/javascript"}))):new Worker(F(c)?c:"worker/worker.js",{type:"module"})}catch(f){}return d};function V(a){if(!(this instanceof V))return new V(a);var b=a.document||a.doc||a,c;this.I=[];this.h=[];this.m=[];this.register=E();this.key=(c=b.key||b.id)&&W(c,this.m)||"id";this.D=D(a.fastupdate);this.o=(c=b.store)&&!0!==c&&[];this.store=c&&E();this.C=(c=b.tag)&&W(c,this.m);this.l=c&&E();this.cache=(c=a.cache)&&new O(c);a.cache=!1;this.s=a.worker;this.async=!1;c=E();var d=b.index||b.field||b;F(d)&&(d=[d]);for(var f=0,h,e=void 0;f<d.length;f++)h=d[f],F(h)||(e=h,h=h.field),e=H(e)?Object.assign({},
a,e):a,this.s&&(c[h]=new T(e),c[h].s||(this.s=!1)),this.s||(c[h]=new P(e,this.register)),this.I[f]=W(h,this.m),this.h[f]=h;if(this.o)for(a=b.store,F(a)&&(a=[a]),b=0;b<a.length;b++)this.o[b]=W(a[b],this.m);this.index=c}function W(a,b){for(var c=a.split(":"),d=0,f=0;f<c.length;f++)a=c[f],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[d]=!0),a&&(c[d++]=a);d<c.length&&(c.length=d);return 1<d?c:c[0]}function X(a,b){if(F(b))a=a[b];else for(var c=0;a&&c<b.length;c++)a=a[b[c]];return a}
function Y(a,b,c,d,f){a=a[f];if(d===c.length-1)b[f]=a;else if(a)if(a.constructor===Array)for(b=b[f]=Array(a.length),f=0;f<a.length;f++)Y(a,b,c,d,f);else b=b[f]||(b[f]=E()),f=c[++d],Y(a,b,c,d,f)}function Ba(a,b,c,d,f,h,e,g){if(a=a[e])if(d===b.length-1){if(a.constructor===Array){if(c[d]){for(b=0;b<a.length;b++)f.add(h,a[b],!0,!0);return}a=a.join(" ")}f.add(h,a,g,!0)}else if(a.constructor===Array)for(e=0;e<a.length;e++)Ba(a,b,c,d,f,h,e,g);else e=b[++d],Ba(a,b,c,d,f,h,e,g)}u=V.prototype;
u.add=function(a,b,c){H(a)&&(b=a,a=X(b,this.key));if(b&&(a||0===a)){if(!c&&this.register[a])return this.update(a,b);for(var d=0,f,h;d<this.h.length;d++)h=this.h[d],f=this.I[d],F(f)&&(f=[f]),Ba(b,f,this.m,0,this.index[h],a,f[0],c);if(this.C){d=X(b,this.C);f=E();F(d)&&(d=[d]);h=0;for(var e;h<d.length;h++)if(e=d[h],!f[e]&&(f[e]=1,e=this.l[e]||(this.l[e]=[]),!c||-1===e.indexOf(a)))if(e[e.length]=a,this.D){var g=this.register[a]||(this.register[a]=[]);g[g.length]=e}}if(this.store&&(!c||!this.store[a])){if(this.o){var k=
E();for(c=0;c<this.o.length;c++)d=this.o[c],F(d)?k[d]=b[d]:Y(b,k,d,0,d[0])}this.store[a]=k||b}}return this};u.append=function(a,b){return this.add(a,b,!0)};u.update=function(a,b){return this.remove(a).add(a,b)};
u.remove=function(a){H(a)&&(a=X(a,this.key));if(this.register[a]){for(var b=0;b<this.h.length&&(this.index[this.h[b]].remove(a,!this.s),!this.D);b++);if(this.C&&!this.D)for(var c in this.l){b=this.l[c];var d=b.indexOf(a);-1!==d&&(1<b.length?b.splice(d,1):delete this.l[c])}this.store&&delete this.store[a];delete this.register[a]}return this};
u.search=function(a,b,c,d){c||(!b&&H(a)?(c=a,a=c.query):H(b)&&(c=b,b=0));var f=[],h=[],e,g=0;if(c)if(c.constructor===Array){var k=c;c=null}else{k=(e=c.pluck)||c.index||c.field;var l=c.tag;var p=this.store&&c.enrich;var n="and"===c.bool;b=c.limit||100;var m=c.offset||0;if(l&&(F(l)&&(l=[l]),!a)){h=0;for(e=void 0;h<l.length;h++)if(e=Ca.call(this,l[h],b,m,p))f[f.length]=e,g++;return g?f:[]}F(k)&&(k=[k])}k||(k=this.h);n=n&&(1<k.length||l&&1<l.length);for(var q=!d&&(this.s||this.async)&&[],r=0,t=void 0,
A=void 0,x=void 0;r<k.length;r++)if(x=void 0,A=k[r],F(A)||(x=A,A=A.field),q)q[r]=this.index[A].searchAsync(a,b,x||c);else{d?t=d[r]:t=this.index[A].search(a,b,x||c);x=t&&t.length;if(l&&x){var z=[],K=0;n&&(z[0]=[t]);var B=0,G=void 0;for(G=void 0;B<l.length;B++)if(G=l[B],x=(G=this.l[G])&&G.length)K++,z[z.length]=n?[G]:G;K&&(t=n?ra(z,b||100,m||0):sa(t,z),x=t.length)}if(x)h[g]=A,f[g++]=t;else if(n)return[]}if(q){var Ka=this;return new Promise(function(La){Promise.all(q).then(function(Ma){La(Ka.search(a,
b,c,Ma))})})}if(!g)return[];if(e&&(!p||!this.store))return f[0];l=0;for(m=void 0;l<h.length;l++){m=f[l];m.length&&p&&(m=Da.call(this,m));if(e)return m;f[l]={field:h[l],result:m}}return f};function Ca(a,b,c,d){var f=this.l[a],h=f&&f.length-c;if(h&&0<h){if(h>b||c)f=f.slice(c,c+b);d&&(f=Da.call(this,f));return{tag:a,result:f}}}function Da(a){for(var b=Array(a.length),c=0,d;c<a.length;c++)d=a[c],b[c]={id:d,doc:this.store[d]};return b}u.contain=function(a){return!!this.register[a]};u.get=function(a){return this.store[a]};
u.set=function(a,b){this.store[a]=b;return this};u.searchCache=ta;u.export=function(){var a={tag:this.J,reg:this.register,store:this.store,field:this.h,index:{}};Object.entries(this.index).forEach(function(b){var c=v(b);b=c.next().value;c=c.next().value;a.index[b]=c.export()});return a};u.import=function(a){var b=this;this.J=a.tag;this.register=a.reg;this.store=a.store;this.h=a.field;Object.entries(a.index).forEach(function(c){var d=v(c);c=d.next().value;d=d.next().value;b.index[c].import(d)})};qa(V.prototype);var Fa={encode:Ea,G:!1,H:""},Ga=[L("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",L("[\u00e8\u00e9\u00ea\u00eb]"),"e",L("[\u00ec\u00ed\u00ee\u00ef]"),"i",L("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",L("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",L("[\u00fd\u0177\u00ff]"),"y",L("\u00f1"),"n",L("[\u00e7c]"),"k",L("\u00df"),"s",L(" & ")," and "];function Ea(a){var b=a;b.normalize&&(b=b.normalize("NFD").replace(ka,""));return ia.call(this,b.toLowerCase(),!a.normalize&&Ga)};var Ia={encode:Ha,G:!1,H:"strict"},Ja=/[^a-z0-9]+/,Na={b:"p",v:"f",w:"f",z:"s",x:"s","\u00df":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Ha(a){a=Ea.call(this,a).join(" ");var b=[];if(a)for(var c=a.split(Ja),d=c.length,f=0,h,e=0;f<d;f++)if((a=c[f])&&(!this.filter||!this.filter[a])){h=a[0];for(var g=Na[h]||h,k=g,l=1;l<a.length;l++)h=a[l],(h=Na[h]||h)&&h!==k&&(g+=h,k=h);b[e++]=g}return b};var Pa={encode:Oa,G:!1,H:""},Qa=[L("ae"),"a",L("oe"),"o",L("sh"),"s",L("th"),"t",L("ph"),"f",L("pf"),"f",L("(?![aeo])h(?![aeo])"),"",L("(?!^[aeo])h(?!^[aeo])"),""];function Oa(a,b){a&&(a=Ha.call(this,a).join(" "),2<a.length&&(a=J(a,Qa)),b||(1<a.length&&(a=ma(a)),a&&(a=a.split(" "))));return a};var Sa={encode:Ra,G:!1,H:""},Ta=L("(?!\\b)[aeo]");function Ra(a){a&&(a=Oa.call(this,a,!0),1<a.length&&(a=a.replace(Ta,"")),1<a.length&&(a=ma(a)),a&&(a=a.split(" ")));return a};M["latin:default"]=oa;M["latin:simple"]=Fa;M["latin:balance"]=Ia;M["latin:advanced"]=Pa;M["latin:extra"]=Sa;var Z=self,Ua,Va={Index:P,Document:V,Worker:T,registerCharset:function(a,b){M[a]=b},registerLanguage:function(a,b){pa[a]=b}};(Ua=Z.define)&&Ua.amd?Ua([],function(){return Va}):Z.exports?Z.exports=Va:Z.FlexSearch=Va;}(this));
