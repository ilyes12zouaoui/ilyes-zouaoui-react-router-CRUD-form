(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),i=n.n(l),o=(n(32),n(33),n(34),n(26)),c=n(1),s=n(2),u=n(4),m=n(3),p=n(5),b=n(10),g=n(11),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"home page")}}]),t}(a.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"company page")}}]),t}(a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"About page")}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"page not found !!")}}]),t}(a.Component),E=n(12),y=n(13),j=n.n(y),O=function(e){var t=e.errors,n=e.inputName,a=null;return t&&t[n]&&(a=r.a.createElement("span",{style:{color:"red"}},t[n])),a},C=function(){return"_"+Math.random().toString(36).substr(2,9)},B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",imageUrl:"",errors:null,isSubmitedSuccessfully:!1},n.onInputChange=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.verifyFormInputs=function(e){var t={};return""==e.title&&(t.title="empty title !"),""==e.description&&(t.description="empty description !"),""==e.imageUrl&&(t.imageUrl="empty imageUrl !"),j.a.isEmpty(t)?null:t},n.onFormSubmit=function(e){e.preventDefault();var t=n.verifyFormInputs(j.a.pick(n.state,["title","description","imageUrl"]));t||(n.props.onCreateBlog(C(),n.state.title,n.state.description,n.state.imageUrl),n.setState({isSubmitedSuccessfully:!0})),n.setState({errors:t})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errors;return e.isSubmitedSuccessfully?r.a.createElement(g.a,{to:"/blogs"}):r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"title:",r.a.createElement("input",{name:"title",type:"text",value:this.state.title,onChange:this.onInputChange}),r.a.createElement(O,{errors:t,inputName:"title"})),r.a.createElement("br",null),r.a.createElement("label",null,"description:",r.a.createElement("input",{name:"description",type:"text",value:this.state.description,onChange:this.onInputChange}),r.a.createElement(O,{errors:t,inputName:"description"})),r.a.createElement("br",null),r.a.createElement("label",null,"imageUrl:",r.a.createElement("input",{name:"imageUrl",type:"text",value:this.state.imageUrl,onChange:this.onInputChange}),r.a.createElement(O,{errors:t,inputName:"imageUrl"})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(a.Component),U=n(25),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",title:"",description:"",imageUrl:"",errors:null},n.onInputChange=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.verifyFormInputs=function(e){var t={};return""==e.title&&(t.title="empty title !"),""==e.description&&(t.description="empty description !"),""==e.imageUrl&&(t.imageUrl="empty imageUrl !"),j.a.isEmpty(t)?null:t},n.onCancel=function(){n.props.history.push("/blogs/create")},n.onFormSubmit=function(e){e.preventDefault();var t=n.verifyFormInputs(j.a.pick(n.state,["title","description","imageUrl"]));t||(console.log(n.state.id),n.props.onUpdateBlog(n.state.id,n.state.title,n.state.description,n.state.imageUrl),n.props.history.push("/blogs")),n.setState({errors:t})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(0,e.getBlogById)(e.match.params.id);console.log(t),this.setState(Object(U.a)({},t))}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"title:",r.a.createElement("input",{name:"title",type:"text",value:this.state.title,onChange:this.onInputChange}),r.a.createElement(O,{errors:e,inputName:"title"})),r.a.createElement("br",null),r.a.createElement("label",null,"description:",r.a.createElement("input",{name:"description",type:"text",value:this.state.description,onChange:this.onInputChange}),r.a.createElement(O,{errors:e,inputName:"description"})),r.a.createElement("br",null),r.a.createElement("label",null,"imageUrl:",r.a.createElement("input",{name:"imageUrl",type:"text",value:this.state.imageUrl,onChange:this.onInputChange}),r.a.createElement(O,{errors:e,inputName:"imageUrl"})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"update"}),r.a.createElement("button",{onClick:this.onCancel},"cancel"))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).onClickShowUpdateForm=function(e){n.props.history.push("/blogs/update/".concat(e))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.title,l=t.description,i=t.imageUrl,o=t.onDeleteBlog;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-img-container"},r.a.createElement("img",{className:"card-img",src:i})),r.a.createElement("h1",null,a),r.a.createElement("p",null,l),r.a.createElement("button",{onClick:function(){e.onClickShowUpdateForm(n)}},"update"),r.a.createElement("button",{onClick:function(){o(n)}},"delete"))}}]),t}(a.Component),x=Object(g.g)(S),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.listBlogs,n=e.onDeleteBlog;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(x,Object.assign({key:e.id,onDeleteBlog:n},e))}))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={listBlogs:[]},n.onCreateBlog=function(e,t,a,r){var l=n.state.listBlogs;n.setState({listBlogs:[].concat(Object(o.a)(l),[{id:e,title:t,description:a,imageUrl:r}])})},n.onUpdateBlog=function(e,t,a,r){var l=n.state.listBlogs.map(function(n){return n.id==e?{id:e,title:t,description:a,imageUrl:r}:n});n.setState({listBlogs:l})},n.getBlogById=function(e){return n.state.listBlogs.find(function(t){return t.id==e})},n.onDeleteBlog=function(e){var t=n.state.listBlogs;n.setState({listBlogs:t.filter(function(t){return t.id!=e})})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.listBlogs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(b.b,{to:"/",exact:!0,activeClassName:"active-link"},"Home")," ",r.a.createElement(b.b,{to:"/company",exact:!0,activeClassName:"active-link"},"Company")," ",r.a.createElement(b.b,{to:"/blogs/create",exact:!0,activeClassName:"active-link"},"create blog")," ",r.a.createElement(b.b,{to:"/blogs",exact:!0,activeClassName:"active-link"},"list blogs")," ",r.a.createElement(b.b,{to:"/about",exact:!0,activeClassName:"active-link"},"About")),r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/",exact:!0,component:h}),r.a.createElement(g.b,{path:"/about",exact:!0,component:f}),r.a.createElement(g.b,{path:"/company",exact:!0,component:d}),r.a.createElement(g.b,{path:"/blogs/create",exact:!0,render:function(t){return r.a.createElement(B,Object.assign({},t,{onCreateBlog:e.onCreateBlog}))}}),r.a.createElement(g.b,{path:"/blogs/update/:id",exact:!0,render:function(t){return r.a.createElement(k,Object.assign({},t,{getBlogById:e.getBlogById,onUpdateBlog:e.onUpdateBlog}))}}),r.a.createElement(g.b,{path:"/blogs",exact:!0,render:function(n){return r.a.createElement(w,Object.assign({},n,{onDeleteBlog:e.onDeleteBlog,listBlogs:t}))}}),r.a.createElement(g.b,{component:v})))}}]),t}(a.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b.a,{basename:"/ilyes-zouaoui-react-router-CRUD-form"},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.620178bc.chunk.js.map