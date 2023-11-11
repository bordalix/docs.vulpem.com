(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(90)),o={id:"getting-started",title:"Getting Started",image:"/img/marina_logo.svg"},c={unversionedId:"marina/getting-started",id:"marina/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"To develop for Marina, install Marina on your development machine. Download here.",source:"@site/docs/marina/getting-started.md",slug:"/marina/getting-started",permalink:"/marina/getting-started",editUrl:"https://github.com/vulpemventures/docs.vulpem.com/edit/master/docs/docs/marina/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/marina/introduction"},next:{title:"Connect to Marina",permalink:"/marina/connect"}},l=[{value:"Install marina-provider",id:"install-marina-provider",children:[]},{value:"Browser detection",id:"browser-detection",children:[{value:"Running in RegTest",id:"running-in-regtest",children:[]},{value:"Install Nigiri",id:"install-nigiri",children:[]},{value:"Start Nigiri with Liquid",id:"start-nigiri-with-liquid",children:[]}]},{value:"Choosing a JavaScript library",id:"choosing-a-javascript-library",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To develop for Marina, install Marina on your development machine. ",Object(i.b)("a",{parentName:"p",href:"https://vulpem.com/marina"},"Download here"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This guide assumes intermediate knowledge of HTML, CSS, and JavaScript."))),Object(i.b)("p",null,"Once Marina is installed and running, you should find that new browser tabs have a window.marina object available in the developer console. This is how your website will interact with Marina."),Object(i.b)("p",null,"You can review the full API for that object ",Object(i.b)("a",{parentName:"p",href:"/marina/api"},"here"),". "),Object(i.b)("h2",{id:"install-marina-provider"},"Install marina-provider"),Object(i.b)("p",null,"To make things easier, we have created a package that provides utilities and common types related to Marina. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm install marina-provider\n")),Object(i.b)("p",null,"or using yarn"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn add marina-provider\n")),Object(i.b)("h2",{id:"browser-detection"},"Browser detection"),Object(i.b)("p",null,"To verify if the browser is running Marina, you can use the ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/marina-provider"},"marina-provider")," package that provides a function ",Object(i.b)("inlineCode",{parentName:"p"},"detectProvider")," to inspect and fetch the ",Object(i.b)("inlineCode",{parentName:"p"},"window.marina")," provider."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import { detectProvider } from 'marina-provider';\n\ntry {\n  const marina = await detectProvider('marina');\n  // now the window.marina provider is available for use!\n} catch (err) {\n  console.log('Please install Marina extension!');\n}\n")),Object(i.b)("p",null,"You can review the full API for the ",Object(i.b)("inlineCode",{parentName:"p"},"window.marina")," object ",Object(i.b)("a",{parentName:"p",href:"/marina/api"},"here"),"."),Object(i.b)("p",null,"##\xa0Connect to outside world"),Object(i.b)("p",null,"Marina connects to Blockstream's ",Object(i.b)("a",{parentName:"p",href:"https://electrumx.readthedocs.io/"},"ElectrumX")," server via WebSocket by default. You can customize the WS endpoint in the settings/explorer tab of the extension."),Object(i.b)("h3",{id:"running-in-regtest"},"Running in RegTest"),Object(i.b)("p",null,"Don't be too reckless. You should develop your applications against a local testnet. Marina defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"ws://localhost:1234")," wich is the websocket endpoint of the Electrs-compatible server exposed by ",Object(i.b)("a",{parentName:"p",href:"https://vulpem.com/nigiri"},"Nigiri box"),". You can download and run an Electrs instance from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/blockstream/electrs"},"here"),", but we strongly suggest Nigiri which setup a complete RegTest environment in one click. Moreover the Electrs-compatible server exposed adds nice features for developers suchs as ",Object(i.b)("inlineCode",{parentName:"p"},"/mint")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/faucet")," endpoints with automatic block generation and a Liquid asset registry similar to what Blockstream maintains."),Object(i.b)("h3",{id:"install-nigiri"},"Install Nigiri"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"curl https://getnigiri.vulpem.com | bash \n")),Object(i.b)("h3",{id:"start-nigiri-with-liquid"},"Start Nigiri with Liquid"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"nigiri start --liquid\n")),Object(i.b)("p",null,"On ",Object(i.b)("a",{parentName:"p",href:"http://localhost:5001"},"http://localhost:5001")," you can see Esplora frontend"),Object(i.b)("h2",{id:"choosing-a-javascript-library"},"Choosing a JavaScript library"),Object(i.b)("p",null,"Browser libraries will help you develop faster your apps that handle Liquid transactions and doing operations such as creating, funding and build unsigned transactions or decode transaction built from other parties."),Object(i.b)("p",null,"We suggest using ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/liquidjs-lib"},"liquidjs-lib"),"."))}p.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);