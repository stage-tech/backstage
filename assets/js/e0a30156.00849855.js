/*! For license information please see e0a30156.00849855.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[165298],{532153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=n(824246),o=n(511151);const i={id:"frontend-plugin-api.extensioninput.config",title:"ExtensionInput.config",description:"API reference for ExtensionInput.config"},u=void 0,c={unversionedId:"reference/frontend-plugin-api.extensioninput.config",id:"reference/frontend-plugin-api.extensioninput.config",title:"ExtensionInput.config",description:"API reference for ExtensionInput.config",source:"@site/../docs/reference/frontend-plugin-api.extensioninput.config.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensioninput.config",permalink:"/docs/reference/frontend-plugin-api.extensioninput.config",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.extensioninput.config.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensioninput.config",title:"ExtensionInput.config",description:"API reference for ExtensionInput.config"}},f={},a=[];function s(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.extensioninput",children:(0,r.jsx)(t.code,{children:"ExtensionInput"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.extensioninput.config",children:(0,r.jsx)(t.code,{children:"config"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"config: TConfig;\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),f=1;f<arguments.length;f++){for(var a in i=Object(arguments[f]))n.call(i,a)&&(c[a]=i[a]);if(t){u=t(i);for(var s=0;s<u.length;s++)r.call(i,u[s])&&(c[u[s]]=i[u[s]])}}return c}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,s=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,r)&&!f.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:u.current}}t.jsx=a,t.jsxs=a},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,c=60110,f=60112;t.Suspense=60113;var a=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),u=l("react.provider"),c=l("react.context"),f=l("react.forward_ref"),t.Suspense=l("react.suspense"),a=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function v(){}function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var _=m.prototype=new v;_.constructor=m,r(_,g.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var f=arguments.length-2;if(1===f)i.children=n;else if(1<f){for(var a=Array(f),s=0;s<f;s++)a[s]=arguments[s+2];i.children=a}if(e&&e.defaultProps)for(r in f=e.defaultProps)void 0===i[r]&&(i[r]=f[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var f=!1;if(null===e)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case i:f=!0}}if(f)return u=u(f=e),e=""===r?"."+E(f,0):r,Array.isArray(u)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),S(u,t,n,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||f&&f.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),t.push(u)),1;if(f=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var s=r+E(c=e[a],a);f+=S(c,t,n,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),a=0;!(c=e.next()).done;)f+=S(c=c.value,t,n,s=r+E(c,a++),u);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return f}function C(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},t.Component=g,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var i=r({},e.props),u=e.key,c=e.ref,f=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,f=b.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)j.call(t,s)&&!x.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];i.children=a}return{$$typeof:o,type:e.type,key:u,ref:c,props:i,_owner:f}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:a,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||u:i(e),r.createElement(o.Provider,{value:c},t)}}}]);