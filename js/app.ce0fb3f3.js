(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({contact:"contact",portfolio:"portfolio",resume:"resume"}[t]||t)+"."+{contact:"eda8a414",portfolio:"d91e1b32",resume:"186cea16"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={contact:1,portfolio:1,resume:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({contact:"contact",portfolio:"portfolio",resume:"resume"}[t]||t)+"."+{contact:"ee63c20c",portfolio:"72dc1d93",resume:"9a23459b"}[t]+".css",s=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"016a":function(t,e,n){},1257:function(t,e,n){t.exports=n.p+"img/vergil_photo.5192dd11.jpg"},2484:function(t,e,n){"use strict";var a=n("016a"),i=n.n(a);i.a},"2d98":function(t,e,n){},"3ffc":function(t,e,n){"use strict";var a=n("2d98"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a,i,s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-cover"},[n("Amoeba",{staticClass:"bg-cover-amoeba"}),n("div",{attrs:{id:"app"}},[n("PersonInfo"),n("div",{staticClass:"content"},[n("Navigation"),n("div",{staticClass:"dynamic-content box-border shadower",attrs:{id:"nav"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1),n("Indicator")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"nav box-border shadower",attrs:{id:"navigationBar"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"home-btn",attrs:{exact:"",tag:"a",to:"/"}},[n("i",{staticClass:"fas fa-home"})]),t.desktopSize>680?n("div",{staticClass:"nav-1"},[n("router-link",{staticClass:"router-link",attrs:{exact:"",tag:"a",to:"/resume"},nativeOn:{click:function(e){return t.beActive(e)}}},[t._v("Resume")]),n("router-link",{staticClass:"router-link",attrs:{exact:"",tag:"a",to:"/portfolio"},nativeOn:{click:function(e){return t.beActive(e)}}},[t._v("Portfolio")]),n("router-link",{staticClass:"router-link",attrs:{exact:"",tag:"a",to:"/contact"},nativeOn:{click:function(e){return t.beActive(e)}}},[t._v("Contact")])],1):t._e(),n("div",{staticClass:"nav-right"},[t.desktopSize<=680?n("a",{staticClass:"menu-btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleMenu(e)}}},[t._m(0)]):t._e(),t._m(1)])],1)]),n("div",{staticClass:"menu"},[t.desktopSize<=680?n("div",{staticClass:"menu-lists shadower",attrs:{id:"menu-panel"}},[n("router-link",{staticClass:"menu-item",attrs:{exact:"",to:"/"},nativeOn:{click:function(e){return t.beActive(e)}}},[t._v("About")]),n("router-link",{staticClass:"menu-item",attrs:{exact:"",to:"/resume"},nativeOn:{click:function(e){return t.beActive(e)}}},[t._v("Resume")]),n("router-link",{staticClass:"menu-item",attrs:{exact:"",to:"/portfolio"},nativeOn:{click:function(e){return t.beActive(e)}}},[t._v("Portfolio")]),n("router-link",{staticClass:"menu-item",attrs:{exact:"",to:"/contact"},nativeOn:{click:function(e){return t.beActive(e)}}},[t._v("Contact")])],1):t._e()])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-btn-ract"},[n("i",{staticClass:"fas fa-bars"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"hire-btn",attrs:{href:"mailto:zaq9716643@gmail.com",title:"Hire me"}},[n("div",{staticClass:"hire-ract"},[t._v("\n\t\t\t\t\t\tHire Me\n\t\t\t\t\t\t"),n("div",{staticClass:"fly-icon"},[n("i",{staticClass:"fas fa-paper-plane"})])])])}],u=n("186d"),d=n.n(u),f={name:"Navigation",data:function(){return{desktopSize:document.body.clientWidth,menu_opened:!1}},beforeMount:function(){window.onresize=this._detectSize},methods:{beActive:function(){this.menu_opened&&this.toggleMenu(),this.desktopSize<=680&&d()(document.getElementById("navigationBar"),{speed:1200})},toggleMenu:function(){var t=document.getElementById("menu-panel");this.menu_opened?(t.style.height="0",t.style.top="10px"):(t.style.height="244px",t.style.top="30px"),this.menu_opened=!this.menu_opened},_detectSize:function(){this.desktopSize=document.body.clientWidth,this.desktopSize<=680&&(this.menu_opened=!1)}}},p=f,v=n("2877"),m=Object(v["a"])(p,c,l,!1,null,null,null),g=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"person-info box-border shadower"},[t._m(0),t._m(1),n("div",{staticClass:"vg-info-container"},[n("div",{staticClass:"vg-info-box"},[n("div",{staticClass:"vg-info"},[t._m(2),n("span",{staticClass:"info-title"},[t._v("Name")]),n("p",{staticClass:"info"},[t._v(t._s(t.name))])]),n("div",{staticClass:"vg-info"},[t._m(3),n("span",{staticClass:"info-title"},[t._v("Birthday")]),n("p",{staticClass:"info"},[t._v(t._s(t.birthday))])])]),n("div",{staticClass:"vg-info-box"},[n("div",{staticClass:"vg-info"},[t._m(4),n("span",{staticClass:"info-title"},[t._v("E-mail")]),n("p",{staticClass:"info"},[t._v(t._s(t.email))])]),n("div",{staticClass:"vg-info"},[t._m(5),n("span",{staticClass:"info-title"},[t._v("Github")]),n("p",{staticClass:"info"},[n("a",{attrs:{href:"https://github.com/VergilHuang",title:"Github link"}}),t._v("\n          "+t._s(t.github)+"\n        ")])])])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"n-intro"},[n("h3",{staticClass:"n-name"},[t._v("Vergil Huang")]),n("h4",{staticClass:"n-subtitle"},[t._v("Creative Designer")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo-container"},[a("img",{staticClass:"vg-photo",attrs:{src:n("1257"),alt:"Vergil's Photo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"info-icon"},[n("i",{staticClass:"far fa-user"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"info-icon"},[n("i",{staticClass:"far fa-calendar-alt"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"info-icon"},[n("i",{staticClass:"far fa-envelope"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"info-icon"},[n("i",{staticClass:"fab fa-github"})])}],b={name:"PersonInfo",data:function(){return{name:"Vergil",birthday:"1989.01.06",email:"zaq9716643@gmail.com",github:"https://github.com/VergilHuang"}}},C=b,k=Object(v["a"])(C,h,_,!1,null,null,null),y=k.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slowfade"}},[t.show?a("div",{staticClass:"mask-view"},[a("div",{staticClass:"indicator-box",class:{fade:t.turnFade}},[a("div",{staticClass:"lds-dual-ring-outer"},[a("div",{staticClass:"lds-dual-ring"},[a("img",{attrs:{src:n("d02b"),alt:"animate icon"}})])])])]):t._e()])},S=[],w={name:"Indicator",data:function(){return{turnFade:!1,show:!0}},mounted:function(){var t=this;setTimeout((function(){t.turnFade=!0}),1e3),setTimeout((function(){t.show=!1}),1300)},components:{}},O=w,A=(n("2484"),Object(v["a"])(O,x,S,!1,null,null,null)),E=A.exports,j={name:"Amoeba",props:["sometext"],render:function(){var t=arguments[0],e=this;return t("div",{class:"amoeba"},[e.$slots.default])}},P=j,$=(n("3ffc"),Object(v["a"])(P,a,i,!1,null,null,null)),z=$.exports,M={name:"App",components:{Navigation:g,PersonInfo:y,Indicator:E,Amoeba:z}},B=M,D=(n("5c0b"),Object(v["a"])(B,r,o,!1,null,null,null)),I=D.exports,T=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[t._m(0),n("section",[n("h1",[t._v("My Service")]),n("div",t._l(t.services_data,(function(t){return n("Services",{key:t.id,attrs:{service:t}})})),1)]),n("section",[n("h1",[t._v("My Skills")]),n("div",t._l(t.skills_data,(function(t){return n("SkillBox",{key:t.id,attrs:{catename:t.cate_name,skills:t.skills}})})),1)])])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("About me")]),n("p",{staticClass:"about-text"},[t._v("嗨，我是Vergil。")]),n("p",{staticClass:"about-text"},[t._v("\n      2008年，大學就讀工業與系統工程科系。在一次C語言的課程中喜歡上了編程這件事，後來修習了自動化倉儲系統編程與自走車設計並參加了校際比賽獲得第三名，也從此喜歡上了編程的道路。\n    ")]),n("p",{staticClass:"about-text"},[t._v("\n      2015年，在台北市一家科技公司擔任\n      "),n("b",[t._v("iOS工程師")]),t._v("，跟著小組成員一起設計了兩款基於藍牙功能，用於自動同步Web\n      database資料與硬體信標資料的企業版App，與一款基於藍牙信標的定點公車服務App。第二年開始負責產品部門管理工作，同時全面接手網站系統開發部門的\n      "),n("b",[t._v("網頁前端開發工作")]),t._v("與部分的後端架構設計，進修過SSCP網路資訊安全課程，了解網路攻防基礎。開發過\n      "),n("a",{staticClass:"t-link",attrs:{href:"https://taotalk.tycg.gov.tw/",target:"_blank"}},[t._v("桃園市市政信箱網站")]),t._v("、\n      "),n("a",{staticClass:"t-link",attrs:{href:"https://crpd.sfaa.gov.tw/",target:"_blank"}},[t._v("CRPD身心障礙者權利公約網站")]),t._v("與部分相關的內部系統。\n    ")]),n("p",{staticClass:"about-text"},[t._v("\n      2019年，在吉聯數位擔任前端團隊主管，依照產品需求，打造了可高效處理上百支外觀結構各異的web\n      app專案架構，實現所有資源檔獨立且統一管理，大大減少了佈署成本與專案管理成本。\n    ")])])}],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service box-border shadower"},[n("div",{staticClass:"icon"},[n("i",{class:"fas fa-"+t.service.icon})]),n("h5",[t._v(t._s(t.service.title))]),n("p",[t._v(t._s(t.service.text))])])},L=[],V={name:"ServiceComponent",props:["service"]},F=V,R=Object(v["a"])(F,H,L,!1,null,null,null),G=R.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-box"},[n("h4",{staticClass:"category"},[t._v(t._s(t.catename))]),t._l(t.skills,(function(t){return n("Skill",{key:t.id,attrs:{skill:t}})}))],2)},q=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h6",{staticClass:"subject"},[t._v(t._s(t.skill.title))]),n("div",{staticClass:"percentage",attrs:{"data-percentage":t.percentage}},[n("div",{staticClass:"skill-percen",style:"width:"+t.percentage+";"})])])},Y=[],K=n("1209"),U={name:"Skill",data:function(){return{skillData:{percentage:0},percentage:"0%"}},mounted:function(){var t=this;Object(K["a"])({targets:t.skillData,percentage:t.skill.percentage,round:1,duration:1500,easing:"cubicBezier(0.515, 0.005, 0.52, 1.005)",update:function(){t.percentage=t.skillData.percentage+"%"}})},props:["skill"]},Z=U,X=Object(v["a"])(Z,Q,Y,!1,null,null,null),tt=X.exports,et={name:"SkillBox",props:["skills","catename"],components:{Skill:tt}},nt=et,at=Object(v["a"])(nt,J,q,!1,null,null,null),it=at.exports,st={name:"About",data:function(){return{services_data:[{id:1,icon:"desktop",title:"Web Development",text:"Web開發經驗兩年，曾獨立完成兩個中型專案，進修過SSCP網路安全課程。擅長RWD技術，設計自適應網站。熟知網頁構成技術，擅長優化網頁，優化首頁生成速度與網頁的瀏覽效率。使用Work-flow優化工具，標準化上線流程。"},{id:2,icon:"people-carry",title:"Cross-functional Cooperation",text:"跨領域合作能力，擁有行動端與網頁前端技術能力並且熟知後端與網路架構運行原理。曾兼任技術型PM，可勝任大部分跨部門的合作工作。"},{id:3,icon:"universal-access",title:"Accessbility Design",text:"熟知無障礙網站設計流程，為無障礙人士設計好用的網站。設計的網站曾通過國家2A等級無障礙標章。"},{id:4,icon:"eye",title:"Grouth Hacker",text:"喜歡研究分析產品的變更與流量變化的關係。依照使用者被動資料反饋，與團隊激盪假定優化或變更重點。經過週期性實驗，以低成本換取明顯的流量成長率。"}],skills_data:[{id:1,cate_name:"Front-end",skills:[{id:1,title:"Javascript",percentage:92},{id:2,title:"HTML5",percentage:88},{id:3,title:"CSS (SCSS)",percentage:93}]},{id:2,cate_name:"Front-end Framework",skills:[{id:1,title:"Bootstrap",percentage:83},{id:2,title:"W3CSS",percentage:85},{id:3,title:"React",percentage:92},{id:4,title:"Angular",percentage:73},{id:5,title:"Vue",percentage:79},{id:6,title:"jQuery",percentage:92}]},{id:3,cate_name:"Mobile Phone",skills:[{id:1,title:"Objective-C",percentage:70},{id:2,title:"Swift",percentage:30},{id:3,title:"Java",percentage:62}]},{id:4,cate_name:"Version Control",skills:[{id:1,title:"Git",percentage:92},{id:2,title:"SVN",percentage:58},{id:3,title:"Harvest",percentage:50}]},{id:5,cate_name:"Back-end",skills:[{id:1,title:"Java",percentage:62},{id:2,title:"SQL",percentage:58},{id:3,title:"Python",percentage:48},{id:4,title:"Golang",percentage:28}]},{id:6,cate_name:"Systems",skills:[{id:1,title:"Windows",percentage:73},{id:2,title:"Mac (Linux)",percentage:95},{id:3,title:"Ubuntu (Linux)",percentage:78}]}]}},components:{Services:G,SkillBox:it}},rt=st,ot=(n("f26d"),Object(v["a"])(rt,N,W,!1,null,null,null)),ct=ot.exports;s["a"].use(T["a"]);var lt=new T["a"]({base:"/",routes:[{path:"/",name:"About",component:ct},{path:"/resume",name:"Resume",component:function(){return n.e("resume").then(n.bind(null,"1ba2"))}},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("portfolio").then(n.bind(null,"c9e5"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"*",redirect:"/"}]}),ut=n("2f62");s["a"].use(ut["a"]);var dt=new ut["a"].Store({state:{}}),ft=n("755e");s["a"].config.productionTip=!1;var pt="AIza",vt="SyAY4",mt="QdZYKD4",gt="2ebf4e",ht="eADYQ",_t="s-zWwm2",bt="rRFtI";s["a"].use(ft,{load:{key:pt+vt+mt+gt+ht+_t+bt}}),new s["a"]({router:lt,store:dt,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("e332"),i=n.n(a);i.a},d02b:function(t,e,n){t.exports=n.p+"img/logo-01.73c45d79.png"},e332:function(t,e,n){},e9ad:function(t,e,n){},f26d:function(t,e,n){"use strict";var a=n("e9ad"),i=n.n(a);i.a}});
//# sourceMappingURL=app.ce0fb3f3.js.map