(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(82),r=n(0),c=n.n(r),o=n(7),i=n.n(o),u=(n(96),n(97),n(22)),l=n.n(u),s=n(31),p=n(34),m=n(35),f=n(74),h=n(29),b=n(163);function d(e){var t,n=e.onSubmit,a=c.a.useState({query:""}),r=Object(h.a)(a,2),o=r[0],i=r[1];return c.a.createElement("form",{onSubmit:function(e){return n(o.query),e.preventDefault(),!1}},c.a.createElement(b.a,{id:"outlined-name",label:"\u05d7\u05d9\u05e4\u05d5\u05e9",value:o.query,onChange:(t="query",function(e){i(Object(f.a)({},o,Object(m.a)({},t,e.target.value)))}),margin:"normal",variant:"outlined",fullWidth:!0}))}var v=n(19),w=n(43),g=n(158),y=n(165),E=n(167),j=n(159),O=n(160),x=n(161);var k=Object(v.b)("api")(function(e){var t=e.id,n=e.api,a=c.a.useState(""),r=Object(h.a)(a,2),o=r[0],i=r[1];return n.getResultContent(t).then(function(e){i(e)}),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})});var q=Object(v.b)("searchStore")(function(e){var t=e.item,n=e.query,a=c.a.useState(!1),r=Object(h.a)(a,2),o=r[0],i=r[1],u=Object(w.a)();return Object(g.a)(u.breakpoints.down("md")),c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,t.doc_id),c.a.createElement("p",null,function(e,t){var n=e.split(new RegExp("(".concat(t,")"),"gi"));return c.a.createElement("span",null," ",n.map(function(e,n){return c.a.createElement("span",{key:n,style:e.toLowerCase()===t.toLowerCase()?{fontWeight:"bold",color:"#e10e0e",fontSize:17}:{}},e)})," ")}(t.text,n)),c.a.createElement(y.a,{variant:"outlined",onClick:function(){i(!0)}},"\u05d4\u05e6\u05d2 \u05de\u05e7\u05d5\u05e8 \u05de\u05dc\u05d0"),c.a.createElement(E.a,{open:o,onClose:function(){i(!1)},"aria-labelledby":"responsive-dialog-title"},c.a.createElement(j.a,{id:"responsive-dialog-title"},"Use Google's location service?"),c.a.createElement(O.a,null,c.a.createElement(x.a,null,c.a.createElement(k,{id:t.hashId})))))}),S=n(49);function C(){var e=Object(p.a)(["\n p.title {\nspan:first-child{\nfont-size: 26px;\n    text-decoration: underline;\n        color: #0a92d0;\n    font-weight: bold;\n}\n    span:nth-child(2){\n    text-decoration: none;\n    font-size: 14px;\n    color:black;\n    }\n}\n\n\np{\nmargin-bottom: 5px;\n    margin-top: 0;\n}\nh3{\nmargin-bottom: 3px;\nfont-size: 17px;\n}\n"]);return C=function(){return e},e}var R=S.a.section(C());function _(e){var t=e.items,n=e.query,a=e.title,r=t.map(function(e){return c.a.createElement(q,{key:e._id,item:e,query:n})});return c.a.createElement(R,null,c.a.createElement("p",{className:"title"},c.a.createElement("span",null,a,":")," ",c.a.createElement("span",null,"(",t.length," \u05ea\u05d5\u05e6\u05d0\u05d5\u05ea)")),r)}function z(){var e=Object(p.a)(["\nmax-width: 900px;\nmargin: 0 auto;\n\n"]);return z=function(){return e},e}var I=S.a.section(z());var P=Object(v.b)("api","searchStore")(Object(v.c)(function(e){var t=e.api,n=e.searchStore,a=function(){var e=Object(s.a)(l.a.mark(function e(a){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.query=a,e.next=3,t.search(a);case 3:r=e.sent,n.setResults(r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(I,null,c.a.createElement(d,{onSubmit:a}),n.results.Bold_Paragrphs&&c.a.createElement(_,{items:n.results.Bold_Paragrphs,query:t.query,title:"\u05e4\u05e1\u05e7\u05d0\u05d5\u05ea \u05de\u05d5\u05d3\u05d2\u05e9\u05d5\u05ea"}),n.results.Regular_Paragraphs&&c.a.createElement(_,{items:n.results.Regular_Paragraphs,query:t.query,title:"\u05e4\u05e1\u05e7\u05d0\u05d5\u05ea \u05e8\u05d2\u05d9\u05dc\u05d5\u05ea"}))})),T=function(){return c.a.createElement("div",{className:"App",dir:"rtl"},c.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B,J,W,A=n(50),F=n(51),L=n(59),U=n.n(L),D=function(){function e(){Object(A.a)(this,e)}return Object(F.a)(e,[{key:"search",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("http://videos.jewishnature.co.il/ApI/Json/Search/".concat(t,"/Exact/true"),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.warn("Error: api.search()",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"getResultContent",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("http://videos.jewishnature.co.il/ApI/Json/GetHtmlContent/".concat(t,"/"),{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.warn("Error: api.getResultContent()",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()}]),e}(),G=n(164),H=n(168),N=n(162),M=n(13),$=n(80),K=n.n($),Q=n(81),V=n(60),X=n(53),Y=(n(127),n(9)),Z=(B=function(){function e(){Object(A.a)(this,e),Object(V.a)(this,"query",J,this),Object(V.a)(this,"results",W,this)}return Object(F.a)(e,[{key:"setResults",value:function(e){this.results=e}}]),e}(),J=Object(X.a)(B.prototype,"query",[Y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),W=Object(X.a)(B.prototype,"results",[Y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(X.a)(B.prototype,"setResults",[Y.d],Object.getOwnPropertyDescriptor(B.prototype,"setResults"),B.prototype),B),ee={api:new D,searchStore:new Z},te=Object(M.b)({plugins:[].concat(Object(a.a)(Object(G.a)().plugins),[K()()])}),ne=Object(Q.a)({direction:"rtl"});i.a.render(c.a.createElement(v.a,ee,c.a.createElement(H.b,{jss:te},c.a.createElement(N.a,{theme:ne},c.a.createElement(T,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(128)},96:function(e,t,n){},97:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.48a7378e.chunk.js.map