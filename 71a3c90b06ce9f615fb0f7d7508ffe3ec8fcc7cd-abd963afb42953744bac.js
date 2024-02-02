"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[420],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,c=new RegExp("^"+s.source),r=new RegExp(s.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),o=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),o=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,n,i)=>{let s=!1,c=!1,r=!1;for(let l=0;l<e.length;l++){const o=e[l];s&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,r=c,c=!0,l++):c&&r&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),r=c,c=!1,s=!0):(s=n(o)===o&&i(o)!==o,r=c,c=i(o)===o&&n(o)!==o)}return e})(e,s,o)),e=e.replace(c,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),i.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(r.lastIndex=0,l.lastIndex=0,e.replace(r,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return _},S:function(){return J},_:function(){return r},a:function(){return c},b:function(){return d},g:function(){return m},h:function(){return l}});var n=a(7294),i=(a(3204),a(5697)),s=a.n(i);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const n={};let i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,i){return void 0===i&&(i={}),c({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:c({},i,{opacity:t?1:0})})}function m(e,t,a,n,i,s,r,l){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=n,o.height=i,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),r&&(o.objectFit=r),l&&(o.objectPosition=l);const d=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const u=["children"],g=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=r(e,u);return n.createElement(n.Fragment,null,n.createElement(g,c({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:i,alt:s="",shouldLoad:l}=e,o=r(e,b);return n.createElement("img",c({},o,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,s=r(e,f);const l=s.sizes||(null==t?void 0:t.sizes),o=n.createElement(h,c({},s,t,{sizes:l,shouldLoad:i}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),o):o};var y;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const v=["fallback"],_=function(e){let{fallback:t}=e,a=r(e,v);return t?n.createElement(w,c({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",c({},a))};_.displayName="Placeholder",_.propTypes={fallback:i.string,sources:null==(y=w.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(w,c({},e)),n.createElement("noscript",null,n.createElement(w,c({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=w.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),c=3;c<n;c++)i[c-3]=arguments[c];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:N},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],T=new Set;let j,z;const I=function(e){let{as:t="div",image:i,style:s,backgroundColor:d,className:m,class:u,onStartLoad:g,onLoad:p,onError:b}=e,f=r(e,L);const{width:h,height:w,layout:y}=i,v=o(h,w,y),{style:_,className:E}=v,k=r(v,O),S=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);u&&(m=u);const N=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(y,h,w);return(0,n.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(x);if(z&&T.has(x))return;let t,n;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:r}=e;S.current&&(S.current.innerHTML=a(c({isLoading:!0,isLoaded:T.has(x),image:i},f)),T.has(x)||(t=requestAnimationFrame((()=>{S.current&&(n=r(S.current,x,T,s,g,p,b))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{T.has(x)&&z&&(S.current.innerHTML=z(c({isLoading:T.has(x),isLoaded:T.has(x),image:i},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,n.createElement)(t,c({},k,{style:c({},_,s,{backgroundColor:d}),className:E+(m?" "+m:""),ref:S,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},R=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));R.propTypes=C,R.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:i,__error:s}=t,l=r(t,P);return s&&console.warn(s),i?n.createElement(e,c({image:i},l)):(console.warn("Image not loaded",a),null)}}const A=q((function(e){let{as:t="div",className:a,class:i,style:s,image:l,loading:u="lazy",imgClassName:g,imgStyle:b,backgroundColor:f,objectFit:h,objectPosition:w}=e,y=r(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),b=c({objectFit:h,objectPosition:w,backgroundColor:f},b);const{width:v,height:N,layout:C,images:L,placeholder:O,backgroundColor:T}=l,j=o(v,N,C),{style:z,className:I}=j,R=r(j,S),P={fallback:void 0,sources:[]};return L.fallback&&(P.fallback=c({},L.fallback,{srcSet:L.fallback.srcSet?x(L.fallback.srcSet):void 0})),L.sources&&(P.sources=L.sources.map((e=>c({},e,{srcSet:x(e.srcSet)})))),n.createElement(t,c({},R,{style:c({},z,s,{backgroundColor:f}),className:I+(a?" "+a:"")}),n.createElement(p,{layout:C,width:v,height:N},n.createElement(_,c({},m(O,!1,C,v,N,T,h,w))),n.createElement(E,c({"data-gatsby-image-ssr":"",className:g},y,d("eager"===u,!1,P,u,b)))))})),D=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:N,width:D,height:D,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=F;const J=q(R);J.displayName="StaticImage",J.propTypes=F},9686:function(e,t,a){var n=a(7294),i=a(8032),s=a(1883),c=a(470);t.Z=e=>{let{location:t,title:r,children:l}=e;const{0:o,1:d}=(0,n.useState)(localStorage.getItem("color-theme")),{globalState:m,updateGlobalState:u}=(0,n.useContext)(c.Z),{0:g,1:p}=(0,n.useState)(!1),{0:b,1:f}=(0,n.useState)(!1),h=()=>{"dark"===o?(d("light"),localStorage.setItem("color-theme","light"),document.documentElement.setAttribute("color-theme","light"),document.documentElement.classList.add("fadein"),window.setTimeout((()=>{document.documentElement.classList.remove("fadein")}),500)):(d("dark"),localStorage.setItem("color-theme","dark"),document.documentElement.setAttribute("color-theme","dark"),document.documentElement.classList.add("fadein"),window.setTimeout((()=>{document.documentElement.classList.remove("fadein")}),500))},w=()=>{u({isOpenSidebar:!m.isOpenSidebar,isSidebarTransition:!0})},y=()=>{f(!0),p(!g)};return(0,n.useEffect)((()=>()=>{}),[]),n.createElement("div",{className:"nav-wrapper"},n.createElement("div",{className:"nav-header"},n.createElement("div",{className:"header-left"},"dark"===o?n.createElement("button",{onClick:w},n.createElement(i.S,{className:"menu-icon",src:"../images/icons/menu_light_icon.svg",alt:"icon",__imageData:a(6070)})):n.createElement("button",{onClick:w},n.createElement(i.S,{className:"menu-icon",src:"../images/icons/menu_dark_icon.svg",alt:"icon",__imageData:a(579)}))),n.createElement("div",{className:"header-center"},n.createElement(s.Link,{to:"/"},n.createElement(i.S,{className:"logo-image",src:"../images/gatsby-icon.png",alt:"logo-image",__imageData:a(1051)}))),n.createElement("div",{className:"header-right"},"dark"===o?n.createElement("button",{onClick:y},n.createElement(i.S,{className:"menu-icon",src:"../images/icons/menu_light_icon.svg",alt:"icon",__imageData:a(6070)})):n.createElement("button",{onClick:y},n.createElement(i.S,{className:"menu-icon",src:"../images/icons/menu_dark_icon.svg",alt:"icon",__imageData:a(579)})))),n.createElement("div",{className:"nav-sidebar\n        "+(m.isOpenSidebar?"open":"close")+"        \n        "+(m.isOpenSidebar&&m.isSidebarTransition?"open-transition":"")+"\n        "+(!m.isOpenSidebar&&m.isSidebarTransition?"close-transition":"")},n.createElement("nav",{className:"side-1"},n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"https://glowing-sawine-7a9024.netlify.app/",target:"_blank",rel:"noopener noreferrer"},n.createElement(i.S,{className:"profile-img",src:"../images/jbin_interactive_profile.png",alt:"Profile picture",__imageData:a(9344)}))),n.createElement("li",null,n.createElement("a",{href:"https://github.com/jbin7",target:"_blank",rel:"noopener noreferrer"},n.createElement(i.S,{className:"profile-img",src:"../images/github.png",alt:"Profile picture",__imageData:a(4723)}))))),n.createElement("div",{className:"side-2"},n.createElement("ul",{className:"category-list"},n.createElement("li",null,n.createElement(s.Link,{to:"/"},n.createElement("h3",null,"전체 글"))),n.createElement("li",null,n.createElement("div",{className:"group-label"},"category group1"),n.createElement("ul",null,n.createElement("li",null,n.createElement(s.Link,{to:"/"},"sub-category1")),n.createElement("li",null,n.createElement(s.Link,{to:"/"},"sub-category2")))),n.createElement("li",null,n.createElement("div",{className:"group-label"},"카테고리 그룹2"),n.createElement("ul",null,n.createElement("li",null,n.createElement(s.Link,{to:"/"},"서브-카테고리1")),n.createElement("li",null,n.createElement(s.Link,{to:"/"},"서브-카테고리2")))),n.createElement("li",null)),n.createElement("div",{className:"footer"},"dark"===o?n.createElement("button",{className:"color-mode-btn",onClick:h},n.createElement(i.S,{className:"color-mode-icon",src:"../images/icons/light_mode_icon.svg",alt:"icon",__imageData:a(3508)}),n.createElement("span",null,"라이트테마")):n.createElement("button",{className:"color-mode-btn",onClick:h},n.createElement(i.S,{className:"color-mode-icon",src:"../images/icons/dark_mode_icon.svg",alt:"icon",__imageData:a(7381)}),n.createElement("span",null,"다크테마")),n.createElement("hr",null),n.createElement("div",{className:"copyright"},"© ",(new Date).getFullYear(),", Jbin Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))),m.isOpenSidebar&&n.createElement("button",{onClick:w,className:"other"}," ")),n.createElement("div",{className:"nav-menu         \n        "+(g?"open":"close")+"        \n        "+(g&&b?"open-transition":"")+"\n        "+(!g&&b?"close-transition":""),onClick:y},n.createElement("nav",null,n.createElement("ul",null,n.createElement("li",null,n.createElement(s.Link,{to:"/"},"Blog")),n.createElement("li",null,n.createElement(s.Link,{to:"/portfolio"},"Portfolio")),n.createElement("li",null,n.createElement(s.Link,{to:"/resume"},"Resume"))))))}},3508:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/91ce30e29627897b044fc7a1d3877e0f/e4605/light_mode_icon.svg","srcSet":"/static/91ce30e29627897b044fc7a1d3877e0f/99c53/light_mode_icon.svg 6w,\\n/static/91ce30e29627897b044fc7a1d3877e0f/3dc2d/light_mode_icon.svg 12w,\\n/static/91ce30e29627897b044fc7a1d3877e0f/e4605/light_mode_icon.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/static/91ce30e29627897b044fc7a1d3877e0f/eee53/light_mode_icon.webp 6w,\\n/static/91ce30e29627897b044fc7a1d3877e0f/30aa9/light_mode_icon.webp 12w,\\n/static/91ce30e29627897b044fc7a1d3877e0f/4e704/light_mode_icon.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},4723:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/791dab015977b961883b0e91a5525fa9/82c11/github.png","srcSet":"/static/791dab015977b961883b0e91a5525fa9/2fd20/github.png 125w,\\n/static/791dab015977b961883b0e91a5525fa9/de391/github.png 250w,\\n/static/791dab015977b961883b0e91a5525fa9/82c11/github.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/791dab015977b961883b0e91a5525fa9/d66e1/github.webp 125w,\\n/static/791dab015977b961883b0e91a5525fa9/e7160/github.webp 250w,\\n/static/791dab015977b961883b0e91a5525fa9/5f169/github.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":500}')},6070:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/675f4dd448a467d43902e4e223f9b1f3/e4605/menu_light_icon.svg","srcSet":"/static/675f4dd448a467d43902e4e223f9b1f3/99c53/menu_light_icon.svg 6w,\\n/static/675f4dd448a467d43902e4e223f9b1f3/3dc2d/menu_light_icon.svg 12w,\\n/static/675f4dd448a467d43902e4e223f9b1f3/e4605/menu_light_icon.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/static/675f4dd448a467d43902e4e223f9b1f3/eee53/menu_light_icon.webp 6w,\\n/static/675f4dd448a467d43902e4e223f9b1f3/30aa9/menu_light_icon.webp 12w,\\n/static/675f4dd448a467d43902e4e223f9b1f3/4e704/menu_light_icon.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},1051:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#683898","images":{"fallback":{"src":"/static/4a9773549091c227cd2eb82ccd9c5e3a/ccc41/gatsby-icon.png","srcSet":"/static/4a9773549091c227cd2eb82ccd9c5e3a/bf8e1/gatsby-icon.png 128w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/acb7c/gatsby-icon.png 256w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/ccc41/gatsby-icon.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/4a9773549091c227cd2eb82ccd9c5e3a/6766a/gatsby-icon.webp 128w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/22bfc/gatsby-icon.webp 256w,\\n/static/4a9773549091c227cd2eb82ccd9c5e3a/d689f/gatsby-icon.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},9344:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#2858a8","images":{"fallback":{"src":"/static/919956f8bcef38b2a4ae6e9eceb1ff0c/bdb49/jbin_interactive_profile.png","srcSet":"/static/919956f8bcef38b2a4ae6e9eceb1ff0c/4f7be/jbin_interactive_profile.png 281w,\\n/static/919956f8bcef38b2a4ae6e9eceb1ff0c/22164/jbin_interactive_profile.png 562w,\\n/static/919956f8bcef38b2a4ae6e9eceb1ff0c/bdb49/jbin_interactive_profile.png 1124w","sizes":"(min-width: 1124px) 1124px, 100vw"},"sources":[{"srcSet":"/static/919956f8bcef38b2a4ae6e9eceb1ff0c/5b7ff/jbin_interactive_profile.webp 281w,\\n/static/919956f8bcef38b2a4ae6e9eceb1ff0c/15478/jbin_interactive_profile.webp 562w,\\n/static/919956f8bcef38b2a4ae6e9eceb1ff0c/93f3c/jbin_interactive_profile.webp 1124w","type":"image/webp","sizes":"(min-width: 1124px) 1124px, 100vw"}]},"width":1124,"height":948}')},579:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/476fd98a66201fd9ba6b24d1c36a71fd/e4605/menu_dark_icon.svg","srcSet":"/static/476fd98a66201fd9ba6b24d1c36a71fd/99c53/menu_dark_icon.svg 6w,\\n/static/476fd98a66201fd9ba6b24d1c36a71fd/3dc2d/menu_dark_icon.svg 12w,\\n/static/476fd98a66201fd9ba6b24d1c36a71fd/e4605/menu_dark_icon.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/static/476fd98a66201fd9ba6b24d1c36a71fd/eee53/menu_dark_icon.webp 6w,\\n/static/476fd98a66201fd9ba6b24d1c36a71fd/30aa9/menu_dark_icon.webp 12w,\\n/static/476fd98a66201fd9ba6b24d1c36a71fd/4e704/menu_dark_icon.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')},7381:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/417526bf0317efd2f1d65182be59e618/e4605/dark_mode_icon.svg","srcSet":"/static/417526bf0317efd2f1d65182be59e618/99c53/dark_mode_icon.svg 6w,\\n/static/417526bf0317efd2f1d65182be59e618/3dc2d/dark_mode_icon.svg 12w,\\n/static/417526bf0317efd2f1d65182be59e618/e4605/dark_mode_icon.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/static/417526bf0317efd2f1d65182be59e618/eee53/dark_mode_icon.webp 6w,\\n/static/417526bf0317efd2f1d65182be59e618/30aa9/dark_mode_icon.webp 12w,\\n/static/417526bf0317efd2f1d65182be59e618/4e704/dark_mode_icon.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')}}]);
//# sourceMappingURL=71a3c90b06ce9f615fb0f7d7508ffe3ec8fcc7cd-abd963afb42953744bac.js.map