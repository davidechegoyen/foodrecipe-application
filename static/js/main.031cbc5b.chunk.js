(this.webpackJsonpfoodmama=this.webpackJsonpfoodmama||[]).push([[0],{17:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},63:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(28),c=r.n(a),i=r(8),d=(r(36),r(37),r(17),r(38),r(12)),u=r.n(d),j=r(2),o=r(29),l=r.n(o),b=r(1),g=function(e){var t=e.recipeIdChanger,r=Object(s.useState)(""),n=Object(i.a)(r,2),a=n[0],c=n[1],d=Object(s.useState)([]),o=Object(i.a)(d,2),g=o[0],h=o[1],O=Object(s.useState)(0),M=Object(i.a)(O,2),p=M[0],I=M[1],x=Object(s.useState)(!!g),m=Object(i.a)(x,2),f=m[0],v=m[1],N=Object(j.f)(),k=5*p,C=Math.ceil(g.length/5),w=g.slice(k,k+5).map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:e.strMealThumb,alt:"".concat(e.strMeal,"_image")}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsx)("h2",{children:e.strMeal}),Object(b.jsx)("button",{onClick:function(){return r=e.idMeal,t(r),void N.push("/recipepage=".concat(r));var r},children:"Recipe"})]})]},e.idMeal)}));return Object(b.jsx)("div",{className:"mainpage page",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"mainpage-block block",children:[Object(b.jsx)("h1",{children:"Food Mama"}),Object(b.jsx)("h2",{children:"Online Recipe App"}),Object(b.jsxs)("div",{className:"searchbox",children:[Object(b.jsx)("input",{onChange:function(e){return c(e.currentTarget.value)}}),Object(b.jsx)("button",{onClick:function(){!function(e){u.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(e)).then((function(e){e.data.meals?h(e.data.meals):v(!1)})).catch((function(e){return console.error(e)}))}(a.replace(" ","_")),v(!0)},children:Object(b.jsx)("i",{className:"fas fa-search fa-lg"})})]})]}),Object(b.jsx)("div",{className:"foodcardblock block",children:f?w.map((function(e){return e})):Object(b.jsx)("h1",{children:"No Recipes found :( "})}),f?Object(b.jsx)(l.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:C,onPageChange:function(e){var t=e.selected;I(t)},containerClassName:"pagination",previousLinkClassName:"prevbtn",nextLinkClassName:"nextbtn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"}):null]})})},h=r(11),O=(r(63),function(e){var t=e.id,r=Object(j.f)(),n=Object(s.useState)(""),a=Object(i.a)(n,2),c=a[0],d=a[1];Object(s.useEffect)((function(){u.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t)).then((function(e){return d(e.data.meals[0])})).catch((function(e){return console.error(e)}))}),[]);return Object(b.jsx)("div",{className:"page",children:Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"recipecard block",children:[Object(b.jsx)("img",{src:c.strMealThumb,alt:"".concat(c.strMeal,"_image")}),Object(b.jsx)("h1",{children:c.strMeal}),Object(b.jsx)("h2",{children:"Ingredients"}),Object(b.jsx)("p",{children:"".concat(function(e){var t=e.strIngredient1,r=e.strIngredient2,s=e.strIngredient3,n=e.strIngredient4,a=e.strIngredient5,c=e.strIngredient6,i=e.strIngredient7,d=e.strIngredient8,u=e.strIngredient9,j=e.strIngredient10,o=e.strIngredient11,l=e.strIngredient12,b=e.strIngredient13,g=e.strIngredient14,h=e.strIngredient15,O=e.strIngredient16,M=e.strIngredient17,p=e.strIngredient18,I=e.strIngredient19,x=e.strIngredient20;return Object.values({strIngredient1:t,strIngredient2:r,strIngredient3:s,strIngredient4:n,strIngredient5:a,strIngredient6:c,strIngredient7:i,strIngredient8:d,strIngredient9:u,strIngredient10:j,strIngredient11:o,strIngredient12:l,strIngredient13:b,strIngredient14:g,strIngredient15:h,strIngredient16:O,strIngredient17:M,strIngredient18:p,strIngredient19:I,strIngredient20:x})}(c)," ")}),Object(b.jsx)("h2",{children:"Measurements"}),Object(b.jsx)("p",{children:"".concat(function(e){var t=e.strMeasure1,r=e.strMeasure2,s=e.strMeasure3,n=e.strMeasure4,a=e.strMeasure5,c=e.strMeasure6,i=e.strMeasure7,d=e.strMeasure8,u=e.strMeasure9,j=e.strMeasure10,o=e.strMeasure11,l=e.strMeasure12,b=e.strMeasure13,g=e.strMeasure14,h=e.strMeasure15,O=e.strMeasure16,M=e.strMeasure17,p=e.strMeasure18,I=e.strMeasure19,x=e.strMeasure20;return Object.values({strMeasure1:t,strMeasure2:r,strMeasure3:s,strMeasure4:n,strMeasure5:a,strMeasure6:c,strMeasure7:i,strMeasure8:d,strMeasure9:u,strMeasure10:j,strMeasure11:o,strMeasure12:l,strMeasure13:b,strMeasure14:g,strMeasure15:h,strMeasure16:O,strMeasure17:M,strMeasure18:p,strMeasure19:I,strMeasure20:x})}(c)," ")}),Object(b.jsx)("h2",{children:"Instructions"}),Object(b.jsx)("p",{children:c.strInstructions}),Object(b.jsx)("button",{onClick:function(){r.push("/")},children:"Back to Search"})]})})})});var M=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),r=t[0],n=t[1];return Object(b.jsx)(h.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(g,{recipeIdChanger:function(e){n(e)}})}),Object(b.jsx)(j.a,{path:"/recipepage=".concat(r),children:Object(b.jsx)(O,{id:r})})]})})};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.031cbc5b.chunk.js.map