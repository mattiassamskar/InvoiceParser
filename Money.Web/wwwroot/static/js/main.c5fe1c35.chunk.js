(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){e.exports=n(321)},321:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=n(325),u=n(326),s=n(327),l=n(328),m=(n(106),n(322)),p=n(10),d=function(){return r.a.createElement("div",{style:{height:"60px",paddingLeft:"10px",paddingRight:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#fafafa"}},r.a.createElement(m.a,{to:"/",style:{color:"black"}},r.a.createElement("div",null,r.a.createElement(p.a,{type:"home"})," Ekonomi")),r.a.createElement(m.a,{to:"/edit",style:{color:"grey"}},"\xc4ndra"))},f=n(52),v=n(323),E=function(e){var t=[{title:"Datum",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("div",null,e.format("YYYY-MM-DD"))}},{title:"Beskrivning",dataIndex:"description",key:"description"},{title:"Belopp",dataIndex:"amount",key:"amount"}];return r.a.createElement(s.a,null,r.a.createElement(l.a,{span:24,className:"container-margin"},r.a.createElement(v.a,{dataSource:e.expenses,columns:t})))},x=n(23),h=n.n(x),y=n(37),k=n(324),b=n(40),g=n(31),w=n.n(g),j=function(){var e=Object(y.a)(h.a.mark(function e(t){var n,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t?"/expenses?filter="+t:"/expenses",e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return(r=e.sent).forEach(function(e){return e.date=w.a.utc(e.date)}),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",[]);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}(),Y=function(e){var t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],i=n[1],o=function(){var t=Object(y.a)(h.a.mark(function t(){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(c);case 2:n=t.sent,e.setExpenses(n);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement(s.a,{type:"flex",justify:"center",className:"container-margin"},r.a.createElement(l.a,{span:8},r.a.createElement(k.a,{placeholder:"S\xf6kord..",value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement(l.a,{span:16},r.a.createElement(b.a,{type:"primary",onClick:o},"S\xf6k!")))},O=n(105),I=n(149),D=n(150),M=n.n(D),S=function(e){var t=e.expenses.reduce(function(e,t){var n=parseInt(t.date.format("YYYYMM"));return e[n]=e[n]||0,e[n]=e[n]+t.amount,e},[]),n={chart:{type:"column",marginTop:40,animation:!1},title:{text:""},legend:{enabled:!1},credits:{enabled:!1},exporting:{enabled:!1},tooltip:{valueDecimals:2},xAxis:{type:"category",categories:Object(O.a)(Object.keys(t)).map(function(e){return w.a.utc(e+"01").format("MMM YYYY")})},yAxis:{title:void 0,labels:{format:"{value} kr"}},series:[{type:"column",data:Object(O.a)(Object.values(t)).map(function(e){return{y:e}})}]};return r.a.createElement(s.a,null,r.a.createElement(M.a,{highcharts:I,options:n}))},B=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(Y,{setExpenses:c}),r.a.createElement(S,{expenses:n}),r.a.createElement(E,{expenses:n}))},C=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)(function(){i()},[]);var i=function(){var e=Object(y.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,c(u(t));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(y.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:i();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),u=function(e){return e.map(function(t){return{id:t.id,date:w.a.utc(t.date),description:t.description,amount:t.amount,askIfDuplicate:!0!==t.notDuplicate&&m(t,e)}})},m=function(e,t){return t.filter(function(t){return t.amount===e.amount&&t.description===e.description&&t.date.isSame(e.date)}).length>1},p=[{title:"Datum",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("div",null,e.format("YYYY-MM-DD"))}},{title:"Beskrivning",dataIndex:"description",key:"description"},{title:"Belopp",dataIndex:"amount",key:"amount"},{title:"Dublett",dataIndex:"askIfDuplicate",key:"askIfDuplicate",render:function(e,t){return!0===e?r.a.createElement(b.a,{onClick:function(){return o(t.id)}},"Ta bort"):void 0}}];return r.a.createElement(s.a,null,r.a.createElement(l.a,{span:24,className:"container-margin"},r.a.createElement(v.a,{dataSource:n,columns:p})))},N=(n(317),function(){return w.a.locale("sv"),r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(l.a,{xs:0,md:3}),r.a.createElement(l.a,{xs:24,md:18},r.a.createElement(d,null),r.a.createElement(u.a,{path:"/",exact:!0,component:B}),r.a.createElement(u.a,{path:"/edit",component:C})),r.a.createElement(l.a,{xs:0,md:3}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[156,1,2]]]);
//# sourceMappingURL=main.c5fe1c35.chunk.js.map