(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{286:function(t,e,s){"use strict";var r=s(278),n=s.n(r),a=s(67),i=s.n(a),o=s(49),u=s.n(o);e.a={methods:{getDates:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!t)return[];for(var s=t.match(/\d+-\d+-(\d+).*/)[1],r=this.os.isIOS?t.replace(/-/g,"/"):t,n=[],a=0;a<e;a++){var i=new Date(r);i.setDate(1*s-e+a);var o=i.getFullYear(),u=i.getMonth()+1,c=i.getDate(),h=o+"-"+(u>9?u:"0"+u)+"-"+(c>9?c:"0"+c),l=(u>9?u:"0"+u)+"-"+(c>9?c:"0"+c);n.push({full:h,simple:l})}return n},formatTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments[1],s=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),i=t.getMinutes(),o=t.getSeconds(),u=[s,r,n].map(this.formatNumber).join("-"),c=[a,i,o].map(this.formatNumber).join(":");return"date"===e?""+u:u+" "+c},formatNumber:function(t){var e=t.toString();return e[1]?e:"0"+e},getKsLx:function(){var t=this;return this.$store.state.ksLx.length>0?u.a.resolve(this.$store.state.ksLx):this.$http("cache/getKslx.jsmeb",{}).then((function(e){if(e&&e.result)return t.$store.dispatch("SETKSLX",e.result),e.result}))},getUserInfo:function(){var t=this;return i()(this.$store.state.userInfo).length?u.a.resolve(this.$store.state.userInfo):this.$http("h5pj/getCurrUser.jsmeb",{}).then((function(e){if(e&&e.result)return t.$store.dispatch("SETUSERINFO",e.result||{}),e.result||{}}))},getJs:function(){var t=this;return i()(this.$store.state.jsInfo).length?u.a.resolve(this.$store.state.jsInfo):this.$http("yhxx/getJs.jsmeb",{}).then((function(e){if(e&&e.result)return t.$store.dispatch("SETJSINFO",e.result||{}),e.result||{}}))},getXq:function(){var t=this;return i()(this.$store.state.xq).length?u.a.resolve(this.$store.state.xq):this.$http("cache/getCurrentXq.jsmeb",{}).then((function(e){if(e&&e.result)return t.$store.dispatch("SETXQ",e.result||{}),e.result||{}}))},getPjlc:function(){var t=this;return this.$store.state.pjlc.length>0?u.a.resolve(this.$store.state.pjlc):this.$http("cache/getPjlc.jsmeb",{}).then((function(e){if(e&&e.result)return t.$store.dispatch("SETPJLC",e.result),e.result}))},getKsty:function(){var t=this;return this.$store.state.ksty.length>0?u.a.resolve(this.$store.state.ksty):this.$http("cache/getKsty.jsmeb",{}).then((function(e){if(e&&e.result){var s={},r=!0,a=!1,i=void 0;try{for(var o,u=n()(e.result);!(r=(o=u.next()).done);r=!0){var c=o.value;s[c.key]=c.mc}}catch(t){a=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return t.$store.dispatch("SETKSTY",s),s}}))}}}},295:function(t,e,s){},313:function(t,e,s){"use strict";var r=s(295);s.n(r).a},337:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("van-tabs",{staticClass:"tabs",on:{change:t.tabsChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("van-tab",{attrs:{title:"考试",name:"ksList"}}),t._v(" "),s("van-tab",{attrs:{title:"成绩",name:"cjList"}}),t._v(" "),s("van-tab",{attrs:{title:"阅卷",name:"yjList",url:t.yjUrl+"?token="+t.user.token}})],1),t._v(" "),s("keep-alive",[s("router-view",{staticClass:"view"})],1),t._v(" "),"ksList"===t.active?s("div",{staticClass:"footOpt"},[s("van-button",{staticClass:"cjksBtn",attrs:{type:"info"},on:{click:function(e){return t.$router.push({name:"ksInfo"})}}},[t._v("创建考试")])],1):t._e()],1)};r._withStripped=!0;var n=s(279),a=s.n(n),i=s(280),o=s.n(i),u={mixins:[s(286).a],name:"ksIndex",data:function(){return{active:this.$route.name,yjUrl:window.config.yuejuanUrl,user:{}}},components:{},computed:{},mounted:function(){var t=this;return o()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserInfo();case 2:t.user=e.sent;case 3:case"end":return e.stop()}}),e,t)})))()},methods:{tabsChange:function(t,e){"yjList"!==this.active&&this.$router.replace("/index/"+t)}}},c=(s(313),s(9)),h=Object(c.a)(u,r,[],!1,null,"498142aa",null);h.options.__file="src/views/index/index.vue";e.default=h.exports}}]);
//# sourceMappingURL=index.js.map?v=0.18796360809065904