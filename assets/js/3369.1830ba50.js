"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3369],{6669:(e,t,a)=>{a.d(t,{A:()=>h});var l=a(6540),n=a(53),r=a(9408),o=a(4581),i=a(5489),s=a(1312);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,s.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.A)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.A)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(5600);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.GX,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.l)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return l.createElement(r.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,n.A)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},8258:(e,t,a)=>{a.d(t,{A:()=>R});var l=a(6540),n=a(53),r=a(7131),o=a(6025);function i(e){let{children:t,className:a}=e;const{frontMatter:n,assets:i,metadata:{description:s}}=(0,r.e)(),{withBaseUrl:m}=(0,o.h)(),c=i.image??n.image,u=n.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&l.createElement("meta",{itemProp:"description",content:s}),c&&l.createElement("link",{itemProp:"image",href:m(c,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}var s=a(5489);const m={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.e)(),{permalink:i,title:c}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,n.A)(m.title,t),itemProp:"headline"},o?c:l.createElement(s.A,{itemProp:"url",to:i},c))}var u=a(1312),d=a(5846);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.W)();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.e)(),{date:o,formattedDate:i,readingTime:s}=a;return l.createElement("div",{className:(0,n.A)(g.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:i}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:s})))}function f(e){return e.href?l.createElement(s.A,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:i,imageURL:s,email:m}=t,c=i||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.A)("avatar margin-bottom--sm",a)},s&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:r,itemProp:"image"})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.e)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.A)(!i&&"col col--6",i?A.imageOnlyAuthorCol:A.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function _(){return l.createElement("header",null,l.createElement(c,null),l.createElement(b,null),l.createElement(N,null))}var P=a(440),k=a(7780);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.e)();return l.createElement("div",{id:o?P.blogPostContainerID:void 0,className:(0,n.A)("markdown",a),itemProp:"articleBody"},l.createElement(k.A,null,t))}var w=a(1943),y=a(2053),I=a(8168);function F(){return l.createElement("b",null,l.createElement(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return l.createElement(s.A,(0,I.A)({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(F,null))}const C={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function B(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:s}=e,m=!t&&s,c=a.length>0;return c||m||i?l.createElement("footer",{className:(0,n.A)("row docusaurus-mt-lg",t&&C.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,n.A)("col",{"col--9":m})},l.createElement(y.A,{tags:a})),t&&i&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(w.A,{editUrl:i})),m&&l.createElement("div",{className:(0,n.A)("col text--right",{"col--3":c})},l.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return l.createElement(i,{className:(0,n.A)(o,a)},l.createElement(_,null),l.createElement(T,null,t),l.createElement(B,null))}},1943:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(6540),n=a(1312),r=a(7559),o=a(8168),i=a(53);const s={iconEdit:"iconEdit_Z9Sw"};function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,o.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.G.common.editThisPage},l.createElement(m,null),l.createElement(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9022:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(6540),n=a(53),r=a(5489);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return l.createElement(r.A,{className:(0,n.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&l.createElement("div",{className:"pagination-nav__sublabel"},o),l.createElement("div",{className:"pagination-nav__label"},a))}},6133:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(6540),n=a(53),r=a(5489);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(o.tag,i?o.tagWithCount:o.tagRegular)},a,i&&l.createElement("span",null,i))}},2053:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(6540),n=a(53),r=a(1312),o=a(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i.tag},l.createElement(o.A,{label:t,permalink:a}))}))))}},7131:(e,t,a)=>{a.d(t,{e:()=>i,i:()=>o});var l=a(6540),n=a(9532);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function i(){const e=(0,l.useContext)(r);if(null===e)throw new n.dV("BlogPostProvider");return e}},5846:(e,t,a)=>{a.d(t,{W:()=>m});var l=a(6540),n=a(4586);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function m(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);