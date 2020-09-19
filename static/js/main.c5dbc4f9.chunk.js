(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{37:function(n,e,t){n.exports=t(49)},49:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(21),c=t.n(o),i=t(3),u=t(16),l=t(7),s=t(35),d=t(4);function f(){var n=Object(d.a)(['\n  font-family: "Lato", sans-serif;\n  text-transform: uppercase;\n  padding: 7px 0;\n  background-color: ',";\n  font-size: 15px;\n  border: 2px solid ",";\n  color: ",";\n  border-radius: 7px;\n  box-shadow: 2px 1px 2px 2px\n    ",";\n  text-shadow: 1px 1px 2px ",";\n  transition: 0.3s;\n\n  &:hover {\n    filter: brightness(110%);\n    cursor: pointer;\n    transform: scaleX(1.1);\n  }\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 5px 10px;\n    grid-template-columns: none;\n    grid-auto-flow: row;\n    grid-template-columns: 1;\n    justify-content: center;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(d.a)(["\n  padding: 7px 0;\n  border: 2px solid ",";\n  border-radius: 7px;\n  width: 100%;\n"]);return p=function(){return n},n}function m(){var n=Object(d.a)(["\n  grid-template-columns: 1fr;\n"]);return m=function(){return n},n}function x(){var n=Object(d.a)(["\n  margin: 30px 50px;\n  border: 3px solid ",";\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n  background-color: ",";\n  box-shadow: 2px 2px 3px 3px\n    ",";\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    grid-template-columns: 1fr;\n    margin: 10px 20px;\n  }\n"]);return x=function(){return n},n}var h=i.d.form(x(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.tan}),(function(n){return n.theme.colors.darkTransparentBlack}),(function(n){return n.theme.breakpoints.maxWidth})),b=Object(i.d)(h)(m()),k=i.d.input(p(),(function(n){return n.theme.colors.black})),g=i.d.button(f(),(function(n){return n.theme.colors.darkEbony}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.lightTrnsparentBlack}),(function(n){return n.theme.colors.mineShft}),(function(n){return n.theme.breakpoints.maxWidth})),v=t(8),j=t(20),E=function(n){return localStorage.setItem("tasks",JSON.stringify(n))},O=Object(j.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem("tasks"))||[],hideDoneTasks:!1,loading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDoneTasks:function(n){n.hideDoneTasks=!n.hideDoneTasks},toggleTasksDone:function(n,e){var t=n.tasks.findIndex((function(n){return n.id===e.payload}));n.tasks[t].done=!n.tasks[t].done},removeTasks:function(n,e){var t=n.tasks,r=t.findIndex((function(n){return n.id===e.payload}));t.splice(r,1)},allTasksDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t},loadingExampleTasks:function(n,e){var t=e.payload;n.loading=t}}}),w=O.actions,y=w.addTask,T=w.toggleHideDoneTasks,S=w.toggleTasksDone,C=w.removeTasks,D=w.allTasksDone,B=w.fetchExampleTasks,W=w.setTasks,z=w.loadingExampleTasks,I=function(n){return n.tasks},L=function(n){return I(n).tasks},N=function(n){return I(n).hideDoneTasks},M=function(n){L(n).every((function(n){return!n.done}))},A=function(n){return L(n).every((function(n){return n.done}))},F=function(n){return 0===L(n).length},P=function(n){return n.tasks.loading},U=O.reducer,H=function(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(null),i=Object(v.b)();return a.a.createElement(h,{onSubmit:function(n){n.preventDefault();var e=t.trim();""!==e&&(i(y({content:e,done:!1,id:Object(j.c)()})),o(""),c.current.focus())}},a.a.createElement("label",null,a.a.createElement(k,{ref:c,value:t,name:"task",type:"text",onChange:function(n){return o(n.target.value)},required:!0})),a.a.createElement(g,null,"add task"))};function J(){var n=Object(d.a)(["\n  color: ",";\n  text-decoration: none;\n"]);return J=function(){return n},n}function R(){var n=Object(d.a)(["\n      text-decoration: line-through;\n    "]);return R=function(){return n},n}function G(){var n=Object(d.a)(["\n  padding: 5px 15px;\n\n  ",";\n"]);return G=function(){return n},n}function Y(){var n=Object(d.a)(['\n  font-family: "FontAwesome";\n  font-style: normal;\n  font-size: 20px;\n']);return Y=function(){return n},n}function _(){var n=Object(d.a)(["\n      background-color: ",";\n\n      &:hover {\n        filter: brightness(110%);\n      }\n      &:active {\n        filter: brightness(120%);\n      }\n    "]);return _=function(){return n},n}function q(){var n=Object(d.a)(["\n      background-color: ",";\n      transition: 0.3s;\n      transition: 0.3s;\n\n      &:hover {\n        filter: brightness (110%);\n      }\n      &:active {\n        filter: brightness(120%);\n      }\n    "]);return q=function(){return n},n}function X(){var n=Object(d.a)(["\n  border: none;\n  width: 100%;\n  max-width: 30px;\n  height: 30px;\n  margin: 10px;\n  background-color: ",";\n  box-shadow: 0.5px 0.5px 3px 3px ",";\n\n  ",";\n\n  ",";\n"]);return X=function(){return n},n}function $(){var n=Object(d.a)(["\n      display: none;\n    "]);return $=function(){return n},n}function K(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  max-width: 80%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  text-transform: uppercase;\n\n  ","\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 0;\n    max-width: 100%;\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(d.a)(["\n  list-style: none;\n  padding: 5px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    padding: 0px;\n  }\n"]);return Q=function(){return n},n}var V=i.d.ul(Q(),(function(n){return n.theme.breakpoints.maxWidth})),Z=i.d.li(K(),(function(n){return n.hidden&&Object(i.c)($())}),(function(n){return n.theme.breakpoints.maxWidth})),nn=i.d.button(X(),(function(n){return n.theme.colors.chartreuse}),(function(n){return n.theme.colors.black}),(function(n){return n.doneTasks&&Object(i.c)(q(),(function(n){return n.theme.colors.chartreuse}))}),(function(n){return n.removeTasks&&Object(i.c)(_(),(function(n){return n.theme.colors.crimson}))})),en=i.d.i(Y()),tn=i.d.p(G(),(function(n){return n.done&&Object(i.c)(R())})),rn=Object(i.d)(u.b)(J(),(function(n){return n.theme.colors.black})),an=function(){var n=Object(l.h)(),e=new URLSearchParams(n.search).get("search"),t=Object(v.c)((function(n){return function(n,e){var t=L(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(v.c)(N),o=Object(v.b)();return a.a.createElement(V,null,t.map((function(n){return a.a.createElement(Z,{key:n.id,hidden:n.done&&r},a.a.createElement(nn,{doneTasks:!0,onClick:function(){o(S(n.id))}},n.done?a.a.createElement(en,{className:"fas fa-check"}):""),a.a.createElement(tn,{done:n.done},a.a.createElement(rn,{to:"/tasks/".concat(n.id)},n.content)," "),a.a.createElement(nn,{removeTasks:!0,onClick:function(){o(C(n.id))}},a.a.createElement(en,{className:"fas fa-trash"})))})))};function on(){var n=Object(d.a)(["\n      display: none;\n    "]);return on=function(){return n},n}function cn(){var n=Object(d.a)(["\n  background-color: ",";\n  border-radius: 7px;\n  border: 3px solid black;\n  box-shadow: 2px 1px 2px 2px\n    ",";\n  text-shadow: 1px 1px 2px ",";\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 50px;\n  padding: 5px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 0px 10px;\n  }\n\n  ","\n"]);return cn=function(){return n},n}var un=i.d.section(cn(),(function(n){return n.theme.colors.tan}),(function(n){return n.theme.colors.lightTransparentBlack}),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.maxWidth}),(function(n){return n.hidden&&Object(i.c)(on())}));function ln(){var n=Object(d.a)(["\n  border: 1px solid black;\n  border-radius: 7px;\n  background-color: ",";\n  text-shadow: 2px 2px 2px ",";\n  text-transform: uppercase;\n  padding: 5px;\n  margin-right: 5px;\n\n  &:hover {\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n  }\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 10px;\n    flex-direction: column;\n  }\n"]);return ln=function(){return n},n}var sn=i.d.button(ln(),(function(n){return n.theme.colors.twine}),(function(n){return n.theme.colors.gallery}),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.colors.tan}),(function(n){return n.theme.breakpoints.maxWidth})),dn=function(){var n=Object(v.c)(I),e=n.tasks,t=n.hideDoneTasks,r=Object(v.c)(F),o=Object(v.c)(M),c=Object(v.c)(A),i=Object(v.b)();return a.a.createElement(un,{hidden:r},a.a.createElement(sn,{onClick:function(){i(T())},disabled:o},t?"Show":"Hide"," completed tasks"),a.a.createElement(sn,{onClick:function(){i(D(e.done))},disabled:c},"Mark all tasks as completed"))};function fn(){var n=Object(d.a)(["\n  font-size: 20px;\n"]);return fn=function(){return n},n}function pn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]);return pn=function(){return n},n}var mn=i.d.div(pn()),xn=(i.d.p(fn()),function(){var n=Object(v.b)(),e=Object(v.c)(P);return a.a.createElement(mn,null,a.a.createElement(sn,{onClick:function(){n(B())},disabled:e},e?"Loading...":"Add example tasks"))});function hn(){var n=Object(d.a)(["\n  background-color: ",";\n  border-radius: 7px;\n  border: 3px solid ",";\n  box-shadow: 2px 1px 2px 2px\n    ",";\n  text-shadow: 1px 1px 2px ",";\n  margin: 20px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 10px;\n  }\n"]);return hn=function(){return n},n}var bn=i.d.section(hn(),(function(n){return n.theme.colors.tan}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.lightTransparentBlack}),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.breakpoints.maxWidth})),kn=function(n){var e=n.title,t=n.body;return a.a.createElement(bn,null,e,t)};function gn(){var n=Object(d.a)(['\n  padding: 10px;\n  font-family: "Galada", cursive;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 50px;\n  border: 5px solid ',";\n  color: ",";\n  border-radius: 10px;\n  background-color: ",";\n  box-shadow: 5px 5px 2px 2px\n    ",";\n  text-shadow: 4px 4px 2px ",";\n  letter-spacing: 2pxF;\n"]);return gn=function(){return n},n}var vn=i.d.h1(gn(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.spicyMix}),(function(n){return n.theme.colors.lightTransparentBlack}),(function(n){return n.theme.colors.mineShaft})),jn=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement(vn,null,e))};function En(){var n=Object(d.a)(["\n  background-color: ",";\n  padding-top: 20px;\n  border: 4px solid ",";\n  border-radius: 10px;\n  box-shadow: 5px 5px 6px 6px ",";\n  margin: 15px;\n"]);return En=function(){return n},n}var On=i.d.main(En(),(function(n){return n.theme.colors.dawnPink}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.darkTrnsparentBlack})),wn=function(n){var e=n.children;return a.a.createElement(On,null,e)};function yn(){var n=Object(d.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]);return yn=function(){return n},n}var Tn=i.d.div(yn()),Sn=function(n){var e=n.children;return a.a.createElement(Tn,null,e)};function Cn(){var n=Object(d.a)(["\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 30px;\n  text-shadow: 2px 2px 2px ",";\n  border-bottom: 2px solid ",";\n  padding: 20px;\n  margin: 0 20px;\n"]);return Cn=function(){return n},n}var Dn=i.d.h2(Cn(),(function(n){return n.theme.colors.gallery}),(function(n){return n.theme.colors.black})),Bn=function(n){var e=n.title;return a.a.createElement(Dn,null,e)},Wn=function(){var n=function(n){var e=Object(l.h)();return new URLSearchParams(e.search).get(n)}("search"),e=function(){var n=Object(l.h)(),e=Object(l.g)(),t=new URLSearchParams(n.search);return function(r){var a=r.value,o=r.key;void 0===a?t.delete(o):t.set(o,a),e.push("".concat(n.pathname,"?").concat(t.toString()))}}();return a.a.createElement(b,null,a.a.createElement(k,{placeholder:"Filter tasks",value:n||"",onChange:function(n){var t=n.target;e({key:"search",value:""!==t.value.trim()?t.value:void 0})}}))};var zn=function(){return a.a.createElement(Sn,null,a.a.createElement(jn,{title:"To do list"}),a.a.createElement(wn,null,a.a.createElement(xn,null),a.a.createElement(H,null),a.a.createElement(Wn,null),a.a.createElement(dn,null),a.a.createElement(kn,{title:a.a.createElement(Bn,{title:"task list"}),body:a.a.createElement(an,null)})))};function In(){var n=Object(d.a)(["\n  text-shadow: none;\n  padding: 0 10px;\n"]);return In=function(){return n},n}var Ln=i.d.p(In());var Nn=function(){var n=Object(l.i)().id,e=Object(v.c)((function(e){return function(n,e){return L(n).find((function(n){return n.id===e}))}(e,n)}));return a.a.createElement(Sn,null,a.a.createElement(jn,{title:"task details"}),a.a.createElement(wn,null,a.a.createElement(kn,{title:a.a.createElement(Bn,{title:e?e.content:"Task not found \ud83d\ude41"}),body:a.a.createElement(Ln,null,a.a.createElement("strong",null,"Completed: "),e.done?"Yes \ud83d\udc4d":"No \ud83d\ude1f"," ")})))};var Mn=function(){return a.a.createElement(Sn,null,a.a.createElement(jn,{title:"About author"}),a.a.createElement(wn,null,a.a.createElement(kn,{title:a.a.createElement(Bn,{title:"Magdalena Checinski"}),body:a.a.createElement(Ln,null,a.a.createElement(a.a.Fragment,null,"Hi! \ud83d\ude03 ",a.a.createElement("br",null),"I am a junior frontend developer. I have been learning programming since 2020. I started with the"," ",a.a.createElement("strong",null,'"Become a Frontend Developer"')," course at Youcode Academy. This To Do List is one of the applications written for this course."))})))};function An(){var n=Object(d.a)(["\n  text-decoration: none;\n  color: ",";\n  &."," {\n    background-color: ",";\n    border-radius: 7px;\n    border: 2px solid ",";\n    box-shadow: 2px 1px 2px 2px\n      ",";\n    text-shadow: 1px 1px 2px ",";\n    padding: 2px;\n  }\n"]);return An=function(){return n},n}function Fn(){var n=Object(d.a)(["\n \n  font-size: 18px;\n  margin: 10px;\n"]);return Fn=function(){return n},n}function Pn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  list-style: none;\n"]);return Pn=function(){return n},n}function Un(){var n=Object(d.a)(["\n  text-transform: uppercase;\n  margin: 5px;\n  border: 3px solid ",";\n  color: ",";\n  border-radius: 10px;\n  background-color: ",";\n  text-shadow: 2px 2px 1px ",";\n  letter-spacing: 2px;\n"]);return Un=function(){return n},n}var Hn=i.d.nav(Un(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.spicyMix}),(function(n){return n.theme.colors.mineShaft})),Jn=i.d.ul(Pn()),Rn=i.d.li(Fn()),Gn=Object(i.d)(u.c).attrs((function(){return{activeClassName:"active"}}))(An(),(function(n){return n.theme.colors.white}),"active",(function(n){return n.theme.colors.tan}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.lightTransparentBlack}),(function(n){return n.theme.colors.mineShaft})),Yn=function(){return a.a.createElement(Hn,null,a.a.createElement(Jn,null,a.a.createElement(Rn,null,a.a.createElement(Gn,{activeClassName:"active",to:"/tasks"},"Tasks List")),a.a.createElement(Rn,null,a.a.createElement(Gn,{activeClassName:"active",to:"/author"},"Author"))))},_n=function(){return a.a.createElement(u.a,null,a.a.createElement(Yn,null),a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/tasks/:id"},a.a.createElement(Nn,null)),a.a.createElement(l.b,{path:"/tasks"},a.a.createElement(zn,null)),a.a.createElement(l.b,{path:"/author"},a.a.createElement(Mn,null)),a.a.createElement(l.b,{path:"/"},a.a.createElement(l.a,{to:"/tasks"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function qn(){var n=Object(d.a)(['\nhtml {\n    box-sizing: border-box;\n    font-family: "Lato", sans-serif;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-image: url(https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_960_720.jpg);\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n']);return qn=function(){return n},n}var Xn=Object(i.b)(qn()),$n=t(36),Kn=t(14),Qn=t.n(Kn),Vn=t(10),Zn=t(34),ne=function(){var n=Object(Zn.a)(Qn.a.mark((function n(){var e;return Qn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ee=Qn.a.mark(ae),te=Qn.a.mark(oe),re=Qn.a.mark(ce);function ae(){var n;return Qn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Vn.d)(z(!0));case 3:return e.next=5,Object(Vn.c)(1e3);case 5:return e.next=7,Object(Vn.b)(ne);case 7:return n=e.sent,e.next=10,Object(Vn.d)(W(n));case 10:return e.next=12,Object(Vn.d)(z(!1));case 12:e.next=22;break;case 14:return e.prev=14,e.t0=e.catch(0),e.next=18,Object(Vn.b)(console.error,e.t0);case 18:return e.next=20,Object(Vn.b)(alert,"Oops, something's wrong, sorry ");case 20:return e.next=22,Object(Vn.d)(z(!1));case 22:case"end":return e.stop()}}),ee,null,[[0,14]])}function oe(){var n;return Qn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Vn.e)(L);case 2:return n=e.sent,e.next=5,Object(Vn.b)(E,n);case 5:case"end":return e.stop()}}),te)}function ce(){return Qn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Vn.g)(B.type,ae);case 2:return n.next=4,Object(Vn.f)("*",oe);case 4:case"end":return n.stop()}}),re)}var ie=Qn.a.mark(ue);function ue(){return Qn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Vn.a)([ce()]);case 2:case"end":return n.stop()}}),ie)}var le=Object($n.a)(),se=Object(j.a)({reducer:{tasks:U},middleware:[le]});le.run(ue);var de=se;c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v.a,{store:de},a.a.createElement(i.a,{theme:{colors:{black:"#000000",darkTransparentBlack:"#000000b3",lightTransparentBlack:"#00000066",darkGrey:"#333333",white:"#ffffff",mineShaft:"#222222",twine:"#c39f6f",gallery:"#eeeeee",tan:"#c7a67a",darkEbony:"#341f04",spicyMix:"#8b6e46",dawnPink:"#f0e9e0",chartreuse:"#7fff00",crimson:"#dc143c"},breakpoints:{maxWidth:414}}},a.a.createElement(Xn,null),a.a.createElement(_n,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.c5dbc4f9.chunk.js.map