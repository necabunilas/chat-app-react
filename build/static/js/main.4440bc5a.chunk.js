(this["webpackJsonpchat-app-front-end-vs"]=this["webpackJsonpchat-app-front-end-vs"]||[]).push([[0],{33:function(e,n,t){e.exports=t(72)},38:function(e,n,t){},69:function(e,n){},72:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(30),o=t.n(s),c=(t(38),t(32)),l=t(2),i=t(31);function u(e){return r.a.createElement("button",{onClick:function(n){e.disconnect(),window.location.reload(!0)},className:"logout-btn"},"Logout")}function m(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Chat App"),""===e.username?null:r.a.createElement(u,{disconnect:e.disconnect})),r.a.createElement("hr",null))}function d(e){var n=Object(a.useState)({username:"",password:""}),t=Object(l.a)(n,2),s=t[0],o=t[1];function c(e){var n=e.target,t=n.name,a=n.value;o((function(e){return"username"===t?{username:a,password:e.password}:{username:e.username,password:a}}))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login"},r.a.createElement(m,{username:""}),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("input",{className:"username-in",onChange:c,id:"outlined-multiline-static",variant:"outlined",name:"username",type:"text",value:s.username,placeholder:"Username"})),r.a.createElement("div",null,r.a.createElement("input",{className:"password-in",onChange:c,id:"outlined-multiline-static",variant:"outlined",name:"password",type:"password",value:s.password,placeholder:"password"})),r.a.createElement("button",{className:"login-btn",onClick:function(n){n.preventDefault(),e.getCreds(s)}},"Sign up/Log in")),r.a.createElement("p",null,"By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Others will be able to find you by searching for you email address or phone number when provided.")))}function g(e){var n=Object(a.useState)(""),t=Object(l.a)(n,2),s=t[0],o=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement(m,{username:e.username,disconnect:e.disconnect}),r.a.createElement("form",null,r.a.createElement("div",{className:"output"},e.messages.map((function(n,t){return r.a.createElement("div",{key:t,style:n.username===e.username?{textAlign:"right"}:{textAlign:"left"},className:"message"},r.a.createElement("div",{className:"message-body"},n.message),r.a.createElement("div",{className:"username"},n.username===e.username?"You":n.username))}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"input"},r.a.createElement("input",{className:"text-field",name:"message",type:"text",id:"outlined-multiline-static",variant:"outlined",label:"Message",value:s,placeholder:"Start a new message",onChange:function(e){var n=e.target.value;o(n)}}),r.a.createElement("button",{className:"send-btn",onClick:function(n){n.preventDefault(),e.sendData(s),o("")}},"Send"))))}var p=t.n(i).a.connect("http://localhost:5000");function f(){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),t=n[0],s=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],m=i[1],f=Object(a.useState)([]),v=Object(l.a)(f,2),E=v[0],h=v[1];return Object(a.useEffect)((function(){p.on("login",(function(e){"ok"===e?s(!0):"wp"===e?(alert("Wrong Password!"),window.location.reload(!0)):(alert("Error logging in!"),window.location.reload(!0))})),p.on("message",(function(e){var n=e.username,t=e.message;h((function(e){return[].concat(Object(c.a)(e),[{username:n,message:t}])}))}))}),[]),!0===t?r.a.createElement(g,{username:u,sendData:function(e){p.emit("message",{username:u,message:e})},messages:E,disconnect:function(){p.emit("forceDisconnect")}}):r.a.createElement(d,{getCreds:function(e){m(e.username),p.emit("login",e)}})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4440bc5a.chunk.js.map