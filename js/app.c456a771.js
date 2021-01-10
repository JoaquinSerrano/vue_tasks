(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/my-first-project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c80":function(t,e,n){},"235f":function(t,e,n){"use strict";n("8944")},5289:function(t,e,n){"use strict";n("74c1")},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"GET_TASK",(function(){return tt})),n.d(r,"ADD_TASK",(function(){return et})),n.d(r,"REMOVE_TASK",(function(){return nt})),n.d(r,"SEARCH_TASK",(function(){return rt}));var a={};n.r(a),n.d(a,"getTasks",(function(){return ot})),n.d(a,"addTask",(function(){return lt})),n.d(a,"changeState",(function(){return dt})),n.d(a,"removeTask",(function(){return pt})),n.d(a,"removeAllTasks",(function(){return kt}));var s={};n.r(s),n.d(s,"completedTasks",(function(){return ht})),n.d(s,"inCompletedTasks",(function(){return vt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Filtro"),n("Main")],1)},c=[],l=n("5530"),u=n("2f62"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"py-2 px-3",attrs:{fluid:"",tag:"header"}},[n("b-row",[n("b-col",[n("h1",[t._v("Lista de Tareas")])])],1)],1)},f=[],p={},m=p,k=(n("ffba"),n("2877")),b=Object(k["a"])(m,d,f,!1,null,null,null),h=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"mt-5"},[n("b-col",{staticClass:"filter-wrapper"},[n("div",{staticClass:"filter-wrapper__form"},[n("b-form-input",{attrs:{placeholder:"Buscar Tarea"},on:{input:function(e){return t.SEARCH_TASK(e)}}})],1),n("div",{staticClass:"button-group"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal",modifiers:{"my-modal":!0}}],attrs:{variant:"primary"}},[n("b-icon",{attrs:{icon:"clipboard-plus"}}),t._v(" Nueva Tarea ")],1),n("b-button",{attrs:{variant:"danger"},on:{click:t.removeAllTasks}},[n("b-icon",{attrs:{icon:"x-circle"}}),t._v(" Eliminar todas las tareas ")],1)],1)])],1),n("modal-form")],1)},T=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"my-modal",title:"Añadir tarea","ok-title":"Guardar","cancel-title":"Cancelar"},on:{ok:t.handleOk}},[n("div",{staticClass:"d-block"},[n("b-form",[n("b-form-group",{attrs:{id:"input-group-1",label:"Nombre Tarea","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"text",required:""},model:{value:t.titleTask,callback:function(e){t.titleTask=e},expression:"titleTask"}})],1),n("b-form-group",{attrs:{label:"Descripción","label-for":"textarea"}},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Descripción de la tarea...",rows:"3","max-rows":"6"},model:{value:t.descriptionTask,callback:function(e){t.descriptionTask=e},expression:"descriptionTask"}})],1)],1)],1)])},g=[],w=n("11c1"),_={data:function(){return{titleTask:"",descriptionTask:""}},methods:Object(l["a"])(Object(l["a"])({},Object(u["b"])(["addTask"])),{},{handleOk:function(){var t={id:Object(w["v4"])(),title:this.titleTask,description:this.descriptionTask,completed:!1};this.addTask(t)}})},j=_,y=Object(k["a"])(j,O,g,!1,null,"67e51b63",null),x=y.exports,C={components:{ModalForm:x},methods:Object(l["a"])(Object(l["a"])({},Object(u["d"])(["SEARCH_TASK"])),Object(u["b"])(["removeAllTasks"]))},R=C,S=(n("235f"),Object(k["a"])(R,v,T,!1,null,null,null)),A=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"mt-5",attrs:{"align-h":"between"}},[n("b-col",{attrs:{md:"5"}},[n("ListCards",{attrs:{title:"Tareas Pendientes",tasks:t.inCompletedTasks}})],1),n("b-col",{attrs:{md:"5"}},[n("ListCards",{attrs:{title:"Tareas Realizadas",tasks:t.completedTasks}})],1)],1)],1)},D=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.title))]),t._l(t.tasks,(function(e){return n("card",{key:e.id,attrs:{task:e},on:{handleRemoveTask:t.handleRemoveTask}})})),n("b-modal",{ref:"mi-modal",on:{ok:t.handleOk}},[t._v("¿Seguro que quieres eliminar esta tarea?")])],2)},K=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"mt-3 position-relative",class:t.taskClass,attrs:{title:t.task.title}},[t.showDescription?n("b-card-text",[t._v(" "+t._s(t.task.description)+" ")]):t._e(),n("a",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(e){t.showDescription=!t.showDescription}}},[t._v(t._s(t.linkOne))]),n("b-link",{staticClass:"card-link",attrs:{href:"#"},on:{click:function(e){return t.changeState(t.task.id)}}},[t._v(t._s(t.linkTwo))]),n("span",{staticClass:"position-absolute h5",on:{click:function(e){return t.removeTask(t.task.id)}}},[n("b-icon",{staticClass:"rounded-circle bg-danger",attrs:{icon:"x-circle",variant:"light"}})],1)],1)],1)},P=[],q={props:{task:{type:Object,requred:!0,default:function(){}}},data:function(){return{showDescription:!1}},computed:{taskClass:function(){return!0===this.task.completed?"task-item-completed":"task-item-uncompleted"},linkOne:function(){return!1===this.showDescription?"Ver más":"Ver menos"},linkTwo:function(){return!1===this.task.completed?"Terminada":"Volver"}},methods:Object(l["a"])(Object(l["a"])({},Object(u["b"])(["changeState"])),{},{removeTask:function(t){this.$emit("handleRemoveTask",t)}})},L=q,H=(n("5289"),Object(k["a"])(L,M,P,!1,null,"03920a6c",null)),V=H.exports,F={components:{Card:V},props:{tasks:{type:Array,required:!0,default:function(){return[]}},title:{type:String,required:!0}},data:function(){return{idTaskToRemove:null}},methods:Object(l["a"])(Object(l["a"])({},Object(u["b"])(["removeTask"])),{},{handleRemoveTask:function(t){this.$refs["mi-modal"].show(),this.idTaskToRemove=t},handleOk:function(){this.removeTask(this.idTaskToRemove)}})},G=F,N=Object(k["a"])(G,$,K,!1,null,null,null),B=N.exports,J={components:{ListCards:B},computed:Object(l["a"])({},Object(u["c"])(["completedTasks","inCompletedTasks"]))},z=J,I=Object(k["a"])(z,E,D,!1,null,null,null),Q=I.exports,U={name:"App",components:{Header:h,Filtro:A,Main:Q},created:function(){this.getTasks()},methods:Object(l["a"])({},Object(u["b"])(["getTasks"]))},W=U,X=(n("5c0b"),Object(k["a"])(W,o,c,!1,null,null,null)),Y=X.exports,Z={tasks:[],searchedTask:""};n("4de4");function tt(t,e){t.tasks=e}function et(t,e){t.tasks.push(e)}function nt(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e}))}function rt(t,e){t.searchedTask=e}n("96cf");var at=n("1da1"),st=n("af0d"),it=new st["a"]("TasksDB");function ot(t){return ct.apply(this,arguments)}function ct(){return ct=Object(at["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,it.collection("tasks").get();case 4:r=t.sent,n("GET_TASK",r),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),ct.apply(this,arguments)}function lt(t,e){return ut.apply(this,arguments)}function ut(){return ut=Object(at["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,it.collection("tasks").add(n);case 3:r("ADD_TASK",n);case 4:case"end":return t.stop()}}),t)}))),ut.apply(this,arguments)}function dt(t,e){return ft.apply(this,arguments)}function ft(){return ft=Object(at["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,a=e.dispatch,console.log(n),s=r.tasks.filter((function(t){return t.id===n})),console.log(s[0].completed),t.next=6,it.collection("tasks").doc({id:n}).update({completed:!s[0].completed});case 6:a("getTasks");case 7:case"end":return t.stop()}}),t)}))),ft.apply(this,arguments)}function pt(t,e){return mt.apply(this,arguments)}function mt(){return mt=Object(at["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,it.collection("tasks").doc({id:n}).delete();case 3:r("REMOVE_TASK",n);case 4:case"end":return t.stop()}}),t)}))),mt.apply(this,arguments)}function kt(t){return bt.apply(this,arguments)}function bt(){return bt=Object(at["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.next=3,it.collection("tasks").delete();case 3:n("getTasks");case 4:case"end":return t.stop()}}),t)}))),bt.apply(this,arguments)}n("caad"),n("2532");function ht(){return Z.searchedTask.length>2?Z.tasks.filter((function(t){return!0===t.completed&&t.title.toLowerCase().includes(Z.searchedTask)})):Z.tasks.filter((function(t){return!0===t.completed}))}function vt(){return Z.searchedTask.length>2?Z.tasks.filter((function(t){return!1===t.completed&&t.title.toLowerCase().includes(Z.searchedTask)})):Z.tasks.filter((function(t){return!1===t.completed}))}var Tt={state:Z,mutations:r,getters:s,actions:a};i["default"].use(u["a"]);var Ot=new u["a"].Store({modules:{tasks:Tt}}),gt=n("5f5b"),wt=n("b1e0");n("f9e3"),n("2dd8");i["default"].use(gt["a"]),i["default"].use(wt["a"]);var _t=n("1dce"),jt=n.n(_t);i["default"].use(jt.a),i["default"].config.productionTip=!1,new i["default"]({store:Ot,render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"74c1":function(t,e,n){},8944:function(t,e,n){},"9c0c":function(t,e,n){},ffba:function(t,e,n){"use strict";n("0c80")}});
//# sourceMappingURL=app.c456a771.js.map