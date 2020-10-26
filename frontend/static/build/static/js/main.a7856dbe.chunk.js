(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),c=n.n(r),i=(n(16),n(17),n(6)),d=n(2),l=n(3),s=n(1),u=n(5),m=n(4),h=n(9),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).state={name:"",isComplete:!1},o.handleChange=o.handleChange.bind(Object(s.a)(o)),o}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return a.a.createElement("form",{className:"col-12 col-md-6 mb-5",onSubmit:function(t){return e.props.addTodo(t,e.state)}},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"name"},"Todos"),a.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",value:this.state.name,onChange:this.handleChange})),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Todo"))}}]),n}(o.Component);function v(e){return a.a.createElement("ul",{className:"list-group mb-3 col-12"},a.a.createElement("li",{className:"list-group-item",style:{textDecoration:e.todo.isComplete?"line-through":""}},a.a.createElement("div",{className:"d-flex"},a.a.createElement("input",{onClick:function(){return e.editTodo(e.todo.name,e.todo.id)},type:"checkbox",id:"name"}),a.a.createElement("h5",null,e.todo.name)),a.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteTodo(e.todo.id)},type:"button"},"Delete")))}var b=function(e){var t=e.todos.map((function(t){return a.a.createElement(v,{key:t.id,todo:t,deleteTodo:e.deleteTodo,editTodo:e.editTodo})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,t))},p=n(10),T=n.n(p),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).state={todos:[]},o.addTodo=o.addTodo.bind(Object(s.a)(o)),o.deleteTodo=o.deleteTodo.bind(Object(s.a)(o)),o.editTodo=o.editTodo.bind(Object(s.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/").then((function(e){return e.json()})).then((function(t){return e.setState({todos:t})})).catch((function(e){return console.log("Error:",e)}))}},{key:"addTodo",value:function(e,t){var n=this;e.preventDefault();var o=T.a.get("csrftoken");fetch("api/v1/",{method:"POST",headers:{"X-CSRFToken":o,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){var t=[].concat(Object(i.a)(n.state.todos),[e]);n.setState({todos:t})}))}},{key:"deleteTodo",value:function(e){var t=this;fetch("api/v1/".concat(e),{method:"DELETE"}).then((function(e){return e})).then((function(n){var o=Object(i.a)(t.state.todos);console.log("todos",o);var a=o.findIndex((function(t){return t.id===e}));o.splice(a,1),t.setState({todos:o})})).catch((function(e){return console.log("Error:",e)}))}},{key:"editTodo",value:function(e,t){var n=this;fetch("api/v1/".concat(t,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,isComplete:!0})}).then((function(e){return e.json()})).then((function(e){console.log(e);var o=Object(i.a)(n.state.todos),a=o.findIndex((function(e){return e.id===t}));o[a]=e,n.setState({todos:o})})).catch((function(e){return console.log("Error:",e)}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f,{addTodo:this.addTodo}),a.a.createElement(b,{todos:this.state.todos,deleteTodo:this.deleteTodo,editTodo:this.editTodo}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.a7856dbe.chunk.js.map