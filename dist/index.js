"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=i(function(h,t){
var p=require('@stdlib/stats-base-dsmeanpn/dist').ndarray;function y(e,r,a,c){return p(e,r,a,c)}t.exports=y
});var v=i(function(k,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),x=n();function j(e,r,a){return x(e,r,a,f(e,a))}u.exports=j
});var o=i(function(w,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=n();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),s,m=E(_(__dirname,"./native.js"));O(m)?s=b:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
