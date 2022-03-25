(function(){"use strict";var t={4391:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-containe"},[e("router-view")],1)},i=[],o={},s=o,c=e(1001),u=(0,c.Z)(s,a,i,!1,null,null,null),l=u.exports,v=e(2809),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home-container"},[e("van-nav-bar",{attrs:{title:"跨客",fixed:""}}),e("div",{staticClass:"artbox"},t._l(t.artList,(function(t){return e("ArtInfo",{key:t.id,attrs:{title:t.title,author:t.aut_name,comNum:t.comm_count,date:t.pubdate,cover:t.cover}})})),1),e("van-tabbar",{attrs:{route:""}},[e("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"home-o"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{replace:"",to:"/my",icon:"contact"}},[t._v("我的")])],1)],1)},m=[],p=e(6198),d=(e(8975),e(7203)),h=e.n(d),b=h().create({baseURL:"https://www.escook.cn"}),_=b,y=function(t,n){return _.get("/articles",{params:{_page:t,_limit:n}})},g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"title-box"},[e("span",[t._v(t._s(t.title))]),1===t.cover.type?e("img",{staticClass:"thumb",attrs:{src:t.cover.images[0],alt:""}}):t._e()]),3===t.cover.type?e("div",{staticClass:"thumb-box"},t._l(t.cover.images,(function(t,n){return e("img",{key:n,staticClass:"thumb",attrs:{src:t,alt:""}})})),0):t._e()]},proxy:!0},{key:"label",fn:function(){return[e("div",{staticClass:"label-box"},[e("span",[t._v(t._s(t.author)+"    "+t._s(t.comNum)+"评论    发布日期:"+t._s(t.date))]),e("van-icon",{attrs:{name:"cross"}})],1)]},proxy:!0}])})],1)},w=[],x=(e(9653),{props:{title:{type:String,default:"标题"},author:{type:String,default:"匿名"},comNum:{type:[Number,String],default:0},date:{type:String,default:""},cover:{type:Object,default:function(){return{type:"0"}}}}}),k=x,C=(0,c.Z)(k,g,w,!1,null,null,null),Z=C.exports,O={name:"MyHome",data:function(){return{page:1,limit:11,artList:[]}},created:function(){this.initArticle()},methods:{initArticle:function(){var t=this;return(0,p.Z)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,y(t.page,t.limit);case 2:e=n.sent,r=e.data,t.artList=r;case 5:case"end":return n.stop()}}),n)})))()}},components:{ArtInfo:Z}},z=O,j=(0,c.Z)(z,f,m,!1,null,null,null),E=j.exports,$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-container"},[e("van-nav-bar",{attrs:{title:"跨客",fixed:""}}),e("div",{staticClass:"user-info"},[e("div",{staticClass:"user-profile"},[e("van-icon",{attrs:{name:"manager",size:"60",color:"#0164db"}}),e("p",[t._v("登录以发帖评论畅所欲言")]),e("van-button",{attrs:{round:"",type:"info"}},[t._v("圆形按钮")])],1),e("div",{staticClass:"user-item"},[e("router-link",{attrs:{to:"/mytiezi"}},[e("van-icon",{attrs:{name:"orders-o",size:"30",color:"#0164db"}}),e("h2",[t._v("我的帖子")]),e("van-icon",{attrs:{name:"arrow",id:"arrow"}})],1),e("router-link",{attrs:{to:"/mytiezi"}},[e("van-icon",{attrs:{name:"star-o",size:"30",color:"pink"}}),e("h2",[t._v("我的收藏")]),e("van-icon",{attrs:{name:"arrow",id:"arrow"}})],1),e("router-link",{attrs:{to:"/mytiezi"}},[e("van-icon",{attrs:{name:"comment-o",size:"30",color:"#ffcc84"}}),e("h2",[t._v("留言反馈")]),e("van-icon",{attrs:{name:"arrow",id:"arrow"}})],1)],1)]),e("van-tabbar",{attrs:{route:""}},[e("van-tabbar-item",{attrs:{replace:"",to:"/home",icon:"home-o"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{replace:"",to:"/my",icon:"contact"}},[t._v("我的")])],1)],1)},L=[],S={},A=S,N=(0,c.Z)(A,$,L,!1,null,null,null),I=N.exports,P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"intro-container"},[e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[e("van-swipe-item",[e("h2",[t._v(" 了解最新转行资讯 "),e("van-icon",{attrs:{name:"fire"}})],1)]),e("van-swipe-item",[e("h2",[t._v(" 探索行业入门经验 "),e("van-icon",{attrs:{name:"invitation"}})],1)]),e("van-swipe-item",[e("h2",[t._v(" 分享个人跨行经历 "),e("van-icon",{attrs:{name:"chat"}})],1)]),e("van-swipe-item",[e("h2",[t._v(" 获得你跨行的第一次助力 "),e("van-icon",{attrs:{name:"friends"}})],1)])],1),t._m(0),e("router-link",{attrs:{to:"/home"}},[e("van-button",{attrs:{round:"",type:"default",size:"large",color:" #0164db"}},[t._v("Let's Go!!!")])],1)],1)},R=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"logo-box"},[r("img",{attrs:{src:e(6949),alt:"",srcset:""}})])}],T={name:"Intro"},M=T,F=(0,c.Z)(M,P,R,!1,null,null,null),G=F.exports;r.Z.use(v.Z);var H=[{path:"/",redirect:"/info"},{path:"/info",component:G},{path:"/home",component:E},{path:"/my",component:I}],U=new v.Z({routes:H}),q=U,B=e(6140);e(1953);r.Z.use(B.ZP),r.Z.config.productionTip=!1,new r.Z({router:q,render:function(t){return t(l)}}).$mount("#app")},6949:function(t,n,e){t.exports=e.p+"img/logo.9804df1f.png"}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=t,function(){var t=[];e.O=function(n,r,a,i){if(!r){var o=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(l--,1);var u=a();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var a,i,o=r[0],s=r[1],c=r[2],u=0;if(o.some((function(n){return 0!==t[n]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(c)var l=c(e)}for(n&&n(r);u<o.length;u++)i=o[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},r=self["webpackChunkkuake"]=self["webpackChunkkuake"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4391)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.be240af6.js.map