/*! For license information please see 8d9a1ed4.84500011.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[952338],{111071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"plugin-lighthouse-common.laslistresponse.limit",title:"LASListResponse.limit",description:"API reference for LASListResponse.limit"},s=void 0,u={unversionedId:"reference/plugin-lighthouse-common.laslistresponse.limit",id:"reference/plugin-lighthouse-common.laslistresponse.limit",title:"LASListResponse.limit",description:"API reference for LASListResponse.limit",source:"@site/../docs/reference/plugin-lighthouse-common.laslistresponse.limit.md",sourceDirName:"reference",slug:"/reference/plugin-lighthouse-common.laslistresponse.limit",permalink:"/docs/reference/plugin-lighthouse-common.laslistresponse.limit",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-lighthouse-common.laslistresponse.limit.md",tags:[],version:"current",frontMatter:{id:"plugin-lighthouse-common.laslistresponse.limit",title:"LASListResponse.limit",description:"API reference for LASListResponse.limit"}},c={},l=[];function a(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-lighthouse-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-lighthouse-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-lighthouse-common.laslistresponse",children:(0,n.jsx)(t.code,{children:"LASListResponse"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-lighthouse-common.laslistresponse.limit",children:(0,n.jsx)(t.code,{children:"limit"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"limit: number;\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))r.call(i,l)&&(u[l]=i[l]);if(t){s=t(i);for(var a=0;a<s.length;a++)n.call(i,s[a])&&(u[s[a]]=i[s[a]])}}return u}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,a=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:a,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,u=60110,c=60112;t.Suspense=60113;var l=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),a=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var _=v.prototype=new g;_.constructor=v,n(_,y.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,i={},s=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,n)&&!S.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),a=0;a<c;a++)l[a]=arguments[a+2];i.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===n?"."+x(c,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),R(s,t,r,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),t.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var a=n+x(u=e[l],l);c+=R(u,t,r,a,s)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(u=e.next()).done;)c+=R(u=u.value,t,r,a=n+x(u,l++),s);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var L={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=n({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=b.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)j.call(t,a)&&!S.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==l?l[a]:t[a])}var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){l=Array(a);for(var f=0;f<a;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:u,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||s:i(e),n.createElement(o.Provider,{value:u},t)}}}]);