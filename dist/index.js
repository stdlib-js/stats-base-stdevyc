"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=s(function(h,u){
var o=require('@stdlib/stats-strided-varianceyc/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,a,t,d){return f(o(e,r,a,t,d))}u.exports=p
});var v=s(function(j,n){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=i();function m(e,r,a,t){return l(e,r,a,t,x(e,t))}n.exports=m
});var y=s(function(k,q){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),R=i();O(c,"ndarray",R);q.exports=c
});var b=y();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
