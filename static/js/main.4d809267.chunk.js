(this["webpackJsonptweet-web"]=this["webpackJsonptweet-web"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),l=(a(14),a(7)),s=a.n(l);a(15);function i(e,t,a,n){var c;n&&(c=JSON.stringify(n));var r=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);r.responseType="json";var l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,o),r.setRequestHeader("Content-Type","application/json"),l&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",l)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&(window.location.href="/login?showLoginReguired=true"));a(r.response,r.status)},r.onerror=function(e){console.log(e),a({message:"The request was an error"},400)},r.send(c)}function u(e,t,a){var n="/tweets/";e&&(n="/tweets/?username=".concat(e)),null!==a&&void 0!==a&&(n=a.replace("http://localhost:8000/api","")),i("GET",n,t)}function m(e){var t=e.tweet,a=e.action,n=e.didPerformAction,r=t.likes?t.likes:0,o=e.className?e.className:"btn btn-primary btn-sm",l=a.display?a.display:"Action",s="like"===a.type?"".concat(r," ").concat(a.display):l,u=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)};return c.a.createElement("button",{className:o,onClick:function(e){e.preventDefault(),function(e,t,a){i("POST","/tweets/action/",a,{id:e,action:t})}(t.id,a.type,u)}}," ",s," ")}var d=a(2),f=a(1),p=a(8);function w(e){var t=e.tweet;return t.parent?c.a.createElement(b,{isRetweet:!0,hideAction:!0,className:"",tweet:t.parent}):null}function b(e){var t=e.tweet,a=e.didRetweet,r=e.hideAction,o=e.isRetweet,l=Object(n.useState)(e.tweet?e.tweet:null),s=Object(f.a)(l,2),i=s[0],u=s[1],d=e.className?e.className:"col-10 mx-auto col-md-6",b=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{tweetid:1})),v=b?b.groups.tweetid:-1,E="".concat(t.id)==="".concat(v),h=function(e,t){200===t?u(e):201===t&&a&&a(e)};return c.a.createElement("div",{className:d},c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"col-1"},c.a.createElement("span",{className:"px-3 py-2 rounded-circle bg-dark text-white"},t.user.username[0])),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,!0===o&&c.a.createElement("span",{className:"small text-muted"},"Retweet"),c.a.createElement("p",null,t.user.first_name," ",t.user.last_name," ","@",t.user.username),c.a.createElement("p",null,t.content),c.a.createElement(w,{tweet:t})),c.a.createElement("div",{className:"btn btn-group px-0"},i&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{tweet:i,didPerformAction:h,action:{type:"like",display:"Likes"}}),c.a.createElement(m,{tweet:i,didPerformAction:h,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(m,{tweet:i,didPerformAction:h,action:{type:"retweet",display:"Retweet"}})),!0===E?null:c.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function v(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),s=Object(f.a)(l,2),i=s[0],m=s[1],p=Object(n.useState)(null),w=Object(f.a)(p,2),v=w[0],E=w[1],h=Object(n.useState)(!1),g=Object(f.a)(h,2),y=g[0],N=g[1];Object(n.useEffect)((function(){var t=Object(d.a)(e.newTweets).concat(r);t.length!==i.length&&m(t)}),[e.newTweets,i,r]),Object(n.useEffect)((function(){if(!1===y){u(e.username,(function(e,t){200===t?(E(e.next),o(e.results),N(!0)):alert("There was an error")}))}}),[r,y,N,e.username]);var j=function(e){var t=Object(d.a)(r);t.unshift(e),o(t);var a=Object(d.a)(i);a.unshift(i),o(a)};return c.a.createElement(c.a.Fragment,null,i.map((function(e,t){return c.a.createElement(b,{didRetweet:j,tweet:e,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==v&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==v){u(e.username,(function(e,t){if(200===t){E(e.next);var a=Object(d.a)(i).concat(e.results);o(a),m(a)}else alert("There was an error")}),v)}},className:"btn btn-primary"},"Load next"))}function E(e){var t=e.didTweet,a=c.a.createRef(),n=function(e,a){201===a?t(e):(console.log(e),alert("An error occured please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("div",{className:"col-12 mb-3"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(e);var t=a.current.value;console.log(t,"new value"),i("POST","/tweets/create/",n,{content:t}),a.current.value=""}},c.a.createElement("textarea",{ref:a,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet"))))}function h(e){console.log(e);var t="false"!==e.canTweet,a=Object(n.useState)([]),r=Object(f.a)(a,2),o=r[0],l=r[1];return c.a.createElement("div",{className:e.className},!0===t&&c.a.createElement(E,{didTweet:function(e){var t=Object(d.a)(o);t.unshift(e),l(t)},div:!0,className:"col-12 mb-3"}),c.a.createElement(v,Object.assign({newTweets:o},e)))}function g(e){var t=e.tweetId,a=Object(n.useState)(!1),r=Object(f.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(null),u=Object(f.a)(s,2),m=u[0],d=u[1],p=function(e,t){200===t?d(e):alert("There was an error finding your tweet")};return Object(n.useEffect)((function(){!1===o&&(!function(e,t){i("GET","/tweets/".concat(e,"/"),t)}(t,p),l(!0))}),[t,o,l]),null===m?null:c.a.createElement(b,{tweet:m,className:e.className})}var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=document.getElementById("root");N&&o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),N);var j=c.a.createElement,O=document.getElementById("tweetme");O&&(console.log(O.dataset),o.a.render(j(h,O.dataset),O)),document.querySelectorAll(".tweetme-detail").forEach((function(e){o.a.render(j(g,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4d809267.chunk.js.map