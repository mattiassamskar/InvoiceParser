(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{162:function(e,t,n){e.exports=n(313)},167:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),u=n(62),i=n(42),s=n(317),l=n(318),m=(n(114),n(6)),p=(n(167),function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement(u.b,{to:"/",className:"header-homelink"},r.a.createElement("div",null,r.a.createElement(m.a,{type:"home"})," Ekonomi")),r.a.createElement(u.b,{to:"/edit",className:"header-editlink"},"\xc4ndra"))}),d=n(36),f=n(314),v=function(e){var t=e.expenses,n=[{title:"Datum",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("div",null,e.format("YYYY-MM-DD"))},sorter:function(e,t){return e.date.diff(t.date)}},{title:"Beskrivning",dataIndex:"description",key:"description"},{title:"Belopp",dataIndex:"amount",key:"amount",render:function(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},Intl.NumberFormat("sv-se",{minimumFractionDigits:2}).format(e))},sorter:function(e,t){return e.amount-t.amount}}];return r.a.createElement(s.a,null,r.a.createElement(l.a,{span:24},r.a.createElement(f.a,{dataSource:t,columns:n,rowKey:"id"})))},x=n(20),E=n.n(x),h=n(30),b=n(315),y=n(49),k=n(33),g=n.n(k),j={fetchExpenses:function(){var e=Object(h.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t?"/expenses?filter="+t:"/expenses",e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return(r=e.sent).forEach((function(e){return e.date=g.a.utc(e.date)})),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),console.log("Error fetching expenses: ",e.t0.message),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),deleteExpense:function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/expenses?id="+t,{method:"DELETE"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error deleting expense: ",e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),uploadFiles:function(){var e=Object(h.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,n=new FormData,a=0;a<t.length;a++)n.append("files",t[a]);return e.next=5,fetch("/upload",{method:"POST",body:n});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error uploading files: ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},O=function(e){var t=e.setExpenses,n=Object(a.useState)(""),c=Object(d.a)(n,2),o=c[0],u=c[1],i=Object(a.useState)(!1),m=Object(d.a)(i,2),p=m[0],f=m[1],v=function(){var e=Object(h.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,j.fetchExpenses(o);case 3:n=e.sent,t(n),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(s.a,{type:"flex",justify:"center"},r.a.createElement(l.a,{xs:16,md:10},r.a.createElement(b.a,{placeholder:"S\xf6kord..",value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement(l.a,null,r.a.createElement(y.a,{icon:"search",type:"primary",loading:p,onClick:v},"S\xf6k")))},w=n(112),D=n(106),I=n(158),Y=n.n(I),S=function(e){return e.map((function(t){return{id:t.id,date:g.a.utc(t.date),description:t.description,amount:t.amount,askIfDuplicate:!0!==t.notDuplicate&&F(t,e)}}))},F=function(e,t){return t.filter((function(t){return t.amount===e.amount&&t.description===e.description&&t.date.isSame(e.date)})).length>1},M=function(e){var t=function(e){return e.reduce((function(e,t){var n=parseInt(t.date.format("YYYYMM"));return e[n]=e[n]||0,e[n]=e[n]+t.amount,e}),[])}(e.expenses),n={chart:{type:"column",marginTop:40,animation:!1},title:{text:""},legend:{enabled:!1},credits:{enabled:!1},exporting:{enabled:!1},tooltip:{formatter:function(){var e=Intl.NumberFormat("sv-se",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0}).format(this.y);return this.x+" <b>"+e+"</b>"}},xAxis:{type:"category",categories:Object(w.a)(Object.keys(t)).map((function(e){return g.a.utc(e+"01").format("MMM YYYY")})),tickInterval:3},yAxis:{title:void 0,labels:{format:"{value} kr"}},series:[{type:"column",data:Object(w.a)(Object.values(t)).map((function(e){return{y:e}}))}]};return r.a.createElement(s.a,null,r.a.createElement(Y.a,{highcharts:D,options:n}))},N=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(O,{setExpenses:c}),r.a.createElement(M,{expenses:n}),r.a.createElement(v,{expenses:n}))},B=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(d.a)(o,2),i=u[0],m=u[1],p=Object(a.useState)(!1),v=Object(d.a)(p,2),x=v[0],b=v[1];Object(a.useEffect)((function(){k()}),[]);var k=function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,j.fetchExpenses();case 3:t=e.sent,c(S(t)),m(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.deleteExpense(t);case 2:k();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.next=4,j.uploadFiles(t.dataTransfer.files);case 4:return b(!1),e.next=7,k();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=[{title:"Datum",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("div",null,e.format("YYYY-MM-DD"))},sorter:function(e,t){return e.date.diff(t.date)}},{title:"Beskrivning",dataIndex:"description",key:"description"},{title:"Belopp",dataIndex:"amount",key:"amount",render:function(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},Intl.NumberFormat("sv-se",{minimumFractionDigits:2}).format(e))},sorter:function(e,t){return e.amount-t.amount}},{title:"Dublett",dataIndex:"askIfDuplicate",key:"askIfDuplicate",render:function(e,t){return!0===e?r.a.createElement(y.a,{onClick:function(){return g(t.id)}},"Ta bort"):void 0},sorter:function(e,t){return e.askIfDuplicate?1:-1}}];return r.a.createElement(s.a,{onDragOver:function(e){return e.preventDefault()},onDragEnd:function(e){return e.dataTransfer.clearData()},onDrop:O},r.a.createElement(l.a,{span:24},r.a.createElement(f.a,{dataSource:n,columns:w,rowKey:"id",loading:i||x})))},T=(n(312),function(){return g.a.locale("sv"),r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(l.a,{xs:0,md:2}),r.a.createElement(l.a,{xs:24,md:20},r.a.createElement(p,null),r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/edit",component:B})),r.a.createElement(l.a,{xs:0,md:2}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.fbf1bc80.chunk.js.map