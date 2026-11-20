(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var r0={exports:{}},ec={},s0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),Bv=Symbol.for("react.portal"),kv=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Hv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),Wv=Symbol.for("react.forward_ref"),jv=Symbol.for("react.suspense"),Xv=Symbol.for("react.memo"),qv=Symbol.for("react.lazy"),Wh=Symbol.iterator;function Yv(t){return t===null||typeof t!="object"?null:(t=Wh&&t[Wh]||t["@@iterator"],typeof t=="function"?t:null)}var a0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,l0={};function $s(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c0(){}c0.prototype=$s.prototype;function xf(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}var vf=xf.prototype=new c0;vf.constructor=xf;o0(vf,$s.prototype);vf.isPureReactComponent=!0;var jh=Array.isArray,u0=Object.prototype.hasOwnProperty,_f={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)u0.call(e,i)&&!d0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:eo,type:t,key:s,ref:a,props:r,_owner:_f.current}}function $v(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function Kv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kv(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case eo:case Bv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ac(a,0):i,jh(r)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(Sf(r)&&(r=$v(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",jh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ac(s,o);a+=tl(s,e,n,l,r)}else if(l=Yv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ac(s,o++),a+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},nl={transition:null},Jv={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:_f};function h0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!Sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=$s;Xe.Fragment=kv;Xe.Profiler=Gv;Xe.PureComponent=xf;Xe.StrictMode=zv;Xe.Suspense=jv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv;Xe.act=h0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=o0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=_f.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)u0.call(e,l)&&!d0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:eo,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:Vv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hv,_context:t},t.Consumer=t};Xe.createElement=f0;Xe.createFactory=function(t){var e=f0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Wv,render:t}};Xe.isValidElement=Sf;Xe.lazy=function(t){return{$$typeof:qv,_payload:{_status:-1,_result:t},_init:Zv}};Xe.memo=function(t,e){return{$$typeof:Xv,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};Xe.unstable_act=h0;Xe.useCallback=function(t,e){return pn.current.useCallback(t,e)};Xe.useContext=function(t){return pn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return pn.current.useEffect(t,e)};Xe.useId=function(){return pn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return pn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Xe.useRef=function(t){return pn.current.useRef(t)};Xe.useState=function(t){return pn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return pn.current.useTransition()};Xe.version="18.3.1";s0.exports=Xe;var ke=s0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=ke,e_=Symbol.for("react.element"),t_=Symbol.for("react.fragment"),n_=Object.prototype.hasOwnProperty,i_=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r_={key:!0,ref:!0,__self:!0,__source:!0};function p0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)n_.call(e,i)&&!r_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e_,type:t,key:s,ref:a,props:r,_owner:i_.current}}ec.Fragment=t_;ec.jsx=p0;ec.jsxs=p0;r0.exports=ec;var w=r0.exports,m0={exports:{}},Nn={},g0={exports:{}},x0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,B){var j=H.length;H.push(B);e:for(;0<j;){var N=j-1>>>1,te=H[N];if(0<r(te,B))H[N]=B,H[j]=te,j=N;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var B=H[0],j=H.pop();if(j!==B){H[0]=j;e:for(var N=0,te=H.length,Me=te>>>1;N<Me;){var X=2*(N+1)-1,ie=H[X],le=X+1,ve=H[le];if(0>r(ie,j))le<te&&0>r(ve,ie)?(H[N]=ve,H[le]=j,N=le):(H[N]=ie,H[X]=j,N=X);else if(le<te&&0>r(ve,j))H[N]=ve,H[le]=j,N=le;else break e}}return B}function r(H,B){var j=H.sortIndex-B.sortIndex;return j!==0?j:H.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,u=3,p=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(H){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=H)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function M(H){if(_=!1,S(H),!m)if(n(l)!==null)m=!0,K(b);else{var B=n(c);B!==null&&z(M,B.startTime-H)}}function b(H,B){m=!1,_&&(_=!1,d(y),y=-1),p=!0;var j=u;try{for(S(B),f=n(l);f!==null&&(!(f.expirationTime>B)||H&&!D());){var N=f.callback;if(typeof N=="function"){f.callback=null,u=f.priorityLevel;var te=N(f.expirationTime<=B);B=t.unstable_now(),typeof te=="function"?f.callback=te:f===n(l)&&i(l),S(B)}else i(l);f=n(l)}if(f!==null)var Me=!0;else{var X=n(c);X!==null&&z(M,X.startTime-B),Me=!1}return Me}finally{f=null,u=j,p=!1}}var E=!1,x=null,y=-1,C=5,R=-1;function D(){return!(t.unstable_now()-R<C)}function I(){if(x!==null){var H=t.unstable_now();R=H;var B=!0;try{B=x(!0,H)}finally{B?G():(E=!1,x=null)}}else E=!1}var G;if(typeof v=="function")G=function(){v(I)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=I,G=function(){O.postMessage(null)}}else G=function(){g(I,0)};function K(H){x=H,E||(E=!0,G())}function z(H,B){y=g(function(){H(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,K(b))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(u){case 1:case 2:case 3:var B=3;break;default:B=u}var j=u;u=B;try{return H()}finally{u=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,B){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var j=u;u=H;try{return B()}finally{u=j}},t.unstable_scheduleCallback=function(H,B,j){var N=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?N+j:N):j=N,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=j+te,H={id:h++,callback:B,priorityLevel:H,startTime:j,expirationTime:te,sortIndex:-1},j>N?(H.sortIndex=j,e(c,H),n(l)===null&&H===n(c)&&(_?(d(y),y=-1):_=!0,z(M,j-N))):(H.sortIndex=te,e(l,H),m||p||(m=!0,K(b))),H},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(H){var B=u;return function(){var j=u;u=B;try{return H.apply(this,arguments)}finally{u=j}}}})(x0);g0.exports=x0;var s_=g0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_=ke,Ln=s_;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v0=new Set,La={};function es(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(La[t]=e,t=0;t<e.length;t++)v0.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,o_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qh={},Yh={};function l_(t){return Fu.call(Yh,t)?!0:Fu.call(qh,t)?!1:o_.test(t)?Yh[t]=!0:(qh[t]=!0,!1)}function c_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u_(t,e,n,i){if(e===null||typeof e>"u"||c_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,Mf);Qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,Mf);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,Mf);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ef(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u_(e,n,r,i)&&(n=null),i||r===null?l_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),y0=Symbol.for("react.offscreen"),$h=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Tc;function pa(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Rc=!1;function Cc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function d_(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case Uu:return"Profiler";case wf:return"StrictMode";case Ou:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Af:return e=t.displayName||null,e!==null?e:ku(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return ku(t(e))}catch{}}return null}function f_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(e);case 8:return e===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h_(t){var e=M0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=h_(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=M0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w0(t,e){e=e.checked,e!=null&&Ef(t,"checked",e,!1)}function Gu(t,e){w0(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ma(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function b0(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p_=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){p_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function R0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function C0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=R0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var m_=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(m_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function Tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Ls=null,Ns=null;function ep(t){if(t=io(t)){if(typeof Yu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=sc(e),Yu(t.stateNode,t.type,e))}}function P0(t){Ls?Ns?Ns.push(t):Ns=[t]:Ls=t}function L0(){if(Ls){var t=Ls,e=Ns;if(Ns=Ls=null,ep(t),e)for(t=0;t<e.length;t++)ep(e[t])}}function N0(t,e){return t(e)}function D0(){}var Pc=!1;function I0(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return N0(t,e,n)}finally{Pc=!1,(Ls!==null||Ns!==null)&&(D0(),L0())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var i=sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var $u=!1;if(zi)try{var na={};Object.defineProperty(na,"passive",{get:function(){$u=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{$u=!1}function g_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ma=!1,Ml=null,El=!1,Ku=null,x_={onError:function(t){Ma=!0,Ml=t}};function v_(t,e,n,i,r,s,a,o,l){Ma=!1,Ml=null,g_.apply(x_,arguments)}function __(t,e,n,i,r,s,a,o,l){if(v_.apply(this,arguments),Ma){if(Ma){var c=Ml;Ma=!1,Ml=null}else throw Error(ae(198));El||(El=!0,Ku=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function F0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tp(t){if(ts(t)!==t)throw Error(ae(188))}function S_(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tp(r),t;if(s===i)return tp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function U0(t){return t=S_(t),t!==null?O0(t):null}function O0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O0(t);if(e!==null)return e;t=t.sibling}return null}var B0=Ln.unstable_scheduleCallback,np=Ln.unstable_cancelCallback,y_=Ln.unstable_shouldYield,M_=Ln.unstable_requestPaint,Tt=Ln.unstable_now,E_=Ln.unstable_getCurrentPriorityLevel,Rf=Ln.unstable_ImmediatePriority,k0=Ln.unstable_UserBlockingPriority,wl=Ln.unstable_NormalPriority,w_=Ln.unstable_LowPriority,z0=Ln.unstable_IdlePriority,tc=null,_i=null;function b_(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:R_,A_=Math.log,T_=Math.LN2;function R_(t){return t>>>=0,t===0?32:31-(A_(t)/T_|0)|0}var go=64,xo=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function C_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ri(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=C_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G0(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function L_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function H0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V0,Pf,W0,j0,X0,Ju=!1,vo=[],fr=null,hr=null,pr=null,Ia=new Map,Fa=new Map,rr=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=io(e),e!==null&&Pf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D_(t,e,n,i,r){switch(e){case"focusin":return fr=ia(fr,t,e,n,i,r),!0;case"dragenter":return hr=ia(hr,t,e,n,i,r),!0;case"mouseover":return pr=ia(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,ia(Ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fa.set(s,ia(Fa.get(s)||null,t,e,n,i,r)),!0}return!1}function q0(t){var e=Br(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=F0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){W0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=io(n),e!==null&&Pf(e),t.blockedOn=n,!1;e.shift()}return!0}function rp(t,e,n){il(t)&&n.delete(e)}function I_(){Ju=!1,fr!==null&&il(fr)&&(fr=null),hr!==null&&il(hr)&&(hr=null),pr!==null&&il(pr)&&(pr=null),Ia.forEach(rp),Fa.forEach(rp)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,I_)))}function Ua(t){function e(r){return ra(r,t)}if(0<vo.length){ra(vo[0],t);for(var n=1;n<vo.length;n++){var i=vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&ra(fr,t),hr!==null&&ra(hr,t),pr!==null&&ra(pr,t),Ia.forEach(e),Fa.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)q0(n),n.blockedOn===null&&rr.shift()}var Ds=Wi.ReactCurrentBatchConfig,Al=!0;function F_(t,e,n,i){var r=ot,s=Ds.transition;Ds.transition=null;try{ot=1,Lf(t,e,n,i)}finally{ot=r,Ds.transition=s}}function U_(t,e,n,i){var r=ot,s=Ds.transition;Ds.transition=null;try{ot=4,Lf(t,e,n,i)}finally{ot=r,Ds.transition=s}}function Lf(t,e,n,i){if(Al){var r=Qu(t,e,n,i);if(r===null)Gc(t,e,i,Tl,n),ip(t,i);else if(D_(r,t,e,n,i))i.stopPropagation();else if(ip(t,i),e&4&&-1<N_.indexOf(t)){for(;r!==null;){var s=io(r);if(s!==null&&V0(s),s=Qu(t,e,n,i),s===null&&Gc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gc(t,e,i,null,n)}}var Tl=null;function Qu(t,e,n,i){if(Tl=null,t=Tf(i),t=Br(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=F0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function Y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E_()){case Rf:return 1;case k0:return 4;case wl:case w_:return 16;case z0:return 536870912;default:return 16}default:return 16}}var or=null,Nf=null,rl=null;function $0(){if(rl)return rl;var t,e=Nf,n=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function sp(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:sp,this.isPropagationStopped=sp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=Dn(Ks),no=wt({},Ks,{view:0,detail:0}),O_=Dn(no),Nc,Dc,sa,nc=wt({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(Nc=t.screenX-sa.screenX,Dc=t.screenY-sa.screenY):Dc=Nc=0,sa=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),ap=Dn(nc),B_=wt({},nc,{dataTransfer:0}),k_=Dn(B_),z_=wt({},no,{relatedTarget:0}),Ic=Dn(z_),G_=wt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),H_=Dn(G_),V_=wt({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W_=Dn(V_),j_=wt({},Ks,{data:0}),op=Dn(j_),X_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y_[t])?!!e[t]:!1}function If(){return $_}var K_=wt({},no,{key:function(t){if(t.key){var e=X_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z_=Dn(K_),J_=wt({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Dn(J_),Q_=wt({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),eS=Dn(Q_),tS=wt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Dn(tS),iS=wt({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Dn(iS),sS=[9,13,27,32],Ff=zi&&"CompositionEvent"in window,Ea=null;zi&&"documentMode"in document&&(Ea=document.documentMode);var aS=zi&&"TextEvent"in window&&!Ea,K0=zi&&(!Ff||Ea&&8<Ea&&11>=Ea),cp=" ",up=!1;function Z0(t,e){switch(t){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function oS(t,e){switch(t){case"compositionend":return J0(e);case"keypress":return e.which!==32?null:(up=!0,cp);case"textInput":return t=e.data,t===cp&&up?null:t;default:return null}}function lS(t,e){if(Ss)return t==="compositionend"||!Ff&&Z0(t,e)?(t=$0(),rl=Nf=or=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K0&&e.locale!=="ko"?null:e.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cS[t.type]:e==="textarea"}function Q0(t,e,n,i){P0(i),e=Rl(e,"onChange"),0<e.length&&(n=new Df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wa=null,Oa=null;function uS(t){ug(t,0)}function ic(t){var e=Es(t);if(E0(e))return t}function dS(t,e){if(t==="change")return e}var eg=!1;if(zi){var Fc;if(zi){var Uc="oninput"in document;if(!Uc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Uc=typeof fp.oninput=="function"}Fc=Uc}else Fc=!1;eg=Fc&&(!document.documentMode||9<document.documentMode)}function hp(){wa&&(wa.detachEvent("onpropertychange",tg),Oa=wa=null)}function tg(t){if(t.propertyName==="value"&&ic(Oa)){var e=[];Q0(e,Oa,t,Tf(t)),I0(uS,e)}}function fS(t,e,n){t==="focusin"?(hp(),wa=e,Oa=n,wa.attachEvent("onpropertychange",tg)):t==="focusout"&&hp()}function hS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(Oa)}function pS(t,e){if(t==="click")return ic(e)}function mS(t,e){if(t==="input"||t==="change")return ic(e)}function gS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:gS;function Ba(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var n=pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ig(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xS(t){var e=ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(i!==null&&Uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mp(n,s);var a=mp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vS=zi&&"documentMode"in document&&11>=document.documentMode,ys=null,ed=null,ba=null,td=!1;function gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||ys==null||ys!==yl(i)||(i=ys,"selectionStart"in i&&Uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&Ba(ba,i)||(ba=i,i=Rl(ed,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function So(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Oc={},rg={};zi&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function rc(t){if(Oc[t])return Oc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rg)return Oc[t]=e[n];return t}var sg=rc("animationend"),ag=rc("animationiteration"),og=rc("animationstart"),lg=rc("transitionend"),cg=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){cg.set(t,e),es(e,[t])}for(var Bc=0;Bc<xp.length;Bc++){var kc=xp[Bc],_S=kc.toLowerCase(),SS=kc[0].toUpperCase()+kc.slice(1);Ar(_S,"on"+SS)}Ar(sg,"onAnimationEnd");Ar(ag,"onAnimationIteration");Ar(og,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(lg,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yS=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,__(i,e,void 0,t),t.currentTarget=null}function ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;vp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;vp(r,o,c),s=l}}}if(El)throw t=Ku,El=!1,Ku=null,t}function ft(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var i=t+"__bubble";n.has(i)||(dg(e,t,2,!1),n.add(i))}function zc(t,e,n){var i=0;e&&(i|=4),dg(n,t,i,e)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[yo]){t[yo]=!0,v0.forEach(function(n){n!=="selectionchange"&&(yS.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yo]||(e[yo]=!0,zc("selectionchange",!1,e))}}function dg(t,e,n,i){switch(Y0(e)){case 1:var r=F_;break;case 4:r=U_;break;default:r=Lf}n=r.bind(null,e,n,t),r=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Br(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}I0(function(){var c=s,h=Tf(n),f=[];e:{var u=cg.get(t);if(u!==void 0){var p=Df,m=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":p=Z_;break;case"focusin":m="focus",p=Ic;break;case"focusout":m="blur",p=Ic;break;case"beforeblur":case"afterblur":p=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eS;break;case sg:case ag:case og:p=H_;break;case lg:p=nS;break;case"scroll":p=O_;break;case"wheel":p=rS;break;case"copy":case"cut":case"paste":p=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lp}var _=(e&4)!==0,g=!_&&t==="scroll",d=_?u!==null?u+"Capture":null:u;_=[];for(var v=c,S;v!==null;){S=v;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,d!==null&&(M=Da(v,d),M!=null&&_.push(za(v,M,S)))),g)break;v=v.return}0<_.length&&(u=new p(u,m,null,n,h),f.push({event:u,listeners:_}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==qu&&(m=n.relatedTarget||n.fromElement)&&(Br(m)||m[Gi]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Br(m):null,m!==null&&(g=ts(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(_=ap,M="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=lp,M="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?u:Es(p),S=m==null?u:Es(m),u=new _(M,v+"leave",p,n,h),u.target=g,u.relatedTarget=S,M=null,Br(h)===c&&(_=new _(d,v+"enter",m,n,h),_.target=S,_.relatedTarget=g,M=_),g=M,p&&m)t:{for(_=p,d=m,v=0,S=_;S;S=is(S))v++;for(S=0,M=d;M;M=is(M))S++;for(;0<v-S;)_=is(_),v--;for(;0<S-v;)d=is(d),S--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=is(_),d=is(d)}_=null}else _=null;p!==null&&_p(f,u,p,_,!1),m!==null&&g!==null&&_p(f,g,m,_,!0)}}e:{if(u=c?Es(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=dS;else if(dp(u))if(eg)b=mS;else{b=hS;var E=fS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=pS);if(b&&(b=b(t,c))){Q0(f,b,n,h);break e}E&&E(t,u,c),t==="focusout"&&(E=u._wrapperState)&&E.controlled&&u.type==="number"&&Hu(u,"number",u.value)}switch(E=c?Es(c):window,t){case"focusin":(dp(E)||E.contentEditable==="true")&&(ys=E,ed=c,ba=null);break;case"focusout":ba=ed=ys=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,gp(f,n,h);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":gp(f,n,h)}var x;if(Ff)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ss?Z0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(K0&&n.locale!=="ko"&&(Ss||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ss&&(x=$0()):(or=h,Nf="value"in or?or.value:or.textContent,Ss=!0)),E=Rl(c,y),0<E.length&&(y=new op(y,t,null,n,h),f.push({event:y,listeners:E}),x?y.data=x:(x=J0(n),x!==null&&(y.data=x)))),(x=aS?oS(t,n):lS(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(h=new op("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=x))}ug(f,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Da(t,n),s!=null&&i.unshift(za(t,s,r)),s=Da(t,e),s!=null&&i.push(za(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Da(n,s),l!=null&&a.unshift(za(n,l,o))):r||(l=Da(n,s),l!=null&&a.push(za(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var MS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(MS,`
`).replace(ES,"")}function Mo(t,e,n){if(e=Sp(e),Sp(t)!==e&&n)throw Error(ae(425))}function Cl(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(AS)}:sd;function AS(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ua(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),mi="__reactFiber$"+Zs,Ga="__reactProps$"+Zs,Gi="__reactContainer$"+Zs,ad="__reactEvents$"+Zs,TS="__reactListeners$"+Zs,RS="__reactHandles$"+Zs;function Br(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mp(t);t!==null;){if(n=t[mi])return n;t=Mp(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[mi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function sc(t){return t[Ga]||null}var od=[],ws=-1;function Tr(t){return{current:t}}function ht(t){0>ws||(t.current=od[ws],od[ws]=null,ws--)}function dt(t,e){ws++,od[ws]=t.current,t.current=e}var Mr={},ln=Tr(Mr),Sn=Tr(!1),Xr=Mr;function ks(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Pl(){ht(Sn),ht(ln)}function Ep(t,e,n){if(ln.current!==Mr)throw Error(ae(168));dt(ln,e),dt(Sn,n)}function fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,f_(t)||"Unknown",r));return wt({},n,i)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Xr=ln.current,dt(ln,t),dt(Sn,Sn.current),!0}function wp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=fg(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,ht(Sn),ht(ln),dt(ln,t)):ht(Sn),dt(Sn,n)}var Ni=null,ac=!1,Vc=!1;function hg(t){Ni===null?Ni=[t]:Ni.push(t)}function CS(t){ac=!0,hg(t)}function Rr(){if(!Vc&&Ni!==null){Vc=!0;var t=0,e=ot;try{var n=Ni;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,ac=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),B0(Rf,Rr),r}finally{ot=e,Vc=!1}}return null}var bs=[],As=0,Nl=null,Dl=0,Gn=[],Hn=0,qr=null,Di=1,Ii="";function Ur(t,e){bs[As++]=Dl,bs[As++]=Nl,Nl=t,Dl=e}function pg(t,e,n){Gn[Hn++]=Di,Gn[Hn++]=Ii,Gn[Hn++]=qr,qr=t;var i=Di;t=Ii;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Di=1<<32-ri(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function Of(t){t.return!==null&&(Ur(t,1),pg(t,1,0))}function Bf(t){for(;t===Nl;)Nl=bs[--As],bs[As]=null,Dl=bs[--As],bs[As]=null;for(;t===qr;)qr=Gn[--Hn],Gn[Hn]=null,Ii=Gn[--Hn],Gn[Hn]=null,Di=Gn[--Hn],Gn[Hn]=null}var Pn=null,Cn=null,gt=!1,ei=null;function mg(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(gt){var e=Cn;if(e){var n=e;if(!bp(t,e)){if(ld(t))throw Error(ae(418));e=mr(n.nextSibling);var i=Pn;e&&bp(t,e)?mg(i,n):(t.flags=t.flags&-4097|2,gt=!1,Pn=t)}}else{if(ld(t))throw Error(ae(418));t.flags=t.flags&-4097|2,gt=!1,Pn=t}}}function Ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Eo(t){if(t!==Pn)return!1;if(!gt)return Ap(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Cn)){if(ld(t))throw gg(),Error(ae(418));for(;e;)mg(t,e),e=mr(e.nextSibling)}if(Ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?mr(t.stateNode.nextSibling):null;return!0}function gg(){for(var t=Cn;t;)t=mr(t.nextSibling)}function zs(){Cn=Pn=null,gt=!1}function kf(t){ei===null?ei=[t]:ei.push(t)}var PS=Wi.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function xg(t){function e(d,v){if(t){var S=d.deletions;S===null?(d.deletions=[v],d.flags|=16):S.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=_r(d,v),d.index=0,d.sibling=null,d}function s(d,v,S){return d.index=S,t?(S=d.alternate,S!==null?(S=S.index,S<v?(d.flags|=2,v):S):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,S,M){return v===null||v.tag!==6?(v=Kc(S,d.mode,M),v.return=d,v):(v=r(v,S),v.return=d,v)}function l(d,v,S,M){var b=S.type;return b===_s?h(d,v,S.props.children,M,S.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&Tp(b)===v.type)?(M=r(v,S.props),M.ref=aa(d,v,S),M.return=d,M):(M=fl(S.type,S.key,S.props,null,d.mode,M),M.ref=aa(d,v,S),M.return=d,M)}function c(d,v,S,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Zc(S,d.mode,M),v.return=d,v):(v=r(v,S.children||[]),v.return=d,v)}function h(d,v,S,M,b){return v===null||v.tag!==7?(v=Vr(S,d.mode,M,b),v.return=d,v):(v=r(v,S),v.return=d,v)}function f(d,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Kc(""+v,d.mode,S),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return S=fl(v.type,v.key,v.props,null,d.mode,S),S.ref=aa(d,null,v),S.return=d,S;case vs:return v=Zc(v,d.mode,S),v.return=d,v;case er:var M=v._init;return f(d,M(v._payload),S)}if(ma(v)||ta(v))return v=Vr(v,d.mode,S,null),v.return=d,v;wo(d,v)}return null}function u(d,v,S,M){var b=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return b!==null?null:o(d,v,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ho:return S.key===b?l(d,v,S,M):null;case vs:return S.key===b?c(d,v,S,M):null;case er:return b=S._init,u(d,v,b(S._payload),M)}if(ma(S)||ta(S))return b!==null?null:h(d,v,S,M,null);wo(d,S)}return null}function p(d,v,S,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(S)||null,o(v,d,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ho:return d=d.get(M.key===null?S:M.key)||null,l(v,d,M,b);case vs:return d=d.get(M.key===null?S:M.key)||null,c(v,d,M,b);case er:var E=M._init;return p(d,v,S,E(M._payload),b)}if(ma(M)||ta(M))return d=d.get(S)||null,h(v,d,M,b,null);wo(v,M)}return null}function m(d,v,S,M){for(var b=null,E=null,x=v,y=v=0,C=null;x!==null&&y<S.length;y++){x.index>y?(C=x,x=null):C=x.sibling;var R=u(d,x,S[y],M);if(R===null){x===null&&(x=C);break}t&&x&&R.alternate===null&&e(d,x),v=s(R,v,y),E===null?b=R:E.sibling=R,E=R,x=C}if(y===S.length)return n(d,x),gt&&Ur(d,y),b;if(x===null){for(;y<S.length;y++)x=f(d,S[y],M),x!==null&&(v=s(x,v,y),E===null?b=x:E.sibling=x,E=x);return gt&&Ur(d,y),b}for(x=i(d,x);y<S.length;y++)C=p(x,d,y,S[y],M),C!==null&&(t&&C.alternate!==null&&x.delete(C.key===null?y:C.key),v=s(C,v,y),E===null?b=C:E.sibling=C,E=C);return t&&x.forEach(function(D){return e(d,D)}),gt&&Ur(d,y),b}function _(d,v,S,M){var b=ta(S);if(typeof b!="function")throw Error(ae(150));if(S=b.call(S),S==null)throw Error(ae(151));for(var E=b=null,x=v,y=v=0,C=null,R=S.next();x!==null&&!R.done;y++,R=S.next()){x.index>y?(C=x,x=null):C=x.sibling;var D=u(d,x,R.value,M);if(D===null){x===null&&(x=C);break}t&&x&&D.alternate===null&&e(d,x),v=s(D,v,y),E===null?b=D:E.sibling=D,E=D,x=C}if(R.done)return n(d,x),gt&&Ur(d,y),b;if(x===null){for(;!R.done;y++,R=S.next())R=f(d,R.value,M),R!==null&&(v=s(R,v,y),E===null?b=R:E.sibling=R,E=R);return gt&&Ur(d,y),b}for(x=i(d,x);!R.done;y++,R=S.next())R=p(x,d,y,R.value,M),R!==null&&(t&&R.alternate!==null&&x.delete(R.key===null?y:R.key),v=s(R,v,y),E===null?b=R:E.sibling=R,E=R);return t&&x.forEach(function(I){return e(d,I)}),gt&&Ur(d,y),b}function g(d,v,S,M){if(typeof S=="object"&&S!==null&&S.type===_s&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ho:e:{for(var b=S.key,E=v;E!==null;){if(E.key===b){if(b=S.type,b===_s){if(E.tag===7){n(d,E.sibling),v=r(E,S.props.children),v.return=d,d=v;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&Tp(b)===E.type){n(d,E.sibling),v=r(E,S.props),v.ref=aa(d,E,S),v.return=d,d=v;break e}n(d,E);break}else e(d,E);E=E.sibling}S.type===_s?(v=Vr(S.props.children,d.mode,M,S.key),v.return=d,d=v):(M=fl(S.type,S.key,S.props,null,d.mode,M),M.ref=aa(d,v,S),M.return=d,d=M)}return a(d);case vs:e:{for(E=S.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(d,v.sibling),v=r(v,S.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Zc(S,d.mode,M),v.return=d,d=v}return a(d);case er:return E=S._init,g(d,v,E(S._payload),M)}if(ma(S))return m(d,v,S,M);if(ta(S))return _(d,v,S,M);wo(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,S),v.return=d,d=v):(n(d,v),v=Kc(S,d.mode,M),v.return=d,d=v),a(d)):n(d,v)}return g}var Gs=xg(!0),vg=xg(!1),Il=Tr(null),Fl=null,Ts=null,zf=null;function Gf(){zf=Ts=Fl=null}function Hf(t){var e=Il.current;ht(Il),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Fl=t,zf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(zf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Fl===null)throw Error(ae(308));Ts=t,Fl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var kr=null;function Vf(t){kr===null?kr=[t]:kr.push(t)}function _g(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Vf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,_=o;switch(u=e,p=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){f=m.call(p,f,u);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,u=typeof m=="function"?m.call(p,f,u):m,u==null)break e;f=wt({},f,u);break e;case 2:tr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=a,t.lanes=a,t.memoizedState=f}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ro={},Si=Tr(ro),Ha=Tr(ro),Va=Tr(ro);function zr(t){if(t===ro)throw Error(ae(174));return t}function jf(t,e){switch(dt(Va,e),dt(Ha,t),dt(Si,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}ht(Si),dt(Si,e)}function Hs(){ht(Si),ht(Ha),ht(Va)}function yg(t){zr(Va.current);var e=zr(Si.current),n=Wu(e,t.type);e!==n&&(dt(Ha,t),dt(Si,n))}function Xf(t){Ha.current===t&&(ht(Si),ht(Ha))}var _t=Tr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function qf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ol=Wi.ReactCurrentDispatcher,jc=Wi.ReactCurrentBatchConfig,Yr=0,Mt=null,Ft=null,Wt=null,Bl=!1,Aa=!1,Wa=0,LS=0;function nn(){throw Error(ae(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if(Yr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?FS:US,t=n(i,r),Aa){s=0;do{if(Aa=!1,Wa=0,25<=s)throw Error(ae(301));s+=1,Wt=Ft=null,e.updateQueue=null,ol.current=OS,t=n(i,r)}while(Aa)}if(ol.current=kl,e=Ft!==null&&Ft.next!==null,Yr=0,Wt=Ft=Mt=null,Bl=!1,e)throw Error(ae(300));return t}function Kf(){var t=Wa!==0;return Wa=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Xn(){if(Ft===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Wt===null?Mt.memoizedState:Wt.next;if(e!==null)Wt=e,Ft=t;else{if(t===null)throw Error(ae(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ja(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Yr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Mt.lanes|=h,$r|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ai(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ai(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mg(){}function Eg(t,e){var n=Mt,i=Xn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Zf(Ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Xa(9,bg.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(ae(349));Yr&30||wg(n,e,r)}return r}function wg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bg(t,e,n,i){e.value=n,e.getSnapshot=i,Tg(e)&&Rg(t)}function Ag(t,e,n){return n(function(){Tg(e)&&Rg(t)})}function Tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Rg(t){var e=Hi(t,1);e!==null&&si(e,t,1,-1)}function Pp(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=IS.bind(null,Mt,t),[e.memoizedState,t]}function Xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Cg(){return Xn().memoizedState}function ll(t,e,n,i){var r=fi();Mt.flags|=t,r.memoizedState=Xa(1|e,n,void 0,i===void 0?null:i)}function oc(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&Yf(i,a.deps)){r.memoizedState=Xa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Xa(1|e,n,s,i)}function Lp(t,e){return ll(8390656,8,t,e)}function Zf(t,e){return oc(2048,8,t,e)}function Pg(t,e){return oc(4,2,t,e)}function Lg(t,e){return oc(4,4,t,e)}function Ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dg(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,Ng.bind(null,e,t),n)}function Jf(){}function Ig(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Fg(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ug(t,e,n){return Yr&21?(ai(n,e)||(n=G0(),Mt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function NS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=jc.transition;jc.transition={};try{t(!1),e()}finally{ot=n,jc.transition=i}}function Og(){return Xn().memoizedState}function DS(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Bg(t))kg(e,n);else if(n=_g(t,e,n,i),n!==null){var r=fn();si(n,t,i,r),zg(n,e,i)}}function IS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bg(t))kg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ai(o,a)){var l=e.interleaved;l===null?(r.next=r,Vf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=_g(t,e,r,i),n!==null&&(r=fn(),si(n,t,i,r),zg(n,e,i))}}function Bg(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function kg(t,e){Aa=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}var kl={readContext:jn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},FS={readContext:jn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,Ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=DS.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:Pp,useDebugValue:Jf,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=Pp(!1),e=t[0];return t=NS.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=fi();if(gt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),jt===null)throw Error(ae(349));Yr&30||wg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lp(Ag.bind(null,i,s,t),[t]),i.flags|=2048,Xa(9,bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=jt.identifierPrefix;if(gt){var n=Ii,i=Di;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},US={readContext:jn,useCallback:Ig,useContext:jn,useEffect:Zf,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Fg,useReducer:Xc,useRef:Cg,useState:function(){return Xc(ja)},useDebugValue:Jf,useDeferredValue:function(t){var e=Xn();return Ug(e,Ft.memoizedState,t)},useTransition:function(){var t=Xc(ja)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1},OS={readContext:jn,useCallback:Ig,useContext:jn,useEffect:Zf,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Fg,useReducer:qc,useRef:Cg,useState:function(){return qc(ja)},useDebugValue:Jf,useDeferredValue:function(t){var e=Xn();return Ft===null?e.memoizedState=t:Ug(e,Ft.memoizedState,t)},useTransition:function(){var t=qc(ja)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=vr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(si(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=vr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(si(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=vr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(si(e,t,i,n),al(e,t,i))}};function Np(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function Gg(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=yn(e)?Xr:ln.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=yn(e)?Xr:ln.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lc.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=d_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BS=typeof WeakMap=="function"?WeakMap:Map;function Hg(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,Ed=i),hd(t,e)},n}function Vg(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new BS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=JS.bind(null,t,e,n),e.then(t,t))}function Fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var kS=Wi.ReactCurrentOwner,vn=!1;function dn(t,e,n,i){e.child=t===null?vg(e,null,n,i):Gs(e,t.child,n,i)}function Op(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=$f(t,e,n,i,s,r),n=Kf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(gt&&n&&Of(e),e.flags|=1,dn(t,e,i,r),e.child)}function Bp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ah(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wg(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(a,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return pd(t,e,n,i,r)}function jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Cs,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Cs,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Cs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Cs,Tn),Tn|=i;return dn(t,e,r,n),e.child}function Xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var s=yn(n)?Xr:ln.current;return s=ks(e,s),Is(e,r),n=$f(t,e,n,i,s,r),i=Kf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(gt&&i&&Of(e),e.flags|=1,dn(t,e,n,r),e.child)}function kp(t,e,n,i,r){if(yn(n)){var s=!0;Ll(e)}else s=!1;if(Is(e,r),e.stateNode===null)cl(t,e),Gg(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=yn(n)?Xr:ln.current,c=ks(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Dp(e,a,i,c),tr=!1;var u=e.memoizedState;a.state=u,Ul(e,i,a,r),l=e.memoizedState,o!==i||u!==l||Sn.current||tr?(typeof h=="function"&&(dd(e,n,h,i),l=e.memoizedState),(o=tr||Np(e,n,o,i,u,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Sg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Jn(e.type,o),a.props=c,f=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=yn(n)?Xr:ln.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||u!==l)&&Dp(e,a,i,l),tr=!1,u=e.memoizedState,a.state=u,Ul(e,i,a,r);var m=e.memoizedState;o!==f||u!==m||Sn.current||tr?(typeof p=="function"&&(dd(e,n,p,i),m=e.memoizedState),(c=tr||Np(e,n,c,i,u,m,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,s,r)}function md(t,e,n,i,r,s){Xg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&wp(e,n,!1),Vi(t,e,s);i=e.stateNode,kS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):dn(t,e,o,s),e.memoizedState=i.state,r&&wp(e,n,!0),e.child}function qg(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),jf(t,e.containerInfo)}function zp(t,e,n,i,r){return zs(),kf(r),e.flags|=256,dn(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yg(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(_t,r&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=dc(a,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xd(n),e.memoizedState=gd,t):Qf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return zS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=_r(o,s):(s=Vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?xd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qf(t,e){return e=dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,i){return i!==null&&kf(i),Gs(e,t.child,null,n),t=Qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(ae(422))),bo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=xd(a),e.memoizedState=gd,s);if(!(e.mode&1))return bo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Yc(s,i,void 0),bo(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),si(i,t,r,-1))}return sh(),i=Yc(Error(ae(421))),bo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=QS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=mr(r.nextSibling),Pn=e,gt=!0,ei=null,t!==null&&(Gn[Hn++]=Di,Gn[Hn++]=Ii,Gn[Hn++]=qr,Di=t.id,Ii=t.overflow,qr=e),e=Qf(e,i.children),e.flags|=4096,e)}function Gp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,n)}function $c(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $g(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gp(t,n,e);else if(t.tag===19)Gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$c(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GS(t,e,n){switch(e.tag){case 3:qg(e),zs();break;case 5:yg(e);break;case 1:yn(e.type)&&Ll(e);break;case 4:jf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Yg(t,e,n):(dt(_t,_t.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);dt(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $g(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,jg(t,e,n)}return Vi(t,e,n)}var Kg,vd,Zg,Jg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};Zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(Si.current);var s=null;switch(n){case"input":r=zu(t,r),i=zu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Vu(t,r),i=Vu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}ju(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jg=function(t,e,n,i){n!==i&&(e.flags|=4)};function oa(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function HS(t,e,n){var i=e.pendingProps;switch(Bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return yn(e.type)&&Pl(),rn(e),null;case 3:return i=e.stateNode,Hs(),ht(Sn),ht(ln),qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Ad(ei),ei=null))),vd(t,e),rn(e),null;case 5:Xf(e);var r=zr(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)Zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return rn(e),null}if(t=zr(Si.current),Eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)ft(xa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Kh(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Jh(i,s),ft("invalid",i)}ju(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",""+o]):La.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":po(i),Zh(i,s,!0);break;case"textarea":po(i),Qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[Ga]=i,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xu(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)ft(xa[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Kh(t,i),r=zu(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Jh(t,i),r=Vu(t,i),ft("invalid",t);break;default:r=i}ju(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?C0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Na(t,l):typeof l=="number"&&Na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Ef(t,s,l,a))}switch(n){case"input":po(t),Zh(t,i,!1);break;case"textarea":po(t),Qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)Jg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=zr(Va.current),zr(Si.current),Eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return rn(e),null;case 13:if(ht(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Cn!==null&&e.mode&1&&!(e.flags&128))gg(),zs(),e.flags|=98560,s=!1;else if(s=Eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[mi]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ei!==null&&(Ad(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ut===0&&(Ut=3):sh())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return Hs(),vd(t,e),t===null&&ka(e.stateNode.containerInfo),rn(e),null;case 10:return Hf(e.type._context),rn(e),null;case 17:return yn(e.type)&&Pl(),rn(e),null;case 19:if(ht(_t),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)oa(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ol(t),a!==null){for(e.flags|=128,oa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ws&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return rn(e),null}else 2*Tt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=_t.current,dt(_t,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return rh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function VS(t,e){switch(Bf(e),e.tag){case 1:return yn(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),ht(Sn),ht(ln),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(ht(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(_t),null;case 4:return Hs(),null;case 10:return Hf(e.type._context),null;case 22:case 23:return rh(),null;case 24:return null;default:return null}}var Ao=!1,on=!1,WS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function _d(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Hp=!1;function jS(t,e){if(nd=Al,t=ig(),Uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++h===i&&(l=a),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},Al=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Jn(e.type,_),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(M){bt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return m=Hp,Hp=!1,m}function Ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_d(e,n,s)}r=r.next}while(r!==i)}}function cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qg(t){var e=t.alternate;e!==null&&(t.alternate=null,Qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[Ga],delete e[ad],delete e[TS],delete e[RS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ex(t){return t.tag===5||t.tag===3||t.tag===4}function Vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var $t=null,Qn=!1;function qi(t,e,n){for(n=n.child;n!==null;)tx(t,e,n),n=n.sibling}function tx(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:on||Rs(n,e);case 6:var i=$t,r=Qn;$t=null,qi(t,e,n),$t=i,Qn=r,$t!==null&&(Qn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Qn?(t=$t,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),Ua(t)):Hc($t,n.stateNode));break;case 4:i=$t,r=Qn,$t=n.stateNode.containerInfo,Qn=!0,qi(t,e,n),$t=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&_d(n,e,a),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!on&&(Rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,qi(t,e,n),on=i):qi(t,e,n);break;default:qi(t,e,n)}}function Wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WS),e.forEach(function(i){var r=ey.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$t=o.stateNode,Qn=!1;break e;case 3:$t=o.stateNode.containerInfo,Qn=!0;break e;case 4:$t=o.stateNode.containerInfo,Qn=!0;break e}o=o.return}if($t===null)throw Error(ae(160));tx(s,a,r),$t=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nx(e,t),e=e.sibling}function nx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),li(t),i&4){try{Ta(3,t,t.return),cc(3,t)}catch(_){bt(t,t.return,_)}try{Ta(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:Yn(e,t),li(t),i&512&&n!==null&&Rs(n,n.return);break;case 5:if(Yn(e,t),li(t),i&512&&n!==null&&Rs(n,n.return),t.flags&32){var r=t.stateNode;try{Na(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&w0(r,s),Xu(o,a);var c=Xu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?C0(r,f):h==="dangerouslySetInnerHTML"?T0(r,f):h==="children"?Na(r,f):Ef(r,h,f,c)}switch(o){case"input":Gu(r,s);break;case"textarea":b0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ps(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ga]=s}catch(_){bt(t,t.return,_)}}break;case 6:if(Yn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){bt(t,t.return,_)}}break;case 3:if(Yn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:Yn(e,t),li(t);break;case 13:Yn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nh=Tt())),i&4&&Wp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||h,Yn(e,t),on=c):Yn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ee=t,h=t.child;h!==null;){for(f=Ee=h;Ee!==null;){switch(u=Ee,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ta(4,u,u.return);break;case 1:Rs(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:Rs(u,u.return);break;case 22:if(u.memoizedState!==null){Xp(f);continue}}p!==null?(p.return=u,Ee=p):Xp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=R0("display",a))}catch(_){bt(t,t.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){bt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yn(e,t),li(t),i&4&&Wp(t);break;case 21:break;default:Yn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ex(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=Vp(t);Md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Vp(t);yd(t,o,a);break;default:throw Error(ae(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XS(t,e,n){Ee=t,ix(t)}function ix(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ao;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||on;o=Ao;var c=on;if(Ao=a,(on=l)&&!c)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?qp(r):l!==null?(l.return=a,Ee=l):qp(r);for(;s!==null;)Ee=s,ix(s),s=s.sibling;Ee=r,Ao=o,on=c}jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):jp(t)}}function jp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}on||e.flags&512&&Sd(e)}catch(u){bt(e,e.return,u)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Xp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function qp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Sd(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Sd(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var qS=Math.ceil,zl=Wi.ReactCurrentDispatcher,eh=Wi.ReactCurrentOwner,Wn=Wi.ReactCurrentBatchConfig,et=0,jt=null,Pt=null,Zt=0,Tn=0,Cs=Tr(0),Ut=0,qa=null,$r=0,uc=0,th=0,Ra=null,xn=null,nh=0,Ws=1/0,Pi=null,Gl=!1,Ed=null,xr=null,To=!1,lr=null,Hl=0,Ca=0,wd=null,ul=-1,dl=0;function fn(){return et&6?Tt():ul!==-1?ul:ul=Tt()}function vr(t){return t.mode&1?et&2&&Zt!==0?Zt&-Zt:PS.transition!==null?(dl===0&&(dl=G0()),dl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Y0(t.type)),t):1}function si(t,e,n,i){if(50<Ca)throw Ca=0,wd=null,Error(ae(185));to(t,n,i),(!(et&2)||t!==jt)&&(t===jt&&(!(et&2)&&(uc|=n),Ut===4&&sr(t,Zt)),Mn(t,i),n===1&&et===0&&!(e.mode&1)&&(Ws=Tt()+500,ac&&Rr()))}function Mn(t,e){var n=t.callbackNode;P_(t,e);var i=bl(t,t===jt?Zt:0);if(i===0)n!==null&&np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&np(n),e===1)t.tag===0?CS(Yp.bind(null,t)):hg(Yp.bind(null,t)),bS(function(){!(et&6)&&Rr()}),n=null;else{switch(H0(i)){case 1:n=Rf;break;case 4:n=k0;break;case 16:n=wl;break;case 536870912:n=z0;break;default:n=wl}n=dx(n,rx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rx(t,e){if(ul=-1,dl=0,et&6)throw Error(ae(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var i=bl(t,t===jt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=et;et|=2;var s=ax();(jt!==t||Zt!==e)&&(Pi=null,Ws=Tt()+500,Hr(t,e));do try{KS();break}catch(o){sx(t,o)}while(!0);Gf(),zl.current=s,et=r,Pt!==null?e=0:(jt=null,Zt=0,e=Ut)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=qa,Hr(t,0),sr(t,i),Mn(t,Tt()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!YS(r)&&(e=Vl(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=qa,Hr(t,0),sr(t,i),Mn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Or(t,xn,Pi);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=nh+500-Tt(),10<e)){if(bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(Or.bind(null,t,xn,Pi),e);break}Or(t,xn,Pi);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ri(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qS(i/1960))-i,10<i){t.timeoutHandle=sd(Or.bind(null,t,xn,Pi),i);break}Or(t,xn,Pi);break;case 5:Or(t,xn,Pi);break;default:throw Error(ae(329))}}}return Mn(t,Tt()),t.callbackNode===n?rx.bind(null,t):null}function bd(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=xn,xn=n,e!==null&&Ad(e)),t}function Ad(t){xn===null?xn=t:xn.push.apply(xn,t)}function YS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~th,e&=~uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if(et&6)throw Error(ae(327));Fs();var e=bl(t,0);if(!(e&1))return Mn(t,Tt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=qa,Hr(t,0),sr(t,e),Mn(t,Tt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,xn,Pi),Mn(t,Tt()),null}function ih(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Ws=Tt()+500,ac&&Rr())}}function Kr(t){lr!==null&&lr.tag===0&&!(et&6)&&Fs();var e=et;et|=1;var n=Wn.transition,i=ot;try{if(Wn.transition=null,ot=1,t)return t()}finally{ot=i,Wn.transition=n,et=e,!(et&6)&&Rr()}}function rh(){Tn=Cs.current,ht(Cs)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wS(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:Hs(),ht(Sn),ht(ln),qf();break;case 5:Xf(i);break;case 4:Hs();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:Hf(i.type._context);break;case 22:case 23:rh()}n=n.return}if(jt=t,Pt=t=_r(t.current,null),Zt=Tn=e,Ut=0,qa=null,th=uc=$r=0,xn=Ra=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}kr=null}return t}function sx(t,e){do{var n=Pt;try{if(Gf(),ol.current=kl,Bl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bl=!1}if(Yr=0,Wt=Ft=Mt=null,Aa=!1,Wa=0,eh.current=null,n===null||n.return===null){Ut=1,qa=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Fp(a);if(p!==null){p.flags&=-257,Up(p,a,o,s,e),p.mode&1&&Ip(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){Ip(s,c,e),sh();break e}l=Error(ae(426))}}else if(gt&&o.mode&1){var g=Fp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Up(g,a,o,s,e),kf(Vs(l,o));break e}}s=l=Vs(l,o),Ut!==4&&(Ut=2),Ra===null?Ra=[s]:Ra.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Hg(s,l,e);Rp(s,d);break e;case 1:o=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(xr===null||!xr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Vg(s,o,e);Rp(s,M);break e}}s=s.return}while(s!==null)}lx(n)}catch(b){e=b,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function ax(){var t=zl.current;return zl.current=kl,t===null?kl:t}function sh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),jt===null||!($r&268435455)&&!(uc&268435455)||sr(jt,Zt)}function Vl(t,e){var n=et;et|=2;var i=ax();(jt!==t||Zt!==e)&&(Pi=null,Hr(t,e));do try{$S();break}catch(r){sx(t,r)}while(!0);if(Gf(),et=n,zl.current=i,Pt!==null)throw Error(ae(261));return jt=null,Zt=0,Ut}function $S(){for(;Pt!==null;)ox(Pt)}function KS(){for(;Pt!==null&&!y_();)ox(Pt)}function ox(t){var e=ux(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?lx(t):Pt=e,eh.current=null}function lx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VS(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Pt=null;return}}else if(n=HS(n,e,Tn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Or(t,e,n){var i=ot,r=Wn.transition;try{Wn.transition=null,ot=1,ZS(t,e,n,i)}finally{Wn.transition=r,ot=i}return null}function ZS(t,e,n,i){do Fs();while(lr!==null);if(et&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L_(t,s),t===jt&&(Pt=jt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,dx(wl,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var a=ot;ot=1;var o=et;et|=4,eh.current=null,jS(t,n),nx(n,t),xS(id),Al=!!nd,id=nd=null,t.current=n,XS(n),M_(),et=o,ot=a,Wn.transition=s}else t.current=n;if(To&&(To=!1,lr=t,Hl=r),s=t.pendingLanes,s===0&&(xr=null),b_(n.stateNode),Mn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=Ed,Ed=null,t;return Hl&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===wd?Ca++:(Ca=0,wd=t):Ca=0,Rr(),null}function Fs(){if(lr!==null){var t=H0(Hl),e=Wn.transition,n=ot;try{if(Wn.transition=null,ot=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,Hl=0,et&6)throw Error(ae(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ee=c;Ee!==null;){var h=Ee;switch(h.tag){case 0:case 11:case 15:Ta(8,h,s)}var f=h.child;if(f!==null)f.return=h,Ee=f;else for(;Ee!==null;){h=Ee;var u=h.sibling,p=h.return;if(Qg(h),h===c){Ee=null;break}if(u!==null){u.return=p,Ee=u;break}Ee=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){a=Ee;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Ee=S;else e:for(a=v;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:cc(9,o)}}catch(b){bt(o,o.return,b)}if(o===a){Ee=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Ee=M;break e}Ee=o.return}}if(et=r,Rr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(tc,t)}catch{}i=!0}return i}finally{ot=n,Wn.transition=e}}return!1}function $p(t,e,n){e=Vs(n,e),e=Hg(t,e,1),t=gr(t,e,1),e=fn(),t!==null&&(to(t,1,e),Mn(t,e))}function bt(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=Vs(n,t),t=Vg(e,t,1),e=gr(e,t,1),t=fn(),e!==null&&(to(e,1,t),Mn(e,t));break}}e=e.return}}function JS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Zt&n)===n&&(Ut===4||Ut===3&&(Zt&130023424)===Zt&&500>Tt()-nh?Hr(t,0):th|=n),Mn(t,e)}function cx(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=fn();t=Hi(t,e),t!==null&&(to(t,e,n),Mn(t,n))}function QS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cx(t,n)}function ey(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),cx(t,n)}var ux;ux=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,GS(t,e,n);vn=!!(t.flags&131072)}else vn=!1,gt&&e.flags&1048576&&pg(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=ks(e,ln.current);Is(e,n),r=$f(null,e,i,t,r,n);var s=Kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wf(e),r.updater=lc,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=md(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Of(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ny(i),t=Jn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=kp(null,e,i,t,n);break e;case 11:e=Op(null,e,i,t,n);break e;case 14:e=Bp(null,e,i,Jn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),kp(t,e,i,r,n);case 3:e:{if(qg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sg(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(ae(423)),e),e=zp(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(ae(424)),e),e=zp(t,e,i,n,r);break e}else for(Cn=mr(e.stateNode.containerInfo.firstChild),Pn=e,gt=!0,ei=null,n=vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=Vi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return yg(e),t===null&&cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,rd(i,r)?a=null:s!==null&&rd(i,s)&&(e.flags|=32),Xg(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&cd(e),null;case 13:return Yg(t,e,n);case 4:return jf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Op(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(Il,i._currentValue),i._currentValue=a,s!==null)if(ai(s.value,a)){if(s.children===r.children&&!Sn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ud(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ud(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=jn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Bp(t,e,i,r,n);case 15:return Wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),cl(t,e),e.tag=1,yn(i)?(t=!0,Ll(e)):t=!1,Is(e,n),Gg(e,i,r),fd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return $g(t,e,n);case 22:return jg(t,e,n)}throw Error(ae(156,e.tag))};function dx(t,e){return B0(t,e)}function ty(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new ty(t,e,n,i)}function ah(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ny(t){if(typeof t=="function")return ah(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bf)return 11;if(t===Af)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")ah(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return Vr(n.children,r,s,e);case wf:a=8,r|=8;break;case Uu:return t=Vn(12,n,e,r|2),t.elementType=Uu,t.lanes=s,t;case Ou:return t=Vn(13,n,e,r),t.elementType=Ou,t.lanes=s,t;case Bu:return t=Vn(19,n,e,r),t.elementType=Bu,t.lanes=s,t;case y0:return dc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:a=10;break e;case S0:a=9;break e;case bf:a=11;break e;case Af:a=14;break e;case er:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Vn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function dc(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=y0,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function oh(t,e,n,i,r,s,a,o,l){return t=new iy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wf(s),t}function ry(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fx(t){if(!t)return Mr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(yn(n))return fg(t,n,e)}return e}function hx(t,e,n,i,r,s,a,o,l){return t=oh(n,i,!0,t,r,s,a,o,l),t.context=fx(null),n=t.current,i=fn(),r=vr(n),s=Ui(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,to(t,r,i),Mn(t,i),t}function fc(t,e,n,i){var r=e.current,s=fn(),a=vr(r);return n=fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,a),t!==null&&(si(t,r,a,s),al(t,r,a)),a}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lh(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function sy(){return null}var px=typeof reportError=="function"?reportError:function(t){console.error(t)};function ch(t){this._internalRoot=t}hc.prototype.render=ch.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));fc(t,e,null,null)};hc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){fc(null,t,null,null)}),e[Gi]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=j0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&q0(t)}};function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function ay(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Wl(a);s.call(c)}}var a=hx(e,i,t,0,null,!1,!1,"",Zp);return t._reactRootContainer=a,t[Gi]=a.current,ka(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Wl(l);o.call(c)}}var l=oh(t,0,!1,null,null,!1,!1,"",Zp);return t._reactRootContainer=l,t[Gi]=l.current,ka(t.nodeType===8?t.parentNode:t),Kr(function(){fc(e,l,n,i)}),l}function mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Wl(a);o.call(l)}}fc(e,a,t,r)}else a=ay(n,e,t,r,i);return Wl(a)}V0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Cf(e,n|1),Mn(e,Tt()),!(et&6)&&(Ws=Tt()+500,Rr()))}break;case 13:Kr(function(){var i=Hi(t,1);if(i!==null){var r=fn();si(i,t,1,r)}}),lh(t,1)}};Pf=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=fn();si(e,t,134217728,n)}lh(t,134217728)}};W0=function(t){if(t.tag===13){var e=vr(t),n=Hi(t,e);if(n!==null){var i=fn();si(n,t,e,i)}lh(t,e)}};j0=function(){return ot};X0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Yu=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=sc(i);if(!r)throw Error(ae(90));E0(i),Gu(i,r)}}}break;case"textarea":b0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};N0=ih;D0=Kr;var oy={usingClientEntryPoint:!1,Events:[io,Es,sc,P0,L0,ih]},la={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ly={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=U0(t),t===null?null:t.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||sy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{tc=Ro.inject(ly),_i=Ro}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oy;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uh(e))throw Error(ae(200));return ry(t,e,null,n)};Nn.createRoot=function(t,e){if(!uh(t))throw Error(ae(299));var n=!1,i="",r=px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=oh(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,ka(t.nodeType===8?t.parentNode:t),new ch(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=U0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Kr(t)};Nn.hydrate=function(t,e,n){if(!pc(e))throw Error(ae(200));return mc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!uh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=px;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hx(e,null,t,1,n??null,r,!1,s,a),t[Gi]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hc(e)};Nn.render=function(t,e,n){if(!pc(e))throw Error(ae(200));return mc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!pc(t))throw Error(ae(40));return t._reactRootContainer?(Kr(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Nn.unstable_batchedUpdates=ih;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return mc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mx)}catch(t){console.error(t)}}mx(),m0.exports=Nn;var cy=m0.exports,gx,Jp=cy;gx=Jp.createRoot,Jp.hydrateRoot;const xx={id:"",name:"Ejercicio 1",workDurationSeconds:45,roundCount:3,restBetweenRoundsSeconds:20,restAfterExerciseSeconds:60};function Qp(){return{format:"wkt",version:1,category:"Fitness",sport:"Fitness",routines:[{name:"",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{...xx,id:"ex-"+Date.now()}]}]}}const uy=[{id:"tabata-clasico",badgeIcon:"⚡",workout:{format:"wkt",version:1,category:"Tabata",sport:"HIIT",routines:[{name:"Tabata Clásico (20/10)",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-tab-1",name:"Flexiones",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:15,mediaRef:"preset:pushups"},{id:"ex-tab-2",name:"Sentadillas",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:0,mediaRef:"preset:squats"}]}]}},{id:"rondas-boxeo",badgeIcon:"🥊",workout:{format:"wkt",version:1,category:"Combate",sport:"Boxeo",routines:[{name:"Rondas de Boxeo",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-box-1",name:"Sombra de Boxeo",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:60,mediaRef:"preset:shadow_boxing"},{id:"ex-box-2",name:"Saco Pesado",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:0,mediaRef:"preset:heavy_bag"}]}]}},{id:"hiit-full-body",badgeIcon:"🔥",workout:{format:"wkt",version:1,category:"Cardio / HIIT",sport:"Fitness",routines:[{name:"HIIT Full Body",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-hiit-1",name:"Burpees",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:burpees"},{id:"ex-hiit-2",name:"Zancadas",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:lunges"},{id:"ex-hiit-3",name:"Plancha Isométrica",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:0,mediaRef:"preset:plank"}]}]}}],vx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";function dy(t){return t===null||t===""?"":py(t,6,n=>vx.charAt(n))}function fy(t){return t===null||t===""?null:(t=t.replace(/ /g,"+"),my(t.length,32,e=>hy(vx,t.charAt(e))))}function hy(t,e){return t.indexOf(e)}function py(t,e,n){let i,r;const s={},a={};let o="",l="",c="",h=2,f=3,u=2,p="",m=0,_=0;for(let g=0;g<t.length;g+=1)if(o=t.charAt(g),Object.prototype.hasOwnProperty.call(s,o)||(s[o]=f++,a[o]=!0),l=c+o,Object.prototype.hasOwnProperty.call(s,l))c=l;else{if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(i=0;i<u;i++)m=m<<1,_===e-1?(_=0,p+=n(m),m=0):_++;for(r=c.charCodeAt(0),i=0;i<8;i++)m=m<<1|r&1,_===e-1?(_=0,p+=n(m),m=0):_++,r=r>>1}else{for(r=1,i=0;i<u;i++)m=m<<1|r,_===e-1?(_=0,p+=n(m),m=0):_++,r=0;for(r=c.charCodeAt(0),i=0;i<16;i++)m=m<<1|r&1,_===e-1?(_=0,p+=n(m),m=0):_++,r=r>>1}h--,h===0&&(h=Math.pow(2,u),u++),delete a[c]}else for(r=s[c],i=0;i<u;i++)m=m<<1|r&1,_===e-1?(_=0,p+=n(m),m=0):_++,r=r>>1;h--,h===0&&(h=Math.pow(2,u),u++),s[l]=f++,c=String(o)}if(c!==""){if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(i=0;i<u;i++)m=m<<1,_===e-1?(_=0,p+=n(m),m=0):_++;for(r=c.charCodeAt(0),i=0;i<8;i++)m=m<<1|r&1,_===e-1?(_=0,p+=n(m),m=0):_++,r=r>>1}else{for(r=1,i=0;i<u;i++)m=m<<1|r,_===e-1?(_=0,p+=n(m),m=0):_++,r=0;for(r=c.charCodeAt(0),i=0;i<16;i++)m=m<<1|r&1,_===e-1?(_=0,p+=n(m),m=0):_++,r=r>>1}h--,h===0&&(h=Math.pow(2,u),u++),delete a[c]}else for(r=s[c],i=0;i<u;i++)m=m<<1|r&1,_===e-1?(_=0,p+=n(m),m=0):_++,r=r>>1;h--,h===0&&(h=Math.pow(2,u),u++)}for(r=2,i=0;i<u;i++)m=m<<1|r&1,_===e-1?(_=0,p+=n(m),m=0):_++,r=r>>1;for(;;)if(m=m<<1,_===e-1){p+=n(m);break}else _++;return p}function my(t,e,n){const i=[];let r=4,s=4,a=3,o="";const l=[];let c,h=0,f=0,u=Math.pow(2,2),p=1,m="";const _={val:n(0),position:e,index:1};for(let g=0;g<3;g+=1)i[g]=String(g);for(;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;switch(h){case 0:for(h=0,u=Math.pow(2,8),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;m=String.fromCharCode(h);break;case 1:for(h=0,u=Math.pow(2,16),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;m=String.fromCharCode(h);break;case 2:return""}for(i[3]=m,c=m,l.push(m);;){if(_.index>t)return"";for(h=0,u=Math.pow(2,a),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;let g;switch(g=h){case 0:for(h=0,u=Math.pow(2,8),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(h),g=s-1,r--;break;case 1:for(h=0,u=Math.pow(2,16),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(h),g=s-1,r--;break;case 2:return l.join("")}if(r===0&&(r=Math.pow(2,a),a++),i[g])o=i[g];else if(g===s)o=c+c.charAt(0);else return null;l.push(o),i[s++]=c+o.charAt(0),r--,c=o,r===0&&(r=Math.pow(2,a),a++)}}const gy=[["jumping_jacks","Jumping Jacks","Cardio",!0],["burpees","Burpees","HIIT",!0],["pushups","Flexiones","Fuerza",!0],["squats","Sentadillas","Fuerza",!0],["lunges","Zancadas","Fuerza",!0],["plank","Plancha","Core",!0],["mountain_climbers","Escaladores","HIIT",!0],["high_knees","Rodillas Arriba","Cardio",!0],["crunches","Abdominales","Core",!0],["bicycle_crunches","Bicicleta Abd.","Core",!0],["russian_twists","Giros Rusos","Core",!0],["leg_raises","Elev. Piernas","Core",!0],["jumping_rope","Saltar Soga","Cardio",!0],["box_jumps","Saltos Cajón","HIIT",!0],["kettlebell_swing","Kettlebell Swing","Fuerza",!0],["dumbbell_curl","Curl Bíceps","Fuerza",!0],["shoulder_press","Press Hombros","Fuerza",!0],["tricep_dips","Fondos Tríceps","Fuerza",!0],["pullups","Dominadas","Fuerza",!0],["deadlift","Peso Muerto","Fuerza",!0],["bench_press","Press Banca","Fuerza",!0],["shadow_boxing","Sombra Boxeo","Boxeo",!0],["heavy_bag","Saco Boxeo","Boxeo",!0],["stretch_cool","Estiramiento","Movilidad",!0],["calf_raises","Elev. Talones","Fuerza",!1],["glute_bridge","Puente Glúteos","Fuerza",!1],["side_plank","Plancha Lateral","Core",!1],["superman","Superman","Core",!1],["wall_sit","Sentadilla Pared","Fuerza",!1],["sumo_squat","Sentadilla Sumo","Fuerza",!1],["bent_over_row","Remo Barra","Fuerza",!1],["lateral_raises","Elev. Laterales","Fuerza",!1],["tricep_kickback","Patada Tríceps","Fuerza",!1],["arnold_press","Press Arnold","Fuerza",!1],["front_kick","Patada Frontal","Boxeo",!1],["uppercut_hook","Uppercut y Gancho","Boxeo",!1],["skater_jumps","Saltos Patinador","Cardio",!1],["butt_kicks","Talones al Glúteo","Cardio",!1],["flutter_kicks","Patadas Tijera","Core",!1],["cat_cow","Gato - Vaca","Movilidad",!1]],va=gy.map(([t,e,n,i])=>({key:t,label:e,category:n,mediaRef:`preset:${t}`,url:`./exercises/${t}.gif`,bundled:i}));function dh(t){if(!t)return;const e=t.startsWith("preset:")?t.slice(7):t;return va.find(n=>n.key.toLowerCase()===e.toLowerCase())}function _x(t){const e={...t},n=e.mediaRef||e.mediaId;if(delete e.mediaId,typeof e.mediaData=="string"&&e.mediaData.startsWith("data:image/")?e.mediaData=e.mediaData:delete e.mediaData,n&&typeof n=="string"){const i=dh(n);i?e.mediaRef=i.mediaRef:n.startsWith("preset:")?e.mediaRef=n:delete e.mediaRef}else delete e.mediaRef;return e}function Sx(t){if(!t)return null;if(typeof t.mediaData=="string"&&t.mediaData.startsWith("data:image/"))return t.mediaData;const e=dh(t.mediaRef||t.mediaId);return e?e.url:null}function xy(t){if(!t||!t.includes("base64,"))return null;const e=t.slice(t.indexOf("base64,")+7);if(!e)return null;const n=e.endsWith("==")?2:e.endsWith("=")?1:0,i=Math.max(0,Math.floor(e.length*3/4)-n);return Math.max(1,Math.round(i/1024))}const vy="mytimerapp://import?data=";function yx(t){if(!t||typeof t!="object")return!1;const e=t;if(e.format!=="wkt"||e.version!==1||!Array.isArray(e.routines)||e.routines.length===0)return!1;for(const n of e.routines)if(typeof n!="object"||!n||typeof n.name!="string"||!Array.isArray(n.exercises))return!1;return!0}function Mx(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>_x(n))}))}}function _y(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>{const i=_x(n),{mediaData:r,mediaId:s,...a}=i;return(!a.mediaRef||!a.mediaRef.startsWith("preset:"))&&delete a.mediaRef,a})}))}}function Sy(t){const e=_y(t),n=JSON.stringify(e);return dy(n)}function yy(t){try{const e=fy(t);if(!e)return null;const n=JSON.parse(e);return yx(n)?Mx(n):null}catch(e){return console.error("Failed to decode workout from URL:",e),null}}function Ex(t){const e=Sy(t);return`${vy}${e}`}function gc(t){const e=Math.max(1,t.roundCount||1),n=Math.max(0,t.workDurationSeconds||0)*e,i=Math.max(0,t.restBetweenRoundsSeconds||0)*(e-1),r=Math.max(0,t.restAfterExerciseSeconds||0),s=i+r;return{totalSeconds:n+s,workSeconds:n,restSeconds:s}}function Ya(t){const e=Math.max(1,t.routineCycles||1),n=Math.max(0,t.prepareDurationSeconds||0),i=Math.max(0,t.restBetweenRoutinesSeconds||0)*Math.max(0,e-1);let r=0,s=0,a=0;for(const c of t.exercises){const h=gc(c);r+=h.workSeconds,s+=h.restSeconds,a+=Math.max(1,c.roundCount||1)}const o=r*e,l=s*e+n+i;return{totalSeconds:o+l,tutSeconds:o,restSeconds:l,totalRounds:a*e,exerciseCount:t.exercises.length}}function St(t){const e=Math.max(0,Math.floor(t)),n=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60,s=i.toString().padStart(2,"0"),a=r.toString().padStart(2,"0");return n>0?`${n.toString().padStart(2,"0")}:${s}:${a}`:`${s}:${a}`}const em=6,Co=1080;function hi(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function Jc(t,e,n){if(t.measureText(e).width<=n)return e;let i=e;for(;i.length>0&&t.measureText(`${i}...`).width>n;)i=i.slice(0,-1);return`${i}...`}function Po(t,e,n,i,r,s,a){t.font="bold 22px system-ui, -apple-system, sans-serif";const l=t.measureText(e).width+32;return hi(t,n,i,l,44,22),t.fillStyle=r,t.fill(),t.lineWidth=2,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+16,i+30),n+l}function Lo(t,e,n,i,r,s,a){t.font="bold 19px ui-monospace, SFMono-Regular, monospace";const l=t.measureText(e).width+22;return hi(t,n,i,l,36,8),t.fillStyle=r,t.fill(),t.lineWidth=1.5,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+11,i+25),n+l}async function wx(t,e){const n=t.routines[0];if(!n)return null;const i=n.exercises.slice(0,em),r=Math.max(0,n.exercises.length-em),s=!!(n.author&&n.author.trim());let a=610;s&&(a+=42),a+=i.length*136,r>0&&(a+=84),a+=86;const o=document.createElement("canvas");o.width=Co,o.height=Math.round(a);const l=o.getContext("2d");if(!l)return null;l.fillStyle="#020617",l.fillRect(0,0,o.width,o.height);const c=32,h=c,f=c,u=Co-c*2,p=a-c*2,m=l.createLinearGradient(0,f,0,f+p);m.addColorStop(0,"#0f172a"),m.addColorStop(1,"#020617"),hi(l,h,f,u,p,48),l.fillStyle=m,l.fill(),l.lineWidth=3,l.strokeStyle="rgba(16, 185, 129, 0.35)",l.stroke();const _=c+44,g=Co-c-44;let d=c+48,v=_;v=Po(l,e.previewBadge||"✨ Rutina Compartida",v,d,"rgba(16, 185, 129, 0.15)","rgba(16, 185, 129, 0.35)","#34d399")+14,t.category&&(v=Po(l,`🏷️ ${t.category}`,v,d,"#1e293b","#334155","#cbd5e1")+14),t.sport&&(v=Po(l,`🏅 ${t.sport}`,v,d,"#1e293b","#334155","#67e8f9")+14),n.routineCycles>1&&Po(l,`🔄 ${n.routineCycles}x ${e.cycles||e.cyclesLabel||"Ciclos"}`,v,d,"rgba(6, 182, 212, 0.2)","rgba(6, 182, 212, 0.35)","#67e8f9"),d+=86,l.font="900 54px system-ui, -apple-system, sans-serif",l.fillStyle="#ffffff",l.textAlign="left";const S=Jc(l,n.name||"Rutina",g-_);if(l.fillText(S,_,d),s){d+=42,l.font="600 26px system-ui, -apple-system, sans-serif",l.fillStyle="#94a3b8";const I=`👤 ${e.sharedBy||"Compartida por"}: ${n.author}`;l.fillText(Jc(l,I,g-_),_,d)}d+=40;const M=Ya(n),b=18,E=(g-_-b*3)/4,x=130;[{label:(e.totalTime||"TIEMPO TOTAL").toUpperCase(),value:St(M.totalSeconds),bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#ffffff"},{label:(e.tut||"TRABAJO (TUT)").toUpperCase(),value:St(M.tutSeconds),bg:"rgba(15, 77, 42, 0.45)",border:"rgba(16, 185, 129, 0.4)",labelColor:"#6ee7b7",valColor:"#34d399"},{label:(e.rest||"DESCANSO").toUpperCase(),value:St(M.restSeconds),bg:"rgba(122, 13, 30, 0.45)",border:"rgba(244, 63, 94, 0.4)",labelColor:"#fda4af",valColor:"#fb7185"},{label:(e.totalRounds||"RONDAS TOTALES").toUpperCase(),value:`${M.totalRounds} (${M.exerciseCount})`,bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#22d3ee"}].forEach((I,G)=>{const P=_+(E+b)*G;hi(l,P,d,E,x,28),l.fillStyle=I.bg,l.fill(),l.lineWidth=2.5,l.strokeStyle=I.border,l.stroke(),l.font="bold 18px system-ui, -apple-system, sans-serif",l.fillStyle=I.labelColor,l.textAlign="center",l.fillText(I.label,P+E/2,d+44),l.font="900 36px ui-monospace, SFMono-Regular, monospace",l.fillStyle=I.valColor,l.fillText(I.value,P+E/2,d+96)}),d+=x+36;const C=M.totalSeconds>0?Math.round(M.tutSeconds/M.totalSeconds*100):50,R=Math.max(0,100-C);l.font="bold 23px system-ui, -apple-system, sans-serif",l.fillStyle="#94a3b8",l.textAlign="left",l.fillText(e.workVsRestRatio||"Distribución Trabajo vs Descanso",_,d),l.fillStyle="#34d399",l.textAlign="right",l.fillText(`${C}% / ${R}%`,g,d),d+=16;const D=18;if(hi(l,_,d,g-_,D,9),l.fillStyle="#f43f5e",l.fill(),C>0){const I=Math.max(18,(g-_)*(C/100));hi(l,_,d,I,D,9),l.fillStyle="#10b981",l.fill()}if(d+=D+44,l.font="800 25px system-ui, -apple-system, sans-serif",l.fillStyle="#cbd5e1",l.textAlign="left",l.fillText(`${(e.exercisesList||"LISTA DE EJERCICIOS").toUpperCase()} (${n.exercises.length})`,_,d),n.prepareDurationSeconds>0){const I=`⏱️ ${e.prepareBadge||"Preparación"}: ${St(n.prepareDurationSeconds)}`;l.font="bold 22px ui-monospace, SFMono-Regular, monospace";const G=l.measureText(I).width+28,P=g-G;hi(l,P,d-30,G,40,12),l.fillStyle="rgba(94, 58, 0, 0.55)",l.fill(),l.lineWidth=2,l.strokeStyle="rgba(245, 158, 11, 0.45)",l.stroke(),l.fillStyle="#fcd34d",l.textAlign="left",l.fillText(I,P+14,d-3)}if(d+=26,i.forEach((I,G)=>{hi(l,_,d,g-_,120,26),l.fillStyle="rgba(2, 6, 23, 0.82)",l.fill(),l.lineWidth=2,l.strokeStyle="#1e293b",l.stroke();const O=_+22,K=d+28;hi(l,O,K,52,52,14),l.fillStyle="rgba(16, 185, 129, 0.15)",l.fill(),l.lineWidth=2,l.strokeStyle="rgba(16, 185, 129, 0.35)",l.stroke(),l.font="900 24px system-ui, -apple-system, sans-serif",l.fillStyle="#34d399",l.textAlign="center",l.fillText(String(G+1),O+26,K+35),l.font="bold 28px system-ui, -apple-system, sans-serif",l.fillStyle="#f1f5f9",l.textAlign="left";const z=g-_-290;l.fillText(Jc(l,I.name||`Ejercicio ${G+1}`,z),_+94,d+48);let H=_+94;const B=d+64;H=Lo(l,`🔄 ${I.roundCount} ${e.rounds||"Rondas"}`,H,B,"#1e293b","#334155","#67e8f9")+10,H=Lo(l,`⚡ ${St(I.workDurationSeconds)}`,H,B,"rgba(15, 77, 42, 0.65)","rgba(16, 185, 129, 0.45)","#6ee7b7")+10,I.restBetweenRoundsSeconds>0&&(H=Lo(l,`💨 ${St(I.restBetweenRoundsSeconds)}`,H,B,"rgba(122, 13, 30, 0.65)","rgba(244, 63, 94, 0.45)","#fda4af")+10),I.restAfterExerciseSeconds>0&&Lo(l,`🛑 ${St(I.restAfterExerciseSeconds)}`,H,B,"rgba(94, 58, 0, 0.65)","rgba(245, 158, 11, 0.45)","#fcd34d");const j=gc(I);l.font="bold 16px system-ui, -apple-system, sans-serif",l.fillStyle="#64748b",l.textAlign="right",l.fillText((e.subtotal||"SUBTOTAL").replace(":","").toUpperCase(),g-24,d+48),l.font="bold 26px ui-monospace, SFMono-Regular, monospace",l.fillStyle="#e2e8f0",l.fillText(St(j.totalSeconds),g-24,d+84),d+=136}),r>0){hi(l,_,d,g-_,68,20),l.fillStyle="#1e293b",l.fill(),l.lineWidth=2,l.strokeStyle="#334155",l.stroke(),l.font="bold 24px system-ui, -apple-system, sans-serif",l.fillStyle="#34d399",l.textAlign="center";const I=r===1?"+1 ejercicio más en la rutina completa...":`+${r} ejercicios más en la rutina completa...`;l.fillText(I,(_+g)/2,d+42),d+=84}return l.font="21px system-ui, -apple-system, sans-serif",l.fillStyle="#64748b",l.textAlign="center",l.fillText("Timer Routine Studio • Abre el archivo .wkt adjunto en la App o en alvarpereira-dot.github.io",Co/2,d+26),new Promise(I=>{o.toBlob(G=>I(G),"image/png",1)})}const Qc=[{tag:"SYSTEM",displayName:"Idioma del Sistema",flagEmoji:"🌐",localeName:"Default System Language"},{tag:"es-ES",displayName:"Español (España)",flagEmoji:"🇪🇸",localeName:"Castellano"},{tag:"es-MX",displayName:"Español (Latinoamérica)",flagEmoji:"🇲🇽",localeName:"Español Latino"},{tag:"en-US",displayName:"English (United States)",flagEmoji:"🇺🇸",localeName:"English"},{tag:"pt-BR",displayName:"Português (Brasil)",flagEmoji:"🇧🇷",localeName:"Português"},{tag:"fr-FR",displayName:"Français (France)",flagEmoji:"🇫🇷",localeName:"Français"},{tag:"de-DE",displayName:"Deutsch (Deutschland)",flagEmoji:"🇩🇪",localeName:"Deutsch"},{tag:"it-IT",displayName:"Italiano (Italia)",flagEmoji:"🇮🇹",localeName:"Italiano"}],Er={es:{appTitle:"Timer Routine Studio",subtitle:"Archivos .wkt",currentFile:"Archivo actual",openLocal:"📂 Abrir (.wkt)",save:"💾 Guardar",saveAs:"📑 Guardar como...",shareWhatsApp:"Compartir WhatsApp",openInApp:"📲 Abrir en App",validationAlertTitle:"⚠️ La rutina contiene observaciones que debes corregir:",routineName:"Nombre de la Rutina",author:"Autor / Entrenador",category:"Categoría",sport:"Deporte",cycles:"Ciclos Globales",prepare:"Preparación (seg / max 24h)",prepareShort:"Preparación (seg)",totalTime:"Tiempo Total",tut:"Trabajo (TUT)",rest:"Descanso",totalRounds:"Rondas Totales",exercisesRoundsLabel:"Ejercicios / Rondas",exercisesList:"Lista de Ejercicios",exercisesHeading:"Ejercicios",addExercise:"+ Agregar Ejercicio",addAnotherExercise:"+ Agregar otro ejercicio",rounds:"Rondas",work:"Trabajo (seg)",restBetween:"Pausa Rondas (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal ejercicio:",estimatedDuration:"Duración estimada del ejercicio:",savedIn:"Guardado en",savedAs:"Guardado como",systemLanguage:"Idioma del Sistema",systemLanguageDesc:"Predeterminado del sistema",languageLabel:"Idioma",shareMessageIntro:"🔥 ¡Mira mi rutina en el temporizador!",clipboardNotice:"📋 Archivo .wkt descargado. Redirigiendo a WhatsApp...",openingApp:"🚀 Enviando rutina a la App móvil...",errNameEmpty:"El nombre del ejercicio no puede estar vacío.",errNameDuplicate:"El nombre está repetido en la rutina.",errWorkMin:"El tiempo de trabajo debe ser mayor a 0 seg.",errMaxTime:"El tiempo no puede superar 1440 min (24 horas).",errRoutineEmpty:"La rutina debe tener al menos un ejercicio.",errRoutineNameEmpty:"El nombre de la rutina no puede estar vacío.",previewBadge:"✨ Rutina Compartida",previewModeBtn:"👁️ Vista Previa",editRoutineBtn:"✏️ Editar / Personalizar en Web",downloadWktBtn:"📥 Descargar (.wkt)",sharedBy:"Compartida por",workVsRestRatio:"Distribución Trabajo vs Descanso",prepareBadge:"Preparación inicial",noRest:"Sin pausa",downloadApkBtn:"Descargar App Android (.apk)",welcomeDesc:"Diseña, personaliza y comparte tus rutinas de entrenamiento cronometradas (.wkt)",newRoutineBtn:"+ Nueva Rutina",openWktBtn:"Abrir archivo .wkt",examplesTitle:"⚡ O explora una rutina de ejemplo:",exercisesWord:"ejercicios",homeBtn:"🏠 Inicio",sharedBanner:"✨ Rutina cargada desde enlace compartido.",invalidWktErr:"El archivo seleccionado no tiene un formato .wkt válido.",readWktErr:"No se pudo leer el archivo .wkt seleccionado.",openFileBtn:"Abrir Archivo",saveLocalBtn:"Guardar Local",exerciseDefaultName:"Ejercicio",minOneExerciseAlert:"La rutina debe tener al menos un ejercicio.",changeGifTitle:"Cambiar GIF o imagen del ejercicio",addGifTitle:"Agregar GIF o imagen",removeGifTitle:"Quitar GIF / imagen",moveUpTitle:"Mover arriba",moveDownTitle:"Mover abajo",duplicateTitle:"Duplicar",deleteTitle:"Eliminar",exerciseNamePlaceholder:"Nombre del ejercicio",mediaModalTitle:"Animación o imagen del ejercicio",mediaModalDesc:"Elige del catálogo, sube un archivo o crea un GIF 3D a medida",tabCatalog:"Catálogo",tabUploadShort:"Subir",tabCreator3d:"🎨 Crear GIF 3D (cualquier ejercicio)",uploadOwnGifBtn:"📤 Subir GIF o imagen propia (se comprime auto.)",optimizingGifBtn:"⏳ Optimizando GIF / imagen (220×220)...",integratedCatalog:"Catálogo integrado",clearCurrent:"Quitar actual",searchExercisePlaceholder:"Buscar ejercicio (ej. burpees, boxeo, plancha)...",noPresetFound:"No hay ningún preset llamado",inPresetsWord:"en los",presetsWord:"predefinidos.",createIn3dBtn:"Crear en el Creador 3D",describeExerciseLabel:"✨ Describe cualquier ejercicio",describePlaceholder:"Ej. Bicho muerto alternado, puente a una pierna...",generatePoseBtn:"Generar pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Postura base",propLabel:"Equipo / Accesorio",cameraLabel:"Cámara",speedLabel:"Velocidad",editingPoseLabel:"Editando Pose",startWord:"(Inicio)",endWord:"(Fin)",copyAToB:"Copiar A → B",torsoHeightTab:"Torso y Altura",armsTab:"Brazos",legsTab:"Piernas",symmetricArmsLabel:"Mover ambos brazos iguales (simétrico)",symmetricLegsLabel:"Mover ambas piernas iguales (simétrico)",createApplyGifBtn:"🎨 Crear y aplicar GIF al ejercicio",creatingGifBtn:"⏳ Generando GIF...",downloadGifBtn:"💾 Descargar .gif"},en:{appTitle:"Timer Routine Studio",subtitle:".wkt files",currentFile:"Current file",openLocal:"📂 Open (.wkt)",save:"💾 Save",saveAs:"📑 Save as...",shareWhatsApp:"Share via WhatsApp",openInApp:"📲 Open in App",validationAlertTitle:"⚠️ Routine contains issues that must be fixed:",routineName:"Routine Name",author:"Author / Coach",category:"Category",sport:"Sport",cycles:"Global Cycles",prepare:"Preparation (sec / max 24h)",prepareShort:"Preparation (sec)",totalTime:"Total Time",tut:"Work (TUT)",rest:"Rest",totalRounds:"Total Rounds",exercisesRoundsLabel:"Exercises / Rounds",exercisesList:"Exercises List",exercisesHeading:"Exercises",addExercise:"+ Add Exercise",addAnotherExercise:"+ Add another exercise",rounds:"Rounds",work:"Work (sec)",restBetween:"Round Rest (sec)",restAfter:"Final Rest (sec)",subtotal:"Exercise subtotal:",estimatedDuration:"Estimated exercise duration:",savedIn:"Saved to",savedAs:"Saved as",systemLanguage:"System Language",systemLanguageDesc:"Default system language",languageLabel:"Language",shareMessageIntro:"🔥 Check out my workout routine on the timer!",clipboardNotice:"📋 .wkt file downloaded. Redirecting to WhatsApp...",openingApp:"🚀 Sending routine to mobile app...",errNameEmpty:"Exercise name cannot be empty.",errNameDuplicate:"Exercise name is duplicated in the routine.",errWorkMin:"Work duration must be greater than 0 sec.",errMaxTime:"Time cannot exceed 1440 min (24 hours).",errRoutineEmpty:"Routine must contain at least one exercise.",errRoutineNameEmpty:"Routine name cannot be empty.",previewBadge:"✨ Shared Routine",previewModeBtn:"👁️ Preview",editRoutineBtn:"✏️ Edit / Customize on Web",downloadWktBtn:"📥 Download (.wkt)",sharedBy:"Shared by",workVsRestRatio:"Work vs Rest Distribution",prepareBadge:"Initial preparation",noRest:"No rest",downloadApkBtn:"Download Android App (.apk)",welcomeDesc:"Design, customize, and share your timed workout routines (.wkt)",newRoutineBtn:"+ New Routine",openWktBtn:"Open .wkt file",examplesTitle:"⚡ Or explore a sample routine:",exercisesWord:"exercises",homeBtn:"🏠 Home",sharedBanner:"✨ Routine loaded from shared link.",invalidWktErr:"The selected file is not a valid .wkt format.",readWktErr:"Could not read the selected .wkt file.",openFileBtn:"Open File",saveLocalBtn:"Save Local",exerciseDefaultName:"Exercise",minOneExerciseAlert:"Routine must contain at least one exercise.",changeGifTitle:"Change exercise GIF or image",addGifTitle:"Add GIF or image",removeGifTitle:"Remove GIF / image",moveUpTitle:"Move up",moveDownTitle:"Move down",duplicateTitle:"Duplicate",deleteTitle:"Delete",exerciseNamePlaceholder:"Exercise name",mediaModalTitle:"Exercise animation or image",mediaModalDesc:"Pick from catalog, upload a file, or create a custom 3D GIF",tabCatalog:"Catalog",tabUploadShort:"Upload",tabCreator3d:"🎨 Create 3D GIF (any exercise)",uploadOwnGifBtn:"📤 Upload own GIF or image (auto-compressed)",optimizingGifBtn:"⏳ Optimizing GIF / image (220×220)...",integratedCatalog:"Built-in catalog",clearCurrent:"Remove current",searchExercisePlaceholder:"Search exercise (e.g. burpees, boxing, plank)...",noPresetFound:"No preset found for",inPresetsWord:"among the",presetsWord:"presets.",createIn3dBtn:"Create in 3D Creator",describeExerciseLabel:"✨ Describe any exercise",describePlaceholder:"E.g. Alternating dead bug, single-leg glute bridge...",generatePoseBtn:"Generate pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Base posture",propLabel:"Equipment / Prop",cameraLabel:"Camera",speedLabel:"Speed",editingPoseLabel:"Editing Pose",startWord:"(Start)",endWord:"(End)",copyAToB:"Copy A → B",torsoHeightTab:"Torso & Height",armsTab:"Arms",legsTab:"Legs",symmetricArmsLabel:"Move both arms symmetrically",symmetricLegsLabel:"Move both legs symmetrically",createApplyGifBtn:"🎨 Create & apply GIF to exercise",creatingGifBtn:"⏳ Generating GIF...",downloadGifBtn:"💾 Download .gif"},pt:{appTitle:"Timer Routine Studio",subtitle:"Arquivos .wkt",currentFile:"Arquivo atual",openLocal:"📂 Abrir (.wkt)",save:"💾 Salvar",saveAs:"📑 Salvar como...",shareWhatsApp:"Compartilhar WhatsApp",openInApp:"📲 Abrir no App",validationAlertTitle:"⚠️ A rotina contém itens que precisam ser corrigidos:",routineName:"Nome da Rotina",author:"Autor / Treinador",category:"Categoria",sport:"Esporte",cycles:"Ciclos Globais",prepare:"Preparação (seg / máx 24h)",prepareShort:"Preparação (seg)",totalTime:"Tempo Total",tut:"Trabalho (TUT)",rest:"Descanso",totalRounds:"Total de Séries",exercisesRoundsLabel:"Exercícios / Séries",exercisesList:"Lista de Exercícios",exercisesHeading:"Exercícios",addExercise:"+ Adicionar Exercício",addAnotherExercise:"+ Adicionar outro exercício",rounds:"Séries",work:"Trabalho (seg)",restBetween:"Pausa Séries (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal do exercício:",estimatedDuration:"Duração estimada do exercício:",savedIn:"Salvo em",savedAs:"Salvo como",systemLanguage:"Idioma do Sistema",systemLanguageDesc:"Padrão do sistema",languageLabel:"Idioma",shareMessageIntro:"🔥 Veja meu treino no cronômetro!",clipboardNotice:"📋 Arquivo .wkt baixado. Redirecionando para o WhatsApp...",openingApp:"🚀 Enviando rotina para o App móvel...",errNameEmpty:"O nome do exercício não pode ficar vazio.",errNameDuplicate:"O nome do exercício está duplicado na rotina.",errWorkMin:"O tempo de trabalho deve ser maior que 0 seg.",errMaxTime:"O tempo não pode ultrapassar 1440 min (24 horas).",errRoutineEmpty:"A rotina deve conter pelo menos um exercício.",errRoutineNameEmpty:"O nome da rotina não pode ficar vazio.",previewBadge:"✨ Rotina Compartilhada",previewModeBtn:"👁️ Pré-visualizar",editRoutineBtn:"✏️ Editar / Personalizar na Web",downloadWktBtn:"📥 Baixar (.wkt)",sharedBy:"Compartilhada por",workVsRestRatio:"Distribuição Trabalho vs Descanso",prepareBadge:"Preparação inicial",noRest:"Sem pausa",downloadApkBtn:"Baixar App Android (.apk)",welcomeDesc:"Crie, personalize e compartilhe seus treinos cronometrados (.wkt)",newRoutineBtn:"+ Nova Rotina",openWktBtn:"Abrir arquivo .wkt",examplesTitle:"⚡ Ou explore uma rotina de exemplo:",exercisesWord:"exercícios",homeBtn:"🏠 Início",sharedBanner:"✨ Rotina carregada de link compartilhado.",invalidWktErr:"O arquivo selecionado não tem um formato .wkt válido.",readWktErr:"Não foi possível ler o arquivo .wkt selecionado.",openFileBtn:"Abrir Arquivo",saveLocalBtn:"Salvar Local",exerciseDefaultName:"Exercício",minOneExerciseAlert:"A rotina deve conter pelo menos um exercício.",changeGifTitle:"Alterar GIF ou imagem do exercício",addGifTitle:"Adicionar GIF ou imagem",removeGifTitle:"Remover GIF / imagem",moveUpTitle:"Mover para cima",moveDownTitle:"Mover para baixo",duplicateTitle:"Duplicar",deleteTitle:"Excluir",exerciseNamePlaceholder:"Nome do exercício",mediaModalTitle:"Animação ou imagem do exercício",mediaModalDesc:"Escolha do catálogo, envie um arquivo ou crie um GIF 3D",tabCatalog:"Catálogo",tabUploadShort:"Enviar",tabCreator3d:"🎨 Criar GIF 3D (qualquer exercício)",uploadOwnGifBtn:"📤 Enviar GIF ou imagem própria (compactação auto.)",optimizingGifBtn:"⏳ Otimizando GIF / imagem (220×220)...",integratedCatalog:"Catálogo integrado",clearCurrent:"Remover atual",searchExercisePlaceholder:"Buscar exercício (ex. burpees, boxe, prancha)...",noPresetFound:"Nenhum preset encontrado para",inPresetsWord:"nos",presetsWord:"predefinidos.",createIn3dBtn:"Criar no Criador 3D",describeExerciseLabel:"✨ Descreva qualquer exercício",describePlaceholder:"Ex. Dead bug alternado, elevação pélvica unilateral...",generatePoseBtn:"Gerar pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Postura base",propLabel:"Equipamento",cameraLabel:"Câmera",speedLabel:"Velocidade",editingPoseLabel:"Editando Pose",startWord:"(Início)",endWord:"(Fim)",copyAToB:"Copiar A → B",torsoHeightTab:"Tronco e Altura",armsTab:"Braços",legsTab:"Pernas",symmetricArmsLabel:"Mover ambos os braços iguais (simétrico)",symmetricLegsLabel:"Mover ambas as pernas iguais (simétrico)",createApplyGifBtn:"🎨 Criar e aplicar GIF ao exercício",creatingGifBtn:"⏳ Gerando GIF...",downloadGifBtn:"💾 Baixar .gif"},fr:{appTitle:"Timer Routine Studio",subtitle:"Fichiers .wkt",currentFile:"Fichier actuel",openLocal:"📂 Ouvrir (.wkt)",save:"💾 Enregistrer",saveAs:"📑 Enregistrer sous...",shareWhatsApp:"Partager WhatsApp",openInApp:"📲 Ouvrir dans l'App",validationAlertTitle:"⚠️ La routine contient des points à corriger :",routineName:"Nom de la Routine",author:"Auteur / Coach",category:"Catégorie",sport:"Sport",cycles:"Cycles Globaux",prepare:"Préparation (sec / max 24h)",prepareShort:"Préparation (sec)",totalTime:"Temps Total",tut:"Travail (TUT)",rest:"Repos",totalRounds:"Rounds Totaux",exercisesRoundsLabel:"Exercices / Rounds",exercisesList:"Liste des Exercices",exercisesHeading:"Exercices",addExercise:"+ Ajouter un Exercice",addAnotherExercise:"+ Ajouter un autre exercice",rounds:"Rounds",work:"Travail (sec)",restBetween:"Pause Rounds (sec)",restAfter:"Pause Finale (sec)",subtotal:"Sous-total exercice :",estimatedDuration:"Durée estimée de l'exercice :",savedIn:"Enregistré dans",savedAs:"Enregistré sous",systemLanguage:"Langue du système",systemLanguageDesc:"Langue par défaut",languageLabel:"Langue",shareMessageIntro:"🔥 Regarde ma séance sur le minuteur !",clipboardNotice:"📋 Fichier .wkt téléchargé. Redirection vers WhatsApp...",openingApp:"🚀 Envoi de la routine à l'application mobile...",errNameEmpty:"Le nom de l'exercice ne peut pas être vide.",errNameDuplicate:"Le nom de l'exercice est dupliqué dans la routine.",errWorkMin:"Le temps de travail doit être supérieur à 0 sec.",errMaxTime:"Le temps ne peut pas dépasser 1440 min (24 heures).",errRoutineEmpty:"La routine doit contenir au moins un exercice.",errRoutineNameEmpty:"Le nom de la routine ne peut pas être vide.",previewBadge:"✨ Routine Partagée",previewModeBtn:"👁️ Aperçu",editRoutineBtn:"✏️ Modifier / Personnaliser sur le Web",downloadWktBtn:"📥 Télécharger (.wkt)",sharedBy:"Partagée par",workVsRestRatio:"Répartition Travail vs Repos",prepareBadge:"Préparation initiale",noRest:"Sans pause",downloadApkBtn:"Télécharger l'App Android (.apk)",welcomeDesc:"Créez, personnalisez et partagez vos routines chronométrées (.wkt)",newRoutineBtn:"+ Nouvelle Routine",openWktBtn:"Ouvrir fichier .wkt",examplesTitle:"⚡ Ou explorez un exemple de routine :",exercisesWord:"exercices",homeBtn:"🏠 Accueil",sharedBanner:"✨ Routine chargée depuis un lien partagé.",invalidWktErr:"Le fichier sélectionné n'a pas un format .wkt valide.",readWktErr:"Impossible de lire le fichier .wkt sélectionné.",openFileBtn:"Ouvrir Fichier",saveLocalBtn:"Enregistrer",exerciseDefaultName:"Exercice",minOneExerciseAlert:"La routine doit contenir au moins un exercice.",changeGifTitle:"Changer le GIF ou l'image",addGifTitle:"Ajouter un GIF ou une image",removeGifTitle:"Retirer GIF / image",moveUpTitle:"Monter",moveDownTitle:"Descendre",duplicateTitle:"Dupliquer",deleteTitle:"Supprimer",exerciseNamePlaceholder:"Nom de l'exercice",mediaModalTitle:"Animation ou image de l'exercice",mediaModalDesc:"Choisissez du catalogue, importez ou créez un GIF 3D",tabCatalog:"Catalogue",tabUploadShort:"Importer",tabCreator3d:"🎨 Créer GIF 3D (tout exercice)",uploadOwnGifBtn:"📤 Importer votre GIF/image (compressé auto.)",optimizingGifBtn:"⏳ Optimisation GIF / image (220×220)...",integratedCatalog:"Catalogue intégré",clearCurrent:"Retirer actuel",searchExercisePlaceholder:"Rechercher (ex. burpees, boxe, planche)...",noPresetFound:"Aucun préréglage trouvé pour",inPresetsWord:"parmi les",presetsWord:"prédéfinis.",createIn3dBtn:"Créer dans l'Éditeur 3D",describeExerciseLabel:"✨ Décrivez n'importe quel exercice",describePlaceholder:"Ex. Dead bug alterné, pont fessier à une jambe...",generatePoseBtn:"Générer pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Posture de base",propLabel:"Équipement",cameraLabel:"Caméra",speedLabel:"Vitesse",editingPoseLabel:"Édition Pose",startWord:"(Début)",endWord:"(Fin)",copyAToB:"Copier A → B",torsoHeightTab:"Torse & Hauteur",armsTab:"Bras",legsTab:"Jambes",symmetricArmsLabel:"Bouger les deux bras ensemble",symmetricLegsLabel:"Bouger les deux jambes ensemble",createApplyGifBtn:"🎨 Créer et appliquer le GIF",creatingGifBtn:"⏳ Génération du GIF...",downloadGifBtn:"💾 Télécharger .gif"},de:{appTitle:"Timer Routine Studio",subtitle:".wkt-Dateien",currentFile:"Aktuelle Datei",openLocal:"📂 Öffnen (.wkt)",save:"💾 Speichern",saveAs:"📑 Speichern unter...",shareWhatsApp:"Über WhatsApp teilen",openInApp:"📲 In App öffnen",validationAlertTitle:"⚠️ Die Routine enthält Fehler, die behoben werden müssen:",routineName:"Name der Routine",author:"Autor / Trainer",category:"Kategorie",sport:"Sportart",cycles:"Globale Zyklen",prepare:"Vorbereitung (Sek / max 24h)",prepareShort:"Vorbereitung (Sek)",totalTime:"Gesamtzeit",tut:"Arbeit (TUT)",rest:"Pause",totalRounds:"Gesamtrunden",exercisesRoundsLabel:"Übungen / Runden",exercisesList:"Übungsliste",exercisesHeading:"Übungen",addExercise:"+ Übung hinzufügen",addAnotherExercise:"+ Weitere Übung hinzufügen",rounds:"Runden",work:"Arbeit (Sek)",restBetween:"Rundenpause (Sek)",restAfter:"Abschlusspause (Sek)",subtotal:"Zwischensumme Übung:",estimatedDuration:"Geschätzte Übungsdauer:",savedIn:"Gespeichert in",savedAs:"Gespeichert als",systemLanguage:"Systemsprache",systemLanguageDesc:"Standardsprache des Systems",languageLabel:"Sprache",shareMessageIntro:"🔥 Schau dir meine Trainingsroutine auf dem Timer an!",clipboardNotice:"📋 .wkt-Datei heruntergeladen. Weiterleitung zu WhatsApp...",openingApp:"🚀 Routine an mobile App senden...",errNameEmpty:"Übungsname darf nicht leer sein.",errNameDuplicate:"Übungsname ist in der Routine doppelt vorhanden.",errWorkMin:"Die Arbeitszeit muss größer als 0 Sek sein.",errMaxTime:"Die Zeit darf 1440 Min (24 Stunden) nicht überschreiten.",errRoutineEmpty:"Die Routine muss mindestens eine Übung enthalten.",errRoutineNameEmpty:"Der Name der Routine darf nicht leer sein.",previewBadge:"✨ Geteilte Routine",previewModeBtn:"👁️ Vorschau",editRoutineBtn:"✏️ Im Web bearbeiten / anpassen",downloadWktBtn:"📥 Herunterladen (.wkt)",sharedBy:"Geteilt von",workVsRestRatio:"Verteilung Arbeit vs Pause",prepareBadge:"Vorbereitung",noRest:"Keine Pause",downloadApkBtn:"Android-App herunterladen (.apk)",welcomeDesc:"Erstelle, passe an und teile deine Timer-Trainingsroutinen (.wkt)",newRoutineBtn:"+ Neue Routine",openWktBtn:".wkt-Datei öffnen",examplesTitle:"⚡ Oder probiere eine Beispiel-Routine:",exercisesWord:"Übungen",homeBtn:"🏠 Start",sharedBanner:"✨ Routine über geteilten Link geladen.",invalidWktErr:"Die ausgewählte Datei hat kein gültiges .wkt-Format.",readWktErr:"Die ausgewählte .wkt-Datei konnte nicht gelesen werden.",openFileBtn:"Datei öffnen",saveLocalBtn:"Lokal speichern",exerciseDefaultName:"Übung",minOneExerciseAlert:"Die Routine muss mindestens eine Übung enthalten.",changeGifTitle:"GIF oder Bild ändern",addGifTitle:"GIF oder Bild hinzufügen",removeGifTitle:"GIF / Bild entfernen",moveUpTitle:"Nach oben",moveDownTitle:"Nach unten",duplicateTitle:"Duplizieren",deleteTitle:"Löschen",exerciseNamePlaceholder:"Name der Übung",mediaModalTitle:"Übungsanimation oder Bild",mediaModalDesc:"Aus Katalog wählen, Datei hochladen oder 3D-GIF erstellen",tabCatalog:"Katalog",tabUploadShort:"Hochladen",tabCreator3d:"🎨 3D-GIF erstellen (jede Übung)",uploadOwnGifBtn:"📤 Eigenes GIF/Bild hochladen (auto-komprimiert)",optimizingGifBtn:"⏳ GIF / Bild wird optimiert (220×220)...",integratedCatalog:"Integrierter Katalog",clearCurrent:"Aktuelles entfernen",searchExercisePlaceholder:"Übung suchen (z. B. Burpees, Boxen, Plank)...",noPresetFound:"Kein Preset gefunden für",inPresetsWord:"unter den",presetsWord:"Vorlagen.",createIn3dBtn:"Im 3D-Editor erstellen",describeExerciseLabel:"✨ Beschreibe eine beliebige Übung",describePlaceholder:"Z. B. Dead Bug, einbeinige Hüftbrücke...",generatePoseBtn:"Pose erzeugen",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Grundhaltung",propLabel:"Ausrüstung",cameraLabel:"Kamera",speedLabel:"Tempo",editingPoseLabel:"Bearbeite Pose",startWord:"(Start)",endWord:"(Ende)",copyAToB:"A → B kopieren",torsoHeightTab:"Oberkörper & Höhe",armsTab:"Arme",legsTab:"Beine",symmetricArmsLabel:"Beide Arme symmetrisch bewegen",symmetricLegsLabel:"Beide Beine symmetrisch bewegen",createApplyGifBtn:"🎨 GIF erstellen & anwenden",creatingGifBtn:"⏳ GIF wird erstellt...",downloadGifBtn:"💾 .gif herunterladen"},it:{appTitle:"Timer Routine Studio",subtitle:"File .wkt",currentFile:"File corrente",openLocal:"📂 Apri (.wkt)",save:"💾 Salva",saveAs:"📑 Salva come...",shareWhatsApp:"Condividi WhatsApp",openInApp:"📲 Apri nell'App",validationAlertTitle:"⚠️ La routine contiene errori da correggere:",routineName:"Nome della Routine",author:"Autore / Allenatore",category:"Categoria",sport:"Sport",cycles:"Cicli Globali",prepare:"Preparazione (sec / max 24h)",prepareShort:"Preparazione (sec)",totalTime:"Tempo Totale",tut:"Lavoro (TUT)",rest:"Riposo",totalRounds:"Round Totali",exercisesRoundsLabel:"Esercizi / Round",exercisesList:"Elenco Esercizi",exercisesHeading:"Esercizi",addExercise:"+ Aggiungi Esercizio",addAnotherExercise:"+ Aggiungi un altro esercizio",rounds:"Round",work:"Lavoro (sec)",restBetween:"Pausa Round (sec)",restAfter:"Pausa Finale (sec)",subtotal:"Subtotale esercizio:",estimatedDuration:"Durata stimata dell'esercizio:",savedIn:"Salvato in",savedAs:"Salvato come",systemLanguage:"Lingua di sistema",systemLanguageDesc:"Lingua predefinita",languageLabel:"Lingua",shareMessageIntro:"🔥 Guarda il mio allenamento sul timer!",clipboardNotice:"📋 File .wkt scaricato. Reindirizzamento a WhatsApp...",openingApp:"🚀 Invio della routine all'App mobile...",errNameEmpty:"Il nome dell'esercizio non può essere vuoto.",errNameDuplicate:"Il nome dell'esercizio è duplicato nella routine.",errWorkMin:"Il tempo di lavoro deve essere maggiore di 0 sec.",errMaxTime:"Il tempo non può superare 1440 min (24 ore).",errRoutineEmpty:"La routine deve contenere almeno un esercizio.",errRoutineNameEmpty:"Il nome della routine non può essere vuoto.",previewBadge:"✨ Routine Condivisa",previewModeBtn:"👁️ Anteprima",editRoutineBtn:"✏️ Modifica / Personalizza sul Web",downloadWktBtn:"📥 Scarica (.wkt)",sharedBy:"Condivisa da",workVsRestRatio:"Distribuzione Lavoro vs Riposo",prepareBadge:"Preparazione iniziale",noRest:"Nessuna pausa",downloadApkBtn:"Scarica App Android (.apk)",welcomeDesc:"Progetta, personalizza e condividi i tuoi allenamenti a intervalli (.wkt)",newRoutineBtn:"+ Nuova Routine",openWktBtn:"Apri file .wkt",examplesTitle:"⚡ Oppure esplora una routine di esempio:",exercisesWord:"esercizi",homeBtn:"🏠 Home",sharedBanner:"✨ Routine caricata da link condiviso.",invalidWktErr:"Il file selezionato non ha un formato .wkt valido.",readWktErr:"Impossibile leggere il file .wkt selezionato.",openFileBtn:"Apri File",saveLocalBtn:"Salva Locale",exerciseDefaultName:"Esercizio",minOneExerciseAlert:"La routine deve contenere almeno un esercizio.",changeGifTitle:"Cambia GIF o immagine",addGifTitle:"Aggiungi GIF o immagine",removeGifTitle:"Rimuovi GIF / immagine",moveUpTitle:"Sposta su",moveDownTitle:"Sposta giù",duplicateTitle:"Duplica",deleteTitle:"Elimina",exerciseNamePlaceholder:"Nome dell'esercizio",mediaModalTitle:"Animazione o immagine dell'esercizio",mediaModalDesc:"Scegli dal catalogo, carica un file o crea una GIF 3D",tabCatalog:"Catalogo",tabUploadShort:"Carica",tabCreator3d:"🎨 Crea GIF 3D (qualsiasi esercizio)",uploadOwnGifBtn:"📤 Carica GIF o immagine propria (compressa auto.)",optimizingGifBtn:"⏳ Ottimizzazione GIF / immagine (220×220)...",integratedCatalog:"Catalogo integrato",clearCurrent:"Rimuovi attuale",searchExercisePlaceholder:"Cerca esercizio (es. burpees, boxe, plank)...",noPresetFound:"Nessun preset trovato per",inPresetsWord:"tra i",presetsWord:"predefiniti.",createIn3dBtn:"Crea nel Creatore 3D",describeExerciseLabel:"✨ Descrivi qualsiasi esercizio",describePlaceholder:"Es. Dead bug alternato, ponte glutei su una gamba...",generatePoseBtn:"Genera posa",animPreview:"▶ Anim",poseABtn:"Posa A",poseBBtn:"Posa B",basePostureLabel:"Postura base",propLabel:"Attrezzo",cameraLabel:"Camera",speedLabel:"Velocità",editingPoseLabel:"Modifica Posa",startWord:"(Inizio)",endWord:"(Fine)",copyAToB:"Copia A → B",torsoHeightTab:"Busto e Altezza",armsTab:"Braccia",legsTab:"Gambe",symmetricArmsLabel:"Muovi entrambe le braccia insieme",symmetricLegsLabel:"Muovi entrambe le gambe insieme",createApplyGifBtn:"🎨 Crea e applica GIF",creatingGifBtn:"⏳ Generazione GIF...",downloadGifBtn:"💾 Scarica .gif"}};function My(t){var n;if(t==="SYSTEM"||!t){const r=(typeof navigator<"u"&&(navigator.language||((n=navigator.languages)==null?void 0:n[0]))||"es").split("-")[0].toLowerCase();return Er[r]?r:"es"}const e=t.split("-")[0].toLowerCase();return Er[e]?e:"es"}const tm=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),w.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Ey=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("polyline",{points:"3 6 5 6 21 6"}),w.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),wy=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),w.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),by=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),w.jsx("polyline",{points:"5 12 12 5 19 12"})]}),Ay=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),w.jsx("polyline",{points:"19 12 12 19 5 12"})]}),Ty=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),w.jsx("polyline",{points:"7 10 12 15 17 10"}),w.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),nm=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("circle",{cx:"12",cy:"12",r:"10"}),w.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Ry=({size:t=20,className:e="",...n})=>w.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:w.jsx("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),bx=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}),w.jsx("polygon",{points:"22 19 19 9 2 9 5 19 22 19"})]}),Cy=({size:t=20,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),w.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),w.jsx("polyline",{points:"7 3 7 8 15 8"})]}),jl=({className:t="w-7 h-7 shrink-0",...e})=>w.jsxs("svg",{viewBox:"0 0 108 108",className:t,"aria-hidden":"true",...e,children:[w.jsx("rect",{width:"108",height:"108",rx:"24",fill:"#0F172A",stroke:"#1E293B",strokeWidth:"4"}),w.jsx("path",{fill:"#10B981",d:"M51,21 L57,21 L57,26 L51,26 Z"}),w.jsx("path",{fill:"#00E676",d:"M44,15 L64,15 A2,2 0 0,1 66,17 L66,20 A2,2 0 0,1 64,22 L44,22 A2,2 0 0,1 42,20 L42,17 A2,2 0 0,1 44,15 Z"}),w.jsx("path",{fill:"#10B981",d:"M33,27 L37,31 L33,35 L29,31 Z"}),w.jsx("path",{fill:"#00E676",d:"M25,25 L33,19 L37,23 L29,29 Z"}),w.jsx("path",{fill:"#10B981",d:"M75,27 L79,31 L75,35 L71,31 Z"}),w.jsx("path",{fill:"#00E676",d:"M75,19 L83,25 L79,29 L71,23 Z"}),w.jsx("path",{fill:"#00E676",d:"M54,26 A31,31 0 1,1 53.9,26 Z M54,32 A25,25 0 1,0 54.1,32 Z"}),w.jsx("path",{fill:"#10B981",d:"M52.5,34 L55.5,34 L55.5,38 L52.5,38 Z"}),w.jsx("path",{fill:"#10B981",d:"M52.5,76 L55.5,76 L55.5,80 L52.5,80 Z"}),w.jsx("path",{fill:"#10B981",d:"M31,55.5 L35,55.5 L35,58.5 L31,58.5 Z"}),w.jsx("path",{fill:"#10B981",d:"M73,55.5 L77,55.5 L77,58.5 L73,58.5 Z"}),w.jsx("path",{fill:"#00E676",d:"M57,41 L45,58 L54,58 L51,73 L63,56 L54,56 Z"})]}),Ax=({className:t="w-4 h-4 shrink-0",...e})=>w.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:t,"aria-hidden":"true",...e,children:w.jsx("path",{d:"M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"})}),im=({size:t=18,className:e="",...n})=>w.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[w.jsx("circle",{cx:"12",cy:"12",r:"10"}),w.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),w.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),Py=({metrics:t,t:e=Er.es})=>w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4",children:[w.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[w.jsx("div",{className:"p-2.5 rounded-lg bg-slate-700/50 text-white",children:w.jsx(nm,{size:22})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-xs text-slate-400 font-medium",children:e.totalTime}),w.jsx("p",{className:"text-xl font-bold text-white",children:St(t.totalSeconds)})]})]}),w.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-xl p-3 flex items-center space-x-3",children:[w.jsx("div",{className:"p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400",children:w.jsx(Ry,{size:22})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-xs text-emerald-300 font-medium",children:e.tut}),w.jsx("p",{className:"text-xl font-bold text-emerald-400",children:St(t.tutSeconds)})]})]}),w.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-xl p-3 flex items-center space-x-3",children:[w.jsx("div",{className:"p-2.5 rounded-lg bg-rose-500/20 text-rose-400",children:w.jsx(nm,{size:22})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-xs text-rose-300 font-medium",children:e.rest}),w.jsx("p",{className:"text-xl font-bold text-rose-400",children:St(t.restSeconds)})]})]}),w.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[w.jsx("div",{className:"p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400",children:w.jsx("span",{className:"font-bold text-base",children:"#"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-xs text-slate-400 font-medium",children:e.exercisesRoundsLabel||"Ejercicios / Rondas"}),w.jsxs("p",{className:"text-xl font-bold text-cyan-400",children:[t.exerciseCount," ",w.jsxs("span",{className:"text-xs text-slate-400",children:["(",t.totalRounds," r)"]})]})]})]})]});var Wr={},Tx={},Oi={};Object.defineProperty(Oi,"__esModule",{value:!0});Oi.loop=Oi.conditional=Oi.parse=void 0;var Ly=function t(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(n))n.forEach(function(a){return t(e,a,i,r)});else if(typeof n=="function")n(e,i,r,t);else{var s=Object.keys(n)[0];Array.isArray(n[s])?(r[s]={},t(e,n[s],i,r[s])):r[s]=n[s](e,i,r,t)}return i};Oi.parse=Ly;var Ny=function(e,n){return function(i,r,s,a){n(i,r,s)&&a(i,e,r,s)}};Oi.conditional=Ny;var Dy=function(e,n){return function(i,r,s,a){for(var o=[],l=i.pos;n(i,r,s);){var c={};if(a(i,e,r,c),i.pos===l)break;l=i.pos,o.push(c)}return o}};Oi.loop=Dy;var At={};Object.defineProperty(At,"__esModule",{value:!0});At.readBits=At.readArray=At.readUnsigned=At.readString=At.peekBytes=At.readBytes=At.peekByte=At.readByte=At.buildStream=void 0;var Iy=function(e){return{data:e,pos:0}};At.buildStream=Iy;var Rx=function(){return function(e){return e.data[e.pos++]}};At.readByte=Rx;var Fy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(n){return n.data[n.pos+e]}};At.peekByte=Fy;var xc=function(e){return function(n){return n.data.subarray(n.pos,n.pos+=e)}};At.readBytes=xc;var Uy=function(e){return function(n){return n.data.subarray(n.pos,n.pos+e)}};At.peekBytes=Uy;var Oy=function(e){return function(n){return Array.from(xc(e)(n)).map(function(i){return String.fromCharCode(i)}).join("")}};At.readString=Oy;var By=function(e){return function(n){var i=xc(2)(n);return e?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};At.readUnsigned=By;var ky=function(e,n){return function(i,r,s){for(var a=typeof n=="function"?n(i,r,s):n,o=xc(e),l=new Array(a),c=0;c<a;c++)l[c]=o(i);return l}};At.readArray=ky;var zy=function(e,n,i){for(var r=0,s=0;s<i;s++)r+=e[n+s]&&Math.pow(2,i-s-1);return r},Gy=function(e){return function(n){for(var i=Rx()(n),r=new Array(8),s=0;s<8;s++)r[7-s]=!!(i&1<<s);return Object.keys(e).reduce(function(a,o){var l=e[o];return l.length?a[o]=zy(r,l.index,l.length):a[o]=r[l.index],a},{})}};At.readBits=Gy;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=Oi,n=At,i={blocks:function(u){for(var p=0,m=[],_=u.data.length,g=0,d=(0,n.readByte)()(u);d!==p&&d;d=(0,n.readByte)()(u)){if(u.pos+d>=_){var v=_-u.pos;m.push((0,n.readBytes)(v)(u)),g+=v;break}m.push((0,n.readBytes)(d)(u)),g+=d}for(var S=new Uint8Array(g),M=0,b=0;b<m.length;b++)S.set(m[b],M),M+=m[b].length;return S}},r=(0,e.conditional)({gce:[{codes:(0,n.readBytes)(2)},{byteSize:(0,n.readByte)()},{extras:(0,n.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,n.readUnsigned)(!0)},{transparentColorIndex:(0,n.readByte)()},{terminator:(0,n.readByte)()}]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===249}),s=(0,e.conditional)({image:[{code:(0,n.readByte)()},{descriptor:[{left:(0,n.readUnsigned)(!0)},{top:(0,n.readUnsigned)(!0)},{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{lct:(0,n.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,n.readArray)(3,function(f,u,p){return Math.pow(2,p.descriptor.lct.size+1)})},function(f,u,p){return p.descriptor.lct.exists}),{data:[{minCodeSize:(0,n.readByte)()},i]}]},function(f){return(0,n.peekByte)()(f)===44}),a=(0,e.conditional)({text:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{preData:function(u,p,m){return(0,n.readBytes)(m.text.blockSize)(u)}},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===1}),o=(0,e.conditional)({application:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{id:function(u,p,m){return(0,n.readString)(m.blockSize)(u)}},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===255}),l=(0,e.conditional)({comment:[{codes:(0,n.readBytes)(2)},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===254}),c=[{header:[{signature:(0,n.readString)(3)},{version:(0,n.readString)(3)}]},{lsd:[{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{gct:(0,n.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,n.readByte)()},{pixelAspectRatio:(0,n.readByte)()}]},(0,e.conditional)({gct:(0,n.readArray)(3,function(f,u){return Math.pow(2,u.lsd.gct.size+1)})},function(f,u){return u.lsd.gct.exists}),{frames:(0,e.loop)([r,o,l,s,a],function(f){var u=(0,n.peekByte)()(f);return u===33||u===44})}],h=c;t.default=h})(Tx);var vc={};Object.defineProperty(vc,"__esModule",{value:!0});vc.deinterlace=void 0;var Hy=function(e,n){for(var i=new Array(e.length),r=e.length/n,s=function(u,p){var m=e.slice(p*n,(p+1)*n);i.splice.apply(i,[u*n,n].concat(m))},a=[0,4,2,1],o=[8,8,4,2],l=0,c=0;c<4;c++)for(var h=a[c];h<r;h+=o[c])s(h,l),l++;return i};vc.deinterlace=Hy;var _c={};Object.defineProperty(_c,"__esModule",{value:!0});_c.lzw=void 0;var Vy=function(e,n,i){var r=4096,s=-1,a=i,o,l,c,h,f,u,p,E,m,_,b,g,x,y,R,C,d=new Array(i),v=new Array(r),S=new Array(r),M=new Array(r+1);for(g=e,l=1<<g,f=l+1,o=l+2,p=s,h=g+1,c=(1<<h)-1,m=0;m<l;m++)v[m]=0,S[m]=m;var b,E,x,y,C,R;for(b=E=x=y=C=R=0,_=0;_<a;){if(y===0){if(E<h){b+=n[R]<<E,E+=8,R++;continue}if(m=b&c,b>>=h,E-=h,m>o||m==f)break;if(m==l){h=g+1,c=(1<<h)-1,o=l+2,p=s;continue}if(p==s){M[y++]=S[m],p=m,x=m;continue}for(u=m,m==o&&(M[y++]=x,m=p);m>l;)M[y++]=S[m],m=v[m];x=S[m]&255,M[y++]=x,o<r&&(v[o]=p,S[o]=x,o++,!(o&c)&&o<r&&(h++,c+=o)),p=u}y--,d[C++]=M[y],_++}for(_=C;_<a;_++)d[_]=0;return d};_c.lzw=Vy;Object.defineProperty(Wr,"__esModule",{value:!0});var Cx=Wr.decompressFrames=Wr.decompressFrame=Px=Wr.parseGIF=void 0,Wy=$y(Tx),jy=Oi,Xy=At,qy=vc,Yy=_c;function $y(t){return t&&t.__esModule?t:{default:t}}var Ky=function(e){var n=new Uint8Array(e);return(0,jy.parse)((0,Xy.buildStream)(n),Wy.default)},Px=Wr.parseGIF=Ky,Zy=function(e){for(var n=e.pixels.length,i=new Uint8ClampedArray(n*4),r=0;r<n;r++){var s=r*4,a=e.pixels[r],o=e.colorTable[a]||[0,0,0];i[s]=o[0],i[s+1]=o[1],i[s+2]=o[2],i[s+3]=a!==e.transparentIndex?255:0}return i},Lx=function(e,n,i){if(!e.image){console.warn("gif frame does not have associated image.");return}var r=e.image,s=r.descriptor.width*r.descriptor.height,a=(0,Yy.lzw)(r.data.minCodeSize,r.data.blocks,s);r.descriptor.lct.interlaced&&(a=(0,qy.deinterlace)(a,r.descriptor.width));var o={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?o.colorTable=r.lct:o.colorTable=n,e.gce&&(o.delay=(e.gce.delay||10)*10,o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),i&&(o.patch=Zy(o)),o};Wr.decompressFrame=Lx;var Jy=function(e,n){return e.frames.filter(function(i){return i.image}).map(function(i){return Lx(i,e.gct,n)})};Cx=Wr.decompressFrames=Jy;var Qy={trailer:59};function Nx(t=256){let e=0,n=new Uint8Array(t);return{get buffer(){return n.buffer},reset(){e=0},bytesView(){return n.subarray(0,e)},bytes(){return n.slice(0,e)},writeByte(r){i(e+1),n[e]=r,e++},writeBytes(r,s=0,a=r.length){i(e+a);for(let o=0;o<a;o++)n[e++]=r[o+s]},writeBytesView(r,s=0,a=r.byteLength){i(e+a),n.set(r.subarray(s,s+a),e),e+=a}};function i(r){var s=n.length;if(s>=r)return;var a=1024*1024;r=Math.max(r,s*(s<a?2:1.125)>>>0),s!=0&&(r=Math.max(r,256));let o=n;n=new Uint8Array(r),e>0&&n.set(o.subarray(0,e),0)}}var eu=12,rm=5003,eM=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function tM(t,e,n,i,r=Nx(512),s=new Uint8Array(256),a=new Int32Array(rm),o=new Int32Array(rm)){let l=a.length,c=Math.max(2,i);s.fill(0),o.fill(0),a.fill(-1);let h=0,f=0,u=c+1,p=u,m=!1,_=p,g=(1<<_)-1,d=1<<u-1,v=d+1,S=d+2,M=0,b=n[0],E=0;for(let C=l;C<65536;C*=2)++E;E=8-E,r.writeByte(c),y(d);let x=n.length;for(let C=1;C<x;C++)e:{let R=n[C],D=(R<<eu)+b,I=R<<E^b;if(a[I]===D){b=o[I];break e}let G=I===0?1:l-I;for(;a[I]>=0;)if(I-=G,I<0&&(I+=l),a[I]===D){b=o[I];break e}y(b),b=R,S<1<<eu?(o[I]=S++,a[I]=D):(a.fill(-1),S=d+2,m=!0,y(d))}return y(b),y(v),r.writeByte(0),r.bytesView();function y(C){for(h&=eM[f],f>0?h|=C<<f:h=C,f+=_;f>=8;)s[M++]=h&255,M>=254&&(r.writeByte(M),r.writeBytesView(s,0,M),M=0),h>>=8,f-=8;if((S>g||m)&&(m?(_=p,g=(1<<_)-1,m=!1):(++_,g=_===eu?1<<_:(1<<_)-1)),C==v){for(;f>0;)s[M++]=h&255,M>=254&&(r.writeByte(M),r.writeBytesView(s,0,M),M=0),h>>=8,f-=8;M>0&&(r.writeByte(M),r.writeBytesView(s,0,M),M=0)}}}var nM=tM;function Dx(t,e,n){return t<<8&63488|e<<2&992|n>>3}function Ix(t,e,n,i){return t>>4|e&240|(n&240)<<4|(i&240)<<8}function Fx(t,e,n){return t>>4<<8|e&240|n>>4}function No(t,e,n){return t<e?e:t>n?n:t}function hl(t){return t*t}function sm(t,e,n){var i=0,r=1e100;let s=t[e],a=s.cnt;s.ac;let o=s.rc,l=s.gc,c=s.bc;for(var h=s.fw;h!=0;h=t[h].fw){let u=t[h],p=u.cnt,m=a*p/(a+p);if(!(m>=r)){var f=0;f+=m*hl(u.rc-o),!(f>=r)&&(f+=m*hl(u.gc-l),!(f>=r)&&(f+=m*hl(u.bc-c),!(f>=r)&&(r=f,i=h)))}}s.err=r,s.nn=i}function tu(){return{ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0}}function iM(t,e){let n=e==="rgb444"?4096:65536,i=new Array(n),r=t.length;if(e==="rgba4444")for(let s=0;s<r;++s){let a=t[s],o=a>>24&255,l=a>>16&255,c=a>>8&255,h=a&255,f=Ix(h,c,l,o),u=f in i?i[f]:i[f]=tu();u.rc+=h,u.gc+=c,u.bc+=l,u.ac+=o,u.cnt++}else if(e==="rgb444")for(let s=0;s<r;++s){let a=t[s],o=a>>16&255,l=a>>8&255,c=a&255,h=Fx(c,l,o),f=h in i?i[h]:i[h]=tu();f.rc+=c,f.gc+=l,f.bc+=o,f.cnt++}else for(let s=0;s<r;++s){let a=t[s],o=a>>16&255,l=a>>8&255,c=a&255,h=Dx(c,l,o),f=h in i?i[h]:i[h]=tu();f.rc+=c,f.gc+=l,f.bc+=o,f.cnt++}return i}function Ux(t,e,n={}){let{format:i="rgb565",clearAlpha:r=!0,clearAlphaColor:s=0,clearAlphaThreshold:a=0,oneBitAlpha:o=!1}=n;if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");let l=new Uint32Array(t.buffer),c=n.useSqrt!==!1,h=i==="rgba4444",f=iM(l,i),u=f.length,p=u-1,m=new Uint32Array(u+1);for(var _=0,g=0;g<u;++g){let P=f[g];if(P!=null){var d=1/P.cnt;h&&(P.ac*=d),P.rc*=d,P.gc*=d,P.bc*=d,f[_++]=P}}hl(e)/_<.022&&(c=!1);for(var g=0;g<_-1;++g)f[g].fw=g+1,f[g+1].bk=g,c&&(f[g].cnt=Math.sqrt(f[g].cnt));c&&(f[g].cnt=Math.sqrt(f[g].cnt));var v,S,M;for(g=0;g<_;++g){sm(f,g);var b=f[g].err;for(S=++m[0];S>1&&(M=S>>1,!(f[v=m[M]].err<=b));S=M)m[S]=v;m[S]=g}var E=_-e;for(g=0;g<E;){for(var x;;){var y=m[1];if(x=f[y],x.tm>=x.mtm&&f[x.nn].mtm<=x.tm)break;x.mtm==p?y=m[1]=m[m[0]--]:(sm(f,y),x.tm=g);var b=f[y].err;for(S=1;(M=S+S)<=m[0]&&(M<m[0]&&f[m[M]].err>f[m[M+1]].err&&M++,!(b<=f[v=m[M]].err));S=M)m[S]=v;m[S]=y}var C=f[x.nn],R=x.cnt,D=C.cnt,d=1/(R+D);h&&(x.ac=d*(R*x.ac+D*C.ac)),x.rc=d*(R*x.rc+D*C.rc),x.gc=d*(R*x.gc+D*C.gc),x.bc=d*(R*x.bc+D*C.bc),x.cnt+=C.cnt,x.mtm=++g,f[C.bk].fw=C.fw,f[C.fw].bk=C.bk,C.mtm=p}let I=[];var G=0;for(g=0;;++G){let P=No(Math.round(f[g].rc),0,255),O=No(Math.round(f[g].gc),0,255),K=No(Math.round(f[g].bc),0,255),z=255;h&&(z=No(Math.round(f[g].ac),0,255),o&&(z=z<=(typeof o=="number"?o:127)?0:255),r&&z<=a&&(P=O=K=s,z=0));let H=h?[P,O,K,z]:[P,O,K];if(rM(I,H)||I.push(H),(g=f[g].fw)==0)break}return I}function rM(t,e){for(let n=0;n<t.length;n++){let i=t[n],r=i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2],s=i.length>=4&&e.length>=4?i[3]===e[3]:!0;if(r&&s)return!0}return!1}function Ox(t,e,n="rgb565"){if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");if(e.length>256)throw new Error("applyPalette() only works with 256 colors or less");let i=new Uint32Array(t.buffer),r=i.length,s=n==="rgb444"?4096:65536,a=new Uint8Array(r),o=new Array(s);if(n==="rgba4444")for(let l=0;l<r;l++){let c=i[l],h=c>>24&255,f=c>>16&255,u=c>>8&255,p=c&255,m=Ix(p,u,f,h),_=m in o?o[m]:o[m]=sM(p,u,f,h,e);a[l]=_}else{let l=n==="rgb444"?Fx:Dx;for(let c=0;c<r;c++){let h=i[c],f=h>>16&255,u=h>>8&255,p=h&255,m=l(p,u,f),_=m in o?o[m]:o[m]=aM(p,u,f,e);a[c]=_}}return a}function sM(t,e,n,i,r){let s=0,a=1e100;for(let o=0;o<r.length;o++){let l=r[o],c=l[3],h=Gr(c-i);if(h>a)continue;let f=l[0];if(h+=Gr(f-t),h>a)continue;let u=l[1];if(h+=Gr(u-e),h>a)continue;let p=l[2];h+=Gr(p-n),!(h>a)&&(a=h,s=o)}return s}function aM(t,e,n,i){let r=0,s=1e100;for(let a=0;a<i.length;a++){let o=i[a],l=o[0],c=Gr(l-t);if(c>s)continue;let h=o[1];if(c+=Gr(h-e),c>s)continue;let f=o[2];c+=Gr(f-n),!(c>s)&&(s=c,r=a)}return r}function Gr(t){return t*t}function Bx(t={}){let{initialCapacity:e=4096,auto:n=!0}=t,i=Nx(e),r=5003,s=new Uint8Array(256),a=new Int32Array(r),o=new Int32Array(r),l=!1;return{reset(){i.reset(),l=!1},finish(){i.writeByte(Qy.trailer)},bytes(){return i.bytes()},bytesView(){return i.bytesView()},get buffer(){return i.buffer},get stream(){return i},writeHeader:c,writeFrame(h,f,u,p={}){let{transparent:m=!1,transparentIndex:_=0,delay:g=0,palette:d=null,repeat:v=0,colorDepth:S=8,dispose:M=-1}=p,b=!1;if(n?l||(b=!0,c(),l=!0):b=!!p.first,f=Math.max(0,Math.floor(f)),u=Math.max(0,Math.floor(u)),b){if(!d)throw new Error("First frame must include a { palette } option");lM(i,f,u,d,S),am(i,d),v>=0&&cM(i,v)}let E=Math.round(g/10);oM(i,M,E,m,_);let x=!!d&&!b;uM(i,f,u,x?d:null),x&&am(i,d),dM(i,h,f,u,S,s,a,o)}};function c(){kx(i,"GIF89a")}}function oM(t,e,n,i,r){t.writeByte(33),t.writeByte(249),t.writeByte(4),r<0&&(r=0,i=!1);var s,a;i?(s=1,a=2):(s=0,a=0),e>=0&&(a=e&7),a<<=2,t.writeByte(0|a|0|s),cr(t,n),t.writeByte(r||0),t.writeByte(0)}function lM(t,e,n,i,r=8){let s=1,a=0,o=fh(i.length)-1,l=s<<7|r-1<<4|a<<3|o;cr(t,e),cr(t,n),t.writeBytes([l,0,0])}function cM(t,e){t.writeByte(33),t.writeByte(255),t.writeByte(11),kx(t,"NETSCAPE2.0"),t.writeByte(3),t.writeByte(1),cr(t,e),t.writeByte(0)}function am(t,e){let n=1<<fh(e.length);for(let i=0;i<n;i++){let r=[0,0,0];i<e.length&&(r=e[i]),t.writeByte(r[0]),t.writeByte(r[1]),t.writeByte(r[2])}}function uM(t,e,n,i){if(t.writeByte(44),cr(t,0),cr(t,0),cr(t,e),cr(t,n),i){let r=0,s=0,a=fh(i.length)-1;t.writeByte(128|r|s|0|a)}else t.writeByte(0)}function dM(t,e,n,i,r=8,s,a,o){nM(n,i,e,r,t,s,a,o)}function cr(t,e){t.writeByte(e&255),t.writeByte(e>>8&255)}function kx(t,e){for(var n=0;n<e.length;n++)t.writeByte(e.charCodeAt(n))}function fh(t){return Math.max(Math.ceil(Math.log2(t)),1)}const fM=240,hM=220,om=180,lm=85,pM=240*1024,mM=280*1024,nu=60;function gM(t){if(t.length<6)return!1;const e=String.fromCharCode(t[0],t[1],t[2],t[3],t[4],t[5]);return e==="GIF87a"||e==="GIF89a"}function xM(t){const n=[];for(let i=0;i<t.length;i+=32768){const r=t.subarray(i,i+32768);n.push(String.fromCharCode(...r))}return btoa(n.join(""))}function zx(t,e,n){if(t<=0||e<=0)return{width:n,height:n};if(t<=n&&e<=n)return{width:t,height:e};const i=Math.min(n/t,n/e);return{width:Math.max(1,Math.round(t*i)),height:Math.max(1,Math.round(e*i))}}function vM(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e;const r=i.getContext("2d",{willReadFrequently:!0});if(!r)return[];const s=document.createElement("canvas"),a=s.getContext("2d");if(!a)return[];const o=[];let l=0;for(let u=0;u<n.length;u++){const p=n[u].delay&&n[u].delay>0?n[u].delay:100,m=Math.max(p,20);u===0?(o.push({frameIdx:0,delayMs:m}),l=0):(l+=m,(l>=lm||u===n.length-1)&&(o.push({frameIdx:u,delayMs:l}),l=0))}let c;if(o.length>nu){c=new Map;const u=o.length/nu;for(let p=0;p<nu;p++){const m=Math.floor(p*u),_=Math.min(o.length,Math.floor((p+1)*u));let g=0;for(let d=m;d<_;d++)g+=o[d].delayMs;c.set(o[m].frameIdx,Math.max(lm,g))}}else c=new Map(o.map(u=>[u.frameIdx,u.delayMs]));const h=[];let f=null;for(let u=0;u<n.length;u++){const p=n[u],{width:m,height:_,left:g,top:d}=p.dims;if(p.disposalType===3&&(f=r.getImageData(0,0,t,e)),m>0&&_>0&&p.patch&&p.patch.length===m*_*4){s.width=m,s.height=_;const S=new ImageData(new Uint8ClampedArray(p.patch),m,_);a.putImageData(S,0,0),r.drawImage(s,g,d)}const v=c.get(u);if(v!==void 0){const S=document.createElement("canvas");S.width=t,S.height=e;const M=S.getContext("2d");M&&(M.fillStyle="#0F172A",M.fillRect(0,0,t,e),M.drawImage(i,0,0),h.push({canvas:S,delayMs:v}))}p.disposalType===2?r.clearRect(g,d,m,_):p.disposalType===3&&f&&(r.putImageData(f,0,0),f=null)}return h}function iu(t,e,n,i,r,s){const{width:a,height:o}=zx(e,n,i),l=document.createElement("canvas");l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});if(!c)return null;const h=Bx();let f=0;for(let u=0;u<t.length;u+=s){const p=t[u];let m=p.delayMs;if(s>1)for(let v=u+1;v<Math.min(u+s,t.length);v++)m+=t[v].delayMs;c.fillStyle="#0F172A",c.fillRect(0,0,a,o),c.drawImage(p.canvas,0,0,a,o);const _=c.getImageData(0,0,a,o).data,g=Ux(_,r,{format:"rgb565"}),d=Ox(_,g,"rgb565");h.writeFrame(d,a,o,{palette:g,delay:m,repeat:f===0?0:void 0}),f++}return f===0?null:(h.finish(),h.bytes())}async function _M(t){const e=URL.createObjectURL(t);try{const n=await new Promise((h,f)=>{const u=new Image;u.onload=()=>h(u),u.onerror=()=>f(new Error("No se pudo decodificar la imagen.")),u.src=e}),{width:i,height:r}=zx(n.naturalWidth||n.width,n.naturalHeight||n.height,fM),s=document.createElement("canvas");s.width=i,s.height=r;const a=s.getContext("2d");if(!a)throw new Error("Canvas no disponible.");a.fillStyle="#0F172A",a.fillRect(0,0,i,r),a.drawImage(n,0,0,i,r);let o=s.toDataURL("image/webp",.8);o.startsWith("data:image/webp")||(o=s.toDataURL("image/jpeg",.82));const l=o.slice(o.indexOf("base64,")+7).length,c=Math.max(1,Math.round(l*3/4/1024));return{mediaData:o,sizeKb:c,isAnimated:!1}}finally{URL.revokeObjectURL(e)}}async function SM(t){const e=await t.arrayBuffer(),n=new Uint8Array(e);if(gM(n)||t.type==="image/gif")try{const r=Px(e),s=Cx(r,!0);if(s.length>1){const a=r.lsd.width||s[0].dims.width,o=r.lsd.height||s[0].dims.height,l=vM(a,o,s);if(l.length>1){let c=iu(l,a,o,hM,64,1);if(c&&c.length>pM&&(c=iu(l,a,o,om,32,1)),c&&c.length>mM&&(c=iu(l,a,o,om,32,2)),c&&c.length>0){const h=`data:image/gif;base64,${xM(c)}`,f=Math.max(1,Math.round(c.length/1024));return{mediaData:h,sizeKb:f,isAnimated:!0}}}}}catch(r){console.warn("Fallo al re-codificar GIF en navegador, usando modo estático:",r)}return _M(t)}const rs={pelvisOffsetY:0,torsoPitch:0,torsoTwist:0,torsoRoll:0,headPitch:0,leftArmLift:8,rightArmLift:8,leftArmOut:8,rightArmOut:8,leftElbowFlex:12,rightElbowFlex:12,leftHipFlex:0,rightHipFlex:0,leftHipOut:4,rightHipOut:4,leftKneeFlex:4,rightKneeFlex:4};function ct(t){switch(t){case"supine":return{...rs,headPitch:15,leftArmLift:0,rightArmLift:0,leftArmOut:12,rightArmOut:12,leftHipFlex:10,rightHipFlex:10,leftKneeFlex:10,rightKneeFlex:10};case"prone":return{...rs,headPitch:-22,leftArmLift:165,rightArmLift:165,leftArmOut:8,rightArmOut:8,leftHipFlex:-5,rightHipFlex:-5};case"plank":return{...rs,headPitch:-15,leftArmLift:88,rightArmLift:88,leftElbowFlex:6,rightElbowFlex:6,leftHipFlex:0,rightHipFlex:0};case"quadruped":return{...rs,headPitch:-18,leftArmLift:88,rightArmLift:88,leftElbowFlex:4,rightElbowFlex:4,leftHipFlex:88,rightHipFlex:88,leftKneeFlex:90,rightKneeFlex:90};case"seated":return{...rs,torsoPitch:10,leftArmLift:25,rightArmLift:25,leftElbowFlex:70,rightElbowFlex:70,leftHipFlex:82,rightHipFlex:82,leftKneeFlex:75,rightKneeFlex:75};case"standing":default:return{...rs}}}function yM(t,e="Ejercicio personalizado"){const n=ct(t);return{title:e,posture:t,prop:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"||t==="seated"?"mat":"none",camera:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"?"low_side":"three_quarter",frameDelayMs:80,isometricPulse:!1,poseA:{...n},poseB:{...n}}}function MM(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}function $e(t,e){return e.some(n=>t.includes(n))}const EM=["Bicho muerto alternado","Puente de glúteo a una pierna","Toque de talones tumbado boca arriba","Isométrico de cuello","Patada de glúteo en cuatro apoyos","Remo alternado con mancuernas"];function ru(t){const e=t.trim()||"Ejercicio personalizado",n=MM(e),i=[],r=$e(n,["una pierna","un brazo","unilateral","single leg","single arm","alternad","alterno","alterna","izquierd","derech"]),s=$e(n,["isometric","mantener","hold","estatic","aguantar"]);let a="none";if($e(n,["mancuerna","dumbbell","pesa ","pesas"])?(a="dumbbells",i.push("Mancuernas")):$e(n,["barra","barbell","press militar","peso muerto"])?(a="barbell",i.push("Barra")):$e(n,["kettlebell","pesa rusa","disco","plate"])?(a="kettlebell",i.push("Kettlebell / Disco")):$e(n,["cajon","box","banco","silla","step","escalon"])?(a="box",i.push("Cajón / Banco")):$e(n,["boxeo","guante","jab","cross","gancho","hook","uppercut","puno"])&&(a="gloves",i.push("Guantes de boxeo")),$e(n,["bicho muerto","dead bug","deadbug"]))return i.push("Boca arriba en colchoneta","Movimiento cruzado brazo/pierna"),{spec:{title:e,posture:"supine",prop:a==="none"?"mat":a,camera:"low_side",frameDelayMs:90,isometricPulse:s,poseA:s?{...ct("supine"),leftArmLift:90,rightArmLift:90,leftHipFlex:90,rightHipFlex:90,leftKneeFlex:90,rightKneeFlex:90}:{...ct("supine"),leftArmLift:165,rightArmLift:90,leftHipFlex:90,rightHipFlex:12,leftKneeFlex:90,rightKneeFlex:10},poseB:s?{...ct("supine"),pelvisOffsetY:.02,leftArmLift:94,rightArmLift:94,leftHipFlex:86,rightHipFlex:86,leftKneeFlex:90,rightKneeFlex:90}:{...ct("supine"),leftArmLift:90,rightArmLift:165,leftHipFlex:12,rightHipFlex:90,leftKneeFlex:10,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if($e(n,["toque de talon","tocar talon","talones","heel touch","penguin"]))return i.push("Boca arriba","Rodillas flexionadas y balanceo lateral"),{spec:{title:e,posture:"supine",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...ct("supine"),torsoPitch:24,torsoTwist:-18,torsoRoll:-16,headPitch:22,leftArmLift:25,rightArmLift:15,leftArmOut:22,rightArmOut:10,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112},poseB:{...ct("supine"),torsoPitch:24,torsoTwist:18,torsoRoll:16,headPitch:22,leftArmLift:15,rightArmLift:25,leftArmOut:10,rightArmOut:22,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112}},matchedNotes:i,confidence:"high"};if($e(n,["puente","glute bridge","hip thrust","elevacion de cadera"]))return i.push("Boca arriba",r?"A una pierna":"Elevación de cadera"),{spec:{title:e,posture:"supine",prop:"mat",camera:"low_side",frameDelayMs:85,isometricPulse:s,poseA:{...ct("supine"),pelvisOffsetY:0,torsoPitch:0,leftHipFlex:55,rightHipFlex:r?75:55,leftKneeFlex:115,rightKneeFlex:r?12:115,leftArmLift:0,rightArmLift:0,leftArmOut:14,rightArmOut:14},poseB:{...ct("supine"),pelvisOffsetY:.22,torsoPitch:24,headPitch:18,leftHipFlex:0,rightHipFlex:r?45:0,leftKneeFlex:92,rightKneeFlex:r?10:92,leftArmLift:-20,rightArmLift:-20,leftArmOut:14,rightArmOut:14}},matchedNotes:i,confidence:"high"};if($e(n,["cuello","neck","cervical"]))return i.push("Activación cervical",s?"Isométrico":"Movilidad de cuello"),{spec:{title:e,posture:"standing",prop:"none",camera:"three_quarter",frameDelayMs:95,isometricPulse:!0,poseA:{...ct("standing"),headPitch:s?-6:-22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18},poseB:{...ct("standing"),headPitch:s?6:22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18}},matchedNotes:i,confidence:"high"};if($e(n,["bird dog","birddog","perro de caza","perro pajaro"]))return i.push("Cuatro apoyos","Extensión cruzada"),{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...ct("quadruped"),leftArmLift:170,rightArmLift:88,leftHipFlex:88,rightHipFlex:-8,leftKneeFlex:90,rightKneeFlex:8},poseB:{...ct("quadruped"),leftArmLift:88,rightArmLift:170,leftHipFlex:-8,rightHipFlex:88,leftKneeFlex:8,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if($e(n,["patada de gluteo","donkey kick","glute kick","hidrante","cuatro apoyos","cuadrupedia"])){i.push("Cuatro apoyos en colchoneta");const u=$e(n,["hidrante","lateral","abduccion"]);return{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:80,isometricPulse:!1,poseA:ct("quadruped"),poseB:{...ct("quadruped"),leftHipFlex:u?85:-25,leftHipOut:u?55:0,leftKneeFlex:85}},matchedNotes:i,confidence:"high"}}if($e(n,["plancha","plank"]))return $e(n,["superman"])?(i.push("Plancha","Extensión alternada brazo/pierna"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...ct("plank"),leftArmLift:172,rightHipFlex:-16},poseB:{...ct("plank"),rightArmLift:172,leftHipFlex:-16}},matchedNotes:i,confidence:"high"}):$e(n,["toque de hombro","shoulder tap","hombros"])?(i.push("Plancha","Toques de hombro alternados"),{spec:{title:e,posture:"plank",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...ct("plank"),leftArmLift:105,leftArmOut:-20,leftElbowFlex:120},poseB:{...ct("plank"),rightArmLift:105,rightArmOut:-20,rightElbowFlex:120}},matchedNotes:i,confidence:"high"}):(i.push("Plancha abdominal"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:95,isometricPulse:!0,poseA:{...ct("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.18},poseB:{...ct("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.15,torsoPitch:3}},matchedNotes:i,confidence:"high"});let o="standing";$e(n,["boca arriba","tumbado","acostado","abdominal","crunch","hollow","v-up","sit up"])?(o="supine",i.push("Postura boca arriba")):$e(n,["boca abajo","superman","lumbar","espinal"])?(o="prone",i.push("Postura boca abajo")):$e(n,["sentado","seated","giro ruso","russian"])&&(o="seated",i.push("Postura sentada")),a==="none"&&o!=="standing"&&(a="mat");const l=ct(o),c=ct(o);let h=o==="standing"?"three_quarter":"low_side",f=!1;if($e(n,["sentadilla","squat","silla"])){f=!0,i.push("Flexión de piernas (sentadilla)");const u=$e(n,["sumo","abierta"]);l.leftHipOut=u?28:8,l.rightHipOut=u?28:8,c.pelvisOffsetY=-.34,c.torsoPitch=18,c.leftHipFlex=82,c.rightHipFlex=r?25:82,c.leftHipOut=u?34:10,c.rightHipOut=u?34:10,c.leftKneeFlex=96,c.rightKneeFlex=r?10:96,c.leftArmLift=65,c.rightArmLift=65,(a==="dumbbells"||a==="kettlebell")&&(l.leftArmLift=45,l.rightArmLift=45,l.leftElbowFlex=95,l.rightElbowFlex=95,c.leftArmLift=55,c.rightArmLift=55,c.leftElbowFlex=95,c.rightElbowFlex=95)}else $e(n,["zancada","estocada","lunge","bulgara"])?(f=!0,i.push("Zancada"),h="side",c.pelvisOffsetY=-.26,c.leftHipFlex=78,c.leftKneeFlex=85,c.rightHipFlex=-22,c.rightKneeFlex=88,c.leftArmLift=45,c.rightArmLift=45):$e(n,["flexion","pushup","push-up","lagartija"])?(f=!0,o="plank",a="mat",h="low_side",i.push("Flexiones en suelo"),Object.assign(l,ct("plank")),Object.assign(c,ct("plank"),{pelvisOffsetY:-.2,leftArmLift:58,rightArmLift:58,leftArmOut:28,rightArmOut:28,leftElbowFlex:105,rightElbowFlex:105})):$e(n,["remo","row"])?(f=!0,a==="none"&&(a="dumbbells"),h="three_quarter",i.push("Tracción / Remo"),l.pelvisOffsetY=-.06,l.torsoPitch=38,l.headPitch=-25,l.leftHipFlex=42,l.rightHipFlex=42,l.leftKneeFlex=24,l.rightKneeFlex=24,l.leftArmLift=45,l.rightArmLift=45,Object.assign(c,l),c.leftArmLift=-10,c.leftElbowFlex=92,r?(l.rightArmLift=-10,l.rightElbowFlex=92,c.rightArmLift=45,c.rightElbowFlex=10):(c.rightArmLift=-10,c.rightElbowFlex=92)):$e(n,["curl","bicep"])?(f=!0,a==="none"&&(a="dumbbells"),i.push("Flexión de bíceps"),l.leftElbowFlex=12,l.rightElbowFlex=r?128:12,c.leftElbowFlex=128,c.rightElbowFlex=r?12:128):$e(n,["press","hombro","militar","empuje arriba"])?(f=!0,a==="none"&&(a="dumbbells"),i.push("Empuje vertical sobre cabeza"),l.leftArmLift=42,l.rightArmLift=42,l.leftArmOut=30,l.rightArmOut=30,l.leftElbowFlex=105,l.rightElbowFlex=105,c.leftArmLift=172,c.rightArmLift=r?42:172,c.leftArmOut=10,c.rightArmOut=r?30:10,c.leftElbowFlex=8,c.rightElbowFlex=r?105:8):$e(n,["lateral","vuelo","pajaro","abduccion brazo"])?(f=!0,a==="none"&&(a="dumbbells"),h="front",i.push("Elevación lateral"),l.leftArmOut=10,l.rightArmOut=10,c.leftArmOut=88,c.rightArmOut=88,c.leftElbowFlex=16,c.rightElbowFlex=16):$e(n,["peso muerto","deadlift","buenos dias","good morning","bisagra"])?(f=!0,h="side",i.push("Bisagra de cadera"),c.pelvisOffsetY=-.06,c.torsoPitch=58,c.headPitch=-28,c.leftHipFlex=58,c.rightHipFlex=58,c.leftKneeFlex=20,c.rightKneeFlex=20,c.leftArmLift=58,c.rightArmLift=58):$e(n,["patada","kick","rodillazo","rodilla"])?(f=!0,h="three_quarter",i.push("Patada / elevación de pierna"),l.leftArmLift=55,l.rightArmLift=55,l.leftElbowFlex=95,l.rightElbowFlex=95,Object.assign(c,l),c.leftHipFlex=95,c.leftKneeFlex=$e(n,["rodilla","knee"])?95:10):$e(n,["salto","jump","tijera","jack","skipping"])?(f=!0,h="front",i.push("Salto dinámico"),c.pelvisOffsetY=.14,c.leftArmOut=145,c.rightArmOut=145,c.leftHipOut=26,c.rightHipOut=26):$e(n,["giro","rotacion","twist","lenador","oblicuo"])?(f=!0,i.push("Rotación de tronco"),l.torsoTwist=-38,l.leftArmLift=65,l.rightArmLift=65,l.leftElbowFlex=45,l.rightElbowFlex=45,Object.assign(c,l),c.torsoTwist=38):$e(n,["abdominal","crunch","encogimiento","sit up"])?(f=!0,o="supine",a="mat",h="low_side",i.push("Flexión abdominal"),Object.assign(l,ct("supine"),{leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112,leftArmLift:90,rightArmLift:90,leftElbowFlex:110,rightElbowFlex:110}),Object.assign(c,l,{torsoPitch:36,headPitch:25})):$e(n,["elevacion","elevar","subir","levantar"])&&(f=!0,i.push("Elevación controlada"),$e(n,["pierna","leg","rodilla"])?(c.leftHipFlex=78,c.rightHipFlex=r?0:78):(c.leftArmLift=155,c.rightArmLift=r?10:155));return s&&f&&(i.push("Variante isométrica"),Object.assign(l,c),c.pelvisOffsetY=Math.min(.3,c.pelvisOffsetY+.02),c.torsoPitch=Math.min(90,c.torsoPitch+2)),{spec:{title:e,posture:o,prop:a,camera:h,frameDelayMs:s?95:80,isometricPulse:s,poseA:l,poseB:c},matchedNotes:i.length>0?i:["Postura base sugerida (ajusta Pose A y Pose B a tu gusto)"],confidence:f?"high":i.length>0?"medium":"low"}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="187",wM=0,cm=1,bM=2,pl=1,Gx=2,_a=3,Zr=0,En=1,gi=2,Us=0,Pa=1,um=2,dm=3,fm=4,AM=5,xs=100,TM=101,RM=102,CM=103,PM=104,LM=200,NM=201,DM=202,IM=203,Hx=204,Vx=205,FM=206,UM=207,OM=208,BM=209,kM=210,zM=211,GM=212,HM=213,VM=214,Td=0,Rd=1,Cd=2,$a=3,Pd=4,Ld=5,Nd=6,Dd=7,Wx=0,WM=1,jM=2,Bi=0,jx=1,Xx=2,qx=3,ph=4,Yx=5,$x=6,Kx=7,Zx=300,js=301,Ka=302,su=303,au=304,Id=1e3,Fi=1001,Fd=1002,Kt=1003,XM=1004,Do=1005,_n=1006,ou=1007,ur=1008,Rn=1009,Jx=1010,Qx=1011,Za=1012,mh=1013,Mi=1014,xi=1015,Ei=1016,gh=1017,xh=1018,Xs=1020,ev=35902,tv=35899,nv=1021,iv=1022,vi=1023,wr=1026,dr=1027,rv=1028,vh=1029,Jr=1030,_h=1031,Sh=1033,ml=33776,gl=33777,xl=33778,vl=33779,Ud=35840,Od=35841,Bd=35842,kd=35843,zd=36196,Gd=37492,Hd=37496,Vd=37488,Wd=37489,Xl=37490,jd=37491,Xd=37808,qd=37809,Yd=37810,$d=37811,Kd=37812,Zd=37813,Jd=37814,Qd=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,af=37821,of=36492,lf=36494,cf=36495,uf=36283,df=36284,ql=36285,ff=36286,qM=3200,hf=0,YM=1,ar="",zn="srgb",Yl="srgb-linear",$l="linear",at="srgb",lu=7680,$M=519,KM=512,ZM=513,JM=514,sv=515,QM=516,e1=517,av=518,ov=519,t1=35044,hm="300 es",ii=2e3,Ja=2001;function n1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function i1(){const t=Kl("canvas");return t.style.display="block",t}const pm={};function mm(...t){const e="THREE."+t.shift();console.log(e,...t)}function lv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=lv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=lv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function _l(...t){const e=t.join(" ");e in pm||(pm[e]=!0,Ie(...t))}function r1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const s1={[Td]:Td,[Cd]:Nd,[Pd]:Pd,[$a]:Ld,[Rd]:Rd,[Nd]:Cd,[Dd]:Dd,[Ld]:$a};class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,pf=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function a1(t,e){return(t%e+e)%e}function uu(t,e,n){return(1-n)*t+n*e}function o1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yh(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function l1(t,e){if(e.constructor===Float32Array)return t;const n=yh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function c1(t,e){if(e.constructor===Float32Array)return t;const n=yh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Ch=class Ch{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;let Ne=Ch;class Js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],m=s[a+2],_=s[a+3];if(f!==_||l!==u||c!==p||h!==m){let g=l*u+c*p+h*m+f*_;g<0&&(u=-u,p=-p,m=-m,_=-_,g=-g);let d=1-o;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);d=Math.sin(d*v)/S,o=Math.sin(o*v)/S,l=l*d+u*o,c=c*d+p*o,h=h*d+m*o,f=f*d+_*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+m*o,f=f*d+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+h*f+l*p-c*u,e[n+1]=l*m+h*u+c*f-o*p,e[n+2]=c*m+h*p+o*u-l*f,e[n+3]=h*m-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f+u*p*m;break;case"YZX":this._x=u*h*f+c*p*m,this._y=c*p*f+u*h*m,this._z=c*h*m-u*p*f,this._w=c*h*f-u*p*m;break;case"XZY":this._x=u*h*f-c*p*m,this._y=c*p*f-u*h*m,this._z=c*h*m+u*p*f,this._w=c*h*f+u*p*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ph=class Ph{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;let q=Ph;const du=new q,gm=new Js,Lh=class Lh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],m=i[8],_=r[0],g=r[3],d=r[6],v=r[1],S=r[4],M=r[7],b=r[2],E=r[5],x=r[8];return s[0]=a*_+o*v+l*b,s[3]=a*g+o*S+l*E,s[6]=a*d+o*M+l*x,s[1]=c*_+h*v+f*b,s[4]=c*g+h*S+f*E,s[7]=c*d+h*M+f*x,s[2]=u*_+p*v+m*b,s[5]=u*g+p*S+m*E,s[8]=u*d+p*M+m*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,p=c*s-a*l,m=n*f+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=u*_,e[4]=(h*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return _l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fu.makeScale(e,n)),this}rotate(e){return _l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fu.makeRotation(-e)),this}translate(e,n){return _l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;let Ue=Lh;const fu=new Ue,xm=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u1(){const t={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?$l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yl]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const Ze=u1();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class d1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Kl("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f1=0;class Mh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hu(r[a].image)):s.push(hu(r[a]))}else s=hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?d1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let h1=0;const pu=new q;class hn extends ns{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Fi,r=Fi,s=_n,a=ur,o=vi,l=Rn,c=hn.DEFAULT_ANISOTROPY,h=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=so(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pu).x}get height(){return this.source.getSize(pu).y}get depth(){return this.source.getSize(pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Zx;hn.DEFAULT_ANISOTROPY=1;const Nh=class Nh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],m=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,M=(p+1)/2,b=(d+1)/2,E=(h+u)/4,x=(f+_)/4,y=(m+g)/4;return S>M&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=x/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=x/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;let yt=Nh;class p1 extends ns{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Mh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends p1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class cv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m1 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ql=class Ql{constructor(e,n,i,r,s,a,o,l,c,h,f,u,p,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,u,p,m,_,g)}set(e,n,i,r,s,a,o,l,c,h,f,u,p,m,_,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=m,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*f,m=o*h,_=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+m*c,n[5]=u-_*c,n[9]=-o*l,n[2]=_-u*c,n[6]=m+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,m=c*h,_=c*f;n[0]=u+_*o,n[4]=m*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=p*o-m,n[6]=_+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,m=c*h,_=c*f;n[0]=u-_*o,n[4]=-a*f,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*h,n[9]=_-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*f,m=o*h,_=o*f;n[0]=l*h,n[4]=m*c-p,n[8]=u*c+_,n[1]=l*f,n[5]=_*c+u,n[9]=p*c-m,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,m=o*l,_=o*c;n[0]=l*h,n[4]=_-u*f,n[8]=m*f+p,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*f+m,n[10]=u-_*f}else if(e.order==="XZY"){const u=a*l,p=a*c,m=o*l,_=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+_,n[5]=a*h,n[9]=p*f-m,n[2]=m*f-p,n[6]=o*h,n[10]=_*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g1,e,x1)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Yi.crossVectors(i,bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Yi.crossVectors(i,bn)),Yi.normalize(),Io.crossVectors(bn,Yi),r[0]=Yi.x,r[4]=Io.x,r[8]=bn.x,r[1]=Yi.y,r[5]=Io.y,r[9]=bn.y,r[2]=Yi.z,r[6]=Io.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],m=i[2],_=i[6],g=i[10],d=i[14],v=i[3],S=i[7],M=i[11],b=i[15],E=r[0],x=r[4],y=r[8],C=r[12],R=r[1],D=r[5],I=r[9],G=r[13],P=r[2],O=r[6],K=r[10],z=r[14],H=r[3],B=r[7],j=r[11],N=r[15];return s[0]=a*E+o*R+l*P+c*H,s[4]=a*x+o*D+l*O+c*B,s[8]=a*y+o*I+l*K+c*j,s[12]=a*C+o*G+l*z+c*N,s[1]=h*E+f*R+u*P+p*H,s[5]=h*x+f*D+u*O+p*B,s[9]=h*y+f*I+u*K+p*j,s[13]=h*C+f*G+u*z+p*N,s[2]=m*E+_*R+g*P+d*H,s[6]=m*x+_*D+g*O+d*B,s[10]=m*y+_*I+g*K+d*j,s[14]=m*C+_*G+g*z+d*N,s[3]=v*E+S*R+M*P+b*H,s[7]=v*x+S*D+M*O+b*B,s[11]=v*y+S*I+M*K+b*j,s[15]=v*C+S*G+M*z+b*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],m=e[3],_=e[7],g=e[11],d=e[15],v=l*p-c*u,S=o*p-c*f,M=o*u-l*f,b=a*p-c*h,E=a*u-l*h,x=a*f-o*h;return n*(_*v-g*S+d*M)-i*(m*v-g*b+d*E)+r*(m*S-_*b+d*x)-s*(m*M-_*E+g*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],m=e[12],_=e[13],g=e[14],d=e[15],v=n*o-i*a,S=n*l-r*a,M=n*c-s*a,b=i*l-r*o,E=i*c-s*o,x=r*c-s*l,y=h*_-f*m,C=h*g-u*m,R=h*d-p*m,D=f*g-u*_,I=f*d-p*_,G=u*d-p*g,P=v*G-S*I+M*D+b*R-E*C+x*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=(o*G-l*I+c*D)*O,e[1]=(r*I-i*G-s*D)*O,e[2]=(_*x-g*E+d*b)*O,e[3]=(u*E-f*x-p*b)*O,e[4]=(l*R-a*G-c*C)*O,e[5]=(n*G-r*R+s*C)*O,e[6]=(g*M-m*x-d*S)*O,e[7]=(h*x-u*M+p*S)*O,e[8]=(a*I-o*R+c*y)*O,e[9]=(i*R-n*I-s*y)*O,e[10]=(m*E-_*M+d*v)*O,e[11]=(f*M-h*E-p*v)*O,e[12]=(o*C-a*D-l*y)*O,e[13]=(n*D-i*C+r*y)*O,e[14]=(_*S-m*b-g*v)*O,e[15]=(h*b-f*S+u*v)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,u=s*c,p=s*h,m=s*f,_=a*h,g=a*f,d=o*f,v=l*c,S=l*h,M=l*f,b=i.x,E=i.y,x=i.z;return r[0]=(1-(_+d))*b,r[1]=(p+M)*b,r[2]=(m-S)*b,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(u+d))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(m+S)*x,r[9]=(g-v)*x,r[10]=(1-(u+_))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),l=as.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$n.copy(this);const c=1/a,h=1/o,f=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,n.setFromRotationMatrix($n),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ii,l=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===ii)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ja)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ii,l=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===ii)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ja)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ql.prototype.isMatrix4=!0;let Et=Ql;const as=new q,$n=new Et,g1=new q(0,0,0),x1=new q(1,1,1),Yi=new q,Io=new q,bn=new q,_m=new Et,Sm=new Js;class br{constructor(e=0,n=0,i=0,r=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v1=0;const ym=new q,os=new Js,bi=new Et,Fo=new q,ca=new q,_1=new q,S1=new Js,Mm=new q(1,0,0),Em=new q(0,1,0),wm=new q(0,0,1),bm={type:"added"},y1={type:"removed"},ls={type:"childadded",child:null},mu={type:"childremoved",child:null};class Jt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new q,n=new br,i=new Js,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ue}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fo.copy(e):Fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ca,Fo,this.up):bi.lookAt(Fo,ca,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(bi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),ls.child=e,this.dispatchEvent(ls),ls.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(y1),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,_1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,S1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jt.DEFAULT_UP=new q(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class It extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new It;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=a1(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=xu(a,s,e+1/3),this.g=xu(a,s,e),this.b=xu(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=dv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Ze.workingToColorSpace(an.copy(this),e),Math.round(Ke(an.r*255,0,255))*65536+Math.round(Ke(an.g*255,0,255))*256+Math.round(Ke(an.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=zn){Ze.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Uo);const i=uu($i.h,Uo.h,n),r=uu($i.s,Uo.s,n),s=uu($i.l,Uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Je;Je.NAMES=dv;class E1 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kn=new q,Ai=new q,vu=new q,Ti=new q,cs=new q,us=new q,Am=new q,_u=new q,Su=new q,yu=new q,Mu=new yt,Eu=new yt,wu=new yt;class ni{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Ai.subVectors(i,n),vu.subVectors(e,n);const a=Kn.dot(Kn),o=Kn.dot(Ai),l=Kn.dot(vu),c=Ai.dot(Ai),h=Ai.dot(vu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Mu.setScalar(0),Eu.setScalar(0),wu.setScalar(0),Mu.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),wu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Mu,s.x),a.addScaledVector(Eu,s.y),a.addScaledVector(wu,s.z),a}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ai.subVectors(e,n),Kn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Kn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;cs.subVectors(r,i),us.subVectors(s,i),_u.subVectors(e,i);const l=cs.dot(_u),c=us.dot(_u);if(l<=0&&c<=0)return n.copy(i);Su.subVectors(e,r);const h=cs.dot(Su),f=us.dot(Su);if(h>=0&&f<=h)return n.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),n.copy(i).addScaledVector(cs,a);yu.subVectors(e,s);const p=cs.dot(yu),m=us.dot(yu);if(m>=0&&p<=m)return n.copy(s);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(us,o);const g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return Am.subVectors(s,r),o=(f-h)/(f-h+(p-m)),n.copy(r).addScaledVector(Am,o);const d=1/(g+_+u);return a=_*d,o=u*d,n.copy(i).addScaledVector(cs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Bo.subVectors(this.max,ua),ds.subVectors(e.a,ua),fs.subVectors(e.b,ua),hs.subVectors(e.c,ua),Ki.subVectors(fs,ds),Zi.subVectors(hs,fs),Nr.subVectors(ds,hs);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Nr.z,Nr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Nr.z,0,-Nr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Nr.y,Nr.x,0];return!bu(n,ds,fs,hs,Bo)||(n=[1,0,0,0,1,0,0,0,1],!bu(n,ds,fs,hs,Bo))?!1:(ko.crossVectors(Ki,Zi),n=[ko.x,ko.y,ko.z],bu(n,ds,fs,hs,Bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new q,new q,new q,new q,new q,new q,new q,new q],Zn=new q,Oo=new ao,ds=new q,fs=new q,hs=new q,Ki=new q,Zi=new q,Nr=new q,ua=new q,Bo=new q,ko=new q,Dr=new q;function bu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Dr.fromArray(t,s);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=n.dot(Dr),h=i.dot(Dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ct=new q,zo=new Ne;let w1=0;class jr extends ns{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=t1,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?yh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):l1(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):c1(e,this.array)}}class fv extends jr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class hv extends jr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class rt extends jr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const b1=new ao,da=new q,Au=new q;class Eh{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):b1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const n=da.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Au)),this.expandByPoint(da.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A1=0;const Bn=new Et,Tu=new Jt,ps=new q,An=new ao,fa=new ao,Ht=new q;class wn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n1(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(An.min,fa.min),An.expandByPoint(Ht),Ht.addVectors(An.max,fa.max),An.expandByPoint(Ht)):(An.expandByPoint(fa.min),An.expandByPoint(fa.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),Ht.add(ps)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new q,l[C]=new q;const h=new q,f=new q,u=new q,p=new Ne,m=new Ne,_=new Ne,g=new q,d=new q;function v(C,R,D){c[C]=c[R]=c[D]=1,h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,R),_.fromBufferAttribute(s,D),f.sub(h),u.sub(h),m.sub(p),_.sub(p);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(g.copy(f).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(I),d.copy(u).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(I),o[C].add(g),o[R].add(g),o[D].add(g),l[C].add(d),l[R].add(d),l[D].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,R=S.length;C<R;++C){const D=S[C],I=D.start,G=D.count;for(let P=I,O=I+G;P<O;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const M=new q,b=new q,E=new q,x=new q;function y(C){E.fromBufferAttribute(r,C),x.copy(E);const R=o[C];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),b.crossVectors(x,R);const I=b.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,I)}for(let C=0,R=i.count;C<R;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new jr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,h=new q,f=new q;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)u[m++]=c[p++]}return new jr(u,h,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new q,T1=new q,R1=new Ue;class nr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ru.subVectors(i,n).cross(T1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ru),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||R1.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let C1=0;class oo extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Pa,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hx,this.blendDst=Vx,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$M,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lu,this.stencilZFail=lu,this.stencilZPass=lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new nr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new q,Cu=new q,Go=new q,Ho=new q;class P1{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),Go.copy(n).sub(e).normalize(),Ho.copy(this.origin).sub(Cu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Go),o=Ho.dot(this.direction),l=-Ho.dot(Go),c=Ho.lengthSq(),h=Math.abs(1-a*a);let f,u,p,m;if(h>0)if(f=a*l-o,u=a*o-l,m=s*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cu).addScaledVector(Go,u),p}intersectSphere(e,n){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,m=n.x-a.x,_=n.y-a.y,g=n.z-a.z,d=i.x-a.x,v=i.y-a.y,S=i.z-a.z,M=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let x,y,C,R,D,I,G,P,O,K,z,H;if(M>=b&&M>=E?(C=l,I=f,O=m,H=d,l>=0?(x=c,y=h,R=u,D=p,G=_,P=g,K=v,z=S):(x=h,y=c,R=p,D=u,G=g,P=_,K=S,z=v)):b>=E?(C=c,I=u,O=_,H=v,c>=0?(x=h,y=l,R=p,D=f,G=g,P=m,K=S,z=d):(x=l,y=h,R=f,D=p,G=m,P=g,K=d,z=S)):(C=h,I=p,O=g,H=S,h>=0?(x=l,y=c,R=f,D=u,G=m,P=_,K=d,z=v):(x=c,y=l,R=u,D=f,G=_,P=m,K=v,z=d)),C===0)return null;const B=x/C,j=y/C,N=1/C,te=R-B*I,Me=D-j*I,X=G-B*O,ie=P-j*O,le=K-B*H,ve=z-j*H,re=le*ie-ve*X,Pe=te*ve-Me*le,it=X*Me-ie*te;if(r){if(re<0||Pe<0||it<0)return null}else if((re<0||Pe<0||it<0)&&(re>0||Pe>0||it>0))return null;const Te=re+Pe+it;if(Te===0)return null;const ze=N*(re*I+Pe*O+it*H);return(Te>0?ze<0:ze>0)?null:this.at(ze/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pv extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tm=new Et,Ir=new P1,Vo=new Eh,Rm=new q,Wo=new q,jo=new q,Xo=new q,Pu=new q,qo=new q,Cm=new q,Yo=new q;class je extends Jt{constructor(e=new wn,n=new pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Pu.fromBufferAttribute(f,e),a?qo.addScaledVector(Pu,h):qo.addScaledVector(Pu.sub(n),h))}n.add(qo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Vo.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Vo,Rm)===null||Ir.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Tm.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Tm),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],d=a[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,b=S;M<b;M+=3){const E=o.getX(M),x=o.getX(M+1),y=o.getX(M+2);r=$o(this,d,e,i,c,h,f,E,x,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){const v=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);r=$o(this,a,e,i,c,h,f,v,S,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],d=a[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,b=S;M<b;M+=3){const E=M,x=M+1,y=M+2;r=$o(this,d,e,i,c,h,f,E,x,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){const v=g,S=g+1,M=g+2;r=$o(this,a,e,i,c,h,f,v,S,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function L1(t,e,n,i,r,s,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zr,o),l===null)return null;Yo.copy(o),Yo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Yo);return c<n.near||c>n.far?null:{distance:c,point:Yo.clone(),object:t}}function $o(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Wo),t.getVertexPosition(l,jo),t.getVertexPosition(c,Xo);const h=L1(t,e,n,i,Wo,jo,Xo,Cm);if(h){const f=new q;ni.getBarycoord(Cm,Wo,jo,Xo,f),r&&(h.uv=ni.getInterpolatedAttribute(r,o,l,c,f,new Ne)),s&&(h.uv1=ni.getInterpolatedAttribute(s,o,l,c,f,new Ne)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,l,c,f,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new q,materialIndex:0};ni.getNormal(Wo,jo,Xo,u.normal),h.face=u,h.barycoord=f}return h}class N1 extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Kt,h=Kt,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fr=new Eh,D1=new Ne(.5,.5),Ko=new q;class Qa{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,a=new nr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],p=s[7],m=s[8],_=s[9],g=s[10],d=s[11],v=s[12],S=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-a,p-h,d-m,b-v).normalize(),r[1].setComponents(c+a,p+h,d+m,b+v).normalize(),r[2].setComponents(c+o,p+f,d+_,b+S).normalize(),r[3].setComponents(c-o,p-f,d-_,b-S).normalize(),i)r[4].setComponents(l,u,g,M).normalize(),r[5].setComponents(c-l,p-u,d-g,b-M).normalize();else if(r[4].setComponents(c-l,p-u,d-g,b-M).normalize(),n===ii)r[5].setComponents(c+l,p+u,d+g,b+M).normalize();else if(n===Ja)r[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const n=D1.distanceTo(e.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Pm=new Et;class wh{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Pm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Qa),i[r].setFromProjectionMatrix(Pm,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Qa),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new wh().copy(this)}}class mv extends hn{constructor(e=[],n=js,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qs extends hn{constructor(e,n,i=Mi,r,s,a,o=Kt,l=Kt,c,h=wr,f=1){if(h!==wr&&h!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class gv extends qs{constructor(e,n=Mi,i=js,r,s,a=Kt,o=Kt,l,c=wr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xv extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sr extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2));function m(_,g,d,v,S,M,b,E,x,y,C){const R=M/x,D=b/y,I=M/2,G=b/2,P=E/2,O=x+1,K=y+1;let z=0,H=0;const B=new q;for(let j=0;j<K;j++){const N=j*D-G;for(let te=0;te<O;te++){const Me=te*R-I;B[_]=Me*v,B[g]=N*S,B[d]=P,c.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[d]=E>0?1:-1,h.push(B.x,B.y,B.z),f.push(te/x),f.push(1-j/y),z+=1}}for(let j=0;j<y;j++)for(let N=0;N<x;N++){const te=u+N+O*j,Me=u+N+O*(j+1),X=u+(N+1)+O*(j+1),ie=u+(N+1)+O*j;l.push(te,Me,ie),l.push(Me,X,ie),H+=6}o.addGroup(p,H,C),p+=H,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zl extends wn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=n/2,f=Math.PI/2*e,u=n,p=2*f+u,m=i*2+s,_=r+1,g=new q,d=new q;for(let v=0;v<=m;v++){let S=0,M=0,b=0,E=0;if(v<=i){const C=v/i,R=C*Math.PI/2;M=-h-e*Math.cos(R),b=e*Math.sin(R),E=-e*Math.cos(R),S=C*f}else if(v<=i+s){const C=(v-i)/s;M=-h+C*n,b=e,E=0,S=f+C*u}else{const C=(v-i-s)/i,R=C*Math.PI/2;M=h+e*Math.sin(R),b=e*Math.cos(R),E=e*Math.sin(R),S=f+u+C*f}const x=Math.max(0,Math.min(1,S/p));let y=0;v===0?y=.5/r:v===m&&(y=-.5/r);for(let C=0;C<=r;C++){const R=C/r,D=R*Math.PI*2,I=Math.sin(D),G=Math.cos(D);d.x=-b*G,d.y=M,d.z=b*I,o.push(d.x,d.y,d.z),g.set(-b*G,E,b*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+y,x)}if(v>0){const C=(v-1)*_;for(let R=0;R<r;R++){const D=C+R,I=C+R+1,G=v*_+R,P=v*_+R+1;a.push(D,I,G),a.push(I,P,G)}}}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class bh extends wn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new q,h=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=n;f++,u+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ir extends wn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let m=0;const _=[],g=i/2;let d=0;v(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(p,2));function v(){const M=new q,b=new q;let E=0;const x=(n-e)/i;for(let y=0;y<=s;y++){const C=[],R=y/s,D=R*(n-e)+e;for(let I=0;I<=r;I++){const G=I/r,P=G*l+o,O=Math.sin(P),K=Math.cos(P);b.x=D*O,b.y=-R*i+g,b.z=D*K,f.push(b.x,b.y,b.z),M.set(O,x,K).normalize(),u.push(M.x,M.y,M.z),p.push(G,1-R),C.push(m++)}_.push(C)}for(let y=0;y<r;y++)for(let C=0;C<s;C++){const R=_[C][y],D=_[C+1][y],I=_[C+1][y+1],G=_[C][y+1];(e>0||C!==0)&&(h.push(R,D,G),E+=3),(n>0||C!==s-1)&&(h.push(D,I,G),E+=3)}c.addGroup(d,E,0),d+=E}function S(M){const b=m,E=new Ne,x=new q;let y=0;const C=M===!0?e:n,R=M===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,g*R,0),u.push(0,R,0),p.push(.5,.5),m++;const D=m;for(let I=0;I<=r;I++){const P=I/r*l+o,O=Math.cos(P),K=Math.sin(P);x.x=C*K,x.y=g*R,x.z=C*O,f.push(x.x,x.y,x.z),u.push(0,R,0),E.x=O*.5+.5,E.y=K*.5*R+.5,p.push(E.x,E.y),m++}for(let I=0;I<r;I++){const G=b+I,P=D+I;M===!0?h.push(P,P+1,G):h.push(P+1,P,G),y+=3}c.addGroup(d,y,M===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends wn{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Ke(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/n,f=new q,u=new Ne,p=new q,m=new q,_=new q;let g=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-g,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-g,p.z=d*0,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(m)}for(let v=0;v<=n;v++){const S=i+v*h*r,M=Math.sin(S),b=Math.cos(S);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*M,f.y=e[E].y,f.z=e[E].x*b,a.push(f.x,f.y,f.z),u.x=v/n,u.y=E/(e.length-1),o.push(u.x,u.y);const x=l[3*E+0]*M,y=l[3*E+1],C=l[3*E+0]*b;c.push(x,y,C)}}for(let v=0;v<n;v++)for(let S=0;S<e.length-1;S++){const M=S+v*e.length,b=M,E=M+e.length,x=M+e.length+1,y=M+1;s.push(b,E,y),s.push(x,y,E)}this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.points,e.segments,e.phiStart,e.phiLength)}}class yc extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=n/l,p=[],m=[],_=[],g=[];for(let d=0;d<h;d++){const v=d*u-a;for(let S=0;S<c;S++){const M=S*f-s;m.push(M,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const S=v+c*d,M=v+c*(d+1),b=v+1+c*(d+1),E=v+1+c*d;p.push(S,M,E),p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ah extends wn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let f=e;const u=(n-e)/r,p=new q,m=new Ne;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const d=s+g/i*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,h.push(m.x,m.y)}f+=u}for(let _=0;_<r;_++){const g=_*(i+1);for(let d=0;d<i;d++){const v=d+g,S=v,M=v+i+1,b=v+i+2,E=v+1;o.push(S,M,E),o.push(M,b,E)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Li extends wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new q,u=new q,p=[],m=[],_=[],g=[];for(let d=0;d<=i;d++){const v=[],S=d/i,M=a+S*o,b=e*Math.cos(M),E=Math.sqrt(e*e-b*b);let x=0;d===0&&a===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let y=0;y<=n;y++){const C=y/n,R=r+C*s;f.x=-E*Math.cos(R),f.y=b,f.z=E*Math.sin(R),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(C+x,1-S),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const S=h[d][v+1],M=h[d][v],b=h[d+1][v],E=h[d+1][v+1];(d!==0||a>0)&&p.push(S,M,E),(d!==i-1||l<Math.PI)&&p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Th extends wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],f=[],u=new q,p=new q,m=new q;for(let _=0;_<=i;_++){const g=a+_/i*o;for(let d=0;d<=r;d++){const v=d/r*s;p.x=(e+n*Math.cos(g))*Math.cos(v),p.y=(e+n*Math.cos(g))*Math.sin(v),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),m.subVectors(p,u).normalize(),h.push(m.x,m.y,m.z),f.push(d/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=r;g++){const d=(r+1)*_+g-1,v=(r+1)*(_-1)+g-1,S=(r+1)*(_-1)+g,M=(r+1)*_+g;l.push(d,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Lm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Lm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function Lm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function I1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const F1={clone:Ys,merge:un};var U1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U1,this.fragmentShader=O1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=I1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class B1 extends Qr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kn extends oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hf,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k1 extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z1 extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _v extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class G1 extends _v{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Lu=new Et,Nm=new q,Dm=new q;class H1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nm),Dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ja||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zo=new q,Jo=new Js,ci=new q;class Sv extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Zo,Jo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new q,Im=new Ne,Fm=new Ne;class ti extends Sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,Im,Fm),n.subVectors(Fm,Im)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class yv extends Sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class V1 extends H1{constructor(){super(new yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nu extends _v{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new V1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const ms=-90,gs=1;class mf extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ti(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new ti(ms,gs,e,n);s.layers=this.layers,this.add(s);const a=new ti(ms,gs,e,n);a.layers=this.layers,this.add(a);const o=new ti(ms,gs,e,n);o.layers=this.layers,this.add(o);const l=new ti(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new ti(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class W1 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Um(t,e,n,i){const r=j1(i);switch(n){case nv:return t*e;case rv:return t*e/r.components*r.byteLength;case vh:return t*e/r.components*r.byteLength;case Jr:return t*e*2/r.components*r.byteLength;case _h:return t*e*2/r.components*r.byteLength;case iv:return t*e*3/r.components*r.byteLength;case vi:return t*e*4/r.components*r.byteLength;case Sh:return t*e*4/r.components*r.byteLength;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:case kd:return Math.max(t,16)*Math.max(e,8)/4;case Ud:case Bd:return Math.max(t,8)*Math.max(e,8)/2;case zd:case Gd:case Vd:case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hd:case Xl:case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case af:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case of:case lf:case cf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uf:case df:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ql:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function j1(t){switch(t){case Rn:case Jx:return{byteLength:1,components:1};case Za:case Qx:case Ei:return{byteLength:2,components:1};case gh:case xh:return{byteLength:2,components:4};case Mi:case mh:case xi:return{byteLength:4,components:1};case ev:case tv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function X1(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){const m=f[u],_=f[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){const _=f[p];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,BE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aw=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,db=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:q1,alphahash_pars_fragment:Y1,alphamap_fragment:$1,alphamap_pars_fragment:K1,alphatest_fragment:Z1,alphatest_pars_fragment:J1,aomap_fragment:Q1,aomap_pars_fragment:eE,batching_pars_vertex:tE,batching_vertex:nE,begin_vertex:iE,beginnormal_vertex:rE,bsdfs:sE,iridescence_fragment:aE,bumpmap_pars_fragment:oE,clipping_planes_fragment:lE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:dE,color_fragment:fE,color_pars_fragment:hE,color_pars_vertex:pE,color_vertex:mE,common:gE,defaultnormal_vertex:xE,displacementmap_pars_vertex:vE,displacementmap_vertex:_E,emissivemap_fragment:SE,emissivemap_pars_fragment:yE,colorspace_fragment:ME,colorspace_pars_fragment:EE,envmap_fragment:wE,envmap_common_pars_fragment:bE,envmap_pars_fragment:AE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:BE,envmap_vertex:RE,fog_vertex:CE,fog_pars_vertex:PE,fog_fragment:LE,fog_pars_fragment:NE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:IE,lights_lambert_fragment:FE,lights_lambert_pars_fragment:UE,lights_pars_begin:OE,lights_toon_fragment:kE,lights_toon_pars_fragment:zE,lights_phong_fragment:GE,lights_phong_pars_fragment:HE,lights_physical_fragment:VE,lights_physical_pars_fragment:WE,lights_fragment_begin:jE,lights_fragment_maps:XE,lights_fragment_end:qE,lightprobes_pars_fragment:YE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:KE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:JE,map_fragment:QE,map_pars_fragment:ew,map_particle_fragment:tw,map_particle_pars_fragment:nw,metalnessmap_fragment:iw,metalnessmap_pars_fragment:rw,morphinstance_vertex:sw,morphcolor_vertex:aw,morphnormal_vertex:ow,morphtarget_pars_vertex:lw,morphtarget_vertex:cw,normal_fragment_begin:uw,normal_fragment_maps:dw,normal_pars_fragment:fw,normal_pars_vertex:hw,normal_vertex:pw,normalmap_pars_fragment:mw,clearcoat_normal_fragment_begin:gw,clearcoat_normal_fragment_maps:xw,clearcoat_pars_fragment:vw,iridescence_pars_fragment:_w,opaque_fragment:Sw,packing:yw,premultiplied_alpha_fragment:Mw,project_vertex:Ew,dithering_fragment:ww,dithering_pars_fragment:bw,roughnessmap_fragment:Aw,roughnessmap_pars_fragment:Tw,shadowmap_pars_fragment:Rw,shadowmap_pars_vertex:Cw,shadowmap_vertex:Pw,shadowmask_pars_fragment:Lw,skinbase_vertex:Nw,skinning_pars_vertex:Dw,skinning_vertex:Iw,skinnormal_vertex:Fw,specularmap_fragment:Uw,specularmap_pars_fragment:Ow,tonemapping_fragment:Bw,tonemapping_pars_fragment:kw,transmission_fragment:zw,transmission_pars_fragment:Gw,uv_pars_fragment:Hw,uv_pars_vertex:Vw,uv_vertex:Ww,worldpos_vertex:jw,background_vert:Xw,background_frag:qw,backgroundCube_vert:Yw,backgroundCube_frag:$w,cube_vert:Kw,cube_frag:Zw,depth_vert:Jw,depth_frag:Qw,distance_vert:eb,distance_frag:tb,equirect_vert:nb,equirect_frag:ib,linedashed_vert:rb,linedashed_frag:sb,meshbasic_vert:ab,meshbasic_frag:ob,meshlambert_vert:lb,meshlambert_frag:cb,meshmatcap_vert:ub,meshmatcap_frag:db,meshnormal_vert:fb,meshnormal_frag:hb,meshphong_vert:pb,meshphong_frag:mb,meshphysical_vert:gb,meshphysical_frag:xb,meshtoon_vert:vb,meshtoon_frag:_b,points_vert:Sb,points_frag:yb,shadow_vert:Mb,shadow_frag:Eb,sprite_vert:wb,sprite_frag:bb},Se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},pi={basic:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:un([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:un([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:un([Se.points,Se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:un([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:un([Se.common,Se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:un([Se.sprite,Se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:un([Se.common,Se.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:un([Se.lights,Se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};pi.physical={uniforms:un([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Qo={r:0,b:0,g:0},Ab=new Et,Ev=new Ue;Ev.set(-1,0,0,0,1,0,0,0,1);function Tb(t,e,n,i,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(v){let S=!1;const M=p(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),S=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,S){const M=p(S);M&&M.isCubeTexture?(c===void 0&&(c=new je(new Sr(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:Ys(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ev),c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,(h!==M||f!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new je(new yc(2,2),new Qr({name:"BackgroundMaterial",uniforms:Ys(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(Qo,vv(t)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,S,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:_,dispose:d}}function Rb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(D,I,G,P,O){let K=!1;const z=f(D,P,G,I);s!==z&&(s=z,c(s.object)),K=p(D,P,G,O),K&&m(D,P,G,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(D,I,G,P),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function f(D,I,G,P){const O=P.wireframe===!0;let K=i[I.id];K===void 0&&(K={},i[I.id]=K);const z=D.isInstancedMesh===!0?D.id:0;let H=K[z];H===void 0&&(H={},K[z]=H);let B=H[G.id];B===void 0&&(B={},H[G.id]=B);let j=B[O];return j===void 0&&(j=u(l()),B[O]=j),j}function u(D){const I=[],G=[],P=[];for(let O=0;O<n;O++)I[O]=0,G[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:P,object:D,attributes:{},index:null}}function p(D,I,G,P){const O=s.attributes,K=I.attributes;let z=0;const H=G.getAttributes();for(const B in H)if(H[B].location>=0){const N=O[B];let te=K[B];if(te===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),N===void 0||N.attribute!==te||te&&N.data!==te.data)return!0;z++}return s.attributesNum!==z||s.index!==P}function m(D,I,G,P){const O={},K=I.attributes;let z=0;const H=G.getAttributes();for(const B in H)if(H[B].location>=0){let N=K[B];N===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));const te={};te.attribute=N,N&&N.data&&(te.data=N.data),O[B]=te,z++}s.attributes=O,s.attributesNum=z,s.index=P}function _(){const D=s.newAttributes;for(let I=0,G=D.length;I<G;I++)D[I]=0}function g(D){d(D,0)}function d(D,I){const G=s.newAttributes,P=s.enabledAttributes,O=s.attributeDivisors;G[D]=1,P[D]===0&&(t.enableVertexAttribArray(D),P[D]=1),O[D]!==I&&(t.vertexAttribDivisor(D,I),O[D]=I)}function v(){const D=s.newAttributes,I=s.enabledAttributes;for(let G=0,P=I.length;G<P;G++)I[G]!==D[G]&&(t.disableVertexAttribArray(G),I[G]=0)}function S(D,I,G,P,O,K,z){z===!0?t.vertexAttribIPointer(D,I,G,O,K):t.vertexAttribPointer(D,I,G,P,O,K)}function M(D,I,G,P){_();const O=P.attributes,K=G.getAttributes(),z=I.defaultAttributeValues;for(const H in K){const B=K[H];if(B.location>=0){let j=O[H];if(j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const N=j.normalized,te=j.itemSize,Me=e.get(j);if(Me===void 0)continue;const X=Me.buffer,ie=Me.type,le=Me.bytesPerElement,ve=ie===t.INT||ie===t.UNSIGNED_INT||j.gpuType===mh;if(j.isInterleavedBufferAttribute){const re=j.data,Pe=re.isInterleavedBuffer===!0?re.stride:re.itemSize,it=j.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Te=0;Te<B.locationSize;Te++)d(B.location+Te,re.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<B.locationSize;Te++)g(B.location+Te);t.bindBuffer(t.ARRAY_BUFFER,X);for(let Te=0;Te<B.locationSize;Te++)S(B.location+Te,te/B.locationSize,ie,N,Pe*le,(it+te/B.locationSize*Te)*le,ve)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<B.locationSize;re++)d(B.location+re,j.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<B.locationSize;re++)g(B.location+re);t.bindBuffer(t.ARRAY_BUFFER,X);for(let re=0;re<B.locationSize;re++)S(B.location+re,te/B.locationSize,ie,N,te*le,te/B.locationSize*re*le,ve)}}else if(z!==void 0){const N=z[H];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(B.location,N);break;case 3:t.vertexAttrib3fv(B.location,N);break;case 4:t.vertexAttrib4fv(B.location,N);break;default:t.vertexAttrib1fv(B.location,N)}}}}v()}function b(){C();for(const D in i){const I=i[D];for(const G in I){const P=I[G];for(const O in P){const K=P[O];for(const z in K)h(K[z].object),delete K[z];delete P[O]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const G in I){const P=I[G];for(const O in P){const K=P[O];for(const z in K)h(K[z].object),delete K[z];delete P[O]}}delete i[D.id]}function x(D){for(const I in i){const G=i[I];for(const P in G){const O=G[P];if(O[D.id]===void 0)continue;const K=O[D.id];for(const z in K)h(K[z].object),delete K[z];delete O[D.id]}}}function y(D){for(const I in i){const G=i[I],P=D.isInstancedMesh===!0?D.id:0,O=G[P];if(O!==void 0){for(const K in O){const z=O[K];for(const H in z)h(z[H].object),delete z[H];delete O[K]}delete G[P],Object.keys(G).length===0&&delete i[I]}}}function C(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Cb(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Pb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==vi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const y=x===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Rn&&x!==xi&&!y&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:E}}function Lb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new nr,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,p){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,S=v*4;let M=d.clippingState||null;l.value=M,M=h(m,u,S,p);for(let b=0;b!==S;++b)M[b]=n[b];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const d=p+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let S=0,M=p;S!==_;++S,M+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}class Rh extends yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Sr(5,5,5),s=new Qr({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Us});s.uniforms.tEquirect.value=n;const a=new je(r,s),o=n.minFilter;return n.minFilter===ur&&(n.minFilter=_n),new mf(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Om=256,Nb=3,Db=20,wv=256,bv=16,Ib=3,Fb=new q,Ub=new Je;class Jl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mf(1,10,null),this._boxMesh=new je(new Sr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Fb}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Ub));const g=new mf(i,r,h);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=m,e.background=_,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Om,o1(e))}_fromTexture(e,n){e.mapping===js||e.mapping===Ka?this._setSize(e.image.length===0?Om:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Bm(e,!1,!1),i=Math.log2(e)-Nb;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Bm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===js||e.mapping===Ka?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=km()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ob(),this._integrationMaterial=Bb());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/bv);for(let a=0;a<=i;a++){const o=Jl.lodToRoughness(a,i);if(a>i-Ib)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(wv*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=kb());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Bm(t,e,n){return new Rh(t,{minFilter:ur,generateMipmaps:e,type:Ei,colorSpace:Yl,depthBuffer:n})}function lo(t,e,n){return new Qr({name:t,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:n,side:En,blending:Us,depthTest:!1,depthWrite:!1})}function Ob(){return lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wv}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bb(){return lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bv}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kb(){return lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Db}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function km(){return lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zm(){return lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===su||p===au)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new Rh(m.height);return _.fromEquirectangularTexture(t,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,m=p===su||p===au,_=p===js||p===Ka;if(m||_){let g=n.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Jl(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Jl(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===su?u.mapping=js:p===au&&(u.mapping=Ka),u}function l(u){let p=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Gb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_l("WebGLRenderer: "+i+" extension not supported."),r}}}function Hb(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(m=>delete r[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete r[m.id],a.unregister(m);const _=s.get(m);_&&(e.remove(_),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function c(m,_){return r[_.id]!==void 0||(_.addEventListener("dispose",o),r[_.id]=new WeakRef(_),a.register(_,_.id,_),n.memory.geometries++),_}function h(m){const _=m.attributes;for(const g in _)e.update(_[g],t.ARRAY_BUFFER)}function f(m){const _=m.index,g=m.attributes.position;let d=0;if(g===void 0)return;const v=_!==null?_.array.length:g.array.length/3-1,S=g.count>=65535?hv:fv,M=new S(Math.ceil(v/3)*6,1),b=M.array;if(_!==null){const x=_.array;d=_.version;for(let y=0,C=0;y<v;y+=3){const R=x[y+0],D=x[y+1],I=x[y+2];b[C++]=R,b[C++]=D,b[C++]=D,b[C++]=I,b[C++]=I,b[C++]=R}}else{d=g.version;for(let x=0,y=0;x<v;x+=3){const C=x+0,R=x+1,D=x+2;b[y++]=C,b[y++]=R,b[y++]=R,b[y++]=D,b[y++]=D,b[y++]=C}}M.version=d;const E=s.get(m);E&&e.remove(E),s.set(m,M)}function u(m){const _=s.get(m);if(_){const g=m.index;g!==null&&_.version<g.version&&f(m)}else f(m);return s.get(m)}function p(){for(const m in r){const _=r[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function Vb(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){t.drawElements(i,u,s,f*a),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,f*a,p),n.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let _=0;for(let g=0;g<p;g++)_+=u[g];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jb(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let R=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var p=R;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let b=o.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const x=new Float32Array(b*E*4*f),y=new cv(x,b,E,f);y.type=xi,y.needsUpdate=!0;const C=M*4;for(let D=0;D<f;D++){const I=d[D],G=v[D],P=S[D],O=b*E*4*D;for(let K=0;K<I.count;K++){const z=K*C;m===!0&&(r.fromBufferAttribute(I,K),x[O+z+0]=r.x,x[O+z+1]=r.y,x[O+z+2]=r.z,x[O+z+3]=0),_===!0&&(r.fromBufferAttribute(G,K),x[O+z+4]=r.x,x[O+z+5]=r.y,x[O+z+6]=r.z,x[O+z+7]=0),g===!0&&(r.fromBufferAttribute(P,K),x[O+z+8]=r.x,x[O+z+9]=r.y,x[O+z+10]=r.z,x[O+z+11]=P.itemSize===4?r.w:1)}}u={count:f,texture:y,size:new Ne(b,E)},i.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Xb(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const qb={[jx]:"LINEAR_TONE_MAPPING",[Xx]:"REINHARD_TONE_MAPPING",[qx]:"CINEON_TONE_MAPPING",[ph]:"ACES_FILMIC_TONE_MAPPING",[$x]:"AGX_TONE_MAPPING",[Kx]:"NEUTRAL_TONE_MAPPING",[Yx]:"CUSTOM_TONE_MAPPING"};function Yb(t,e,n,i,r,s){const a=new yi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new wn;h.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new rt([0,2,0,0,2,0],2));const f=new B1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new je(h,f),p=new yv(-1,1,1,-1,0,1);let m=null,_=null,g=!1,d,v=null,S=[],M=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let x=0;x<S.length;x++){const y=S[x];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;const E=a.width,x=a.height;S.length>0&&o===null&&(o=new yi(E,x,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new yi(E,x,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));const y=r===!0&&S.some(C=>C.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new qs(E,x),s===!0&&(c.format=dr,c.type=Xs)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let C=0;C<S.length;C++){const R=S[C];R.setSize&&R.setSize(E,x),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,E){if(g||b.toneMapping===Bi&&S.length===0)return!1;if(v=E,E!==null){const x=E.width,y=E.height;(a.width!==x||a.height!==y)&&this.setSize(x,y)}return M===!1&&b.setRenderTarget(a),d=b.toneMapping,b.toneMapping=Bi,!0},this.hasRenderPass=function(){return M},this.end=function(b,E){b.toneMapping=d,g=!0;let x=a,y=o;for(let C=0;C<S.length;C++){const R=S[C];R.enabled!==!1&&(R.render(b,y,x,E),R.needsSwap!==!1&&(x=y,y=y===o?l:o))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,f.defines={},Ze.getTransfer(m)===at&&(f.defines.SRGB_TRANSFER="");const C=qb[_];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(u,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const Av=new hn,Tv=new qs(1,1),Rv=new gv(1),Cv=new cv,Pv=new m1,Lv=new mv,Gm=[],Hm=[],Vm=new Float32Array(16),Wm=new Float32Array(9),jm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gm[r];if(s===void 0&&(s=new Float32Array(r),Gm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=Hm[e];n===void 0&&(n=new Int32Array(e),Hm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $b(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;jm.set(i),t.uniformMatrix2fv(this.addr,!1,jm),Bt(n,i)}}function eA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Wm.set(i),t.uniformMatrix3fv(this.addr,!1,Wm),Bt(n,i)}}function tA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Vm.set(i),t.uniformMatrix4fv(this.addr,!1,Vm),Bt(n,i)}}function nA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function aA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function Ec(t){return t.version===0&&(t.compareFunction=ov,t.needsUpdate=!0),t}function uA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Ec(Tv):s=Av,n.setTexture2D(e||s,r)}function dA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Pv,r)}function fA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Ec(Rv):s=Lv,n.setTextureCube(e||s,r)}function hA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cv,r)}function pA(t){switch(t){case 5126:return $b;case 35664:return Kb;case 35665:return Zb;case 35666:return Jb;case 35674:return Qb;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return rA;case 35669:case 35673:return sA;case 5125:return aA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}function mA(t,e){t.uniform1fv(this.addr,e)}function gA(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function xA(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function vA(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function _A(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function SA(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yA(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MA(t,e){t.uniform1iv(this.addr,e)}function EA(t,e){t.uniform2iv(this.addr,e)}function wA(t,e){t.uniform3iv(this.addr,e)}function bA(t,e){t.uniform4iv(this.addr,e)}function AA(t,e){t.uniform1uiv(this.addr,e)}function TA(t,e){t.uniform2uiv(this.addr,e)}function RA(t,e){t.uniform3uiv(this.addr,e)}function CA(t,e){t.uniform4uiv(this.addr,e)}function PA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Ec(Tv):a=Av;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function LA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Pv,s[a])}function NA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Ec(Rv):a=Lv;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function DA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Cv,s[a])}function IA(t){switch(t){case 5126:return mA;case 35664:return gA;case 35665:return xA;case 35666:return vA;case 35674:return _A;case 35675:return SA;case 35676:return yA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return wA;case 35669:case 35673:return bA;case 5125:return AA;case 36294:return TA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return PA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return DA}}class FA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pA(n.type)}}class UA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IA(n.type)}}class OA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Xm(t,e){t.seq.push(e),t.map[e.id]=e}function BA(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),a=Du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xm(n,c===void 0?new FA(o,t,e):new UA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new OA(o),Xm(n,f)),n=f}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);BA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function qm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kA=37297;let zA=0;function GA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ym=new Ue;function HA(t){Ze._getMatrix(Ym,Ze.workingColorSpace,t);const e=`mat3( ${Ym.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+GA(t.getShaderSource(e),o)}else return s}function VA(t,e){const n=HA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const WA={[jx]:"Linear",[Xx]:"Reinhard",[qx]:"Cineon",[ph]:"ACESFilmic",[$x]:"AgX",[Kx]:"Neutral",[Yx]:"Custom"};function jA(t,e){const n=WA[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new q;function XA(){Ze.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function YA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $A(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Sa(t){return t!==""}function Km(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(t){return t.replace(KA,ZA)}function ZA(t,e){const n=Ve[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return gf(n)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(t){return t.replace(JA,QA)}function QA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const eT={[pl]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function tT(t){return eT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nT={[Ka]:"ENVMAP_MODE_REFRACTION"};function iT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rT={[Wx]:"ENVMAP_BLENDING_MULTIPLY",[WM]:"ENVMAP_BLENDING_MIX",[jM]:"ENVMAP_BLENDING_ADD"};function sT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rT[t.combine]||"ENVMAP_BLENDING_NONE"}function aT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=tT(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=iT(n),f=sT(n),u=qA(n),p=YA(s),m=r.createProgram();let _,g,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Sa).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Sa).join(`
`),g.length>0&&(g+=`
`)):(_=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),g=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Bi?jA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,VA("linearToOutputTexel",n.outputColorSpace),XA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sa).join(`
`)),a=gf(a),a=Km(a,n),a=Zm(a,n),o=gf(o),o=Km(o,n),o=Zm(o,n),a=Jm(a),o=Jm(o),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=d+_+a,S=d+g+o,M=qm(r,r.VERTEX_SHADER,v),b=qm(r,r.FRAGMENT_SHADER,S);r.attachShader(m,M),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function E(R){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(m)||"",I=r.getShaderInfoLog(M)||"",G=r.getShaderInfoLog(b)||"",P=D.trim(),O=I.trim(),K=G.trim();let z=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,M,b);else{const B=$m(r,M,"vertex"),j=$m(r,b,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+B+`
`+j)}else P!==""?Ie("WebGLProgram: Program Info Log:",P):(O===""||K==="")&&(H=!1);H&&(R.diagnostics={runnable:z,programLog:P,vertexShader:{log:O,prefix:_},fragmentShader:{log:K,prefix:g}})}r.deleteShader(M),r.deleteShader(b),x=new Sl(r,m),y=$A(r,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,kA)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}let oT=0;class lT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cT(e),n.set(e,i)),i}}class cT{constructor(e){this.id=oT++,this.code=e,this.usedTimes=0}}function uT(t){return t===Jr||t===Xl||t===ql}function dT(t,e,n,i,r,s){const a=new uv,o=new lT,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,C,R,D,I){const G=R.fog,P=D.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||O,K),H=u[x.type];let B=i.precision;x.precision!==null&&(B=i.getMaxPrecision(x.precision),B!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,N=j!==void 0?j.length:0;let te=0;P.morphAttributes.position!==void 0&&(te=1),P.morphAttributes.normal!==void 0&&(te=2),P.morphAttributes.color!==void 0&&(te=3);let Me,X,ie,le;if(H){const _e=pi[H];Me=_e.vertexShader,X=_e.fragmentShader}else{Me=x.vertexShader,X=x.fragmentShader;const _e=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,_e,st),ie=_e.id,le=st.id}const ve=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,Te=!!x.map,ze=!!x.matcap,We=!!z,Be=We&&z.isPMREMTexture===!0,Xt=!!x.aoMap,Lt=!!x.lightMap,gn=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,oi=!!x.displacementMap,kt=!!x.emissiveMap,In=!!x.metalnessMap,Fn=!!x.roughnessMap,Un=x.anisotropy>0,k=x.clearcoat>0,On=x.diffuseRoughness>0,pt=x.dispersion>0,mt=x.retroreflectivity>0,xe=x.iridescence>0,Nt=x.sheen>0,De=x.transmission>0,Fe=Un&&!!x.anisotropyMap,L=k&&!!x.clearcoatMap,A=k&&!!x.clearcoatNormalMap,W=k&&!!x.clearcoatRoughnessMap,se=On&&!!x.diffuseRoughnessMap,ne=xe&&!!x.iridescenceMap,ue=xe&&!!x.iridescenceThicknessMap,me=Nt&&!!x.sheenColorMap,J=Nt&&!!x.sheenRoughnessMap,Q=!!x.specularMap,fe=!!x.specularColorMap,F=!!x.specularIntensityMap,ee=De&&!!x.transmissionMap,Z=De&&!!x.thicknessMap,he=!!x.gradientMap,ce=!!x.alphaMap,de=x.alphaTest>0,Ce=!!x.alphaHash,He=!!x.extensions;let oe=Bi;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(oe=t.toneMapping);const Le=Be?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ge={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:X,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:ze,envMap:We,envMapMode:We&&z.mapping,envMapPMREM:Be,envMapMaxLod:Be?Le.length-1:null,envMapSize:Be?Le[0].width:null,aoMap:Xt,lightMap:Lt,bumpMap:gn,normalMap:xt,displacementMap:oi,emissiveMap:kt,normalMapObjectSpace:xt&&x.normalMapType===YM,normalMapTangentSpace:xt&&x.normalMapType===hf,packedNormalMap:xt&&x.normalMapType===hf&&uT(x.normalMap.format),metalnessMap:In,roughnessMap:Fn,anisotropy:Un,anisotropyMap:Fe,clearcoat:k,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:W,diffuseRoughness:On,diffuseRoughnessMap:se,dispersion:pt,retroreflection:mt,iridescence:xe,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:Nt,sheenColorMap:me,sheenRoughnessMap:J,specularMap:Q,specularColorMap:fe,specularIntensityMap:F,transmission:De,transmissionMap:ee,thicknessMap:Z,gradientMap:he,opaque:x.transparent===!1&&x.blending===Pa&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Ce,combine:x.combine,mapUv:Te&&p(x.map.channel),aoMapUv:Xt&&p(x.aoMap.channel),lightMapUv:Lt&&p(x.lightMap.channel),bumpMapUv:gn&&p(x.bumpMap.channel),normalMapUv:xt&&p(x.normalMap.channel),displacementMapUv:oi&&p(x.displacementMap.channel),emissiveMapUv:kt&&p(x.emissiveMap.channel),metalnessMapUv:In&&p(x.metalnessMap.channel),roughnessMapUv:Fn&&p(x.roughnessMap.channel),anisotropyMapUv:Fe&&p(x.anisotropyMap.channel),clearcoatMapUv:L&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(x.sheenRoughnessMap.channel),specularMapUv:Q&&p(x.specularMap.channel),specularColorMapUv:fe&&p(x.specularColorMap.channel),specularIntensityMapUv:F&&p(x.specularIntensityMap.channel),transmissionMapUv:ee&&p(x.transmissionMap.channel),thicknessMapUv:Z&&p(x.thicknessMap.channel),alphaMapUv:ce&&p(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||Un),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Te||ce),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:te,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:I.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:oe,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:kt&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:He&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&x.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function _(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)y.push(C),y.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(y,x),d(y,x),y.push(t.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function g(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function d(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const y=u[x.type];let C;if(y){const R=pi[y];C=F1.clone(R.uniforms)}else C=x.uniforms;return C}function S(x,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new aT(t,y,x,r),c.push(C),h.set(y,C)),C}function M(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function fT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function e0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function t0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,m,_,g,d){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:d},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=m,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=d),e++,v}function l(u,p,m,_,g,d,v){v.reversedDepth===!0&&(g=-g);const S=o(u,p,m,_,g,d);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):n.push(S)}function c(u,p,m,_,g,d){const v=o(u,p,m,_,g,d);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function h(u,p){n.length>1&&n.sort(u||hT),i.length>1&&i.sort(p||e0),r.length>1&&r.sort(p||e0)}function f(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function pT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new t0,t.set(i,[a])):r>=s.length?(a=new t0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function mT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new q,color:new Je};break;case"SpotLight":n={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function vT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _T(t){const e=new mT,n=gT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Et,a=new Et;function o(c){let h=0,f=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,m=0,_=0,g=0,d=0,v=0,S=0,M=0,b=0,E=0,x=0,y=0,C=0,R=0;c.sort(vT);for(let I=0,G=c.length;I<G;I++){const P=c[I],O=P.color,K=P.intensity,z=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Jr?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*K,f+=O.g*K,u+=O.b*K;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],K);R++}else if(P.isSunLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,N=n.get(P);N.shadowIntensity=j.intensity,N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[m]=N,i.sunShadowMap[m]=H;const te=j.getViewportCount();for(let Me=0;Me<te;Me++)i.sunShadowMatrix[_+Me]=j.getMatrix(Me),i.sunShadowCascade[_+Me]=j._cascadeData[Me];_+=te,m++}i.sun[p]=B,p++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,N=n.get(P);N.shadowIntensity=j.intensity,N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,i.directionalShadow[g]=N,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=P.shadow.matrix,b++}i.directional[g]=B,g++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(K),B.distance=z,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[v]=B;const j=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,j.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[v]=j.matrix,P.castShadow){const N=n.get(P);N.shadowIntensity=j.intensity,N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=H,x++}v++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(O).multiplyScalar(K),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=B,S++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const j=P.shadow,N=n.get(P);N.shadowIntensity=j.intensity,N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,N.shadowCameraNear=j.camera.near,N.shadowCameraFar=j.camera.far,i.pointShadow[d]=N,i.pointShadowMap[d]=H,i.pointShadowMatrix[d]=P.shadow.matrix,E++}i.point[d]=B,d++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(K),B.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[M]=B,M++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.sunLength!==p||D.directionalLength!==g||D.pointLength!==d||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==m||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==y||D.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=d,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+y-C,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.sunLength=p,D.directionalLength=g,D.pointLength=d,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=m,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=y,D.numLightProbes=R,i.version=xT++)}function l(c,h){let f=0,u=0,p=0,m=0,_=0,g=0;const d=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const M=c[v];if(M.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),f++}else if(M.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),u++}else if(M.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),m++}else if(M.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),a.identity(),s.copy(M.matrixWorld),s.premultiply(d),a.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:i}}function n0(t){const e=new _T(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):n.push(f)}function o(f){i.push(f)}function l(){e.setup(n),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ST(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new n0(t),e.set(r,[o])):s>=a.length?(o=new n0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const yT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ET=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],wT=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],i0=new Et,ha=new q,Iu=new q;function bT(t,e,n){let i=new Qa;const r=new Ne,s=new Ne,a=new yt,o=new k1,l=new z1,c={},h=n.maxTextureSize,f={[Zr]:En,[En]:Zr,[gi]:gi},u=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:yT,fragmentShader:MT}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new wn;m.setAttribute("position",new jr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new je(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let d=this.type;this.render=function(E,x,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Gx&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pl);const C=t.getRenderTarget(),R=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Us),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=d!==this.type;G&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=E.length;P<O;P++){const K=E[P],z=K.shadow;if(z===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const H=z.getFrameExtents();r.multiply(H),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,z.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=B,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===_a){if(K.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new yi(r.x,r.y,{format:Jr,type:Ei,minFilter:_n,magFilter:_n,generateMipmaps:!1}),z.map.texture.name=K.name+".shadowMap",z.map.depthTexture=new qs(r.x,r.y,xi),z.map.depthTexture.name=K.name+".shadowMapDepth",z.map.depthTexture.format=wr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt}else K.isPointLight?(z.map=new Rh(r.x),z.map.depthTexture=new gv(r.x,Mi)):(z.map=new yi(r.x,r.y),z.map.depthTexture=new qs(r.x,r.y,Mi)),z.map.depthTexture.name=K.name+".shadowMap",z.map.depthTexture.format=wr,this.type===pl?(z.map.depthTexture.compareFunction=B?av:sv,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();K.isPointLight!==!0&&z.updateMatrices(K,y);const N=z.camera.layers.mask&4294967294?z.camera.layers:y.layers;for(let te=0;te<j;te++){const Me=z.getCamera(te);if(K.isPointLight){const X=z.camera,ie=z.matrix,le=K.distance||X.far;le!==X.far&&(X.far=le,X.updateProjectionMatrix()),ha.setFromMatrixPosition(K.matrixWorld),X.position.copy(ha),Iu.copy(X.position),Iu.add(ET[te]),X.up.copy(wT[te]),X.lookAt(Iu),X.updateMatrixWorld(),ie.makeTranslation(-ha.x,-ha.y,-ha.z),i0.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z._frustum.setFromProjectionMatrix(i0,X.coordinateSystem,X.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,te),t.clear();else{te===0&&(t.setRenderTarget(z.map),t.clear());const X=z.getViewport(te);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(a)}i=z.getFrustum(te),M(x,y,Me,K,N,this.type)}z.isPointLightShadow!==!0&&this.type===_a&&v(z,y),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(C,R,D)};function v(E,x){const y=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new yi(r.x,r.y,{format:Jr,type:Ei}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(x,null,y,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(x,null,y,p,_,null)}function S(E,x,y,C){let R=null;const D=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=y.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const I=R.uuid,G=x.uuid;let P=c[I];P===void 0&&(P={},c[I]=P);let O=P[G];O===void 0&&(O=R.clone(),P[G]=O,x.addEventListener("dispose",b)),R=O}if(R.visible=x.visible,R.wireframe=x.wireframe,C===_a?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:f[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=t.properties.get(R);I.light=y}return R}function M(E,x,y,C,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===_a)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const P=e.update(E),O=E.material;if(Array.isArray(O)){const K=P.groups;for(let z=0,H=K.length;z<H;z++){const B=K[z],j=O[B.materialIndex];if(j&&j.visible){const N=S(E,j,C,D);E.onBeforeShadow(t,E,x,y,P,N,B),t.renderBufferDirect(y,null,P,N,E,B),E.onAfterShadow(t,E,x,y,P,N,B)}}}else if(O.visible){const K=S(E,O,C,D);E.onBeforeShadow(t,E,x,y,P,K,null),t.renderBufferDirect(y,null,P,K,E,null),E.onAfterShadow(t,E,x,y,P,K,null)}}const G=E.children;for(let P=0,O=G.length;P<O;P++)M(G[P],x,y,C,R,D)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const C=c[y],R=E.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function AT(t,e){function n(){let F=!1;const ee=new yt;let Z=null;const he=new yt(0,0,0,0);return{setMask:function(ce){Z!==ce&&!F&&(t.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){F=ce},setClear:function(ce,de,Ce,He,oe){oe===!0&&(ce*=He,de*=He,Ce*=He),ee.set(ce,de,Ce,He),he.equals(ee)===!1&&(t.clearColor(ce,de,Ce,He),he.copy(ee))},reset:function(){F=!1,Z=null,he.set(-1,0,0,0)}}}function i(){let F=!1,ee=!1,Z=null,he=null,ce=null;return{setReversed:function(de){if(ee!==de){const Ce=e.get("EXT_clip_control");de?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ee=de;const He=ce;ce=null,this.setClear(He)}},getReversed:function(){return ee},setTest:function(de){de?re(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(de){Z!==de&&!F&&(t.depthMask(de),Z=de)},setFunc:function(de){if(ee&&(de=s1[de]),he!==de){switch(de){case Td:t.depthFunc(t.NEVER);break;case Rd:t.depthFunc(t.ALWAYS);break;case Cd:t.depthFunc(t.LESS);break;case $a:t.depthFunc(t.LEQUAL);break;case Pd:t.depthFunc(t.EQUAL);break;case Ld:t.depthFunc(t.GEQUAL);break;case Nd:t.depthFunc(t.GREATER);break;case Dd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=de}},setLocked:function(de){F=de},setClear:function(de){ce!==de&&(ce=de,ee&&(de=1-de),t.clearDepth(de))},reset:function(){F=!1,Z=null,he=null,ce=null,ee=!1}}}function r(){let F=!1,ee=null,Z=null,he=null,ce=null,de=null,Ce=null,He=null,oe=null;return{setTest:function(Le){F||(Le?re(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!F&&(t.stencilMask(Le),ee=Le)},setFunc:function(Le,Ge,_e){(Z!==Le||he!==Ge||ce!==_e)&&(t.stencilFunc(Le,Ge,_e),Z=Le,he=Ge,ce=_e)},setOp:function(Le,Ge,_e){(de!==Le||Ce!==Ge||He!==_e)&&(t.stencilOp(Le,Ge,_e),de=Le,Ce=Ge,He=_e)},setLocked:function(Le){F=Le},setClear:function(Le){oe!==Le&&(t.clearStencil(Le),oe=Le)},reset:function(){F=!1,ee=null,Z=null,he=null,ce=null,de=null,Ce=null,He=null,oe=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let h={},f={},u={},p=new WeakMap,m=[],_=null,g=!1,d=null,v=null,S=null,M=null,b=null,E=null,x=null,y=new Je(0,0,0),C=0,R=!1,D=null,I=null,G=null,P=null,O=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=H>=2);let j=null,N={};const te=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),X=new yt().fromArray(te),ie=new yt().fromArray(Me);function le(F,ee,Z,he){const ce=new Uint8Array(4),de=t.createTexture();t.bindTexture(F,de),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Z;Ce++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ee+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return de}const ve={};ve[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc($a),gn(!1),xt(cm),re(t.CULL_FACE),Xt(Us);function re(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function Pe(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function it(F,ee){return u[F]!==ee?(t.bindFramebuffer(F,ee),u[F]=ee,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ee),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Te(F,ee){let Z=m,he=!1;if(F){Z=p.get(ee),Z===void 0&&(Z=[],p.set(ee,Z));const ce=F.textures;if(Z.length!==ce.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ce=ce.length;de<Ce;de++)Z[de]=t.COLOR_ATTACHMENT0+de;Z.length=ce.length,he=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,he=!0);he&&t.drawBuffers(Z)}function ze(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const We={[xs]:t.FUNC_ADD,[TM]:t.FUNC_SUBTRACT,[RM]:t.FUNC_REVERSE_SUBTRACT};We[CM]=t.MIN,We[PM]=t.MAX;const Be={[LM]:t.ZERO,[NM]:t.ONE,[DM]:t.SRC_COLOR,[Hx]:t.SRC_ALPHA,[kM]:t.SRC_ALPHA_SATURATE,[OM]:t.DST_COLOR,[FM]:t.DST_ALPHA,[IM]:t.ONE_MINUS_SRC_COLOR,[Vx]:t.ONE_MINUS_SRC_ALPHA,[BM]:t.ONE_MINUS_DST_COLOR,[UM]:t.ONE_MINUS_DST_ALPHA,[zM]:t.CONSTANT_COLOR,[GM]:t.ONE_MINUS_CONSTANT_COLOR,[HM]:t.CONSTANT_ALPHA,[VM]:t.ONE_MINUS_CONSTANT_ALPHA};function Xt(F,ee,Z,he,ce,de,Ce,He,oe,Le){if(F===Us){g===!0&&(Pe(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),F!==AM){if(F!==d||Le!==R){if((v!==xs||b!==xs)&&(t.blendEquation(t.FUNC_ADD),v=xs,b=xs),Le)switch(F){case Pa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case um:t.blendFunc(t.ONE,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",F);break}else switch(F){case Pa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case um:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dm:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",F);break}S=null,M=null,E=null,x=null,y.set(0,0,0),C=0,d=F,R=Le}return}ce=ce||ee,de=de||Z,Ce=Ce||he,(ee!==v||ce!==b)&&(t.blendEquationSeparate(We[ee],We[ce]),v=ee,b=ce),(Z!==S||he!==M||de!==E||Ce!==x)&&(t.blendFuncSeparate(Be[Z],Be[he],Be[de],Be[Ce]),S=Z,M=he,E=de,x=Ce),(He.equals(y)===!1||oe!==C)&&(t.blendColor(He.r,He.g,He.b,oe),y.copy(He),C=oe),d=F,R=!1}function Lt(F,ee){F.side===gi?Pe(t.CULL_FACE):re(t.CULL_FACE);let Z=F.side===En;ee&&(Z=!Z),gn(Z),F.blending===Pa&&F.transparent===!1?Xt(Us):Xt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const he=F.stencilWrite;o.setTest(he),he&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),kt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function gn(F){D!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),D=F)}function xt(F){F!==wM?(re(t.CULL_FACE),F!==I&&(F===cm?t.cullFace(t.BACK):F===bM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),I=F}function oi(F){F!==G&&(z&&t.lineWidth(F),G=F)}function kt(F,ee,Z){F?(re(t.POLYGON_OFFSET_FILL),(P!==ee||O!==Z)&&(P=ee,O=Z,a.getReversed()&&(ee=-ee,Z=-Z),t.polygonOffset(ee,Z))):Pe(t.POLYGON_OFFSET_FILL)}function In(F){F?re(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function Fn(F){F===void 0&&(F=t.TEXTURE0+K-1),j!==F&&(t.activeTexture(F),j=F)}function Un(F,ee,Z){Z===void 0&&(j===null?Z=t.TEXTURE0+K-1:Z=j);let he=N[Z];he===void 0&&(he={type:void 0,texture:void 0},N[Z]=he),(he.type!==F||he.texture!==ee)&&(j!==Z&&(t.activeTexture(Z),j=Z),t.bindTexture(F,ee||ve[F]),he.type=F,he.texture=ee)}function k(){const F=N[j];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function On(){try{t.compressedTexImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function pt(){try{t.compressedTexImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function mt(){try{t.texSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function xe(){try{t.texSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function Nt(){try{t.compressedTexSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function Fe(){try{t.texStorage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function L(){try{t.texStorage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function A(){try{t.texImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function W(){try{t.texImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function se(F){return f[F]!==void 0?f[F]:t.getParameter(F)}function ne(F,ee){f[F]!==ee&&(t.pixelStorei(F,ee),f[F]=ee)}function ue(F){X.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),X.copy(F))}function me(F){ie.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function J(F,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let he=Z.get(F);he===void 0&&(he=t.getUniformBlockIndex(ee,F.name),t.uniformBlockBinding(ee,he,he),Z.set(F,he))}function Q(F,ee,Z){const ce=c.get(ee).get(F);l[ce]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,ce,Z),l[ce]=Z)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,N={},u={},l={},p=new WeakMap,m=[],_=null,g=!1,d=null,v=null,S=null,M=null,b=null,E=null,x=null,y=new Je(0,0,0),C=0,R=!1,D=null,I=null,G=null,P=null,O=null,X.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Pe,bindFramebuffer:it,drawBuffers:Te,useProgram:ze,setBlending:Xt,setMaterial:Lt,setFlipSided:gn,setCullFace:xt,setLineWidth:oi,setPolygonOffset:kt,setScissorTest:In,activeTexture:Fn,bindTexture:Un,unbindTexture:k,compressedTexImage2D:On,compressedTexImage3D:pt,texImage2D:A,texImage3D:W,pixelStorei:ne,getParameter:se,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Fe,texStorage3D:L,texSubImage2D:mt,texSubImage3D:xe,compressedTexSubImage2D:Nt,compressedTexSubImage3D:De,scissor:ue,viewport:me,reset:fe}}function TT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,f=new Set;let u;const p=new WeakMap,m=new Set,_=new FinalizationRegistry(L=>m.delete(L));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(L,A){return g?new OffscreenCanvas(L,A):Kl("canvas")}function v(L,A,W){let se=1;const ne=Fe(L);if((ne.width>W||ne.height>W)&&(se=W/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(se*ne.width),me=Math.floor(se*ne.height);u===void 0&&(u=d(ue,me));const J=A?d(ue,me):u;return J.width=ue,J.height=me,J.getContext("2d").drawImage(L,0,0,ue,me),Ie("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+me+")."),J}else return"data"in L&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function S(L){return L.generateMipmaps}function M(L){t.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(L,A,W,se,ne,ue=!1){if(L!==null){if(t[L]!==void 0)return t[L];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me;se&&(me=e.get("EXT_texture_norm16"),me||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=A;if(A===t.RED&&(W===t.FLOAT&&(J=t.R32F),W===t.HALF_FLOAT&&(J=t.R16F),W===t.UNSIGNED_BYTE&&(J=t.R8),W===t.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),W===t.SHORT&&me&&(J=me.R16_SNORM_EXT)),A===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.R8UI),W===t.UNSIGNED_SHORT&&(J=t.R16UI),W===t.UNSIGNED_INT&&(J=t.R32UI),W===t.BYTE&&(J=t.R8I),W===t.SHORT&&(J=t.R16I),W===t.INT&&(J=t.R32I)),A===t.RG&&(W===t.FLOAT&&(J=t.RG32F),W===t.HALF_FLOAT&&(J=t.RG16F),W===t.UNSIGNED_BYTE&&(J=t.RG8),W===t.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),W===t.SHORT&&me&&(J=me.RG16_SNORM_EXT)),A===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RG8UI),W===t.UNSIGNED_SHORT&&(J=t.RG16UI),W===t.UNSIGNED_INT&&(J=t.RG32UI),W===t.BYTE&&(J=t.RG8I),W===t.SHORT&&(J=t.RG16I),W===t.INT&&(J=t.RG32I)),A===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RGB8UI),W===t.UNSIGNED_SHORT&&(J=t.RGB16UI),W===t.UNSIGNED_INT&&(J=t.RGB32UI),W===t.BYTE&&(J=t.RGB8I),W===t.SHORT&&(J=t.RGB16I),W===t.INT&&(J=t.RGB32I)),A===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),W===t.UNSIGNED_INT&&(J=t.RGBA32UI),W===t.BYTE&&(J=t.RGBA8I),W===t.SHORT&&(J=t.RGBA16I),W===t.INT&&(J=t.RGBA32I)),A===t.RGB&&(W===t.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),W===t.SHORT&&me&&(J=me.RGB16_SNORM_EXT),W===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),A===t.RGBA){const Q=ue?$l:Ze.getTransfer(ne);W===t.FLOAT&&(J=t.RGBA32F),W===t.HALF_FLOAT&&(J=t.RGBA16F),W===t.UNSIGNED_BYTE&&(J=Q===at?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),W===t.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),W===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(L,A){let W;return L?A===null||A===Mi||A===Xs?W=t.DEPTH24_STENCIL8:A===xi?W=t.DEPTH32F_STENCIL8:A===Za&&(W=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Mi||A===Xs?W=t.DEPTH_COMPONENT24:A===xi?W=t.DEPTH_COMPONENT32F:A===Za&&(W=t.DEPTH_COMPONENT16),W}function y(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Kt&&L.minFilter!==_n?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function C(L){const A=new WeakRef(L);i.get(L).__ref=A,m.add(A),_.register(L,A,A)}function R(L){const A=i.get(L).__ref;A!==void 0&&(m.delete(A),_.unregister(A))}function D(L){G(L.target)}function I(L){P(L.target)}function G(L){L.removeEventListener("dispose",D),R(L),K(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function P(L){L.removeEventListener("dispose",I),R(L),H(L)}function O(){for(const L of m){const A=L.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):G(A))}m.clear(),f.clear()}function K(L){const A=i.get(L);if(A.__webglInit===void 0)return;const W=L.source,se=p.get(W);if(se){const ne=se[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(L),Object.keys(se).length===0&&p.delete(W)}i.remove(L)}function z(L){const A=i.get(L);t.deleteTexture(A.__webglTexture);const W=L.source,se=p.get(W);delete se[A.__cacheKey],a.memory.textures--}function H(L){const A=i.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();const W=L.depthTexture;if(W&&W.renderTarget===L&&G(W),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let ue=0;ue<A.__webglFramebuffer[ne].length;ue++)t.deleteFramebuffer(A.__webglFramebuffer[ne][ue]);else t.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)t.deleteFramebuffer(A.__webglFramebuffer[ne]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=L.textures;for(let ne=0,ue=se.length;ne<ue;ne++){const me=i.get(se[ne]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(se[ne])}i.remove(L)}let B=0;function j(){B=0}function N(){return B}function te(L){B=L}function Me(){const L=B;return L>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,L}function X(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ie(L,A){const W=i.get(L);if(L.isVideoTexture&&Nt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const se=L.image;if(se===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(W,L,A);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+A)}function le(L,A){const W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Lt(W,L,A);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+A)}function ve(L,A){const W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){Lt(W,L,A);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+A)}function re(L,A){const W=i.get(L);if(L.version>0&&W.__version!==L.version){gn(W,L,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+A)}const Pe={[Id]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},it={[Kt]:t.NEAREST,[XM]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[ur]:t.LINEAR_MIPMAP_LINEAR},Te={[KM]:t.NEVER,[ov]:t.ALWAYS,[ZM]:t.LESS,[sv]:t.LEQUAL,[JM]:t.EQUAL,[av]:t.GEQUAL,[QM]:t.GREATER,[e1]:t.NOTEQUAL};function ze(L,A){if(A.type===xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===_n||A.magFilter===ou||A.magFilter===Do||A.magFilter===ur||A.minFilter===_n||A.minFilter===ou||A.minFilter===Do||A.minFilter===ur)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,Pe[A.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,Pe[A.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,Pe[A.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,it[A.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,it[A.minFilter]),A.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Kt||A.minFilter!==Do&&A.minFilter!==ur||A.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function We(L,A){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",D),C(A));const se=A.source;let ne=p.get(se);ne===void 0&&(ne={},p.set(se,ne));const ue=X(A);if(ue!==L.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[ue].usedTimes++;const me=ne[L.__cacheKey];me!==void 0&&(ne[L.__cacheKey].usedTimes--,me.usedTimes===0&&z(A)),L.__cacheKey=ue,L.__webglTexture=ne[ue].texture}return W}function Be(L,A,W){return Math.floor(Math.floor(L/W)/A)}function Xt(L,A,W,se){const ue=L.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,W,se,A.data);else{ue.sort((F,ee)=>F.start-ee.start);let me=0;for(let F=1;F<ue.length;F++){const ee=ue[me],Z=ue[F],he=ee.start+ee.count,ce=Be(Z.start,A.width,4),de=Be(ee.start,A.width,4);Z.start<=he+1&&ce===de&&Be(Z.start+Z.count-1,A.width,4)===ce?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++me,ue[me]=Z)}ue.length=me+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let F=0,ee=ue.length;F<ee;F++){const Z=ue[F],he=Math.floor(Z.start/4),ce=Math.ceil(Z.count/4),de=he%A.width,Ce=Math.floor(he/A.width),He=ce,oe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ce),n.texSubImage2D(t.TEXTURE_2D,0,de,Ce,He,oe,W,se,A.data)}L.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Lt(L,A,W){let se=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=t.TEXTURE_3D);const ne=We(L,A),ue=A.source;n.bindTexture(se,L.__webglTexture,t.TEXTURE0+W);const me=i.get(ue);if(ue.version!==me.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+W),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const oe=Ze.getPrimaries(Ze.workingColorSpace),Le=A.colorSpace===ar?null:Ze.getPrimaries(A.colorSpace),Ge=A.colorSpace===ar||oe===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment);let Q=v(A.image,!1,r.maxTextureSize);Q=De(A,Q);const fe=s.convert(A.format,A.colorSpace),F=s.convert(A.type);let ee=E(A.internalFormat,fe,F,A.normalized,A.colorSpace,A.isVideoTexture);ze(se,A);let Z;const he=A.mipmaps,ce=A.isVideoTexture!==!0,de=me.__version===void 0||ne===!0,Ce=ue.dataReady,He=y(A,Q);if(A.isDepthTexture)ee=x(A.format===dr,A.type),de&&(ce?n.texStorage2D(t.TEXTURE_2D,1,ee,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,F,null));else if(A.isDataTexture)if(he.length>0){ce&&de&&n.texStorage2D(t.TEXTURE_2D,He,ee,he[0].width,he[0].height);for(let oe=0,Le=he.length;oe<Le;oe++)Z=he[oe],ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,F,Z.data):n.texImage2D(t.TEXTURE_2D,oe,ee,Z.width,Z.height,0,fe,F,Z.data);A.generateMipmaps=!1}else ce?(de&&n.texStorage2D(t.TEXTURE_2D,He,ee,Q.width,Q.height),Ce&&Xt(A,Q,fe,F)):n.texImage2D(t.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,F,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ce&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ee,he[0].width,he[0].height,Q.depth);for(let oe=0,Le=he.length;oe<Le;oe++)if(Z=he[oe],A.format!==vi)if(fe!==null)if(ce){if(Ce)if(A.layerUpdates.size>0){const Ge=Um(Z.width,Z.height,A.format,A.type);for(const _e of A.layerUpdates){const st=Z.data.subarray(_e*Ge/Z.data.BYTES_PER_ELEMENT,(_e+1)*Ge/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,_e,Z.width,Z.height,1,fe,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,Q.depth,fe,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,ee,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,Q.depth,fe,F,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,ee,Z.width,Z.height,Q.depth,0,fe,F,Z.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ce&&de&&n.texStorage2D(t.TEXTURE_2D,He,ee,he[0].width,he[0].height);for(let oe=0,Le=he.length;oe<Le;oe++)Z=he[oe],A.format!==vi?fe!==null?ce?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,ee,Z.width,Z.height,0,Z.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,F,Z.data):n.texImage2D(t.TEXTURE_2D,oe,ee,Z.width,Z.height,0,fe,F,Z.data)}else if(A.isDataArrayTexture)if(ce){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ee,Q.width,Q.height,Q.depth),Ce)if(A.layerUpdates.size>0){const oe=Um(Q.width,Q.height,A.format,A.type);for(const Le of A.layerUpdates){const Ge=Q.data.subarray(Le*oe/Q.data.BYTES_PER_ELEMENT,(Le+1)*oe/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,Q.width,Q.height,1,fe,F,Ge)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,F,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,fe,F,Q.data);else if(A.isData3DTexture)ce?(de&&n.texStorage3D(t.TEXTURE_3D,He,ee,Q.width,Q.height,Q.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,F,Q.data)):n.texImage3D(t.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,fe,F,Q.data);else if(A.isFramebufferTexture){if(de)if(ce)n.texStorage2D(t.TEXTURE_2D,He,ee,Q.width,Q.height);else{let oe=Q.width,Le=Q.height;for(let Ge=0;Ge<He;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,ee,oe,Le,0,fe,F,null),oe>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in t){const oe=t.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),Q.parentNode!==oe){oe.appendChild(Q),f.add(A),oe.onpaint=Le=>{const Ge=Le.changedElements;for(const _e of f)Ge.includes(_e.image)&&(_e.needsUpdate=!0)},oe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const Ge=t.RGBA,_e=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,_e,st,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(he.length>0){if(ce&&de){const oe=Fe(he[0]);n.texStorage2D(t.TEXTURE_2D,He,ee,oe.width,oe.height)}for(let oe=0,Le=he.length;oe<Le;oe++)Z=he[oe],ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,fe,F,Z):n.texImage2D(t.TEXTURE_2D,oe,ee,fe,F,Z);A.generateMipmaps=!1}else if(ce){if(de){const oe=Fe(Q);n.texStorage2D(t.TEXTURE_2D,He,ee,oe.width,oe.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,F,Q)}else n.texImage2D(t.TEXTURE_2D,0,ee,fe,F,Q);S(A)&&A.mipmapsAutoUpdate===!0&&M(se),me.__version=ue.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function gn(L,A,W){if(A.image.length!==6)return;const se=We(L,A),ne=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+W);const ue=i.get(ne);if(ne.version!==ue.__version||se===!0){n.activeTexture(t.TEXTURE0+W);const me=Ze.getPrimaries(Ze.workingColorSpace),J=A.colorSpace===ar?null:Ze.getPrimaries(A.colorSpace),Q=A.colorSpace===ar||me===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const fe=A.isCompressedTexture||A.image[0].isCompressedTexture,F=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let _e=0;_e<6;_e++)!fe&&!F?ee[_e]=v(A.image[_e],!0,r.maxCubemapSize):ee[_e]=F?A.image[_e].image:A.image[_e],ee[_e]=De(A,ee[_e]);const Z=ee[0],he=s.convert(A.format,A.colorSpace),ce=s.convert(A.type);let de=E(A.internalFormat,he,ce,A.normalized,A.colorSpace);const Ce=A.isVideoTexture!==!0,He=ue.__version===void 0||se===!0,oe=ne.dataReady;let Le=y(A,Z);ze(t.TEXTURE_CUBE_MAP,A);let Ge;if(A.isDepthTexture){if(de=x(A.format===dr,A.type),He)if(Ce)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,Z.width,Z.height,0,he,ce,null)}else if(fe){Ce&&He&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,Z.width,Z.height);for(let _e=0;_e<6;_e++){Ge=ee[_e].mipmaps;for(let st=0;st<Ge.length;st++){const zt=Ge[st];A.format!==vi?he!==null?Ce?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,zt.width,zt.height,he,zt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,de,zt.width,zt.height,0,zt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,zt.width,zt.height,he,ce,zt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,de,zt.width,zt.height,0,he,ce,zt.data)}}}else{if(Ge=A.mipmaps,Ce&&He){Ge.length>0&&Le++;const _e=Fe(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(F){Ce?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ee[_e].width,ee[_e].height,he,ce,ee[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,ee[_e].width,ee[_e].height,0,he,ce,ee[_e].data);for(let st=0;st<Ge.length;st++){const ji=Ge[st].image[_e].image;Ce?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,ji.width,ji.height,he,ce,ji.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,de,ji.width,ji.height,0,he,ce,ji.data)}}else{Ce?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,he,ce,ee[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,he,ce,ee[_e]);for(let st=0;st<Ge.length;st++){const zt=Ge[st];Ce?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,he,ce,zt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,de,he,ce,zt.image[_e])}}}S(A)&&A.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),ue.__version=ne.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function xt(L,A,W,se,ne,ue){const me=s.convert(W.format,W.colorSpace),J=s.convert(W.type),Q=E(W.internalFormat,me,J,W.normalized,W.colorSpace),fe=i.get(A),F=i.get(W);if(F.__renderTarget=A,!fe.__hasExternalTextures){const ee=Math.max(1,A.width>>ue),Z=Math.max(1,A.height>>ue);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ue,Q,ee,Z,A.depth,0,me,J,null):n.texImage2D(ne,ue,Q,ee,Z,0,me,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),xe(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,F.__webglTexture,0,mt(A)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,F.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oi(L,A,W){if(t.bindRenderbuffer(t.RENDERBUFFER,L),A.depthBuffer){const se=A.depthTexture,ne=se&&se.isDepthTexture?se.type:null,ue=x(A.stencilBuffer,ne),me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xe(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(A),ue,A.width,A.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(A),ue,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,L)}else{const se=A.textures;for(let ne=0;ne<se.length;ne++){const ue=se[ne],me=s.convert(ue.format,ue.colorSpace),J=s.convert(ue.type),Q=E(ue.internalFormat,me,J,ue.normalized,ue.colorSpace);xe(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(A),Q,A.width,A.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(A),Q,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Q,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function kt(L,A,W){const se=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(A.depthTexture);ne.__renderTarget=A;const ue=se?A.depthTexture.image[0]:A.depthTexture.image;(!ne.__webglTexture||ue.width!==A.width||ue.height!==A.height)&&(ue.width=A.width,ue.height=A.height,A.depthTexture.needsUpdate=!0),se?re(A.depthTexture,0):ie(A.depthTexture,0);const me=ne.__webglTexture,J=mt(A),Q=se?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,fe=A.depthTexture.format===dr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(A.depthTexture.format===wr)xe(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Q,me,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Q,me,0);else if(A.depthTexture.format===dr)xe(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Q,me,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function In(L){const A=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),se){const ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=se}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(W)for(let se=0;se<6;se++)kt(A.__webglFramebuffer[se],L,se);else L.texture.mipmaps.length>0?kt(A.__webglFramebuffer[0],L,0):kt(A.__webglFramebuffer,L,0);else if(W){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]===void 0)A.__webglDepthbuffer[se]=t.createRenderbuffer(),oi(A.__webglDepthbuffer[se],L,!1);else{const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ue)}}else if(L.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),oi(A.__webglDepthbuffer,L,!1);else{const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ue)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fn(L,A,W){const se=i.get(L);A!==void 0&&xt(se.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&In(L)}function Un(L){const A=L.texture,W=i.get(L),se=i.get(A);L.addEventListener("dispose",I),C(L);const ne=L.textures,ue=L.isWebGLCubeRenderTarget===!0,me=ne.length>1;if(me||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=A.version,a.memory.textures++),ue){W.__webglFramebuffer=[];for(let J=0;J<6;J++)if(A.mipmaps.length>0){W.__webglFramebuffer[J]=[];for(let Q=0;Q<A.mipmaps.length;Q++)W.__webglFramebuffer[J][Q]=t.createFramebuffer()}else W.__webglFramebuffer[J]=t.createFramebuffer()}else{if(A.mipmaps.length>0){W.__webglFramebuffer=[];for(let J=0;J<A.mipmaps.length;J++)W.__webglFramebuffer[J]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(me)for(let J=0,Q=ne.length;J<Q;J++){const fe=i.get(ne[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&xe(L)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let J=0;J<ne.length;J++){const Q=ne[J];W.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[J]);const fe=s.convert(Q.format,Q.colorSpace),F=s.convert(Q.type),ee=E(Q.internalFormat,fe,F,Q.normalized,Q.colorSpace,L.isXRRenderTarget===!0),Z=mt(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,ee,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,W.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),oi(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ze(t.TEXTURE_CUBE_MAP,A);for(let J=0;J<6;J++)if(A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)xt(W.__webglFramebuffer[J][Q],L,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else xt(W.__webglFramebuffer[J],L,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);S(A)?M(t.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),n.unbindTexture()}else if(me){for(let J=0,Q=ne.length;J<Q;J++){const fe=ne[J],F=i.get(fe);let ee=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,F.__webglTexture),ze(ee,fe),xt(W.__webglFramebuffer,L,fe,t.COLOR_ATTACHMENT0+J,ee,0),S(fe)&&M(ee)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(J=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,se.__webglTexture),ze(J,A),A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)xt(W.__webglFramebuffer[Q],L,A,t.COLOR_ATTACHMENT0,J,Q);else xt(W.__webglFramebuffer,L,A,t.COLOR_ATTACHMENT0,J,0);S(A)?M(J):A.mipmaps.length>0&&t.texParameteri(J,t.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),n.unbindTexture()}L.depthBuffer&&In(L)}function k(L){const A=L.textures;for(let W=0,se=A.length;W<se;W++){const ne=A[W];if(S(ne)&&ne.mipmapsAutoUpdate===!0){const ue=b(L),me=i.get(ne).__webglTexture;n.bindTexture(ue,me),M(ue),n.unbindTexture()}}}const On=[];function pt(L){if(L.samples>0){if(xe(L)===!1){const A=L.textures,W=L.width,se=L.height;let ne=t.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(L),J=A.length>1;if(J)for(let fe=0;fe<A.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const F=i.get(A[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,F,0)}t.blitFramebuffer(0,0,W,se,0,0,W,se,ne,t.NEAREST),l===!0&&(On.length=0,On.push(t.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&On.push(ue),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,On))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<A.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const F=i.get(A[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,F,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const A=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function mt(L){return Math.min(r.maxSamples,L.samples)}function xe(L){const A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Nt(L){const A=a.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function De(L,A){const W=L.colorSpace,se=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Yl&&W!==ar&&(Ze.getTransfer(W)===at?(se!==vi||ne!==Rn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",W)),A}function Fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=j,this.getTextureUnits=N,this.setTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=le,this.setTexture3D=ve,this.setTextureCube=re,this.rebindTextures=Fn,this.setupRenderTarget=Un,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=In,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=xe,this.dispose=O}function RT(t,e){function n(i,r=ar){let s;const a=Ze.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===gh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ev)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jx)return t.BYTE;if(i===Qx)return t.SHORT;if(i===Za)return t.UNSIGNED_SHORT;if(i===mh)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===nv)return t.ALPHA;if(i===iv)return t.RGB;if(i===vi)return t.RGBA;if(i===wr)return t.DEPTH_COMPONENT;if(i===dr)return t.DEPTH_STENCIL;if(i===rv)return t.RED;if(i===vh)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===_h)return t.RG_INTEGER;if(i===Sh)return t.RGBA_INTEGER;if(i===ml||i===gl||i===xl||i===vl)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ud||i===Od||i===Bd||i===kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zd||i===Gd||i===Hd||i===Vd||i===Wd||i===Xl||i===jd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zd||i===Gd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vd)return s.COMPRESSED_R11_EAC;if(i===Wd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xl)return s.COMPRESSED_RG11_EAC;if(i===jd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xd||i===qd||i===Yd||i===$d||i===Kd||i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$d)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ef)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===af)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===of||i===lf||i===cf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===of)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uf||i===df||i===ql||i===ff)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===df)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ff)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new xv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qr({vertexShader:CT,fragmentShader:PT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new je(new yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NT extends ns{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,m=null;const _=typeof XRWebGLBinding<"u",g=new LT,d={},v=n.getContextAttributes();let S=null,M=null;const b=[],E=[],x=new Ne;let y=null,C=null;const R=new ti;R.viewport=new yt;const D=new ti;D.viewport=new yt;const I=[R,D],G=new W1;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=b[X];return ie===void 0&&(ie=new gu,b[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=b[X];return ie===void 0&&(ie=new gu,b[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=b[X];return ie===void 0&&(ie=new gu,b[X]=ie),ie.getHandSpace()};function K(X){const ie=E.indexOf(X.inputSource);if(ie===-1)return;const le=b[ie];le!==void 0&&(le.update(X.inputSource,X.frame,c||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let X=0;X<b.length;X++){const ie=E[X];ie!==null&&(E[X]=null,b[X].disconnect(ie))}P=null,O=null,g.reset();for(const X in d)delete d[X];if(e.setRenderTarget(S),p=null,u=null,f=null,r=null,M=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),C!==null){const X=C.camera;X.fov=C.fov,X.zoom=C.zoom,X.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ve=null,re=null;v.depth&&(re=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=v.stencil?dr:wr,ve=v.stencil?Xs:Mi);const Pe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Pe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new yi(u.textureWidth,u.textureHeight,{format:vi,type:Rn,depthTexture:new qs(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new yi(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(X){for(let ie=0;ie<X.removed.length;ie++){const le=X.removed[ie],ve=E.indexOf(le);ve>=0&&(E[ve]=null,b[ve].disconnect(le))}for(let ie=0;ie<X.added.length;ie++){const le=X.added[ie];let ve=E.indexOf(le);if(ve===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=E.length){E.push(le),ve=Pe;break}else if(E[Pe]===null){E[Pe]=le,ve=Pe;break}if(ve===-1)break}const re=b[ve];re&&re.connect(le)}}function B(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ie=X.near,le=X.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(le=g.depthFar)),G.near=D.near=R.near=ie,G.far=D.far=R.far=le,(P!==G.near||O!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,O=G.far),G.layers.mask=X.layers.mask|6,R.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const ve=X.parent,re=G.cameras;B(G,ve);for(let Pe=0;Pe<re.length;Pe++)B(re[Pe],ve);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&X.isPerspectiveCamera&&(C={camera:X,fov:X.fov,zoom:X.zoom}),j(X,G,ve)};function j(X,ie,le){le===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(X){return d[X]};let N=null;function te(X,ie){if(h=ie.getViewerPose(c||a),m=ie,h!==null){const le=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let ve=!1;le.length!==G.cameras.length&&(G.cameras.length=0,ve=!0);for(let Te=0;Te<le.length;Te++){const ze=le[Te];let We=null;if(p!==null)We=p.getViewport(ze);else{const Xt=f.getViewSubImage(u,ze);We=Xt.viewport,Te===0&&(e.setRenderTargetTextures(M,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(M))}let Be=I[Te];Be===void 0&&(Be=new ti,Be.layers.enable(Te),Be.viewport=new yt,I[Te]=Be),Be.matrix.fromArray(ze.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ze.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(We.x,We.y,We.width,We.height),Te===0&&(G.matrix.copy(Be.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ve===!0&&G.cameras.push(Be)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Te=f.getDepthInformation(le[0]);Te&&Te.isValid&&Te.texture&&g.init(Te,r.renderState)}if(re&&re.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Te=0;Te<le.length;Te++){const ze=le[Te].camera;if(ze){let We=d[ze];We||(We=new xv,d[ze]=We);const Be=f.getCameraImage(ze);We.sourceTexture=Be}}}}for(let le=0;le<b.length;le++){const ve=E[le],re=b[le];ve!==null&&re!==void 0&&re.update(ve,ie,c||a)}N&&N(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Me=new Mv;Me.setAnimationLoop(te),this.setAnimationLoop=function(X){N=X},this.dispose=function(){}}}const DT=new Et,Nv=new Ue;Nv.set(-1,0,0,0,1,0,0,0,1);function IT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,vv(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,S,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),m(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,S):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===En&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===En&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),S=v.envMap,M=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nv),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,S){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=S*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.diffuseRoughness>0&&(g.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FT(t,e,n,i){let r={},s={};function a(v,S){const M=S.program;i.uniformBlockBinding(v,M,r[v.id])}function o(v,S){let M=r[v.id];M===void 0&&(m(v),M=l(v),r[v.id]=M,v.addEventListener("dispose",g));const b=S.program;i.updateUBOMapping(v,b);const E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){const S=t.createBuffer(),M=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,M,b),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function c(v){const S=r[v.id],M=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let E=0,x=M.length;E<x;E++){const y=M[E];if(Array.isArray(y))for(let C=0,R=y.length;C<R;C++)h(y[C],E,C,b);else h(y,E,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(v,S,M,b){if(u(v,S,M,b)===!0){const E=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let C=0;C<x.length;C++){const R=x[C],D=_(R,!0);f(R,v.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,E,v.__data)}}function f(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function u(v,S,M,b){const E=v.value,x=S+"_"+M;if(Array.isArray(E)){b[x]===void 0&&(b[x]=[]);const y=b[x];let C=!1;for(let R=0;R<E.length;R++)p(E[R],y,R)===!0&&(C=!0);return C}return p(E,b,x)}function p(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{const b=S[M];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(v){const S=v.uniforms;let M=0;const b=16;for(let x=0,y=S.length;x<y;x++){const C=Array.isArray(S[x])?S[x]:[S[x]];for(let R=0,D=C.length;R<D;R++){const I=C[R],G=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(S[x])||Array.isArray(I.value);let O=M;for(let z=0,H=G.length;z<H;z++){const B=G[z],j=_(B,P),N=M%b,te=N%j.boundary,Me=N+te;M+=te,Me!==0&&b-Me<j.storage&&(M+=b-Me),z===0&&(O=M),M+=j.storage}const K=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new K((M-O)/Float32Array.BYTES_PER_ELEMENT),I.__offset=O}}const E=M%b;return E>0&&(M+=b-E),v.__size=M,v.__cache={},this}function _(v,S){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){const S=v.target;S.removeEventListener("dispose",g),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);r={},s={}}return{bind:a,update:o,dispose:d}}const UT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function OT(){return ui===null&&(ui=new N1(UT,16,16,Jr,Ei),ui.name="DFG_LUT",ui.minFilter=_n,ui.magFilter=_n,ui.wrapS=Fi,ui.wrapT=Fi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class BT{constructor(e={}){const{canvas:n=i1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=p,g=new Set([Sh,_h,vh]),d=new Set([Rn,Mi,Za,Xs,gh,xh]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const x=[],y=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,I=null,G=null,P=null,O=null;this._outputColorSpace=zn;let K=0,z=0,H=null,B=-1,j=null;const N=new yt,te=new yt;let Me=null;const X=new Je(0);let ie=0,le=n.width,ve=n.height,re=1,Pe=null,it=null;const Te=new yt(0,0,le,ve),ze=new yt(0,0,le,ve);let We=!1;const Be=new Qa,Xt=new wh;let Lt=!1,gn=!1;const xt=new Et,oi=new q,kt=new yt,In={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fn=!1;function Un(){return H===null?re:1}let k=i;function On(T,U){return n.getContext(T,U)}let pt,mt,xe,Nt,De,Fe,L,A,W,se,ne,ue,me,J,Q,fe,F,ee,Z,he,ce,de,Ce;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",_e,!1),k===null){const U="webgl2";if(k=On(U,T),k===null)throw On(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(T){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),nt("WebGLRenderer: "+T.message),T}function He(){pt=new Gb(k),pt.init(),ce=new RT(k,pt),mt=new Pb(k,pt,e,ce),xe=new AT(k,pt),mt.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),G=k.createFramebuffer(),P=k.createFramebuffer(),O=k.createFramebuffer(),Nt=new Wb(k),De=new fT,Fe=new TT(k,pt,xe,De,mt,ce,Nt),L=new zb(R),A=new X1(k),de=new Rb(k,A),W=new Hb(k,A,Nt,de),se=new Xb(k,W,A,de,Nt),ee=new jb(k,mt,Fe),Q=new Lb(De),ne=new dT(R,L,pt,mt,de,Q),ue=new IT(R,De),me=new pT,J=new ST(pt),F=new Tb(R,L,xe,se,m,l),fe=new bT(R,se,mt),Ce=new FT(k,Nt,mt,xe),Z=new Cb(k,pt,Nt),he=new Vb(k,pt,Nt),Nt.programs=ne.programs,R.capabilities=mt,R.extensions=pt,R.properties=De,R.renderLists=me,R.shadowMap=fe,R.state=xe,R.info=Nt}_!==Rn&&(C=new Yb(_,n.width,n.height,o,r,s));const oe=new NT(R,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(le,ve,!1))},this.getSize=function(T){return T.set(le,ve)},this.setSize=function(T,U,$=!0){if(oe.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,ve=U,n.width=Math.floor(T*re),n.height=Math.floor(U*re),$===!0&&(n.style.width=T+"px",n.style.height=U+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(le*re,ve*re).floor()},this.setDrawingBufferSize=function(T,U,$){le=T,ve=U,re=$,n.width=Math.floor(T*$),n.height=Math.floor(U*$),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===Rn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,U,$,V){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,U,$,V),xe.viewport(N.copy(Te).multiplyScalar(Un()).round())},this.getScissor=function(T){return T.copy(ze)},this.setScissor=function(T,U,$,V){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,U,$,V),xe.scissor(te.copy(ze).multiplyScalar(Un()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){xe.setScissorTest(We=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,$=!0){let V=0;if(T){let Y=!1;if(H!==null){const ge=H.texture.format;Y=g.has(ge)}if(Y){const ge=H.texture.type,we=d.has(ge),pe=F.getClearColor(),ye=F.getClearAlpha(),Re=pe.r,Oe=pe.g,qe=pe.b;we?(v[0]=Re,v[1]=Oe,v[2]=qe,v[3]=ye,k.clearBufferuiv(k.COLOR,0,v)):(S[0]=Re,S[1]=Oe,S[2]=qe,S[3]=ye,k.clearBufferiv(k.COLOR,0,S))}else V|=k.COLOR_BUFFER_BIT}U&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),F.dispose(),me.dispose(),J.dispose(),Fe.dispose(),De.dispose(),L.dispose(),se.dispose(),W.dispose(),de.dispose(),Ce.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ih),oe.removeEventListener("sessionend",Fh),Cr.stop()};function Le(T){T.preventDefault(),mm("WebGLRenderer: Context Lost."),D=!0}function Ge(){mm("WebGLRenderer: Context Restored."),D=!1;const T=Nt.autoReset,U=fe.enabled,$=fe.autoUpdate,V=fe.needsUpdate,Y=fe.type;He(),Nt.autoReset=T,fe.enabled=U,fe.autoUpdate=$,fe.needsUpdate=V,fe.type=Y}function _e(T){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const U=T.target;U.removeEventListener("dispose",st),zt(U)}function zt(T){ji(T),De.remove(T)}function ji(T){const U=De.get(T).programs;U!==void 0&&(U.forEach(function($){ne.releaseProgram($)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,$,V,Y,ge){U===null&&(U=In);const we=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,pe=Fv(T,U,$,V,Y);xe.setMaterial(V,we);let ye=$.index,Re=1;if(V.wireframe===!0){if(ye=W.getWireframeAttribute($),ye===void 0)return;Re=2}const Oe=$.drawRange,qe=$.attributes.position;let be=Oe.start*Re,Ye=(Oe.start+Oe.count)*Re;ge!==null&&(be=Math.max(be,ge.start*Re),Ye=Math.min(Ye,(ge.start+ge.count)*Re)),ye!==null?(be=Math.max(be,0),Ye=Math.min(Ye,ye.count)):qe!=null&&(be=Math.max(be,0),Ye=Math.min(Ye,qe.count));const Rt=Ye-be;if(Rt<0||Rt===1/0)return;de.setup(Y,V,pe,$,ye);let ut,lt=Z;if(ye!==null&&(ut=A.get(ye),lt=he,lt.setIndex(ut)),Y.isMesh)V.wireframe===!0?(xe.setLineWidth(V.wireframeLinewidth*Un()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(Y.isLine){let en=V.linewidth;en===void 0&&(en=1),xe.setLineWidth(en*Un()),Y.isLineSegments?lt.setMode(k.LINES):Y.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else Y.isPoints?lt.setMode(k.POINTS):Y.isSprite&&lt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const en=Y._multiDrawStarts,Ae=Y._multiDrawCounts,cn=Y._multiDrawCount,tt=ye?A.get(ye).bytesPerElement:1,Pr=De.get(V).currentProgram.getUniforms();for(let tn=0;tn<cn;tn++)Pr.setValue(k,"_gl_DrawID",tn),lt.render(en[tn]/tt,Ae[tn])}else if(Y.isInstancedMesh)lt.renderInstances(be,Rt,Y.count);else if($.isInstancedBufferGeometry){const en=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ae=Math.min($.instanceCount,en);lt.renderInstances(be,Rt,Ae)}else lt.render(be,Rt)};function Dh(T,U,$,V){I!==null&&T.isNodeMaterial&&I.setObject(V,T),Lt===!0&&Q.setState(T,$,!1),T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,ea(T,U,V),T.side=Zr,T.needsUpdate=!0,ea(T,U,V),T.side=gi):ea(T,U,V)}this.compile=function(T,U,$=null){$===null&&($=T),I!==null&&I.renderStart(T,U,$),E=J.get($),E.init(U),y.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),gn=this.localClippingEnabled,Lt=Q.init(this.clippingPlanes,gn),Lt===!0&&Q.setGlobalState(this.clippingPlanes,U),I!==null&&fe.render(E.state.shadowsArray,$,U);const V=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const pe=ge[we];Dh(pe,$,U,Y),V.add(pe)}else Dh(ge,$,U,Y),V.add(ge)}),E=y.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(T,U,$=null){const V=this.compile(T,U,$);return new Promise(Y=>{function ge(){if(V.forEach(function(we){const ye=De.get(we).currentProgram;(ye===void 0||ye.isReady())&&V.delete(we)}),V.size===0){Y(T);return}setTimeout(ge,10)}pt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let wc=null;function Dv(T){wc&&wc(T)}function Ih(){Cr.stop()}function Fh(){Cr.start()}const Cr=new Mv;Cr.setAnimationLoop(Dv),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(T){wc=T,oe.setAnimationLoop(T),T===null?Cr.stop():Cr.start()},oe.addEventListener("sessionstart",Ih),oe.addEventListener("sessionend",Fh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(T,U);const $=oe.enabled===!0&&oe.isPresenting===!0,V=C!==null&&(H===null||$)&&C.begin(R,H);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,H),E=J.get(T,y.length),E.init(U),E.state.textureUnits=Fe.getTextureUnits(),y.push(E),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Xt.setFromArrayCamera(U):Be.setFromProjectionMatrix(xt,ii,U.reversedDepth),gn=this.localClippingEnabled,Lt=Q.init(this.clippingPlanes,gn),b=me.get(T,x.length),b.init(),x.push(b),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&bc(we,U,-1/0,R.sortObjects)}bc(T,U,0,R.sortObjects),b.finish(),I!==null&&I.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(Pe,it),Fn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Fn&&F.addToRenderList(b,T),this.info.autoReset===!0&&this.info.reset(),Lt===!0&&Q.beginShadows();const Y=E.state.shadowsArray;if(fe.render(Y,T,U),Lt===!0&&Q.endShadows(),(V&&C.hasRenderPass())===!1){const we=b.opaque,pe=b.transmissive;if(E.setupLights(),U.isArrayCamera){const ye=U.cameras;if(pe.length>0)for(let Re=0,Oe=ye.length;Re<Oe;Re++){const qe=ye[Re];Oh(we,pe,T,qe)}Fn&&F.render(T);for(let Re=0,Oe=ye.length;Re<Oe;Re++){const qe=ye[Re];Uh(b,T,qe,qe.viewport)}}else pe.length>0&&Oh(we,pe,T,U),Fn&&F.render(T),Uh(b,T,U)}H!==null&&z===0&&(Fe.updateMultisampleRenderTarget(H),Fe.updateRenderTargetMipmap(H)),V&&C.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),de.resetDefaultState(),B=-1,j=null,y.pop(),y.length>0?(E=y[y.length-1],Fe.setTextureUnits(E.state.textureUnits),Lt===!0&&Q.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,I!==null&&I.renderEnd()};function bc(T,U,$,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){const we=U.isArrayCamera?Xt:Be;if(!T.frustumCulled||T.intersectsFrustum(we)){V&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);const pe=se.update(T),ye=T.material;ye.visible&&b.push(T,pe,ye,$,kt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){const we=U.isArrayCamera?Xt:Be;if(!T.frustumCulled||T.intersectsFrustum(we)){const pe=se.update(T),ye=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),kt.copy(pe.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(ye)){const Re=pe.groups;for(let Oe=0,qe=Re.length;Oe<qe;Oe++){const be=Re[Oe],Ye=ye[be.materialIndex];Ye&&Ye.visible&&b.push(T,pe,Ye,$,kt.z,be,U)}}else ye.visible&&b.push(T,pe,ye,$,kt.z,null,U)}}}const ge=T.children;for(let we=0,pe=ge.length;we<pe;we++)bc(ge[we],U,$,V)}function Uh(T,U,$,V){const{opaque:Y,transmissive:ge,transparent:we}=T;E.setupLightsView($),Lt===!0&&Q.setGlobalState(R.clippingPlanes,$),V&&xe.viewport(N.copy(V)),Y.length>0&&co(Y,U,$),ge.length>0&&co(ge,U,$),we.length>0&&co(we,U,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Oh(T,U,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const be=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new yi(1,1,{generateMipmaps:!0,type:be?Ei:Rn,minFilter:ur,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ge=E.state.transmissionRenderTarget[V.id],we=V.viewport||N;ge.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),ye=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(X),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),Fn&&F.render($);const Oe=R.toneMapping;R.toneMapping=Bi;const qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Lt===!0&&Q.setGlobalState(R.clippingPlanes,V),co(T,$,V),Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge),pt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ye=0,Rt=U.length;Ye<Rt;Ye++){const ut=U[Ye],{object:lt,geometry:en,material:Ae,group:cn}=ut;if(Ae.side===gi&&lt.layers.test(V.layers)){const tt=Ae.side;Ae.side=En,Ae.needsUpdate=!0,Bh(lt,$,V,en,Ae,cn),Ae.side=tt,Ae.needsUpdate=!0,be=!0}}be===!0&&(Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge))}R.setRenderTarget(pe,ye,Re),R.setClearColor(X,ie),qe!==void 0&&(V.viewport=qe),R.toneMapping=Oe}function co(T,U,$){const V=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,ge=T.length;Y<ge;Y++){const we=T[Y],{object:pe,geometry:ye,group:Re}=we;let Oe=we.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),pe.layers.test($.layers)&&Bh(pe,U,$,ye,Oe,Re)}}function Bh(T,U,$,V,Y,ge){I!==null&&Y.isNodeMaterial&&I.setObject(T,Y),T.onBeforeRender(R,U,$,V,Y,ge),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,U,$,V,T,ge),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=En,Y.needsUpdate=!0,R.renderBufferDirect($,U,V,Y,T,ge),Y.side=Zr,Y.needsUpdate=!0,R.renderBufferDirect($,U,V,Y,T,ge),Y.side=gi):R.renderBufferDirect($,U,V,Y,T,ge),T.onAfterRender(R,U,$,V,Y,ge)}function kh(T){let U=0;for(const $ of T)$.texture!==null&&U++;return U}function ea(T,U,$){U.isScene!==!0&&(U=In);const V=De.get(T),Y=E.state.lights,ge=E.state.shadowsArray,we=Y.state.version,pe=ne.getParameters(T,Y.state,ge,U,$,E.state.lightProbeGridArray),ye=ne.getProgramCacheKey(pe);let Re=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=L.get(T.envMap||V.environment,Oe),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",st),Re=new Map,V.programs=Re,V.programVariants=new Map);let qe=Re.get(ye);if(qe!==void 0){if(V.currentProgram===qe&&V.lightsStateVersion===we)return Gh(T,pe),qe}else pe.uniforms=ne.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,$,pe),T.onBeforeCompile(pe,R),qe=ne.acquireProgram(pe,ye),Re.set(ye,qe),V.uniforms=pe.uniforms;const be=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Q.uniform),Gh(T,pe),V.needsLights=Ov(T),V.lightsStateVersion=we,V.needsLights&&(be.ambientLightColor.value=Y.state.ambient,be.lightProbe.value=Y.state.probe,be.sunLights.value=Y.state.sun,be.sunLightShadows.value=Y.state.sunShadow,be.directionalLights.value=Y.state.directional,be.directionalLightShadows.value=Y.state.directionalShadow,be.spotLights.value=Y.state.spot,be.spotLightShadows.value=Y.state.spotShadow,be.rectAreaLights.value=Y.state.rectArea,be.ltc_1.value=Y.state.rectAreaLTC1,be.ltc_2.value=Y.state.rectAreaLTC2,be.pointLights.value=Y.state.point,be.pointLightShadows.value=Y.state.pointShadow,be.hemisphereLights.value=Y.state.hemi,be.sunShadowMatrix.value=Y.state.sunShadowMatrix,be.sunShadowCascade.value=Y.state.sunShadowCascade,be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,be.spotLightMatrix.value=Y.state.spotLightMatrix,be.spotLightMap.value=Y.state.spotLightMap,be.pointShadowMatrix.value=Y.state.pointShadowMatrix),V.numLightProbeGrids=kh(E.state.lightProbeGridArray),V.currentProgram=qe,V.uniformsList=null,qe}function Iv(T,U,$,V,Y){const ge=De.get(T),we=ge.currentProgram.id+","+V+","+Y;let pe=ge.programVariants.get(we);return pe===void 0?(pe=ea(T,U,$),ge.programVariants.set(we,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=V,ge.toneMapping=Y),pe}function zh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Sl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Gh(T,U){const $=De.get(T);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Fv(T,U,$,V,Y){U.isScene!==!0&&(U=In),Fe.resetTextureUnits();const ge=U.fog,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,pe=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ze.workingColorSpace,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=L.get(V.envMap||we,ye),Oe=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qe=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!$.morphAttributes.position,Ye=!!$.morphAttributes.normal,Rt=!!$.morphAttributes.color;let ut=Bi;V.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ut=R.toneMapping);const lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,en=lt!==void 0?lt.length:0,Ae=De.get(V),cn=E.state.lights;if(Lt===!0&&(gn===!0||T!==j)){const vt=T===j&&V.id===B;Q.setState(V,T,vt)}let tt=!1,Pr=!1;V.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==cn.state.version||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Re||V.fog===!0&&Ae.fog!==ge||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Q.numPlanes||Ae.numIntersection!==Q.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==qe||Ae.morphTargets!==be||Ae.morphNormals!==Ye||Ae.morphColors!==Rt||Ae.morphTargetsCount!==en||Ae.numLightProbeGrids!==kh(E.state.lightProbeGridArray)?tt=!0:(Ae.outputColorSpace!==pe||Ae.toneMapping!==ut)&&(Pr=!0):(tt=!0,Ae.__version=V.version);let tn=Ae.currentProgram;(tt===!0||Pr===!0)&&(tn=Pr===!0?Iv(V,U,Y,pe,ut):ea(V,U,Y),I&&V.isNodeMaterial&&I.onUpdateProgram(V,tn,Ae));let uo=!1,Xi=!1,Lr=!1;const Qe=tn.getUniforms(),qt=Ae.uniforms;if(xe.useProgram(tn.program)&&(uo=!0,Xi=!0,Lr=!0),V.id!==B&&(B=V.id,Xi=!0),uo||j!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Qe.setValue(k,"projectionMatrix",T.projectionMatrix),Qe.setValue(k,"viewMatrix",T.matrixWorldInverse);const Gt=Qe.map.cameraPosition;Gt!==void 0&&Gt.setValue(k,oi.setFromMatrixPosition(T.matrixWorld)),mt.logarithmicDepthBuffer&&Qe.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Qe.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,Xi=!0,Lr=!0)}if(Ae.needsLights&&(cn.state.sunShadowMap.length>0&&Qe.setValue(k,"sunShadowMap",cn.state.sunShadowMap,Fe),cn.state.directionalShadowMap.length>0&&Qe.setValue(k,"directionalShadowMap",cn.state.directionalShadowMap,Fe),cn.state.spotShadowMap.length>0&&Qe.setValue(k,"spotShadowMap",cn.state.spotShadowMap,Fe),cn.state.pointShadowMap.length>0&&Qe.setValue(k,"pointShadowMap",cn.state.pointShadowMap,Fe)),Y.isSkinnedMesh){Qe.setOptional(k,Y,"bindMatrix"),Qe.setOptional(k,Y,"bindMatrixInverse");const vt=Y.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Qe.setValue(k,"boneTexture",vt.boneTexture,Fe))}Y.isBatchedMesh&&(Qe.setOptional(k,Y,"batchingTexture"),Qe.setValue(k,"batchingTexture",Y._matricesTexture,Fe),Qe.setOptional(k,Y,"batchingIdTexture"),Qe.setValue(k,"batchingIdTexture",Y._indirectTexture,Fe),Qe.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Qe.setValue(k,"batchingColorTexture",Y._colorsTexture,Fe));const qn=$.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&ee.update(Y,$,tn),(Xi||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,Qe.setValue(k,"receiveShadow",Y.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(qt.envMapIntensity.value=U.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=OT()),Xi){if(Qe.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&Uv(qt,Lr),ge&&V.fog===!0&&ue.refreshFogUniforms(qt,ge),ue.refreshMaterialUniforms(qt,V,re,ve,E.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const vt=M;let Gt=0;for(const wi of E.state.lightProbeGridArray)wi.texture!==null&&(vt.textures[Gt]=wi.texture,vt.min[Gt]=wi.boundingBox.min,vt.max[Gt]=wi.boundingBox.max,vt.resolution[Gt]=wi.resolution,Gt++);for(const wi in vt)vt[wi].length=Gt;qt.probesSH.value=vt.textures,qt.probesMin.value=vt.min,qt.probesMax.value=vt.max,qt.probesResolution.value=vt.resolution}Sl.upload(k,zh(Ae),qt,Fe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Sl.upload(k,zh(Ae),qt,Fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Qe.setValue(k,"center",Y.center),Qe.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Qe.setValue(k,"normalMatrix",Y.normalMatrix),Qe.setValue(k,"modelMatrix",Y.matrixWorld),V.uniformsGroups!==void 0){const vt=V.uniformsGroups;for(let Gt=0,wi=vt.length;Gt<wi;Gt++){const Vh=vt[Gt];Ce.update(Vh,tn),Ce.bind(Vh,tn)}}return tn}function Uv(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ov(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(T,U,$){const V=De.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),De.get(T.texture).__webglTexture=U,De.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const $=De.get(T);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,$=0){H=T,K=U,z=$;let V=null,Y=!1,ge=!1;if(T){const pe=De.get(T);if(pe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(k.FRAMEBUFFER,pe.__webglFramebuffer),N.copy(T.viewport),te.copy(T.scissor),Me=T.scissorTest,xe.viewport(N),xe.scissor(te),xe.setScissorTest(Me),B=-1;return}else if(pe.__webglFramebuffer===void 0)Fe.setupRenderTarget(T);else if(pe.__hasExternalTextures)Fe.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(pe.__boundDepthTexture!==Oe){if(Oe!==null&&De.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(T)}}const ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);const Re=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?V=Re[U][$]:V=Re[U],Y=!0):T.samples>0&&Fe.useMultisampledRTT(T)===!1?V=De.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[$]:V=Re,N.copy(T.viewport),te.copy(T.scissor),Me=T.scissorTest}else N.copy(Te).multiplyScalar(re).floor(),te.copy(ze).multiplyScalar(re).floor(),Me=We;if($!==0&&(V=G),xe.bindFramebuffer(k.FRAMEBUFFER,V)&&xe.drawBuffers(T,V),xe.viewport(N),xe.scissor(te),xe.setScissorTest(Me),Y){const pe=De.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,$)}else if(ge){const pe=U;for(let ye=0;ye<T.textures.length;ye++){const Re=De.get(T.textures[ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ye,Re.__webglTexture,$,pe)}}else if(T!==null&&$!==0){const pe=De.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pe.__webglTexture,$)}B=-1};function Hh(T){const U=De.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=mt.textureFormatReadable(T.format),U.__typeReadable=mt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,$,V,Y,ge,we,pe=0){if(!(T&&T.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye){xe.bindFramebuffer(k.FRAMEBUFFER,ye);try{const Re=T.textures[pe],Oe=Re.format,qe=Re.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);const be=Hh(Re);if(be.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&$>=0&&$<=T.height-Y&&k.readPixels(U,$,V,Y,ce.convert(Oe),ce.convert(qe),ge)}finally{const Re=H!==null?De.get(H).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,U,$,V,Y,ge,we,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye)if(U>=0&&U<=T.width-V&&$>=0&&$<=T.height-Y){xe.bindFramebuffer(k.FRAMEBUFFER,ye);const Re=T.textures[pe],Oe=Re.format,qe=Re.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);const be=Hh(Re);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),k.readPixels(U,$,V,Y,ce.convert(Oe),ce.convert(qe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Rt=H!==null?De.get(H).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Rt);const ut=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await r1(k,ut,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ye),k.deleteSync(ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,$=0){const V=Math.pow(2,-$),Y=Math.floor(T.image.width*V),ge=Math.floor(T.image.height*V),we=U!==null?U.x:0,pe=U!==null?U.y:0;Fe.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,we,pe,Y,ge),xe.unbindTexture()},this.copyTextureToTexture=function(T,U,$=null,V=null,Y=0,ge=0){let we,pe,ye,Re,Oe,qe,be,Ye,Rt;const ut=T.isCompressedTexture?T.mipmaps[ge]:T.image;if($!==null)we=$.max.x-$.min.x,pe=$.max.y-$.min.y,ye=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,Oe=$.min.y,qe=$.isBox3?$.min.z:0;else{const Qe=Math.pow(2,-Y);we=Math.floor(ut.width*Qe),pe=Math.floor(ut.height*Qe),T.isDataArrayTexture?ye=ut.depth:T.isData3DTexture?ye=Math.floor(ut.depth*Qe):ye=1,Re=0,Oe=0,qe=0}V!==null?(be=V.x,Ye=V.y,Rt=V.z):(be=0,Ye=0,Rt=0);const lt=ce.convert(U.format),en=ce.convert(U.type);let Ae;U.isData3DTexture?(Fe.setTexture3D(U,0),Ae=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Fe.setTexture2DArray(U,0),Ae=k.TEXTURE_2D_ARRAY):(Fe.setTexture2D(U,0),Ae=k.TEXTURE_2D),xe.activeTexture(k.TEXTURE0),xe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),xe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xe.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const cn=xe.getParameter(k.UNPACK_ROW_LENGTH),tt=xe.getParameter(k.UNPACK_IMAGE_HEIGHT),Pr=xe.getParameter(k.UNPACK_SKIP_PIXELS),tn=xe.getParameter(k.UNPACK_SKIP_ROWS),uo=xe.getParameter(k.UNPACK_SKIP_IMAGES);xe.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),xe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),xe.pixelStorei(k.UNPACK_SKIP_PIXELS,Re),xe.pixelStorei(k.UNPACK_SKIP_ROWS,Oe),xe.pixelStorei(k.UNPACK_SKIP_IMAGES,qe);const Xi=T.isDataArrayTexture||T.isData3DTexture,Lr=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Qe=De.get(T),qt=De.get(U),qn=De.get(Qe.__renderTarget),vt=De.get(qt.__renderTarget);xe.bindFramebuffer(k.READ_FRAMEBUFFER,qn.__webglFramebuffer),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Gt=0;Gt<ye;Gt++)Xi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.get(T).__webglTexture,Y,qe+Gt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.get(U).__webglTexture,ge,Rt+Gt)),k.blitFramebuffer(Re,Oe,Re+we,Oe+pe,be,Ye,be+we,Ye+pe,k.DEPTH_BUFFER_BIT,k.NEAREST);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||De.has(T)){const Qe=De.get(T),qt=De.get(U);xe.bindFramebuffer(k.READ_FRAMEBUFFER,P),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let qn=0;qn<ye;qn++)Xi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qe.__webglTexture,Y,qe+qn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qe.__webglTexture,Y),Lr?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.__webglTexture,ge,Rt+qn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qt.__webglTexture,ge),Y!==0?k.blitFramebuffer(Re,Oe,Re+we,Oe+pe,be,Ye,be+we,Ye+pe,k.COLOR_BUFFER_BIT,k.NEAREST):Lr?k.copyTexSubImage3D(Ae,ge,be,Ye,Rt+qn,Re,Oe,we,pe):k.copyTexSubImage2D(Ae,ge,be,Ye,Re,Oe,we,pe);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Lr?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ae,ge,be,Ye,Rt,we,pe,ye,lt,en,ut.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Ae,ge,be,Ye,Rt,we,pe,ye,lt,ut.data):k.texSubImage3D(Ae,ge,be,Ye,Rt,we,pe,ye,lt,en,ut):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,be,Ye,we,pe,lt,en,ut.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,be,Ye,ut.width,ut.height,lt,ut.data):k.texSubImage2D(k.TEXTURE_2D,ge,be,Ye,we,pe,lt,en,ut);xe.pixelStorei(k.UNPACK_ROW_LENGTH,cn),xe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt),xe.pixelStorei(k.UNPACK_SKIP_PIXELS,Pr),xe.pixelStorei(k.UNPACK_SKIP_ROWS,tn),xe.pixelStorei(k.UNPACK_SKIP_IMAGES,uo),ge===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(Ae),xe.unbindTexture()},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&Fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Fe.setTextureCube(T,0):T.isData3DTexture?Fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Fe.setTexture2DArray(T,0):Fe.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){K=0,z=0,H=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const di=200,Dt=Math.PI/180;function Yt(t,e,n){return t+(e-t)*n}function kT(t,e,n){return{pelvisOffsetY:Yt(t.pelvisOffsetY,e.pelvisOffsetY,n),torsoPitch:Yt(t.torsoPitch,e.torsoPitch,n),torsoTwist:Yt(t.torsoTwist,e.torsoTwist,n),torsoRoll:Yt(t.torsoRoll,e.torsoRoll,n),headPitch:Yt(t.headPitch,e.headPitch,n),leftArmLift:Yt(t.leftArmLift,e.leftArmLift,n),rightArmLift:Yt(t.rightArmLift,e.rightArmLift,n),leftArmOut:Yt(t.leftArmOut,e.leftArmOut,n),rightArmOut:Yt(t.rightArmOut,e.rightArmOut,n),leftElbowFlex:Yt(t.leftElbowFlex,e.leftElbowFlex,n),rightElbowFlex:Yt(t.rightElbowFlex,e.rightElbowFlex,n),leftHipFlex:Yt(t.leftHipFlex,e.leftHipFlex,n),rightHipFlex:Yt(t.rightHipFlex,e.rightHipFlex,n),leftHipOut:Yt(t.leftHipOut,e.leftHipOut,n),rightHipOut:Yt(t.rightHipOut,e.rightHipOut,n),leftKneeFlex:Yt(t.leftKneeFlex,e.leftKneeFlex,n),rightKneeFlex:Yt(t.rightKneeFlex,e.rightKneeFlex,n)}}function Qi(t,e,n,i=20){const r=n/2,s=[],a=6;for(let l=0;l<=a;l++){const c=l/a*(Math.PI/2);s.push(new Ne(Math.sin(c)*e,-r-Math.cos(c)*e))}s.push(new Ne((e+t)*.52,0));for(let l=0;l<=a;l++){const c=l/a*(Math.PI/2);s.push(new Ne(Math.cos(c)*t,r+Math.sin(c)*t))}const o=new Sc(s,i);return o.computeVertexNormals(),o}class zT{constructor(e,n=320){this.canvas=e,this.outCanvas=document.createElement("canvas"),this.outCanvas.width=di,this.outCanvas.height=di;const i=this.outCanvas.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("No se pudo inicializar el lienzo 2D para exportar GIF.");this.outCtx=i,this.renderer=new BT({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,alpha:!1}),this.renderer.setSize(n,n,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gx,this.renderer.toneMapping=ph,this.renderer.toneMappingExposure=1.12,this.scene=new E1,this.scene.background=new Je(1054759),this.camera=new ti(34,1,.1,100);const r=new G1(14742270,1976635,1.05);this.scene.add(r);const s=new Nu(16774635,1.85);s.position.set(2.4,4.2,3.4),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.camera.near=.5,s.shadow.camera.far=14,s.shadow.camera.left=-2.4,s.shadow.camera.right=2.4,s.shadow.camera.top=3,s.shadow.camera.bottom=-1.5,s.shadow.bias=-.001,this.scene.add(s);const a=new Nu(9684477,.85);a.position.set(-3,2.2,1.8),this.scene.add(a);const o=new Nu(16708551,.95);o.position.set(0,2.8,-3.2),this.scene.add(o);const l=new je(new bh(1.9,48),new kn({color:1515571,roughness:.92,metalness:.04}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,this.scene.add(l);const c=new je(new Ah(1.3,1.34,48),new pv({color:3359061,side:gi}));c.rotation.x=-Math.PI/2,c.position.y=.002,this.scene.add(c);const h=new kn({color:9741240,roughness:.46,metalness:.12}),f=new kn({color:15680580,roughness:.42,metalness:.04}),u=new kn({color:12131356,roughness:.5,metalness:.05}),p=new kn({color:14870768,roughness:.48,metalness:.06}),m=new kn({color:988970,roughness:.75,metalness:.05}),_=new kn({color:13358561,roughness:.25,metalness:.85}),g=new kn({color:1976635,roughness:.55,metalness:.25}),d=new kn({color:16347926,roughness:.45,metalness:.1}),v=new kn({color:1976635,roughness:.85,metalness:.05}),S=new kn({color:14427686,roughness:.35,metalness:.08}),M=()=>{const X=new It,ie=new je(new ir(.015,.015,.2,12),_);ie.rotation.z=Math.PI/2,X.add(ie);for(const le of[-.075,.075]){const ve=new je(new ir(.055,.055,.036,16),g);ve.rotation.z=Math.PI/2,ve.position.x=le,ve.castShadow=!0,X.add(ve)}return X},b=()=>{const ie=new It,le=new je(new ir(.016,.016,1.2,14),_);le.rotation.z=Math.PI/2,le.castShadow=!0,ie.add(le);for(const ve of[-1,1]){const re=new je(new ir(.145,.145,.042,22),g);re.rotation.z=Math.PI/2,re.position.x=ve*(1.2*.42),re.castShadow=!0,ie.add(re);const Pe=new je(new ir(.148,.148,.012,22),d);Pe.rotation.z=Math.PI/2,Pe.position.x=ve*(1.2*.42),ie.add(Pe)}return ie},E=()=>{const X=new It,ie=new je(new Li(.088,18,14),g);ie.scale.set(1,.92,1),ie.position.y=-.09,ie.castShadow=!0,X.add(ie);const le=new je(new Th(.052,.014,10,20,Math.PI),_);return le.position.y=-.01,X.add(le),X},x=new It,y=new It;y.position.set(0,.92,0),x.add(y);const C=new je(Qi(.145,.148,.14,24),f);C.scale.set(1.16,1,.78),C.position.y=.01,C.castShadow=!0,y.add(C);const R=new je(new ir(.144,.148,.042,24),u);R.scale.set(1.16,1,.78),R.position.y=.095,R.castShadow=!0,y.add(R);const D=new It;D.position.set(0,.1,0),y.add(D);const I=new je(Qi(.145,.132,.16,24),h);I.scale.set(1.12,1,.72),I.position.y=.08,I.castShadow=!0,D.add(I);const G=new It;G.position.set(0,.14,0),D.add(G);const P=[new Ne(.001,0),new Ne(.132,.01),new Ne(.15,.08),new Ne(.172,.175),new Ne(.165,.22),new Ne(.125,.252),new Ne(.058,.282),new Ne(.001,.285)],O=new Sc(P,26);O.computeVertexNormals();const K=new je(O,h);K.scale.set(1.2,1,.74),K.castShadow=!0,G.add(K);const z=new It;z.position.set(0,.275,.008),G.add(z);const H=new je(Qi(.047,.055,.062,18),h);H.position.y=.038,H.castShadow=!0,z.add(H);const B=new It;B.position.set(0,.078,.008),z.add(B);const j=new je(new Li(.1,24,20),h);j.scale.set(.86,1.08,.96),j.position.y=.1,j.castShadow=!0,B.add(j);const N=new je(new Li(.066,18,14),h);N.scale.set(.82,.85,.92),N.position.set(0,.046,.022),N.castShadow=!0,B.add(N);const te=X=>{const ie=new It;ie.position.set(X*.205,.215,0),G.add(ie);const le=new je(new Li(.058,16,14),h);le.scale.set(.95,1.08,.92),le.castShadow=!0,ie.add(le);const ve=new je(Qi(.052,.041,.22,18),h);ve.position.y=-.135,ve.castShadow=!0,ie.add(ve);const re=new It;re.position.set(0,-.275,0),ie.add(re);const Pe=new je(new Li(.041,14,12),h);Pe.castShadow=!0,re.add(Pe);const it=new je(Qi(.042,.029,.2,18),h);it.position.y=-.12,it.castShadow=!0,re.add(it);const Te=new It;Te.position.set(0,-.245,0),re.add(Te);const ze=new je(new Zl(.026,.055,6,12),h);ze.scale.set(.68,1,1.15),ze.position.y=-.042,ze.castShadow=!0,Te.add(ze);const We=new je(new Li(.054,16,14),S);We.scale.set(.95,1.18,1.02),We.position.y=-.045,We.visible=!1,We.castShadow=!0,Te.add(We);const Be=M();return Be.position.set(0,-.055,.015),Be.rotation.y=Math.PI/2,Be.visible=!1,Te.add(Be),{shoulder:ie,elbow:re,wrist:Te,hand:ze,glove:We,dumbbell:Be}},Me=X=>{const ie=new It;ie.position.set(X*.102,-.03,0),y.add(ie);const le=new je(Qi(.088,.084,.14,20),f);le.position.y=-.08,le.castShadow=!0,ie.add(le);const ve=new je(Qi(.074,.054,.23,20),h);ve.position.y=-.275,ve.castShadow=!0,ie.add(ve);const re=new It;re.position.set(0,-.43,0),ie.add(re);const Pe=new je(new Li(.054,16,14),h);Pe.castShadow=!0,re.add(Pe);const it=new je(Qi(.058,.036,.31,20),h);it.position.y=-.195,it.castShadow=!0,re.add(it);const Te=new It;Te.position.set(0,-.39,0),re.add(Te);const ze=new je(new Zl(.04,.105,8,12),p);ze.rotation.x=Math.PI/2,ze.position.set(0,-.025,.042),ze.scale.set(1.02,1,.85),ze.castShadow=!0,Te.add(ze);const We=new je(new Sr(.084,.02,.185),m);return We.position.set(0,-.048,.042),We.castShadow=!0,Te.add(We),{hip:ie,knee:re,ankle:Te}};this.athlete={root:x,pelvis:y,spine:D,chest:G,neck:z,head:B,leftArm:te(1),rightArm:te(-1),leftLeg:Me(1),rightLeg:Me(-1)},this.scene.add(this.athlete.root),this.propMat=new je(new Sr(.85,.024,1.9),v),this.propMat.position.set(0,.012,0),this.propMat.receiveShadow=!0,this.scene.add(this.propMat),this.propBarbell=b(),this.scene.add(this.propBarbell),this.propKettlebell=E(),this.scene.add(this.propKettlebell),this.propBox=new je(new Sr(.68,.38,.56),new kn({color:3359061,roughness:.72,metalness:.1})),this.propBox.position.set(0,.19,-.18),this.propBox.castShadow=!0,this.propBox.receiveShadow=!0,this.scene.add(this.propBox)}getPostureBase(e){switch(e){case"supine":return{y:.12,z:-.18,pitchRad:-1.52,rootYawRad:Math.PI/2};case"prone":return{y:.11,z:0,pitchRad:1.54,rootYawRad:Math.PI/2};case"plank":return{y:.56,z:-.1,pitchRad:1.38,rootYawRad:Math.PI/2};case"quadruped":return{y:.48,z:-.16,pitchRad:1.5,rootYawRad:Math.PI/2};case"seated":return{y:.14,z:-.22,pitchRad:0,rootYawRad:.35};case"standing":default:return{y:.92,z:0,pitchRad:0,rootYawRad:0}}}applyCamera(e,n){const i=n==="supine"||n==="prone"||n==="plank"||n==="quadruped";switch(e){case"front":this.camera.position.set(0,i?.95:1.28,i?2.65:3.3),this.camera.lookAt(0,i?.35:.98,0);break;case"side":this.camera.position.set(i?.25:2.95,i?.85:1.2,i?2.65:.15),this.camera.lookAt(0,i?.34:.92,0);break;case"low_side":this.camera.position.set(1.95,.95,2.25),this.camera.lookAt(.02,i?.36:.85,0);break;case"overhead":this.camera.position.set(.35,2.85,1.45),this.camera.lookAt(0,i?.25:.8,0);break;case"three_quarter":default:this.camera.position.set(1.75,i?1.1:1.35,i?2.35:2.85),this.camera.lookAt(0,i?.36:.95,0);break}}applyProps(e,n){const i=this.athlete;this.propMat.visible=e==="mat"||n==="supine"||n==="prone"||n==="plank"||n==="quadruped",this.propMat.rotation.y=n==="standing"||n==="seated"?0:Math.PI/2,this.propBarbell.visible=e==="barbell",this.propKettlebell.visible=e==="kettlebell",this.propBox.visible=e==="box";for(const r of[i.leftArm,i.rightArm])r.hand.visible=e!=="gloves",r.glove.visible=e==="gloves",r.dumbbell.visible=e==="dumbbells"}applySpecAtProgress(e,n){const i=.5-.5*Math.cos(n*Math.PI*2),r=kT(e.poseA,e.poseB,i);this.applyPose(e,r)}applyStaticPose(e,n){this.applyPose(e,n==="A"?e.poseA:e.poseB)}applyPose(e,n){const i=this.athlete,r=this.getPostureBase(e.posture);i.root.position.set(0,0,0),i.root.rotation.set(0,r.rootYawRad,0),i.pelvis.position.set(0,r.y+n.pelvisOffsetY,r.z),i.pelvis.rotation.order="YXZ",i.pelvis.rotation.set(r.pitchRad,0,0),i.spine.rotation.order="YXZ",i.spine.rotation.set(n.torsoPitch*Dt*.55,n.torsoTwist*Dt*.55,n.torsoRoll*Dt*.55),i.chest.rotation.order="YXZ",i.chest.rotation.set(n.torsoPitch*Dt*.45,n.torsoTwist*Dt*.45,n.torsoRoll*Dt*.45),i.neck.rotation.set(0,0,0),i.head.rotation.set(n.headPitch*Dt,0,0),i.leftArm.shoulder.rotation.order="XZY",i.leftArm.shoulder.rotation.set(-n.leftArmLift*Dt,0,n.leftArmOut*Dt),i.leftArm.elbow.rotation.order="XYZ",i.leftArm.elbow.rotation.set(-n.leftElbowFlex*Dt,0,0),i.leftArm.wrist.rotation.set(0,0,0),i.rightArm.shoulder.rotation.order="XZY",i.rightArm.shoulder.rotation.set(-n.rightArmLift*Dt,0,-n.rightArmOut*Dt),i.rightArm.elbow.rotation.order="XYZ",i.rightArm.elbow.rotation.set(-n.rightElbowFlex*Dt,0,0),i.rightArm.wrist.rotation.set(0,0,0),i.leftLeg.hip.rotation.order="XZY",i.leftLeg.hip.rotation.set(-n.leftHipFlex*Dt,0,n.leftHipOut*Dt),i.leftLeg.knee.rotation.set(n.leftKneeFlex*Dt,0,0),i.leftLeg.ankle.rotation.set(0,0,0),i.rightLeg.hip.rotation.order="XZY",i.rightLeg.hip.rotation.set(-n.rightHipFlex*Dt,0,-n.rightHipOut*Dt),i.rightLeg.knee.rotation.set(n.rightKneeFlex*Dt,0,0),i.rightLeg.ankle.rotation.set(0,0,0),this.applyProps(e.prop,e.posture),this.applyCamera(e.camera,e.posture),i.root.updateMatrixWorld(!0);const s=new q,a=new q;i.leftArm.wrist.getWorldPosition(s),i.rightArm.wrist.getWorldPosition(a);const o=s.clone().add(a).multiplyScalar(.5);e.prop==="barbell"&&(this.propBarbell.position.copy(o),this.propBarbell.position.y-=.04,this.propBarbell.rotation.y=r.rootYawRad),e.prop==="kettlebell"&&(this.propKettlebell.position.copy(o),this.propKettlebell.position.y-=.03),this.renderer.render(this.scene,this.camera)}async exportGifDataUri(e){const i=Math.max(55,Math.min(140,e.frameDelayMs||80)),r=Bx();for(let u=0;u<18;u++){this.applySpecAtProgress(e,u/18),this.outCtx.clearRect(0,0,di,di),this.outCtx.drawImage(this.canvas,0,0,di,di);const m=this.outCtx.getImageData(0,0,di,di).data,_=Ux(m,76),g=Ox(m,_);r.writeFrame(g,di,di,{palette:_,delay:i})}r.finish();const s=r.bytes(),a=32768,o=[];for(let u=0;u<s.length;u+=a)o.push(String.fromCharCode(...s.subarray(u,u+a)));const c=`data:image/gif;base64,${btoa(o.join(""))}`,h=Math.max(1,Math.round(s.length/1024)),f=new Blob([new Uint8Array(s)],{type:"image/gif"});return{mediaData:c,sizeKb:h,blob:f}}dispose(){this.renderer.dispose()}}const GT=[{id:"standing",label:"De pie"},{id:"supine",label:"Boca arriba"},{id:"prone",label:"Boca abajo"},{id:"plank",label:"Plancha"},{id:"quadruped",label:"4 apoyos"},{id:"seated",label:"Sentado"}],HT=[{id:"none",label:"Sin equipo"},{id:"mat",label:"Colchoneta"},{id:"dumbbells",label:"Mancuernas"},{id:"barbell",label:"Barra"},{id:"kettlebell",label:"Kettlebell"},{id:"box",label:"Cajón"},{id:"gloves",label:"Guantes"}],VT=[{id:"three_quarter",label:"3/4"},{id:"front",label:"Frontal"},{id:"side",label:"Lateral"},{id:"low_side",label:"Suelo"},{id:"overhead",label:"Arriba"}],Vt=({label:t,value:e,min:n,max:i,step:r=1,unit:s="°",onChange:a})=>w.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[w.jsx("span",{className:"w-28 text-slate-300 font-medium truncate",children:t}),w.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:o=>a(Number(o.target.value)),className:"flex-1 accent-emerald-500 cursor-pointer h-1.5"}),w.jsxs("span",{className:"w-12 text-right font-mono text-emerald-300 font-bold",children:[r<1?e.toFixed(2):Math.round(e),s]})]}),WT=({initialExerciseName:t,t:e=Er.es,onApplyGif:n})=>{const i=ke.useRef(null),r=ke.useRef(null),[s,a]=ke.useState(t.trim()||""),[o,l]=ke.useState(()=>t.trim()?ru(t).spec:yM("standing")),[c,h]=ke.useState(()=>t.trim()?ru(t).matchedNotes:["Elige un ejercicio por texto o ajusta las poses"]),[f,u]=ke.useState("play"),[p,m]=ke.useState("B"),[_,g]=ke.useState(!1),[d,v]=ke.useState(!1),[S,M]=ke.useState("arms"),[b,E]=ke.useState(!1),[x,y]=ke.useState(null),[C,R]=ke.useState(null),D=ke.useRef(o);D.current=o;const I=ke.useRef(f);I.current=f,ke.useEffect(()=>{const N=i.current;if(!N)return;let te=0,Me=performance.now();try{const X=new zT(N,320);r.current=X;const ie=le=>{const ve=D.current,re=I.current;if(re==="A"||re==="B")X.applyStaticPose(ve,re);else{const Pe=Math.max(900,(ve.frameDelayMs||80)*18),it=(le-Me)%Pe/Pe;X.applySpecAtProgress(ve,it)}te=requestAnimationFrame(ie)};return te=requestAnimationFrame(ie),()=>{cancelAnimationFrame(te),X.dispose(),r.current=null}}catch(X){R(X instanceof Error?X.message:"No se pudo iniciar WebGL 3D en este navegador.")}},[]);const G=N=>{const te=(N??s).trim();if(!te)return;N!==void 0&&a(N);const Me=ru(te);l(Me.spec),h(Me.matchedNotes),u("play"),y(null)},P=p==="A"?o.poseA:o.poseB,O=N=>{l(te=>{const X={...p==="A"?te.poseA:te.poseB,...N};return p==="A"?{...te,poseA:X}:{...te,poseB:X}})},K=N=>{const te=ct(N);l(Me=>({...Me,posture:N,prop:N==="standing"||N==="seated"?Me.prop==="mat"?"none":Me.prop:Me.prop==="none"?"mat":Me.prop,camera:N==="standing"||N==="seated"?"three_quarter":"low_side",poseA:{...te},poseB:{...te}}))},z=()=>{l(N=>({...N,poseB:{...N.poseA}})),m("B"),u("B")},H=()=>{l(N=>({...N,poseA:{...N.poseB},poseB:{...N.poseA}}))},B=async()=>{const N=r.current;if(N){E(!0),y("Renderizando 18 cuadros 3D...");try{const te=await N.exportGifDataUri(o);y(`✅ GIF generado (${te.sizeKb} KB)`),n(te.mediaData,s.trim()||void 0)}catch(te){y(te instanceof Error?`⚠️ ${te.message}`:"⚠️ Error al generar GIF")}finally{E(!1)}}},j=async()=>{const N=r.current;if(N){E(!0),y("Generando archivo .gif...");try{const te=await N.exportGifDataUri(o),Me=URL.createObjectURL(te.blob),X=document.createElement("a"),ie=(s.trim()||"ejercicio_3d").toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"ejercicio_3d";X.href=Me,X.download=`${ie}.gif`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Me),y(`💾 Descargado (${te.sizeKb} KB)`)}catch(te){y(te instanceof Error?`⚠️ ${te.message}`:"⚠️ Error al exportar GIF")}finally{E(!1)}}};return w.jsxs("div",{className:"space-y-3.5",children:[w.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-xl p-3 space-y-2",children:[w.jsx("label",{className:"block text-[11px] font-extrabold uppercase tracking-wider text-emerald-400",children:e.describeExerciseLabel||"✨ Describe cualquier ejercicio"}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("input",{type:"text",value:s,onChange:N=>a(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.preventDefault(),G())},placeholder:e.describePlaceholder||"Ej. Bicho muerto alternado, puente a una pierna...",className:"flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"}),w.jsx("button",{type:"button",onClick:()=>G(),className:"px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition shrink-0 cursor-pointer",children:e.generatePoseBtn||"Generar pose"})]}),w.jsx("div",{className:"flex flex-wrap gap-1.5",children:EM.map(N=>w.jsx("button",{type:"button",onClick:()=>G(N),className:"px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-[10px] font-semibold text-slate-300 transition cursor-pointer",children:N},N))}),c.length>0&&w.jsxs("p",{className:"text-[11px] text-slate-400",children:["🎯 ",c.join(" · ")]})]}),w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 items-start",children:[w.jsxs("div",{className:"flex flex-col items-center gap-2",children:[w.jsxs("div",{className:"w-[200px] h-[200px] rounded-xl overflow-hidden border border-slate-700 bg-[#101827] relative",children:[w.jsx("canvas",{ref:i,width:320,height:320,className:"w-full h-full block"}),C&&w.jsx("div",{className:"absolute inset-0 bg-slate-950/90 p-3 flex items-center justify-center text-center text-xs text-rose-400",children:C})]}),w.jsx("div",{className:"grid grid-cols-3 gap-1 w-[200px]",children:[["play",e.animPreview||"▶ Anim"],["A",e.poseABtn||"Pose A"],["B",e.poseBBtn||"Pose B"]].map(([N,te])=>w.jsx("button",{type:"button",onClick:()=>{u(N),(N==="A"||N==="B")&&m(N)},className:`py-1 rounded-lg text-[10px] font-bold border transition cursor-pointer ${f===N?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:te},N))})]}),w.jsxs("div",{className:"space-y-2.5",children:[w.jsxs("div",{children:[w.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:e.basePostureLabel||"Postura base"}),w.jsx("div",{className:"flex flex-wrap gap-1",children:GT.map(N=>w.jsx("button",{type:"button",onClick:()=>K(N.id),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${o.posture===N.id?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:N.label},N.id))})]}),w.jsxs("div",{children:[w.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:e.propLabel||"Equipo / Accesorio"}),w.jsx("div",{className:"flex flex-wrap gap-1",children:HT.map(N=>w.jsx("button",{type:"button",onClick:()=>l(te=>({...te,prop:N.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${o.prop===N.id?"bg-cyan-500/20 border-cyan-400 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:N.label},N.id))})]}),w.jsxs("div",{children:[w.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:e.cameraLabel||"Cámara"}),w.jsx("div",{className:"flex flex-wrap gap-1",children:VT.map(N=>w.jsx("button",{type:"button",onClick:()=>l(te=>({...te,camera:N.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${o.camera===N.id?"bg-indigo-500/20 border-indigo-400 text-indigo-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:N.label},N.id))})]}),w.jsx(Vt,{label:e.speedLabel||"Velocidad",value:o.frameDelayMs,min:55,max:130,step:5,unit:"ms",onChange:N=>l(te=>({...te,frameDelayMs:N}))})]})]}),w.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2.5",children:[w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[w.jsx("div",{className:"flex items-center gap-1",children:["A","B"].map(N=>w.jsxs("button",{type:"button",onClick:()=>{m(N),u(N)},className:`px-2.5 py-1 rounded-lg text-xs font-extrabold border transition cursor-pointer ${p===N?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-900 text-slate-300 border-slate-700"}`,children:[e.editingPoseLabel||"Editando Pose"," ",N," ",N==="A"?e.startWord||"(Inicio)":e.endWord||"(Fin)"]},N))}),w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("button",{type:"button",onClick:z,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:e.copyAToB||"Copiar A → B"}),w.jsx("button",{type:"button",onClick:H,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:"A ↔ B"})]})]}),w.jsx("div",{className:"grid grid-cols-3 gap-1",children:[["torso",e.torsoHeightTab||"Torso y Altura"],["arms",e.armsTab||"Brazos"],["legs",e.legsTab||"Piernas"]].map(([N,te])=>w.jsx("button",{type:"button",onClick:()=>M(N),className:`py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${S===N?"bg-slate-800 text-emerald-300 border border-emerald-500/40":"bg-slate-900/60 text-slate-400 hover:text-slate-200"}`,children:te},N))}),S==="torso"&&w.jsxs("div",{className:"space-y-1.5",children:[w.jsx(Vt,{label:"Altura cadera",value:P.pelvisOffsetY,min:-.55,max:.3,step:.02,unit:"m",onChange:N=>O({pelvisOffsetY:N})}),w.jsx(Vt,{label:"Inclinar torso",value:P.torsoPitch,min:-75,max:75,onChange:N=>O({torsoPitch:N})}),w.jsx(Vt,{label:"Giro torso",value:P.torsoTwist,min:-60,max:60,onChange:N=>O({torsoTwist:N})}),w.jsx(Vt,{label:"Ladeo lateral",value:P.torsoRoll,min:-35,max:35,onChange:N=>O({torsoRoll:N})}),w.jsx(Vt,{label:"Cabeza",value:P.headPitch,min:-40,max:40,onChange:N=>O({headPitch:N})})]}),S==="arms"&&w.jsxs("div",{className:"space-y-1.5",children:[w.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[w.jsx("input",{type:"checkbox",checked:_,onChange:N=>g(N.target.checked),className:"accent-emerald-500"}),w.jsx("span",{children:e.symmetricArmsLabel||"Mover ambos brazos iguales (simétrico)"})]}),w.jsx(Vt,{label:_?"Brazos adelante":"Brazo Izq. adelante",value:P.leftArmLift,min:-55,max:180,onChange:N=>O(_?{leftArmLift:N,rightArmLift:N}:{leftArmLift:N})}),!_&&w.jsx(Vt,{label:"Brazo Der. adelante",value:P.rightArmLift,min:-55,max:180,onChange:N=>O({rightArmLift:N})}),w.jsx(Vt,{label:_?"Abrir brazos":"Abrir brazo Izq.",value:P.leftArmOut,min:-25,max:155,onChange:N=>O(_?{leftArmOut:N,rightArmOut:N}:{leftArmOut:N})}),!_&&w.jsx(Vt,{label:"Abrir brazo Der.",value:P.rightArmOut,min:-25,max:155,onChange:N=>O({rightArmOut:N})}),w.jsx(Vt,{label:_?"Flexión codos":"Codo Izq.",value:P.leftElbowFlex,min:0,max:145,onChange:N=>O(_?{leftElbowFlex:N,rightElbowFlex:N}:{leftElbowFlex:N})}),!_&&w.jsx(Vt,{label:"Codo Der.",value:P.rightElbowFlex,min:0,max:145,onChange:N=>O({rightElbowFlex:N})})]}),S==="legs"&&w.jsxs("div",{className:"space-y-1.5",children:[w.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[w.jsx("input",{type:"checkbox",checked:d,onChange:N=>v(N.target.checked),className:"accent-emerald-500"}),w.jsx("span",{children:e.symmetricLegsLabel||"Mover ambas piernas iguales (simétrico)"})]}),w.jsx(Vt,{label:d?"Subir piernas":"Pierna Izq.",value:P.leftHipFlex,min:-50,max:130,onChange:N=>O(d?{leftHipFlex:N,rightHipFlex:N}:{leftHipFlex:N})}),!d&&w.jsx(Vt,{label:"Pierna Der.",value:P.rightHipFlex,min:-50,max:130,onChange:N=>O({rightHipFlex:N})}),w.jsx(Vt,{label:d?"Abrir piernas":"Abrir Izq.",value:P.leftHipOut,min:-25,max:65,onChange:N=>O(d?{leftHipOut:N,rightHipOut:N}:{leftHipOut:N})}),!d&&w.jsx(Vt,{label:"Abrir Der.",value:P.rightHipOut,min:-25,max:65,onChange:N=>O({rightHipOut:N})}),w.jsx(Vt,{label:d?"Flexión rodillas":"Rodilla Izq.",value:P.leftKneeFlex,min:0,max:145,onChange:N=>O(d?{leftKneeFlex:N,rightKneeFlex:N}:{leftKneeFlex:N})}),!d&&w.jsx(Vt,{label:"Rodilla Der.",value:P.rightKneeFlex,min:0,max:145,onChange:N=>O({rightKneeFlex:N})})]})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1",children:[w.jsx("button",{type:"button",disabled:b||!!C,onClick:B,className:"flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm transition cursor-pointer",children:b?e.creatingGifBtn||"⏳ Generando GIF...":e.createApplyGifBtn||"🎨 Crear y aplicar GIF al ejercicio"}),w.jsx("button",{type:"button",disabled:b||!!C,onClick:j,className:"py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-60 text-slate-100 font-bold text-xs border border-slate-700 transition cursor-pointer",children:e.downloadGifBtn||"💾 Descargar .gif"})]}),x&&w.jsx("p",{className:"text-xs text-emerald-300 font-semibold",children:x})]})},jT=({exercise:t,index:e,total:n,t:i=Er.es,onChange:r,onDuplicate:s,onDelete:a,onMoveUp:o,onMoveDown:l})=>{const c=gc(t),[h,f]=ke.useState(!1),[u,p]=ke.useState("catalog"),[m,_]=ke.useState(""),[g,d]=ke.useState(!1),[v,S]=ke.useState(null),M=ke.useRef(null),b=Sx(t),E=dh(t.mediaRef||t.mediaId),x=xy(t.mediaData),y=ke.useMemo(()=>{const P=m.trim().toLowerCase();return P?va.filter(O=>O.label.toLowerCase().includes(P)||O.category.toLowerCase().includes(P)||O.key.toLowerCase().includes(P)):va},[m]),C=(P,O)=>{r({...t,[P]:typeof O=="string"?O:Math.max(0,Number(O)||0)})},R=P=>{const{mediaData:O,mediaId:K,...z}=t;r({...z,mediaRef:P}),S(null),f(!1)},D=()=>{const{mediaData:P,mediaRef:O,mediaId:K,...z}=t;r(z),S(null),f(!1)},I=(P,O)=>{const{mediaRef:K,mediaId:z,...H}=t;r({...H,name:!t.name.trim()&&O?O:t.name,mediaData:P}),S(null),f(!1)},G=async P=>{var K;const O=(K=P.target.files)==null?void 0:K[0];if(P.target.value="",!!O){d(!0),S(null);try{const z=await SM(O),{mediaRef:H,mediaId:B,...j}=t;r({...j,mediaData:z.mediaData}),f(!1)}catch(z){S(z instanceof Error?z.message:"No se pudo procesar la imagen o GIF seleccionado.")}finally{d(!1)}}};return w.jsxs("div",{className:"bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 shadow-sm hover:border-slate-600 transition",children:[w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-3",children:[w.jsxs("div",{className:"flex items-center space-x-2.5 flex-1 min-w-[220px]",children:[w.jsx("span",{className:"flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-semibold text-xs shrink-0",children:e+1}),w.jsxs("div",{className:"relative shrink-0",children:[w.jsx("button",{type:"button",onClick:()=>{S(null),p("catalog"),f(!0)},title:b?i.changeGifTitle||"Cambiar GIF o imagen del ejercicio":i.addGifTitle||"Agregar GIF o imagen",className:`w-12 h-12 rounded-xl border overflow-hidden flex items-center justify-center transition cursor-pointer ${b?"border-emerald-500/60 bg-slate-950":"border-slate-700 bg-slate-900/80 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400"}`,children:b?w.jsxs(w.Fragment,{children:[w.jsx("img",{src:b,alt:t.name||i.exerciseDefaultName||"Ejercicio",className:"w-full h-full object-cover"}),E?w.jsx("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/80 text-[8px] font-extrabold text-emerald-400 text-center leading-tight py-0.5",children:E.bundled?"BASE":"WEB"}):x!==null?w.jsxs("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/80 text-[8px] font-mono font-bold text-cyan-300 text-center leading-tight py-0.5",children:[x,"KB"]}):null]}):w.jsx("span",{className:"text-[10px] font-bold tracking-tight leading-tight text-center px-1",children:"GIF"})}),b&&w.jsx("button",{type:"button",onClick:D,title:i.removeGifTitle||"Quitar GIF / imagen",className:"absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow cursor-pointer",children:"×"})]}),w.jsx("input",{type:"text",value:t.name,onChange:P=>C("name",P.target.value),placeholder:i.exerciseNamePlaceholder||"Nombre del ejercicio",className:"flex-1 bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-100 focus:outline-none focus:border-emerald-500"})]}),w.jsxs("div",{className:"flex items-center space-x-1",children:[w.jsx("button",{type:"button",onClick:o,disabled:e===0,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:i.moveUpTitle||"Mover arriba",children:w.jsx(by,{size:16})}),w.jsx("button",{type:"button",onClick:l,disabled:e===n-1,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:i.moveDownTitle||"Mover abajo",children:w.jsx(Ay,{size:16})}),w.jsx("button",{type:"button",onClick:s,className:"p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-700/60",title:i.duplicateTitle||"Duplicar",children:w.jsx(wy,{size:16})}),w.jsx("button",{type:"button",onClick:a,className:"p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-700/60",title:i.deleteTitle||"Eliminar",children:w.jsx(Ey,{size:16})})]})]}),w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:i.rounds}),w.jsx("input",{type:"number",min:1,value:t.roundCount,onChange:P=>C("roundCount",parseInt(P.target.value)||1),className:"w-full bg-slate-900/80 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-400"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-bold text-emerald-400 mb-1",children:i.work}),w.jsx("input",{type:"number",min:1,value:t.workDurationSeconds,onChange:P=>C("workDurationSeconds",parseInt(P.target.value)||0),className:"w-full bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-sm text-emerald-300 font-mono font-bold focus:outline-none focus:border-emerald-400"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-bold text-rose-400 mb-1",children:i.restBetween}),w.jsx("input",{type:"number",min:0,value:t.restBetweenRoundsSeconds,onChange:P=>C("restBetweenRoundsSeconds",parseInt(P.target.value)||0),className:"w-full bg-[#7A0D1E]/40 border border-rose-500/40 rounded-lg px-2.5 py-1.5 text-sm text-rose-300 font-mono font-bold focus:outline-none focus:border-rose-400"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:i.restAfter}),w.jsx("input",{type:"number",min:0,value:t.restAfterExerciseSeconds,onChange:P=>C("restAfterExerciseSeconds",parseInt(P.target.value)||0),className:"w-full bg-[#5E3A00]/40 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold focus:outline-none focus:border-amber-400"})]})]}),w.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400",children:[w.jsx("span",{children:i.estimatedDuration||"Duración estimada del ejercicio:"}),w.jsx("span",{className:"font-semibold text-slate-300 font-mono",children:St(c.totalSeconds)})]}),h&&w.jsx("div",{className:"fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>!g&&f(!1),children:w.jsxs("div",{className:`bg-slate-900 border border-slate-700 rounded-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all ${u==="creator3d"?"max-w-2xl":"max-w-lg"}`,onClick:P=>P.stopPropagation(),children:[w.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-base font-black text-white",children:i.mediaModalTitle||"Animación o imagen del ejercicio"}),w.jsx("p",{className:"text-xs text-slate-400",children:i.mediaModalDesc||"Elige del catálogo, sube un archivo o crea un GIF 3D a medida"})]}),w.jsx("button",{type:"button",onClick:()=>!g&&f(!1),className:"w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer",children:"×"})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-1.5 px-4 pt-3 pb-2 bg-slate-950/60 border-b border-slate-800/80",children:[w.jsxs("button",{type:"button",onClick:()=>p("catalog"),className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${u==="catalog"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:["📚 ",i.tabCatalog||"Catálogo"," (",va.length,") / ",i.tabUploadShort||"Subir"]}),w.jsx("button",{type:"button",onClick:()=>p("creator3d"),className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${u==="creator3d"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:i.tabCreator3d||"🎨 Crear GIF 3D (cualquier ejercicio)"})]}),w.jsx("div",{className:"p-4 space-y-4 overflow-y-auto flex-1",children:u==="creator3d"?w.jsx(WT,{initialExerciseName:t.name.trim()||m.trim(),t:i,onApplyGif:I}):w.jsxs(w.Fragment,{children:[w.jsxs("div",{children:[w.jsx("input",{ref:M,type:"file",accept:"image/gif,image/png,image/jpeg,image/webp",onChange:G,className:"hidden"}),w.jsx("button",{type:"button",disabled:g,onClick:()=>{var P;return(P=M.current)==null?void 0:P.click()},className:"w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer",children:g?w.jsx("span",{children:i.optimizingGifBtn||"⏳ Optimizando GIF / imagen (220×220)..."}):w.jsx("span",{children:i.uploadOwnGifBtn||"📤 Subir GIF o imagen propia (se comprime auto.)"})}),v&&w.jsxs("p",{className:"mt-2 text-xs text-rose-400 font-medium",children:["⚠️ ",v]})]}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center justify-between mb-2",children:[w.jsxs("span",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400",children:[i.integratedCatalog||"Catálogo integrado"," (",y.length,")"]}),b&&w.jsx("button",{type:"button",onClick:D,className:"text-xs font-bold text-rose-400 hover:text-rose-300 cursor-pointer",children:i.clearCurrent||"Quitar actual"})]}),w.jsx("input",{type:"text",value:m,onChange:P=>_(P.target.value),placeholder:i.searchExercisePlaceholder||"Buscar ejercicio (ej. burpees, boxeo, plancha)...",className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 mb-3"}),y.length===0?w.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center space-y-2.5",children:[w.jsxs("p",{className:"text-xs text-slate-400",children:[i.noPresetFound||"No hay ningún preset llamado"," ",w.jsxs("span",{className:"text-slate-200 font-semibold",children:['"',m.trim(),'"']})," ",i.inPresetsWord||"en los"," ",va.length," ",i.presetsWord||"predefinidos."]}),w.jsxs("button",{type:"button",onClick:()=>p("creator3d"),className:"px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer",children:["🎨 ",i.createIn3dBtn||"Crear en el Creador 3D"," (",m.trim(),")"]})]}):w.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-2.5",children:y.map(P=>{const O=(E==null?void 0:E.key)===P.key;return w.jsxs("button",{type:"button",onClick:()=>R(P.mediaRef),className:`rounded-xl p-2 border text-center transition flex flex-col items-center gap-1.5 cursor-pointer ${O?"border-emerald-400 bg-emerald-500/15":"border-slate-800 bg-slate-950/80 hover:border-slate-600"}`,children:[w.jsx("img",{src:P.url,alt:P.label,className:"w-16 h-16 rounded-lg object-cover bg-slate-900"}),w.jsx("span",{className:"text-[11px] font-bold text-slate-200 leading-tight line-clamp-2",children:P.label}),w.jsxs("span",{className:"text-[9px] font-semibold text-slate-400 uppercase",children:[P.category,P.bundled?"":" · WEB"]})]},P.key)})})]})]})})]})})]})},XT=({initialWorkout:t,t:e=Er.es,onWorkoutChange:n,onSaveFile:i,onOpenFile:r})=>{const[s,a]=ke.useState(t),[o,l]=ke.useState(null);ke.useEffect(()=>{a(E=>E===t?E:t)},[t]),ke.useEffect(()=>{n==null||n(s)},[s,n]);const c=s.routines[0],h=Ya(c),f=E=>{l(E),setTimeout(()=>l(null),3e3)},u=(E,x)=>{a(y=>({...y,[E]:x}))},p=(E,x)=>{a(y=>{const C=[...y.routines];return C[0]={...C[0],[E]:typeof x=="string"?x:Math.max(1,Number(x)||0)},{...y,routines:C}})},m=(E,x)=>{a(y=>{const C=[...y.routines],R=[...C[0].exercises];return R[E]=x,C[0]={...C[0],exercises:R},{...y,routines:C}})},_=()=>{a(E=>{const x=[...E.routines],y={...xx,id:"ex-"+Date.now(),name:`${e.exerciseDefaultName||"Ejercicio"} ${x[0].exercises.length+1}`};return x[0]={...x[0],exercises:[...x[0].exercises,y]},{...E,routines:x}})},g=E=>{a(x=>{const y=[...x.routines],C=y[0].exercises[E],R={...C,id:"ex-"+Date.now(),name:`${C.name} (copia)`},D=[...y[0].exercises];return D.splice(E+1,0,R),y[0]={...y[0],exercises:D},{...x,routines:y}})},d=E=>{if(c.exercises.length<=1){alert(e.minOneExerciseAlert||"La rutina debe tener al menos un ejercicio.");return}a(x=>{const y=[...x.routines],C=y[0].exercises.filter((R,D)=>D!==E);return y[0]={...y[0],exercises:C},{...x,routines:y}})},v=(E,x)=>{const y=x==="up"?E-1:E+1;y<0||y>=c.exercises.length||a(C=>{const R=[...C.routines],D=[...R[0].exercises],I=D[E];return D[E]=D[y],D[y]=I,R[0]={...R[0],exercises:D},{...C,routines:R}})},S=async()=>{const E=c.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",x=JSON.stringify(s,null,2),y=new File([x],`${E}.wkt`,{type:"application/octet-stream"}),C=`🔥 ¡${c.name}! • ⏱️ ${St(h.totalSeconds)} • 💪 ${c.exercises.length} ejercicios
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`,R=await wx(s,e);if(R){const D=new File([R],`${E}_card.png`,{type:"image/png"});if(typeof navigator.canShare=="function"){if(navigator.canShare({files:[D,y]}))try{await navigator.share({title:c.name,text:C,files:[D,y]});return}catch(I){if((I==null?void 0:I.name)==="AbortError")return}else if(navigator.canShare({files:[y]}))try{await navigator.share({title:c.name,text:C,files:[y]});return}catch(I){if((I==null?void 0:I.name)==="AbortError")return}}if(b(),navigator.clipboard&&typeof ClipboardItem<"u")try{await navigator.clipboard.write([new ClipboardItem({"image/png":R})]),f(`🖼️ Tarjeta copiada y archivo "${E}.wkt" descargado para adjuntar en WhatsApp.`),setTimeout(()=>window.open(`https://wa.me/?text=${encodeURIComponent(C)}`,"_blank"),700);return}catch{}}else b();f("¡Archivo descargado! Abriendo WhatsApp..."),setTimeout(()=>window.open(`https://wa.me/?text=${encodeURIComponent(C)}`,"_blank"),600)},M=()=>{const E=Ex(s);window.location.href=E,f("Abriendo aplicación en el móvil...")},b=()=>{const E=new Blob([JSON.stringify(s,null,2)],{type:"application/octet-stream"}),x=URL.createObjectURL(E),y=document.createElement("a");y.href=x,y.download=`${c.name.toLowerCase().replace(/\s+/g,"_")||"rutina"}.wkt`,y.click(),URL.revokeObjectURL(x),f("Archivo .wkt descargado.")};return w.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[o&&w.jsx("div",{className:"fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 font-semibold px-4 py-3 rounded-xl shadow-lg border border-emerald-400 animate-bounce",children:o}),w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800",children:[w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx(jl,{className:"w-10 h-10 shrink-0 shadow-md rounded-xl"}),w.jsxs("div",{children:[w.jsx("h1",{className:"text-2xl font-black text-slate-100 tracking-tight",children:e.appTitle}),w.jsx("p",{className:"text-xs text-slate-400",children:e.subtitle})]})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r&&w.jsxs("button",{type:"button",onClick:r,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition cursor-pointer",title:e.openWktBtn||"Abrir archivo .wkt",children:[w.jsx(bx,{size:16}),w.jsx("span",{children:e.openFileBtn||"Abrir Archivo"})]}),w.jsxs("button",{type:"button",onClick:i?()=>i(s):b,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition cursor-pointer",title:e.downloadWktBtn||"Guardar o descargar rutina",children:[w.jsx(Cy,{size:16}),w.jsx("span",{children:e.saveLocalBtn||"Guardar Local"})]}),w.jsxs("button",{type:"button",onClick:S,className:"flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-lg text-xs font-bold transition shadow-sm cursor-pointer",children:[w.jsx(Ax,{className:"w-4 h-4 shrink-0"}),w.jsx("span",{children:e.shareWhatsApp})]}),w.jsxs("button",{type:"button",onClick:M,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition cursor-pointer",children:[w.jsx(Ty,{size:16}),w.jsx("span",{children:e.openInApp})]})]})]}),w.jsxs("div",{className:"bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 mb-4",children:[w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:e.routineName}),w.jsx("input",{type:"text",value:c.name,onChange:E=>p("name",E.target.value),placeholder:"HIIT / Tabata",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 font-semibold focus:outline-none focus:border-emerald-500"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:e.author}),w.jsx("input",{type:"text",value:c.author,onChange:E=>p("author",E.target.value),placeholder:"",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500"})]})]}),w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:e.category}),w.jsx("input",{type:"text",value:s.category,onChange:E=>u("category",E.target.value),placeholder:"Fitness...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:e.sport}),w.jsx("input",{type:"text",value:s.sport,onChange:E=>u("sport",E.target.value),placeholder:"HIIT...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:e.cycles}),w.jsx("input",{type:"number",min:1,value:c.routineCycles,onChange:E=>p("routineCycles",parseInt(E.target.value)||1),className:"w-full bg-slate-900/90 border border-cyan-500/30 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:e.prepareShort||"Preparación (seg)"}),w.jsx("input",{type:"number",min:0,value:c.prepareDurationSeconds,onChange:E=>p("prepareDurationSeconds",parseInt(E.target.value)||0),className:"w-full bg-[#5E3A00]/35 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold"})]})]})]}),w.jsx(Py,{metrics:h,t:e}),w.jsxs("div",{className:"my-6",children:[w.jsxs("div",{className:"flex items-center justify-between mb-3",children:[w.jsxs("h2",{className:"text-lg font-bold text-slate-200",children:[e.exercisesHeading||"Ejercicios"," (",c.exercises.length,")"]}),w.jsxs("button",{type:"button",onClick:_,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer",children:[w.jsx(tm,{size:16}),w.jsx("span",{children:e.addExercise})]})]}),w.jsx("div",{className:"space-y-3",children:c.exercises.map((E,x)=>w.jsx(jT,{exercise:E,index:x,total:c.exercises.length,t:e,onChange:y=>m(x,y),onDuplicate:()=>g(x),onDelete:()=>d(x),onMoveUp:()=>v(x,"up"),onMoveDown:()=>v(x,"down")},E.id||x))}),w.jsxs("button",{type:"button",onClick:_,className:"mt-4 w-full py-3 border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-xl flex items-center justify-center space-x-2 text-slate-400 hover:text-emerald-400 transition cursor-pointer",children:[w.jsx(tm,{size:18}),w.jsx("span",{className:"text-sm font-semibold",children:e.addAnotherExercise})]})]})]})},qT=({workout:t,t:e,onOpenInApp:n,onEditInWeb:i,onDownloadWkt:r,onShareWhatsApp:s,onGoHome:a})=>{const o=t.routines[0],l=Ya(o),c=l.totalSeconds>0?Math.round(l.tutSeconds/l.totalSeconds*100):50,h=Math.max(0,100-c);return w.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-6",children:[a&&w.jsx("div",{className:"mb-3 flex justify-between items-center",children:w.jsx("button",{type:"button",onClick:a,className:"px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",children:w.jsx("span",{children:e.homeBtn||"🏠 Inicio"})})}),w.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden",children:[w.jsx("div",{className:"absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),w.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-3",children:[w.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:e.previewBadge||"✨ Rutina Compartida"}),t.category&&w.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700",children:["🏷️ ",t.category]}),t.sport&&w.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700",children:["🏅 ",t.sport]}),o.routineCycles>1&&w.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:["🔄 ",o.routineCycles,"x ",e.cycles||e.cyclesLabel]})]}),w.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight",children:o.name}),o.author&&w.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-1.5 flex items-center gap-1.5",children:[w.jsxs("span",{children:["👤 ",e.sharedBy||"Compartida por",":"]}),w.jsx("strong",{className:"text-slate-200",children:o.author})]}),w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6",children:[w.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[w.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalTime}),w.jsx("span",{className:"text-xl sm:text-2xl font-black text-white font-mono mt-1 block",children:St(l.totalSeconds)})]}),w.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-2xl p-3.5 text-center",children:[w.jsx("span",{className:"block text-[10px] font-bold text-emerald-300 uppercase tracking-wider",children:e.tut}),w.jsx("span",{className:"text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1 block",children:St(l.tutSeconds)})]}),w.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-2xl p-3.5 text-center",children:[w.jsx("span",{className:"block text-[10px] font-bold text-rose-300 uppercase tracking-wider",children:e.rest}),w.jsx("span",{className:"text-xl sm:text-2xl font-black text-rose-400 font-mono mt-1 block",children:St(l.restSeconds)})]}),w.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[w.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalRounds}),w.jsxs("span",{className:"text-xl sm:text-2xl font-black text-cyan-400 font-mono mt-1 block",children:[l.totalRounds," ",w.jsxs("span",{className:"text-xs font-normal text-slate-500",children:["(",l.exerciseCount,")"]})]})]})]}),w.jsxs("div",{className:"mb-6",children:[w.jsxs("div",{className:"flex justify-between text-[11px] font-semibold text-slate-400 mb-1.5",children:[w.jsx("span",{children:e.workVsRestRatio||"Distribución Trabajo vs Descanso"}),w.jsxs("span",{children:[w.jsxs("strong",{className:"text-emerald-400",children:[c,"%"]})," /"," ",w.jsxs("strong",{className:"text-rose-400",children:[h,"%"]})]})]}),w.jsxs("div",{className:"w-full h-2.5 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800",children:[w.jsx("div",{style:{width:`${c}%`},className:"bg-emerald-500 h-full transition-all"}),w.jsx("div",{style:{width:`${h}%`},className:"bg-rose-500 h-full transition-all"})]})]}),w.jsxs("div",{className:"space-y-2.5 mb-6",children:[w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[w.jsx("button",{type:"button",onClick:n,className:"w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 cursor-pointer",children:w.jsx("span",{children:e.openInApp})}),w.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[w.jsx(jl,{className:"w-6 h-6 shrink-0"}),w.jsx("span",{children:e.downloadApkBtn||"Descargar App Android (.apk)"})]})]}),w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[w.jsx("button",{type:"button",onClick:i,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.editRoutineBtn||"✏️ Editar en Web"}),w.jsx("button",{type:"button",onClick:r,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.downloadWktBtn||"📥 Descargar (.wkt)"}),w.jsxs("button",{type:"button",onClick:s,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer flex items-center justify-center gap-1.5",children:[w.jsx(Ax,{className:"w-4 h-4 text-[#25D366] shrink-0"}),w.jsx("span",{children:e.shareWhatsApp})]})]})]}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center justify-between mb-3",children:[w.jsxs("h2",{className:"text-sm font-extrabold text-slate-300 uppercase tracking-wider",children:[e.exercisesList," (",o.exercises.length,")"]}),o.prepareDurationSeconds>0&&w.jsxs("span",{className:"text-xs font-mono text-amber-300 bg-[#5E3A00]/50 border border-amber-500/40 px-2.5 py-0.5 rounded-lg font-bold",children:["⏱️ ",e.prepareBadge||"Preparación",": ",St(o.prepareDurationSeconds)]})]}),w.jsx("div",{className:"space-y-2.5",children:o.exercises.map((f,u)=>{const p=gc(f),m=Sx(f);return w.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/90 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("span",{className:"w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-xs flex items-center justify-center shrink-0",children:u+1}),m&&w.jsx("img",{src:m,alt:f.name,className:"w-12 h-12 rounded-xl object-cover border border-slate-700 bg-slate-900 shrink-0"}),w.jsxs("div",{children:[w.jsx("h3",{className:"font-bold text-slate-100 text-sm sm:text-base",children:f.name}),w.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-1 text-[11px] font-mono",children:[w.jsxs("span",{className:"px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-300 font-semibold",children:["🔄 ",f.roundCount," ",e.rounds]}),w.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#0F4D2A]/60 border border-emerald-500/40 text-emerald-300 font-bold",children:["⚡ ",St(f.workDurationSeconds)]}),f.restBetweenRoundsSeconds>0&&w.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#7A0D1E]/60 border border-rose-500/40 text-rose-300 font-bold",children:["💨 ",St(f.restBetweenRoundsSeconds)]}),f.restAfterExerciseSeconds>0&&w.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#5E3A00]/60 border border-amber-500/40 text-amber-300 font-bold",children:["🛑 ",St(f.restAfterExerciseSeconds)]})]})]})]}),w.jsxs("div",{className:"text-right sm:border-l sm:border-slate-800 sm:pl-4 flex sm:flex-col justify-between items-center sm:items-end",children:[w.jsx("span",{className:"text-[10px] uppercase text-slate-500 font-semibold",children:e.subtotal}),w.jsx("span",{className:"text-sm font-mono font-bold text-slate-200",children:St(p.totalSeconds)})]})]},f.id||u)})})]})]})]})},YT=({langTag:t,resolvedLangKey:e,label:n="Idioma",systemLanguageName:i,onChangeLang:r})=>{const[s,a]=ke.useState(!1),o=ke.useRef(null);ke.useEffect(()=>{if(!s)return;const h=u=>{o.current&&!o.current.contains(u.target)&&a(!1)},f=u=>{u.key==="Escape"&&a(!1)};return document.addEventListener("mousedown",h),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",f)}},[s]);const l=Qc.find(h=>h.tag===t)||Qc[0],c=e.toUpperCase();return w.jsxs("div",{ref:o,className:"relative",children:[w.jsxs("button",{type:"button",onClick:()=>a(h=>!h),title:n,"aria-label":n,"aria-expanded":s,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 text-xs font-bold shadow-sm transition cursor-pointer",children:[w.jsx(im,{size:15,className:"text-emerald-400 shrink-0"}),w.jsx("span",{children:l.flagEmoji}),w.jsx("span",{className:"font-mono tracking-wide",children:c}),w.jsx("span",{className:"text-[10px] text-slate-400",children:"▾"})]}),s&&w.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl py-1.5 z-50 overflow-hidden",children:[w.jsxs("div",{className:"px-3.5 py-2 border-b border-slate-800 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[w.jsx(im,{size:13,className:"text-emerald-400"}),w.jsx("span",{children:n})]}),w.jsx("div",{className:"max-h-72 overflow-y-auto py-1",children:Qc.map(h=>{const f=h.tag===l.tag,u=h.tag==="SYSTEM"&&i?i:h.displayName;return w.jsxs("button",{type:"button",onClick:()=>{r(h.tag),a(!1)},className:`w-full px-3.5 py-2 text-left flex items-center justify-between gap-2 text-xs transition cursor-pointer ${f?"bg-emerald-500/15 text-emerald-300 font-bold":"text-slate-200 hover:bg-slate-800/80"}`,children:[w.jsxs("span",{className:"flex items-center gap-2.5 min-w-0",children:[w.jsx("span",{className:"text-base leading-none shrink-0",children:h.flagEmoji}),w.jsx("span",{className:"truncate",children:u})]}),f&&w.jsx("span",{className:"text-emerald-400 font-black text-xs shrink-0",children:"✓"})]},h.tag)})})]})]})},$T=()=>{const[t,e]=ke.useState(()=>Qp()),[n,i]=ke.useState(!1),[r,s]=ke.useState(null),[a,o]=ke.useState("welcome"),[l,c]=ke.useState(()=>localStorage.getItem("timer_lang_tag")||"SYSTEM"),h=ke.useRef(null),f=ke.useRef("preview"),u=ke.useMemo(()=>My(l),[l]),p=Er[u]||Er.es,m=b=>{localStorage.setItem("timer_lang_tag",b),c(b)},_=b=>{var R;const E=((R=b.routines[0])==null?void 0:R.name)||"rutina",x=new Blob([JSON.stringify(b,null,2)],{type:"application/octet-stream"}),y=URL.createObjectURL(x),C=document.createElement("a");C.href=y,C.download=`${E.toLowerCase().replace(/\s+/g,"_")}.wkt`,C.click(),URL.revokeObjectURL(y)};ke.useEffect(()=>{const b=new URLSearchParams(window.location.search),E=b.get("wkt"),x=b.get("mode"),y=b.get("dl");if(E){const C=yy(E);C&&(e(C),i(!0),o(x==="edit"?"editor":"preview"),y==="1"&&setTimeout(()=>_(C),400))}},[]);const g=b=>{var E;f.current=b,s(null),(E=h.current)==null||E.click()},d=async b=>{var x;const E=(x=b.target.files)==null?void 0:x[0];if(b.target.value="",!!E)try{const y=await E.text(),C=JSON.parse(y);if(!yx(C)){s(p.invalidWktErr||"El archivo seleccionado no tiene un formato .wkt válido.");return}const R=Mx(C);e(R),i(!1),s(null),o(f.current)}catch{s(p.readWktErr||"No se pudo leer el archivo .wkt seleccionado.")}},v=()=>{window.location.href=Ex(t)},S=()=>{_(t)},M=async()=>{const b=t.routines[0],E=Ya(b),x=b.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",y=JSON.stringify(t,null,2),C=new File([y],`${x}.wkt`,{type:"application/octet-stream"}),R=`🔥 ¡${b.name}! • ⏱️ ${St(E.totalSeconds)} • 💪 ${b.exercises.length} ejercicios
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`,D=await wx(t,p);if(D){const I=new File([D],`${x}_card.png`,{type:"image/png"});if(typeof navigator.canShare=="function"){if(navigator.canShare({files:[I,C]}))try{await navigator.share({title:b.name,text:R,files:[I,C]});return}catch(G){if((G==null?void 0:G.name)==="AbortError")return}else if(navigator.canShare({files:[C]}))try{await navigator.share({title:b.name,text:R,files:[C]});return}catch(G){if((G==null?void 0:G.name)==="AbortError")return}}if(_(t),navigator.clipboard&&typeof ClipboardItem<"u")try{await navigator.clipboard.write([new ClipboardItem({"image/png":D})])}catch{}}else _(t);window.open(`https://wa.me/?text=${encodeURIComponent(R)}`,"_blank")};return w.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950",children:[w.jsx("input",{ref:h,type:"file",accept:".wkt,.json,application/json",onChange:d,className:"hidden"}),w.jsxs("header",{className:"max-w-4xl mx-auto w-full px-4 pt-3 flex items-center justify-between gap-2",children:[w.jsx("div",{children:a==="editor"&&w.jsx("button",{type:"button",onClick:()=>o("welcome"),className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",children:w.jsx("span",{children:p.homeBtn||"🏠 Inicio"})})}),w.jsx(YT,{langTag:l,resolvedLangKey:u,label:p.languageLabel||"Idioma",systemLanguageName:p.systemLanguage,onChangeLang:m})]}),n&&w.jsxs("div",{className:"bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 py-2 px-4 mt-2 flex items-center justify-center gap-3 text-xs font-medium",children:[w.jsx("span",{children:p.sharedBanner||"✨ Rutina cargada desde enlace compartido."}),w.jsx("button",{type:"button",onClick:()=>o(a==="preview"?"editor":"preview"),className:"px-2.5 py-0.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold transition",children:a==="preview"?p.editRoutineBtn:p.previewModeBtn})]}),w.jsx("main",{className:"flex-1",children:a==="welcome"?w.jsx("div",{className:"max-w-2xl mx-auto px-4 py-8",children:w.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center",children:[w.jsx("div",{className:"flex justify-center mb-4",children:w.jsx(jl,{className:"w-20 h-20 shadow-xl rounded-2xl"})}),w.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:p.appTitle}),w.jsx("p",{className:"text-sm sm:text-base text-slate-400 mt-2 max-w-md mx-auto",children:p.welcomeDesc||"Diseña, personaliza y comparte tus rutinas de entrenamiento cronometradas (.wkt)"}),w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7",children:[w.jsx("button",{type:"button",onClick:()=>{e(Qp()),s(null),o("editor")},className:"w-full py-4 px-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition cursor-pointer",children:p.newRoutineBtn||"+ Nueva Rutina"}),w.jsxs("button",{type:"button",onClick:()=>g("preview"),className:"w-full py-4 px-5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold rounded-2xl text-base transition flex items-center justify-center gap-2 cursor-pointer",children:[w.jsx(bx,{size:20}),w.jsx("span",{children:p.openWktBtn||"Abrir archivo .wkt"})]})]}),w.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"mt-3 w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[w.jsx(jl,{className:"w-6 h-6 shrink-0"}),w.jsx("span",{children:p.downloadApkBtn||"Descargar App Android (.apk)"})]}),r&&w.jsxs("p",{className:"mt-3 text-xs text-rose-400 font-semibold",children:["⚠️ ",r]}),w.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-800/90 text-left",children:[w.jsx("h2",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3",children:p.examplesTitle||"⚡ O explora una rutina de ejemplo:"}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:uy.map(b=>{const E=b.workout.routines[0],x=Ya(E);return w.jsxs("button",{type:"button",onClick:()=>{e(JSON.parse(JSON.stringify(b.workout))),o("preview")},className:"text-left bg-slate-950/90 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 transition cursor-pointer",children:[w.jsxs("span",{className:"text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:[b.badgeIcon," ",b.workout.category]}),w.jsx("h3",{className:"text-base font-black text-white mt-1.5",children:E.name}),w.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:["⏱️ ",St(x.totalSeconds)," • 💪 ",E.exercises.length," ",p.exercisesWord||"ejercicios"]})]},b.id)})})]})]})}):a==="preview"?w.jsx(qT,{workout:t,t:p,onOpenInApp:v,onEditInWeb:()=>o("editor"),onDownloadWkt:S,onShareWhatsApp:M,onGoHome:()=>o("welcome")}):w.jsx(XT,{initialWorkout:t,t:p,onWorkoutChange:e,onSaveFile:_,onOpenFile:()=>g("editor")})}),w.jsxs("footer",{className:"border-t border-slate-900 py-4 text-center text-xs text-slate-500",children:[p.appTitle," • ",p.subtitle]})]})};gx(document.getElementById("root")).render(w.jsx(ke.StrictMode,{children:w.jsx($T,{})}));
