(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{RZMt:function(A,v,r){},Zxc8:function(A,v,r){"use strict";r.r(v);var l=r("q1tI"),t=r.n(l),E=r("k3GJ"),_=r("MZF8"),s=r("dEAq"),B=r.n(s),y=r("H1Ra"),n=r("RZMt"),k=r.n(n);function d(u,o){return $(u)||C(u,o)||h(u,o)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(u,o){if(!!u){if(typeof u=="string")return O(u,o);var a=Object.prototype.toString.call(u).slice(8,-1);if(a==="Object"&&u.constructor&&(a=u.constructor.name),a==="Map"||a==="Set")return Array.from(u);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(u,o)}}function O(u,o){(o==null||o>u.length)&&(o=u.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=u[a];return c}function C(u,o){var a=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(a!=null){var c=[],f=!0,p=!1,x,b;try{for(a=a.call(u);!(f=(x=a.next()).done)&&(c.push(x.value),!(o&&c.length===o));f=!0);}catch(e){p=!0,b=e}finally{try{!f&&a.return!=null&&a.return()}finally{if(p)throw b}}return c}}function $(u){if(Array.isArray(u))return u}function F(u,o){var a,c=(a=u.match(/\.(\w+)$/))===null||a===void 0?void 0:a[1];return c||(c=o.tsx?"tsx":"jsx"),c}var z=function(o){var a,c,f,p=Object(l.useRef)(),x=Object(l.useContext)(s.context),b=x.locale,e=Object(s.useLocaleProps)(b,o),Z=Object(s.useDemoUrl)(e.identifier),S=e.demoUrl||Z,H=(_.a===null||_.a===void 0?void 0:_.a.location.hash)==="#".concat(e.identifier),J=Object.keys(e.sources).length===1,g=Object(s.useCodeSandbox)(((a=e.hideActions)===null||a===void 0?void 0:a.includes("CSB"))?null:e),R=Object(s.useRiddle)(((c=e.hideActions)===null||c===void 0?void 0:c.includes("RIDDLE"))?null:e),G=Object(s.useMotions)(e.motions||[],p.current),T=d(G,2),X=T[0],Q=T[1],V=Object(s.useCopy)(),I=d(V,2),Y=I[0],q=I[1],ee=Object(l.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),L=d(ee,2),j=L[0],te=L[1],ue=Object(l.useState)(F(j,e.sources[j])),U=d(ue,2),P=U[0],ae=U[1],re=Object(l.useState)(Boolean(e.defaultShowCode)),K=d(re,2),D=K[0],ne=K[1],oe=Object(l.useState)(Math.random()),N=d(oe,2),ie=N[0],W=N[1],M=e.sources[j][P]||e.sources[j].content,se=Object(s.useTSPlaygroundUrl)(b,M),ce=Object(l.useRef)(),le=Object(s.usePrefersColor)(),de=d(le,1),_e=de[0],w=e.actionBarRender,me=w===void 0?function(i){return i}:w;Object(l.useEffect)(function(){W(Math.random())},[_e]);function Ee(i){te(i),ae(F(i,e.sources[i]))}return t.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",H?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:p,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:ie,src:S,ref:ce}):e.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&t.a.createElement(s.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},me(t.a.createElement(t.a.Fragment,null,g&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:g}),R&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:R}),e.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:Q,onClick:function(){return X()}}),e.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return W(Math.random())}}),!((f=e.hideActions)===null||f===void 0?void 0:f.includes("EXTERNAL"))&&t.a.createElement(s.Link,{target:"_blank",to:S},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(M)}}),P==="tsx"&&D&&t.a.createElement(s.Link,{target:"_blank",to:se},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return ne(!D)}})))),D&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!J&&t.a.createElement(E.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:j,onChange:Ee},Object.keys(e.sources).map(function(i){return t.a.createElement(E.TabPane,{tab:i==="_"?"index.".concat(F(i,e.sources[i])):i,key:i})})),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(y.a,{code:M,lang:P,showCopy:!1}))))};v.default=z},tOfU:function(A,v,r){"use strict";r.r(v);var l=r("k1fw"),t=r("q1tI"),E=r.n(t),_=r("dEAq"),s=r.n(_),B=r("Zxc8"),y=r("H1Ra"),n=r("nKUr"),k=r.n(n),d=E.a.memo(m=>{var h=m.demos,O=h["form-render-rightpath"].component;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(E.a.Fragment,{children:[Object(n.jsxs)("div",{className:"markdown",children:[Object(n.jsxs)("h2",{id:"\u5982\u4F55\u6B63\u786E\u4E66\u5199-path",children:[Object(n.jsx)(_.AnchorLink,{to:"#\u5982\u4F55\u6B63\u786E\u4E66\u5199-path","aria-hidden":"true",tabIndex:-1,children:Object(n.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u6B63\u786E\u4E66\u5199 path"]}),Object(n.jsx)("p",{children:"\u5F53\u4F60\u9700\u8981\u8C03\u7528 setSchemaByPath \u65F6\uFF0C\u9700\u8981\u4E66\u5199\u6539\u52A8\u7684\u8868\u5355\u5143\u7D20\u5BF9\u5E94\u7684 path\u3002\u5982\u679C\u5143\u7D20\u7ED3\u6784\u5F88\u6DF1\uFF0C\u5982\u4F55\u5199\u6B63\u786E\u7684 path \u5462\uFF1F"}),Object(n.jsx)("p",{children:"\u4F8B\u5982"}),Object(n.jsx)(y.a,{code:"const formData = { x: [{ y: { z: 1 } }] };",lang:"js"}),Object(n.jsxs)("p",{children:["\u6211\u4EEC\u8981\u4FEE\u6539 z=1 \u53D8\u6210 z=2\uFF0C\u719F\u6089 lodash \u7684\u540C\u5B66\uFF0C\u90FD\u77E5\u9053\u9700\u8981, lodash \u7684 set \u51FD\u6570",Object(n.jsx)("code",{children:"_.set(object, path, value)"})]}),Object(n.jsx)(y.a,{code:`import _ from 'lodash';
_.set(formData, 'x[0].y.z', 2);`,lang:"js"}),Object(n.jsxs)("p",{children:["\u6240\u4EE5\u4E0A\u8FF0\u60C5\u51B5\u4E0B path \u662F",Object(n.jsx)("code",{children:"'x[0].y.z'"}),"\u3002\u5728 form-render \u91CC\u7684\u6D89\u53CA list \u7684 schema\uFF0C\u6240\u6709 item \u7684 schema \u662F\u4E00\u81F4\u7684\uFF0C\u6240\u4EE5\u6CA1\u6709\u4FEE\u6539\u7279\u5B9A index \u4E0B\u7684 schema \u7684\u6982\u5FF5\uFF0C\u90A3\u4E48\u5982\u679C\u4F60\u5E0C\u671B setSchemaByPath \u4FEE\u6539\u6240\u6709 index \u4E0B\u7684 schema\uFF0C\u5728 form-render \u91CC\u6B63\u786E\u7684 path \u662F",Object(n.jsx)("code",{children:"'x[].y.z'"})]})]}),Object(n.jsx)(B.default,Object(l.a)(Object(l.a)({},h["form-render-rightpath"].previewerProps),{},{children:Object(n.jsx)(O,{})}))]})})});v.default=m=>{var h=E.a.useContext(_.context),O=h.demos;return E.a.useEffect(()=>{var C;m!=null&&(C=m.location)!==null&&C!==void 0&&C.hash&&_.AnchorLink.scrollToAnchor(decodeURIComponent(m.location.hash.slice(1)))},[]),Object(n.jsx)(d,{demos:O})}}}]);