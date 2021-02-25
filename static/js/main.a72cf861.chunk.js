(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{64:function(e,t,n){e.exports=n(78)},69:function(e,t,n){},70:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),l=n.n(c),r=(n(69),n(30)),o=n(20),u=n(25),d=n(16),s=(n(70),n(119)),m=n(109),f=n(110);function v(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],l=n[1],r=Object(a.useState)(null),o=Object(d.a)(r,2),u=o[0],v=o[1],b=function(){""!=c.trim()?(e.addItem(c),l("")):v("Title is required")};return i.a.createElement("div",null,i.a.createElement(s.a,{variant:"outlined",value:c,onChange:function(e){l(e.currentTarget.value)},onKeyPress:function(e){v(null),13===e.charCode&&b()},error:!!u,label:"Title",helperText:u}),i.a.createElement(m.a,{color:"primary",onClick:b},i.a.createElement(f.a,null)))}var b=n(120),j=n(112),E=n(111);function O(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],l=n[1],r=Object(a.useState)(e.value),o=Object(d.a)(r,2),u=o[0],m=o[1],f=function(){l(!c),e.onChange(u)};return c?i.a.createElement(s.a,{value:u,autoFocus:!0,onBlur:f,onChange:function(e){m(e.currentTarget.value)},variant:"outlined"}):i.a.createElement("span",{onDoubleClick:f},e.value)}function h(e){return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(O,{value:e.title,onChange:function(t){e.newTitleTodolist(t,e.id)}}),i.a.createElement(m.a,{onClick:function(){return e.removeTodolist(e.id)}},i.a.createElement(E.a,null))),i.a.createElement(v,{addItem:function(t){e.addTask(t,e.id)}}),i.a.createElement("div",null,e.tasks.map((function(t){return i.a.createElement("div",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement(b.a,{onChange:function(n){var a=n.currentTarget.checked;e.changeTaskStatus(t.id,a,e.id)},checked:t.isDone,color:"primary"}),i.a.createElement(O,{value:t.title,onChange:function(n){e.newTitleTask(n,e.id,t.id)}}),i.a.createElement(m.a,{onClick:function(){return e.removeTask(t.id,e.id)}},i.a.createElement(E.a,null)))}))),i.a.createElement("div",null,i.a.createElement(j.a,{onClick:function(){e.changeFilter("all",e.id)},color:"default",variant:"all"===e.filter?"outlined":"text"},"All"),i.a.createElement(j.a,{onClick:function(){e.changeFilter("active",e.id)},color:"primary",variant:"active"===e.filter?"outlined":"text"},"Active"),i.a.createElement(j.a,{onClick:function(){e.changeFilter("completed",e.id)},color:"secondary",variant:"completed"===e.filter?"outlined":"text"},"Completed")))}var k=n(12),p=n(113),g=n(114),T=n(116),C=n(117),D=n(118),w=n(79),y=n(115);var S=function(){var e,t=Object(k.v1)(),n=Object(k.v1)(),c=Object(a.useState)([{id:t,title:"What to learn",filter:"all"},{id:n,title:"What to byu",filter:"all"}]),l=Object(d.a)(c,2),s=l[0],f=l[1],b=Object(a.useState)((e={},Object(u.a)(e,t,[{id:Object(k.v1)(),title:"HTML&CSS",isDone:!0},{id:Object(k.v1)(),title:"JS",isDone:!0},{id:Object(k.v1)(),title:"ReactJS",isDone:!1},{id:Object(k.v1)(),title:"Rest API",isDone:!1},{id:Object(k.v1)(),title:"GraphQL",isDone:!1}]),Object(u.a)(e,n,[{id:Object(k.v1)(),title:"Milk",isDone:!0},{id:Object(k.v1)(),title:"React book",isDone:!0},{id:Object(k.v1)(),title:"Bread",isDone:!1}]),e)),E=Object(d.a)(b,2),O=E[0],S=E[1];function x(e,t,n){var a=O[t].find((function(e){return e.id===n}));a&&(a.title=e,S(Object(o.a)({},O)))}function F(e,t){var n=s.find((function(e){return e.id===t}));n&&(n.title=e,f(Object(r.a)(s)))}function I(e,t){var n=s.find((function(e){return e.id===t}));n&&(n.filter=e,f(Object(r.a)(s)))}function A(e,t){var n=O[t];O[t]=n.filter((function(t){return t.id!==e})),S(Object(o.a)({},O))}function B(e,t){var n={id:Object(k.v1)(),title:e,isDone:!1},a=O[t];O[t]=[n].concat(Object(r.a)(a)),S(Object(o.a)({},O))}function J(e,t,n){var a=O[n].find((function(t){return t.id===e}));a&&(a.isDone=t,S(Object(o.a)({},O)))}function W(e){f(s.filter((function(t){return t.id!=e}))),delete O[e],S(Object(o.a)({},O))}return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{position:"static"},i.a.createElement(g.a,null,i.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(y.a,null)),i.a.createElement(T.a,{variant:"h6"},"News"),i.a.createElement(j.a,{color:"inherit"},"Login"))),i.a.createElement(C.a,{fixed:!0},i.a.createElement(D.a,{container:!0,style:{padding:"20px"}},i.a.createElement(v,{addItem:function(e){var t={id:Object(k.v1)(),title:e,filter:"all"};f([t].concat(Object(r.a)(s))),S(Object(o.a)(Object(o.a)({},O),{},Object(u.a)({},t.id,[])))}})),i.a.createElement(D.a,{container:!0,spacing:3},s.map((function(e){var t=O[e.id],n=t;return"active"===e.filter&&(n=t.filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(n=t.filter((function(e){return!0===e.isDone}))),i.a.createElement(D.a,{item:!0},i.a.createElement(w.a,{style:{padding:"10px"}},i.a.createElement(h,{key:e.id,id:e.id,title:e.title,tasks:n,removeTask:A,changeFilter:I,addTask:B,changeTaskStatus:J,removeTodolist:W,newTitleTask:x,newTitleTodolist:F,filter:e.filter})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.a72cf861.chunk.js.map