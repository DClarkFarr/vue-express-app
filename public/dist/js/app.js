(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)r=o[d],n[r]&&f.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"13f0":function(t,e,s){"use strict";var a=s("d736"),n=s.n(a);n.a},"2d04":function(t,e,s){"use strict";var a=s("ec63"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o=(s("ffc1"),s("ac6a"),s("75fc")),c=(s("a481"),s("bc3a")),u=s.n(c),l=s("b383"),d=s.n(l);u.a.defaults.withCredentials=!0;var f={api:"http://localhost:3333/api/"},g={getUrl:function(t){return f.api+t.replace(/^\//,"")},getConfig:function(t){return t||(t={}),t.headers=$.extend({},this.getHeaders(),t.headers),t},getHeaders:function(){return{}},get:function(t,e,s){return s=this.getConfig(s),t=this.getUrl(t),Object.entries(e||{}).length&&(t.indexOf("?")<0&&(t+="?"),t+=d.a.stringify(e)),u.a.get(t,s).then(function(t){return t.data}).catch(function(t){return t.response.data||{status:"failed",message:t.message}})},post:function(t,e,s){return t=this.getUrl(t),s=this.getConfig(s),u.a.post(t,e,s).then(function(t){return t.data}).catch(function(t){return t.response.data||{status:"failed",message:t.message}})},upload:function(t,e,s){t=this.getUrl(t),s||(s={headers:{}}),s.headers=Object.assign({},{"Content-Type":"multipart/form-data"},s.headers);var a=new FormData;return Object.entries(e).forEach(function(t){a.append(t[0],t[1])}),u.a.post(t,a,s).then(function(t){return t.data}).catch(function(t){return t.response.data||{status:"failed",message:t.message}})},getTasks:function(){return this.get("tasks")},addTask:function(t){return this.post("tasks/add",t)},deleteTask:function(t){return this.post("tasks/delete/"+t)},toggleTaskCompleted:function(t,e){return this.post("tasks/toggleCompleted/"+t,e)},getUserByEmail:function(t){return this.get("users/by-email",{email:t})},createUser:function(t){return this.post("users/create",t)},updateUser:function(t,e){return this.upload("users/"+t+"/update",e)},getUserCategories:function(t){return this.get("users/categories",{id_user:t})},getUsers:function(){return this.get("users/all")},getUserSuggestions:function(t){return this.get("users/"+t+"/suggestions")},addUserFriend:function(t,e){return this.post("users/"+t+"/addFriend",{id_friend:e})},removeUserFriend:function(t,e){return this.post("users/"+t+"/removeFriend",{id_friend:e})},sessionGet:function(){return this.post("session/get",{nothing:!0})},sessionSet:function(t){return this.post("session/set",t)},sessionClear:function(){return this.post("session/clear")},getCategories:function(){return this.get("categories/all")},addCategory:function(t,e){return this.post("categories/add",{categoryName:t,id_user:e})},deleteCategory:function(t,e){return this.post("categories/delete/"+t,{id_user:e})},addCategoryLike:function(t,e){return this.post("categories/like/"+t,{id_user:e})}},m=new a["a"]({data:function(){return this.defaultData()},methods:{defaultData:function(){return{id:!1,email:null,name:null,created_at:null,deleted:null,friend_ids:[],logged:!1,createdCategories:[],likedCategories:[],users:[],suggestions:[]}},login:function(t,e){Object.assign(this,t,{logged:!0}),e&&g.sessionSet({user_id:t.id}),this.$emit("user.login")},logout:function(){Object.assign(this,{logged:!1},this.defaultData()),g.sessionClear(),this.$emit("user.logout")},getUsers:function(){var t=this;return g.getUsers().then(function(e){return"success"==e.status&&(t.users=e.users),Object(o["a"])(e.users)||[]})},update:function(t){var e=this;return this.id?g.updateUser(this.id,t).then(function(s){return Object.entries(t).forEach(function(t){"file"==t[0]&&(t[0]="image"),e[t[0]]=s.user[t[0]]}),s}):Promise.reject("User not logged in")},getCategories:function(){var t=this;return g.getUserCategories(this.id).then(function(e){return"success"==e.status&&(t.createdCategories=e.created,t.likedCategories=e.liked,t.$emit("user.categories.changed",Object(o["a"])(t.createdCategories),Object(o["a"])(t.likedCategories))),e})},getSuggestions:function(){return g.getUserSuggestions(this.id).then(function(t){return t.suggestions})},addFriend:function(t){var e=this;return g.addUserFriend(this.id,t).then(function(t){return e.friend_ids=t.user.friend_ids,t})},unfriend:function(t){var e=this;return g.removeUserFriend(this.id,t).then(function(t){return e.friend_ids=t.user.friend_ids,t})}}}),h=(s("7514"),s("20d6"),s("cebc")),v=new a["a"]({data:function(){return this.defaultData()},methods:{defaultData:function(){return{tasks:[],sessionTaskIds:[]}},setSessionTasks:function(t){this.sessionTaskIds=t.map(function(t){return t._id})},getTasks:function(){var t=this;return this.tasks.length?Promise.resolve(Object(o["a"])(this.tasks)):g.getTasks().then(function(e){return t.tasks=e,Object(o["a"])(t.tasks)})},add:function(t){var e=this,s=function(t){return Promise.resolve({status:"failed",message:t})};return t.text?g.addTask(t).then(function(t){return"success"==t.status?(e.tasks.push(Object(h["a"])({},t.task)),e.$emit("task.added",Object(o["a"])(e.tasks)),t):t}):s("Please add task description")},deleteById:function(t){var e=this,s=this.tasks.findIndex(function(e){return t==e.id});return g.deleteTask(t).then(function(){var t=Object(o["a"])(e.tasks);t.splice(s,1),e.tasks=t})},toggleCompleted:function(t,e){var s=this.tasks.find(function(e){return t==e.id});return g.toggleTaskCompleted(t,{user:e}).then(function(t){"success"==t.status&&(s.completed=t.task.completed,s.completed_by=t.task.completed_by,s.completed_at=t.task.completed_at)})}}}),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-main-home"},[s("default-layout",[s("div",{staticClass:"container"},[s("h1",[t._v("Tasks")]),t.tasks.length?s("div",{staticClass:"home-tasks"},[s("task-list",{attrs:{tasks:t.tasks}})],1):s("div",[s("h3",[t._v("No Tasks Found")])]),s("hr"),s("task-create-form")],1)])],1)},b=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-app default"},[s("default-header",[s("default-menu-links"),t.userLogged?s("ul",{staticClass:"navbar-nav align-items-center ml-auto"},[s("li",{staticClass:"nav-item mr-3"},[s("router-link",{attrs:{to:"/me/profile"}},[s("small",[t._v("Welcome, "+t._s(t.userName))])])],1),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])])]):t._e()],1),s("div",{staticClass:"content"},[t._t("default")],2)],1)},k=[],_=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[t._t("default")],2)])])}),j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],y=s("2877"),x={},w=Object(y["a"])(x,_,j,!1,null,null,null),O=w.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Tasks")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/categories"}},[t._v("Categories")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/friends"}},[t._v("Friends")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1)])},T=[],E={},S=Object(y["a"])(E,U,T,!1,null,null,null),L=S.exports,A={methods:{logout:function(){this.$root.user.logout()}},computed:{userName:function(){return this.$root.user.name},userLogged:function(){return!!this.$root.user.logged}},components:{defaultHeader:O,defaultMenuLinks:L}},D=A,N=Object(y["a"])(D,C,k,!1,null,null,null),z=N.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-list"},t._l(t.tasks,function(t){return s("task-item",{key:t._id,attrs:{task:t}})}),1)},F=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-item d-flex w-100 px-3 py-2 mb-2 align-items-center"},[s("div",{staticClass:"completed"},[s("div",{staticClass:"icon checkmark",class:{checked:!!t.task.completed,disabled:t.toggling},on:{click:t.onToggleComplete}},[s("i",{staticClass:"fa",class:t.iconStatus})])]),s("div",{staticClass:"description"},[t._v("\n        "+t._s(t.task.text)+"\n    ")]),s("div",{staticClass:"created_by align-self-start"},[s("label",[t._v("Author")]),s("div",[t._v("\n            By "+t._s(t.authoredBy.name)+"\n        ")])]),t.task.completed?s("div",{staticClass:"completed_by align-self-start"},[s("label",[t._v("Completed")]),s("div",[t._v("\n            By "+t._s(t.completedBy.name)+"\n        ")]),s("div",[t._v("\n            At "+t._s(t.completedBy.date)+"\n        ")])]):t._e(),s("div",{staticClass:"actions ml-auto"},[t.canDelete?s("button",{staticClass:"btn btn-danger",attrs:{disabled:t.submitting},on:{click:t.onDelete}},[s("i",{staticClass:"fa fa-times"})]):t._e()])])},M=[],B=s("c1df"),Y=s.n(B),q={props:{task:Object},data:function(){return{submitting:!1,toggling:!1}},methods:{onToggleComplete:function(){var t=this;this.toggling=!0;var e={};this.$root.user.id&&(e.id=this.$root.user.id,e.name=this.$root.user.name),this.$root.tasks.toggleCompleted(this.task.id,e).then(function(){t.toggling=!1})},onDelete:function(){var t=this;this.submitting=!0,this.$root.tasks.deleteById(this.task.id).then(function(){t.submitting=!1})}},computed:{iconStatus:function(){return this.toggling?{"fa-circle-o-notch fa-spin":this.toggling}:{"fa-check-square-o":!!this.task.completed,"fa-square-o":!this.task.completed}},canDelete:function(){return!this.task.id_user||this.task.id_user==this.$root.user.id},completedBy:function(){return{name:this.task.completed_by?this.task.completed_by.name:"(Annon User)",date:this.task.completed_at?Y()(this.task.completed_at).format("MMM DD YYYY @h:mma"):"(N/A)"}},authoredBy:function(){return{name:this.task.author?this.task.author.name:"(Annon User)"}}}},G=q,H=(s("da9e"),Object(y["a"])(G,I,M,!1,null,"2ebf920e",null)),J=H.exports,R={name:"task-list",props:{tasks:Array},data:function(){return{}},mounted:function(){},methods:{},components:{TaskItem:J}},W=R,K=Object(y["a"])(W,P,F,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-create-form"},[s("h4",[t._v("Add Task")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error.length,expression:"error.length"}],staticClass:"alert alert-danger"},[t._v("\n        "+t._s(t.error)+"\n    ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Task Desc."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),s("div",{staticClass:"col-lg-4 pt-2"},[s("label",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"completed"}],staticClass:"checkbox mr-1",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.completed)?t._i(t.completed,"1")>-1:t.completed},on:{change:function(e){var s=t.completed,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i="1",r=t._i(s,i);a.checked?r<0&&(t.completed=s.concat([i])):r>-1&&(t.completed=s.slice(0,r).concat(s.slice(r+1)))}else t.completed=n}}}),t._v("\n                Mark Complete\n            ")])]),s("div",{staticClass:"col-lg-3"},[s("button",{staticClass:"btn btn-success",attrs:{disabled:t.submitting},on:{click:t.onAddTask}},[t._v("Add Task")])])])])},X=[],Z={data:function(){return{text:"",completed:0,error:"",submitting:!1}},methods:{onAddTask:function(){var t=this;this.error="",this.submitting=!0,this.$root.tasks.add({text:this.text,completed:this.completed?1:0,id_user:this.currUserId()}).then(function(e){t.submitting=!1,"success"==e.status?t.clearForm():t.error=e.message})},clearForm:function(){this.text="",this.completed=0,this.error=""},currUserId:function(){return this.$root.user.id||!1}}},tt=Z,et=Object(y["a"])(tt,V,X,!1,null,null,null),st=et.exports,at={name:"page-main-home",data:function(){return{tasks:[]}},mounted:function(){var t=this;this.$root.tasks.getTasks().then(function(e){t.tasks=e})},watch:{"$root.tasks.tasks":function(t){this.tasks=Object(o["a"])(t)}},components:{defaultLayout:z,TaskList:Q,TaskCreateForm:st}},nt=at,it=Object(y["a"])(nt,p,b,!1,null,null,null),rt=it.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-main-home"},[s("default-layout",[s("div",{staticClass:"container"},[s("h1",[t._v("Categories")]),s("div",{staticClass:"categories-wrap d-flex flex-wrap justify-content-center"},t._l(t.categories,function(e){return s("category-card",{key:e._id,attrs:{category:e,likes:t.likes,created_ids:t.createdIds},on:{categoryDeleted:t.onCategoryDeleted,categoryAddLike:t.onCategoryAddLike}})}),1),t.error.length?s("div",{staticClass:"alert alert-danger mt-3"},[t._v("\n            "+t._s(t.error)+"\n          ")]):t._e(),t.success.length?s("div",{staticClass:"alert alert-success mt-3"},[t._v("\n            "+t._s(t.success)+"\n          ")]):t._e(),s("div",{staticClass:"mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Category Name"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),s("div",{staticClass:"col-lg-4"},[s("button",{staticClass:"btn btn-primary",on:{click:t.onAddCategory}},[t._v("Add Category")])])])])])])],1)},ct=[],ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category card m-3"},[s("div",{staticClass:"card-body"},[t.isOwner?s("button",{staticClass:"btn btn-danger btn-sm rounded-circle btnDelete",on:{click:t.onDelete}},[s("i",{staticClass:"fa fa-times"})]):t._e(),s("div",{staticClass:"card-title text-center"},[t._v("\n            "+t._s(t.category.name)+"\n        ")]),s("div",{staticClass:"text-center"},[s("a",{staticClass:"like-icon",class:{liked:t.isLiked},attrs:{href:"javascript:void(0)"},on:{click:t.onAddLike}},[t._m(0),s("span",{staticClass:"d-inline-block"},[t._v("\n                    ("+t._s(t.numLikes)+")\n                ")])])])])])},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"d-inline-block icon"},[s("i",{staticClass:"fa fa-heart"})])}],dt={props:["category","created_ids","likes"],mounted:function(){},methods:{onDelete:function(){var t=this;g.deleteCategory(this.category._id,this.$root.user.id).then(function(e){"success"==e.status?t.$emit("categoryDeleted",t.category._id):alert(e.message)})},onAddLike:function(){this.$emit("categoryAddLike",this.category._id)}},computed:{numLikes:function(){return this.likes[this.category._id]?this.likes[this.category._id]:0},isLiked:function(){return this.numLikes>0},isOwner:function(){return this.created_ids.indexOf(this.category._id)>-1}}},ft=dt,gt=(s("2d04"),Object(y["a"])(ft,ut,lt,!1,null,"05f6ec81",null)),mt=gt.exports,ht={name:"page-main-categories",data:function(){return{categories:[],userLiked:[],userCreated:[],error:"",success:"",category:""}},mounted:function(){var t=this;this.getCategories(),this.$root.user.id?this.getUserCategories():this.$root.user.$on("user.login",function(){t.getUserCategories()}),this.$root.user.$on("user.logout",function(){t.userCreated=[],t.userLiked=[]}),this.$root.user.$on("user.categories.changed",function(e,s){t.userCreated=e,t.userLiked=s})},methods:{onCategoryAddLike:function(t){var e=this;if(this.error="",!this.$root.user.id)return this.error="You must be logged in to add categories";g.addCategoryLike(t,this.$root.user.id).then(function(){e.getUserCategories()})},onCategoryDeleted:function(t){this.getCategories()},getCategories:function(){var t=this;return g.getCategories().then(function(e){t.categories=e.categories})},getUserCategories:function(){this.$root.user.getCategories()},onAddCategory:function(){var t=this;if(this.error=this.success="",!(this.category.length>25||this.category.length<3))return this.$root.user.id?void g.addCategory(this.category,this.$root.user.id).then(function(e){"success"==e.status?(t.success="Success! Category created",t.categories.push(e.category)):t.error=e.message,t.getUserCategories(),setTimeout(function(){t.error="",t.success=""},2e3)}):this.error="You must be logged in to add categories";this.error="Category Name must be between 3-25 characters"}},computed:{likes:function(){var t={};return this.userLiked.forEach(function(e){t[e.id]=e.likes}),t},createdIds:function(){return this.userCreated.map(function(t){return t.id})}},components:{defaultLayout:z,CategoryCard:mt}},vt=ht,pt=(s("13f0"),Object(y["a"])(vt,ot,ct,!1,null,"d30cbe26",null)),bt=pt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-main-home"},[s("default-layout",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 mx-auto"},[s("h1",[t._v("Login")]),t.success.length?s("div",{staticClass:"alert alert-success"},[t._v("\n                "+t._s(t.success)+"\n              ")]):t._e(),t.error.length?s("div",{staticClass:"alert alert-danger"},[t._v("\n                "+t._s(t.error)+"\n              ")]):t._e(),s("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Username/Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t.email&&!1===t.accountExists?s("div",{staticClass:"form-group"},[s("label",[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]):t._e(),s("div",{staticClass:"form-group"},[null===t.accountExists?s("div",[s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:t.submitting}},[t._v("Next")])]):t._e(),!1===t.accountExists?s("div",[s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:t.submitting}},[t._v("Create Account & Sign In")])]):t._e()])])])])])])],1)},kt=[],_t={name:"page-main-login",data:function(){return{email:"",name:"",error:"",success:"",accountExists:null,submitting:!1}},mounted:function(){},methods:{onSubmit:function(){var t=this;if(this.error="",this.success="",this.email||(this.error="Email is required"),null===this.accountExists){if(this.error.length)return!1;g.getUserByEmail(this.email).then(function(e){e.user?t.login(e.user):t.accountExists=!1}).catch(function(e){t.error="Could not perform login. "+e})}else{if(this.name.length||(this.error="Please choose a name"),this.error.length)return!1;g.createUser({email:this.email,name:this.name}).then(function(e){t.login(e.user)})}},login:function(t){var e=this;this.$root.user.login(t,!0),this.success="Login successful!",setTimeout(function(){e.$router.push("/")},500)}},components:{defaultLayout:z}},jt=_t,yt=Object(y["a"])(jt,Ct,kt,!1,null,null,null),xt=yt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-main-home"},[s("default-layout",[s("div",{staticClass:"container"},[s("h1",[t._v("Friends")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"card bg-light"},[s("div",{staticClass:"card-header"},[t._v("\n                All Users\n              ")]),s("div",{staticClass:"card-body"},[t.users.length?s("div",t._l(t.users,function(t){return s("friend-item",{key:t.id,attrs:{friend:t}},[s("div",{staticClass:"ml-auto actions",attrs:{slot:"actions"},slot:"actions"},[s("status-button",{attrs:{friend:t}})],1)])}),1):s("div",[s("div",{staticClass:"bg-white p3"},[t._v("\n                      No Users found\n                    ")])])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card text-white bg-primary mb-5"},[s("div",{staticClass:"card-header"},[t._v("\n                Top Suggestions\n              ")]),s("div",{staticClass:"card-body"},[t.logged?s("div",[t.suggestions.length?s("div",t._l(t.suggestions,function(e){return s("friend-item",{key:e.id,staticClass:"text-dark",attrs:{friend:e}},[s("div",{attrs:{slot:"actions"},slot:"actions"},[s("div",{staticClass:"stat text-center mr-3"},[s("span",{staticClass:"badge badge-secondary d-inline-block mr-1"},[t._v(t._s(e.countInCommon))]),s("small",{staticClass:"text-muted"},[t._v("in common")])])]),s("div",{staticClass:"ml-auto",attrs:{slot:"actions"},slot:"actions"},[s("status-button",{attrs:{friend:e}})],1)])}),1):s("div",[t._v('\n                    No suggestions. Make sure to "like" categories that interest you.\n                  ')])]):s("div",[t._v("\n                  Login to view suggestions\n                ")])])]),s("div",{staticClass:"card text-white bg-success mb-5"},[s("div",{staticClass:"card-header"},[t._v("\n                My Friends\n              ")]),s("div",{staticClass:"card-body"},[t.logged?s("div",[t.suggestions.length?s("div",t._l(t.friends,function(t){return s("friend-item",{key:t.id,staticClass:"text-dark",attrs:{friend:t}},[s("div",{staticClass:"ml-auto",attrs:{slot:"actions"},slot:"actions"},[s("status-button",{attrs:{friend:t}})],1)])}),1):s("div",[t._v("\n                    No friends. Add a few!\n                  ")])]):s("div",[t._v("\n                  Login to view friends\n                ")])])])])])])])],1)},wt=[],Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"friend mb-3 p-3 bg-white d-flex w-100 align-items-center"},[s("div",{staticClass:"name mr-3"},[t._v("\n        "+t._s(t.friend.name)+"\n    ")]),t._t("actions",[s("div",{staticClass:"actions ml-auto"},[t._v("\n            No Button here\n        ")])])],2)},Ut=[],Tt={props:["friend"],data:function(){return{}}},Et=Tt,St=Object(y["a"])(Et,Ot,Ut,!1,null,null,null),Lt=St.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"status-button text-center"},[t.hasUser?s("div",[s("div",{staticClass:"badge",class:t.badgeClass},[t._v(t._s(t.badgeText))])]):t._e(),"friends"==t.status||"sent"==t.status?s("div",[s("button",{staticClass:"btn btn-sm btn-danger",attrs:{disabled:!t.hasUser||t.submitting},on:{click:t.onUnfriend}},[s("i",{staticClass:"fa fa-times"})])]):s("div",[s("button",{staticClass:"btn btn-sm btn-primary",attrs:{disabled:!t.hasUser||t.submitting},on:{click:t.onAddFriend}},[s("i",{staticClass:"fa fa-plus"})])])])},Dt=[],Nt={props:["friend"],data:function(){return{submitting:!1}},methods:{onAddFriend:function(){var t=this;this.submitting=!0,this.$root.user.addFriend(this.friend.id).then(function(){t.submitting=!1})},onUnfriend:function(){var t=this;this.submitting=!0,this.$root.user.unfriend(this.friend.id).then(function(){t.submitting=!1})},getStatus:function(){var t="badge-secondary",e="not friends",s="not",a=this.$root.user,n=this.friend,i=function(t,e){return t.friend_ids.indexOf(e.id)>-1};return i(a,n)&&i(n,a)?(t="badge-success",e="friends",s="friends"):i(a,n)?(t="badge-warning",e="invite sent",s="sent"):i(n,a)&&(t="badge-info",e="invite recieved",s="recieved"),{badgeClass:t,badgeText:e,status:s}}},computed:{badgeClass:function(){return this.getStatus().badgeClass},badgeText:function(){return this.getStatus().badgeText},status:function(){return this.getStatus().status},hasUser:function(){return!!this.$root.user.id}}},zt=Nt,Pt=Object(y["a"])(zt,At,Dt,!1,null,null,null),Ft=Pt.exports,It={name:"page-main-friends",data:function(){return{users:[],suggestions:[],logged:!1}},mounted:function(){var t=this;this.getUsers(),this.$root.user.id?(this.logged=!0,this.getSuggestions()):this.$root.user.$on("user.login",function(){t.logged=!0,t.getSuggestions()}),this.$root.user.$on("user.logout",function(){t.suggestions=[],t.logged=!1})},methods:{getSuggestions:function(){var t=this;this.$root.user.getSuggestions().then(function(e){t.suggestions=e})},getUsers:function(){var t=this;this.$root.user.getUsers().then(function(e){t.users=e})}},computed:{friends:function(){return this.$root.user.friends||[]}},watch:{},components:{defaultLayout:z,friendItem:Lt,statusButton:Ft}},Mt=It,Bt=Object(y["a"])(Mt,$t,wt,!1,null,null,null),Yt=Bt.exports,qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-me-wrap"},[s("default-layout",[s("div",{staticClass:"container"},[s("h1",[t._v("My Account")]),s("tabs"),s("hr"),t.logged?s("router-view"):s("div",[s("div",{staticClass:"alert alert-danger"},[t._v("You must be logged in to view this page")])])],1)])],1)},Gt=[],Ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/me/profile"}},[t._v("Profile")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/me/reminders"}},[t._v("Reminders")])],1)])},Jt=[],Rt={},Wt=Object(y["a"])(Rt,Ht,Jt,!1,null,null,null),Kt=Wt.exports,Qt={data:function(){return{logged:!1}},mounted:function(){this.logged=!!this.$root.user.id},components:{DefaultLayout:z,Tabs:Kt},watch:{"$root.user.id":function(t,e){this.logged=!!t}}},Vt=Qt,Xt=Object(y["a"])(Vt,qt,Gt,!1,null,null,null),Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"subpage subpage-me-profile"},[s("h3",[t._v("My Profile")]),s("form",{staticClass:"profile-form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[t._v("Image")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"p-2"},[t.user.image?s("img",{staticClass:"img-fluid",attrs:{src:t.userImage,alt:""}}):s("div",{staticClass:"text-center"},[t._v("\n                            No Image\n                        ")])])]),s("div",{staticClass:"col-lg-8"},[s("input",{ref:"file",staticClass:"form-control-file",attrs:{type:"file"}})])])]),t._m(0)])])},ee=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary"},[t._v("Update Profile")])])}],se={data:function(){return{user:{},file:null}},mounted:function(){this.setUser()},methods:{setUser:function(){this.user=Object.assign({},this.user,{name:this.$root.user.name,image:this.$root.user.image,email:this.$root.user.email})},onSubmit:function(){var t=this,e={name:this.user.name,email:this.user.email};this.$refs.file.files.length&&(e.file=this.$refs.file.files[0]),this.$root.user.update(e).then(function(e){console.log("result",e.user.image,"vs",t.$root.user.image),t.setUser()})}},computed:{userImage:function(){var t=this.user.image;return"localhost:8080"==window.location.host&&(t="http://localhost:3333"+this.user.image),t}},watch:{"$root.user.id":function(t,e){this.setUser()}}},ae=se,ne=Object(y["a"])(ae,te,ee,!1,null,null,null),ie=ne.exports,re=[{path:"/",component:rt},{path:"/categories",component:bt},{path:"/friends",component:Yt},{path:"/login",component:xt},{path:"/me",component:Zt,children:[{path:"profile",component:ie}]}],oe=new n["a"]({routes:Object(o["a"])(re),linkActiveClass:"active",linkExactActiveClass:"active"}),ce=oe,ue={name:"app",router:ce,mounted:function(){var t=this;g.sessionGet().then(function(e){var s=e.session;s.user&&t.user.login(s.user),s.tasks&&t.tasks.setSessionTasks(s.tasks)})},data:function(){return{user:m,tasks:v}},components:{}},le=ue,de=Object(y["a"])(le,i,r,!1,null,null,null),fe=de.exports;a["a"].use(n["a"]),a["a"].config.productionTip=!1;new a["a"](fe).$mount("#app")},cbcc:function(t,e,s){},d736:function(t,e,s){},da9e:function(t,e,s){"use strict";var a=s("cbcc"),n=s.n(a);n.a},ec63:function(t,e,s){}});
//# sourceMappingURL=app.js.map