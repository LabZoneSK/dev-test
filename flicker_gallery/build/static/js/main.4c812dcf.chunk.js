(this.webpackJsonpflicker_gallery=this.webpackJsonpflicker_gallery||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(15),s=c.n(i),a=(c(22),c(3)),o=c(16),l=c.n(o),j=(c(42),c(1));var d=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Flick app"})})},b=c(17),h=c(47);var f=function(e){var t=e.title,c=e.linkToFlickPost,n=e.imageSrc,r=e.description;return Object(j.jsxs)(h.a.article,{className:"card",animate:{x:100},transition:{ease:"easeOut",duration:10},children:[Object(j.jsx)("img",{src:n,alt:r}),Object(j.jsxs)("div",{className:"cardBody",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("p",{children:r.substr(0,150)+"..."})]}),Object(j.jsx)("div",{className:"cardExploreBtn",children:Object(j.jsxs)("a",{href:c,children:["Explore ",Object(j.jsx)(b.a,{})]})})]})};var u=function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("h2",{children:"Images from flickr"})})};var O=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(!1),s=Object(a.a)(i,2),o=s[0],b=s[1],h=Object(n.useState)([]),O=Object(a.a)(h,2),p=O[0],x=O[1];return Object(n.useEffect)((function(){l.a.get("https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=2a33dd08ea58d2c86ccb995df5f1cf6b&gallery_id=66911286-72157647277042064&format=json&extras=description&nojsoncallback=1").then((function(e){b(!0),x(e.data)}),(function(e){b(!0),r(e)}))}),[]),c?Object(j.jsxs)("div",{children:["Error: ",c.message]}):Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),!o&&Object(j.jsx)("div",{children:"Loading..."}),Object(j.jsx)("main",{children:o&&p.photos&&p.photos.photo.map((function(e){return Object(j.jsx)(f,{imageSrc:"https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg",linkToFlickPost:"https://www.flickr.com/photos/"+e.owner+"/"+e.id,title:e.title,description:e.description._content},e.id)}))}),Object(j.jsx)(u,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),p()}},[[44,1,2]]]);
//# sourceMappingURL=main.4c812dcf.chunk.js.map