(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{34:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var r,a,o,c,i,l,s,u,d,m,p,f,x,h,b,k,g,v,E,j,O,w,y,T,S=t(0),D=t.n(S),C=t(21),B=t.n(C),z=t(3),W=t(16),L=t(7),I=t(32),N=t(4),A=z.d.form(r||(r=Object(N.a)(["\n  margin: 30px 50px;\n  border: 3px solid ",";\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n  background-color: ",";\n  box-shadow: 2px 2px 3px 3px\n    ",";\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    grid-template-columns: 1fr;\n    margin: 10px 20px;\n  }\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.tan}),(function(e){return e.theme.colors.darkTransparentBlack}),(function(e){return e.theme.breakpoints.maxWidth})),M=Object(z.d)(A)(a||(a=Object(N.a)(["\n  grid-template-columns: 1fr;\n"]))),F=z.d.input(o||(o=Object(N.a)(["\n  padding: 7px 0;\n  border: 2px solid ",";\n  border-radius: 7px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.black})),P=z.d.button(c||(c=Object(N.a)(['\n  font-family: "Lato", sans-serif;\n  text-transform: uppercase;\n  padding: 7px 0;\n  background-color: ',";\n  font-size: 15px;\n  border: 2px solid ",";\n  color: ",";\n  border-radius: 7px;\n  box-shadow: 2px 1px 2px 2px\n    ",";\n  text-shadow: 1px 1px 2px ",";\n  transition: 0.3s;\n\n  &:hover {\n    filter: brightness(110%);\n    cursor: pointer;\n    transform: scaleX(1.1);\n  }\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 5px 10px;\n    grid-template-columns: none;\n    grid-auto-flow: row;\n    grid-template-columns: 1;\n    justify-content: center;\n  }\n"])),(function(e){return e.theme.colors.darkEbony}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.lightTrnsparentBlack}),(function(e){return e.theme.colors.mineShft}),(function(e){return e.theme.breakpoints.maxWidth})),R=t(8),U=t(20),G=function(e){return localStorage.setItem("tasks",JSON.stringify(e))},H=Object(U.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem("tasks"))||[],hideDoneTasks:!1,loading:!1},reducers:{addTask:function(e,n){var t=e.tasks,r=n.payload;t.push(r)},toggleHideDoneTasks:function(e){e.hideDoneTasks=!e.hideDoneTasks},toggleTasksDone:function(e,n){var t=e.tasks.findIndex((function(e){return e.id===n.payload}));e.tasks[t].done=!e.tasks[t].done},removeTasks:function(e,n){var t=e.tasks,r=t.findIndex((function(e){return e.id===n.payload}));t.splice(r,1)},allTasksDone:function(e){e.tasks.forEach((function(e){return e.done=!0}))},removeAllTasks:function(e){e.tasks=[]},fetchExampleTasks:function(){},setTasks:function(e,n){var t=n.payload;e.tasks=t},loadingExampleTasks:function(e,n){var t=n.payload;e.loading=t}}}),J=H.actions,Y=J.addTask,_=J.toggleHideDoneTasks,q=J.toggleTasksDone,X=J.removeTasks,$=J.allTasksDone,K=J.removeAllTasks,Q=J.fetchExampleTasks,V=J.setTasks,Z=J.loadingExampleTasks,ee=function(e){return e.tasks},ne=function(e){return ee(e).tasks},te=function(e){return ee(e).hideDoneTasks},re=function(e){ne(e).every((function(e){return!e.done}))},ae=function(e){return ne(e).every((function(e){return e.done}))},oe=function(e){return 0===ne(e).length},ce=function(e){return e.tasks.loading},ie=H.reducer,le=function(){return(new Date).toLocaleDateString("en-GB",{hour:"numeric",minute:"numeric",second:"numeric",weekday:"long",day:"numeric",month:"long",year:"numeric"})},se=function(){var e=Object(S.useState)(""),n=Object(I.a)(e,2),t=n[0],r=n[1],a=Object(S.useRef)(null),o=Object(R.b)();return D.a.createElement(A,{onSubmit:function(e){e.preventDefault();var n=t.trim();if(""!==n){var c=le();o(Y({content:n,done:!1,id:Object(U.c)(),date:c})),r(""),a.current.focus()}}},D.a.createElement("label",null,D.a.createElement(F,{ref:a,value:t,name:"task",type:"text",onChange:function(e){return r(e.target.value)},required:!0})),D.a.createElement(P,null,"add task"))},ue=z.d.ul(i||(i=Object(N.a)(["\n  list-style: none;\n  padding: 5px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    padding: 0px;\n  }\n"])),(function(e){return e.theme.breakpoints.maxWidth})),de=z.d.li(l||(l=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  max-width: 80%;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  text-transform: uppercase;\n\n  ","\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 0;\n    max-width: 100%;\n  }\n"])),(function(e){return e.hidden&&Object(z.c)(s||(s=Object(N.a)(["\n      display: none;\n    "])))}),(function(e){return e.theme.breakpoints.maxWidth})),me=z.d.button(u||(u=Object(N.a)(["\n  border: none;\n  width: 100%;\n  max-width: 30px;\n  height: 30px;\n  margin: 10px;\n  background-color: ",";\n  box-shadow: 0.5px 0.5px 3px 3px ",";\n\n  ",";\n\n  ",";\n"])),(function(e){return e.theme.colors.chartreuse}),(function(e){return e.theme.colors.black}),(function(e){return e.doneTasks&&Object(z.c)(d||(d=Object(N.a)(["\n      background-color: ",";\n      transition: 0.3s;\n      transition: 0.3s;\n\n      &:hover {\n        filter: brightness (110%);\n      }\n      &:active {\n        filter: brightness(120%);\n      }\n    "])),(function(e){return e.theme.colors.chartreuse}))}),(function(e){return e.removeTasks&&Object(z.c)(m||(m=Object(N.a)(["\n      background-color: ",";\n\n      &:hover {\n        filter: brightness(110%);\n      }\n      &:active {\n        filter: brightness(120%);\n      }\n    "])),(function(e){return e.theme.colors.crimson}))})),pe=z.d.i(p||(p=Object(N.a)(['\n  font-family: "FontAwesome";\n  font-style: normal;\n  font-size: 20px;\n']))),fe=z.d.p(f||(f=Object(N.a)(["\n  padding: 5px 15px;\n\n  ",";\n"])),(function(e){return e.done&&Object(z.c)(x||(x=Object(N.a)(["\n      text-decoration: line-through;\n    "])))})),xe=Object(z.d)(W.b)(h||(h=Object(N.a)(["\n  color: ",";\n  text-decoration: none;\n"])),(function(e){return e.theme.colors.black})),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},n=e.id;return"/task/".concat(n)},be=function(){var e=Object(L.h)(),n=new URLSearchParams(e.search).get("search"),t=Object(R.c)((function(e){return function(e,n){var t=ne(e);return n&&""!==n.trim()?t.filter((function(e){return e.content.toUpperCase().includes(n.trim().toUpperCase())})):t}(e,n)})),r=Object(R.c)(te),a=Object(R.b)();return D.a.createElement(ue,null,t.map((function(e){return D.a.createElement(de,{key:e.id,hidden:e.done&&r},D.a.createElement(me,{doneTasks:!0,onClick:function(){a(q(e.id))}},e.done?D.a.createElement(pe,{className:"fas fa-check"}):""),D.a.createElement(fe,{done:e.done},D.a.createElement(xe,{to:he({id:e.id})},e.content)," "),D.a.createElement(me,{removeTasks:!0,onClick:function(){a(X(e.id))}},D.a.createElement(pe,{className:"fas fa-trash"})))})))},ke=z.d.section(b||(b=Object(N.a)(["\n  background-color: ",";\n  border-radius: 7px;\n  border: 3px solid black;\n  box-shadow: 2px 1px 2px 2px\n    ",";\n  text-shadow: 1px 1px 2px ",";\n  display: flex;\n  justify-content: flex-end;\n  margin: 0 50px;\n  padding: 5px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 0px 10px;\n  }\n\n  ","\n"])),(function(e){return e.theme.colors.tan}),(function(e){return e.theme.colors.lightTransparentBlack}),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.theme.breakpoints.maxWidth}),(function(e){return e.hidden&&Object(z.c)(k||(k=Object(N.a)(["\n      display: none;\n    "])))})),ge=z.d.button(g||(g=Object(N.a)(["\n  border: 1px solid black;\n  border-radius: 7px;\n  background-color: ",";\n  text-shadow: 2px 2px 2px ",";\n  text-transform: uppercase;\n  padding: 5px;\n  margin-right: 5px;\n\n  &:hover {\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n  }\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 10px;\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.colors.twine}),(function(e){return e.theme.colors.gallery}),(function(e){return e.theme.colors.darkGrey}),(function(e){return e.theme.colors.tan}),(function(e){return e.theme.breakpoints.maxWidth})),ve=function(){var e=Object(R.c)(ee),n=e.tasks,t=e.hideDoneTasks,r=Object(R.c)(oe),a=Object(R.c)(re),o=Object(R.c)(ae),c=Object(R.b)();return D.a.createElement(ke,{hidden:r},D.a.createElement(ge,{onClick:function(){c(_())},disabled:a},t?"Show":"Hide"," completed tasks"),D.a.createElement(ge,{onClick:function(){c($(n.done))},disabled:o},"Mark all tasks as completed"),D.a.createElement(ge,{onClick:function(){c(K())}},"Remove all tasks"))},Ee=z.d.div(v||(v=Object(N.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]))),je=(z.d.p(E||(E=Object(N.a)(["\n  font-size: 20px;\n"]))),function(){var e=Object(R.b)(),n=Object(R.c)(ce);return D.a.createElement(Ee,null,D.a.createElement(ge,{onClick:function(){e(Q())},disabled:n},n?"Loading...":"Add example tasks"))}),Oe=z.d.section(j||(j=Object(N.a)(["\n  background-color: ",";\n  border-radius: 7px;\n  border: 3px solid ",";\n  box-shadow: 2px 1px 2px 2px\n    ",";\n  text-shadow: 1px 1px 2px ",";\n  margin: 20px;\n\n  @media (max-width: ","px) and (orientation: portrait) {\n    margin: 10px;\n  }\n"])),(function(e){return e.theme.colors.tan}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.lightTransparentBlack}),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.theme.breakpoints.maxWidth})),we=function(e){var n=e.title,t=e.body;return D.a.createElement(Oe,null,n,t)},ye=z.d.h1(O||(O=Object(N.a)(['\n  padding: 10px;\n  font-family: "Galada", cursive;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 50px;\n  border: 5px solid ',";\n  color: ",";\n  border-radius: 10px;\n  background-color: ",";\n  box-shadow: 5px 5px 2px 2px\n    ",";\n  text-shadow: 4px 4px 2px ",";\n  letter-spacing: 2pxF;\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.spicyMix}),(function(e){return e.theme.colors.lightTransparentBlack}),(function(e){return e.theme.colors.mineShaft})),Te=function(e){var n=e.title;return D.a.createElement("header",null,D.a.createElement(ye,null,n))},Se=z.d.main(w||(w=Object(N.a)(["\n  background-color: ",";\n  padding-top: 20px;\n  border: 4px solid ",";\n  border-radius: 10px;\n  box-shadow: 5px 5px 6px 6px ",";\n  margin: 15px;\n"])),(function(e){return e.theme.colors.dawnPink}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.darkTrnsparentBlack})),De=function(e){var n=e.children;return D.a.createElement(Se,null,n)},Ce=z.d.div(y||(y=Object(N.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]))),Be=function(e){var n=e.children;return D.a.createElement(Ce,null,n)},ze=z.d.h2(T||(T=Object(N.a)(["\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 30px;\n  text-shadow: 2px 2px 2px ",";\n  border-bottom: 2px solid ",";\n  padding: 20px;\n  margin: 0 20px;\n"])),(function(e){return e.theme.colors.gallery}),(function(e){return e.theme.colors.black})),We=function(e){var n=e.title;return D.a.createElement(ze,null,n)},Le=function(){var e=function(e){var n=Object(L.h)();return new URLSearchParams(n.search).get(e)}("search"),n=function(){var e=Object(L.h)(),n=Object(L.g)(),t=new URLSearchParams(e.search);return function(r){var a=r.value,o=r.key;void 0===a?t.delete(o):t.set(o,a),n.push("".concat(e.pathname,"?").concat(t.toString()))}}();return D.a.createElement(M,null,D.a.createElement(F,{placeholder:"Filter tasks",value:e||"",onChange:function(e){var t=e.target;n({key:"search",value:""!==t.value.trim()?t.value:void 0})}}))};var Ie,Ne=function(){return D.a.createElement(Be,null,D.a.createElement(Te,{title:"To do list"}),D.a.createElement(De,null,D.a.createElement(je,null),D.a.createElement(se,null),D.a.createElement(Le,null),D.a.createElement(ve,null),D.a.createElement(we,{title:D.a.createElement(We,{title:"task list"}),body:D.a.createElement(be,null)})))},Ae=z.d.p(Ie||(Ie=Object(N.a)(["\n  text-shadow: none;\n  padding: 0 10px;\n  font-weight: normal;\n"])));var Me=function(){var e=Object(L.i)().id,n=Object(R.c)((function(n){return function(e,n){return ne(e).find((function(e){return e.id===n}))}(n,e)})),t=le();return D.a.createElement(Be,null,D.a.createElement(Te,{title:"task details"}),D.a.createElement(De,null,D.a.createElement(we,{title:D.a.createElement(We,{title:n?n.content:"Task not found \ud83d\ude41"}),body:D.a.createElement(Ae,null,D.a.createElement("strong",null,"Completed: "),n.done?"Yes \ud83d\udc4d":"No \ud83d\ude1f"," ",D.a.createElement("br",null),D.a.createElement("strong",null,"Task added on: "),n?n.date:"nie ma zadania"," ",D.a.createElement("br",null),D.a.createElement("strong",null,"Task completed on: "),n.done?t:"This task has not been completed yet"," ",D.a.createElement("br",null))})))};var Fe,Pe,Re,Ue,Ge,He=function(){return D.a.createElement(Be,null,D.a.createElement(Te,{title:"About author"}),D.a.createElement(De,null,D.a.createElement(we,{title:D.a.createElement(We,{title:"Magdalena Checinski"}),body:D.a.createElement(Ae,null,D.a.createElement(D.a.Fragment,null,"Hi! \ud83d\ude03 ",D.a.createElement("br",null),"I am a junior frontend developer. I have been learning programming since 2020. I started with the"," ",D.a.createElement("strong",null,'"Become a Frontend Developer"')," course at Youcode Academy. This To Do List is one of the applications made for this course."))})))},Je=z.d.nav(Fe||(Fe=Object(N.a)(["\n  margin: 5px;\n  border: 3px solid ",";\n  border-radius: 10px;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.spicyMix})),Ye=z.d.ul(Pe||(Pe=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  list-style: none;\n  text-shadow: 2px 2px 1px ",";\n  color: ",";\n  letter-spacing: 2px;\n  text-transform: uppercase;\n"])),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.theme.colors.white})),_e=z.d.li(Re||(Re=Object(N.a)(["\n  font-size: 18px;\n  margin: 10px;\n"]))),qe=Object(z.d)(W.c).attrs((function(){return{activeClassName:"active"}}))(Ue||(Ue=Object(N.a)(["\n  text-decoration: none;\n  color: ",";\n  &."," {\n    background-color: ",";\n    border-radius: 7px;\n    border: 2px solid ",";\n    box-shadow: 2px 1px 2px 2px\n      ",";\n    text-shadow: 1px 1px 2px ",";\n    padding: 2px;\n  }\n"])),(function(e){return e.theme.colors.white}),"active",(function(e){return e.theme.colors.tan}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.lightTransparentBlack}),(function(e){return e.theme.colors.mineShaft})),Xe=function(){return D.a.createElement(Je,null,D.a.createElement(Ye,null,D.a.createElement(_e,null,D.a.createElement(qe,{activeClassName:"active",to:"/tasks"},"Tasks List")),D.a.createElement(_e,null,D.a.createElement(qe,{activeClassName:"active",to:"/author"},"Author"))))},$e=function(){return D.a.createElement(W.a,null,D.a.createElement(Xe,null),D.a.createElement(L.d,null,D.a.createElement(L.b,{path:he()},D.a.createElement(Me,null)),D.a.createElement(L.b,{path:"/tasks"},D.a.createElement(Ne,null)),D.a.createElement(L.b,{path:"/author"},D.a.createElement(He,null)),D.a.createElement(L.b,{path:"/"},D.a.createElement(L.a,{to:"/tasks"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=Object(z.b)(Ge||(Ge=Object(N.a)(['\nhtml {\n    box-sizing: border-box;\n    font-family: "Lato", sans-serif;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-image: url(https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_960_720.jpg);\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n']))),Qe=t(33),Ve=t(12),Ze=t.n(Ve),en=t(10),nn=t(31),tn=function(){var e=Object(nn.a)(Ze.a.mark((function e(){var n;return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/todo-list-react/exampleTasks.json");case 2:return(n=e.sent).ok||new Error(n.statusText),e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rn=Ze.a.mark(cn),an=Ze.a.mark(ln),on=Ze.a.mark(sn);function cn(){var e;return Ze.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(en.d)(Z(!0));case 3:return n.next=5,Object(en.c)(1e3);case 5:return n.next=7,Object(en.b)(tn);case 7:return e=n.sent,n.next=10,Object(en.d)(V(e));case 10:return n.next=12,Object(en.d)(Z(!1));case 12:n.next=20;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(en.b)(alert,"Oops, something's wrong, sorry ");case 18:return n.next=20,Object(en.d)(Z(!1));case 20:case"end":return n.stop()}}),rn,null,[[0,14]])}function ln(){var e;return Ze.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(en.e)(ne);case 2:return e=n.sent,n.next=5,Object(en.b)(G,e);case 5:case"end":return n.stop()}}),an)}function sn(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(en.g)(Q.type,cn);case 2:return e.next=4,Object(en.f)("*",ln);case 4:case"end":return e.stop()}}),on)}var un=Ze.a.mark(dn);function dn(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(en.a)([sn()]);case 2:case"end":return e.stop()}}),un)}var mn=Object(Qe.a)(),pn=Object(U.a)({reducer:{tasks:ie},middleware:[mn]});mn.run(dn);var fn=pn;B.a.render(D.a.createElement(D.a.StrictMode,null,D.a.createElement(R.a,{store:fn},D.a.createElement(z.a,{theme:{colors:{black:"#000000",darkTransparentBlack:"#000000b3",lightTransparentBlack:"#00000066",darkGrey:"#333333",white:"#ffffff",mineShaft:"#222222",twine:"#c39f6f",gallery:"#eeeeee",tan:"#c7a67a",darkEbony:"#341f04",spicyMix:"#8b6e46",dawnPink:"#f0e9e0",chartreuse:"#7fff00",crimson:"#dc143c"},breakpoints:{maxWidth:414}}},D.a.createElement(Ke,null),D.a.createElement($e,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.20948508.chunk.js.map