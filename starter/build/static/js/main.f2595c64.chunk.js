(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(5),s=n.n(c),o=n(10),a=n.n(o),r=(n(15),n(3)),i=(n(16),n(1));var l=function(){return Object(i.jsx)("div",{className:"list-books-title",children:Object(i.jsx)("h1",{children:"MyReads"})})};function d(e){var t,n=e.book,c=e.updateShelf;return Object(i.jsxs)("div",{className:"book",children:[Object(i.jsxs)("div",{className:"book-top",children:[Object(i.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(null===(t=n.imageLinks)||void 0===t?void 0:t.thumbnail,")")}}),Object(i.jsx)("div",{className:"book-shelf-changer",children:Object(i.jsxs)("select",{defaultValue:n.shelf?n.shelf:"none",onChange:function(e){return c(n,e.target.value)},children:[Object(i.jsx)("option",{value:"none",disabled:!0,children:"Move to..."}),Object(i.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(i.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(i.jsx)("option",{value:"read",children:"Read"}),Object(i.jsx)("option",{value:"none",children:"None"})]})})]}),Object(i.jsx)("div",{className:"book-title",children:n.title}),Object(i.jsx)("div",{className:"book-authors",children:n.authors}),Object(i.jsx)("div",{className:"book-authors",children:n.shelf?n.shelf:"none"})]})}var j=s.a.memo(d);var b=function(e){var t=e.books,n=e.shelfName,c=e.updateShelf;return Object(i.jsxs)("div",{className:"bookshelf",children:[Object(i.jsx)("h2",{className:"bookshelf-title",children:n}),Object(i.jsx)("div",{className:"bookshelf-books",children:Object(i.jsx)("ol",{className:"books-grid",children:t.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(j,{book:e,shelfName:"Currently Reading",updateShelf:c})},e.id)}))})})]})};var h=function(e){var t=e.books,n=e.updateShelf,c=e.book,s=e.search,o=e.bookFound,a=t.filter((function(e){return"currentlyReading"===e.shelf})),r=t.filter((function(e){return"wantToRead"===e.shelf})),l=t.filter((function(e){return"read"===e.shelf}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{shelfName:"Currently Reading",books:a,updateShelf:n,book:c,search:s,bookFound:o}),Object(i.jsx)(b,{shelfName:"Want To Read",books:r,updateShelf:n}),Object(i.jsx)(b,{shelfName:"Read",books:l,updateShelf:n})]})},u=n(8),f="https://reactnd-books-api.udacity.com",O=localStorage.token;O||(O=localStorage.token=Math.random().toString(36).substr(-8));var x={Accept:"application/json",Authorization:O},k=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(u.a)(Object(u.a)({},x),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},m=n(22),p=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)([]),a=Object(r.a)(o,2),d=a[0],b=a[1],O=Object(c.useState)(""),p=Object(r.a)(O,2),v=p[0],N=p[1],g=Object(c.useState)([]),S=Object(r.a)(g,2),y=S[0],R=S[1],C=Object(c.useState)([]),T=Object(r.a)(C,2);T[0],T[1];function w(e,t){var n=d.map((function(n){return n.id===e.id&&(e.shelf=t)?e:n}));b(n),k(e,t).then((function(e){return console.log(e),e}))}return Object(c.useEffect)((function(){fetch("".concat(f,"/books"),{headers:x}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(e){b(e)}))}),[]),Object(c.useEffect)((function(){var e,t,n=!0;return v&&(e=v,fetch("".concat(f,"/search"),{method:"POST",headers:Object(u.a)(Object(u.a)({},x),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))).then((function(e){e.error?R([]):n&&(console.log(e),R(e))})),function(){n=!1,R([])}}),[v]),Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)(m.b,{children:[Object(i.jsx)(m.a,{path:"/",element:Object(i.jsxs)("div",{className:"list-books",children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"list-books-content",children:Object(i.jsx)(h,{books:d,updateShelf:w})}),Object(i.jsx)("div",{className:"open-search",children:Object(i.jsx)("a",{onClick:function(){return s(!n)},children:"Add a book"})})]})}),Object(i.jsx)(m.a,{path:"/search",element:Object(i.jsxs)("div",{className:"search-books",children:[Object(i.jsxs)("div",{className:"search-books-bar",children:[Object(i.jsx)("a",{className:"close-search",onClick:function(){return s(!n)},children:"Close"}),Object(i.jsx)("div",{className:"search-books-input-wrapper",children:Object(i.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN",value:v,onChange:function(e){return N(e.target.value)}})})]}),Object(i.jsx)("div",{className:"search-books-results",children:Object(i.jsx)("ol",{className:"books-grid",children:y.map((function(e){var t=d.find((function(t){return t.id===e.id})),n=t?t.shelf:"";return Object(i.jsx)("li",{children:Object(i.jsx)(j,{book:e,updateShelf:w,shelfName:n})},e.id)}))})})]})})]})})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f2595c64.chunk.js.map