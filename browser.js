// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,a){var c,l,d,_;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,e)||f.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=a.value,r.__proto__=c):r[e]=a.value),d="get"in a,_="set"in a,l&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&o&&o.call(r,e,a.get),_&&u&&u.call(r,e,a.set),r};function c(r,e,t){a(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function d(r,e,t,n){var o,u,i,f,a,c,_,p,y,b,s,v,m;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(s=0,m=0;m<r;m++)s+=e[o],o+=t;return s}if(r<=128){for(u=e[o],i=e[o+t],f=e[o+2*t],a=e[o+3*t],c=e[o+4*t],_=e[o+5*t],p=e[o+6*t],y=e[o+7*t],o+=8*t,b=r%8,m=8;m<r-b;m+=8)u+=e[o],i+=e[o+t],f+=e[o+2*t],a+=e[o+3*t],c+=e[o+4*t],_+=e[o+5*t],p+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(s=u+i+(f+a)+(c+_+(p+y));m<r;m++)s+=e[o],o+=t;return s}return v=l(r/2),d(v-=v%8,e,t,o)+d(r-v,e,t,o+v*t)}function _(r,e,t){var n,o,u;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,u=0;u<r;u++)o+=e[n],n+=t;return o}return d(r,e,t,n)}function p(r,e,t){return _(r,e,t)}function y(r,e,t,n){return d(r,e,t,n)}function b(r,e,t,n,o){var u,i,f,a,c,d,_,p,y,s,v,m,j;if(r<=0)return 0;if(1===r||0===n)return e+t[o];if(u=o,r<8){for(v=0,j=0;j<r;j++)v+=e+t[u],u+=n;return v}if(r<=128){for(i=e+t[u],f=e+t[u+n],a=e+t[u+2*n],c=e+t[u+3*n],d=e+t[u+4*n],_=e+t[u+5*n],p=e+t[u+6*n],y=e+t[u+7*n],u+=8*n,s=r%8,j=8;j<r-s;j+=8)i+=e+t[u],f+=e+t[u+n],a+=e+t[u+2*n],c+=e+t[u+3*n],d+=e+t[u+4*n],_+=e+t[u+5*n],p+=e+t[u+6*n],y+=e+t[u+7*n],u+=8*n;for(v=i+f+(a+c)+(d+_+(p+y));j<r;j++)v+=e+t[u],u+=n;return v}return m=l(r/2),b(m-=m%8,e,t,n,u)+b(r-m,e,t,n,u+m*n)}function s(r,e,t,n){var o,u,i;if(r<=0)return 0;if(1===r||0===n)return e+t[0];if(o=n<0?(1-r)*n:0,r<8){for(u=0,i=0;i<r;i++)u+=e+t[o],o+=n;return u}return b(r,e,t,n,o)}function v(r,e,t,n){return s(r,e,t,n)}function m(r,e,t,n,o){return b(r,e,t,n,o)}function j(r,e,t){var n;return r<=0?NaN:1===r||0===t?e[0]:(n=p(r,e,t)/r)+v(r,-n,e,t)/r}function g(r,e,t,n){var o;return r<=0?NaN:1===r||0===t?e[n]:(o=y(r,e,t,n)/r)+m(r,-o,e,t,n)/r}function h(r,e,t){return j(r,e,t)}return c(_,"ndarray",d),c(p,"ndarray",y),c(s,"ndarray",b),c(v,"ndarray",m),c(j,"ndarray",g),c(h,"ndarray",(function(r,e,t,n){return g(r,e,t,n)})),h},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dsmean=e();
//# sourceMappingURL=browser.js.map
