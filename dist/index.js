"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(h,i){
var o=require('@stdlib/stats-strided-varianceyc/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a){return p(o(e,r,t,a))}i.exports=x
});var n=s(function(j,c){
var f=require('@stdlib/stats-strided-varianceyc/dist').ndarray,l=require('@stdlib/math-base-special-sqrt/dist');function m(e,r,t,a,d){return l(f(e,r,t,a,d))}c.exports=m
});var y=s(function(k,q){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=u(),R=n();O(v,"ndarray",R);q.exports=v
});var b=y();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
