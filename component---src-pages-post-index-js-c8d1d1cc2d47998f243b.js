"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[680],{8534:function(e,t,a){var n=a(7294),l=a(9686),r=a(470);t.Z=e=>{let{location:t,title:a,children:i}=e;const o="/"===t.pathname,{0:s,1:c}=(0,n.useState)(),{globalState:m,updateGlobalState:d}=(0,n.useContext)(r.Z);return(0,n.useEffect)((()=>{if(null==localStorage.getItem("color-theme")){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";localStorage.setItem("color-theme",e),document.documentElement.setAttribute("color-theme",e)}else document.documentElement.setAttribute("color-theme",localStorage.getItem("color-theme"));d({colorTheme:localStorage.getItem("color-theme"),isOpenSidebar:!1,isSidebarTransition:!1}),window.innerWidth>1200&&d({isOpenSidebar:!0});const e=()=>{c(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((()=>{!1===m.isOpenSidebar&&s>1200?d({isOpenSidebar:!0,isSidebarTransition:!0}):!0===m.isOpenSidebar&&s<1200&&d({isOpenSidebar:!1,isSidebarTransition:!0})}),[s]),n.createElement("div",null,n.createElement(l.Z,null),n.createElement("div",{className:"blog-wrapper   \n        "+(m.isOpenSidebar?"side-open":"side-close")+"\n        "+(m.isOpenSidebar&&m.isSidebarTransition?"open-transition":"")+"\n        "+(!m.isOpenSidebar&&m.isSidebarTransition?"close-transition":"")+"\n        ","data-is-root-path":o},n.createElement("main",null,i)))}},8474:function(e,t,a){var n=a(7294),l=a(1883);t.Z=e=>n.createElement("ol",{className:"post-list",style:{listStyle:"none"}},e.posts.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("div",{className:"tumbnail-area"},e.frontmatter.thumbnail?n.createElement("img",{className:"thumbnail-image",src:e.frontmatter.thumbnail.childImageSharp.fixed.src,alt:"thumbnail"}):n.createElement("p",null))),n.createElement("div",{className:"title-area"},n.createElement("header",null,n.createElement("h2",null,n.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("span",{className:"date"},e.frontmatter.date)))))})))},9357:function(e,t,a){var n=a(7294),l=a(1883);t.Z=e=>{var t,a,r;let{description:i,title:o,children:s}=e;const{site:c}=(0,l.useStaticQuery)("2841359383"),m=i||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?o+" | "+d:o),n.createElement("meta",{name:"description",content:m}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:m}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:o}),n.createElement("meta",{name:"twitter:description",content:m}),s)}},1728:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var n=a(7294),l=a(8534),r=a(9357),i=a(8474);t.default=e=>{var t;let{data:a,location:r}=e;const o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMarkdownRemark.nodes;return 0===s.length?n.createElement(l.Z,{location:r,title:o},n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(l.Z,{location:r,title:o},n.createElement("div",{className:"blog-area"},n.createElement(i.Z,{posts:s})))};const o=()=>n.createElement(r.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-post-index-js-c8d1d1cc2d47998f243b.js.map