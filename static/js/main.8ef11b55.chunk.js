(this["webpackJsonpdemo-context-api"]=this["webpackJsonpdemo-context-api"]||[]).push([[0],{47:function(e,t,a){},65:function(e,t,a){e.exports=a(97)},73:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(31),l=a(35),c=a(33),u=a(0),o=a.n(u),s=a(23),m=a.n(s),i=a(14),d=a(22),f=a(8),p=function(e,t){var a={},n=Object(u.useState)({}),r=Object(f.a)(n,2),l=r[0],c=r[1];Object(u.useEffect)((function(){var a=localStorage.getItem(e);c(a?JSON.parse(a):t)}),[]),Object(u.useEffect)((function(){localStorage.setItem(e,JSON.stringify(l))}),[l]);return{value:l,handleChange:function(t){Object.keys(a).length||(a=JSON.parse(localStorage.getItem(e)));var n=t.target.name,r=t.target.value;a=Object(i.a)(Object(i.a)({},a),{},Object(d.a)({},n,r)),console.log("temp1>>>>>>>",a)},handleSubmit:function(t){t.preventDefault(),c(Object(i.a)({},a)),console.log("temp12>>>>>>>",a),localStorage.setItem(e,JSON.stringify(l))}}},b=o.a.createContext(),h={numberOfItems:"3",completedTasks:"true",sort:"descending"};var E=function(e){var t=p("preferences",Object(i.a)({},h)),a={value:t.value,handleChange:t.handleChange,handleSubmit:t.handleSubmit};return o.a.createElement(b.Provider,{value:a},e.children)},g=a(5),v=a(12),O=(a(47),function(e){var t=Object(u.useState)({}),a=Object(f.a)(t,2),n=a[0],r=a[1];return{handleChange:function(e){e.persist(),r((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t.preventDefault(),e(n)},values:n}});var j=function(e){var t=O(e.handleSubmit),a=t.handleChange,n=t.handleSubmit;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{onSubmit:n,className:" shadow-lg bg-white rounded p-3 mb-3 mr-0"},o.a.createElement("h3",{className:"text-center mb-2"},"Add Item"),o.a.createElement(g.a.Group,null,o.a.createElement(g.a.Label,null,"To Do Item"),o.a.createElement(g.a.Control,{name:"text",placeholder:"Add To Do List Item",onChange:a})),o.a.createElement(g.a.Group,null,o.a.createElement(g.a.Label,null,"Difficulty Rating"),o.a.createElement(g.a.Control,{type:"range",className:"custom-range",variant:"dark",defaultValue:"1",min:"1",max:"5",name:"difficulty",onChange:a})),o.a.createElement(g.a.Group,null,o.a.createElement(g.a.Label,null,"Assigned To"),o.a.createElement(g.a.Control,{type:"text",name:"assignee",placeholder:"Assigned To",onChange:a})),o.a.createElement(v.a,{type:"submit",variant:"secondary"},"Add Item")))},C=a(19),y=a(17),k=a(21),N=a(10),S=a(44);var x=function(e){var t=Object(u.useState)(Object(C.a)(e.listArr.listArr)),a=Object(f.a)(t,2),n=a[0],r=a[1];return console.log("TodoItems",e.listArr.listArr),Object(u.useEffect)((function(){}),[]),Object(u.useEffect)((function(){r(Object(C.a)(e.listArr.listArr))}),[e]),o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,null,n.map((function(t){return o.a.createElement(S.a.Item,{className:"mb-3 ",variant:"",key:t._id},o.a.createElement(k.a,null,o.a.createElement(y.a,null,o.a.createElement(N.a,{xs:1},o.a.createElement(v.a,{size:"sm",onClick:function(){return e.handlers.handleComplete(t._id)},pill:"true",variant:t.complete?"danger":"success"}," ",t.complete?o.a.createElement("span",null," Complete"):o.a.createElement("span",null,"Pending")," ")),o.a.createElement(N.a,{xs:{span:1,offset:10}},o.a.createElement(v.a,{size:"sm",onClick:function(){return e.handlers.handleDelete(t._id)}},o.a.createElement("span",null," X ")))),o.a.createElement("hr",null),o.a.createElement(y.a,{className:"pb-1 pt-1"},o.a.createElement(N.a,null,o.a.createElement("span",null,t.text))),o.a.createElement("hr",null),o.a.createElement(y.a,null,o.a.createElement(N.a,{xs:{span:4,offset:10}},o.a.createElement("span",null,"Difficulty: ",t.difficulty)))))}))))};var A=function(e){var t=Object(u.useContext)(b),a=Object(u.useState)({numberOfPagesArr:[],listArr:[]}),n=Object(f.a)(a,2),r=n[0],l=n[1],c=Object(u.useState)({listArr:[]}),s=Object(f.a)(c,2),m=s[0],d=s[1];function p(e){for(var a=[],n=0;n<document.getElementsByClassName("itemsListGroup").length;n++)document.getElementsByClassName("itemsListGroup")[n].innerHTML="";for(var l=0,c=(e.target.value-1)*Number(t.value.numberOfItems);r.listArr.length-c&&l<Number(t.value.numberOfItems);c++,l++)a[l]=r.listArr[c];console.log("limitedListArr>>>>>>>.",a),d({listArr:a})}return Object(u.useEffect)((function(){return function(){console.log("******************* UNMOUNTED")}}),[]),Object(u.useEffect)((function(){var a=Object(i.a)({},t.value),n=Object(C.a)(e.list);"false"===a.completedTasks&&(n=Object(C.a)(n.filter((function(e){return!e.complete})))),n.sort((function(e,t){return t.difficulty-e.difficulty})),"descending"!==a.sort&&n.reverse();for(var r=Math.ceil(n.length/Number(a.numberOfItems)),c=[],u=0;u<r;u++)c[u]=u;l({numberOfPagesArr:c,listArr:n});for(var o=[],s=0;s<n.length&&s<Number(a.numberOfItems);s++)o[s]=n[s];d({listArr:o})}),[e.list,t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{listArr:m,handlers:{handleComplete:e.handleComplete,handleDelete:e.handleDelete}}),o.a.createElement(k.a,null,o.a.createElement(y.a,null,r.numberOfPagesArr.map((function(e,t){return o.a.createElement(v.a,{onClick:p,className:"m-2",value:t+1,key:t+1}," ",t+1)})))))},T=a(60),I=a(61),w=(a(73),a(18)),D=a.n(w),L=a(27),_=a(28),F=a.n(_),G=function(e){var t=Object(u.useState)([]),a=Object(f.a)(t,2),n=a[0],r=a[1],l=Object(u.useState)(!1),c=Object(f.a)(l,2),o=c[0],s=c[1],m=function(){var t=Object(L.a)(D.a.mark((function t(a){var l;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l={method:"post",url:e,mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},data:a},s(!o),t.next=4,F()(l).then((function(e){s((function(){return o})),console.log("respnse>>>>>",e),r([].concat(Object(C.a)(n),[e.data]))})).catch((function(e){console.log("POST AXIOS >>>>",e)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=Object(L.a)(D.a.mark((function t(a){var l,c,u;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(l=n.filter((function(e){return e._id===a}))[0]||{})._id){t.next=9;break}return c="".concat(e,"/").concat(a),l.complete=!l.complete,u={method:"put",url:c,mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},data:l},s(!o),console.log("agter read reade ",o),t.next=9,F()(u).then((function(e){s((function(){return o})),console.log("list after update >>>>>>>",e.data),r(n.map((function(t){return t._id===l._id?e.data:t})))})).catch(console.error);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(L.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!o),t.next=3,F.a.get(e).then((function(e){s((function(){return o})),r(e.data.results)})).catch(console.error);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(L.a)(D.a.mark((function t(a){var l,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(l=n.filter((function(e){return e._id===a}))[0]||{})._id){t.next=6;break}return c="".concat(e,"/").concat(a),s(!o),t.next=6,F.a.delete(c).then((function(e){s((function(){return o})),r(n.filter((function(e){return e._id!==l._id})))})).catch(console.error);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){d()}),[]),[n,o,m,i,p,d]},P=function(){var e=G("https://api-js401.herokuapp.com/api/v1/todo"),t=Object(f.a)(e,5),a=t[0],n=t[1],r=t[2],l=t[3],c=t[4];return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,null,o.a.createElement(y.a,null,o.a.createElement(N.a,null))),o.a.createElement("section",{className:"todo"},o.a.createElement(k.a,{className:"board-color"},o.a.createElement(y.a,{className:" p-3 mb-3 bg-dark text-white "},o.a.createElement(N.a,{xs:10},o.a.createElement("h2",null,"There are  ",o.a.createElement(T.a,{pill:!0,variant:a.filter((function(e){return!e.complete})).length?"success":"danger"}," ",a.filter((function(e){return!e.complete})).length," ")," Items To Complete")),n?o.a.createElement(N.a,null,o.a.createElement(I.a,{animation:"border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))):null),o.a.createElement(y.a,{className:"pl-3 pr-3"},o.a.createElement(N.a,{md:4,className:"p-sm-0"},o.a.createElement(j,{handleSubmit:r})),o.a.createElement(N.a,{md:8,className:"justify-content-center p-sm-0 pl-md-5"},o.a.createElement(A,{list:a,handleComplete:l,handleDelete:c}))))))};var J=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null))},B=a(24),q=a(6),M=a(43),z=function(e){return o.a.createElement("header",null,o.a.createElement(M.a,{bg:"dark",variant:"dark"},o.a.createElement(M.a.Brand,{className:"mr-auto"},o.a.createElement(B.b,{to:"/",activeClassName:"list-class"},"TODO")),o.a.createElement(B.b,{to:"/",activeClassName:"list-class"},o.a.createElement(v.a,null,"Home")),o.a.createElement(B.b,{to:"/settings",activeClassName:"list-class"},o.a.createElement(v.a,null,"Settings"))))};var H=function(){var e=Object(u.useContext)(b);return console.log("settingsContext>>>>>>>>",e.value),o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,null,o.a.createElement(g.a,{onSubmit:e.handleSubmit,className:" shadow-lg bg-white rounded p-3 mb-3 mr-0"},o.a.createElement("h3",{className:"text-center mb-2"},"Set Your Preferences"),o.a.createElement(g.a.Group,null,o.a.createElement(g.a.Label,null,"Number of items to display per screen"),o.a.createElement(g.a.Control,{type:"number",name:"numberOfItems",defaultValue:e.value.numberOfItems,placeholder:"Number of items to display per screen",required:!0,onChange:e.handleChange})),o.a.createElement(g.a.Group,null,o.a.createElement(g.a.Label,null,"Show Completed Tasks:"),o.a.createElement(g.a.Check,{onChange:e.handleChange,type:"radio",name:"completedTasks",label:"True",value:"true",defaultChecked:"true"===e.value.completedTasks,key:"1",required:!0}),o.a.createElement(g.a.Check,{type:"radio",name:"completedTasks",label:"False",defaultChecked:"false"===e.value.completedTasks,value:"false",key:"2",required:!0,onChange:e.handleChange})),o.a.createElement(g.a.Group,null,o.a.createElement(g.a.Label,null,"Sort By Difficulty:"),o.a.createElement(g.a.Control,{as:"select",name:"sort",placeholder:"Number of items to display per screen",required:!0,onChange:e.handleChange},o.a.createElement("option",{value:"descending",selected:"descending"===e.value.sort},"Descending Order"),o.a.createElement("option",{value:"ascending",selected:"ascending"===e.value.sort},"Ascending  Order"))),o.a.createElement(v.a,{type:"submit",variant:"secondary"},"Save"))))},U=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null))},V=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a,null,o.a.createElement(z,null),o.a.createElement(q.c,null,o.a.createElement(q.a,{exact:!0,path:"/"},o.a.createElement(J,null)),o.a.createElement(q.a,{exact:!0,path:"/settings"},o.a.createElement(U,null)))))}}]),a}(o.a.Component),X=(a(95),a(96),function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(E,null,o.a.createElement(V,null))}}]),a}(o.a.Component)),R=document.getElementById("root");m.a.render(o.a.createElement(X,null),R)}},[[65,1,2]]]);
//# sourceMappingURL=main.8ef11b55.chunk.js.map