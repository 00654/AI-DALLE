(function(){"use strict";var n={5100:function(n,t,e){var r=e(4220),o=e(9812),i=e.p+"img/logo.c463b802.png";const a=(0,o._)("img",{alt:"Vue logo",src:i},null,-1);function u(n,t,e,r,i,u){const c=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o.Wm)(c,{msg:"免费AI图片生成器"})],64)}var c=e(5893);const l=n=>((0,o.dD)("data-v-14bf9591"),n=n(),(0,o.Cn)(),n),s={class:"container"},p=l((()=>(0,o._)("p",null," 欢迎加入qq群（qq群号:337087493）进行学习交流探讨 ",-1))),f=l((()=>(0,o._)("p",null," 请在下面文本框输入详细的描述性文字（prompt）来生成你想要的图片 ",-1))),g={key:0},d=["src"],m=["src"];function h(n,t,i,a,u,l){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("h1",null,(0,c.zw)(i.msg),1),p,f,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>u.prompt=n),placeholder:"",style:{width:"1200px",height:"20px"}},null,512),[[r.nr,u.prompt]]),(0,o._)("button",{onClick:t[1]||(t[1]=(...n)=>l.generate&&l.generate(...n))},"生成图片"),u.answer?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",g,"Loading...")),u.answer?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("img",{key:1,class:"loading",src:e(6053),alt:"loading GIF"},null,8,d)),(0,o._)("img",{class:"image",src:u.image},null,8,m)])}var v=e(4643);const w=v.Z.create({baseURL:"/api",timeout:1e6});var b={name:"HelloWorld",props:{msg:String},data(){return{prompt:"",answer:1,image:""}},methods:{async getPicture(){this.answer=0;try{w.get("/image",{params:{prompt:this.prompt}}).then((n=>{window.console.log(n.data.datas),this.image="data:image/png;base64,"+n.data.datas,window.console.log(this.image),this.answer=1}))}catch(n){this.answer="Error! Could not reach the API. "+n}},generate(){window.console.log(this.prompt),this.getPicture()}},mounted(){}},y=e(8998);const _=(0,y.Z)(b,[["render",h],["__scopeId","data-v-14bf9591"]]);var O=_,k={name:"App",components:{HelloWorld:O}};const x=(0,y.Z)(k,[["render",u]]);var j=x;(0,r.ri)(j).mount("#app")},6053:function(n,t,e){n.exports=e.p+"img/loading.575b6136.gif"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==n[t]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var s=c(e)}for(t&&t(r);l<a.length;l++)i=a[l],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},r=self["webpackChunkvue_01"]=self["webpackChunkvue_01"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5100)}));r=e.O(r)})();
//# sourceMappingURL=app.9709cb55.js.map