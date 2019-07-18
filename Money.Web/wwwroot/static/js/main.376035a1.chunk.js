(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){e.exports=n(322)},161:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),u=n(326),i=n(327),s=n(328),l=n(329),d=(n(106),n(323)),m=n(10),p=(n(161),function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement(d.a,{to:"/",className:"header-homelink"},r.a.createElement("div",null,r.a.createElement(m.a,{type:"home"})," Ekonomi")),r.a.createElement(d.a,{to:"/edit",className:"header-editlink"},"\xc4ndra"))}),f=n(34),v=n(324),x=function(e){var t=[{title:"Datum",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("div",null,e.format("YYYY-MM-DD"))},sorter:function(e,t){return e.date.diff(t.date)}},{title:"Beskrivning",dataIndex:"description",key:"description"},{title:"Belopp",dataIndex:"amount",key:"amount",render:function(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},Intl.NumberFormat("sv-se",{minimumFractionDigits:2}).format(e))},sorter:function(e,t){return e.amount-t.amount}}];return r.a.createElement(s.a,null,r.a.createElement(l.a,{span:24},r.a.createElement(v.a,{dataSource:e.expenses,columns:t,rowKey:"id"})))},h=n(20),E=n.n(h),b=n(30),y=n(325),k=n(41),g=n(32),w=n.n(g),j=function(){var e=Object(b.a)(E.a.mark(function e(t){var n,a,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t?"/expenses?filter="+t:"/expenses",e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return(r=e.sent).forEach(function(e){return e.date=w.a.utc(e.date)}),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),console.log("Error fetching expenses: ",e.t0.message),e.abrupt("return",[]);case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}(),O={getExpenses:j,deleteExpense:function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/expenses?id="+t,{method:"DELETE"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error deleting expense: ",e.t0.message);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),uploadFiles:function(){var e=Object(b.a)(E.a.mark(function e(t){var n,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,n=new FormData,a=0;a<t.length;a++)n.append("files",t[a]);return e.next=5,fetch("/upload",{method:"POST",body:n});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error uploading files: ",e.t0.message);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},D=function(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!1),i=Object(f.a)(u,2),d=i[0],m=i[1],p=function(){var t=Object(b.a)(E.a.mark(function t(){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.next=3,j(c);case 3:n=t.sent,e.setExpenses(n),m(!1);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement(s.a,{type:"flex",justify:"center"},r.a.createElement(l.a,{xs:16,md:10},r.a.createElement(y.a,{placeholder:"S\xf6kord..",value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement(l.a,null,r.a.createElement(k.a,{icon:"search",type:"primary",loading:d,onClick:p},"S\xf6k")))},I=n(105),Y=n(149),S=n(150),M=n.n(S),F=function(e){return e.map(function(t){return{id:t.id,date:w.a.utc(t.date),description:t.description,amount:t.amount,askIfDuplicate:!0!==t.notDuplicate&&N(t,e)}})},N=function(e,t){return t.filter(function(t){return t.amount===e.amount&&t.description===e.description&&t.date.isSame(e.date)}).length>1},B=function(e){var t=e.expenses.reduce(function(e,t){var n=parseInt(t.date.format("YYYYMM"));return e[n]=e[n]||0,e[n]=e[n]+t.amount,e},[]),n={chart:{type:"column",marginTop:40,animation:!1},title:{text:""},legend:{enabled:!1},credits:{enabled:!1},exporting:{enabled:!1},tooltip:{formatter:function(){var e=Intl.NumberFormat("sv-se",{style:"currency",currency:"SEK"}).format(this.y);return this.x+" <b>"+e+"</b>"}},xAxis:{type:"category",categories:Object(I.a)(Object.keys(t)).map(function(e){return w.a.utc(e+"01").format("MMM YYYY")})},yAxis:{title:void 0,labels:{format:"{value} kr"}},series:[{type:"column",data:Object(I.a)(Object.values(t)).map(function(e){return{y:e}})}]};return r.a.createElement(s.a,null,r.a.createElement(M.a,{highcharts:Y,options:n}))},T=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(D,{setExpenses:c}),r.a.createElement(B,{expenses:n}),r.a.createElement(x,{expenses:n}))},C=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(f.a)(o,2),i=u[0],d=u[1],m=Object(a.useState)(!1),p=Object(f.a)(m,2),x=p[0],h=p[1];Object(a.useEffect)(function(){y()},[]);var y=function(){var e=Object(b.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,O.getExpenses();case 3:t=e.sent,c(F(t)),d(!1);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.deleteExpense(t);case 2:y();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(!0),e.next=4,O.uploadFiles(t.dataTransfer.files);case 4:return h(!1),e.next=7,y();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),j=[{title:"Datum",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("div",null,e.format("YYYY-MM-DD"))},sorter:function(e,t){return e.date.diff(t.date)}},{title:"Beskrivning",dataIndex:"description",key:"description"},{title:"Belopp",dataIndex:"amount",key:"amount",render:function(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},Intl.NumberFormat("sv-se",{minimumFractionDigits:2}).format(e))},sorter:function(e,t){return e.amount-t.amount}},{title:"Dublett",dataIndex:"askIfDuplicate",key:"askIfDuplicate",render:function(e,t){return!0===e?r.a.createElement(k.a,{onClick:function(){return g(t.id)}},"Ta bort"):void 0},sorter:function(e,t){return e.askIfDuplicate?1:-1}}];return r.a.createElement(s.a,{onDragOver:function(e){return e.preventDefault()},onDragEnd:function(e){return e.dataTransfer.clearData()},onDrop:w},r.a.createElement(l.a,{span:24},r.a.createElement(v.a,{dataSource:n,columns:j,rowKey:"id",loading:i||x})))},A=(n(318),function(){return w.a.locale("sv"),r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(l.a,{xs:0,md:2}),r.a.createElement(l.a,{xs:24,md:20},r.a.createElement(p,null),r.a.createElement(i.a,{path:"/",exact:!0,component:T}),r.a.createElement(i.a,{path:"/edit",component:C})),r.a.createElement(l.a,{xs:0,md:2}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[156,1,2]]]);
//# sourceMappingURL=main.376035a1.chunk.js.map