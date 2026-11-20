(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var n0={exports:{}},ec={},i0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),Uv=Symbol.for("react.portal"),Ov=Symbol.for("react.fragment"),kv=Symbol.for("react.strict_mode"),Bv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Gv=Symbol.for("react.forward_ref"),Vv=Symbol.for("react.suspense"),Wv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),Vh=Symbol.iterator;function jv(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var r0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,a0={};function qs(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||r0}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o0(){}o0.prototype=qs.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||r0}var xf=gf.prototype=new o0;xf.constructor=gf;s0(xf,qs.prototype);xf.isPureReactComponent=!0;var Wh=Array.isArray,l0=Object.prototype.hasOwnProperty,vf={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var o=Array(l),c=0;c<l;c++)o[c]=arguments[c+2];r.children=o}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:eo,type:t,key:s,ref:a,props:r,_owner:vf.current}}function Yv(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function qv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qv(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case eo:case Uv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ac(a,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(_f(r)&&(r=Yv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Wh(t))for(var l=0;l<t.length;l++){s=t[l];var o=i+Ac(s,l);a+=tl(s,e,n,o,r)}else if(o=jv(t),typeof o=="function")for(t=o.call(t),l=0;!(s=t.next()).done;)s=s.value,o=i+Ac(s,l++),a+=tl(s,e,n,o,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $v(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},nl={transition:null},Kv={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:vf};function d0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=qs;je.Fragment=Ov;je.Profiler=Bv;je.PureComponent=gf;je.StrictMode=kv;je.Suspense=Vv;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv;je.act=d0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=s0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(o in e)l0.call(e,o)&&!c0.hasOwnProperty(o)&&(i[o]=e[o]===void 0&&l!==void 0?l[o]:e[o])}var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){l=Array(o);for(var c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:eo,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:Hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zv,_context:t},t.Consumer=t};je.createElement=u0;je.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Gv,render:t}};je.isValidElement=_f;je.lazy=function(t){return{$$typeof:Xv,_payload:{_status:-1,_result:t},_init:$v}};je.memo=function(t,e){return{$$typeof:Wv,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};je.unstable_act=d0;je.useCallback=function(t,e){return pn.current.useCallback(t,e)};je.useContext=function(t){return pn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};je.useEffect=function(t,e){return pn.current.useEffect(t,e)};je.useId=function(){return pn.current.useId()};je.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return pn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};je.useRef=function(t){return pn.current.useRef(t)};je.useState=function(t){return pn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return pn.current.useTransition()};je.version="18.3.1";i0.exports=je;var We=i0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=We,Jv=Symbol.for("react.element"),Qv=Symbol.for("react.fragment"),e_=Object.prototype.hasOwnProperty,t_=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n_={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)e_.call(e,i)&&!n_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Jv,type:t,key:s,ref:a,props:r,_owner:t_.current}}ec.Fragment=Qv;ec.jsx=f0;ec.jsxs=f0;n0.exports=ec;var A=n0.exports,h0={exports:{}},Nn={},p0={exports:{}},m0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,k){var C=H.length;H.push(k);e:for(;0<C;){var V=C-1>>>1,ie=H[V];if(0<r(ie,k))H[V]=k,H[C]=ie,C=V;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var k=H[0],C=H.pop();if(C!==k){H[0]=C;e:for(var V=0,ie=H.length,Me=ie>>>1;V<Me;){var $=2*(V+1)-1,ne=H[$],oe=$+1,ve=H[oe];if(0>r(ne,C))oe<ie&&0>r(ve,ne)?(H[V]=ve,H[oe]=C,V=oe):(H[V]=ne,H[$]=C,V=$);else if(oe<ie&&0>r(ve,C))H[V]=ve,H[oe]=C,V=oe;else break e}}return k}function r(H,k){var C=H.sortIndex-k.sortIndex;return C!==0?C:H.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var o=[],c=[],h=1,f=null,u=3,p=!1,g=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=H)i(c),k.sortIndex=k.expirationTime,e(o,k);else break;k=n(c)}}function S(H){if(_=!1,y(H),!g)if(n(o)!==null)g=!0,q(E);else{var k=n(c);k!==null&&z(S,k.startTime-H)}}function E(H,k){g=!1,_&&(_=!1,d(M),M=-1),p=!0;var C=u;try{for(y(k),f=n(o);f!==null&&(!(f.expirationTime>k)||H&&!D());){var V=f.callback;if(typeof V=="function"){f.callback=null,u=f.priorityLevel;var ie=V(f.expirationTime<=k);k=t.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(o)&&i(o),y(k)}else i(o);f=n(o)}if(f!==null)var Me=!0;else{var $=n(c);$!==null&&z(S,$.startTime-k),Me=!1}return Me}finally{f=null,u=C,p=!1}}var w=!1,v=null,M=-1,L=5,R=-1;function D(){return!(t.unstable_now()-R<L)}function I(){if(v!==null){var H=t.unstable_now();R=H;var k=!0;try{k=v(!0,H)}finally{k?F():(w=!1,v=null)}}else w=!1}var F;if(typeof m=="function")F=function(){m(I)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,G=N.port2;N.port1.onmessage=I,F=function(){G.postMessage(null)}}else F=function(){x(I,0)};function q(H){v=H,w||(w=!0,F())}function z(H,k){M=x(function(){H(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,q(E))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(o)},t.unstable_next=function(H){switch(u){case 1:case 2:case 3:var k=3;break;default:k=u}var C=u;u=k;try{return H()}finally{u=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,k){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var C=u;u=H;try{return k()}finally{u=C}},t.unstable_scheduleCallback=function(H,k,C){var V=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?V+C:V):C=V,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=C+ie,H={id:h++,callback:k,priorityLevel:H,startTime:C,expirationTime:ie,sortIndex:-1},C>V?(H.sortIndex=C,e(c,H),n(o)===null&&H===n(c)&&(_?(d(M),M=-1):_=!0,z(S,C-V))):(H.sortIndex=ie,e(o,H),g||p||(g=!0,q(E))),H},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(H){var k=u;return function(){var C=u;u=k;try{return H.apply(this,arguments)}finally{u=C}}}})(m0);p0.exports=m0;var i_=p0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_=We,Ln=i_;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,Pa={};function Qr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Pa[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=Object.prototype.hasOwnProperty,s_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jh={},Yh={};function a_(t){return Iu.call(Yh,t)?!0:Iu.call(jh,t)?!1:s_.test(t)?Yh[t]=!0:(jh[t]=!0,!1)}function o_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l_(t,e,n,i){if(e===null||typeof e>"u"||o_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sf=/[\-:]([a-z])/g;function yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sf,yf);Qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sf,yf);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sf,yf);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mf(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l_(e,n,r,i)&&(n=null),i||r===null?a_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=r_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),xs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),qh=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Tc;function ha(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Rc=!1;function Cc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var o=`
`+r[a].replace(" at new "," at ");return t.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",t.displayName)),o}while(1<=a&&0<=l);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function c_(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case xs:return"Portal";case Fu:return"Profiler";case Ef:return"StrictMode";case Uu:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case x0:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bf:return e=t.displayName||null,e!==null?e:ku(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return ku(t(e))}catch{}}return null}function u_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d_(t){var e=S0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=d_(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=S0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $h(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(t,e){e=e.checked,e!=null&&Mf(t,"checked",e,!1)}function zu(t,e){M0(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(pa(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function E0(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function w0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?w0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,b0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f_=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){f_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function A0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function T0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=A0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var h_=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(h_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Ps=null,Ls=null;function Qh(t){if(t=io(t)){if(typeof Yu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=sc(e),Yu(t.stateNode,t.type,e))}}function R0(t){Ps?Ls?Ls.push(t):Ls=[t]:Ps=t}function C0(){if(Ps){var t=Ps,e=Ls;if(Ls=Ps=null,Qh(t),e)for(t=0;t<e.length;t++)Qh(e[t])}}function P0(t,e){return t(e)}function L0(){}var Pc=!1;function N0(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return P0(t,e,n)}finally{Pc=!1,(Ps!==null||Ls!==null)&&(L0(),C0())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var i=sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var qu=!1;if(zi)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){qu=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{qu=!1}function p_(t,e,n,i,r,s,a,l,o){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ya=!1,Ml=null,El=!1,$u=null,m_={onError:function(t){ya=!0,Ml=t}};function g_(t,e,n,i,r,s,a,l,o){ya=!1,Ml=null,p_.apply(m_,arguments)}function x_(t,e,n,i,r,s,a,l,o){if(g_.apply(this,arguments),ya){if(ya){var c=Ml;ya=!1,Ml=null}else throw Error(ae(198));El||(El=!0,$u=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ep(t){if(es(t)!==t)throw Error(ae(188))}function v_(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ep(r),t;if(s===i)return ep(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function I0(t){return t=v_(t),t!==null?F0(t):null}function F0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F0(t);if(e!==null)return e;t=t.sibling}return null}var U0=Ln.unstable_scheduleCallback,tp=Ln.unstable_cancelCallback,__=Ln.unstable_shouldYield,S_=Ln.unstable_requestPaint,Tt=Ln.unstable_now,y_=Ln.unstable_getCurrentPriorityLevel,Tf=Ln.unstable_ImmediatePriority,O0=Ln.unstable_UserBlockingPriority,wl=Ln.unstable_NormalPriority,M_=Ln.unstable_LowPriority,k0=Ln.unstable_IdlePriority,tc=null,_i=null;function E_(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:A_,w_=Math.log,b_=Math.LN2;function A_(t){return t>>>=0,t===0?32:31-(w_(t)/b_|0)|0}var go=64,xo=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=ma(l):(s&=a,s!==0&&(i=ma(s)))}else a=n&~r,a!==0?i=ma(a):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function T_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ri(s),l=1<<a,o=r[a];o===-1?(!(l&n)||l&i)&&(r[a]=T_(l,e)):o<=e&&(t.expiredLanes|=l),s&=~l}}function Ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function B0(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function z0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H0,Cf,G0,V0,W0,Zu=!1,vo=[],fr=null,hr=null,pr=null,Da=new Map,Ia=new Map,rr=[],P_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function na(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=io(e),e!==null&&Cf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function L_(t,e,n,i,r){switch(e){case"focusin":return fr=na(fr,t,e,n,i,r),!0;case"dragenter":return hr=na(hr,t,e,n,i,r),!0;case"mouseover":return pr=na(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,na(Da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ia.set(s,na(Ia.get(s)||null,t,e,n,i,r)),!0}return!1}function X0(t){var e=Or(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=D0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){G0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ju=i,n.target.dispatchEvent(i),ju=null}else return e=io(n),e!==null&&Cf(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){il(t)&&n.delete(e)}function N_(){Zu=!1,fr!==null&&il(fr)&&(fr=null),hr!==null&&il(hr)&&(hr=null),pr!==null&&il(pr)&&(pr=null),Da.forEach(ip),Ia.forEach(ip)}function ia(t,e){t.blockedOn===e&&(t.blockedOn=null,Zu||(Zu=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,N_)))}function Fa(t){function e(r){return ia(r,t)}if(0<vo.length){ia(vo[0],t);for(var n=1;n<vo.length;n++){var i=vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&ia(fr,t),hr!==null&&ia(hr,t),pr!==null&&ia(pr,t),Da.forEach(e),Ia.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&rr.shift()}var Ns=Wi.ReactCurrentBatchConfig,Al=!0;function D_(t,e,n,i){var r=at,s=Ns.transition;Ns.transition=null;try{at=1,Pf(t,e,n,i)}finally{at=r,Ns.transition=s}}function I_(t,e,n,i){var r=at,s=Ns.transition;Ns.transition=null;try{at=4,Pf(t,e,n,i)}finally{at=r,Ns.transition=s}}function Pf(t,e,n,i){if(Al){var r=Ju(t,e,n,i);if(r===null)Hc(t,e,i,Tl,n),np(t,i);else if(L_(r,t,e,n,i))i.stopPropagation();else if(np(t,i),e&4&&-1<P_.indexOf(t)){for(;r!==null;){var s=io(r);if(s!==null&&H0(s),s=Ju(t,e,n,i),s===null&&Hc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Tl=null;function Ju(t,e,n,i){if(Tl=null,t=Af(i),t=Or(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function j0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y_()){case Tf:return 1;case O0:return 4;case wl:case M_:return 16;case k0:return 536870912;default:return 16}default:return 16}}var or=null,Lf=null,rl=null;function Y0(){if(rl)return rl;var t,e=Lf,n=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function rp(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:rp,this.isPropagationStopped=rp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=Dn($s),no=wt({},$s,{view:0,detail:0}),F_=Dn(no),Nc,Dc,ra,nc=wt({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Nc=t.screenX-ra.screenX,Dc=t.screenY-ra.screenY):Dc=Nc=0,ra=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),sp=Dn(nc),U_=wt({},nc,{dataTransfer:0}),O_=Dn(U_),k_=wt({},no,{relatedTarget:0}),Ic=Dn(k_),B_=wt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=Dn(B_),H_=wt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G_=Dn(H_),V_=wt({},$s,{data:0}),ap=Dn(V_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j_[t])?!!e[t]:!1}function Df(){return Y_}var q_=wt({},no,{key:function(t){if(t.key){var e=W_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=Dn(q_),K_=wt({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Dn(K_),Z_=wt({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),J_=Dn(Z_),Q_=wt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=Dn(Q_),tS=wt({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Dn(tS),iS=[9,13,27,32],If=zi&&"CompositionEvent"in window,Ma=null;zi&&"documentMode"in document&&(Ma=document.documentMode);var rS=zi&&"TextEvent"in window&&!Ma,q0=zi&&(!If||Ma&&8<Ma&&11>=Ma),lp=" ",cp=!1;function $0(t,e){switch(t){case"keyup":return iS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function sS(t,e){switch(t){case"compositionend":return K0(e);case"keypress":return e.which!==32?null:(cp=!0,lp);case"textInput":return t=e.data,t===lp&&cp?null:t;default:return null}}function aS(t,e){if(_s)return t==="compositionend"||!If&&$0(t,e)?(t=Y0(),rl=Lf=or=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return q0&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function Z0(t,e,n,i){R0(i),e=Rl(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,Ua=null;function lS(t){lg(t,0)}function ic(t){var e=Ms(t);if(y0(e))return t}function cS(t,e){if(t==="change")return e}var J0=!1;if(zi){var Fc;if(zi){var Uc="oninput"in document;if(!Uc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Uc=typeof dp.oninput=="function"}Fc=Uc}else Fc=!1;J0=Fc&&(!document.documentMode||9<document.documentMode)}function fp(){Ea&&(Ea.detachEvent("onpropertychange",Q0),Ua=Ea=null)}function Q0(t){if(t.propertyName==="value"&&ic(Ua)){var e=[];Z0(e,Ua,t,Af(t)),N0(lS,e)}}function uS(t,e,n){t==="focusin"?(fp(),Ea=e,Ua=n,Ea.attachEvent("onpropertychange",Q0)):t==="focusout"&&fp()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(Ua)}function fS(t,e){if(t==="click")return ic(e)}function hS(t,e){if(t==="input"||t==="change")return ic(e)}function pS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:pS;function Oa(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Iu.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var n=hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function eg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tg(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mS(t){var e=tg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eg(n.ownerDocument.documentElement,n)){if(i!==null&&Ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pp(n,s);var a=pp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gS=zi&&"documentMode"in document&&11>=document.documentMode,Ss=null,Qu=null,wa=null,ed=!1;function mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||Ss==null||Ss!==yl(i)||(i=Ss,"selectionStart"in i&&Ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&Oa(wa,i)||(wa=i,i=Rl(Qu,"onSelect"),0<i.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function So(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Oc={},ng={};zi&&(ng=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function rc(t){if(Oc[t])return Oc[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ng)return Oc[t]=e[n];return t}var ig=rc("animationend"),rg=rc("animationiteration"),sg=rc("animationstart"),ag=rc("transitionend"),og=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){og.set(t,e),Qr(e,[t])}for(var kc=0;kc<gp.length;kc++){var Bc=gp[kc],xS=Bc.toLowerCase(),vS=Bc[0].toUpperCase()+Bc.slice(1);br(xS,"on"+vS)}br(ig,"onAnimationEnd");br(rg,"onAnimationIteration");br(sg,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(ag,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,x_(i,e,void 0,t),t.currentTarget=null}function lg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==s&&r.isPropagationStopped())break e;xp(r,l,c),s=o}else for(a=0;a<i.length;a++){if(l=i[a],o=l.instance,c=l.currentTarget,l=l.listener,o!==s&&r.isPropagationStopped())break e;xp(r,l,c),s=o}}}if(El)throw t=$u,El=!1,$u=null,t}function ft(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||(cg(e,t,2,!1),n.add(i))}function zc(t,e,n){var i=0;e&&(i|=4),cg(n,t,i,e)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[yo]){t[yo]=!0,g0.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yo]||(e[yo]=!0,zc("selectionchange",!1,e))}}function cg(t,e,n,i){switch(j0(e)){case 1:var r=D_;break;case 4:r=I_;break;default:r=Pf}n=r.bind(null,e,n,t),r=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Or(l),a===null)return;if(o=a.tag,o===5||o===6){i=s=a;continue e}l=l.parentNode}}i=i.return}N0(function(){var c=s,h=Af(n),f=[];e:{var u=og.get(t);if(u!==void 0){var p=Nf,g=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":p=$_;break;case"focusin":g="focus",p=Ic;break;case"focusout":g="blur",p=Ic;break;case"beforeblur":case"afterblur":p=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=J_;break;case ig:case rg:case sg:p=z_;break;case ag:p=eS;break;case"scroll":p=F_;break;case"wheel":p=nS;break;case"copy":case"cut":case"paste":p=G_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=op}var _=(e&4)!==0,x=!_&&t==="scroll",d=_?u!==null?u+"Capture":null:u;_=[];for(var m=c,y;m!==null;){y=m;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,d!==null&&(S=Na(m,d),S!=null&&_.push(Ba(m,S,y)))),x)break;m=m.return}0<_.length&&(u=new p(u,g,null,n,h),f.push({event:u,listeners:_}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==ju&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[Hi]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Or(g):null,g!==null&&(x=es(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=sp,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=op,S="onPointerLeave",d="onPointerEnter",m="pointer"),x=p==null?u:Ms(p),y=g==null?u:Ms(g),u=new _(S,m+"leave",p,n,h),u.target=x,u.relatedTarget=y,S=null,Or(h)===c&&(_=new _(d,m+"enter",g,n,h),_.target=y,_.relatedTarget=x,S=_),x=S,p&&g)t:{for(_=p,d=g,m=0,y=_;y;y=ns(y))m++;for(y=0,S=d;S;S=ns(S))y++;for(;0<m-y;)_=ns(_),m--;for(;0<y-m;)d=ns(d),y--;for(;m--;){if(_===d||d!==null&&_===d.alternate)break t;_=ns(_),d=ns(d)}_=null}else _=null;p!==null&&vp(f,u,p,_,!1),g!==null&&x!==null&&vp(f,x,g,_,!0)}}e:{if(u=c?Ms(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=cS;else if(up(u))if(J0)E=hS;else{E=dS;var w=uS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=fS);if(E&&(E=E(t,c))){Z0(f,E,n,h);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Hu(u,"number",u.value)}switch(w=c?Ms(c):window,t){case"focusin":(up(w)||w.contentEditable==="true")&&(Ss=w,Qu=c,wa=null);break;case"focusout":wa=Qu=Ss=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,mp(f,n,h);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":mp(f,n,h)}var v;if(If)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else _s?$0(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(q0&&n.locale!=="ko"&&(_s||M!=="onCompositionStart"?M==="onCompositionEnd"&&_s&&(v=Y0()):(or=h,Lf="value"in or?or.value:or.textContent,_s=!0)),w=Rl(c,M),0<w.length&&(M=new ap(M,t,null,n,h),f.push({event:M,listeners:w}),v?M.data=v:(v=K0(n),v!==null&&(M.data=v)))),(v=rS?sS(t,n):aS(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(h=new ap("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=v))}lg(f,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Na(t,n),s!=null&&i.unshift(Ba(t,s,r)),s=Na(t,e),s!=null&&i.push(Ba(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,o=l.alternate,c=l.stateNode;if(o!==null&&o===i)break;l.tag===5&&c!==null&&(l=c,r?(o=Na(n,s),o!=null&&a.unshift(Ba(n,o,l))):r||(o=Na(n,s),o!=null&&a.push(Ba(n,o,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var SS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function _p(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(yS,"")}function Mo(t,e,n){if(e=_p(e),_p(t)!==e&&n)throw Error(ae(425))}function Cl(){}var td=null,nd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(t){return Sp.resolve(null).then(t).catch(wS)}:rd;function wS(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fa(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),mi="__reactFiber$"+Ks,za="__reactProps$"+Ks,Hi="__reactContainer$"+Ks,sd="__reactEvents$"+Ks,bS="__reactListeners$"+Ks,AS="__reactHandles$"+Ks;function Or(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[mi])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[mi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function sc(t){return t[za]||null}var ad=[],Es=-1;function Ar(t){return{current:t}}function ht(t){0>Es||(t.current=ad[Es],ad[Es]=null,Es--)}function dt(t,e){Es++,ad[Es]=t.current,t.current=e}var Mr={},ln=Ar(Mr),Sn=Ar(!1),Xr=Mr;function ks(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function Pl(){ht(Sn),ht(ln)}function Mp(t,e,n){if(ln.current!==Mr)throw Error(ae(168));dt(ln,e),dt(Sn,n)}function ug(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,u_(t)||"Unknown",r));return wt({},n,i)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Xr=ln.current,dt(ln,t),dt(Sn,Sn.current),!0}function Ep(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=ug(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,ht(Sn),ht(ln),dt(ln,t)):ht(Sn),dt(Sn,n)}var Ni=null,ac=!1,Vc=!1;function dg(t){Ni===null?Ni=[t]:Ni.push(t)}function TS(t){ac=!0,dg(t)}function Tr(){if(!Vc&&Ni!==null){Vc=!0;var t=0,e=at;try{var n=Ni;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,ac=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),U0(Tf,Tr),r}finally{at=e,Vc=!1}}return null}var ws=[],bs=0,Nl=null,Dl=0,Hn=[],Gn=0,jr=null,Di=1,Ii="";function Fr(t,e){ws[bs++]=Dl,ws[bs++]=Nl,Nl=t,Dl=e}function fg(t,e,n){Hn[Gn++]=Di,Hn[Gn++]=Ii,Hn[Gn++]=jr,jr=t;var i=Di;t=Ii;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Di=1<<32-ri(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function Uf(t){t.return!==null&&(Fr(t,1),fg(t,1,0))}function Of(t){for(;t===Nl;)Nl=ws[--bs],ws[bs]=null,Dl=ws[--bs],ws[bs]=null;for(;t===jr;)jr=Hn[--Gn],Hn[Gn]=null,Ii=Hn[--Gn],Hn[Gn]=null,Di=Hn[--Gn],Hn[Gn]=null}var Pn=null,Cn=null,gt=!1,ei=null;function hg(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(gt){var e=Cn;if(e){var n=e;if(!wp(t,e)){if(od(t))throw Error(ae(418));e=mr(n.nextSibling);var i=Pn;e&&wp(t,e)?hg(i,n):(t.flags=t.flags&-4097|2,gt=!1,Pn=t)}}else{if(od(t))throw Error(ae(418));t.flags=t.flags&-4097|2,gt=!1,Pn=t}}}function bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Eo(t){if(t!==Pn)return!1;if(!gt)return bp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Cn)){if(od(t))throw pg(),Error(ae(418));for(;e;)hg(t,e),e=mr(e.nextSibling)}if(bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?mr(t.stateNode.nextSibling):null;return!0}function pg(){for(var t=Cn;t;)t=mr(t.nextSibling)}function Bs(){Cn=Pn=null,gt=!1}function kf(t){ei===null?ei=[t]:ei.push(t)}var RS=Wi.ReactCurrentBatchConfig;function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function mg(t){function e(d,m){if(t){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=_r(d,m),d.index=0,d.sibling=null,d}function s(d,m,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=2,m)):(d.flags|=1048576,m)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,m,y,S){return m===null||m.tag!==6?(m=Kc(y,d.mode,S),m.return=d,m):(m=r(m,y),m.return=d,m)}function o(d,m,y,S){var E=y.type;return E===vs?h(d,m,y.props.children,S,y.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===er&&Ap(E)===m.type)?(S=r(m,y.props),S.ref=sa(d,m,y),S.return=d,S):(S=fl(y.type,y.key,y.props,null,d.mode,S),S.ref=sa(d,m,y),S.return=d,S)}function c(d,m,y,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Zc(y,d.mode,S),m.return=d,m):(m=r(m,y.children||[]),m.return=d,m)}function h(d,m,y,S,E){return m===null||m.tag!==7?(m=Gr(y,d.mode,S,E),m.return=d,m):(m=r(m,y),m.return=d,m)}function f(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Kc(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ho:return y=fl(m.type,m.key,m.props,null,d.mode,y),y.ref=sa(d,null,m),y.return=d,y;case xs:return m=Zc(m,d.mode,y),m.return=d,m;case er:var S=m._init;return f(d,S(m._payload),y)}if(pa(m)||ea(m))return m=Gr(m,d.mode,y,null),m.return=d,m;wo(d,m)}return null}function u(d,m,y,S){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:l(d,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:return y.key===E?o(d,m,y,S):null;case xs:return y.key===E?c(d,m,y,S):null;case er:return E=y._init,u(d,m,E(y._payload),S)}if(pa(y)||ea(y))return E!==null?null:h(d,m,y,S,null);wo(d,y)}return null}function p(d,m,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(y)||null,l(m,d,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ho:return d=d.get(S.key===null?y:S.key)||null,o(m,d,S,E);case xs:return d=d.get(S.key===null?y:S.key)||null,c(m,d,S,E);case er:var w=S._init;return p(d,m,y,w(S._payload),E)}if(pa(S)||ea(S))return d=d.get(y)||null,h(m,d,S,E,null);wo(m,S)}return null}function g(d,m,y,S){for(var E=null,w=null,v=m,M=m=0,L=null;v!==null&&M<y.length;M++){v.index>M?(L=v,v=null):L=v.sibling;var R=u(d,v,y[M],S);if(R===null){v===null&&(v=L);break}t&&v&&R.alternate===null&&e(d,v),m=s(R,m,M),w===null?E=R:w.sibling=R,w=R,v=L}if(M===y.length)return n(d,v),gt&&Fr(d,M),E;if(v===null){for(;M<y.length;M++)v=f(d,y[M],S),v!==null&&(m=s(v,m,M),w===null?E=v:w.sibling=v,w=v);return gt&&Fr(d,M),E}for(v=i(d,v);M<y.length;M++)L=p(v,d,M,y[M],S),L!==null&&(t&&L.alternate!==null&&v.delete(L.key===null?M:L.key),m=s(L,m,M),w===null?E=L:w.sibling=L,w=L);return t&&v.forEach(function(D){return e(d,D)}),gt&&Fr(d,M),E}function _(d,m,y,S){var E=ea(y);if(typeof E!="function")throw Error(ae(150));if(y=E.call(y),y==null)throw Error(ae(151));for(var w=E=null,v=m,M=m=0,L=null,R=y.next();v!==null&&!R.done;M++,R=y.next()){v.index>M?(L=v,v=null):L=v.sibling;var D=u(d,v,R.value,S);if(D===null){v===null&&(v=L);break}t&&v&&D.alternate===null&&e(d,v),m=s(D,m,M),w===null?E=D:w.sibling=D,w=D,v=L}if(R.done)return n(d,v),gt&&Fr(d,M),E;if(v===null){for(;!R.done;M++,R=y.next())R=f(d,R.value,S),R!==null&&(m=s(R,m,M),w===null?E=R:w.sibling=R,w=R);return gt&&Fr(d,M),E}for(v=i(d,v);!R.done;M++,R=y.next())R=p(v,d,M,R.value,S),R!==null&&(t&&R.alternate!==null&&v.delete(R.key===null?M:R.key),m=s(R,m,M),w===null?E=R:w.sibling=R,w=R);return t&&v.forEach(function(I){return e(d,I)}),gt&&Fr(d,M),E}function x(d,m,y,S){if(typeof y=="object"&&y!==null&&y.type===vs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:e:{for(var E=y.key,w=m;w!==null;){if(w.key===E){if(E=y.type,E===vs){if(w.tag===7){n(d,w.sibling),m=r(w,y.props.children),m.return=d,d=m;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===er&&Ap(E)===w.type){n(d,w.sibling),m=r(w,y.props),m.ref=sa(d,w,y),m.return=d,d=m;break e}n(d,w);break}else e(d,w);w=w.sibling}y.type===vs?(m=Gr(y.props.children,d.mode,S,y.key),m.return=d,d=m):(S=fl(y.type,y.key,y.props,null,d.mode,S),S.ref=sa(d,m,y),S.return=d,d=S)}return a(d);case xs:e:{for(w=y.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(d,m.sibling),m=r(m,y.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=Zc(y,d.mode,S),m.return=d,d=m}return a(d);case er:return w=y._init,x(d,m,w(y._payload),S)}if(pa(y))return g(d,m,y,S);if(ea(y))return _(d,m,y,S);wo(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,y),m.return=d,d=m):(n(d,m),m=Kc(y,d.mode,S),m.return=d,d=m),a(d)):n(d,m)}return x}var zs=mg(!0),gg=mg(!1),Il=Ar(null),Fl=null,As=null,Bf=null;function zf(){Bf=As=Fl=null}function Hf(t){var e=Il.current;ht(Il),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Fl=t,Bf=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(Fl===null)throw Error(ae(308));As=t,Fl.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var kr=null;function Gf(t){kr===null?kr=[t]:kr.push(t)}function xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,Gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}function Tp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var o=l,c=o.next;o.next=null,a===null?s=c:a.next=c,a=o;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=o))}if(s!==null){var f=r.baseState;a=0,h=c=o=null,l=s;do{var u=l.lane,p=l.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,_=l;switch(u=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,u=typeof g=="function"?g.call(p,f,u):g,u==null)break e;f=wt({},f,u);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[l]:u.push(l))}else p={eventTime:p,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=p,o=f):h=h.next=p,a|=u;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;u=l,l=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(o=f),r.baseState=o,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=a,t.lanes=a,t.memoizedState=f}}function Rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ro={},Si=Ar(ro),Ha=Ar(ro),Ga=Ar(ro);function Br(t){if(t===ro)throw Error(ae(174));return t}function Wf(t,e){switch(dt(Ga,e),dt(Ha,t),dt(Si,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}ht(Si),dt(Si,e)}function Hs(){ht(Si),ht(Ha),ht(Ga)}function _g(t){Br(Ga.current);var e=Br(Si.current),n=Vu(e,t.type);e!==n&&(dt(Ha,t),dt(Si,n))}function Xf(t){Ha.current===t&&(ht(Si),ht(Ha))}var _t=Ar(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function jf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ol=Wi.ReactCurrentDispatcher,Xc=Wi.ReactCurrentBatchConfig,Yr=0,Mt=null,Ft=null,Wt=null,kl=!1,ba=!1,Va=0,CS=0;function nn(){throw Error(ae(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function qf(t,e,n,i,r,s){if(Yr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?DS:IS,t=n(i,r),ba){s=0;do{if(ba=!1,Va=0,25<=s)throw Error(ae(301));s+=1,Wt=Ft=null,e.updateQueue=null,ol.current=FS,t=n(i,r)}while(ba)}if(ol.current=Bl,e=Ft!==null&&Ft.next!==null,Yr=0,Wt=Ft=Mt=null,kl=!1,e)throw Error(ae(300));return t}function $f(){var t=Va!==0;return Va=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function jn(){if(Ft===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Wt===null?Mt.memoizedState:Wt.next;if(e!==null)Wt=e,Ft=t;else{if(t===null)throw Error(ae(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Wa(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=jn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,o=null,c=s;do{var h=c.lane;if((Yr&h)===h)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(l=o=f,a=i):o=o.next=f,Mt.lanes|=h,qr|=h}c=c.next}while(c!==null&&c!==s);o===null?a=i:o.next=l,ai(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=o,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=jn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ai(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sg(){}function yg(t,e){var n=Mt,i=jn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Kf(wg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Xa(9,Eg.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ae(349));Yr&30||Mg(n,e,r)}return r}function Mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Eg(t,e,n,i){e.value=n,e.getSnapshot=i,bg(e)&&Ag(t)}function wg(t,e,n){return n(function(){bg(e)&&Ag(t)})}function bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Ag(t){var e=Gi(t,1);e!==null&&si(e,t,1,-1)}function Cp(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=NS.bind(null,Mt,t),[e.memoizedState,t]}function Xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Tg(){return jn().memoizedState}function ll(t,e,n,i){var r=fi();Mt.flags|=t,r.memoizedState=Xa(1|e,n,void 0,i===void 0?null:i)}function oc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&Yf(i,a.deps)){r.memoizedState=Xa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Xa(1|e,n,s,i)}function Pp(t,e){return ll(8390656,8,t,e)}function Kf(t,e){return oc(2048,8,t,e)}function Rg(t,e){return oc(4,2,t,e)}function Cg(t,e){return oc(4,4,t,e)}function Pg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lg(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,Pg.bind(null,e,t),n)}function Zf(){}function Ng(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ig(t,e,n){return Yr&21?(ai(n,e)||(n=B0(),Mt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function PS(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{at=n,Xc.transition=i}}function Fg(){return jn().memoizedState}function LS(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(t))Og(e,n);else if(n=xg(t,e,n,i),n!==null){var r=fn();si(n,t,i,r),kg(n,e,i)}}function NS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(t))Og(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,ai(l,a)){var o=e.interleaved;o===null?(r.next=r,Gf(e)):(r.next=o.next,o.next=r),e.interleaved=r;return}}catch{}finally{}n=xg(t,e,r,i),n!==null&&(r=fn(),si(n,t,i,r),kg(n,e,i))}}function Ug(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Og(t,e){ba=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}var Bl={readContext:Xn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},DS={readContext:Xn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,Pg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=LS.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:Cp,useDebugValue:Zf,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=Cp(!1),e=t[0];return t=PS.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=fi();if(gt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Xt===null)throw Error(ae(349));Yr&30||Mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pp(wg.bind(null,i,s,t),[t]),i.flags|=2048,Xa(9,Eg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=Xt.identifierPrefix;if(gt){var n=Ii,i=Di;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IS={readContext:Xn,useCallback:Ng,useContext:Xn,useEffect:Kf,useImperativeHandle:Lg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Dg,useReducer:jc,useRef:Tg,useState:function(){return jc(Wa)},useDebugValue:Zf,useDeferredValue:function(t){var e=jn();return Ig(e,Ft.memoizedState,t)},useTransition:function(){var t=jc(Wa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:yg,useId:Fg,unstable_isNewReconciler:!1},FS={readContext:Xn,useCallback:Ng,useContext:Xn,useEffect:Kf,useImperativeHandle:Lg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Dg,useReducer:Yc,useRef:Tg,useState:function(){return Yc(Wa)},useDebugValue:Zf,useDeferredValue:function(t){var e=jn();return Ft===null?e.memoizedState=t:Ig(e,Ft.memoizedState,t)},useTransition:function(){var t=Yc(Wa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:yg,useId:Fg,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=vr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(si(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=vr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(si(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=vr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(si(e,t,i,n),al(e,t,i))}};function Lp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,i)||!Oa(r,s):!0}function Bg(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=yn(e)?Xr:ln.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Np(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=yn(e)?Xr:ln.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ud(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lc.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=c_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var US=typeof WeakMap=="function"?WeakMap:Map;function zg(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hl||(Hl=!0,Md=i),fd(t,e)},n}function Hg(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new US;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=KS.bind(null,t,e,n),e.then(t,t))}function Ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var OS=Wi.ReactCurrentOwner,vn=!1;function dn(t,e,n,i){e.child=t===null?gg(e,null,n,i):zs(e,t.child,n,i)}function Up(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=qf(t,e,n,i,s,r),n=$f(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(gt&&n&&Uf(e),e.flags|=1,dn(t,e,i,r),e.child)}function Op(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gg(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(a,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Oa(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return hd(t,e,n,i,r)}function Vg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Rs,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Rs,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Rs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Rs,Tn),Tn|=i;return dn(t,e,r,n),e.child}function Wg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,i,r){var s=yn(n)?Xr:ln.current;return s=ks(e,s),Ds(e,r),n=qf(t,e,n,i,s,r),i=$f(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(gt&&i&&Uf(e),e.flags|=1,dn(t,e,n,r),e.child)}function kp(t,e,n,i,r){if(yn(n)){var s=!0;Ll(e)}else s=!1;if(Ds(e,r),e.stateNode===null)cl(t,e),Bg(e,n,i),dd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var o=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=yn(n)?Xr:ln.current,c=ks(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||o!==c)&&Np(e,a,i,c),tr=!1;var u=e.memoizedState;a.state=u,Ul(e,i,a,r),o=e.memoizedState,l!==i||u!==o||Sn.current||tr?(typeof h=="function"&&(ud(e,n,h,i),o=e.memoizedState),(l=tr||Lp(e,n,l,i,u,o,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=o),a.props=i,a.state=o,a.context=c,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,vg(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Jn(e.type,l),a.props=c,f=e.pendingProps,u=a.context,o=n.contextType,typeof o=="object"&&o!==null?o=Xn(o):(o=yn(n)?Xr:ln.current,o=ks(e,o));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||u!==o)&&Np(e,a,i,o),tr=!1,u=e.memoizedState,a.state=u,Ul(e,i,a,r);var g=e.memoizedState;l!==f||u!==g||Sn.current||tr?(typeof p=="function"&&(ud(e,n,p,i),g=e.memoizedState),(c=tr||Lp(e,n,c,i,u,g,o)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,o)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=o,i=c):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return pd(t,e,n,i,s,r)}function pd(t,e,n,i,r,s){Wg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ep(e,n,!1),Vi(t,e,s);i=e.stateNode,OS.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,l,s)):dn(t,e,l,s),e.memoizedState=i.state,r&&Ep(e,n,!0),e.child}function Xg(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),Wf(t,e.containerInfo)}function Bp(t,e,n,i,r){return Bs(),kf(r),e.flags|=256,dn(t,e,n,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function jg(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(_t,r&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=dc(a,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gd(n),e.memoizedState=md,t):Jf(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return kS(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var o={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=o,e.deletions=null):(i=_r(r,o),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=Gr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?gd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=md,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jf(t,e){return e=dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,i){return i!==null&&kf(i),zs(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=qc(Error(ae(422))),bo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,a),e.child.memoizedState=gd(a),e.memoizedState=md,s);if(!(e.mode&1))return bo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ae(419)),i=qc(s,i,void 0),bo(t,e,a,i)}if(l=(a&t.childLanes)!==0,vn||l){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),si(i,t,r,-1))}return rh(),i=qc(Error(ae(421))),bo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ZS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=mr(r.nextSibling),Pn=e,gt=!0,ei=null,t!==null&&(Hn[Gn++]=Di,Hn[Gn++]=Ii,Hn[Gn++]=jr,Di=t.id,Ii=t.overflow,jr=e),e=Jf(e,i.children),e.flags|=4096,e)}function zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cd(t.return,e,n)}function $c(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Yg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,n,e);else if(t.tag===19)zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$c(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BS(t,e,n){switch(e.tag){case 3:Xg(e),Bs();break;case 5:_g(e);break;case 1:yn(e.type)&&Ll(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?jg(t,e,n):(dt(_t,_t.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);dt(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Yg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Vg(t,e,n)}return Vi(t,e,n)}var qg,xd,$g,Kg;qg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xd=function(){};$g=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(Si.current);var s=null;switch(n){case"input":r=Bu(t,r),i=Bu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}Wu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var o=i[c];if(l=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&o!==l&&(o!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in o)o.hasOwnProperty(a)&&l[a]!==o[a]&&(n||(n={}),n[a]=o[a])}else n||(s||(s=[]),s.push(c,n)),n=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,l=l?l.__html:void 0,o!=null&&l!==o&&(s=s||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&ft("scroll",t),s||l===o||(s=[])):(s=s||[]).push(c,o))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Kg=function(t,e,n,i){n!==i&&(e.flags|=4)};function aa(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zS(t,e,n){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return yn(e.type)&&Pl(),rn(e),null;case 3:return i=e.stateNode,Hs(),ht(Sn),ht(ln),jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(bd(ei),ei=null))),xd(t,e),rn(e),null;case 5:Xf(e);var r=Br(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)$g(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return rn(e),null}if(t=Br(Si.current),Eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<ga.length;r++)ft(ga[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":$h(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Zh(i,s),ft("invalid",i)}Wu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,l,t),r=["children",""+l]):Pa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":po(i),Kh(i,s,!0);break;case"textarea":po(i),Jh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=w0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[za]=i,qg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xu(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<ga.length;r++)ft(ga[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":$h(t,i),r=Bu(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Zh(t,i),r=Gu(t,i),ft("invalid",t);break;default:r=i}Wu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="style"?T0(t,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&b0(t,o)):s==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&La(t,o):typeof o=="number"&&La(t,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?o!=null&&s==="onScroll"&&ft("scroll",t):o!=null&&Mf(t,s,o,a))}switch(n){case"input":po(t),Kh(t,i,!1);break;case"textarea":po(t),Jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)Kg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Br(Ga.current),Br(Si.current),Eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return rn(e),null;case 13:if(ht(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Cn!==null&&e.mode&1&&!(e.flags&128))pg(),Bs(),e.flags|=98560,s=!1;else if(s=Eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[mi]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ei!==null&&(bd(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ut===0&&(Ut=3):rh())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return Hs(),xd(t,e),t===null&&ka(e.stateNode.containerInfo),rn(e),null;case 10:return Hf(e.type._context),rn(e),null;case 17:return yn(e.type)&&Pl(),rn(e),null;case 19:if(ht(_t),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)aa(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ol(t),a!==null){for(e.flags|=128,aa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Vs&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return rn(e),null}else 2*Tt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=_t.current,dt(_t,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return ih(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function HS(t,e){switch(Of(e),e.tag){case 1:return yn(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),ht(Sn),ht(ln),jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(ht(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(_t),null;case 4:return Hs(),null;case 10:return Hf(e.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var Ao=!1,on=!1,GS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function vd(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Hp=!1;function VS(t,e){if(td=Al,t=tg(),Ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,o=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(l=a+r),f!==s||i!==0&&f.nodeType!==3||(o=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(l=a),u===s&&++h===i&&(o=a),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Al=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,x=g.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Jn(e.type,_),x);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=Hp,Hp=!1,g}function Aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vd(e,n,s)}r=r.next}while(r!==i)}}function cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zg(t){var e=t.alternate;e!==null&&(t.alternate=null,Zg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[za],delete e[sd],delete e[bS],delete e[AS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jg(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var $t=null,Qn=!1;function Yi(t,e,n){for(n=n.child;n!==null;)Qg(t,e,n),n=n.sibling}function Qg(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:on||Ts(n,e);case 6:var i=$t,r=Qn;$t=null,Yi(t,e,n),$t=i,Qn=r,$t!==null&&(Qn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Qn?(t=$t,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Fa(t)):Gc($t,n.stateNode));break;case 4:i=$t,r=Qn,$t=n.stateNode.containerInfo,Qn=!0,Yi(t,e,n),$t=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&vd(n,e,a),r=r.next}while(r!==i)}Yi(t,e,n);break;case 1:if(!on&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){bt(n,e,l)}Yi(t,e,n);break;case 21:Yi(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,Yi(t,e,n),on=i):Yi(t,e,n);break;default:Yi(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GS),e.forEach(function(i){var r=JS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:$t=l.stateNode,Qn=!1;break e;case 3:$t=l.stateNode.containerInfo,Qn=!0;break e;case 4:$t=l.stateNode.containerInfo,Qn=!0;break e}l=l.return}if($t===null)throw Error(ae(160));Qg(s,a,r),$t=null,Qn=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ex(e,t),e=e.sibling}function ex(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),li(t),i&4){try{Aa(3,t,t.return),cc(3,t)}catch(_){bt(t,t.return,_)}try{Aa(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:qn(e,t),li(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(qn(e,t),li(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{La(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,o=t.updateQueue;if(t.updateQueue=null,o!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&M0(r,s),Xu(l,a);var c=Xu(l,s);for(a=0;a<o.length;a+=2){var h=o[a],f=o[a+1];h==="style"?T0(r,f):h==="dangerouslySetInnerHTML"?b0(r,f):h==="children"?La(r,f):Mf(r,h,f,c)}switch(l){case"input":zu(r,s);break;case"textarea":E0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(_){bt(t,t.return,_)}}break;case 6:if(qn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){bt(t,t.return,_)}}break;case 3:if(qn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:qn(e,t),li(t);break;case 13:qn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(th=Tt())),i&4&&Vp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||h,qn(e,t),on=c):qn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ee=t,h=t.child;h!==null;){for(f=Ee=h;Ee!==null;){switch(u=Ee,p=u.child,u.tag){case 0:case 11:case 14:case 15:Aa(4,u,u.return);break;case 1:Ts(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:Ts(u,u.return);break;case 22:if(u.memoizedState!==null){Xp(f);continue}}p!==null?(p.return=u,Ee=p):Xp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,o=f.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,l.style.display=A0("display",a))}catch(_){bt(t,t.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){bt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qn(e,t),li(t),i&4&&Vp(t);break;case 21:break;default:qn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jg(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(La(r,""),i.flags&=-33);var s=Gp(t);yd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Gp(t);Sd(t,l,a);break;default:throw Error(ae(161))}}catch(o){bt(t,t.return,o)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WS(t,e,n){Ee=t,tx(t)}function tx(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ao;if(!a){var l=r.alternate,o=l!==null&&l.memoizedState!==null||on;l=Ao;var c=on;if(Ao=a,(on=o)&&!c)for(Ee=r;Ee!==null;)a=Ee,o=a.child,a.tag===22&&a.memoizedState!==null?jp(r):o!==null?(o.return=a,Ee=o):jp(r);for(;s!==null;)Ee=s,tx(s),s=s.sibling;Ee=r,Ao=l,on=c}Wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Wp(t)}}function Wp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}on||e.flags&512&&_d(e)}catch(u){bt(e,e.return,u)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Xp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function jp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cc(4,e)}catch(o){bt(e,n,o)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(o){bt(e,r,o)}}var s=e.return;try{_d(e)}catch(o){bt(e,s,o)}break;case 5:var a=e.return;try{_d(e)}catch(o){bt(e,a,o)}}}catch(o){bt(e,e.return,o)}if(e===t){Ee=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Ee=l;break}Ee=e.return}}var XS=Math.ceil,zl=Wi.ReactCurrentDispatcher,Qf=Wi.ReactCurrentOwner,Wn=Wi.ReactCurrentBatchConfig,et=0,Xt=null,Pt=null,Zt=0,Tn=0,Rs=Ar(0),Ut=0,ja=null,qr=0,uc=0,eh=0,Ta=null,xn=null,th=0,Vs=1/0,Pi=null,Hl=!1,Md=null,xr=null,To=!1,lr=null,Gl=0,Ra=0,Ed=null,ul=-1,dl=0;function fn(){return et&6?Tt():ul!==-1?ul:ul=Tt()}function vr(t){return t.mode&1?et&2&&Zt!==0?Zt&-Zt:RS.transition!==null?(dl===0&&(dl=B0()),dl):(t=at,t!==0||(t=window.event,t=t===void 0?16:j0(t.type)),t):1}function si(t,e,n,i){if(50<Ra)throw Ra=0,Ed=null,Error(ae(185));to(t,n,i),(!(et&2)||t!==Xt)&&(t===Xt&&(!(et&2)&&(uc|=n),Ut===4&&sr(t,Zt)),Mn(t,i),n===1&&et===0&&!(e.mode&1)&&(Vs=Tt()+500,ac&&Tr()))}function Mn(t,e){var n=t.callbackNode;R_(t,e);var i=bl(t,t===Xt?Zt:0);if(i===0)n!==null&&tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tp(n),e===1)t.tag===0?TS(Yp.bind(null,t)):dg(Yp.bind(null,t)),ES(function(){!(et&6)&&Tr()}),n=null;else{switch(z0(i)){case 1:n=Tf;break;case 4:n=O0;break;case 16:n=wl;break;case 536870912:n=k0;break;default:n=wl}n=cx(n,nx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nx(t,e){if(ul=-1,dl=0,et&6)throw Error(ae(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=bl(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=et;et|=2;var s=rx();(Xt!==t||Zt!==e)&&(Pi=null,Vs=Tt()+500,Hr(t,e));do try{qS();break}catch(l){ix(t,l)}while(!0);zf(),zl.current=s,et=r,Pt!==null?e=0:(Xt=null,Zt=0,e=Ut)}if(e!==0){if(e===2&&(r=Ku(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=ja,Hr(t,0),sr(t,i),Mn(t,Tt()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!jS(r)&&(e=Vl(t,i),e===2&&(s=Ku(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=ja,Hr(t,0),sr(t,i),Mn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Ur(t,xn,Pi);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=th+500-Tt(),10<e)){if(bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rd(Ur.bind(null,t,xn,Pi),e);break}Ur(t,xn,Pi);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ri(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*XS(i/1960))-i,10<i){t.timeoutHandle=rd(Ur.bind(null,t,xn,Pi),i);break}Ur(t,xn,Pi);break;case 5:Ur(t,xn,Pi);break;default:throw Error(ae(329))}}}return Mn(t,Tt()),t.callbackNode===n?nx.bind(null,t):null}function wd(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=xn,xn=n,e!==null&&bd(e)),t}function bd(t){xn===null?xn=t:xn.push.apply(xn,t)}function jS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~eh,e&=~uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if(et&6)throw Error(ae(327));Is();var e=bl(t,0);if(!(e&1))return Mn(t,Tt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Ku(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=ja,Hr(t,0),sr(t,e),Mn(t,Tt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,xn,Pi),Mn(t,Tt()),null}function nh(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Vs=Tt()+500,ac&&Tr())}}function $r(t){lr!==null&&lr.tag===0&&!(et&6)&&Is();var e=et;et|=1;var n=Wn.transition,i=at;try{if(Wn.transition=null,at=1,t)return t()}finally{at=i,Wn.transition=n,et=e,!(et&6)&&Tr()}}function ih(){Tn=Rs.current,ht(Rs)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MS(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:Hs(),ht(Sn),ht(ln),jf();break;case 5:Xf(i);break;case 4:Hs();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:Hf(i.type._context);break;case 22:case 23:ih()}n=n.return}if(Xt=t,Pt=t=_r(t.current,null),Zt=Tn=e,Ut=0,ja=null,eh=uc=qr=0,xn=Ta=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}kr=null}return t}function ix(t,e){do{var n=Pt;try{if(zf(),ol.current=Bl,kl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kl=!1}if(Yr=0,Wt=Ft=Mt=null,ba=!1,Va=0,Qf.current=null,n===null||n.return===null){Ut=1,ja=e,Pt=null;break}e:{var s=t,a=n.return,l=n,o=e;if(e=Zt,l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Ip(a);if(p!==null){p.flags&=-257,Fp(p,a,l,s,e),p.mode&1&&Dp(s,c,e),e=p,o=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(o),e.updateQueue=_}else g.add(o);break e}else{if(!(e&1)){Dp(s,c,e),rh();break e}o=Error(ae(426))}}else if(gt&&l.mode&1){var x=Ip(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Fp(x,a,l,s,e),kf(Gs(o,l));break e}}s=o=Gs(o,l),Ut!==4&&(Ut=2),Ta===null?Ta=[s]:Ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=zg(s,o,e);Tp(s,d);break e;case 1:l=o;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(xr===null||!xr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Hg(s,l,e);Tp(s,S);break e}}s=s.return}while(s!==null)}ax(n)}catch(E){e=E,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function rx(){var t=zl.current;return zl.current=Bl,t===null?Bl:t}function rh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Xt===null||!(qr&268435455)&&!(uc&268435455)||sr(Xt,Zt)}function Vl(t,e){var n=et;et|=2;var i=rx();(Xt!==t||Zt!==e)&&(Pi=null,Hr(t,e));do try{YS();break}catch(r){ix(t,r)}while(!0);if(zf(),et=n,zl.current=i,Pt!==null)throw Error(ae(261));return Xt=null,Zt=0,Ut}function YS(){for(;Pt!==null;)sx(Pt)}function qS(){for(;Pt!==null&&!__();)sx(Pt)}function sx(t){var e=lx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?ax(t):Pt=e,Qf.current=null}function ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HS(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Pt=null;return}}else if(n=zS(n,e,Tn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Ur(t,e,n){var i=at,r=Wn.transition;try{Wn.transition=null,at=1,$S(t,e,n,i)}finally{Wn.transition=r,at=i}return null}function $S(t,e,n,i){do Is();while(lr!==null);if(et&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===Xt&&(Pt=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,cx(wl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var a=at;at=1;var l=et;et|=4,Qf.current=null,VS(t,n),ex(n,t),mS(nd),Al=!!td,nd=td=null,t.current=n,WS(n),S_(),et=l,at=a,Wn.transition=s}else t.current=n;if(To&&(To=!1,lr=t,Gl=r),s=t.pendingLanes,s===0&&(xr=null),E_(n.stateNode),Mn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hl)throw Hl=!1,t=Md,Md=null,t;return Gl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Ed?Ra++:(Ra=0,Ed=t):Ra=0,Tr(),null}function Is(){if(lr!==null){var t=z0(Gl),e=Wn.transition,n=at;try{if(Wn.transition=null,at=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,Gl=0,et&6)throw Error(ae(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var l=s.deletions;if(l!==null){for(var o=0;o<l.length;o++){var c=l[o];for(Ee=c;Ee!==null;){var h=Ee;switch(h.tag){case 0:case 11:case 15:Aa(8,h,s)}var f=h.child;if(f!==null)f.return=h,Ee=f;else for(;Ee!==null;){h=Ee;var u=h.sibling,p=h.return;if(Zg(h),h===c){Ee=null;break}if(u!==null){u.return=p,Ee=u;break}Ee=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){a=Ee;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ee=y;else e:for(a=m;Ee!==null;){if(l=Ee,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cc(9,l)}}catch(E){bt(l,l.return,E)}if(l===a){Ee=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Ee=S;break e}Ee=l.return}}if(et=r,Tr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(tc,t)}catch{}i=!0}return i}finally{at=n,Wn.transition=e}}return!1}function qp(t,e,n){e=Gs(n,e),e=zg(t,e,1),t=gr(t,e,1),e=fn(),t!==null&&(to(t,1,e),Mn(t,e))}function bt(t,e,n){if(t.tag===3)qp(t,t,n);else for(;e!==null;){if(e.tag===3){qp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=Gs(n,t),t=Hg(e,t,1),e=gr(e,t,1),t=fn(),e!==null&&(to(e,1,t),Mn(e,t));break}}e=e.return}}function KS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Ut===4||Ut===3&&(Zt&130023424)===Zt&&500>Tt()-th?Hr(t,0):eh|=n),Mn(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=fn();t=Gi(t,e),t!==null&&(to(t,e,n),Mn(t,n))}function ZS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function JS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),ox(t,n)}var lx;lx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,BS(t,e,n);vn=!!(t.flags&131072)}else vn=!1,gt&&e.flags&1048576&&fg(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=ks(e,ln.current);Ds(e,n),r=qf(null,e,i,t,r,n);var s=$f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=lc,e.stateNode=r,r._reactInternals=e,dd(e,i,t,n),e=pd(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Uf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ey(i),t=Jn(i,t),r){case 0:e=hd(null,e,i,t,n);break e;case 1:e=kp(null,e,i,t,n);break e;case 11:e=Up(null,e,i,t,n);break e;case 14:e=Op(null,e,i,Jn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),kp(t,e,i,r,n);case 3:e:{if(Xg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,vg(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(ae(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(ae(424)),e),e=Bp(t,e,i,n,r);break e}else for(Cn=mr(e.stateNode.containerInfo.firstChild),Pn=e,gt=!0,ei=null,n=gg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Vi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return _g(e),t===null&&ld(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,id(i,r)?a=null:s!==null&&id(i,s)&&(e.flags|=32),Wg(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&ld(e),null;case 13:return jg(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Up(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(Il,i._currentValue),i._currentValue=a,s!==null)if(ai(s.value,a)){if(s.children===r.children&&!Sn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var o=l.firstContext;o!==null;){if(o.context===i){if(s.tag===1){o=Ui(-1,n&-n),o.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?o.next=o:(o.next=h.next,h.next=o),c.pending=o}}s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),cd(s.return,n,e),l.lanes|=n;break}o=o.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),cd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Xn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Op(t,e,i,r,n);case 15:return Gg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),cl(t,e),e.tag=1,yn(i)?(t=!0,Ll(e)):t=!1,Ds(e,n),Bg(e,i,r),dd(e,i,r,n),pd(null,e,i,!0,t,n);case 19:return Yg(t,e,n);case 22:return Vg(t,e,n)}throw Error(ae(156,e.tag))};function cx(t,e){return U0(t,e)}function QS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new QS(t,e,n,i)}function sh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ey(t){if(typeof t=="function")return sh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===bf)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")sh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case vs:return Gr(n.children,r,s,e);case Ef:a=8,r|=8;break;case Fu:return t=Vn(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case Uu:return t=Vn(13,n,e,r),t.elementType=Uu,t.lanes=s,t;case Ou:return t=Vn(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case _0:return dc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x0:a=10;break e;case v0:a=9;break e;case wf:a=11;break e;case bf:a=14;break e;case er:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Vn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function dc(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ty(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ah(t,e,n,i,r,s,a,l,o){return t=new ty(t,e,n,l,o),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ux(t){if(!t)return Mr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(yn(n))return ug(t,n,e)}return e}function dx(t,e,n,i,r,s,a,l,o){return t=ah(n,i,!0,t,r,s,a,l,o),t.context=ux(null),n=t.current,i=fn(),r=vr(n),s=Ui(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,to(t,r,i),Mn(t,i),t}function fc(t,e,n,i){var r=e.current,s=fn(),a=vr(r);return n=ux(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,a),t!==null&&(si(t,r,a,s),al(t,r,a)),a}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oh(t,e){$p(t,e),(t=t.alternate)&&$p(t,e)}function iy(){return null}var fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function lh(t){this._internalRoot=t}hc.prototype.render=lh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));fc(t,e,null,null)};hc.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){fc(null,t,null,null)}),e[Hi]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=V0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&X0(t)}};function ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function ry(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Wl(a);s.call(c)}}var a=dx(e,i,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=a,t[Hi]=a.current,ka(t.nodeType===8?t.parentNode:t),$r(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var c=Wl(o);l.call(c)}}var o=ah(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=o,t[Hi]=o.current,ka(t.nodeType===8?t.parentNode:t),$r(function(){fc(e,o,n,i)}),o}function mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var o=Wl(a);l.call(o)}}fc(e,a,t,r)}else a=ry(n,e,t,r,i);return Wl(a)}H0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(Rf(e,n|1),Mn(e,Tt()),!(et&6)&&(Vs=Tt()+500,Tr()))}break;case 13:$r(function(){var i=Gi(t,1);if(i!==null){var r=fn();si(i,t,1,r)}}),oh(t,1)}};Cf=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=fn();si(e,t,134217728,n)}oh(t,134217728)}};G0=function(t){if(t.tag===13){var e=vr(t),n=Gi(t,e);if(n!==null){var i=fn();si(n,t,e,i)}oh(t,e)}};V0=function(){return at};W0=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Yu=function(t,e,n){switch(e){case"input":if(zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=sc(i);if(!r)throw Error(ae(90));y0(i),zu(i,r)}}}break;case"textarea":E0(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};P0=nh;L0=$r;var sy={usingClientEntryPoint:!1,Events:[io,Ms,sc,R0,C0,nh]},oa={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ay={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I0(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{tc=Ro.inject(ay),_i=Ro}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ch(e))throw Error(ae(200));return ny(t,e,null,n)};Nn.createRoot=function(t,e){if(!ch(t))throw Error(ae(299));var n=!1,i="",r=fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ah(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,ka(t.nodeType===8?t.parentNode:t),new lh(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=I0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return $r(t)};Nn.hydrate=function(t,e,n){if(!pc(e))throw Error(ae(200));return mc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!ch(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=dx(e,null,t,1,n??null,r,!1,s,a),t[Hi]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hc(e)};Nn.render=function(t,e,n){if(!pc(e))throw Error(ae(200));return mc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!pc(t))throw Error(ae(40));return t._reactRootContainer?($r(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Nn.unstable_batchedUpdates=nh;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return mc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hx)}catch(t){console.error(t)}}hx(),h0.exports=Nn;var oy=h0.exports,px,Zp=oy;px=Zp.createRoot,Zp.hydrateRoot;const mx={id:"",name:"Ejercicio 1",workDurationSeconds:45,roundCount:3,restBetweenRoundsSeconds:20,restAfterExerciseSeconds:60};function Jp(){return{format:"wkt",version:1,category:"Fitness",sport:"Fitness",routines:[{name:"",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{...mx,id:"ex-"+Date.now()}]}]}}const ly=[{id:"tabata-clasico",badgeIcon:"⚡",workout:{format:"wkt",version:1,category:"Tabata",sport:"HIIT",routines:[{name:"Tabata Clásico (20/10)",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-tab-1",name:"Flexiones",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:15,mediaRef:"preset:pushups"},{id:"ex-tab-2",name:"Sentadillas",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:0,mediaRef:"preset:squats"}]}]}},{id:"rondas-boxeo",badgeIcon:"🥊",workout:{format:"wkt",version:1,category:"Combate",sport:"Boxeo",routines:[{name:"Rondas de Boxeo",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-box-1",name:"Sombra de Boxeo",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:60,mediaRef:"preset:shadow_boxing"},{id:"ex-box-2",name:"Saco Pesado",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:0,mediaRef:"preset:heavy_bag"}]}]}},{id:"hiit-full-body",badgeIcon:"🔥",workout:{format:"wkt",version:1,category:"Cardio / HIIT",sport:"Fitness",routines:[{name:"HIIT Full Body",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-hiit-1",name:"Burpees",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:burpees"},{id:"ex-hiit-2",name:"Zancadas",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:lunges"},{id:"ex-hiit-3",name:"Plancha Isométrica",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:0,mediaRef:"preset:plank"}]}]}}],gx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";function cy(t){return t===null||t===""?"":fy(t,6,n=>gx.charAt(n))}function uy(t){return t===null||t===""?null:(t=t.replace(/ /g,"+"),hy(t.length,32,e=>dy(gx,t.charAt(e))))}function dy(t,e){return t.indexOf(e)}function fy(t,e,n){let i,r;const s={},a={};let l="",o="",c="",h=2,f=3,u=2,p="",g=0,_=0;for(let x=0;x<t.length;x+=1)if(l=t.charAt(x),Object.prototype.hasOwnProperty.call(s,l)||(s[l]=f++,a[l]=!0),o=c+l,Object.prototype.hasOwnProperty.call(s,o))c=o;else{if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(i=0;i<u;i++)g=g<<1,_===e-1?(_=0,p+=n(g),g=0):_++;for(r=c.charCodeAt(0),i=0;i<8;i++)g=g<<1|r&1,_===e-1?(_=0,p+=n(g),g=0):_++,r=r>>1}else{for(r=1,i=0;i<u;i++)g=g<<1|r,_===e-1?(_=0,p+=n(g),g=0):_++,r=0;for(r=c.charCodeAt(0),i=0;i<16;i++)g=g<<1|r&1,_===e-1?(_=0,p+=n(g),g=0):_++,r=r>>1}h--,h===0&&(h=Math.pow(2,u),u++),delete a[c]}else for(r=s[c],i=0;i<u;i++)g=g<<1|r&1,_===e-1?(_=0,p+=n(g),g=0):_++,r=r>>1;h--,h===0&&(h=Math.pow(2,u),u++),s[o]=f++,c=String(l)}if(c!==""){if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(i=0;i<u;i++)g=g<<1,_===e-1?(_=0,p+=n(g),g=0):_++;for(r=c.charCodeAt(0),i=0;i<8;i++)g=g<<1|r&1,_===e-1?(_=0,p+=n(g),g=0):_++,r=r>>1}else{for(r=1,i=0;i<u;i++)g=g<<1|r,_===e-1?(_=0,p+=n(g),g=0):_++,r=0;for(r=c.charCodeAt(0),i=0;i<16;i++)g=g<<1|r&1,_===e-1?(_=0,p+=n(g),g=0):_++,r=r>>1}h--,h===0&&(h=Math.pow(2,u),u++),delete a[c]}else for(r=s[c],i=0;i<u;i++)g=g<<1|r&1,_===e-1?(_=0,p+=n(g),g=0):_++,r=r>>1;h--,h===0&&(h=Math.pow(2,u),u++)}for(r=2,i=0;i<u;i++)g=g<<1|r&1,_===e-1?(_=0,p+=n(g),g=0):_++,r=r>>1;for(;;)if(g=g<<1,_===e-1){p+=n(g);break}else _++;return p}function hy(t,e,n){const i=[];let r=4,s=4,a=3,l="";const o=[];let c,h=0,f=0,u=Math.pow(2,2),p=1,g="";const _={val:n(0),position:e,index:1};for(let x=0;x<3;x+=1)i[x]=String(x);for(;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;switch(h){case 0:for(h=0,u=Math.pow(2,8),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;g=String.fromCharCode(h);break;case 1:for(h=0,u=Math.pow(2,16),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;g=String.fromCharCode(h);break;case 2:return""}for(i[3]=g,c=g,o.push(g);;){if(_.index>t)return"";for(h=0,u=Math.pow(2,a),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;let x;switch(x=h){case 0:for(h=0,u=Math.pow(2,8),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(h),x=s-1,r--;break;case 1:for(h=0,u=Math.pow(2,16),p=1;p!==u;)f=_.val&_.position,_.position>>=1,_.position===0&&(_.position=e,_.val=n(_.index++)),h|=(f>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(h),x=s-1,r--;break;case 2:return o.join("")}if(r===0&&(r=Math.pow(2,a),a++),i[x])l=i[x];else if(x===s)l=c+c.charAt(0);else return null;o.push(l),i[s++]=c+l.charAt(0),r--,c=l,r===0&&(r=Math.pow(2,a),a++)}}const py=[["jumping_jacks","Jumping Jacks","Cardio",!0],["burpees","Burpees","HIIT",!0],["pushups","Flexiones","Fuerza",!0],["squats","Sentadillas","Fuerza",!0],["lunges","Zancadas","Fuerza",!0],["plank","Plancha","Core",!0],["mountain_climbers","Escaladores","HIIT",!0],["high_knees","Rodillas Arriba","Cardio",!0],["crunches","Abdominales","Core",!0],["bicycle_crunches","Bicicleta Abd.","Core",!0],["russian_twists","Giros Rusos","Core",!0],["leg_raises","Elev. Piernas","Core",!0],["jumping_rope","Saltar Soga","Cardio",!0],["box_jumps","Saltos Cajón","HIIT",!0],["kettlebell_swing","Kettlebell Swing","Fuerza",!0],["dumbbell_curl","Curl Bíceps","Fuerza",!0],["shoulder_press","Press Hombros","Fuerza",!0],["tricep_dips","Fondos Tríceps","Fuerza",!0],["pullups","Dominadas","Fuerza",!0],["deadlift","Peso Muerto","Fuerza",!0],["bench_press","Press Banca","Fuerza",!0],["shadow_boxing","Sombra Boxeo","Boxeo",!0],["heavy_bag","Saco Boxeo","Boxeo",!0],["stretch_cool","Estiramiento","Movilidad",!0],["calf_raises","Elev. Talones","Fuerza",!1],["glute_bridge","Puente Glúteos","Fuerza",!1],["side_plank","Plancha Lateral","Core",!1],["superman","Superman","Core",!1],["wall_sit","Sentadilla Pared","Fuerza",!1],["sumo_squat","Sentadilla Sumo","Fuerza",!1],["bent_over_row","Remo Barra","Fuerza",!1],["lateral_raises","Elev. Laterales","Fuerza",!1],["tricep_kickback","Patada Tríceps","Fuerza",!1],["arnold_press","Press Arnold","Fuerza",!1],["front_kick","Patada Frontal","Boxeo",!1],["uppercut_hook","Uppercut y Gancho","Boxeo",!1],["skater_jumps","Saltos Patinador","Cardio",!1],["butt_kicks","Talones al Glúteo","Cardio",!1],["flutter_kicks","Patadas Tijera","Core",!1],["cat_cow","Gato - Vaca","Movilidad",!1]],xa=py.map(([t,e,n,i])=>({key:t,label:e,category:n,mediaRef:`preset:${t}`,url:`./exercises/${t}.gif`,bundled:i}));function uh(t){if(!t)return;const e=t.startsWith("preset:")?t.slice(7):t;return xa.find(n=>n.key.toLowerCase()===e.toLowerCase())}function xx(t){const e={...t},n=e.mediaRef||e.mediaId;if(delete e.mediaId,typeof e.mediaData=="string"&&e.mediaData.startsWith("data:image/")?e.mediaData=e.mediaData:delete e.mediaData,n&&typeof n=="string"){const i=uh(n);i?e.mediaRef=i.mediaRef:n.startsWith("preset:")?e.mediaRef=n:delete e.mediaRef}else delete e.mediaRef;return e}function vx(t){if(!t)return null;if(typeof t.mediaData=="string"&&t.mediaData.startsWith("data:image/"))return t.mediaData;const e=uh(t.mediaRef||t.mediaId);return e?e.url:null}function my(t){if(!t||!t.includes("base64,"))return null;const e=t.slice(t.indexOf("base64,")+7);if(!e)return null;const n=e.endsWith("==")?2:e.endsWith("=")?1:0,i=Math.max(0,Math.floor(e.length*3/4)-n);return Math.max(1,Math.round(i/1024))}const gy="mytimerapp://import?data=";function _x(t){if(!t||typeof t!="object")return!1;const e=t;if(e.format!=="wkt"||e.version!==1||!Array.isArray(e.routines)||e.routines.length===0)return!1;for(const n of e.routines)if(typeof n!="object"||!n||typeof n.name!="string"||!Array.isArray(n.exercises))return!1;return!0}function Sx(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>xx(n))}))}}function xy(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>{const i=xx(n),{mediaData:r,mediaId:s,...a}=i;return(!a.mediaRef||!a.mediaRef.startsWith("preset:"))&&delete a.mediaRef,a})}))}}function vy(t){const e=xy(t),n=JSON.stringify(e);return cy(n)}function _y(t){try{const e=uy(t);if(!e)return null;const n=JSON.parse(e);return _x(n)?Sx(n):null}catch(e){return console.error("Failed to decode workout from URL:",e),null}}function yx(t){const e=vy(t);return`${gy}${e}`}function gc(t){const e=Math.max(1,t.roundCount||1),n=Math.max(0,t.workDurationSeconds||0)*e,i=Math.max(0,t.restBetweenRoundsSeconds||0)*(e-1),r=Math.max(0,t.restAfterExerciseSeconds||0),s=i+r;return{totalSeconds:n+s,workSeconds:n,restSeconds:s}}function Ya(t){const e=Math.max(1,t.routineCycles||1),n=Math.max(0,t.prepareDurationSeconds||0),i=Math.max(0,t.restBetweenRoutinesSeconds||0)*Math.max(0,e-1);let r=0,s=0,a=0;for(const c of t.exercises){const h=gc(c);r+=h.workSeconds,s+=h.restSeconds,a+=Math.max(1,c.roundCount||1)}const l=r*e,o=s*e+n+i;return{totalSeconds:l+o,tutSeconds:l,restSeconds:o,totalRounds:a*e,exerciseCount:t.exercises.length}}function St(t){const e=Math.max(0,Math.floor(t)),n=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60,s=i.toString().padStart(2,"0"),a=r.toString().padStart(2,"0");return n>0?`${n.toString().padStart(2,"0")}:${s}:${a}`:`${s}:${a}`}const Qp=6,Co=1080;function hi(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function Jc(t,e,n){if(t.measureText(e).width<=n)return e;let i=e;for(;i.length>0&&t.measureText(`${i}...`).width>n;)i=i.slice(0,-1);return`${i}...`}function Po(t,e,n,i,r,s,a){t.font="bold 22px system-ui, -apple-system, sans-serif";const o=t.measureText(e).width+32;return hi(t,n,i,o,44,22),t.fillStyle=r,t.fill(),t.lineWidth=2,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+16,i+30),n+o}function Lo(t,e,n,i,r,s,a){t.font="bold 19px ui-monospace, SFMono-Regular, monospace";const o=t.measureText(e).width+22;return hi(t,n,i,o,36,8),t.fillStyle=r,t.fill(),t.lineWidth=1.5,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+11,i+25),n+o}async function Mx(t,e){const n=t.routines[0];if(!n)return null;const i=n.exercises.slice(0,Qp),r=Math.max(0,n.exercises.length-Qp),s=!!(n.author&&n.author.trim());let a=610;s&&(a+=42),a+=i.length*136,r>0&&(a+=84),a+=86;const l=document.createElement("canvas");l.width=Co,l.height=Math.round(a);const o=l.getContext("2d");if(!o)return null;o.fillStyle="#020617",o.fillRect(0,0,l.width,l.height);const c=32,h=c,f=c,u=Co-c*2,p=a-c*2,g=o.createLinearGradient(0,f,0,f+p);g.addColorStop(0,"#0f172a"),g.addColorStop(1,"#020617"),hi(o,h,f,u,p,48),o.fillStyle=g,o.fill(),o.lineWidth=3,o.strokeStyle="rgba(16, 185, 129, 0.35)",o.stroke();const _=c+44,x=Co-c-44;let d=c+48,m=_;m=Po(o,e.previewBadge||"✨ Rutina Compartida",m,d,"rgba(16, 185, 129, 0.15)","rgba(16, 185, 129, 0.35)","#34d399")+14,t.category&&(m=Po(o,`🏷️ ${t.category}`,m,d,"#1e293b","#334155","#cbd5e1")+14),t.sport&&(m=Po(o,`🏅 ${t.sport}`,m,d,"#1e293b","#334155","#67e8f9")+14),n.routineCycles>1&&Po(o,`🔄 ${n.routineCycles}x ${e.cycles||e.cyclesLabel||"Ciclos"}`,m,d,"rgba(6, 182, 212, 0.2)","rgba(6, 182, 212, 0.35)","#67e8f9"),d+=86,o.font="900 54px system-ui, -apple-system, sans-serif",o.fillStyle="#ffffff",o.textAlign="left";const y=Jc(o,n.name||"Rutina",x-_);if(o.fillText(y,_,d),s){d+=42,o.font="600 26px system-ui, -apple-system, sans-serif",o.fillStyle="#94a3b8";const I=`👤 ${e.sharedBy||"Compartida por"}: ${n.author}`;o.fillText(Jc(o,I,x-_),_,d)}d+=40;const S=Ya(n),E=18,w=(x-_-E*3)/4,v=130;[{label:(e.totalTime||"TIEMPO TOTAL").toUpperCase(),value:St(S.totalSeconds),bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#ffffff"},{label:(e.tut||"TRABAJO (TUT)").toUpperCase(),value:St(S.tutSeconds),bg:"rgba(15, 77, 42, 0.45)",border:"rgba(16, 185, 129, 0.4)",labelColor:"#6ee7b7",valColor:"#34d399"},{label:(e.rest||"DESCANSO").toUpperCase(),value:St(S.restSeconds),bg:"rgba(122, 13, 30, 0.45)",border:"rgba(244, 63, 94, 0.4)",labelColor:"#fda4af",valColor:"#fb7185"},{label:(e.totalRounds||"RONDAS TOTALES").toUpperCase(),value:`${S.totalRounds} (${S.exerciseCount})`,bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#22d3ee"}].forEach((I,F)=>{const N=_+(w+E)*F;hi(o,N,d,w,v,28),o.fillStyle=I.bg,o.fill(),o.lineWidth=2.5,o.strokeStyle=I.border,o.stroke(),o.font="bold 18px system-ui, -apple-system, sans-serif",o.fillStyle=I.labelColor,o.textAlign="center",o.fillText(I.label,N+w/2,d+44),o.font="900 36px ui-monospace, SFMono-Regular, monospace",o.fillStyle=I.valColor,o.fillText(I.value,N+w/2,d+96)}),d+=v+36;const L=S.totalSeconds>0?Math.round(S.tutSeconds/S.totalSeconds*100):50,R=Math.max(0,100-L);o.font="bold 23px system-ui, -apple-system, sans-serif",o.fillStyle="#94a3b8",o.textAlign="left",o.fillText(e.workVsRestRatio||"Distribución Trabajo vs Descanso",_,d),o.fillStyle="#34d399",o.textAlign="right",o.fillText(`${L}% / ${R}%`,x,d),d+=16;const D=18;if(hi(o,_,d,x-_,D,9),o.fillStyle="#f43f5e",o.fill(),L>0){const I=Math.max(18,(x-_)*(L/100));hi(o,_,d,I,D,9),o.fillStyle="#10b981",o.fill()}if(d+=D+44,o.font="800 25px system-ui, -apple-system, sans-serif",o.fillStyle="#cbd5e1",o.textAlign="left",o.fillText(`${(e.exercisesList||"LISTA DE EJERCICIOS").toUpperCase()} (${n.exercises.length})`,_,d),n.prepareDurationSeconds>0){const I=`⏱️ ${e.prepareBadge||"Preparación"}: ${St(n.prepareDurationSeconds)}`;o.font="bold 22px ui-monospace, SFMono-Regular, monospace";const F=o.measureText(I).width+28,N=x-F;hi(o,N,d-30,F,40,12),o.fillStyle="rgba(94, 58, 0, 0.55)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(245, 158, 11, 0.45)",o.stroke(),o.fillStyle="#fcd34d",o.textAlign="left",o.fillText(I,N+14,d-3)}if(d+=26,i.forEach((I,F)=>{hi(o,_,d,x-_,120,26),o.fillStyle="rgba(2, 6, 23, 0.82)",o.fill(),o.lineWidth=2,o.strokeStyle="#1e293b",o.stroke();const G=_+22,q=d+28;hi(o,G,q,52,52,14),o.fillStyle="rgba(16, 185, 129, 0.15)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(16, 185, 129, 0.35)",o.stroke(),o.font="900 24px system-ui, -apple-system, sans-serif",o.fillStyle="#34d399",o.textAlign="center",o.fillText(String(F+1),G+26,q+35),o.font="bold 28px system-ui, -apple-system, sans-serif",o.fillStyle="#f1f5f9",o.textAlign="left";const z=x-_-290;o.fillText(Jc(o,I.name||`Ejercicio ${F+1}`,z),_+94,d+48);let H=_+94;const k=d+64;H=Lo(o,`🔄 ${I.roundCount} ${e.rounds||"Rondas"}`,H,k,"#1e293b","#334155","#67e8f9")+10,H=Lo(o,`⚡ ${St(I.workDurationSeconds)}`,H,k,"rgba(15, 77, 42, 0.65)","rgba(16, 185, 129, 0.45)","#6ee7b7")+10,I.restBetweenRoundsSeconds>0&&(H=Lo(o,`💨 ${St(I.restBetweenRoundsSeconds)}`,H,k,"rgba(122, 13, 30, 0.65)","rgba(244, 63, 94, 0.45)","#fda4af")+10),I.restAfterExerciseSeconds>0&&Lo(o,`🛑 ${St(I.restAfterExerciseSeconds)}`,H,k,"rgba(94, 58, 0, 0.65)","rgba(245, 158, 11, 0.45)","#fcd34d");const C=gc(I);o.font="bold 16px system-ui, -apple-system, sans-serif",o.fillStyle="#64748b",o.textAlign="right",o.fillText((e.subtotal||"SUBTOTAL").replace(":","").toUpperCase(),x-24,d+48),o.font="bold 26px ui-monospace, SFMono-Regular, monospace",o.fillStyle="#e2e8f0",o.fillText(St(C.totalSeconds),x-24,d+84),d+=136}),r>0){hi(o,_,d,x-_,68,20),o.fillStyle="#1e293b",o.fill(),o.lineWidth=2,o.strokeStyle="#334155",o.stroke(),o.font="bold 24px system-ui, -apple-system, sans-serif",o.fillStyle="#34d399",o.textAlign="center";const I=r===1?"+1 ejercicio más en la rutina completa...":`+${r} ejercicios más en la rutina completa...`;o.fillText(I,(_+x)/2,d+42),d+=84}return o.font="21px system-ui, -apple-system, sans-serif",o.fillStyle="#64748b",o.textAlign="center",o.fillText("Timer Routine Studio • Abre el archivo .wkt adjunto en la App o en alvarpereira-dot.github.io",Co/2,d+26),new Promise(I=>{l.toBlob(F=>I(F),"image/png",1)})}const qa={es:{appTitle:"Timer Routine Studio",subtitle:"Archivos .wkt",currentFile:"Archivo actual",openLocal:"📂 Abrir (.wkt)",save:"💾 Guardar",saveAs:"📑 Guardar como...",shareWhatsApp:"Compartir WhatsApp",openInApp:"📲 Abrir en App",validationAlertTitle:"⚠️ La rutina contiene observaciones que debes corregir:",routineName:"Nombre de la Rutina",author:"Autor / Entrenador",category:"Categoría",sport:"Deporte",cycles:"Ciclos Globales",prepare:"Preparación (seg / max 24h)",totalTime:"Tiempo Total",tut:"Trabajo (TUT)",rest:"Descanso",totalRounds:"Rondas Totales",exercisesList:"Lista de Ejercicios",addExercise:"+ Agregar Ejercicio",addAnotherExercise:"+ Agregar otro ejercicio",rounds:"Rondas",work:"Trabajo (seg)",restBetween:"Pausa Rondas (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal ejercicio:",savedIn:"Guardado en",savedAs:"Guardado como",systemLanguage:"Idioma del Sistema",systemLanguageDesc:"Predeterminado del sistema",shareMessageIntro:"🔥 ¡Mira mi rutina en el temporizador!",clipboardNotice:"📋 Archivo .wkt descargado. Redirigiendo a WhatsApp...",openingApp:"🚀 Enviando rutina a la App móvil...",errNameEmpty:"El nombre del ejercicio no puede estar vacío.",errNameDuplicate:"El nombre está repetido en la rutina.",errWorkMin:"El tiempo de trabajo debe ser mayor a 0 seg.",errMaxTime:"El tiempo no puede superar 1440 min (24 horas).",errRoutineEmpty:"La rutina debe tener al menos un ejercicio.",errRoutineNameEmpty:"El nombre de la rutina no puede estar vacío.",previewBadge:"✨ Rutina Compartida",previewModeBtn:"👁️ Vista Previa",editRoutineBtn:"✏️ Editar / Personalizar en Web",downloadWktBtn:"📥 Descargar (.wkt)",sharedBy:"Compartida por",workVsRestRatio:"Distribución Trabajo vs Descanso",prepareBadge:"Preparación inicial",noRest:"Sin pausa",downloadApkBtn:"Descargar App Android (.apk)"},en:{appTitle:"Timer Routine Studio",subtitle:".wkt files",currentFile:"Current file",openLocal:"📂 Open (.wkt)",save:"💾 Save",saveAs:"📑 Save as...",shareWhatsApp:"Share via WhatsApp",openInApp:"📲 Open in App",validationAlertTitle:"⚠️ Routine contains issues that must be fixed:",routineName:"Routine Name",author:"Author / Coach",category:"Category",sport:"Sport",cycles:"Global Cycles",prepare:"Preparation (sec / max 24h)",totalTime:"Total Time",tut:"Work (TUT)",rest:"Rest",totalRounds:"Total Rounds",exercisesList:"Exercises List",addExercise:"+ Add Exercise",addAnotherExercise:"+ Add another exercise",rounds:"Rounds",work:"Work (sec)",restBetween:"Round Rest (sec)",restAfter:"Final Rest (sec)",subtotal:"Exercise subtotal:",savedIn:"Saved to",savedAs:"Saved as",systemLanguage:"System Language",systemLanguageDesc:"Default system language",shareMessageIntro:"🔥 Check out my workout routine on the timer!",clipboardNotice:"📋 .wkt file downloaded. Redirecting to WhatsApp...",openingApp:"🚀 Sending routine to mobile app...",errNameEmpty:"Exercise name cannot be empty.",errNameDuplicate:"Exercise name is duplicated in the routine.",errWorkMin:"Work duration must be greater than 0 sec.",errMaxTime:"Time cannot exceed 1440 min (24 hours).",errRoutineEmpty:"Routine must contain at least one exercise.",errRoutineNameEmpty:"Routine name cannot be empty.",previewBadge:"✨ Shared Routine",previewModeBtn:"👁️ Preview",editRoutineBtn:"✏️ Edit / Customize on Web",downloadWktBtn:"📥 Download (.wkt)",sharedBy:"Shared by",workVsRestRatio:"Work vs Rest Distribution",prepareBadge:"Initial preparation",noRest:"No rest",downloadApkBtn:"Download Android App (.apk)"},pt:{appTitle:"Timer Routine Studio",subtitle:"Arquivos .wkt",currentFile:"Arquivo atual",openLocal:"📂 Abrir (.wkt)",save:"💾 Salvar",saveAs:"📑 Salvar como...",shareWhatsApp:"Compartilhar WhatsApp",openInApp:"📲 Abrir no App",validationAlertTitle:"⚠️ A rotina contém itens que precisam ser corrigidos:",routineName:"Nome da Rotina",author:"Autor / Treinador",category:"Categoria",sport:"Esporte",cycles:"Ciclos Globais",prepare:"Preparação (seg / máx 24h)",totalTime:"Tempo Total",tut:"Trabalho (TUT)",rest:"Descanso",totalRounds:"Total de Séries",exercisesList:"Lista de Exercícios",addExercise:"+ Adicionar Exercício",addAnotherExercise:"+ Adicionar outro exercício",rounds:"Séries",work:"Trabalho (seg)",restBetween:"Pausa Séries (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal do exercício:",savedIn:"Salvo em",savedAs:"Salvo como",shareMessageIntro:"🔥 Veja meu treino no cronômetro!",clipboardNotice:"📋 Arquivo .wkt baixado. Redirecionando para o WhatsApp...",openingApp:"🚀 Enviando rotina para o App móvel...",errNameEmpty:"O nome do exercício não pode ficar vazio.",errNameDuplicate:"O nome do exercício está duplicado na rotina.",errWorkMin:"O tempo de trabalho deve ser maior que 0 seg.",errMaxTime:"O tempo não pode ultrapassar 1440 min (24 horas).",errRoutineEmpty:"A rotina deve conter pelo menos um exercício.",errRoutineNameEmpty:"O nome da rotina não pode ficar vazio.",previewBadge:"✨ Rotina Compartilhada",previewModeBtn:"👁️ Pré-visualizar",editRoutineBtn:"✏️ Editar / Personalizar na Web",downloadWktBtn:"📥 Baixar (.wkt)",sharedBy:"Compartilhada por",workVsRestRatio:"Distribuição Trabalho vs Descanso",prepareBadge:"Preparação inicial",noRest:"Sem pausa",downloadApkBtn:"Baixar App Android (.apk)"},fr:{appTitle:"Timer Routine Studio",subtitle:"Fichiers .wkt",currentFile:"Fichier actuel",openLocal:"📂 Ouvrir (.wkt)",save:"💾 Enregistrer",saveAs:"📑 Enregistrer sous...",shareWhatsApp:"Partager WhatsApp",openInApp:"📲 Ouvrir dans l'App",validationAlertTitle:"⚠️ La routine contient des points à corriger :",routineName:"Nom de la Routine",author:"Auteur / Coach",category:"Catégorie",sport:"Sport",cycles:"Cycles Globaux",prepare:"Préparation (sec / max 24h)",totalTime:"Temps Total",tut:"Travail (TUT)",rest:"Repos",totalRounds:"Rounds Totaux",exercisesList:"Liste des Exercices",addExercise:"+ Ajouter un Exercice",addAnotherExercise:"+ Ajouter un autre exercice",rounds:"Rounds",work:"Travail (sec)",restBetween:"Pause Rounds (sec)",restAfter:"Pause Finale (sec)",subtotal:"Sous-total exercice :",savedIn:"Enregistré dans",savedAs:"Enregistré sous",shareMessageIntro:"🔥 Regarde ma séance sur le minuteur !",clipboardNotice:"📋 Fichier .wkt téléchargé. Redirection vers WhatsApp...",openingApp:"🚀 Envoi de la routine à l'application mobile...",errNameEmpty:"Le nom de l'exercice ne peut pas être vide.",errNameDuplicate:"Le nom de l'exercice est dupliqué dans la routine.",errWorkMin:"Le temps de travail doit être supérieur à 0 sec.",errMaxTime:"Le temps ne peut pas dépasser 1440 min (24 heures).",errRoutineEmpty:"La routine doit contenir au moins un exercice.",errRoutineNameEmpty:"Le nom de la routine ne peut pas être vide.",previewBadge:"✨ Routine Partagée",previewModeBtn:"👁️ Aperçu",editRoutineBtn:"✏️ Modifier / Personnaliser sur le Web",downloadWktBtn:"📥 Télécharger (.wkt)",sharedBy:"Partagée par",workVsRestRatio:"Répartition Travail vs Repos",prepareBadge:"Préparation initiale",noRest:"Sans pause",downloadApkBtn:"Télécharger l'App Android (.apk)"},de:{appTitle:"Timer Routine Studio",subtitle:".wkt-Dateien",currentFile:"Aktuelle Datei",openLocal:"📂 Öffnen (.wkt)",save:"💾 Speichern",saveAs:"📑 Speichern unter...",shareWhatsApp:"Über WhatsApp teilen",openInApp:"📲 In App öffnen",validationAlertTitle:"⚠️ Die Routine enthält Fehler, die behoben werden müssen:",routineName:"Name der Routine",author:"Autor / Trainer",category:"Kategorie",sport:"Sportart",cycles:"Globale Zyklen",prepare:"Vorbereitung (Sek / max 24h)",totalTime:"Gesamtzeit",tut:"Arbeit (TUT)",rest:"Pause",totalRounds:"Gesamtrunden",exercisesList:"Übungsliste",addExercise:"+ Übung hinzufügen",addAnotherExercise:"+ Weitere Übung hinzufügen",rounds:"Runden",work:"Arbeit (Sek)",restBetween:"Rundenpause (Sek)",restAfter:"Abschlusspause (Sek)",subtotal:"Zwischensumme Übung:",savedIn:"Gespeichert in",savedAs:"Gespeichert als",shareMessageIntro:"🔥 Schau dir meine Trainingsroutine auf dem Timer an!",clipboardNotice:"📋 .wkt-Datei heruntergeladen. Weiterleitung zu WhatsApp...",openingApp:"🚀 Routine an mobile App senden...",errNameEmpty:"Übungsname darf nicht leer sein.",errNameDuplicate:"Übungsname ist in der Routine doppelt vorhanden.",errWorkMin:"Die Arbeitszeit muss größer als 0 Sek sein.",errMaxTime:"Die Zeit darf 1440 Min (24 Stunden) nicht überschreiten.",errRoutineEmpty:"Die Routine muss mindestens eine Übung enthalten.",errRoutineNameEmpty:"Der Name der Routine darf nicht leer sein.",previewBadge:"✨ Geteilte Routine",previewModeBtn:"👁️ Vorschau",editRoutineBtn:"✏️ Im Web bearbeiten / anpassen",downloadWktBtn:"📥 Herunterladen (.wkt)",sharedBy:"Geteilt von",workVsRestRatio:"Verteilung Arbeit vs Pause",prepareBadge:"Vorbereitung",noRest:"Keine Pause",downloadApkBtn:"Android-App herunterladen (.apk)"},it:{appTitle:"Timer Routine Studio",subtitle:"File .wkt",currentFile:"File corrente",openLocal:"📂 Apri (.wkt)",save:"💾 Salva",saveAs:"📑 Salva come...",shareWhatsApp:"Condividi WhatsApp",openInApp:"📲 Apri nell'App",validationAlertTitle:"⚠️ La routine contiene errori da correggere:",routineName:"Nome della Routine",author:"Autore / Allenatore",category:"Categoria",sport:"Sport",cycles:"Cicli Globali",prepare:"Preparazione (sec / max 24h)",totalTime:"Tempo Totale",tut:"Lavoro (TUT)",rest:"Riposo",totalRounds:"Round Totali",exercisesList:"Elenco Esercizi",addExercise:"+ Aggiungi Esercizio",addAnotherExercise:"+ Aggiungi un altro esercizio",rounds:"Round",work:"Lavoro (sec)",restBetween:"Pausa Round (sec)",restAfter:"Pausa Finale (sec)",subtotal:"Subtotale esercizio:",savedIn:"Salvato in",savedAs:"Salvato come",shareMessageIntro:"🔥 Guarda il mio allenamento sul timer!",clipboardNotice:"📋 File .wkt scaricato. Reindirizzamento a WhatsApp...",openingApp:"🚀 Invio della routine all'App mobile...",errNameEmpty:"Il nome dell'esercizio non può essere vuoto.",errNameDuplicate:"Il nome dell'esercizio è duplicato nella routine.",errWorkMin:"Il tempo di lavoro deve essere maggiore di 0 sec.",errMaxTime:"Il tempo non può superare 1440 min (24 ore).",errRoutineEmpty:"La routine deve contenere almeno un esercizio.",errRoutineNameEmpty:"Il nome della routine non può essere vuoto.",previewBadge:"✨ Routine Condivisa",previewModeBtn:"👁️ Anteprima",editRoutineBtn:"✏️ Modifica / Personalizza sul Web",downloadWktBtn:"📥 Scarica (.wkt)",sharedBy:"Condivisa da",workVsRestRatio:"Distribuzione Lavoro vs Riposo",prepareBadge:"Preparazione iniziale",noRest:"Nessuna pausa",downloadApkBtn:"Scarica App Android (.apk)"}};function Sy(t){var n;if(t==="SYSTEM"||!t){const r=(typeof navigator<"u"&&(navigator.language||((n=navigator.languages)==null?void 0:n[0]))||"es").split("-")[0].toLowerCase();return qa[r]?r:"es"}const e=t.split("-")[0].toLowerCase();return qa[e]?e:"es"}const em=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),A.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),yy=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("polyline",{points:"3 6 5 6 21 6"}),A.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),My=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),A.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),Ey=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),A.jsx("polyline",{points:"5 12 12 5 19 12"})]}),wy=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),A.jsx("polyline",{points:"19 12 12 19 5 12"})]}),by=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),A.jsx("polyline",{points:"7 10 12 15 17 10"}),A.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),tm=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("circle",{cx:"12",cy:"12",r:"10"}),A.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Ay=({size:t=20,className:e="",...n})=>A.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:A.jsx("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),Ex=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}),A.jsx("polygon",{points:"22 19 19 9 2 9 5 19 22 19"})]}),Ty=({size:t=20,className:e="",...n})=>A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[A.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),A.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),A.jsx("polyline",{points:"7 3 7 8 15 8"})]}),Xl=({className:t="w-7 h-7 shrink-0",...e})=>A.jsxs("svg",{viewBox:"0 0 108 108",className:t,"aria-hidden":"true",...e,children:[A.jsx("rect",{width:"108",height:"108",rx:"24",fill:"#0F172A",stroke:"#1E293B",strokeWidth:"4"}),A.jsx("path",{fill:"#10B981",d:"M51,21 L57,21 L57,26 L51,26 Z"}),A.jsx("path",{fill:"#00E676",d:"M44,15 L64,15 A2,2 0 0,1 66,17 L66,20 A2,2 0 0,1 64,22 L44,22 A2,2 0 0,1 42,20 L42,17 A2,2 0 0,1 44,15 Z"}),A.jsx("path",{fill:"#10B981",d:"M33,27 L37,31 L33,35 L29,31 Z"}),A.jsx("path",{fill:"#00E676",d:"M25,25 L33,19 L37,23 L29,29 Z"}),A.jsx("path",{fill:"#10B981",d:"M75,27 L79,31 L75,35 L71,31 Z"}),A.jsx("path",{fill:"#00E676",d:"M75,19 L83,25 L79,29 L71,23 Z"}),A.jsx("path",{fill:"#00E676",d:"M54,26 A31,31 0 1,1 53.9,26 Z M54,32 A25,25 0 1,0 54.1,32 Z"}),A.jsx("path",{fill:"#10B981",d:"M52.5,34 L55.5,34 L55.5,38 L52.5,38 Z"}),A.jsx("path",{fill:"#10B981",d:"M52.5,76 L55.5,76 L55.5,80 L52.5,80 Z"}),A.jsx("path",{fill:"#10B981",d:"M31,55.5 L35,55.5 L35,58.5 L31,58.5 Z"}),A.jsx("path",{fill:"#10B981",d:"M73,55.5 L77,55.5 L77,58.5 L73,58.5 Z"}),A.jsx("path",{fill:"#00E676",d:"M57,41 L45,58 L54,58 L51,73 L63,56 L54,56 Z"})]}),wx=({className:t="w-4 h-4 shrink-0",...e})=>A.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:t,"aria-hidden":"true",...e,children:A.jsx("path",{d:"M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"})}),Ry=({metrics:t})=>A.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4",children:[A.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[A.jsx("div",{className:"p-2.5 rounded-lg bg-slate-700/50 text-white",children:A.jsx(tm,{size:22})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"Tiempo Total"}),A.jsx("p",{className:"text-xl font-bold text-white",children:St(t.totalSeconds)})]})]}),A.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-xl p-3 flex items-center space-x-3",children:[A.jsx("div",{className:"p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400",children:A.jsx(Ay,{size:22})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-xs text-emerald-300 font-medium",children:"Trabajo (TUT)"}),A.jsx("p",{className:"text-xl font-bold text-emerald-400",children:St(t.tutSeconds)})]})]}),A.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-xl p-3 flex items-center space-x-3",children:[A.jsx("div",{className:"p-2.5 rounded-lg bg-rose-500/20 text-rose-400",children:A.jsx(tm,{size:22})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-xs text-rose-300 font-medium",children:"Descanso"}),A.jsx("p",{className:"text-xl font-bold text-rose-400",children:St(t.restSeconds)})]})]}),A.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[A.jsx("div",{className:"p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400",children:A.jsx("span",{className:"font-bold text-base",children:"#"})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"Ejercicios / Rondas"}),A.jsxs("p",{className:"text-xl font-bold text-cyan-400",children:[t.exerciseCount," ",A.jsxs("span",{className:"text-xs text-slate-400",children:["(",t.totalRounds," r)"]})]})]})]})]});var Vr={},bx={},Oi={};Object.defineProperty(Oi,"__esModule",{value:!0});Oi.loop=Oi.conditional=Oi.parse=void 0;var Cy=function t(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(n))n.forEach(function(a){return t(e,a,i,r)});else if(typeof n=="function")n(e,i,r,t);else{var s=Object.keys(n)[0];Array.isArray(n[s])?(r[s]={},t(e,n[s],i,r[s])):r[s]=n[s](e,i,r,t)}return i};Oi.parse=Cy;var Py=function(e,n){return function(i,r,s,a){n(i,r,s)&&a(i,e,r,s)}};Oi.conditional=Py;var Ly=function(e,n){return function(i,r,s,a){for(var l=[],o=i.pos;n(i,r,s);){var c={};if(a(i,e,r,c),i.pos===o)break;o=i.pos,l.push(c)}return l}};Oi.loop=Ly;var At={};Object.defineProperty(At,"__esModule",{value:!0});At.readBits=At.readArray=At.readUnsigned=At.readString=At.peekBytes=At.readBytes=At.peekByte=At.readByte=At.buildStream=void 0;var Ny=function(e){return{data:e,pos:0}};At.buildStream=Ny;var Ax=function(){return function(e){return e.data[e.pos++]}};At.readByte=Ax;var Dy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(n){return n.data[n.pos+e]}};At.peekByte=Dy;var xc=function(e){return function(n){return n.data.subarray(n.pos,n.pos+=e)}};At.readBytes=xc;var Iy=function(e){return function(n){return n.data.subarray(n.pos,n.pos+e)}};At.peekBytes=Iy;var Fy=function(e){return function(n){return Array.from(xc(e)(n)).map(function(i){return String.fromCharCode(i)}).join("")}};At.readString=Fy;var Uy=function(e){return function(n){var i=xc(2)(n);return e?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};At.readUnsigned=Uy;var Oy=function(e,n){return function(i,r,s){for(var a=typeof n=="function"?n(i,r,s):n,l=xc(e),o=new Array(a),c=0;c<a;c++)o[c]=l(i);return o}};At.readArray=Oy;var ky=function(e,n,i){for(var r=0,s=0;s<i;s++)r+=e[n+s]&&Math.pow(2,i-s-1);return r},By=function(e){return function(n){for(var i=Ax()(n),r=new Array(8),s=0;s<8;s++)r[7-s]=!!(i&1<<s);return Object.keys(e).reduce(function(a,l){var o=e[l];return o.length?a[l]=ky(r,o.index,o.length):a[l]=r[o.index],a},{})}};At.readBits=By;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=Oi,n=At,i={blocks:function(u){for(var p=0,g=[],_=u.data.length,x=0,d=(0,n.readByte)()(u);d!==p&&d;d=(0,n.readByte)()(u)){if(u.pos+d>=_){var m=_-u.pos;g.push((0,n.readBytes)(m)(u)),x+=m;break}g.push((0,n.readBytes)(d)(u)),x+=d}for(var y=new Uint8Array(x),S=0,E=0;E<g.length;E++)y.set(g[E],S),S+=g[E].length;return y}},r=(0,e.conditional)({gce:[{codes:(0,n.readBytes)(2)},{byteSize:(0,n.readByte)()},{extras:(0,n.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,n.readUnsigned)(!0)},{transparentColorIndex:(0,n.readByte)()},{terminator:(0,n.readByte)()}]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===249}),s=(0,e.conditional)({image:[{code:(0,n.readByte)()},{descriptor:[{left:(0,n.readUnsigned)(!0)},{top:(0,n.readUnsigned)(!0)},{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{lct:(0,n.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,n.readArray)(3,function(f,u,p){return Math.pow(2,p.descriptor.lct.size+1)})},function(f,u,p){return p.descriptor.lct.exists}),{data:[{minCodeSize:(0,n.readByte)()},i]}]},function(f){return(0,n.peekByte)()(f)===44}),a=(0,e.conditional)({text:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{preData:function(u,p,g){return(0,n.readBytes)(g.text.blockSize)(u)}},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===1}),l=(0,e.conditional)({application:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{id:function(u,p,g){return(0,n.readString)(g.blockSize)(u)}},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===255}),o=(0,e.conditional)({comment:[{codes:(0,n.readBytes)(2)},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===254}),c=[{header:[{signature:(0,n.readString)(3)},{version:(0,n.readString)(3)}]},{lsd:[{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{gct:(0,n.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,n.readByte)()},{pixelAspectRatio:(0,n.readByte)()}]},(0,e.conditional)({gct:(0,n.readArray)(3,function(f,u){return Math.pow(2,u.lsd.gct.size+1)})},function(f,u){return u.lsd.gct.exists}),{frames:(0,e.loop)([r,l,o,s,a],function(f){var u=(0,n.peekByte)()(f);return u===33||u===44})}],h=c;t.default=h})(bx);var vc={};Object.defineProperty(vc,"__esModule",{value:!0});vc.deinterlace=void 0;var zy=function(e,n){for(var i=new Array(e.length),r=e.length/n,s=function(u,p){var g=e.slice(p*n,(p+1)*n);i.splice.apply(i,[u*n,n].concat(g))},a=[0,4,2,1],l=[8,8,4,2],o=0,c=0;c<4;c++)for(var h=a[c];h<r;h+=l[c])s(h,o),o++;return i};vc.deinterlace=zy;var _c={};Object.defineProperty(_c,"__esModule",{value:!0});_c.lzw=void 0;var Hy=function(e,n,i){var r=4096,s=-1,a=i,l,o,c,h,f,u,p,w,g,_,E,x,v,M,R,L,d=new Array(i),m=new Array(r),y=new Array(r),S=new Array(r+1);for(x=e,o=1<<x,f=o+1,l=o+2,p=s,h=x+1,c=(1<<h)-1,g=0;g<o;g++)m[g]=0,y[g]=g;var E,w,v,M,L,R;for(E=w=v=M=L=R=0,_=0;_<a;){if(M===0){if(w<h){E+=n[R]<<w,w+=8,R++;continue}if(g=E&c,E>>=h,w-=h,g>l||g==f)break;if(g==o){h=x+1,c=(1<<h)-1,l=o+2,p=s;continue}if(p==s){S[M++]=y[g],p=g,v=g;continue}for(u=g,g==l&&(S[M++]=v,g=p);g>o;)S[M++]=y[g],g=m[g];v=y[g]&255,S[M++]=v,l<r&&(m[l]=p,y[l]=v,l++,!(l&c)&&l<r&&(h++,c+=l)),p=u}M--,d[L++]=S[M],_++}for(_=L;_<a;_++)d[_]=0;return d};_c.lzw=Hy;Object.defineProperty(Vr,"__esModule",{value:!0});var Tx=Vr.decompressFrames=Vr.decompressFrame=Rx=Vr.parseGIF=void 0,Gy=Yy(bx),Vy=Oi,Wy=At,Xy=vc,jy=_c;function Yy(t){return t&&t.__esModule?t:{default:t}}var qy=function(e){var n=new Uint8Array(e);return(0,Vy.parse)((0,Wy.buildStream)(n),Gy.default)},Rx=Vr.parseGIF=qy,$y=function(e){for(var n=e.pixels.length,i=new Uint8ClampedArray(n*4),r=0;r<n;r++){var s=r*4,a=e.pixels[r],l=e.colorTable[a]||[0,0,0];i[s]=l[0],i[s+1]=l[1],i[s+2]=l[2],i[s+3]=a!==e.transparentIndex?255:0}return i},Cx=function(e,n,i){if(!e.image){console.warn("gif frame does not have associated image.");return}var r=e.image,s=r.descriptor.width*r.descriptor.height,a=(0,jy.lzw)(r.data.minCodeSize,r.data.blocks,s);r.descriptor.lct.interlaced&&(a=(0,Xy.deinterlace)(a,r.descriptor.width));var l={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?l.colorTable=r.lct:l.colorTable=n,e.gce&&(l.delay=(e.gce.delay||10)*10,l.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(l.transparentIndex=e.gce.transparentColorIndex)),i&&(l.patch=$y(l)),l};Vr.decompressFrame=Cx;var Ky=function(e,n){return e.frames.filter(function(i){return i.image}).map(function(i){return Cx(i,e.gct,n)})};Tx=Vr.decompressFrames=Ky;var Zy={trailer:59};function Px(t=256){let e=0,n=new Uint8Array(t);return{get buffer(){return n.buffer},reset(){e=0},bytesView(){return n.subarray(0,e)},bytes(){return n.slice(0,e)},writeByte(r){i(e+1),n[e]=r,e++},writeBytes(r,s=0,a=r.length){i(e+a);for(let l=0;l<a;l++)n[e++]=r[l+s]},writeBytesView(r,s=0,a=r.byteLength){i(e+a),n.set(r.subarray(s,s+a),e),e+=a}};function i(r){var s=n.length;if(s>=r)return;var a=1024*1024;r=Math.max(r,s*(s<a?2:1.125)>>>0),s!=0&&(r=Math.max(r,256));let l=n;n=new Uint8Array(r),e>0&&n.set(l.subarray(0,e),0)}}var Qc=12,nm=5003,Jy=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function Qy(t,e,n,i,r=Px(512),s=new Uint8Array(256),a=new Int32Array(nm),l=new Int32Array(nm)){let o=a.length,c=Math.max(2,i);s.fill(0),l.fill(0),a.fill(-1);let h=0,f=0,u=c+1,p=u,g=!1,_=p,x=(1<<_)-1,d=1<<u-1,m=d+1,y=d+2,S=0,E=n[0],w=0;for(let L=o;L<65536;L*=2)++w;w=8-w,r.writeByte(c),M(d);let v=n.length;for(let L=1;L<v;L++)e:{let R=n[L],D=(R<<Qc)+E,I=R<<w^E;if(a[I]===D){E=l[I];break e}let F=I===0?1:o-I;for(;a[I]>=0;)if(I-=F,I<0&&(I+=o),a[I]===D){E=l[I];break e}M(E),E=R,y<1<<Qc?(l[I]=y++,a[I]=D):(a.fill(-1),y=d+2,g=!0,M(d))}return M(E),M(m),r.writeByte(0),r.bytesView();function M(L){for(h&=Jy[f],f>0?h|=L<<f:h=L,f+=_;f>=8;)s[S++]=h&255,S>=254&&(r.writeByte(S),r.writeBytesView(s,0,S),S=0),h>>=8,f-=8;if((y>x||g)&&(g?(_=p,x=(1<<_)-1,g=!1):(++_,x=_===Qc?1<<_:(1<<_)-1)),L==m){for(;f>0;)s[S++]=h&255,S>=254&&(r.writeByte(S),r.writeBytesView(s,0,S),S=0),h>>=8,f-=8;S>0&&(r.writeByte(S),r.writeBytesView(s,0,S),S=0)}}}var eM=Qy;function Lx(t,e,n){return t<<8&63488|e<<2&992|n>>3}function Nx(t,e,n,i){return t>>4|e&240|(n&240)<<4|(i&240)<<8}function Dx(t,e,n){return t>>4<<8|e&240|n>>4}function No(t,e,n){return t<e?e:t>n?n:t}function hl(t){return t*t}function im(t,e,n){var i=0,r=1e100;let s=t[e],a=s.cnt;s.ac;let l=s.rc,o=s.gc,c=s.bc;for(var h=s.fw;h!=0;h=t[h].fw){let u=t[h],p=u.cnt,g=a*p/(a+p);if(!(g>=r)){var f=0;f+=g*hl(u.rc-l),!(f>=r)&&(f+=g*hl(u.gc-o),!(f>=r)&&(f+=g*hl(u.bc-c),!(f>=r)&&(r=f,i=h)))}}s.err=r,s.nn=i}function eu(){return{ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0}}function tM(t,e){let n=e==="rgb444"?4096:65536,i=new Array(n),r=t.length;if(e==="rgba4444")for(let s=0;s<r;++s){let a=t[s],l=a>>24&255,o=a>>16&255,c=a>>8&255,h=a&255,f=Nx(h,c,o,l),u=f in i?i[f]:i[f]=eu();u.rc+=h,u.gc+=c,u.bc+=o,u.ac+=l,u.cnt++}else if(e==="rgb444")for(let s=0;s<r;++s){let a=t[s],l=a>>16&255,o=a>>8&255,c=a&255,h=Dx(c,o,l),f=h in i?i[h]:i[h]=eu();f.rc+=c,f.gc+=o,f.bc+=l,f.cnt++}else for(let s=0;s<r;++s){let a=t[s],l=a>>16&255,o=a>>8&255,c=a&255,h=Lx(c,o,l),f=h in i?i[h]:i[h]=eu();f.rc+=c,f.gc+=o,f.bc+=l,f.cnt++}return i}function Ix(t,e,n={}){let{format:i="rgb565",clearAlpha:r=!0,clearAlphaColor:s=0,clearAlphaThreshold:a=0,oneBitAlpha:l=!1}=n;if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");let o=new Uint32Array(t.buffer),c=n.useSqrt!==!1,h=i==="rgba4444",f=tM(o,i),u=f.length,p=u-1,g=new Uint32Array(u+1);for(var _=0,x=0;x<u;++x){let N=f[x];if(N!=null){var d=1/N.cnt;h&&(N.ac*=d),N.rc*=d,N.gc*=d,N.bc*=d,f[_++]=N}}hl(e)/_<.022&&(c=!1);for(var x=0;x<_-1;++x)f[x].fw=x+1,f[x+1].bk=x,c&&(f[x].cnt=Math.sqrt(f[x].cnt));c&&(f[x].cnt=Math.sqrt(f[x].cnt));var m,y,S;for(x=0;x<_;++x){im(f,x);var E=f[x].err;for(y=++g[0];y>1&&(S=y>>1,!(f[m=g[S]].err<=E));y=S)g[y]=m;g[y]=x}var w=_-e;for(x=0;x<w;){for(var v;;){var M=g[1];if(v=f[M],v.tm>=v.mtm&&f[v.nn].mtm<=v.tm)break;v.mtm==p?M=g[1]=g[g[0]--]:(im(f,M),v.tm=x);var E=f[M].err;for(y=1;(S=y+y)<=g[0]&&(S<g[0]&&f[g[S]].err>f[g[S+1]].err&&S++,!(E<=f[m=g[S]].err));y=S)g[y]=m;g[y]=M}var L=f[v.nn],R=v.cnt,D=L.cnt,d=1/(R+D);h&&(v.ac=d*(R*v.ac+D*L.ac)),v.rc=d*(R*v.rc+D*L.rc),v.gc=d*(R*v.gc+D*L.gc),v.bc=d*(R*v.bc+D*L.bc),v.cnt+=L.cnt,v.mtm=++x,f[L.bk].fw=L.fw,f[L.fw].bk=L.bk,L.mtm=p}let I=[];var F=0;for(x=0;;++F){let N=No(Math.round(f[x].rc),0,255),G=No(Math.round(f[x].gc),0,255),q=No(Math.round(f[x].bc),0,255),z=255;h&&(z=No(Math.round(f[x].ac),0,255),l&&(z=z<=(typeof l=="number"?l:127)?0:255),r&&z<=a&&(N=G=q=s,z=0));let H=h?[N,G,q,z]:[N,G,q];if(nM(I,H)||I.push(H),(x=f[x].fw)==0)break}return I}function nM(t,e){for(let n=0;n<t.length;n++){let i=t[n],r=i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2],s=i.length>=4&&e.length>=4?i[3]===e[3]:!0;if(r&&s)return!0}return!1}function Fx(t,e,n="rgb565"){if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");if(e.length>256)throw new Error("applyPalette() only works with 256 colors or less");let i=new Uint32Array(t.buffer),r=i.length,s=n==="rgb444"?4096:65536,a=new Uint8Array(r),l=new Array(s);if(n==="rgba4444")for(let o=0;o<r;o++){let c=i[o],h=c>>24&255,f=c>>16&255,u=c>>8&255,p=c&255,g=Nx(p,u,f,h),_=g in l?l[g]:l[g]=iM(p,u,f,h,e);a[o]=_}else{let o=n==="rgb444"?Dx:Lx;for(let c=0;c<r;c++){let h=i[c],f=h>>16&255,u=h>>8&255,p=h&255,g=o(p,u,f),_=g in l?l[g]:l[g]=rM(p,u,f,e);a[c]=_}}return a}function iM(t,e,n,i,r){let s=0,a=1e100;for(let l=0;l<r.length;l++){let o=r[l],c=o[3],h=zr(c-i);if(h>a)continue;let f=o[0];if(h+=zr(f-t),h>a)continue;let u=o[1];if(h+=zr(u-e),h>a)continue;let p=o[2];h+=zr(p-n),!(h>a)&&(a=h,s=l)}return s}function rM(t,e,n,i){let r=0,s=1e100;for(let a=0;a<i.length;a++){let l=i[a],o=l[0],c=zr(o-t);if(c>s)continue;let h=l[1];if(c+=zr(h-e),c>s)continue;let f=l[2];c+=zr(f-n),!(c>s)&&(s=c,r=a)}return r}function zr(t){return t*t}function Ux(t={}){let{initialCapacity:e=4096,auto:n=!0}=t,i=Px(e),r=5003,s=new Uint8Array(256),a=new Int32Array(r),l=new Int32Array(r),o=!1;return{reset(){i.reset(),o=!1},finish(){i.writeByte(Zy.trailer)},bytes(){return i.bytes()},bytesView(){return i.bytesView()},get buffer(){return i.buffer},get stream(){return i},writeHeader:c,writeFrame(h,f,u,p={}){let{transparent:g=!1,transparentIndex:_=0,delay:x=0,palette:d=null,repeat:m=0,colorDepth:y=8,dispose:S=-1}=p,E=!1;if(n?o||(E=!0,c(),o=!0):E=!!p.first,f=Math.max(0,Math.floor(f)),u=Math.max(0,Math.floor(u)),E){if(!d)throw new Error("First frame must include a { palette } option");aM(i,f,u,d,y),rm(i,d),m>=0&&oM(i,m)}let w=Math.round(x/10);sM(i,S,w,g,_);let v=!!d&&!E;lM(i,f,u,v?d:null),v&&rm(i,d),cM(i,h,f,u,y,s,a,l)}};function c(){Ox(i,"GIF89a")}}function sM(t,e,n,i,r){t.writeByte(33),t.writeByte(249),t.writeByte(4),r<0&&(r=0,i=!1);var s,a;i?(s=1,a=2):(s=0,a=0),e>=0&&(a=e&7),a<<=2,t.writeByte(0|a|0|s),cr(t,n),t.writeByte(r||0),t.writeByte(0)}function aM(t,e,n,i,r=8){let s=1,a=0,l=dh(i.length)-1,o=s<<7|r-1<<4|a<<3|l;cr(t,e),cr(t,n),t.writeBytes([o,0,0])}function oM(t,e){t.writeByte(33),t.writeByte(255),t.writeByte(11),Ox(t,"NETSCAPE2.0"),t.writeByte(3),t.writeByte(1),cr(t,e),t.writeByte(0)}function rm(t,e){let n=1<<dh(e.length);for(let i=0;i<n;i++){let r=[0,0,0];i<e.length&&(r=e[i]),t.writeByte(r[0]),t.writeByte(r[1]),t.writeByte(r[2])}}function lM(t,e,n,i){if(t.writeByte(44),cr(t,0),cr(t,0),cr(t,e),cr(t,n),i){let r=0,s=0,a=dh(i.length)-1;t.writeByte(128|r|s|0|a)}else t.writeByte(0)}function cM(t,e,n,i,r=8,s,a,l){eM(n,i,e,r,t,s,a,l)}function cr(t,e){t.writeByte(e&255),t.writeByte(e>>8&255)}function Ox(t,e){for(var n=0;n<e.length;n++)t.writeByte(e.charCodeAt(n))}function dh(t){return Math.max(Math.ceil(Math.log2(t)),1)}const uM=240,dM=220,sm=180,am=85,fM=240*1024,hM=280*1024,tu=60;function pM(t){if(t.length<6)return!1;const e=String.fromCharCode(t[0],t[1],t[2],t[3],t[4],t[5]);return e==="GIF87a"||e==="GIF89a"}function mM(t){const n=[];for(let i=0;i<t.length;i+=32768){const r=t.subarray(i,i+32768);n.push(String.fromCharCode(...r))}return btoa(n.join(""))}function kx(t,e,n){if(t<=0||e<=0)return{width:n,height:n};if(t<=n&&e<=n)return{width:t,height:e};const i=Math.min(n/t,n/e);return{width:Math.max(1,Math.round(t*i)),height:Math.max(1,Math.round(e*i))}}function gM(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e;const r=i.getContext("2d",{willReadFrequently:!0});if(!r)return[];const s=document.createElement("canvas"),a=s.getContext("2d");if(!a)return[];const l=[];let o=0;for(let u=0;u<n.length;u++){const p=n[u].delay&&n[u].delay>0?n[u].delay:100,g=Math.max(p,20);u===0?(l.push({frameIdx:0,delayMs:g}),o=0):(o+=g,(o>=am||u===n.length-1)&&(l.push({frameIdx:u,delayMs:o}),o=0))}let c;if(l.length>tu){c=new Map;const u=l.length/tu;for(let p=0;p<tu;p++){const g=Math.floor(p*u),_=Math.min(l.length,Math.floor((p+1)*u));let x=0;for(let d=g;d<_;d++)x+=l[d].delayMs;c.set(l[g].frameIdx,Math.max(am,x))}}else c=new Map(l.map(u=>[u.frameIdx,u.delayMs]));const h=[];let f=null;for(let u=0;u<n.length;u++){const p=n[u],{width:g,height:_,left:x,top:d}=p.dims;if(p.disposalType===3&&(f=r.getImageData(0,0,t,e)),g>0&&_>0&&p.patch&&p.patch.length===g*_*4){s.width=g,s.height=_;const y=new ImageData(new Uint8ClampedArray(p.patch),g,_);a.putImageData(y,0,0),r.drawImage(s,x,d)}const m=c.get(u);if(m!==void 0){const y=document.createElement("canvas");y.width=t,y.height=e;const S=y.getContext("2d");S&&(S.fillStyle="#0F172A",S.fillRect(0,0,t,e),S.drawImage(i,0,0),h.push({canvas:y,delayMs:m}))}p.disposalType===2?r.clearRect(x,d,g,_):p.disposalType===3&&f&&(r.putImageData(f,0,0),f=null)}return h}function nu(t,e,n,i,r,s){const{width:a,height:l}=kx(e,n,i),o=document.createElement("canvas");o.width=a,o.height=l;const c=o.getContext("2d",{willReadFrequently:!0});if(!c)return null;const h=Ux();let f=0;for(let u=0;u<t.length;u+=s){const p=t[u];let g=p.delayMs;if(s>1)for(let m=u+1;m<Math.min(u+s,t.length);m++)g+=t[m].delayMs;c.fillStyle="#0F172A",c.fillRect(0,0,a,l),c.drawImage(p.canvas,0,0,a,l);const _=c.getImageData(0,0,a,l).data,x=Ix(_,r,{format:"rgb565"}),d=Fx(_,x,"rgb565");h.writeFrame(d,a,l,{palette:x,delay:g,repeat:f===0?0:void 0}),f++}return f===0?null:(h.finish(),h.bytes())}async function xM(t){const e=URL.createObjectURL(t);try{const n=await new Promise((h,f)=>{const u=new Image;u.onload=()=>h(u),u.onerror=()=>f(new Error("No se pudo decodificar la imagen.")),u.src=e}),{width:i,height:r}=kx(n.naturalWidth||n.width,n.naturalHeight||n.height,uM),s=document.createElement("canvas");s.width=i,s.height=r;const a=s.getContext("2d");if(!a)throw new Error("Canvas no disponible.");a.fillStyle="#0F172A",a.fillRect(0,0,i,r),a.drawImage(n,0,0,i,r);let l=s.toDataURL("image/webp",.8);l.startsWith("data:image/webp")||(l=s.toDataURL("image/jpeg",.82));const o=l.slice(l.indexOf("base64,")+7).length,c=Math.max(1,Math.round(o*3/4/1024));return{mediaData:l,sizeKb:c,isAnimated:!1}}finally{URL.revokeObjectURL(e)}}async function vM(t){const e=await t.arrayBuffer(),n=new Uint8Array(e);if(pM(n)||t.type==="image/gif")try{const r=Rx(e),s=Tx(r,!0);if(s.length>1){const a=r.lsd.width||s[0].dims.width,l=r.lsd.height||s[0].dims.height,o=gM(a,l,s);if(o.length>1){let c=nu(o,a,l,dM,64,1);if(c&&c.length>fM&&(c=nu(o,a,l,sm,32,1)),c&&c.length>hM&&(c=nu(o,a,l,sm,32,2)),c&&c.length>0){const h=`data:image/gif;base64,${mM(c)}`,f=Math.max(1,Math.round(c.length/1024));return{mediaData:h,sizeKb:f,isAnimated:!0}}}}}catch(r){console.warn("Fallo al re-codificar GIF en navegador, usando modo estático:",r)}return xM(t)}const is={pelvisOffsetY:0,torsoPitch:0,torsoTwist:0,torsoRoll:0,headPitch:0,leftArmLift:8,rightArmLift:8,leftArmOut:8,rightArmOut:8,leftElbowFlex:12,rightElbowFlex:12,leftHipFlex:0,rightHipFlex:0,leftHipOut:4,rightHipOut:4,leftKneeFlex:4,rightKneeFlex:4};function ct(t){switch(t){case"supine":return{...is,headPitch:15,leftArmLift:0,rightArmLift:0,leftArmOut:12,rightArmOut:12,leftHipFlex:10,rightHipFlex:10,leftKneeFlex:10,rightKneeFlex:10};case"prone":return{...is,headPitch:-22,leftArmLift:165,rightArmLift:165,leftArmOut:8,rightArmOut:8,leftHipFlex:-5,rightHipFlex:-5};case"plank":return{...is,headPitch:-15,leftArmLift:88,rightArmLift:88,leftElbowFlex:6,rightElbowFlex:6,leftHipFlex:0,rightHipFlex:0};case"quadruped":return{...is,headPitch:-18,leftArmLift:88,rightArmLift:88,leftElbowFlex:4,rightElbowFlex:4,leftHipFlex:88,rightHipFlex:88,leftKneeFlex:90,rightKneeFlex:90};case"seated":return{...is,torsoPitch:10,leftArmLift:25,rightArmLift:25,leftElbowFlex:70,rightElbowFlex:70,leftHipFlex:82,rightHipFlex:82,leftKneeFlex:75,rightKneeFlex:75};case"standing":default:return{...is}}}function _M(t,e="Ejercicio personalizado"){const n=ct(t);return{title:e,posture:t,prop:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"||t==="seated"?"mat":"none",camera:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"?"low_side":"three_quarter",frameDelayMs:80,isometricPulse:!1,poseA:{...n},poseB:{...n}}}function SM(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}function $e(t,e){return e.some(n=>t.includes(n))}const yM=["Bicho muerto alternado","Puente de glúteo a una pierna","Toque de talones tumbado boca arriba","Isométrico de cuello","Patada de glúteo en cuatro apoyos","Remo alternado con mancuernas"];function iu(t){const e=t.trim()||"Ejercicio personalizado",n=SM(e),i=[],r=$e(n,["una pierna","un brazo","unilateral","single leg","single arm","alternad","alterno","alterna","izquierd","derech"]),s=$e(n,["isometric","mantener","hold","estatic","aguantar"]);let a="none";if($e(n,["mancuerna","dumbbell","pesa ","pesas"])?(a="dumbbells",i.push("Mancuernas")):$e(n,["barra","barbell","press militar","peso muerto"])?(a="barbell",i.push("Barra")):$e(n,["kettlebell","pesa rusa","disco","plate"])?(a="kettlebell",i.push("Kettlebell / Disco")):$e(n,["cajon","box","banco","silla","step","escalon"])?(a="box",i.push("Cajón / Banco")):$e(n,["boxeo","guante","jab","cross","gancho","hook","uppercut","puno"])&&(a="gloves",i.push("Guantes de boxeo")),$e(n,["bicho muerto","dead bug","deadbug"]))return i.push("Boca arriba en colchoneta","Movimiento cruzado brazo/pierna"),{spec:{title:e,posture:"supine",prop:a==="none"?"mat":a,camera:"low_side",frameDelayMs:90,isometricPulse:s,poseA:s?{...ct("supine"),leftArmLift:90,rightArmLift:90,leftHipFlex:90,rightHipFlex:90,leftKneeFlex:90,rightKneeFlex:90}:{...ct("supine"),leftArmLift:165,rightArmLift:90,leftHipFlex:90,rightHipFlex:12,leftKneeFlex:90,rightKneeFlex:10},poseB:s?{...ct("supine"),pelvisOffsetY:.02,leftArmLift:94,rightArmLift:94,leftHipFlex:86,rightHipFlex:86,leftKneeFlex:90,rightKneeFlex:90}:{...ct("supine"),leftArmLift:90,rightArmLift:165,leftHipFlex:12,rightHipFlex:90,leftKneeFlex:10,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if($e(n,["toque de talon","tocar talon","talones","heel touch","penguin"]))return i.push("Boca arriba","Rodillas flexionadas y balanceo lateral"),{spec:{title:e,posture:"supine",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...ct("supine"),torsoPitch:24,torsoTwist:-18,torsoRoll:-16,headPitch:22,leftArmLift:25,rightArmLift:15,leftArmOut:22,rightArmOut:10,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112},poseB:{...ct("supine"),torsoPitch:24,torsoTwist:18,torsoRoll:16,headPitch:22,leftArmLift:15,rightArmLift:25,leftArmOut:10,rightArmOut:22,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112}},matchedNotes:i,confidence:"high"};if($e(n,["puente","glute bridge","hip thrust","elevacion de cadera"]))return i.push("Boca arriba",r?"A una pierna":"Elevación de cadera"),{spec:{title:e,posture:"supine",prop:"mat",camera:"low_side",frameDelayMs:85,isometricPulse:s,poseA:{...ct("supine"),pelvisOffsetY:0,torsoPitch:0,leftHipFlex:55,rightHipFlex:r?75:55,leftKneeFlex:115,rightKneeFlex:r?12:115,leftArmLift:0,rightArmLift:0,leftArmOut:14,rightArmOut:14},poseB:{...ct("supine"),pelvisOffsetY:.22,torsoPitch:24,headPitch:18,leftHipFlex:0,rightHipFlex:r?45:0,leftKneeFlex:92,rightKneeFlex:r?10:92,leftArmLift:-20,rightArmLift:-20,leftArmOut:14,rightArmOut:14}},matchedNotes:i,confidence:"high"};if($e(n,["cuello","neck","cervical"]))return i.push("Activación cervical",s?"Isométrico":"Movilidad de cuello"),{spec:{title:e,posture:"standing",prop:"none",camera:"three_quarter",frameDelayMs:95,isometricPulse:!0,poseA:{...ct("standing"),headPitch:s?-6:-22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18},poseB:{...ct("standing"),headPitch:s?6:22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18}},matchedNotes:i,confidence:"high"};if($e(n,["bird dog","birddog","perro de caza","perro pajaro"]))return i.push("Cuatro apoyos","Extensión cruzada"),{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...ct("quadruped"),leftArmLift:170,rightArmLift:88,leftHipFlex:88,rightHipFlex:-8,leftKneeFlex:90,rightKneeFlex:8},poseB:{...ct("quadruped"),leftArmLift:88,rightArmLift:170,leftHipFlex:-8,rightHipFlex:88,leftKneeFlex:8,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if($e(n,["patada de gluteo","donkey kick","glute kick","hidrante","cuatro apoyos","cuadrupedia"])){i.push("Cuatro apoyos en colchoneta");const u=$e(n,["hidrante","lateral","abduccion"]);return{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:80,isometricPulse:!1,poseA:ct("quadruped"),poseB:{...ct("quadruped"),leftHipFlex:u?85:-25,leftHipOut:u?55:0,leftKneeFlex:85}},matchedNotes:i,confidence:"high"}}if($e(n,["plancha","plank"]))return $e(n,["superman"])?(i.push("Plancha","Extensión alternada brazo/pierna"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...ct("plank"),leftArmLift:172,rightHipFlex:-16},poseB:{...ct("plank"),rightArmLift:172,leftHipFlex:-16}},matchedNotes:i,confidence:"high"}):$e(n,["toque de hombro","shoulder tap","hombros"])?(i.push("Plancha","Toques de hombro alternados"),{spec:{title:e,posture:"plank",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...ct("plank"),leftArmLift:105,leftArmOut:-20,leftElbowFlex:120},poseB:{...ct("plank"),rightArmLift:105,rightArmOut:-20,rightElbowFlex:120}},matchedNotes:i,confidence:"high"}):(i.push("Plancha abdominal"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:95,isometricPulse:!0,poseA:{...ct("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.18},poseB:{...ct("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.15,torsoPitch:3}},matchedNotes:i,confidence:"high"});let l="standing";$e(n,["boca arriba","tumbado","acostado","abdominal","crunch","hollow","v-up","sit up"])?(l="supine",i.push("Postura boca arriba")):$e(n,["boca abajo","superman","lumbar","espinal"])?(l="prone",i.push("Postura boca abajo")):$e(n,["sentado","seated","giro ruso","russian"])&&(l="seated",i.push("Postura sentada")),a==="none"&&l!=="standing"&&(a="mat");const o=ct(l),c=ct(l);let h=l==="standing"?"three_quarter":"low_side",f=!1;if($e(n,["sentadilla","squat","silla"])){f=!0,i.push("Flexión de piernas (sentadilla)");const u=$e(n,["sumo","abierta"]);o.leftHipOut=u?28:8,o.rightHipOut=u?28:8,c.pelvisOffsetY=-.34,c.torsoPitch=18,c.leftHipFlex=82,c.rightHipFlex=r?25:82,c.leftHipOut=u?34:10,c.rightHipOut=u?34:10,c.leftKneeFlex=96,c.rightKneeFlex=r?10:96,c.leftArmLift=65,c.rightArmLift=65,(a==="dumbbells"||a==="kettlebell")&&(o.leftArmLift=45,o.rightArmLift=45,o.leftElbowFlex=95,o.rightElbowFlex=95,c.leftArmLift=55,c.rightArmLift=55,c.leftElbowFlex=95,c.rightElbowFlex=95)}else $e(n,["zancada","estocada","lunge","bulgara"])?(f=!0,i.push("Zancada"),h="side",c.pelvisOffsetY=-.26,c.leftHipFlex=78,c.leftKneeFlex=85,c.rightHipFlex=-22,c.rightKneeFlex=88,c.leftArmLift=45,c.rightArmLift=45):$e(n,["flexion","pushup","push-up","lagartija"])?(f=!0,l="plank",a="mat",h="low_side",i.push("Flexiones en suelo"),Object.assign(o,ct("plank")),Object.assign(c,ct("plank"),{pelvisOffsetY:-.2,leftArmLift:58,rightArmLift:58,leftArmOut:28,rightArmOut:28,leftElbowFlex:105,rightElbowFlex:105})):$e(n,["remo","row"])?(f=!0,a==="none"&&(a="dumbbells"),h="three_quarter",i.push("Tracción / Remo"),o.pelvisOffsetY=-.06,o.torsoPitch=38,o.headPitch=-25,o.leftHipFlex=42,o.rightHipFlex=42,o.leftKneeFlex=24,o.rightKneeFlex=24,o.leftArmLift=45,o.rightArmLift=45,Object.assign(c,o),c.leftArmLift=-10,c.leftElbowFlex=92,r?(o.rightArmLift=-10,o.rightElbowFlex=92,c.rightArmLift=45,c.rightElbowFlex=10):(c.rightArmLift=-10,c.rightElbowFlex=92)):$e(n,["curl","bicep"])?(f=!0,a==="none"&&(a="dumbbells"),i.push("Flexión de bíceps"),o.leftElbowFlex=12,o.rightElbowFlex=r?128:12,c.leftElbowFlex=128,c.rightElbowFlex=r?12:128):$e(n,["press","hombro","militar","empuje arriba"])?(f=!0,a==="none"&&(a="dumbbells"),i.push("Empuje vertical sobre cabeza"),o.leftArmLift=42,o.rightArmLift=42,o.leftArmOut=30,o.rightArmOut=30,o.leftElbowFlex=105,o.rightElbowFlex=105,c.leftArmLift=172,c.rightArmLift=r?42:172,c.leftArmOut=10,c.rightArmOut=r?30:10,c.leftElbowFlex=8,c.rightElbowFlex=r?105:8):$e(n,["lateral","vuelo","pajaro","abduccion brazo"])?(f=!0,a==="none"&&(a="dumbbells"),h="front",i.push("Elevación lateral"),o.leftArmOut=10,o.rightArmOut=10,c.leftArmOut=88,c.rightArmOut=88,c.leftElbowFlex=16,c.rightElbowFlex=16):$e(n,["peso muerto","deadlift","buenos dias","good morning","bisagra"])?(f=!0,h="side",i.push("Bisagra de cadera"),c.pelvisOffsetY=-.06,c.torsoPitch=58,c.headPitch=-28,c.leftHipFlex=58,c.rightHipFlex=58,c.leftKneeFlex=20,c.rightKneeFlex=20,c.leftArmLift=58,c.rightArmLift=58):$e(n,["patada","kick","rodillazo","rodilla"])?(f=!0,h="three_quarter",i.push("Patada / elevación de pierna"),o.leftArmLift=55,o.rightArmLift=55,o.leftElbowFlex=95,o.rightElbowFlex=95,Object.assign(c,o),c.leftHipFlex=95,c.leftKneeFlex=$e(n,["rodilla","knee"])?95:10):$e(n,["salto","jump","tijera","jack","skipping"])?(f=!0,h="front",i.push("Salto dinámico"),c.pelvisOffsetY=.14,c.leftArmOut=145,c.rightArmOut=145,c.leftHipOut=26,c.rightHipOut=26):$e(n,["giro","rotacion","twist","lenador","oblicuo"])?(f=!0,i.push("Rotación de tronco"),o.torsoTwist=-38,o.leftArmLift=65,o.rightArmLift=65,o.leftElbowFlex=45,o.rightElbowFlex=45,Object.assign(c,o),c.torsoTwist=38):$e(n,["abdominal","crunch","encogimiento","sit up"])?(f=!0,l="supine",a="mat",h="low_side",i.push("Flexión abdominal"),Object.assign(o,ct("supine"),{leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112,leftArmLift:90,rightArmLift:90,leftElbowFlex:110,rightElbowFlex:110}),Object.assign(c,o,{torsoPitch:36,headPitch:25})):$e(n,["elevacion","elevar","subir","levantar"])&&(f=!0,i.push("Elevación controlada"),$e(n,["pierna","leg","rodilla"])?(c.leftHipFlex=78,c.rightHipFlex=r?0:78):(c.leftArmLift=155,c.rightArmLift=r?10:155));return s&&f&&(i.push("Variante isométrica"),Object.assign(o,c),c.pelvisOffsetY=Math.min(.3,c.pelvisOffsetY+.02),c.torsoPitch=Math.min(90,c.torsoPitch+2)),{spec:{title:e,posture:l,prop:a,camera:h,frameDelayMs:s?95:80,isometricPulse:s,poseA:o,poseB:c},matchedNotes:i.length>0?i:["Postura base sugerida (ajusta Pose A y Pose B a tu gusto)"],confidence:f?"high":i.length>0?"medium":"low"}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="187",MM=0,om=1,EM=2,pl=1,Bx=2,va=3,Kr=0,En=1,gi=2,Fs=0,Ca=1,lm=2,cm=3,um=4,wM=5,gs=100,bM=101,AM=102,TM=103,RM=104,CM=200,PM=201,LM=202,NM=203,zx=204,Hx=205,DM=206,IM=207,FM=208,UM=209,OM=210,kM=211,BM=212,zM=213,HM=214,Ad=0,Td=1,Rd=2,$a=3,Cd=4,Pd=5,Ld=6,Nd=7,Gx=0,GM=1,VM=2,ki=0,Vx=1,Wx=2,Xx=3,hh=4,jx=5,Yx=6,qx=7,$x=300,Ws=301,Ka=302,ru=303,su=304,Dd=1e3,Fi=1001,Id=1002,Kt=1003,WM=1004,Do=1005,_n=1006,au=1007,ur=1008,Rn=1009,Kx=1010,Zx=1011,Za=1012,ph=1013,Mi=1014,xi=1015,Ei=1016,mh=1017,gh=1018,Xs=1020,Jx=35902,Qx=35899,ev=1021,tv=1022,vi=1023,Er=1026,dr=1027,nv=1028,xh=1029,Zr=1030,vh=1031,_h=1033,ml=33776,gl=33777,xl=33778,vl=33779,Fd=35840,Ud=35841,Od=35842,kd=35843,Bd=36196,zd=37492,Hd=37496,Gd=37488,Vd=37489,jl=37490,Wd=37491,Xd=37808,jd=37809,Yd=37810,qd=37811,$d=37812,Kd=37813,Zd=37814,Jd=37815,Qd=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,af=36492,of=36494,lf=36495,cf=36283,uf=36284,Yl=36285,df=36286,XM=3200,ff=0,jM=1,ar="",zn="srgb",ql="srgb-linear",$l="linear",st="srgb",ou=7680,YM=519,qM=512,$M=513,KM=514,iv=515,ZM=516,JM=517,rv=518,sv=519,QM=35044,dm="300 es",ii=2e3,Ja=2001;function e1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function t1(){const t=Kl("canvas");return t.style.display="block",t}const fm={};function hm(...t){const e="THREE."+t.shift();console.log(e,...t)}function av(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=av(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=av(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function _l(...t){const e=t.join(" ");e in fm||(fm[e]=!0,Ie(...t))}function n1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const i1={[Ad]:Ad,[Rd]:Ld,[Cd]:Cd,[$a]:Pd,[Td]:Td,[Ld]:Rd,[Nd]:Nd,[Pd]:$a};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=Math.PI/180,hf=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function r1(t,e){return(t%e+e)%e}function cu(t,e,n){return(1-n)*t+n*e}function s1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Sh(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function a1(t,e){if(e.constructor===Float32Array)return t;const n=Sh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function o1(t,e){if(e.constructor===Float32Array)return t;const n=Sh(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Rh=class Rh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;let Ne=Rh;class Zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let o=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(f!==_||o!==u||c!==p||h!==g){let x=o*u+c*p+h*g+f*_;x<0&&(u=-u,p=-p,g=-g,_=-_,x=-x);let d=1-l;if(x<.9995){const m=Math.acos(x),y=Math.sin(m);d=Math.sin(d*m)/y,l=Math.sin(l*m)/y,o=o*d+u*l,c=c*d+p*l,h=h*d+g*l,f=f*d+_*l}else{o=o*d+u*l,c=c*d+p*l,h=h*d+g*l,f=f*d+_*l;const m=1/Math.sqrt(o*o+c*c+h*h+f*f);o*=m,c*=m,h*=m,f*=m}}e[n]=o,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],o=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[n]=l*g+h*f+o*p-c*u,e[n+1]=o*g+h*u+c*f-l*p,e[n+2]=c*g+h*p+l*u-o*f,e[n+3]=h*g-l*f-o*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,o=Math.sin,c=l(i/2),h=l(r/2),f=l(s/2),u=o(i/2),p=o(r/2),g=o(s/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],o=n[9],c=n[2],h=n[6],f=n[10],u=i+l+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-o)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>l&&i>f){const p=2*Math.sqrt(1+i-l-f);this._w=(h-o)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(l>f){const p=2*Math.sqrt(1+l-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(o+h)/p}else{const p=2*Math.sqrt(1+f-i-l);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(o+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,o=n._y,c=n._z,h=n._w;return this._x=i*h+a*l+r*c-s*o,this._y=r*h+a*o+s*l-i*c,this._z=s*h+a*c+i*o-r*l,this._w=a*h-i*l-r*o-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let o=1-n;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);o=Math.sin(o*c)/h,n=Math.sin(n*c)/h,this._x=this._x*o+i*n,this._y=this._y*o+r*n,this._z=this._z*o+s*n,this._w=this._w*o+a*n,this._onChangeCallback()}else this._x=this._x*o+i*n,this._y=this._y*o+r*n,this._z=this._z*o+s*n,this._w=this._w*o+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ch=class Ch{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,o=e.w,c=2*(a*r-l*i),h=2*(l*n-s*r),f=2*(s*i-a*n);return this.x=n+o*c+a*f-l*h,this.y=i+o*h+l*c-s*f,this.z=r+o*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,o=n.z;return this.x=r*o-s*l,this.y=s*a-i*o,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ch.prototype.isVector3=!0;let j=Ch;const uu=new j,pm=new Zs,Ph=class Ph{constructor(e,n,i,r,s,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,o,c)}set(e,n,i,r,s,a,l,o,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=o,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],o=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],_=r[0],x=r[3],d=r[6],m=r[1],y=r[4],S=r[7],E=r[2],w=r[5],v=r[8];return s[0]=a*_+l*m+o*E,s[3]=a*x+l*y+o*w,s[6]=a*d+l*S+o*v,s[1]=c*_+h*m+f*E,s[4]=c*x+h*y+f*w,s[7]=c*d+h*S+f*v,s[2]=u*_+p*m+g*E,s[5]=u*x+p*y+g*w,s[8]=u*d+p*S+g*v,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8];return n*a*h-n*l*c-i*s*h+i*l*o+r*s*c-r*a*o}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],f=h*a-l*c,u=l*o-h*s,p=c*s-a*o,g=n*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(l*i-r*a)*_,e[3]=u*_,e[4]=(h*n-r*o)*_,e[5]=(r*s-l*n)*_,e[6]=p*_,e[7]=(i*o-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const o=Math.cos(s),c=Math.sin(s);return this.set(i*o,i*c,-i*(o*a+c*l)+a+e,-r*c,r*o,-r*(-c*a+o*l)+l+n,0,0,1),this}scale(e,n){return _l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(du.makeScale(e,n)),this}rotate(e){return _l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(du.makeRotation(-e)),this}translate(e,n){return _l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;let Ue=Ph;const du=new Ue,mm=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l1(){const t={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?$l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ql]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const Ze=l1();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rs;class c1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Kl("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u1=0;class yh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(fu(r[a].image)):s.push(fu(r[a]))}else s=fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let d1=0;const hu=new j;class hn extends ts{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Fi,r=Fi,s=_n,a=ur,l=vi,o=Rn,c=hn.DEFAULT_ANISOTROPY,h=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=so(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=$x;hn.DEFAULT_ANISOTROPY=1;const Lh=class Lh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const o=e.elements,c=o[0],h=o[4],f=o[8],u=o[1],p=o[5],g=o[9],_=o[2],x=o[6],d=o[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,E=(d+1)/2,w=(h+u)/4,v=(f+_)/4,M=(g+x)/4;return y>S&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=v/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=M/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=v/s,r=M/s),this.set(i,r,s,n),this}let m=Math.sqrt((x-g)*(x-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(f-_)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;let yt=Lh;class f1 extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new yh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends f1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ov extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h1 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ql=class Ql{constructor(e,n,i,r,s,a,l,o,c,h,f,u,p,g,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,o,c,h,f,u,p,g,_,x)}set(e,n,i,r,s,a,l,o,c,h,f,u,p,g,_,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=o,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=_,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*f,g=l*h,_=l*f;n[0]=o*h,n[4]=-o*f,n[8]=c,n[1]=p+g*c,n[5]=u-_*c,n[9]=-l*o,n[2]=_-u*c,n[6]=g+p*c,n[10]=a*o}else if(e.order==="YXZ"){const u=o*h,p=o*f,g=c*h,_=c*f;n[0]=u+_*l,n[4]=g*l-p,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-l,n[2]=p*l-g,n[6]=_+u*l,n[10]=a*o}else if(e.order==="ZXY"){const u=o*h,p=o*f,g=c*h,_=c*f;n[0]=u-_*l,n[4]=-a*f,n[8]=g+p*l,n[1]=p+g*l,n[5]=a*h,n[9]=_-u*l,n[2]=-a*c,n[6]=l,n[10]=a*o}else if(e.order==="ZYX"){const u=a*h,p=a*f,g=l*h,_=l*f;n[0]=o*h,n[4]=g*c-p,n[8]=u*c+_,n[1]=o*f,n[5]=_*c+u,n[9]=p*c-g,n[2]=-c,n[6]=l*o,n[10]=a*o}else if(e.order==="YZX"){const u=a*o,p=a*c,g=l*o,_=l*c;n[0]=o*h,n[4]=_-u*f,n[8]=g*f+p,n[1]=f,n[5]=a*h,n[9]=-l*h,n[2]=-c*h,n[6]=p*f+g,n[10]=u-_*f}else if(e.order==="XZY"){const u=a*o,p=a*c,g=l*o,_=l*c;n[0]=o*h,n[4]=-f,n[8]=c*h,n[1]=u*f+_,n[5]=a*h,n[9]=p*f-g,n[2]=g*f-p,n[6]=l*h,n[10]=_*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p1,e,m1)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),qi.crossVectors(i,bn),qi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),qi.crossVectors(i,bn)),qi.normalize(),Io.crossVectors(bn,qi),r[0]=qi.x,r[4]=Io.x,r[8]=bn.x,r[1]=qi.y,r[5]=Io.y,r[9]=bn.y,r[2]=qi.z,r[6]=Io.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],o=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],_=i[6],x=i[10],d=i[14],m=i[3],y=i[7],S=i[11],E=i[15],w=r[0],v=r[4],M=r[8],L=r[12],R=r[1],D=r[5],I=r[9],F=r[13],N=r[2],G=r[6],q=r[10],z=r[14],H=r[3],k=r[7],C=r[11],V=r[15];return s[0]=a*w+l*R+o*N+c*H,s[4]=a*v+l*D+o*G+c*k,s[8]=a*M+l*I+o*q+c*C,s[12]=a*L+l*F+o*z+c*V,s[1]=h*w+f*R+u*N+p*H,s[5]=h*v+f*D+u*G+p*k,s[9]=h*M+f*I+u*q+p*C,s[13]=h*L+f*F+u*z+p*V,s[2]=g*w+_*R+x*N+d*H,s[6]=g*v+_*D+x*G+d*k,s[10]=g*M+_*I+x*q+d*C,s[14]=g*L+_*F+x*z+d*V,s[3]=m*w+y*R+S*N+E*H,s[7]=m*v+y*D+S*G+E*k,s[11]=m*M+y*I+S*q+E*C,s[15]=m*L+y*F+S*z+E*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],o=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],_=e[7],x=e[11],d=e[15],m=o*p-c*u,y=l*p-c*f,S=l*u-o*f,E=a*p-c*h,w=a*u-o*h,v=a*f-l*h;return n*(_*m-x*y+d*S)-i*(g*m-x*E+d*w)+r*(g*y-_*E+d*v)-s*(g*S-_*w+x*v)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],o=e[2],c=e[6],h=e[10];return n*(a*h-l*c)-i*(s*h-l*o)+r*(s*c-a*o)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],_=e[13],x=e[14],d=e[15],m=n*l-i*a,y=n*o-r*a,S=n*c-s*a,E=i*o-r*l,w=i*c-s*l,v=r*c-s*o,M=h*_-f*g,L=h*x-u*g,R=h*d-p*g,D=f*x-u*_,I=f*d-p*_,F=u*d-p*x,N=m*F-y*I+S*D+E*R-w*L+v*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/N;return e[0]=(l*F-o*I+c*D)*G,e[1]=(r*I-i*F-s*D)*G,e[2]=(_*v-x*w+d*E)*G,e[3]=(u*w-f*v-p*E)*G,e[4]=(o*R-a*F-c*L)*G,e[5]=(n*F-r*R+s*L)*G,e[6]=(x*S-g*v-d*y)*G,e[7]=(h*v-u*S+p*y)*G,e[8]=(a*I-l*R+c*M)*G,e[9]=(i*R-n*I-s*M)*G,e[10]=(g*w-_*S+d*m)*G,e[11]=(f*S-h*w-p*m)*G,e[12]=(l*L-a*D-o*M)*G,e[13]=(n*D-i*L+r*M)*G,e[14]=(_*y-g*E-x*m)*G,e[15]=(h*E-f*y+u*m)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,o=e.z,c=s*a,h=s*l;return this.set(c*a+i,c*l-r*o,c*o+r*l,0,c*l+r*o,h*l+i,h*o-r*a,0,c*o-r*l,h*o+r*a,s*o*o+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,o=n._w,c=s+s,h=a+a,f=l+l,u=s*c,p=s*h,g=s*f,_=a*h,x=a*f,d=l*f,m=o*c,y=o*h,S=o*f,E=i.x,w=i.y,v=i.z;return r[0]=(1-(_+d))*E,r[1]=(p+S)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(u+d))*w,r[6]=(x+m)*w,r[7]=0,r[8]=(g+y)*v,r[9]=(x-m)*v,r[10]=(1-(u+_))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ss.set(r[0],r[1],r[2]).length();const l=ss.set(r[4],r[5],r[6]).length(),o=ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$n.copy(this);const c=1/a,h=1/l,f=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,n.setFromRotationMatrix($n),i.x=a,i.y=l,i.z=o,this}makePerspective(e,n,i,r,s,a,l=ii,o=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o)g=s/(a-s),_=a*s/(a-s);else if(l===ii)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(l===Ja)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=ii,o=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,_;if(o)g=1/(a-s),_=a/(a-s);else if(l===ii)g=-2/(a-s),_=-(a+s)/(a-s);else if(l===Ja)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ql.prototype.isMatrix4=!0;let Et=Ql;const ss=new j,$n=new Et,p1=new j(0,0,0),m1=new j(1,1,1),qi=new j,Io=new j,bn=new j,xm=new Et,vm=new Zs;class wr{constructor(e=0,n=0,i=0,r=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],o=r[1],c=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class lv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g1=0;const _m=new j,as=new Zs,bi=new Et,Fo=new j,la=new j,x1=new j,v1=new Zs,Sm=new j(1,0,0),ym=new j(0,1,0),Mm=new j(0,0,1),Em={type:"added"},_1={type:"removed"},os={type:"childadded",child:null},pu={type:"childremoved",child:null};class Jt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new j,n=new wr,i=new Zs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ue}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fo.copy(e):Fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(la,Fo,this.up):bi.lookAt(Fo,la,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(bi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),os.child=e,this.dispatchEvent(os),os.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_1),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,x1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,v1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){const f=o[c];s(e.shapes,f)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(s(e.materials,this.material[o]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];r.animations.push(s(e.animations,o))}}if(n){const l=a(e.geometries),o=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const o=[];for(const c in l){const h=l[c];delete h.metadata,o.push(h)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jt.DEFAULT_UP=new j(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class It extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S1={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const x=n.getJointPose(_,i),d=this._getHandJoint(c,_);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return l!==null&&(l.visible=r!==null),o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new It;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=r1(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=cv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Ze.workingToColorSpace(an.copy(this),e),Math.round(Ke(an.r*255,0,255))*65536+Math.round(Ke(an.g*255,0,255))*256+Math.round(Ke(an.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let o,c;const h=(l+a)/2;if(l===a)o=0,c=0;else{const f=a-l;switch(c=h<=.5?f/(a+l):f/(2-a-l),a){case i:o=(r-s)/f+(r<s?6:0);break;case r:o=(s-i)/f+2;break;case s:o=(i-r)/f+4;break}o/=6}return e.h=o,e.s=c,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=zn){Ze.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Uo);const i=cu($i.h,Uo.h,n),r=cu($i.s,Uo.s,n),s=cu($i.l,Uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Je;Je.NAMES=cv;class y1 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kn=new j,Ai=new j,xu=new j,Ti=new j,ls=new j,cs=new j,wm=new j,vu=new j,_u=new j,Su=new j,yu=new yt,Mu=new yt,Eu=new yt;class ni{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Ai.subVectors(i,n),xu.subVectors(e,n);const a=Kn.dot(Kn),l=Kn.dot(Ai),o=Kn.dot(xu),c=Ai.dot(Ai),h=Ai.dot(xu),f=a*c-l*l;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*o-l*h)*u,g=(a*h-l*o)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,a,l,o){return this.getBarycoord(e,n,i,r,Ti)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,Ti.x),o.addScaledVector(a,Ti.y),o.addScaledVector(l,Ti.z),o)}static getInterpolatedAttribute(e,n,i,r,s,a){return yu.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),yu.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yu,s.x),a.addScaledVector(Mu,s.y),a.addScaledVector(Eu,s.z),a}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ai.subVectors(e,n),Kn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Kn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;ls.subVectors(r,i),cs.subVectors(s,i),vu.subVectors(e,i);const o=ls.dot(vu),c=cs.dot(vu);if(o<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const h=ls.dot(_u),f=cs.dot(_u);if(h>=0&&f<=h)return n.copy(r);const u=o*f-h*c;if(u<=0&&o>=0&&h<=0&&o-h>0)return a=o/(o-h),n.copy(i).addScaledVector(ls,a);Su.subVectors(e,s);const p=ls.dot(Su),g=cs.dot(Su);if(g>=0&&p<=g)return n.copy(s);const _=p*c-o*g;if(_<=0&&c>=0&&g<=0)return l=c/(c-g),n.copy(i).addScaledVector(cs,l);const x=h*g-p*f;if(x<=0&&f-h>=0&&p-g>=0)return wm.subVectors(s,r),l=(f-h)/(f-h+(p-g)),n.copy(r).addScaledVector(wm,l);const d=1/(x+_+u);return a=_*d,l=u*d,n.copy(i).addScaledVector(ls,a).addScaledVector(cs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),ko.subVectors(this.max,ca),us.subVectors(e.a,ca),ds.subVectors(e.b,ca),fs.subVectors(e.c,ca),Ki.subVectors(ds,us),Zi.subVectors(fs,ds),Lr.subVectors(us,fs);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Lr.z,Lr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Lr.z,0,-Lr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Lr.y,Lr.x,0];return!wu(n,us,ds,fs,ko)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,us,ds,fs,ko))?!1:(Bo.crossVectors(Ki,Zi),n=[Bo.x,Bo.y,Bo.z],wu(n,us,ds,fs,ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new j,new j,new j,new j,new j,new j,new j,new j],Zn=new j,Oo=new ao,us=new j,ds=new j,fs=new j,Ki=new j,Zi=new j,Lr=new j,ca=new j,ko=new j,Bo=new j,Nr=new j;function wu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Nr.fromArray(t,s);const l=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),o=e.dot(Nr),c=n.dot(Nr),h=i.dot(Nr);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>l)return!1}return!0}const Ct=new j,zo=new Ne;let M1=0;class Wr extends ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=QM,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?Sh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):a1(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):o1(e,this.array)}}class uv extends Wr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dv extends Wr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class it extends Wr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const E1=new ao,ua=new j,bu=new j;class Mh{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):E1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const n=ua.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(bu)),this.expandByPoint(ua.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let w1=0;const kn=new Et,Au=new Jt,hs=new j,An=new ao,da=new ao,Gt=new j;class wn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e1(e)?dv:uv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];da.setFromBufferAttribute(l),this.morphTargetsRelative?(Gt.addVectors(An.min,da.min),An.expandByPoint(Gt),Gt.addVectors(An.max,da.max),An.expandByPoint(Gt)):(An.expandByPoint(da.min),An.expandByPoint(da.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],o=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Gt.fromBufferAttribute(l,c),o&&(hs.fromBufferAttribute(e,c),Gt.add(hs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Wr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],o=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)l[L]=new j,o[L]=new j;const h=new j,f=new j,u=new j,p=new Ne,g=new Ne,_=new Ne,x=new j,d=new j;function m(L,R,D){c[L]=c[R]=c[D]=1,h.fromBufferAttribute(i,L),f.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),p.fromBufferAttribute(s,L),g.fromBufferAttribute(s,R),_.fromBufferAttribute(s,D),f.sub(h),u.sub(h),g.sub(p),_.sub(p);const I=1/(g.x*_.y-_.x*g.y);isFinite(I)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(I),d.copy(u).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(I),l[L].add(x),l[R].add(x),l[D].add(x),o[L].add(d),o[R].add(d),o[D].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,R=y.length;L<R;++L){const D=y[L],I=D.start,F=D.count;for(let N=I,G=I+F;N<G;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new j,E=new j,w=new j,v=new j;function M(L){w.fromBufferAttribute(r,L),v.copy(w);const R=l[L];S.copy(R),S.sub(w.multiplyScalar(w.dot(R))).normalize(),E.crossVectors(v,R);const I=E.dot(o[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,I)}for(let L=0,R=i.count;L<R;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Wr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,a=new j,l=new j,o=new j,c=new j,h=new j,f=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),l.fromBufferAttribute(i,g),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.add(h),o.add(h),c.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(l,o){const c=l.array,h=l.itemSize,f=l.normalized,u=new c.constructor(o.length*h);let p=0,g=0;for(let _=0,x=o.length;_<x;_++){l.isInterleavedBufferAttribute?p=o[_]*l.data.stride+l.offset:p=o[_]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new Wr(u,h,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const l in r){const o=r[l],c=e(o,i);n.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const o=[],c=s[l];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,i);o.push(p)}n.morphAttributes[l]=o}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[o]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new j,b1=new j,A1=new Ue;class nr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(b1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Tu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||A1.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let T1=0;class oo extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Ca,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zx,this.blendDst=Hx,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=YM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ou,this.stencilZFail=ou,this.stencilZPass=ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const o=s[l];delete o.metadata,a.push(o)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new nr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new j,Ru=new j,Ho=new j,Go=new j;class R1{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ru.copy(e).add(n).multiplyScalar(.5),Ho.copy(n).sub(e).normalize(),Go.copy(this.origin).sub(Ru);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ho),l=Go.dot(this.direction),o=-Go.dot(Ho),c=Go.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*o-l,u=a*l-o,g=s*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,p=f*(f+a*u+2*l)+u*(a*f+u+2*o)+c}else u=s,f=Math.max(0,-(a*u+l)),p=-f*f+u*(u+2*o)+c;else u=-s,f=Math.max(0,-(a*u+l)),p=-f*f+u*(u+2*o)+c;else u<=-g?(f=Math.max(0,-(-a*s+l)),u=f>0?-s:Math.min(Math.max(-s,-o),s),p=-f*f+u*(u+2*o)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-o),s),p=u*(u+2*o)+c):(f=Math.max(0,-(a*s+l)),u=f>0?s:Math.min(Math.max(-s,-o),s),p=-f*f+u*(u+2*o)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+l)),p=-f*f+u*(u+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ru).addScaledVector(Ho,u),p}intersectSphere(e,n){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,o;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-u.z)*f,o=(e.max.z-u.z)*f):(l=(e.max.z-u.z)*f,o=(e.min.z-u.z)*f),i>o||l>r)||((l>i||i!==i)&&(i=l),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,l=this.direction,o=l.x,c=l.y,h=l.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=n.x-a.x,_=n.y-a.y,x=n.z-a.z,d=i.x-a.x,m=i.y-a.y,y=i.z-a.z,S=Math.abs(o),E=Math.abs(c),w=Math.abs(h);let v,M,L,R,D,I,F,N,G,q,z,H;if(S>=E&&S>=w?(L=o,I=f,G=g,H=d,o>=0?(v=c,M=h,R=u,D=p,F=_,N=x,q=m,z=y):(v=h,M=c,R=p,D=u,F=x,N=_,q=y,z=m)):E>=w?(L=c,I=u,G=_,H=m,c>=0?(v=h,M=o,R=p,D=f,F=x,N=g,q=y,z=d):(v=o,M=h,R=f,D=p,F=g,N=x,q=d,z=y)):(L=h,I=p,G=x,H=y,h>=0?(v=o,M=c,R=f,D=u,F=g,N=_,q=d,z=m):(v=c,M=o,R=u,D=f,F=_,N=g,q=m,z=d)),L===0)return null;const k=v/L,C=M/L,V=1/L,ie=R-k*I,Me=D-C*I,$=F-k*G,ne=N-C*G,oe=q-k*H,ve=z-C*H,re=oe*ne-ve*$,Pe=ie*ve-Me*oe,ot=$*Me-ne*ie;if(r){if(re<0||Pe<0||ot<0)return null}else if((re<0||Pe<0||ot<0)&&(re>0||Pe>0||ot>0))return null;const Te=re+Pe+ot;if(Te===0)return null;const Be=V*(re*I+Pe*G+ot*H);return(Te>0?Be<0:Be>0)?null:this.at(Be/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fv extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=Gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bm=new Et,Dr=new R1,Vo=new Mh,Am=new j,Wo=new j,Xo=new j,jo=new j,Cu=new j,Yo=new j,Tm=new j,qo=new j;class Xe extends Jt{constructor(e=new wn,n=new fv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Yo.set(0,0,0);for(let o=0,c=s.length;o<c;o++){const h=l[o],f=s[o];h!==0&&(Cu.fromBufferAttribute(f,e),a?Yo.addScaledVector(Cu,h):Yo.addScaledVector(Cu.sub(n),h))}n.add(Yo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Vo.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Vo,Am)===null||Dr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(bm.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,o=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const x=u[g],d=a[x.materialIndex],m=Math.max(x.start,p.start),y=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let S=m,E=y;S<E;S+=3){const w=l.getX(S),v=l.getX(S+1),M=l.getX(S+2);r=$o(this,d,e,i,c,h,f,w,v,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let x=g,d=_;x<d;x+=3){const m=l.getX(x),y=l.getX(x+1),S=l.getX(x+2);r=$o(this,a,e,i,c,h,f,m,y,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const x=u[g],d=a[x.materialIndex],m=Math.max(x.start,p.start),y=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let S=m,E=y;S<E;S+=3){const w=S,v=S+1,M=S+2;r=$o(this,d,e,i,c,h,f,w,v,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let x=g,d=_;x<d;x+=3){const m=x,y=x+1,S=x+2;r=$o(this,a,e,i,c,h,f,m,y,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function C1(t,e,n,i,r,s,a,l){let o;if(e.side===En?o=i.intersectTriangle(a,s,r,!0,l):o=i.intersectTriangle(r,s,a,e.side===Kr,l),o===null)return null;qo.copy(l),qo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qo);return c<n.near||c>n.far?null:{distance:c,point:qo.clone(),object:t}}function $o(t,e,n,i,r,s,a,l,o,c){t.getVertexPosition(l,Wo),t.getVertexPosition(o,Xo),t.getVertexPosition(c,jo);const h=C1(t,e,n,i,Wo,Xo,jo,Tm);if(h){const f=new j;ni.getBarycoord(Tm,Wo,Xo,jo,f),r&&(h.uv=ni.getInterpolatedAttribute(r,l,o,c,f,new Ne)),s&&(h.uv1=ni.getInterpolatedAttribute(s,l,o,c,f,new Ne)),a&&(h.normal=ni.getInterpolatedAttribute(a,l,o,c,f,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:l,b:o,c,normal:new j,materialIndex:0};ni.getNormal(Wo,Xo,jo,u.normal),h.face=u,h.barycoord=f}return h}class P1 extends hn{constructor(e=null,n=1,i=1,r,s,a,l,o,c=Kt,h=Kt,f,u){super(null,a,l,o,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ir=new Mh,L1=new Ne(.5,.5),Ko=new j;class Qa{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,a=new nr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],o=s[2],c=s[3],h=s[4],f=s[5],u=s[6],p=s[7],g=s[8],_=s[9],x=s[10],d=s[11],m=s[12],y=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,p-h,d-g,E-m).normalize(),r[1].setComponents(c+a,p+h,d+g,E+m).normalize(),r[2].setComponents(c+l,p+f,d+_,E+y).normalize(),r[3].setComponents(c-l,p-f,d-_,E-y).normalize(),i)r[4].setComponents(o,u,x,S).normalize(),r[5].setComponents(c-o,p-u,d-x,E-S).normalize();else if(r[4].setComponents(c-o,p-u,d-x,E-S).normalize(),n===ii)r[5].setComponents(c+o,p+u,d+x,E+S).normalize();else if(n===Ja)r[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=L1.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Rm=new Et;class Eh{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Rm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Qa),i[r].setFromProjectionMatrix(Rm,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Qa),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Eh().copy(this)}}class hv extends hn{constructor(e=[],n=Ws,i,r,s,a,l,o,c,h){super(e,n,i,r,s,a,l,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class js extends hn{constructor(e,n,i=Mi,r,s,a,l=Kt,o=Kt,c,h=Er,f=1){if(h!==Er&&h!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,l,o,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class pv extends js{constructor(e,n=Mi,i=Ws,r,s,a=Kt,l=Kt,o,c=Er){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,l,o,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mv extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sr extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const o=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2));function g(_,x,d,m,y,S,E,w,v,M,L){const R=S/v,D=E/M,I=S/2,F=E/2,N=w/2,G=v+1,q=M+1;let z=0,H=0;const k=new j;for(let C=0;C<q;C++){const V=C*D-F;for(let ie=0;ie<G;ie++){const Me=ie*R-I;k[_]=Me*m,k[x]=V*y,k[d]=N,c.push(k.x,k.y,k.z),k[_]=0,k[x]=0,k[d]=w>0?1:-1,h.push(k.x,k.y,k.z),f.push(ie/v),f.push(1-C/M),z+=1}}for(let C=0;C<M;C++)for(let V=0;V<v;V++){const ie=u+V+G*C,Me=u+V+G*(C+1),$=u+(V+1)+G*(C+1),ne=u+(V+1)+G*C;o.push(ie,Me,ne),o.push(Me,$,ne),H+=6}l.addGroup(p,H,L),p+=H,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zl extends wn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],l=[],o=[],c=[],h=n/2,f=Math.PI/2*e,u=n,p=2*f+u,g=i*2+s,_=r+1,x=new j,d=new j;for(let m=0;m<=g;m++){let y=0,S=0,E=0,w=0;if(m<=i){const L=m/i,R=L*Math.PI/2;S=-h-e*Math.cos(R),E=e*Math.sin(R),w=-e*Math.cos(R),y=L*f}else if(m<=i+s){const L=(m-i)/s;S=-h+L*n,E=e,w=0,y=f+L*u}else{const L=(m-i-s)/i,R=L*Math.PI/2;S=h+e*Math.sin(R),E=e*Math.cos(R),w=e*Math.sin(R),y=f+u+L*f}const v=Math.max(0,Math.min(1,y/p));let M=0;m===0?M=.5/r:m===g&&(M=-.5/r);for(let L=0;L<=r;L++){const R=L/r,D=R*Math.PI*2,I=Math.sin(D),F=Math.cos(D);d.x=-E*F,d.y=S,d.z=E*I,l.push(d.x,d.y,d.z),x.set(-E*F,w,E*I),x.normalize(),o.push(x.x,x.y,x.z),c.push(R+M,v)}if(m>0){const L=(m-1)*_;for(let R=0;R<r;R++){const D=L+R,I=L+R+1,F=m*_+R,N=m*_+R+1;a.push(D,I,F),a.push(I,N,F)}}}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class wh extends wn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],l=[],o=[],c=new j,h=new Ne;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let f=0,u=3;f<=n;f++,u+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,o.push(h.x,h.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ir extends wn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:o};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let g=0;const _=[],x=i/2;let d=0;m(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(p,2));function m(){const S=new j,E=new j;let w=0;const v=(n-e)/i;for(let M=0;M<=s;M++){const L=[],R=M/s,D=R*(n-e)+e;for(let I=0;I<=r;I++){const F=I/r,N=F*o+l,G=Math.sin(N),q=Math.cos(N);E.x=D*G,E.y=-R*i+x,E.z=D*q,f.push(E.x,E.y,E.z),S.set(G,v,q).normalize(),u.push(S.x,S.y,S.z),p.push(F,1-R),L.push(g++)}_.push(L)}for(let M=0;M<r;M++)for(let L=0;L<s;L++){const R=_[L][M],D=_[L+1][M],I=_[L+1][M+1],F=_[L][M+1];(e>0||L!==0)&&(h.push(R,D,F),w+=3),(n>0||L!==s-1)&&(h.push(D,I,F),w+=3)}c.addGroup(d,w,0),d+=w}function y(S){const E=g,w=new Ne,v=new j;let M=0;const L=S===!0?e:n,R=S===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,x*R,0),u.push(0,R,0),p.push(.5,.5),g++;const D=g;for(let I=0;I<=r;I++){const N=I/r*o+l,G=Math.cos(N),q=Math.sin(N);v.x=L*q,v.y=x*R,v.z=L*G,f.push(v.x,v.y,v.z),u.push(0,R,0),w.x=G*.5+.5,w.y=q*.5*R+.5,p.push(w.x,w.y),g++}for(let I=0;I<r;I++){const F=E+I,N=D+I;S===!0?h.push(N,N+1,F):h.push(N+1,N,F),M+=3}c.addGroup(d,M,S===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends wn{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Ke(r,0,Math.PI*2);const s=[],a=[],l=[],o=[],c=[],h=1/n,f=new j,u=new Ne,p=new j,g=new j,_=new j;let x=0,d=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:x=e[m+1].x-e[m].x,d=e[m+1].y-e[m].y,p.x=d*1,p.y=-x,p.z=d*0,_.copy(p),p.normalize(),o.push(p.x,p.y,p.z);break;case e.length-1:_.normalize(),o.push(_.x,_.y,_.z);break;default:x=e[m+1].x-e[m].x,d=e[m+1].y-e[m].y,p.x=d*1,p.y=-x,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),o.push(p.x,p.y,p.z),_.copy(g)}for(let m=0;m<=n;m++){const y=i+m*h*r,S=Math.sin(y),E=Math.cos(y);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*S,f.y=e[w].y,f.z=e[w].x*E,a.push(f.x,f.y,f.z),u.x=m/n,u.y=w/(e.length-1),l.push(u.x,u.y);const v=o[3*w+0]*S,M=o[3*w+1],L=o[3*w+0]*E;c.push(v,M,L)}}for(let m=0;m<n;m++)for(let y=0;y<e.length-1;y++){const S=y+m*e.length,E=S,w=S+e.length,v=S+e.length+1,M=S+1;s.push(E,w,M),s.push(v,M,w)}this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(l,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.points,e.segments,e.phiStart,e.phiLength)}}class yc extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),o=Math.floor(r),c=l+1,h=o+1,f=e/l,u=n/o,p=[],g=[],_=[],x=[];for(let d=0;d<h;d++){const m=d*u-a;for(let y=0;y<c;y++){const S=y*f-s;g.push(S,-m,0),_.push(0,0,1),x.push(y/l),x.push(1-d/o)}}for(let d=0;d<o;d++)for(let m=0;m<l;m++){const y=m+c*d,S=m+c*(d+1),E=m+1+c*(d+1),w=m+1+c*d;p.push(y,S,w),p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}class bh extends wn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const l=[],o=[],c=[],h=[];let f=e;const u=(n-e)/r,p=new j,g=new Ne;for(let _=0;_<=r;_++){for(let x=0;x<=i;x++){const d=s+x/i*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),o.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<r;_++){const x=_*(i+1);for(let d=0;d<i;d++){const m=d+x,y=m,S=m+i+1,E=m+i+2,w=m+1;l.push(y,S,w),l.push(S,E,w)}}this.setIndex(l),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Li extends wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const o=Math.min(a+l,Math.PI);let c=0;const h=[],f=new j,u=new j,p=[],g=[],_=[],x=[];for(let d=0;d<=i;d++){const m=[],y=d/i,S=a+y*l,E=e*Math.cos(S),w=Math.sqrt(e*e-E*E);let v=0;d===0&&a===0?v=.5/n:d===i&&o===Math.PI&&(v=-.5/n);for(let M=0;M<=n;M++){const L=M/n,R=r+L*s;f.x=-w*Math.cos(R),f.y=E,f.z=w*Math.sin(R),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),x.push(L+v,1-y),m.push(c++)}h.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const y=h[d][m+1],S=h[d][m],E=h[d+1][m],w=h[d+1][m+1];(d!==0||a>0)&&p.push(y,S,w),(d!==i-1||o<Math.PI)&&p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ah extends wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);const o=[],c=[],h=[],f=[],u=new j,p=new j,g=new j;for(let _=0;_<=i;_++){const x=a+_/i*l;for(let d=0;d<=r;d++){const m=d/r*s;p.x=(e+n*Math.cos(x))*Math.cos(m),p.y=(e+n*Math.cos(x))*Math.sin(m),p.z=n*Math.sin(x),c.push(p.x,p.y,p.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),f.push(d/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let x=1;x<=r;x++){const d=(r+1)*_+x-1,m=(r+1)*(_-1)+x-1,y=(r+1)*(_-1)+x,S=(r+1)*_+x;o.push(d,m,S),o.push(m,y,S)}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Cm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Cm(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function Cm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function N1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function gv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const D1={clone:Ys,merge:un};var I1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I1,this.fragmentShader=F1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=N1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class U1 extends Jr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bn extends oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O1 extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k1 extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xv extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class B1 extends xv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Pu=new Et,Pm=new j,Lm=new j;class z1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Pu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,o=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ja||e.reversedDepth?n.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),n.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zo=new j,Jo=new Zs,ci=new j;class vv extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Zo,Jo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new j,Nm=new Ne,Dm=new Ne;class ti extends vv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,Nm,Dm),n.subVectors(Dm,Nm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(lu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/o,n-=a.offsetY*i/c,r*=a.width/o,i*=a.height/c}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class _v extends vv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,o=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,l-=h*this.view.offsetY,o=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class H1 extends z1{constructor(){super(new _v(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lu extends xv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new H1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const ps=-90,ms=1;class pf extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ti(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new ti(ps,ms,e,n);s.layers=this.layers,this.add(s);const a=new ti(ps,ms,e,n);a.layers=this.layers,this.add(a);const l=new ti(ps,ms,e,n);l.layers=this.layers,this.add(l);const o=new ti(ps,ms,e,n);o.layers=this.layers,this.add(o);const c=new ti(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,o]=n;for(const c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,o,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class G1 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Im(t,e,n,i){const r=V1(i);switch(n){case ev:return t*e;case nv:return t*e/r.components*r.byteLength;case xh:return t*e/r.components*r.byteLength;case Zr:return t*e*2/r.components*r.byteLength;case vh:return t*e*2/r.components*r.byteLength;case tv:return t*e*3/r.components*r.byteLength;case vi:return t*e*4/r.components*r.byteLength;case _h:return t*e*4/r.components*r.byteLength;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:case kd:return Math.max(t,16)*Math.max(e,8)/4;case Fd:case Od:return Math.max(t,8)*Math.max(e,8)/2;case Bd:case zd:case Gd:case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hd:case jl:case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case af:case of:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case cf:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yl:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function V1(t){switch(t){case Rn:case Kx:return{byteLength:1,components:1};case Za:case Zx:case Ei:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Mi:case ph:case xi:return{byteLength:4,components:1};case Jx:case Qx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function W1(t){const e=new WeakMap;function n(l,o){const c=l.array,h=l.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(o,u),t.bufferData(o,c,h),l.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,o,c){const h=o.array,f=o.updateRanges;if(t.bindBuffer(c,l),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(t.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,n(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:r,remove:s,update:a}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j1=`#ifdef USE_ALPHAHASH
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
#endif`,Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z1=`#ifdef USE_AOMAP
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
#endif`,J1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rE=`#ifdef USE_IRIDESCENCE
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
#endif`,sE=`#ifdef USE_BUMPMAP
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,UE=`#ifdef USE_ENVMAP
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
#endif`,OE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
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
#endif`,GE=`uniform sampler2D dfgLUT;
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
}`,VE=`
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ew=`#if defined( USE_POINTS_UV )
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
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rw=`#if defined( USE_MORPHCOLORS )
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
#endif`,sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
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
#endif`,ow=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hw=`#ifdef USE_NORMALMAP
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
#endif`,pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cw=`float getShadowMask() {
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
}`,Pw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lw=`#ifdef USE_SKINNING
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
#endif`,Nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dw=`#ifdef USE_SKINNING
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
#endif`,Iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kw=`#ifdef USE_TRANSMISSION
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
#endif`,Bw=`#ifdef USE_TRANSMISSION
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
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xw=`uniform sampler2D t2D;
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform float backgroundBlurriness;
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
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`#include <common>
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
}`,Zw=`#if DEPTH_PACKING == 3200
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
}`,Jw=`#define DISTANCE
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
}`,Qw=`#define DISTANCE
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
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
}`,ib=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,sb=`uniform vec3 diffuse;
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
}`,ab=`#define LAMBERT
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
}`,ob=`#define LAMBERT
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
}`,lb=`#define MATCAP
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
}`,cb=`#define MATCAP
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
}`,ub=`#define NORMAL
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
}`,db=`#define NORMAL
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
}`,fb=`#define PHONG
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
}`,hb=`#define PHONG
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
}`,pb=`#define STANDARD
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
}`,mb=`#define STANDARD
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
}`,gb=`#define TOON
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
}`,xb=`#define TOON
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
}`,vb=`uniform float size;
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
}`,_b=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,yb=`uniform vec3 color;
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
}`,Mb=`uniform float rotation;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:X1,alphahash_pars_fragment:j1,alphamap_fragment:Y1,alphamap_pars_fragment:q1,alphatest_fragment:$1,alphatest_pars_fragment:K1,aomap_fragment:Z1,aomap_pars_fragment:J1,batching_pars_vertex:Q1,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:rE,bumpmap_pars_fragment:sE,clipping_planes_fragment:aE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:dE,color_pars_vertex:fE,color_vertex:hE,common:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:xE,emissivemap_fragment:vE,emissivemap_pars_fragment:_E,colorspace_fragment:SE,colorspace_pars_fragment:yE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:wE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:UE,envmap_vertex:AE,fog_vertex:TE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:PE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:NE,lights_lambert_fragment:DE,lights_lambert_pars_fragment:IE,lights_pars_begin:FE,lights_toon_fragment:OE,lights_toon_pars_fragment:kE,lights_phong_fragment:BE,lights_phong_pars_fragment:zE,lights_physical_fragment:HE,lights_physical_pars_fragment:GE,lights_fragment_begin:VE,lights_fragment_maps:WE,lights_fragment_end:XE,lightprobes_pars_fragment:jE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:KE,map_fragment:ZE,map_pars_fragment:JE,map_particle_fragment:QE,map_particle_pars_fragment:ew,metalnessmap_fragment:tw,metalnessmap_pars_fragment:nw,morphinstance_vertex:iw,morphcolor_vertex:rw,morphnormal_vertex:sw,morphtarget_pars_vertex:aw,morphtarget_vertex:ow,normal_fragment_begin:lw,normal_fragment_maps:cw,normal_pars_fragment:uw,normal_pars_vertex:dw,normal_vertex:fw,normalmap_pars_fragment:hw,clearcoat_normal_fragment_begin:pw,clearcoat_normal_fragment_maps:mw,clearcoat_pars_fragment:gw,iridescence_pars_fragment:xw,opaque_fragment:vw,packing:_w,premultiplied_alpha_fragment:Sw,project_vertex:yw,dithering_fragment:Mw,dithering_pars_fragment:Ew,roughnessmap_fragment:ww,roughnessmap_pars_fragment:bw,shadowmap_pars_fragment:Aw,shadowmap_pars_vertex:Tw,shadowmap_vertex:Rw,shadowmask_pars_fragment:Cw,skinbase_vertex:Pw,skinning_pars_vertex:Lw,skinning_vertex:Nw,skinnormal_vertex:Dw,specularmap_fragment:Iw,specularmap_pars_fragment:Fw,tonemapping_fragment:Uw,tonemapping_pars_fragment:Ow,transmission_fragment:kw,transmission_pars_fragment:Bw,uv_pars_fragment:zw,uv_pars_vertex:Hw,uv_vertex:Gw,worldpos_vertex:Vw,background_vert:Ww,background_frag:Xw,backgroundCube_vert:jw,backgroundCube_frag:Yw,cube_vert:qw,cube_frag:$w,depth_vert:Kw,depth_frag:Zw,distance_vert:Jw,distance_frag:Qw,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:rb,meshbasic_frag:sb,meshlambert_vert:ab,meshlambert_frag:ob,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:ub,meshnormal_frag:db,meshphong_vert:fb,meshphong_frag:hb,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:xb,points_vert:vb,points_frag:_b,shadow_vert:Sb,shadow_frag:yb,sprite_vert:Mb,sprite_frag:Eb},Se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},pi={basic:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:un([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:un([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:un([Se.points,Se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:un([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:un([Se.common,Se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:un([Se.sprite,Se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:un([Se.common,Se.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:un([Se.lights,Se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};pi.physical={uniforms:un([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Qo={r:0,b:0,g:0},wb=new Et,yv=new Ue;yv.set(-1,0,0,0,1,0,0,0,1);function bb(t,e,n,i,r,s){const a=new Je(0);let l=r===!0?0:1,o,c,h=null,f=0,u=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const S=m.backgroundBlurriness>0;y=e.get(y,S)}return y}function g(m){let y=!1;const S=p(m);S===null?x(a,l):S&&S.isColor&&(x(S,1),y=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(m,y){const S=p(y);S&&S.isCubeTexture?(c===void 0&&(c=new Xe(new Sr(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:Ys(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wb.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yv),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,(h!==S||f!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(o===void 0&&(o=new Xe(new yc(2,2),new Jr({name:"BackgroundMaterial",uniforms:Ys(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=S,o.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,o.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),o.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==t.toneMapping)&&(o.material.needsUpdate=!0,h=S,f=S.version,u=t.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))}function x(m,y){m.getRGB(Qo,gv(t)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),l=y,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g,addToRenderList:_,dispose:d}}function Ab(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function l(D,I,F,N,G){let q=!1;const z=f(D,N,F,I);s!==z&&(s=z,c(s.object)),q=p(D,N,F,G),q&&g(D,N,F,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(D,I,F,N),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function o(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function f(D,I,F,N){const G=N.wireframe===!0;let q=i[I.id];q===void 0&&(q={},i[I.id]=q);const z=D.isInstancedMesh===!0?D.id:0;let H=q[z];H===void 0&&(H={},q[z]=H);let k=H[F.id];k===void 0&&(k={},H[F.id]=k);let C=k[G];return C===void 0&&(C=u(o()),k[G]=C),C}function u(D){const I=[],F=[],N=[];for(let G=0;G<n;G++)I[G]=0,F[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:N,object:D,attributes:{},index:null}}function p(D,I,F,N){const G=s.attributes,q=I.attributes;let z=0;const H=F.getAttributes();for(const k in H)if(H[k].location>=0){const V=G[k];let ie=q[k];if(ie===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),V===void 0||V.attribute!==ie||ie&&V.data!==ie.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(D,I,F,N){const G={},q=I.attributes;let z=0;const H=F.getAttributes();for(const k in H)if(H[k].location>=0){let V=q[k];V===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const ie={};ie.attribute=V,V&&V.data&&(ie.data=V.data),G[k]=ie,z++}s.attributes=G,s.attributesNum=z,s.index=N}function _(){const D=s.newAttributes;for(let I=0,F=D.length;I<F;I++)D[I]=0}function x(D){d(D,0)}function d(D,I){const F=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;F[D]=1,N[D]===0&&(t.enableVertexAttribArray(D),N[D]=1),G[D]!==I&&(t.vertexAttribDivisor(D,I),G[D]=I)}function m(){const D=s.newAttributes,I=s.enabledAttributes;for(let F=0,N=I.length;F<N;F++)I[F]!==D[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function y(D,I,F,N,G,q,z){z===!0?t.vertexAttribIPointer(D,I,F,G,q):t.vertexAttribPointer(D,I,F,N,G,q)}function S(D,I,F,N){_();const G=N.attributes,q=F.getAttributes(),z=I.defaultAttributeValues;for(const H in q){const k=q[H];if(k.location>=0){let C=G[H];if(C===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){const V=C.normalized,ie=C.itemSize,Me=e.get(C);if(Me===void 0)continue;const $=Me.buffer,ne=Me.type,oe=Me.bytesPerElement,ve=ne===t.INT||ne===t.UNSIGNED_INT||C.gpuType===ph;if(C.isInterleavedBufferAttribute){const re=C.data,Pe=re.isInterleavedBuffer===!0?re.stride:re.itemSize,ot=C.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Te=0;Te<k.locationSize;Te++)d(k.location+Te,re.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<k.locationSize;Te++)x(k.location+Te);t.bindBuffer(t.ARRAY_BUFFER,$);for(let Te=0;Te<k.locationSize;Te++)y(k.location+Te,ie/k.locationSize,ne,V,Pe*oe,(ot+ie/k.locationSize*Te)*oe,ve)}else{if(C.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)d(k.location+re,C.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let re=0;re<k.locationSize;re++)x(k.location+re);t.bindBuffer(t.ARRAY_BUFFER,$);for(let re=0;re<k.locationSize;re++)y(k.location+re,ie/k.locationSize,ne,V,ie*oe,ie/k.locationSize*re*oe,ve)}}else if(z!==void 0){const V=z[H];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(k.location,V);break;case 3:t.vertexAttrib3fv(k.location,V);break;case 4:t.vertexAttrib4fv(k.location,V);break;default:t.vertexAttrib1fv(k.location,V)}}}}m()}function E(){L();for(const D in i){const I=i[D];for(const F in I){const N=I[F];for(const G in N){const q=N[G];for(const z in q)h(q[z].object),delete q[z];delete N[G]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const F in I){const N=I[F];for(const G in N){const q=N[G];for(const z in q)h(q[z].object),delete q[z];delete N[G]}}delete i[D.id]}function v(D){for(const I in i){const F=i[I];for(const N in F){const G=F[N];if(G[D.id]===void 0)continue;const q=G[D.id];for(const z in q)h(q[z].object),delete q[z];delete G[D.id]}}}function M(D){for(const I in i){const F=i[I],N=D.isInstancedMesh===!0?D.id:0,G=F[N];if(G!==void 0){for(const q in G){const z=G[q];for(const H in z)h(z[H].object),delete z[H];delete G[q]}delete F[N],Object.keys(F).length===0&&delete i[I]}}}function L(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:L,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:x,disableUnusedAttributes:m}}function Tb(t,e,n){let i;function r(o){i=o}function s(o,c){t.drawArrays(i,o,c),n.update(c,i,1)}function a(o,c,h){h!==0&&(t.drawArraysInstanced(i,o,c,h),n.update(c,i,h))}function l(o,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function Rb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==vi&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const M=v===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Rn&&v!==xi&&!M&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function o(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=o(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:S,maxSamples:E,samples:w}}function Cb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new nr,l=new Ue,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!x)s?h(null):c();else{const m=s?0:i,y=m*4;let S=d.clippingState||null;o.value=S,S=h(g,u,y,p);for(let E=0;E!==y;++E)S[E]=n[E];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){o.value!==n&&(o.value=n,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const _=f!==null?f.length:0;let x=null;if(_!==0){if(x=o.value,g!==!0||x===null){const d=p+_*4,m=u.matrixWorldInverse;l.getNormalMatrix(m),(x===null||x.length<d)&&(x=new Float32Array(d));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(f[y]).applyMatrix4(m,l),a.normal.toArray(x,S),x[S+3]=a.constant}o.value=x,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}class Th extends yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sr(5,5,5),s=new Jr({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Fs});s.uniforms.tEquirect.value=n;const a=new Xe(r,s),l=n.minFilter;return n.minFilter===ur&&(n.minFilter=_n),new pf(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Fm=256,Pb=3,Lb=20,Mv=256,Ev=16,Nb=3,Db=new j,Ib=new Je;class Jl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pf(1,10,null),this._boxMesh=new Xe(new Sr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=Db}=s,o=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);const f=o.autoClear,u=o.autoClearColor,p=o.autoClearDepth,g=o.autoClearStencil,_=e.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,_===null&&(e.background=o.getClearColor(Ib));const x=new pf(i,r,h);return x.position.copy(l),x.update(o,e),o.autoClear=f,o.autoClearColor=u,o.autoClearDepth=p,o.autoClearStencil=g,e.background=_,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Fm,s1(e))}_fromTexture(e,n){e.mapping===Ws||e.mapping===Ka?this._setSize(e.image.length===0?Fm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Um(e,!1,!1),i=Math.log2(e)-Pb;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Um(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Ws||e.mapping===Ka?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Om()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Fb(),this._integrationMaterial=Ub());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Ev);for(let a=0;a<=i;a++){const l=Jl.lodToRoughness(a,i);if(a>i-Nb)s.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const o=l>0?Math.log2(n)+.5*Math.log2(6/(Mv*Math.pow(l,4)))+.5:0;r.roughness.value=l,r.lodBias.value=o,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Ob());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Um(t,e,n){return new Th(t,{minFilter:ur,generateMipmaps:e,type:Ei,colorSpace:ql,depthBuffer:n})}function lo(t,e,n){return new Jr({name:t,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:n,side:En,blending:Fs,depthTest:!1,depthWrite:!1})}function Fb(){return lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mv}u

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
	`)}function Ub(){return lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ev}},`

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
	`)}function Ob(){return lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lb}
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
	`)}function Om(){return lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function km(){return lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===ru||p===su)if(e.has(u)){const g=e.get(u).texture;return l(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new Th(g.height);return _.fromEquirectangularTexture(t,u),e.set(u,_),u.addEventListener("dispose",c),l(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,g=p===ru||p===su,_=p===Ws||p===Ka;if(g||_){let x=n.get(u);const d=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Jl(t)),x=g?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),x.texture;if(x!==void 0)return x.texture;{const m=u.image;return g&&m&&m.height>0||_&&m&&o(m)?(i===null&&(i=new Jl(t)),x=g?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function l(u,p){return p===ru?u.mapping=Ws:p===su&&(u.mapping=Ka),u}function o(u){let p=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Bb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_l("WebGLRenderer: "+i+" extension not supported."),r}}}function zb(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function l(g){o(g.target)}function o(g){g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",l),delete r[g.id],a.unregister(g);const _=s.get(g);_&&(e.remove(_),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(g,_){return r[_.id]!==void 0||(_.addEventListener("dispose",l),r[_.id]=new WeakRef(_),a.register(_,_.id,_),n.memory.geometries++),_}function h(g){const _=g.attributes;for(const x in _)e.update(_[x],t.ARRAY_BUFFER)}function f(g){const _=g.index,x=g.attributes.position;let d=0;if(x===void 0)return;const m=_!==null?_.array.length:x.array.length/3-1,y=x.count>=65535?dv:uv,S=new y(Math.ceil(m/3)*6,1),E=S.array;if(_!==null){const v=_.array;d=_.version;for(let M=0,L=0;M<m;M+=3){const R=v[M+0],D=v[M+1],I=v[M+2];E[L++]=R,E[L++]=D,E[L++]=D,E[L++]=I,E[L++]=I,E[L++]=R}}else{d=x.version;for(let v=0,M=0;v<m;v+=3){const L=v+0,R=v+1,D=v+2;E[M++]=L,E[M++]=R,E[M++]=R,E[M++]=D,E[M++]=D,E[M++]=L}}S.version=d;const w=s.get(g);w&&e.remove(w),s.set(g,S)}function u(g){const _=s.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return s.get(g)}function p(){for(const g in r){const _=r[g].deref();_!==void 0&&o(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function Hb(t,e,n){let i;function r(f){i=f}let s,a;function l(f){s=f.type,a=f.bytesPerElement}function o(f,u){t.drawElements(i,u,s,f*a),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,f*a,p),n.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let _=0;for(let x=0;x<p;x++)_+=u[x];n.update(_,i,1)}this.setMode=r,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function Gb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Vb(t,e,n){const i=new WeakMap,r=new yt;function s(a,l,o){const c=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(l);if(u===void 0||u.count!==f){let R=function(){M.dispose(),i.delete(l),l.removeEventListener("dispose",R)};var p=R;u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),x===!0&&(S=3);let E=l.attributes.position.count*S,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const v=new Float32Array(E*w*4*f),M=new ov(v,E,w,f);M.type=xi,M.needsUpdate=!0;const L=S*4;for(let D=0;D<f;D++){const I=d[D],F=m[D],N=y[D],G=E*w*4*D;for(let q=0;q<I.count;q++){const z=q*L;g===!0&&(r.fromBufferAttribute(I,q),v[G+z+0]=r.x,v[G+z+1]=r.y,v[G+z+2]=r.z,v[G+z+3]=0),_===!0&&(r.fromBufferAttribute(F,q),v[G+z+4]=r.x,v[G+z+5]=r.y,v[G+z+6]=r.z,v[G+z+7]=0),x===!0&&(r.fromBufferAttribute(N,q),v[G+z+8]=r.x,v[G+z+9]=r.y,v[G+z+10]=r.z,v[G+z+11]=N.itemSize===4?r.w:1)}}u={count:f,texture:M,size:new Ne(E,w)},i.set(l,u),l.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const _=l.morphTargetsRelative?1:1-g;o.getUniforms().setValue(t,"morphTargetBaseInfluence",_),o.getUniforms().setValue(t,"morphTargetInfluences",c)}o.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Wb(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function l(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:l}}const Xb={[Vx]:"LINEAR_TONE_MAPPING",[Wx]:"REINHARD_TONE_MAPPING",[Xx]:"CINEON_TONE_MAPPING",[hh]:"ACES_FILMIC_TONE_MAPPING",[Yx]:"AGX_TONE_MAPPING",[qx]:"NEUTRAL_TONE_MAPPING",[jx]:"CUSTOM_TONE_MAPPING"};function jb(t,e,n,i,r,s){const a=new yi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null,c=null;const h=new wn;h.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new it([0,2,0,0,2,0],2));const f=new U1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Xe(h,f),p=new _v(-1,1,1,-1,0,1);let g=null,_=null,x=!1,d,m=null,y=[],S=!1;this.setSize=function(E,w){a.setSize(E,w),l!==null&&l.setSize(E,w),o!==null&&o.setSize(E,w);for(let v=0;v<y.length;v++){const M=y[v];M.setSize&&M.setSize(E,w)}},this.setEffects=function(E){y=E,S=y.length>0&&y[0].isRenderPass===!0;const w=a.width,v=a.height;y.length>0&&l===null&&(l=new yi(w,v,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),o=new yi(w,v,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&y.some(L=>L.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new js(w,v),s===!0&&(c.format=dr,c.type=Xs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let L=0;L<y.length;L++){const R=y[L];R.setSize&&R.setSize(w,v),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,w){if(x||E.toneMapping===ki&&y.length===0)return!1;if(m=w,w!==null){const v=w.width,M=w.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return S===!1&&E.setRenderTarget(a),d=E.toneMapping,E.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(E,w){E.toneMapping=d,x=!0;let v=a,M=l;for(let L=0;L<y.length;L++){const R=y[L];R.enabled!==!1&&(R.render(E,M,v,w),R.needsSwap!==!1&&(v=M,M=M===l?o:l))}if(g!==E.outputColorSpace||_!==E.toneMapping){g=E.outputColorSpace,_=E.toneMapping,f.defines={},Ze.getTransfer(g)===st&&(f.defines.SRGB_TRANSFER="");const L=Xb[_];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(m),E.render(u,p),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),h.dispose(),f.dispose()}}const wv=new hn,bv=new js(1,1),Av=new pv(1),Tv=new ov,Rv=new h1,Cv=new hv,Bm=[],zm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Vm=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bm[r];if(s===void 0&&(s=new Float32Array(r),Bm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Yb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function Zb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Vm.set(i),t.uniformMatrix2fv(this.addr,!1,Vm),kt(n,i)}}function Jb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Gm.set(i),t.uniformMatrix3fv(this.addr,!1,Gm),kt(n,i)}}function Qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),kt(n,i)}}function eA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function rA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Ec(t){return t.version===0&&(t.compareFunction=sv,t.needsUpdate=!0),t}function lA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Ec(bv):s=wv,n.setTexture2D(e||s,r)}function cA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rv,r)}function uA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Ec(Av):s=Cv,n.setTextureCube(e||s,r)}function dA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Tv,r)}function fA(t){switch(t){case 5126:return Yb;case 35664:return qb;case 35665:return $b;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return rA;case 36294:return sA;case 36295:return aA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return dA}}function hA(t,e){t.uniform1fv(this.addr,e)}function pA(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function mA(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function gA(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function xA(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vA(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _A(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SA(t,e){t.uniform1iv(this.addr,e)}function yA(t,e){t.uniform2iv(this.addr,e)}function MA(t,e){t.uniform3iv(this.addr,e)}function EA(t,e){t.uniform4iv(this.addr,e)}function wA(t,e){t.uniform1uiv(this.addr,e)}function bA(t,e){t.uniform2uiv(this.addr,e)}function AA(t,e){t.uniform3uiv(this.addr,e)}function TA(t,e){t.uniform4uiv(this.addr,e)}function RA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Ec(bv):a=wv;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function CA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Rv,s[a])}function PA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Ec(Av):a=Cv;for(let l=0;l!==r;++l)n.setTextureCube(e[l]||a,s[l])}function LA(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Tv,s[a])}function NA(t){switch(t){case 5126:return hA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return xA;case 35675:return vA;case 35676:return _A;case 5124:case 35670:return SA;case 35667:case 35671:return yA;case 35668:case 35672:return MA;case 35669:case 35673:return EA;case 5125:return wA;case 36294:return bA;case 36295:return AA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return CA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return LA}}class DA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fA(n.type)}}class IA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NA(n.type)}}class FA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function UA(t,e,n){const i=t.name,r=i.length;for(Nu.lastIndex=0;;){const s=Nu.exec(i),a=Nu.lastIndex;let l=s[1];const o=s[2]==="]",c=s[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===r){Wm(n,c===void 0?new DA(l,t,e):new IA(l,t,e));break}else{let f=n.map[l];f===void 0&&(f=new FA(l),Wm(n,f)),n=f}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),o=e.getUniformLocation(n,l.name);UA(l,o,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const OA=37297;let kA=0;function BA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const jm=new Ue;function zA(t){Ze._getMatrix(jm,Ze.workingColorSpace,t);const e=`mat3( ${jm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+BA(t.getShaderSource(e),l)}else return s}function HA(t,e){const n=zA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const GA={[Vx]:"Linear",[Wx]:"Reinhard",[Xx]:"Cineon",[hh]:"ACESFilmic",[Yx]:"AgX",[qx]:"Neutral",[jx]:"Custom"};function VA(t,e){const n=GA[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new j;function WA(){Ze.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function jA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function _a(t){return t!==""}function qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(t){return t.replace(qA,$A)}function $A(t,e){const n=Ge[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mf(n)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(t){return t.replace(KA,ZA)}function ZA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const JA={[pl]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function QA(t){return JA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eT={[Ka]:"ENVMAP_MODE_REFRACTION"};function tT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":eT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nT={[Gx]:"ENVMAP_BLENDING_MULTIPLY",[GM]:"ENVMAP_BLENDING_MIX",[VM]:"ENVMAP_BLENDING_ADD"};function iT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":nT[t.combine]||"ENVMAP_BLENDING_NONE"}function rT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const o=QA(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=tT(n),f=iT(n),u=XA(n),p=jA(s),g=r.createProgram();let _,x,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(_a).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(_a).join(`
`),x.length>0&&(x+=`
`)):(_=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),x=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?Ge.tonemapping_pars_fragment:"",n.toneMapping!==ki?VA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,HA("linearToOutputTexel",n.outputColorSpace),WA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_a).join(`
`)),a=mf(a),a=qm(a,n),a=$m(a,n),l=mf(l),l=qm(l,n),l=$m(l,n),a=Km(a),l=Km(l),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",n.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const m=d+_+a,y=d+x+l,S=Xm(r,r.VERTEX_SHADER,m),E=Xm(r,r.FRAGMENT_SHADER,y);r.attachShader(g,S),r.attachShader(g,E),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(R){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(g)||"",I=r.getShaderInfoLog(S)||"",F=r.getShaderInfoLog(E)||"",N=D.trim(),G=I.trim(),q=F.trim();let z=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,S,E);else{const k=Ym(r,S,"vertex"),C=Ym(r,E,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+k+`
`+C)}else N!==""?Ie("WebGLProgram: Program Info Log:",N):(G===""||q==="")&&(H=!1);H&&(R.diagnostics={runnable:z,programLog:N,vertexShader:{log:G,prefix:_},fragmentShader:{log:q,prefix:x}})}r.deleteShader(S),r.deleteShader(E),v=new Sl(r,g),M=YA(r,g)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(g,OA)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}let sT=0;class aT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oT(e),n.set(e,i)),i}}class oT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(t){return t===Zr||t===jl||t===Yl}function cT(t,e,n,i,r,s){const a=new lv,l=new aT,o=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return o.add(v),v===0?"uv":`uv${v}`}function g(v,M,L,R,D,I){const F=R.fog,N=D.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=e.get(v.envMap||G,q),H=u[v.type];let k=i.precision;v.precision!==null&&(k=i.getMaxPrecision(v.precision),k!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",k,"instead."));const C=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,V=C!==void 0?C.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let Me,$,ne,oe;if(H){const _e=pi[H];Me=_e.vertexShader,$=_e.fragmentShader}else{Me=v.vertexShader,$=v.fragmentShader;const _e=l.getVertexShaderStage(v),rt=l.getFragmentShaderStage(v);l.update(v,_e,rt),ne=_e.id,oe=rt.id}const ve=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,ot=D.isBatchedMesh===!0,Te=!!v.map,Be=!!v.matcap,Ve=!!z,ke=Ve&&z.isPMREMTexture===!0,jt=!!v.aoMap,Lt=!!v.lightMap,gn=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,oi=!!v.displacementMap,Bt=!!v.emissiveMap,In=!!v.metalnessMap,Fn=!!v.roughnessMap,Un=v.anisotropy>0,B=v.clearcoat>0,On=v.diffuseRoughness>0,pt=v.dispersion>0,mt=v.retroreflectivity>0,xe=v.iridescence>0,Nt=v.sheen>0,De=v.transmission>0,Fe=Un&&!!v.anisotropyMap,P=B&&!!v.clearcoatMap,b=B&&!!v.clearcoatNormalMap,X=B&&!!v.clearcoatRoughnessMap,se=On&&!!v.diffuseRoughnessMap,te=xe&&!!v.iridescenceMap,ue=xe&&!!v.iridescenceThicknessMap,me=Nt&&!!v.sheenColorMap,J=Nt&&!!v.sheenRoughnessMap,Q=!!v.specularMap,fe=!!v.specularColorMap,U=!!v.specularIntensityMap,ee=De&&!!v.transmissionMap,Z=De&&!!v.thicknessMap,he=!!v.gradientMap,ce=!!v.alphaMap,de=v.alphaTest>0,Ce=!!v.alphaHash,He=!!v.extensions;let le=ki;v.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(le=t.toneMapping);const Le=ke?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,ze={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:Me,fragmentShader:$,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:k,batching:ot,batchingColor:ot&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Te,matcap:Be,envMap:Ve,envMapMode:Ve&&z.mapping,envMapPMREM:ke,envMapMaxLod:ke?Le.length-1:null,envMapSize:ke?Le[0].width:null,aoMap:jt,lightMap:Lt,bumpMap:gn,normalMap:xt,displacementMap:oi,emissiveMap:Bt,normalMapObjectSpace:xt&&v.normalMapType===jM,normalMapTangentSpace:xt&&v.normalMapType===ff,packedNormalMap:xt&&v.normalMapType===ff&&lT(v.normalMap.format),metalnessMap:In,roughnessMap:Fn,anisotropy:Un,anisotropyMap:Fe,clearcoat:B,clearcoatMap:P,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:On,diffuseRoughnessMap:se,dispersion:pt,retroreflection:mt,iridescence:xe,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:Nt,sheenColorMap:me,sheenRoughnessMap:J,specularMap:Q,specularColorMap:fe,specularIntensityMap:U,transmission:De,transmissionMap:ee,thicknessMap:Z,gradientMap:he,opaque:v.transparent===!1&&v.blending===Ca&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Ce,combine:v.combine,mapUv:Te&&p(v.map.channel),aoMapUv:jt&&p(v.aoMap.channel),lightMapUv:Lt&&p(v.lightMap.channel),bumpMapUv:gn&&p(v.bumpMap.channel),normalMapUv:xt&&p(v.normalMap.channel),displacementMapUv:oi&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:In&&p(v.metalnessMap.channel),roughnessMapUv:Fn&&p(v.roughnessMap.channel),anisotropyMapUv:Fe&&p(v.anisotropyMap.channel),clearcoatMapUv:P&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:te&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(v.sheenRoughnessMap.channel),specularMapUv:Q&&p(v.specularMap.channel),specularColorMapUv:fe&&p(v.specularColorMap.channel),specularIntensityMapUv:U&&p(v.specularIntensityMap.channel),transmissionMapUv:ee&&p(v.transmissionMap.channel),thicknessMapUv:Z&&p(v.thicknessMap.channel),alphaMapUv:ce&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||Un),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Te||ce),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ie,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:I.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gi,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:He&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&v.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ze.vertexUv1s=o.has(1),ze.vertexUv2s=o.has(2),ze.vertexUv3s=o.has(3),o.clear(),ze}function _(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(M,v),d(M,v),M.push(t.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function x(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function d(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function m(v){const M=u[v.type];let L;if(M){const R=pi[M];L=D1.clone(R.uniforms)}else L=v.uniforms;return L}function y(v,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new rT(t,M,v,r),c.push(L),h.set(M,L)),L}function S(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){l.remove(v)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:m,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:w}}function uT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,o){t.get(a)[l]=o}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function dT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Jm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function l(u,p,g,_,x,d){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:x,group:d},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=g,m.materialVariant=a(u),m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=x,m.group=d),e++,m}function o(u,p,g,_,x,d,m){m.reversedDepth===!0&&(x=-x);const y=l(u,p,g,_,x,d);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):n.push(y)}function c(u,p,g,_,x,d){const m=l(u,p,g,_,x,d);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||dT),i.length>1&&i.sort(p||Jm),r.length>1&&r.sort(p||Jm)}function f(){for(let u=e,p=t.length;u<p;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:h}}function fT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Qm,t.set(i,[a])):r>=s.length?(a=new Qm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new j,color:new Je};break;case"SpotLight":n={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function pT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mT=0;function gT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xT(t){const e=new hT,n=pT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Et,a=new Et;function l(c){let h=0,f=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,g=0,_=0,x=0,d=0,m=0,y=0,S=0,E=0,w=0,v=0,M=0,L=0,R=0;c.sort(gT);for(let I=0,F=c.length;I<F;I++){const N=c[I],G=N.color,q=N.intensity,z=N.distance;let H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Zr?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=G.r*q,f+=G.g*q,u+=G.b*q;else if(N.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],q);R++}else if(N.isSunLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const C=N.shadow,V=n.get(N);V.shadowIntensity=C.intensity,V.shadowBias=C.bias,V.shadowNormalBias=C.normalBias,V.shadowRadius=C.radius,V.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),i.sunShadow[g]=V,i.sunShadowMap[g]=H;const ie=C.getViewportCount();for(let Me=0;Me<ie;Me++)i.sunShadowMatrix[_+Me]=C.getMatrix(Me),i.sunShadowCascade[_+Me]=C._cascadeData[Me];_+=ie,g++}i.sun[p]=k,p++}else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const C=N.shadow,V=n.get(N);V.shadowIntensity=C.intensity,V.shadowBias=C.bias,V.shadowNormalBias=C.normalBias,V.shadowRadius=C.radius,V.shadowMapSize=C.mapSize,i.directionalShadow[x]=V,i.directionalShadowMap[x]=H,i.directionalShadowMatrix[x]=N.shadow.matrix,E++}i.directional[x]=k,x++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(G).multiplyScalar(q),k.distance=z,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[m]=k;const C=N.shadow;if(N.map&&(i.spotLightMap[M]=N.map,M++,C.updateMatrices(N),N.castShadow&&L++),i.spotLightMatrix[m]=C.matrix,N.castShadow){const V=n.get(N);V.shadowIntensity=C.intensity,V.shadowBias=C.bias,V.shadowNormalBias=C.normalBias,V.shadowRadius=C.radius,V.shadowMapSize=C.mapSize,i.spotShadow[m]=V,i.spotShadowMap[m]=H,v++}m++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(G).multiplyScalar(q),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=k,y++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),k.distance=N.distance,k.decay=N.decay,N.castShadow){const C=N.shadow,V=n.get(N);V.shadowIntensity=C.intensity,V.shadowBias=C.bias,V.shadowNormalBias=C.normalBias,V.shadowRadius=C.radius,V.shadowMapSize=C.mapSize,V.shadowCameraNear=C.camera.near,V.shadowCameraFar=C.camera.far,i.pointShadow[d]=V,i.pointShadowMap[d]=H,i.pointShadowMatrix[d]=N.shadow.matrix,w++}i.point[d]=k,d++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(q),k.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[S]=k,S++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.sunLength!==p||D.directionalLength!==x||D.pointLength!==d||D.spotLength!==m||D.rectAreaLength!==y||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==w||D.numSpotShadows!==v||D.numSpotMaps!==M||D.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=x,i.spot.length=m,i.rectArea.length=y,i.point.length=d,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+M-L,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,D.sunLength=p,D.directionalLength=x,D.pointLength=d,D.spotLength=m,D.rectAreaLength=y,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=w,D.numSpotShadows=v,D.numSpotMaps=M,D.numLightProbes=R,i.version=mT++)}function o(c,h){let f=0,u=0,p=0,g=0,_=0,x=0;const d=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isSunLight){const E=i.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),f++}else if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),u++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),x++}}}return{setup:l,setupView:o,state:i}}function e0(t){const e=new xT(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):n.push(f)}function l(f){i.push(f)}function o(){e.setup(n),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:l}}function vT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new e0(t),e.set(r,[l])):s>=a.length?(l=new e0(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ST=`uniform sampler2D shadow_pass;
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
}`,yT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],MT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],t0=new Et,fa=new j,Du=new j;function ET(t,e,n){let i=new Qa;const r=new Ne,s=new Ne,a=new yt,l=new O1,o=new k1,c={},h=n.maxTextureSize,f={[Kr]:En,[En]:Kr,[gi]:gi},u=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:_T,fragmentShader:ST}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let d=this.type;this.render=function(w,v,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===Bx&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pl);const L=t.getRenderTarget(),R=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Fs),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=d!==this.type;F&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=w.length;N<G;N++){const q=w[N],z=q.shadow;if(z===void 0){Ie("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const H=z.getFrameExtents();r.multiply(H),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,z.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=k,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===va){if(q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new yi(r.x,r.y,{format:Zr,type:Ei,minFilter:_n,magFilter:_n,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new js(r.x,r.y,xi),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Er,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt}else q.isPointLight?(z.map=new Th(r.x),z.map.depthTexture=new pv(r.x,Mi)):(z.map=new yi(r.x,r.y),z.map.depthTexture=new js(r.x,r.y,Mi)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Er,this.type===pl?(z.map.depthTexture.compareFunction=k?rv:iv,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const C=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,M);const V=z.camera.layers.mask&4294967294?z.camera.layers:M.layers;for(let ie=0;ie<C;ie++){const Me=z.getCamera(ie);if(q.isPointLight){const $=z.camera,ne=z.matrix,oe=q.distance||$.far;oe!==$.far&&($.far=oe,$.updateProjectionMatrix()),fa.setFromMatrixPosition(q.matrixWorld),$.position.copy(fa),Du.copy($.position),Du.add(yT[ie]),$.up.copy(MT[ie]),$.lookAt(Du),$.updateMatrixWorld(),ne.makeTranslation(-fa.x,-fa.y,-fa.z),t0.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(t0,$.coordinateSystem,$.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(z.map),t.clear());const $=z.getViewport(ie);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),I.viewport(a)}i=z.getFrustum(ie),S(v,M,Me,q,V,this.type)}z.isPointLightShadow!==!0&&this.type===va&&m(z,M),z.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(L,R,D)};function m(w,v){const M=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new yi(r.x,r.y,{format:Zr,type:Ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(v,null,M,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(v,null,M,p,_,null)}function y(w,v,M,L){let R=null;const D=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=M.isPointLight===!0?o:l,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const I=R.uuid,F=v.uuid;let N=c[I];N===void 0&&(N={},c[I]=N);let G=N[F];G===void 0&&(G=R.clone(),N[F]=G,v.addEventListener("dispose",E)),R=G}if(R.visible=v.visible,R.wireframe=v.wireframe,L===va?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:f[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=t.properties.get(R);I.light=M}return R}function S(w,v,M,L,R,D){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===va)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const N=e.update(w),G=w.material;if(Array.isArray(G)){const q=N.groups;for(let z=0,H=q.length;z<H;z++){const k=q[z],C=G[k.materialIndex];if(C&&C.visible){const V=y(w,C,L,D);w.onBeforeShadow(t,w,v,M,N,V,k),t.renderBufferDirect(M,null,N,V,w,k),w.onAfterShadow(t,w,v,M,N,V,k)}}}else if(G.visible){const q=y(w,G,L,D);w.onBeforeShadow(t,w,v,M,N,q,null),t.renderBufferDirect(M,null,N,q,w,null),w.onAfterShadow(t,w,v,M,N,q,null)}}const F=w.children;for(let N=0,G=F.length;N<G;N++)S(F[N],v,M,L,R,D)}function E(w){w.target.removeEventListener("dispose",E);for(const M in c){const L=c[M],R=w.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function wT(t,e){function n(){let U=!1;const ee=new yt;let Z=null;const he=new yt(0,0,0,0);return{setMask:function(ce){Z!==ce&&!U&&(t.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){U=ce},setClear:function(ce,de,Ce,He,le){le===!0&&(ce*=He,de*=He,Ce*=He),ee.set(ce,de,Ce,He),he.equals(ee)===!1&&(t.clearColor(ce,de,Ce,He),he.copy(ee))},reset:function(){U=!1,Z=null,he.set(-1,0,0,0)}}}function i(){let U=!1,ee=!1,Z=null,he=null,ce=null;return{setReversed:function(de){if(ee!==de){const Ce=e.get("EXT_clip_control");de?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ee=de;const He=ce;ce=null,this.setClear(He)}},getReversed:function(){return ee},setTest:function(de){de?re(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(de){Z!==de&&!U&&(t.depthMask(de),Z=de)},setFunc:function(de){if(ee&&(de=i1[de]),he!==de){switch(de){case Ad:t.depthFunc(t.NEVER);break;case Td:t.depthFunc(t.ALWAYS);break;case Rd:t.depthFunc(t.LESS);break;case $a:t.depthFunc(t.LEQUAL);break;case Cd:t.depthFunc(t.EQUAL);break;case Pd:t.depthFunc(t.GEQUAL);break;case Ld:t.depthFunc(t.GREATER);break;case Nd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=de}},setLocked:function(de){U=de},setClear:function(de){ce!==de&&(ce=de,ee&&(de=1-de),t.clearDepth(de))},reset:function(){U=!1,Z=null,he=null,ce=null,ee=!1}}}function r(){let U=!1,ee=null,Z=null,he=null,ce=null,de=null,Ce=null,He=null,le=null;return{setTest:function(Le){U||(Le?re(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!U&&(t.stencilMask(Le),ee=Le)},setFunc:function(Le,ze,_e){(Z!==Le||he!==ze||ce!==_e)&&(t.stencilFunc(Le,ze,_e),Z=Le,he=ze,ce=_e)},setOp:function(Le,ze,_e){(de!==Le||Ce!==ze||He!==_e)&&(t.stencilOp(Le,ze,_e),de=Le,Ce=ze,He=_e)},setLocked:function(Le){U=Le},setClear:function(Le){le!==Le&&(t.clearStencil(Le),le=Le)},reset:function(){U=!1,ee=null,Z=null,he=null,ce=null,de=null,Ce=null,He=null,le=null}}}const s=new n,a=new i,l=new r;let o={};const c=new WeakMap;let h={},f={},u={},p=new WeakMap,g=[],_=null,x=!1,d=null,m=null,y=null,S=null,E=null,w=null,v=null,M=new Je(0,0,0),L=0,R=!1,D=null,I=null,F=null,N=null,G=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=H>=2);let C=null,V={};const ie=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),$=new yt().fromArray(ie),ne=new yt().fromArray(Me);function oe(U,ee,Z,he){const ce=new Uint8Array(4),de=t.createTexture();t.bindTexture(U,de),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Z;Ce++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ee+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return de}const ve={};ve[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),re(t.DEPTH_TEST),a.setFunc($a),gn(!1),xt(om),re(t.CULL_FACE),jt(Fs);function re(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Pe(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function ot(U,ee){return u[U]!==ee?(t.bindFramebuffer(U,ee),u[U]=ee,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ee),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function Te(U,ee){let Z=g,he=!1;if(U){Z=p.get(ee),Z===void 0&&(Z=[],p.set(ee,Z));const ce=U.textures;if(Z.length!==ce.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ce=ce.length;de<Ce;de++)Z[de]=t.COLOR_ATTACHMENT0+de;Z.length=ce.length,he=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,he=!0);he&&t.drawBuffers(Z)}function Be(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const Ve={[gs]:t.FUNC_ADD,[bM]:t.FUNC_SUBTRACT,[AM]:t.FUNC_REVERSE_SUBTRACT};Ve[TM]=t.MIN,Ve[RM]=t.MAX;const ke={[CM]:t.ZERO,[PM]:t.ONE,[LM]:t.SRC_COLOR,[zx]:t.SRC_ALPHA,[OM]:t.SRC_ALPHA_SATURATE,[FM]:t.DST_COLOR,[DM]:t.DST_ALPHA,[NM]:t.ONE_MINUS_SRC_COLOR,[Hx]:t.ONE_MINUS_SRC_ALPHA,[UM]:t.ONE_MINUS_DST_COLOR,[IM]:t.ONE_MINUS_DST_ALPHA,[kM]:t.CONSTANT_COLOR,[BM]:t.ONE_MINUS_CONSTANT_COLOR,[zM]:t.CONSTANT_ALPHA,[HM]:t.ONE_MINUS_CONSTANT_ALPHA};function jt(U,ee,Z,he,ce,de,Ce,He,le,Le){if(U===Fs){x===!0&&(Pe(t.BLEND),x=!1);return}if(x===!1&&(re(t.BLEND),x=!0),U!==wM){if(U!==d||Le!==R){if((m!==gs||E!==gs)&&(t.blendEquation(t.FUNC_ADD),m=gs,E=gs),Le)switch(U){case Ca:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFunc(t.ONE,t.ONE);break;case cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case um:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ca:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case cm:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case um:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",U);break}y=null,S=null,w=null,v=null,M.set(0,0,0),L=0,d=U,R=Le}return}ce=ce||ee,de=de||Z,Ce=Ce||he,(ee!==m||ce!==E)&&(t.blendEquationSeparate(Ve[ee],Ve[ce]),m=ee,E=ce),(Z!==y||he!==S||de!==w||Ce!==v)&&(t.blendFuncSeparate(ke[Z],ke[he],ke[de],ke[Ce]),y=Z,S=he,w=de,v=Ce),(He.equals(M)===!1||le!==L)&&(t.blendColor(He.r,He.g,He.b,le),M.copy(He),L=le),d=U,R=!1}function Lt(U,ee){U.side===gi?Pe(t.CULL_FACE):re(t.CULL_FACE);let Z=U.side===En;ee&&(Z=!Z),gn(Z),U.blending===Ca&&U.transparent===!1?jt(Fs):jt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const he=U.stencilWrite;l.setTest(he),he&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function gn(U){D!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),D=U)}function xt(U){U!==MM?(re(t.CULL_FACE),U!==I&&(U===om?t.cullFace(t.BACK):U===EM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),I=U}function oi(U){U!==F&&(z&&t.lineWidth(U),F=U)}function Bt(U,ee,Z){U?(re(t.POLYGON_OFFSET_FILL),(N!==ee||G!==Z)&&(N=ee,G=Z,a.getReversed()&&(ee=-ee,Z=-Z),t.polygonOffset(ee,Z))):Pe(t.POLYGON_OFFSET_FILL)}function In(U){U?re(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function Fn(U){U===void 0&&(U=t.TEXTURE0+q-1),C!==U&&(t.activeTexture(U),C=U)}function Un(U,ee,Z){Z===void 0&&(C===null?Z=t.TEXTURE0+q-1:Z=C);let he=V[Z];he===void 0&&(he={type:void 0,texture:void 0},V[Z]=he),(he.type!==U||he.texture!==ee)&&(C!==Z&&(t.activeTexture(Z),C=Z),t.bindTexture(U,ee||ve[U]),he.type=U,he.texture=ee)}function B(){const U=V[C];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function On(){try{t.compressedTexImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function pt(){try{t.compressedTexImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function mt(){try{t.texSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function xe(){try{t.texSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function Nt(){try{t.compressedTexSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function Fe(){try{t.texStorage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function P(){try{t.texStorage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function b(){try{t.texImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function X(){try{t.texImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function se(U){return f[U]!==void 0?f[U]:t.getParameter(U)}function te(U,ee){f[U]!==ee&&(t.pixelStorei(U,ee),f[U]=ee)}function ue(U){$.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),$.copy(U))}function me(U){ne.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ne.copy(U))}function J(U,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let he=Z.get(U);he===void 0&&(he=t.getUniformBlockIndex(ee,U.name),t.uniformBlockBinding(ee,he,he),Z.set(U,he))}function Q(U,ee,Z){const ce=c.get(ee).get(U);o[ce]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,ce,Z),o[ce]=Z)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},C=null,V={},u={},o={},p=new WeakMap,g=[],_=null,x=!1,d=null,m=null,y=null,S=null,E=null,w=null,v=null,M=new Je(0,0,0),L=0,R=!1,D=null,I=null,F=null,N=null,G=null,$.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:re,disable:Pe,bindFramebuffer:ot,drawBuffers:Te,useProgram:Be,setBlending:jt,setMaterial:Lt,setFlipSided:gn,setCullFace:xt,setLineWidth:oi,setPolygonOffset:Bt,setScissorTest:In,activeTexture:Fn,bindTexture:Un,unbindTexture:B,compressedTexImage2D:On,compressedTexImage3D:pt,texImage2D:b,texImage3D:X,pixelStorei:te,getParameter:se,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Fe,texStorage3D:P,texSubImage2D:mt,texSubImage3D:xe,compressedTexSubImage2D:Nt,compressedTexSubImage3D:De,scissor:ue,viewport:me,reset:fe}}function bT(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,f=new Set;let u;const p=new WeakMap,g=new Set,_=new FinalizationRegistry(P=>g.delete(P));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,b){return x?new OffscreenCanvas(P,b):Kl("canvas")}function m(P,b,X){let se=1;const te=Fe(P);if((te.width>X||te.height>X)&&(se=X/Math.max(te.width,te.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(se*te.width),me=Math.floor(se*te.height);u===void 0&&(u=d(ue,me));const J=b?d(ue,me):u;return J.width=ue,J.height=me,J.getContext("2d").drawImage(P,0,0,ue,me),Ie("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ue+"x"+me+")."),J}else return"data"in P&&Ie("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function y(P){return P.generateMipmaps}function S(P){t.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(P,b,X,se,te,ue=!1){if(P!==null){if(t[P]!==void 0)return t[P];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me;se&&(me=e.get("EXT_texture_norm16"),me||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===t.RED&&(X===t.FLOAT&&(J=t.R32F),X===t.HALF_FLOAT&&(J=t.R16F),X===t.UNSIGNED_BYTE&&(J=t.R8),X===t.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),X===t.SHORT&&me&&(J=me.R16_SNORM_EXT)),b===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.R8UI),X===t.UNSIGNED_SHORT&&(J=t.R16UI),X===t.UNSIGNED_INT&&(J=t.R32UI),X===t.BYTE&&(J=t.R8I),X===t.SHORT&&(J=t.R16I),X===t.INT&&(J=t.R32I)),b===t.RG&&(X===t.FLOAT&&(J=t.RG32F),X===t.HALF_FLOAT&&(J=t.RG16F),X===t.UNSIGNED_BYTE&&(J=t.RG8),X===t.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),X===t.SHORT&&me&&(J=me.RG16_SNORM_EXT)),b===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.RG8UI),X===t.UNSIGNED_SHORT&&(J=t.RG16UI),X===t.UNSIGNED_INT&&(J=t.RG32UI),X===t.BYTE&&(J=t.RG8I),X===t.SHORT&&(J=t.RG16I),X===t.INT&&(J=t.RG32I)),b===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.RGB8UI),X===t.UNSIGNED_SHORT&&(J=t.RGB16UI),X===t.UNSIGNED_INT&&(J=t.RGB32UI),X===t.BYTE&&(J=t.RGB8I),X===t.SHORT&&(J=t.RGB16I),X===t.INT&&(J=t.RGB32I)),b===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),X===t.UNSIGNED_INT&&(J=t.RGBA32UI),X===t.BYTE&&(J=t.RGBA8I),X===t.SHORT&&(J=t.RGBA16I),X===t.INT&&(J=t.RGBA32I)),b===t.RGB&&(X===t.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),X===t.SHORT&&me&&(J=me.RGB16_SNORM_EXT),X===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),b===t.RGBA){const Q=ue?$l:Ze.getTransfer(te);X===t.FLOAT&&(J=t.RGBA32F),X===t.HALF_FLOAT&&(J=t.RGBA16F),X===t.UNSIGNED_BYTE&&(J=Q===st?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),X===t.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),X===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(P,b){let X;return P?b===null||b===Mi||b===Xs?X=t.DEPTH24_STENCIL8:b===xi?X=t.DEPTH32F_STENCIL8:b===Za&&(X=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mi||b===Xs?X=t.DEPTH_COMPONENT24:b===xi?X=t.DEPTH_COMPONENT32F:b===Za&&(X=t.DEPTH_COMPONENT16),X}function M(P,b){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kt&&P.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function L(P){const b=new WeakRef(P);i.get(P).__ref=b,g.add(b),_.register(P,b,b)}function R(P){const b=i.get(P).__ref;b!==void 0&&(g.delete(b),_.unregister(b))}function D(P){F(P.target)}function I(P){N(P.target)}function F(P){P.removeEventListener("dispose",D),R(P),q(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function N(P){P.removeEventListener("dispose",I),R(P),H(P)}function G(){for(const P of g){const b=P.deref();b!==void 0&&(b.isRenderTarget===!0?N(b):F(b))}g.clear(),f.clear()}function q(P){const b=i.get(P);if(b.__webglInit===void 0)return;const X=P.source,se=p.get(X);if(se){const te=se[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&z(P),Object.keys(se).length===0&&p.delete(X)}i.remove(P)}function z(P){const b=i.get(P);t.deleteTexture(b.__webglTexture);const X=P.source,se=p.get(X);delete se[b.__cacheKey],a.memory.textures--}function H(P){const b=i.get(P);b.__depthDisposeCallback&&b.__depthDisposeCallback();const X=P.depthTexture;if(X&&X.renderTarget===P&&F(X),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ue=0;ue<b.__webglFramebuffer[te].length;ue++)t.deleteFramebuffer(b.__webglFramebuffer[te][ue]);else t.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)t.deleteFramebuffer(b.__webglFramebuffer[te]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const se=P.textures;for(let te=0,ue=se.length;te<ue;te++){const me=i.get(se[te]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(se[te])}i.remove(P)}let k=0;function C(){k=0}function V(){return k}function ie(P){k=P}function Me(){const P=k;return P>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,P}function $(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.mipmapsAutoUpdate),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ne(P,b){const X=i.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const se=P.image;if(se===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(X,P,b);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+b)}function oe(P,b){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Lt(X,P,b);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+b)}function ve(P,b){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Lt(X,P,b);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+b)}function re(P,b){const X=i.get(P);if(P.version>0&&X.__version!==P.version){gn(X,P,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+b)}const Pe={[Dd]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Id]:t.MIRRORED_REPEAT},ot={[Kt]:t.NEAREST,[WM]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[au]:t.LINEAR_MIPMAP_NEAREST,[ur]:t.LINEAR_MIPMAP_LINEAR},Te={[qM]:t.NEVER,[sv]:t.ALWAYS,[$M]:t.LESS,[iv]:t.LEQUAL,[KM]:t.EQUAL,[rv]:t.GEQUAL,[ZM]:t.GREATER,[JM]:t.NOTEQUAL};function Be(P,b){if(b.type===xi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===au||b.magFilter===Do||b.magFilter===ur||b.minFilter===_n||b.minFilter===au||b.minFilter===Do||b.minFilter===ur)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Pe[b.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Pe[b.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Pe[b.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ot[b.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ot[b.minFilter]),b.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kt||b.minFilter!==Do&&b.minFilter!==ur||b.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ve(P,b){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",D),L(b));const se=b.source;let te=p.get(se);te===void 0&&(te={},p.set(se,te));const ue=$(b);if(ue!==P.__cacheKey){te[ue]===void 0&&(te[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[ue].usedTimes++;const me=te[P.__cacheKey];me!==void 0&&(te[P.__cacheKey].usedTimes--,me.usedTimes===0&&z(b)),P.__cacheKey=ue,P.__webglTexture=te[ue].texture}return X}function ke(P,b,X){return Math.floor(Math.floor(P/X)/b)}function jt(P,b,X,se){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,X,se,b.data);else{ue.sort((U,ee)=>U.start-ee.start);let me=0;for(let U=1;U<ue.length;U++){const ee=ue[me],Z=ue[U],he=ee.start+ee.count,ce=ke(Z.start,b.width,4),de=ke(ee.start,b.width,4);Z.start<=he+1&&ce===de&&ke(Z.start+Z.count-1,b.width,4)===ce?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++me,ue[me]=Z)}ue.length=me+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let U=0,ee=ue.length;U<ee;U++){const Z=ue[U],he=Math.floor(Z.start/4),ce=Math.ceil(Z.count/4),de=he%b.width,Ce=Math.floor(he/b.width),He=ce,le=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,de),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ce),n.texSubImage2D(t.TEXTURE_2D,0,de,Ce,He,le,X,se,b.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Lt(P,b,X){let se=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=t.TEXTURE_3D);const te=Ve(P,b),ue=b.source;n.bindTexture(se,P.__webglTexture,t.TEXTURE0+X);const me=i.get(ue);if(ue.version!==me.__version||te===!0){if(n.activeTexture(t.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const le=Ze.getPrimaries(Ze.workingColorSpace),Le=b.colorSpace===ar?null:Ze.getPrimaries(b.colorSpace),ze=b.colorSpace===ar||le===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=m(b.image,!1,r.maxTextureSize);Q=De(b,Q);const fe=s.convert(b.format,b.colorSpace),U=s.convert(b.type);let ee=w(b.internalFormat,fe,U,b.normalized,b.colorSpace,b.isVideoTexture);Be(se,b);let Z;const he=b.mipmaps,ce=b.isVideoTexture!==!0,de=me.__version===void 0||te===!0,Ce=ue.dataReady,He=M(b,Q);if(b.isDepthTexture)ee=v(b.format===dr,b.type),de&&(ce?n.texStorage2D(t.TEXTURE_2D,1,ee,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,U,null));else if(b.isDataTexture)if(he.length>0){ce&&de&&n.texStorage2D(t.TEXTURE_2D,He,ee,he[0].width,he[0].height);for(let le=0,Le=he.length;le<Le;le++)Z=he[le],ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,U,Z.data):n.texImage2D(t.TEXTURE_2D,le,ee,Z.width,Z.height,0,fe,U,Z.data);b.generateMipmaps=!1}else ce?(de&&n.texStorage2D(t.TEXTURE_2D,He,ee,Q.width,Q.height),Ce&&jt(b,Q,fe,U)):n.texImage2D(t.TEXTURE_2D,0,ee,Q.width,Q.height,0,fe,U,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ee,he[0].width,he[0].height,Q.depth);for(let le=0,Le=he.length;le<Le;le++)if(Z=he[le],b.format!==vi)if(fe!==null)if(ce){if(Ce)if(b.layerUpdates.size>0){const ze=Im(Z.width,Z.height,b.format,b.type);for(const _e of b.layerUpdates){const rt=Z.data.subarray(_e*ze/Z.data.BYTES_PER_ELEMENT,(_e+1)*ze/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,_e,Z.width,Z.height,1,fe,rt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,Q.depth,fe,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,Q.depth,fe,U,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,ee,Z.width,Z.height,Q.depth,0,fe,U,Z.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ce&&de&&n.texStorage2D(t.TEXTURE_2D,He,ee,he[0].width,he[0].height);for(let le=0,Le=he.length;le<Le;le++)Z=he[le],b.format!==vi?fe!==null?ce?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,le,ee,Z.width,Z.height,0,Z.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,U,Z.data):n.texImage2D(t.TEXTURE_2D,le,ee,Z.width,Z.height,0,fe,U,Z.data)}else if(b.isDataArrayTexture)if(ce){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ee,Q.width,Q.height,Q.depth),Ce)if(b.layerUpdates.size>0){const le=Im(Q.width,Q.height,b.format,b.type);for(const Le of b.layerUpdates){const ze=Q.data.subarray(Le*le/Q.data.BYTES_PER_ELEMENT,(Le+1)*le/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,Q.width,Q.height,1,fe,U,ze)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,U,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,fe,U,Q.data);else if(b.isData3DTexture)ce?(de&&n.texStorage3D(t.TEXTURE_3D,He,ee,Q.width,Q.height,Q.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,U,Q.data)):n.texImage3D(t.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,fe,U,Q.data);else if(b.isFramebufferTexture){if(de)if(ce)n.texStorage2D(t.TEXTURE_2D,He,ee,Q.width,Q.height);else{let le=Q.width,Le=Q.height;for(let ze=0;ze<He;ze++)n.texImage2D(t.TEXTURE_2D,ze,ee,le,Le,0,fe,U,null),le>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){const le=t.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),f.add(b),le.onpaint=Le=>{const ze=Le.changedElements;for(const _e of f)ze.includes(_e.image)&&(_e.needsUpdate=!0)},le.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ze=t.RGBA,_e=t.RGBA,rt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ze,_e,rt,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(he.length>0){if(ce&&de){const le=Fe(he[0]);n.texStorage2D(t.TEXTURE_2D,He,ee,le.width,le.height)}for(let le=0,Le=he.length;le<Le;le++)Z=he[le],ce?Ce&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,fe,U,Z):n.texImage2D(t.TEXTURE_2D,le,ee,fe,U,Z);b.generateMipmaps=!1}else if(ce){if(de){const le=Fe(Q);n.texStorage2D(t.TEXTURE_2D,He,ee,le.width,le.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,U,Q)}else n.texImage2D(t.TEXTURE_2D,0,ee,fe,U,Q);y(b)&&b.mipmapsAutoUpdate===!0&&S(se),me.__version=ue.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function gn(P,b,X){if(b.image.length!==6)return;const se=Ve(P,b),te=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+X);const ue=i.get(te);if(te.version!==ue.__version||se===!0){n.activeTexture(t.TEXTURE0+X);const me=Ze.getPrimaries(Ze.workingColorSpace),J=b.colorSpace===ar?null:Ze.getPrimaries(b.colorSpace),Q=b.colorSpace===ar||me===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const fe=b.isCompressedTexture||b.image[0].isCompressedTexture,U=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let _e=0;_e<6;_e++)!fe&&!U?ee[_e]=m(b.image[_e],!0,r.maxCubemapSize):ee[_e]=U?b.image[_e].image:b.image[_e],ee[_e]=De(b,ee[_e]);const Z=ee[0],he=s.convert(b.format,b.colorSpace),ce=s.convert(b.type);let de=w(b.internalFormat,he,ce,b.normalized,b.colorSpace);const Ce=b.isVideoTexture!==!0,He=ue.__version===void 0||se===!0,le=te.dataReady;let Le=M(b,Z);Be(t.TEXTURE_CUBE_MAP,b);let ze;if(b.isDepthTexture){if(de=v(b.format===dr,b.type),He)if(Ce)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,de,Z.width,Z.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,Z.width,Z.height,0,he,ce,null)}else if(fe){Ce&&He&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,Z.width,Z.height);for(let _e=0;_e<6;_e++){ze=ee[_e].mipmaps;for(let rt=0;rt<ze.length;rt++){const zt=ze[rt];b.format!==vi?he!==null?Ce?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,0,0,zt.width,zt.height,he,zt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,de,zt.width,zt.height,0,zt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,0,0,zt.width,zt.height,he,ce,zt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,de,zt.width,zt.height,0,he,ce,zt.data)}}}else{if(ze=b.mipmaps,Ce&&He){ze.length>0&&Le++;const _e=Fe(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,de,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(U){Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ee[_e].width,ee[_e].height,he,ce,ee[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,ee[_e].width,ee[_e].height,0,he,ce,ee[_e].data);for(let rt=0;rt<ze.length;rt++){const Xi=ze[rt].image[_e].image;Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,0,0,Xi.width,Xi.height,he,ce,Xi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,de,Xi.width,Xi.height,0,he,ce,Xi.data)}}else{Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,he,ce,ee[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,he,ce,ee[_e]);for(let rt=0;rt<ze.length;rt++){const zt=ze[rt];Ce?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,0,0,he,ce,zt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,de,he,ce,zt.image[_e])}}}y(b)&&b.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),ue.__version=te.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xt(P,b,X,se,te,ue){const me=s.convert(X.format,X.colorSpace),J=s.convert(X.type),Q=w(X.internalFormat,me,J,X.normalized,X.colorSpace),fe=i.get(b),U=i.get(X);if(U.__renderTarget=b,!fe.__hasExternalTextures){const ee=Math.max(1,b.width>>ue),Z=Math.max(1,b.height>>ue);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ue,Q,ee,Z,b.depth,0,me,J,null):n.texImage2D(te,ue,Q,ee,Z,0,me,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),xe(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,te,U.__webglTexture,0,mt(b)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,te,U.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oi(P,b,X){if(t.bindRenderbuffer(t.RENDERBUFFER,P),b.depthBuffer){const se=b.depthTexture,te=se&&se.isDepthTexture?se.type:null,ue=v(b.stencilBuffer,te),me=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xe(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(b),ue,b.width,b.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(b),ue,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ue,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,P)}else{const se=b.textures;for(let te=0;te<se.length;te++){const ue=se[te],me=s.convert(ue.format,ue.colorSpace),J=s.convert(ue.type),Q=w(ue.internalFormat,me,J,ue.normalized,ue.colorSpace);xe(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(b),Q,b.width,b.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(b),Q,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Q,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Bt(P,b,X){const se=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(b.depthTexture);te.__renderTarget=b;const ue=se?b.depthTexture.image[0]:b.depthTexture.image;(!te.__webglTexture||ue.width!==b.width||ue.height!==b.height)&&(ue.width=b.width,ue.height=b.height,b.depthTexture.needsUpdate=!0),se?re(b.depthTexture,0):ne(b.depthTexture,0);const me=te.__webglTexture,J=mt(b),Q=se?t.TEXTURE_CUBE_MAP_POSITIVE_X+X:t.TEXTURE_2D,fe=b.depthTexture.format===dr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Er)xe(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Q,me,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Q,me,0);else if(b.depthTexture.format===dr)xe(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Q,me,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function In(P){const b=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",te)};se.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=se}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let se=0;se<6;se++)Bt(b.__webglFramebuffer[se],P,se);else P.texture.mipmaps.length>0?Bt(b.__webglFramebuffer[0],P,0):Bt(b.__webglFramebuffer,P,0);else if(X){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=t.createRenderbuffer(),oi(b.__webglDepthbuffer[se],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ue)}}else if(P.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),oi(b.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ue)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fn(P,b,X){const se=i.get(P);b!==void 0&&xt(se.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&In(P)}function Un(P){const b=P.texture,X=i.get(P),se=i.get(b);P.addEventListener("dispose",I),L(P);const te=P.textures,ue=P.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=b.version,a.memory.textures++),ue){X.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps.length>0){X.__webglFramebuffer[J]=[];for(let Q=0;Q<b.mipmaps.length;Q++)X.__webglFramebuffer[J][Q]=t.createFramebuffer()}else X.__webglFramebuffer[J]=t.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)X.__webglFramebuffer[J]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(me)for(let J=0,Q=te.length;J<Q;J++){const fe=i.get(te[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&xe(P)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let J=0;J<te.length;J++){const Q=te[J];X.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[J]);const fe=s.convert(Q.format,Q.colorSpace),U=s.convert(Q.type),ee=w(Q.internalFormat,fe,U,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),Z=mt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,ee,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,X.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),oi(X.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),Be(t.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)xt(X.__webglFramebuffer[J][Q],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else xt(X.__webglFramebuffer[J],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);y(b)?S(t.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),n.unbindTexture()}else if(me){for(let J=0,Q=te.length;J<Q;J++){const fe=te[J],U=i.get(fe);let ee=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,U.__webglTexture),Be(ee,fe),xt(X.__webglFramebuffer,P,fe,t.COLOR_ATTACHMENT0+J,ee,0),y(fe)&&S(ee)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,se.__webglTexture),Be(J,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)xt(X.__webglFramebuffer[Q],P,b,t.COLOR_ATTACHMENT0,J,Q);else xt(X.__webglFramebuffer,P,b,t.COLOR_ATTACHMENT0,J,0);y(b)?S(J):b.mipmaps.length>0&&t.texParameteri(J,t.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),n.unbindTexture()}P.depthBuffer&&In(P)}function B(P){const b=P.textures;for(let X=0,se=b.length;X<se;X++){const te=b[X];if(y(te)&&te.mipmapsAutoUpdate===!0){const ue=E(P),me=i.get(te).__webglTexture;n.bindTexture(ue,me),S(ue),n.unbindTexture()}}}const On=[];function pt(P){if(P.samples>0){if(xe(P)===!1){const b=P.textures,X=P.width,se=P.height;let te=t.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(P),J=b.length>1;if(J)for(let fe=0;fe<b.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const U=i.get(b[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,U,0)}t.blitFramebuffer(0,0,X,se,0,0,X,se,te,t.NEAREST),o===!0&&(On.length=0,On.push(t.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&On.push(ue),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,On))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<b.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);const U=i.get(b[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,U,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&o){const b=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function mt(P){return Math.min(r.maxSamples,P.samples)}function xe(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function De(P,b){const X=P.colorSpace,se=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==ql&&X!==ar&&(Ze.getTransfer(X)===st?(se!==vi||te!==Rn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",X)),b}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=C,this.getTextureUnits=V,this.setTextureUnits=ie,this.setTexture2D=ne,this.setTexture2DArray=oe,this.setTexture3D=ve,this.setTextureCube=re,this.rebindTextures=Fn,this.setupRenderTarget=Un,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=In,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=xe,this.dispose=G}function AT(t,e){function n(i,r=ar){let s;const a=Ze.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===gh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kx)return t.BYTE;if(i===Zx)return t.SHORT;if(i===Za)return t.UNSIGNED_SHORT;if(i===ph)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===ev)return t.ALPHA;if(i===tv)return t.RGB;if(i===vi)return t.RGBA;if(i===Er)return t.DEPTH_COMPONENT;if(i===dr)return t.DEPTH_STENCIL;if(i===nv)return t.RED;if(i===xh)return t.RED_INTEGER;if(i===Zr)return t.RG;if(i===vh)return t.RG_INTEGER;if(i===_h)return t.RGBA_INTEGER;if(i===ml||i===gl||i===xl||i===vl)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===Ud||i===Od||i===kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ud)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bd||i===zd||i===Hd||i===Gd||i===Vd||i===jl||i===Wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bd||i===zd)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gd)return s.COMPRESSED_R11_EAC;if(i===Vd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jl)return s.COMPRESSED_RG11_EAC;if(i===Wd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xd||i===jd||i===Yd||i===qd||i===$d||i===Kd||i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$d)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tf)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nf)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rf)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sf)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===af||i===of||i===lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===af)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cf||i===uf||i===Yl||i===df)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RT=`
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

}`;class CT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new mv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Jr({vertexShader:TT,fragmentShader:RT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xe(new yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PT extends ts{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",o=1,c=null,h=null,f=null,u=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",x=new CT,d={},m=n.getContextAttributes();let y=null,S=null;const E=[],w=[],v=new Ne;let M=null,L=null;const R=new ti;R.viewport=new yt;const D=new ti;D.viewport=new yt;const I=[R,D],F=new G1;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=E[$];return ne===void 0&&(ne=new mu,E[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=E[$];return ne===void 0&&(ne=new mu,E[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=E[$];return ne===void 0&&(ne=new mu,E[$]=ne),ne.getHandSpace()};function q($){const ne=w.indexOf($.inputSource);if(ne===-1)return;const oe=E[ne];oe!==void 0&&(oe.update($.inputSource,$.frame,c||a),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let $=0;$<E.length;$++){const ne=w[$];ne!==null&&(w[$]=null,E[$].disconnect(ne))}N=null,G=null,x.reset();for(const $ in d)delete d[$];if(e.setRenderTarget(y),p=null,u=null,f=null,r=null,S=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),L!==null){const $=L.camera;$.fov=L.fov,$.zoom=L.zoom,$.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ve=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?dr:Er,ve=m.stencil?Xs:Mi);const Pe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Pe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new yi(u.textureWidth,u.textureHeight,{format:vi,type:Rn,depthTexture:new js(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new yi(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await r.requestReferenceSpace(l),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H($){for(let ne=0;ne<$.removed.length;ne++){const oe=$.removed[ne],ve=w.indexOf(oe);ve>=0&&(w[ve]=null,E[ve].disconnect(oe))}for(let ne=0;ne<$.added.length;ne++){const oe=$.added[ne];let ve=w.indexOf(oe);if(ve===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=w.length){w.push(oe),ve=Pe;break}else if(w[Pe]===null){w[Pe]=oe,ve=Pe;break}if(ve===-1)break}const re=E[ve];re&&re.connect(oe)}}function k($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,oe=$.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),F.near=D.near=R.near=ne,F.far=D.far=R.far=oe,(N!==F.near||G!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,G=F.far),F.layers.mask=$.layers.mask|6,R.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const ve=$.parent,re=F.cameras;k(F,ve);for(let Pe=0;Pe<re.length;Pe++)k(re[Pe],ve);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&$.isPerspectiveCamera&&(L={camera:$,fov:$.fov,zoom:$.zoom}),C($,F,ve)};function C($,ne,oe){oe===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return o},this.setFoveation=function($){o=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function($){return d[$]};let V=null;function ie($,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ve=!1;oe.length!==F.cameras.length&&(F.cameras.length=0,ve=!0);for(let Te=0;Te<oe.length;Te++){const Be=oe[Te];let Ve=null;if(p!==null)Ve=p.getViewport(Be);else{const jt=f.getViewSubImage(u,Be);Ve=jt.viewport,Te===0&&(e.setRenderTargetTextures(S,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(S))}let ke=I[Te];ke===void 0&&(ke=new ti,ke.layers.enable(Te),ke.viewport=new yt,I[Te]=ke),ke.matrix.fromArray(Be.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Be.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Te===0&&(F.matrix.copy(ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ve===!0&&F.cameras.push(ke)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Te=f.getDepthInformation(oe[0]);Te&&Te.isValid&&Te.texture&&x.init(Te,r.renderState)}if(re&&re.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Te=0;Te<oe.length;Te++){const Be=oe[Te].camera;if(Be){let Ve=d[Be];Ve||(Ve=new mv,d[Be]=Ve);const ke=f.getCameraImage(Be);Ve.sourceTexture=ke}}}}for(let oe=0;oe<E.length;oe++){const ve=w[oe],re=E[oe];ve!==null&&re!==void 0&&re.update(ve,ne,c||a)}V&&V($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Me=new Sv;Me.setAnimationLoop(ie),this.setAnimationLoop=function($){V=$},this.dispose=function(){}}}const LT=new Et,Pv=new Ue;Pv.set(-1,0,0,0,1,0,0,0,1);function NT(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,gv(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,m,y,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),f(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),u(x,d),d.isMeshPhysicalMaterial&&p(x,d,S)):d.isMeshMatcapMaterial?(s(x,d),g(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),_(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&l(x,d)):d.isPointsMaterial?o(x,d,m,y):d.isSpriteMaterial?c(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===En&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===En&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const m=e.get(d),y=m.envMap,S=m.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Pv),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function l(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function o(x,d,m,y){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*m,x.scale.value=y*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function f(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function u(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function p(x,d,m){x.ior.value=d.ior,d.diffuseRoughness>0&&(x.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.retroreflectivity>0&&(x.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,d){d.matcap&&(x.matcap.value=d.matcap)}function _(x,d){const m=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DT(t,e,n,i){let r={},s={};function a(m,y){const S=y.program;i.uniformBlockBinding(m,S,r[m.id])}function l(m,y){let S=r[m.id];S===void 0&&(g(m),S=o(m),r[m.id]=S,m.addEventListener("dispose",x));const E=y.program;i.updateUBOMapping(m,E);const w=e.render.frame;s[m.id]!==w&&(c(m),s[m.id]=w)}function o(m){const y=t.createBuffer(),S=m.__size,E=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,S,E),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function c(m){const y=r[m.id],S=m.uniforms,E=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,v=S.length;w<v;w++){const M=S[w];if(Array.isArray(M))for(let L=0,R=M.length;L<R;L++)h(M[L],w,L,E);else h(M,w,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(m,y,S,E){if(u(m,y,S,E)===!0){const w=m.__offset,v=m.value;if(Array.isArray(v)){let M=0;for(let L=0;L<v.length;L++){const R=v[L],D=_(R,!0);f(R,m.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,w,m.__data)}}function f(m,y,S){typeof m=="number"||typeof m=="boolean"?y[S]=m:m.isMatrix3?(y[S]=m.elements[0],y[S+1]=m.elements[1],y[S+2]=m.elements[2],y[S+3]=0,y[S+4]=m.elements[3],y[S+5]=m.elements[4],y[S+6]=m.elements[5],y[S+7]=0,y[S+8]=m.elements[6],y[S+9]=m.elements[7],y[S+10]=m.elements[8],y[S+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-S),S):m.toArray(y,S)}function u(m,y,S,E){const w=m.value,v=y+"_"+S;if(Array.isArray(w)){E[v]===void 0&&(E[v]=[]);const M=E[v];let L=!1;for(let R=0;R<w.length;R++)p(w[R],M,R)===!0&&(L=!0);return L}return p(w,E,v)}function p(m,y,S){if(y[S]===void 0)return typeof m=="number"||typeof m=="boolean"?y[S]=m:ArrayBuffer.isView(m)?y[S]=m.slice():y[S]=m.clone(),!0;{const E=y[S];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return y[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function g(m){const y=m.uniforms;let S=0;const E=16;for(let v=0,M=y.length;v<M;v++){const L=Array.isArray(y[v])?y[v]:[y[v]];for(let R=0,D=L.length;R<D;R++){const I=L[R],F=Array.isArray(I.value)?I.value:[I.value],N=Array.isArray(y[v])||Array.isArray(I.value);let G=S;for(let z=0,H=F.length;z<H;z++){const k=F[z],C=_(k,N),V=S%E,ie=V%C.boundary,Me=V+ie;S+=ie,Me!==0&&E-Me<C.storage&&(S+=E-Me),z===0&&(G=S),S+=C.storage}const q=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new q((S-G)/Float32Array.BYTES_PER_ELEMENT),I.__offset=G}}const w=S%E;return w>0&&(S+=E-w),m.__size=S,m.__cache={},this}function _(m,y){const S={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(S.boundary=4,S.storage=4):m.isVector2?(S.boundary=8,S.storage=8):m.isVector3||m.isColor?(S.boundary=16,S.storage=12):m.isVector4?(S.boundary=16,S.storage=16):m.isMatrix3?(S.boundary=16,S.storage=48):m.isMatrix4?(S.boundary=16,S.storage=64):m.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(S.boundary=16,S.storage=m.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function x(m){const y=m.target;y.removeEventListener("dispose",x),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);r={},s={}}return{bind:a,update:l,dispose:d}}const IT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function FT(){return ui===null&&(ui=new P1(IT,16,16,Zr,Ei),ui.name="DFG_LUT",ui.minFilter=_n,ui.magFilter=_n,ui.wrapS=Fi,ui.wrapT=Fi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class UT{constructor(e={}){const{canvas:n=t1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,x=new Set([_h,vh,xh]),d=new Set([Rn,Mi,Za,Xs,mh,gh]),m=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let E=null,w=null;const v=[],M=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,I=null,F=null,N=null,G=null;this._outputColorSpace=zn;let q=0,z=0,H=null,k=-1,C=null;const V=new yt,ie=new yt;let Me=null;const $=new Je(0);let ne=0,oe=n.width,ve=n.height,re=1,Pe=null,ot=null;const Te=new yt(0,0,oe,ve),Be=new yt(0,0,oe,ve);let Ve=!1;const ke=new Qa,jt=new Eh;let Lt=!1,gn=!1;const xt=new Et,oi=new j,Bt=new yt,In={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fn=!1;function Un(){return H===null?re:1}let B=i;function On(T,O){return n.getContext(T,O)}let pt,mt,xe,Nt,De,Fe,P,b,X,se,te,ue,me,J,Q,fe,U,ee,Z,he,ce,de,Ce;try{const T={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fh}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",_e,!1),B===null){const O="webgl2";if(B=On(O,T),B===null)throw On(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(T){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),nt("WebGLRenderer: "+T.message),T}function He(){pt=new Bb(B),pt.init(),ce=new AT(B,pt),mt=new Rb(B,pt,e,ce),xe=new wT(B,pt),mt.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),F=B.createFramebuffer(),N=B.createFramebuffer(),G=B.createFramebuffer(),Nt=new Gb(B),De=new uT,Fe=new bT(B,pt,xe,De,mt,ce,Nt),P=new kb(R),b=new W1(B),de=new Ab(B,b),X=new zb(B,b,Nt,de),se=new Wb(B,X,b,de,Nt),ee=new Vb(B,mt,Fe),Q=new Cb(De),te=new cT(R,P,pt,mt,de,Q),ue=new NT(R,De),me=new fT,J=new vT(pt),U=new bb(R,P,xe,se,g,o),fe=new ET(R,se,mt),Ce=new DT(B,Nt,mt,xe),Z=new Tb(B,pt,Nt),he=new Hb(B,pt,Nt),Nt.programs=te.programs,R.capabilities=mt,R.extensions=pt,R.properties=De,R.renderLists=me,R.shadowMap=fe,R.state=xe,R.info=Nt}_!==Rn&&(L=new jb(_,n.width,n.height,l,r,s));const le=new PT(R,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(oe,ve,!1))},this.getSize=function(T){return T.set(oe,ve)},this.setSize=function(T,O,K=!0){if(le.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,ve=O,n.width=Math.floor(T*re),n.height=Math.floor(O*re),K===!0&&(n.style.width=T+"px",n.style.height=O+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(oe*re,ve*re).floor()},this.setDrawingBufferSize=function(T,O,K){oe=T,ve=O,re=K,n.width=Math.floor(T*K),n.height=Math.floor(O*K),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(_===Rn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(Te)},this.setViewport=function(T,O,K,W){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,O,K,W),xe.viewport(V.copy(Te).multiplyScalar(Un()).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,O,K,W){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,O,K,W),xe.scissor(ie.copy(Be).multiplyScalar(Un()).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(T){xe.setScissorTest(Ve=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){ot=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,K=!0){let W=0;if(T){let Y=!1;if(H!==null){const ge=H.texture.format;Y=x.has(ge)}if(Y){const ge=H.texture.type,we=d.has(ge),pe=U.getClearColor(),ye=U.getClearAlpha(),Re=pe.r,Oe=pe.g,Ye=pe.b;we?(m[0]=Re,m[1]=Oe,m[2]=Ye,m[3]=ye,B.clearBufferuiv(B.COLOR,0,m)):(y[0]=Re,y[1]=Oe,y[2]=Ye,y[3]=ye,B.clearBufferiv(B.COLOR,0,y))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),U.dispose(),me.dispose(),J.dispose(),Fe.dispose(),De.dispose(),P.dispose(),se.dispose(),X.dispose(),de.dispose(),Ce.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",Dh),le.removeEventListener("sessionend",Ih),Rr.stop()};function Le(T){T.preventDefault(),hm("WebGLRenderer: Context Lost."),D=!0}function ze(){hm("WebGLRenderer: Context Restored."),D=!1;const T=Nt.autoReset,O=fe.enabled,K=fe.autoUpdate,W=fe.needsUpdate,Y=fe.type;He(),Nt.autoReset=T,fe.enabled=O,fe.autoUpdate=K,fe.needsUpdate=W,fe.type=Y}function _e(T){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const O=T.target;O.removeEventListener("dispose",rt),zt(O)}function zt(T){Xi(T),De.remove(T)}function Xi(T){const O=De.get(T).programs;O!==void 0&&(O.forEach(function(K){te.releaseProgram(K)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,K,W,Y,ge){O===null&&(O=In);const we=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,pe=Dv(T,O,K,W,Y);xe.setMaterial(W,we);let ye=K.index,Re=1;if(W.wireframe===!0){if(ye=X.getWireframeAttribute(K),ye===void 0)return;Re=2}const Oe=K.drawRange,Ye=K.attributes.position;let be=Oe.start*Re,qe=(Oe.start+Oe.count)*Re;ge!==null&&(be=Math.max(be,ge.start*Re),qe=Math.min(qe,(ge.start+ge.count)*Re)),ye!==null?(be=Math.max(be,0),qe=Math.min(qe,ye.count)):Ye!=null&&(be=Math.max(be,0),qe=Math.min(qe,Ye.count));const Rt=qe-be;if(Rt<0||Rt===1/0)return;de.setup(Y,W,pe,K,ye);let ut,lt=Z;if(ye!==null&&(ut=b.get(ye),lt=he,lt.setIndex(ut)),Y.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Un()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(Y.isLine){let en=W.linewidth;en===void 0&&(en=1),xe.setLineWidth(en*Un()),Y.isLineSegments?lt.setMode(B.LINES):Y.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else Y.isPoints?lt.setMode(B.POINTS):Y.isSprite&&lt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const en=Y._multiDrawStarts,Ae=Y._multiDrawCounts,cn=Y._multiDrawCount,tt=ye?b.get(ye).bytesPerElement:1,Cr=De.get(W).currentProgram.getUniforms();for(let tn=0;tn<cn;tn++)Cr.setValue(B,"_gl_DrawID",tn),lt.render(en[tn]/tt,Ae[tn])}else if(Y.isInstancedMesh)lt.renderInstances(be,Rt,Y.count);else if(K.isInstancedBufferGeometry){const en=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,en);lt.renderInstances(be,Rt,Ae)}else lt.render(be,Rt)};function Nh(T,O,K,W){I!==null&&T.isNodeMaterial&&I.setObject(W,T),Lt===!0&&Q.setState(T,K,!1),T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Qs(T,O,W),T.side=Kr,T.needsUpdate=!0,Qs(T,O,W),T.side=gi):Qs(T,O,W)}this.compile=function(T,O,K=null){K===null&&(K=T),I!==null&&I.renderStart(T,O,K),w=J.get(K),w.init(O),M.push(w),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),T!==K&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),gn=this.localClippingEnabled,Lt=Q.init(this.clippingPlanes,gn),Lt===!0&&Q.setGlobalState(this.clippingPlanes,O),I!==null&&fe.render(w.state.shadowsArray,K,O);const W=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const pe=ge[we];Nh(pe,K,O,Y),W.add(pe)}else Nh(ge,K,O,Y),W.add(ge)}),w=M.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(T,O,K=null){const W=this.compile(T,O,K);return new Promise(Y=>{function ge(){if(W.forEach(function(we){const ye=De.get(we).currentProgram;(ye===void 0||ye.isReady())&&W.delete(we)}),W.size===0){Y(T);return}setTimeout(ge,10)}pt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let wc=null;function Lv(T){wc&&wc(T)}function Dh(){Rr.stop()}function Ih(){Rr.start()}const Rr=new Sv;Rr.setAnimationLoop(Lv),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(T){wc=T,le.setAnimationLoop(T),T===null?Rr.stop():Rr.start()},le.addEventListener("sessionstart",Dh),le.addEventListener("sessionend",Ih),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(T,O);const K=le.enabled===!0&&le.isPresenting===!0,W=L!==null&&(H===null||K)&&L.begin(R,H);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,H),w=J.get(T,M.length),w.init(O),w.state.textureUnits=Fe.getTextureUnits(),M.push(w),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?jt.setFromArrayCamera(O):ke.setFromProjectionMatrix(xt,ii,O.reversedDepth),gn=this.localClippingEnabled,Lt=Q.init(this.clippingPlanes,gn),E=me.get(T,v.length),E.init(),v.push(E),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&bc(we,O,-1/0,R.sortObjects)}bc(T,O,0,R.sortObjects),E.finish(),I!==null&&I.updateLights(w.state.lightsArray),R.sortObjects===!0&&E.sort(Pe,ot),Fn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Fn&&U.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),Lt===!0&&Q.beginShadows();const Y=w.state.shadowsArray;if(fe.render(Y,T,O),Lt===!0&&Q.endShadows(),(W&&L.hasRenderPass())===!1){const we=E.opaque,pe=E.transmissive;if(w.setupLights(),O.isArrayCamera){const ye=O.cameras;if(pe.length>0)for(let Re=0,Oe=ye.length;Re<Oe;Re++){const Ye=ye[Re];Uh(we,pe,T,Ye)}Fn&&U.render(T);for(let Re=0,Oe=ye.length;Re<Oe;Re++){const Ye=ye[Re];Fh(E,T,Ye,Ye.viewport)}}else pe.length>0&&Uh(we,pe,T,O),Fn&&U.render(T),Fh(E,T,O)}H!==null&&z===0&&(Fe.updateMultisampleRenderTarget(H),Fe.updateRenderTargetMipmap(H)),W&&L.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),de.resetDefaultState(),k=-1,C=null,M.pop(),M.length>0?(w=M[M.length-1],Fe.setTextureUnits(w.state.textureUnits),Lt===!0&&Q.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,I!==null&&I.renderEnd()};function bc(T,O,K,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){const we=O.isArrayCamera?jt:ke;if(!T.frustumCulled||T.intersectsFrustum(we)){W&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);const pe=se.update(T),ye=T.material;ye.visible&&E.push(T,pe,ye,K,Bt.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){const we=O.isArrayCamera?jt:ke;if(!T.frustumCulled||T.intersectsFrustum(we)){const pe=se.update(T),ye=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Bt.copy(pe.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(ye)){const Re=pe.groups;for(let Oe=0,Ye=Re.length;Oe<Ye;Oe++){const be=Re[Oe],qe=ye[be.materialIndex];qe&&qe.visible&&E.push(T,pe,qe,K,Bt.z,be,O)}}else ye.visible&&E.push(T,pe,ye,K,Bt.z,null,O)}}}const ge=T.children;for(let we=0,pe=ge.length;we<pe;we++)bc(ge[we],O,K,W)}function Fh(T,O,K,W){const{opaque:Y,transmissive:ge,transparent:we}=T;w.setupLightsView(K),Lt===!0&&Q.setGlobalState(R.clippingPlanes,K),W&&xe.viewport(V.copy(W)),Y.length>0&&co(Y,O,K),ge.length>0&&co(ge,O,K),we.length>0&&co(we,O,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Uh(T,O,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const be=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new yi(1,1,{generateMipmaps:!0,type:be?Ei:Rn,minFilter:ur,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ge=w.state.transmissionRenderTarget[W.id],we=W.viewport||V;ge.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),ye=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor($),ne=R.getClearAlpha(),ne<1&&R.setClearColor(16777215,.5),R.clear(),Fn&&U.render(K);const Oe=R.toneMapping;R.toneMapping=ki;const Ye=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),Lt===!0&&Q.setGlobalState(R.clippingPlanes,W),co(T,K,W),Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge),pt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let qe=0,Rt=O.length;qe<Rt;qe++){const ut=O[qe],{object:lt,geometry:en,material:Ae,group:cn}=ut;if(Ae.side===gi&&lt.layers.test(W.layers)){const tt=Ae.side;Ae.side=En,Ae.needsUpdate=!0,Oh(lt,K,W,en,Ae,cn),Ae.side=tt,Ae.needsUpdate=!0,be=!0}}be===!0&&(Fe.updateMultisampleRenderTarget(ge),Fe.updateRenderTargetMipmap(ge))}R.setRenderTarget(pe,ye,Re),R.setClearColor($,ne),Ye!==void 0&&(W.viewport=Ye),R.toneMapping=Oe}function co(T,O,K){const W=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,ge=T.length;Y<ge;Y++){const we=T[Y],{object:pe,geometry:ye,group:Re}=we;let Oe=we.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),pe.layers.test(K.layers)&&Oh(pe,O,K,ye,Oe,Re)}}function Oh(T,O,K,W,Y,ge){I!==null&&Y.isNodeMaterial&&I.setObject(T,Y),T.onBeforeRender(R,O,K,W,Y,ge),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,O,K,W,T,ge),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=En,Y.needsUpdate=!0,R.renderBufferDirect(K,O,W,Y,T,ge),Y.side=Kr,Y.needsUpdate=!0,R.renderBufferDirect(K,O,W,Y,T,ge),Y.side=gi):R.renderBufferDirect(K,O,W,Y,T,ge),T.onAfterRender(R,O,K,W,Y,ge)}function kh(T){let O=0;for(const K of T)K.texture!==null&&O++;return O}function Qs(T,O,K){O.isScene!==!0&&(O=In);const W=De.get(T),Y=w.state.lights,ge=w.state.shadowsArray,we=Y.state.version,pe=te.getParameters(T,Y.state,ge,O,K,w.state.lightProbeGridArray),ye=te.getProgramCacheKey(pe);let Re=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;const Oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=P.get(T.envMap||W.environment,Oe),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",rt),Re=new Map,W.programs=Re,W.programVariants=new Map);let Ye=Re.get(ye);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===we)return zh(T,pe),Ye}else pe.uniforms=te.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,K,pe),T.onBeforeCompile(pe,R),Ye=te.acquireProgram(pe,ye),Re.set(ye,Ye),W.uniforms=pe.uniforms;const be=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Q.uniform),zh(T,pe),W.needsLights=Fv(T),W.lightsStateVersion=we,W.needsLights&&(be.ambientLightColor.value=Y.state.ambient,be.lightProbe.value=Y.state.probe,be.sunLights.value=Y.state.sun,be.sunLightShadows.value=Y.state.sunShadow,be.directionalLights.value=Y.state.directional,be.directionalLightShadows.value=Y.state.directionalShadow,be.spotLights.value=Y.state.spot,be.spotLightShadows.value=Y.state.spotShadow,be.rectAreaLights.value=Y.state.rectArea,be.ltc_1.value=Y.state.rectAreaLTC1,be.ltc_2.value=Y.state.rectAreaLTC2,be.pointLights.value=Y.state.point,be.pointLightShadows.value=Y.state.pointShadow,be.hemisphereLights.value=Y.state.hemi,be.sunShadowMatrix.value=Y.state.sunShadowMatrix,be.sunShadowCascade.value=Y.state.sunShadowCascade,be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,be.spotLightMatrix.value=Y.state.spotLightMatrix,be.spotLightMap.value=Y.state.spotLightMap,be.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=kh(w.state.lightProbeGridArray),W.currentProgram=Ye,W.uniformsList=null,Ye}function Nv(T,O,K,W,Y){const ge=De.get(T),we=ge.currentProgram.id+","+W+","+Y;let pe=ge.programVariants.get(we);return pe===void 0?(pe=Qs(T,O,K),ge.programVariants.set(we,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=W,ge.toneMapping=Y),pe}function Bh(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Sl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function zh(T,O){const K=De.get(T);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Dv(T,O,K,W,Y){O.isScene!==!0&&(O=In),Fe.resetTextureUnits();const ge=O.fog,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,pe=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ze.workingColorSpace,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Re=P.get(W.envMap||we,ye),Oe=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!K.morphAttributes.position,qe=!!K.morphAttributes.normal,Rt=!!K.morphAttributes.color;let ut=ki;W.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ut=R.toneMapping);const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,en=lt!==void 0?lt.length:0,Ae=De.get(W),cn=w.state.lights;if(Lt===!0&&(gn===!0||T!==C)){const vt=T===C&&W.id===k;Q.setState(W,T,vt)}let tt=!1,Cr=!1;W.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==cn.state.version||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Re||W.fog===!0&&Ae.fog!==ge||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Q.numPlanes||Ae.numIntersection!==Q.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==Ye||Ae.morphTargets!==be||Ae.morphNormals!==qe||Ae.morphColors!==Rt||Ae.morphTargetsCount!==en||Ae.numLightProbeGrids!==kh(w.state.lightProbeGridArray)?tt=!0:(Ae.outputColorSpace!==pe||Ae.toneMapping!==ut)&&(Cr=!0):(tt=!0,Ae.__version=W.version);let tn=Ae.currentProgram;(tt===!0||Cr===!0)&&(tn=Cr===!0?Nv(W,O,Y,pe,ut):Qs(W,O,Y),I&&W.isNodeMaterial&&I.onUpdateProgram(W,tn,Ae));let uo=!1,ji=!1,Pr=!1;const Qe=tn.getUniforms(),Yt=Ae.uniforms;if(xe.useProgram(tn.program)&&(uo=!0,ji=!0,Pr=!0),W.id!==k&&(k=W.id,ji=!0),uo||C!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Qe.setValue(B,"projectionMatrix",T.projectionMatrix),Qe.setValue(B,"viewMatrix",T.matrixWorldInverse);const Ht=Qe.map.cameraPosition;Ht!==void 0&&Ht.setValue(B,oi.setFromMatrixPosition(T.matrixWorld)),mt.logarithmicDepthBuffer&&Qe.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Qe.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,ji=!0,Pr=!0)}if(Ae.needsLights&&(cn.state.sunShadowMap.length>0&&Qe.setValue(B,"sunShadowMap",cn.state.sunShadowMap,Fe),cn.state.directionalShadowMap.length>0&&Qe.setValue(B,"directionalShadowMap",cn.state.directionalShadowMap,Fe),cn.state.spotShadowMap.length>0&&Qe.setValue(B,"spotShadowMap",cn.state.spotShadowMap,Fe),cn.state.pointShadowMap.length>0&&Qe.setValue(B,"pointShadowMap",cn.state.pointShadowMap,Fe)),Y.isSkinnedMesh){Qe.setOptional(B,Y,"bindMatrix"),Qe.setOptional(B,Y,"bindMatrixInverse");const vt=Y.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Qe.setValue(B,"boneTexture",vt.boneTexture,Fe))}Y.isBatchedMesh&&(Qe.setOptional(B,Y,"batchingTexture"),Qe.setValue(B,"batchingTexture",Y._matricesTexture,Fe),Qe.setOptional(B,Y,"batchingIdTexture"),Qe.setValue(B,"batchingIdTexture",Y._indirectTexture,Fe),Qe.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Qe.setValue(B,"batchingColorTexture",Y._colorsTexture,Fe));const Yn=K.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&ee.update(Y,K,tn),(ji||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,Qe.setValue(B,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Yt.envMapIntensity.value=O.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=FT()),ji){if(Qe.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&Iv(Yt,Pr),ge&&W.fog===!0&&ue.refreshFogUniforms(Yt,ge),ue.refreshMaterialUniforms(Yt,W,re,ve,w.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const vt=S;let Ht=0;for(const wi of w.state.lightProbeGridArray)wi.texture!==null&&(vt.textures[Ht]=wi.texture,vt.min[Ht]=wi.boundingBox.min,vt.max[Ht]=wi.boundingBox.max,vt.resolution[Ht]=wi.resolution,Ht++);for(const wi in vt)vt[wi].length=Ht;Yt.probesSH.value=vt.textures,Yt.probesMin.value=vt.min,Yt.probesMax.value=vt.max,Yt.probesResolution.value=vt.resolution}Sl.upload(B,Bh(Ae),Yt,Fe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Sl.upload(B,Bh(Ae),Yt,Fe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Qe.setValue(B,"center",Y.center),Qe.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Qe.setValue(B,"normalMatrix",Y.normalMatrix),Qe.setValue(B,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let Ht=0,wi=vt.length;Ht<wi;Ht++){const Gh=vt[Ht];Ce.update(Gh,tn),Ce.bind(Gh,tn)}}return tn}function Iv(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Fv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(T,O,K){const W=De.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),De.get(T.texture).__webglTexture=O,De.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const K=De.get(T);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,K=0){H=T,q=O,z=K;let W=null,Y=!1,ge=!1;if(T){const pe=De.get(T);if(pe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(B.FRAMEBUFFER,pe.__webglFramebuffer),V.copy(T.viewport),ie.copy(T.scissor),Me=T.scissorTest,xe.viewport(V),xe.scissor(ie),xe.setScissorTest(Me),k=-1;return}else if(pe.__webglFramebuffer===void 0)Fe.setupRenderTarget(T);else if(pe.__hasExternalTextures)Fe.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Oe=T.depthTexture;if(pe.__boundDepthTexture!==Oe){if(Oe!==null&&De.has(Oe)&&(T.width!==Oe.image.width||T.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(T)}}const ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);const Re=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?W=Re[O][K]:W=Re[O],Y=!0):T.samples>0&&Fe.useMultisampledRTT(T)===!1?W=De.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[K]:W=Re,V.copy(T.viewport),ie.copy(T.scissor),Me=T.scissorTest}else V.copy(Te).multiplyScalar(re).floor(),ie.copy(Be).multiplyScalar(re).floor(),Me=Ve;if(K!==0&&(W=F),xe.bindFramebuffer(B.FRAMEBUFFER,W)&&xe.drawBuffers(T,W),xe.viewport(V),xe.scissor(ie),xe.setScissorTest(Me),Y){const pe=De.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,K)}else if(ge){const pe=O;for(let ye=0;ye<T.textures.length;ye++){const Re=De.get(T.textures[ye]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ye,Re.__webglTexture,K,pe)}}else if(T!==null&&K!==0){const pe=De.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pe.__webglTexture,K)}k=-1};function Hh(T){const O=De.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=mt.textureFormatReadable(T.format),O.__typeReadable=mt.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,K,W,Y,ge,we,pe=0){if(!(T&&T.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye){xe.bindFramebuffer(B.FRAMEBUFFER,ye);try{const Re=T.textures[pe],Oe=Re.format,Ye=Re.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);const be=Hh(Re);if(be.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&K>=0&&K<=T.height-Y&&B.readPixels(O,K,W,Y,ce.convert(Oe),ce.convert(Ye),ge)}finally{const Re=H!==null?De.get(H).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,O,K,W,Y,ge,we,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye)if(O>=0&&O<=T.width-W&&K>=0&&K<=T.height-Y){xe.bindFramebuffer(B.FRAMEBUFFER,ye);const Re=T.textures[pe],Oe=Re.format,Ye=Re.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);const be=Hh(Re);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(O,K,W,Y,ce.convert(Oe),ce.convert(Ye),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Rt=H!==null?De.get(H).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,Rt);const ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await n1(B,ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(qe),B.deleteSync(ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,K=0){const W=Math.pow(2,-K),Y=Math.floor(T.image.width*W),ge=Math.floor(T.image.height*W),we=O!==null?O.x:0,pe=O!==null?O.y:0;Fe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,we,pe,Y,ge),xe.unbindTexture()},this.copyTextureToTexture=function(T,O,K=null,W=null,Y=0,ge=0){let we,pe,ye,Re,Oe,Ye,be,qe,Rt;const ut=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(K!==null)we=K.max.x-K.min.x,pe=K.max.y-K.min.y,ye=K.isBox3?K.max.z-K.min.z:1,Re=K.min.x,Oe=K.min.y,Ye=K.isBox3?K.min.z:0;else{const Qe=Math.pow(2,-Y);we=Math.floor(ut.width*Qe),pe=Math.floor(ut.height*Qe),T.isDataArrayTexture?ye=ut.depth:T.isData3DTexture?ye=Math.floor(ut.depth*Qe):ye=1,Re=0,Oe=0,Ye=0}W!==null?(be=W.x,qe=W.y,Rt=W.z):(be=0,qe=0,Rt=0);const lt=ce.convert(O.format),en=ce.convert(O.type);let Ae;O.isData3DTexture?(Fe.setTexture3D(O,0),Ae=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Fe.setTexture2DArray(O,0),Ae=B.TEXTURE_2D_ARRAY):(Fe.setTexture2D(O,0),Ae=B.TEXTURE_2D),xe.activeTexture(B.TEXTURE0),xe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),xe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),xe.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const cn=xe.getParameter(B.UNPACK_ROW_LENGTH),tt=xe.getParameter(B.UNPACK_IMAGE_HEIGHT),Cr=xe.getParameter(B.UNPACK_SKIP_PIXELS),tn=xe.getParameter(B.UNPACK_SKIP_ROWS),uo=xe.getParameter(B.UNPACK_SKIP_IMAGES);xe.pixelStorei(B.UNPACK_ROW_LENGTH,ut.width),xe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut.height),xe.pixelStorei(B.UNPACK_SKIP_PIXELS,Re),xe.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),xe.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const ji=T.isDataArrayTexture||T.isData3DTexture,Pr=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Qe=De.get(T),Yt=De.get(O),Yn=De.get(Qe.__renderTarget),vt=De.get(Yt.__renderTarget);xe.bindFramebuffer(B.READ_FRAMEBUFFER,Yn.__webglFramebuffer),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ht=0;Ht<ye;Ht++)ji&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.get(T).__webglTexture,Y,Ye+Ht),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.get(O).__webglTexture,ge,Rt+Ht)),B.blitFramebuffer(Re,Oe,Re+we,Oe+pe,be,qe,be+we,qe+pe,B.DEPTH_BUFFER_BIT,B.NEAREST);xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||De.has(T)){const Qe=De.get(T),Yt=De.get(O);xe.bindFramebuffer(B.READ_FRAMEBUFFER,N),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let Yn=0;Yn<ye;Yn++)ji?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qe.__webglTexture,Y,Ye+Yn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qe.__webglTexture,Y),Pr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.__webglTexture,ge,Rt+Yn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Yt.__webglTexture,ge),Y!==0?B.blitFramebuffer(Re,Oe,Re+we,Oe+pe,be,qe,be+we,qe+pe,B.COLOR_BUFFER_BIT,B.NEAREST):Pr?B.copyTexSubImage3D(Ae,ge,be,qe,Rt+Yn,Re,Oe,we,pe):B.copyTexSubImage2D(Ae,ge,be,qe,Re,Oe,we,pe);xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pr?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ae,ge,be,qe,Rt,we,pe,ye,lt,en,ut.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Ae,ge,be,qe,Rt,we,pe,ye,lt,ut.data):B.texSubImage3D(Ae,ge,be,qe,Rt,we,pe,ye,lt,en,ut):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ge,be,qe,we,pe,lt,en,ut.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ge,be,qe,ut.width,ut.height,lt,ut.data):B.texSubImage2D(B.TEXTURE_2D,ge,be,qe,we,pe,lt,en,ut);xe.pixelStorei(B.UNPACK_ROW_LENGTH,cn),xe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tt),xe.pixelStorei(B.UNPACK_SKIP_PIXELS,Cr),xe.pixelStorei(B.UNPACK_SKIP_ROWS,tn),xe.pixelStorei(B.UNPACK_SKIP_IMAGES,uo),ge===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(Ae),xe.unbindTexture()},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&Fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Fe.setTextureCube(T,0):T.isData3DTexture?Fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Fe.setTexture2DArray(T,0):Fe.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){q=0,z=0,H=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const di=200,Dt=Math.PI/180;function qt(t,e,n){return t+(e-t)*n}function OT(t,e,n){return{pelvisOffsetY:qt(t.pelvisOffsetY,e.pelvisOffsetY,n),torsoPitch:qt(t.torsoPitch,e.torsoPitch,n),torsoTwist:qt(t.torsoTwist,e.torsoTwist,n),torsoRoll:qt(t.torsoRoll,e.torsoRoll,n),headPitch:qt(t.headPitch,e.headPitch,n),leftArmLift:qt(t.leftArmLift,e.leftArmLift,n),rightArmLift:qt(t.rightArmLift,e.rightArmLift,n),leftArmOut:qt(t.leftArmOut,e.leftArmOut,n),rightArmOut:qt(t.rightArmOut,e.rightArmOut,n),leftElbowFlex:qt(t.leftElbowFlex,e.leftElbowFlex,n),rightElbowFlex:qt(t.rightElbowFlex,e.rightElbowFlex,n),leftHipFlex:qt(t.leftHipFlex,e.leftHipFlex,n),rightHipFlex:qt(t.rightHipFlex,e.rightHipFlex,n),leftHipOut:qt(t.leftHipOut,e.leftHipOut,n),rightHipOut:qt(t.rightHipOut,e.rightHipOut,n),leftKneeFlex:qt(t.leftKneeFlex,e.leftKneeFlex,n),rightKneeFlex:qt(t.rightKneeFlex,e.rightKneeFlex,n)}}function Qi(t,e,n,i=20){const r=n/2,s=[],a=6;for(let o=0;o<=a;o++){const c=o/a*(Math.PI/2);s.push(new Ne(Math.sin(c)*e,-r-Math.cos(c)*e))}s.push(new Ne((e+t)*.52,0));for(let o=0;o<=a;o++){const c=o/a*(Math.PI/2);s.push(new Ne(Math.cos(c)*t,r+Math.sin(c)*t))}const l=new Sc(s,i);return l.computeVertexNormals(),l}class kT{constructor(e,n=320){this.canvas=e,this.outCanvas=document.createElement("canvas"),this.outCanvas.width=di,this.outCanvas.height=di;const i=this.outCanvas.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("No se pudo inicializar el lienzo 2D para exportar GIF.");this.outCtx=i,this.renderer=new UT({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,alpha:!1}),this.renderer.setSize(n,n,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bx,this.renderer.toneMapping=hh,this.renderer.toneMappingExposure=1.12,this.scene=new y1,this.scene.background=new Je(1054759),this.camera=new ti(34,1,.1,100);const r=new B1(14742270,1976635,1.05);this.scene.add(r);const s=new Lu(16774635,1.85);s.position.set(2.4,4.2,3.4),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.camera.near=.5,s.shadow.camera.far=14,s.shadow.camera.left=-2.4,s.shadow.camera.right=2.4,s.shadow.camera.top=3,s.shadow.camera.bottom=-1.5,s.shadow.bias=-.001,this.scene.add(s);const a=new Lu(9684477,.85);a.position.set(-3,2.2,1.8),this.scene.add(a);const l=new Lu(16708551,.95);l.position.set(0,2.8,-3.2),this.scene.add(l);const o=new Xe(new wh(1.9,48),new Bn({color:1515571,roughness:.92,metalness:.04}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const c=new Xe(new bh(1.3,1.34,48),new fv({color:3359061,side:gi}));c.rotation.x=-Math.PI/2,c.position.y=.002,this.scene.add(c);const h=new Bn({color:9741240,roughness:.46,metalness:.12}),f=new Bn({color:15680580,roughness:.42,metalness:.04}),u=new Bn({color:12131356,roughness:.5,metalness:.05}),p=new Bn({color:14870768,roughness:.48,metalness:.06}),g=new Bn({color:988970,roughness:.75,metalness:.05}),_=new Bn({color:13358561,roughness:.25,metalness:.85}),x=new Bn({color:1976635,roughness:.55,metalness:.25}),d=new Bn({color:16347926,roughness:.45,metalness:.1}),m=new Bn({color:1976635,roughness:.85,metalness:.05}),y=new Bn({color:14427686,roughness:.35,metalness:.08}),S=()=>{const $=new It,ne=new Xe(new ir(.015,.015,.2,12),_);ne.rotation.z=Math.PI/2,$.add(ne);for(const oe of[-.075,.075]){const ve=new Xe(new ir(.055,.055,.036,16),x);ve.rotation.z=Math.PI/2,ve.position.x=oe,ve.castShadow=!0,$.add(ve)}return $},E=()=>{const ne=new It,oe=new Xe(new ir(.016,.016,1.2,14),_);oe.rotation.z=Math.PI/2,oe.castShadow=!0,ne.add(oe);for(const ve of[-1,1]){const re=new Xe(new ir(.145,.145,.042,22),x);re.rotation.z=Math.PI/2,re.position.x=ve*(1.2*.42),re.castShadow=!0,ne.add(re);const Pe=new Xe(new ir(.148,.148,.012,22),d);Pe.rotation.z=Math.PI/2,Pe.position.x=ve*(1.2*.42),ne.add(Pe)}return ne},w=()=>{const $=new It,ne=new Xe(new Li(.088,18,14),x);ne.scale.set(1,.92,1),ne.position.y=-.09,ne.castShadow=!0,$.add(ne);const oe=new Xe(new Ah(.052,.014,10,20,Math.PI),_);return oe.position.y=-.01,$.add(oe),$},v=new It,M=new It;M.position.set(0,.92,0),v.add(M);const L=new Xe(Qi(.145,.148,.14,24),f);L.scale.set(1.16,1,.78),L.position.y=.01,L.castShadow=!0,M.add(L);const R=new Xe(new ir(.144,.148,.042,24),u);R.scale.set(1.16,1,.78),R.position.y=.095,R.castShadow=!0,M.add(R);const D=new It;D.position.set(0,.1,0),M.add(D);const I=new Xe(Qi(.145,.132,.16,24),h);I.scale.set(1.12,1,.72),I.position.y=.08,I.castShadow=!0,D.add(I);const F=new It;F.position.set(0,.14,0),D.add(F);const N=[new Ne(.001,0),new Ne(.132,.01),new Ne(.15,.08),new Ne(.172,.175),new Ne(.165,.22),new Ne(.125,.252),new Ne(.058,.282),new Ne(.001,.285)],G=new Sc(N,26);G.computeVertexNormals();const q=new Xe(G,h);q.scale.set(1.2,1,.74),q.castShadow=!0,F.add(q);const z=new It;z.position.set(0,.275,.008),F.add(z);const H=new Xe(Qi(.047,.055,.062,18),h);H.position.y=.038,H.castShadow=!0,z.add(H);const k=new It;k.position.set(0,.078,.008),z.add(k);const C=new Xe(new Li(.1,24,20),h);C.scale.set(.86,1.08,.96),C.position.y=.1,C.castShadow=!0,k.add(C);const V=new Xe(new Li(.066,18,14),h);V.scale.set(.82,.85,.92),V.position.set(0,.046,.022),V.castShadow=!0,k.add(V);const ie=$=>{const ne=new It;ne.position.set($*.205,.215,0),F.add(ne);const oe=new Xe(new Li(.058,16,14),h);oe.scale.set(.95,1.08,.92),oe.castShadow=!0,ne.add(oe);const ve=new Xe(Qi(.052,.041,.22,18),h);ve.position.y=-.135,ve.castShadow=!0,ne.add(ve);const re=new It;re.position.set(0,-.275,0),ne.add(re);const Pe=new Xe(new Li(.041,14,12),h);Pe.castShadow=!0,re.add(Pe);const ot=new Xe(Qi(.042,.029,.2,18),h);ot.position.y=-.12,ot.castShadow=!0,re.add(ot);const Te=new It;Te.position.set(0,-.245,0),re.add(Te);const Be=new Xe(new Zl(.026,.055,6,12),h);Be.scale.set(.68,1,1.15),Be.position.y=-.042,Be.castShadow=!0,Te.add(Be);const Ve=new Xe(new Li(.054,16,14),y);Ve.scale.set(.95,1.18,1.02),Ve.position.y=-.045,Ve.visible=!1,Ve.castShadow=!0,Te.add(Ve);const ke=S();return ke.position.set(0,-.055,.015),ke.rotation.y=Math.PI/2,ke.visible=!1,Te.add(ke),{shoulder:ne,elbow:re,wrist:Te,hand:Be,glove:Ve,dumbbell:ke}},Me=$=>{const ne=new It;ne.position.set($*.102,-.03,0),M.add(ne);const oe=new Xe(Qi(.088,.084,.14,20),f);oe.position.y=-.08,oe.castShadow=!0,ne.add(oe);const ve=new Xe(Qi(.074,.054,.23,20),h);ve.position.y=-.275,ve.castShadow=!0,ne.add(ve);const re=new It;re.position.set(0,-.43,0),ne.add(re);const Pe=new Xe(new Li(.054,16,14),h);Pe.castShadow=!0,re.add(Pe);const ot=new Xe(Qi(.058,.036,.31,20),h);ot.position.y=-.195,ot.castShadow=!0,re.add(ot);const Te=new It;Te.position.set(0,-.39,0),re.add(Te);const Be=new Xe(new Zl(.04,.105,8,12),p);Be.rotation.x=Math.PI/2,Be.position.set(0,-.025,.042),Be.scale.set(1.02,1,.85),Be.castShadow=!0,Te.add(Be);const Ve=new Xe(new Sr(.084,.02,.185),g);return Ve.position.set(0,-.048,.042),Ve.castShadow=!0,Te.add(Ve),{hip:ne,knee:re,ankle:Te}};this.athlete={root:v,pelvis:M,spine:D,chest:F,neck:z,head:k,leftArm:ie(1),rightArm:ie(-1),leftLeg:Me(1),rightLeg:Me(-1)},this.scene.add(this.athlete.root),this.propMat=new Xe(new Sr(.85,.024,1.9),m),this.propMat.position.set(0,.012,0),this.propMat.receiveShadow=!0,this.scene.add(this.propMat),this.propBarbell=E(),this.scene.add(this.propBarbell),this.propKettlebell=w(),this.scene.add(this.propKettlebell),this.propBox=new Xe(new Sr(.68,.38,.56),new Bn({color:3359061,roughness:.72,metalness:.1})),this.propBox.position.set(0,.19,-.18),this.propBox.castShadow=!0,this.propBox.receiveShadow=!0,this.scene.add(this.propBox)}getPostureBase(e){switch(e){case"supine":return{y:.12,z:-.18,pitchRad:-1.52,rootYawRad:Math.PI/2};case"prone":return{y:.11,z:0,pitchRad:1.54,rootYawRad:Math.PI/2};case"plank":return{y:.56,z:-.1,pitchRad:1.38,rootYawRad:Math.PI/2};case"quadruped":return{y:.48,z:-.16,pitchRad:1.5,rootYawRad:Math.PI/2};case"seated":return{y:.14,z:-.22,pitchRad:0,rootYawRad:.35};case"standing":default:return{y:.92,z:0,pitchRad:0,rootYawRad:0}}}applyCamera(e,n){const i=n==="supine"||n==="prone"||n==="plank"||n==="quadruped";switch(e){case"front":this.camera.position.set(0,i?.95:1.28,i?2.65:3.3),this.camera.lookAt(0,i?.35:.98,0);break;case"side":this.camera.position.set(i?.25:2.95,i?.85:1.2,i?2.65:.15),this.camera.lookAt(0,i?.34:.92,0);break;case"low_side":this.camera.position.set(1.95,.95,2.25),this.camera.lookAt(.02,i?.36:.85,0);break;case"overhead":this.camera.position.set(.35,2.85,1.45),this.camera.lookAt(0,i?.25:.8,0);break;case"three_quarter":default:this.camera.position.set(1.75,i?1.1:1.35,i?2.35:2.85),this.camera.lookAt(0,i?.36:.95,0);break}}applyProps(e,n){const i=this.athlete;this.propMat.visible=e==="mat"||n==="supine"||n==="prone"||n==="plank"||n==="quadruped",this.propMat.rotation.y=n==="standing"||n==="seated"?0:Math.PI/2,this.propBarbell.visible=e==="barbell",this.propKettlebell.visible=e==="kettlebell",this.propBox.visible=e==="box";for(const r of[i.leftArm,i.rightArm])r.hand.visible=e!=="gloves",r.glove.visible=e==="gloves",r.dumbbell.visible=e==="dumbbells"}applySpecAtProgress(e,n){const i=.5-.5*Math.cos(n*Math.PI*2),r=OT(e.poseA,e.poseB,i);this.applyPose(e,r)}applyStaticPose(e,n){this.applyPose(e,n==="A"?e.poseA:e.poseB)}applyPose(e,n){const i=this.athlete,r=this.getPostureBase(e.posture);i.root.position.set(0,0,0),i.root.rotation.set(0,r.rootYawRad,0),i.pelvis.position.set(0,r.y+n.pelvisOffsetY,r.z),i.pelvis.rotation.order="YXZ",i.pelvis.rotation.set(r.pitchRad,0,0),i.spine.rotation.order="YXZ",i.spine.rotation.set(n.torsoPitch*Dt*.55,n.torsoTwist*Dt*.55,n.torsoRoll*Dt*.55),i.chest.rotation.order="YXZ",i.chest.rotation.set(n.torsoPitch*Dt*.45,n.torsoTwist*Dt*.45,n.torsoRoll*Dt*.45),i.neck.rotation.set(0,0,0),i.head.rotation.set(n.headPitch*Dt,0,0),i.leftArm.shoulder.rotation.order="XZY",i.leftArm.shoulder.rotation.set(-n.leftArmLift*Dt,0,n.leftArmOut*Dt),i.leftArm.elbow.rotation.order="XYZ",i.leftArm.elbow.rotation.set(-n.leftElbowFlex*Dt,0,0),i.leftArm.wrist.rotation.set(0,0,0),i.rightArm.shoulder.rotation.order="XZY",i.rightArm.shoulder.rotation.set(-n.rightArmLift*Dt,0,-n.rightArmOut*Dt),i.rightArm.elbow.rotation.order="XYZ",i.rightArm.elbow.rotation.set(-n.rightElbowFlex*Dt,0,0),i.rightArm.wrist.rotation.set(0,0,0),i.leftLeg.hip.rotation.order="XZY",i.leftLeg.hip.rotation.set(-n.leftHipFlex*Dt,0,n.leftHipOut*Dt),i.leftLeg.knee.rotation.set(n.leftKneeFlex*Dt,0,0),i.leftLeg.ankle.rotation.set(0,0,0),i.rightLeg.hip.rotation.order="XZY",i.rightLeg.hip.rotation.set(-n.rightHipFlex*Dt,0,-n.rightHipOut*Dt),i.rightLeg.knee.rotation.set(n.rightKneeFlex*Dt,0,0),i.rightLeg.ankle.rotation.set(0,0,0),this.applyProps(e.prop,e.posture),this.applyCamera(e.camera,e.posture),i.root.updateMatrixWorld(!0);const s=new j,a=new j;i.leftArm.wrist.getWorldPosition(s),i.rightArm.wrist.getWorldPosition(a);const l=s.clone().add(a).multiplyScalar(.5);e.prop==="barbell"&&(this.propBarbell.position.copy(l),this.propBarbell.position.y-=.04,this.propBarbell.rotation.y=r.rootYawRad),e.prop==="kettlebell"&&(this.propKettlebell.position.copy(l),this.propKettlebell.position.y-=.03),this.renderer.render(this.scene,this.camera)}async exportGifDataUri(e){const i=Math.max(55,Math.min(140,e.frameDelayMs||80)),r=Ux();for(let u=0;u<18;u++){this.applySpecAtProgress(e,u/18),this.outCtx.clearRect(0,0,di,di),this.outCtx.drawImage(this.canvas,0,0,di,di);const g=this.outCtx.getImageData(0,0,di,di).data,_=Ix(g,76),x=Fx(g,_);r.writeFrame(x,di,di,{palette:_,delay:i})}r.finish();const s=r.bytes(),a=32768,l=[];for(let u=0;u<s.length;u+=a)l.push(String.fromCharCode(...s.subarray(u,u+a)));const c=`data:image/gif;base64,${btoa(l.join(""))}`,h=Math.max(1,Math.round(s.length/1024)),f=new Blob([new Uint8Array(s)],{type:"image/gif"});return{mediaData:c,sizeKb:h,blob:f}}dispose(){this.renderer.dispose()}}const BT=[{id:"standing",label:"De pie"},{id:"supine",label:"Boca arriba"},{id:"prone",label:"Boca abajo"},{id:"plank",label:"Plancha"},{id:"quadruped",label:"4 apoyos"},{id:"seated",label:"Sentado"}],zT=[{id:"none",label:"Sin equipo"},{id:"mat",label:"Colchoneta"},{id:"dumbbells",label:"Mancuernas"},{id:"barbell",label:"Barra"},{id:"kettlebell",label:"Kettlebell"},{id:"box",label:"Cajón"},{id:"gloves",label:"Guantes"}],HT=[{id:"three_quarter",label:"3/4"},{id:"front",label:"Frontal"},{id:"side",label:"Lateral"},{id:"low_side",label:"Suelo"},{id:"overhead",label:"Arriba"}],Vt=({label:t,value:e,min:n,max:i,step:r=1,unit:s="°",onChange:a})=>A.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[A.jsx("span",{className:"w-28 text-slate-300 font-medium truncate",children:t}),A.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:l=>a(Number(l.target.value)),className:"flex-1 accent-emerald-500 cursor-pointer h-1.5"}),A.jsxs("span",{className:"w-12 text-right font-mono text-emerald-300 font-bold",children:[r<1?e.toFixed(2):Math.round(e),s]})]}),GT=({initialExerciseName:t,onApplyGif:e})=>{const n=We.useRef(null),i=We.useRef(null),[r,s]=We.useState(t.trim()||""),[a,l]=We.useState(()=>t.trim()?iu(t).spec:_M("standing")),[o,c]=We.useState(()=>t.trim()?iu(t).matchedNotes:["Elige un ejercicio por texto o ajusta las poses"]),[h,f]=We.useState("play"),[u,p]=We.useState("B"),[g,_]=We.useState(!1),[x,d]=We.useState(!1),[m,y]=We.useState("arms"),[S,E]=We.useState(!1),[w,v]=We.useState(null),[M,L]=We.useState(null),R=We.useRef(a);R.current=a;const D=We.useRef(h);D.current=h,We.useEffect(()=>{const C=n.current;if(!C)return;let V=0,ie=performance.now();try{const Me=new kT(C,320);i.current=Me;const $=ne=>{const oe=R.current,ve=D.current;if(ve==="A"||ve==="B")Me.applyStaticPose(oe,ve);else{const re=Math.max(900,(oe.frameDelayMs||80)*18),Pe=(ne-ie)%re/re;Me.applySpecAtProgress(oe,Pe)}V=requestAnimationFrame($)};return V=requestAnimationFrame($),()=>{cancelAnimationFrame(V),Me.dispose(),i.current=null}}catch(Me){L(Me instanceof Error?Me.message:"No se pudo iniciar WebGL 3D en este navegador.")}},[]);const I=C=>{const V=(C??r).trim();if(!V)return;C!==void 0&&s(C);const ie=iu(V);l(ie.spec),c(ie.matchedNotes),f("play"),v(null)},F=u==="A"?a.poseA:a.poseB,N=C=>{l(V=>{const Me={...u==="A"?V.poseA:V.poseB,...C};return u==="A"?{...V,poseA:Me}:{...V,poseB:Me}})},G=C=>{const V=ct(C);l(ie=>({...ie,posture:C,prop:C==="standing"||C==="seated"?ie.prop==="mat"?"none":ie.prop:ie.prop==="none"?"mat":ie.prop,camera:C==="standing"||C==="seated"?"three_quarter":"low_side",poseA:{...V},poseB:{...V}}))},q=()=>{l(C=>({...C,poseB:{...C.poseA}})),p("B"),f("B")},z=()=>{l(C=>({...C,poseA:{...C.poseB},poseB:{...C.poseA}}))},H=async()=>{const C=i.current;if(C){E(!0),v("Renderizando 18 cuadros 3D...");try{const V=await C.exportGifDataUri(a);v(`✅ GIF generado (${V.sizeKb} KB)`),e(V.mediaData,r.trim()||void 0)}catch(V){v(V instanceof Error?`⚠️ ${V.message}`:"⚠️ Error al generar GIF")}finally{E(!1)}}},k=async()=>{const C=i.current;if(C){E(!0),v("Generando archivo .gif...");try{const V=await C.exportGifDataUri(a),ie=URL.createObjectURL(V.blob),Me=document.createElement("a"),$=(r.trim()||"ejercicio_3d").toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"ejercicio_3d";Me.href=ie,Me.download=`${$}.gif`,document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),URL.revokeObjectURL(ie),v(`💾 Descargado (${V.sizeKb} KB)`)}catch(V){v(V instanceof Error?`⚠️ ${V.message}`:"⚠️ Error al exportar GIF")}finally{E(!1)}}};return A.jsxs("div",{className:"space-y-3.5",children:[A.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-xl p-3 space-y-2",children:[A.jsx("label",{className:"block text-[11px] font-extrabold uppercase tracking-wider text-emerald-400",children:"✨ Describe cualquier ejercicio"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("input",{type:"text",value:r,onChange:C=>s(C.target.value),onKeyDown:C=>{C.key==="Enter"&&(C.preventDefault(),I())},placeholder:"Ej. Bicho muerto alternado, puente a una pierna...",className:"flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"}),A.jsx("button",{type:"button",onClick:()=>I(),className:"px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition shrink-0 cursor-pointer",children:"Generar pose"})]}),A.jsx("div",{className:"flex flex-wrap gap-1.5",children:yM.map(C=>A.jsx("button",{type:"button",onClick:()=>I(C),className:"px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-[10px] font-semibold text-slate-300 transition cursor-pointer",children:C},C))}),o.length>0&&A.jsxs("p",{className:"text-[11px] text-slate-400",children:["🎯 ",o.join(" · ")]})]}),A.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 items-start",children:[A.jsxs("div",{className:"flex flex-col items-center gap-2",children:[A.jsxs("div",{className:"w-[200px] h-[200px] rounded-xl overflow-hidden border border-slate-700 bg-[#101827] relative",children:[A.jsx("canvas",{ref:n,width:320,height:320,className:"w-full h-full block"}),M&&A.jsx("div",{className:"absolute inset-0 bg-slate-950/90 p-3 flex items-center justify-center text-center text-xs text-rose-400",children:M})]}),A.jsx("div",{className:"grid grid-cols-3 gap-1 w-[200px]",children:[["play","▶ Anim"],["A","Pose A"],["B","Pose B"]].map(([C,V])=>A.jsx("button",{type:"button",onClick:()=>{f(C),(C==="A"||C==="B")&&p(C)},className:`py-1 rounded-lg text-[10px] font-bold border transition cursor-pointer ${h===C?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:V},C))})]}),A.jsxs("div",{className:"space-y-2.5",children:[A.jsxs("div",{children:[A.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:"Postura base"}),A.jsx("div",{className:"flex flex-wrap gap-1",children:BT.map(C=>A.jsx("button",{type:"button",onClick:()=>G(C.id),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${a.posture===C.id?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:C.label},C.id))})]}),A.jsxs("div",{children:[A.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:"Equipo / Accesorio"}),A.jsx("div",{className:"flex flex-wrap gap-1",children:zT.map(C=>A.jsx("button",{type:"button",onClick:()=>l(V=>({...V,prop:C.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${a.prop===C.id?"bg-cyan-500/20 border-cyan-400 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:C.label},C.id))})]}),A.jsxs("div",{children:[A.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:"Cámara"}),A.jsx("div",{className:"flex flex-wrap gap-1",children:HT.map(C=>A.jsx("button",{type:"button",onClick:()=>l(V=>({...V,camera:C.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${a.camera===C.id?"bg-indigo-500/20 border-indigo-400 text-indigo-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:C.label},C.id))})]}),A.jsx(Vt,{label:"Velocidad",value:a.frameDelayMs,min:55,max:130,step:5,unit:"ms",onChange:C=>l(V=>({...V,frameDelayMs:C}))})]})]}),A.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2.5",children:[A.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[A.jsx("div",{className:"flex items-center gap-1",children:["A","B"].map(C=>A.jsxs("button",{type:"button",onClick:()=>{p(C),f(C)},className:`px-2.5 py-1 rounded-lg text-xs font-extrabold border transition cursor-pointer ${u===C?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-900 text-slate-300 border-slate-700"}`,children:["Editando Pose ",C," ",C==="A"?"(Inicio)":"(Fin)"]},C))}),A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("button",{type:"button",onClick:q,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:"Copiar A → B"}),A.jsx("button",{type:"button",onClick:z,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:"A ↔ B"})]})]}),A.jsx("div",{className:"grid grid-cols-3 gap-1",children:[["torso","Torso y Altura"],["arms","Brazos"],["legs","Piernas"]].map(([C,V])=>A.jsx("button",{type:"button",onClick:()=>y(C),className:`py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${m===C?"bg-slate-800 text-emerald-300 border border-emerald-500/40":"bg-slate-900/60 text-slate-400 hover:text-slate-200"}`,children:V},C))}),m==="torso"&&A.jsxs("div",{className:"space-y-1.5",children:[A.jsx(Vt,{label:"Altura cadera",value:F.pelvisOffsetY,min:-.55,max:.3,step:.02,unit:"m",onChange:C=>N({pelvisOffsetY:C})}),A.jsx(Vt,{label:"Inclinar torso",value:F.torsoPitch,min:-75,max:75,onChange:C=>N({torsoPitch:C})}),A.jsx(Vt,{label:"Giro torso",value:F.torsoTwist,min:-60,max:60,onChange:C=>N({torsoTwist:C})}),A.jsx(Vt,{label:"Ladeo lateral",value:F.torsoRoll,min:-35,max:35,onChange:C=>N({torsoRoll:C})}),A.jsx(Vt,{label:"Cabeza",value:F.headPitch,min:-40,max:40,onChange:C=>N({headPitch:C})})]}),m==="arms"&&A.jsxs("div",{className:"space-y-1.5",children:[A.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[A.jsx("input",{type:"checkbox",checked:g,onChange:C=>_(C.target.checked),className:"accent-emerald-500"}),A.jsx("span",{children:"Mover ambos brazos iguales (simétrico)"})]}),A.jsx(Vt,{label:g?"Brazos adelante":"Brazo Izq. adelante",value:F.leftArmLift,min:-55,max:180,onChange:C=>N(g?{leftArmLift:C,rightArmLift:C}:{leftArmLift:C})}),!g&&A.jsx(Vt,{label:"Brazo Der. adelante",value:F.rightArmLift,min:-55,max:180,onChange:C=>N({rightArmLift:C})}),A.jsx(Vt,{label:g?"Abrir brazos":"Abrir brazo Izq.",value:F.leftArmOut,min:-25,max:155,onChange:C=>N(g?{leftArmOut:C,rightArmOut:C}:{leftArmOut:C})}),!g&&A.jsx(Vt,{label:"Abrir brazo Der.",value:F.rightArmOut,min:-25,max:155,onChange:C=>N({rightArmOut:C})}),A.jsx(Vt,{label:g?"Flexión codos":"Codo Izq.",value:F.leftElbowFlex,min:0,max:145,onChange:C=>N(g?{leftElbowFlex:C,rightElbowFlex:C}:{leftElbowFlex:C})}),!g&&A.jsx(Vt,{label:"Codo Der.",value:F.rightElbowFlex,min:0,max:145,onChange:C=>N({rightElbowFlex:C})})]}),m==="legs"&&A.jsxs("div",{className:"space-y-1.5",children:[A.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[A.jsx("input",{type:"checkbox",checked:x,onChange:C=>d(C.target.checked),className:"accent-emerald-500"}),A.jsx("span",{children:"Mover ambas piernas iguales (simétrico)"})]}),A.jsx(Vt,{label:x?"Subir piernas":"Pierna Izq.",value:F.leftHipFlex,min:-50,max:130,onChange:C=>N(x?{leftHipFlex:C,rightHipFlex:C}:{leftHipFlex:C})}),!x&&A.jsx(Vt,{label:"Pierna Der.",value:F.rightHipFlex,min:-50,max:130,onChange:C=>N({rightHipFlex:C})}),A.jsx(Vt,{label:x?"Abrir piernas":"Abrir Izq.",value:F.leftHipOut,min:-25,max:65,onChange:C=>N(x?{leftHipOut:C,rightHipOut:C}:{leftHipOut:C})}),!x&&A.jsx(Vt,{label:"Abrir Der.",value:F.rightHipOut,min:-25,max:65,onChange:C=>N({rightHipOut:C})}),A.jsx(Vt,{label:x?"Flexión rodillas":"Rodilla Izq.",value:F.leftKneeFlex,min:0,max:145,onChange:C=>N(x?{leftKneeFlex:C,rightKneeFlex:C}:{leftKneeFlex:C})}),!x&&A.jsx(Vt,{label:"Rodilla Der.",value:F.rightKneeFlex,min:0,max:145,onChange:C=>N({rightKneeFlex:C})})]})]}),A.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1",children:[A.jsx("button",{type:"button",disabled:S||!!M,onClick:H,className:"flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm transition cursor-pointer",children:S?"⏳ Generando GIF...":"🎨 Crear y aplicar GIF al ejercicio"}),A.jsx("button",{type:"button",disabled:S||!!M,onClick:k,className:"py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-60 text-slate-100 font-bold text-xs border border-slate-700 transition cursor-pointer",title:"Guardar archivo .gif en tu dispositivo",children:"💾 Descargar .gif"})]}),w&&A.jsx("p",{className:"text-xs text-emerald-300 font-semibold",children:w})]})},VT=({exercise:t,index:e,total:n,onChange:i,onDuplicate:r,onDelete:s,onMoveUp:a,onMoveDown:l})=>{const o=gc(t),[c,h]=We.useState(!1),[f,u]=We.useState("catalog"),[p,g]=We.useState(""),[_,x]=We.useState(!1),[d,m]=We.useState(null),y=We.useRef(null),S=vx(t),E=uh(t.mediaRef||t.mediaId),w=my(t.mediaData),v=We.useMemo(()=>{const F=p.trim().toLowerCase();return F?xa.filter(N=>N.label.toLowerCase().includes(F)||N.category.toLowerCase().includes(F)||N.key.toLowerCase().includes(F)):xa},[p]),M=(F,N)=>{i({...t,[F]:typeof N=="string"?N:Math.max(0,Number(N)||0)})},L=F=>{const{mediaData:N,mediaId:G,...q}=t;i({...q,mediaRef:F}),m(null),h(!1)},R=()=>{const{mediaData:F,mediaRef:N,mediaId:G,...q}=t;i(q),m(null),h(!1)},D=(F,N)=>{const{mediaRef:G,mediaId:q,...z}=t;i({...z,name:!t.name.trim()&&N?N:t.name,mediaData:F}),m(null),h(!1)},I=async F=>{var G;const N=(G=F.target.files)==null?void 0:G[0];if(F.target.value="",!!N){x(!0),m(null);try{const q=await vM(N),{mediaRef:z,mediaId:H,...k}=t;i({...k,mediaData:q.mediaData}),h(!1)}catch(q){m(q instanceof Error?q.message:"No se pudo procesar la imagen o GIF seleccionado.")}finally{x(!1)}}};return A.jsxs("div",{className:"bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 shadow-sm hover:border-slate-600 transition",children:[A.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-3",children:[A.jsxs("div",{className:"flex items-center space-x-2.5 flex-1 min-w-[220px]",children:[A.jsx("span",{className:"flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-semibold text-xs shrink-0",children:e+1}),A.jsxs("div",{className:"relative shrink-0",children:[A.jsx("button",{type:"button",onClick:()=>{m(null),u("catalog"),h(!0)},title:S?"Cambiar GIF o imagen del ejercicio":"Agregar GIF o imagen",className:`w-12 h-12 rounded-xl border overflow-hidden flex items-center justify-center transition cursor-pointer ${S?"border-emerald-500/60 bg-slate-950":"border-slate-700 bg-slate-900/80 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400"}`,children:S?A.jsxs(A.Fragment,{children:[A.jsx("img",{src:S,alt:t.name||"Ejercicio",className:"w-full h-full object-cover"}),E?A.jsx("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/80 text-[8px] font-extrabold text-emerald-400 text-center leading-tight py-0.5",children:E.bundled?"BASE":"WEB"}):w!==null?A.jsxs("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/80 text-[8px] font-mono font-bold text-cyan-300 text-center leading-tight py-0.5",children:[w,"KB"]}):null]}):A.jsx("span",{className:"text-[10px] font-bold tracking-tight leading-tight text-center px-1",children:"GIF"})}),S&&A.jsx("button",{type:"button",onClick:R,title:"Quitar GIF / imagen",className:"absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shadow cursor-pointer",children:"×"})]}),A.jsx("input",{type:"text",value:t.name,onChange:F=>M("name",F.target.value),placeholder:"Nombre del ejercicio",className:"flex-1 bg-slate-900/60 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-100 focus:outline-none focus:border-emerald-500"})]}),A.jsxs("div",{className:"flex items-center space-x-1",children:[A.jsx("button",{type:"button",onClick:a,disabled:e===0,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:"Mover arriba",children:A.jsx(Ey,{size:16})}),A.jsx("button",{type:"button",onClick:l,disabled:e===n-1,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:"Mover abajo",children:A.jsx(wy,{size:16})}),A.jsx("button",{type:"button",onClick:r,className:"p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-700/60",title:"Duplicar",children:A.jsx(My,{size:16})}),A.jsx("button",{type:"button",onClick:s,className:"p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-700/60",title:"Eliminar",children:A.jsx(yy,{size:16})})]})]}),A.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:"Rondas"}),A.jsx("input",{type:"number",min:1,value:t.roundCount,onChange:F=>M("roundCount",parseInt(F.target.value)||1),className:"w-full bg-slate-900/80 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-400"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-bold text-emerald-400 mb-1",children:"Trabajo (seg)"}),A.jsx("input",{type:"number",min:1,value:t.workDurationSeconds,onChange:F=>M("workDurationSeconds",parseInt(F.target.value)||0),className:"w-full bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-sm text-emerald-300 font-mono font-bold focus:outline-none focus:border-emerald-400"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-bold text-rose-400 mb-1",children:"Pausa Rondas (seg)"}),A.jsx("input",{type:"number",min:0,value:t.restBetweenRoundsSeconds,onChange:F=>M("restBetweenRoundsSeconds",parseInt(F.target.value)||0),className:"w-full bg-[#7A0D1E]/40 border border-rose-500/40 rounded-lg px-2.5 py-1.5 text-sm text-rose-300 font-mono font-bold focus:outline-none focus:border-rose-400"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:"Pausa Final (seg)"}),A.jsx("input",{type:"number",min:0,value:t.restAfterExerciseSeconds,onChange:F=>M("restAfterExerciseSeconds",parseInt(F.target.value)||0),className:"w-full bg-[#5E3A00]/40 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold focus:outline-none focus:border-amber-400"})]})]}),A.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400",children:[A.jsx("span",{children:"Duración estimada del ejercicio:"}),A.jsx("span",{className:"font-semibold text-slate-300 font-mono",children:St(o.totalSeconds)})]}),c&&A.jsx("div",{className:"fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>!_&&h(!1),children:A.jsxs("div",{className:`bg-slate-900 border border-slate-700 rounded-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all ${f==="creator3d"?"max-w-2xl":"max-w-lg"}`,onClick:F=>F.stopPropagation(),children:[A.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800",children:[A.jsxs("div",{children:[A.jsx("h3",{className:"text-base font-black text-white",children:"Animación o imagen del ejercicio"}),A.jsx("p",{className:"text-xs text-slate-400",children:"Elige del catálogo, sube un archivo o crea un GIF 3D a medida"})]}),A.jsx("button",{type:"button",onClick:()=>!_&&h(!1),className:"w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer",children:"×"})]}),A.jsxs("div",{className:"grid grid-cols-2 gap-1.5 px-4 pt-3 pb-2 bg-slate-950/60 border-b border-slate-800/80",children:[A.jsxs("button",{type:"button",onClick:()=>u("catalog"),className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${f==="catalog"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:["📚 Catálogo (",xa.length,") / Subir"]}),A.jsx("button",{type:"button",onClick:()=>u("creator3d"),className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${f==="creator3d"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:"🎨 Crear GIF 3D (cualquier ejercicio)"})]}),A.jsx("div",{className:"p-4 space-y-4 overflow-y-auto flex-1",children:f==="creator3d"?A.jsx(GT,{initialExerciseName:t.name.trim()||p.trim(),onApplyGif:D}):A.jsxs(A.Fragment,{children:[A.jsxs("div",{children:[A.jsx("input",{ref:y,type:"file",accept:"image/gif,image/png,image/jpeg,image/webp",onChange:I,className:"hidden"}),A.jsx("button",{type:"button",disabled:_,onClick:()=>{var F;return(F=y.current)==null?void 0:F.click()},className:"w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer",children:_?A.jsx("span",{children:"⏳ Optimizando GIF / imagen (220×220)..."}):A.jsx("span",{children:"📤 Subir GIF o imagen propia (se comprime auto.)"})}),d&&A.jsxs("p",{className:"mt-2 text-xs text-rose-400 font-medium",children:["⚠️ ",d]})]}),A.jsxs("div",{children:[A.jsxs("div",{className:"flex items-center justify-between mb-2",children:[A.jsxs("span",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400",children:["Catálogo integrado (",v.length,")"]}),S&&A.jsx("button",{type:"button",onClick:R,className:"text-xs font-bold text-rose-400 hover:text-rose-300 cursor-pointer",children:"Quitar actual"})]}),A.jsx("input",{type:"text",value:p,onChange:F=>g(F.target.value),placeholder:"Buscar ejercicio (ej. burpees, boxeo, plancha)...",className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 mb-3"}),v.length===0?A.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center space-y-2.5",children:[A.jsxs("p",{className:"text-xs text-slate-400",children:["No hay ningún preset llamado"," ",A.jsxs("span",{className:"text-slate-200 font-semibold",children:['"',p.trim(),'"']})," ","en los ",xa.length," predefinidos."]}),A.jsxs("button",{type:"button",onClick:()=>u("creator3d"),className:"px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer",children:['🎨 Crear "',p.trim(),'" en el Creador 3D']})]}):A.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-2.5",children:v.map(F=>{const N=(E==null?void 0:E.key)===F.key;return A.jsxs("button",{type:"button",onClick:()=>L(F.mediaRef),className:`rounded-xl p-2 border text-center transition flex flex-col items-center gap-1.5 cursor-pointer ${N?"border-emerald-400 bg-emerald-500/15":"border-slate-800 bg-slate-950/80 hover:border-slate-600"}`,children:[A.jsx("img",{src:F.url,alt:F.label,className:"w-16 h-16 rounded-lg object-cover bg-slate-900"}),A.jsx("span",{className:"text-[11px] font-bold text-slate-200 leading-tight line-clamp-2",children:F.label}),A.jsxs("span",{className:"text-[9px] font-semibold text-slate-400 uppercase",children:[F.category,F.bundled?"":" · WEB"]})]},F.key)})})]})]})})]})})]})},WT=({initialWorkout:t,onWorkoutChange:e,onSaveFile:n,onOpenFile:i})=>{const[r,s]=We.useState(t),[a,l]=We.useState(null);We.useEffect(()=>{s(E=>E===t?E:t)},[t]),We.useEffect(()=>{e==null||e(r)},[r,e]);const o=r.routines[0],c=Ya(o),h=E=>{l(E),setTimeout(()=>l(null),3e3)},f=(E,w)=>{s(v=>({...v,[E]:w}))},u=(E,w)=>{s(v=>{const M=[...v.routines];return M[0]={...M[0],[E]:typeof w=="string"?w:Math.max(1,Number(w)||0)},{...v,routines:M}})},p=(E,w)=>{s(v=>{const M=[...v.routines],L=[...M[0].exercises];return L[E]=w,M[0]={...M[0],exercises:L},{...v,routines:M}})},g=()=>{s(E=>{const w=[...E.routines],v={...mx,id:"ex-"+Date.now(),name:`Ejercicio ${w[0].exercises.length+1}`};return w[0]={...w[0],exercises:[...w[0].exercises,v]},{...E,routines:w}})},_=E=>{s(w=>{const v=[...w.routines],M=v[0].exercises[E],L={...M,id:"ex-"+Date.now(),name:`${M.name} (copia)`},R=[...v[0].exercises];return R.splice(E+1,0,L),v[0]={...v[0],exercises:R},{...w,routines:v}})},x=E=>{if(o.exercises.length<=1){alert("La rutina debe tener al menos un ejercicio.");return}s(w=>{const v=[...w.routines],M=v[0].exercises.filter((L,R)=>R!==E);return v[0]={...v[0],exercises:M},{...w,routines:v}})},d=(E,w)=>{const v=w==="up"?E-1:E+1;v<0||v>=o.exercises.length||s(M=>{const L=[...M.routines],R=[...L[0].exercises],D=R[E];return R[E]=R[v],R[v]=D,L[0]={...L[0],exercises:R},{...M,routines:L}})},m=async()=>{const E=o.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",w=JSON.stringify(r,null,2),v=new File([w],`${E}.wkt`,{type:"application/octet-stream"}),M=`🔥 ¡${o.name}! • ⏱️ ${St(c.totalSeconds)} • 💪 ${o.exercises.length} ejercicios
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`,L=await Mx(r,qa.es);if(L){const R=new File([L],`${E}_card.png`,{type:"image/png"});if(typeof navigator.canShare=="function"){if(navigator.canShare({files:[R,v]}))try{await navigator.share({title:o.name,text:M,files:[R,v]});return}catch(D){if((D==null?void 0:D.name)==="AbortError")return}else if(navigator.canShare({files:[v]}))try{await navigator.share({title:o.name,text:M,files:[v]});return}catch(D){if((D==null?void 0:D.name)==="AbortError")return}}if(S(),navigator.clipboard&&typeof ClipboardItem<"u")try{await navigator.clipboard.write([new ClipboardItem({"image/png":L})]),h(`🖼️ Tarjeta copiada y archivo "${E}.wkt" descargado para adjuntar en WhatsApp.`),setTimeout(()=>window.open(`https://wa.me/?text=${encodeURIComponent(M)}`,"_blank"),700);return}catch{}}else S();h("¡Archivo descargado! Abriendo WhatsApp..."),setTimeout(()=>window.open(`https://wa.me/?text=${encodeURIComponent(M)}`,"_blank"),600)},y=()=>{const E=yx(r);window.location.href=E,h("Abriendo aplicación en el móvil...")},S=()=>{const E=new Blob([JSON.stringify(r,null,2)],{type:"application/octet-stream"}),w=URL.createObjectURL(E),v=document.createElement("a");v.href=w,v.download=`${o.name.toLowerCase().replace(/\s+/g,"_")||"rutina"}.wkt`,v.click(),URL.revokeObjectURL(w),h("Archivo .wkt descargado.")};return A.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[a&&A.jsx("div",{className:"fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 font-semibold px-4 py-3 rounded-xl shadow-lg border border-emerald-400 animate-bounce",children:a}),A.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800",children:[A.jsxs("div",{className:"flex items-center space-x-3",children:[A.jsx(Xl,{className:"w-10 h-10 shrink-0 shadow-md rounded-xl"}),A.jsxs("div",{children:[A.jsx("h1",{className:"text-2xl font-black text-slate-100 tracking-tight",children:"Timer Routine Studio"}),A.jsx("p",{className:"text-xs text-slate-400",children:"Archivos .wkt"})]})]}),A.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[i&&A.jsxs("button",{type:"button",onClick:i,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition",title:"Abrir archivo .json local",children:[A.jsx(Ex,{size:16}),A.jsx("span",{children:"Abrir Archivo"})]}),A.jsxs("button",{type:"button",onClick:n?()=>n(r):S,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition",title:"Guardar o descargar rutina",children:[A.jsx(Ty,{size:16}),A.jsx("span",{children:"Guardar Local"})]}),A.jsxs("button",{type:"button",onClick:m,className:"flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-lg text-xs font-bold transition shadow-sm",children:[A.jsx(wx,{className:"w-4 h-4 shrink-0"}),A.jsx("span",{children:"Compartir WhatsApp"})]}),A.jsxs("button",{type:"button",onClick:y,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition",title:"Abrir con deep link en la app nativa",children:[A.jsx(by,{size:16}),A.jsx("span",{children:"Abrir en App"})]})]})]}),A.jsxs("div",{className:"bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 mb-4",children:[A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Nombre de la Rutina"}),A.jsx("input",{type:"text",value:o.name,onChange:E=>u("name",E.target.value),placeholder:"Ej: Fuerza Diario",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 font-semibold focus:outline-none focus:border-emerald-500"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:"Autor / Entrenador"}),A.jsx("input",{type:"text",value:o.author,onChange:E=>u("author",E.target.value),placeholder:"",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500"})]})]}),A.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:"Categoría"}),A.jsx("input",{type:"text",value:r.category,onChange:E=>f("category",E.target.value),placeholder:"Fuerza, Cardio...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:"Deporte"}),A.jsx("input",{type:"text",value:r.sport,onChange:E=>f("sport",E.target.value),placeholder:"Fitness, HIIT...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:"Ciclos Globales"}),A.jsx("input",{type:"number",min:1,value:o.routineCycles,onChange:E=>u("routineCycles",parseInt(E.target.value)||1),className:"w-full bg-slate-900/90 border border-cyan-500/30 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:"Preparación (seg)"}),A.jsx("input",{type:"number",min:0,value:o.prepareDurationSeconds,onChange:E=>u("prepareDurationSeconds",parseInt(E.target.value)||0),className:"w-full bg-[#5E3A00]/35 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold"})]})]})]}),A.jsx(Ry,{metrics:c}),A.jsxs("div",{className:"my-6",children:[A.jsxs("div",{className:"flex items-center justify-between mb-3",children:[A.jsxs("h2",{className:"text-lg font-bold text-slate-200",children:["Ejercicios (",o.exercises.length,")"]}),A.jsxs("button",{type:"button",onClick:g,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition",children:[A.jsx(em,{size:16}),A.jsx("span",{children:"Agregar Ejercicio"})]})]}),A.jsx("div",{className:"space-y-3",children:o.exercises.map((E,w)=>A.jsx(VT,{exercise:E,index:w,total:o.exercises.length,onChange:v=>p(w,v),onDuplicate:()=>_(w),onDelete:()=>x(w),onMoveUp:()=>d(w,"up"),onMoveDown:()=>d(w,"down")},E.id||w))}),A.jsxs("button",{type:"button",onClick:g,className:"mt-4 w-full py-3 border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-xl flex items-center justify-center space-x-2 text-slate-400 hover:text-emerald-400 transition",children:[A.jsx(em,{size:18}),A.jsx("span",{className:"text-sm font-semibold",children:"Agregar otro ejercicio"})]})]})]})},XT=({workout:t,t:e,onOpenInApp:n,onEditInWeb:i,onDownloadWkt:r,onShareWhatsApp:s,onGoHome:a})=>{const l=t.routines[0],o=Ya(l),c=o.totalSeconds>0?Math.round(o.tutSeconds/o.totalSeconds*100):50,h=Math.max(0,100-c);return A.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-6",children:[a&&A.jsx("div",{className:"mb-3 flex justify-between items-center",children:A.jsx("button",{type:"button",onClick:a,className:"px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",children:A.jsx("span",{children:e.homeBtn||"🏠 Inicio"})})}),A.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden",children:[A.jsx("div",{className:"absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),A.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-3",children:[A.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:e.previewBadge||"✨ Rutina Compartida"}),t.category&&A.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700",children:["🏷️ ",t.category]}),t.sport&&A.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700",children:["🏅 ",t.sport]}),l.routineCycles>1&&A.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:["🔄 ",l.routineCycles,"x ",e.cycles||e.cyclesLabel]})]}),A.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight",children:l.name}),l.author&&A.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-1.5 flex items-center gap-1.5",children:[A.jsxs("span",{children:["👤 ",e.sharedBy||"Compartida por",":"]}),A.jsx("strong",{className:"text-slate-200",children:l.author})]}),A.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6",children:[A.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[A.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalTime}),A.jsx("span",{className:"text-xl sm:text-2xl font-black text-white font-mono mt-1 block",children:St(o.totalSeconds)})]}),A.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-2xl p-3.5 text-center",children:[A.jsx("span",{className:"block text-[10px] font-bold text-emerald-300 uppercase tracking-wider",children:e.tut}),A.jsx("span",{className:"text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1 block",children:St(o.tutSeconds)})]}),A.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-2xl p-3.5 text-center",children:[A.jsx("span",{className:"block text-[10px] font-bold text-rose-300 uppercase tracking-wider",children:e.rest}),A.jsx("span",{className:"text-xl sm:text-2xl font-black text-rose-400 font-mono mt-1 block",children:St(o.restSeconds)})]}),A.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[A.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalRounds}),A.jsxs("span",{className:"text-xl sm:text-2xl font-black text-cyan-400 font-mono mt-1 block",children:[o.totalRounds," ",A.jsxs("span",{className:"text-xs font-normal text-slate-500",children:["(",o.exerciseCount,")"]})]})]})]}),A.jsxs("div",{className:"mb-6",children:[A.jsxs("div",{className:"flex justify-between text-[11px] font-semibold text-slate-400 mb-1.5",children:[A.jsx("span",{children:e.workVsRestRatio||"Distribución Trabajo vs Descanso"}),A.jsxs("span",{children:[A.jsxs("strong",{className:"text-emerald-400",children:[c,"%"]})," /"," ",A.jsxs("strong",{className:"text-rose-400",children:[h,"%"]})]})]}),A.jsxs("div",{className:"w-full h-2.5 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800",children:[A.jsx("div",{style:{width:`${c}%`},className:"bg-emerald-500 h-full transition-all"}),A.jsx("div",{style:{width:`${h}%`},className:"bg-rose-500 h-full transition-all"})]})]}),A.jsxs("div",{className:"space-y-2.5 mb-6",children:[A.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[A.jsx("button",{type:"button",onClick:n,className:"w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 cursor-pointer",children:A.jsx("span",{children:e.openInApp})}),A.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[A.jsx(Xl,{className:"w-6 h-6 shrink-0"}),A.jsx("span",{children:e.downloadApkBtn||"Descargar App Android (.apk)"})]})]}),A.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[A.jsx("button",{type:"button",onClick:i,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.editRoutineBtn||"✏️ Editar en Web"}),A.jsx("button",{type:"button",onClick:r,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.downloadWktBtn||"📥 Descargar (.wkt)"}),A.jsxs("button",{type:"button",onClick:s,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer flex items-center justify-center gap-1.5",children:[A.jsx(wx,{className:"w-4 h-4 text-[#25D366] shrink-0"}),A.jsx("span",{children:e.shareWhatsApp})]})]})]}),A.jsxs("div",{children:[A.jsxs("div",{className:"flex items-center justify-between mb-3",children:[A.jsxs("h2",{className:"text-sm font-extrabold text-slate-300 uppercase tracking-wider",children:[e.exercisesList," (",l.exercises.length,")"]}),l.prepareDurationSeconds>0&&A.jsxs("span",{className:"text-xs font-mono text-amber-300 bg-[#5E3A00]/50 border border-amber-500/40 px-2.5 py-0.5 rounded-lg font-bold",children:["⏱️ ",e.prepareBadge||"Preparación",": ",St(l.prepareDurationSeconds)]})]}),A.jsx("div",{className:"space-y-2.5",children:l.exercises.map((f,u)=>{const p=gc(f),g=vx(f);return A.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/90 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:"w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-xs flex items-center justify-center shrink-0",children:u+1}),g&&A.jsx("img",{src:g,alt:f.name,className:"w-12 h-12 rounded-xl object-cover border border-slate-700 bg-slate-900 shrink-0"}),A.jsxs("div",{children:[A.jsx("h3",{className:"font-bold text-slate-100 text-sm sm:text-base",children:f.name}),A.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-1 text-[11px] font-mono",children:[A.jsxs("span",{className:"px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-300 font-semibold",children:["🔄 ",f.roundCount," ",e.rounds]}),A.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#0F4D2A]/60 border border-emerald-500/40 text-emerald-300 font-bold",children:["⚡ ",St(f.workDurationSeconds)]}),f.restBetweenRoundsSeconds>0&&A.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#7A0D1E]/60 border border-rose-500/40 text-rose-300 font-bold",children:["💨 ",St(f.restBetweenRoundsSeconds)]}),f.restAfterExerciseSeconds>0&&A.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#5E3A00]/60 border border-amber-500/40 text-amber-300 font-bold",children:["🛑 ",St(f.restAfterExerciseSeconds)]})]})]})]}),A.jsxs("div",{className:"text-right sm:border-l sm:border-slate-800 sm:pl-4 flex sm:flex-col justify-between items-center sm:items-end",children:[A.jsx("span",{className:"text-[10px] uppercase text-slate-500 font-semibold",children:e.subtotal}),A.jsx("span",{className:"text-sm font-mono font-bold text-slate-200",children:St(p.totalSeconds)})]})]},f.id||u)})})]})]})]})},jT=()=>{const[t,e]=We.useState(()=>Jp()),[n,i]=We.useState(!1),[r,s]=We.useState(null),[a,l]=We.useState("welcome"),o=We.useRef(null),c=We.useRef("preview"),h=We.useMemo(()=>{const m=localStorage.getItem("timer_lang_tag")||"SYSTEM";return Sy(m)},[]),f=qa[h]||qa.es,u=m=>{var v;const y=((v=m.routines[0])==null?void 0:v.name)||"rutina",S=new Blob([JSON.stringify(m,null,2)],{type:"application/octet-stream"}),E=URL.createObjectURL(S),w=document.createElement("a");w.href=E,w.download=`${y.toLowerCase().replace(/\s+/g,"_")}.wkt`,w.click(),URL.revokeObjectURL(E)};We.useEffect(()=>{const m=new URLSearchParams(window.location.search),y=m.get("wkt"),S=m.get("mode"),E=m.get("dl");if(y){const w=_y(y);w&&(e(w),i(!0),l(S==="edit"?"editor":"preview"),E==="1"&&setTimeout(()=>u(w),400))}},[]);const p=m=>{var y;c.current=m,s(null),(y=o.current)==null||y.click()},g=async m=>{var S;const y=(S=m.target.files)==null?void 0:S[0];if(m.target.value="",!!y)try{const E=await y.text(),w=JSON.parse(E);if(!_x(w)){s("El archivo seleccionado no tiene un formato .wkt válido.");return}const v=Sx(w);e(v),i(!1),s(null),l(c.current)}catch{s("No se pudo leer el archivo .wkt seleccionado.")}},_=()=>{window.location.href=yx(t)},x=()=>{u(t)},d=async()=>{const m=t.routines[0],y=Ya(m),S=m.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",E=JSON.stringify(t,null,2),w=new File([E],`${S}.wkt`,{type:"application/octet-stream"}),v=`🔥 ¡${m.name}! • ⏱️ ${St(y.totalSeconds)} • 💪 ${m.exercises.length} ejercicios
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`,M=await Mx(t,f);if(M){const L=new File([M],`${S}_card.png`,{type:"image/png"});if(typeof navigator.canShare=="function"){if(navigator.canShare({files:[L,w]}))try{await navigator.share({title:m.name,text:v,files:[L,w]});return}catch(R){if((R==null?void 0:R.name)==="AbortError")return}else if(navigator.canShare({files:[w]}))try{await navigator.share({title:m.name,text:v,files:[w]});return}catch(R){if((R==null?void 0:R.name)==="AbortError")return}}if(u(t),navigator.clipboard&&typeof ClipboardItem<"u")try{await navigator.clipboard.write([new ClipboardItem({"image/png":M})])}catch{}}else u(t);window.open(`https://wa.me/?text=${encodeURIComponent(v)}`,"_blank")};return A.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950",children:[A.jsx("input",{ref:o,type:"file",accept:".wkt,.json,application/json",onChange:g,className:"hidden"}),n&&A.jsxs("div",{className:"bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 py-2 px-4 flex items-center justify-center gap-3 text-xs font-medium",children:[A.jsx("span",{children:"✨ Rutina cargada desde enlace compartido."}),A.jsx("button",{type:"button",onClick:()=>l(a==="preview"?"editor":"preview"),className:"px-2.5 py-0.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold transition",children:a==="preview"?f.editRoutineBtn:f.previewModeBtn})]}),A.jsx("main",{className:"flex-1",children:a==="welcome"?A.jsx("div",{className:"max-w-2xl mx-auto px-4 py-10",children:A.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center",children:[A.jsx("div",{className:"flex justify-center mb-4",children:A.jsx(Xl,{className:"w-20 h-20 shadow-xl rounded-2xl"})}),A.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:f.appTitle}),A.jsx("p",{className:"text-sm sm:text-base text-slate-400 mt-2 max-w-md mx-auto",children:"Diseña, personaliza y comparte tus rutinas de entrenamiento cronometradas (.wkt)"}),A.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7",children:[A.jsx("button",{type:"button",onClick:()=>{e(Jp()),s(null),l("editor")},className:"w-full py-4 px-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition cursor-pointer",children:"+ Nueva Rutina"}),A.jsxs("button",{type:"button",onClick:()=>p("preview"),className:"w-full py-4 px-5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold rounded-2xl text-base transition flex items-center justify-center gap-2 cursor-pointer",children:[A.jsx(Ex,{size:20}),A.jsx("span",{children:"Abrir archivo .wkt"})]})]}),A.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"mt-3 w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[A.jsx(Xl,{className:"w-6 h-6 shrink-0"}),A.jsx("span",{children:f.downloadApkBtn||"Descargar App Android (.apk)"})]}),r&&A.jsxs("p",{className:"mt-3 text-xs text-rose-400 font-semibold",children:["⚠️ ",r]}),A.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-800/90 text-left",children:[A.jsx("h2",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3",children:"⚡ O explora una rutina de ejemplo:"}),A.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:ly.map(m=>{const y=m.workout.routines[0],S=Ya(y);return A.jsxs("button",{type:"button",onClick:()=>{e(JSON.parse(JSON.stringify(m.workout))),l("preview")},className:"text-left bg-slate-950/90 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 transition cursor-pointer",children:[A.jsxs("span",{className:"text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:[m.badgeIcon," ",m.workout.category]}),A.jsx("h3",{className:"text-base font-black text-white mt-1.5",children:y.name}),A.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:["⏱️ ",St(S.totalSeconds)," • 💪 ",y.exercises.length," ejercicios"]})]},m.id)})})]})]})}):a==="preview"?A.jsx(XT,{workout:t,t:f,onOpenInApp:_,onEditInWeb:()=>l("editor"),onDownloadWkt:x,onShareWhatsApp:d,onGoHome:()=>l("welcome")}):A.jsx(WT,{initialWorkout:t,onWorkoutChange:e,onSaveFile:u,onOpenFile:()=>p("editor")})}),A.jsx("footer",{className:"border-t border-slate-900 py-4 text-center text-xs text-slate-500",children:"Timer Routine Studio • Archivos .wkt"})]})};px(document.getElementById("root")).render(A.jsx(We.StrictMode,{children:A.jsx(jT,{})}));
