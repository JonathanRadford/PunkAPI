(this["webpackJsonppunk-api"]=this["webpackJsonppunk-api"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(4),s=n.n(c),i=(n(9),n(2)),b=(n(10),n(11),n(0)),u=function(e){var t=e.handleSubmitABV,n=e.handleSubmitBrewDate;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"input",children:[Object(b.jsx)("input",{className:"input-box",type:"checkbox",onClick:t}),Object(b.jsx)("input",{className:"input-box",type:"checkbox",onClick:n})]})})},l=function(e){var t=e.handleSubmitABV,n=e.handleSubmitBrewDate;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsx)(u,{handleSubmitABV:t,handleSubmitBrewDate:n})})})},j=(n(13),function(e){var t=e.label,n=e.searchTerm,a=e.handleInput;return Object(b.jsx)("form",{className:"search-box",children:Object(b.jsx)("input",{type:"text",name:t,value:n,onInput:a,className:"search-box__input"})})}),h=function(e){var t=e.searchTerm,n=e.beerArr,a=e.handleInput,r=e.handleSubmitABV,c=e.handleSubmitBrewDate;return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("div",{className:"navbar-box",children:Object(b.jsx)("h2",{className:"navbar-box__heading",children:"Search"})}),Object(b.jsx)(j,{name:"beer cards",searchTerm:t,handleInput:a}),Object(b.jsx)(l,{beerArr:n,searchTerm:t,handleSubmitABV:r,handleSubmitBrewDate:c})]})},o=(n(14),n(15),function(e){var t=e.name,n=e.imgURL,a=e.brewDate,r=e.beerStrength;return Object(b.jsxs)("div",{className:"beer",children:[Object(b.jsx)("h2",{className:"beer__name",children:t}),Object(b.jsx)("div",{className:"beer__img",children:Object(b.jsx)("img",{src:n,alt:t,className:"beer__img-position"})}),Object(b.jsx)("h4",{className:"beer__info",children:"Brew Date: "}),Object(b.jsx)("p",{className:"beer__data",children:a}),Object(b.jsx)("h4",{className:"beer__info",children:"Alcohol Strength: "}),Object(b.jsx)("p",{className:"beer__data",children:r})]})}),d=function(e){var t=e.beerArr.map((function(e){return Object(b.jsx)(o,{imgURL:e.image_url,name:e.name,brewDate:e.first_brewed,beerStrength:e.abv,className:"beer"},e.id)}));return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"beers",children:t})})},m=(n(16),function(e){var t=e.beerArr;return Object(b.jsx)("div",{className:"main",children:Object(b.jsx)(d,{title:"Results",beerArr:t})})});var x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),u=s[0],l=s[1],j=Object(a.useState)(""),o=Object(i.a)(j,2),d=o[0],x=o[1];Object(a.useEffect)((function(){var e="https://api.punkapi.com/v2/beers?".concat(d);fetch(e).then((function(e){return e.json()})).then((function(e){l(e)}))}),[d]);var O=u.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{searchTerm:n,handleInput:function(e){var t=e.target.value.toLowerCase();r(t)},handleSubmitBrewDate:function(){x("brewed_before=1-2010")},handleSubmitABV:function(){x("abv_gt=6")}}),Object(b.jsx)(m,{beerArr:O})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()}],[[17,1,2]]]);
//# sourceMappingURL=main.ec1a119d.chunk.js.map