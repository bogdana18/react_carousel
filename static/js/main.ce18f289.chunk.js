(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n.n(i),a=n(2),s=n(1),r=(n(9),n(10),n(0)),l=function(e){var t=e.images,n=e.frameSize,i=e.step,c=e.itemWidth,l=e.isInfinite,u=e.animationDuration,m=Object(s.useState)(0),j=Object(a.a)(m,2),o=j[0],b=j[1],h=Object(s.useState)(!0),d=Object(a.a)(h,2),g=d[0],p=d[1];Object(s.useEffect)((function(){l&&(o!==n&&o!==t.length||p(!0))}),[o,l,n,t.length]);var O=function(){for(var e=[],i=0;i<n;i+=1)e.push(t[t.length-1-i]);return e.reverse(),e}(),x=function(){for(var e=[],i=0;i<n;i+=1)e.push(t[i]);return e}(),f=o>=t.length-n&&!l,v="translateX(-".concat(o*(100/n),"%)"),_="transform ".concat(g?u:0,"ms"),y="".concat(n*c,"px");return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{"data-cy":"title",className:"title",children:"Carousel"}),Object(r.jsxs)("div",{className:"carousel__family",children:[Object(r.jsx)("button",{type:"button",className:"button",disabled:o<=0&&!l,onClick:function(){(l||o>0)&&b(o-i<0?0:function(e){return e-i})},children:"Previous"}),Object(r.jsx)("div",{className:"carousel__container",style:{width:y},children:Object(r.jsxs)("div",{className:"carousel__content item-count--".concat(n),style:{transform:v,transition:_},onTransitionEnd:function(){l&&(0===o?(p(!1),b(t.length)):o===t.length+n&&(p(!1),b(n)))},children:[g,l&&O.map((function(e){return Object(r.jsx)("img",{src:"".concat(e),alt:"smiley"},"".concat(e))})),t.map((function(e){return Object(r.jsx)("img",{src:"".concat(e),alt:"smiley"},"".concat(e))})),l&&x.map((function(e){return Object(r.jsx)("img",{src:"".concat(e),alt:"smiley"},"".concat(e))}))]})}),Object(r.jsx)("button",{type:"button",className:"button",disabled:f,onClick:function(){var e=l?t.length+n:t.length-n;b(o+i>e?e:function(e){return e+i})},"data-cy":"next",children:"Next"})]})]})})},u=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],m=function(e){var t=e.images,n=Object(s.useState)(3),i=Object(a.a)(n,2),c=i[0],u=i[1],m=Object(s.useState)(3),j=Object(a.a)(m,2),o=j[0],b=j[1],h=Object(s.useState)(130),d=Object(a.a)(h,2),g=d[0],p=d[1],O=Object(s.useState)(!1),x=Object(a.a)(O,2),f=x[0],v=x[1],_=Object(s.useState)(1e3),y=Object(a.a)(_,2),N=y[0],S=y[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{images:t,frameSize:c,step:o,itemWidth:g,isInfinite:f,animationDuration:N}),Object(r.jsxs)("ul",{className:"list",children:[Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsx)("span",{children:"Step:"}),Object(r.jsx)("input",{type:"number",id:"step",name:"step",min:1,max:10,value:o,onChange:function(e){return b(+e.target.value)}})]}),Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsx)("span",{children:"Frame Size:"}),Object(r.jsx)("input",{type:"number",id:"frameSize",name:"frameSize",min:1,max:10,value:c,onChange:function(e){return u(+e.target.value)}})]}),Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsx)("span",{children:"Item Width:"}),Object(r.jsx)("input",{type:"number",id:"itemWidth",name:"itemWidth",min:100,step:10,max:200,value:g,onChange:function(e){return p(+e.target.value)}})]}),Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsx)("span",{children:"Animation Duration:"}),Object(r.jsx)("input",{type:"number",id:"itemWidth",name:"itemWidth",min:0,step:500,max:5e3,value:N,onChange:function(e){return S(+e.target.value)}})]}),Object(r.jsxs)("li",{className:"list__item",children:[Object(r.jsx)("span",{children:"Is Infinite:"}),Object(r.jsx)("input",{type:"checkbox",className:"input__checkbox",id:"infinite",name:"infinite",checked:f,onChange:function(e){return v(e.target.checked)}})]})]})]})},j=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m,{images:u})})};c.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ce18f289.chunk.js.map