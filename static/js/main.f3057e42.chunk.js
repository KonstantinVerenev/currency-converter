(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{23:function(e,t,n){e.exports={preloader:"Preloader_preloader__3r6Rz"}},50:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(4),r=n.n(a),s=n(6),o=n.n(s),u=n(25),i=n(11),l=n(3),j=n(22),b="3fdb28eba3cca5b4d3dea82d",f=n.n(j).a.create({baseURL:"https://v6.exchangerate-api.com/v6"}),O=function(){return f.get("/".concat(b,"/latest/USD")).then((function(e){return e.data}))},p=function(e,t){return f.get("/".concat(b,"/pair/").concat(e,"/").concat(t)).then((function(e){return e.data}))},d=n(24),v=(n(50),n(1)),h=function(e){var t=e.currencyOptions,n=e.selectedCurrency,c=e.onChangeCurrency,a=e.amount,r=e.onChangeAmount,s={value:n,label:Object(v.jsxs)("div",{className:"label",children:[Object(v.jsx)("div",{children:n}),Object(v.jsx)("img",{src:"./img/flags/".concat(n,".png"),alt:"flag"})]})},o=t.map((function(e){return{value:e,label:Object(v.jsxs)("div",{className:"label",children:[" ",Object(v.jsx)("div",{children:e})," ",Object(v.jsx)("img",{src:"./img/flags/".concat(e,".png"),alt:"flag"})]})}}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("fieldset",{className:"CurrencyInputContainer",children:[Object(v.jsx)("input",{className:"CurrencyInput",type:"number",value:a,onChange:r,placeholder:"0"}),Object(v.jsx)(d.a,{className:"currencySelect",value:s,onChange:c,options:o})]})})},g=n(23),m=n.n(g),y=n.p+"static/media/preloader.5788b05c.svg",x=function(){return Object(v.jsx)("img",{className:m.a.preloader,src:y,alt:"preloader"})},C=function(){var e,t,n=Object(c.useState)([]),a=Object(l.a)(n,2),r=a[0],s=a[1],j=Object(c.useState)(),b=Object(l.a)(j,2),f=b[0],d=b[1],g=Object(c.useState)(),m=Object(l.a)(g,2),y=m[0],C=m[1],S=Object(c.useState)(),_=Object(l.a)(S,2),k=_[0],N=_[1],w=Object(c.useState)(),A=Object(l.a)(w,2),M=A[0],E=A[1],I=Object(c.useState)(!0),J=Object(l.a)(I,2),R=J[0],U=J[1],z=Object(c.useState)(!1),B=Object(l.a)(z,2),D=B[0],F=B[1];R?(e=Math.floor(100*M)/100,t=Math.floor(M*k*100)/100):(t=Math.floor(100*M)/100,e=Math.floor(M/k*100)/100),Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,s(Object(u.a)(Object.keys(t.conversion_rates))),d(Object.keys(t.conversion_rates)[0]),C(Object.keys(t.conversion_rates)[1]),N(t.conversion_rates[Object.keys(t.conversion_rates)[1]]),F(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){if(f&&y){var e=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(f,y);case 2:t=e.sent,N(t.conversion_rate);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[f,y]);return D?Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(h,{currencyOptions:r,selectedCurrency:f,onChangeCurrency:function(e){d(e.value)},amount:e,onChangeAmount:function(e){E(e.target.value),U(!0)}}),Object(v.jsx)(h,{currencyOptions:r,selectedCurrency:y,onChangeCurrency:function(e){C(e.value)},amount:t,onChangeAmount:function(e){E(e.target.value),U(!1)}})]}):Object(v.jsx)(x,{})};r.a.render(Object(v.jsx)(C,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f3057e42.chunk.js.map