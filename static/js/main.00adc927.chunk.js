(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),s=a.n(c),r=(a(8),a(9),function(){return o.a.createElement("form",{className:"form"},o.a.createElement("label",null,o.a.createElement("input",{className:"form__input",name:"task",type:"text",required:!0})),o.a.createElement("button",{className:"form__button"},"add task"))}),l=(a(10),function(e){var t=e.tasks,a=e.hideDoneTasks;return o.a.createElement("ul",{className:"section__taskList"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"section__taskItem ".concat(e.done&&a?"section__taskItem--hidden":"")},o.a.createElement("button",{className:"taskItem__button taskItem__button--doneTask"},e.done?o.a.createElement("i",{className:"fas fa-check"}):""),o.a.createElement("p",{className:"list__paragraph ".concat(e.done?"list__paragraph--done":"")},e.content),o.a.createElement("button",{className:" taskItem__button taskItem__button--removeTask"},o.a.createElement("i",{className:"fas fa-trash"})))})))}),i=(a(11),function(e){var t=e.tasks,a=e.hideDoneTasks;return o.a.createElement("section",{className:'"section section__toggleButtons '.concat(t.length?"":"section__button--hidden")},o.a.createElement("button",{className:"section__button",disabled:t.every((function(e){return!e.done}))},a?"Show":"Hide"," completed tasks"),o.a.createElement("button",{className:"section__button",disabled:t.every((function(e){return e.done}))},"Mark all tasks as completed"))}),m=(a(12),function(e){var t=e.title,a=e.body;return o.a.createElement("section",{className:"section"},t,a)}),u=(a(13),function(e){var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},t))}),d=(a(14),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},t)}),_=(a(15),function(e){var t=e.children;return o.a.createElement("div",{className:"wrapper"},t)}),f=(a(16),function(e){var t=e.title;return o.a.createElement("h2",{className:"section__header"},t)}),E=[{id:1,content:"Find a job as a developer",done:!1},{id:2,content:"Eat dinner",done:!0}];var h=function(){return o.a.createElement(_,null,o.a.createElement(u,{title:"To do list"}),o.a.createElement(d,null,o.a.createElement(r,null),o.a.createElement(i,{tasks:E,hideDoneTasks:!1}),o.a.createElement(m,{title:o.a.createElement(f,{title:"task list"}),body:o.a.createElement(l,{tasks:E,hideDoneTasks:!1})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.00adc927.chunk.js.map