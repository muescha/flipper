"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[795],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){return function(n){var t=c(n.components);return r.createElement(e,a({},n,{components:t}))}},c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39960:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var r=t(80102),i=t(67294),a=t(73727),l=t(52263),o=t(13919),u=t(10412),s=(0,i.createContext)({collectLink:function(){}}),p=t(44996),c=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var n,t,f=e.isNavLink,m=e.to,g=e.href,h=e.activeClassName,b=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,x=void 0===y||y,O=(0,r.Z)(e,d),k=(0,l.default)().siteConfig,w=k.trailingSlash,P=k.baseUrl,j=(0,p.useBaseUrlUtils)().withBaseUrl,C=(0,i.useContext)(s),D=m||g,M=(0,o.Z)(D),N=null==D?void 0:D.replace("pathname://",""),T=void 0!==N?(t=N,x&&function(e){return e.startsWith("/")}(t)?j(t):t):void 0;T&&M&&(T=(0,c.applyTrailingSlash)(T,{trailingSlash:w,baseUrl:P}));var E=(0,i.useRef)(!1),U=f?a.OL:a.rU,S=u.default.canUseIntersectionObserver,I=(0,i.useRef)();(0,i.useEffect)((function(){return!S&&M&&null!=T&&window.docusaurus.prefetch(T),function(){S&&I.current&&I.current.disconnect()}}),[I,T,S,M]);var _=null!==(n=null==T?void 0:T.startsWith("#"))&&void 0!==n&&n,B=!T||!M||_;return T&&M&&!_&&!v&&C.collectLink(T),B?i.createElement("a",Object.assign({href:T},D&&!M&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(U,Object.assign({},O,{onMouseEnter:function(){E.current||null==T||(window.docusaurus.preload(T),E.current=!0)},innerRef:function(e){var n,t;S&&e&&M&&(n=e,t=function(){null!=T&&window.docusaurus.prefetch(T)},I.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(n),I.current.disconnect(),t())}))})),I.current.observe(n))},to:T||""},f&&{isActive:b,activeClassName:h}))}},13919:(e,n,t)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>i})},44996:(e,n,t)=>{t.r(n),t.d(n,{useBaseUrlUtils:()=>a,default:()=>l});var r=t(52263),i=t(13919);function a(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,l=a.forcePrependBaseUrl,o=void 0!==l&&l,u=a.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(o)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+p:p}(a,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8802:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,a=e.split(/[#?]/)[0],l="/"===a||a===r?a:(i=a,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,l)}},18780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},8924:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>b});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=t(44996),o=t(39960),u=["components"],s={id:"js-publishing",title:"Publishing Your Plugin",sidebar_label:"Publishing Your Plugin"},p=void 0,c={unversionedId:"tutorial/js-publishing",id:"tutorial/js-publishing",isDocsHomePage:!1,title:"Publishing Your Plugin",description:"The process of releasing plugins is largely automated at Meta. For details, see the Desktop Plugin Releases page.",source:"@site/../docs/tutorial/js-publishing.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-publishing",permalink:"/docs/tutorial/js-publishing",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/js-publishing.mdx",tags:[],version:"current",frontMatter:{id:"js-publishing",title:"Publishing Your Plugin",sidebar_label:"Publishing Your Plugin"},sidebar:"extending",previous:{title:"Custom UI",permalink:"/docs/tutorial/js-custom"},next:{title:"Development Setup",permalink:"/docs/extending/dev-setup"}},d=[{value:"Installing Plugins",id:"installing-plugins",children:[],level:2},{value:"Native Distribution",id:"native-distribution",children:[],level:2}],f=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},m=f("FbInternalOnly"),g=f("OssOnly"),h={toc:d};function b(e){var n=e.components,t=(0,i.Z)(e,u);return(0,a.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(m,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"The process of releasing plugins is largely automated at Meta. For details, see the ",(0,a.mdx)(o.default,{to:(0,l.default)("/docs/extending/fb/desktop-plugin-releases"),mdxType:"Link"},"Desktop Plugin Releases")," page.")),(0,a.mdx)(g,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"Once you're happy with your plugin and want the world to see it, you can publish it to npm."),(0,a.mdx)("p",null,"Before publishing, ensure that your plugin complies with the following rules:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The package name should start with 'flipper-plugin-'. This makes it easier to see the purpose of the package."),(0,a.mdx)("li",{parentName:"ul"},"The package must include the keyword 'flipper-plugin'."),(0,a.mdx)("li",{parentName:"ul"},"Source code of the plugin must be bundled by 'flipper-pkg' tool.")),(0,a.mdx)("p",null,"A valid example ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," could look like the following:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-sea-mammals",\n  "id": "sea-mammals",\n  "version": "2.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "icon": "apps",\n  "title": "Sea Mammals",\n  "category": "Example Plugin",\n  "scripts": {\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  },\n  "dependencies": {\n    "flipper": "latest"\n  },\n  "devDependencies": {\n    "flipper-pkg": "latest"\n  }\n}\n')),(0,a.mdx)("p",null,"When you have confirmed that your ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," is correct, run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn publish")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"npm publish")," and follow the instructions."),(0,a.mdx)("h2",{id:"installing-plugins"},"Installing Plugins"),(0,a.mdx)("p",null,"Once your plugin is published you can find it, alongside other available Flipper plugins, by clicking on 'Manage Plugins...' in the bottom of the left sidebar and selecting the 'Install Plugins' tab.\nIt may take a few moments for the search index to update and your plugin to appear."),(0,a.mdx)("img",{alt:"Install plugins",src:(0,l.default)("img/install-plugins.png")}),(0,a.mdx)("h2",{id:"native-distribution"},"Native Distribution"),(0,a.mdx)("p",null,"Depending on whether the client-side part of your plugin targets Android, iOS or React Native, it's recommended you use the standard package distribution mechanism for the platform.\nThis may be Maven Central, JCenter or GitHub Packages for Android, CocoaPods for iOS and npm or GitHub Packages for React Native."),(0,a.mdx)("p",null,"Make sure to leave setup instructions in the README of your npm package.")))}b.isMDXComponent=!0}}]);