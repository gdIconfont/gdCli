(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{286:function(t,s,n){"use strict";var e=n(278),a=n.n(e),r=n(67),i=n.n(r),o=n(49),c=n.n(o);s.a={methods:{getDates:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!t)return[];for(var n=t.match(/\d+-\d+-(\d+).*/)[1],e=this.os.isIOS?t.replace(/-/g,"/"):t,a=[],r=0;r<s;r++){var i=new Date(e);i.setDate(1*n-s+r);var o=i.getFullYear(),c=i.getMonth()+1,u=i.getDate(),l=o+"-"+(c>9?c:"0"+c)+"-"+(u>9?u:"0"+u),h=(c>9?c:"0"+c)+"-"+(u>9?u:"0"+u);a.push({full:l,simple:h})}return a},formatTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,s=arguments[1],n=t.getFullYear(),e=t.getMonth()+1,a=t.getDate(),r=t.getHours(),i=t.getMinutes(),o=t.getSeconds(),c=[n,e,a].map(this.formatNumber).join("-"),u=[r,i,o].map(this.formatNumber).join(":");return"date"===s?""+c:c+" "+u},formatNumber:function(t){var s=t.toString();return s[1]?s:"0"+s},getKsLx:function(){var t=this;return this.$store.state.ksLx.length>0?c.a.resolve(this.$store.state.ksLx):this.$http("cache/getKslx.jsmeb",{}).then((function(s){if(s&&s.result)return t.$store.dispatch("SETKSLX",s.result),s.result}))},getUserInfo:function(){var t=this;return i()(this.$store.state.userInfo).length?c.a.resolve(this.$store.state.userInfo):this.$http("h5pj/getCurrUser.jsmeb",{}).then((function(s){if(s&&s.result)return t.$store.dispatch("SETUSERINFO",s.result||{}),s.result||{}}))},getJs:function(){var t=this;return i()(this.$store.state.jsInfo).length?c.a.resolve(this.$store.state.jsInfo):this.$http("yhxx/getJs.jsmeb",{}).then((function(s){if(s&&s.result)return t.$store.dispatch("SETJSINFO",s.result||{}),s.result||{}}))},getXq:function(){var t=this;return i()(this.$store.state.xq).length?c.a.resolve(this.$store.state.xq):this.$http("cache/getCurrentXq.jsmeb",{}).then((function(s){if(s&&s.result)return t.$store.dispatch("SETXQ",s.result||{}),s.result||{}}))},getPjlc:function(){var t=this;return this.$store.state.pjlc.length>0?c.a.resolve(this.$store.state.pjlc):this.$http("cache/getPjlc.jsmeb",{}).then((function(s){if(s&&s.result)return t.$store.dispatch("SETPJLC",s.result),s.result}))},getKsty:function(){var t=this;return this.$store.state.ksty.length>0?c.a.resolve(this.$store.state.ksty):this.$http("cache/getKsty.jsmeb",{}).then((function(s){if(s&&s.result){var n={},e=!0,r=!1,i=void 0;try{for(var o,c=a()(s.result);!(e=(o=c.next()).done);e=!0){var u=o.value;n[u.key]=u.mc}}catch(t){r=!0,i=t}finally{try{!e&&c.return&&c.return()}finally{if(r)throw i}}return t.$store.dispatch("SETKSTY",n),n}}))}}}},289:function(t,s,n){"use strict";var e=n(290),a=n.n(e);s.default=a.a},290:function(t,s){},291:function(t,s,n){},292:function(t,s,n){"use strict";var e=n(311),a=n(289),r=(n(293),n(9)),i=Object(r.a)(a.default,e.a,e.b,!1,null,"5c8289c0",null);i.options.__file="src/components/card.vue",s.default=i.exports},293:function(t,s,n){"use strict";var e=n(291);n.n(e).a},294:function(t,s,n){},311:function(t,s,n){"use strict";n.d(s,"a",(function(){return e})),n.d(s,"b",(function(){return a}));var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[this._t("content")],2),this._v(" "),s("div",{staticClass:"card-footer"},[this._t("footer")],2)])},a=[];e._withStripped=!0},312:function(t,s,n){"use strict";var e=n(294);n.n(e).a},335:function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[n("div",{staticClass:"page"},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},t._l(t.list,(function(s,e){return n("card",{key:e,scopedSlots:t._u([{key:"content",fn:function(){return[n("section",[n("van-row",{staticClass:"top"},[n("van-col",{staticClass:"km",attrs:{span:"4"}},[n("div",{staticClass:"kmName"},[t._v("\n                  "+t._s(t.lxFun(s.lx)[0])+"\n                ")])]),t._v(" "),n("van-col",{staticClass:"title",attrs:{span:"17"}},[n("p",[t._v("\n                  "+t._s(s.mc)+"\n                ")])]),t._v(" "),n("van-col",{staticClass:"cz",attrs:{span:"3"}},[n("van-icon",{attrs:{name:"ellipsis"}})],1)],1),t._v(" "),n("van-row",{staticClass:"cjInfo"},[n("van-col",{staticClass:"content",attrs:{span:"20",offset:"4"}},[n("span",{staticClass:"cjr"},[t._v(t._s(s.cjr))]),t._v(" "),n("span",{staticClass:"cjsj"},[t._v("发布于 "+t._s(t.sjFun(s.cjsj)))])])],1),t._v(" "),n("van-row",{staticClass:"jdInfo"},[n("van-col",{staticClass:"jd",attrs:{span:"4"}},[t._v("\n                  0/0\n              ")]),t._v(" "),n("van-col",{staticClass:"content",attrs:{span:"20"}},[t._v("\n                当前状态：完成答题卡设计\n              ")])],1),t._v(" "),n("van-row",{staticClass:"jdt"},[n("van-col",{staticClass:"content",attrs:{span:"24"}},[n("van-progress",{attrs:{percentage:0,"stroke-width":"8","show-pivot":!1}})],1)],1),t._v(" "),n("van-row",{staticClass:"ksbp"},[n("van-col",{staticClass:"content",attrs:{span:"24"}},[t._v("\n                考试编排: "+t._s(s.vKsnj&&s.vKsnj[0]&&s.vKsnj[0].mc)+" "+t._s(s.vKsnj&&s.vKsnj[0]&&s.vKsnj[0].vNjbj&&s.vKsnj[0].vNjbj.length)+"个班 "+t._s(s.ksnum)+"人\n              ")])],1),t._v(" "),n("van-row",{staticClass:"kslx"},[n("van-col",{staticClass:"content",attrs:{span:"24"}},[t._v("\n                考试类型: "+t._s(t.lxFun(s.lx))+"\n              ")])],1)],1)]},proxy:!0},{key:"footer",fn:function(){return[n("van-button",{staticClass:"btnItem",attrs:{type:"default"},on:{click:function(n){return t.goDetails(s)}}},[t._v("查看详情")])]},proxy:!0}],null,!0)})})),1)],1)])};e._withStripped=!0;var a=n(67),r=n.n(a),i=n(279),o=n.n(i),c=n(280),u=n.n(c),l=n(286),h=n(292),f={mixins:[l.a],data:function(){return{count:0,refreshing:!1,isLoading:!1,loading:!1,finished:!0,list:[],ksLx:[],page:0}},components:{card:h.default},computed:{},activated:function(){console.log(this.$route.params.upDate),this.$route.params.upDate&&this.onRefresh()},mounted:function(){var t=this;return u()(o.a.mark((function s(){return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.getKsLx().then((function(t){return t}));case 2:t.ksLx=s.sent,t.finished=!1;case 4:case"end":return s.stop()}}),s,t)})))()},methods:{goDetails:function(t){var s=t.vKm&&t.vKm[0]&&t.vKm[0];if(!s||!r()(s).length)return this.$toast("该考试没有科目，请先添加科目");this.$store.dispatch("SETCURRENTKS",{testh:t.testh,vKm:t.vKm,njh:t.njh,kmh:s.kmh,kmmc:s.mc,mc:t.mc}),this.$router.push({name:"totalData"})},lxFun:function(t){var s=this.ksLx.find((function(s){return s.key===t}));return s?s.mc:"-"},queryPagingKs:function(){var t=this;return this.$http("ks/queryPagingKs.jsmeb",{data:[{zt:-1,cjr:0,vKsnj:[],vLx:[]},this.page,6]},!1).then((function(s){if(s&&s.result){var n=s.result.data;t.list=t.list.concat(n),t.loading=!1,t.list.length>=1*s.result.totalCount&&(t.finished=!0)}}))},sjFun:function(t){return t?(t=t.replace(/-/g,"/"),this.$util.dateFormat("mm-dd HH:MM",new Date(t))):""},onLoad:function(){this.page++,this.queryPagingKs()},onRefresh:function(){var t=this;this.list=[],this.page=1,this.finished=!1,this.loading=!0,this.queryPagingKs().then((function(s){t.isLoading=!1}))}}},v=(n(312),n(9)),d=Object(v.a)(f,e,[],!1,null,"34b7b9f6",null);d.options.__file="src/views/ksList/ksList.vue";s.default=d.exports}}]);
//# sourceMappingURL=ksList.js.map?v=0.18796360809065904