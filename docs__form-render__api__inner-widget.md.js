(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{qN7z:function(a,t,c){"use strict";c.r(t);var d=c("q1tI"),n=c.n(d),e=c("dEAq"),h=c.n(e),j=c("H1Ra"),u=c("nKUr"),x=c.n(u),r=n.a.memo(i=>{var l=i.demos;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"markdown",children:[Object(u.jsxs)("h1",{id:"\u5185\u7F6E\u7EC4\u4EF6",children:[Object(u.jsx)(e.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u5185\u7F6E\u7EC4\u4EF6"]}),Object(u.jsx)("p",{children:"From-render \u5185\u90E8\u4F7F\u7528\u4E86\u5982\u4E0B\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u6839\u636E\u89C4\u5219\u5339\u914D\u5BF9\u5E94\u7EC4\u4EF6\uFF0C\u4F8B\u5982"}),Object(u.jsx)(j.a,{code:`const schema = {
  // ...
  // \u6B64 item \u4F1A\u5339\u914D imageInput \u56FE\u7247\u8F93\u5165\u6846
  img: {
    type: 'string',
    format: 'image',
  },
};`,lang:"js"}),Object(u.jsx)("p",{children:"\u6709\u65F6\uFF0C\u7528\u6237\u5E0C\u671B\u5F3A\u5236\u6307\u5B9A\u4E00\u4E2A\u8868\u5355\u539F\u4EF6\u7528\u67D0\u4E2A\u5185\u7F6E\u6216\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u6765\u5C55\u793A\uFF0C\u53EF\u4F7F\u7528 widget \u5B57\u6BB5\u6765\u8BF4\u660E\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684 item \u4F1A\u7528 select \u4E0B\u62C9\u5355\u9009\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u5373\u4F7F\u6CA1\u6709\u4E0B\u62C9\u9009\u9879\uFF1A"}),Object(u.jsx)(j.a,{code:`const schema = {
  // ...
  string: {
    title: '\u4E0B\u62C9\u9009\u6846',
    type: 'string',
    widget: 'select', // \u4F1A\u5F3A\u5236\u4F7F\u7528 select \u7EC4\u4EF6
  }
},`,lang:"js"}),Object(u.jsxs)("p",{children:["\u4E0B\u9762\u662F\u76EE\u524D FormRender \u5DF2\u7ECF\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u5176\u4E2D\u89C4\u5219\u7684\u683C\u5F0F\u4E3A",Object(u.jsxs)("code",{children:["$","{","type","}",":$","{","format","}","?$","{","enum","}","/$","{","readOnly","}"]}),"\uFF0C\u6CA1\u6709\u89C4\u5219\u7684\u4EE3\u8868\u5FC5\u987B\u6307\u660E ",Object(u.jsx)("code",{children:"widget"})," \u7684\u7EC4\u4EF6"]}),Object(u.jsxs)("p",{children:["\u5177\u4F53\u5C55\u793A\u8BE6\u89C1 ",Object(u.jsx)(e.Link,{to:"/playground",children:"playground"})," - \u57FA\u7840\u63A7\u4EF6\uFF0C\u5217\u8868\u7684\u5C55\u793A\u89C1",Object(u.jsx)(e.AnchorLink,{to:"/form-render/advanced/display#%E5%88%97%E8%A1%A8%E7%9A%84%E5%B1%95%E7%A4%BA",children:"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5"})]}),Object(u.jsxs)("h3",{id:"input",children:[Object(u.jsx)(e.AnchorLink,{to:"#input","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"input"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u8F93\u5165\u6846"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string"})]})]}),Object(u.jsxs)("h3",{id:"textarea",children:[Object(u.jsx)(e.AnchorLink,{to:"#textarea","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"textarea"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u591A\u884C\u8F93\u5165\u6846"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string:textarea"})]})]}),Object(u.jsxs)("h3",{id:"number",children:[Object(u.jsx)(e.AnchorLink,{to:"#number","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"number"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u6570\u5B57\u8F93\u5165\u6846"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"integer | number"})]})]}),Object(u.jsxs)("h3",{id:"url",children:[Object(u.jsx)(e.AnchorLink,{to:"#url","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"url"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u94FE\u63A5\u8F93\u5165\u6846"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string:url"})]})]}),Object(u.jsxs)("h3",{id:"imageinput",children:[Object(u.jsx)(e.AnchorLink,{to:"#imageinput","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"imageInput"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u56FE\u7247\u8F93\u5165\u6846"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string:image"})]})]}),Object(u.jsxs)("h3",{id:"date",children:[Object(u.jsx)(e.AnchorLink,{to:"#date","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"date"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u65E5\u671F\u7EC4\u4EF6"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string:dateTime | string:date"})]})]}),Object(u.jsxs)("h3",{id:"time",children:[Object(u.jsx)(e.AnchorLink,{to:"#time","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"time"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u65F6\u95F4\u7EC4\u4EF6"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string:time"})]})]}),Object(u.jsxs)("h3",{id:"daterange",children:[Object(u.jsx)(e.AnchorLink,{to:"#daterange","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"dateRange"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u65E5\u671F\u8303\u56F4"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"range:date | range:dateTime"})]})]}),Object(u.jsxs)("h3",{id:"timerange",children:[Object(u.jsx)(e.AnchorLink,{to:"#timerange","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"timeRange"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u65F6\u95F4\u8303\u56F4"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"range:time"})]})]}),Object(u.jsxs)("h3",{id:"checkbox",children:[Object(u.jsx)(e.AnchorLink,{to:"#checkbox","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"checkbox"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u662F\u5426\u9009\u62E9"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"checkboxes",children:[Object(u.jsx)(e.AnchorLink,{to:"#checkboxes","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"checkboxes"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u70B9\u51FB\u591A\u9009"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"array?enum"})]})]}),Object(u.jsxs)("h3",{id:"select",children:[Object(u.jsx)(e.AnchorLink,{to:"#select","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"select"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u4E0B\u62C9\u5355\u9009"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"*?enum_long"})]})]}),Object(u.jsxs)("h3",{id:"multiselect",children:[Object(u.jsx)(e.AnchorLink,{to:"#multiselect","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"multiSelect"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u4E0B\u62C9\u591A\u9009"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"array?enum_long"})]})]}),Object(u.jsxs)("h3",{id:"radio",children:[Object(u.jsx)(e.AnchorLink,{to:"#radio","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"radio"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u70B9\u51FB\u5355\u9009"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"*?enum"})]})]}),Object(u.jsxs)("h3",{id:"treeselect",children:[Object(u.jsx)(e.AnchorLink,{to:"#treeselect","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"treeSelect"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u6811\u5F62\u9009\u62E9"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"color",children:[Object(u.jsx)(e.AnchorLink,{to:"#color","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"color"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u989C\u8272\u9009\u62E9"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string:color"})]})]}),Object(u.jsxs)("h3",{id:"upload",children:[Object(u.jsx)(e.AnchorLink,{to:"#upload","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"upload"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u4E0A\u4F20\u7EC4\u4EF6"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"string:upload"})]})]}),Object(u.jsxs)("h3",{id:"html",children:[Object(u.jsx)(e.AnchorLink,{to:"#html","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"html"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09"}),Object(u.jsxs)("li",{children:["\u89C4\u5219\uFF1A",Object(u.jsx)("code",{children:"html"})]})]}),Object(u.jsxs)("h3",{id:"slider",children:[Object(u.jsx)(e.AnchorLink,{to:"#slider","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"slider"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u6ED1\u52A8\u8F93\u5165\u6761"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"rate",children:[Object(u.jsx)(e.AnchorLink,{to:"#rate","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"rate"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u4E94\u661F\u8BC4\u5206"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"cardlist",children:[Object(u.jsx)(e.AnchorLink,{to:"#cardlist","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"cardList"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u5361\u7247\u5F62\u5F0F\u7684\u5217\u8868\uFF0C\u7528\u4E8E\u5C55\u793A\u6570\u91CF\u4E0D\u592A\u591A\u4F46\u7ED3\u6784\u590D\u6742\u7684 list"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"simplelist",children:[Object(u.jsx)(e.AnchorLink,{to:"#simplelist","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"simpleList"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u7B80\u5355\u7684\u5217\u8868\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 1-3 \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"tablelist",children:[Object(u.jsx)(e.AnchorLink,{to:"#tablelist","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"tableList"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u8868\u683C\u5F62\u5F0F\u7684\u5217\u8868\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 3 - n \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5\uFF0C\u7279\u522B\u662F\u6570\u636E\u91CF\u5F88\u5927\u9700\u8981\u5206\u9875\u7684"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"drawerlist",children:[Object(u.jsx)(e.AnchorLink,{to:"#drawerlist","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"drawerList"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u4F7F\u7528\u62BD\u5C49\u7684\u8868\u683C\u5F62\u5F0F\u7684\u5217\u8868\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u5B58\u5728\u5217\u8868\u5957\u5217\u8868\uFF0C\u5217\u8868\u5957\u5BF9\u8C61\u7B49\u590D\u6742\u5143\u7D20\u7684\u60C5\u51B5"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"tablist",children:[Object(u.jsx)(e.AnchorLink,{to:"#tablist","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"tabList"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u7EC4\u4EF6\uFF1A\u4F7F\u7528 tab \u5F62\u5F0F\u7684\u5217\u8868\u7EC4\u4EF6"}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]}),Object(u.jsxs)("h3",{id:"virtuallist",children:[Object(u.jsx)(e.AnchorLink,{to:"#virtuallist","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"virtualList"]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["\u7EC4\u4EF6\uFF1A\u4E0E ",Object(u.jsx)("code",{children:"cardList"})," \u57FA\u672C\u76F8\u540C\uFF0C\u4F46\u4EE5\u865A\u62DF\u6EDA\u52A8\u66FF\u4EE3\u4E86\u4F20\u7EDF\u7684\u5206\u9875"]}),Object(u.jsx)("li",{children:"\u89C4\u5219\uFF1A-"})]})]})})});t.default=i=>{var l=n.a.useContext(e.context),F=l.demos;return n.a.useEffect(()=>{var s;i!=null&&(s=i.location)!==null&&s!==void 0&&s.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(i.location.hash.slice(1)))},[]),Object(u.jsx)(r,{demos:F})}}}]);