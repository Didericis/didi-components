(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('SignUp',[],b):'object'==typeof exports?exports.SignUp=b():a.SignUp=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=20)}([function(a){a.exports=require('react')},function(a){a.exports=require('prop-types')},function(a){a.exports=require('redux-form')},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c.n(d),f=c(1),g=c.n(f),h=c(4),i=c.n(h),j=c(2),k=c.n(j);const l=({children:a,className:b,error:c,warning:e,handleSubmit:f,style:g})=>Object(d.createElement)(j.Form,{onSubmit:f,className:i()('didi-form',b),style:g},a,c&&Object(d.createElement)('div',{className:'didi-form__error'},Object(d.createElement)('strong',null,c)),e&&Object(d.createElement)('div',{className:'didi-form__warning'},Object(d.createElement)('strong',null,e)));l.propTypes={children:g.a.node,className:g.a.string,error:g.a.string,handleSubmit:g.a.func,style:g.a.object,warning:g.a.string};var m=c(5),n=c.n(m),o=b['default']=l},function(a){a.exports=require('classnames')},function(){},,function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c.n(d),f=c(1),g=c.n(f),h=c(2),i=c.n(h),j=c(3);const k=(a)=>{const b=a.error,c=a.warning,e=a.handleSubmit;return Object(d.createElement)(j['default'],{error:b,warning:c,handleSubmit:e},Object(d.createElement)(h.Field,{name:'email',component:'input',type:'email',placeholder:'Email'}),Object(d.createElement)(h.Field,{name:'password',component:'input',type:'password',placeholder:'Password'}),Object(d.createElement)('div',{className:'didi-form__buttons'},Object(d.createElement)('button',{type:'submit'},'Sign Up')))};k.propTypes={error:g.a.string,handleSubmit:g.a.func,warning:g.a.string};var l=c(9),m=c.n(l),n=b['default']=k},,function(){},,,,,,,,,,,function(a,b,c){a.exports=c(7)}])});
//# sourceMappingURL=SignUp.js.map