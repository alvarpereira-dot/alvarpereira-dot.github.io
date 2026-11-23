(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var o0={exports:{}},tc={},l0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Gv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Xv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),Xh=Symbol.iterator;function Kv(t){return t===null||typeof t!="object"?null:(t=Xh&&t[Xh]||t["@@iterator"],typeof t=="function"?t:null)}var c0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u0=Object.assign,d0={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||c0}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f0(){}f0.prototype=Ys.prototype;function vf(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||c0}var _f=vf.prototype=new f0;_f.constructor=vf;u0(_f,Ys.prototype);_f.isPureReactComponent=!0;var qh=Array.isArray,h0=Object.prototype.hasOwnProperty,Sf={current:null},p0={key:!0,ref:!0,__self:!0,__source:!0};function m0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)h0.call(e,i)&&!p0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),l=0;l<o;l++)c[l]=arguments[l+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:eo,type:t,key:s,ref:a,props:r,_owner:Sf.current}}function Zv(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function Jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $h=/\/+/g;function Tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jv(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case eo:case zv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Tc(a,0):i,qh(r)?(n="",t!=null&&(n=t.replace($h,"$&/")+"/"),tl(r,e,n,"",function(l){return l})):r!=null&&(yf(r)&&(r=Zv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace($h,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",qh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Tc(s,o);a+=tl(s,e,n,c,r)}else if(c=Kv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Tc(s,o++),a+=tl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},nl={transition:null},e_={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Sf};function g0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ys;Xe.Fragment=Gv;Xe.Profiler=Vv;Xe.PureComponent=vf;Xe.StrictMode=Hv;Xe.Suspense=qv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e_;Xe.act=g0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=u0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)h0.call(e,c)&&!p0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var l=0;l<c;l++)o[l]=arguments[l+2];i.children=o}return{$$typeof:eo,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wv,_context:t},t.Consumer=t};Xe.createElement=m0;Xe.createFactory=function(t){var e=m0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Xv,render:t}};Xe.isValidElement=yf;Xe.lazy=function(t){return{$$typeof:Yv,_payload:{_status:-1,_result:t},_init:Qv}};Xe.memo=function(t,e){return{$$typeof:$v,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};Xe.unstable_act=g0;Xe.useCallback=function(t,e){return pn.current.useCallback(t,e)};Xe.useContext=function(t){return pn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return pn.current.useEffect(t,e)};Xe.useId=function(){return pn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return pn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Xe.useRef=function(t){return pn.current.useRef(t)};Xe.useState=function(t){return pn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return pn.current.useTransition()};Xe.version="18.3.1";l0.exports=Xe;var Be=l0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_=Be,n_=Symbol.for("react.element"),i_=Symbol.for("react.fragment"),r_=Object.prototype.hasOwnProperty,s_=t_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a_={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)r_.call(e,i)&&!a_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:n_,type:t,key:s,ref:a,props:r,_owner:s_.current}}tc.Fragment=i_;tc.jsx=x0;tc.jsxs=x0;o0.exports=tc;var S=o0.exports,v0={exports:{}},Nn={},_0={exports:{}},S0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,z){var V=G.length;G.push(z);e:for(;0<V;){var N=V-1>>>1,J=G[N];if(0<r(J,z))G[N]=z,G[V]=J,V=N;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var z=G[0],V=G.pop();if(V!==z){G[0]=V;e:for(var N=0,J=G.length,Me=J>>>1;N<Me;){var W=2*(N+1)-1,ie=G[W],re=W+1,ve=G[re];if(0>r(ie,V))re<J&&0>r(ve,ie)?(G[N]=ve,G[re]=V,N=re):(G[N]=ie,G[W]=V,N=W);else if(re<J&&0>r(ve,V))G[N]=ve,G[re]=V,N=re;else break e}}return z}function r(G,z){var V=G.sortIndex-z.sortIndex;return V!==0?V:G.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],l=[],f=1,d=null,u=3,p=!1,m=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(G){for(var z=n(l);z!==null;){if(z.callback===null)i(l);else if(z.startTime<=G)i(l),z.sortIndex=z.expirationTime,e(c,z);else break;z=n(l)}}function E(G){if(v=!1,y(G),!m)if(n(c)!==null)m=!0,X(b);else{var z=n(l);z!==null&&k(E,z.startTime-G)}}function b(G,z){m=!1,v&&(v=!1,h(M),M=-1),p=!0;var V=u;try{for(y(z),d=n(c);d!==null&&(!(d.expirationTime>z)||G&&!I());){var N=d.callback;if(typeof N=="function"){d.callback=null,u=d.priorityLevel;var J=N(d.expirationTime<=z);z=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(c)&&i(c),y(z)}else i(c);d=n(c)}if(d!==null)var Me=!0;else{var W=n(l);W!==null&&k(E,W.startTime-z),Me=!1}return Me}finally{d=null,u=V,p=!1}}var T=!1,_=null,M=-1,P=5,C=-1;function I(){return!(t.unstable_now()-C<P)}function U(){if(_!==null){var G=t.unstable_now();C=G;var z=!0;try{z=_(!0,G)}finally{z?D():(T=!1,_=null)}}else T=!1}var D;if(typeof g=="function")D=function(){g(U)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,O=R.port2;R.port1.onmessage=U,D=function(){O.postMessage(null)}}else D=function(){x(U,0)};function X(G){_=G,T||(T=!0,D())}function k(G,z){M=x(function(){G(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,X(b))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(G){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var V=u;u=z;try{return G()}finally{u=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,z){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var V=u;u=G;try{return z()}finally{u=V}},t.unstable_scheduleCallback=function(G,z,V){var N=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?N+V:N):V=N,G){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=V+J,G={id:f++,callback:z,priorityLevel:G,startTime:V,expirationTime:J,sortIndex:-1},V>N?(G.sortIndex=V,e(l,G),n(c)===null&&G===n(l)&&(v?(h(M),M=-1):v=!0,k(E,V-N))):(G.sortIndex=J,e(c,G),m||p||(m=!0,X(b))),G},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(G){var z=u;return function(){var V=u;u=z;try{return G.apply(this,arguments)}finally{u=V}}}})(S0);_0.exports=S0;var o_=_0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=Be,Ln=o_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,La={};function es(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(La[t]=e,t=0;t<e.length;t++)y0.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,c_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yh={},Kh={};function u_(t){return Uu.call(Kh,t)?!0:Uu.call(Yh,t)?!1:c_.test(t)?Kh[t]=!0:(Yh[t]=!0,!1)}function d_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f_(t,e,n,i){if(e===null||typeof e>"u"||d_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mf=/[\-:]([a-z])/g;function Ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mf,Ef);Qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mf,Ef);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mf,Ef);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f_(e,n,r,i)&&(n=null),i||r===null?u_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),Zh=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=Zh&&t[Zh]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Rc;function pa(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Cc=!1;function Pc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function h_(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case Ou:return"Profiler";case bf:return"StrictMode";case Bu:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E0:return(t.displayName||"Context")+".Consumer";case M0:return(t._context.displayName||"Context")+".Provider";case Af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tf:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function p_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m_(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=m_(t))}function A0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=b0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function Hu(t,e){T0(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ma(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function R0(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,P0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g_=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){g_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function L0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function N0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=L0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var x_=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(x_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Ls=null,Ns=null;function np(t){if(t=io(t)){if(typeof Yu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=ac(e),Yu(t.stateNode,t.type,e))}}function D0(t){Ls?Ns?Ns.push(t):Ns=[t]:Ls=t}function I0(){if(Ls){var t=Ls,e=Ns;if(Ns=Ls=null,np(t),e)for(t=0;t<e.length;t++)np(e[t])}}function F0(t,e){return t(e)}function U0(){}var Lc=!1;function O0(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return F0(t,e,n)}finally{Lc=!1,(Ls!==null||Ns!==null)&&(U0(),I0())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var i=ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ku=!1;if(Gi)try{var na={};Object.defineProperty(na,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Ku=!1}function v_(t,e,n,i,r,s,a,o,c){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(f){this.onError(f)}}var Ma=!1,Ml=null,El=!1,Zu=null,__={onError:function(t){Ma=!0,Ml=t}};function S_(t,e,n,i,r,s,a,o,c){Ma=!1,Ml=null,v_.apply(__,arguments)}function y_(t,e,n,i,r,s,a,o,c){if(S_.apply(this,arguments),Ma){if(Ma){var l=Ml;Ma=!1,Ml=null}else throw Error(oe(198));El||(El=!0,Zu=l)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function B0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ip(t){if(ts(t)!==t)throw Error(oe(188))}function M_(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ip(r),t;if(s===i)return ip(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function k0(t){return t=M_(t),t!==null?z0(t):null}function z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z0(t);if(e!==null)return e;t=t.sibling}return null}var G0=Ln.unstable_scheduleCallback,rp=Ln.unstable_cancelCallback,E_=Ln.unstable_shouldYield,w_=Ln.unstable_requestPaint,Tt=Ln.unstable_now,b_=Ln.unstable_getCurrentPriorityLevel,Cf=Ln.unstable_ImmediatePriority,H0=Ln.unstable_UserBlockingPriority,wl=Ln.unstable_NormalPriority,A_=Ln.unstable_LowPriority,V0=Ln.unstable_IdlePriority,nc=null,_i=null;function T_(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(nc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:P_,R_=Math.log,C_=Math.LN2;function P_(t){return t>>>=0,t===0?32:31-(R_(t)/C_|0)|0}var go=64,xo=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function L_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-si(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=L_(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function W0(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function D_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function j0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X0,Lf,q0,$0,Y0,Qu=!1,vo=[],hr=null,pr=null,mr=null,Ia=new Map,Fa=new Map,sr=[],I_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=io(e),e!==null&&Lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function F_(t,e,n,i,r){switch(e){case"focusin":return hr=ia(hr,t,e,n,i,r),!0;case"dragenter":return pr=ia(pr,t,e,n,i,r),!0;case"mouseover":return mr=ia(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,ia(Ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fa.set(s,ia(Fa.get(s)||null,t,e,n,i,r)),!0}return!1}function K0(t){var e=Br(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=B0(n),e!==null){t.blockedOn=e,Y0(t.priority,function(){q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=io(n),e!==null&&Lf(e),t.blockedOn=n,!1;e.shift()}return!0}function ap(t,e,n){il(t)&&n.delete(e)}function U_(){Qu=!1,hr!==null&&il(hr)&&(hr=null),pr!==null&&il(pr)&&(pr=null),mr!==null&&il(mr)&&(mr=null),Ia.forEach(ap),Fa.forEach(ap)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,U_)))}function Ua(t){function e(r){return ra(r,t)}if(0<vo.length){ra(vo[0],t);for(var n=1;n<vo.length;n++){var i=vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&ra(hr,t),pr!==null&&ra(pr,t),mr!==null&&ra(mr,t),Ia.forEach(e),Fa.forEach(e),n=0;n<sr.length;n++)i=sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)K0(n),n.blockedOn===null&&sr.shift()}var Ds=ji.ReactCurrentBatchConfig,Al=!0;function O_(t,e,n,i){var r=ot,s=Ds.transition;Ds.transition=null;try{ot=1,Nf(t,e,n,i)}finally{ot=r,Ds.transition=s}}function B_(t,e,n,i){var r=ot,s=Ds.transition;Ds.transition=null;try{ot=4,Nf(t,e,n,i)}finally{ot=r,Ds.transition=s}}function Nf(t,e,n,i){if(Al){var r=ed(t,e,n,i);if(r===null)Hc(t,e,i,Tl,n),sp(t,i);else if(F_(r,t,e,n,i))i.stopPropagation();else if(sp(t,i),e&4&&-1<I_.indexOf(t)){for(;r!==null;){var s=io(r);if(s!==null&&X0(s),s=ed(t,e,n,i),s===null&&Hc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Tl=null;function ed(t,e,n,i){if(Tl=null,t=Rf(i),t=Br(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=B0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function Z0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b_()){case Cf:return 1;case H0:return 4;case wl:case A_:return 16;case V0:return 536870912;default:return 16}default:return 16}}var lr=null,Df=null,rl=null;function J0(){if(rl)return rl;var t,e=Df,n=e.length,i,r="value"in lr?lr.value:lr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function op(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:op,this.isPropagationStopped=op,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},If=Dn(Ks),no=Et({},Ks,{view:0,detail:0}),k_=Dn(no),Dc,Ic,sa,ic=Et({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(Dc=t.screenX-sa.screenX,Ic=t.screenY-sa.screenY):Ic=Dc=0,sa=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),lp=Dn(ic),z_=Et({},ic,{dataTransfer:0}),G_=Dn(z_),H_=Et({},no,{relatedTarget:0}),Fc=Dn(H_),V_=Et({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),W_=Dn(V_),j_=Et({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X_=Dn(j_),q_=Et({},Ks,{data:0}),cp=Dn(q_),$_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K_[t])?!!e[t]:!1}function Ff(){return Z_}var J_=Et({},no,{key:function(t){if(t.key){var e=$_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q_=Dn(J_),eS=Et({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=Dn(eS),tS=Et({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),nS=Dn(tS),iS=Et({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=Dn(iS),sS=Et({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=Dn(sS),oS=[9,13,27,32],Uf=Gi&&"CompositionEvent"in window,Ea=null;Gi&&"documentMode"in document&&(Ea=document.documentMode);var lS=Gi&&"TextEvent"in window&&!Ea,Q0=Gi&&(!Uf||Ea&&8<Ea&&11>=Ea),dp=" ",fp=!1;function eg(t,e){switch(t){case"keyup":return oS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function cS(t,e){switch(t){case"compositionend":return tg(e);case"keypress":return e.which!==32?null:(fp=!0,dp);case"textInput":return t=e.data,t===dp&&fp?null:t;default:return null}}function uS(t,e){if(Ss)return t==="compositionend"||!Uf&&eg(t,e)?(t=J0(),rl=Df=lr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function ng(t,e,n,i){D0(i),e=Rl(e,"onChange"),0<e.length&&(n=new If("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wa=null,Oa=null;function fS(t){hg(t,0)}function rc(t){var e=Es(t);if(A0(e))return t}function hS(t,e){if(t==="change")return e}var ig=!1;if(Gi){var Uc;if(Gi){var Oc="oninput"in document;if(!Oc){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),Oc=typeof pp.oninput=="function"}Uc=Oc}else Uc=!1;ig=Uc&&(!document.documentMode||9<document.documentMode)}function mp(){wa&&(wa.detachEvent("onpropertychange",rg),Oa=wa=null)}function rg(t){if(t.propertyName==="value"&&rc(Oa)){var e=[];ng(e,Oa,t,Rf(t)),O0(fS,e)}}function pS(t,e,n){t==="focusin"?(mp(),wa=e,Oa=n,wa.attachEvent("onpropertychange",rg)):t==="focusout"&&mp()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rc(Oa)}function gS(t,e){if(t==="click")return rc(e)}function xS(t,e){if(t==="input"||t==="change")return rc(e)}function vS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:vS;function Ba(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,e){var n=gp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gp(n)}}function sg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ag(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _S(t){var e=ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sg(n.ownerDocument.documentElement,n)){if(i!==null&&Of(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xp(n,s);var a=xp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SS=Gi&&"documentMode"in document&&11>=document.documentMode,ys=null,td=null,ba=null,nd=!1;function vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||ys==null||ys!==yl(i)||(i=ys,"selectionStart"in i&&Of(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&Ba(ba,i)||(ba=i,i=Rl(td,"onSelect"),0<i.length&&(e=new If("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function So(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Bc={},og={};Gi&&(og=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function sc(t){if(Bc[t])return Bc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in og)return Bc[t]=e[n];return t}var lg=sc("animationend"),cg=sc("animationiteration"),ug=sc("animationstart"),dg=sc("transitionend"),fg=new Map,_p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){fg.set(t,e),es(e,[t])}for(var kc=0;kc<_p.length;kc++){var zc=_p[kc],yS=zc.toLowerCase(),MS=zc[0].toUpperCase()+zc.slice(1);Ar(yS,"on"+MS)}Ar(lg,"onAnimationEnd");Ar(cg,"onAnimationIteration");Ar(ug,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(dg,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function Sp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,y_(i,e,void 0,t),t.currentTarget=null}function hg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,l=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Sp(r,o,l),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,l=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Sp(r,o,l),s=c}}}if(El)throw t=Zu,El=!1,Zu=null,t}function ft(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(pg(e,t,2,!1),n.add(i))}function Gc(t,e,n){var i=0;e&&(i|=4),pg(n,t,i,e)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[yo]){t[yo]=!0,y0.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yo]||(e[yo]=!0,Gc("selectionchange",!1,e))}}function pg(t,e,n,i){switch(Z0(e)){case 1:var r=O_;break;case 4:r=B_;break;default:r=Nf}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Br(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}O0(function(){var l=s,f=Rf(n),d=[];e:{var u=fg.get(t);if(u!==void 0){var p=If,m=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":p=Q_;break;case"focusin":m="focus",p=Fc;break;case"focusout":m="blur",p=Fc;break;case"beforeblur":case"afterblur":p=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=G_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nS;break;case lg:case cg:case ug:p=W_;break;case dg:p=rS;break;case"scroll":p=k_;break;case"wheel":p=aS;break;case"copy":case"cut":case"paste":p=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=up}var v=(e&4)!==0,x=!v&&t==="scroll",h=v?u!==null?u+"Capture":null:u;v=[];for(var g=l,y;g!==null;){y=g;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,h!==null&&(E=Da(g,h),E!=null&&v.push(za(g,E,y)))),x)break;g=g.return}0<v.length&&(u=new p(u,m,null,n,f),d.push({event:u,listeners:v}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==$u&&(m=n.relatedTarget||n.fromElement)&&(Br(m)||m[Hi]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=l,m=m?Br(m):null,m!==null&&(x=ts(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=l),p!==m)){if(v=lp,E="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=up,E="onPointerLeave",h="onPointerEnter",g="pointer"),x=p==null?u:Es(p),y=m==null?u:Es(m),u=new v(E,g+"leave",p,n,f),u.target=x,u.relatedTarget=y,E=null,Br(f)===l&&(v=new v(h,g+"enter",m,n,f),v.target=y,v.relatedTarget=x,E=v),x=E,p&&m)t:{for(v=p,h=m,g=0,y=v;y;y=is(y))g++;for(y=0,E=h;E;E=is(E))y++;for(;0<g-y;)v=is(v),g--;for(;0<y-g;)h=is(h),y--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=is(v),h=is(h)}v=null}else v=null;p!==null&&yp(d,u,p,v,!1),m!==null&&x!==null&&yp(d,x,m,v,!0)}}e:{if(u=l?Es(l):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=hS;else if(hp(u))if(ig)b=xS;else{b=mS;var T=pS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=gS);if(b&&(b=b(t,l))){ng(d,b,n,f);break e}T&&T(t,u,l),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Vu(u,"number",u.value)}switch(T=l?Es(l):window,t){case"focusin":(hp(T)||T.contentEditable==="true")&&(ys=T,td=l,ba=null);break;case"focusout":ba=td=ys=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,vp(d,n,f);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":vp(d,n,f)}var _;if(Uf)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Ss?eg(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Q0&&n.locale!=="ko"&&(Ss||M!=="onCompositionStart"?M==="onCompositionEnd"&&Ss&&(_=J0()):(lr=f,Df="value"in lr?lr.value:lr.textContent,Ss=!0)),T=Rl(l,M),0<T.length&&(M=new cp(M,t,null,n,f),d.push({event:M,listeners:T}),_?M.data=_:(_=tg(n),_!==null&&(M.data=_)))),(_=lS?cS(t,n):uS(t,n))&&(l=Rl(l,"onBeforeInput"),0<l.length&&(f=new cp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:l}),f.data=_))}hg(d,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Da(t,n),s!=null&&i.unshift(za(t,s,r)),s=Da(t,e),s!=null&&i.push(za(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,l=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&l!==null&&(o=l,r?(c=Da(n,s),c!=null&&a.unshift(za(n,c,o))):r||(c=Da(n,s),c!=null&&a.push(za(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var wS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function Mp(t){return(typeof t=="string"?t:""+t).replace(wS,`
`).replace(bS,"")}function Mo(t,e,n){if(e=Mp(e),Mp(t)!==e&&n)throw Error(oe(425))}function Cl(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,Ep=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ep<"u"?function(t){return Ep.resolve(null).then(t).catch(RS)}:ad;function RS(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ua(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),mi="__reactFiber$"+Zs,Ga="__reactProps$"+Zs,Hi="__reactContainer$"+Zs,od="__reactEvents$"+Zs,CS="__reactListeners$"+Zs,PS="__reactHandles$"+Zs;function Br(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wp(t);t!==null;){if(n=t[mi])return n;t=wp(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[mi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function ac(t){return t[Ga]||null}var ld=[],ws=-1;function Tr(t){return{current:t}}function ht(t){0>ws||(t.current=ld[ws],ld[ws]=null,ws--)}function dt(t,e){ws++,ld[ws]=t.current,t.current=e}var Er={},ln=Tr(Er),Sn=Tr(!1),Xr=Er;function ks(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Pl(){ht(Sn),ht(ln)}function bp(t,e,n){if(ln.current!==Er)throw Error(oe(168));dt(ln,e),dt(Sn,n)}function mg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,p_(t)||"Unknown",r));return Et({},n,i)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Xr=ln.current,dt(ln,t),dt(Sn,Sn.current),!0}function Ap(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=mg(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,ht(Sn),ht(ln),dt(ln,t)):ht(Sn),dt(Sn,n)}var Ni=null,oc=!1,Wc=!1;function gg(t){Ni===null?Ni=[t]:Ni.push(t)}function LS(t){oc=!0,gg(t)}function Rr(){if(!Wc&&Ni!==null){Wc=!0;var t=0,e=ot;try{var n=Ni;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,oc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),G0(Cf,Rr),r}finally{ot=e,Wc=!1}}return null}var bs=[],As=0,Nl=null,Dl=0,Hn=[],Vn=0,qr=null,Di=1,Ii="";function Ur(t,e){bs[As++]=Dl,bs[As++]=Nl,Nl=t,Dl=e}function xg(t,e,n){Hn[Vn++]=Di,Hn[Vn++]=Ii,Hn[Vn++]=qr,qr=t;var i=Di;t=Ii;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Di=1<<32-si(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function Bf(t){t.return!==null&&(Ur(t,1),xg(t,1,0))}function kf(t){for(;t===Nl;)Nl=bs[--As],bs[As]=null,Dl=bs[--As],bs[As]=null;for(;t===qr;)qr=Hn[--Vn],Hn[Vn]=null,Ii=Hn[--Vn],Hn[Vn]=null,Di=Hn[--Vn],Hn[Vn]=null}var Pn=null,Cn=null,gt=!1,ti=null;function vg(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(gt){var e=Cn;if(e){var n=e;if(!Tp(t,e)){if(cd(t))throw Error(oe(418));e=gr(n.nextSibling);var i=Pn;e&&Tp(t,e)?vg(i,n):(t.flags=t.flags&-4097|2,gt=!1,Pn=t)}}else{if(cd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,gt=!1,Pn=t}}}function Rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Eo(t){if(t!==Pn)return!1;if(!gt)return Rp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=Cn)){if(cd(t))throw _g(),Error(oe(418));for(;e;)vg(t,e),e=gr(e.nextSibling)}if(Rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?gr(t.stateNode.nextSibling):null;return!0}function _g(){for(var t=Cn;t;)t=gr(t.nextSibling)}function zs(){Cn=Pn=null,gt=!1}function zf(t){ti===null?ti=[t]:ti.push(t)}var NS=ji.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function Sg(t){function e(h,g){if(t){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Sr(h,g),h.index=0,h.sibling=null,h}function s(h,g,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,g,y,E){return g===null||g.tag!==6?(g=Zc(y,h.mode,E),g.return=h,g):(g=r(g,y),g.return=h,g)}function c(h,g,y,E){var b=y.type;return b===_s?f(h,g,y.props.children,E,y.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&Cp(b)===g.type)?(E=r(g,y.props),E.ref=aa(h,g,y),E.return=h,E):(E=fl(y.type,y.key,y.props,null,h.mode,E),E.ref=aa(h,g,y),E.return=h,E)}function l(h,g,y,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Jc(y,h.mode,E),g.return=h,g):(g=r(g,y.children||[]),g.return=h,g)}function f(h,g,y,E,b){return g===null||g.tag!==7?(g=Vr(y,h.mode,E,b),g.return=h,g):(g=r(g,y),g.return=h,g)}function d(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Zc(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ho:return y=fl(g.type,g.key,g.props,null,h.mode,y),y.ref=aa(h,null,g),y.return=h,y;case vs:return g=Jc(g,h.mode,y),g.return=h,g;case tr:var E=g._init;return d(h,E(g._payload),y)}if(ma(g)||ta(g))return g=Vr(g,h.mode,y,null),g.return=h,g;wo(h,g)}return null}function u(h,g,y,E){var b=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:o(h,g,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:return y.key===b?c(h,g,y,E):null;case vs:return y.key===b?l(h,g,y,E):null;case tr:return b=y._init,u(h,g,b(y._payload),E)}if(ma(y)||ta(y))return b!==null?null:f(h,g,y,E,null);wo(h,y)}return null}function p(h,g,y,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(y)||null,o(g,h,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ho:return h=h.get(E.key===null?y:E.key)||null,c(g,h,E,b);case vs:return h=h.get(E.key===null?y:E.key)||null,l(g,h,E,b);case tr:var T=E._init;return p(h,g,y,T(E._payload),b)}if(ma(E)||ta(E))return h=h.get(y)||null,f(g,h,E,b,null);wo(g,E)}return null}function m(h,g,y,E){for(var b=null,T=null,_=g,M=g=0,P=null;_!==null&&M<y.length;M++){_.index>M?(P=_,_=null):P=_.sibling;var C=u(h,_,y[M],E);if(C===null){_===null&&(_=P);break}t&&_&&C.alternate===null&&e(h,_),g=s(C,g,M),T===null?b=C:T.sibling=C,T=C,_=P}if(M===y.length)return n(h,_),gt&&Ur(h,M),b;if(_===null){for(;M<y.length;M++)_=d(h,y[M],E),_!==null&&(g=s(_,g,M),T===null?b=_:T.sibling=_,T=_);return gt&&Ur(h,M),b}for(_=i(h,_);M<y.length;M++)P=p(_,h,M,y[M],E),P!==null&&(t&&P.alternate!==null&&_.delete(P.key===null?M:P.key),g=s(P,g,M),T===null?b=P:T.sibling=P,T=P);return t&&_.forEach(function(I){return e(h,I)}),gt&&Ur(h,M),b}function v(h,g,y,E){var b=ta(y);if(typeof b!="function")throw Error(oe(150));if(y=b.call(y),y==null)throw Error(oe(151));for(var T=b=null,_=g,M=g=0,P=null,C=y.next();_!==null&&!C.done;M++,C=y.next()){_.index>M?(P=_,_=null):P=_.sibling;var I=u(h,_,C.value,E);if(I===null){_===null&&(_=P);break}t&&_&&I.alternate===null&&e(h,_),g=s(I,g,M),T===null?b=I:T.sibling=I,T=I,_=P}if(C.done)return n(h,_),gt&&Ur(h,M),b;if(_===null){for(;!C.done;M++,C=y.next())C=d(h,C.value,E),C!==null&&(g=s(C,g,M),T===null?b=C:T.sibling=C,T=C);return gt&&Ur(h,M),b}for(_=i(h,_);!C.done;M++,C=y.next())C=p(_,h,M,C.value,E),C!==null&&(t&&C.alternate!==null&&_.delete(C.key===null?M:C.key),g=s(C,g,M),T===null?b=C:T.sibling=C,T=C);return t&&_.forEach(function(U){return e(h,U)}),gt&&Ur(h,M),b}function x(h,g,y,E){if(typeof y=="object"&&y!==null&&y.type===_s&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:e:{for(var b=y.key,T=g;T!==null;){if(T.key===b){if(b=y.type,b===_s){if(T.tag===7){n(h,T.sibling),g=r(T,y.props.children),g.return=h,h=g;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&Cp(b)===T.type){n(h,T.sibling),g=r(T,y.props),g.ref=aa(h,T,y),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}y.type===_s?(g=Vr(y.props.children,h.mode,E,y.key),g.return=h,h=g):(E=fl(y.type,y.key,y.props,null,h.mode,E),E.ref=aa(h,g,y),E.return=h,h=E)}return a(h);case vs:e:{for(T=y.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=r(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Jc(y,h.mode,E),g.return=h,h=g}return a(h);case tr:return T=y._init,x(h,g,T(y._payload),E)}if(ma(y))return m(h,g,y,E);if(ta(y))return v(h,g,y,E);wo(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,y),g.return=h,h=g):(n(h,g),g=Zc(y,h.mode,E),g.return=h,h=g),a(h)):n(h,g)}return x}var Gs=Sg(!0),yg=Sg(!1),Il=Tr(null),Fl=null,Ts=null,Gf=null;function Hf(){Gf=Ts=Fl=null}function Vf(t){var e=Il.current;ht(Il),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Fl=t,Gf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Fl===null)throw Error(oe(308));Ts=t,Fl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var kr=null;function Wf(t){kr===null?kr=[t]:kr.push(t)}function Mg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Wf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}function Pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,l=c.next;c.next=null,a===null?s=l:a.next=l,a=c;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=l:o.next=l,f.lastBaseUpdate=c))}if(s!==null){var d=r.baseState;a=0,f=l=c=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,v=o;switch(u=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(p,d,u);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,u=typeof m=="function"?m.call(p,d,u):m,u==null)break e;d=Et({},d,u);break e;case 2:nr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(l=f=p,c=d):f=f.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(c=d),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=a,t.lanes=a,t.memoizedState=d}}function Lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var ro={},Si=Tr(ro),Ha=Tr(ro),Va=Tr(ro);function zr(t){if(t===ro)throw Error(oe(174));return t}function Xf(t,e){switch(dt(Va,e),dt(Ha,t),dt(Si,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}ht(Si),dt(Si,e)}function Hs(){ht(Si),ht(Ha),ht(Va)}function wg(t){zr(Va.current);var e=zr(Si.current),n=ju(e,t.type);e!==n&&(dt(Ha,t),dt(Si,n))}function qf(t){Ha.current===t&&(ht(Si),ht(Ha))}var _t=Tr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function $f(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var ol=ji.ReactCurrentDispatcher,Xc=ji.ReactCurrentBatchConfig,$r=0,yt=null,Ft=null,Wt=null,Bl=!1,Aa=!1,Wa=0,DS=0;function nn(){throw Error(oe(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Kf(t,e,n,i,r,s){if($r=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?OS:BS,t=n(i,r),Aa){s=0;do{if(Aa=!1,Wa=0,25<=s)throw Error(oe(301));s+=1,Wt=Ft=null,e.updateQueue=null,ol.current=kS,t=n(i,r)}while(Aa)}if(ol.current=kl,e=Ft!==null&&Ft.next!==null,$r=0,Wt=Ft=yt=null,Bl=!1,e)throw Error(oe(300));return t}function Zf(){var t=Wa!==0;return Wa=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?yt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function qn(){if(Ft===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Wt===null?yt.memoizedState:Wt.next;if(e!==null)Wt=e,Ft=t;else{if(t===null)throw Error(oe(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Wt===null?yt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ja(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=qn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,l=s;do{var f=l.lane;if(($r&f)===f)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),i=l.hasEagerState?l.eagerState:t(i,l.action);else{var d={lane:f,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(o=c=d,a=i):c=c.next=d,yt.lanes|=f,Yr|=f}l=l.next}while(l!==null&&l!==s);c===null?a=i:c.next=o,oi(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=qn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bg(){}function Ag(t,e){var n=yt,i=qn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Jf(Cg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Xa(9,Rg.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(oe(349));$r&30||Tg(n,e,r)}return r}function Tg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rg(t,e,n,i){e.value=n,e.getSnapshot=i,Pg(e)&&Lg(t)}function Cg(t,e,n){return n(function(){Pg(e)&&Lg(t)})}function Pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function Lg(t){var e=Vi(t,1);e!==null&&ai(e,t,1,-1)}function Np(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=US.bind(null,yt,t),[e.memoizedState,t]}function Xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ng(){return qn().memoizedState}function ll(t,e,n,i){var r=hi();yt.flags|=t,r.memoizedState=Xa(1|e,n,void 0,i===void 0?null:i)}function lc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&Yf(i,a.deps)){r.memoizedState=Xa(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Xa(1|e,n,s,i)}function Dp(t,e){return ll(8390656,8,t,e)}function Jf(t,e){return lc(2048,8,t,e)}function Dg(t,e){return lc(4,2,t,e)}function Ig(t,e){return lc(4,4,t,e)}function Fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ug(t,e,n){return n=n!=null?n.concat([t]):null,lc(4,4,Fg.bind(null,e,t),n)}function Qf(){}function Og(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Bg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function kg(t,e,n){return $r&21?(oi(n,e)||(n=W0(),yt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function IS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{ot=n,Xc.transition=i}}function zg(){return qn().memoizedState}function FS(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Hg(e,n);else if(n=Mg(t,e,n,i),n!==null){var r=fn();ai(n,t,i,r),Vg(n,e,i)}}function US(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Hg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,a)){var c=e.interleaved;c===null?(r.next=r,Wf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Mg(t,e,r,i),n!==null&&(r=fn(),ai(n,t,i,r),Vg(n,e,i))}}function Gg(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Hg(t,e){Aa=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}var kl={readContext:Xn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},OS={readContext:Xn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Dp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,Fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=FS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:Qf,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=IS.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=hi();if(gt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),jt===null)throw Error(oe(349));$r&30||Tg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dp(Cg.bind(null,i,s,t),[t]),i.flags|=2048,Xa(9,Rg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=jt.identifierPrefix;if(gt){var n=Ii,i=Di;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BS={readContext:Xn,useCallback:Og,useContext:Xn,useEffect:Jf,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ig,useMemo:Bg,useReducer:qc,useRef:Ng,useState:function(){return qc(ja)},useDebugValue:Qf,useDeferredValue:function(t){var e=qn();return kg(e,Ft.memoizedState,t)},useTransition:function(){var t=qc(ja)[0],e=qn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Ag,useId:zg,unstable_isNewReconciler:!1},kS={readContext:Xn,useCallback:Og,useContext:Xn,useEffect:Jf,useImperativeHandle:Ug,useInsertionEffect:Dg,useLayoutEffect:Ig,useMemo:Bg,useReducer:$c,useRef:Ng,useState:function(){return $c(ja)},useDebugValue:Qf,useDeferredValue:function(t){var e=qn();return Ft===null?e.memoizedState=t:kg(e,Ft.memoizedState,t)},useTransition:function(){var t=$c(ja)[0],e=qn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Ag,useId:zg,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=_r(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ai(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=_r(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ai(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=_r(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(ai(e,t,i,n),al(e,t,i))}};function Ip(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function Wg(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=yn(e)?Xr:ln.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=yn(e)?Xr:ln.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cc.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=h_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zS=typeof WeakMap=="function"?WeakMap:Map;function jg(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,wd=i),pd(t,e)},n}function Xg(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ey.bind(null,t,e,n),e.then(t,t))}function Op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var GS=ji.ReactCurrentOwner,vn=!1;function dn(t,e,n,i){e.child=t===null?yg(e,null,n,i):Gs(e,t.child,n,i)}function kp(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=Kf(t,e,n,i,s,r),n=Zf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(gt&&n&&Bf(e),e.flags|=1,dn(t,e,i,r),e.child)}function zp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qg(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(a,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function qg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return md(t,e,n,i,r)}function $g(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Cs,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Cs,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Cs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Cs,Tn),Tn|=i;return dn(t,e,r,n),e.child}function Yg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=yn(n)?Xr:ln.current;return s=ks(e,s),Is(e,r),n=Kf(t,e,n,i,s,r),i=Zf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(gt&&i&&Bf(e),e.flags|=1,dn(t,e,n,r),e.child)}function Gp(t,e,n,i,r){if(yn(n)){var s=!0;Ll(e)}else s=!1;if(Is(e,r),e.stateNode===null)cl(t,e),Wg(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=Xn(l):(l=yn(n)?Xr:ln.current,l=ks(e,l));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==l)&&Fp(e,a,i,l),nr=!1;var u=e.memoizedState;a.state=u,Ul(e,i,a,r),c=e.memoizedState,o!==i||u!==c||Sn.current||nr?(typeof f=="function"&&(fd(e,n,f,i),c=e.memoizedState),(o=nr||Ip(e,n,o,i,u,c,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=l,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Eg(t,e),o=e.memoizedProps,l=e.type===e.elementType?o:Qn(e.type,o),a.props=l,d=e.pendingProps,u=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Xn(c):(c=yn(n)?Xr:ln.current,c=ks(e,c));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||u!==c)&&Fp(e,a,i,c),nr=!1,u=e.memoizedState,a.state=u,Ul(e,i,a,r);var m=e.memoizedState;o!==d||u!==m||Sn.current||nr?(typeof p=="function"&&(fd(e,n,p,i),m=e.memoizedState),(l=nr||Ip(e,n,l,i,u,m,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=c,i=l):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){Yg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ap(e,n,!1),Wi(t,e,s);i=e.stateNode,GS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):dn(t,e,o,s),e.memoizedState=i.state,r&&Ap(e,n,!0),e.child}function Kg(t){var e=t.stateNode;e.pendingContext?bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bp(t,e.context,!1),Xf(t,e.containerInfo)}function Hp(t,e,n,i,r){return zs(),zf(r),e.flags|=256,dn(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zg(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(_t,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=fc(a,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=xd,t):eh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return HS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Sr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Sr(o,s):(s=Vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?vd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function eh(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,i){return i!==null&&zf(i),Gs(e,t.child,null,n),t=eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(oe(422))),bo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=vd(a),e.memoizedState=xd,s);if(!(e.mode&1))return bo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=Yc(s,i,void 0),bo(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),ai(i,t,r,-1))}return ah(),i=Yc(Error(oe(421))),bo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ty.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=gr(r.nextSibling),Pn=e,gt=!0,ti=null,t!==null&&(Hn[Vn++]=Di,Hn[Vn++]=Ii,Hn[Vn++]=qr,Di=t.id,Ii=t.overflow,qr=e),e=eh(e,i.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Jg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VS(t,e,n){switch(e.tag){case 3:Kg(e),zs();break;case 5:wg(e);break;case 1:yn(e.type)&&Ll(e);break;case 4:Xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Zg(t,e,n):(dt(_t,_t.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);dt(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Jg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,$g(t,e,n)}return Wi(t,e,n)}var Qg,_d,ex,tx;Qg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};ex=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(Si.current);var s=null;switch(n){case"input":r=Gu(t,r),i=Gu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}Xu(n,i);var a;n=null;for(l in r)if(!i.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var o=r[l];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(La.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in i){var c=i[l];if(o=r!=null?r[l]:void 0,i.hasOwnProperty(l)&&c!==o&&(c!=null||o!=null))if(l==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(La.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&ft("scroll",t),s||o===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};tx=function(t,e,n,i){n!==i&&(e.flags|=4)};function oa(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function WS(t,e,n){var i=e.pendingProps;switch(kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return yn(e.type)&&Pl(),rn(e),null;case 3:return i=e.stateNode,Hs(),ht(Sn),ht(ln),$f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Td(ti),ti=null))),_d(t,e),rn(e),null;case 5:qf(e);var r=zr(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)ex(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return rn(e),null}if(t=zr(Si.current),Eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)ft(xa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Jh(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":ep(i,s),ft("invalid",i)}Xu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",""+o]):La.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":po(i),Qh(i,s,!0);break;case"textarea":po(i),tp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[Ga]=i,Qg(t,e,!1,!1),e.stateNode=t;e:{switch(a=qu(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)ft(xa[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Jh(t,i),r=Gu(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),ft("invalid",t);break;case"textarea":ep(t,i),r=Wu(t,i),ft("invalid",t);break;default:r=i}Xu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?N0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&P0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Na(t,c):typeof c=="number"&&Na(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ft("scroll",t):c!=null&&wf(t,s,c,a))}switch(n){case"input":po(t),Qh(t,i,!1);break;case"textarea":po(t),tp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)tx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=zr(Va.current),zr(Si.current),Eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return rn(e),null;case 13:if(ht(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Cn!==null&&e.mode&1&&!(e.flags&128))_g(),zs(),e.flags|=98560,s=!1;else if(s=Eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[mi]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ti!==null&&(Td(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ut===0&&(Ut=3):ah())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return Hs(),_d(t,e),t===null&&ka(e.stateNode.containerInfo),rn(e),null;case 10:return Vf(e.type._context),rn(e),null;case 17:return yn(e.type)&&Pl(),rn(e),null;case 19:if(ht(_t),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)oa(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ol(t),a!==null){for(e.flags|=128,oa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ws&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return rn(e),null}else 2*Tt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=_t.current,dt(_t,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function jS(t,e){switch(kf(e),e.tag){case 1:return yn(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),ht(Sn),ht(ln),$f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(ht(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(_t),null;case 4:return Hs(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var Ao=!1,on=!1,XS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Wp=!1;function qS(t,e){if(id=Al,t=ag(),Of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,l=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(c=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++l===r&&(o=a),u===s&&++f===i&&(c=a),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Al=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,x=m.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Qn(e.type,v),x);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){wt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return m=Wp,Wp=!1,m}function Ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,n,s)}r=r.next}while(r!==i)}}function uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function nx(t){var e=t.alternate;e!==null&&(t.alternate=null,nx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[Ga],delete e[od],delete e[CS],delete e[PS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ix(t){return t.tag===5||t.tag===3||t.tag===4}function jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Yt=null,ei=!1;function $i(t,e,n){for(n=n.child;n!==null;)rx(t,e,n),n=n.sibling}function rx(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(nc,n)}catch{}switch(n.tag){case 5:on||Rs(n,e);case 6:var i=Yt,r=ei;Yt=null,$i(t,e,n),Yt=i,ei=r,Yt!==null&&(ei?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ei?(t=Yt,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),Ua(t)):Vc(Yt,n.stateNode));break;case 4:i=Yt,r=ei,Yt=n.stateNode.containerInfo,ei=!0,$i(t,e,n),Yt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Sd(n,e,a),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!on&&(Rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){wt(n,e,o)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,$i(t,e,n),on=i):$i(t,e,n);break;default:$i(t,e,n)}}function Xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XS),e.forEach(function(i){var r=ny.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,ei=!1;break e;case 3:Yt=o.stateNode.containerInfo,ei=!0;break e;case 4:Yt=o.stateNode.containerInfo,ei=!0;break e}o=o.return}if(Yt===null)throw Error(oe(160));rx(s,a,r),Yt=null,ei=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){wt(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sx(e,t),e=e.sibling}function sx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),ci(t),i&4){try{Ta(3,t,t.return),uc(3,t)}catch(v){wt(t,t.return,v)}try{Ta(5,t,t.return)}catch(v){wt(t,t.return,v)}}break;case 1:Yn(e,t),ci(t),i&512&&n!==null&&Rs(n,n.return);break;case 5:if(Yn(e,t),ci(t),i&512&&n!==null&&Rs(n,n.return),t.flags&32){var r=t.stateNode;try{Na(r,"")}catch(v){wt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&T0(r,s),qu(o,a);var l=qu(o,s);for(a=0;a<c.length;a+=2){var f=c[a],d=c[a+1];f==="style"?N0(r,d):f==="dangerouslySetInnerHTML"?P0(r,d):f==="children"?Na(r,d):wf(r,f,d,l)}switch(o){case"input":Hu(r,s);break;case"textarea":R0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ps(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ga]=s}catch(v){wt(t,t.return,v)}}break;case 6:if(Yn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){wt(t,t.return,v)}}break;case 3:if(Yn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(v){wt(t,t.return,v)}break;case 4:Yn(e,t),ci(t);break;case 13:Yn(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ih=Tt())),i&4&&Xp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(on=(l=on)||f,Yn(e,t),on=l):Yn(e,t),ci(t),i&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(d=Ee=f;Ee!==null;){switch(u=Ee,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ta(4,u,u.return);break;case 1:Rs(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){wt(i,n,v)}}break;case 5:Rs(u,u.return);break;case 22:if(u.memoizedState!==null){$p(d);continue}}p!==null?(p.return=u,Ee=p):$p(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,l?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=L0("display",a))}catch(v){wt(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(v){wt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,t),ci(t),i&4&&Xp(t);break;case 21:break;default:Yn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ix(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=jp(t);Ed(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=jp(t);Md(t,o,a);break;default:throw Error(oe(161))}}catch(c){wt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $S(t,e,n){Ee=t,ax(t)}function ax(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ao;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||on;o=Ao;var l=on;if(Ao=a,(on=c)&&!l)for(Ee=r;Ee!==null;)a=Ee,c=a.child,a.tag===22&&a.memoizedState!==null?Yp(r):c!==null?(c.return=a,Ee=c):Yp(r);for(;s!==null;)Ee=s,ax(s),s=s.sibling;Ee=r,Ao=o,on=l}qp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):qp(t)}}function qp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var f=l.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ua(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}on||e.flags&512&&yd(e)}catch(u){wt(e,e.return,u)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function $p(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Yp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uc(4,e)}catch(c){wt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){wt(e,r,c)}}var s=e.return;try{yd(e)}catch(c){wt(e,s,c)}break;case 5:var a=e.return;try{yd(e)}catch(c){wt(e,a,c)}}}catch(c){wt(e,e.return,c)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var YS=Math.ceil,zl=ji.ReactCurrentDispatcher,th=ji.ReactCurrentOwner,jn=ji.ReactCurrentBatchConfig,et=0,jt=null,Pt=null,Zt=0,Tn=0,Cs=Tr(0),Ut=0,qa=null,Yr=0,dc=0,nh=0,Ra=null,xn=null,ih=0,Ws=1/0,Pi=null,Gl=!1,wd=null,vr=null,To=!1,cr=null,Hl=0,Ca=0,bd=null,ul=-1,dl=0;function fn(){return et&6?Tt():ul!==-1?ul:ul=Tt()}function _r(t){return t.mode&1?et&2&&Zt!==0?Zt&-Zt:NS.transition!==null?(dl===0&&(dl=W0()),dl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Z0(t.type)),t):1}function ai(t,e,n,i){if(50<Ca)throw Ca=0,bd=null,Error(oe(185));to(t,n,i),(!(et&2)||t!==jt)&&(t===jt&&(!(et&2)&&(dc|=n),Ut===4&&ar(t,Zt)),Mn(t,i),n===1&&et===0&&!(e.mode&1)&&(Ws=Tt()+500,oc&&Rr()))}function Mn(t,e){var n=t.callbackNode;N_(t,e);var i=bl(t,t===jt?Zt:0);if(i===0)n!==null&&rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rp(n),e===1)t.tag===0?LS(Kp.bind(null,t)):gg(Kp.bind(null,t)),TS(function(){!(et&6)&&Rr()}),n=null;else{switch(j0(i)){case 1:n=Cf;break;case 4:n=H0;break;case 16:n=wl;break;case 536870912:n=V0;break;default:n=wl}n=px(n,ox.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ox(t,e){if(ul=-1,dl=0,et&6)throw Error(oe(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var i=bl(t,t===jt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=et;et|=2;var s=cx();(jt!==t||Zt!==e)&&(Pi=null,Ws=Tt()+500,Hr(t,e));do try{JS();break}catch(o){lx(t,o)}while(!0);Hf(),zl.current=s,et=r,Pt!==null?e=0:(jt=null,Zt=0,e=Ut)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=qa,Hr(t,0),ar(t,i),Mn(t,Tt()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!KS(r)&&(e=Vl(t,i),e===2&&(s=Ju(t),s!==0&&(i=s,e=Ad(t,s))),e===1))throw n=qa,Hr(t,0),ar(t,i),Mn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Or(t,xn,Pi);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=ih+500-Tt(),10<e)){if(bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Or.bind(null,t,xn,Pi),e);break}Or(t,xn,Pi);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YS(i/1960))-i,10<i){t.timeoutHandle=ad(Or.bind(null,t,xn,Pi),i);break}Or(t,xn,Pi);break;case 5:Or(t,xn,Pi);break;default:throw Error(oe(329))}}}return Mn(t,Tt()),t.callbackNode===n?ox.bind(null,t):null}function Ad(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=xn,xn=n,e!==null&&Td(e)),t}function Td(t){xn===null?xn=t:xn.push.apply(xn,t)}function KS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~nh,e&=~dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Kp(t){if(et&6)throw Error(oe(327));Fs();var e=bl(t,0);if(!(e&1))return Mn(t,Tt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=qa,Hr(t,0),ar(t,e),Mn(t,Tt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,xn,Pi),Mn(t,Tt()),null}function rh(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Ws=Tt()+500,oc&&Rr())}}function Kr(t){cr!==null&&cr.tag===0&&!(et&6)&&Fs();var e=et;et|=1;var n=jn.transition,i=ot;try{if(jn.transition=null,ot=1,t)return t()}finally{ot=i,jn.transition=n,et=e,!(et&6)&&Rr()}}function sh(){Tn=Cs.current,ht(Cs)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AS(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:Hs(),ht(Sn),ht(ln),$f();break;case 5:qf(i);break;case 4:Hs();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:Vf(i.type._context);break;case 22:case 23:sh()}n=n.return}if(jt=t,Pt=t=Sr(t.current,null),Zt=Tn=e,Ut=0,qa=null,nh=dc=Yr=0,xn=Ra=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}kr=null}return t}function lx(t,e){do{var n=Pt;try{if(Hf(),ol.current=kl,Bl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bl=!1}if($r=0,Wt=Ft=yt=null,Aa=!1,Wa=0,th.current=null,n===null||n.return===null){Ut=1,qa=e,Pt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Zt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Op(a);if(p!==null){p.flags&=-257,Bp(p,a,o,s,e),p.mode&1&&Up(s,l,e),e=p,c=l;var m=e.updateQueue;if(m===null){var v=new Set;v.add(c),e.updateQueue=v}else m.add(c);break e}else{if(!(e&1)){Up(s,l,e),ah();break e}c=Error(oe(426))}}else if(gt&&o.mode&1){var x=Op(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Bp(x,a,o,s,e),zf(Vs(c,o));break e}}s=c=Vs(c,o),Ut!==4&&(Ut=2),Ra===null?Ra=[s]:Ra.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=jg(s,c,e);Pp(s,h);break e;case 1:o=c;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vr===null||!vr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Xg(s,o,e);Pp(s,E);break e}}s=s.return}while(s!==null)}dx(n)}catch(b){e=b,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function cx(){var t=zl.current;return zl.current=kl,t===null?kl:t}function ah(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),jt===null||!(Yr&268435455)&&!(dc&268435455)||ar(jt,Zt)}function Vl(t,e){var n=et;et|=2;var i=cx();(jt!==t||Zt!==e)&&(Pi=null,Hr(t,e));do try{ZS();break}catch(r){lx(t,r)}while(!0);if(Hf(),et=n,zl.current=i,Pt!==null)throw Error(oe(261));return jt=null,Zt=0,Ut}function ZS(){for(;Pt!==null;)ux(Pt)}function JS(){for(;Pt!==null&&!E_();)ux(Pt)}function ux(t){var e=hx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?dx(t):Pt=e,th.current=null}function dx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jS(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Pt=null;return}}else if(n=WS(n,e,Tn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Or(t,e,n){var i=ot,r=jn.transition;try{jn.transition=null,ot=1,QS(t,e,n,i)}finally{jn.transition=r,ot=i}return null}function QS(t,e,n,i){do Fs();while(cr!==null);if(et&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D_(t,s),t===jt&&(Pt=jt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,px(wl,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var a=ot;ot=1;var o=et;et|=4,th.current=null,qS(t,n),sx(n,t),_S(rd),Al=!!id,rd=id=null,t.current=n,$S(n),w_(),et=o,ot=a,jn.transition=s}else t.current=n;if(To&&(To=!1,cr=t,Hl=r),s=t.pendingLanes,s===0&&(vr=null),T_(n.stateNode),Mn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=wd,wd=null,t;return Hl&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===bd?Ca++:(Ca=0,bd=t):Ca=0,Rr(),null}function Fs(){if(cr!==null){var t=j0(Hl),e=jn.transition,n=ot;try{if(jn.transition=null,ot=16>t?16:t,cr===null)var i=!1;else{if(t=cr,cr=null,Hl=0,et&6)throw Error(oe(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var l=o[c];for(Ee=l;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:Ta(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ee=d;else for(;Ee!==null;){f=Ee;var u=f.sibling,p=f.return;if(nx(f),f===l){Ee=null;break}if(u!==null){u.return=p,Ee=u;break}Ee=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){a=Ee;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ee=y;else e:for(a=g;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:uc(9,o)}}catch(b){wt(o,o.return,b)}if(o===a){Ee=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Ee=E;break e}Ee=o.return}}if(et=r,Rr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(nc,t)}catch{}i=!0}return i}finally{ot=n,jn.transition=e}}return!1}function Zp(t,e,n){e=Vs(n,e),e=jg(t,e,1),t=xr(t,e,1),e=fn(),t!==null&&(to(t,1,e),Mn(t,e))}function wt(t,e,n){if(t.tag===3)Zp(t,t,n);else for(;e!==null;){if(e.tag===3){Zp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=Vs(n,t),t=Xg(e,t,1),e=xr(e,t,1),t=fn(),e!==null&&(to(e,1,t),Mn(e,t));break}}e=e.return}}function ey(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Zt&n)===n&&(Ut===4||Ut===3&&(Zt&130023424)===Zt&&500>Tt()-ih?Hr(t,0):nh|=n),Mn(t,e)}function fx(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=fn();t=Vi(t,e),t!==null&&(to(t,e,n),Mn(t,n))}function ty(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fx(t,n)}function ny(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),fx(t,n)}var hx;hx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,VS(t,e,n);vn=!!(t.flags&131072)}else vn=!1,gt&&e.flags&1048576&&xg(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=ks(e,ln.current);Is(e,n),r=Kf(null,e,i,t,r,n);var s=Zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jf(e),r.updater=cc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Bf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ry(i),t=Qn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=Gp(null,e,i,t,n);break e;case 11:e=kp(null,e,i,t,n);break e;case 14:e=zp(null,e,i,Qn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Gp(t,e,i,r,n);case 3:e:{if(Kg(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Eg(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(oe(423)),e),e=Hp(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(oe(424)),e),e=Hp(t,e,i,n,r);break e}else for(Cn=gr(e.stateNode.containerInfo.firstChild),Pn=e,gt=!0,ti=null,n=yg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=Wi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return wg(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,sd(i,r)?a=null:s!==null&&sd(i,s)&&(e.flags|=32),Yg(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&ud(e),null;case 13:return Zg(t,e,n);case 4:return Xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),kp(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(Il,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!Sn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ui(-1,n&-n),c.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var f=l.pending;f===null?c.next=c:(c.next=f.next,f.next=c),l.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),dd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),dd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Xn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),zp(t,e,i,r,n);case 15:return qg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),cl(t,e),e.tag=1,yn(i)?(t=!0,Ll(e)):t=!1,Is(e,n),Wg(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return Jg(t,e,n);case 22:return $g(t,e,n)}throw Error(oe(156,e.tag))};function px(t,e){return G0(t,e)}function iy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new iy(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ry(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Af)return 11;if(t===Tf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return Vr(n.children,r,s,e);case bf:a=8,r|=8;break;case Ou:return t=Wn(12,n,e,r|2),t.elementType=Ou,t.lanes=s,t;case Bu:return t=Wn(13,n,e,r),t.elementType=Bu,t.lanes=s,t;case ku:return t=Wn(19,n,e,r),t.elementType=ku,t.lanes=s,t;case w0:return fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M0:a=10;break e;case E0:a=9;break e;case Af:a=11;break e;case Tf:a=14;break e;case tr:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function fc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lh(t,e,n,i,r,s,a,o,c){return t=new sy(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jf(s),t}function ay(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function mx(t){if(!t)return Er;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(yn(n))return mg(t,n,e)}return e}function gx(t,e,n,i,r,s,a,o,c){return t=lh(n,i,!0,t,r,s,a,o,c),t.context=mx(null),n=t.current,i=fn(),r=_r(n),s=Ui(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,to(t,r,i),Mn(t,i),t}function hc(t,e,n,i){var r=e.current,s=fn(),a=_r(r);return n=mx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,a),t!==null&&(ai(t,r,a,s),al(t,r,a)),a}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ch(t,e){Jp(t,e),(t=t.alternate)&&Jp(t,e)}function oy(){return null}var xx=typeof reportError=="function"?reportError:function(t){console.error(t)};function uh(t){this._internalRoot=t}pc.prototype.render=uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));hc(t,e,null,null)};pc.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){hc(null,t,null,null)}),e[Hi]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&K0(t)}};function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function ly(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var l=Wl(a);s.call(l)}}var a=gx(e,i,t,0,null,!1,!1,"",Qp);return t._reactRootContainer=a,t[Hi]=a.current,ka(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var l=Wl(c);o.call(l)}}var c=lh(t,0,!1,null,null,!1,!1,"",Qp);return t._reactRootContainer=c,t[Hi]=c.current,ka(t.nodeType===8?t.parentNode:t),Kr(function(){hc(e,c,n,i)}),c}function gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Wl(a);o.call(c)}}hc(e,a,t,r)}else a=ly(n,e,t,r,i);return Wl(a)}X0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Pf(e,n|1),Mn(e,Tt()),!(et&6)&&(Ws=Tt()+500,Rr()))}break;case 13:Kr(function(){var i=Vi(t,1);if(i!==null){var r=fn();ai(i,t,1,r)}}),ch(t,1)}};Lf=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=fn();ai(e,t,134217728,n)}ch(t,134217728)}};q0=function(t){if(t.tag===13){var e=_r(t),n=Vi(t,e);if(n!==null){var i=fn();ai(n,t,e,i)}ch(t,e)}};$0=function(){return ot};Y0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Yu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ac(i);if(!r)throw Error(oe(90));A0(i),Hu(i,r)}}}break;case"textarea":R0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};F0=rh;U0=Kr;var cy={usingClientEntryPoint:!1,Events:[io,Es,ac,D0,I0,rh]},la={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uy={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=k0(t),t===null?null:t.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{nc=Ro.inject(uy),_i=Ro}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(e))throw Error(oe(200));return ay(t,e,null,n)};Nn.createRoot=function(t,e){if(!dh(t))throw Error(oe(299));var n=!1,i="",r=xx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lh(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,ka(t.nodeType===8?t.parentNode:t),new uh(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=k0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Kr(t)};Nn.hydrate=function(t,e,n){if(!mc(e))throw Error(oe(200));return gc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!dh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=xx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=gx(e,null,t,1,n??null,r,!1,s,a),t[Hi]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pc(e)};Nn.render=function(t,e,n){if(!mc(e))throw Error(oe(200));return gc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!mc(t))throw Error(oe(40));return t._reactRootContainer?(Kr(function(){gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Nn.unstable_batchedUpdates=rh;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return gc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function vx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vx)}catch(t){console.error(t)}}vx(),v0.exports=Nn;var dy=v0.exports,_x,em=dy;_x=em.createRoot,em.hydrateRoot;const Sx={id:"",name:"Ejercicio 1",workDurationSeconds:45,roundCount:3,restBetweenRoundsSeconds:20,restAfterExerciseSeconds:60};function tm(){return{format:"wkt",version:1,category:"Fitness",sport:"Fitness",routines:[{name:"",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{...Sx,id:"ex-"+Date.now()}]}]}}const fy=[{id:"tabata-clasico",badgeIcon:"⚡",workout:{format:"wkt",version:1,category:"Tabata",sport:"HIIT",routines:[{name:"Tabata Clásico (20/10)",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-tab-1",name:"Flexiones",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:15,mediaRef:"preset:pushups"},{id:"ex-tab-2",name:"Sentadillas",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:0,mediaRef:"preset:squats"}]}]}},{id:"rondas-boxeo",badgeIcon:"🥊",workout:{format:"wkt",version:1,category:"Combate",sport:"Boxeo",routines:[{name:"Rondas de Boxeo",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-box-1",name:"Sombra de Boxeo",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:60,mediaRef:"preset:shadow_boxing"},{id:"ex-box-2",name:"Saco Pesado",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:0,mediaRef:"preset:heavy_bag"}]}]}},{id:"hiit-full-body",badgeIcon:"🔥",workout:{format:"wkt",version:1,category:"Cardio / HIIT",sport:"Fitness",routines:[{name:"HIIT Full Body",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-hiit-1",name:"Burpees",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:burpees"},{id:"ex-hiit-2",name:"Zancadas",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:lunges"},{id:"ex-hiit-3",name:"Plancha Isométrica",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:0,mediaRef:"preset:plank"}]}]}}],yx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";function hy(t){return t===null||t===""?"":gy(t,6,n=>yx.charAt(n))}function py(t){return t===null||t===""?null:(t=t.replace(/ /g,"+"),xy(t.length,32,e=>my(yx,t.charAt(e))))}function my(t,e){return t.indexOf(e)}function gy(t,e,n){let i,r;const s={},a={};let o="",c="",l="",f=2,d=3,u=2,p="",m=0,v=0;for(let x=0;x<t.length;x+=1)if(o=t.charAt(x),Object.prototype.hasOwnProperty.call(s,o)||(s[o]=d++,a[o]=!0),c=l+o,Object.prototype.hasOwnProperty.call(s,c))l=c;else{if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(i=0;i<u;i++)m=m<<1,v===e-1?(v=0,p+=n(m),m=0):v++;for(r=l.charCodeAt(0),i=0;i<8;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}else{for(r=1,i=0;i<u;i++)m=m<<1|r,v===e-1?(v=0,p+=n(m),m=0):v++,r=0;for(r=l.charCodeAt(0),i=0;i<16;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}f--,f===0&&(f=Math.pow(2,u),u++),delete a[l]}else for(r=s[l],i=0;i<u;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1;f--,f===0&&(f=Math.pow(2,u),u++),s[c]=d++,l=String(o)}if(l!==""){if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(i=0;i<u;i++)m=m<<1,v===e-1?(v=0,p+=n(m),m=0):v++;for(r=l.charCodeAt(0),i=0;i<8;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}else{for(r=1,i=0;i<u;i++)m=m<<1|r,v===e-1?(v=0,p+=n(m),m=0):v++,r=0;for(r=l.charCodeAt(0),i=0;i<16;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}f--,f===0&&(f=Math.pow(2,u),u++),delete a[l]}else for(r=s[l],i=0;i<u;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1;f--,f===0&&(f=Math.pow(2,u),u++)}for(r=2,i=0;i<u;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1;for(;;)if(m=m<<1,v===e-1){p+=n(m);break}else v++;return p}function xy(t,e,n){const i=[];let r=4,s=4,a=3,o="";const c=[];let l,f=0,d=0,u=Math.pow(2,2),p=1,m="";const v={val:n(0),position:e,index:1};for(let x=0;x<3;x+=1)i[x]=String(x);for(;p!==u;)d=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),f|=(d>0?1:0)*p,p<<=1;switch(f){case 0:for(f=0,u=Math.pow(2,8),p=1;p!==u;)d=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),f|=(d>0?1:0)*p,p<<=1;m=String.fromCharCode(f);break;case 1:for(f=0,u=Math.pow(2,16),p=1;p!==u;)d=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),f|=(d>0?1:0)*p,p<<=1;m=String.fromCharCode(f);break;case 2:return""}for(i[3]=m,l=m,c.push(m);;){if(v.index>t)return"";for(f=0,u=Math.pow(2,a),p=1;p!==u;)d=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),f|=(d>0?1:0)*p,p<<=1;let x;switch(x=f){case 0:for(f=0,u=Math.pow(2,8),p=1;p!==u;)d=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),f|=(d>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(f),x=s-1,r--;break;case 1:for(f=0,u=Math.pow(2,16),p=1;p!==u;)d=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),f|=(d>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(f),x=s-1,r--;break;case 2:return c.join("")}if(r===0&&(r=Math.pow(2,a),a++),i[x])o=i[x];else if(x===s)o=l+l.charAt(0);else return null;c.push(o),i[s++]=l+o.charAt(0),r--,l=o,r===0&&(r=Math.pow(2,a),a++)}}const vy=[["jumping_jacks","Jumping Jacks","Cardio",!0],["burpees","Burpees","HIIT",!0],["pushups","Flexiones","Fuerza",!0],["squats","Sentadillas","Fuerza",!0],["lunges","Zancadas","Fuerza",!0],["plank","Plancha","Core",!0],["mountain_climbers","Escaladores","HIIT",!0],["high_knees","Rodillas Arriba","Cardio",!0],["crunches","Abdominales","Core",!0],["bicycle_crunches","Bicicleta Abd.","Core",!0],["russian_twists","Giros Rusos","Core",!0],["leg_raises","Elev. Piernas","Core",!0],["jumping_rope","Saltar Soga","Cardio",!0],["box_jumps","Saltos Cajón","HIIT",!0],["kettlebell_swing","Kettlebell Swing","Fuerza",!0],["dumbbell_curl","Curl Bíceps","Fuerza",!0],["shoulder_press","Press Hombros","Fuerza",!0],["tricep_dips","Fondos Tríceps","Fuerza",!0],["pullups","Dominadas","Fuerza",!0],["deadlift","Peso Muerto","Fuerza",!0],["bench_press","Press Banca","Fuerza",!0],["shadow_boxing","Sombra Boxeo","Boxeo",!0],["heavy_bag","Saco Boxeo","Boxeo",!0],["stretch_cool","Estiramiento","Movilidad",!0],["calf_raises","Elev. Talones","Fuerza",!1],["glute_bridge","Puente Glúteos","Fuerza",!1],["side_plank","Plancha Lateral","Core",!1],["superman","Superman","Core",!1],["wall_sit","Sentadilla Pared","Fuerza",!1],["sumo_squat","Sentadilla Sumo","Fuerza",!1],["bent_over_row","Remo Barra","Fuerza",!1],["lateral_raises","Elev. Laterales","Fuerza",!1],["tricep_kickback","Patada Tríceps","Fuerza",!1],["arnold_press","Press Arnold","Fuerza",!1],["front_kick","Patada Frontal","Boxeo",!1],["uppercut_hook","Uppercut y Gancho","Boxeo",!1],["skater_jumps","Saltos Patinador","Cardio",!1],["butt_kicks","Talones al Glúteo","Cardio",!1],["flutter_kicks","Patadas Tijera","Core",!1],["cat_cow","Gato - Vaca","Movilidad",!1]],va=vy.map(([t,e,n,i])=>({key:t,label:e,category:n,mediaRef:`preset:${t}`,url:`./exercises/${t}.gif`,bundled:i}));function fh(t){if(!t)return;const e=t.startsWith("preset:")?t.slice(7):t;return va.find(n=>n.key.toLowerCase()===e.toLowerCase())}function Mx(t){const e={...t},n=e.mediaRef||e.mediaId;if(delete e.mediaId,typeof e.mediaData=="string"&&e.mediaData.startsWith("data:image/")?e.mediaData=e.mediaData:delete e.mediaData,n&&typeof n=="string"){const i=fh(n);i?e.mediaRef=i.mediaRef:n.startsWith("preset:")?e.mediaRef=n:delete e.mediaRef}else delete e.mediaRef;return e}function hh(t){if(!t)return null;if(typeof t.mediaData=="string"&&t.mediaData.startsWith("data:image/"))return t.mediaData;const e=fh(t.mediaRef||t.mediaId);return e?e.url:null}function _y(t){if(!t||!t.includes("base64,"))return null;const e=t.slice(t.indexOf("base64,")+7);if(!e)return null;const n=e.endsWith("==")?2:e.endsWith("=")?1:0,i=Math.max(0,Math.floor(e.length*3/4)-n);return Math.max(1,Math.round(i/1024))}const Sy="mytimerapp://import?data=";function Ex(t){if(!t||typeof t!="object")return!1;const e=t;if(e.format!=="wkt"||e.version!==1||!Array.isArray(e.routines)||e.routines.length===0)return!1;for(const n of e.routines)if(typeof n!="object"||!n||typeof n.name!="string"||!Array.isArray(n.exercises))return!1;return!0}function wx(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>Mx(n))}))}}function yy(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>{const i=Mx(n),{mediaData:r,mediaId:s,...a}=i;return(!a.mediaRef||!a.mediaRef.startsWith("preset:"))&&delete a.mediaRef,a})}))}}function My(t){const e=yy(t),n=JSON.stringify(e);return hy(n)}function Ey(t){try{const e=py(t);if(!e)return null;const n=JSON.parse(e);return Ex(n)?wx(n):null}catch(e){return console.error("Failed to decode workout from URL:",e),null}}function bx(t){const e=My(t);return`${Sy}${e}`}function xc(t){const e=Math.max(1,t.roundCount||1),n=Math.max(0,t.workDurationSeconds||0)*e,i=Math.max(0,t.restBetweenRoundsSeconds||0)*(e-1),r=Math.max(0,t.restAfterExerciseSeconds||0),s=i+r;return{totalSeconds:n+s,workSeconds:n,restSeconds:s}}function $a(t){const e=Math.max(1,t.routineCycles||1),n=Math.max(0,t.prepareDurationSeconds||0),i=Math.max(0,t.restBetweenRoutinesSeconds||0)*Math.max(0,e-1);let r=0,s=0,a=0;for(const l of t.exercises){const f=xc(l);r+=f.workSeconds,s+=f.restSeconds,a+=Math.max(1,l.roundCount||1)}const o=r*e,c=s*e+n+i;return{totalSeconds:o+c,tutSeconds:o,restSeconds:c,totalRounds:a*e,exerciseCount:t.exercises.length}}function bt(t){const e=Math.max(0,Math.floor(t)),n=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60,s=i.toString().padStart(2,"0"),a=r.toString().padStart(2,"0");return n>0?`${n.toString().padStart(2,"0")}:${s}:${a}`:`${s}:${a}`}function wy(t){const e=Math.max(0,Math.floor(t)),n=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60;return n>0&&i>0&&r>0?`${n}h ${i}m ${r}s`:n>0&&i>0?`${n}h ${i}m`:n>0&&r>0?`${n}h ${r}s`:n>0?`${n}h`:i>0&&r>0?`${i}m ${r}s`:i>0?`${i}m`:`${r}s`}const nm=6,Co=1080;function by(t){return t?new Promise(e=>{const n=new Image;n.crossOrigin="anonymous";const i=setTimeout(()=>e(null),2e3);n.onload=()=>{clearTimeout(i),e(n)},n.onerror=()=>{clearTimeout(i),e(null)},n.src=t}):Promise.resolve(null)}function zn(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function Qc(t,e,n){if(t.measureText(e).width<=n)return e;let i=e;for(;i.length>0&&t.measureText(`${i}...`).width>n;)i=i.slice(0,-1);return`${i}...`}function Po(t,e,n,i,r,s,a){t.font="bold 22px system-ui, -apple-system, sans-serif";const c=t.measureText(e).width+32;return zn(t,n,i,c,44,22),t.fillStyle=r,t.fill(),t.lineWidth=2,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+16,i+30),n+c}function Lo(t,e,n,i,r,s,a){t.font="bold 19px ui-monospace, SFMono-Regular, monospace";const c=t.measureText(e).width+22;return zn(t,n,i,c,36,8),t.fillStyle=r,t.fill(),t.lineWidth=1.5,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+11,i+25),n+c}async function Ax(t,e){const n=t.routines[0];if(!n)return null;const i=n.exercises.slice(0,nm),r=await Promise.all(i.map(D=>by(hh(D)))),s=Math.max(0,n.exercises.length-nm),a=!!(n.author&&n.author.trim());let o=610;a&&(o+=42),o+=i.length*136,s>0&&(o+=84),o+=86;const c=document.createElement("canvas");c.width=Co,c.height=Math.round(o);const l=c.getContext("2d");if(!l)return null;l.fillStyle="#020617",l.fillRect(0,0,c.width,c.height);const f=32,d=f,u=f,p=Co-f*2,m=o-f*2,v=l.createLinearGradient(0,u,0,u+m);v.addColorStop(0,"#0f172a"),v.addColorStop(1,"#020617"),zn(l,d,u,p,m,48),l.fillStyle=v,l.fill(),l.lineWidth=3,l.strokeStyle="rgba(16, 185, 129, 0.35)",l.stroke();const x=f+44,h=Co-f-44;let g=f+48,y=x;y=Po(l,e.previewBadge||"✨ Rutina Compartida",y,g,"rgba(16, 185, 129, 0.15)","rgba(16, 185, 129, 0.35)","#34d399")+14,t.category&&(y=Po(l,`🏷️ ${t.category}`,y,g,"#1e293b","#334155","#cbd5e1")+14),t.sport&&(y=Po(l,`🏅 ${t.sport}`,y,g,"#1e293b","#334155","#67e8f9")+14),n.routineCycles>1&&Po(l,`🔄 ${n.routineCycles}x ${e.cycles||e.cyclesLabel||"Ciclos"}`,y,g,"rgba(6, 182, 212, 0.2)","rgba(6, 182, 212, 0.35)","#67e8f9"),g+=86,l.font="900 54px system-ui, -apple-system, sans-serif",l.fillStyle="#ffffff",l.textAlign="left";const E=Qc(l,n.name||"Rutina",h-x);if(l.fillText(E,x,g),a){g+=42,l.font="600 26px system-ui, -apple-system, sans-serif",l.fillStyle="#94a3b8";const D=`👤 ${e.sharedBy||"Compartida por"}: ${n.author}`;l.fillText(Qc(l,D,h-x),x,g)}g+=40;const b=$a(n),T=18,_=(h-x-T*3)/4,M=130;[{label:(e.totalTime||"TIEMPO TOTAL").toUpperCase(),value:bt(b.totalSeconds),bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#ffffff"},{label:(e.tut||"TRABAJO (TUT)").toUpperCase(),value:bt(b.tutSeconds),bg:"rgba(15, 77, 42, 0.45)",border:"rgba(16, 185, 129, 0.4)",labelColor:"#6ee7b7",valColor:"#34d399"},{label:(e.rest||"DESCANSO").toUpperCase(),value:bt(b.restSeconds),bg:"rgba(122, 13, 30, 0.45)",border:"rgba(244, 63, 94, 0.4)",labelColor:"#fda4af",valColor:"#fb7185"},{label:(e.totalRounds||"RONDAS TOTALES").toUpperCase(),value:`${b.totalRounds} (${b.exerciseCount})`,bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#22d3ee"}].forEach((D,R)=>{const O=x+(_+T)*R;zn(l,O,g,_,M,28),l.fillStyle=D.bg,l.fill(),l.lineWidth=2.5,l.strokeStyle=D.border,l.stroke(),l.font="bold 18px system-ui, -apple-system, sans-serif",l.fillStyle=D.labelColor,l.textAlign="center",l.fillText(D.label,O+_/2,g+44),l.font="900 36px ui-monospace, SFMono-Regular, monospace",l.fillStyle=D.valColor,l.fillText(D.value,O+_/2,g+96)}),g+=M+36;const C=b.totalSeconds>0?Math.round(b.tutSeconds/b.totalSeconds*100):50,I=Math.max(0,100-C);l.font="bold 23px system-ui, -apple-system, sans-serif",l.fillStyle="#94a3b8",l.textAlign="left",l.fillText(e.workVsRestRatio||"Distribución Trabajo vs Descanso",x,g),l.fillStyle="#34d399",l.textAlign="right",l.fillText(`${C}% / ${I}%`,h,g),g+=16;const U=18;if(zn(l,x,g,h-x,U,9),l.fillStyle="#f43f5e",l.fill(),C>0){const D=Math.max(18,(h-x)*(C/100));zn(l,x,g,D,U,9),l.fillStyle="#10b981",l.fill()}if(g+=U+44,l.font="800 25px system-ui, -apple-system, sans-serif",l.fillStyle="#cbd5e1",l.textAlign="left",l.fillText(`${(e.exercisesList||"LISTA DE EJERCICIOS").toUpperCase()} (${n.exercises.length})`,x,g),n.prepareDurationSeconds>0){const D=`⏱️ ${e.prepareBadge||"Preparación"}: ${bt(n.prepareDurationSeconds)}`;l.font="bold 22px ui-monospace, SFMono-Regular, monospace";const R=l.measureText(D).width+28,O=h-R;zn(l,O,g-30,R,40,12),l.fillStyle="rgba(94, 58, 0, 0.55)",l.fill(),l.lineWidth=2,l.strokeStyle="rgba(245, 158, 11, 0.45)",l.stroke(),l.fillStyle="#fcd34d",l.textAlign="left",l.fillText(D,O+14,g-3)}if(g+=26,i.forEach((D,R)=>{zn(l,x,g,h-x,120,26),l.fillStyle="rgba(2, 6, 23, 0.82)",l.fill(),l.lineWidth=2,l.strokeStyle="#1e293b",l.stroke();const X=x+22,k=g+34;zn(l,X,k,52,52,14),l.fillStyle="rgba(16, 185, 129, 0.15)",l.fill(),l.lineWidth=2,l.strokeStyle="rgba(16, 185, 129, 0.35)",l.stroke(),l.font="900 24px system-ui, -apple-system, sans-serif",l.fillStyle="#34d399",l.textAlign="center",l.fillText(String(R+1),X+26,k+35);const G=r[R];let z=x+94;if(G){const W=x+88,ie=g+20,re=80;l.save(),zn(l,W,ie,re,re,18),l.fillStyle="#101827",l.fill(),l.clip(),l.drawImage(G,W,ie,re,re),l.restore(),zn(l,W,ie,re,re,18),l.lineWidth=2,l.strokeStyle="#334155",l.stroke(),z=x+186}l.font="bold 28px system-ui, -apple-system, sans-serif",l.fillStyle="#f1f5f9",l.textAlign="left";const V=h-z-195;l.fillText(Qc(l,D.name||`Ejercicio ${R+1}`,V),z,g+48);let N=z;const J=g+64;N=Lo(l,`🔄 ${D.roundCount} ${e.rounds||"Rondas"}`,N,J,"#1e293b","#334155","#67e8f9")+10,N=Lo(l,`⚡ ${bt(D.workDurationSeconds)}`,N,J,"rgba(15, 77, 42, 0.65)","rgba(16, 185, 129, 0.45)","#6ee7b7")+10,D.restBetweenRoundsSeconds>0&&(N=Lo(l,`💨 ${bt(D.restBetweenRoundsSeconds)}`,N,J,"rgba(122, 13, 30, 0.65)","rgba(244, 63, 94, 0.45)","#fda4af")+10),D.restAfterExerciseSeconds>0&&Lo(l,`🛑 ${bt(D.restAfterExerciseSeconds)}`,N,J,"rgba(94, 58, 0, 0.65)","rgba(245, 158, 11, 0.45)","#fcd34d");const Me=xc(D);l.font="bold 16px system-ui, -apple-system, sans-serif",l.fillStyle="#64748b",l.textAlign="right",l.fillText((e.subtotal||"SUBTOTAL").replace(":","").toUpperCase(),h-24,g+48),l.font="bold 26px ui-monospace, SFMono-Regular, monospace",l.fillStyle="#e2e8f0",l.fillText(bt(Me.totalSeconds),h-24,g+84),g+=136}),s>0){zn(l,x,g,h-x,68,20),l.fillStyle="#1e293b",l.fill(),l.lineWidth=2,l.strokeStyle="#334155",l.stroke(),l.font="bold 24px system-ui, -apple-system, sans-serif",l.fillStyle="#34d399",l.textAlign="center";const D=s===1?"+1 ejercicio más en la rutina completa...":`+${s} ejercicios más en la rutina completa...`;l.fillText(D,(x+h)/2,g+42),g+=84}return l.font="21px system-ui, -apple-system, sans-serif",l.fillStyle="#64748b",l.textAlign="center",l.fillText("Timer Routine Studio • Abre el archivo .wkt adjunto en la App o en alvarpereira-dot.github.io",Co/2,g+26),new Promise(D=>{c.toBlob(R=>D(R),"image/png",1)})}const eu=[{tag:"SYSTEM",displayName:"Idioma del Sistema",flagEmoji:"🌐",localeName:"Default System Language"},{tag:"es-ES",displayName:"Español (España)",flagEmoji:"🇪🇸",localeName:"Castellano"},{tag:"es-MX",displayName:"Español (Latinoamérica)",flagEmoji:"🇲🇽",localeName:"Español Latino"},{tag:"en-US",displayName:"English (United States)",flagEmoji:"🇺🇸",localeName:"English"},{tag:"pt-BR",displayName:"Português (Brasil)",flagEmoji:"🇧🇷",localeName:"Português"},{tag:"fr-FR",displayName:"Français (France)",flagEmoji:"🇫🇷",localeName:"Français"},{tag:"de-DE",displayName:"Deutsch (Deutschland)",flagEmoji:"🇩🇪",localeName:"Deutsch"},{tag:"it-IT",displayName:"Italiano (Italia)",flagEmoji:"🇮🇹",localeName:"Italiano"}],Oi={es:{appTitle:"Timer Routine Studio",subtitle:"Archivos .wkt",currentFile:"Archivo actual",openLocal:"📂 Abrir (.wkt)",save:"💾 Guardar",saveAs:"📑 Guardar como...",shareWhatsApp:"Compartir WhatsApp",openInApp:"📲 Abrir en App",validationAlertTitle:"⚠️ La rutina contiene observaciones que debes corregir:",routineName:"Nombre de la Rutina",author:"Autor / Entrenador",category:"Categoría",sport:"Deporte",cycles:"Ciclos Globales",prepare:"Preparación (seg / max 24h)",prepareShort:"Preparación (seg)",totalTime:"Tiempo Total",tut:"Trabajo (TUT)",rest:"Descanso",totalRounds:"Rondas Totales",exercisesRoundsLabel:"Ejercicios / Rondas",exercisesList:"Lista de Ejercicios",exercisesHeading:"Ejercicios",addExercise:"+ Agregar Ejercicio",addAnotherExercise:"+ Agregar otro ejercicio",rounds:"Rondas",work:"Trabajo (seg)",restBetween:"Pausa Rondas (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal ejercicio:",estimatedDuration:"Duración estimada del ejercicio:",savedIn:"Guardado en",savedAs:"Guardado como",systemLanguage:"Idioma del Sistema",systemLanguageDesc:"Predeterminado del sistema",languageLabel:"Idioma",shareMessageIntro:"🔥 ¡Mira mi rutina en el temporizador!",clipboardNotice:"📋 Archivo .wkt descargado. Redirigiendo a WhatsApp...",openingApp:"🚀 Enviando rutina a la App móvil...",errNameEmpty:"El nombre del ejercicio no puede estar vacío.",errNameDuplicate:"El nombre está repetido en la rutina.",errWorkMin:"El tiempo de trabajo debe ser mayor a 0 seg.",errMaxTime:"El tiempo no puede superar 1440 min (24 horas).",errRoutineEmpty:"La rutina debe tener al menos un ejercicio.",errRoutineNameEmpty:"El nombre de la rutina no puede estar vacío.",previewBadge:"✨ Rutina Compartida",previewModeBtn:"👁️ Vista Previa",editRoutineBtn:"✏️ Editar / Personalizar en Web",downloadWktBtn:"📥 Descargar (.wkt)",sharedBy:"Compartida por",workVsRestRatio:"Distribución Trabajo vs Descanso",prepareBadge:"Preparación inicial",noRest:"Sin pausa",downloadApkBtn:"Descargar App Android (.apk)",welcomeDesc:"Diseña, personaliza y comparte tus rutinas de entrenamiento cronometradas (.wkt)",newRoutineBtn:"+ Nueva Rutina",openWktBtn:"Abrir archivo .wkt",examplesTitle:"⚡ O explora una rutina de ejemplo:",exercisesWord:"ejercicios",homeBtn:"🏠 Inicio",sharedBanner:"✨ Rutina cargada desde enlace compartido.",invalidWktErr:"El archivo seleccionado no tiene un formato .wkt válido.",readWktErr:"No se pudo leer el archivo .wkt seleccionado.",openFileBtn:"Abrir Archivo",saveLocalBtn:"Guardar Local",exerciseDefaultName:"Ejercicio",minOneExerciseAlert:"La rutina debe tener al menos un ejercicio.",changeGifTitle:"Cambiar GIF o imagen del ejercicio",addGifTitle:"Agregar GIF o imagen",removeGifTitle:"Quitar GIF / imagen",moveUpTitle:"Mover arriba",moveDownTitle:"Mover abajo",duplicateTitle:"Duplicar",deleteTitle:"Eliminar",exerciseNamePlaceholder:"Nombre del ejercicio",mediaModalTitle:"Animación o imagen del ejercicio",mediaModalDesc:"Elige del catálogo, sube un archivo o crea un GIF 3D a medida",tabCatalog:"Catálogo",tabUploadShort:"Subir",tabCreator3d:"🎨 Crear GIF 3D (cualquier ejercicio)",uploadOwnGifBtn:"📤 Subir GIF o imagen propia (se comprime auto.)",optimizingGifBtn:"⏳ Optimizando GIF / imagen (220×220)...",integratedCatalog:"Catálogo integrado",clearCurrent:"Quitar actual",searchExercisePlaceholder:"Buscar ejercicio (ej. burpees, boxeo, plancha)...",noPresetFound:"No hay ningún preset llamado",inPresetsWord:"en los",presetsWord:"predefinidos.",createIn3dBtn:"Crear en el Creador 3D",describeExerciseLabel:"✨ Describe cualquier ejercicio",describePlaceholder:"Ej. Bicho muerto alternado, puente a una pierna...",generatePoseBtn:"Generar pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Postura base",propLabel:"Equipo / Accesorio",cameraLabel:"Cámara",speedLabel:"Velocidad",editingPoseLabel:"Editando Pose",startWord:"(Inicio)",endWord:"(Fin)",copyAToB:"Copiar A → B",torsoHeightTab:"Torso y Altura",armsTab:"Brazos",legsTab:"Piernas",symmetricArmsLabel:"Mover ambos brazos iguales (simétrico)",symmetricLegsLabel:"Mover ambas piernas iguales (simétrico)",createApplyGifBtn:"🎨 Crear y aplicar GIF al ejercicio",creatingGifBtn:"⏳ Generando GIF...",downloadGifBtn:"💾 Descargar .gif"},en:{appTitle:"Timer Routine Studio",subtitle:".wkt files",currentFile:"Current file",openLocal:"📂 Open (.wkt)",save:"💾 Save",saveAs:"📑 Save as...",shareWhatsApp:"Share via WhatsApp",openInApp:"📲 Open in App",validationAlertTitle:"⚠️ Routine contains issues that must be fixed:",routineName:"Routine Name",author:"Author / Coach",category:"Category",sport:"Sport",cycles:"Global Cycles",prepare:"Preparation (sec / max 24h)",prepareShort:"Preparation (sec)",totalTime:"Total Time",tut:"Work (TUT)",rest:"Rest",totalRounds:"Total Rounds",exercisesRoundsLabel:"Exercises / Rounds",exercisesList:"Exercises List",exercisesHeading:"Exercises",addExercise:"+ Add Exercise",addAnotherExercise:"+ Add another exercise",rounds:"Rounds",work:"Work (sec)",restBetween:"Round Rest (sec)",restAfter:"Final Rest (sec)",subtotal:"Exercise subtotal:",estimatedDuration:"Estimated exercise duration:",savedIn:"Saved to",savedAs:"Saved as",systemLanguage:"System Language",systemLanguageDesc:"Default system language",languageLabel:"Language",shareMessageIntro:"🔥 Check out my workout routine on the timer!",clipboardNotice:"📋 .wkt file downloaded. Redirecting to WhatsApp...",openingApp:"🚀 Sending routine to mobile app...",errNameEmpty:"Exercise name cannot be empty.",errNameDuplicate:"Exercise name is duplicated in the routine.",errWorkMin:"Work duration must be greater than 0 sec.",errMaxTime:"Time cannot exceed 1440 min (24 hours).",errRoutineEmpty:"Routine must contain at least one exercise.",errRoutineNameEmpty:"Routine name cannot be empty.",previewBadge:"✨ Shared Routine",previewModeBtn:"👁️ Preview",editRoutineBtn:"✏️ Edit / Customize on Web",downloadWktBtn:"📥 Download (.wkt)",sharedBy:"Shared by",workVsRestRatio:"Work vs Rest Distribution",prepareBadge:"Initial preparation",noRest:"No rest",downloadApkBtn:"Download Android App (.apk)",welcomeDesc:"Design, customize, and share your timed workout routines (.wkt)",newRoutineBtn:"+ New Routine",openWktBtn:"Open .wkt file",examplesTitle:"⚡ Or explore a sample routine:",exercisesWord:"exercises",homeBtn:"🏠 Home",sharedBanner:"✨ Routine loaded from shared link.",invalidWktErr:"The selected file is not a valid .wkt format.",readWktErr:"Could not read the selected .wkt file.",openFileBtn:"Open File",saveLocalBtn:"Save Local",exerciseDefaultName:"Exercise",minOneExerciseAlert:"Routine must contain at least one exercise.",changeGifTitle:"Change exercise GIF or image",addGifTitle:"Add GIF or image",removeGifTitle:"Remove GIF / image",moveUpTitle:"Move up",moveDownTitle:"Move down",duplicateTitle:"Duplicate",deleteTitle:"Delete",exerciseNamePlaceholder:"Exercise name",mediaModalTitle:"Exercise animation or image",mediaModalDesc:"Pick from catalog, upload a file, or create a custom 3D GIF",tabCatalog:"Catalog",tabUploadShort:"Upload",tabCreator3d:"🎨 Create 3D GIF (any exercise)",uploadOwnGifBtn:"📤 Upload own GIF or image (auto-compressed)",optimizingGifBtn:"⏳ Optimizing GIF / image (220×220)...",integratedCatalog:"Built-in catalog",clearCurrent:"Remove current",searchExercisePlaceholder:"Search exercise (e.g. burpees, boxing, plank)...",noPresetFound:"No preset found for",inPresetsWord:"among the",presetsWord:"presets.",createIn3dBtn:"Create in 3D Creator",describeExerciseLabel:"✨ Describe any exercise",describePlaceholder:"E.g. Alternating dead bug, single-leg glute bridge...",generatePoseBtn:"Generate pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Base posture",propLabel:"Equipment / Prop",cameraLabel:"Camera",speedLabel:"Speed",editingPoseLabel:"Editing Pose",startWord:"(Start)",endWord:"(End)",copyAToB:"Copy A → B",torsoHeightTab:"Torso & Height",armsTab:"Arms",legsTab:"Legs",symmetricArmsLabel:"Move both arms symmetrically",symmetricLegsLabel:"Move both legs symmetrically",createApplyGifBtn:"🎨 Create & apply GIF to exercise",creatingGifBtn:"⏳ Generating GIF...",downloadGifBtn:"💾 Download .gif"},pt:{appTitle:"Timer Routine Studio",subtitle:"Arquivos .wkt",currentFile:"Arquivo atual",openLocal:"📂 Abrir (.wkt)",save:"💾 Salvar",saveAs:"📑 Salvar como...",shareWhatsApp:"Compartilhar WhatsApp",openInApp:"📲 Abrir no App",validationAlertTitle:"⚠️ A rotina contém itens que precisam ser corrigidos:",routineName:"Nome da Rotina",author:"Autor / Treinador",category:"Categoria",sport:"Esporte",cycles:"Ciclos Globais",prepare:"Preparação (seg / máx 24h)",prepareShort:"Preparação (seg)",totalTime:"Tempo Total",tut:"Trabalho (TUT)",rest:"Descanso",totalRounds:"Total de Séries",exercisesRoundsLabel:"Exercícios / Séries",exercisesList:"Lista de Exercícios",exercisesHeading:"Exercícios",addExercise:"+ Adicionar Exercício",addAnotherExercise:"+ Adicionar outro exercício",rounds:"Séries",work:"Trabalho (seg)",restBetween:"Pausa Séries (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal do exercício:",estimatedDuration:"Duração estimada do exercício:",savedIn:"Salvo em",savedAs:"Salvo como",systemLanguage:"Idioma do Sistema",systemLanguageDesc:"Padrão do sistema",languageLabel:"Idioma",shareMessageIntro:"🔥 Veja meu treino no cronômetro!",clipboardNotice:"📋 Arquivo .wkt baixado. Redirecionando para o WhatsApp...",openingApp:"🚀 Enviando rotina para o App móvel...",errNameEmpty:"O nome do exercício não pode ficar vazio.",errNameDuplicate:"O nome do exercício está duplicado na rotina.",errWorkMin:"O tempo de trabalho deve ser maior que 0 seg.",errMaxTime:"O tempo não pode ultrapassar 1440 min (24 horas).",errRoutineEmpty:"A rotina deve conter pelo menos um exercício.",errRoutineNameEmpty:"O nome da rotina não pode ficar vazio.",previewBadge:"✨ Rotina Compartilhada",previewModeBtn:"👁️ Pré-visualizar",editRoutineBtn:"✏️ Editar / Personalizar na Web",downloadWktBtn:"📥 Baixar (.wkt)",sharedBy:"Compartilhada por",workVsRestRatio:"Distribuição Trabalho vs Descanso",prepareBadge:"Preparação inicial",noRest:"Sem pausa",downloadApkBtn:"Baixar App Android (.apk)",welcomeDesc:"Crie, personalize e compartilhe seus treinos cronometrados (.wkt)",newRoutineBtn:"+ Nova Rotina",openWktBtn:"Abrir arquivo .wkt",examplesTitle:"⚡ Ou explore uma rotina de exemplo:",exercisesWord:"exercícios",homeBtn:"🏠 Início",sharedBanner:"✨ Rotina carregada de link compartilhado.",invalidWktErr:"O arquivo selecionado não tem um formato .wkt válido.",readWktErr:"Não foi possível ler o arquivo .wkt selecionado.",openFileBtn:"Abrir Arquivo",saveLocalBtn:"Salvar Local",exerciseDefaultName:"Exercício",minOneExerciseAlert:"A rotina deve conter pelo menos um exercício.",changeGifTitle:"Alterar GIF ou imagem do exercício",addGifTitle:"Adicionar GIF ou imagem",removeGifTitle:"Remover GIF / imagem",moveUpTitle:"Mover para cima",moveDownTitle:"Mover para baixo",duplicateTitle:"Duplicar",deleteTitle:"Excluir",exerciseNamePlaceholder:"Nome do exercício",mediaModalTitle:"Animação ou imagem do exercício",mediaModalDesc:"Escolha do catálogo, envie um arquivo ou crie um GIF 3D",tabCatalog:"Catálogo",tabUploadShort:"Enviar",tabCreator3d:"🎨 Criar GIF 3D (qualquer exercício)",uploadOwnGifBtn:"📤 Enviar GIF ou imagem própria (compactação auto.)",optimizingGifBtn:"⏳ Otimizando GIF / imagem (220×220)...",integratedCatalog:"Catálogo integrado",clearCurrent:"Remover atual",searchExercisePlaceholder:"Buscar exercício (ex. burpees, boxe, prancha)...",noPresetFound:"Nenhum preset encontrado para",inPresetsWord:"nos",presetsWord:"predefinidos.",createIn3dBtn:"Criar no Criador 3D",describeExerciseLabel:"✨ Descreva qualquer exercício",describePlaceholder:"Ex. Dead bug alternado, elevação pélvica unilateral...",generatePoseBtn:"Gerar pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Postura base",propLabel:"Equipamento",cameraLabel:"Câmera",speedLabel:"Velocidade",editingPoseLabel:"Editando Pose",startWord:"(Início)",endWord:"(Fim)",copyAToB:"Copiar A → B",torsoHeightTab:"Tronco e Altura",armsTab:"Braços",legsTab:"Pernas",symmetricArmsLabel:"Mover ambos os braços iguais (simétrico)",symmetricLegsLabel:"Mover ambas as pernas iguais (simétrico)",createApplyGifBtn:"🎨 Criar e aplicar GIF ao exercício",creatingGifBtn:"⏳ Gerando GIF...",downloadGifBtn:"💾 Baixar .gif"},fr:{appTitle:"Timer Routine Studio",subtitle:"Fichiers .wkt",currentFile:"Fichier actuel",openLocal:"📂 Ouvrir (.wkt)",save:"💾 Enregistrer",saveAs:"📑 Enregistrer sous...",shareWhatsApp:"Partager WhatsApp",openInApp:"📲 Ouvrir dans l'App",validationAlertTitle:"⚠️ La routine contient des points à corriger :",routineName:"Nom de la Routine",author:"Auteur / Coach",category:"Catégorie",sport:"Sport",cycles:"Cycles Globaux",prepare:"Préparation (sec / max 24h)",prepareShort:"Préparation (sec)",totalTime:"Temps Total",tut:"Travail (TUT)",rest:"Repos",totalRounds:"Rounds Totaux",exercisesRoundsLabel:"Exercices / Rounds",exercisesList:"Liste des Exercices",exercisesHeading:"Exercices",addExercise:"+ Ajouter un Exercice",addAnotherExercise:"+ Ajouter un autre exercice",rounds:"Rounds",work:"Travail (sec)",restBetween:"Pause Rounds (sec)",restAfter:"Pause Finale (sec)",subtotal:"Sous-total exercice :",estimatedDuration:"Durée estimée de l'exercice :",savedIn:"Enregistré dans",savedAs:"Enregistré sous",systemLanguage:"Langue du système",systemLanguageDesc:"Langue par défaut",languageLabel:"Langue",shareMessageIntro:"🔥 Regarde ma séance sur le minuteur !",clipboardNotice:"📋 Fichier .wkt téléchargé. Redirection vers WhatsApp...",openingApp:"🚀 Envoi de la routine à l'application mobile...",errNameEmpty:"Le nom de l'exercice ne peut pas être vide.",errNameDuplicate:"Le nom de l'exercice est dupliqué dans la routine.",errWorkMin:"Le temps de travail doit être supérieur à 0 sec.",errMaxTime:"Le temps ne peut pas dépasser 1440 min (24 heures).",errRoutineEmpty:"La routine doit contenir au moins un exercice.",errRoutineNameEmpty:"Le nom de la routine ne peut pas être vide.",previewBadge:"✨ Routine Partagée",previewModeBtn:"👁️ Aperçu",editRoutineBtn:"✏️ Modifier / Personnaliser sur le Web",downloadWktBtn:"📥 Télécharger (.wkt)",sharedBy:"Partagée par",workVsRestRatio:"Répartition Travail vs Repos",prepareBadge:"Préparation initiale",noRest:"Sans pause",downloadApkBtn:"Télécharger l'App Android (.apk)",welcomeDesc:"Créez, personnalisez et partagez vos routines chronométrées (.wkt)",newRoutineBtn:"+ Nouvelle Routine",openWktBtn:"Ouvrir fichier .wkt",examplesTitle:"⚡ Ou explorez un exemple de routine :",exercisesWord:"exercices",homeBtn:"🏠 Accueil",sharedBanner:"✨ Routine chargée depuis un lien partagé.",invalidWktErr:"Le fichier sélectionné n'a pas un format .wkt valide.",readWktErr:"Impossible de lire le fichier .wkt sélectionné.",openFileBtn:"Ouvrir Fichier",saveLocalBtn:"Enregistrer",exerciseDefaultName:"Exercice",minOneExerciseAlert:"La routine doit contenir au moins un exercice.",changeGifTitle:"Changer le GIF ou l'image",addGifTitle:"Ajouter un GIF ou une image",removeGifTitle:"Retirer GIF / image",moveUpTitle:"Monter",moveDownTitle:"Descendre",duplicateTitle:"Dupliquer",deleteTitle:"Supprimer",exerciseNamePlaceholder:"Nom de l'exercice",mediaModalTitle:"Animation ou image de l'exercice",mediaModalDesc:"Choisissez du catalogue, importez ou créez un GIF 3D",tabCatalog:"Catalogue",tabUploadShort:"Importer",tabCreator3d:"🎨 Créer GIF 3D (tout exercice)",uploadOwnGifBtn:"📤 Importer votre GIF/image (compressé auto.)",optimizingGifBtn:"⏳ Optimisation GIF / image (220×220)...",integratedCatalog:"Catalogue intégré",clearCurrent:"Retirer actuel",searchExercisePlaceholder:"Rechercher (ex. burpees, boxe, planche)...",noPresetFound:"Aucun préréglage trouvé pour",inPresetsWord:"parmi les",presetsWord:"prédéfinis.",createIn3dBtn:"Créer dans l'Éditeur 3D",describeExerciseLabel:"✨ Décrivez n'importe quel exercice",describePlaceholder:"Ex. Dead bug alterné, pont fessier à une jambe...",generatePoseBtn:"Générer pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Posture de base",propLabel:"Équipement",cameraLabel:"Caméra",speedLabel:"Vitesse",editingPoseLabel:"Édition Pose",startWord:"(Début)",endWord:"(Fin)",copyAToB:"Copier A → B",torsoHeightTab:"Torse & Hauteur",armsTab:"Bras",legsTab:"Jambes",symmetricArmsLabel:"Bouger les deux bras ensemble",symmetricLegsLabel:"Bouger les deux jambes ensemble",createApplyGifBtn:"🎨 Créer et appliquer le GIF",creatingGifBtn:"⏳ Génération du GIF...",downloadGifBtn:"💾 Télécharger .gif"},de:{appTitle:"Timer Routine Studio",subtitle:".wkt-Dateien",currentFile:"Aktuelle Datei",openLocal:"📂 Öffnen (.wkt)",save:"💾 Speichern",saveAs:"📑 Speichern unter...",shareWhatsApp:"Über WhatsApp teilen",openInApp:"📲 In App öffnen",validationAlertTitle:"⚠️ Die Routine enthält Fehler, die behoben werden müssen:",routineName:"Name der Routine",author:"Autor / Trainer",category:"Kategorie",sport:"Sportart",cycles:"Globale Zyklen",prepare:"Vorbereitung (Sek / max 24h)",prepareShort:"Vorbereitung (Sek)",totalTime:"Gesamtzeit",tut:"Arbeit (TUT)",rest:"Pause",totalRounds:"Gesamtrunden",exercisesRoundsLabel:"Übungen / Runden",exercisesList:"Übungsliste",exercisesHeading:"Übungen",addExercise:"+ Übung hinzufügen",addAnotherExercise:"+ Weitere Übung hinzufügen",rounds:"Runden",work:"Arbeit (Sek)",restBetween:"Rundenpause (Sek)",restAfter:"Abschlusspause (Sek)",subtotal:"Zwischensumme Übung:",estimatedDuration:"Geschätzte Übungsdauer:",savedIn:"Gespeichert in",savedAs:"Gespeichert als",systemLanguage:"Systemsprache",systemLanguageDesc:"Standardsprache des Systems",languageLabel:"Sprache",shareMessageIntro:"🔥 Schau dir meine Trainingsroutine auf dem Timer an!",clipboardNotice:"📋 .wkt-Datei heruntergeladen. Weiterleitung zu WhatsApp...",openingApp:"🚀 Routine an mobile App senden...",errNameEmpty:"Übungsname darf nicht leer sein.",errNameDuplicate:"Übungsname ist in der Routine doppelt vorhanden.",errWorkMin:"Die Arbeitszeit muss größer als 0 Sek sein.",errMaxTime:"Die Zeit darf 1440 Min (24 Stunden) nicht überschreiten.",errRoutineEmpty:"Die Routine muss mindestens eine Übung enthalten.",errRoutineNameEmpty:"Der Name der Routine darf nicht leer sein.",previewBadge:"✨ Geteilte Routine",previewModeBtn:"👁️ Vorschau",editRoutineBtn:"✏️ Im Web bearbeiten / anpassen",downloadWktBtn:"📥 Herunterladen (.wkt)",sharedBy:"Geteilt von",workVsRestRatio:"Verteilung Arbeit vs Pause",prepareBadge:"Vorbereitung",noRest:"Keine Pause",downloadApkBtn:"Android-App herunterladen (.apk)",welcomeDesc:"Erstelle, passe an und teile deine Timer-Trainingsroutinen (.wkt)",newRoutineBtn:"+ Neue Routine",openWktBtn:".wkt-Datei öffnen",examplesTitle:"⚡ Oder probiere eine Beispiel-Routine:",exercisesWord:"Übungen",homeBtn:"🏠 Start",sharedBanner:"✨ Routine über geteilten Link geladen.",invalidWktErr:"Die ausgewählte Datei hat kein gültiges .wkt-Format.",readWktErr:"Die ausgewählte .wkt-Datei konnte nicht gelesen werden.",openFileBtn:"Datei öffnen",saveLocalBtn:"Lokal speichern",exerciseDefaultName:"Übung",minOneExerciseAlert:"Die Routine muss mindestens eine Übung enthalten.",changeGifTitle:"GIF oder Bild ändern",addGifTitle:"GIF oder Bild hinzufügen",removeGifTitle:"GIF / Bild entfernen",moveUpTitle:"Nach oben",moveDownTitle:"Nach unten",duplicateTitle:"Duplizieren",deleteTitle:"Löschen",exerciseNamePlaceholder:"Name der Übung",mediaModalTitle:"Übungsanimation oder Bild",mediaModalDesc:"Aus Katalog wählen, Datei hochladen oder 3D-GIF erstellen",tabCatalog:"Katalog",tabUploadShort:"Hochladen",tabCreator3d:"🎨 3D-GIF erstellen (jede Übung)",uploadOwnGifBtn:"📤 Eigenes GIF/Bild hochladen (auto-komprimiert)",optimizingGifBtn:"⏳ GIF / Bild wird optimiert (220×220)...",integratedCatalog:"Integrierter Katalog",clearCurrent:"Aktuelles entfernen",searchExercisePlaceholder:"Übung suchen (z. B. Burpees, Boxen, Plank)...",noPresetFound:"Kein Preset gefunden für",inPresetsWord:"unter den",presetsWord:"Vorlagen.",createIn3dBtn:"Im 3D-Editor erstellen",describeExerciseLabel:"✨ Beschreibe eine beliebige Übung",describePlaceholder:"Z. B. Dead Bug, einbeinige Hüftbrücke...",generatePoseBtn:"Pose erzeugen",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Grundhaltung",propLabel:"Ausrüstung",cameraLabel:"Kamera",speedLabel:"Tempo",editingPoseLabel:"Bearbeite Pose",startWord:"(Start)",endWord:"(Ende)",copyAToB:"A → B kopieren",torsoHeightTab:"Oberkörper & Höhe",armsTab:"Arme",legsTab:"Beine",symmetricArmsLabel:"Beide Arme symmetrisch bewegen",symmetricLegsLabel:"Beide Beine symmetrisch bewegen",createApplyGifBtn:"🎨 GIF erstellen & anwenden",creatingGifBtn:"⏳ GIF wird erstellt...",downloadGifBtn:"💾 .gif herunterladen"},it:{appTitle:"Timer Routine Studio",subtitle:"File .wkt",currentFile:"File corrente",openLocal:"📂 Apri (.wkt)",save:"💾 Salva",saveAs:"📑 Salva come...",shareWhatsApp:"Condividi WhatsApp",openInApp:"📲 Apri nell'App",validationAlertTitle:"⚠️ La routine contiene errori da correggere:",routineName:"Nome della Routine",author:"Autore / Allenatore",category:"Categoria",sport:"Sport",cycles:"Cicli Globali",prepare:"Preparazione (sec / max 24h)",prepareShort:"Preparazione (sec)",totalTime:"Tempo Totale",tut:"Lavoro (TUT)",rest:"Riposo",totalRounds:"Round Totali",exercisesRoundsLabel:"Esercizi / Round",exercisesList:"Elenco Esercizi",exercisesHeading:"Esercizi",addExercise:"+ Aggiungi Esercizio",addAnotherExercise:"+ Aggiungi un altro esercizio",rounds:"Round",work:"Lavoro (sec)",restBetween:"Pausa Round (sec)",restAfter:"Pausa Finale (sec)",subtotal:"Subtotale esercizio:",estimatedDuration:"Durata stimata dell'esercizio:",savedIn:"Salvato in",savedAs:"Salvato come",systemLanguage:"Lingua di sistema",systemLanguageDesc:"Lingua predefinita",languageLabel:"Lingua",shareMessageIntro:"🔥 Guarda il mio allenamento sul timer!",clipboardNotice:"📋 File .wkt scaricato. Reindirizzamento a WhatsApp...",openingApp:"🚀 Invio della routine all'App mobile...",errNameEmpty:"Il nome dell'esercizio non può essere vuoto.",errNameDuplicate:"Il nome dell'esercizio è duplicato nella routine.",errWorkMin:"Il tempo di lavoro deve essere maggiore di 0 sec.",errMaxTime:"Il tempo non può superare 1440 min (24 ore).",errRoutineEmpty:"La routine deve contenere almeno un esercizio.",errRoutineNameEmpty:"Il nome della routine non può essere vuoto.",previewBadge:"✨ Routine Condivisa",previewModeBtn:"👁️ Anteprima",editRoutineBtn:"✏️ Modifica / Personalizza sul Web",downloadWktBtn:"📥 Scarica (.wkt)",sharedBy:"Condivisa da",workVsRestRatio:"Distribuzione Lavoro vs Riposo",prepareBadge:"Preparazione iniziale",noRest:"Nessuna pausa",downloadApkBtn:"Scarica App Android (.apk)",welcomeDesc:"Progetta, personalizza e condividi i tuoi allenamenti a intervalli (.wkt)",newRoutineBtn:"+ Nuova Routine",openWktBtn:"Apri file .wkt",examplesTitle:"⚡ Oppure esplora una routine di esempio:",exercisesWord:"esercizi",homeBtn:"🏠 Home",sharedBanner:"✨ Routine caricata da link condiviso.",invalidWktErr:"Il file selezionato non ha un formato .wkt valido.",readWktErr:"Impossibile leggere il file .wkt selezionato.",openFileBtn:"Apri File",saveLocalBtn:"Salva Locale",exerciseDefaultName:"Esercizio",minOneExerciseAlert:"La routine deve contenere almeno un esercizio.",changeGifTitle:"Cambia GIF o immagine",addGifTitle:"Aggiungi GIF o immagine",removeGifTitle:"Rimuovi GIF / immagine",moveUpTitle:"Sposta su",moveDownTitle:"Sposta giù",duplicateTitle:"Duplica",deleteTitle:"Elimina",exerciseNamePlaceholder:"Nome dell'esercizio",mediaModalTitle:"Animazione o immagine dell'esercizio",mediaModalDesc:"Scegli dal catalogo, carica un file o crea una GIF 3D",tabCatalog:"Catalogo",tabUploadShort:"Carica",tabCreator3d:"🎨 Crea GIF 3D (qualsiasi esercizio)",uploadOwnGifBtn:"📤 Carica GIF o immagine propria (compressa auto.)",optimizingGifBtn:"⏳ Ottimizzazione GIF / immagine (220×220)...",integratedCatalog:"Catalogo integrato",clearCurrent:"Rimuovi attuale",searchExercisePlaceholder:"Cerca esercizio (es. burpees, boxe, plank)...",noPresetFound:"Nessun preset trovato per",inPresetsWord:"tra i",presetsWord:"predefiniti.",createIn3dBtn:"Crea nel Creatore 3D",describeExerciseLabel:"✨ Descrivi qualsiasi esercizio",describePlaceholder:"Es. Dead bug alternato, ponte glutei su una gamba...",generatePoseBtn:"Genera posa",animPreview:"▶ Anim",poseABtn:"Posa A",poseBBtn:"Posa B",basePostureLabel:"Postura base",propLabel:"Attrezzo",cameraLabel:"Camera",speedLabel:"Velocità",editingPoseLabel:"Modifica Posa",startWord:"(Inizio)",endWord:"(Fine)",copyAToB:"Copia A → B",torsoHeightTab:"Busto e Altezza",armsTab:"Braccia",legsTab:"Gambe",symmetricArmsLabel:"Muovi entrambe le braccia insieme",symmetricLegsLabel:"Muovi entrambe le gambe insieme",createApplyGifBtn:"🎨 Crea e applica GIF",creatingGifBtn:"⏳ Generazione GIF...",downloadGifBtn:"💾 Scarica .gif"}},Ay=["Europe/Madrid","Atlantic/Canary","America/Montevideo","America/Buenos_Aires","America/Argentina","America/Cordoba","America/Mendoza","America/Santiago","America/La_Paz","America/Asuncion","America/Lima","America/Bogota","America/Guayaquil","America/Caracas","America/Panama","America/Costa_Rica","America/Managua","America/Tegucigalpa","America/El_Salvador","America/Guatemala","America/Mexico_City","America/Merida","America/Monterrey","America/Cancun","America/Chihuahua","America/Tijuana","America/Mazatlan","America/Hermosillo","America/Havana","America/Santo_Domingo","America/Puerto_Rico"];function Ty(){try{const t=Intl.DateTimeFormat().resolvedOptions().timeZone||"";if(!t)return null;if(Ay.some(e=>t.startsWith(e)))return"es";if(t.startsWith("America/Sao_Paulo")||t.startsWith("America/Manaus")||t.startsWith("America/Recife")||t.startsWith("America/Fortaleza")||t.startsWith("America/Belem")||t.startsWith("Europe/Lisbon"))return"pt";if(t.startsWith("Europe/Paris"))return"fr";if(t.startsWith("Europe/Berlin")||t.startsWith("Europe/Vienna")||t.startsWith("Europe/Zurich"))return"de";if(t.startsWith("Europe/Rome"))return"it"}catch{}return null}function Ry(t){if(t==="SYSTEM"||!t){const n=[];try{const a=Intl.DateTimeFormat().resolvedOptions().locale;a&&n.push(a)}catch{}typeof navigator<"u"&&(Array.isArray(navigator.languages)&&n.push(...navigator.languages),navigator.language&&n.push(navigator.language));const i=n.map(a=>(a||"").split("-")[0].toLowerCase()).filter(a=>!!(a&&Oi[a])),r=i.find(a=>a!=="en");if(r)return r;const s=Ty();return s&&Oi[s]?s:i[0]||"es"}const e=t.split("-")[0].toLowerCase();return Oi[e]?e:"es"}const im=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),S.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Cy=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("polyline",{points:"3 6 5 6 21 6"}),S.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Py=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),S.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),Ly=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),S.jsx("polyline",{points:"5 12 12 5 19 12"})]}),Ny=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),S.jsx("polyline",{points:"19 12 12 19 5 12"})]}),Dy=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),S.jsx("polyline",{points:"7 10 12 15 17 10"}),S.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),rm=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("circle",{cx:"12",cy:"12",r:"10"}),S.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Iy=({size:t=20,className:e="",...n})=>S.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:S.jsx("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),Tx=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}),S.jsx("polygon",{points:"22 19 19 9 2 9 5 19 22 19"})]}),Rx=({size:t=20,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),S.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),S.jsx("polyline",{points:"7 3 7 8 15 8"})]}),jl=({className:t="w-7 h-7 shrink-0",...e})=>S.jsxs("svg",{viewBox:"0 0 108 108",className:t,"aria-hidden":"true",...e,children:[S.jsx("rect",{width:"108",height:"108",rx:"24",fill:"#0F172A",stroke:"#1E293B",strokeWidth:"4"}),S.jsx("path",{fill:"#10B981",d:"M51,21 L57,21 L57,26 L51,26 Z"}),S.jsx("path",{fill:"#00E676",d:"M44,15 L64,15 A2,2 0 0,1 66,17 L66,20 A2,2 0 0,1 64,22 L44,22 A2,2 0 0,1 42,20 L42,17 A2,2 0 0,1 44,15 Z"}),S.jsx("path",{fill:"#10B981",d:"M33,27 L37,31 L33,35 L29,31 Z"}),S.jsx("path",{fill:"#00E676",d:"M25,25 L33,19 L37,23 L29,29 Z"}),S.jsx("path",{fill:"#10B981",d:"M75,27 L79,31 L75,35 L71,31 Z"}),S.jsx("path",{fill:"#00E676",d:"M75,19 L83,25 L79,29 L71,23 Z"}),S.jsx("path",{fill:"#00E676",d:"M54,26 A31,31 0 1,1 53.9,26 Z M54,32 A25,25 0 1,0 54.1,32 Z"}),S.jsx("path",{fill:"#10B981",d:"M52.5,34 L55.5,34 L55.5,38 L52.5,38 Z"}),S.jsx("path",{fill:"#10B981",d:"M52.5,76 L55.5,76 L55.5,80 L52.5,80 Z"}),S.jsx("path",{fill:"#10B981",d:"M31,55.5 L35,55.5 L35,58.5 L31,58.5 Z"}),S.jsx("path",{fill:"#10B981",d:"M73,55.5 L77,55.5 L77,58.5 L73,58.5 Z"}),S.jsx("path",{fill:"#00E676",d:"M57,41 L45,58 L54,58 L51,73 L63,56 L54,56 Z"})]}),Xl=({className:t="w-4 h-4 shrink-0",...e})=>S.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:t,"aria-hidden":"true",...e,children:S.jsx("path",{d:"M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"})}),sm=({size:t=18,className:e="",...n})=>S.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[S.jsx("circle",{cx:"12",cy:"12",r:"10"}),S.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),S.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),Fy=({metrics:t,t:e=Oi.es})=>S.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4",children:[S.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[S.jsx("div",{className:"p-2.5 rounded-lg bg-slate-700/50 text-white",children:S.jsx(rm,{size:22})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-xs text-slate-400 font-medium",children:e.totalTime}),S.jsx("p",{className:"text-xl font-bold text-white",children:bt(t.totalSeconds)})]})]}),S.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-xl p-3 flex items-center space-x-3",children:[S.jsx("div",{className:"p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400",children:S.jsx(Iy,{size:22})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-xs text-emerald-300 font-medium",children:e.tut}),S.jsx("p",{className:"text-xl font-bold text-emerald-400",children:bt(t.tutSeconds)})]})]}),S.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-xl p-3 flex items-center space-x-3",children:[S.jsx("div",{className:"p-2.5 rounded-lg bg-rose-500/20 text-rose-400",children:S.jsx(rm,{size:22})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-xs text-rose-300 font-medium",children:e.rest}),S.jsx("p",{className:"text-xl font-bold text-rose-400",children:bt(t.restSeconds)})]})]}),S.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[S.jsx("div",{className:"p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400",children:S.jsx("span",{className:"font-bold text-base",children:"#"})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-xs text-slate-400 font-medium",children:e.exercisesRoundsLabel||"Ejercicios / Rondas"}),S.jsxs("p",{className:"text-xl font-bold text-cyan-400",children:[t.exerciseCount," ",S.jsxs("span",{className:"text-xs text-slate-400",children:["(",t.totalRounds," r)"]})]})]})]})]});var Wr={},Cx={},Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});Bi.loop=Bi.conditional=Bi.parse=void 0;var Uy=function t(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(n))n.forEach(function(a){return t(e,a,i,r)});else if(typeof n=="function")n(e,i,r,t);else{var s=Object.keys(n)[0];Array.isArray(n[s])?(r[s]={},t(e,n[s],i,r[s])):r[s]=n[s](e,i,r,t)}return i};Bi.parse=Uy;var Oy=function(e,n){return function(i,r,s,a){n(i,r,s)&&a(i,e,r,s)}};Bi.conditional=Oy;var By=function(e,n){return function(i,r,s,a){for(var o=[],c=i.pos;n(i,r,s);){var l={};if(a(i,e,r,l),i.pos===c)break;c=i.pos,o.push(l)}return o}};Bi.loop=By;var At={};Object.defineProperty(At,"__esModule",{value:!0});At.readBits=At.readArray=At.readUnsigned=At.readString=At.peekBytes=At.readBytes=At.peekByte=At.readByte=At.buildStream=void 0;var ky=function(e){return{data:e,pos:0}};At.buildStream=ky;var Px=function(){return function(e){return e.data[e.pos++]}};At.readByte=Px;var zy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(n){return n.data[n.pos+e]}};At.peekByte=zy;var vc=function(e){return function(n){return n.data.subarray(n.pos,n.pos+=e)}};At.readBytes=vc;var Gy=function(e){return function(n){return n.data.subarray(n.pos,n.pos+e)}};At.peekBytes=Gy;var Hy=function(e){return function(n){return Array.from(vc(e)(n)).map(function(i){return String.fromCharCode(i)}).join("")}};At.readString=Hy;var Vy=function(e){return function(n){var i=vc(2)(n);return e?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};At.readUnsigned=Vy;var Wy=function(e,n){return function(i,r,s){for(var a=typeof n=="function"?n(i,r,s):n,o=vc(e),c=new Array(a),l=0;l<a;l++)c[l]=o(i);return c}};At.readArray=Wy;var jy=function(e,n,i){for(var r=0,s=0;s<i;s++)r+=e[n+s]&&Math.pow(2,i-s-1);return r},Xy=function(e){return function(n){for(var i=Px()(n),r=new Array(8),s=0;s<8;s++)r[7-s]=!!(i&1<<s);return Object.keys(e).reduce(function(a,o){var c=e[o];return c.length?a[o]=jy(r,c.index,c.length):a[o]=r[c.index],a},{})}};At.readBits=Xy;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=Bi,n=At,i={blocks:function(u){for(var p=0,m=[],v=u.data.length,x=0,h=(0,n.readByte)()(u);h!==p&&h;h=(0,n.readByte)()(u)){if(u.pos+h>=v){var g=v-u.pos;m.push((0,n.readBytes)(g)(u)),x+=g;break}m.push((0,n.readBytes)(h)(u)),x+=h}for(var y=new Uint8Array(x),E=0,b=0;b<m.length;b++)y.set(m[b],E),E+=m[b].length;return y}},r=(0,e.conditional)({gce:[{codes:(0,n.readBytes)(2)},{byteSize:(0,n.readByte)()},{extras:(0,n.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,n.readUnsigned)(!0)},{transparentColorIndex:(0,n.readByte)()},{terminator:(0,n.readByte)()}]},function(d){var u=(0,n.peekBytes)(2)(d);return u[0]===33&&u[1]===249}),s=(0,e.conditional)({image:[{code:(0,n.readByte)()},{descriptor:[{left:(0,n.readUnsigned)(!0)},{top:(0,n.readUnsigned)(!0)},{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{lct:(0,n.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,n.readArray)(3,function(d,u,p){return Math.pow(2,p.descriptor.lct.size+1)})},function(d,u,p){return p.descriptor.lct.exists}),{data:[{minCodeSize:(0,n.readByte)()},i]}]},function(d){return(0,n.peekByte)()(d)===44}),a=(0,e.conditional)({text:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{preData:function(u,p,m){return(0,n.readBytes)(m.text.blockSize)(u)}},i]},function(d){var u=(0,n.peekBytes)(2)(d);return u[0]===33&&u[1]===1}),o=(0,e.conditional)({application:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{id:function(u,p,m){return(0,n.readString)(m.blockSize)(u)}},i]},function(d){var u=(0,n.peekBytes)(2)(d);return u[0]===33&&u[1]===255}),c=(0,e.conditional)({comment:[{codes:(0,n.readBytes)(2)},i]},function(d){var u=(0,n.peekBytes)(2)(d);return u[0]===33&&u[1]===254}),l=[{header:[{signature:(0,n.readString)(3)},{version:(0,n.readString)(3)}]},{lsd:[{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{gct:(0,n.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,n.readByte)()},{pixelAspectRatio:(0,n.readByte)()}]},(0,e.conditional)({gct:(0,n.readArray)(3,function(d,u){return Math.pow(2,u.lsd.gct.size+1)})},function(d,u){return u.lsd.gct.exists}),{frames:(0,e.loop)([r,o,c,s,a],function(d){var u=(0,n.peekByte)()(d);return u===33||u===44})}],f=l;t.default=f})(Cx);var _c={};Object.defineProperty(_c,"__esModule",{value:!0});_c.deinterlace=void 0;var qy=function(e,n){for(var i=new Array(e.length),r=e.length/n,s=function(u,p){var m=e.slice(p*n,(p+1)*n);i.splice.apply(i,[u*n,n].concat(m))},a=[0,4,2,1],o=[8,8,4,2],c=0,l=0;l<4;l++)for(var f=a[l];f<r;f+=o[l])s(f,c),c++;return i};_c.deinterlace=qy;var Sc={};Object.defineProperty(Sc,"__esModule",{value:!0});Sc.lzw=void 0;var $y=function(e,n,i){var r=4096,s=-1,a=i,o,c,l,f,d,u,p,T,m,v,b,x,_,M,C,P,h=new Array(i),g=new Array(r),y=new Array(r),E=new Array(r+1);for(x=e,c=1<<x,d=c+1,o=c+2,p=s,f=x+1,l=(1<<f)-1,m=0;m<c;m++)g[m]=0,y[m]=m;var b,T,_,M,P,C;for(b=T=_=M=P=C=0,v=0;v<a;){if(M===0){if(T<f){b+=n[C]<<T,T+=8,C++;continue}if(m=b&l,b>>=f,T-=f,m>o||m==d)break;if(m==c){f=x+1,l=(1<<f)-1,o=c+2,p=s;continue}if(p==s){E[M++]=y[m],p=m,_=m;continue}for(u=m,m==o&&(E[M++]=_,m=p);m>c;)E[M++]=y[m],m=g[m];_=y[m]&255,E[M++]=_,o<r&&(g[o]=p,y[o]=_,o++,!(o&l)&&o<r&&(f++,l+=o)),p=u}M--,h[P++]=E[M],v++}for(v=P;v<a;v++)h[v]=0;return h};Sc.lzw=$y;Object.defineProperty(Wr,"__esModule",{value:!0});var Lx=Wr.decompressFrames=Wr.decompressFrame=Nx=Wr.parseGIF=void 0,Yy=eM(Cx),Ky=Bi,Zy=At,Jy=_c,Qy=Sc;function eM(t){return t&&t.__esModule?t:{default:t}}var tM=function(e){var n=new Uint8Array(e);return(0,Ky.parse)((0,Zy.buildStream)(n),Yy.default)},Nx=Wr.parseGIF=tM,nM=function(e){for(var n=e.pixels.length,i=new Uint8ClampedArray(n*4),r=0;r<n;r++){var s=r*4,a=e.pixels[r],o=e.colorTable[a]||[0,0,0];i[s]=o[0],i[s+1]=o[1],i[s+2]=o[2],i[s+3]=a!==e.transparentIndex?255:0}return i},Dx=function(e,n,i){if(!e.image){console.warn("gif frame does not have associated image.");return}var r=e.image,s=r.descriptor.width*r.descriptor.height,a=(0,Qy.lzw)(r.data.minCodeSize,r.data.blocks,s);r.descriptor.lct.interlaced&&(a=(0,Jy.deinterlace)(a,r.descriptor.width));var o={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?o.colorTable=r.lct:o.colorTable=n,e.gce&&(o.delay=(e.gce.delay||10)*10,o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),i&&(o.patch=nM(o)),o};Wr.decompressFrame=Dx;var iM=function(e,n){return e.frames.filter(function(i){return i.image}).map(function(i){return Dx(i,e.gct,n)})};Lx=Wr.decompressFrames=iM;var rM={trailer:59};function Ix(t=256){let e=0,n=new Uint8Array(t);return{get buffer(){return n.buffer},reset(){e=0},bytesView(){return n.subarray(0,e)},bytes(){return n.slice(0,e)},writeByte(r){i(e+1),n[e]=r,e++},writeBytes(r,s=0,a=r.length){i(e+a);for(let o=0;o<a;o++)n[e++]=r[o+s]},writeBytesView(r,s=0,a=r.byteLength){i(e+a),n.set(r.subarray(s,s+a),e),e+=a}};function i(r){var s=n.length;if(s>=r)return;var a=1024*1024;r=Math.max(r,s*(s<a?2:1.125)>>>0),s!=0&&(r=Math.max(r,256));let o=n;n=new Uint8Array(r),e>0&&n.set(o.subarray(0,e),0)}}var tu=12,am=5003,sM=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function aM(t,e,n,i,r=Ix(512),s=new Uint8Array(256),a=new Int32Array(am),o=new Int32Array(am)){let c=a.length,l=Math.max(2,i);s.fill(0),o.fill(0),a.fill(-1);let f=0,d=0,u=l+1,p=u,m=!1,v=p,x=(1<<v)-1,h=1<<u-1,g=h+1,y=h+2,E=0,b=n[0],T=0;for(let P=c;P<65536;P*=2)++T;T=8-T,r.writeByte(l),M(h);let _=n.length;for(let P=1;P<_;P++)e:{let C=n[P],I=(C<<tu)+b,U=C<<T^b;if(a[U]===I){b=o[U];break e}let D=U===0?1:c-U;for(;a[U]>=0;)if(U-=D,U<0&&(U+=c),a[U]===I){b=o[U];break e}M(b),b=C,y<1<<tu?(o[U]=y++,a[U]=I):(a.fill(-1),y=h+2,m=!0,M(h))}return M(b),M(g),r.writeByte(0),r.bytesView();function M(P){for(f&=sM[d],d>0?f|=P<<d:f=P,d+=v;d>=8;)s[E++]=f&255,E>=254&&(r.writeByte(E),r.writeBytesView(s,0,E),E=0),f>>=8,d-=8;if((y>x||m)&&(m?(v=p,x=(1<<v)-1,m=!1):(++v,x=v===tu?1<<v:(1<<v)-1)),P==g){for(;d>0;)s[E++]=f&255,E>=254&&(r.writeByte(E),r.writeBytesView(s,0,E),E=0),f>>=8,d-=8;E>0&&(r.writeByte(E),r.writeBytesView(s,0,E),E=0)}}}var oM=aM;function Fx(t,e,n){return t<<8&63488|e<<2&992|n>>3}function Ux(t,e,n,i){return t>>4|e&240|(n&240)<<4|(i&240)<<8}function Ox(t,e,n){return t>>4<<8|e&240|n>>4}function No(t,e,n){return t<e?e:t>n?n:t}function hl(t){return t*t}function om(t,e,n){var i=0,r=1e100;let s=t[e],a=s.cnt;s.ac;let o=s.rc,c=s.gc,l=s.bc;for(var f=s.fw;f!=0;f=t[f].fw){let u=t[f],p=u.cnt,m=a*p/(a+p);if(!(m>=r)){var d=0;d+=m*hl(u.rc-o),!(d>=r)&&(d+=m*hl(u.gc-c),!(d>=r)&&(d+=m*hl(u.bc-l),!(d>=r)&&(r=d,i=f)))}}s.err=r,s.nn=i}function nu(){return{ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0}}function lM(t,e){let n=e==="rgb444"?4096:65536,i=new Array(n),r=t.length;if(e==="rgba4444")for(let s=0;s<r;++s){let a=t[s],o=a>>24&255,c=a>>16&255,l=a>>8&255,f=a&255,d=Ux(f,l,c,o),u=d in i?i[d]:i[d]=nu();u.rc+=f,u.gc+=l,u.bc+=c,u.ac+=o,u.cnt++}else if(e==="rgb444")for(let s=0;s<r;++s){let a=t[s],o=a>>16&255,c=a>>8&255,l=a&255,f=Ox(l,c,o),d=f in i?i[f]:i[f]=nu();d.rc+=l,d.gc+=c,d.bc+=o,d.cnt++}else for(let s=0;s<r;++s){let a=t[s],o=a>>16&255,c=a>>8&255,l=a&255,f=Fx(l,c,o),d=f in i?i[f]:i[f]=nu();d.rc+=l,d.gc+=c,d.bc+=o,d.cnt++}return i}function Bx(t,e,n={}){let{format:i="rgb565",clearAlpha:r=!0,clearAlphaColor:s=0,clearAlphaThreshold:a=0,oneBitAlpha:o=!1}=n;if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");let c=new Uint32Array(t.buffer),l=n.useSqrt!==!1,f=i==="rgba4444",d=lM(c,i),u=d.length,p=u-1,m=new Uint32Array(u+1);for(var v=0,x=0;x<u;++x){let R=d[x];if(R!=null){var h=1/R.cnt;f&&(R.ac*=h),R.rc*=h,R.gc*=h,R.bc*=h,d[v++]=R}}hl(e)/v<.022&&(l=!1);for(var x=0;x<v-1;++x)d[x].fw=x+1,d[x+1].bk=x,l&&(d[x].cnt=Math.sqrt(d[x].cnt));l&&(d[x].cnt=Math.sqrt(d[x].cnt));var g,y,E;for(x=0;x<v;++x){om(d,x);var b=d[x].err;for(y=++m[0];y>1&&(E=y>>1,!(d[g=m[E]].err<=b));y=E)m[y]=g;m[y]=x}var T=v-e;for(x=0;x<T;){for(var _;;){var M=m[1];if(_=d[M],_.tm>=_.mtm&&d[_.nn].mtm<=_.tm)break;_.mtm==p?M=m[1]=m[m[0]--]:(om(d,M),_.tm=x);var b=d[M].err;for(y=1;(E=y+y)<=m[0]&&(E<m[0]&&d[m[E]].err>d[m[E+1]].err&&E++,!(b<=d[g=m[E]].err));y=E)m[y]=g;m[y]=M}var P=d[_.nn],C=_.cnt,I=P.cnt,h=1/(C+I);f&&(_.ac=h*(C*_.ac+I*P.ac)),_.rc=h*(C*_.rc+I*P.rc),_.gc=h*(C*_.gc+I*P.gc),_.bc=h*(C*_.bc+I*P.bc),_.cnt+=P.cnt,_.mtm=++x,d[P.bk].fw=P.fw,d[P.fw].bk=P.bk,P.mtm=p}let U=[];var D=0;for(x=0;;++D){let R=No(Math.round(d[x].rc),0,255),O=No(Math.round(d[x].gc),0,255),X=No(Math.round(d[x].bc),0,255),k=255;f&&(k=No(Math.round(d[x].ac),0,255),o&&(k=k<=(typeof o=="number"?o:127)?0:255),r&&k<=a&&(R=O=X=s,k=0));let G=f?[R,O,X,k]:[R,O,X];if(cM(U,G)||U.push(G),(x=d[x].fw)==0)break}return U}function cM(t,e){for(let n=0;n<t.length;n++){let i=t[n],r=i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2],s=i.length>=4&&e.length>=4?i[3]===e[3]:!0;if(r&&s)return!0}return!1}function kx(t,e,n="rgb565"){if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");if(e.length>256)throw new Error("applyPalette() only works with 256 colors or less");let i=new Uint32Array(t.buffer),r=i.length,s=n==="rgb444"?4096:65536,a=new Uint8Array(r),o=new Array(s);if(n==="rgba4444")for(let c=0;c<r;c++){let l=i[c],f=l>>24&255,d=l>>16&255,u=l>>8&255,p=l&255,m=Ux(p,u,d,f),v=m in o?o[m]:o[m]=uM(p,u,d,f,e);a[c]=v}else{let c=n==="rgb444"?Ox:Fx;for(let l=0;l<r;l++){let f=i[l],d=f>>16&255,u=f>>8&255,p=f&255,m=c(p,u,d),v=m in o?o[m]:o[m]=dM(p,u,d,e);a[l]=v}}return a}function uM(t,e,n,i,r){let s=0,a=1e100;for(let o=0;o<r.length;o++){let c=r[o],l=c[3],f=Gr(l-i);if(f>a)continue;let d=c[0];if(f+=Gr(d-t),f>a)continue;let u=c[1];if(f+=Gr(u-e),f>a)continue;let p=c[2];f+=Gr(p-n),!(f>a)&&(a=f,s=o)}return s}function dM(t,e,n,i){let r=0,s=1e100;for(let a=0;a<i.length;a++){let o=i[a],c=o[0],l=Gr(c-t);if(l>s)continue;let f=o[1];if(l+=Gr(f-e),l>s)continue;let d=o[2];l+=Gr(d-n),!(l>s)&&(s=l,r=a)}return r}function Gr(t){return t*t}function zx(t={}){let{initialCapacity:e=4096,auto:n=!0}=t,i=Ix(e),r=5003,s=new Uint8Array(256),a=new Int32Array(r),o=new Int32Array(r),c=!1;return{reset(){i.reset(),c=!1},finish(){i.writeByte(rM.trailer)},bytes(){return i.bytes()},bytesView(){return i.bytesView()},get buffer(){return i.buffer},get stream(){return i},writeHeader:l,writeFrame(f,d,u,p={}){let{transparent:m=!1,transparentIndex:v=0,delay:x=0,palette:h=null,repeat:g=0,colorDepth:y=8,dispose:E=-1}=p,b=!1;if(n?c||(b=!0,l(),c=!0):b=!!p.first,d=Math.max(0,Math.floor(d)),u=Math.max(0,Math.floor(u)),b){if(!h)throw new Error("First frame must include a { palette } option");hM(i,d,u,h,y),lm(i,h),g>=0&&pM(i,g)}let T=Math.round(x/10);fM(i,E,T,m,v);let _=!!h&&!b;mM(i,d,u,_?h:null),_&&lm(i,h),gM(i,f,d,u,y,s,a,o)}};function l(){Gx(i,"GIF89a")}}function fM(t,e,n,i,r){t.writeByte(33),t.writeByte(249),t.writeByte(4),r<0&&(r=0,i=!1);var s,a;i?(s=1,a=2):(s=0,a=0),e>=0&&(a=e&7),a<<=2,t.writeByte(0|a|0|s),ur(t,n),t.writeByte(r||0),t.writeByte(0)}function hM(t,e,n,i,r=8){let s=1,a=0,o=ph(i.length)-1,c=s<<7|r-1<<4|a<<3|o;ur(t,e),ur(t,n),t.writeBytes([c,0,0])}function pM(t,e){t.writeByte(33),t.writeByte(255),t.writeByte(11),Gx(t,"NETSCAPE2.0"),t.writeByte(3),t.writeByte(1),ur(t,e),t.writeByte(0)}function lm(t,e){let n=1<<ph(e.length);for(let i=0;i<n;i++){let r=[0,0,0];i<e.length&&(r=e[i]),t.writeByte(r[0]),t.writeByte(r[1]),t.writeByte(r[2])}}function mM(t,e,n,i){if(t.writeByte(44),ur(t,0),ur(t,0),ur(t,e),ur(t,n),i){let r=0,s=0,a=ph(i.length)-1;t.writeByte(128|r|s|0|a)}else t.writeByte(0)}function gM(t,e,n,i,r=8,s,a,o){oM(n,i,e,r,t,s,a,o)}function ur(t,e){t.writeByte(e&255),t.writeByte(e>>8&255)}function Gx(t,e){for(var n=0;n<e.length;n++)t.writeByte(e.charCodeAt(n))}function ph(t){return Math.max(Math.ceil(Math.log2(t)),1)}const xM=240,vM=220,cm=180,um=85,_M=240*1024,SM=280*1024,iu=60;function yM(t){if(t.length<6)return!1;const e=String.fromCharCode(t[0],t[1],t[2],t[3],t[4],t[5]);return e==="GIF87a"||e==="GIF89a"}function MM(t){const n=[];for(let i=0;i<t.length;i+=32768){const r=t.subarray(i,i+32768);n.push(String.fromCharCode(...r))}return btoa(n.join(""))}function Hx(t,e,n){if(t<=0||e<=0)return{width:n,height:n};if(t<=n&&e<=n)return{width:t,height:e};const i=Math.min(n/t,n/e);return{width:Math.max(1,Math.round(t*i)),height:Math.max(1,Math.round(e*i))}}function EM(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e;const r=i.getContext("2d",{willReadFrequently:!0});if(!r)return[];const s=document.createElement("canvas"),a=s.getContext("2d");if(!a)return[];const o=[];let c=0;for(let u=0;u<n.length;u++){const p=n[u].delay&&n[u].delay>0?n[u].delay:100,m=Math.max(p,20);u===0?(o.push({frameIdx:0,delayMs:m}),c=0):(c+=m,(c>=um||u===n.length-1)&&(o.push({frameIdx:u,delayMs:c}),c=0))}let l;if(o.length>iu){l=new Map;const u=o.length/iu;for(let p=0;p<iu;p++){const m=Math.floor(p*u),v=Math.min(o.length,Math.floor((p+1)*u));let x=0;for(let h=m;h<v;h++)x+=o[h].delayMs;l.set(o[m].frameIdx,Math.max(um,x))}}else l=new Map(o.map(u=>[u.frameIdx,u.delayMs]));const f=[];let d=null;for(let u=0;u<n.length;u++){const p=n[u],{width:m,height:v,left:x,top:h}=p.dims;if(p.disposalType===3&&(d=r.getImageData(0,0,t,e)),m>0&&v>0&&p.patch&&p.patch.length===m*v*4){s.width=m,s.height=v;const y=new ImageData(new Uint8ClampedArray(p.patch),m,v);a.putImageData(y,0,0),r.drawImage(s,x,h)}const g=l.get(u);if(g!==void 0){const y=document.createElement("canvas");y.width=t,y.height=e;const E=y.getContext("2d");E&&(E.fillStyle="#0F172A",E.fillRect(0,0,t,e),E.drawImage(i,0,0),f.push({canvas:y,delayMs:g}))}p.disposalType===2?r.clearRect(x,h,m,v):p.disposalType===3&&d&&(r.putImageData(d,0,0),d=null)}return f}function ru(t,e,n,i,r,s){const{width:a,height:o}=Hx(e,n,i),c=document.createElement("canvas");c.width=a,c.height=o;const l=c.getContext("2d",{willReadFrequently:!0});if(!l)return null;const f=zx();let d=0;for(let u=0;u<t.length;u+=s){const p=t[u];let m=p.delayMs;if(s>1)for(let g=u+1;g<Math.min(u+s,t.length);g++)m+=t[g].delayMs;l.fillStyle="#0F172A",l.fillRect(0,0,a,o),l.drawImage(p.canvas,0,0,a,o);const v=l.getImageData(0,0,a,o).data,x=Bx(v,r,{format:"rgb565"}),h=kx(v,x,"rgb565");f.writeFrame(h,a,o,{palette:x,delay:m,repeat:d===0?0:void 0}),d++}return d===0?null:(f.finish(),f.bytes())}async function wM(t){const e=URL.createObjectURL(t);try{const n=await new Promise((f,d)=>{const u=new Image;u.onload=()=>f(u),u.onerror=()=>d(new Error("No se pudo decodificar la imagen.")),u.src=e}),{width:i,height:r}=Hx(n.naturalWidth||n.width,n.naturalHeight||n.height,xM),s=document.createElement("canvas");s.width=i,s.height=r;const a=s.getContext("2d");if(!a)throw new Error("Canvas no disponible.");a.fillStyle="#0F172A",a.fillRect(0,0,i,r),a.drawImage(n,0,0,i,r);let o=s.toDataURL("image/webp",.8);o.startsWith("data:image/webp")||(o=s.toDataURL("image/jpeg",.82));const c=o.slice(o.indexOf("base64,")+7).length,l=Math.max(1,Math.round(c*3/4/1024));return{mediaData:o,sizeKb:l,isAnimated:!1}}finally{URL.revokeObjectURL(e)}}async function bM(t){const e=await t.arrayBuffer(),n=new Uint8Array(e);if(yM(n)||t.type==="image/gif")try{const r=Nx(e),s=Lx(r,!0);if(s.length>1){const a=r.lsd.width||s[0].dims.width,o=r.lsd.height||s[0].dims.height,c=EM(a,o,s);if(c.length>1){let l=ru(c,a,o,vM,64,1);if(l&&l.length>_M&&(l=ru(c,a,o,cm,32,1)),l&&l.length>SM&&(l=ru(c,a,o,cm,32,2)),l&&l.length>0){const f=`data:image/gif;base64,${MM(l)}`,d=Math.max(1,Math.round(l.length/1024));return{mediaData:f,sizeKb:d,isAnimated:!0}}}}}catch(r){console.warn("Fallo al re-codificar GIF en navegador, usando modo estático:",r)}return wM(t)}const rs={pelvisOffsetY:0,torsoPitch:0,torsoTwist:0,torsoRoll:0,headPitch:0,leftArmLift:8,rightArmLift:8,leftArmOut:8,rightArmOut:8,leftElbowFlex:12,rightElbowFlex:12,leftHipFlex:0,rightHipFlex:0,leftHipOut:4,rightHipOut:4,leftKneeFlex:4,rightKneeFlex:4};function ct(t){switch(t){case"supine":return{...rs,headPitch:15,leftArmLift:0,rightArmLift:0,leftArmOut:12,rightArmOut:12,leftHipFlex:10,rightHipFlex:10,leftKneeFlex:10,rightKneeFlex:10};case"prone":return{...rs,headPitch:-22,leftArmLift:165,rightArmLift:165,leftArmOut:8,rightArmOut:8,leftHipFlex:-5,rightHipFlex:-5};case"plank":return{...rs,headPitch:-15,leftArmLift:88,rightArmLift:88,leftElbowFlex:6,rightElbowFlex:6,leftHipFlex:0,rightHipFlex:0};case"quadruped":return{...rs,headPitch:-18,leftArmLift:88,rightArmLift:88,leftElbowFlex:4,rightElbowFlex:4,leftHipFlex:88,rightHipFlex:88,leftKneeFlex:90,rightKneeFlex:90};case"seated":return{...rs,torsoPitch:10,leftArmLift:25,rightArmLift:25,leftElbowFlex:70,rightElbowFlex:70,leftHipFlex:82,rightHipFlex:82,leftKneeFlex:75,rightKneeFlex:75};case"standing":default:return{...rs}}}function AM(t,e="Ejercicio personalizado"){const n=ct(t);return{title:e,posture:t,prop:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"||t==="seated"?"mat":"none",camera:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"?"low_side":"three_quarter",frameDelayMs:80,isometricPulse:!1,poseA:{...n},poseB:{...n}}}function TM(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}function Ye(t,e){return e.some(n=>t.includes(n))}const RM=["Bicho muerto alternado","Puente de glúteo a una pierna","Toque de talones tumbado boca arriba","Isométrico de cuello","Patada de glúteo en cuatro apoyos","Remo alternado con mancuernas"];function su(t){const e=t.trim()||"Ejercicio personalizado",n=TM(e),i=[],r=Ye(n,["una pierna","un brazo","unilateral","single leg","single arm","alternad","alterno","alterna","izquierd","derech"]),s=Ye(n,["isometric","mantener","hold","estatic","aguantar"]);let a="none";if(Ye(n,["mancuerna","dumbbell","pesa ","pesas"])?(a="dumbbells",i.push("Mancuernas")):Ye(n,["barra","barbell","press militar","peso muerto"])?(a="barbell",i.push("Barra")):Ye(n,["kettlebell","pesa rusa","disco","plate"])?(a="kettlebell",i.push("Kettlebell / Disco")):Ye(n,["cajon","box","banco","silla","step","escalon"])?(a="box",i.push("Cajón / Banco")):Ye(n,["boxeo","guante","jab","cross","gancho","hook","uppercut","puno"])&&(a="gloves",i.push("Guantes de boxeo")),Ye(n,["bicho muerto","dead bug","deadbug"]))return i.push("Boca arriba en colchoneta","Movimiento cruzado brazo/pierna"),{spec:{title:e,posture:"supine",prop:a==="none"?"mat":a,camera:"low_side",frameDelayMs:90,isometricPulse:s,poseA:s?{...ct("supine"),leftArmLift:90,rightArmLift:90,leftHipFlex:90,rightHipFlex:90,leftKneeFlex:90,rightKneeFlex:90}:{...ct("supine"),leftArmLift:165,rightArmLift:90,leftHipFlex:90,rightHipFlex:12,leftKneeFlex:90,rightKneeFlex:10},poseB:s?{...ct("supine"),pelvisOffsetY:.02,leftArmLift:94,rightArmLift:94,leftHipFlex:86,rightHipFlex:86,leftKneeFlex:90,rightKneeFlex:90}:{...ct("supine"),leftArmLift:90,rightArmLift:165,leftHipFlex:12,rightHipFlex:90,leftKneeFlex:10,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if(Ye(n,["toque de talon","tocar talon","talones","heel touch","penguin"]))return i.push("Boca arriba","Rodillas flexionadas y balanceo lateral"),{spec:{title:e,posture:"supine",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...ct("supine"),torsoPitch:24,torsoTwist:-18,torsoRoll:-16,headPitch:22,leftArmLift:25,rightArmLift:15,leftArmOut:22,rightArmOut:10,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112},poseB:{...ct("supine"),torsoPitch:24,torsoTwist:18,torsoRoll:16,headPitch:22,leftArmLift:15,rightArmLift:25,leftArmOut:10,rightArmOut:22,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112}},matchedNotes:i,confidence:"high"};if(Ye(n,["puente","glute bridge","hip thrust","elevacion de cadera"]))return i.push("Boca arriba",r?"A una pierna":"Elevación de cadera"),{spec:{title:e,posture:"supine",prop:"mat",camera:"low_side",frameDelayMs:85,isometricPulse:s,poseA:{...ct("supine"),pelvisOffsetY:0,torsoPitch:0,leftHipFlex:55,rightHipFlex:r?75:55,leftKneeFlex:115,rightKneeFlex:r?12:115,leftArmLift:0,rightArmLift:0,leftArmOut:14,rightArmOut:14},poseB:{...ct("supine"),pelvisOffsetY:.22,torsoPitch:24,headPitch:18,leftHipFlex:0,rightHipFlex:r?45:0,leftKneeFlex:92,rightKneeFlex:r?10:92,leftArmLift:-20,rightArmLift:-20,leftArmOut:14,rightArmOut:14}},matchedNotes:i,confidence:"high"};if(Ye(n,["cuello","neck","cervical"]))return i.push("Activación cervical",s?"Isométrico":"Movilidad de cuello"),{spec:{title:e,posture:"standing",prop:"none",camera:"three_quarter",frameDelayMs:95,isometricPulse:!0,poseA:{...ct("standing"),headPitch:s?-6:-22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18},poseB:{...ct("standing"),headPitch:s?6:22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18}},matchedNotes:i,confidence:"high"};if(Ye(n,["bird dog","birddog","perro de caza","perro pajaro"]))return i.push("Cuatro apoyos","Extensión cruzada"),{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...ct("quadruped"),leftArmLift:170,rightArmLift:88,leftHipFlex:88,rightHipFlex:-8,leftKneeFlex:90,rightKneeFlex:8},poseB:{...ct("quadruped"),leftArmLift:88,rightArmLift:170,leftHipFlex:-8,rightHipFlex:88,leftKneeFlex:8,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if(Ye(n,["patada de gluteo","donkey kick","glute kick","hidrante","cuatro apoyos","cuadrupedia"])){i.push("Cuatro apoyos en colchoneta");const u=Ye(n,["hidrante","lateral","abduccion"]);return{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:80,isometricPulse:!1,poseA:ct("quadruped"),poseB:{...ct("quadruped"),leftHipFlex:u?85:-25,leftHipOut:u?55:0,leftKneeFlex:85}},matchedNotes:i,confidence:"high"}}if(Ye(n,["plancha","plank"]))return Ye(n,["superman"])?(i.push("Plancha","Extensión alternada brazo/pierna"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...ct("plank"),leftArmLift:172,rightHipFlex:-16},poseB:{...ct("plank"),rightArmLift:172,leftHipFlex:-16}},matchedNotes:i,confidence:"high"}):Ye(n,["toque de hombro","shoulder tap","hombros"])?(i.push("Plancha","Toques de hombro alternados"),{spec:{title:e,posture:"plank",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...ct("plank"),leftArmLift:105,leftArmOut:-20,leftElbowFlex:120},poseB:{...ct("plank"),rightArmLift:105,rightArmOut:-20,rightElbowFlex:120}},matchedNotes:i,confidence:"high"}):(i.push("Plancha abdominal"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:95,isometricPulse:!0,poseA:{...ct("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.18},poseB:{...ct("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.15,torsoPitch:3}},matchedNotes:i,confidence:"high"});let o="standing";Ye(n,["boca arriba","tumbado","acostado","abdominal","crunch","hollow","v-up","sit up"])?(o="supine",i.push("Postura boca arriba")):Ye(n,["boca abajo","superman","lumbar","espinal"])?(o="prone",i.push("Postura boca abajo")):Ye(n,["sentado","seated","giro ruso","russian"])&&(o="seated",i.push("Postura sentada")),a==="none"&&o!=="standing"&&(a="mat");const c=ct(o),l=ct(o);let f=o==="standing"?"three_quarter":"low_side",d=!1;if(Ye(n,["sentadilla","squat","silla"])){d=!0,i.push("Flexión de piernas (sentadilla)");const u=Ye(n,["sumo","abierta"]);c.leftHipOut=u?28:8,c.rightHipOut=u?28:8,l.pelvisOffsetY=-.34,l.torsoPitch=18,l.leftHipFlex=82,l.rightHipFlex=r?25:82,l.leftHipOut=u?34:10,l.rightHipOut=u?34:10,l.leftKneeFlex=96,l.rightKneeFlex=r?10:96,l.leftArmLift=65,l.rightArmLift=65,(a==="dumbbells"||a==="kettlebell")&&(c.leftArmLift=45,c.rightArmLift=45,c.leftElbowFlex=95,c.rightElbowFlex=95,l.leftArmLift=55,l.rightArmLift=55,l.leftElbowFlex=95,l.rightElbowFlex=95)}else Ye(n,["zancada","estocada","lunge","bulgara"])?(d=!0,i.push("Zancada"),f="side",l.pelvisOffsetY=-.26,l.leftHipFlex=78,l.leftKneeFlex=85,l.rightHipFlex=-22,l.rightKneeFlex=88,l.leftArmLift=45,l.rightArmLift=45):Ye(n,["flexion","pushup","push-up","lagartija"])?(d=!0,o="plank",a="mat",f="low_side",i.push("Flexiones en suelo"),Object.assign(c,ct("plank")),Object.assign(l,ct("plank"),{pelvisOffsetY:-.2,leftArmLift:58,rightArmLift:58,leftArmOut:28,rightArmOut:28,leftElbowFlex:105,rightElbowFlex:105})):Ye(n,["remo","row"])?(d=!0,a==="none"&&(a="dumbbells"),f="three_quarter",i.push("Tracción / Remo"),c.pelvisOffsetY=-.06,c.torsoPitch=38,c.headPitch=-25,c.leftHipFlex=42,c.rightHipFlex=42,c.leftKneeFlex=24,c.rightKneeFlex=24,c.leftArmLift=45,c.rightArmLift=45,Object.assign(l,c),l.leftArmLift=-10,l.leftElbowFlex=92,r?(c.rightArmLift=-10,c.rightElbowFlex=92,l.rightArmLift=45,l.rightElbowFlex=10):(l.rightArmLift=-10,l.rightElbowFlex=92)):Ye(n,["curl","bicep"])?(d=!0,a==="none"&&(a="dumbbells"),i.push("Flexión de bíceps"),c.leftElbowFlex=12,c.rightElbowFlex=r?128:12,l.leftElbowFlex=128,l.rightElbowFlex=r?12:128):Ye(n,["press","hombro","militar","empuje arriba"])?(d=!0,a==="none"&&(a="dumbbells"),i.push("Empuje vertical sobre cabeza"),c.leftArmLift=42,c.rightArmLift=42,c.leftArmOut=30,c.rightArmOut=30,c.leftElbowFlex=105,c.rightElbowFlex=105,l.leftArmLift=172,l.rightArmLift=r?42:172,l.leftArmOut=10,l.rightArmOut=r?30:10,l.leftElbowFlex=8,l.rightElbowFlex=r?105:8):Ye(n,["lateral","vuelo","pajaro","abduccion brazo"])?(d=!0,a==="none"&&(a="dumbbells"),f="front",i.push("Elevación lateral"),c.leftArmOut=10,c.rightArmOut=10,l.leftArmOut=88,l.rightArmOut=88,l.leftElbowFlex=16,l.rightElbowFlex=16):Ye(n,["peso muerto","deadlift","buenos dias","good morning","bisagra"])?(d=!0,f="side",i.push("Bisagra de cadera"),l.pelvisOffsetY=-.06,l.torsoPitch=58,l.headPitch=-28,l.leftHipFlex=58,l.rightHipFlex=58,l.leftKneeFlex=20,l.rightKneeFlex=20,l.leftArmLift=58,l.rightArmLift=58):Ye(n,["patada","kick","rodillazo","rodilla"])?(d=!0,f="three_quarter",i.push("Patada / elevación de pierna"),c.leftArmLift=55,c.rightArmLift=55,c.leftElbowFlex=95,c.rightElbowFlex=95,Object.assign(l,c),l.leftHipFlex=95,l.leftKneeFlex=Ye(n,["rodilla","knee"])?95:10):Ye(n,["salto","jump","tijera","jack","skipping"])?(d=!0,f="front",i.push("Salto dinámico"),l.pelvisOffsetY=.14,l.leftArmOut=145,l.rightArmOut=145,l.leftHipOut=26,l.rightHipOut=26):Ye(n,["giro","rotacion","twist","lenador","oblicuo"])?(d=!0,i.push("Rotación de tronco"),c.torsoTwist=-38,c.leftArmLift=65,c.rightArmLift=65,c.leftElbowFlex=45,c.rightElbowFlex=45,Object.assign(l,c),l.torsoTwist=38):Ye(n,["abdominal","crunch","encogimiento","sit up"])?(d=!0,o="supine",a="mat",f="low_side",i.push("Flexión abdominal"),Object.assign(c,ct("supine"),{leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112,leftArmLift:90,rightArmLift:90,leftElbowFlex:110,rightElbowFlex:110}),Object.assign(l,c,{torsoPitch:36,headPitch:25})):Ye(n,["elevacion","elevar","subir","levantar"])&&(d=!0,i.push("Elevación controlada"),Ye(n,["pierna","leg","rodilla"])?(l.leftHipFlex=78,l.rightHipFlex=r?0:78):(l.leftArmLift=155,l.rightArmLift=r?10:155));return s&&d&&(i.push("Variante isométrica"),Object.assign(c,l),l.pelvisOffsetY=Math.min(.3,l.pelvisOffsetY+.02),l.torsoPitch=Math.min(90,l.torsoPitch+2)),{spec:{title:e,posture:o,prop:a,camera:f,frameDelayMs:s?95:80,isometricPulse:s,poseA:c,poseB:l},matchedNotes:i.length>0?i:["Postura base sugerida (ajusta Pose A y Pose B a tu gusto)"],confidence:d?"high":i.length>0?"medium":"low"}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="187",CM=0,dm=1,PM=2,pl=1,Vx=2,_a=3,Zr=0,En=1,gi=2,Us=0,Pa=1,fm=2,hm=3,pm=4,LM=5,xs=100,NM=101,DM=102,IM=103,FM=104,UM=200,OM=201,BM=202,kM=203,Wx=204,jx=205,zM=206,GM=207,HM=208,VM=209,WM=210,jM=211,XM=212,qM=213,$M=214,Rd=0,Cd=1,Pd=2,Ya=3,Ld=4,Nd=5,Dd=6,Id=7,Xx=0,YM=1,KM=2,ki=0,qx=1,$x=2,Yx=3,gh=4,Kx=5,Zx=6,Jx=7,Qx=300,js=301,Ka=302,au=303,ou=304,Fd=1e3,Fi=1001,Ud=1002,Kt=1003,ZM=1004,Do=1005,_n=1006,lu=1007,dr=1008,Rn=1009,ev=1010,tv=1011,Za=1012,xh=1013,Mi=1014,xi=1015,Ei=1016,vh=1017,_h=1018,Xs=1020,nv=35902,iv=35899,rv=1021,sv=1022,vi=1023,wr=1026,fr=1027,av=1028,Sh=1029,Jr=1030,yh=1031,Mh=1033,ml=33776,gl=33777,xl=33778,vl=33779,Od=35840,Bd=35841,kd=35842,zd=35843,Gd=36196,Hd=37492,Vd=37496,Wd=37488,jd=37489,ql=37490,Xd=37491,qd=37808,$d=37809,Yd=37810,Kd=37811,Zd=37812,Jd=37813,Qd=37814,ef=37815,tf=37816,nf=37817,rf=37818,sf=37819,af=37820,of=37821,lf=36492,cf=36494,uf=36495,df=36283,ff=36284,$l=36285,hf=36286,JM=3200,pf=0,QM=1,or="",Gn="srgb",Yl="srgb-linear",Kl="linear",at="srgb",cu=7680,e1=519,t1=512,n1=513,i1=514,ov=515,r1=516,s1=517,lv=518,cv=519,a1=35044,mm="300 es",ri=2e3,Ja=2001;function o1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function l1(){const t=Zl("canvas");return t.style.display="block",t}const gm={};function xm(...t){const e="THREE."+t.shift();console.log(e,...t)}function uv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=uv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=uv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function _l(...t){const e=t.join(" ");e in gm||(gm[e]=!0,Ie(...t))}function c1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const u1={[Rd]:Rd,[Pd]:Dd,[Ld]:Ld,[Ya]:Nd,[Cd]:Cd,[Dd]:Pd,[Id]:Id,[Nd]:Ya};class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=Math.PI/180,mf=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function d1(t,e){return(t%e+e)%e}function du(t,e,n){return(1-n)*t+n*e}function f1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Eh(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function h1(t,e){if(e.constructor===Float32Array)return t;const n=Eh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function p1(t,e){if(e.constructor===Float32Array)return t;const n=Eh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Lh=class Lh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;let Ne=Lh;class Js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],d=i[r+3],u=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(d!==v||c!==u||l!==p||f!==m){let x=c*u+l*p+f*m+d*v;x<0&&(u=-u,p=-p,m=-m,v=-v,x=-x);let h=1-o;if(x<.9995){const g=Math.acos(x),y=Math.sin(g);h=Math.sin(h*g)/y,o=Math.sin(o*g)/y,c=c*h+u*o,l=l*h+p*o,f=f*h+m*o,d=d*h+v*o}else{c=c*h+u*o,l=l*h+p*o,f=f*h+m*o,d=d*h+v*o;const g=1/Math.sqrt(c*c+l*l+f*f+d*d);c*=g,l*=g,f*=g,d*=g}}e[n]=c,e[n+1]=l,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],d=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+f*d+c*p-l*u,e[n+1]=c*m+f*u+l*d-o*p,e[n+2]=l*m+f*p+o*u-c*d,e[n+3]=f*m-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),d=o(s/2),u=c(i/2),p=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=u*f*d+l*p*m,this._y=l*p*d-u*f*m,this._z=l*f*m+u*p*d,this._w=l*f*d-u*p*m;break;case"YXZ":this._x=u*f*d+l*p*m,this._y=l*p*d-u*f*m,this._z=l*f*m-u*p*d,this._w=l*f*d+u*p*m;break;case"ZXY":this._x=u*f*d-l*p*m,this._y=l*p*d+u*f*m,this._z=l*f*m+u*p*d,this._w=l*f*d-u*p*m;break;case"ZYX":this._x=u*f*d-l*p*m,this._y=l*p*d+u*f*m,this._z=l*f*m-u*p*d,this._w=l*f*d+u*p*m;break;case"YZX":this._x=u*f*d+l*p*m,this._y=l*p*d+u*f*m,this._z=l*f*m-u*p*d,this._w=l*f*d-u*p*m;break;case"XZY":this._x=u*f*d-l*p*m,this._y=l*p*d-u*f*m,this._z=l*f*m+u*p*d,this._w=l*f*d+u*p*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],f=n[6],d=n[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(f-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,n=Math.sin(n*l)/f,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nh=class Nh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*f,this.y=i+c*f+o*l-s*d,this.z=r+c*d+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nh.prototype.isVector3=!0;let $=Nh;const fu=new $,vm=new Js,Dh=class Dh{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],d=i[7],u=i[2],p=i[5],m=i[8],v=r[0],x=r[3],h=r[6],g=r[1],y=r[4],E=r[7],b=r[2],T=r[5],_=r[8];return s[0]=a*v+o*g+c*b,s[3]=a*x+o*y+c*T,s[6]=a*h+o*E+c*_,s[1]=l*v+f*g+d*b,s[4]=l*x+f*y+d*T,s[7]=l*h+f*E+d*_,s[2]=u*v+p*g+m*b,s[5]=u*x+p*y+m*T,s[8]=u*h+p*E+m*_,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return n*a*f-n*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=f*a-o*l,u=o*c-f*s,p=l*s-a*c,m=n*d+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*l-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=u*v,e[4]=(f*n-r*c)*v,e[5]=(r*s-o*n)*v,e[6]=p*v,e[7]=(i*c-l*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return _l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hu.makeScale(e,n)),this}rotate(e){return _l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hu.makeRotation(-e)),this}translate(e,n){return _l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;let Ue=Dh;const hu=new Ue,_m=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m1(){const t={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?Kl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yl]:{primaries:e,whitePoint:i,transfer:Kl,toXYZ:_m,fromXYZ:Sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:_m,fromXYZ:Sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const Ze=m1();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class g1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Zl("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x1=0;class wh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pu(r[a].image)):s.push(pu(r[a]))}else s=pu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?g1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let v1=0;const mu=new $;class hn extends ns{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Fi,r=Fi,s=_n,a=dr,o=vi,c=Rn,l=hn.DEFAULT_ANISOTROPY,f=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=so(),this.name="",this.source=new wh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mu).x}get height(){return this.source.getSize(mu).y}get depth(){return this.source.getSize(mu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Qx;hn.DEFAULT_ANISOTROPY=1;const Ih=class Ih{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],f=c[4],d=c[8],u=c[1],p=c[5],m=c[9],v=c[2],x=c[6],h=c[10];if(Math.abs(f-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+x)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(l+1)/2,E=(p+1)/2,b=(h+1)/2,T=(f+u)/4,_=(d+v)/4,M=(m+x)/4;return y>E&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=_/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=M/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=_/s,r=M/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-m)*(x-m)+(d-v)*(d-v)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(d-v)/g,this.z=(u-f)/g,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;let St=Ih;class _1 extends ns{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new wh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends _1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S1 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ec=class ec{constructor(e,n,i,r,s,a,o,c,l,f,d,u,p,m,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,f,d,u,p,m,v,x)}set(e,n,i,r,s,a,o,c,l,f,d,u,p,m,v,x){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=m,h[11]=v,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,p=a*d,m=o*f,v=o*d;n[0]=c*f,n[4]=-c*d,n[8]=l,n[1]=p+m*l,n[5]=u-v*l,n[9]=-o*c,n[2]=v-u*l,n[6]=m+p*l,n[10]=a*c}else if(e.order==="YXZ"){const u=c*f,p=c*d,m=l*f,v=l*d;n[0]=u+v*o,n[4]=m*o-p,n[8]=a*l,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=p*o-m,n[6]=v+u*o,n[10]=a*c}else if(e.order==="ZXY"){const u=c*f,p=c*d,m=l*f,v=l*d;n[0]=u-v*o,n[4]=-a*d,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*f,n[9]=v-u*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const u=a*f,p=a*d,m=o*f,v=o*d;n[0]=c*f,n[4]=m*l-p,n[8]=u*l+v,n[1]=c*d,n[5]=v*l+u,n[9]=p*l-m,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,m=o*c,v=o*l;n[0]=c*f,n[4]=v-u*d,n[8]=m*d+p,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-l*f,n[6]=p*d+m,n[10]=u-v*d}else if(e.order==="XZY"){const u=a*c,p=a*l,m=o*c,v=o*l;n[0]=c*f,n[4]=-d,n[8]=l*f,n[1]=u*d+v,n[5]=a*f,n[9]=p*d-m,n[2]=m*d-p,n[6]=o*f,n[10]=v*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y1,e,M1)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Yi.crossVectors(i,bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Yi.crossVectors(i,bn)),Yi.normalize(),Io.crossVectors(bn,Yi),r[0]=Yi.x,r[4]=Io.x,r[8]=bn.x,r[1]=Yi.y,r[5]=Io.y,r[9]=bn.y,r[2]=Yi.z,r[6]=Io.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],d=i[5],u=i[9],p=i[13],m=i[2],v=i[6],x=i[10],h=i[14],g=i[3],y=i[7],E=i[11],b=i[15],T=r[0],_=r[4],M=r[8],P=r[12],C=r[1],I=r[5],U=r[9],D=r[13],R=r[2],O=r[6],X=r[10],k=r[14],G=r[3],z=r[7],V=r[11],N=r[15];return s[0]=a*T+o*C+c*R+l*G,s[4]=a*_+o*I+c*O+l*z,s[8]=a*M+o*U+c*X+l*V,s[12]=a*P+o*D+c*k+l*N,s[1]=f*T+d*C+u*R+p*G,s[5]=f*_+d*I+u*O+p*z,s[9]=f*M+d*U+u*X+p*V,s[13]=f*P+d*D+u*k+p*N,s[2]=m*T+v*C+x*R+h*G,s[6]=m*_+v*I+x*O+h*z,s[10]=m*M+v*U+x*X+h*V,s[14]=m*P+v*D+x*k+h*N,s[3]=g*T+y*C+E*R+b*G,s[7]=g*_+y*I+E*O+b*z,s[11]=g*M+y*U+E*X+b*V,s[15]=g*P+y*D+E*k+b*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],d=e[6],u=e[10],p=e[14],m=e[3],v=e[7],x=e[11],h=e[15],g=c*p-l*u,y=o*p-l*d,E=o*u-c*d,b=a*p-l*f,T=a*u-c*f,_=a*d-o*f;return n*(v*g-x*y+h*E)-i*(m*g-x*b+h*T)+r*(m*y-v*b+h*_)-s*(m*E-v*T+x*_)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return n*(a*f-o*l)-i*(s*f-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=e[9],u=e[10],p=e[11],m=e[12],v=e[13],x=e[14],h=e[15],g=n*o-i*a,y=n*c-r*a,E=n*l-s*a,b=i*c-r*o,T=i*l-s*o,_=r*l-s*c,M=f*v-d*m,P=f*x-u*m,C=f*h-p*m,I=d*x-u*v,U=d*h-p*v,D=u*h-p*x,R=g*D-y*U+E*I+b*C-T*P+_*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=(o*D-c*U+l*I)*O,e[1]=(r*U-i*D-s*I)*O,e[2]=(v*_-x*T+h*b)*O,e[3]=(u*T-d*_-p*b)*O,e[4]=(c*C-a*D-l*P)*O,e[5]=(n*D-r*C+s*P)*O,e[6]=(x*E-m*_-h*y)*O,e[7]=(f*_-u*E+p*y)*O,e[8]=(a*U-o*C+l*M)*O,e[9]=(i*C-n*U-s*M)*O,e[10]=(m*T-v*E+h*g)*O,e[11]=(d*E-f*T-p*g)*O,e[12]=(o*P-a*I-c*M)*O,e[13]=(n*I-i*P+r*M)*O,e[14]=(v*y-m*b-x*g)*O,e[15]=(f*b-d*y+u*g)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,f=a+a,d=o+o,u=s*l,p=s*f,m=s*d,v=a*f,x=a*d,h=o*d,g=c*l,y=c*f,E=c*d,b=i.x,T=i.y,_=i.z;return r[0]=(1-(v+h))*b,r[1]=(p+E)*b,r[2]=(m-y)*b,r[3]=0,r[4]=(p-E)*T,r[5]=(1-(u+h))*T,r[6]=(x+g)*T,r[7]=0,r[8]=(m+y)*_,r[9]=(x-g)*_,r[10]=(1-(u+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),c=as.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const l=1/a,f=1/o,d=1/c;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,n.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=ri,c=!1){const l=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,v;if(c)m=s/(a-s),v=a*s/(a-s);else if(o===ri)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ja)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ri,c=!1){const l=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,v;if(c)m=1/(a-s),v=a/(a-s);else if(o===ri)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ja)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ec.prototype.isMatrix4=!0;let Mt=ec;const as=new $,Kn=new Mt,y1=new $(0,0,0),M1=new $(1,1,1),Yi=new $,Io=new $,bn=new $,ym=new Mt,Mm=new Js;class br{constructor(e=0,n=0,i=0,r=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ym,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E1=0;const Em=new $,os=new Js,bi=new Mt,Fo=new $,ca=new $,w1=new $,b1=new Js,wm=new $(1,0,0),bm=new $(0,1,0),Am=new $(0,0,1),Tm={type:"added"},A1={type:"removed"},ls={type:"childadded",child:null},gu={type:"childremoved",child:null};class Jt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new $,n=new br,i=new Js,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ue}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,n){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fo.copy(e):Fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ca,Fo,this.up):bi.lookAt(Fo,ca,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(bi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),ls.child=e,this.dispatchEvent(ls),ls.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(A1),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,w1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,b1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jt.DEFAULT_UP=new $(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class It extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T1={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const x=n.getJointPose(v,i),h=this._getHandJoint(l,v);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new It;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function vu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=d1(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=vu(a,s,e+1/3),this.g=vu(a,s,e),this.b=vu(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=hv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Ze.workingToColorSpace(an.copy(this),e),Math.round(Ke(an.r*255,0,255))*65536+Math.round(Ke(an.g*255,0,255))*256+Math.round(Ke(an.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=f<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Gn){Ze.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(Uo);const i=du(Ki.h,Uo.h,n),r=du(Ki.s,Uo.s,n),s=du(Ki.l,Uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Je;Je.NAMES=hv;class R1 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new $,Ai=new $,_u=new $,Ti=new $,cs=new $,us=new $,Rm=new $,Su=new $,yu=new $,Mu=new $,Eu=new St,wu=new St,bu=new St;class ii{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ai.subVectors(i,n),_u.subVectors(e,n);const a=Zn.dot(Zn),o=Zn.dot(Ai),c=Zn.dot(_u),l=Ai.dot(Ai),f=Ai.dot(_u),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-o*f)*u,m=(a*f-o*c)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Eu.setScalar(0),wu.setScalar(0),bu.setScalar(0),Eu.fromBufferAttribute(e,n),wu.fromBufferAttribute(e,i),bu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Eu,s.x),a.addScaledVector(wu,s.y),a.addScaledVector(bu,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ai.subVectors(e,n),Zn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Zn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;cs.subVectors(r,i),us.subVectors(s,i),Su.subVectors(e,i);const c=cs.dot(Su),l=us.dot(Su);if(c<=0&&l<=0)return n.copy(i);yu.subVectors(e,r);const f=cs.dot(yu),d=us.dot(yu);if(f>=0&&d<=f)return n.copy(r);const u=c*d-f*l;if(u<=0&&c>=0&&f<=0&&c-f>0)return a=c/(c-f),n.copy(i).addScaledVector(cs,a);Mu.subVectors(e,s);const p=cs.dot(Mu),m=us.dot(Mu);if(m>=0&&p<=m)return n.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),n.copy(i).addScaledVector(us,o);const x=f*m-p*d;if(x<=0&&d-f>=0&&p-m>=0)return Rm.subVectors(s,r),o=(d-f)/(d-f+(p-m)),n.copy(r).addScaledVector(Rm,o);const h=1/(x+v+u);return a=v*h,o=u*h,n.copy(i).addScaledVector(cs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Bo.subVectors(this.max,ua),ds.subVectors(e.a,ua),fs.subVectors(e.b,ua),hs.subVectors(e.c,ua),Zi.subVectors(fs,ds),Ji.subVectors(hs,fs),Nr.subVectors(ds,hs);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Nr.z,Nr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Nr.z,0,-Nr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Nr.y,Nr.x,0];return!Au(n,ds,fs,hs,Bo)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,ds,fs,hs,Bo))?!1:(ko.crossVectors(Zi,Ji),n=[ko.x,ko.y,ko.z],Au(n,ds,fs,hs,Bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new $,new $,new $,new $,new $,new $,new $,new $],Jn=new $,Oo=new ao,ds=new $,fs=new $,hs=new $,Zi=new $,Ji=new $,Nr=new $,ua=new $,Bo=new $,ko=new $,Dr=new $;function Au(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Dr.fromArray(t,s);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),c=e.dot(Dr),l=n.dot(Dr),f=i.dot(Dr);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Ct=new $,zo=new Ne;let C1=0;class jr extends ns{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=a1,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?Eh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):h1(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):p1(e,this.array)}}class pv extends jr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class mv extends jr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class rt extends jr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const P1=new ao,da=new $,Tu=new $;class bh{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):P1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const n=da.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Tu)),this.expandByPoint(da.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let L1=0;const Bn=new Mt,Ru=new Jt,ps=new $,An=new ao,fa=new ao,Ht=new $;class wn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o1(e)?mv:pv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(An.min,fa.min),An.expandByPoint(Ht),Ht.addVectors(An.max,fa.max),An.expandByPoint(Ht)):(An.expandByPoint(fa.min),An.expandByPoint(fa.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Ht.fromBufferAttribute(o,l),c&&(ps.fromBufferAttribute(e,l),Ht.add(ps)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new $,c[P]=new $;const f=new $,d=new $,u=new $,p=new Ne,m=new Ne,v=new Ne,x=new $,h=new $;function g(P,C,I){l[P]=l[C]=l[I]=1,f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,I),p.fromBufferAttribute(s,P),m.fromBufferAttribute(s,C),v.fromBufferAttribute(s,I),d.sub(f),u.sub(f),m.sub(p),v.sub(p);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(U),h.copy(u).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(U),o[P].add(x),o[C].add(x),o[I].add(x),c[P].add(h),c[C].add(h),c[I].add(h))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,C=y.length;P<C;++P){const I=y[P],U=I.start,D=I.count;for(let R=U,O=U+D;R<O;R+=3)g(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const E=new $,b=new $,T=new $,_=new $;function M(P){T.fromBufferAttribute(r,P),_.copy(T);const C=o[P];E.copy(C),E.sub(T.multiplyScalar(T.dot(C))).normalize(),b.crossVectors(_,C);const U=b.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,U)}for(let P=0,C=i.count;P<C;++P)l[P]&&M(P);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new jr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new $,s=new $,a=new $,o=new $,c=new $,l=new $,f=new $,d=new $;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,x),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),o.add(f),c.add(f),l.add(f),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,d=o.normalized,u=new l.constructor(c.length*f);let p=0,m=0;for(let v=0,x=c.length;v<x;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*f;for(let h=0;h<f;h++)u[m++]=l[p++]}return new jr(u,f,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,d=l.length;f<d;f++){const u=l[f],p=e(u,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];f.push(p.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(n))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new $,N1=new $,D1=new Ue;class ir{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cu.subVectors(i,n).cross(N1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Cu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||D1.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let I1=0;class oo extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Pa,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wx,this.blendDst=jx,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cu,this.stencilZFail=cu,this.stencilZPass=cu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ir().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new $,Pu=new $,Go=new $,Ho=new $;class F1{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pu.copy(e).add(n).multiplyScalar(.5),Go.copy(n).sub(e).normalize(),Ho.copy(this.origin).sub(Pu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Go),o=Ho.dot(this.direction),c=-Ho.dot(Go),l=Ho.lengthSq(),f=Math.abs(1-a*a);let d,u,p,m;if(f>0)if(d=a*c-o,u=a*o-c,m=s*f,d>=0)if(u>=-m)if(u<=m){const v=1/f;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Pu).addScaledVector(Go,u),p}intersectSphere(e,n){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,m=n.x-a.x,v=n.y-a.y,x=n.z-a.z,h=i.x-a.x,g=i.y-a.y,y=i.z-a.z,E=Math.abs(c),b=Math.abs(l),T=Math.abs(f);let _,M,P,C,I,U,D,R,O,X,k,G;if(E>=b&&E>=T?(P=c,U=d,O=m,G=h,c>=0?(_=l,M=f,C=u,I=p,D=v,R=x,X=g,k=y):(_=f,M=l,C=p,I=u,D=x,R=v,X=y,k=g)):b>=T?(P=l,U=u,O=v,G=g,l>=0?(_=f,M=c,C=p,I=d,D=x,R=m,X=y,k=h):(_=c,M=f,C=d,I=p,D=m,R=x,X=h,k=y)):(P=f,U=p,O=x,G=y,f>=0?(_=c,M=l,C=d,I=u,D=m,R=v,X=h,k=g):(_=l,M=c,C=u,I=d,D=v,R=m,X=g,k=h)),P===0)return null;const z=_/P,V=M/P,N=1/P,J=C-z*U,Me=I-V*U,W=D-z*O,ie=R-V*O,re=X-z*G,ve=k-V*G,se=re*ie-ve*W,Pe=J*ve-Me*re,it=W*Me-ie*J;if(r){if(se<0||Pe<0||it<0)return null}else if((se<0||Pe<0||it<0)&&(se>0||Pe>0||it>0))return null;const Te=se+Pe+it;if(Te===0)return null;const ze=N*(se*U+Pe*O+it*G);return(Te>0?ze<0:ze>0)?null:this.at(ze/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gv extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cm=new Mt,Ir=new F1,Vo=new bh,Pm=new $,Wo=new $,jo=new $,Xo=new $,Lu=new $,qo=new $,Lm=new $,$o=new $;class je extends Jt{constructor(e=new wn,n=new gv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],d=s[c];f!==0&&(Lu.fromBufferAttribute(d,e),a?qo.addScaledVector(Lu,f):qo.addScaledVector(Lu.sub(n),f))}n.add(qo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Vo.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Vo,Pm)===null||Ir.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Cm.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Cm),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const x=u[m],h=a[x.materialIndex],g=Math.max(x.start,p.start),y=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let E=g,b=y;E<b;E+=3){const T=o.getX(E),_=o.getX(E+1),M=o.getX(E+2);r=Yo(this,h,e,i,l,f,d,T,_,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let x=m,h=v;x<h;x+=3){const g=o.getX(x),y=o.getX(x+1),E=o.getX(x+2);r=Yo(this,a,e,i,l,f,d,g,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const x=u[m],h=a[x.materialIndex],g=Math.max(x.start,p.start),y=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let E=g,b=y;E<b;E+=3){const T=E,_=E+1,M=E+2;r=Yo(this,h,e,i,l,f,d,T,_,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let x=m,h=v;x<h;x+=3){const g=x,y=x+1,E=x+2;r=Yo(this,a,e,i,l,f,d,g,y,E),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function U1(t,e,n,i,r,s,a,o){let c;if(e.side===En?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Zr,o),c===null)return null;$o.copy(o),$o.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo($o);return l<n.near||l>n.far?null:{distance:l,point:$o.clone(),object:t}}function Yo(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,Wo),t.getVertexPosition(c,jo),t.getVertexPosition(l,Xo);const f=U1(t,e,n,i,Wo,jo,Xo,Lm);if(f){const d=new $;ii.getBarycoord(Lm,Wo,jo,Xo,d),r&&(f.uv=ii.getInterpolatedAttribute(r,o,c,l,d,new Ne)),s&&(f.uv1=ii.getInterpolatedAttribute(s,o,c,l,d,new Ne)),a&&(f.normal=ii.getInterpolatedAttribute(a,o,c,l,d,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new $,materialIndex:0};ii.getNormal(Wo,jo,Xo,u.normal),f.face=u,f.barycoord=d}return f}class O1 extends hn{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Kt,f=Kt,d,u){super(null,a,o,c,l,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fr=new bh,B1=new Ne(.5,.5),Ko=new $;class Qa{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,a=new ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],d=s[5],u=s[6],p=s[7],m=s[8],v=s[9],x=s[10],h=s[11],g=s[12],y=s[13],E=s[14],b=s[15];if(r[0].setComponents(l-a,p-f,h-m,b-g).normalize(),r[1].setComponents(l+a,p+f,h+m,b+g).normalize(),r[2].setComponents(l+o,p+d,h+v,b+y).normalize(),r[3].setComponents(l-o,p-d,h-v,b-y).normalize(),i)r[4].setComponents(c,u,x,E).normalize(),r[5].setComponents(l-c,p-u,h-x,b-E).normalize();else if(r[4].setComponents(l-c,p-u,h-x,b-E).normalize(),n===ri)r[5].setComponents(l+c,p+u,h+x,b+E).normalize();else if(n===Ja)r[5].setComponents(c,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const n=B1.distanceTo(e.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Nm=new Mt;class Ah{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Nm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Qa),i[r].setFromProjectionMatrix(Nm,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Qa),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Ah().copy(this)}}class xv extends hn{constructor(e=[],n=js,i,r,s,a,o,c,l,f){super(e,n,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qs extends hn{constructor(e,n,i=Mi,r,s,a,o=Kt,c=Kt,l,f=wr,d=1){if(f!==wr&&f!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class vv extends qs{constructor(e,n=Mi,i=js,r,s,a=Kt,o=Kt,c,l=wr){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _v extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yr extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function m(v,x,h,g,y,E,b,T,_,M,P){const C=E/_,I=b/M,U=E/2,D=b/2,R=T/2,O=_+1,X=M+1;let k=0,G=0;const z=new $;for(let V=0;V<X;V++){const N=V*I-D;for(let J=0;J<O;J++){const Me=J*C-U;z[v]=Me*g,z[x]=N*y,z[h]=R,l.push(z.x,z.y,z.z),z[v]=0,z[x]=0,z[h]=T>0?1:-1,f.push(z.x,z.y,z.z),d.push(J/_),d.push(1-V/M),k+=1}}for(let V=0;V<M;V++)for(let N=0;N<_;N++){const J=u+N+O*V,Me=u+N+O*(V+1),W=u+(N+1)+O*(V+1),ie=u+(N+1)+O*V;c.push(J,Me,ie),c.push(Me,W,ie),G+=6}o.addGroup(p,G,P),p+=G,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jl extends wn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],f=n/2,d=Math.PI/2*e,u=n,p=2*d+u,m=i*2+s,v=r+1,x=new $,h=new $;for(let g=0;g<=m;g++){let y=0,E=0,b=0,T=0;if(g<=i){const P=g/i,C=P*Math.PI/2;E=-f-e*Math.cos(C),b=e*Math.sin(C),T=-e*Math.cos(C),y=P*d}else if(g<=i+s){const P=(g-i)/s;E=-f+P*n,b=e,T=0,y=d+P*u}else{const P=(g-i-s)/i,C=P*Math.PI/2;E=f+e*Math.sin(C),b=e*Math.cos(C),T=e*Math.sin(C),y=d+u+P*d}const _=Math.max(0,Math.min(1,y/p));let M=0;g===0?M=.5/r:g===m&&(M=-.5/r);for(let P=0;P<=r;P++){const C=P/r,I=C*Math.PI*2,U=Math.sin(I),D=Math.cos(I);h.x=-b*D,h.y=E,h.z=b*U,o.push(h.x,h.y,h.z),x.set(-b*D,T,b*U),x.normalize(),c.push(x.x,x.y,x.z),l.push(C+M,_)}if(g>0){const P=(g-1)*v;for(let C=0;C<r;C++){const I=P+C,U=P+C+1,D=g*v+C,R=g*v+C+1;a.push(I,U,D),a.push(U,R,D)}}}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Th extends wn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],c=[],l=new $,f=new Ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){const p=i+d/n*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),f.x=(a[u]/e+1)/2,f.y=(a[u+1]/e+1)/2,c.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rr extends wn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],u=[],p=[];let m=0;const v=[],x=i/2;let h=0;g(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(p,2));function g(){const E=new $,b=new $;let T=0;const _=(n-e)/i;for(let M=0;M<=s;M++){const P=[],C=M/s,I=C*(n-e)+e;for(let U=0;U<=r;U++){const D=U/r,R=D*c+o,O=Math.sin(R),X=Math.cos(R);b.x=I*O,b.y=-C*i+x,b.z=I*X,d.push(b.x,b.y,b.z),E.set(O,_,X).normalize(),u.push(E.x,E.y,E.z),p.push(D,1-C),P.push(m++)}v.push(P)}for(let M=0;M<r;M++)for(let P=0;P<s;P++){const C=v[P][M],I=v[P+1][M],U=v[P+1][M+1],D=v[P][M+1];(e>0||P!==0)&&(f.push(C,I,D),T+=3),(n>0||P!==s-1)&&(f.push(I,U,D),T+=3)}l.addGroup(h,T,0),h+=T}function y(E){const b=m,T=new Ne,_=new $;let M=0;const P=E===!0?e:n,C=E===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,x*C,0),u.push(0,C,0),p.push(.5,.5),m++;const I=m;for(let U=0;U<=r;U++){const R=U/r*c+o,O=Math.cos(R),X=Math.sin(R);_.x=P*X,_.y=x*C,_.z=P*O,d.push(_.x,_.y,_.z),u.push(0,C,0),T.x=O*.5+.5,T.y=X*.5*C+.5,p.push(T.x,T.y),m++}for(let U=0;U<r;U++){const D=b+U,R=I+U;E===!0?f.push(R,R+1,D):f.push(R+1,R,D),M+=3}l.addGroup(h,M,E===!0?1:2),h+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yc extends wn{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Ke(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],f=1/n,d=new $,u=new Ne,p=new $,m=new $,v=new $;let x=0,h=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:x=e[g+1].x-e[g].x,h=e[g+1].y-e[g].y,p.x=h*1,p.y=-x,p.z=h*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:x=e[g+1].x-e[g].x,h=e[g+1].y-e[g].y,p.x=h*1,p.y=-x,p.z=h*0,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(m)}for(let g=0;g<=n;g++){const y=i+g*f*r,E=Math.sin(y),b=Math.cos(y);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*E,d.y=e[T].y,d.z=e[T].x*b,a.push(d.x,d.y,d.z),u.x=g/n,u.y=T/(e.length-1),o.push(u.x,u.y);const _=c[3*T+0]*E,M=c[3*T+1],P=c[3*T+0]*b;l.push(_,M,P)}}for(let g=0;g<n;g++)for(let y=0;y<e.length-1;y++){const E=y+g*e.length,b=E,T=E+e.length,_=E+e.length+1,M=E+1;s.push(b,T,M),s.push(_,M,T)}this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.points,e.segments,e.phiStart,e.phiLength)}}class Mc extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,d=e/o,u=n/c,p=[],m=[],v=[],x=[];for(let h=0;h<f;h++){const g=h*u-a;for(let y=0;y<l;y++){const E=y*d-s;m.push(E,-g,0),v.push(0,0,1),x.push(y/o),x.push(1-h/c)}}for(let h=0;h<c;h++)for(let g=0;g<o;g++){const y=g+l*h,E=g+l*(h+1),b=g+1+l*(h+1),T=g+1+l*h;p.push(y,E,T),p.push(E,b,T)}this.setIndex(p),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rh extends wn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],f=[];let d=e;const u=(n-e)/r,p=new $,m=new Ne;for(let v=0;v<=r;v++){for(let x=0;x<=i;x++){const h=s+x/i*a;p.x=d*Math.cos(h),p.y=d*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,f.push(m.x,m.y)}d+=u}for(let v=0;v<r;v++){const x=v*(i+1);for(let h=0;h<i;h++){const g=h+x,y=g,E=g+i+1,b=g+i+2,T=g+1;o.push(y,E,T),o.push(E,b,T)}}this.setIndex(o),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Li extends wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const f=[],d=new $,u=new $,p=[],m=[],v=[],x=[];for(let h=0;h<=i;h++){const g=[],y=h/i,E=a+y*o,b=e*Math.cos(E),T=Math.sqrt(e*e-b*b);let _=0;h===0&&a===0?_=.5/n:h===i&&c===Math.PI&&(_=-.5/n);for(let M=0;M<=n;M++){const P=M/n,C=r+P*s;d.x=-T*Math.cos(C),d.y=b,d.z=T*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),x.push(P+_,1-y),g.push(l++)}f.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const y=f[h][g+1],E=f[h][g],b=f[h+1][g],T=f[h+1][g+1];(h!==0||a>0)&&p.push(y,E,T),(h!==i-1||c<Math.PI)&&p.push(E,b,T)}this.setIndex(p),this.setAttribute("position",new rt(m,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ch extends wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],f=[],d=[],u=new $,p=new $,m=new $;for(let v=0;v<=i;v++){const x=a+v/i*o;for(let h=0;h<=r;h++){const g=h/r*s;p.x=(e+n*Math.cos(x))*Math.cos(g),p.y=(e+n*Math.cos(x))*Math.sin(g),p.z=n*Math.sin(x),l.push(p.x,p.y,p.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),m.subVectors(p,u).normalize(),f.push(m.x,m.y,m.z),d.push(h/r),d.push(v/i)}}for(let v=1;v<=i;v++)for(let x=1;x<=r;x++){const h=(r+1)*v+x-1,g=(r+1)*(v-1)+x-1,y=(r+1)*(v-1)+x,E=(r+1)*v+x;c.push(h,g,E),c.push(g,y,E)}this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Dm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Dm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function Dm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function k1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Sv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const z1={clone:$s,merge:un};var G1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G1,this.fragmentShader=H1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=k1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class V1 extends Qr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kn extends oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W1 extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j1 extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yv extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class X1 extends yv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Nu=new Mt,Im=new $,Fm=new $;class q1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Im.setFromMatrixPosition(e.matrixWorld),n.position.copy(Im),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Nu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Ja||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),n.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zo=new $,Jo=new Js,ui=new $;class Mv extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ui.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Zo,Jo,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new $,Um=new Ne,Om=new Ne;class ni extends Mv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mf*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Um,Om),n.subVectors(Om,Um)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ev extends Mv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $1 extends q1{constructor(){super(new Ev(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends yv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new $1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const ms=-90,gs=1;class gf extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new ni(ms,gs,e,n);s.layers=this.layers,this.add(s);const a=new ni(ms,gs,e,n);a.layers=this.layers,this.add(a);const o=new ni(ms,gs,e,n);o.layers=this.layers,this.add(o);const c=new ni(ms,gs,e,n);c.layers=this.layers,this.add(c);const l=new ni(ms,gs,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Y1 extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Bm(t,e,n,i){const r=K1(i);switch(n){case rv:return t*e;case av:return t*e/r.components*r.byteLength;case Sh:return t*e/r.components*r.byteLength;case Jr:return t*e*2/r.components*r.byteLength;case yh:return t*e*2/r.components*r.byteLength;case sv:return t*e*3/r.components*r.byteLength;case vi:return t*e*4/r.components*r.byteLength;case Mh:return t*e*4/r.components*r.byteLength;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:case zd:return Math.max(t,16)*Math.max(e,8)/4;case Od:case kd:return Math.max(t,8)*Math.max(e,8)/2;case Gd:case Hd:case Wd:case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vd:case ql:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lf:case cf:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $l:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function K1(t){switch(t){case Rn:case ev:return{byteLength:1,components:1};case Za:case tv:case Ei:return{byteLength:2,components:1};case vh:case _h:return{byteLength:2,components:4};case Mi:case xh:case xi:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Z1(t){const e=new WeakMap;function n(o,c){const l=o.array,f=o.usage,d=l.byteLength,u=t.createBuffer();t.bindBuffer(c,u),t.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const f=c.array,d=c.updateRanges;if(t.bindBuffer(l,o),d.length===0)t.bufferSubData(l,0,f);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],v=d[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const v=d[p];t.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var J1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q1=`#ifdef USE_ALPHAHASH
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
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aE=`#ifdef USE_BATCHING
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
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dE=`#ifdef USE_IRIDESCENCE
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
#endif`,fE=`#ifdef USE_BUMPMAP
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yE=`#define PI 3.141592653589793
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
} // validated`,ME=`vec3 transformedNormal = objectNormal;
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
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,VE=`#ifdef USE_ENVMAP
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
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$E=`PhysicalMaterial material;
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
#endif`,YE=`uniform sampler2D dfgLUT;
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
}`,KE=`
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
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ow=`#if defined( USE_POINTS_UV )
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
#endif`,lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dw=`#if defined( USE_MORPHCOLORS )
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
#endif`,fw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`#ifdef USE_MORPHTARGETS
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
#endif`,pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sw=`#ifdef USE_NORMALMAP
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
#endif`,yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ew=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ww=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Aw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uw=`float getShadowMask() {
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
}`,Ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bw=`#ifdef USE_SKINNING
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
#endif`,kw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zw=`#ifdef USE_SKINNING
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
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ww=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,Xw=`#ifdef USE_TRANSMISSION
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
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
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
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform float backgroundBlurriness;
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`#include <common>
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
}`,rb=`#if DEPTH_PACKING == 3200
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
}`,sb=`#define DISTANCE
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
}`,ab=`#define DISTANCE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,ub=`uniform vec3 diffuse;
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
}`,db=`#include <common>
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
}`,fb=`uniform vec3 diffuse;
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
}`,hb=`#define LAMBERT
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
}`,pb=`#define LAMBERT
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
}`,mb=`#define MATCAP
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
}`,gb=`#define MATCAP
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
}`,xb=`#define NORMAL
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
}`,vb=`#define NORMAL
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
}`,_b=`#define PHONG
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
}`,Sb=`#define PHONG
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
}`,yb=`#define STANDARD
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
}`,Mb=`#define STANDARD
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
}`,Eb=`#define TOON
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
}`,wb=`#define TOON
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
}`,bb=`uniform float size;
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
}`,Ab=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Rb=`uniform vec3 color;
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
}`,Cb=`uniform float rotation;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:J1,alphahash_pars_fragment:Q1,alphamap_fragment:eE,alphamap_pars_fragment:tE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:rE,aomap_pars_fragment:sE,batching_pars_vertex:aE,batching_vertex:oE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:dE,bumpmap_pars_fragment:fE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:xE,color_pars_fragment:vE,color_pars_vertex:_E,color_vertex:SE,common:yE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:wE,emissivemap_fragment:bE,emissivemap_pars_fragment:AE,colorspace_fragment:TE,colorspace_pars_fragment:RE,envmap_fragment:CE,envmap_common_pars_fragment:PE,envmap_pars_fragment:LE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:VE,envmap_vertex:DE,fog_vertex:IE,fog_pars_vertex:FE,fog_fragment:UE,fog_pars_fragment:OE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:kE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:GE,lights_pars_begin:HE,lights_toon_fragment:WE,lights_toon_pars_fragment:jE,lights_phong_fragment:XE,lights_phong_pars_fragment:qE,lights_physical_fragment:$E,lights_physical_pars_fragment:YE,lights_fragment_begin:KE,lights_fragment_maps:ZE,lights_fragment_end:JE,lightprobes_pars_fragment:QE,logdepthbuf_fragment:ew,logdepthbuf_pars_fragment:tw,logdepthbuf_pars_vertex:nw,logdepthbuf_vertex:iw,map_fragment:rw,map_pars_fragment:sw,map_particle_fragment:aw,map_particle_pars_fragment:ow,metalnessmap_fragment:lw,metalnessmap_pars_fragment:cw,morphinstance_vertex:uw,morphcolor_vertex:dw,morphnormal_vertex:fw,morphtarget_pars_vertex:hw,morphtarget_vertex:pw,normal_fragment_begin:mw,normal_fragment_maps:gw,normal_pars_fragment:xw,normal_pars_vertex:vw,normal_vertex:_w,normalmap_pars_fragment:Sw,clearcoat_normal_fragment_begin:yw,clearcoat_normal_fragment_maps:Mw,clearcoat_pars_fragment:Ew,iridescence_pars_fragment:ww,opaque_fragment:bw,packing:Aw,premultiplied_alpha_fragment:Tw,project_vertex:Rw,dithering_fragment:Cw,dithering_pars_fragment:Pw,roughnessmap_fragment:Lw,roughnessmap_pars_fragment:Nw,shadowmap_pars_fragment:Dw,shadowmap_pars_vertex:Iw,shadowmap_vertex:Fw,shadowmask_pars_fragment:Uw,skinbase_vertex:Ow,skinning_pars_vertex:Bw,skinning_vertex:kw,skinnormal_vertex:zw,specularmap_fragment:Gw,specularmap_pars_fragment:Hw,tonemapping_fragment:Vw,tonemapping_pars_fragment:Ww,transmission_fragment:jw,transmission_pars_fragment:Xw,uv_pars_fragment:qw,uv_pars_vertex:$w,uv_vertex:Yw,worldpos_vertex:Kw,background_vert:Zw,background_frag:Jw,backgroundCube_vert:Qw,backgroundCube_frag:eb,cube_vert:tb,cube_frag:nb,depth_vert:ib,depth_frag:rb,distance_vert:sb,distance_frag:ab,equirect_vert:ob,equirect_frag:lb,linedashed_vert:cb,linedashed_frag:ub,meshbasic_vert:db,meshbasic_frag:fb,meshlambert_vert:hb,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:xb,meshnormal_frag:vb,meshphong_vert:_b,meshphong_frag:Sb,meshphysical_vert:yb,meshphysical_frag:Mb,meshtoon_vert:Eb,meshtoon_frag:wb,points_vert:bb,points_frag:Ab,shadow_vert:Tb,shadow_frag:Rb,sprite_vert:Cb,sprite_frag:Pb},Se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},pi={basic:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:un([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:un([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:un([Se.points,Se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:un([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:un([Se.common,Se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:un([Se.sprite,Se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:un([Se.common,Se.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:un([Se.lights,Se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};pi.physical={uniforms:un([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Qo={r:0,b:0,g:0},Lb=new Mt,bv=new Ue;bv.set(-1,0,0,0,1,0,0,0,1);function Nb(t,e,n,i,r,s){const a=new Je(0);let o=r===!0?0:1,c,l,f=null,d=0,u=null;function p(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const E=g.backgroundBlurriness>0;y=e.get(y,E)}return y}function m(g){let y=!1;const E=p(g);E===null?x(a,o):E&&E.isColor&&(x(E,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,y){const E=p(y);E&&E.isCubeTexture?(l===void 0&&(l=new je(new yr(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:$s(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(y.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bv),l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==at,(f!==E||d!==E.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,d=E.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new je(new Mc(2,2),new Qr({name:"BackgroundMaterial",uniforms:$s(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,y){g.getRGB(Qo,Sv(t)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,y,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),o=y,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:m,addToRenderList:v,dispose:h}}function Db(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(I,U,D,R,O){let X=!1;const k=d(I,R,D,U);s!==k&&(s=k,l(s.object)),X=p(I,R,D,O),X&&m(I,R,D,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(I,U,D,R),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return t.createVertexArray()}function l(I){return t.bindVertexArray(I)}function f(I){return t.deleteVertexArray(I)}function d(I,U,D,R){const O=R.wireframe===!0;let X=i[U.id];X===void 0&&(X={},i[U.id]=X);const k=I.isInstancedMesh===!0?I.id:0;let G=X[k];G===void 0&&(G={},X[k]=G);let z=G[D.id];z===void 0&&(z={},G[D.id]=z);let V=z[O];return V===void 0&&(V=u(c()),z[O]=V),V}function u(I){const U=[],D=[],R=[];for(let O=0;O<n;O++)U[O]=0,D[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:R,object:I,attributes:{},index:null}}function p(I,U,D,R){const O=s.attributes,X=U.attributes;let k=0;const G=D.getAttributes();for(const z in G)if(G[z].location>=0){const N=O[z];let J=X[z];if(J===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;k++}return s.attributesNum!==k||s.index!==R}function m(I,U,D,R){const O={},X=U.attributes;let k=0;const G=D.getAttributes();for(const z in G)if(G[z].location>=0){let N=X[z];N===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(N=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(N=I.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),O[z]=J,k++}s.attributes=O,s.attributesNum=k,s.index=R}function v(){const I=s.newAttributes;for(let U=0,D=I.length;U<D;U++)I[U]=0}function x(I){h(I,0)}function h(I,U){const D=s.newAttributes,R=s.enabledAttributes,O=s.attributeDivisors;D[I]=1,R[I]===0&&(t.enableVertexAttribArray(I),R[I]=1),O[I]!==U&&(t.vertexAttribDivisor(I,U),O[I]=U)}function g(){const I=s.newAttributes,U=s.enabledAttributes;for(let D=0,R=U.length;D<R;D++)U[D]!==I[D]&&(t.disableVertexAttribArray(D),U[D]=0)}function y(I,U,D,R,O,X,k){k===!0?t.vertexAttribIPointer(I,U,D,O,X):t.vertexAttribPointer(I,U,D,R,O,X)}function E(I,U,D,R){v();const O=R.attributes,X=D.getAttributes(),k=U.defaultAttributeValues;for(const G in X){const z=X[G];if(z.location>=0){let V=O[G];if(V===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){const N=V.normalized,J=V.itemSize,Me=e.get(V);if(Me===void 0)continue;const W=Me.buffer,ie=Me.type,re=Me.bytesPerElement,ve=ie===t.INT||ie===t.UNSIGNED_INT||V.gpuType===xh;if(V.isInterleavedBufferAttribute){const se=V.data,Pe=se.isInterleavedBuffer===!0?se.stride:se.itemSize,it=V.offset;if(se.isInstancedInterleavedBuffer||se.isInstancedBufferAttribute){for(let Te=0;Te<z.locationSize;Te++)h(z.location+Te,se.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Te=0;Te<z.locationSize;Te++)x(z.location+Te);t.bindBuffer(t.ARRAY_BUFFER,W);for(let Te=0;Te<z.locationSize;Te++)y(z.location+Te,J/z.locationSize,ie,N,Pe*re,(it+J/z.locationSize*Te)*re,ve)}else{if(V.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)h(z.location+se,V.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let se=0;se<z.locationSize;se++)x(z.location+se);t.bindBuffer(t.ARRAY_BUFFER,W);for(let se=0;se<z.locationSize;se++)y(z.location+se,J/z.locationSize,ie,N,J*re,J/z.locationSize*se*re,ve)}}else if(k!==void 0){const N=k[G];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(z.location,N);break;case 3:t.vertexAttrib3fv(z.location,N);break;case 4:t.vertexAttrib4fv(z.location,N);break;default:t.vertexAttrib1fv(z.location,N)}}}}g()}function b(){P();for(const I in i){const U=i[I];for(const D in U){const R=U[D];for(const O in R){const X=R[O];for(const k in X)f(X[k].object),delete X[k];delete R[O]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const U=i[I.id];for(const D in U){const R=U[D];for(const O in R){const X=R[O];for(const k in X)f(X[k].object),delete X[k];delete R[O]}}delete i[I.id]}function _(I){for(const U in i){const D=i[U];for(const R in D){const O=D[R];if(O[I.id]===void 0)continue;const X=O[I.id];for(const k in X)f(X[k].object),delete X[k];delete O[I.id]}}}function M(I){for(const U in i){const D=i[U],R=I.isInstancedMesh===!0?I.id:0,O=D[R];if(O!==void 0){for(const X in O){const k=O[X];for(const G in k)f(k[G].object),delete k[G];delete O[X]}delete D[R],Object.keys(D).length===0&&delete i[U]}}}function P(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:x,disableUnusedAttributes:g}}function Ib(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,f){f!==0&&(t.drawArraysInstanced(i,c,l,f),n.update(l,i,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let u=0;for(let p=0;p<f;p++)u+=l[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Fb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==vi&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const M=_===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Rn&&_!==xi&&!M&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const f=c(l);f!==l&&(Ie("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:E,maxSamples:b,samples:T}}function Ub(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ir,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!x)s?f(null):l();else{const g=s?0:i,y=g*4;let E=h.clippingState||null;c.value=E,E=f(m,u,y,p);for(let b=0;b!==y;++b)E[b]=n[b];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,m){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=c.value,m!==!0||x===null){const h=p+v*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<h)&&(x=new Float32Array(h));for(let y=0,E=p;y!==v;++y,E+=4)a.copy(d[y]).applyMatrix4(g,o),a.normal.toArray(x,E),x[E+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}class Ph extends yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),s=new Qr({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Us});s.uniforms.tEquirect.value=n;const a=new je(r,s),o=n.minFilter;return n.minFilter===dr&&(n.minFilter=_n),new gf(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const km=256,Ob=3,Bb=20,Av=256,Tv=16,kb=3,zb=new $,Gb=new Je;class Ql{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gf(1,10,null),this._boxMesh=new je(new yr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=zb}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,m=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Gb));const x=new gf(i,r,f);return x.position.copy(o),x.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=m,e.background=v,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(l,n)),this._applyPMREM(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(km,f1(e))}_fromTexture(e,n){e.mapping===js||e.mapping===Ka?this._setSize(e.image.length===0?km:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=zm(e,!1,!1),i=Math.log2(e)-Ob;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===js||e.mapping===Ka?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Hb(),this._integrationMaterial=Vb());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Tv);for(let a=0;a<=i;a++){const o=Ql.lodToRoughness(a,i);if(a>i-kb)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(n)+.5*Math.log2(6/(Av*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Wb());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function zm(t,e,n){return new Ph(t,{minFilter:dr,generateMipmaps:e,type:Ei,colorSpace:Yl,depthBuffer:n})}function lo(t,e,n){return new Qr({name:t,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:n,side:En,blending:Us,depthTest:!1,depthWrite:!1})}function Hb(){return lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Av}u

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
	`)}function Vb(){return lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tv}},`

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
	`)}function Wb(){return lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bb}
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
	`)}function Gm(){return lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hm(){return lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===au||p===ou)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new Ph(m.height);return v.fromEquirectangularTexture(t,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,m=p===au||p===ou,v=p===js||p===Ka;if(m||v){let x=n.get(u);const h=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Ql(t)),x=m?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),x.texture;if(x!==void 0)return x.texture;{const g=u.image;return m&&g&&g.height>0||v&&g&&c(g)?(i===null&&(i=new Ql(t)),x=m?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),u.addEventListener("dispose",f),x.texture):null}}}return u}function o(u,p){return p===au?u.mapping=js:p===ou&&(u.mapping=Ka),u}function c(u){let p=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&p++;return p===m}function l(u){const p=u.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Xb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_l("WebGLRenderer: "+i+" extension not supported."),r}}}function qb(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(m=>delete r[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",o),delete r[m.id],a.unregister(m);const v=s.get(m);v&&(e.remove(v),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function l(m,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),n.memory.geometries++),v}function f(m){const v=m.attributes;for(const x in v)e.update(v[x],t.ARRAY_BUFFER)}function d(m){const v=m.index,x=m.attributes.position;let h=0;if(x===void 0)return;const g=v!==null?v.array.length:x.array.length/3-1,y=x.count>=65535?mv:pv,E=new y(Math.ceil(g/3)*6,1),b=E.array;if(v!==null){const _=v.array;h=v.version;for(let M=0,P=0;M<g;M+=3){const C=_[M+0],I=_[M+1],U=_[M+2];b[P++]=C,b[P++]=I,b[P++]=I,b[P++]=U,b[P++]=U,b[P++]=C}}else{h=x.version;for(let _=0,M=0;_<g;_+=3){const P=_+0,C=_+1,I=_+2;b[M++]=P,b[M++]=C,b[M++]=C,b[M++]=I,b[M++]=I,b[M++]=P}}E.version=h;const T=s.get(m);T&&e.remove(T),s.set(m,E)}function u(m){const v=s.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&d(m)}else d(m);return s.get(m)}function p(){for(const m in r){const v=r[m].deref();v!==void 0&&c(v)}}return{get:l,update:f,getWireframeAttribute:u,dispose:p}}function $b(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){t.drawElements(i,u,s,d*a),n.update(u,i,1)}function l(d,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,d*a,p),n.update(u,i,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let v=0;for(let x=0;x<p;x++)v+=u[x];n.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Yb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Kb(t,e,n){const i=new WeakMap,r=new St;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let C=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var p=C;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let b=o.attributes.position.count*E,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const _=new Float32Array(b*T*4*d),M=new dv(_,b,T,d);M.type=xi,M.needsUpdate=!0;const P=E*4;for(let I=0;I<d;I++){const U=h[I],D=g[I],R=y[I],O=b*T*4*I;for(let X=0;X<U.count;X++){const k=X*P;m===!0&&(r.fromBufferAttribute(U,X),_[O+k+0]=r.x,_[O+k+1]=r.y,_[O+k+2]=r.z,_[O+k+3]=0),v===!0&&(r.fromBufferAttribute(D,X),_[O+k+4]=r.x,_[O+k+5]=r.y,_[O+k+6]=r.z,_[O+k+7]=0),x===!0&&(r.fromBufferAttribute(R,X),_[O+k+8]=r.x,_[O+k+9]=r.y,_[O+k+10]=r.z,_[O+k+11]=R.itemSize===4?r.w:1)}}u={count:d,texture:M,size:new Ne(b,T)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Zb(t,e,n,i,r){let s=new WeakMap;function a(l){const f=r.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const Jb={[qx]:"LINEAR_TONE_MAPPING",[$x]:"REINHARD_TONE_MAPPING",[Yx]:"CINEON_TONE_MAPPING",[gh]:"ACES_FILMIC_TONE_MAPPING",[Zx]:"AGX_TONE_MAPPING",[Jx]:"NEUTRAL_TONE_MAPPING",[Kx]:"CUSTOM_TONE_MAPPING"};function Qb(t,e,n,i,r,s){const a=new yi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const f=new wn;f.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new rt([0,2,0,0,2,0],2));const d=new V1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new je(f,d),p=new Ev(-1,1,1,-1,0,1);let m=null,v=null,x=!1,h,g=null,y=[],E=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),c!==null&&c.setSize(b,T);for(let _=0;_<y.length;_++){const M=y[_];M.setSize&&M.setSize(b,T)}},this.setEffects=function(b){y=b,E=y.length>0&&y[0].isRenderPass===!0;const T=a.width,_=a.height;y.length>0&&o===null&&(o=new yi(T,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),c=new yi(T,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&y.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new qs(T,_),s===!0&&(l.format=fr,l.type=Xs)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<y.length;P++){const C=y[P];C.setSize&&C.setSize(T,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(b,T){if(x||b.toneMapping===ki&&y.length===0)return!1;if(g=T,T!==null){const _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return E===!1&&b.setRenderTarget(a),h=b.toneMapping,b.toneMapping=ki,!0},this.hasRenderPass=function(){return E},this.end=function(b,T){b.toneMapping=h,x=!0;let _=a,M=o;for(let P=0;P<y.length;P++){const C=y[P];C.enabled!==!1&&(C.render(b,M,_,T),C.needsSwap!==!1&&(_=M,M=M===o?c:o))}if(m!==b.outputColorSpace||v!==b.toneMapping){m=b.outputColorSpace,v=b.toneMapping,d.defines={},Ze.getTransfer(m)===at&&(d.defines.SRGB_TRANSFER="");const P=Jb[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(g),b.render(u,p),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),f.dispose(),d.dispose()}}const Rv=new hn,Cv=new qs(1,1),Pv=new vv(1),Lv=new dv,Nv=new S1,Dv=new xv,Vm=[],Wm=[],jm=new Float32Array(16),Xm=new Float32Array(9),qm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vm[r];if(s===void 0&&(s=new Float32Array(r),Vm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=Wm[e];n===void 0&&(n=new Int32Array(e),Wm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function rA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;qm.set(i),t.uniformMatrix2fv(this.addr,!1,qm),Bt(n,i)}}function sA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;Xm.set(i),t.uniformMatrix3fv(this.addr,!1,Xm),Bt(n,i)}}function aA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),Bt(n,i)}}function oA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function dA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function pA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function wc(t){return t.version===0&&(t.compareFunction=cv,t.needsUpdate=!0),t}function mA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=wc(Cv):s=Rv,n.setTexture2D(e||s,r)}function gA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Nv,r)}function xA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=wc(Pv):s=Dv,n.setTextureCube(e||s,r)}function vA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lv,r)}function _A(t){switch(t){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return rA;case 35675:return sA;case 35676:return aA;case 5124:case 35670:return oA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return dA;case 36294:return fA;case 36295:return hA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return vA}}function SA(t,e){t.uniform1fv(this.addr,e)}function yA(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function MA(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function EA(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function wA(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bA(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function AA(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TA(t,e){t.uniform1iv(this.addr,e)}function RA(t,e){t.uniform2iv(this.addr,e)}function CA(t,e){t.uniform3iv(this.addr,e)}function PA(t,e){t.uniform4iv(this.addr,e)}function LA(t,e){t.uniform1uiv(this.addr,e)}function NA(t,e){t.uniform2uiv(this.addr,e)}function DA(t,e){t.uniform3uiv(this.addr,e)}function IA(t,e){t.uniform4uiv(this.addr,e)}function FA(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=wc(Cv):a=Rv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function UA(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Nv,s[a])}function OA(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=wc(Pv):a=Dv;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function BA(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Lv,s[a])}function kA(t){switch(t){case 5126:return SA;case 35664:return yA;case 35665:return MA;case 35666:return EA;case 35674:return wA;case 35675:return bA;case 35676:return AA;case 5124:case 35670:return TA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return PA;case 5125:return LA;case 36294:return NA;case 36295:return DA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return BA}}class zA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_A(n.type)}}class GA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kA(n.type)}}class HA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Iu=/(\w+)(\])?(\[|\.)?/g;function $m(t,e){t.seq.push(e),t.map[e.id]=e}function VA(t,e,n){const i=t.name,r=i.length;for(Iu.lastIndex=0;;){const s=Iu.exec(i),a=Iu.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){$m(n,l===void 0?new zA(o,t,e):new GA(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new HA(o),$m(n,d)),n=d}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);VA(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const WA=37297;let jA=0;function XA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Km=new Ue;function qA(t){Ze._getMatrix(Km,Ze.workingColorSpace,t);const e=`mat3( ${Km.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Kl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Zm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+XA(t.getShaderSource(e),o)}else return s}function $A(t,e){const n=qA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const YA={[qx]:"Linear",[$x]:"Reinhard",[Yx]:"Cineon",[gh]:"ACESFilmic",[Zx]:"AgX",[Jx]:"Neutral",[Kx]:"Custom"};function KA(t,e){const n=YA[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new $;function ZA(){Ze.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function QA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Sa(t){return t!==""}function Jm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(t){return t.replace(tT,nT)}function nT(t,e){const n=Ve[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xf(n)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(t){return t.replace(iT,rT)}function rT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function t0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const sT={[pl]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function aT(t){return sT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oT={[Ka]:"ENVMAP_MODE_REFRACTION"};function lT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":oT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cT={[Xx]:"ENVMAP_BLENDING_MULTIPLY",[YM]:"ENVMAP_BLENDING_MIX",[KM]:"ENVMAP_BLENDING_ADD"};function uT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":cT[t.combine]||"ENVMAP_BLENDING_NONE"}function dT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=aT(n),l=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=lT(n),d=uT(n),u=JA(n),p=QA(s),m=r.createProgram();let v,x,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Sa).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Sa).join(`
`),x.length>0&&(x+=`
`)):(v=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),x=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?Ve.tonemapping_pars_fragment:"",n.toneMapping!==ki?KA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,$A("linearToOutputTexel",n.outputColorSpace),ZA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sa).join(`
`)),a=xf(a),a=Jm(a,n),a=Qm(a,n),o=xf(o),o=Jm(o,n),o=Qm(o,n),a=e0(a),o=e0(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",n.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const g=h+v+a,y=h+x+o,E=Ym(r,r.VERTEX_SHADER,g),b=Ym(r,r.FRAGMENT_SHADER,y);r.attachShader(m,E),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function T(C){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(m)||"",U=r.getShaderInfoLog(E)||"",D=r.getShaderInfoLog(b)||"",R=I.trim(),O=U.trim(),X=D.trim();let k=!0,G=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,E,b);else{const z=Zm(r,E,"vertex"),V=Zm(r,b,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+z+`
`+V)}else R!==""?Ie("WebGLProgram: Program Info Log:",R):(O===""||X==="")&&(G=!1);G&&(C.diagnostics={runnable:k,programLog:R,vertexShader:{log:O,prefix:v},fragmentShader:{log:X,prefix:x}})}r.deleteShader(E),r.deleteShader(b),_=new Sl(r,m),M=eT(r,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(m,WA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=b,this}let fT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new pT(e),n.set(e,i)),i}}class pT{constructor(e){this.id=fT++,this.code=e,this.usedTimes=0}}function mT(t){return t===Jr||t===ql||t===$l}function gT(t,e,n,i,r,s){const a=new fv,o=new hT,c=new Set,l=[],f=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,P,C,I,U){const D=C.fog,R=I.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||O,X),G=u[_.type];let z=i.precision;_.precision!==null&&(z=i.getMaxPrecision(_.precision),z!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",z,"instead."));const V=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,N=V!==void 0?V.length:0;let J=0;R.morphAttributes.position!==void 0&&(J=1),R.morphAttributes.normal!==void 0&&(J=2),R.morphAttributes.color!==void 0&&(J=3);let Me,W,ie,re;if(G){const _e=pi[G];Me=_e.vertexShader,W=_e.fragmentShader}else{Me=_.vertexShader,W=_.fragmentShader;const _e=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,_e,st),ie=_e.id,re=st.id}const ve=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,it=I.isBatchedMesh===!0,Te=!!_.map,ze=!!_.matcap,We=!!k,ke=We&&k.isPMREMTexture===!0,Xt=!!_.aoMap,Lt=!!_.lightMap,gn=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,li=!!_.displacementMap,kt=!!_.emissiveMap,In=!!_.metalnessMap,Fn=!!_.roughnessMap,Un=_.anisotropy>0,H=_.clearcoat>0,On=_.diffuseRoughness>0,pt=_.dispersion>0,mt=_.retroreflectivity>0,xe=_.iridescence>0,Nt=_.sheen>0,De=_.transmission>0,Fe=Un&&!!_.anisotropyMap,L=H&&!!_.clearcoatMap,w=H&&!!_.clearcoatNormalMap,q=H&&!!_.clearcoatRoughnessMap,ae=On&&!!_.diffuseRoughnessMap,ne=xe&&!!_.iridescenceMap,ue=xe&&!!_.iridescenceThicknessMap,me=Nt&&!!_.sheenColorMap,Q=Nt&&!!_.sheenRoughnessMap,ee=!!_.specularMap,fe=!!_.specularColorMap,F=!!_.specularIntensityMap,te=De&&!!_.transmissionMap,Z=De&&!!_.thicknessMap,he=!!_.gradientMap,ce=!!_.alphaMap,de=_.alphaTest>0,Ce=!!_.alphaHash,He=!!_.extensions;let le=ki;_.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(le=t.toneMapping);const Le=ke?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ge={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:W,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:z,batching:it,batchingColor:it&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Te,matcap:ze,envMap:We,envMapMode:We&&k.mapping,envMapPMREM:ke,envMapMaxLod:ke?Le.length-1:null,envMapSize:ke?Le[0].width:null,aoMap:Xt,lightMap:Lt,bumpMap:gn,normalMap:xt,displacementMap:li,emissiveMap:kt,normalMapObjectSpace:xt&&_.normalMapType===QM,normalMapTangentSpace:xt&&_.normalMapType===pf,packedNormalMap:xt&&_.normalMapType===pf&&mT(_.normalMap.format),metalnessMap:In,roughnessMap:Fn,anisotropy:Un,anisotropyMap:Fe,clearcoat:H,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:q,diffuseRoughness:On,diffuseRoughnessMap:ae,dispersion:pt,retroreflection:mt,iridescence:xe,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:Nt,sheenColorMap:me,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:fe,specularIntensityMap:F,transmission:De,transmissionMap:te,thicknessMap:Z,gradientMap:he,opaque:_.transparent===!1&&_.blending===Pa&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Ce,combine:_.combine,mapUv:Te&&p(_.map.channel),aoMapUv:Xt&&p(_.aoMap.channel),lightMapUv:Lt&&p(_.lightMap.channel),bumpMapUv:gn&&p(_.bumpMap.channel),normalMapUv:xt&&p(_.normalMap.channel),displacementMapUv:li&&p(_.displacementMap.channel),emissiveMapUv:kt&&p(_.emissiveMap.channel),metalnessMapUv:In&&p(_.metalnessMap.channel),roughnessMapUv:Fn&&p(_.roughnessMap.channel),anisotropyMapUv:Fe&&p(_.anisotropyMap.channel),clearcoatMapUv:L&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(_.sheenRoughnessMap.channel),specularMapUv:ee&&p(_.specularMap.channel),specularColorMapUv:fe&&p(_.specularColorMap.channel),specularIntensityMapUv:F&&p(_.specularIntensityMap.channel),transmissionMapUv:te&&p(_.transmissionMap.channel),thicknessMapUv:Z&&p(_.thicknessMap.channel),alphaMapUv:ce&&p(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(xt||Un),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(Te||ce),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:J,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:Te&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gi,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:He&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&_.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function v(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(x(M,_),h(M,_),M.push(t.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function x(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function h(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function g(_){const M=u[_.type];let P;if(M){const C=pi[M];P=z1.clone(C.uniforms)}else P=_.uniforms;return P}function y(_,M){let P=f.get(M);return P!==void 0?++P.usedTimes:(P=new dT(t,M,_,r),l.push(P),f.set(M,P)),P}function E(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),f.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:g,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:T}}function xT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function vT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function n0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function i0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,m,v,x,h){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:x,group:h},t[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=m,g.materialVariant=a(u),g.groupOrder=v,g.renderOrder=u.renderOrder,g.z=x,g.group=h),e++,g}function c(u,p,m,v,x,h,g){g.reversedDepth===!0&&(x=-x);const y=o(u,p,m,v,x,h);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):n.push(y)}function l(u,p,m,v,x,h){const g=o(u,p,m,v,x,h);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function f(u,p){n.length>1&&n.sort(u||vT),i.length>1&&i.sort(p||n0),r.length>1&&r.sort(p||n0)}function d(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:f}}function _T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new i0,t.set(i,[a])):r>=s.length?(a=new i0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ST(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new $,color:new Je};break;case"SpotLight":n={position:new $,direction:new $,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function yT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MT=0;function ET(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wT(t){const e=new ST,n=yT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const r=new $,s=new Mt,a=new Mt;function o(l){let f=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,m=0,v=0,x=0,h=0,g=0,y=0,E=0,b=0,T=0,_=0,M=0,P=0,C=0;l.sort(ET);for(let U=0,D=l.length;U<D;U++){const R=l[U],O=R.color,X=R.intensity,k=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Jr?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=O.r*X,d+=O.g*X,u+=O.b*X;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],X);C++}else if(R.isSunLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,N=n.get(R);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[m]=N,i.sunShadowMap[m]=G;const J=V.getViewportCount();for(let Me=0;Me<J;Me++)i.sunShadowMatrix[v+Me]=V.getMatrix(Me),i.sunShadowCascade[v+Me]=V._cascadeData[Me];v+=J,m++}i.sun[p]=z,p++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,N=n.get(R);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.directionalShadow[x]=N,i.directionalShadowMap[x]=G,i.directionalShadowMatrix[x]=R.shadow.matrix,b++}i.directional[x]=z,x++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(O).multiplyScalar(X),z.distance=k,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[g]=z;const V=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,V.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[g]=V.matrix,R.castShadow){const N=n.get(R);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.spotShadow[g]=N,i.spotShadowMap[g]=G,_++}g++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(O).multiplyScalar(X),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=z,y++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const V=R.shadow,N=n.get(R);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,N.shadowCameraNear=V.camera.near,N.shadowCameraFar=V.camera.far,i.pointShadow[h]=N,i.pointShadowMap[h]=G,i.pointShadowMatrix[h]=R.shadow.matrix,T++}i.point[h]=z,h++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(X),z.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[E]=z,E++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.sunLength!==p||I.directionalLength!==x||I.pointLength!==h||I.spotLength!==g||I.rectAreaLength!==y||I.hemiLength!==E||I.numSunShadows!==m||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==M||I.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=x,i.spot.length=g,i.rectArea.length=y,i.point.length=h,i.hemi.length=E,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,I.sunLength=p,I.directionalLength=x,I.pointLength=h,I.spotLength=g,I.rectAreaLength=y,I.hemiLength=E,I.numSunShadows=m,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=M,I.numLightProbes=C,i.version=MT++)}function c(l,f){let d=0,u=0,p=0,m=0,v=0,x=0;const h=f.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){const E=l[g];if(E.isSunLight){const b=i.sun[d];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(h),d++}else if(E.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),u++}else if(E.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),m++}else if(E.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(E.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(h),p++}else if(E.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(h),x++}}}return{setup:o,setupView:c,state:i}}function r0(t){const e=new wT(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):n.push(d)}function o(d){i.push(d)}function c(){e.setup(n),r.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function bT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new r0(t),e.set(r,[o])):s>=a.length?(o=new r0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const AT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TT=`uniform sampler2D shadow_pass;
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
}`,RT=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],CT=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],s0=new Mt,ha=new $,Fu=new $;function PT(t,e,n){let i=new Qa;const r=new Ne,s=new Ne,a=new St,o=new W1,c=new j1,l={},f=n.maxTextureSize,d={[Zr]:En,[En]:Zr,[gi]:gi},u=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:AT,fragmentShader:TT}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new wn;m.setAttribute("position",new jr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new je(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let h=this.type;this.render=function(T,_,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Vx&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pl);const P=t.getRenderTarget(),C=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Us),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=h!==this.type;D&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=T.length;R<O;R++){const X=T[R],k=X.shadow;if(k===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const G=k.getFrameExtents();r.multiply(G),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,k.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=z,k.map===null||D===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===_a){if(X.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new yi(r.x,r.y,{format:Jr,type:Ei,minFilter:_n,magFilter:_n,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new qs(r.x,r.y,xi),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=wr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Kt,k.map.depthTexture.magFilter=Kt}else X.isPointLight?(k.map=new Ph(r.x),k.map.depthTexture=new vv(r.x,Mi)):(k.map=new yi(r.x,r.y),k.map.depthTexture=new qs(r.x,r.y,Mi)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=wr,this.type===pl?(k.map.depthTexture.compareFunction=z?lv:ov,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Kt,k.map.depthTexture.magFilter=Kt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const V=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,M);const N=k.camera.layers.mask&4294967294?k.camera.layers:M.layers;for(let J=0;J<V;J++){const Me=k.getCamera(J);if(X.isPointLight){const W=k.camera,ie=k.matrix,re=X.distance||W.far;re!==W.far&&(W.far=re,W.updateProjectionMatrix()),ha.setFromMatrixPosition(X.matrixWorld),W.position.copy(ha),Fu.copy(W.position),Fu.add(RT[J]),W.up.copy(CT[J]),W.lookAt(Fu),W.updateMatrixWorld(),ie.makeTranslation(-ha.x,-ha.y,-ha.z),s0.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),k._frustum.setFromProjectionMatrix(s0,W.coordinateSystem,W.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,J),t.clear();else{J===0&&(t.setRenderTarget(k.map),t.clear());const W=k.getViewport(J);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),U.viewport(a)}i=k.getFrustum(J),E(_,M,Me,X,N,this.type)}k.isPointLightShadow!==!0&&this.type===_a&&g(k,M),k.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(P,C,I)};function g(T,_){const M=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new yi(r.x,r.y,{format:Jr,type:Ei}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(_,null,M,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(_,null,M,p,v,null)}function y(T,_,M,P){let C=null;const I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=M.isPointLight===!0?c:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const U=C.uuid,D=_.uuid;let R=l[U];R===void 0&&(R={},l[U]=R);let O=R[D];O===void 0&&(O=C.clone(),R[D]=O,_.addEventListener("dispose",b)),C=O}if(C.visible=_.visible,C.wireframe=_.wireframe,P===_a?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=t.properties.get(C);U.light=M}return C}function E(T,_,M,P,C,I){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===_a)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const R=e.update(T),O=T.material;if(Array.isArray(O)){const X=R.groups;for(let k=0,G=X.length;k<G;k++){const z=X[k],V=O[z.materialIndex];if(V&&V.visible){const N=y(T,V,P,I);T.onBeforeShadow(t,T,_,M,R,N,z),t.renderBufferDirect(M,null,R,N,T,z),T.onAfterShadow(t,T,_,M,R,N,z)}}}else if(O.visible){const X=y(T,O,P,I);T.onBeforeShadow(t,T,_,M,R,X,null),t.renderBufferDirect(M,null,R,X,T,null),T.onAfterShadow(t,T,_,M,R,X,null)}}const D=T.children;for(let R=0,O=D.length;R<O;R++)E(D[R],_,M,P,C,I)}function b(T){T.target.removeEventListener("dispose",b);for(const M in l){const P=l[M],C=T.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function LT(t,e){function n(){let F=!1;const te=new St;let Z=null;const he=new St(0,0,0,0);return{setMask:function(ce){Z!==ce&&!F&&(t.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){F=ce},setClear:function(ce,de,Ce,He,le){le===!0&&(ce*=He,de*=He,Ce*=He),te.set(ce,de,Ce,He),he.equals(te)===!1&&(t.clearColor(ce,de,Ce,He),he.copy(te))},reset:function(){F=!1,Z=null,he.set(-1,0,0,0)}}}function i(){let F=!1,te=!1,Z=null,he=null,ce=null;return{setReversed:function(de){if(te!==de){const Ce=e.get("EXT_clip_control");de?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),te=de;const He=ce;ce=null,this.setClear(He)}},getReversed:function(){return te},setTest:function(de){de?se(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(de){Z!==de&&!F&&(t.depthMask(de),Z=de)},setFunc:function(de){if(te&&(de=u1[de]),he!==de){switch(de){case Rd:t.depthFunc(t.NEVER);break;case Cd:t.depthFunc(t.ALWAYS);break;case Pd:t.depthFunc(t.LESS);break;case Ya:t.depthFunc(t.LEQUAL);break;case Ld:t.depthFunc(t.EQUAL);break;case Nd:t.depthFunc(t.GEQUAL);break;case Dd:t.depthFunc(t.GREATER);break;case Id:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=de}},setLocked:function(de){F=de},setClear:function(de){ce!==de&&(ce=de,te&&(de=1-de),t.clearDepth(de))},reset:function(){F=!1,Z=null,he=null,ce=null,te=!1}}}function r(){let F=!1,te=null,Z=null,he=null,ce=null,de=null,Ce=null,He=null,le=null;return{setTest:function(Le){F||(Le?se(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(Le){te!==Le&&!F&&(t.stencilMask(Le),te=Le)},setFunc:function(Le,Ge,_e){(Z!==Le||he!==Ge||ce!==_e)&&(t.stencilFunc(Le,Ge,_e),Z=Le,he=Ge,ce=_e)},setOp:function(Le,Ge,_e){(de!==Le||Ce!==Ge||He!==_e)&&(t.stencilOp(Le,Ge,_e),de=Le,Ce=Ge,He=_e)},setLocked:function(Le){F=Le},setClear:function(Le){le!==Le&&(t.clearStencil(Le),le=Le)},reset:function(){F=!1,te=null,Z=null,he=null,ce=null,de=null,Ce=null,He=null,le=null}}}const s=new n,a=new i,o=new r;let c={};const l=new WeakMap;let f={},d={},u={},p=new WeakMap,m=[],v=null,x=!1,h=null,g=null,y=null,E=null,b=null,T=null,_=null,M=new Je(0,0,0),P=0,C=!1,I=null,U=null,D=null,R=null,O=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,G=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=G>=2);let V=null,N={};const J=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),W=new St().fromArray(J),ie=new St().fromArray(Me);function re(F,te,Z,he){const ce=new Uint8Array(4),de=t.createTexture();t.bindTexture(F,de),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Z;Ce++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(te+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return de}const ve={};ve[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(Ya),gn(!1),xt(dm),se(t.CULL_FACE),Xt(Us);function se(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function Pe(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function it(F,te){return u[F]!==te?(t.bindFramebuffer(F,te),u[F]=te,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=te),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(F,te){let Z=m,he=!1;if(F){Z=p.get(te),Z===void 0&&(Z=[],p.set(te,Z));const ce=F.textures;if(Z.length!==ce.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ce=ce.length;de<Ce;de++)Z[de]=t.COLOR_ATTACHMENT0+de;Z.length=ce.length,he=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,he=!0);he&&t.drawBuffers(Z)}function ze(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const We={[xs]:t.FUNC_ADD,[NM]:t.FUNC_SUBTRACT,[DM]:t.FUNC_REVERSE_SUBTRACT};We[IM]=t.MIN,We[FM]=t.MAX;const ke={[UM]:t.ZERO,[OM]:t.ONE,[BM]:t.SRC_COLOR,[Wx]:t.SRC_ALPHA,[WM]:t.SRC_ALPHA_SATURATE,[HM]:t.DST_COLOR,[zM]:t.DST_ALPHA,[kM]:t.ONE_MINUS_SRC_COLOR,[jx]:t.ONE_MINUS_SRC_ALPHA,[VM]:t.ONE_MINUS_DST_COLOR,[GM]:t.ONE_MINUS_DST_ALPHA,[jM]:t.CONSTANT_COLOR,[XM]:t.ONE_MINUS_CONSTANT_COLOR,[qM]:t.CONSTANT_ALPHA,[$M]:t.ONE_MINUS_CONSTANT_ALPHA};function Xt(F,te,Z,he,ce,de,Ce,He,le,Le){if(F===Us){x===!0&&(Pe(t.BLEND),x=!1);return}if(x===!1&&(se(t.BLEND),x=!0),F!==LM){if(F!==h||Le!==C){if((g!==xs||b!==xs)&&(t.blendEquation(t.FUNC_ADD),g=xs,b=xs),Le)switch(F){case Pa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.ONE,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",F);break}else switch(F){case Pa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case hm:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pm:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",F);break}y=null,E=null,T=null,_=null,M.set(0,0,0),P=0,h=F,C=Le}return}ce=ce||te,de=de||Z,Ce=Ce||he,(te!==g||ce!==b)&&(t.blendEquationSeparate(We[te],We[ce]),g=te,b=ce),(Z!==y||he!==E||de!==T||Ce!==_)&&(t.blendFuncSeparate(ke[Z],ke[he],ke[de],ke[Ce]),y=Z,E=he,T=de,_=Ce),(He.equals(M)===!1||le!==P)&&(t.blendColor(He.r,He.g,He.b,le),M.copy(He),P=le),h=F,C=!1}function Lt(F,te){F.side===gi?Pe(t.CULL_FACE):se(t.CULL_FACE);let Z=F.side===En;te&&(Z=!Z),gn(Z),F.blending===Pa&&F.transparent===!1?Xt(Us):Xt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const he=F.stencilWrite;o.setTest(he),he&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),kt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function gn(F){I!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),I=F)}function xt(F){F!==CM?(se(t.CULL_FACE),F!==U&&(F===dm?t.cullFace(t.BACK):F===PM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),U=F}function li(F){F!==D&&(k&&t.lineWidth(F),D=F)}function kt(F,te,Z){F?(se(t.POLYGON_OFFSET_FILL),(R!==te||O!==Z)&&(R=te,O=Z,a.getReversed()&&(te=-te,Z=-Z),t.polygonOffset(te,Z))):Pe(t.POLYGON_OFFSET_FILL)}function In(F){F?se(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function Fn(F){F===void 0&&(F=t.TEXTURE0+X-1),V!==F&&(t.activeTexture(F),V=F)}function Un(F,te,Z){Z===void 0&&(V===null?Z=t.TEXTURE0+X-1:Z=V);let he=N[Z];he===void 0&&(he={type:void 0,texture:void 0},N[Z]=he),(he.type!==F||he.texture!==te)&&(V!==Z&&(t.activeTexture(Z),V=Z),t.bindTexture(F,te||ve[F]),he.type=F,he.texture=te)}function H(){const F=N[V];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function On(){try{t.compressedTexImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function pt(){try{t.compressedTexImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function mt(){try{t.texSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function xe(){try{t.texSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function Nt(){try{t.compressedTexSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function Fe(){try{t.texStorage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function L(){try{t.texStorage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function w(){try{t.texImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function q(){try{t.texImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function ae(F){return d[F]!==void 0?d[F]:t.getParameter(F)}function ne(F,te){d[F]!==te&&(t.pixelStorei(F,te),d[F]=te)}function ue(F){W.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),W.copy(F))}function me(F){ie.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Q(F,te){let Z=l.get(te);Z===void 0&&(Z=new WeakMap,l.set(te,Z));let he=Z.get(F);he===void 0&&(he=t.getUniformBlockIndex(te,F.name),t.uniformBlockBinding(te,he,he),Z.set(F,he))}function ee(F,te,Z){const ce=l.get(te).get(F);c[ce]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,ce,Z),c[ce]=Z)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},V=null,N={},u={},c={},p=new WeakMap,m=[],v=null,x=!1,h=null,g=null,y=null,E=null,b=null,T=null,_=null,M=new Je(0,0,0),P=0,C=!1,I=null,U=null,D=null,R=null,O=null,W.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Pe,bindFramebuffer:it,drawBuffers:Te,useProgram:ze,setBlending:Xt,setMaterial:Lt,setFlipSided:gn,setCullFace:xt,setLineWidth:li,setPolygonOffset:kt,setScissorTest:In,activeTexture:Fn,bindTexture:Un,unbindTexture:H,compressedTexImage2D:On,compressedTexImage3D:pt,texImage2D:w,texImage3D:q,pixelStorei:ne,getParameter:ae,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Fe,texStorage3D:L,texSubImage2D:mt,texSubImage3D:xe,compressedTexSubImage2D:Nt,compressedTexSubImage3D:De,scissor:ue,viewport:me,reset:fe}}function NT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,f=new WeakMap,d=new Set;let u;const p=new WeakMap,m=new Set,v=new FinalizationRegistry(L=>m.delete(L));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(L,w){return x?new OffscreenCanvas(L,w):Zl("canvas")}function g(L,w,q){let ae=1;const ne=Fe(L);if((ne.width>q||ne.height>q)&&(ae=q/Math.max(ne.width,ne.height)),ae<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(ae*ne.width),me=Math.floor(ae*ne.height);u===void 0&&(u=h(ue,me));const Q=w?h(ue,me):u;return Q.width=ue,Q.height=me,Q.getContext("2d").drawImage(L,0,0,ue,me),Ie("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+me+")."),Q}else return"data"in L&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function y(L){return L.generateMipmaps}function E(L){t.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(L,w,q,ae,ne,ue=!1){if(L!==null){if(t[L]!==void 0)return t[L];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me;ae&&(me=e.get("EXT_texture_norm16"),me||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=w;if(w===t.RED&&(q===t.FLOAT&&(Q=t.R32F),q===t.HALF_FLOAT&&(Q=t.R16F),q===t.UNSIGNED_BYTE&&(Q=t.R8),q===t.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),q===t.SHORT&&me&&(Q=me.R16_SNORM_EXT)),w===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(Q=t.R8UI),q===t.UNSIGNED_SHORT&&(Q=t.R16UI),q===t.UNSIGNED_INT&&(Q=t.R32UI),q===t.BYTE&&(Q=t.R8I),q===t.SHORT&&(Q=t.R16I),q===t.INT&&(Q=t.R32I)),w===t.RG&&(q===t.FLOAT&&(Q=t.RG32F),q===t.HALF_FLOAT&&(Q=t.RG16F),q===t.UNSIGNED_BYTE&&(Q=t.RG8),q===t.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),q===t.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(Q=t.RG8UI),q===t.UNSIGNED_SHORT&&(Q=t.RG16UI),q===t.UNSIGNED_INT&&(Q=t.RG32UI),q===t.BYTE&&(Q=t.RG8I),q===t.SHORT&&(Q=t.RG16I),q===t.INT&&(Q=t.RG32I)),w===t.RGB_INTEGER&&(q===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),q===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),q===t.UNSIGNED_INT&&(Q=t.RGB32UI),q===t.BYTE&&(Q=t.RGB8I),q===t.SHORT&&(Q=t.RGB16I),q===t.INT&&(Q=t.RGB32I)),w===t.RGBA_INTEGER&&(q===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),q===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),q===t.UNSIGNED_INT&&(Q=t.RGBA32UI),q===t.BYTE&&(Q=t.RGBA8I),q===t.SHORT&&(Q=t.RGBA16I),q===t.INT&&(Q=t.RGBA32I)),w===t.RGB&&(q===t.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),q===t.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),q===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),q===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),w===t.RGBA){const ee=ue?Kl:Ze.getTransfer(ne);q===t.FLOAT&&(Q=t.RGBA32F),q===t.HALF_FLOAT&&(Q=t.RGBA16F),q===t.UNSIGNED_BYTE&&(Q=ee===at?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),q===t.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),q===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(L,w){let q;return L?w===null||w===Mi||w===Xs?q=t.DEPTH24_STENCIL8:w===xi?q=t.DEPTH32F_STENCIL8:w===Za&&(q=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Mi||w===Xs?q=t.DEPTH_COMPONENT24:w===xi?q=t.DEPTH_COMPONENT32F:w===Za&&(q=t.DEPTH_COMPONENT16),q}function M(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Kt&&L.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function P(L){const w=new WeakRef(L);i.get(L).__ref=w,m.add(w),v.register(L,w,w)}function C(L){const w=i.get(L).__ref;w!==void 0&&(m.delete(w),v.unregister(w))}function I(L){D(L.target)}function U(L){R(L.target)}function D(L){L.removeEventListener("dispose",I),C(L),X(L),L.isVideoTexture&&f.delete(L),L.isHTMLTexture&&d.delete(L)}function R(L){L.removeEventListener("dispose",U),C(L),G(L)}function O(){for(const L of m){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):D(w))}m.clear(),d.clear()}function X(L){const w=i.get(L);if(w.__webglInit===void 0)return;const q=L.source,ae=p.get(q);if(ae){const ne=ae[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(L),Object.keys(ae).length===0&&p.delete(q)}i.remove(L)}function k(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const q=L.source,ae=p.get(q);delete ae[w.__cacheKey],a.memory.textures--}function G(L){const w=i.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const q=L.depthTexture;if(q&&q.renderTarget===L&&D(q),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let ue=0;ue<w.__webglFramebuffer[ne].length;ue++)t.deleteFramebuffer(w.__webglFramebuffer[ne][ue]);else t.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[ne]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ae=L.textures;for(let ne=0,ue=ae.length;ne<ue;ne++){const me=i.get(ae[ne]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(ae[ne])}i.remove(L)}let z=0;function V(){z=0}function N(){return z}function J(L){z=L}function Me(){const L=z;return L>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,L}function W(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function ie(L,w){const q=i.get(L);if(L.isVideoTexture&&Nt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const ae=L.image;if(ae===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(q,L,w);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+w)}function re(L,w){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Lt(q,L,w);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+w)}function ve(L,w){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Lt(q,L,w);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+w)}function se(L,w){const q=i.get(L);if(L.version>0&&q.__version!==L.version){gn(q,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+w)}const Pe={[Fd]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Ud]:t.MIRRORED_REPEAT},it={[Kt]:t.NEAREST,[ZM]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[lu]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},Te={[t1]:t.NEVER,[cv]:t.ALWAYS,[n1]:t.LESS,[ov]:t.LEQUAL,[i1]:t.EQUAL,[lv]:t.GEQUAL,[r1]:t.GREATER,[s1]:t.NOTEQUAL};function ze(L,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===lu||w.magFilter===Do||w.magFilter===dr||w.minFilter===_n||w.minFilter===lu||w.minFilter===Do||w.minFilter===dr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,Pe[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,Pe[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,Pe[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,it[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,it[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Kt||w.minFilter!==Do&&w.minFilter!==dr||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function We(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I),P(w));const ae=w.source;let ne=p.get(ae);ne===void 0&&(ne={},p.set(ae,ne));const ue=W(w);if(ue!==L.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[ue].usedTimes++;const me=ne[L.__cacheKey];me!==void 0&&(ne[L.__cacheKey].usedTimes--,me.usedTimes===0&&k(w)),L.__cacheKey=ue,L.__webglTexture=ne[ue].texture}return q}function ke(L,w,q){return Math.floor(Math.floor(L/q)/w)}function Xt(L,w,q,ae){const ue=L.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,q,ae,w.data);else{ue.sort((F,te)=>F.start-te.start);let me=0;for(let F=1;F<ue.length;F++){const te=ue[me],Z=ue[F],he=te.start+te.count,ce=ke(Z.start,w.width,4),de=ke(te.start,w.width,4);Z.start<=he+1&&ce===de&&ke(Z.start+Z.count-1,w.width,4)===ce?te.count=Math.max(te.count,Z.start+Z.count-te.start):(++me,ue[me]=Z)}ue.length=me+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let F=0,te=ue.length;F<te;F++){const Z=ue[F],he=Math.floor(Z.start/4),ce=Math.ceil(Z.count/4),de=he%w.width,Ce=Math.floor(he/w.width),He=ce,le=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ce),n.texSubImage2D(t.TEXTURE_2D,0,de,Ce,He,le,q,ae,w.data)}L.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Lt(L,w,q){let ae=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=t.TEXTURE_3D);const ne=We(L,w),ue=w.source;n.bindTexture(ae,L.__webglTexture,t.TEXTURE0+q);const me=i.get(ue);if(ue.version!==me.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const le=Ze.getPrimaries(Ze.workingColorSpace),Le=w.colorSpace===or?null:Ze.getPrimaries(w.colorSpace),Ge=w.colorSpace===or||le===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let ee=g(w.image,!1,r.maxTextureSize);ee=De(w,ee);const fe=s.convert(w.format,w.colorSpace),F=s.convert(w.type);let te=T(w.internalFormat,fe,F,w.normalized,w.colorSpace,w.isVideoTexture);ze(ae,w);let Z;const he=w.mipmaps,ce=w.isVideoTexture!==!0,de=me.__version===void 0||ne===!0,Ce=ue.dataReady,He=M(w,ee);if(w.isDepthTexture)te=_(w.format===fr,w.type),de&&(ce?n.texStorage2D(t.TEXTURE_2D,1,te,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,te,ee.width,ee.height,0,fe,F,null));else if(w.isDataTexture)if(he.length>0){ce&&de&&n.texStorage2D(t.TEXTURE_2D,He,te,he[0].width,he[0].height);for(let le=0,Le=he.length;le<Le;le++)Z=he[le],ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,F,Z.data):n.texImage2D(t.TEXTURE_2D,le,te,Z.width,Z.height,0,fe,F,Z.data);w.generateMipmaps=!1}else ce?(de&&n.texStorage2D(t.TEXTURE_2D,He,te,ee.width,ee.height),Ce&&Xt(w,ee,fe,F)):n.texImage2D(t.TEXTURE_2D,0,te,ee.width,ee.height,0,fe,F,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ce&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,te,he[0].width,he[0].height,ee.depth);for(let le=0,Le=he.length;le<Le;le++)if(Z=he[le],w.format!==vi)if(fe!==null)if(ce){if(Ce)if(w.layerUpdates.size>0){const Ge=Bm(Z.width,Z.height,w.format,w.type);for(const _e of w.layerUpdates){const st=Z.data.subarray(_e*Ge/Z.data.BYTES_PER_ELEMENT,(_e+1)*Ge/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,_e,Z.width,Z.height,1,fe,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,ee.depth,fe,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,te,Z.width,Z.height,ee.depth,0,Z.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,ee.depth,fe,F,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,te,Z.width,Z.height,ee.depth,0,fe,F,Z.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ce&&de&&n.texStorage2D(t.TEXTURE_2D,He,te,he[0].width,he[0].height);for(let le=0,Le=he.length;le<Le;le++)Z=he[le],w.format!==vi?fe!==null?ce?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,le,te,Z.width,Z.height,0,Z.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,F,Z.data):n.texImage2D(t.TEXTURE_2D,le,te,Z.width,Z.height,0,fe,F,Z.data)}else if(w.isDataArrayTexture)if(ce){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,te,ee.width,ee.height,ee.depth),Ce)if(w.layerUpdates.size>0){const le=Bm(ee.width,ee.height,w.format,w.type);for(const Le of w.layerUpdates){const Ge=ee.data.subarray(Le*le/ee.data.BYTES_PER_ELEMENT,(Le+1)*le/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,ee.width,ee.height,1,fe,F,Ge)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,F,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,fe,F,ee.data);else if(w.isData3DTexture)ce?(de&&n.texStorage3D(t.TEXTURE_3D,He,te,ee.width,ee.height,ee.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,F,ee.data)):n.texImage3D(t.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,fe,F,ee.data);else if(w.isFramebufferTexture){if(de)if(ce)n.texStorage2D(t.TEXTURE_2D,He,te,ee.width,ee.height);else{let le=ee.width,Le=ee.height;for(let Ge=0;Ge<He;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,te,le,Le,0,fe,F,null),le>>=1,Le>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){const le=t.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ee.parentNode!==le){le.appendChild(ee),d.add(w),le.onpaint=Le=>{const Ge=Le.changedElements;for(const _e of d)Ge.includes(_e.image)&&(_e.needsUpdate=!0)},le.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const Ge=t.RGBA,_e=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,_e,st,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(he.length>0){if(ce&&de){const le=Fe(he[0]);n.texStorage2D(t.TEXTURE_2D,He,te,le.width,le.height)}for(let le=0,Le=he.length;le<Le;le++)Z=he[le],ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,fe,F,Z):n.texImage2D(t.TEXTURE_2D,le,te,fe,F,Z);w.generateMipmaps=!1}else if(ce){if(de){const le=Fe(ee);n.texStorage2D(t.TEXTURE_2D,He,te,le.width,le.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,F,ee)}else n.texImage2D(t.TEXTURE_2D,0,te,fe,F,ee);y(w)&&w.mipmapsAutoUpdate===!0&&E(ae),me.__version=ue.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function gn(L,w,q){if(w.image.length!==6)return;const ae=We(L,w),ne=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+q);const ue=i.get(ne);if(ne.version!==ue.__version||ae===!0){n.activeTexture(t.TEXTURE0+q);const me=Ze.getPrimaries(Ze.workingColorSpace),Q=w.colorSpace===or?null:Ze.getPrimaries(w.colorSpace),ee=w.colorSpace===or||me===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const fe=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,te=[];for(let _e=0;_e<6;_e++)!fe&&!F?te[_e]=g(w.image[_e],!0,r.maxCubemapSize):te[_e]=F?w.image[_e].image:w.image[_e],te[_e]=De(w,te[_e]);const Z=te[0],he=s.convert(w.format,w.colorSpace),ce=s.convert(w.type);let de=T(w.internalFormat,he,ce,w.normalized,w.colorSpace);const Ce=w.isVideoTexture!==!0,He=ue.__version===void 0||ae===!0,le=ne.dataReady;let Le=M(w,Z);ze(t.TEXTURE_CUBE_MAP,w);let Ge;if(w.isDepthTexture){if(de=_(w.format===fr,w.type),He)if(Ce)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,Z.width,Z.height,0,he,ce,null)}else if(fe){Ce&&He&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,Z.width,Z.height);for(let _e=0;_e<6;_e++){Ge=te[_e].mipmaps;for(let st=0;st<Ge.length;st++){const zt=Ge[st];w.format!==vi?he!==null?Ce?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,zt.width,zt.height,he,zt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,de,zt.width,zt.height,0,zt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,0,0,zt.width,zt.height,he,ce,zt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st,de,zt.width,zt.height,0,he,ce,zt.data)}}}else{if(Ge=w.mipmaps,Ce&&He){Ge.length>0&&Le++;const _e=Fe(te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(F){Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,te[_e].width,te[_e].height,he,ce,te[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,te[_e].width,te[_e].height,0,he,ce,te[_e].data);for(let st=0;st<Ge.length;st++){const Xi=Ge[st].image[_e].image;Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,Xi.width,Xi.height,he,ce,Xi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,de,Xi.width,Xi.height,0,he,ce,Xi.data)}}else{Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,he,ce,te[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,he,ce,te[_e]);for(let st=0;st<Ge.length;st++){const zt=Ge[st];Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,0,0,he,ce,zt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,st+1,de,he,ce,zt.image[_e])}}}y(w)&&w.mipmapsAutoUpdate===!0&&E(t.TEXTURE_CUBE_MAP),ue.__version=ne.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function xt(L,w,q,ae,ne,ue){const me=s.convert(q.format,q.colorSpace),Q=s.convert(q.type),ee=T(q.internalFormat,me,Q,q.normalized,q.colorSpace),fe=i.get(w),F=i.get(q);if(F.__renderTarget=w,!fe.__hasExternalTextures){const te=Math.max(1,w.width>>ue),Z=Math.max(1,w.height>>ue);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ue,ee,te,Z,w.depth,0,me,Q,null):n.texImage2D(ne,ue,ee,te,Z,0,me,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),xe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,ne,F.__webglTexture,0,mt(w)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,ne,F.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function li(L,w,q){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer){const ae=w.depthTexture,ne=ae&&ae.isDepthTexture?ae.type:null,ue=_(w.stencilBuffer,ne),me=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(w),ue,w.width,w.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(w),ue,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ue,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,L)}else{const ae=w.textures;for(let ne=0;ne<ae.length;ne++){const ue=ae[ne],me=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),ee=T(ue.internalFormat,me,Q,ue.normalized,ue.colorSpace);xe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(w),ee,w.width,w.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(w),ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function kt(L,w,q){const ae=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=i.get(w.depthTexture);ne.__renderTarget=w;const ue=ae?w.depthTexture.image[0]:w.depthTexture.image;(!ne.__webglTexture||ue.width!==w.width||ue.height!==w.height)&&(ue.width=w.width,ue.height=w.height,w.depthTexture.needsUpdate=!0),ae?se(w.depthTexture,0):ie(w.depthTexture,0);const me=ne.__webglTexture,Q=mt(w),ee=ae?t.TEXTURE_CUBE_MAP_POSITIVE_X+q:t.TEXTURE_2D,fe=w.depthTexture.format===fr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===wr)xe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ee,me,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ee,me,0);else if(w.depthTexture.format===fr)xe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ee,me,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ee,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function In(L){const w=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ae=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",ne)};ae.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=ae}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let ae=0;ae<6;ae++)kt(w.__webglFramebuffer[ae],L,ae);else L.texture.mipmaps.length>0?kt(w.__webglFramebuffer[0],L,0):kt(w.__webglFramebuffer,L,0);else if(q){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=t.createRenderbuffer(),li(w.__webglDepthbuffer[ae],L,!1);else{const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[ae];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ue)}}else if(L.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),li(w.__webglDepthbuffer,L,!1);else{const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ue)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fn(L,w,q){const ae=i.get(L);w!==void 0&&xt(ae.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&In(L)}function Un(L){const w=L.texture,q=i.get(L),ae=i.get(w);L.addEventListener("dispose",U),P(L);const ne=L.textures,ue=L.isWebGLCubeRenderTarget===!0,me=ne.length>1;if(me||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=w.version,a.memory.textures++),ue){q.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0){q.__webglFramebuffer[Q]=[];for(let ee=0;ee<w.mipmaps.length;ee++)q.__webglFramebuffer[Q][ee]=t.createFramebuffer()}else q.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)q.__webglFramebuffer[Q]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(me)for(let Q=0,ee=ne.length;Q<ee;Q++){const fe=i.get(ne[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&xe(L)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){const ee=ne[Q];q.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[Q]);const fe=s.convert(ee.format,ee.colorSpace),F=s.convert(ee.type),te=T(ee.internalFormat,fe,F,ee.normalized,ee.colorSpace,L.isXRRenderTarget===!0),Z=mt(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,te,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,q.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),li(q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),ze(t.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)xt(q.__webglFramebuffer[Q][ee],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else xt(q.__webglFramebuffer[Q],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(w)?E(t.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}else if(me){for(let Q=0,ee=ne.length;Q<ee;Q++){const fe=ne[Q],F=i.get(fe);let te=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(te=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,F.__webglTexture),ze(te,fe),xt(q.__webglFramebuffer,L,fe,t.COLOR_ATTACHMENT0+Q,te,0),y(fe)&&E(te)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,ae.__webglTexture),ze(Q,w),w.mipmaps.length>0)for(let ee=0;ee<w.mipmaps.length;ee++)xt(q.__webglFramebuffer[ee],L,w,t.COLOR_ATTACHMENT0,Q,ee);else xt(q.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,Q,0);y(w)?E(Q):w.mipmaps.length>0&&t.texParameteri(Q,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}L.depthBuffer&&In(L)}function H(L){const w=L.textures;for(let q=0,ae=w.length;q<ae;q++){const ne=w[q];if(y(ne)&&ne.mipmapsAutoUpdate===!0){const ue=b(L),me=i.get(ne).__webglTexture;n.bindTexture(ue,me),E(ue),n.unbindTexture()}}}const On=[];function pt(L){if(L.samples>0){if(xe(L)===!1){const w=L.textures,q=L.width,ae=L.height;let ne=t.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(L),Q=w.length>1;if(Q)for(let fe=0;fe<w.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const F=i.get(w[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,F,0)}t.blitFramebuffer(0,0,q,ae,0,0,q,ae,ne,t.NEAREST),c===!0&&(On.length=0,On.push(t.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&On.push(ue),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,On))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<w.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const F=i.get(w[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,F,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function mt(L){return Math.min(r.maxSamples,L.samples)}function xe(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Nt(L){const w=a.render.frame;f.get(L)!==w&&(f.set(L,w),L.update())}function De(L,w){const q=L.colorSpace,ae=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Yl&&q!==or&&(Ze.getTransfer(q)===at?(ae!==vi||ne!==Rn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",q)),w}function Fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=Me,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=J,this.setTexture2D=ie,this.setTexture2DArray=re,this.setTexture3D=ve,this.setTextureCube=se,this.rebindTextures=Fn,this.setupRenderTarget=Un,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=In,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=xe,this.dispose=O}function DT(t,e){function n(i,r=or){let s;const a=Ze.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===vh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===nv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===iv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ev)return t.BYTE;if(i===tv)return t.SHORT;if(i===Za)return t.UNSIGNED_SHORT;if(i===xh)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===rv)return t.ALPHA;if(i===sv)return t.RGB;if(i===vi)return t.RGBA;if(i===wr)return t.DEPTH_COMPONENT;if(i===fr)return t.DEPTH_STENCIL;if(i===av)return t.RED;if(i===Sh)return t.RED_INTEGER;if(i===Jr)return t.RG;if(i===yh)return t.RG_INTEGER;if(i===Mh)return t.RGBA_INTEGER;if(i===ml||i===gl||i===xl||i===vl)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Od||i===Bd||i===kd||i===zd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===Hd||i===Vd||i===Wd||i===jd||i===ql||i===Xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gd||i===Hd)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wd)return s.COMPRESSED_R11_EAC;if(i===jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ql)return s.COMPRESSED_RG11_EAC;if(i===Xd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qd||i===$d||i===Yd||i===Kd||i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$d)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qd)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ef)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===af)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lf||i===cf||i===uf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lf)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===df||i===ff||i===$l||i===hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===df)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ff)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const IT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
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

}`;class UT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new _v(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qr({vertexShader:IT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new je(new Mc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OT extends ns{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,d=null,u=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",x=new UT,h={},g=n.getContextAttributes();let y=null,E=null;const b=[],T=[],_=new Ne;let M=null,P=null;const C=new ni;C.viewport=new St;const I=new ni;I.viewport=new St;const U=[C,I],D=new Y1;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=b[W];return ie===void 0&&(ie=new xu,b[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=b[W];return ie===void 0&&(ie=new xu,b[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=b[W];return ie===void 0&&(ie=new xu,b[W]=ie),ie.getHandSpace()};function X(W){const ie=T.indexOf(W.inputSource);if(ie===-1)return;const re=b[ie];re!==void 0&&(re.update(W.inputSource,W.frame,l||a),re.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",G);for(let W=0;W<b.length;W++){const ie=T[W];ie!==null&&(T[W]=null,b[W].disconnect(ie))}R=null,O=null,x.reset();for(const W in h)delete h[W];if(e.setRenderTarget(y),p=null,u=null,d=null,r=null,E=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),P!==null){const W=P.camera;W.fov=P.fov,W.zoom=P.zoom,W.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",k),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ve=null,se=null;g.depth&&(se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?fr:wr,ve=g.stencil?Xs:Mi);const Pe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Pe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new yi(u.textureWidth,u.textureHeight,{format:vi,type:Rn,depthTexture:new qs(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new yi(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(W){for(let ie=0;ie<W.removed.length;ie++){const re=W.removed[ie],ve=T.indexOf(re);ve>=0&&(T[ve]=null,b[ve].disconnect(re))}for(let ie=0;ie<W.added.length;ie++){const re=W.added[ie];let ve=T.indexOf(re);if(ve===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=T.length){T.push(re),ve=Pe;break}else if(T[Pe]===null){T[Pe]=re,ve=Pe;break}if(ve===-1)break}const se=b[ve];se&&se.connect(re)}}function z(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ie=W.near,re=W.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(re=x.depthFar)),D.near=I.near=C.near=ie,D.far=I.far=C.far=re,(R!==D.near||O!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,O=D.far),D.layers.mask=W.layers.mask|6,C.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;const ve=W.parent,se=D.cameras;z(D,ve);for(let Pe=0;Pe<se.length;Pe++)z(se[Pe],ve);D.projectionMatrix.copy(C.projectionMatrix),D.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&W.isPerspectiveCamera&&(P={camera:W,fov:W.fov,zoom:W.zoom}),V(W,D,ve)};function V(W,ie,re){re===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=mf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(W){return h[W]};let N=null;function J(W,ie){if(f=ie.getViewerPose(l||a),m=ie,f!==null){const re=f.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ve=!1;re.length!==D.cameras.length&&(D.cameras.length=0,ve=!0);for(let Te=0;Te<re.length;Te++){const ze=re[Te];let We=null;if(p!==null)We=p.getViewport(ze);else{const Xt=d.getViewSubImage(u,ze);We=Xt.viewport,Te===0&&(e.setRenderTargetTextures(E,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(E))}let ke=U[Te];ke===void 0&&(ke=new ni,ke.layers.enable(Te),ke.viewport=new St,U[Te]=ke),ke.matrix.fromArray(ze.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ze.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(We.x,We.y,We.width,We.height),Te===0&&(D.matrix.copy(ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ve===!0&&D.cameras.push(ke)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Te=d.getDepthInformation(re[0]);Te&&Te.isValid&&Te.texture&&x.init(Te,r.renderState)}if(se&&se.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Te=0;Te<re.length;Te++){const ze=re[Te].camera;if(ze){let We=h[ze];We||(We=new _v,h[ze]=We);const ke=d.getCameraImage(ze);We.sourceTexture=ke}}}}for(let re=0;re<b.length;re++){const ve=T[re],se=b[re];ve!==null&&se!==void 0&&se.update(ve,ie,l||a)}N&&N(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Me=new wv;Me.setAnimationLoop(J),this.setAnimationLoop=function(W){N=W},this.dispose=function(){}}}const BT=new Mt,Iv=new Ue;Iv.set(-1,0,0,0,1,0,0,0,1);function kT(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,Sv(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,g,y,E){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(x,h):h.isMeshLambertMaterial?(s(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(x,h),d(x,h)):h.isMeshPhongMaterial?(s(x,h),f(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(x,h),u(x,h),h.isMeshPhysicalMaterial&&p(x,h,E)):h.isMeshMatcapMaterial?(s(x,h),m(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),v(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(a(x,h),h.isLineDashedMaterial&&o(x,h)):h.isPointsMaterial?c(x,h,g,y):h.isSpriteMaterial?l(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===En&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===En&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const g=e.get(h),y=g.envMap,E=g.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(E)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Iv),x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function a(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function o(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function c(x,h,g,y){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*g,x.scale.value=y*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function l(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function f(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function d(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function u(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function p(x,h,g){x.ior.value=h.ior,h.diffuseRoughness>0&&(x.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.retroreflectivity>0&&(x.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,h){h.matcap&&(x.matcap.value=h.matcap)}function v(x,h){const g=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zT(t,e,n,i){let r={},s={};function a(g,y){const E=y.program;i.uniformBlockBinding(g,E,r[g.id])}function o(g,y){let E=r[g.id];E===void 0&&(m(g),E=c(g),r[g.id]=E,g.addEventListener("dispose",x));const b=y.program;i.updateUBOMapping(g,b);const T=e.render.frame;s[g.id]!==T&&(l(g),s[g.id]=T)}function c(g){const y=t.createBuffer(),E=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,b),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function l(g){const y=r[g.id],E=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,_=E.length;T<_;T++){const M=E[T];if(Array.isArray(M))for(let P=0,C=M.length;P<C;P++)f(M[P],T,P,b);else f(M,T,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(g,y,E,b){if(u(g,y,E,b)===!0){const T=g.__offset,_=g.value;if(Array.isArray(_)){let M=0;for(let P=0;P<_.length;P++){const C=_[P],I=v(C,!0);d(C,g.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,g.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,g.__data)}}function d(g,y,E){typeof g=="number"||typeof g=="boolean"?y[E]=g:g.isMatrix3?(y[E]=g.elements[0],y[E+1]=g.elements[1],y[E+2]=g.elements[2],y[E+3]=0,y[E+4]=g.elements[3],y[E+5]=g.elements[4],y[E+6]=g.elements[5],y[E+7]=0,y[E+8]=g.elements[6],y[E+9]=g.elements[7],y[E+10]=g.elements[8],y[E+11]=0):ArrayBuffer.isView(g)?y.set(g.subarray(0,y.length-E),E):g.toArray(y,E)}function u(g,y,E,b){const T=g.value,_=y+"_"+E;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);const M=b[_];let P=!1;for(let C=0;C<T.length;C++)p(T[C],M,C)===!0&&(P=!0);return P}return p(T,b,_)}function p(g,y,E){if(y[E]===void 0)return typeof g=="number"||typeof g=="boolean"?y[E]=g:ArrayBuffer.isView(g)?y[E]=g.slice():y[E]=g.clone(),!0;{const b=y[E];if(typeof g=="number"||typeof g=="boolean"){if(b!==g)return y[E]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(b.equals(g)===!1)return b.copy(g),!0}}return!1}function m(g){const y=g.uniforms;let E=0;const b=16;for(let _=0,M=y.length;_<M;_++){const P=Array.isArray(y[_])?y[_]:[y[_]];for(let C=0,I=P.length;C<I;C++){const U=P[C],D=Array.isArray(U.value)?U.value:[U.value],R=Array.isArray(y[_])||Array.isArray(U.value);let O=E;for(let k=0,G=D.length;k<G;k++){const z=D[k],V=v(z,R),N=E%b,J=N%V.boundary,Me=N+J;E+=J,Me!==0&&b-Me<V.storage&&(E+=b-Me),k===0&&(O=E),E+=V.storage}const X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((E-O)/Float32Array.BYTES_PER_ELEMENT),U.__offset=O}}const T=E%b;return T>0&&(E+=b-T),g.__size=E,g.__cache={},this}function v(g,y){const E={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(E.boundary=4,E.storage=4):g.isVector2?(E.boundary=8,E.storage=8):g.isVector3||g.isColor?(E.boundary=16,E.storage=12):g.isVector4?(E.boundary=16,E.storage=16):g.isMatrix3?(E.boundary=16,E.storage=48):g.isMatrix4?(E.boundary=16,E.storage=64):g.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(E.boundary=16,E.storage=g.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",g),y===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function x(g){const y=g.target;y.removeEventListener("dispose",x),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);r={},s={}}return{bind:a,update:o,dispose:h}}const GT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function HT(){return di===null&&(di=new O1(GT,16,16,Jr,Ei),di.name="DFG_LUT",di.minFilter=_n,di.magFilter=_n,di.wrapS=Fi,di.wrapT=Fi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class VT{constructor(e={}){const{canvas:n=l1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=p,x=new Set([Mh,yh,Sh]),h=new Set([Rn,Mi,Za,Xs,vh,_h]),g=new Uint32Array(4),y=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let b=null,T=null;const _=[],M=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,U=null,D=null,R=null,O=null;this._outputColorSpace=Gn;let X=0,k=0,G=null,z=-1,V=null;const N=new St,J=new St;let Me=null;const W=new Je(0);let ie=0,re=n.width,ve=n.height,se=1,Pe=null,it=null;const Te=new St(0,0,re,ve),ze=new St(0,0,re,ve);let We=!1;const ke=new Qa,Xt=new Ah;let Lt=!1,gn=!1;const xt=new Mt,li=new $,kt=new St,In={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fn=!1;function Un(){return G===null?se:1}let H=i;function On(A,B){return n.getContext(A,B)}let pt,mt,xe,Nt,De,Fe,L,w,q,ae,ne,ue,me,Q,ee,fe,F,te,Z,he,ce,de,Ce;try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mh}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",_e,!1),H===null){const B="webgl2";if(H=On(B,A),H===null)throw On(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(A){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),nt("WebGLRenderer: "+A.message),A}function He(){pt=new Xb(H),pt.init(),ce=new DT(H,pt),mt=new Fb(H,pt,e,ce),xe=new LT(H,pt),mt.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),D=H.createFramebuffer(),R=H.createFramebuffer(),O=H.createFramebuffer(),Nt=new Yb(H),De=new xT,Fe=new NT(H,pt,xe,De,mt,ce,Nt),L=new jb(C),w=new Z1(H),de=new Db(H,w),q=new qb(H,w,Nt,de),ae=new Zb(H,q,w,de,Nt),te=new Kb(H,mt,Fe),ee=new Ub(De),ne=new gT(C,L,pt,mt,de,ee),ue=new kT(C,De),me=new _T,Q=new bT(pt),F=new Nb(C,L,xe,ae,m,c),fe=new PT(C,ae,mt),Ce=new zT(H,Nt,mt,xe),Z=new Ib(H,pt,Nt),he=new $b(H,pt,Nt),Nt.programs=ne.programs,C.capabilities=mt,C.extensions=pt,C.properties=De,C.renderLists=me,C.shadowMap=fe,C.state=xe,C.info=Nt}v!==Rn&&(P=new Qb(v,n.width,n.height,o,r,s));const le=new OT(C,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(re,ve,!1))},this.getSize=function(A){return A.set(re,ve)},this.setSize=function(A,B,K=!0){if(le.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,ve=B,n.width=Math.floor(A*se),n.height=Math.floor(B*se),K===!0&&(n.style.width=A+"px",n.style.height=B+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(re*se,ve*se).floor()},this.setDrawingBufferSize=function(A,B,K){re=A,ve=B,se=K,n.width=Math.floor(A*K),n.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(v===Rn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,B,K,j){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,B,K,j),xe.viewport(N.copy(Te).multiplyScalar(Un()).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,B,K,j){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,B,K,j),xe.scissor(J.copy(ze).multiplyScalar(Un()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(A){xe.setScissorTest(We=A)},this.setOpaqueSort=function(A){Pe=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,K=!0){let j=0;if(A){let Y=!1;if(G!==null){const ge=G.texture.format;Y=x.has(ge)}if(Y){const ge=G.texture.type,we=h.has(ge),pe=F.getClearColor(),ye=F.getClearAlpha(),Re=pe.r,Oe=pe.g,qe=pe.b;we?(g[0]=Re,g[1]=Oe,g[2]=qe,g[3]=ye,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=Re,y[1]=Oe,y[2]=qe,y[3]=ye,H.clearBufferiv(H.COLOR,0,y))}else j|=H.COLOR_BUFFER_BIT}B&&(j|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),F.dispose(),me.dispose(),Q.dispose(),Fe.dispose(),De.dispose(),L.dispose(),ae.dispose(),q.dispose(),de.dispose(),Ce.dispose(),ne.dispose(),le.dispose(),le.removeEventListener("sessionstart",Uh),le.removeEventListener("sessionend",Oh),Cr.stop()};function Le(A){A.preventDefault(),xm("WebGLRenderer: Context Lost."),I=!0}function Ge(){xm("WebGLRenderer: Context Restored."),I=!1;const A=Nt.autoReset,B=fe.enabled,K=fe.autoUpdate,j=fe.needsUpdate,Y=fe.type;He(),Nt.autoReset=A,fe.enabled=B,fe.autoUpdate=K,fe.needsUpdate=j,fe.type=Y}function _e(A){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const B=A.target;B.removeEventListener("dispose",st),zt(B)}function zt(A){Xi(A),De.remove(A)}function Xi(A){const B=De.get(A).programs;B!==void 0&&(B.forEach(function(K){ne.releaseProgram(K)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,j,Y,ge){B===null&&(B=In);const we=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,pe=Ov(A,B,K,j,Y);xe.setMaterial(j,we);let ye=K.index,Re=1;if(j.wireframe===!0){if(ye=q.getWireframeAttribute(K),ye===void 0)return;Re=2}const Oe=K.drawRange,qe=K.attributes.position;let be=Oe.start*Re,$e=(Oe.start+Oe.count)*Re;ge!==null&&(be=Math.max(be,ge.start*Re),$e=Math.min($e,(ge.start+ge.count)*Re)),ye!==null?(be=Math.max(be,0),$e=Math.min($e,ye.count)):qe!=null&&(be=Math.max(be,0),$e=Math.min($e,qe.count));const Rt=$e-be;if(Rt<0||Rt===1/0)return;de.setup(Y,j,pe,K,ye);let ut,lt=Z;if(ye!==null&&(ut=w.get(ye),lt=he,lt.setIndex(ut)),Y.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*Un()),lt.setMode(H.LINES)):lt.setMode(H.TRIANGLES);else if(Y.isLine){let en=j.linewidth;en===void 0&&(en=1),xe.setLineWidth(en*Un()),Y.isLineSegments?lt.setMode(H.LINES):Y.isLineLoop?lt.setMode(H.LINE_LOOP):lt.setMode(H.LINE_STRIP)}else Y.isPoints?lt.setMode(H.POINTS):Y.isSprite&&lt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const en=Y._multiDrawStarts,Ae=Y._multiDrawCounts,cn=Y._multiDrawCount,tt=ye?w.get(ye).bytesPerElement:1,Pr=De.get(j).currentProgram.getUniforms();for(let tn=0;tn<cn;tn++)Pr.setValue(H,"_gl_DrawID",tn),lt.render(en[tn]/tt,Ae[tn])}else if(Y.isInstancedMesh)lt.renderInstances(be,Rt,Y.count);else if(K.isInstancedBufferGeometry){const en=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,en);lt.renderInstances(be,Rt,Ae)}else lt.render(be,Rt)};function Fh(A,B,K,j){U!==null&&A.isNodeMaterial&&U.setObject(j,A),Lt===!0&&ee.setState(A,K,!1),A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,ea(A,B,j),A.side=Zr,A.needsUpdate=!0,ea(A,B,j),A.side=gi):ea(A,B,j)}this.compile=function(A,B,K=null){K===null&&(K=A),U!==null&&U.renderStart(A,B,K),T=Q.get(K),T.init(B),M.push(T),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),A!==K&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),gn=this.localClippingEnabled,Lt=ee.init(this.clippingPlanes,gn),Lt===!0&&ee.setGlobalState(this.clippingPlanes,B),U!==null&&fe.render(T.state.shadowsArray,K,B);const j=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const pe=ge[we];Fh(pe,K,B,Y),j.add(pe)}else Fh(ge,K,B,Y),j.add(ge)}),T=M.pop(),U!==null&&U.renderEnd(),j},this.compileAsync=function(A,B,K=null){const j=this.compile(A,B,K);return new Promise(Y=>{function ge(){if(j.forEach(function(we){const ye=De.get(we).currentProgram;(ye===void 0||ye.isReady())&&j.delete(we)}),j.size===0){Y(A);return}setTimeout(ge,10)}pt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let bc=null;function Fv(A){bc&&bc(A)}function Uh(){Cr.stop()}function Oh(){Cr.start()}const Cr=new wv;Cr.setAnimationLoop(Fv),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(A){bc=A,le.setAnimationLoop(A),A===null?Cr.stop():Cr.start()},le.addEventListener("sessionstart",Uh),le.addEventListener("sessionend",Oh),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(A,B);const K=le.enabled===!0&&le.isPresenting===!0,j=P!==null&&(G===null||K)&&P.begin(C,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(B),B=le.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,B,G),T=Q.get(A,M.length),T.init(B),T.state.textureUnits=Fe.getTextureUnits(),M.push(T),xt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Xt.setFromArrayCamera(B):ke.setFromProjectionMatrix(xt,ri,B.reversedDepth),gn=this.localClippingEnabled,Lt=ee.init(this.clippingPlanes,gn),b=me.get(A,_.length),b.init(),_.push(b),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&Ac(we,B,-1/0,C.sortObjects)}Ac(A,B,0,C.sortObjects),b.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(Pe,it),Fn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Fn&&F.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),Lt===!0&&ee.beginShadows();const Y=T.state.shadowsArray;if(fe.render(Y,A,B),Lt===!0&&ee.endShadows(),(j&&P.hasRenderPass())===!1){const we=b.opaque,pe=b.transmissive;if(T.setupLights(),B.isArrayCamera){const ye=B.cameras;if(pe.length>0)for(let Re=0,Oe=ye.length;Re<Oe;Re++){const qe=ye[Re];kh(we,pe,A,qe)}Fn&&F.render(A);for(let Re=0,Oe=ye.length;Re<Oe;Re++){const qe=ye[Re];Bh(b,A,qe,qe.viewport)}}else pe.length>0&&kh(we,pe,A,B),Fn&&F.render(A),Bh(b,A,B)}G!==null&&k===0&&(Fe.updateMultisampleRenderTarget(G),Fe.updateRenderTargetMipmap(G)),j&&P.end(C),A.isScene===!0&&A.onAfterRender(C,A,B),de.resetDefaultState(),z=-1,V=null,M.pop(),M.length>0?(T=M[M.length-1],Fe.setTextureUnits(T.state.textureUnits),Lt===!0&&ee.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,U!==null&&U.renderEnd()};function Ac(A,B,K,j){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){const we=B.isArrayCamera?Xt:ke;if(!A.frustumCulled||A.intersectsFrustum(we)){j&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const pe=ae.update(A),ye=A.material;ye.visible&&b.push(A,pe,ye,K,kt.z,null,B)}}else if(A.isMesh||A.isLine||A.isPoints){const we=B.isArrayCamera?Xt:ke;if(!A.frustumCulled||A.intersectsFrustum(we)){const pe=ae.update(A),ye=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),kt.copy(pe.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(ye)){const Re=pe.groups;for(let Oe=0,qe=Re.length;Oe<qe;Oe++){const be=Re[Oe],$e=ye[be.materialIndex];$e&&$e.visible&&b.push(A,pe,$e,K,kt.z,be,B)}}else ye.visible&&b.push(A,pe,ye,K,kt.z,null,B)}}}const ge=A.children;for(let we=0,pe=ge.length;we<pe;we++)Ac(ge[we],B,K,j)}function Bh(A,B,K,j){const{opaque:Y,transmissive:ge,transparent:we}=A;T.setupLightsView(K),Lt===!0&&ee.setGlobalState(C.clippingPlanes,K),j&&xe.viewport(N.copy(j)),Y.length>0&&co(Y,B,K),ge.length>0&&co(ge,B,K),we.length>0&&co(we,B,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function kh(A,B,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const be=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new yi(1,1,{generateMipmaps:!0,type:be?Ei:Rn,minFilter:dr,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ge=T.state.transmissionRenderTarget[j.id],we=j.viewport||N;ge.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),ye=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(W),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),Fn&&F.render(K);const Oe=C.toneMapping;C.toneMapping=ki;const qe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),Lt===!0&&ee.setGlobalState(C.clippingPlanes,j),co(A,K,j),Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge),pt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let $e=0,Rt=B.length;$e<Rt;$e++){const ut=B[$e],{object:lt,geometry:en,material:Ae,group:cn}=ut;if(Ae.side===gi&&lt.layers.test(j.layers)){const tt=Ae.side;Ae.side=En,Ae.needsUpdate=!0,zh(lt,K,j,en,Ae,cn),Ae.side=tt,Ae.needsUpdate=!0,be=!0}}be===!0&&(Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge))}C.setRenderTarget(pe,ye,Re),C.setClearColor(W,ie),qe!==void 0&&(j.viewport=qe),C.toneMapping=Oe}function co(A,B,K){const j=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,ge=A.length;Y<ge;Y++){const we=A[Y],{object:pe,geometry:ye,group:Re}=we;let Oe=we.material;Oe.allowOverride===!0&&j!==null&&(Oe=j),pe.layers.test(K.layers)&&zh(pe,B,K,ye,Oe,Re)}}function zh(A,B,K,j,Y,ge){U!==null&&Y.isNodeMaterial&&U.setObject(A,Y),A.onBeforeRender(C,B,K,j,Y,ge),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,B,K,j,A,ge),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=En,Y.needsUpdate=!0,C.renderBufferDirect(K,B,j,Y,A,ge),Y.side=Zr,Y.needsUpdate=!0,C.renderBufferDirect(K,B,j,Y,A,ge),Y.side=gi):C.renderBufferDirect(K,B,j,Y,A,ge),A.onAfterRender(C,B,K,j,Y,ge)}function Gh(A){let B=0;for(const K of A)K.texture!==null&&B++;return B}function ea(A,B,K){B.isScene!==!0&&(B=In);const j=De.get(A),Y=T.state.lights,ge=T.state.shadowsArray,we=Y.state.version,pe=ne.getParameters(A,Y.state,ge,B,K,T.state.lightProbeGridArray),ye=ne.getProgramCacheKey(pe);let Re=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,j.fog=B.fog;const Oe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=L.get(A.envMap||j.environment,Oe),j.envMapRotation=j.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",st),Re=new Map,j.programs=Re,j.programVariants=new Map);let qe=Re.get(ye);if(qe!==void 0){if(j.currentProgram===qe&&j.lightsStateVersion===we)return Vh(A,pe),qe}else pe.uniforms=ne.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,K,pe),A.onBeforeCompile(pe,C),qe=ne.acquireProgram(pe,ye),Re.set(ye,qe),j.uniforms=pe.uniforms;const be=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(be.clippingPlanes=ee.uniform),Vh(A,pe),j.needsLights=kv(A),j.lightsStateVersion=we,j.needsLights&&(be.ambientLightColor.value=Y.state.ambient,be.lightProbe.value=Y.state.probe,be.sunLights.value=Y.state.sun,be.sunLightShadows.value=Y.state.sunShadow,be.directionalLights.value=Y.state.directional,be.directionalLightShadows.value=Y.state.directionalShadow,be.spotLights.value=Y.state.spot,be.spotLightShadows.value=Y.state.spotShadow,be.rectAreaLights.value=Y.state.rectArea,be.ltc_1.value=Y.state.rectAreaLTC1,be.ltc_2.value=Y.state.rectAreaLTC2,be.pointLights.value=Y.state.point,be.pointLightShadows.value=Y.state.pointShadow,be.hemisphereLights.value=Y.state.hemi,be.sunShadowMatrix.value=Y.state.sunShadowMatrix,be.sunShadowCascade.value=Y.state.sunShadowCascade,be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,be.spotLightMatrix.value=Y.state.spotLightMatrix,be.spotLightMap.value=Y.state.spotLightMap,be.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.numLightProbeGrids=Gh(T.state.lightProbeGridArray),j.currentProgram=qe,j.uniformsList=null,qe}function Uv(A,B,K,j,Y){const ge=De.get(A),we=ge.currentProgram.id+","+j+","+Y;let pe=ge.programVariants.get(we);return pe===void 0?(pe=ea(A,B,K),ge.programVariants.set(we,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=j,ge.toneMapping=Y),pe}function Hh(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Sl.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Vh(A,B){const K=De.get(A);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Ov(A,B,K,j,Y){B.isScene!==!0&&(B=In),Fe.resetTextureUnits();const ge=B.fog,we=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?B.environment:null,pe=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ze.workingColorSpace,ye=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Re=L.get(j.envMap||we,ye),Oe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),be=!!K.morphAttributes.position,$e=!!K.morphAttributes.normal,Rt=!!K.morphAttributes.color;let ut=ki;j.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ut=C.toneMapping);const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,en=lt!==void 0?lt.length:0,Ae=De.get(j),cn=T.state.lights;if(Lt===!0&&(gn===!0||A!==V)){const vt=A===V&&j.id===z;ee.setState(j,A,vt)}let tt=!1,Pr=!1;j.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==cn.state.version||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Re||j.fog===!0&&Ae.fog!==ge||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ee.numPlanes||Ae.numIntersection!==ee.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==qe||Ae.morphTargets!==be||Ae.morphNormals!==$e||Ae.morphColors!==Rt||Ae.morphTargetsCount!==en||Ae.numLightProbeGrids!==Gh(T.state.lightProbeGridArray)?tt=!0:(Ae.outputColorSpace!==pe||Ae.toneMapping!==ut)&&(Pr=!0):(tt=!0,Ae.__version=j.version);let tn=Ae.currentProgram;(tt===!0||Pr===!0)&&(tn=Pr===!0?Uv(j,B,Y,pe,ut):ea(j,B,Y),U&&j.isNodeMaterial&&U.onUpdateProgram(j,tn,Ae));let uo=!1,qi=!1,Lr=!1;const Qe=tn.getUniforms(),qt=Ae.uniforms;if(xe.useProgram(tn.program)&&(uo=!0,qi=!0,Lr=!0),j.id!==z&&(z=j.id,qi=!0),uo||V!==A){xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Qe.setValue(H,"projectionMatrix",A.projectionMatrix),Qe.setValue(H,"viewMatrix",A.matrixWorldInverse);const Gt=Qe.map.cameraPosition;Gt!==void 0&&Gt.setValue(H,li.setFromMatrixPosition(A.matrixWorld)),mt.logarithmicDepthBuffer&&Qe.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Qe.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,qi=!0,Lr=!0)}if(Ae.needsLights&&(cn.state.sunShadowMap.length>0&&Qe.setValue(H,"sunShadowMap",cn.state.sunShadowMap,Fe),cn.state.directionalShadowMap.length>0&&Qe.setValue(H,"directionalShadowMap",cn.state.directionalShadowMap,Fe),cn.state.spotShadowMap.length>0&&Qe.setValue(H,"spotShadowMap",cn.state.spotShadowMap,Fe),cn.state.pointShadowMap.length>0&&Qe.setValue(H,"pointShadowMap",cn.state.pointShadowMap,Fe)),Y.isSkinnedMesh){Qe.setOptional(H,Y,"bindMatrix"),Qe.setOptional(H,Y,"bindMatrixInverse");const vt=Y.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Qe.setValue(H,"boneTexture",vt.boneTexture,Fe))}Y.isBatchedMesh&&(Qe.setOptional(H,Y,"batchingTexture"),Qe.setValue(H,"batchingTexture",Y._matricesTexture,Fe),Qe.setOptional(H,Y,"batchingIdTexture"),Qe.setValue(H,"batchingIdTexture",Y._indirectTexture,Fe),Qe.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Qe.setValue(H,"batchingColorTexture",Y._colorsTexture,Fe));const $n=K.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&te.update(Y,K,tn),(qi||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,Qe.setValue(H,"receiveShadow",Y.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&B.environment!==null&&(qt.envMapIntensity.value=B.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=HT()),qi){if(Qe.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&Bv(qt,Lr),ge&&j.fog===!0&&ue.refreshFogUniforms(qt,ge),ue.refreshMaterialUniforms(qt,j,se,ve,T.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const vt=E;let Gt=0;for(const wi of T.state.lightProbeGridArray)wi.texture!==null&&(vt.textures[Gt]=wi.texture,vt.min[Gt]=wi.boundingBox.min,vt.max[Gt]=wi.boundingBox.max,vt.resolution[Gt]=wi.resolution,Gt++);for(const wi in vt)vt[wi].length=Gt;qt.probesSH.value=vt.textures,qt.probesMin.value=vt.min,qt.probesMax.value=vt.max,qt.probesResolution.value=vt.resolution}Sl.upload(H,Hh(Ae),qt,Fe)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Sl.upload(H,Hh(Ae),qt,Fe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Qe.setValue(H,"center",Y.center),Qe.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Qe.setValue(H,"normalMatrix",Y.normalMatrix),Qe.setValue(H,"modelMatrix",Y.matrixWorld),j.uniformsGroups!==void 0){const vt=j.uniformsGroups;for(let Gt=0,wi=vt.length;Gt<wi;Gt++){const jh=vt[Gt];Ce.update(jh,tn),Ce.bind(jh,tn)}}return tn}function Bv(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function kv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,B,K){const j=De.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),De.get(A.texture).__webglTexture=B,De.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const K=De.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,K=0){G=A,X=B,k=K;let j=null,Y=!1,ge=!1;if(A){const pe=De.get(A);if(pe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(H.FRAMEBUFFER,pe.__webglFramebuffer),N.copy(A.viewport),J.copy(A.scissor),Me=A.scissorTest,xe.viewport(N),xe.scissor(J),xe.setScissorTest(Me),z=-1;return}else if(pe.__webglFramebuffer===void 0)Fe.setupRenderTarget(A);else if(pe.__hasExternalTextures)Fe.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Oe=A.depthTexture;if(pe.__boundDepthTexture!==Oe){if(Oe!==null&&De.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(A)}}const ye=A.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);const Re=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[B])?j=Re[B][K]:j=Re[B],Y=!0):A.samples>0&&Fe.useMultisampledRTT(A)===!1?j=De.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?j=Re[K]:j=Re,N.copy(A.viewport),J.copy(A.scissor),Me=A.scissorTest}else N.copy(Te).multiplyScalar(se).floor(),J.copy(ze).multiplyScalar(se).floor(),Me=We;if(K!==0&&(j=D),xe.bindFramebuffer(H.FRAMEBUFFER,j)&&xe.drawBuffers(A,j),xe.viewport(N),xe.scissor(J),xe.setScissorTest(Me),Y){const pe=De.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,K)}else if(ge){const pe=B;for(let ye=0;ye<A.textures.length;ye++){const Re=De.get(A.textures[ye]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ye,Re.__webglTexture,K,pe)}}else if(A!==null&&K!==0){const pe=De.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pe.__webglTexture,K)}z=-1};function Wh(A){const B=De.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=mt.textureFormatReadable(A.format),B.__typeReadable=mt.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,K,j,Y,ge,we,pe=0){if(!(A&&A.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye){xe.bindFramebuffer(H.FRAMEBUFFER,ye);try{const Re=A.textures[pe],Oe=Re.format,qe=Re.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+pe);const be=Wh(Re);if(be.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-j&&K>=0&&K<=A.height-Y&&H.readPixels(B,K,j,Y,ce.convert(Oe),ce.convert(qe),ge)}finally{const Re=G!==null?De.get(G).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,B,K,j,Y,ge,we,pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye)if(B>=0&&B<=A.width-j&&K>=0&&K<=A.height-Y){xe.bindFramebuffer(H.FRAMEBUFFER,ye);const Re=A.textures[pe],Oe=Re.format,qe=Re.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+pe);const be=Wh(Re);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.bufferData(H.PIXEL_PACK_BUFFER,ge.byteLength,H.STREAM_READ),H.readPixels(B,K,j,Y,ce.convert(Oe),ce.convert(qe),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Rt=G!==null?De.get(G).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Rt);const ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await c1(H,ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ge),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer($e),H.deleteSync(ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,K=0){const j=Math.pow(2,-K),Y=Math.floor(A.image.width*j),ge=Math.floor(A.image.height*j),we=B!==null?B.x:0,pe=B!==null?B.y:0;Fe.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,we,pe,Y,ge),xe.unbindTexture()},this.copyTextureToTexture=function(A,B,K=null,j=null,Y=0,ge=0){let we,pe,ye,Re,Oe,qe,be,$e,Rt;const ut=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(K!==null)we=K.max.x-K.min.x,pe=K.max.y-K.min.y,ye=K.isBox3?K.max.z-K.min.z:1,Re=K.min.x,Oe=K.min.y,qe=K.isBox3?K.min.z:0;else{const Qe=Math.pow(2,-Y);we=Math.floor(ut.width*Qe),pe=Math.floor(ut.height*Qe),A.isDataArrayTexture?ye=ut.depth:A.isData3DTexture?ye=Math.floor(ut.depth*Qe):ye=1,Re=0,Oe=0,qe=0}j!==null?(be=j.x,$e=j.y,Rt=j.z):(be=0,$e=0,Rt=0);const lt=ce.convert(B.format),en=ce.convert(B.type);let Ae;B.isData3DTexture?(Fe.setTexture3D(B,0),Ae=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Fe.setTexture2DArray(B,0),Ae=H.TEXTURE_2D_ARRAY):(Fe.setTexture2D(B,0),Ae=H.TEXTURE_2D),xe.activeTexture(H.TEXTURE0),xe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),xe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),xe.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const cn=xe.getParameter(H.UNPACK_ROW_LENGTH),tt=xe.getParameter(H.UNPACK_IMAGE_HEIGHT),Pr=xe.getParameter(H.UNPACK_SKIP_PIXELS),tn=xe.getParameter(H.UNPACK_SKIP_ROWS),uo=xe.getParameter(H.UNPACK_SKIP_IMAGES);xe.pixelStorei(H.UNPACK_ROW_LENGTH,ut.width),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut.height),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Re),xe.pixelStorei(H.UNPACK_SKIP_ROWS,Oe),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,qe);const qi=A.isDataArrayTexture||A.isData3DTexture,Lr=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Qe=De.get(A),qt=De.get(B),$n=De.get(Qe.__renderTarget),vt=De.get(qt.__renderTarget);xe.bindFramebuffer(H.READ_FRAMEBUFFER,$n.__webglFramebuffer),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Gt=0;Gt<ye;Gt++)qi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.get(A).__webglTexture,Y,qe+Gt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.get(B).__webglTexture,ge,Rt+Gt)),H.blitFramebuffer(Re,Oe,Re+we,Oe+pe,be,$e,be+we,$e+pe,H.DEPTH_BUFFER_BIT,H.NEAREST);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||De.has(A)){const Qe=De.get(A),qt=De.get(B);xe.bindFramebuffer(H.READ_FRAMEBUFFER,R),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,O);for(let $n=0;$n<ye;$n++)qi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,Y,qe+$n):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,Y),Lr?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.__webglTexture,ge,Rt+$n):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qt.__webglTexture,ge),Y!==0?H.blitFramebuffer(Re,Oe,Re+we,Oe+pe,be,$e,be+we,$e+pe,H.COLOR_BUFFER_BIT,H.NEAREST):Lr?H.copyTexSubImage3D(Ae,ge,be,$e,Rt+$n,Re,Oe,we,pe):H.copyTexSubImage2D(Ae,ge,be,$e,Re,Oe,we,pe);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Lr?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ae,ge,be,$e,Rt,we,pe,ye,lt,en,ut.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Ae,ge,be,$e,Rt,we,pe,ye,lt,ut.data):H.texSubImage3D(Ae,ge,be,$e,Rt,we,pe,ye,lt,en,ut):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ge,be,$e,we,pe,lt,en,ut.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ge,be,$e,ut.width,ut.height,lt,ut.data):H.texSubImage2D(H.TEXTURE_2D,ge,be,$e,we,pe,lt,en,ut);xe.pixelStorei(H.UNPACK_ROW_LENGTH,cn),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,tt),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Pr),xe.pixelStorei(H.UNPACK_SKIP_ROWS,tn),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,uo),ge===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(Ae),xe.unbindTexture()},this.initRenderTarget=function(A){De.get(A).__webglFramebuffer===void 0&&Fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Fe.setTextureCube(A,0):A.isData3DTexture?Fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Fe.setTexture2DArray(A,0):Fe.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){X=0,k=0,G=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const fi=200,Dt=Math.PI/180;function $t(t,e,n){return t+(e-t)*n}function WT(t,e,n){return{pelvisOffsetY:$t(t.pelvisOffsetY,e.pelvisOffsetY,n),torsoPitch:$t(t.torsoPitch,e.torsoPitch,n),torsoTwist:$t(t.torsoTwist,e.torsoTwist,n),torsoRoll:$t(t.torsoRoll,e.torsoRoll,n),headPitch:$t(t.headPitch,e.headPitch,n),leftArmLift:$t(t.leftArmLift,e.leftArmLift,n),rightArmLift:$t(t.rightArmLift,e.rightArmLift,n),leftArmOut:$t(t.leftArmOut,e.leftArmOut,n),rightArmOut:$t(t.rightArmOut,e.rightArmOut,n),leftElbowFlex:$t(t.leftElbowFlex,e.leftElbowFlex,n),rightElbowFlex:$t(t.rightElbowFlex,e.rightElbowFlex,n),leftHipFlex:$t(t.leftHipFlex,e.leftHipFlex,n),rightHipFlex:$t(t.rightHipFlex,e.rightHipFlex,n),leftHipOut:$t(t.leftHipOut,e.leftHipOut,n),rightHipOut:$t(t.rightHipOut,e.rightHipOut,n),leftKneeFlex:$t(t.leftKneeFlex,e.leftKneeFlex,n),rightKneeFlex:$t(t.rightKneeFlex,e.rightKneeFlex,n)}}function er(t,e,n,i=20){const r=n/2,s=[],a=6;for(let c=0;c<=a;c++){const l=c/a*(Math.PI/2);s.push(new Ne(Math.sin(l)*e,-r-Math.cos(l)*e))}s.push(new Ne((e+t)*.52,0));for(let c=0;c<=a;c++){const l=c/a*(Math.PI/2);s.push(new Ne(Math.cos(l)*t,r+Math.sin(l)*t))}const o=new yc(s,i);return o.computeVertexNormals(),o}class jT{constructor(e,n=320){this.canvas=e,this.outCanvas=document.createElement("canvas"),this.outCanvas.width=fi,this.outCanvas.height=fi;const i=this.outCanvas.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("No se pudo inicializar el lienzo 2D para exportar GIF.");this.outCtx=i,this.renderer=new VT({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,alpha:!1}),this.renderer.setSize(n,n,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vx,this.renderer.toneMapping=gh,this.renderer.toneMappingExposure=1.12,this.scene=new R1,this.scene.background=new Je(1054759),this.camera=new ni(34,1,.1,100);const r=new X1(14742270,1976635,1.05);this.scene.add(r);const s=new Du(16774635,1.85);s.position.set(2.4,4.2,3.4),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.camera.near=.5,s.shadow.camera.far=14,s.shadow.camera.left=-2.4,s.shadow.camera.right=2.4,s.shadow.camera.top=3,s.shadow.camera.bottom=-1.5,s.shadow.bias=-.001,this.scene.add(s);const a=new Du(9684477,.85);a.position.set(-3,2.2,1.8),this.scene.add(a);const o=new Du(16708551,.95);o.position.set(0,2.8,-3.2),this.scene.add(o);const c=new je(new Th(1.9,48),new kn({color:1515571,roughness:.92,metalness:.04}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.scene.add(c);const l=new je(new Rh(1.3,1.34,48),new gv({color:3359061,side:gi}));l.rotation.x=-Math.PI/2,l.position.y=.002,this.scene.add(l);const f=new kn({color:9741240,roughness:.46,metalness:.12}),d=new kn({color:15680580,roughness:.42,metalness:.04}),u=new kn({color:12131356,roughness:.5,metalness:.05}),p=new kn({color:14870768,roughness:.48,metalness:.06}),m=new kn({color:988970,roughness:.75,metalness:.05}),v=new kn({color:13358561,roughness:.25,metalness:.85}),x=new kn({color:1976635,roughness:.55,metalness:.25}),h=new kn({color:16347926,roughness:.45,metalness:.1}),g=new kn({color:1976635,roughness:.85,metalness:.05}),y=new kn({color:14427686,roughness:.35,metalness:.08}),E=()=>{const W=new It,ie=new je(new rr(.015,.015,.2,12),v);ie.rotation.z=Math.PI/2,W.add(ie);for(const re of[-.075,.075]){const ve=new je(new rr(.055,.055,.036,16),x);ve.rotation.z=Math.PI/2,ve.position.x=re,ve.castShadow=!0,W.add(ve)}return W},b=()=>{const ie=new It,re=new je(new rr(.016,.016,1.2,14),v);re.rotation.z=Math.PI/2,re.castShadow=!0,ie.add(re);for(const ve of[-1,1]){const se=new je(new rr(.145,.145,.042,22),x);se.rotation.z=Math.PI/2,se.position.x=ve*(1.2*.42),se.castShadow=!0,ie.add(se);const Pe=new je(new rr(.148,.148,.012,22),h);Pe.rotation.z=Math.PI/2,Pe.position.x=ve*(1.2*.42),ie.add(Pe)}return ie},T=()=>{const W=new It,ie=new je(new Li(.088,18,14),x);ie.scale.set(1,.92,1),ie.position.y=-.09,ie.castShadow=!0,W.add(ie);const re=new je(new Ch(.052,.014,10,20,Math.PI),v);return re.position.y=-.01,W.add(re),W},_=new It,M=new It;M.position.set(0,.92,0),_.add(M);const P=new je(er(.145,.148,.14,24),d);P.scale.set(1.16,1,.78),P.position.y=.01,P.castShadow=!0,M.add(P);const C=new je(new rr(.144,.148,.042,24),u);C.scale.set(1.16,1,.78),C.position.y=.095,C.castShadow=!0,M.add(C);const I=new It;I.position.set(0,.1,0),M.add(I);const U=new je(er(.145,.132,.16,24),f);U.scale.set(1.12,1,.72),U.position.y=.08,U.castShadow=!0,I.add(U);const D=new It;D.position.set(0,.14,0),I.add(D);const R=[new Ne(.001,0),new Ne(.132,.01),new Ne(.15,.08),new Ne(.172,.175),new Ne(.165,.22),new Ne(.125,.252),new Ne(.058,.282),new Ne(.001,.285)],O=new yc(R,26);O.computeVertexNormals();const X=new je(O,f);X.scale.set(1.2,1,.74),X.castShadow=!0,D.add(X);const k=new It;k.position.set(0,.275,.008),D.add(k);const G=new je(er(.047,.055,.062,18),f);G.position.y=.038,G.castShadow=!0,k.add(G);const z=new It;z.position.set(0,.078,.008),k.add(z);const V=new je(new Li(.1,24,20),f);V.scale.set(.86,1.08,.96),V.position.y=.1,V.castShadow=!0,z.add(V);const N=new je(new Li(.066,18,14),f);N.scale.set(.82,.85,.92),N.position.set(0,.046,.022),N.castShadow=!0,z.add(N);const J=W=>{const ie=new It;ie.position.set(W*.205,.215,0),D.add(ie);const re=new je(new Li(.058,16,14),f);re.scale.set(.95,1.08,.92),re.castShadow=!0,ie.add(re);const ve=new je(er(.052,.041,.22,18),f);ve.position.y=-.135,ve.castShadow=!0,ie.add(ve);const se=new It;se.position.set(0,-.275,0),ie.add(se);const Pe=new je(new Li(.041,14,12),f);Pe.castShadow=!0,se.add(Pe);const it=new je(er(.042,.029,.2,18),f);it.position.y=-.12,it.castShadow=!0,se.add(it);const Te=new It;Te.position.set(0,-.245,0),se.add(Te);const ze=new je(new Jl(.026,.055,6,12),f);ze.scale.set(.68,1,1.15),ze.position.y=-.042,ze.castShadow=!0,Te.add(ze);const We=new je(new Li(.054,16,14),y);We.scale.set(.95,1.18,1.02),We.position.y=-.045,We.visible=!1,We.castShadow=!0,Te.add(We);const ke=E();return ke.position.set(0,-.055,.015),ke.rotation.y=Math.PI/2,ke.visible=!1,Te.add(ke),{shoulder:ie,elbow:se,wrist:Te,hand:ze,glove:We,dumbbell:ke}},Me=W=>{const ie=new It;ie.position.set(W*.102,-.03,0),M.add(ie);const re=new je(er(.088,.084,.14,20),d);re.position.y=-.08,re.castShadow=!0,ie.add(re);const ve=new je(er(.074,.054,.23,20),f);ve.position.y=-.275,ve.castShadow=!0,ie.add(ve);const se=new It;se.position.set(0,-.43,0),ie.add(se);const Pe=new je(new Li(.054,16,14),f);Pe.castShadow=!0,se.add(Pe);const it=new je(er(.058,.036,.31,20),f);it.position.y=-.195,it.castShadow=!0,se.add(it);const Te=new It;Te.position.set(0,-.39,0),se.add(Te);const ze=new je(new Jl(.04,.105,8,12),p);ze.rotation.x=Math.PI/2,ze.position.set(0,-.025,.042),ze.scale.set(1.02,1,.85),ze.castShadow=!0,Te.add(ze);const We=new je(new yr(.084,.02,.185),m);return We.position.set(0,-.048,.042),We.castShadow=!0,Te.add(We),{hip:ie,knee:se,ankle:Te}};this.athlete={root:_,pelvis:M,spine:I,chest:D,neck:k,head:z,leftArm:J(1),rightArm:J(-1),leftLeg:Me(1),rightLeg:Me(-1)},this.scene.add(this.athlete.root),this.propMat=new je(new yr(.85,.024,1.9),g),this.propMat.position.set(0,.012,0),this.propMat.receiveShadow=!0,this.scene.add(this.propMat),this.propBarbell=b(),this.scene.add(this.propBarbell),this.propKettlebell=T(),this.scene.add(this.propKettlebell),this.propBox=new je(new yr(.68,.38,.56),new kn({color:3359061,roughness:.72,metalness:.1})),this.propBox.position.set(0,.19,-.18),this.propBox.castShadow=!0,this.propBox.receiveShadow=!0,this.scene.add(this.propBox)}getPostureBase(e){switch(e){case"supine":return{y:.12,z:-.18,pitchRad:-1.52,rootYawRad:Math.PI/2};case"prone":return{y:.11,z:0,pitchRad:1.54,rootYawRad:Math.PI/2};case"plank":return{y:.56,z:-.1,pitchRad:1.38,rootYawRad:Math.PI/2};case"quadruped":return{y:.48,z:-.16,pitchRad:1.5,rootYawRad:Math.PI/2};case"seated":return{y:.14,z:-.22,pitchRad:0,rootYawRad:.35};case"standing":default:return{y:.92,z:0,pitchRad:0,rootYawRad:0}}}applyCamera(e,n){const i=n==="supine"||n==="prone"||n==="plank"||n==="quadruped";switch(e){case"front":this.camera.position.set(0,i?.95:1.28,i?2.65:3.3),this.camera.lookAt(0,i?.35:.98,0);break;case"side":this.camera.position.set(i?.25:2.95,i?.85:1.2,i?2.65:.15),this.camera.lookAt(0,i?.34:.92,0);break;case"low_side":this.camera.position.set(1.95,.95,2.25),this.camera.lookAt(.02,i?.36:.85,0);break;case"overhead":this.camera.position.set(.35,2.85,1.45),this.camera.lookAt(0,i?.25:.8,0);break;case"three_quarter":default:this.camera.position.set(1.75,i?1.1:1.35,i?2.35:2.85),this.camera.lookAt(0,i?.36:.95,0);break}}applyProps(e,n){const i=this.athlete;this.propMat.visible=e==="mat"||n==="supine"||n==="prone"||n==="plank"||n==="quadruped",this.propMat.rotation.y=n==="standing"||n==="seated"?0:Math.PI/2,this.propBarbell.visible=e==="barbell",this.propKettlebell.visible=e==="kettlebell",this.propBox.visible=e==="box";for(const r of[i.leftArm,i.rightArm])r.hand.visible=e!=="gloves",r.glove.visible=e==="gloves",r.dumbbell.visible=e==="dumbbells"}applySpecAtProgress(e,n){const i=.5-.5*Math.cos(n*Math.PI*2),r=WT(e.poseA,e.poseB,i);this.applyPose(e,r)}applyStaticPose(e,n){this.applyPose(e,n==="A"?e.poseA:e.poseB)}applyPose(e,n){const i=this.athlete,r=this.getPostureBase(e.posture);i.root.position.set(0,0,0),i.root.rotation.set(0,r.rootYawRad,0),i.pelvis.position.set(0,r.y+n.pelvisOffsetY,r.z),i.pelvis.rotation.order="YXZ",i.pelvis.rotation.set(r.pitchRad,0,0),i.spine.rotation.order="YXZ",i.spine.rotation.set(n.torsoPitch*Dt*.55,n.torsoTwist*Dt*.55,n.torsoRoll*Dt*.55),i.chest.rotation.order="YXZ",i.chest.rotation.set(n.torsoPitch*Dt*.45,n.torsoTwist*Dt*.45,n.torsoRoll*Dt*.45),i.neck.rotation.set(0,0,0),i.head.rotation.set(n.headPitch*Dt,0,0),i.leftArm.shoulder.rotation.order="XZY",i.leftArm.shoulder.rotation.set(-n.leftArmLift*Dt,0,n.leftArmOut*Dt),i.leftArm.elbow.rotation.order="XYZ",i.leftArm.elbow.rotation.set(-n.leftElbowFlex*Dt,0,0),i.leftArm.wrist.rotation.set(0,0,0),i.rightArm.shoulder.rotation.order="XZY",i.rightArm.shoulder.rotation.set(-n.rightArmLift*Dt,0,-n.rightArmOut*Dt),i.rightArm.elbow.rotation.order="XYZ",i.rightArm.elbow.rotation.set(-n.rightElbowFlex*Dt,0,0),i.rightArm.wrist.rotation.set(0,0,0),i.leftLeg.hip.rotation.order="XZY",i.leftLeg.hip.rotation.set(-n.leftHipFlex*Dt,0,n.leftHipOut*Dt),i.leftLeg.knee.rotation.set(n.leftKneeFlex*Dt,0,0),i.leftLeg.ankle.rotation.set(0,0,0),i.rightLeg.hip.rotation.order="XZY",i.rightLeg.hip.rotation.set(-n.rightHipFlex*Dt,0,-n.rightHipOut*Dt),i.rightLeg.knee.rotation.set(n.rightKneeFlex*Dt,0,0),i.rightLeg.ankle.rotation.set(0,0,0),this.applyProps(e.prop,e.posture),this.applyCamera(e.camera,e.posture),i.root.updateMatrixWorld(!0);const s=new $,a=new $;i.leftArm.wrist.getWorldPosition(s),i.rightArm.wrist.getWorldPosition(a);const o=s.clone().add(a).multiplyScalar(.5);e.prop==="barbell"&&(this.propBarbell.position.copy(o),this.propBarbell.position.y-=.04,this.propBarbell.rotation.y=r.rootYawRad),e.prop==="kettlebell"&&(this.propKettlebell.position.copy(o),this.propKettlebell.position.y-=.03),this.renderer.render(this.scene,this.camera)}async exportGifDataUri(e){const i=Math.max(55,Math.min(140,e.frameDelayMs||80)),r=zx();for(let u=0;u<18;u++){this.applySpecAtProgress(e,u/18),this.outCtx.clearRect(0,0,fi,fi),this.outCtx.drawImage(this.canvas,0,0,fi,fi);const m=this.outCtx.getImageData(0,0,fi,fi).data,v=Bx(m,76),x=kx(m,v);r.writeFrame(x,fi,fi,{palette:v,delay:i})}r.finish();const s=r.bytes(),a=32768,o=[];for(let u=0;u<s.length;u+=a)o.push(String.fromCharCode(...s.subarray(u,u+a)));const l=`data:image/gif;base64,${btoa(o.join(""))}`,f=Math.max(1,Math.round(s.length/1024)),d=new Blob([new Uint8Array(s)],{type:"image/gif"});return{mediaData:l,sizeKb:f,blob:d}}dispose(){this.renderer.dispose()}}const XT=[{id:"standing",label:"De pie"},{id:"supine",label:"Boca arriba"},{id:"prone",label:"Boca abajo"},{id:"plank",label:"Plancha"},{id:"quadruped",label:"4 apoyos"},{id:"seated",label:"Sentado"}],qT=[{id:"none",label:"Sin equipo"},{id:"mat",label:"Colchoneta"},{id:"dumbbells",label:"Mancuernas"},{id:"barbell",label:"Barra"},{id:"kettlebell",label:"Kettlebell"},{id:"box",label:"Cajón"},{id:"gloves",label:"Guantes"}],$T=[{id:"three_quarter",label:"3/4"},{id:"front",label:"Frontal"},{id:"side",label:"Lateral"},{id:"low_side",label:"Suelo"},{id:"overhead",label:"Arriba"}],Vt=({label:t,value:e,min:n,max:i,step:r=1,unit:s="°",onChange:a})=>S.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[S.jsx("span",{className:"w-28 text-slate-300 font-medium truncate",children:t}),S.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:o=>a(Number(o.target.value)),className:"flex-1 accent-emerald-500 cursor-pointer h-1.5"}),S.jsxs("span",{className:"w-12 text-right font-mono text-emerald-300 font-bold",children:[r<1?e.toFixed(2):Math.round(e),s]})]}),YT=({initialExerciseName:t,t:e=Oi.es,onApplyGif:n})=>{const i=Be.useRef(null),r=Be.useRef(null),[s,a]=Be.useState(t.trim()||""),[o,c]=Be.useState(()=>t.trim()?su(t).spec:AM("standing")),[l,f]=Be.useState(()=>t.trim()?su(t).matchedNotes:["Elige un ejercicio por texto o ajusta las poses"]),[d,u]=Be.useState("play"),[p,m]=Be.useState("B"),[v,x]=Be.useState(!1),[h,g]=Be.useState(!1),[y,E]=Be.useState("arms"),[b,T]=Be.useState(!1),[_,M]=Be.useState(null),[P,C]=Be.useState(null),I=Be.useRef(o);I.current=o;const U=Be.useRef(d);U.current=d,Be.useEffect(()=>{const N=i.current;if(!N)return;let J=0,Me=performance.now();try{const W=new jT(N,320);r.current=W;const ie=re=>{const ve=I.current,se=U.current;if(se==="A"||se==="B")W.applyStaticPose(ve,se);else{const Pe=Math.max(900,(ve.frameDelayMs||80)*18),it=(re-Me)%Pe/Pe;W.applySpecAtProgress(ve,it)}J=requestAnimationFrame(ie)};return J=requestAnimationFrame(ie),()=>{cancelAnimationFrame(J),W.dispose(),r.current=null}}catch(W){C(W instanceof Error?W.message:"No se pudo iniciar WebGL 3D en este navegador.")}},[]);const D=N=>{const J=(N??s).trim();if(!J)return;N!==void 0&&a(N);const Me=su(J);c(Me.spec),f(Me.matchedNotes),u("play"),M(null)},R=p==="A"?o.poseA:o.poseB,O=N=>{c(J=>{const W={...p==="A"?J.poseA:J.poseB,...N};return p==="A"?{...J,poseA:W}:{...J,poseB:W}})},X=N=>{const J=ct(N);c(Me=>({...Me,posture:N,prop:N==="standing"||N==="seated"?Me.prop==="mat"?"none":Me.prop:Me.prop==="none"?"mat":Me.prop,camera:N==="standing"||N==="seated"?"three_quarter":"low_side",poseA:{...J},poseB:{...J}}))},k=()=>{c(N=>({...N,poseB:{...N.poseA}})),m("B"),u("B")},G=()=>{c(N=>({...N,poseA:{...N.poseB},poseB:{...N.poseA}}))},z=async()=>{const N=r.current;if(N){T(!0),M("Renderizando 18 cuadros 3D...");try{const J=await N.exportGifDataUri(o);M(`✅ GIF generado (${J.sizeKb} KB)`),n(J.mediaData,s.trim()||void 0)}catch(J){M(J instanceof Error?`⚠️ ${J.message}`:"⚠️ Error al generar GIF")}finally{T(!1)}}},V=async()=>{const N=r.current;if(N){T(!0),M("Generando archivo .gif...");try{const J=await N.exportGifDataUri(o),Me=URL.createObjectURL(J.blob),W=document.createElement("a"),ie=(s.trim()||"ejercicio_3d").toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"ejercicio_3d";W.href=Me,W.download=`${ie}.gif`,document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(Me),M(`💾 Descargado (${J.sizeKb} KB)`)}catch(J){M(J instanceof Error?`⚠️ ${J.message}`:"⚠️ Error al exportar GIF")}finally{T(!1)}}};return S.jsxs("div",{className:"space-y-3.5",children:[S.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-xl p-3 space-y-2",children:[S.jsx("label",{className:"block text-[11px] font-extrabold uppercase tracking-wider text-emerald-400",children:e.describeExerciseLabel||"✨ Describe cualquier ejercicio"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("input",{type:"text",value:s,onChange:N=>a(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.preventDefault(),D())},placeholder:e.describePlaceholder||"Ej. Bicho muerto alternado, puente a una pierna...",className:"flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"}),S.jsx("button",{type:"button",onClick:()=>D(),className:"px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition shrink-0 cursor-pointer",children:e.generatePoseBtn||"Generar pose"})]}),S.jsx("div",{className:"flex flex-wrap gap-1.5",children:RM.map(N=>S.jsx("button",{type:"button",onClick:()=>D(N),className:"px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-[10px] font-semibold text-slate-300 transition cursor-pointer",children:N},N))}),l.length>0&&S.jsxs("p",{className:"text-[11px] text-slate-400",children:["🎯 ",l.join(" · ")]})]}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 items-start",children:[S.jsxs("div",{className:"flex flex-col items-center gap-2",children:[S.jsxs("div",{className:"w-[200px] h-[200px] rounded-xl overflow-hidden border border-slate-700 bg-[#101827] relative",children:[S.jsx("canvas",{ref:i,width:320,height:320,className:"w-full h-full block"}),P&&S.jsx("div",{className:"absolute inset-0 bg-slate-950/90 p-3 flex items-center justify-center text-center text-xs text-rose-400",children:P})]}),S.jsx("div",{className:"grid grid-cols-3 gap-1 w-[200px]",children:[["play",e.animPreview||"▶ Anim"],["A",e.poseABtn||"Pose A"],["B",e.poseBBtn||"Pose B"]].map(([N,J])=>S.jsx("button",{type:"button",onClick:()=>{u(N),(N==="A"||N==="B")&&m(N)},className:`py-1 rounded-lg text-[10px] font-bold border transition cursor-pointer ${d===N?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:J},N))})]}),S.jsxs("div",{className:"space-y-2.5",children:[S.jsxs("div",{children:[S.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:e.basePostureLabel||"Postura base"}),S.jsx("div",{className:"flex flex-wrap gap-1",children:XT.map(N=>S.jsx("button",{type:"button",onClick:()=>X(N.id),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${o.posture===N.id?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:N.label},N.id))})]}),S.jsxs("div",{children:[S.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:e.propLabel||"Equipo / Accesorio"}),S.jsx("div",{className:"flex flex-wrap gap-1",children:qT.map(N=>S.jsx("button",{type:"button",onClick:()=>c(J=>({...J,prop:N.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${o.prop===N.id?"bg-cyan-500/20 border-cyan-400 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:N.label},N.id))})]}),S.jsxs("div",{children:[S.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:e.cameraLabel||"Cámara"}),S.jsx("div",{className:"flex flex-wrap gap-1",children:$T.map(N=>S.jsx("button",{type:"button",onClick:()=>c(J=>({...J,camera:N.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${o.camera===N.id?"bg-indigo-500/20 border-indigo-400 text-indigo-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:N.label},N.id))})]}),S.jsx(Vt,{label:e.speedLabel||"Velocidad",value:o.frameDelayMs,min:55,max:130,step:5,unit:"ms",onChange:N=>c(J=>({...J,frameDelayMs:N}))})]})]}),S.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2.5",children:[S.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[S.jsx("div",{className:"flex items-center gap-1",children:["A","B"].map(N=>S.jsxs("button",{type:"button",onClick:()=>{m(N),u(N)},className:`px-2.5 py-1 rounded-lg text-xs font-extrabold border transition cursor-pointer ${p===N?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-900 text-slate-300 border-slate-700"}`,children:[e.editingPoseLabel||"Editando Pose"," ",N," ",N==="A"?e.startWord||"(Inicio)":e.endWord||"(Fin)"]},N))}),S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx("button",{type:"button",onClick:k,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:e.copyAToB||"Copiar A → B"}),S.jsx("button",{type:"button",onClick:G,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:"A ↔ B"})]})]}),S.jsx("div",{className:"grid grid-cols-3 gap-1",children:[["torso",e.torsoHeightTab||"Torso y Altura"],["arms",e.armsTab||"Brazos"],["legs",e.legsTab||"Piernas"]].map(([N,J])=>S.jsx("button",{type:"button",onClick:()=>E(N),className:`py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${y===N?"bg-slate-800 text-emerald-300 border border-emerald-500/40":"bg-slate-900/60 text-slate-400 hover:text-slate-200"}`,children:J},N))}),y==="torso"&&S.jsxs("div",{className:"space-y-1.5",children:[S.jsx(Vt,{label:"Altura cadera",value:R.pelvisOffsetY,min:-.55,max:.3,step:.02,unit:"m",onChange:N=>O({pelvisOffsetY:N})}),S.jsx(Vt,{label:"Inclinar torso",value:R.torsoPitch,min:-75,max:75,onChange:N=>O({torsoPitch:N})}),S.jsx(Vt,{label:"Giro torso",value:R.torsoTwist,min:-60,max:60,onChange:N=>O({torsoTwist:N})}),S.jsx(Vt,{label:"Ladeo lateral",value:R.torsoRoll,min:-35,max:35,onChange:N=>O({torsoRoll:N})}),S.jsx(Vt,{label:"Cabeza",value:R.headPitch,min:-40,max:40,onChange:N=>O({headPitch:N})})]}),y==="arms"&&S.jsxs("div",{className:"space-y-1.5",children:[S.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[S.jsx("input",{type:"checkbox",checked:v,onChange:N=>x(N.target.checked),className:"accent-emerald-500"}),S.jsx("span",{children:e.symmetricArmsLabel||"Mover ambos brazos iguales (simétrico)"})]}),S.jsx(Vt,{label:v?"Brazos adelante":"Brazo Izq. adelante",value:R.leftArmLift,min:-55,max:180,onChange:N=>O(v?{leftArmLift:N,rightArmLift:N}:{leftArmLift:N})}),!v&&S.jsx(Vt,{label:"Brazo Der. adelante",value:R.rightArmLift,min:-55,max:180,onChange:N=>O({rightArmLift:N})}),S.jsx(Vt,{label:v?"Abrir brazos":"Abrir brazo Izq.",value:R.leftArmOut,min:-25,max:155,onChange:N=>O(v?{leftArmOut:N,rightArmOut:N}:{leftArmOut:N})}),!v&&S.jsx(Vt,{label:"Abrir brazo Der.",value:R.rightArmOut,min:-25,max:155,onChange:N=>O({rightArmOut:N})}),S.jsx(Vt,{label:v?"Flexión codos":"Codo Izq.",value:R.leftElbowFlex,min:0,max:145,onChange:N=>O(v?{leftElbowFlex:N,rightElbowFlex:N}:{leftElbowFlex:N})}),!v&&S.jsx(Vt,{label:"Codo Der.",value:R.rightElbowFlex,min:0,max:145,onChange:N=>O({rightElbowFlex:N})})]}),y==="legs"&&S.jsxs("div",{className:"space-y-1.5",children:[S.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[S.jsx("input",{type:"checkbox",checked:h,onChange:N=>g(N.target.checked),className:"accent-emerald-500"}),S.jsx("span",{children:e.symmetricLegsLabel||"Mover ambas piernas iguales (simétrico)"})]}),S.jsx(Vt,{label:h?"Subir piernas":"Pierna Izq.",value:R.leftHipFlex,min:-50,max:130,onChange:N=>O(h?{leftHipFlex:N,rightHipFlex:N}:{leftHipFlex:N})}),!h&&S.jsx(Vt,{label:"Pierna Der.",value:R.rightHipFlex,min:-50,max:130,onChange:N=>O({rightHipFlex:N})}),S.jsx(Vt,{label:h?"Abrir piernas":"Abrir Izq.",value:R.leftHipOut,min:-25,max:65,onChange:N=>O(h?{leftHipOut:N,rightHipOut:N}:{leftHipOut:N})}),!h&&S.jsx(Vt,{label:"Abrir Der.",value:R.rightHipOut,min:-25,max:65,onChange:N=>O({rightHipOut:N})}),S.jsx(Vt,{label:h?"Flexión rodillas":"Rodilla Izq.",value:R.leftKneeFlex,min:0,max:145,onChange:N=>O(h?{leftKneeFlex:N,rightKneeFlex:N}:{leftKneeFlex:N})}),!h&&S.jsx(Vt,{label:"Rodilla Der.",value:R.rightKneeFlex,min:0,max:145,onChange:N=>O({rightKneeFlex:N})})]})]}),S.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1",children:[S.jsx("button",{type:"button",disabled:b||!!P,onClick:z,className:"flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm transition cursor-pointer",children:b?e.creatingGifBtn||"⏳ Generando GIF...":e.createApplyGifBtn||"🎨 Crear y aplicar GIF al ejercicio"}),S.jsx("button",{type:"button",disabled:b||!!P,onClick:V,className:"py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-60 text-slate-100 font-bold text-xs border border-slate-700 transition cursor-pointer",children:e.downloadGifBtn||"💾 Descargar .gif"})]}),_&&S.jsx("p",{className:"text-xs text-emerald-300 font-semibold",children:_})]})},KT=({exercise:t,index:e,total:n,t:i=Oi.es,onChange:r,onDuplicate:s,onDelete:a,onMoveUp:o,onMoveDown:c})=>{const l=xc(t),[f,d]=Be.useState(!1),[u,p]=Be.useState("catalog"),[m,v]=Be.useState(""),[x,h]=Be.useState(!1),[g,y]=Be.useState(null),E=Be.useRef(null),b=hh(t),T=fh(t.mediaRef||t.mediaId),_=_y(t.mediaData),M=Be.useMemo(()=>{const R=m.trim().toLowerCase();return R?va.filter(O=>O.label.toLowerCase().includes(R)||O.category.toLowerCase().includes(R)||O.key.toLowerCase().includes(R)):va},[m]),P=(R,O)=>{r({...t,[R]:typeof O=="string"?O:Math.max(0,Number(O)||0)})},C=R=>{const{mediaData:O,mediaId:X,...k}=t;r({...k,mediaRef:R}),y(null),d(!1)},I=()=>{const{mediaData:R,mediaRef:O,mediaId:X,...k}=t;r(k),y(null),d(!1)},U=(R,O)=>{const{mediaRef:X,mediaId:k,...G}=t;r({...G,name:!t.name.trim()&&O?O:t.name,mediaData:R}),y(null),d(!1)},D=async R=>{var X;const O=(X=R.target.files)==null?void 0:X[0];if(R.target.value="",!!O){h(!0),y(null);try{const k=await bM(O),{mediaRef:G,mediaId:z,...V}=t;r({...V,mediaData:k.mediaData}),d(!1)}catch(k){y(k instanceof Error?k.message:"No se pudo procesar la imagen o GIF seleccionado.")}finally{h(!1)}}};return S.jsxs("div",{className:"bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 shadow-sm hover:border-slate-600 transition",children:[S.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-3",children:[S.jsxs("div",{className:"flex items-center space-x-2.5 flex-1 min-w-[220px]",children:[S.jsx("span",{className:"flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-semibold text-xs shrink-0",children:e+1}),S.jsxs("div",{className:"relative shrink-0",children:[S.jsx("button",{type:"button",onClick:()=>{y(null),p("catalog"),d(!0)},title:b?i.changeGifTitle||"Cambiar GIF o imagen del ejercicio":i.addGifTitle||"Agregar GIF o imagen",className:`w-12 h-12 rounded-xl border overflow-hidden flex items-center justify-center transition cursor-pointer ${b?"border-emerald-500/60 bg-slate-950":"border-slate-700 bg-slate-900/80 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400"}`,children:b?S.jsxs(S.Fragment,{children:[S.jsx("img",{src:b,alt:t.name||i.exerciseDefaultName||"Ejercicio",className:"w-full h-full object-cover"}),T?S.jsx("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/80 text-[8px] font-extrabold text-emerald-400 text-center leading-tight py-0.5",children:T.bundled?"BASE":"WEB"}):_!==null?S.jsxs("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/80 text-[8px] font-mono font-bold text-cyan-300 text-center leading-tight py-0.5",children:[_,"KB"]}):null]}):S.jsx("span",{className:"text-[10px] font-bold tracking-tight leading-tight text-center px-1",children:"GIF"})}),b&&S.jsx("button",{type:"button",onClick:I,title:i.removeGifTitle||"Quitar GIF / imagen",className:"absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow cursor-pointer",children:"×"})]}),S.jsx("input",{type:"text",value:t.name,onChange:R=>P("name",R.target.value),placeholder:i.exerciseNamePlaceholder||"Nombre del ejercicio",className:"flex-1 bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-100 focus:outline-none focus:border-emerald-500"})]}),S.jsxs("div",{className:"flex items-center space-x-1",children:[S.jsx("button",{type:"button",onClick:o,disabled:e===0,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:i.moveUpTitle||"Mover arriba",children:S.jsx(Ly,{size:16})}),S.jsx("button",{type:"button",onClick:c,disabled:e===n-1,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:i.moveDownTitle||"Mover abajo",children:S.jsx(Ny,{size:16})}),S.jsx("button",{type:"button",onClick:s,className:"p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-700/60",title:i.duplicateTitle||"Duplicar",children:S.jsx(Py,{size:16})}),S.jsx("button",{type:"button",onClick:a,className:"p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-700/60",title:i.deleteTitle||"Eliminar",children:S.jsx(Cy,{size:16})})]})]}),S.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:i.rounds}),S.jsx("input",{type:"number",min:1,value:t.roundCount,onChange:R=>P("roundCount",parseInt(R.target.value)||1),className:"w-full bg-slate-900/80 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-400"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-bold text-emerald-400 mb-1",children:i.work}),S.jsx("input",{type:"number",min:1,value:t.workDurationSeconds,onChange:R=>P("workDurationSeconds",parseInt(R.target.value)||0),className:"w-full bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-sm text-emerald-300 font-mono font-bold focus:outline-none focus:border-emerald-400"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-bold text-rose-400 mb-1",children:i.restBetween}),S.jsx("input",{type:"number",min:0,value:t.restBetweenRoundsSeconds,onChange:R=>P("restBetweenRoundsSeconds",parseInt(R.target.value)||0),className:"w-full bg-[#7A0D1E]/40 border border-rose-500/40 rounded-lg px-2.5 py-1.5 text-sm text-rose-300 font-mono font-bold focus:outline-none focus:border-rose-400"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:i.restAfter}),S.jsx("input",{type:"number",min:0,value:t.restAfterExerciseSeconds,onChange:R=>P("restAfterExerciseSeconds",parseInt(R.target.value)||0),className:"w-full bg-[#5E3A00]/40 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold focus:outline-none focus:border-amber-400"})]})]}),S.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400",children:[S.jsx("span",{children:i.estimatedDuration||"Duración estimada del ejercicio:"}),S.jsx("span",{className:"font-semibold text-slate-300 font-mono",children:bt(l.totalSeconds)})]}),f&&S.jsx("div",{className:"fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>!x&&d(!1),children:S.jsxs("div",{className:`bg-slate-900 border border-slate-700 rounded-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all ${u==="creator3d"?"max-w-2xl":"max-w-lg"}`,onClick:R=>R.stopPropagation(),children:[S.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-base font-black text-white",children:i.mediaModalTitle||"Animación o imagen del ejercicio"}),S.jsx("p",{className:"text-xs text-slate-400",children:i.mediaModalDesc||"Elige del catálogo, sube un archivo o crea un GIF 3D a medida"})]}),S.jsx("button",{type:"button",onClick:()=>!x&&d(!1),className:"w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer",children:"×"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-1.5 px-4 pt-3 pb-2 bg-slate-950/60 border-b border-slate-800/80",children:[S.jsxs("button",{type:"button",onClick:()=>p("catalog"),className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${u==="catalog"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:["📚 ",i.tabCatalog||"Catálogo"," (",va.length,") / ",i.tabUploadShort||"Subir"]}),S.jsx("button",{type:"button",onClick:()=>p("creator3d"),className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${u==="creator3d"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:i.tabCreator3d||"🎨 Crear GIF 3D (cualquier ejercicio)"})]}),S.jsx("div",{className:"p-4 space-y-4 overflow-y-auto flex-1",children:u==="creator3d"?S.jsx(YT,{initialExerciseName:t.name.trim()||m.trim(),t:i,onApplyGif:U}):S.jsxs(S.Fragment,{children:[S.jsxs("div",{children:[S.jsx("input",{ref:E,type:"file",accept:"image/gif,image/png,image/jpeg,image/webp",onChange:D,className:"hidden"}),S.jsx("button",{type:"button",disabled:x,onClick:()=>{var R;return(R=E.current)==null?void 0:R.click()},className:"w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer",children:x?S.jsx("span",{children:i.optimizingGifBtn||"⏳ Optimizando GIF / imagen (220×220)..."}):S.jsx("span",{children:i.uploadOwnGifBtn||"📤 Subir GIF o imagen propia (se comprime auto.)"})}),g&&S.jsxs("p",{className:"mt-2 text-xs text-rose-400 font-medium",children:["⚠️ ",g]})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between mb-2",children:[S.jsxs("span",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400",children:[i.integratedCatalog||"Catálogo integrado"," (",M.length,")"]}),b&&S.jsx("button",{type:"button",onClick:I,className:"text-xs font-bold text-rose-400 hover:text-rose-300 cursor-pointer",children:i.clearCurrent||"Quitar actual"})]}),S.jsx("input",{type:"text",value:m,onChange:R=>v(R.target.value),placeholder:i.searchExercisePlaceholder||"Buscar ejercicio (ej. burpees, boxeo, plancha)...",className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 mb-3"}),M.length===0?S.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center space-y-2.5",children:[S.jsxs("p",{className:"text-xs text-slate-400",children:[i.noPresetFound||"No hay ningún preset llamado"," ",S.jsxs("span",{className:"text-slate-200 font-semibold",children:['"',m.trim(),'"']})," ",i.inPresetsWord||"en los"," ",va.length," ",i.presetsWord||"predefinidos."]}),S.jsxs("button",{type:"button",onClick:()=>p("creator3d"),className:"px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer",children:["🎨 ",i.createIn3dBtn||"Crear en el Creador 3D"," (",m.trim(),")"]})]}):S.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-2.5",children:M.map(R=>{const O=(T==null?void 0:T.key)===R.key;return S.jsxs("button",{type:"button",onClick:()=>C(R.mediaRef),className:`rounded-xl p-2 border text-center transition flex flex-col items-center gap-1.5 cursor-pointer ${O?"border-emerald-400 bg-emerald-500/15":"border-slate-800 bg-slate-950/80 hover:border-slate-600"}`,children:[S.jsx("img",{src:R.url,alt:R.label,className:"w-16 h-16 rounded-lg object-cover bg-slate-900"}),S.jsx("span",{className:"text-[11px] font-bold text-slate-200 leading-tight line-clamp-2",children:R.label}),S.jsxs("span",{className:"text-[9px] font-semibold text-slate-400 uppercase",children:[R.category,R.bundled?"":" · WEB"]})]},R.key)})})]})]})})]})})]})},ZT=({initialWorkout:t,t:e=Oi.es,onWorkoutChange:n,onSaveFile:i,onOpenFile:r,onPreviewRoutine:s,onShareWhatsApp:a})=>{const[o,c]=Be.useState(t),[l,f]=Be.useState(null);Be.useEffect(()=>{c(M=>M===t?M:t)},[t]),Be.useEffect(()=>{n==null||n(o)},[o,n]);const d=o.routines[0],u=$a(d),p=M=>{f(M),setTimeout(()=>f(null),3e3)},m=(M,P)=>{c(C=>({...C,[M]:P}))},v=(M,P)=>{c(C=>{const I=[...C.routines];return I[0]={...I[0],[M]:typeof P=="string"?P:Math.max(1,Number(P)||0)},{...C,routines:I}})},x=(M,P)=>{c(C=>{const I=[...C.routines],U=[...I[0].exercises];return U[M]=P,I[0]={...I[0],exercises:U},{...C,routines:I}})},h=()=>{c(M=>{const P=[...M.routines],C={...Sx,id:"ex-"+Date.now(),name:`${e.exerciseDefaultName||"Ejercicio"} ${P[0].exercises.length+1}`};return P[0]={...P[0],exercises:[...P[0].exercises,C]},{...M,routines:P}})},g=M=>{c(P=>{const C=[...P.routines],I=C[0].exercises[M],U={...I,id:"ex-"+Date.now(),name:`${I.name} (copia)`},D=[...C[0].exercises];return D.splice(M+1,0,U),C[0]={...C[0],exercises:D},{...P,routines:C}})},y=M=>{if(d.exercises.length<=1){alert(e.minOneExerciseAlert||"La rutina debe tener al menos un ejercicio.");return}c(P=>{const C=[...P.routines],I=C[0].exercises.filter((U,D)=>D!==M);return C[0]={...C[0],exercises:I},{...P,routines:C}})},E=(M,P)=>{const C=P==="up"?M-1:M+1;C<0||C>=d.exercises.length||c(I=>{const U=[...I.routines],D=[...U[0].exercises],R=D[M];return D[M]=D[C],D[C]=R,U[0]={...U[0],exercises:D},{...I,routines:U}})},b=async()=>{if(a){await a(o);return}const M=d.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",P=JSON.stringify(o,null,2),C=new File([P],`${M}.wkt`,{type:"application/octet-stream"}),I=`🔥 ¡${d.name}! • ⏱️ ${bt(u.totalSeconds)} • 💪 ${d.exercises.length} ${e.exercisesWord||"ejercicios"}
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`,U=await Ax(o,e);if(U){const D=new File([U],`${M}_card.png`,{type:"image/png"});if(typeof navigator.canShare=="function"&&navigator.canShare({files:[D,C]}))try{await navigator.share({title:d.name,text:I,files:[D,C]});return}catch(R){if((R==null?void 0:R.name)==="AbortError")return}}window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(I)}`,"_blank")},T=()=>{const M=bx(o);window.location.href=M,p(e.openingApp||"Abriendo aplicación en el móvil...")},_=async()=>{if(i){await i(o)!==!1&&p(`💾 ${e.savedAs||"Guardado"}: ${d.name||"rutina"}.wkt`);return}const M=new Blob([JSON.stringify(o,null,2)],{type:"application/octet-stream"}),P=URL.createObjectURL(M),C=document.createElement("a");C.href=P,C.download=`${d.name.toLowerCase().replace(/\s+/g,"_")||"rutina"}.wkt`,C.click(),URL.revokeObjectURL(P),p("Archivo .wkt descargado.")};return S.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[l&&S.jsx("div",{className:"fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 font-semibold px-4 py-3 rounded-xl shadow-lg border border-emerald-400 animate-bounce",children:l}),S.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800",children:[S.jsxs("div",{className:"flex items-center space-x-3",children:[S.jsx(jl,{className:"w-10 h-10 shrink-0 shadow-md rounded-xl"}),S.jsxs("div",{children:[S.jsx("h1",{className:"text-2xl font-black text-slate-100 tracking-tight",children:e.appTitle}),S.jsx("p",{className:"text-xs text-slate-400",children:e.subtitle})]})]}),S.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s&&S.jsx("button",{type:"button",onClick:s,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-bold transition cursor-pointer",children:S.jsx("span",{children:e.previewModeBtn||"👁️ Vista Previa"})}),r&&S.jsxs("button",{type:"button",onClick:r,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition cursor-pointer",title:e.openWktBtn||"Abrir archivo .wkt",children:[S.jsx(Tx,{size:16}),S.jsx("span",{children:e.openFileBtn||"Abrir Archivo"})]}),S.jsxs("button",{type:"button",onClick:_,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition cursor-pointer",title:e.saveAs||"Elegir dónde guardar el archivo .wkt",children:[S.jsx(Rx,{size:16}),S.jsx("span",{children:e.saveLocalBtn||"Guardar Local"})]}),S.jsxs("button",{type:"button",onClick:b,className:"flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-lg text-xs font-bold transition shadow-sm cursor-pointer",children:[S.jsx(Xl,{className:"w-4 h-4 shrink-0"}),S.jsx("span",{children:e.shareWhatsApp})]}),S.jsxs("button",{type:"button",onClick:T,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition cursor-pointer",children:[S.jsx(Dy,{size:16}),S.jsx("span",{children:e.openInApp})]})]})]}),S.jsxs("div",{className:"bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 mb-4",children:[S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:e.routineName}),S.jsx("input",{type:"text",value:d.name,onChange:M=>v("name",M.target.value),placeholder:"HIIT / Tabata",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 font-semibold focus:outline-none focus:border-emerald-500"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:e.author}),S.jsx("input",{type:"text",value:d.author,onChange:M=>v("author",M.target.value),placeholder:"",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500"})]})]}),S.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:e.category}),S.jsx("input",{type:"text",value:o.category,onChange:M=>m("category",M.target.value),placeholder:"Fitness...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:e.sport}),S.jsx("input",{type:"text",value:o.sport,onChange:M=>m("sport",M.target.value),placeholder:"HIIT...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:e.cycles}),S.jsx("input",{type:"number",min:1,value:d.routineCycles,onChange:M=>v("routineCycles",parseInt(M.target.value)||1),className:"w-full bg-slate-900/90 border border-cyan-500/30 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:e.prepareShort||"Preparación (seg)"}),S.jsx("input",{type:"number",min:0,value:d.prepareDurationSeconds,onChange:M=>v("prepareDurationSeconds",parseInt(M.target.value)||0),className:"w-full bg-[#5E3A00]/35 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold"})]})]})]}),S.jsx(Fy,{metrics:u,t:e}),S.jsxs("div",{className:"my-6",children:[S.jsxs("div",{className:"flex items-center justify-between mb-3",children:[S.jsxs("h2",{className:"text-lg font-bold text-slate-200",children:[e.exercisesHeading||"Ejercicios"," (",d.exercises.length,")"]}),S.jsxs("button",{type:"button",onClick:h,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer",children:[S.jsx(im,{size:16}),S.jsx("span",{children:e.addExercise})]})]}),S.jsx("div",{className:"space-y-3",children:d.exercises.map((M,P)=>S.jsx(KT,{exercise:M,index:P,total:d.exercises.length,t:e,onChange:C=>x(P,C),onDuplicate:()=>g(P),onDelete:()=>y(P),onMoveUp:()=>E(P,"up"),onMoveDown:()=>E(P,"down")},M.id||P))}),S.jsxs("button",{type:"button",onClick:h,className:"mt-4 w-full py-3 border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-xl flex items-center justify-center space-x-2 text-slate-400 hover:text-emerald-400 transition cursor-pointer",children:[S.jsx(im,{size:18}),S.jsx("span",{className:"text-sm font-semibold",children:e.addAnotherExercise})]})]})]})},JT=({workout:t,t:e,onOpenInApp:n,onEditInWeb:i,onDownloadWkt:r,onShareWhatsApp:s,onGoHome:a})=>{const o=t.routines[0],c=$a(o),l=c.totalSeconds>0?Math.round(c.tutSeconds/c.totalSeconds*100):50,f=Math.max(0,100-l);return S.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-6",children:[a&&S.jsx("div",{className:"mb-3 flex justify-between items-center",children:S.jsx("button",{type:"button",onClick:a,className:"px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",children:S.jsx("span",{children:e.homeBtn||"🏠 Inicio"})})}),S.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden",children:[S.jsx("div",{className:"absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),S.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-3",children:[S.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:e.previewBadge||"✨ Rutina Compartida"}),t.category&&S.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700",children:["🏷️ ",t.category]}),t.sport&&S.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700",children:["🏅 ",t.sport]}),o.routineCycles>1&&S.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:["🔄 ",o.routineCycles,"x ",e.cycles||e.cyclesLabel]})]}),S.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight",children:o.name}),o.author&&S.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-1.5 flex items-center gap-1.5",children:[S.jsxs("span",{children:["👤 ",e.sharedBy||"Compartida por",":"]}),S.jsx("strong",{className:"text-slate-200",children:o.author})]}),S.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6",children:[S.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[S.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalTime}),S.jsx("span",{className:"text-xl sm:text-2xl font-black text-white font-mono mt-1 block",children:bt(c.totalSeconds)})]}),S.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-2xl p-3.5 text-center",children:[S.jsx("span",{className:"block text-[10px] font-bold text-emerald-300 uppercase tracking-wider",children:e.tut}),S.jsx("span",{className:"text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1 block",children:bt(c.tutSeconds)})]}),S.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-2xl p-3.5 text-center",children:[S.jsx("span",{className:"block text-[10px] font-bold text-rose-300 uppercase tracking-wider",children:e.rest}),S.jsx("span",{className:"text-xl sm:text-2xl font-black text-rose-400 font-mono mt-1 block",children:bt(c.restSeconds)})]}),S.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[S.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalRounds}),S.jsxs("span",{className:"text-xl sm:text-2xl font-black text-cyan-400 font-mono mt-1 block",children:[c.totalRounds," ",S.jsxs("span",{className:"text-xs font-normal text-slate-500",children:["(",c.exerciseCount,")"]})]})]})]}),S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:"flex justify-between text-[11px] font-semibold text-slate-400 mb-1.5",children:[S.jsx("span",{children:e.workVsRestRatio||"Distribución Trabajo vs Descanso"}),S.jsxs("span",{children:[S.jsxs("strong",{className:"text-emerald-400",children:[l,"%"]})," /"," ",S.jsxs("strong",{className:"text-rose-400",children:[f,"%"]})]})]}),S.jsxs("div",{className:"w-full h-2.5 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800",children:[S.jsx("div",{style:{width:`${l}%`},className:"bg-emerald-500 h-full transition-all"}),S.jsx("div",{style:{width:`${f}%`},className:"bg-rose-500 h-full transition-all"})]})]}),S.jsxs("div",{className:"space-y-2.5 mb-6",children:[S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[S.jsx("button",{type:"button",onClick:n,className:"w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 cursor-pointer",children:S.jsx("span",{children:e.openInApp})}),S.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[S.jsx(jl,{className:"w-6 h-6 shrink-0"}),S.jsx("span",{children:e.downloadApkBtn||"Descargar App Android (.apk)"})]})]}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[S.jsx("button",{type:"button",onClick:i,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.editRoutineBtn||"✏️ Editar en Web"}),S.jsx("button",{type:"button",onClick:r,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.downloadWktBtn||"📥 Descargar (.wkt)"}),S.jsxs("button",{type:"button",onClick:s,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer flex items-center justify-center gap-1.5",children:[S.jsx(Xl,{className:"w-4 h-4 text-[#25D366] shrink-0"}),S.jsx("span",{children:e.shareWhatsApp})]})]})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between mb-3",children:[S.jsxs("h2",{className:"text-sm font-extrabold text-slate-300 uppercase tracking-wider",children:[e.exercisesList," (",o.exercises.length,")"]}),o.prepareDurationSeconds>0&&S.jsxs("span",{className:"text-xs font-mono text-amber-300 bg-[#5E3A00]/50 border border-amber-500/40 px-2.5 py-0.5 rounded-lg font-bold",children:["⏱️ ",e.prepareBadge||"Preparación",": ",bt(o.prepareDurationSeconds)]})]}),S.jsx("div",{className:"space-y-2.5",children:o.exercises.map((d,u)=>{const p=xc(d),m=hh(d);return S.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/90 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("span",{className:"w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-xs flex items-center justify-center shrink-0",children:u+1}),m&&S.jsx("img",{src:m,alt:d.name,className:"w-12 h-12 rounded-xl object-cover border border-slate-700 bg-slate-900 shrink-0"}),S.jsxs("div",{children:[S.jsx("h3",{className:"font-bold text-slate-100 text-sm sm:text-base",children:d.name}),S.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-1 text-[11px] font-mono",children:[S.jsxs("span",{className:"px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-300 font-semibold",children:["🔄 ",d.roundCount," ",e.rounds]}),S.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#0F4D2A]/60 border border-emerald-500/40 text-emerald-300 font-bold",children:["⚡ ",bt(d.workDurationSeconds)]}),d.restBetweenRoundsSeconds>0&&S.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#7A0D1E]/60 border border-rose-500/40 text-rose-300 font-bold",children:["💨 ",bt(d.restBetweenRoundsSeconds)]}),d.restAfterExerciseSeconds>0&&S.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#5E3A00]/60 border border-amber-500/40 text-amber-300 font-bold",children:["🛑 ",bt(d.restAfterExerciseSeconds)]})]})]})]}),S.jsxs("div",{className:"text-right sm:border-l sm:border-slate-800 sm:pl-4 flex sm:flex-col justify-between items-center sm:items-end",children:[S.jsx("span",{className:"text-[10px] uppercase text-slate-500 font-semibold",children:e.subtotal}),S.jsx("span",{className:"text-sm font-mono font-bold text-slate-200",children:bt(p.totalSeconds)})]})]},d.id||u)})})]})]})]})},a0=({tag:t,className:e="w-6 h-4"})=>{switch(t){case"es-ES":return S.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[S.jsx("rect",{width:"36",height:"24",fill:"#AA151B"}),S.jsx("rect",{y:"6",width:"36",height:"12",fill:"#F1BF00"}),S.jsxs("g",{transform:"translate(8, 8)",children:[S.jsx("rect",{x:"0",y:"1.5",width:"1",height:"5.5",fill:"#d4af37"}),S.jsx("rect",{x:"6",y:"1.5",width:"1",height:"5.5",fill:"#d4af37"}),S.jsx("rect",{x:"1.5",y:"1.5",width:"4",height:"5",rx:"1",fill:"#AA151B",stroke:"#d4af37",strokeWidth:"0.6"}),S.jsx("rect",{x:"3.5",y:"1.5",width:"2",height:"2.5",fill:"#F1BF00"}),S.jsx("circle",{cx:"3.5",cy:"0.8",r:"1.1",fill:"#AA151B"}),S.jsx("circle",{cx:"3.5",cy:"4",r:"0.8",fill:"#003399"})]})]});case"es-MX":return S.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[S.jsx("rect",{width:"12",height:"24",fill:"#006847"}),S.jsx("rect",{x:"12",width:"12",height:"24",fill:"#FFFFFF"}),S.jsx("rect",{x:"24",width:"12",height:"24",fill:"#CE1126"}),S.jsx("circle",{cx:"18",cy:"12",r:"2.7",fill:"#784421"}),S.jsx("path",{d:"M15.4 13.6 A 3.2 3.2 0 0 0 20.6 13.6",fill:"none",stroke:"#006847",strokeWidth:"1"}),S.jsx("circle",{cx:"18",cy:"11.6",r:"1.1",fill:"#d4af37"})]});case"en-US":return S.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[S.jsx("rect",{width:"36",height:"24",fill:"#FFFFFF"}),[0,2,4,6,8,10,12].map(n=>S.jsx("rect",{y:n*24/13,width:"36",height:24/13,fill:"#B22234"},n)),S.jsx("rect",{width:"15.5",height:24*7/13,fill:"#3C3B6E"}),[2.5,5.5,8.5,11.5,13.8].map(n=>[2.4,5.4,8.4,10.8].map(i=>S.jsx("circle",{cx:n,cy:i,r:"0.65",fill:"#FFFFFF"},`${n}-${i}`)))]});case"pt-BR":return S.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[S.jsx("rect",{width:"36",height:"24",fill:"#009739"}),S.jsx("polygon",{points:"18,2.5 33,12 18,21.5 3,12",fill:"#FEDD00"}),S.jsx("circle",{cx:"18",cy:"12",r:"5.5",fill:"#012169"}),S.jsx("path",{d:"M12.7 10.6 Q 18 8.8 23.3 13.1",fill:"none",stroke:"#FFFFFF",strokeWidth:"1.5"})]});case"fr-FR":return S.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[S.jsx("rect",{width:"12",height:"24",fill:"#002395"}),S.jsx("rect",{x:"12",width:"12",height:"24",fill:"#FFFFFF"}),S.jsx("rect",{x:"24",width:"12",height:"24",fill:"#ED2939"})]});case"de-DE":return S.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[S.jsx("rect",{width:"36",height:"8",fill:"#000000"}),S.jsx("rect",{y:"8",width:"36",height:"8",fill:"#DD0000"}),S.jsx("rect",{y:"16",width:"36",height:"8",fill:"#FFCE00"})]});case"it-IT":return S.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[S.jsx("rect",{width:"12",height:"24",fill:"#009246"}),S.jsx("rect",{x:"12",width:"12",height:"24",fill:"#FFFFFF"}),S.jsx("rect",{x:"24",width:"12",height:"24",fill:"#CE2B37"})]});case"SYSTEM":default:return S.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 shrink-0","aria-hidden":"true",children:[S.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"#0284c7"}),S.jsx("path",{d:"M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",fill:"none",stroke:"#7dd3fc",strokeWidth:"1.6"}),S.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5"})]})}};function QT(t,e){var n;if(t&&t!=="SYSTEM")return t;switch(e){case"es":{try{if((((n=Intl.DateTimeFormat().resolvedOptions().timeZone)==null?void 0:n.toLowerCase())||"").startsWith("america/"))return"es-MX";const r=(Intl.DateTimeFormat().resolvedOptions().locale||"").toLowerCase();if(r.includes("-es"))return"es-ES";if(r.startsWith("es-"))return"es-MX"}catch{}return"es-ES"}case"pt":return"pt-BR";case"fr":return"fr-FR";case"de":return"de-DE";case"it":return"it-IT";case"en":default:return"en-US"}}const e2=({langTag:t,resolvedLangKey:e,label:n="Idioma",systemLanguageName:i,systemLanguageDesc:r,onChangeLang:s})=>{const[a,o]=Be.useState(!1),c=Be.useRef(null);Be.useEffect(()=>{if(!a)return;const u=m=>{c.current&&!c.current.contains(m.target)&&o(!1)},p=m=>{m.key==="Escape"&&o(!1)};return document.addEventListener("mousedown",u),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("keydown",p)}},[a]);const l=eu.find(u=>u.tag===t)||eu[0],f=e.toUpperCase(),d=QT(l.tag,e);return S.jsxs("div",{ref:c,className:"relative",children:[S.jsxs("button",{type:"button",onClick:()=>o(u=>!u),title:n,"aria-label":n,"aria-expanded":a,className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 text-xs font-bold shadow-sm transition cursor-pointer",children:[S.jsx(sm,{size:15,className:"text-emerald-400 shrink-0"}),S.jsx(a0,{tag:d,className:"w-5 h-3.5"}),S.jsx("span",{className:"font-mono tracking-wide",children:f}),S.jsx("span",{className:"text-[10px] text-slate-400",children:"▾"})]}),a&&S.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden",children:[S.jsxs("div",{className:"px-4 py-2 border-b border-slate-800 text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5",children:[S.jsx(sm,{size:14,className:"text-emerald-400"}),S.jsx("span",{children:n})]}),S.jsx("div",{className:"max-h-80 overflow-y-auto p-1.5 space-y-1",children:eu.map(u=>{const p=u.tag===l.tag,m=u.tag==="SYSTEM"&&i?i:u.displayName,v=u.tag==="SYSTEM"&&r?r:u.localeName;return S.jsx("button",{type:"button",onClick:()=>{s(u.tag),o(!1)},className:`w-full px-3 py-2.5 rounded-xl text-left flex items-center justify-between gap-2.5 transition cursor-pointer border ${p?"bg-emerald-500/15 border-emerald-500/60 text-white":"bg-slate-950/40 border-slate-800/80 text-slate-200 hover:bg-slate-800/80 hover:border-slate-700"}`,children:S.jsxs("span",{className:"flex items-center gap-3 min-w-0",children:[S.jsx("span",{className:`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${p?"border-emerald-400":"border-slate-500"}`,children:p&&S.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})}),S.jsx("span",{className:"w-7 flex items-center justify-center shrink-0",children:S.jsx(a0,{tag:u.tag,className:"w-6 h-4"})}),S.jsxs("span",{className:"flex flex-col min-w-0",children:[S.jsx("span",{className:`text-xs truncate ${p?"font-bold text-emerald-300":"font-medium text-slate-100"}`,children:m}),S.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:v})]})]})},u.tag)})})]})]})},t2=()=>{const[t,e]=Be.useState(()=>tm()),[n,i]=Be.useState(!1),[r,s]=Be.useState(null),[a,o]=Be.useState("welcome"),[c,l]=Be.useState(()=>localStorage.getItem("timer_lang_tag")||"SYSTEM"),[f,d]=Be.useState(null),u=Be.useRef(null),p=Be.useRef("preview"),m=Be.useMemo(()=>Ry(c),[c]),v=Oi[m]||Oi.es,x=D=>{localStorage.setItem("timer_lang_tag",D),l(D)},h=D=>{var z;const O=(((z=D.routines[0])==null?void 0:z.name)||"rutina").toLowerCase().replace(/\s+/g,"_")||"rutina",X=new Blob([JSON.stringify(D,null,2)],{type:"application/octet-stream"}),k=URL.createObjectURL(X),G=document.createElement("a");G.href=k,G.download=`${O}.wkt`,G.click(),URL.revokeObjectURL(k)},g=async D=>{var z;const X=`${(((z=D.routines[0])==null?void 0:z.name)||"rutina").trim().toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina"}.wkt`,k=JSON.stringify(D,null,2),G=window;if(typeof G.showSaveFilePicker=="function")try{const V=await G.showSaveFilePicker({suggestedName:X,types:[{description:"Rutina de entrenamiento (.wkt)",accept:{"application/json":[".wkt"],"application/octet-stream":[".wkt"]}}]}),N=await V.createWritable();return await N.write(k),await N.close(),f&&d(J=>J?{...J,wktSavedName:V.name}:null),!0}catch(V){if((V==null?void 0:V.name)==="AbortError")return!1}return h(D),f&&d(V=>V?{...V,wktSavedName:X}:null),!0},y=()=>{f!=null&&f.cardObjectUrl&&URL.revokeObjectURL(f.cardObjectUrl),d(null)};Be.useEffect(()=>{const D=new URLSearchParams(window.location.search),R=D.get("wkt"),O=D.get("mode"),X=D.get("dl");if(R){const k=Ey(R);k&&(e(k),i(!0),o(O==="edit"?"editor":"preview"),X==="1"&&setTimeout(()=>h(k),400))}},[]);const E=D=>{var R;p.current=D,s(null),(R=u.current)==null||R.click()},b=async D=>{var O;const R=(O=D.target.files)==null?void 0:O[0];if(D.target.value="",!!R)try{const X=await R.text(),k=JSON.parse(X);if(!Ex(k)){s(v.invalidWktErr||"El archivo seleccionado no tiene un formato .wkt válido.");return}const G=wx(k);e(G),i(!1),s(null),o(p.current)}catch{s(v.readWktErr||"No se pudo leer el archivo .wkt seleccionado.")}},T=()=>{window.location.href=bx(t)},_=()=>{g(t)},M=D=>{const R=D.routines[0],O=$a(R),X=wy(O.totalSeconds),k=R.exercises.length,G=v.exercisesWord||"ejercicios";return`🔥 ¡${R.name}! • ⏱️ ${X} • 💪 ${k} ${G}
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`},P=async(D=t)=>{const R=D.routines[0],O=R.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",X=JSON.stringify(D,null,2),k=new File([X],`${O}.wkt`,{type:"application/octet-stream"}),G=M(D),z=await Ax(D,v);if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent||"")&&z&&typeof navigator.canShare=="function"){const Me=new File([z],`${O}_card.png`,{type:"image/png"});if(navigator.canShare({files:[Me,k]}))try{await navigator.share({title:R.name,text:G,files:[Me,k]});return}catch(W){if((W==null?void 0:W.name)==="AbortError")return}}let N=!1;if(z&&navigator.clipboard&&typeof ClipboardItem<"u")try{await navigator.clipboard.write([new ClipboardItem({"image/png":z})]),N=!0}catch{N=!1}f!=null&&f.cardObjectUrl&&URL.revokeObjectURL(f.cardObjectUrl);const J=z?URL.createObjectURL(z):null;d({workout:D,safeName:O,messageText:G,cardBlob:z,cardObjectUrl:J,copiedToClipboard:N,wktSavedName:null})},C=async()=>{if(!(!(f!=null&&f.cardBlob)||!navigator.clipboard||typeof ClipboardItem>"u"))try{await navigator.clipboard.write([new ClipboardItem({"image/png":f.cardBlob})]),d(D=>D?{...D,copiedToClipboard:!0}:null)}catch{}},I=async()=>{if(!(f!=null&&f.cardBlob))return;const D=`${f.safeName}_card.png`,R=window;if(typeof R.showSaveFilePicker=="function")try{const G=await(await R.showSaveFilePicker({suggestedName:D,types:[{description:"Imagen PNG (.png)",accept:{"image/png":[".png"]}}]})).createWritable();await G.write(f.cardBlob),await G.close();return}catch(k){if((k==null?void 0:k.name)==="AbortError")return}const O=URL.createObjectURL(f.cardBlob),X=document.createElement("a");X.href=O,X.download=D,X.click(),URL.revokeObjectURL(O)},U=()=>{if(!f)return;const D=`https://api.whatsapp.com/send?text=${encodeURIComponent(f.messageText)}`;window.open(D,"_blank")};return S.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950",children:[S.jsx("input",{ref:u,type:"file",accept:".wkt,.json,application/json",onChange:b,className:"hidden"}),S.jsxs("header",{className:"max-w-4xl mx-auto w-full px-4 pt-3 flex items-center justify-between gap-2",children:[S.jsx("div",{children:a==="editor"&&S.jsx("button",{type:"button",onClick:()=>o("welcome"),className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",children:S.jsx("span",{children:v.homeBtn||"🏠 Inicio"})})}),S.jsx(e2,{langTag:c,resolvedLangKey:m,label:v.languageLabel||"Idioma",systemLanguageName:v.systemLanguage,systemLanguageDesc:v.systemLanguageDesc,onChangeLang:x})]}),n&&S.jsxs("div",{className:"bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 py-2 px-4 mt-2 flex items-center justify-center gap-3 text-xs font-medium",children:[S.jsx("span",{children:v.sharedBanner||"✨ Rutina cargada desde enlace compartido."}),S.jsx("button",{type:"button",onClick:()=>o(a==="preview"?"editor":"preview"),className:"px-2.5 py-0.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold transition cursor-pointer",children:a==="preview"?v.editRoutineBtn:v.previewModeBtn})]}),S.jsx("main",{className:"flex-1",children:a==="welcome"?S.jsx("div",{className:"max-w-2xl mx-auto px-4 py-8",children:S.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center",children:[S.jsx("div",{className:"flex justify-center mb-4",children:S.jsx(jl,{className:"w-20 h-20 shadow-xl rounded-2xl"})}),S.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:v.appTitle}),S.jsx("p",{className:"text-sm sm:text-base text-slate-400 mt-2 max-w-md mx-auto",children:v.welcomeDesc||"Diseña, personaliza y comparte tus rutinas de entrenamiento cronometradas (.wkt)"}),S.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7",children:[S.jsx("button",{type:"button",onClick:()=>{e(tm()),s(null),o("editor")},className:"w-full py-4 px-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition cursor-pointer",children:v.newRoutineBtn||"+ Nueva Rutina"}),S.jsxs("button",{type:"button",onClick:()=>E("preview"),className:"w-full py-4 px-5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold rounded-2xl text-base transition flex items-center justify-center gap-2 cursor-pointer",children:[S.jsx(Tx,{size:20}),S.jsx("span",{children:v.openWktBtn||"Abrir archivo .wkt"})]})]}),S.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"mt-3 w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[S.jsx(jl,{className:"w-6 h-6 shrink-0"}),S.jsx("span",{children:v.downloadApkBtn||"Descargar App Android (.apk)"})]}),r&&S.jsxs("p",{className:"mt-3 text-xs text-rose-400 font-semibold",children:["⚠️ ",r]}),S.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-800/90 text-left",children:[S.jsx("h2",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3",children:v.examplesTitle||"⚡ O explora una rutina de ejemplo:"}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:fy.map(D=>{const R=D.workout.routines[0],O=$a(R);return S.jsxs("button",{type:"button",onClick:()=>{e(JSON.parse(JSON.stringify(D.workout))),o("preview")},className:"text-left bg-slate-950/90 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 transition cursor-pointer",children:[S.jsxs("span",{className:"text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:[D.badgeIcon," ",D.workout.category]}),S.jsx("h3",{className:"text-base font-black text-white mt-1.5",children:R.name}),S.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:["⏱️ ",bt(O.totalSeconds)," • 💪"," ",R.exercises.length," ",v.exercisesWord||"ejercicios"]})]},D.id)})})]})]})}):a==="preview"?S.jsx(JT,{workout:t,t:v,onOpenInApp:T,onEditInWeb:()=>o("editor"),onDownloadWkt:_,onShareWhatsApp:()=>void P(t),onGoHome:()=>o("welcome")}):S.jsx(ZT,{initialWorkout:t,t:v,onWorkoutChange:e,onSaveFile:g,onOpenFile:()=>E("editor"),onPreviewRoutine:()=>o("preview"),onShareWhatsApp:P})}),f&&S.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:y,children:S.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden",onClick:D=>D.stopPropagation(),children:[S.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx("span",{className:"w-8 h-8 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center",children:S.jsx(Xl,{className:"w-4 h-4"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-base font-black text-white",children:v.shareWhatsApp}),S.jsx("p",{className:"text-xs text-slate-400",children:"Tarjeta visual + archivo .wkt + mensaje con iconos"})]})]}),S.jsx("button",{type:"button",onClick:y,className:"w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer",children:"×"})]}),S.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1",children:[f.cardObjectUrl&&S.jsxs("div",{className:"space-y-2",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider text-emerald-400",children:"1. Tarjeta visual de la rutina"}),f.copiedToClipboard&&S.jsx("span",{className:"text-[11px] font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full",children:"✓ Copiada al portapapeles (Ctrl + V en WhatsApp)"})]}),S.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-2.5 flex justify-center max-h-64 overflow-y-auto",children:S.jsx("img",{src:f.cardObjectUrl,alt:"Tarjeta de rutina",className:"max-w-full h-auto rounded-xl border border-slate-800"})}),S.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[S.jsx("button",{type:"button",onClick:C,className:"py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer",children:"📋 Copiar imagen al portapapeles"}),S.jsx("button",{type:"button",onClick:I,className:"py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer",children:"🖼️ Guardar tarjeta (.png)..."})]})]}),S.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 space-y-2",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider text-cyan-400",children:"2. Archivo de rutina (.wkt) para adjuntar"}),f.wktSavedName&&S.jsxs("span",{className:"text-[11px] font-bold text-cyan-300",children:["✓ Guardado: ",f.wktSavedName]})]}),S.jsxs("button",{type:"button",onClick:()=>void g(f.workout),className:"w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs border border-cyan-500/30 transition flex items-center justify-center gap-2 cursor-pointer",children:[S.jsx(Rx,{size:15}),S.jsxs("span",{children:['Elegir dónde guardar "',f.safeName,'.wkt"...']})]})]}),S.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 space-y-2",children:[S.jsx("span",{className:"block text-xs font-extrabold uppercase tracking-wider text-slate-400",children:"3. Mensaje para WhatsApp (con iconos)"}),S.jsx("pre",{className:"text-xs text-slate-200 whitespace-pre-wrap font-sans bg-slate-900/90 border border-slate-800 rounded-xl p-3 leading-relaxed",children:f.messageText})]}),S.jsxs("button",{type:"button",onClick:U,className:"w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-sm shadow-lg shadow-[#25D366]/20 transition flex items-center justify-center gap-2 cursor-pointer",children:[S.jsx(Xl,{className:"w-5 h-5"}),S.jsx("span",{children:"Abrir WhatsApp con este mensaje"})]})]})]})}),S.jsxs("footer",{className:"border-t border-slate-900 py-4 text-center text-xs text-slate-500",children:[v.appTitle," • ",v.subtitle]})]})};_x(document.getElementById("root")).render(S.jsx(Be.StrictMode,{children:S.jsx(t2,{})}));
