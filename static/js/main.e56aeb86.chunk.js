(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=(n(13),n(2)),i=n(0),h=function(e){var t=e.id,n=e.name,c=e.email;return Object(i.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:n}),Object(i.jsx)("p",{children:c})]})]})},j=function(e){var t=e.robots;return Object(i.jsxs)("div",{children:["   ",t.map((function(e,n){return Object(i.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))]})},b=function(e){e.searchfield;var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},l=n(5),u=n(6),d=n(8),O=n(7),f=function(e){Object(d.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(c.Component),g=(n(15),function(e){return Object(i.jsxs)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"100vh"},children:[e.children,";"]})});var p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),h=a[0],l=a[1],u=Object(c.useState)(0),d=Object(o.a)(u,2);d[0],d[1],Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var O=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(i.jsx)(b,{searchChange:function(e){l(e.target.value)}}),Object(i.jsx)(g,{children:Object(i.jsx)(f,{children:Object(i.jsx)(j,{robots:O})})})]}):Object(i.jsx)("h1",{children:"Loading..."})},x=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))});a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.e56aeb86.chunk.js.map