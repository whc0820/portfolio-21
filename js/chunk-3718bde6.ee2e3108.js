(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3718bde6"],{"011d":function(e,t,a){e.exports=a.p+"img/beauty_crawler_image5.2c7b2829.png"},"07e7":function(e,t,a){e.exports=a.p+"img/beauty_crawler_mobile_image6.d60d0925.png"},"086c":function(e,t,a){e.exports=a.p+"img/beauty_crawler_image3.1b73335e.png"},"0ab2":function(e,t,a){e.exports=a.p+"img/beauty_crawler_image2.7c8af42c.png"},"0c12":function(e,t,a){"use strict";var r=a("2b0e"),n=new r["default"];t["a"]=n},1057:function(e,t,a){e.exports=a.p+"img/beauty_crawler_mobile_image1.6329ed25.png"},1593:function(e,t,a){e.exports=a.p+"img/beauty_crawler_mobile_image3.e48529a8.png"},"31ec":function(e,t,a){e.exports=a.p+"img/beauty_crawler_image1.3ff5713e.png"},"34a1":function(e,t,a){e.exports=a.p+"img/beauty_crawler_image7.3e438ac9.png"},3657:function(e,t,a){},"3fcd":function(e,t,a){e.exports=a.p+"img/beauty_crawler_mobile_image4.5a4177d5.png"},6719:function(e,t,a){"use strict";a("3657")},"720e":function(e,t,a){e.exports=a.p+"img/beauty_crawler_mobile_image2.660d6b03.png"},"875d":function(e,t,a){e.exports=a.p+"img/beauty_crawler_mobile_image5.249da1ee.png"},a64c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container",on:{scroll:e.onPageScroll}},[r("div",{staticClass:"section dark",attrs:{id:"section-home"}},[r("div",{staticClass:"section-max-width"},[e._m(0),r("div",{staticClass:"techs"},e._l(this.techs,(function(t,a){return r("span",{key:t+a},[e._v(" "+e._s(t)+" ")])})),0)])]),r("div",{staticClass:"section dark",attrs:{id:"section-overview"}},[r("div",{staticClass:"section-max-width"},[e._m(1),r("div",{staticClass:"image-slider"},[r("b-carousel",{attrs:{interval:2e3,"no-hover-pause":!0}},e._l(7,(function(e){return r("b-carousel-slide",{key:"slider-1-"+e,attrs:{"img-src":a("f1e0")("./beauty_crawler_image"+e+".png")}})})),1)],1),e._m(2)])]),r("div",{staticClass:"section dark",attrs:{id:"section-rwd"}},[r("div",{staticClass:"section-max-width"},[e._m(3),this.$screen.width>960?r("div",{staticClass:"mobile-frame-wrapper"},e._l(4,(function(e){return r("MobileFrame",{key:"mobile-frame-"+e,attrs:{imageWidth:180,imageHeight:380,imageName:"beauty-crawler/mobile/beauty_crawler_mobile_image"+e+".png",dark:!0}})})),1):r("b-carousel",{staticClass:"mobile-frame-slider",attrs:{interval:2e3}},[r("div",{staticClass:"camera"},[r("div",{staticClass:"circle"})]),e._l(4,(function(e){return r("b-carousel-slide",{key:"mobile-frame-"+e,attrs:{"img-src":a("e5de")("./beauty_crawler_mobile_image"+e+".png")}})}))],2)],1)]),r("ProjectNavSection",{attrs:{previousProjectName:"LED Visualizer",previousProjectPath:"led-visualizer",nextProjectName:"Daily Idiom",nextProjectPath:"daily-idiom"}}),r("Footer"),r("LeftLabel",{attrs:{url:"https://capoo-bot.herokuapp.com/kpop/"}}),r("ProgressBar",{attrs:{percentage:this.percentage}}),r("ScrollToTopIcon",{attrs:{percentage:this.percentage},nativeOn:{click:function(t){return e.onClickScrollToTopIcon()}}})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-title"},[a("span",[e._v("November, 2018")]),a("span",[e._v("Beauty Crawler")]),a("span",[e._v("Personal Project")]),a("span",[e._v("A tool that crawls the images from the forum, PTT Beauty community.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-header"},[a("span",[e._v("Overview")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project-description"},[e._v(" Beauty Crawler is a tool that crawls the images from the "),a("a",{staticClass:"link",attrs:{href:"https://www.ptt.cc/bbs/Beauty/",target:"_blank"}},[e._v("Taiwanese forum PTT Beauty community")]),e._v(" and relayout it with the web UI. We found out that there are many garbage posts. To filter it, user can set up specific keywords through the Line Bot, and the tool will only crawls images from the relative posts. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-header"},[a("span",[e._v("Responsive Design")])])}],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("0c12")),c=function(){return Promise.resolve().then(a.bind(null,"5f5b")).then((function(e){return e.BCarousel}))},o=function(){return a.e("chunk-4e0aef5e").then(a.bind(null,"b6b4"))},s=function(){return a.e("chunk-482ab95e").then(a.bind(null,"4f60"))},l=function(){return a.e("chunk-1edf4bfa").then(a.bind(null,"91df"))},u=function(){return a.e("chunk-c996c6a8").then(a.bind(null,"fd2d"))},m=function(){return a.e("chunk-eba5b93c").then(a.bind(null,"a132"))},p=function(){return a.e("chunk-39714fa2").then(a.bind(null,"0c47"))},g={components:{BCarousel:c,ProgressBar:o,MobileFrame:s,ProjectNavSection:l,Footer:u,ScrollToTopIcon:m,LeftLabel:p},data:function(){return{percentage:0,scrolledToBottomPage:!1,isEnteringNextProject:!1,techs:["CSS3","Express.js","Firebase","Heroku","HTML5","JavaScript","JQuery","Line Bot","Node.js"]}},mounted:function(){i["a"].$emit("page-scroll",0)},methods:{onPageScroll:function(e){var t=e.srcElement.scrollTop;this.percentage=t/(e.srcElement.scrollHeight-this.$screen.height)*100,i["a"].$emit("page-scroll",this.percentage)},onClickScrollToTopIcon:function(){if(this.percentage>=99){var e=document.querySelector(".page-container");e.scrollTo({top:0,behavior:"smooth"})}}},computed:{scrollToTopIconCursor:function(){return this.percentage>=95?"pointer":"default"},scrollToTopIconOpacity:function(){return this.percentage>=95?1:0}}},_=g,b=(a("6719"),a("2877")),f=Object(b["a"])(_,r,n,!1,null,"c48c6980",null);t["default"]=f.exports},d4d3:function(e,t,a){e.exports=a.p+"img/beauty_crawler_image6.2613da0c.png"},e5de:function(e,t,a){var r={"./beauty_crawler_mobile_image1.png":"1057","./beauty_crawler_mobile_image2.png":"720e","./beauty_crawler_mobile_image3.png":"1593","./beauty_crawler_mobile_image4.png":"3fcd","./beauty_crawler_mobile_image5.png":"875d","./beauty_crawler_mobile_image6.png":"07e7","./beauty_crawler_mobile_image7.png":"fb6c"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="e5de"},ef35:function(e,t,a){e.exports=a.p+"img/beauty_crawler_image4.9073c36e.png"},f1e0:function(e,t,a){var r={"./beauty_crawler_image1.png":"31ec","./beauty_crawler_image2.png":"0ab2","./beauty_crawler_image3.png":"086c","./beauty_crawler_image4.png":"ef35","./beauty_crawler_image5.png":"011d","./beauty_crawler_image6.png":"d4d3","./beauty_crawler_image7.png":"34a1"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id="f1e0"},fb6c:function(e,t,a){e.exports=a.p+"img/beauty_crawler_mobile_image7.3a9f701b.png"}},0,["chunk-482ab95e","chunk-c996c6a8","chunk-39714fa2","chunk-4e0aef5e","chunk-1edf4bfa","chunk-eba5b93c"]]);
//# sourceMappingURL=chunk-3718bde6.ee2e3108.js.map