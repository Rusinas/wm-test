(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)o=i[f],a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0cfb":function(t,e,r){},"0e2b":function(t,e,r){},"1b3b":function(t,e,r){"use strict";var n=r("f7fa"),a=r.n(n);a.a},2583:function(t,e,r){},"305f":function(t,e,r){"use strict";var n=r("0e2b"),a=r.n(n);a.a},"3d40":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o=(r("cf25"),r("2877")),i={},c=Object(o["a"])(i,a,s,!1,null,null,null),u=c.exports,l=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"hello-world"},[r("h3",[t._v("Привет!")]),r("p",[t._v("Это результат выполнения тестового задания :)")]),t._m(0),r("p",[t._v("Я старался выполнить задание наиболее интересным образом и с вниманием к мелочам. Может показаться, что некоторые вещи избыточны, но я исходил из предоставленных данных в задании. ")]),r("p",[t._v("Например, здесь использован vuex для хранения данных, полученных с сервера потому, что требуется только один endpoint сервера, при этом у нас есть два разных модуля, которые взаимосвязаны. \nМожно было всё предельно упростить, и использовать props, но хотелось сделать что-то более-менее приближенное к реальному приложению.")]),r("p",[t._v("Но, тем не менее, я решил, что могу переусердствовать и слишком затянуть выполнение, поэтому остановился на текущем варианте. А то в планах было сделать даже версию для мобильных)")]),r("P",[t._v("Вне зависимости от вашего решения, буду рад получить подробное ревью кода. ")])],1)])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Для того, чтобы посмотреть, что я тут понаделал, нужно перейти по адресу "),r("b",[t._v(" /bob?token=<токен>. ")]),t._v("Пароль - marley. \nТокен, как и требовалось, задается через переменные окружения. \nЯ сделал это в файле .env. По дефолту токен - VerySecretToken.")])}],d={},v=d,h=(r("1b3b"),Object(o["a"])(v,f,p,!1,null,"94b993e2",null)),b=h.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("Form")],1)},g=[],_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[t.correctToken?[r("h3",[t._v("Здравствуйте, "+t._s(t.username)+"!")]),r("p",[t._v("Введите пароль для продолжения")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Пароль"},domProps:{value:t.password},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.password&&t.signin()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("transition",{attrs:{name:"fade"}},[t.loginError.show?r("div",{staticClass:"login-error"},[t._v(t._s(t.loginError.message))]):t._e()]),r("button",{class:t.password?"":"disabled",on:{click:function(e){return e.preventDefault(),t.signin()}}},[t._v("Войти")])]:[r("h3",[t._v("Доступ запрещен")]),r("p",[t._v("Токен не совпадает")])]],2)},w=[],O=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),y=r("bd86"),j=r("2f62");function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(r,!0).forEach(function(e){Object(y["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var E={name:"LoginForm",data:function(){return{correctToken:!1,username:this.$route.params.username||"Анонимус",password:"",loginError:{show:!1,status:null,message:null}}},watch:{password:function(){this.loginError.show&&this.toggleLoginError()}},mounted:function(){this.checkToken()},methods:C({},Object(j["b"])(["login"]),{signin:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.username,r=this.password,n={username:e,password:r},this.password=null,t.prev=3,t.next=6,this.login(n);case 6:this.$router.push("/dashboard"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),this.toggleLoginError(t.t0.response&&t.t0.response.status?t.t0.response.status:null);case 12:case"end":return t.stop()}},t,this,[[3,9]])}));function e(){return t.apply(this,arguments)}return e}(),checkToken:function(){"VerySecretToken"===this.$route.query.token&&(this.correctToken=!0)},toggleLoginError:function(t){this.loginError.show=!this.loginError.show,t&&(this.loginError.status=t),this.loginError.message=403===t?"Неверный логин или пароль":"Произошла ошибка. Попробуйте позже."}})},P=E,x=(r("d3d4"),Object(o["a"])(P,_,w,!1,null,"44fa9ccc",null)),D=x.exports,$={name:"LoginPage",components:{Form:D},mounted:function(){}},S=$,T=(r("305f"),Object(o["a"])(S,m,g,!1,null,"35ab013b",null)),U=T.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[t.$store.state.authorized?r("div",{staticClass:"dashboard"},[r("Sidebar"),r("div",{staticClass:"content"},t._l(t.cards,function(t,e){return r("Card",{key:e,attrs:{card:t}})}),1)],1):r("NoAccess")],1)},L=[],F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[r("div",{staticClass:"logo"},[t._v("TEST")]),r("div",{staticClass:"user"},[r("div",{staticClass:"user-avatar"}),r("div",{staticClass:"username"},[t._v(t._s(t.username))])]),r("div",{staticClass:"menu"},[r("div",{staticClass:"menu-element active"},[t._v("Главная")]),r("div",{staticClass:"menu-element",on:{click:function(e){return t.signout()}}},[t._v("Выход")])])])},R=[];function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(r,!0).forEach(function(e){Object(y["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var N={name:"Sidebar",methods:M({},Object(j["b"])(["logout"]),{signout:function(){this.logout(),this.$router.push("/")}}),computed:{username:function(){return this.$store.getters.getUsername}}},J=N,V=(r("cf81"),Object(o["a"])(J,F,R,!1,null,"da99a688",null)),q=V.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"header"},[t._v(t._s(t.card.title))]),r("div",{staticClass:"data"},[t._v(t._s(t.cardData))]),r("div",{staticClass:"description"},[t._v(t._s(t.card.dataUnit))])])},G=[],H={name:"DashboardCard",props:{card:Object},data:function(){return{data:0}},computed:{cardData:function(){return this.$store.getters.getDataForDashboardCard(this.card.type)||0}}},I=H,K=(r("90af"),Object(o["a"])(I,B,G,!1,null,"9deebfdc",null)),Q=K.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("h3",[t._v("У вас нет доступа к данной странице.")]),r("router-link",{attrs:{to:"/"}},[t._v("На главную")])],1)},X=[],Y=(r("f141"),{}),Z=Object(o["a"])(Y,W,X,!1,null,"35bfa4e7",null),tt=Z.exports,et={name:"Dashboard",components:{Sidebar:q,Card:Q,NoAccess:tt},data:function(){return{cards:[{title:"Трафик",type:"traffic",dataUnit:"Гб"},{title:"Минуты",type:"minutes",dataUnit:"мин."}]}}},rt=et,nt=(r("8d5b"),Object(o["a"])(rt,z,L,!1,null,"30d07f10",null)),at=nt.exports;n["a"].use(l["a"]);var st=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:b},{path:"/dashboard",name:"dashboard",component:at},{path:"/:username",name:"login",component:U}]}),ot=r("bc3a"),it=r.n(ot),ct=it.a.create({baseURL:"http://localhost:3000/",timeout:1e3});n["a"].use(j["a"]);var ut=new j["a"].Store({state:{authorized:!1,username:null,traffic:null,minutes:null},mutations:{setAuthorization:function(t){t.authorized=!0},setUserData:function(t,e){var r=e.username,n=e.traffic,a=e.minutes;t.username=r,t.traffic=n,t.minutes=a},clearUserData:function(t){t.authorized=!1,t.username=null,t.traffic=null,t.minutes=null}},actions:{login:function(){var t=Object(O["a"])(regeneratorRuntime.mark(function t(e,r){var n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,ct.post("/check",r);case 4:a=t.sent,s=a.data,n("setAuthorization"),n("setUserData",s),t.next=13;break;case 10:throw t.prev=10,t.t0=t["catch"](1),t.t0;case 13:case"end":return t.stop()}},t,null,[[1,10]])}));function e(e,r){return t.apply(this,arguments)}return e}(),logout:function(t){var e=t.commit;e("clearUserData")}},getters:{getUsername:function(t){return t.username},getDataForDashboardCard:function(t){return function(e){return t[e]}}}});n["a"].config.productionTip=!1,new n["a"]({router:st,store:ut,render:function(t){return t(u)}}).$mount("#app")},5820:function(t,e,r){},"8d5b":function(t,e,r){"use strict";var n=r("fb15"),a=r.n(n);a.a},"90af":function(t,e,r){"use strict";var n=r("3d40"),a=r.n(n);a.a},cf25:function(t,e,r){"use strict";var n=r("0cfb"),a=r.n(n);a.a},cf81:function(t,e,r){"use strict";var n=r("f05c"),a=r.n(n);a.a},d3d4:function(t,e,r){"use strict";var n=r("5820"),a=r.n(n);a.a},f05c:function(t,e,r){},f141:function(t,e,r){"use strict";var n=r("2583"),a=r.n(n);a.a},f7fa:function(t,e,r){},fb15:function(t,e,r){}});
//# sourceMappingURL=app.5bd76c36.js.map