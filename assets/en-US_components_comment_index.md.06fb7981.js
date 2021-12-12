var A=Object.defineProperty;var d=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(s,e,n)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,r=(s,e)=>{for(var n in e||(e={}))V.call(e,n)&&u(s,n,e[n]);if(d)for(var n of d(e))C.call(e,n)&&u(s,n,e[n]);return s};import{_ as N,r as m,c as B,a as k,w as g,b as h,o as M,V as T,d as t,e as a}from"./app.1c78646e.js";const U={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,createTextVNode:e,resolveComponent:n,createVNode:c,withCtx:o,openBlock:i,createElementBlock:l}=T,p=s("p",null,"MyAvatar",-1),_=e("MyAvatar"),v=s("p",null,"Used to discuss things, such as pages, blog posts, questions, etc.",-1),x=e("20:36");function y(D,I){const f=n("d-avatar"),b=n("d-comment");return i(),l("div",null,[c(b,null,{actions:o(()=>[p]),author:o(()=>[_]),avatar:o(()=>[c(f,{name:"MyAvatar"})]),content:o(()=>[v]),datetime:o(()=>[x]),_:1})])}return r({render:y},{})}()}},j='{"title":"Comment","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/comment/index.md","lastUpdated":1638797437150}',w=h('<h1 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-hidden="true">#</a></h1><p>A comment displays user feedback and discussion to website content.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',5),E=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("d-comment")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),a("actions")]),t("span",{class:"token punctuation"},">")]),a(`
     `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("p")]),t("span",{class:"token punctuation"},">")]),a("MyAvatar"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("p")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),a("author")]),t("span",{class:"token punctuation"},">")]),a("MyAvatar"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),a("avatar")]),t("span",{class:"token punctuation"},">")]),a(`
     `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("d-avatar")]),a(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("MyAvatar"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("d-avatar")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),a("content")]),t("span",{class:"token punctuation"},">")]),a(`
     `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("p")]),t("span",{class:"token punctuation"},">")]),a("Used to discuss things, such as pages, blog posts, questions, etc."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("p")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),a(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),a("datetime")]),t("span",{class:"token punctuation"},">")]),a("20:36"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("d-comment")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),q=h('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-comment</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">actions</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:center;">author</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">The element to display as the comment author</td></tr><tr><td style="text-align:center;">avatar</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">The element to display as the comment avatar - generally an antd Avatar</td></tr><tr><td style="text-align:center;">content</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">The main content of the comment</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:left;">A datetime element containing the time to be displayed</td></tr></tbody></table>',3);function P(s,e,n,c,o,i){const l=m("render-demo-0"),p=m("demo");return M(),B("div",null,[w,k(p,{sourceCode:`<template>
 <d-comment>
   <template v-slot:actions>
     <p>MyAvatar</p>
   </template>
   <template v-slot:author>MyAvatar</template>
   <template v-slot:avatar>
     <d-avatar name="MyAvatar"></d-avatar>
   </template>
   <template v-slot:content>
     <p>Used to discuss things, such as pages, blog posts, questions, etc.</p>
   </template>
   <template v-slot:datetime>20:36</template>
 </d-comment>
</template>
`},{highlight:g(()=>[E]),default:g(()=>[k(l)]),_:1}),q])}var z=N(U,[["render",P]]);export{j as __pageData,z as default};
