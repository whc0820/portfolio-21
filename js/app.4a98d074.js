(function(e){function n(n){for(var c,r,h=n[0],i=n[1],d=n[2],f=n[3]||[],l=0,b=[];l<h.length;l++)r=h[l],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&b.push(u[r][0]),u[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(n),o.push.apply(o,f);while(b.length)b.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var d=t[r];0!==u[d]&&(c=!1)}c&&(a.splice(n--,1),e=i(i.s=t[0]))}return 0===a.length&&(o.forEach((function(e){if(void 0===u[e]){u[e]=null;var n=document.createElement("link");i.nc&&n.setAttribute("nonce",i.nc),n.rel="prefetch",n.as="script",n.href=h(e),document.head.appendChild(n)}})),o.length=0),e}var c={},r={app:0},u={app:0},a=[],o=[];function h(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-08cd847a":"95adea3b","chunk-099b4d72":"44d57711","chunk-3718bde6":"ee2e3108","chunk-5066846a":"bacb592d","chunk-63863ab8":"56efbecd","chunk-6ab8fc10":"3a0788d4","chunk-7c7d2b06":"51346870","chunk-4e0aef5e":"4cf0a9f6","chunk-c996c6a8":"032c23aa","chunk-eba5b93c":"3296470d","chunk-1edf4bfa":"987c30f2","chunk-39714fa2":"1b5323f4","chunk-4d4c177e":"bf7852d3","chunk-482ab95e":"377f1efe","chunk-2101ca36":"c1c6f2a5","chunk-1b5d6778":"e318c91d","chunk-d89e432a":"6a2b8896","chunk-68efb48d":"252dc571"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-08cd847a":1,"chunk-099b4d72":1,"chunk-3718bde6":1,"chunk-5066846a":1,"chunk-63863ab8":1,"chunk-6ab8fc10":1,"chunk-7c7d2b06":1,"chunk-4e0aef5e":1,"chunk-c996c6a8":1,"chunk-eba5b93c":1,"chunk-1edf4bfa":1,"chunk-39714fa2":1,"chunk-4d4c177e":1,"chunk-482ab95e":1,"chunk-2101ca36":1,"chunk-1b5d6778":1,"chunk-d89e432a":1,"chunk-68efb48d":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-08cd847a":"1b70e648","chunk-099b4d72":"14ffcf27","chunk-3718bde6":"2a7329b9","chunk-5066846a":"ca1b55ad","chunk-63863ab8":"686b83d6","chunk-6ab8fc10":"6e651025","chunk-7c7d2b06":"73d44ecd","chunk-4e0aef5e":"5243a21b","chunk-c996c6a8":"2d795e3d","chunk-eba5b93c":"1c8a933d","chunk-1edf4bfa":"4fa836f7","chunk-39714fa2":"df12d641","chunk-4d4c177e":"8fc26cb1","chunk-482ab95e":"8fc26cb1","chunk-2101ca36":"4ec97ed2","chunk-1b5d6778":"8fc26cb1","chunk-d89e432a":"8fc26cb1","chunk-68efb48d":"8fc26cb1"}[e]+".css",u=i.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===c||d===u))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){h=f[o],d=h.getAttribute("data-href");if(d===c||d===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],l.parentNode.removeChild(l),t(a)},l.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=a);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=h(e);var f=new Error;o=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}u[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/portfolio-21/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var s=f,b=function(){return a.push([0,"chunk-vendors"]),t()}();n([[],{},0,["chunk-08cd847a","chunk-63863ab8","chunk-3718bde6","chunk-7c7d2b06","chunk-6ab8fc10","chunk-099b4d72","chunk-5066846a"]])})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("vue-page-transition",{attrs:{name:"overlay-right"}},[t("router-view")],1),t("TopNavigator")],1)},u=[],a=(t("d3b7"),t("3ca3"),t("ddb0"),t("ac1f"),t("5319"),function(){return t.e("chunk-5066846a").then(t.bind(null,"9433"))}),o={components:{TopNavigator:a},methods:{onClickName:function(){"/home"!=this.$router.currentRoute.path?this.$router.push({path:"/home"}):"#home"!=this.$route.hash?this.$router.replace({path:"/home",hash:"home"}):this.$router.replace({path:"/home",hash:""})}}},h=o,i=(t("5c0b"),t("2877")),d=Object(i["a"])(h,r,u,!1,null,null,null),f=d.exports,l=t("8c4f"),s=t("f0eb");c["default"].use(l["a"]),c["default"].use(s["default"]);var b=function(){return t.e("chunk-08cd847a").then(t.bind(null,"bb51"))},p=function(){return t.e("chunk-63863ab8").then(t.bind(null,"057a"))},k=function(){return t.e("chunk-099b4d72").then(t.bind(null,"2308"))},m=function(){return t.e("chunk-6ab8fc10").then(t.bind(null,"5147"))},v=function(){return t.e("chunk-3718bde6").then(t.bind(null,"a64c"))},g=function(){return t.e("chunk-7c7d2b06").then(t.bind(null,"afb0"))},y=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:b},{path:"/scheme-clerk-system",name:"Scheme Clerk System",component:p},{path:"/visitor-predictor",name:"Visitor Predictor",component:k},{path:"/led-visualizer",name:"Led Visualizer",component:m},{path:"/beauty-crawler",name:"Beauty Crawler",component:v},{path:"/daily-idiom",name:"Daily Idiom",component:g},{path:"*",redirect:"/"}],w=new l["a"]({routes:y}),E=w,O=t("5f5b"),j=t("b1e0");t("f9e3"),t("2dd8");c["default"].use(O["BootstrapVue"]),c["default"].use(j["a"]),c["default"].config.productionTip=!1,c["default"].prototype.$screen=c["default"].observable({width:window.innerWidth,height:window.innerHeight}),window.addEventListener("resize",(function(){c["default"].prototype.$screen.width=window.innerWidth,c["default"].prototype.$screen.height=window.innerHeight})),new c["default"]({router:E,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.4a98d074.js.map