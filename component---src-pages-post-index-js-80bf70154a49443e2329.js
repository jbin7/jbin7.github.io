"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[680],{8534:function(e,t,n){var a=n(7294),l=n(9686),r=n(470);t.Z=e=>{let{location:t,title:n,children:i}=e;const o="/"===t.pathname,{globalState:s,updateGlobalState:c}=(0,a.useContext)(r.Z);return(0,a.useEffect)((()=>{if(null==localStorage.getItem("color-theme")){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";localStorage.setItem("color-theme",e),document.documentElement.setAttribute("color-theme",e)}else document.documentElement.setAttribute("color-theme",localStorage.getItem("color-theme"));c({colorTheme:localStorage.getItem("color-theme")}),window.innerWidth<1200?c({isOpenSidebar:!1,isSidebarTransition:!1}):c({isOpenSidebar:!0,isSidebarTransition:!1});const e=()=>{window.innerWidth<1200?c({isOpenSidebar:!1,isSidebarTransition:!0}):c({isOpenSidebar:!0,isSidebarTransition:!0})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),a.createElement("div",null,a.createElement(l.Z,null),a.createElement("div",{className:"blog-wrapper \n        "+(s.isOpenSidebar?"side-open":"side-close")+"\n        "+(s.isOpenSidebar&&s.isSidebarTransition?"open-transition":"")+"\n        "+(!s.isOpenSidebar&&s.isSidebarTransition?"close-transition":"")+"\n        ","data-is-root-path":o},a.createElement("main",null,i)))}},8474:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>a.createElement("ol",{className:"post-list",style:{listStyle:"none"}},e.posts.map((e=>{const t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("div",{className:"tumbnail-area"},e.frontmatter.thumbnail?a.createElement("img",{className:"thumbnail-image",src:e.frontmatter.thumbnail.childImageSharp.fixed.src,alt:"thumbnail"}):a.createElement("p",null))),a.createElement("div",{className:"title-area"},a.createElement("header",null,a.createElement("h2",null,a.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("span",{className:"date"},e.frontmatter.date)))))})))},9357:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{var t,n,r;let{description:i,title:o,children:s}=e;const{site:c}=(0,l.useStaticQuery)("2841359383"),m=i||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?o+" | "+d:o),a.createElement("meta",{name:"description",content:m}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:m}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:m}),s)}},1728:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),l=n(8534),r=n(9357),i=n(8474);t.default=e=>{var t;let{data:n,location:r}=e;const o=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=n.allMarkdownRemark.nodes;return 0===s.length?a.createElement(l.Z,{location:r,title:o},a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(l.Z,{location:r,title:o},a.createElement("div",{className:"blog-area"},a.createElement(i.Z,{posts:s})))};const o=()=>a.createElement(r.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-post-index-js-80bf70154a49443e2329.js.map