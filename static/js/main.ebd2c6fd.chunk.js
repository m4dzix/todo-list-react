(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),s=(n(13),n(7)),i=n(3),l=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=r.trim();""!==n&&(t(n),s(""))}},o.a.createElement("label",null,o.a.createElement("input",{className:"form__input",value:r,name:"task",type:"text",onChange:function(e){return s(e.target.value)},required:!0})),o.a.createElement("button",{className:"form__button"},"add task"))}),m=(n(15),function(e){var t=e.tasks,n=e.hideDoneTasks,a=e.removeTask,c=e.toggleDoneTask;return o.a.createElement("ul",{className:"section__taskList"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"section__taskItem ".concat(e.done&&n?"section__taskItem--hidden":"")},o.a.createElement("button",{onClick:function(){c(e.id)},className:"taskItem__button taskItem__button--doneTask"},e.done?o.a.createElement("i",{className:"fas fa-check"}):""),o.a.createElement("p",{className:"list__paragraph ".concat(e.done?"list__paragraph--done":"")},e.content),o.a.createElement("button",{onClick:function(){a(e.id)},className:" taskItem__button taskItem__button--removeTask"},o.a.createElement("i",{className:"fas fa-trash"})))})))}),d=(n(16),function(e){var t=e.tasks,n=e.hideDoneTasks,a=e.toggleHideDoneTasks,c=e.allTasksDone;return o.a.createElement("section",{className:'"section section__toggleButtons '.concat(t.length?"":"section__button--hidden")},o.a.createElement("button",{onClick:a,className:"section__button",disabled:t.every((function(e){return!e.done}))},n?"Show":"Hide"," completed tasks"),o.a.createElement("button",{onClick:c,className:"section__button",disabled:t.every((function(e){return e.done}))},"Mark all tasks as completed"))}),f=(n(17),function(e){var t=e.title,n=e.body;return o.a.createElement("section",{className:"section"},t,n)}),k=(n(18),function(e){var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},t))}),_=(n(19),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},t)}),b=(n(20),function(e){var t=e.children;return o.a.createElement("div",{className:"wrapper"},t)}),h=(n(21),function(e){var t=e.title;return o.a.createElement("h2",{className:"section__header"},t)});var E=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,content:"Find a job as a developer",done:!1},{id:2,content:"Eat dinner",done:!0}]),E=Object(l.a)(r,2),v=E[0],p=E[1];return o.a.createElement(b,null,o.a.createElement(k,{title:"To do list"}),o.a.createElement(_,null,o.a.createElement(u,{addNewTask:function(e){p((function(t){return[].concat(Object(s.a)(t),[{content:e,done:!1,id:t.length?t[t.length-1].id+1:1}])}))}}),o.a.createElement(d,{tasks:v,hideDoneTasks:n,toggleHideDoneTasks:function(){c((function(e){return!e}))},allTasksDone:function(){p((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{done:!0})}))}))}}),o.a.createElement(f,{title:o.a.createElement(h,{title:"task list"}),body:o.a.createElement(m,{removeTask:function(e){p((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleDoneTask:function(e){p((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t}))}))},tasks:v,hideDoneTasks:n})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ebd2c6fd.chunk.js.map