(function(e){function t(t){for(var c,i,o=t[0],s=t[1],u=t[2],l=0,p=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],c=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var c={},n={app:0},a=[];function i(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=c,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(r,c,function(t){return e[t]}.bind(null,c));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/testTaskVue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"193b":function(e,t,r){"use strict";r("667e")},"1aea":function(e,t,r){"use strict";r("984a")},2032:function(e,t,r){},"2ca4":function(e,t,r){"use strict";r("4d4c")},3522:function(e,t,r){},"3aa8":function(e,t,r){"use strict";r("7172")},"3b4c":function(e,t,r){"use strict";r("3522")},"4d4c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),n={id:"app"},a={key:1,class:"productNotFound"},i=Object(c["f"])("h3",null,"Картина не найдена",-1);function o(e,t,r,o,s,u){var d=Object(c["r"])("ModalWindow"),l=Object(c["r"])("Header"),p=Object(c["r"])("Body"),b=Object(c["r"])("v-img"),f=Object(c["r"])("Footer");return Object(c["l"])(),Object(c["e"])("div",n,[Object(c["h"])(d,{product:o.state.currentProduct[0],onClick:o.hideModal,isVisible:o.state.isVisible},null,8,["product","onClick","isVisible"]),Object(c["h"])(l),0!==o.state.newArrayProducts.length?(Object(c["l"])(),Object(c["c"])(p,{key:0,products:o.state.newArrayProducts},null,8,["products"])):0===o.state.newArrayProducts.length?(Object(c["l"])(),Object(c["e"])("div",a,[i,Object(c["h"])(b)])):Object(c["d"])("",!0),Object(c["h"])(f)])}var s=r("2909"),u=(r("4de4"),r("d3b7"),r("2ca0"),{class:"wrapperHeader"}),d={class:"contentHeader"};function l(e,t,r,n,a,i){var o=Object(c["r"])("Nav"),s=Object(c["r"])("Search");return Object(c["l"])(),Object(c["e"])("header",u,[Object(c["f"])("div",d,[Object(c["h"])(o,{position:"header"}),Object(c["h"])(s,{products:r.products},null,8,["products"])])])}var p={class:"search"},b={class:"search__short"},f={class:"search__button"};function O(e,t,r,n,a,i){var o=Object(c["r"])("SuperButton");return Object(c["l"])(),Object(c["e"])("div",p,[Object(c["f"])("div",b,[Object(c["f"])("h3",{onClick:t[0]||(t[0]=function(e){return n.data.isCollapsed=!n.data.isCollapsed})},"Поиск")]),Object(c["f"])("div",{class:Object(c["j"])([{active:n.data.isCollapsed},"search__input"])},[Object(c["u"])(Object(c["f"])("input",{onInput:t[1]||(t[1]=function(e){return n.filteredProducts(e,n.data.textInput),n.filterProducts}),type:"text",autocomplete:"off","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.data.textInput=e}),placeholder:"Поиск по названию картины"},null,544),[[c["t"],n.data.textInput]])],2),Object(c["f"])("div",f,[Object(c["h"])(o,{title:"Найти","is-disable":!1,inCart:!1,class:""})])])}function j(e,t,r,n,a,i){var o=Object(c["r"])("Preloader");return r.isLoading?(Object(c["l"])(),Object(c["c"])(o,{key:1,class:"preloader"})):(Object(c["l"])(),Object(c["e"])("div",{key:0,class:Object(c["j"])(["button",{cardBtn:r.isCard,searchBtn:"Найти"===r.title}])},[r.isCard?(Object(c["l"])(),Object(c["e"])("button",{key:0,onClick:t[0]||(t[0]=function(t){return e.$emit("onDeleteCard")})},"В корзине")):(Object(c["l"])(),Object(c["e"])("button",{key:1,onClick:t[1]||(t[1]=function(t){return e.$emit("onAddCard")})},Object(c["s"])(r.title),1))],2))}var v={class:"lds-dual-ring"};function m(e,t,r,n,a,i){return Object(c["l"])(),Object(c["e"])("div",v)}var h={name:"Preloader"},g=(r("1aea"),r("6b0d")),_=r.n(g);const y=_()(h,[["render",m],["__scopeId","data-v-dd01c1be"]]);var P=y,w={name:"SuperButton",components:{Preloader:P},props:{title:{type:String,required:!0},isDisable:{type:Boolean,required:!0},isCard:{type:Boolean,required:!0},isLoading:{type:Boolean,required:!0}}};r("f260");const I=_()(w,[["render",j],["__scopeId","data-v-67e4d68c"]]);var C=I,k={name:"Search",components:{SuperButton:C},props:{products:{type:Array}},setup:function(e){var t=Object(c["p"])({textInput:"",filtProducts:[],visibility:!0,isCollapsed:!1}),r=function(){t.filtProducts=e.products.filter((function(e){return e.title.toLowerCase().startsWith(t.textInput.toLowerCase())}))},n=Object(c["i"])("filteredProducts");return{filteredProducts:n,filterProducts:r,data:t}}};r("e098");const S=_()(k,[["render",O],["__scopeId","data-v-e0af2fb2"]]);var B=S,x={class:"navigation"},M={class:"menu"},N=Object(c["g"])('<a class="menu__item" href="#" data-v-8702e1de>Каталог</a><a class="menu__item" href="#" data-v-8702e1de>Доставка</a><a class="menu__item" href="#" data-v-8702e1de>Оплата</a><a class="menu__item" href="#" data-v-8702e1de>Контакты</a><a class="menu__item" href="#" data-v-8702e1de>О компании</a>',5),A=[N],L=Object(c["g"])('<a class="navigation__item" href="#" data-v-8702e1de>Каталог</a><a class="navigation__item" href="#" data-v-8702e1de>Доставка</a><a class="navigation__item" href="#" data-v-8702e1de>Оплата</a><a class="navigation__item" href="#" data-v-8702e1de>Контакты</a><a class="navigation__item" href="#" data-v-8702e1de>О компании</a>',5);function H(e,t,r,n,a,i){return Object(c["l"])(),Object(c["e"])("nav",x,[Object(c["f"])("div",M,[Object(c["f"])("h3",{onClick:t[0]||(t[0]=function(e){return n.state.isCollapsed=!n.state.isCollapsed}),class:"menu__title"},"Меню"),Object(c["f"])("div",{class:Object(c["j"])([{activeHeader:"header"===n.props.position&&n.state.isCollapsed,activeFooter:"footer"===n.props.position&&n.state.isCollapsed},"menu__list"])},A,2)]),L])}var q={name:"Nav",props:{position:String},setup:function(e){var t=Object(c["p"])({isCollapsed:!1});return{state:t,props:e}}};r("3aa8");const D=_()(q,[["render",H],["__scopeId","data-v-8702e1de"]]);var $=D,V={name:"Header",components:{Nav:$,Search:B},props:{products:{type:Array}}};r("2ca4");const W=_()(V,[["render",l],["__scopeId","data-v-11c047d1"]]);var F=W,J={class:"wrapperBody"},T={class:"contentBody"};function R(e,t,r,n,a,i){var o=Object(c["r"])("ProductsSection");return Object(c["l"])(),Object(c["e"])("div",J,[Object(c["f"])("div",T,[Object(c["h"])(o,{products:r.products},null,8,["products"])])])}var z=function(e){return Object(c["o"])("data-v-057e6f79"),e=e(),Object(c["m"])(),e},U={class:"areaProducts"},E=z((function(){return Object(c["f"])("h1",{class:"areaProducts__title"},"Картины эпохи Возрождения",-1)})),K={class:"areaProducts__setOfCards"};function Z(e,t,r,n,a,i){var o=Object(c["r"])("CardProduct");return Object(c["l"])(),Object(c["e"])("section",U,[E,Object(c["f"])("div",K,[(Object(c["l"])(!0),Object(c["e"])(c["a"],null,Object(c["q"])(r.products,(function(e){return Object(c["l"])(),Object(c["c"])(o,{title:e.title,author:e.author,image:e.image,price:e.price,discount:e.discount,newPrice:e.newPrice,access:e.access,id:e.id,key:e.id},null,8,["title","author","image","price","discount","newPrice","access","id"])})),128))])])}var G=function(e){return Object(c["o"])("data-v-7f4bbf80"),e=e(),Object(c["m"])(),e},Q=["src"],X={class:"cardProduct__title"},Y={class:"cardProduct__title"},ee={key:0,class:"wrapperPurchase"},te={key:0,class:"wrapperPurchase_discountOn"},re={class:"oldPrice"},ce={class:"actualPrice__discountOn"},ne={key:1},ae={class:"actualPrice__discountOff"},ie={key:1,class:"wrapperPurchase"},oe=G((function(){return Object(c["f"])("h3",{class:"wrapperPurchase__state"},"Продана на аукционе",-1)})),se=[oe];function ue(e,t,r,n,a,i){var o=Object(c["r"])("SuperButton");return Object(c["l"])(),Object(c["e"])("div",{class:Object(c["j"])(["cardProduct",{disable:!r.access}])},[Object(c["f"])("img",{onClick:t[0]||(t[0]=function(e){return n.showModal(e,r.id)}),class:"cardProduct__photo",src:r.image},null,8,Q),Object(c["f"])("div",{onClick:t[1]||(t[1]=function(e){return n.showModal(e,r.id)})},[Object(c["f"])("h2",X,"«"+Object(c["s"])(r.title)+"»",1),Object(c["f"])("h2",Y,Object(c["s"])(r.author),1)]),r.access?(Object(c["l"])(),Object(c["e"])("div",ee,[r.discount?(Object(c["l"])(),Object(c["e"])("div",te,[Object(c["f"])("h6",re,Object(c["s"])(n.correctPrice(r.price)+" $"),1),Object(c["f"])("h3",ce,Object(c["s"])(n.correctPrice(r.newPrice)+" $"),1)])):(Object(c["l"])(),Object(c["e"])("div",ne,[Object(c["f"])("h3",ae,Object(c["s"])(n.correctPrice(r.price)+" $"),1)])),Object(c["h"])(o,{onOnAddCard:i.addCard,onOnDeleteCard:i.deleteCard,isCard:i.isCard(),isDisable:a.isDisable,isLoading:a.isLoading,title:"Купить"},null,8,["onOnAddCard","onOnDeleteCard","isCard","isDisable","isLoading"])])):(Object(c["l"])(),Object(c["e"])("div",ie,se))],2)}var de=r("1da1"),le=(r("96cf"),r("a9e3"),r("e9c4"),r("99af"),r("caad"),r("2532"),r("a15b"),r("fb6a"),r("ac1f"),r("1276"),r("5319"),r("b680"),{name:"CardProduct",components:{SuperButton:C},data:function(){return{isLoading:!1,isDisable:!1}},props:{title:{type:String},author:{type:String},image:{type:String},discount:{type:Boolean},price:{type:Number},newPrice:{type:Number},access:{type:Boolean},id:{type:String,required:!0}},methods:{test:function(e){return!e},addCard:function(){var e=this;return Object(de["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.isLoading=!0,e.isDisable=!0,setTimeout((function(){var t=null!==localStorage.getItem("productId")?JSON.parse(localStorage.getItem("productId")):"";localStorage.setItem("productId",JSON.stringify([].concat(Object(s["a"])(t),[e.id]))),e.isLoading=!1,e.isDisable=!1}),2e3);case 3:case"end":return t.stop()}}),t)})))()},deleteCard:function(){var e=this;return Object(de["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.isLoading=!0,e.isDisable=!0,setTimeout((function(){var t=JSON.parse(localStorage.getItem("productId")).filter((function(t){return t!==e.id}));localStorage.setItem("productId",JSON.stringify(t)),e.isLoading=!1,e.isDisable=!1}),2e3);case 3:case"end":return t.stop()}}),t)})))()},isCard:function(){var e=null!==localStorage.getItem("productId")?JSON.parse(localStorage.getItem("productId")):[];return e.includes(this.id)}},setup:function(){var e=function(e){return"number"!==typeof e?"NaN":e.toFixed(3).replace(/\d$/,"").replace(/(\d)(?=(?:\d{3})+\.)/g,"$1 ").split("").slice(0,-3).join("")},t=Object(c["i"])("showModal");return{showModal:t,correctPrice:e}}});r("802a");const pe=_()(le,[["render",ue],["__scopeId","data-v-7f4bbf80"]]);var be=pe,fe={name:"ProductsSection",components:{CardProduct:be},props:{products:{type:Array}}};r("b9c3");const Oe=_()(fe,[["render",Z],["__scopeId","data-v-057e6f79"]]);var je=Oe,ve={name:"Body",components:{ProductsSection:je},props:{products:{type:Array,required:!0}}};r("7b2c");const me=_()(ve,[["render",R],["__scopeId","data-v-fd8cab58"]]);var he=me,ge=function(e){return Object(c["o"])("data-v-bd79e206"),e=e(),Object(c["m"])(),e},_e={class:"wrapperFooter"},ye={class:"contentFooter"},Pe=ge((function(){return Object(c["f"])("div",{class:"contacts"},[Object(c["f"])("div",{class:"contacts__phone"}," +7 (812) 555-55-55 "),Object(c["f"])("div",{class:"contacts__address"}," г. Санкт-Петербург, ул. Ефимова, 3 ")],-1)}));function we(e,t,r,n,a,i){var o=Object(c["r"])("Nav");return Object(c["l"])(),Object(c["e"])("footer",_e,[Object(c["f"])("div",ye,[Object(c["h"])(o,{position:"footer"}),Pe])])}var Ie={name:"Footer",components:{Nav:$}};r("3b4c");const Ce=_()(Ie,[["render",we],["__scopeId","data-v-bd79e206"]]);var ke=Ce,Se=function(e){return Object(c["o"])("data-v-f3b642bc"),e=e(),Object(c["m"])(),e},Be={key:0,class:"wrapperModal"},xe={class:"modalWindow__title"},Me=Se((function(){return Object(c["f"])("div",{class:"modalWindow__description"},[Object(c["f"])("span",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ")],-1)})),Ne={class:"modalWindow__price"},Ae={key:0},Le={key:0},He={key:1},qe={key:1};function De(e,t,r,n,a,i){var o=Object(c["r"])("ImageSwitcher");return r.isVisible?(Object(c["l"])(),Object(c["e"])("div",Be,[Object(c["f"])("div",{class:"modalWindow",onClick:t[0]||(t[0]=Object(c["v"])((function(t){return e.$emit("onHideModal")}),["stop"]))},[Object(c["f"])("div",xe,[Object(c["f"])("h2",null,Object(c["s"])(r.product.title),1)]),Object(c["h"])(o),Me,Object(c["f"])("div",Ne,[r.product.access?(Object(c["l"])(),Object(c["e"])("div",Ae,[r.product.discount?r.product.discount?(Object(c["l"])(),Object(c["e"])("h3",He,Object(c["s"])(n.correctPrice(r.product.newPrice))+" $",1)):Object(c["d"])("",!0):(Object(c["l"])(),Object(c["e"])("h3",Le,Object(c["s"])(n.correctPrice(r.product.price))+" $",1))])):(Object(c["l"])(),Object(c["e"])("h3",qe," Продана на аукционе "))])])])):Object(c["d"])("",!0)}var $e={class:"switcher"},Ve={class:"switcher__image"};function We(e,t,r,n,a,i){return Object(c["l"])(),Object(c["e"])("div",$e,[Object(c["f"])("div",{onMouseover:t[0]||(t[0]=function(e){return n.state.isHover=!0}),onMouseleave:t[1]||(t[1]=function(e){return n.state.isHover=!1}),class:Object(c["j"])([{hover:n.state.isHover},"switcher__leftBlock"]),onClick:t[2]||(t[2]=function(){return n.leftImage&&n.leftImage.apply(n,arguments)})},null,34),Object(c["f"])("div",Ve,[Object(c["f"])("span",null,Object(c["s"])(n.state.listImage[n.state.currentImage]),1)]),Object(c["f"])("div",{onMouseover:t[3]||(t[3]=function(e){return n.state.isHover=!0}),onMouseleave:t[4]||(t[4]=function(e){return n.state.isHover=!1}),class:Object(c["j"])([{hover:n.state.isHover},"switcher__rightBlock"]),onClick:t[5]||(t[5]=function(){return n.rightImage&&n.rightImage.apply(n,arguments)})},null,34)])}var Fe={name:"ImageSwitcher",props:{image:Array},setup:function(e){var t=Object(c["p"])({isHover:!1,currentImage:0,listImage:[1,2,3,4,5,6,7]}),r=function(){0!==t.currentImage?t.currentImage-=1:t.currentImage=t.listImage.length-1},n=function(){t.currentImage!==t.listImage.length-1?t.currentImage+=1:t.currentImage=0};return{state:t,leftImage:r,rightImage:n}}};r("193b");const Je=_()(Fe,[["render",We],["__scopeId","data-v-20498769"]]);var Te=Je,Re={name:"ModalWindow",components:{ImageSwitcher:Te},props:{isVisible:{type:Boolean,default:!1},product:{type:Array,required:!0}},setup:function(e){var t=function(e){return"number"!==typeof e?"NaN":e.toFixed(3).replace(/\d$/,"").replace(/(\d)(?=(?:\d{3})+\.)/g,"$1 ").split("").slice(0,-3).join("")};return{correctPrice:t}}};r("c8b2");const ze=_()(Re,[["render",De],["__scopeId","data-v-f3b642bc"]]);var Ue=ze,Ee={name:"App",components:{ModalWindow:Ue,Body:he,Footer:ke,Header:F},setup:function(){var e=Object(c["p"])({isVisible:!1,_products:[{id:"1",title:"Рождение Венеры",author:"Сандро Боттичелли",discount:!0,access:!0,image:"https://i.ibb.co/JBvK6Lh/image1.png",price:2e6,newPrice:1e6},{id:"2",title:"Тайная вечеря",author:"Леонардо да Винчи",discount:!1,access:!0,image:"https://i.ibb.co/zx7zyk8/image2.png",price:3e6,newPrice:0},{id:"3",title:"Сотворение Адама",author:"Микеланджело",discount:!0,access:!0,image:"https://i.ibb.co/vh42Vw8/image3.png",price:6e6,newPrice:5e6},{id:"4",title:"Урок анатомии",author:"Рембрандт",discount:!0,access:!1,image:"https://i.ibb.co/B2W4Zgd/image4.png",price:3e6,newPrice:0}],currentProduct:[],searchText:"",newArrayProducts:[]}),t=function(t,r){e.newArrayProducts=r?e._products.filter((function(e){return e.title.toLowerCase().startsWith(r.toLowerCase())})):Object(s["a"])(e._products)},r=function(t,r){e.currentProduct=Object(s["a"])(e._products).filter((function(e){return e.id===r})),e.isVisible=!0},n=function(){e.currentProduct=[],e.isVisible=!1};return Object(c["k"])((function(){e.newArrayProducts=Object(s["a"])(e._products)})),Object(c["n"])("filteredProducts",t),Object(c["n"])("showModal",r),{filteredProducts:t,showModal:r,hideModal:n,state:e}}};r("cdac");const Ke=_()(Ee,[["render",o]]);var Ze=Ke;Object(c["b"])(Ze).mount("#app")},"5b70":function(e,t,r){},"667e":function(e,t,r){},7172:function(e,t,r){},"7b2c":function(e,t,r){"use strict";r("c816")},"802a":function(e,t,r){"use strict";r("ee44")},9309:function(e,t,r){},"984a":function(e,t,r){},"99a6":function(e,t,r){},b9c3:function(e,t,r){"use strict";r("2032")},c816:function(e,t,r){},c8b2:function(e,t,r){"use strict";r("f74c")},cdac:function(e,t,r){"use strict";r("5b70")},e098:function(e,t,r){"use strict";r("9309")},ee44:function(e,t,r){},f260:function(e,t,r){"use strict";r("99a6")},f74c:function(e,t,r){}});
//# sourceMappingURL=app.1990be76.js.map