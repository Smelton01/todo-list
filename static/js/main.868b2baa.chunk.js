(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(1),c=o.n(r),a=o(8),i=o.n(a),s=(o(15),o(7)),d=o(2),l=o(3),p=o(5),u=o(4),b=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{background:"#f3f3f3",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t.componentDidMount=function(e){console.log(t.props.todo)},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,e)})," "," ",o,Object(n.jsx)("button",{style:j,onClick:this.props.delete.bind(this,e),children:"x"})]})})}}]),o}(r.Component),j={background:"#ff0000",color:"#fff",border:"none",padding:"4px 8px",borderRadius:"70%",float:"right",cursor:"pointer"},f=b,h=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todoList.map((function(e){return Object(n.jsx)(f,{todo:e,toggleComplete:t.props.toggleComplete,delete:t.props.delete},e.id)}))}}]),o}(r.Component);function O(){return Object(n.jsx)("header",{style:g,children:"TO-DO List"})}var g={background:"navy",color:"#fff",padding:"30px",margin:"auto",textAlign:"center"},m=o(9),x=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onChange=function(e){t.setState(Object(m.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:10,padding:"5px"},value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:1}})]})}}]),o}(r.Component),v=o(19),y=(o(16),function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={todos:[{id:Object(v.a)(),title:"first one",completed:!1},{id:Object(v.a)(),title:"second one",completed:!1}]},t.toggleComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var o={id:Object(v.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(s.a)(t.state.todos),[o])})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(O,{}),Object(n.jsx)(h,{todoList:this.state.todos,toggleComplete:this.toggleComplete,delete:this.delTodo}),Object(n.jsx)(x,{addTodo:this.addTodo})]})})}}]),o}(r.Component));i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.868b2baa.chunk.js.map