(function(e){function t(t){for(var r,c,s=t[0],i=t[1],l=t[2],d=0,f=[];d<s.length;d++)c=s[d],a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("9f4d")},"49f8":function(e,t,n){var r={"./en.json":"edd4","./nl.json":"a625","./pt.json":"5d67"};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],c=r["default"].extend({name:"App"}),s=c,i=(n("034f"),n("2877")),l=Object(i["a"])(s,a,o,!1,null,null,null),u=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("Header"),n("Main"),n("Footer")],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"white--text",attrs:{app:"",color:"primary"}},[n("v-toolbar-title",[e._v("Currency Converter")]),n("v-spacer"),n("ThemeSelector"),n("LanguageSelector")],1)},b=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",fab:""}},"v-btn",a,!1),r),[n("v-icon",{attrs:{color:"white"}},[e._v("\n          mdi-translate\n        ")])],1)]}}])},[n("v-list",{attrs:{rounded:""}},[n("v-list-item-group",{model:{value:e.$i18n.locale,callback:function(t){e.$set(e.$i18n,"locale",t)},expression:"$i18n.locale"}},e._l(e.langs,(function(t,r){return n("v-list-item",{key:r,attrs:{value:t.id}},[n("v-list-item-title",{domProps:{textContent:e._s(t.title)},model:{value:t.id,callback:function(n){e.$set(t,"id",n)},expression:"item.id"}})],1)})),1)],1)],1)],1)},y=[],g={name:"LanguageSelector",data:function(){return{langs:[{id:"nl",title:"Dutch"},{id:"en",title:"English"},{id:"pt",title:"Português"}]}}},C=g,_=Object(i["a"])(C,h,y,!1,null,null,null),x=_.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.toggleDarkTheme()}}},[n("v-icon",{attrs:{color:"white"}},[e._v("mdi-theme-light-dark")])],1)},k=[],R={name:"ThemeSelector",methods:{toggleDarkTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},j=R,O=Object(i["a"])(j,w,k,!1,null,null,null),E=O.exports,T={name:"Header",components:{ThemeSelector:E,LanguageSelector:x}},$=T,S=Object(i["a"])($,p,b,!1,null,null,null),V=S.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"white--text",attrs:{color:"primary",absolute:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("span",[e._v("\n      "+e._s((new Date).getFullYear()+" - "+e.$t("madeWith"))+"\n      "),n("v-icon",{attrs:{color:"red"}},[e._v("mdi-heart")]),e._v(" "+e._s(e.$t("by"))+"\n      "),n("a",{staticClass:"white--text",attrs:{href:"https://www.linkedin.com/in/victor-pinheiro-4a469339/",target:"_blank"}},[n("strong",[e._v("Victor Pinheiro")])])],1)])],1)},U=[],F={name:"Footer"},N=F,L=Object(i["a"])(N,A,U,!1,null,null,null),P=L.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{cols:"12",sm:"2"}}),n("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8"}},[n("v-card",{staticClass:"pa-5 align-center",attrs:{rounded:"lg","min-height":"50vh"}},[n("p",{staticClass:"text-h4 py-5"},[n("b",[e._v(e._s(e.$t("appTitle")))])]),n("v-tabs",{attrs:{"center-active":"",centered:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t,r){return n("v-tab",{key:r},[e._v("\n          "+e._s(e.$t(t.name))+"\n        ")])})),1),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(e,t){return n("v-tab-item",{key:t},[n(e.component,{tag:"v-card-text"})],1)})),1)],1),n("Countdown",{staticClass:"py-5"})],1),n("v-col",{attrs:{cols:"12",sm:"2"}})],1)},M=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"countdown"},[n("small",[e._v("\n  "+e._s(e.$t("lastUpdate")+" "+e.requestTime+". "+e.$t("updatingCurrencyRates")+" "+new Date(1e3*e.timerCount).toISOString().substr(11,8))+"\n  ")])])},W=[],q={methods:{fetchExchangeRates:function(e){this.$store.dispatch("fetchExchangeRates",e)}},data:function(){return{userLanguage:navigator.language}}},z={name:"Countdown",mixins:[q],data:function(){return{timerCount:3600,requestTime:0}},mounted:function(){this.requestTime=(new Date).toLocaleString()},watch:{timerCount:{handler:function(e){var t=this;e>0&&setTimeout((function(){t.timerCount--,1===e&&(t.fetchExchangeRates("EUR"),t.timerCount=3600)}),1e3)},immediate:!0}}},I=z,B=(n("8bec"),Object(i["a"])(I,H,W,!1,null,"2e9c9fd0",null)),J=B.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{staticClass:"py-5"},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-text-field",{attrs:{outlined:"",label:e.$t("amount"),type:"number"},on:{click:function(t){e.displayConvertedValue=!1}},model:{value:e.valueToConvert,callback:function(t){e.valueToConvert=t},expression:"valueToConvert"}})],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-select",{attrs:{disabled:"",outlined:"",label:e.$t("from"),items:e.currencies},model:{value:e.fromCurrency,callback:function(t){e.fromCurrency=t},expression:"fromCurrency"}})],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-select",{attrs:{outlined:"",items:e.currencies,label:e.$t("to")},on:{click:function(t){e.displayConvertedValue=!1}},model:{value:e.toCurrency,callback:function(t){e.toCurrency=t},expression:"toCurrency"}})],1)],1),n("v-btn",{attrs:{large:"",color:"primary",disabled:!e.toCurrency},on:{click:function(t){return e.convertValue()}}},[e._v("\n    "+e._s(e.$t("convert"))+"\n  ")]),e.displayConvertedValue?n("div",[n("p",{staticClass:"pt-15"},[n("b",{staticClass:"text-h5"},[e._v(" "+e._s(e.currencyFormatter(e.fromCurrency,e.valueToConvert)+" = ")+" ")]),n("b",{staticClass:"text-h4"},[e._v("\n        "+e._s(e.currencyFormatter(e.toCurrency,e.convertedValue))+"*\n      ")])]),n("p",[n("small",[e._v("*"+e._s(e.$t("valuesAreRounded")))])])]):e._e()],1)},Y=[],Z=n("5530"),K=n("2f62"),Q={name:"Converter",mixins:[q],computed:Object(Z["a"])(Object(Z["a"])({},Object(K["b"])({currencies:"getAllCurrencies"})),Object(K["b"])({rates:"getRates"})),mounted:function(){this.fetchExchangeRates("EUR")},data:function(){return{toCurrency:null,valueToConvert:null,convertedValue:null,fromCurrency:"EUR",displayConvertedValue:!1}},methods:{convertValue:function(){this.convertedValue=this.valueToConvert*this.rates[this.toCurrency],this.displayConvertedValue=!0},currencyFormatter:function(e,t){return new Intl.NumberFormat(this.userLanguage,{style:"currency",currency:e}).format(t)}}},X=Q,ee=Object(i["a"])(X,G,Y,!1,null,"45e7e0a5",null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("currencyName"))+"\n        ")]),n("th",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("currencyRate"))+"\n        ")])])]),n("tbody",e._l(e.rates,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(r))]),n("td",[e._v(e._s(t))])])})),0)]},proxy:!0}])})},re=[],ae={name:"CurrencyRates",date:function(){return{}},computed:Object(Z["a"])(Object(Z["a"])({},Object(K["b"])({rates:"getRates"})),Object(K["b"])({currencies:"getAllCurrencies"}))},oe=ae,ce=Object(i["a"])(oe,ne,re,!1,null,null,null),se=ce.exports,ie={name:"Main",components:{Converter:te,Countdown:J,CurrencyRates:se},data:function(){return{tab:null,items:[{name:"converter",component:"Converter"},{name:"currencyRate",component:"CurrencyRates"}]}}},le=ie,ue=Object(i["a"])(le,D,M,!1,null,null,null),de=ue.exports,fe={components:{Main:de,Footer:P,Header:V}},ve=fe,me=Object(i["a"])(ve,v,m,!1,null,null,null),pe=me.exports;r["default"].use(f["a"]);var be=[{path:"/",name:"Home",component:pe}],he=new f["a"]({mode:"history",base:"/",routes:be}),ye=he,ge=(n("b64b"),n("99af"),n("bc3a")),Ce=n.n(ge),_e="http://api.exchangeratesapi.io/v1/",xe=Ce.a.create({baseURL:_e,timeout:1e4}),we=xe,ke="49df0aa1af70410da83b04aa9dbecb7c",Re=ke;r["default"].use(K["a"]);var je=new K["a"].Store({state:{rates:{},currencies:[]},mutations:{SET_RATES:function(e,t){e.rates=t},SET_CURRENCIES:function(e,t){e.currencies=Object.keys(t)}},actions:{fetchExchangeRates:function(e,t){var n=e.commit;we.get("latest?access_key=".concat(Re,"&format=1&base=").concat(t)).then((function(e){n("SET_RATES",e.data.rates),n("SET_CURRENCIES",e.data.rates)}))}},getters:{getAllCurrencies:function(e){return e.currencies},getRates:function(e){return e.rates}}}),Oe=n("ce5b"),Ee=n.n(Oe),Te=(n("bf40"),n("fcf4"));r["default"].use(Ee.a);var $e=new Ee.a({theme:{themes:{light:{primary:"#0abf53",secondary:Te["a"].grey.darken1,accent:Te["a"].shades.black,error:Te["a"].red.accent3},dark:{primary:Te["a"].green.darken4}}}}),Se=(n("d5e8"),n("5363"),n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("466d"),n("a925"));function Ve(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];t[a]=e(n)}})),t}r["default"].use(Se["a"]);var Ae=new Se["a"]({locale:"en",fallbackLocale:"en",messages:Ve()});r["default"].config.productionTip=!1,new r["default"]({router:ye,store:je,vuetify:$e,i18n:Ae,render:function(e){return e(u)}}).$mount("#app")},"5d67":function(e){e.exports={appTitle:"Conversor de moedas do Victor",amount:"Valor",from:"De",to:"Para",convert:"Converter",updatingCurrencyRates:"Atualizando taxas em",madeWith:"Feito com",by:"por",converter:"Conversor",converterRates:"Taxas de conversão",valuesAreRounded:"Os valores são arredondados em duas casas decimais",lastUpdate:"Última atualização em",currencyName:"Nome da moeda",currencyRate:"Taxa atual"}},"8bec":function(e,t,n){"use strict";n("9dbc")},"9dbc":function(e,t,n){},"9f4d":function(e,t,n){},a625:function(e){e.exports={appTitle:"Victor's valuta-omzetter",amount:"Bedrag",from:"Van",to:"Aan",convert:"Converteren",updatingCurrencyRates:"Updating tarieven bij",madeWith:"Gemaakt met",by:"by",converter:"converter",converterRates:"Conversiepercentages",valuesAreRounded:"Waarden worden afgerond op twee decimalen",lastUpdate:"Laatst bijgewerkt op",currencyName:"Valutanaam",currencyRate:"Huidige koers"}},edd4:function(e){e.exports={appTitle:"Victor's currency converter",amount:"Amount",from:"From",to:"To",convert:"Convert",updatingCurrencyRates:"Updating rates at",madeWith:"Made with",by:"by",converter:"converter",converterRates:"Conversion rates",valuesAreRounded:"Values are rounded to two decimal places",lastUpdate:"Last updated on",currencyName:"Currency name",currencyRate:"Current rate"}}});
//# sourceMappingURL=app.3522bd2c.js.map