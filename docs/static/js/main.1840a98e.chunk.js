(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(13),l=a.n(c),s=a(14),r=a(15),i=a(17),m=a(16),u=(a(23),a(2)),h=a.n(u),d=a(3),p=a.n(d),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={wallPaperLink:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80",quoteText:"",quoteAuthor:"",time:null},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.unsplash.com/photos/random/?client_id=N6gSTT5QTo0hwGeeZfW1HH59hwp5pBqRx2pH7EXsrLE&&collections=827743").then((function(t){console.log(t.data),e.setState({wallPaperLink:t.data.urls.full})})).catch((function(e){console.log(e)})),h.a.get("https://type.fit/api/quotes").then((function(t){console.log(t);var a=Math.floor(Math.random()*t.data.length);e.setState({quoteText:t.data[a].text,quoteAuthor:t.data[a].author})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"box",style:{backgroundImage:"url(".concat(this.state.wallPaperLink,")")}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row content"},n.a.createElement("div",{className:"col-sm-2"}),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("h1",{className:"title"},"Good morning"),n.a.createElement("h3",{className:"date"},p()().format("ll")),n.a.createElement("h3",{className:"time"},p()().format("LT"))),n.a.createElement("div",{className:"col-sm-2"})),n.a.createElement("div",{className:"row qbox"},n.a.createElement("div",{className:"col-sm-2"}),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("h1",{className:"qtitle"},"Quote of the day"),n.a.createElement("p",{className:"quote"},this.state.quoteText," - ",this.state.quoteAuthor)),n.a.createElement("div",{className:"col-sm-2"}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1840a98e.chunk.js.map