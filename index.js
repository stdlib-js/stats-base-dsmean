// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).dsmean={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,s,l,b;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((s="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),l="get"in n,b="set"in n,s&&(l||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),b&&i&&i.call(r,t,n.set),r};var s=n;function l(r,t,n){s(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function b(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===y(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function d(){var r=Array.prototype.slice.call(arguments,0);return b(p(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function p(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var y="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},v=/./;function m(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var h,E="function"==typeof Symbol?Symbol.toStringTag:"";h=_()?function(r){var t,n,e,o,u;if(null==r)return w.call(r);n=r[E],u=E,t=null!=(o=r)&&g.call(o,u);try{r[E]=void 0}catch(t){return w.call(r)}return e=w.call(r),t?r[E]=n:delete r[E],e}:function(r){return w.call(r)};var O=h,S=Boolean.prototype.toString;var x=_();function A(r){return"object"==typeof r&&(r instanceof Boolean||(x?function(r){try{return S.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function P(r){return m(r)||A(r)}function T(){return new Function("return this;")()}l(P,"isPrimitive",m),l(P,"isObject",A);var k="object"==typeof self?self:null,B="object"==typeof window?window:null,N="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},M="object"==typeof N?N:null;var V=function(r){if(arguments.length){if(!m(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(k)return k;if(B)return B;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}(),C=V.document&&V.document.childNodes,F=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var L,q=/^\s*function\s*([^(]*)/i;l(G,"REGEXP",q),L=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var I=L;function J(r){return null!==r&&"object"==typeof r}var R=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!I(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(J);function U(r){var t,n,e,o;if(("Object"===(n=O(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=q.exec(e.toString()))return t[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(J,"isObjectLikeArray",R);var X="function"==typeof v||"object"==typeof F||"function"==typeof C?function(r){return U(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?U(r).toLowerCase():t};var z,D,H=Object.getPrototypeOf;D=Object.getPrototypeOf,z="function"===X(D)?H:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var K=z;function Q(r){return null==r?null:(r=Object(r),K(r))}function W(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=Q(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Y,Z=Math.floor;function $(r,t,n,e){var o,u,a,i,f,c,s,l,b,d,p,y,v;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(p=0,v=0;v<r;v++)p+=t[o],o+=n;return p}if(r<=128){for(u=t[o],a=t[o+n],i=t[o+2*n],f=t[o+3*n],c=t[o+4*n],s=t[o+5*n],l=t[o+6*n],b=t[o+7*n],o+=8*n,d=r%8,v=8;v<r-d;v+=8)u+=t[o],a+=t[o+n],i+=t[o+2*n],f+=t[o+3*n],c+=t[o+4*n],s+=t[o+5*n],l+=t[o+6*n],b+=t[o+7*n],o+=8*n;for(p=u+a+(i+f)+(c+s+(l+b));v<r;v++)p+=t[o],o+=n;return p}return y=Z(r/2),$(y-=y%8,t,n,o)+$(r-y,t,n,o+y*n)}function rr(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)o+=t[e],e+=n;return o}return $(r,t,n,e)}l(rr,"ndarray",$);var tr=W(d("/home/runner/work/stats-base-dsmean/stats-base-dsmean/node_modules/@stdlib/blas-ext-base-dssumpw/lib","./native.js")),nr=Y=tr instanceof Error?rr:tr;const{ndarray:er}=Y;function or(r,t,n){return nr(r,t,n)}var ur;l(or,"ndarray",(function(r,t,n,e){return er(r,t,n,e)}));var ar=W(d("/home/runner/work/stats-base-dsmean/stats-base-dsmean/node_modules/@stdlib/blas-ext-base-dssum/lib","./native.js")),ir=ur=ar instanceof Error?or:ar;const{ndarray:fr}=ur;var cr;function sr(r,t,n,e,o){var u,a,i,f,c,s,l,b,d,p,y,v,m;if(r<=0)return 0;if(1===r||0===e)return t+n[o];if(u=o,r<8){for(y=0,m=0;m<r;m++)y+=t+n[u],u+=e;return y}if(r<=128){for(a=t+n[u],i=t+n[u+e],f=t+n[u+2*e],c=t+n[u+3*e],s=t+n[u+4*e],l=t+n[u+5*e],b=t+n[u+6*e],d=t+n[u+7*e],u+=8*e,p=r%8,m=8;m<r-p;m+=8)a+=t+n[u],i+=t+n[u+e],f+=t+n[u+2*e],c+=t+n[u+3*e],s+=t+n[u+4*e],l+=t+n[u+5*e],b+=t+n[u+6*e],d+=t+n[u+7*e],u+=8*e;for(y=a+i+(f+c)+(s+l+(b+d));m<r;m++)y+=t+n[u],u+=e;return y}return v=Z(r/2),sr(v-=v%8,t,n,e,u)+sr(r-v,t,n,e,u+v*e)}function lr(r,t,n,e){var o,u,a;if(r<=0)return 0;if(1===r||0===e)return t+n[0];if(o=e<0?(1-r)*e:0,r<8){for(u=0,a=0;a<r;a++)u+=t+n[o],o+=e;return u}return sr(r,t,n,e,o)}l(lr,"ndarray",sr);var br=W(d("/home/runner/work/stats-base-dsmean/stats-base-dsmean/node_modules/@stdlib/blas-ext-base-dsapxsumpw/lib","./native.js")),dr=cr=br instanceof Error?lr:br;const{ndarray:pr}=cr;function yr(r,t,n,e){return dr(r,t,n,e)}var vr;l(yr,"ndarray",(function(r,t,n,e,o){return pr(r,t,n,e,o)}));var mr=W(d("/home/runner/work/stats-base-dsmean/stats-base-dsmean/node_modules/@stdlib/blas-ext-base-dsapxsum/lib","./native.js")),jr=vr=mr instanceof Error?yr:mr;const{ndarray:_r}=vr;function wr(r,t,n){var e;return r<=0?NaN:1===r||0===n?t[0]:(e=ir(r,t,n)/r)+jr(r,-e,t,n)/r}var gr;l(wr,"ndarray",(function(r,t,n,e){var o;return r<=0?NaN:1===r||0===n?t[e]:(o=fr(r,t,n,e)/r)+_r(r,-o,t,n,e)/r}));var hr=W(d("/home/runner/work/stats-base-dsmean/stats-base-dsmean/node_modules/@stdlib/stats-base-dsmeanpn/lib","./native.js")),Er=gr=hr instanceof Error?wr:hr;const{ndarray:Or}=gr;function Sr(r,t,n){return Er(r,t,n)}function xr(r,t,n,e){return Or(r,t,n,e)}l(Sr,"ndarray",xr),r.default=Sr,r.ndarray=xr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
