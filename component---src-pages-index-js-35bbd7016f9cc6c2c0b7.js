(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(e,t,l){"use strict";l.r(t);var o=l(0),a=l.n(o),n=l(209),r=l(24),c=l(221),s=l.n(c);var i=function(e){return e.children},m=function(e){var t,l;function o(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}l=e,(t=o).prototype=Object.create(l.prototype),t.prototype.constructor=t,t.__proto__=l;var n=o.prototype;return n.componentDidMount=function(){s.a.polyfill()},n.handleClick=function(e){e.preventDefault();var t=0,l=!0,o=this.props,a=o.type,n=o.element,r=o.offset,c=o.timeout;if(a&&n)switch(a){case"class":l=!!(t=document.getElementsByClassName(n)[0]);break;case"id":l=!!(t=document.getElementById(n))}l?this.scrollTo(t,r,c):console.log("Element not found: "+n)},n.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),l):window.scroll({top:o+t,left:0,behavior:"smooth"})},n.render=function(){return a.a.createElement(i,null,"object"==typeof this.props.children?a.a.cloneElement(this.props.children,{onClick:this.handleClick}):a.a.createElement("span",{onClick:this.handleClick},this.props.children))},o}(a.a.Component),p=l(215),f=l.n(p),d=l(216),u=l.n(d),h=l(217),v=l.n(h),E=l(134),y=l.n(E);t.default=function(){return a.a.createElement(n.a,null,a.a.createElement("section",{id:"banner"},a.a.createElement("div",{className:"inner"},a.a.createElement("h2",null,y.a.heading),a.a.createElement("p",null,y.a.subHeading),a.a.createElement("ul",{className:"actions special"},a.a.createElement("li",null,a.a.createElement(m,{type:"id",element:"one"},a.a.createElement("a",{href:"/#",className:"button primary"},"Explore"))))),a.a.createElement(m,{type:"id",element:"one"},a.a.createElement("a",{href:"#one",className:"more"},"Learn More"))),a.a.createElement("section",{id:"one",className:"wrapper style1 special"},a.a.createElement("div",{className:"inner"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"a Student Studying Computer Science",a.a.createElement("br",null),"with an interest in 944's, Computers, and Cycling")),a.a.createElement("ul",{className:"icons major"},a.a.createElement("li",null,a.a.createElement("span",{className:"icon fa-gem major style1"},a.a.createElement("span",{className:"label"},"Lorem"))),a.a.createElement("li",null,a.a.createElement("span",{className:"icon fa-heart major style2"},a.a.createElement("span",{className:"label"},"Ipsum"))),a.a.createElement("li",null,a.a.createElement("span",{className:"icon solid fa-code major style3"},a.a.createElement("span",{className:"label"},"Dolor")))))),a.a.createElement("section",{id:"two",className:"wrapper alt style2"},a.a.createElement("section",{className:"spotlight"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:f.a,alt:""})),a.a.createElement("div",{className:"content"},a.a.createElement("h2",null,a.a.createElement(r.Link,{to:"/CS160"},"CS 160"),a.a.createElement("br",null)),a.a.createElement("p",null,"All of my work for my CS 160 class is under this link"))),a.a.createElement("section",{className:"spotlight"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:u.a,alt:""})),a.a.createElement("div",{className:"content"},a.a.createElement("h2",null,a.a.createElement(r.Link,{to:"/"},"Porsche 944"),a.a.createElement("br",null)),a.a.createElement("p",null,"Photos of my Porsche 944"))),a.a.createElement("section",{className:"spotlight"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:v.a,alt:""})),a.a.createElement("div",{className:"content"},a.a.createElement("h2",null,a.a.createElement(r.Link,{to:"/"},"Cycling"),a.a.createElement("br",null)),a.a.createElement("p",null,"Cycling photos of me")))))}},215:function(e,t,l){e.exports=l.p+"static/pic01-4ee3b098fd62d110863ed47d7cabaf13.jpg"},216:function(e,t,l){e.exports=l.p+"static/pic02-c917e815ac575fb9428a796ad2150bc9.jpg"},217:function(e,t,l){e.exports=l.p+"static/pic03-998b37fb4269d5bd6f6de7702d19d95c.jpg"},221:function(e,t,l){l(142),l(58),l(57),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var l,o=e.HTMLElement||e.Element,a=468,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||s,scrollIntoView:o.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,c=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var l=d(this),o=l.getBoundingClientRect(),a=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+a.left-o.left,l.scrollTop+a.top-o.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function m(e,t){return"Y"===t?e.clientHeight+c<e.scrollHeight:"X"===t?e.clientWidth+c<e.scrollWidth:void 0}function p(t,l){var o=e.getComputedStyle(t,null)["overflow"+l];return"auto"===o||"scroll"===o}function f(e){var t=m(e,"Y")&&p(e,"Y"),l=m(e,"X")&&p(e,"X");return t||l}function d(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function u(t){var l,o,n,c,s=(r()-t.startTime)/a;c=s=s>1?1:s,l=.5*(1-Math.cos(Math.PI*c)),o=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,o,n),o===t.x&&n===t.y||e.requestAnimationFrame(u.bind(e,t))}function h(l,o,a){var c,i,m,p,f=r();l===t.body?(c=e,i=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,p=n.scroll):(c=l,i=l.scrollLeft,m=l.scrollTop,p=s),u({scrollable:c,method:p,startTime:f,startX:i,startY:m,x:o,y:a})}}}}()}}]);
//# sourceMappingURL=component---src-pages-index-js-35bbd7016f9cc6c2c0b7.js.map