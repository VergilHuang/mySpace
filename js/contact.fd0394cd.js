(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{"0673":function(t,n,i){"use strict";var s=i("589d"),o=i.n(s);o.a},"589d":function(t,n,i){},b8fa:function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"contact"},[t._m(0),i("section",[i("h3",[t._v("Workshop Position")]),i("div",{staticClass:"c-map shadower"},[i("GoogleMap")],1)])])},o=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("section",[i("h3",[t._v("Contact Informations")]),i("div",{staticClass:"contact-w"},[i("ul",{staticClass:"c-info-box"},[i("li",{staticClass:"c-line"},[i("span",{staticClass:"c-title"},[t._v("Address:")]),i("span",{staticClass:"c-text"},[t._v("新北市五股區新五路三段")])]),i("li",{staticClass:"c-line"},[i("span",{staticClass:"c-title"},[t._v("Phone:")]),i("span",{staticClass:"c-text"},[t._v("+886 978-260-192")])]),i("li",{staticClass:"c-line"},[i("span",{staticClass:"c-title"},[t._v("Job:")]),i("span",{staticClass:"c-text"},[t._v("不安分的前端工程師")])]),i("li",{staticClass:"c-line"},[i("span",{staticClass:"c-title"},[t._v("E-mail:")]),i("span",{staticClass:"c-text"},[t._v("zaq9716643@gmail.com")])]),i("li",{staticClass:"c-line"},[i("span",{staticClass:"c-title"},[t._v("Github:")]),i("span",{staticClass:"c-text"},[t._v("https://github.com/VergilHuang")])])])])])}],a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:15}},[i("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(n){t.infoWinOpen=!1}}},[i("div",{domProps:{innerHTML:t._s(t.infoContent)}})]),t._l(t.markers,(function(n,s){return i("gmap-marker",{key:s,attrs:{position:n.position},on:{click:function(i){return t.toggleInfoWindow(n,t.i)}}})}))],2)],1)},e=[],c={name:"GoogleMap",data:function(){return{center:{lat:25.091447,lng:121.447331},infoContent:"",infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}},markers:[{position:{lat:25.091447,lng:121.447331},infoContent:'\n          <div class="headline">\n            <div class="ct-icon">\n              <i class="fas fa-warehouse"></i>\n            </div>\n            <p class="ct-text">Vergil\'s Workshop.</p>\n          </div>\n          '}]}},mounted:function(){},methods:{toggleInfoWindow:function(t,n){this.infoWindowPos=t.position,this.infoContent=t.infoContent,this.currentMidx==n?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=n)}}},l=c,r=i("2877"),p=Object(r["a"])(l,a,e,!1,null,null,null),f=p.exports,u={name:"Contact",components:{GoogleMap:f}},d=u,h=(i("0673"),Object(r["a"])(d,s,o,!1,null,null,null));n["default"]=h.exports}}]);
//# sourceMappingURL=contact.fd0394cd.js.map