(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var d0={exports:{}},sc={},f0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),Xv=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),qv=Symbol.for("react.strict_mode"),Yv=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Jv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),e_=Symbol.for("react.memo"),t_=Symbol.for("react.lazy"),Kh=Symbol.iterator;function n_(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,m0={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||h0}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g0(){}g0.prototype=Zs.prototype;function Mf(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||h0}var Ef=Mf.prototype=new g0;Ef.constructor=Mf;p0(Ef,Zs.prototype);Ef.isPureReactComponent=!0;var Zh=Array.isArray,x0=Object.prototype.hasOwnProperty,wf={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function _0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)x0.call(e,i)&&!v0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),l=0;l<o;l++)c[l]=arguments[l+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:no,type:t,key:s,ref:a,props:r,_owner:wf.current}}function i_(t,e){return{$$typeof:no,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===no}function r_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jh=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r_(""+t.key):e.toString(36)}function rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case no:case Xv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Lc(a,0):i,Zh(r)?(n="",t!=null&&(n=t.replace(Jh,"$&/")+"/"),rl(r,e,n,"",function(l){return l})):r!=null&&(bf(r)&&(r=i_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Jh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Zh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Lc(s,o);a+=rl(s,e,n,c,r)}else if(c=n_(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Lc(s,o++),a+=rl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function po(t,e,n){if(t==null)return t;var i=[],r=0;return rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function s_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},sl={transition:null},a_={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:sl,ReactCurrentOwner:wf};function y0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:po,forEach:function(t,e,n){po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return po(t,function(){e++}),e},toArray:function(t){return po(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Zs;qe.Fragment=$v;qe.Profiler=Yv;qe.PureComponent=Mf;qe.StrictMode=qv;qe.Suspense=Qv;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_;qe.act=y0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=p0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)x0.call(e,c)&&!v0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var l=0;l<c;l++)o[l]=arguments[l+2];i.children=o}return{$$typeof:no,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:Zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kv,_context:t},t.Consumer=t};qe.createElement=_0;qe.createFactory=function(t){var e=_0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Jv,render:t}};qe.isValidElement=bf;qe.lazy=function(t){return{$$typeof:t_,_payload:{_status:-1,_result:t},_init:s_}};qe.memo=function(t,e){return{$$typeof:e_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=sl.transition;sl.transition={};try{t()}finally{sl.transition=e}};qe.unstable_act=y0;qe.useCallback=function(t,e){return mn.current.useCallback(t,e)};qe.useContext=function(t){return mn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return mn.current.useEffect(t,e)};qe.useId=function(){return mn.current.useId()};qe.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return mn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};qe.useRef=function(t){return mn.current.useRef(t)};qe.useState=function(t){return mn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return mn.current.useTransition()};qe.version="18.3.1";f0.exports=qe;var Ie=f0.exports;const o_=jv(Ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=Ie,c_=Symbol.for("react.element"),u_=Symbol.for("react.fragment"),d_=Object.prototype.hasOwnProperty,f_=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h_={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)d_.call(e,i)&&!h_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:c_,type:t,key:s,ref:a,props:r,_owner:f_.current}}sc.Fragment=u_;sc.jsx=S0;sc.jsxs=S0;d0.exports=sc;var y=d0.exports,M0={exports:{}},Nn={},E0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,F){var W=B.length;B.push(F);e:for(;0<W;){var K=W-1>>>1,oe=B[K];if(0<r(oe,F))B[K]=F,B[W]=oe,W=K;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var F=B[0],W=B.pop();if(W!==F){B[0]=W;e:for(var K=0,oe=B.length,Te=oe>>>1;K<Te;){var Y=2*(K+1)-1,ae=B[Y],U=Y+1,se=B[U];if(0>r(ae,W))U<oe&&0>r(se,ae)?(B[K]=se,B[U]=W,K=U):(B[K]=ae,B[Y]=W,K=Y);else if(U<oe&&0>r(se,W))B[K]=se,B[U]=W,K=U;else break e}}return F}function r(B,F){var W=B.sortIndex-F.sortIndex;return W!==0?W:B.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],l=[],d=1,f=null,u=3,p=!1,m=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var F=n(l);F!==null;){if(F.callback===null)i(l);else if(F.startTime<=B)i(l),F.sortIndex=F.expirationTime,e(c,F);else break;F=n(l)}}function M(B){if(v=!1,S(B),!m)if(n(c)!==null)m=!0,G(b);else{var F=n(l);F!==null&&k(M,F.startTime-B)}}function b(B,F){m=!1,v&&(v=!1,h(E),E=-1),p=!0;var W=u;try{for(S(F),f=n(c);f!==null&&(!(f.expirationTime>F)||B&&!I());){var K=f.callback;if(typeof K=="function"){f.callback=null,u=f.priorityLevel;var oe=K(f.expirationTime<=F);F=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(c)&&i(c),S(F)}else i(c);f=n(c)}if(f!==null)var Te=!0;else{var Y=n(l);Y!==null&&k(M,Y.startTime-F),Te=!1}return Te}finally{f=null,u=W,p=!1}}var T=!1,_=null,E=-1,N=5,P=-1;function I(){return!(t.unstable_now()-P<N)}function z(){if(_!==null){var B=t.unstable_now();P=B;var F=!0;try{F=_(!0,B)}finally{F?R():(T=!1,_=null)}}else T=!1}var R;if(typeof g=="function")R=function(){g(z)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,D=C.port2;C.port1.onmessage=z,R=function(){D.postMessage(null)}}else R=function(){x(z,0)};function G(B){_=B,T||(T=!0,R())}function k(B,F){E=x(function(){B(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,G(b))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(B){switch(u){case 1:case 2:case 3:var F=3;break;default:F=u}var W=u;u=F;try{return B()}finally{u=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=u;u=B;try{return F()}finally{u=W}},t.unstable_scheduleCallback=function(B,F,W){var K=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=W+oe,B={id:d++,callback:F,priorityLevel:B,startTime:W,expirationTime:oe,sortIndex:-1},W>K?(B.sortIndex=W,e(l,B),n(c)===null&&B===n(l)&&(v?(h(E),E=-1):v=!0,k(M,W-K))):(B.sortIndex=oe,e(c,B),m||p||(m=!0,G(b))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var F=u;return function(){var W=u;u=F;try{return B.apply(this,arguments)}finally{u=W}}}})(w0);E0.exports=w0;var p_=E0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=Ie,Ln=p_;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,Da={};function ts(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Da[t]=e,t=0;t<e.length;t++)b0.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,g_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qh={},ep={};function x_(t){return ku.call(ep,t)?!0:ku.call(Qh,t)?!1:g_.test(t)?ep[t]=!0:(Qh[t]=!0,!1)}function v_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function __(t,e,n,i){if(e===null||typeof e>"u"||v_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){en[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];en[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){en[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){en[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){en[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){en[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){en[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){en[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){en[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,Tf);en[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,Tf);en[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,Tf);en[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){en[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});en.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){en[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cf(t,e,n,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(__(e,n,r,i)&&(n=null),i||r===null?x_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),A0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),C0=Symbol.for("react.offscreen"),tp=Symbol.iterator;function ia(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Nc;function ga(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Dc=!1;function Ic(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function y_(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case _s:return"Portal";case zu:return"Profiler";case Rf:return"StrictMode";case Gu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T0:return(t.displayName||"Context")+".Consumer";case A0:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}function S_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M_(t){var e=R0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function go(t){t._valueTracker||(t._valueTracker=M_(t))}function P0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=R0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L0(t,e){e=e.checked,e!=null&&Cf(t,"checked",e,!1)}function ju(t,e){L0(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xu(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xu(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(xa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function N0(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xo,I0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E_=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){E_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function F0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=F0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var w_=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ju=null,Ds=null,Is=null;function ap(t){if(t=so(t)){if(typeof Ju!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=uc(e),Ju(t.stateNode,t.type,e))}}function O0(t){Ds?Is?Is.push(t):Is=[t]:Ds=t}function B0(){if(Ds){var t=Ds,e=Is;if(Is=Ds=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function k0(t,e){return t(e)}function z0(){}var Fc=!1;function G0(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return k0(t,e,n)}finally{Fc=!1,(Ds!==null||Is!==null)&&(z0(),B0())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var i=uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Qu=!1;if(Gi)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{Qu=!1}function b_(t,e,n,i,r,s,a,o,c){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(d){this.onError(d)}}var wa=!1,bl=null,Al=!1,ed=null,A_={onError:function(t){wa=!0,bl=t}};function T_(t,e,n,i,r,s,a,o,c){wa=!1,bl=null,b_.apply(A_,arguments)}function C_(t,e,n,i,r,s,a,o,c){if(T_.apply(this,arguments),wa){if(wa){var l=bl;wa=!1,bl=null}else throw Error(ce(198));Al||(Al=!0,ed=l)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(ns(t)!==t)throw Error(ce(188))}function R_(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return op(r),t;if(s===i)return op(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function V0(t){return t=R_(t),t!==null?W0(t):null}function W0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W0(t);if(e!==null)return e;t=t.sibling}return null}var j0=Ln.unstable_scheduleCallback,lp=Ln.unstable_cancelCallback,P_=Ln.unstable_shouldYield,L_=Ln.unstable_requestPaint,Rt=Ln.unstable_now,N_=Ln.unstable_getCurrentPriorityLevel,Df=Ln.unstable_ImmediatePriority,X0=Ln.unstable_UserBlockingPriority,Tl=Ln.unstable_NormalPriority,D_=Ln.unstable_LowPriority,$0=Ln.unstable_IdlePriority,ac=null,_i=null;function I_(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:O_,F_=Math.log,U_=Math.LN2;function O_(t){return t>>>=0,t===0?32:31-(F_(t)/U_|0)|0}var vo=64,_o=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=va(o):(s&=a,s!==0&&(i=va(s)))}else a=n&~r,a!==0?i=va(a):s!==0&&(i=va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function B_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ai(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=B_(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function z_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function If(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function Y0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K0,Ff,Z0,J0,Q0,nd=!1,yo=[],hr=null,pr=null,mr=null,Ua=new Map,Oa=new Map,sr=[],G_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function sa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=so(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function H_(t,e,n,i,r){switch(e){case"focusin":return hr=sa(hr,t,e,n,i,r),!0;case"dragenter":return pr=sa(pr,t,e,n,i,r),!0;case"mouseover":return mr=sa(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ua.set(s,sa(Ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oa.set(s,sa(Oa.get(s)||null,t,e,n,i,r)),!0}return!1}function eg(t){var e=kr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,Q0(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=so(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function up(t,e,n){al(t)&&n.delete(e)}function V_(){nd=!1,hr!==null&&al(hr)&&(hr=null),pr!==null&&al(pr)&&(pr=null),mr!==null&&al(mr)&&(mr=null),Ua.forEach(up),Oa.forEach(up)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,V_)))}function Ba(t){function e(r){return aa(r,t)}if(0<yo.length){aa(yo[0],t);for(var n=1;n<yo.length;n++){var i=yo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&aa(hr,t),pr!==null&&aa(pr,t),mr!==null&&aa(mr,t),Ua.forEach(e),Oa.forEach(e),n=0;n<sr.length;n++)i=sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)eg(n),n.blockedOn===null&&sr.shift()}var Fs=ji.ReactCurrentBatchConfig,Rl=!0;function W_(t,e,n,i){var r=ct,s=Fs.transition;Fs.transition=null;try{ct=1,Uf(t,e,n,i)}finally{ct=r,Fs.transition=s}}function j_(t,e,n,i){var r=ct,s=Fs.transition;Fs.transition=null;try{ct=4,Uf(t,e,n,i)}finally{ct=r,Fs.transition=s}}function Uf(t,e,n,i){if(Rl){var r=id(t,e,n,i);if(r===null)Xc(t,e,i,Pl,n),cp(t,i);else if(H_(r,t,e,n,i))i.stopPropagation();else if(cp(t,i),e&4&&-1<G_.indexOf(t)){for(;r!==null;){var s=so(r);if(s!==null&&K0(s),s=id(t,e,n,i),s===null&&Xc(t,e,i,Pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xc(t,e,i,null,n)}}var Pl=null;function id(t,e,n,i){if(Pl=null,t=Nf(i),t=kr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N_()){case Df:return 1;case X0:return 4;case Tl:case D_:return 16;case $0:return 536870912;default:return 16}default:return 16}}var lr=null,Of=null,ol=null;function ng(){if(ol)return ol;var t,e=Of,n=e.length,i,r="value"in lr?lr.value:lr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ol=r.slice(t,1<i?1-i:void 0)}function ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function dp(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:dp,this.isPropagationStopped=dp,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=Dn(Js),ro=bt({},Js,{view:0,detail:0}),X_=Dn(ro),Oc,Bc,oa,oc=bt({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Oc=t.screenX-oa.screenX,Bc=t.screenY-oa.screenY):Bc=Oc=0,oa=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),fp=Dn(oc),$_=bt({},oc,{dataTransfer:0}),q_=Dn($_),Y_=bt({},ro,{relatedTarget:0}),kc=Dn(Y_),K_=bt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=Dn(K_),J_=bt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q_=Dn(J_),ey=bt({},Js,{data:0}),hp=Dn(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iy[t])?!!e[t]:!1}function kf(){return ry}var sy=bt({},ro,{key:function(t){if(t.key){var e=ty[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=Dn(sy),oy=bt({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Dn(oy),ly=bt({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),cy=Dn(ly),uy=bt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),dy=Dn(uy),fy=bt({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=Dn(fy),py=[9,13,27,32],zf=Gi&&"CompositionEvent"in window,ba=null;Gi&&"documentMode"in document&&(ba=document.documentMode);var my=Gi&&"TextEvent"in window&&!ba,ig=Gi&&(!zf||ba&&8<ba&&11>=ba),mp=" ",gp=!1;function rg(t,e){switch(t){case"keyup":return py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function gy(t,e){switch(t){case"compositionend":return sg(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return t=e.data,t===mp&&gp?null:t;default:return null}}function xy(t,e){if(Ss)return t==="compositionend"||!zf&&rg(t,e)?(t=ng(),ol=Of=lr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ig&&e.locale!=="ko"?null:e.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vy[t.type]:e==="textarea"}function ag(t,e,n,i){O0(i),e=Ll(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Aa=null,ka=null;function _y(t){xg(t,0)}function lc(t){var e=ws(t);if(P0(e))return t}function yy(t,e){if(t==="change")return e}var og=!1;if(Gi){var zc;if(Gi){var Gc="oninput"in document;if(!Gc){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),Gc=typeof vp.oninput=="function"}zc=Gc}else zc=!1;og=zc&&(!document.documentMode||9<document.documentMode)}function _p(){Aa&&(Aa.detachEvent("onpropertychange",lg),ka=Aa=null)}function lg(t){if(t.propertyName==="value"&&lc(ka)){var e=[];ag(e,ka,t,Nf(t)),G0(_y,e)}}function Sy(t,e,n){t==="focusin"?(_p(),Aa=e,ka=n,Aa.attachEvent("onpropertychange",lg)):t==="focusout"&&_p()}function My(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lc(ka)}function Ey(t,e){if(t==="click")return lc(e)}function wy(t,e){if(t==="input"||t==="change")return lc(e)}function by(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:by;function za(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ku.call(e,r)||!li(t[r],e[r]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,e){var n=yp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yp(n)}}function cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ug(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ay(t){var e=ug(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sp(n,s);var a=Sp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ty=Gi&&"documentMode"in document&&11>=document.documentMode,Ms=null,rd=null,Ta=null,sd=!1;function Mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||Ms==null||Ms!==wl(i)||(i=Ms,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ta&&za(Ta,i)||(Ta=i,i=Ll(rd,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Hc={},dg={};Gi&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function cc(t){if(Hc[t])return Hc[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return Hc[t]=e[n];return t}var fg=cc("animationend"),hg=cc("animationiteration"),pg=cc("animationstart"),mg=cc("transitionend"),gg=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){gg.set(t,e),ts(e,[t])}for(var Vc=0;Vc<Ep.length;Vc++){var Wc=Ep[Vc],Cy=Wc.toLowerCase(),Ry=Wc[0].toUpperCase()+Wc.slice(1);Ar(Cy,"on"+Ry)}Ar(fg,"onAnimationEnd");Ar(hg,"onAnimationIteration");Ar(pg,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(mg,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,C_(i,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,l=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;wp(r,o,l),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,l=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;wp(r,o,l),s=c}}}if(Al)throw t=ed,Al=!1,ed=null,t}function pt(t,e){var n=e[ud];n===void 0&&(n=e[ud]=new Set);var i=t+"__bubble";n.has(i)||(vg(e,t,2,!1),n.add(i))}function jc(t,e,n){var i=0;e&&(i|=4),vg(n,t,i,e)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Ga(t){if(!t[Eo]){t[Eo]=!0,b0.forEach(function(n){n!=="selectionchange"&&(Py.has(n)||jc(n,!1,t),jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eo]||(e[Eo]=!0,jc("selectionchange",!1,e))}}function vg(t,e,n,i){switch(tg(e)){case 1:var r=W_;break;case 4:r=j_;break;default:r=Uf}n=r.bind(null,e,n,t),r=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=kr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}G0(function(){var l=s,d=Nf(n),f=[];e:{var u=gg.get(t);if(u!==void 0){var p=Bf,m=t;switch(t){case"keypress":if(ll(n)===0)break e;case"keydown":case"keyup":p=ay;break;case"focusin":m="focus",p=kc;break;case"focusout":m="blur",p=kc;break;case"beforeblur":case"afterblur":p=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cy;break;case fg:case hg:case pg:p=Z_;break;case mg:p=dy;break;case"scroll":p=X_;break;case"wheel":p=hy;break;case"copy":case"cut":case"paste":p=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pp}var v=(e&4)!==0,x=!v&&t==="scroll",h=v?u!==null?u+"Capture":null:u;v=[];for(var g=l,S;g!==null;){S=g;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,h!==null&&(M=Fa(g,h),M!=null&&v.push(Ha(g,M,S)))),x)break;g=g.return}0<v.length&&(u=new p(u,m,null,n,d),f.push({event:u,listeners:v}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Zu&&(m=n.relatedTarget||n.fromElement)&&(kr(m)||m[Hi]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=l,m=m?kr(m):null,m!==null&&(x=ns(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=l),p!==m)){if(v=fp,M="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=pp,M="onPointerLeave",h="onPointerEnter",g="pointer"),x=p==null?u:ws(p),S=m==null?u:ws(m),u=new v(M,g+"leave",p,n,d),u.target=x,u.relatedTarget=S,M=null,kr(d)===l&&(v=new v(h,g+"enter",m,n,d),v.target=S,v.relatedTarget=x,M=v),x=M,p&&m)t:{for(v=p,h=m,g=0,S=v;S;S=rs(S))g++;for(S=0,M=h;M;M=rs(M))S++;for(;0<g-S;)v=rs(v),g--;for(;0<S-g;)h=rs(h),S--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=rs(v),h=rs(h)}v=null}else v=null;p!==null&&bp(f,u,p,v,!1),m!==null&&x!==null&&bp(f,x,m,v,!0)}}e:{if(u=l?ws(l):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=yy;else if(xp(u))if(og)b=wy;else{b=My;var T=Sy}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=Ey);if(b&&(b=b(t,l))){ag(f,b,n,d);break e}T&&T(t,u,l),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Xu(u,"number",u.value)}switch(T=l?ws(l):window,t){case"focusin":(xp(T)||T.contentEditable==="true")&&(Ms=T,rd=l,Ta=null);break;case"focusout":Ta=rd=Ms=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Mp(f,n,d);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":Mp(f,n,d)}var _;if(zf)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ss?rg(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(ig&&n.locale!=="ko"&&(Ss||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ss&&(_=ng()):(lr=d,Of="value"in lr?lr.value:lr.textContent,Ss=!0)),T=Ll(l,E),0<T.length&&(E=new hp(E,t,null,n,d),f.push({event:E,listeners:T}),_?E.data=_:(_=sg(n),_!==null&&(E.data=_)))),(_=my?gy(t,n):xy(t,n))&&(l=Ll(l,"onBeforeInput"),0<l.length&&(d=new hp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:l}),d.data=_))}xg(f,e)})}function Ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fa(t,n),s!=null&&i.unshift(Ha(t,s,r)),s=Fa(t,e),s!=null&&i.push(Ha(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,l=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&l!==null&&(o=l,r?(c=Fa(n,s),c!=null&&a.unshift(Ha(n,c,o))):r||(c=Fa(n,s),c!=null&&a.push(Ha(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ly=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(Ly,`
`).replace(Ny,"")}function wo(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(ce(425))}function Nl(){}var ad=null,od=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(t){return Tp.resolve(null).then(t).catch(Fy)}:cd;function Fy(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ba(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),mi="__reactFiber$"+Qs,Va="__reactProps$"+Qs,Hi="__reactContainer$"+Qs,ud="__reactEvents$"+Qs,Uy="__reactListeners$"+Qs,Oy="__reactHandles$"+Qs;function kr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cp(t);t!==null;){if(n=t[mi])return n;t=Cp(t)}return e}t=n,n=t.parentNode}return null}function so(t){return t=t[mi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function uc(t){return t[Va]||null}var dd=[],bs=-1;function Tr(t){return{current:t}}function mt(t){0>bs||(t.current=dd[bs],dd[bs]=null,bs--)}function ft(t,e){bs++,dd[bs]=t.current,t.current=e}var Er={},cn=Tr(Er),yn=Tr(!1),$r=Er;function Gs(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Dl(){mt(yn),mt(cn)}function Rp(t,e,n){if(cn.current!==Er)throw Error(ce(168));ft(cn,e),ft(yn,n)}function _g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,S_(t)||"Unknown",r));return bt({},n,i)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,$r=cn.current,ft(cn,t),ft(yn,yn.current),!0}function Pp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=_g(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,mt(yn),mt(cn),ft(cn,t)):mt(yn),ft(yn,n)}var Ni=null,dc=!1,qc=!1;function yg(t){Ni===null?Ni=[t]:Ni.push(t)}function By(t){dc=!0,yg(t)}function Cr(){if(!qc&&Ni!==null){qc=!0;var t=0,e=ct;try{var n=Ni;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,dc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),j0(Df,Cr),r}finally{ct=e,qc=!1}}return null}var As=[],Ts=0,Fl=null,Ul=0,Vn=[],Wn=0,qr=null,Di=1,Ii="";function Or(t,e){As[Ts++]=Ul,As[Ts++]=Fl,Fl=t,Ul=e}function Sg(t,e,n){Vn[Wn++]=Di,Vn[Wn++]=Ii,Vn[Wn++]=qr,qr=t;var i=Di;t=Ii;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Di=1<<32-ai(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function Hf(t){t.return!==null&&(Or(t,1),Sg(t,1,0))}function Vf(t){for(;t===Fl;)Fl=As[--Ts],As[Ts]=null,Ul=As[--Ts],As[Ts]=null;for(;t===qr;)qr=Vn[--Wn],Vn[Wn]=null,Ii=Vn[--Wn],Vn[Wn]=null,Di=Vn[--Wn],Vn[Wn]=null}var Pn=null,Rn=null,_t=!1,ni=null;function Mg(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(_t){var e=Rn;if(e){var n=e;if(!Lp(t,e)){if(fd(t))throw Error(ce(418));e=gr(n.nextSibling);var i=Pn;e&&Lp(t,e)?Mg(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(fd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function Np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function bo(t){if(t!==Pn)return!1;if(!_t)return Np(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=Rn)){if(fd(t))throw Eg(),Error(ce(418));for(;e;)Mg(t,e),e=gr(e.nextSibling)}if(Np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?gr(t.stateNode.nextSibling):null;return!0}function Eg(){for(var t=Rn;t;)t=gr(t.nextSibling)}function Hs(){Rn=Pn=null,_t=!1}function Wf(t){ni===null?ni=[t]:ni.push(t)}var ky=ji.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Ao(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function wg(t){function e(h,g){if(t){var S=h.deletions;S===null?(h.deletions=[g],h.flags|=16):S.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=yr(h,g),h.index=0,h.sibling=null,h}function s(h,g,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<g?(h.flags|=2,g):S):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,g,S,M){return g===null||g.tag!==6?(g=tu(S,h.mode,M),g.return=h,g):(g=r(g,S),g.return=h,g)}function c(h,g,S,M){var b=S.type;return b===ys?d(h,g,S.props.children,M,S.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&Dp(b)===g.type)?(M=r(g,S.props),M.ref=la(h,g,S),M.return=h,M):(M=ml(S.type,S.key,S.props,null,h.mode,M),M.ref=la(h,g,S),M.return=h,M)}function l(h,g,S,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=nu(S,h.mode,M),g.return=h,g):(g=r(g,S.children||[]),g.return=h,g)}function d(h,g,S,M,b){return g===null||g.tag!==7?(g=Wr(S,h.mode,M,b),g.return=h,g):(g=r(g,S),g.return=h,g)}function f(h,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=tu(""+g,h.mode,S),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case mo:return S=ml(g.type,g.key,g.props,null,h.mode,S),S.ref=la(h,null,g),S.return=h,S;case _s:return g=nu(g,h.mode,S),g.return=h,g;case tr:var M=g._init;return f(h,M(g._payload),S)}if(xa(g)||ia(g))return g=Wr(g,h.mode,S,null),g.return=h,g;Ao(h,g)}return null}function u(h,g,S,M){var b=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return b!==null?null:o(h,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case mo:return S.key===b?c(h,g,S,M):null;case _s:return S.key===b?l(h,g,S,M):null;case tr:return b=S._init,u(h,g,b(S._payload),M)}if(xa(S)||ia(S))return b!==null?null:d(h,g,S,M,null);Ao(h,S)}return null}function p(h,g,S,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(S)||null,o(g,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case mo:return h=h.get(M.key===null?S:M.key)||null,c(g,h,M,b);case _s:return h=h.get(M.key===null?S:M.key)||null,l(g,h,M,b);case tr:var T=M._init;return p(h,g,S,T(M._payload),b)}if(xa(M)||ia(M))return h=h.get(S)||null,d(g,h,M,b,null);Ao(g,M)}return null}function m(h,g,S,M){for(var b=null,T=null,_=g,E=g=0,N=null;_!==null&&E<S.length;E++){_.index>E?(N=_,_=null):N=_.sibling;var P=u(h,_,S[E],M);if(P===null){_===null&&(_=N);break}t&&_&&P.alternate===null&&e(h,_),g=s(P,g,E),T===null?b=P:T.sibling=P,T=P,_=N}if(E===S.length)return n(h,_),_t&&Or(h,E),b;if(_===null){for(;E<S.length;E++)_=f(h,S[E],M),_!==null&&(g=s(_,g,E),T===null?b=_:T.sibling=_,T=_);return _t&&Or(h,E),b}for(_=i(h,_);E<S.length;E++)N=p(_,h,E,S[E],M),N!==null&&(t&&N.alternate!==null&&_.delete(N.key===null?E:N.key),g=s(N,g,E),T===null?b=N:T.sibling=N,T=N);return t&&_.forEach(function(I){return e(h,I)}),_t&&Or(h,E),b}function v(h,g,S,M){var b=ia(S);if(typeof b!="function")throw Error(ce(150));if(S=b.call(S),S==null)throw Error(ce(151));for(var T=b=null,_=g,E=g=0,N=null,P=S.next();_!==null&&!P.done;E++,P=S.next()){_.index>E?(N=_,_=null):N=_.sibling;var I=u(h,_,P.value,M);if(I===null){_===null&&(_=N);break}t&&_&&I.alternate===null&&e(h,_),g=s(I,g,E),T===null?b=I:T.sibling=I,T=I,_=N}if(P.done)return n(h,_),_t&&Or(h,E),b;if(_===null){for(;!P.done;E++,P=S.next())P=f(h,P.value,M),P!==null&&(g=s(P,g,E),T===null?b=P:T.sibling=P,T=P);return _t&&Or(h,E),b}for(_=i(h,_);!P.done;E++,P=S.next())P=p(_,h,E,P.value,M),P!==null&&(t&&P.alternate!==null&&_.delete(P.key===null?E:P.key),g=s(P,g,E),T===null?b=P:T.sibling=P,T=P);return t&&_.forEach(function(z){return e(h,z)}),_t&&Or(h,E),b}function x(h,g,S,M){if(typeof S=="object"&&S!==null&&S.type===ys&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case mo:e:{for(var b=S.key,T=g;T!==null;){if(T.key===b){if(b=S.type,b===ys){if(T.tag===7){n(h,T.sibling),g=r(T,S.props.children),g.return=h,h=g;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&Dp(b)===T.type){n(h,T.sibling),g=r(T,S.props),g.ref=la(h,T,S),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}S.type===ys?(g=Wr(S.props.children,h.mode,M,S.key),g.return=h,h=g):(M=ml(S.type,S.key,S.props,null,h.mode,M),M.ref=la(h,g,S),M.return=h,h=M)}return a(h);case _s:e:{for(T=S.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(h,g.sibling),g=r(g,S.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=nu(S,h.mode,M),g.return=h,h=g}return a(h);case tr:return T=S._init,x(h,g,T(S._payload),M)}if(xa(S))return m(h,g,S,M);if(ia(S))return v(h,g,S,M);Ao(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,S),g.return=h,h=g):(n(h,g),g=tu(S,h.mode,M),g.return=h,h=g),a(h)):n(h,g)}return x}var Vs=wg(!0),bg=wg(!1),Ol=Tr(null),Bl=null,Cs=null,jf=null;function Xf(){jf=Cs=Bl=null}function $f(t){var e=Ol.current;mt(Ol),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Bl=t,jf=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(jf!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Bl===null)throw Error(ce(308));Cs=t,Bl.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var zr=null;function qf(t){zr===null?zr=[t]:zr.push(t)}function Ag(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,If(t,n)}}function Ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kl(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,l=c.next;c.next=null,a===null?s=l:a.next=l,a=c;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=l:o.next=l,d.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;a=0,d=l=c=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,v=o;switch(u=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){f=m.call(p,f,u);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,u=typeof m=="function"?m.call(p,f,u):m,u==null)break e;f=bt({},f,u);break e;case 2:nr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(l=d=p,c=f):d=d.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(c=f),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Kr|=a,t.lanes=a,t.memoizedState=f}}function Fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ao={},yi=Tr(ao),Wa=Tr(ao),ja=Tr(ao);function Gr(t){if(t===ao)throw Error(ce(174));return t}function Kf(t,e){switch(ft(ja,e),ft(Wa,t),ft(yi,ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}mt(yi),ft(yi,e)}function Ws(){mt(yi),mt(Wa),mt(ja)}function Cg(t){Gr(ja.current);var e=Gr(yi.current),n=qu(e,t.type);e!==n&&(ft(Wa,t),ft(yi,n))}function Zf(t){Wa.current===t&&(mt(yi),mt(Wa))}var St=Tr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function Jf(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var ul=ji.ReactCurrentDispatcher,Kc=ji.ReactCurrentBatchConfig,Yr=0,Et=null,Ut=null,Xt=null,Gl=!1,Ca=!1,Xa=0,zy=0;function rn(){throw Error(ce(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function eh(t,e,n,i,r,s){if(Yr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?Wy:jy,t=n(i,r),Ca){s=0;do{if(Ca=!1,Xa=0,25<=s)throw Error(ce(301));s+=1,Xt=Ut=null,e.updateQueue=null,ul.current=Xy,t=n(i,r)}while(Ca)}if(ul.current=Hl,e=Ut!==null&&Ut.next!==null,Yr=0,Xt=Ut=Et=null,Gl=!1,e)throw Error(ce(300));return t}function th(){var t=Xa!==0;return Xa=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function qn(){if(Ut===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Xt===null?Et.memoizedState:Xt.next;if(e!==null)Xt=e,Ut=t;else{if(t===null)throw Error(ce(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function $a(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=qn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,l=s;do{var d=l.lane;if((Yr&d)===d)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),i=l.hasEagerState?l.eagerState:t(i,l.action);else{var f={lane:d,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(o=c=f,a=i):c=c.next=f,Et.lanes|=d,Kr|=d}l=l.next}while(l!==null&&l!==s);c===null?a=i:c.next=o,li(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=qn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);li(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Rg(){}function Pg(t,e){var n=Et,i=qn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,nh(Dg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,qa(9,Ng.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(ce(349));Yr&30||Lg(n,e,r)}return r}function Lg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ng(t,e,n,i){e.value=n,e.getSnapshot=i,Ig(e)&&Fg(t)}function Dg(t,e,n){return n(function(){Ig(e)&&Fg(t)})}function Ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function Fg(t){var e=Vi(t,1);e!==null&&oi(e,t,1,-1)}function Up(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=Vy.bind(null,Et,t),[e.memoizedState,t]}function qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ug(){return qn().memoizedState}function dl(t,e,n,i){var r=hi();Et.flags|=t,r.memoizedState=qa(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Qf(i,a.deps)){r.memoizedState=qa(e,n,s,i);return}}Et.flags|=t,r.memoizedState=qa(1|e,n,s,i)}function Op(t,e){return dl(8390656,8,t,e)}function nh(t,e){return fc(2048,8,t,e)}function Og(t,e){return fc(4,2,t,e)}function Bg(t,e){return fc(4,4,t,e)}function kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,kg.bind(null,e,t),n)}function ih(){}function Gg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return Yr&21?(li(n,e)||(n=q0(),Et.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function Gy(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ct=n,Kc.transition=i}}function Wg(){return qn().memoizedState}function Hy(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},jg(t))Xg(e,n);else if(n=Ag(t,e,n,i),n!==null){var r=hn();oi(n,t,i,r),$g(n,e,i)}}function Vy(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(t))Xg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,li(o,a)){var c=e.interleaved;c===null?(r.next=r,qf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Ag(t,e,r,i),n!==null&&(r=hn(),oi(n,t,i,r),$g(n,e,i))}}function jg(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Xg(t,e){Ca=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $g(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,If(t,n)}}var Hl={readContext:$n,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},Wy={readContext:$n,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dl(4194308,4,kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return dl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Hy.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Up,useDebugValue:ih,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Up(!1),e=t[0];return t=Gy.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=hi();if(_t){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),$t===null)throw Error(ce(349));Yr&30||Lg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Op(Dg.bind(null,i,s,t),[t]),i.flags|=2048,qa(9,Ng.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=$t.identifierPrefix;if(_t){var n=Ii,i=Di;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jy={readContext:$n,useCallback:Gg,useContext:$n,useEffect:nh,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:Bg,useMemo:Hg,useReducer:Zc,useRef:Ug,useState:function(){return Zc($a)},useDebugValue:ih,useDeferredValue:function(t){var e=qn();return Vg(e,Ut.memoizedState,t)},useTransition:function(){var t=Zc($a)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Wg,unstable_isNewReconciler:!1},Xy={readContext:$n,useCallback:Gg,useContext:$n,useEffect:nh,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:Bg,useMemo:Hg,useReducer:Jc,useRef:Ug,useState:function(){return Jc($a)},useDebugValue:ih,useDeferredValue:function(t){var e=qn();return Ut===null?e.memoizedState=t:Vg(e,Ut.memoizedState,t)},useTransition:function(){var t=Jc($a)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Wg,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=_r(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=_r(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=_r(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(oi(e,t,i,n),cl(e,t,i))}};function Bp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!za(n,i)||!za(r,s):!0}function qg(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Sn(e)?$r:cn.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Sn(e)?$r:cn.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=y_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function Yg(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wl||(Wl=!0,Td=i),xd(t,e)},n}function Kg(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var qy=ji.ReactCurrentOwner,vn=!1;function fn(t,e,n,i){e.child=t===null?bg(e,null,n,i):Vs(e,t.child,n,i)}function Vp(t,e,n,i,r){n=n.render;var s=e.ref;return Us(e,r),i=eh(t,e,n,i,s,r),n=th(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(_t&&n&&Hf(e),e.flags|=1,fn(t,e,i,r),e.child)}function Wp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zg(t,e,s,i,r)):(t=ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(a,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(za(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return vd(t,e,n,i,r)}function Jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ps,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Ps,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Ps,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Ps,Tn),Tn|=i;return fn(t,e,r,n),e.child}function Qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=Sn(n)?$r:cn.current;return s=Gs(e,s),Us(e,r),n=eh(t,e,n,i,s,r),i=th(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(_t&&i&&Hf(e),e.flags|=1,fn(t,e,n,r),e.child)}function jp(t,e,n,i,r){if(Sn(n)){var s=!0;Il(e)}else s=!1;if(Us(e,r),e.stateNode===null)fl(t,e),qg(e,n,i),gd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=$n(l):(l=Sn(n)?$r:cn.current,l=Gs(e,l));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==l)&&kp(e,a,i,l),nr=!1;var u=e.memoizedState;a.state=u,kl(e,i,a,r),c=e.memoizedState,o!==i||u!==c||yn.current||nr?(typeof d=="function"&&(md(e,n,d,i),c=e.memoizedState),(o=nr||Bp(e,n,o,i,u,c,l))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=l,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Tg(t,e),o=e.memoizedProps,l=e.type===e.elementType?o:ei(e.type,o),a.props=l,f=e.pendingProps,u=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=$n(c):(c=Sn(n)?$r:cn.current,c=Gs(e,c));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||u!==c)&&kp(e,a,i,c),nr=!1,u=e.memoizedState,a.state=u,kl(e,i,a,r);var m=e.memoizedState;o!==f||u!==m||yn.current||nr?(typeof p=="function"&&(md(e,n,p,i),m=e.memoizedState),(l=nr||Bp(e,n,l,i,u,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=c,i=l):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){Qg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Pp(e,n,!1),Wi(t,e,s);i=e.stateNode,qy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,o,s)):fn(t,e,o,s),e.memoizedState=i.state,r&&Pp(e,n,!0),e.child}function ex(t){var e=t.stateNode;e.pendingContext?Rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rp(t,e.context,!1),Kf(t,e.containerInfo)}function Xp(t,e,n,i,r){return Hs(),Wf(r),e.flags|=256,fn(t,e,n,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function tx(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(St,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=gc(a,i,0,null),t=Wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=yd,t):rh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Yy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=yr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=yr(o,s):(s=Wr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Sd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=yd,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rh(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,i){return i!==null&&Wf(i),Vs(e,t.child,null,n),t=rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Qc(Error(ce(422))),To(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gc({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,a),e.child.memoizedState=Sd(a),e.memoizedState=yd,s);if(!(e.mode&1))return To(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Qc(s,i,void 0),To(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=$t,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),oi(i,t,r,-1))}return uh(),i=Qc(Error(ce(421))),To(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=gr(r.nextSibling),Pn=e,_t=!0,ni=null,t!==null&&(Vn[Wn++]=Di,Vn[Wn++]=Ii,Vn[Wn++]=qr,Di=t.id,Ii=t.overflow,qr=e),e=rh(e,i.children),e.flags|=4096,e)}function $p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pd(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function nx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,n,e);else if(t.tag===19)$p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ky(t,e,n){switch(e.tag){case 3:ex(e),Hs();break;case 5:Cg(e);break;case 1:Sn(e.type)&&Il(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?tx(t,e,n):(ft(St,St.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);ft(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return nx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Jg(t,e,n)}return Wi(t,e,n)}var ix,Md,rx,sx;ix=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};rx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(yi.current);var s=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=$u(t,r),i=$u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nl)}Yu(n,i);var a;n=null;for(l in r)if(!i.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var o=r[l];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Da.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in i){var c=i[l];if(o=r!=null?r[l]:void 0,i.hasOwnProperty(l)&&c!==o&&(c!=null||o!=null))if(l==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Da.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&pt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ca(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Zy(t,e,n){var i=e.pendingProps;switch(Vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return Sn(e.type)&&Dl(),sn(e),null;case 3:return i=e.stateNode,Ws(),mt(yn),mt(cn),Jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Pd(ni),ni=null))),Md(t,e),sn(e),null;case 5:Zf(e);var r=Gr(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)rx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return sn(e),null}if(t=Gr(yi.current),bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[Va]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)pt(_a[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":np(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":rp(i,s),pt("invalid",i)}Yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&wo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&wo(i.textContent,o,t),r=["children",""+o]):Da.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":go(i),ip(i,s,!0);break;case"textarea":go(i),sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[Va]=i,ix(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ku(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)pt(_a[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":np(t,i),r=Wu(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":rp(t,i),r=$u(t,i),pt("invalid",t);break;default:r=i}Yu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?U0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&I0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ia(t,c):typeof c=="number"&&Ia(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?c!=null&&s==="onScroll"&&pt("scroll",t):c!=null&&Cf(t,s,c,a))}switch(n){case"input":go(t),ip(t,i,!1);break;case"textarea":go(t),sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Gr(ja.current),Gr(yi.current),bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return sn(e),null;case 13:if(mt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Rn!==null&&e.mode&1&&!(e.flags&128))Eg(),Hs(),e.flags|=98560,s=!1;else if(s=bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[mi]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else ni!==null&&(Pd(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ot===0&&(Ot=3):uh())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Ws(),Md(t,e),t===null&&Ga(e.stateNode.containerInfo),sn(e),null;case 10:return $f(e.type._context),sn(e),null;case 17:return Sn(e.type)&&Dl(),sn(e),null;case 19:if(mt(St),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ca(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=zl(t),a!==null){for(e.flags|=128,ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Xs&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=zl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return sn(e),null}else 2*Rt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=St.current,ft(St,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return ch(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Jy(t,e){switch(Vf(e),e.tag){case 1:return Sn(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),mt(yn),mt(cn),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zf(e),null;case 13:if(mt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(St),null;case 4:return Ws(),null;case 10:return $f(e.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var Co=!1,ln=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,be=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Ed(t,e,n){try{n()}catch(i){At(t,e,i)}}var qp=!1;function eS(t,e){if(ad=Rl,t=ug(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,l=0,d=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(c=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++l===r&&(o=a),u===s&&++d===i&&(c=a),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:t,selectionRange:n},Rl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,x=m.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:ei(e.type,v),x);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return m=qp,qp=!1,m}function Ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ed(e,n,s)}r=r.next}while(r!==i)}}function pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ax(t){var e=t.alternate;e!==null&&(t.alternate=null,ax(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[Va],delete e[ud],delete e[Uy],delete e[Oy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ox(t){return t.tag===5||t.tag===3||t.tag===4}function Yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ox(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Kt=null,ti=!1;function qi(t,e,n){for(n=n.child;n!==null;)lx(t,e,n),n=n.sibling}function lx(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:ln||Rs(n,e);case 6:var i=Kt,r=ti;Kt=null,qi(t,e,n),Kt=i,ti=r,Kt!==null&&(ti?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(ti?(t=Kt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Ba(t)):$c(Kt,n.stateNode));break;case 4:i=Kt,r=ti,Kt=n.stateNode.containerInfo,ti=!0,qi(t,e,n),Kt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ed(n,e,a),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!ln&&(Rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){At(n,e,o)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,qi(t,e,n),ln=i):qi(t,e,n);break;default:qi(t,e,n)}}function Kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qy),e.forEach(function(i){var r=cS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Kt=o.stateNode,ti=!1;break e;case 3:Kt=o.stateNode.containerInfo,ti=!0;break e;case 4:Kt=o.stateNode.containerInfo,ti=!0;break e}o=o.return}if(Kt===null)throw Error(ce(160));lx(s,a,r),Kt=null,ti=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){At(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cx(e,t),e=e.sibling}function cx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),ci(t),i&4){try{Ra(3,t,t.return),pc(3,t)}catch(v){At(t,t.return,v)}try{Ra(5,t,t.return)}catch(v){At(t,t.return,v)}}break;case 1:Kn(e,t),ci(t),i&512&&n!==null&&Rs(n,n.return);break;case 5:if(Kn(e,t),ci(t),i&512&&n!==null&&Rs(n,n.return),t.flags&32){var r=t.stateNode;try{Ia(r,"")}catch(v){At(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&L0(r,s),Ku(o,a);var l=Ku(o,s);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?U0(r,f):d==="dangerouslySetInnerHTML"?I0(r,f):d==="children"?Ia(r,f):Cf(r,d,f,l)}switch(o){case"input":ju(r,s);break;case"textarea":N0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ns(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[Va]=s}catch(v){At(t,t.return,v)}}break;case 6:if(Kn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){At(t,t.return,v)}}break;case 3:if(Kn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(e.containerInfo)}catch(v){At(t,t.return,v)}break;case 4:Kn(e,t),ci(t);break;case 13:Kn(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(oh=Rt())),i&4&&Kp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(l=ln)||d,Kn(e,t),ln=l):Kn(e,t),ci(t),i&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!d&&t.mode&1)for(be=t,d=t.child;d!==null;){for(f=be=d;be!==null;){switch(u=be,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ra(4,u,u.return);break;case 1:Rs(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){At(i,n,v)}}break;case 5:Rs(u,u.return);break;case 22:if(u.memoizedState!==null){Jp(f);continue}}p!==null?(p.return=u,be=p):Jp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,l?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=F0("display",a))}catch(v){At(t,t.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(v){At(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kn(e,t),ci(t),i&4&&Kp(t);break;case 21:break;default:Kn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ox(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ia(r,""),i.flags&=-33);var s=Yp(t);Ad(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Yp(t);bd(t,o,a);break;default:throw Error(ce(161))}}catch(c){At(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tS(t,e,n){be=t,ux(t)}function ux(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Co;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||ln;o=Co;var l=ln;if(Co=a,(ln=c)&&!l)for(be=r;be!==null;)a=be,c=a.child,a.tag===22&&a.memoizedState!==null?Qp(r):c!==null?(c.return=a,be=c):Qp(r);for(;s!==null;)be=s,ux(s),s=s.sibling;be=r,Co=o,ln=l}Zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Zp(t)}}function Zp(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var d=l.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}ln||e.flags&512&&wd(e)}catch(u){At(e,e.return,u)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Jp(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Qp(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pc(4,e)}catch(c){At(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){At(e,r,c)}}var s=e.return;try{wd(e)}catch(c){At(e,s,c)}break;case 5:var a=e.return;try{wd(e)}catch(c){At(e,a,c)}}}catch(c){At(e,e.return,c)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var nS=Math.ceil,Vl=ji.ReactCurrentDispatcher,sh=ji.ReactCurrentOwner,Xn=ji.ReactCurrentBatchConfig,nt=0,$t=null,Nt=null,Jt=0,Tn=0,Ps=Tr(0),Ot=0,Ya=null,Kr=0,mc=0,ah=0,Pa=null,xn=null,oh=0,Xs=1/0,Pi=null,Wl=!1,Td=null,vr=null,Ro=!1,cr=null,jl=0,La=0,Cd=null,hl=-1,pl=0;function hn(){return nt&6?Rt():hl!==-1?hl:hl=Rt()}function _r(t){return t.mode&1?nt&2&&Jt!==0?Jt&-Jt:ky.transition!==null?(pl===0&&(pl=q0()),pl):(t=ct,t!==0||(t=window.event,t=t===void 0?16:tg(t.type)),t):1}function oi(t,e,n,i){if(50<La)throw La=0,Cd=null,Error(ce(185));io(t,n,i),(!(nt&2)||t!==$t)&&(t===$t&&(!(nt&2)&&(mc|=n),Ot===4&&ar(t,Jt)),Mn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Xs=Rt()+500,dc&&Cr()))}function Mn(t,e){var n=t.callbackNode;k_(t,e);var i=Cl(t,t===$t?Jt:0);if(i===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?By(em.bind(null,t)):yg(em.bind(null,t)),Iy(function(){!(nt&6)&&Cr()}),n=null;else{switch(Y0(i)){case 1:n=Df;break;case 4:n=X0;break;case 16:n=Tl;break;case 536870912:n=$0;break;default:n=Tl}n=vx(n,dx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dx(t,e){if(hl=-1,pl=0,nt&6)throw Error(ce(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Cl(t,t===$t?Jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xl(t,i);else{e=i;var r=nt;nt|=2;var s=hx();($t!==t||Jt!==e)&&(Pi=null,Xs=Rt()+500,Vr(t,e));do try{sS();break}catch(o){fx(t,o)}while(!0);Xf(),Vl.current=s,nt=r,Nt!==null?e=0:($t=null,Jt=0,e=Ot)}if(e!==0){if(e===2&&(r=td(t),r!==0&&(i=r,e=Rd(t,r))),e===1)throw n=Ya,Vr(t,0),ar(t,i),Mn(t,Rt()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!iS(r)&&(e=Xl(t,i),e===2&&(s=td(t),s!==0&&(i=s,e=Rd(t,s))),e===1))throw n=Ya,Vr(t,0),ar(t,i),Mn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Br(t,xn,Pi);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=oh+500-Rt(),10<e)){if(Cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cd(Br.bind(null,t,xn,Pi),e);break}Br(t,xn,Pi);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ai(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){t.timeoutHandle=cd(Br.bind(null,t,xn,Pi),i);break}Br(t,xn,Pi);break;case 5:Br(t,xn,Pi);break;default:throw Error(ce(329))}}}return Mn(t,Rt()),t.callbackNode===n?dx.bind(null,t):null}function Rd(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=xn,xn=n,e!==null&&Pd(e)),t}function Pd(t){xn===null?xn=t:xn.push.apply(xn,t)}function iS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~ah,e&=~mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function em(t){if(nt&6)throw Error(ce(327));Os();var e=Cl(t,0);if(!(e&1))return Mn(t,Rt()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var i=td(t);i!==0&&(e=i,n=Rd(t,i))}if(n===1)throw n=Ya,Vr(t,0),ar(t,e),Mn(t,Rt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,xn,Pi),Mn(t,Rt()),null}function lh(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Xs=Rt()+500,dc&&Cr())}}function Zr(t){cr!==null&&cr.tag===0&&!(nt&6)&&Os();var e=nt;nt|=1;var n=Xn.transition,i=ct;try{if(Xn.transition=null,ct=1,t)return t()}finally{ct=i,Xn.transition=n,nt=e,!(nt&6)&&Cr()}}function ch(){Tn=Ps.current,mt(Ps)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dy(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Vf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dl();break;case 3:Ws(),mt(yn),mt(cn),Jf();break;case 5:Zf(i);break;case 4:Ws();break;case 13:mt(St);break;case 19:mt(St);break;case 10:$f(i.type._context);break;case 22:case 23:ch()}n=n.return}if($t=t,Nt=t=yr(t.current,null),Jt=Tn=e,Ot=0,Ya=null,ah=mc=Kr=0,xn=Pa=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}zr=null}return t}function fx(t,e){do{var n=Nt;try{if(Xf(),ul.current=Hl,Gl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gl=!1}if(Yr=0,Xt=Ut=Et=null,Ca=!1,Xa=0,sh.current=null,n===null||n.return===null){Ot=1,Ya=e,Nt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Jt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Gp(a);if(p!==null){p.flags&=-257,Hp(p,a,o,s,e),p.mode&1&&zp(s,l,e),e=p,c=l;var m=e.updateQueue;if(m===null){var v=new Set;v.add(c),e.updateQueue=v}else m.add(c);break e}else{if(!(e&1)){zp(s,l,e),uh();break e}c=Error(ce(426))}}else if(_t&&o.mode&1){var x=Gp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Hp(x,a,o,s,e),Wf(js(c,o));break e}}s=c=js(c,o),Ot!==4&&(Ot=2),Pa===null?Pa=[s]:Pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Yg(s,c,e);Ip(s,h);break e;case 1:o=c;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(vr===null||!vr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Kg(s,o,e);Ip(s,M);break e}}s=s.return}while(s!==null)}mx(n)}catch(b){e=b,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function hx(){var t=Vl.current;return Vl.current=Hl,t===null?Hl:t}function uh(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),$t===null||!(Kr&268435455)&&!(mc&268435455)||ar($t,Jt)}function Xl(t,e){var n=nt;nt|=2;var i=hx();($t!==t||Jt!==e)&&(Pi=null,Vr(t,e));do try{rS();break}catch(r){fx(t,r)}while(!0);if(Xf(),nt=n,Vl.current=i,Nt!==null)throw Error(ce(261));return $t=null,Jt=0,Ot}function rS(){for(;Nt!==null;)px(Nt)}function sS(){for(;Nt!==null&&!P_();)px(Nt)}function px(t){var e=xx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?mx(t):Nt=e,sh.current=null}function mx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jy(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Nt=null;return}}else if(n=Zy(n,e,Tn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ot===0&&(Ot=5)}function Br(t,e,n){var i=ct,r=Xn.transition;try{Xn.transition=null,ct=1,aS(t,e,n,i)}finally{Xn.transition=r,ct=i}return null}function aS(t,e,n,i){do Os();while(cr!==null);if(nt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z_(t,s),t===$t&&(Nt=$t=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,vx(Tl,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=ct;ct=1;var o=nt;nt|=4,sh.current=null,eS(t,n),cx(n,t),Ay(od),Rl=!!ad,od=ad=null,t.current=n,tS(n),L_(),nt=o,ct=a,Xn.transition=s}else t.current=n;if(Ro&&(Ro=!1,cr=t,jl=r),s=t.pendingLanes,s===0&&(vr=null),I_(n.stateNode),Mn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wl)throw Wl=!1,t=Td,Td=null,t;return jl&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Cd?La++:(La=0,Cd=t):La=0,Cr(),null}function Os(){if(cr!==null){var t=Y0(jl),e=Xn.transition,n=ct;try{if(Xn.transition=null,ct=16>t?16:t,cr===null)var i=!1;else{if(t=cr,cr=null,jl=0,nt&6)throw Error(ce(331));var r=nt;for(nt|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var l=o[c];for(be=l;be!==null;){var d=be;switch(d.tag){case 0:case 11:case 15:Ra(8,d,s)}var f=d.child;if(f!==null)f.return=d,be=f;else for(;be!==null;){d=be;var u=d.sibling,p=d.return;if(ax(d),d===l){be=null;break}if(u!==null){u.return=p,be=u;break}be=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,be=h;break e}be=s.return}}var g=t.current;for(be=g;be!==null;){a=be;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,be=S;else e:for(a=g;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:pc(9,o)}}catch(b){At(o,o.return,b)}if(o===a){be=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,be=M;break e}be=o.return}}if(nt=r,Cr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(ac,t)}catch{}i=!0}return i}finally{ct=n,Xn.transition=e}}return!1}function tm(t,e,n){e=js(n,e),e=Yg(t,e,1),t=xr(t,e,1),e=hn(),t!==null&&(io(t,1,e),Mn(t,e))}function At(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=js(n,t),t=Kg(e,t,1),e=xr(e,t,1),t=hn(),e!==null&&(io(e,1,t),Mn(e,t));break}}e=e.return}}function oS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(Jt&n)===n&&(Ot===4||Ot===3&&(Jt&130023424)===Jt&&500>Rt()-oh?Vr(t,0):ah|=n),Mn(t,e)}function gx(t,e){e===0&&(t.mode&1?(e=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):e=1);var n=hn();t=Vi(t,e),t!==null&&(io(t,e,n),Mn(t,n))}function lS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gx(t,n)}function cS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),gx(t,n)}var xx;xx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,Ky(t,e,n);vn=!!(t.flags&131072)}else vn=!1,_t&&e.flags&1048576&&Sg(e,Ul,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fl(t,e),t=e.pendingProps;var r=Gs(e,cn.current);Us(e,n),r=eh(null,e,i,t,r,n);var s=th();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yf(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,gd(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Hf(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dS(i),t=ei(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=jp(null,e,i,t,n);break e;case 11:e=Vp(null,e,i,t,n);break e;case 14:e=Wp(null,e,i,ei(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),jp(t,e,i,r,n);case 3:e:{if(ex(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tg(t,e),kl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ce(423)),e),e=Xp(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ce(424)),e),e=Xp(t,e,i,n,r);break e}else for(Rn=gr(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,ni=null,n=bg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Wi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return Cg(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ld(i,r)?a=null:s!==null&&ld(i,s)&&(e.flags|=32),Qg(t,e),fn(t,e,a,n),e.child;case 6:return t===null&&hd(e),null;case 13:return tx(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Vp(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ft(Ol,i._currentValue),i._currentValue=a,s!==null)if(li(s.value,a)){if(s.children===r.children&&!yn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ui(-1,n&-n),c.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var d=l.pending;d===null?c.next=c:(c.next=d.next,d.next=c),l.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),pd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),pd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,n),r=$n(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Wp(t,e,i,r,n);case 15:return Zg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),fl(t,e),e.tag=1,Sn(i)?(t=!0,Il(e)):t=!1,Us(e,n),qg(e,i,r),gd(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return nx(t,e,n);case 22:return Jg(t,e,n)}throw Error(ce(156,e.tag))};function vx(t,e){return j0(t,e)}function uS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new uS(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dS(t){if(typeof t=="function")return dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ml(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")dh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ys:return Wr(n.children,r,s,e);case Rf:a=8,r|=8;break;case zu:return t=jn(12,n,e,r|2),t.elementType=zu,t.lanes=s,t;case Gu:return t=jn(13,n,e,r),t.elementType=Gu,t.lanes=s,t;case Hu:return t=jn(19,n,e,r),t.elementType=Hu,t.lanes=s,t;case C0:return gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A0:a=10;break e;case T0:a=9;break e;case Pf:a=11;break e;case Lf:a=14;break e;case tr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=jn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Wr(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function gc(t,e,n,i){return t=jn(22,t,i,e),t.elementType=C0,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fh(t,e,n,i,r,s,a,o,c){return t=new fS(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(s),t}function hS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _x(t){if(!t)return Er;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Sn(n))return _g(t,n,e)}return e}function yx(t,e,n,i,r,s,a,o,c){return t=fh(n,i,!0,t,r,s,a,o,c),t.context=_x(null),n=t.current,i=hn(),r=_r(n),s=Ui(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,io(t,r,i),Mn(t,i),t}function xc(t,e,n,i){var r=e.current,s=hn(),a=_r(r);return n=_x(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,a),t!==null&&(oi(t,r,a,s),cl(t,r,a)),a}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hh(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function pS(){return null}var Sx=typeof reportError=="function"?reportError:function(t){console.error(t)};function ph(t){this._internalRoot=t}vc.prototype.render=ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));xc(t,e,null,null)};vc.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){xc(null,t,null,null)}),e[Hi]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=J0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&eg(t)}};function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function mS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var l=$l(a);s.call(l)}}var a=yx(e,i,t,0,null,!1,!1,"",im);return t._reactRootContainer=a,t[Hi]=a.current,Ga(t.nodeType===8?t.parentNode:t),Zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var l=$l(c);o.call(l)}}var c=fh(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=c,t[Hi]=c.current,Ga(t.nodeType===8?t.parentNode:t),Zr(function(){xc(e,c,n,i)}),c}function yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=$l(a);o.call(c)}}xc(e,a,t,r)}else a=mS(n,e,t,r,i);return $l(a)}K0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&(If(e,n|1),Mn(e,Rt()),!(nt&6)&&(Xs=Rt()+500,Cr()))}break;case 13:Zr(function(){var i=Vi(t,1);if(i!==null){var r=hn();oi(i,t,1,r)}}),hh(t,1)}};Ff=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=hn();oi(e,t,134217728,n)}hh(t,134217728)}};Z0=function(t){if(t.tag===13){var e=_r(t),n=Vi(t,e);if(n!==null){var i=hn();oi(n,t,e,i)}hh(t,e)}};J0=function(){return ct};Q0=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};Ju=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uc(i);if(!r)throw Error(ce(90));P0(i),ju(i,r)}}}break;case"textarea":N0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};k0=lh;z0=Zr;var gS={usingClientEntryPoint:!1,Events:[so,ws,uc,O0,B0,lh]},ua={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xS={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V0(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{ac=Po.inject(xS),_i=Po}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(e))throw Error(ce(200));return hS(t,e,null,n)};Nn.createRoot=function(t,e){if(!mh(t))throw Error(ce(299));var n=!1,i="",r=Sx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fh(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,Ga(t.nodeType===8?t.parentNode:t),new ph(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=V0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Zr(t)};Nn.hydrate=function(t,e,n){if(!_c(e))throw Error(ce(200));return yc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!mh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Sx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=yx(e,null,t,1,n??null,r,!1,s,a),t[Hi]=e.current,Ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vc(e)};Nn.render=function(t,e,n){if(!_c(e))throw Error(ce(200));return yc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!_c(t))throw Error(ce(40));return t._reactRootContainer?(Zr(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Nn.unstable_batchedUpdates=lh;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_c(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return yc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function Mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mx)}catch(t){console.error(t)}}Mx(),M0.exports=Nn;var vS=M0.exports,Ex,rm=vS;Ex=rm.createRoot,rm.hydrateRoot;const wx={id:"",name:"Ejercicio 1",workDurationSeconds:45,roundCount:3,restBetweenRoundsSeconds:20,restAfterExerciseSeconds:60};function sm(){return{format:"wkt",version:1,category:"Fitness",sport:"Fitness",routines:[{name:"",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{...wx,id:"ex-"+Date.now()}]}]}}const _S=[{id:"tabata-clasico",badgeIcon:"⚡",workout:{format:"wkt",version:1,category:"Tabata",sport:"HIIT",routines:[{name:"Tabata Clásico (20/10)",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-tab-1",name:"Flexiones",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:15,mediaRef:"preset:pushups"},{id:"ex-tab-2",name:"Sentadillas",workDurationSeconds:20,roundCount:4,restBetweenRoundsSeconds:10,restAfterExerciseSeconds:0,mediaRef:"preset:squats"}]}]}},{id:"rondas-boxeo",badgeIcon:"🥊",workout:{format:"wkt",version:1,category:"Combate",sport:"Boxeo",routines:[{name:"Rondas de Boxeo",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-box-1",name:"Sombra de Boxeo",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:60,mediaRef:"preset:shadow_boxing"},{id:"ex-box-2",name:"Saco Pesado",workDurationSeconds:180,roundCount:2,restBetweenRoundsSeconds:60,restAfterExerciseSeconds:0,mediaRef:"preset:heavy_bag"}]}]}},{id:"hiit-full-body",badgeIcon:"🔥",workout:{format:"wkt",version:1,category:"Cardio / HIIT",sport:"Fitness",routines:[{name:"HIIT Full Body",author:"",routineCycles:1,restBetweenRoutinesSeconds:0,prepareDurationSeconds:10,exercises:[{id:"ex-hiit-1",name:"Burpees",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:burpees"},{id:"ex-hiit-2",name:"Zancadas",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:30,mediaRef:"preset:lunges"},{id:"ex-hiit-3",name:"Plancha Isométrica",workDurationSeconds:30,roundCount:3,restBetweenRoundsSeconds:15,restAfterExerciseSeconds:0,mediaRef:"preset:plank"}]}]}}],bx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";function yS(t){return t===null||t===""?"":ES(t,6,n=>bx.charAt(n))}function SS(t){return t===null||t===""?null:(t=t.replace(/ /g,"+"),wS(t.length,32,e=>MS(bx,t.charAt(e))))}function MS(t,e){return t.indexOf(e)}function ES(t,e,n){let i,r;const s={},a={};let o="",c="",l="",d=2,f=3,u=2,p="",m=0,v=0;for(let x=0;x<t.length;x+=1)if(o=t.charAt(x),Object.prototype.hasOwnProperty.call(s,o)||(s[o]=f++,a[o]=!0),c=l+o,Object.prototype.hasOwnProperty.call(s,c))l=c;else{if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(i=0;i<u;i++)m=m<<1,v===e-1?(v=0,p+=n(m),m=0):v++;for(r=l.charCodeAt(0),i=0;i<8;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}else{for(r=1,i=0;i<u;i++)m=m<<1|r,v===e-1?(v=0,p+=n(m),m=0):v++,r=0;for(r=l.charCodeAt(0),i=0;i<16;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}d--,d===0&&(d=Math.pow(2,u),u++),delete a[l]}else for(r=s[l],i=0;i<u;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1;d--,d===0&&(d=Math.pow(2,u),u++),s[c]=f++,l=String(o)}if(l!==""){if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(i=0;i<u;i++)m=m<<1,v===e-1?(v=0,p+=n(m),m=0):v++;for(r=l.charCodeAt(0),i=0;i<8;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}else{for(r=1,i=0;i<u;i++)m=m<<1|r,v===e-1?(v=0,p+=n(m),m=0):v++,r=0;for(r=l.charCodeAt(0),i=0;i<16;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1}d--,d===0&&(d=Math.pow(2,u),u++),delete a[l]}else for(r=s[l],i=0;i<u;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1;d--,d===0&&(d=Math.pow(2,u),u++)}for(r=2,i=0;i<u;i++)m=m<<1|r&1,v===e-1?(v=0,p+=n(m),m=0):v++,r=r>>1;for(;;)if(m=m<<1,v===e-1){p+=n(m);break}else v++;return p}function wS(t,e,n){const i=[];let r=4,s=4,a=3,o="";const c=[];let l,d=0,f=0,u=Math.pow(2,2),p=1,m="";const v={val:n(0),position:e,index:1};for(let x=0;x<3;x+=1)i[x]=String(x);for(;p!==u;)f=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),d|=(f>0?1:0)*p,p<<=1;switch(d){case 0:for(d=0,u=Math.pow(2,8),p=1;p!==u;)f=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),d|=(f>0?1:0)*p,p<<=1;m=String.fromCharCode(d);break;case 1:for(d=0,u=Math.pow(2,16),p=1;p!==u;)f=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),d|=(f>0?1:0)*p,p<<=1;m=String.fromCharCode(d);break;case 2:return""}for(i[3]=m,l=m,c.push(m);;){if(v.index>t)return"";for(d=0,u=Math.pow(2,a),p=1;p!==u;)f=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),d|=(f>0?1:0)*p,p<<=1;let x;switch(x=d){case 0:for(d=0,u=Math.pow(2,8),p=1;p!==u;)f=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),d|=(f>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(d),x=s-1,r--;break;case 1:for(d=0,u=Math.pow(2,16),p=1;p!==u;)f=v.val&v.position,v.position>>=1,v.position===0&&(v.position=e,v.val=n(v.index++)),d|=(f>0?1:0)*p,p<<=1;i[s++]=String.fromCharCode(d),x=s-1,r--;break;case 2:return c.join("")}if(r===0&&(r=Math.pow(2,a),a++),i[x])o=i[x];else if(x===s)o=l+l.charAt(0);else return null;c.push(o),i[s++]=l+o.charAt(0),r--,l=o,r===0&&(r=Math.pow(2,a),a++)}}const ql="timer_custom_gifs_v1";function Ls(){try{const t=localStorage.getItem(ql);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e.filter(n=>!!n&&typeof n.id=="string"&&typeof n.label=="string"&&typeof n.mediaData=="string"&&n.mediaData.startsWith("data:image/")):[]}catch{return[]}}function Ld(t){var a,o;const e=t.label.trim()||"Ejercicio Personalizado",n=Ls(),i=n.findIndex(c=>c.label.toLowerCase()===e.toLowerCase()),r={id:i>=0?n[i].id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,label:e,category:((a=t.category)==null?void 0:a.trim())||"Personalizado",mediaData:t.mediaData,sourceQuery:((o=t.sourceQuery)==null?void 0:o.trim())||e,createdAt:Date.now()},s=i>=0?n.map((c,l)=>l===i?r:c):[r,...n].slice(0,30);try{localStorage.setItem(ql,JSON.stringify(s))}catch{try{localStorage.setItem(ql,JSON.stringify(s.slice(0,10)))}catch{}}return s}function bS(t){const e=Ls().filter(n=>n.id!==t);try{localStorage.setItem(ql,JSON.stringify(e))}catch{}return e}function AS(t){return t.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"")||"ejercicio_gif"}async function Ax(t,e){const n=AS(e),i=n.endsWith(".gif")?n:`${n}.gif`,r=window;if(typeof r.showSaveFilePicker=="function")try{const o=await r.showSaveFilePicker({suggestedName:i,types:[{description:"Animación GIF (.gif)",accept:{"image/gif":[".gif"]}}]}),c=await o.createWritable();return await c.write(t),await c.close(),o.name||i}catch(o){if((o==null?void 0:o.name)==="AbortError")return null}const s=URL.createObjectURL(t),a=document.createElement("a");return a.href=s,a.download=i,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(s),i}async function TS(t,e){const i=await(await fetch(t)).blob();return Ax(i,e)}const CS=[["jumping_jacks","Jumping Jacks","Cardio",!0],["burpees","Burpees","HIIT",!0],["pushups","Flexiones","Fuerza",!0],["squats","Sentadillas","Fuerza",!0],["lunges","Zancadas","Fuerza",!0],["plank","Plancha","Core",!0],["mountain_climbers","Escaladores","HIIT",!0],["high_knees","Rodillas Arriba","Cardio",!0],["crunches","Abdominales","Core",!0],["bicycle_crunches","Bicicleta Abd.","Core",!0],["russian_twists","Giros Rusos","Core",!0],["leg_raises","Elev. Piernas","Core",!0],["jumping_rope","Saltar Soga","Cardio",!0],["box_jumps","Saltos Cajón","HIIT",!0],["kettlebell_swing","Kettlebell Swing","Fuerza",!0],["dumbbell_curl","Curl Bíceps","Fuerza",!0],["shoulder_press","Press Hombros","Fuerza",!0],["tricep_dips","Fondos Tríceps","Fuerza",!0],["pullups","Dominadas","Fuerza",!0],["deadlift","Peso Muerto","Fuerza",!0],["bench_press","Press Banca","Fuerza",!0],["shadow_boxing","Sombra Boxeo","Boxeo",!0],["heavy_bag","Saco Boxeo","Boxeo",!0],["stretch_cool","Estiramiento","Movilidad",!0],["calf_raises","Elev. Talones","Fuerza",!1],["glute_bridge","Puente Glúteos","Fuerza",!1],["side_plank","Plancha Lateral","Core",!1],["superman","Superman","Core",!1],["wall_sit","Sentadilla Pared","Fuerza",!1],["sumo_squat","Sentadilla Sumo","Fuerza",!1],["bent_over_row","Remo Barra","Fuerza",!1],["lateral_raises","Elev. Laterales","Fuerza",!1],["tricep_kickback","Patada Tríceps","Fuerza",!1],["arnold_press","Press Arnold","Fuerza",!1],["front_kick","Patada Frontal","Boxeo",!1],["uppercut_hook","Uppercut y Gancho","Boxeo",!1],["skater_jumps","Saltos Patinador","Cardio",!1],["butt_kicks","Talones al Glúteo","Cardio",!1],["flutter_kicks","Patadas Tijera","Core",!1],["cat_cow","Gato - Vaca","Movilidad",!1]],ya=CS.map(([t,e,n,i])=>({key:t,label:e,category:n,mediaRef:`preset:${t}`,url:`./exercises/${t}.gif`,bundled:i}));function gh(t){if(!t)return;const e=t.startsWith("preset:")?t.slice(7):t;return ya.find(n=>n.key.toLowerCase()===e.toLowerCase())}function Tx(t){const e={...t},n=e.mediaRef||e.mediaId;if(delete e.mediaId,typeof e.mediaData=="string"&&e.mediaData.startsWith("data:image/")?e.mediaData=e.mediaData:delete e.mediaData,n&&typeof n=="string"){const i=gh(n);i?e.mediaRef=i.mediaRef:n.startsWith("preset:")?e.mediaRef=n:delete e.mediaRef}else delete e.mediaRef;return e}function xh(t){if(!t)return null;if(typeof t.mediaData=="string"&&t.mediaData.startsWith("data:image/"))return t.mediaData;const e=gh(t.mediaRef||t.mediaId);return e?e.url:null}function RS(t){if(!t||!t.includes("base64,"))return null;const e=t.slice(t.indexOf("base64,")+7);if(!e)return null;const n=e.endsWith("==")?2:e.endsWith("=")?1:0,i=Math.max(0,Math.floor(e.length*3/4)-n);return Math.max(1,Math.round(i/1024))}const PS="mytimerapp://import?data=";function Cx(t){if(!t||typeof t!="object")return!1;const e=t;if(e.format!=="wkt"||e.version!==1||!Array.isArray(e.routines)||e.routines.length===0)return!1;for(const n of e.routines)if(typeof n!="object"||!n||typeof n.name!="string"||!Array.isArray(n.exercises))return!1;return!0}function Rx(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>Tx(n))}))}}function LS(t){return{...t,routines:t.routines.map(e=>({...e,exercises:e.exercises.map(n=>{const i=Tx(n),{mediaData:r,mediaId:s,...a}=i;return(!a.mediaRef||!a.mediaRef.startsWith("preset:"))&&delete a.mediaRef,a})}))}}function NS(t){const e=LS(t),n=JSON.stringify(e);return yS(n)}function DS(t){try{const e=SS(t);if(!e)return null;const n=JSON.parse(e);return Cx(n)?Rx(n):null}catch(e){return console.error("Failed to decode workout from URL:",e),null}}function Px(t){const e=NS(t);return`${PS}${e}`}function Sc(t){const e=Math.max(1,t.roundCount||1),n=Math.max(0,t.workDurationSeconds||0)*e,i=Math.max(0,t.restBetweenRoundsSeconds||0)*(e-1),r=Math.max(0,t.restAfterExerciseSeconds||0),s=i+r;return{totalSeconds:n+s,workSeconds:n,restSeconds:s}}function Ka(t){const e=Math.max(1,t.routineCycles||1),n=Math.max(0,t.prepareDurationSeconds||0),i=Math.max(0,t.restBetweenRoutinesSeconds||0)*Math.max(0,e-1);let r=0,s=0,a=0;for(const l of t.exercises){const d=Sc(l);r+=d.workSeconds,s+=d.restSeconds,a+=Math.max(1,l.roundCount||1)}const o=r*e,c=s*e+n+i;return{totalSeconds:o+c,tutSeconds:o,restSeconds:c,totalRounds:a*e,exerciseCount:t.exercises.length}}function Tt(t){const e=Math.max(0,Math.floor(t)),n=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60,s=i.toString().padStart(2,"0"),a=r.toString().padStart(2,"0");return n>0?`${n.toString().padStart(2,"0")}:${s}:${a}`:`${s}:${a}`}function IS(t){const e=Math.max(0,Math.floor(t)),n=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60;return n>0&&i>0&&r>0?`${n}h ${i}m ${r}s`:n>0&&i>0?`${n}h ${i}m`:n>0&&r>0?`${n}h ${r}s`:n>0?`${n}h`:i>0&&r>0?`${i}m ${r}s`:i>0?`${i}m`:`${r}s`}const am=6,Lo=1080;function FS(t){return t?new Promise(e=>{const n=new Image;n.crossOrigin="anonymous";const i=setTimeout(()=>e(null),2e3);n.onload=()=>{clearTimeout(i),e(n)},n.onerror=()=>{clearTimeout(i),e(null)},n.src=t}):Promise.resolve(null)}function Gn(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function iu(t,e,n){if(t.measureText(e).width<=n)return e;let i=e;for(;i.length>0&&t.measureText(`${i}...`).width>n;)i=i.slice(0,-1);return`${i}...`}function No(t,e,n,i,r,s,a){t.font="bold 22px system-ui, -apple-system, sans-serif";const c=t.measureText(e).width+32;return Gn(t,n,i,c,44,22),t.fillStyle=r,t.fill(),t.lineWidth=2,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+16,i+30),n+c}function Do(t,e,n,i,r,s,a){t.font="bold 19px ui-monospace, SFMono-Regular, monospace";const c=t.measureText(e).width+22;return Gn(t,n,i,c,36,8),t.fillStyle=r,t.fill(),t.lineWidth=1.5,t.strokeStyle=s,t.stroke(),t.fillStyle=a,t.textAlign="left",t.fillText(e,n+11,i+25),n+c}async function Lx(t,e){const n=t.routines[0];if(!n)return null;const i=n.exercises.slice(0,am),r=await Promise.all(i.map(R=>FS(xh(R)))),s=Math.max(0,n.exercises.length-am),a=!!(n.author&&n.author.trim());let o=610;a&&(o+=42),o+=i.length*136,s>0&&(o+=84),o+=86;const c=document.createElement("canvas");c.width=Lo,c.height=Math.round(o);const l=c.getContext("2d");if(!l)return null;l.fillStyle="#020617",l.fillRect(0,0,c.width,c.height);const d=32,f=d,u=d,p=Lo-d*2,m=o-d*2,v=l.createLinearGradient(0,u,0,u+m);v.addColorStop(0,"#0f172a"),v.addColorStop(1,"#020617"),Gn(l,f,u,p,m,48),l.fillStyle=v,l.fill(),l.lineWidth=3,l.strokeStyle="rgba(16, 185, 129, 0.35)",l.stroke();const x=d+44,h=Lo-d-44;let g=d+48,S=x;S=No(l,e.previewBadge||"✨ Rutina Compartida",S,g,"rgba(16, 185, 129, 0.15)","rgba(16, 185, 129, 0.35)","#34d399")+14,t.category&&(S=No(l,`🏷️ ${t.category}`,S,g,"#1e293b","#334155","#cbd5e1")+14),t.sport&&(S=No(l,`🏅 ${t.sport}`,S,g,"#1e293b","#334155","#67e8f9")+14),n.routineCycles>1&&No(l,`🔄 ${n.routineCycles}x ${e.cycles||e.cyclesLabel||"Ciclos"}`,S,g,"rgba(6, 182, 212, 0.2)","rgba(6, 182, 212, 0.35)","#67e8f9"),g+=86,l.font="900 54px system-ui, -apple-system, sans-serif",l.fillStyle="#ffffff",l.textAlign="left";const M=iu(l,n.name||"Rutina",h-x);if(l.fillText(M,x,g),a){g+=42,l.font="600 26px system-ui, -apple-system, sans-serif",l.fillStyle="#94a3b8";const R=`👤 ${e.sharedBy||"Compartida por"}: ${n.author}`;l.fillText(iu(l,R,h-x),x,g)}g+=40;const b=Ka(n),T=18,_=(h-x-T*3)/4,E=130;[{label:(e.totalTime||"TIEMPO TOTAL").toUpperCase(),value:Tt(b.totalSeconds),bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#ffffff"},{label:(e.tut||"TRABAJO (TUT)").toUpperCase(),value:Tt(b.tutSeconds),bg:"rgba(15, 77, 42, 0.45)",border:"rgba(16, 185, 129, 0.4)",labelColor:"#6ee7b7",valColor:"#34d399"},{label:(e.rest||"DESCANSO").toUpperCase(),value:Tt(b.restSeconds),bg:"rgba(122, 13, 30, 0.45)",border:"rgba(244, 63, 94, 0.4)",labelColor:"#fda4af",valColor:"#fb7185"},{label:(e.totalRounds||"RONDAS TOTALES").toUpperCase(),value:`${b.totalRounds} (${b.exerciseCount})`,bg:"rgba(2, 6, 23, 0.9)",border:"#1e293b",labelColor:"#94a3b8",valColor:"#22d3ee"}].forEach((R,C)=>{const D=x+(_+T)*C;Gn(l,D,g,_,E,28),l.fillStyle=R.bg,l.fill(),l.lineWidth=2.5,l.strokeStyle=R.border,l.stroke(),l.font="bold 18px system-ui, -apple-system, sans-serif",l.fillStyle=R.labelColor,l.textAlign="center",l.fillText(R.label,D+_/2,g+44),l.font="900 36px ui-monospace, SFMono-Regular, monospace",l.fillStyle=R.valColor,l.fillText(R.value,D+_/2,g+96)}),g+=E+36;const P=b.totalSeconds>0?Math.round(b.tutSeconds/b.totalSeconds*100):50,I=Math.max(0,100-P);l.font="bold 23px system-ui, -apple-system, sans-serif",l.fillStyle="#94a3b8",l.textAlign="left",l.fillText(e.workVsRestRatio||"Distribución Trabajo vs Descanso",x,g),l.fillStyle="#34d399",l.textAlign="right",l.fillText(`${P}% / ${I}%`,h,g),g+=16;const z=18;if(Gn(l,x,g,h-x,z,9),l.fillStyle="#f43f5e",l.fill(),P>0){const R=Math.max(18,(h-x)*(P/100));Gn(l,x,g,R,z,9),l.fillStyle="#10b981",l.fill()}if(g+=z+44,l.font="800 25px system-ui, -apple-system, sans-serif",l.fillStyle="#cbd5e1",l.textAlign="left",l.fillText(`${(e.exercisesList||"LISTA DE EJERCICIOS").toUpperCase()} (${n.exercises.length})`,x,g),n.prepareDurationSeconds>0){const R=`⏱️ ${e.prepareBadge||"Preparación"}: ${Tt(n.prepareDurationSeconds)}`;l.font="bold 22px ui-monospace, SFMono-Regular, monospace";const C=l.measureText(R).width+28,D=h-C;Gn(l,D,g-30,C,40,12),l.fillStyle="rgba(94, 58, 0, 0.55)",l.fill(),l.lineWidth=2,l.strokeStyle="rgba(245, 158, 11, 0.45)",l.stroke(),l.fillStyle="#fcd34d",l.textAlign="left",l.fillText(R,D+14,g-3)}if(g+=26,i.forEach((R,C)=>{Gn(l,x,g,h-x,120,26),l.fillStyle="rgba(2, 6, 23, 0.82)",l.fill(),l.lineWidth=2,l.strokeStyle="#1e293b",l.stroke();const G=x+22,k=g+34;Gn(l,G,k,52,52,14),l.fillStyle="rgba(16, 185, 129, 0.15)",l.fill(),l.lineWidth=2,l.strokeStyle="rgba(16, 185, 129, 0.35)",l.stroke(),l.font="900 24px system-ui, -apple-system, sans-serif",l.fillStyle="#34d399",l.textAlign="center",l.fillText(String(C+1),G+26,k+35);const B=r[C];let F=x+94;if(B){const Y=x+88,ae=g+20,U=80;l.save(),Gn(l,Y,ae,U,U,18),l.fillStyle="#101827",l.fill(),l.clip(),l.drawImage(B,Y,ae,U,U),l.restore(),Gn(l,Y,ae,U,U,18),l.lineWidth=2,l.strokeStyle="#334155",l.stroke(),F=x+186}l.font="bold 28px system-ui, -apple-system, sans-serif",l.fillStyle="#f1f5f9",l.textAlign="left";const W=h-F-195;l.fillText(iu(l,R.name||`Ejercicio ${C+1}`,W),F,g+48);let K=F;const oe=g+64;K=Do(l,`🔄 ${R.roundCount} ${e.rounds||"Rondas"}`,K,oe,"#1e293b","#334155","#67e8f9")+10,K=Do(l,`⚡ ${Tt(R.workDurationSeconds)}`,K,oe,"rgba(15, 77, 42, 0.65)","rgba(16, 185, 129, 0.45)","#6ee7b7")+10,R.restBetweenRoundsSeconds>0&&(K=Do(l,`💨 ${Tt(R.restBetweenRoundsSeconds)}`,K,oe,"rgba(122, 13, 30, 0.65)","rgba(244, 63, 94, 0.45)","#fda4af")+10),R.restAfterExerciseSeconds>0&&Do(l,`🛑 ${Tt(R.restAfterExerciseSeconds)}`,K,oe,"rgba(94, 58, 0, 0.65)","rgba(245, 158, 11, 0.45)","#fcd34d");const Te=Sc(R);l.font="bold 16px system-ui, -apple-system, sans-serif",l.fillStyle="#64748b",l.textAlign="right",l.fillText((e.subtotal||"SUBTOTAL").replace(":","").toUpperCase(),h-24,g+48),l.font="bold 26px ui-monospace, SFMono-Regular, monospace",l.fillStyle="#e2e8f0",l.fillText(Tt(Te.totalSeconds),h-24,g+84),g+=136}),s>0){Gn(l,x,g,h-x,68,20),l.fillStyle="#1e293b",l.fill(),l.lineWidth=2,l.strokeStyle="#334155",l.stroke(),l.font="bold 24px system-ui, -apple-system, sans-serif",l.fillStyle="#34d399",l.textAlign="center";const R=s===1?"+1 ejercicio más en la rutina completa...":`+${s} ejercicios más en la rutina completa...`;l.fillText(R,(x+h)/2,g+42),g+=84}return l.font="21px system-ui, -apple-system, sans-serif",l.fillStyle="#64748b",l.textAlign="center",l.fillText("Timer Routine Studio • Abre el archivo .wkt adjunto en la App o en alvarpereira-dot.github.io",Lo/2,g+26),new Promise(R=>{c.toBlob(C=>R(C),"image/png",1)})}const ru=[{tag:"SYSTEM",displayName:"Idioma del Sistema",flagEmoji:"🌐",localeName:"Default System Language"},{tag:"es-ES",displayName:"Español (España)",flagEmoji:"🇪🇸",localeName:"Castellano"},{tag:"es-MX",displayName:"Español (Latinoamérica)",flagEmoji:"🇲🇽",localeName:"Español Latino"},{tag:"en-US",displayName:"English (United States)",flagEmoji:"🇺🇸",localeName:"English"},{tag:"pt-BR",displayName:"Português (Brasil)",flagEmoji:"🇧🇷",localeName:"Português"},{tag:"fr-FR",displayName:"Français (France)",flagEmoji:"🇫🇷",localeName:"Français"},{tag:"de-DE",displayName:"Deutsch (Deutschland)",flagEmoji:"🇩🇪",localeName:"Deutsch"},{tag:"it-IT",displayName:"Italiano (Italia)",flagEmoji:"🇮🇹",localeName:"Italiano"}],Oi={es:{appTitle:"Timer Routine Studio",subtitle:"Archivos .wkt",currentFile:"Archivo actual",openLocal:"📂 Abrir (.wkt)",save:"💾 Guardar",saveAs:"📑 Guardar como...",shareWhatsApp:"Compartir WhatsApp",openInApp:"📲 Abrir en App",validationAlertTitle:"⚠️ La rutina contiene observaciones que debes corregir:",routineName:"Nombre de la Rutina",author:"Autor / Entrenador",category:"Categoría",sport:"Deporte",cycles:"Ciclos Globales",prepare:"Preparación (seg / max 24h)",prepareShort:"Preparación (seg)",totalTime:"Tiempo Total",tut:"Trabajo (TUT)",rest:"Descanso",totalRounds:"Rondas Totales",exercisesRoundsLabel:"Ejercicios / Rondas",exercisesList:"Lista de Ejercicios",exercisesHeading:"Ejercicios",addExercise:"+ Agregar Ejercicio",addAnotherExercise:"+ Agregar otro ejercicio",rounds:"Rondas",work:"Trabajo (seg)",restBetween:"Pausa Rondas (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal ejercicio:",estimatedDuration:"Duración estimada del ejercicio:",savedIn:"Guardado en",savedAs:"Guardado como",systemLanguage:"Idioma del Sistema",systemLanguageDesc:"Predeterminado del sistema",languageLabel:"Idioma",shareMessageIntro:"🔥 ¡Mira mi rutina en el temporizador!",clipboardNotice:"📋 Archivo .wkt descargado. Redirigiendo a WhatsApp...",openingApp:"🚀 Enviando rutina a la App móvil...",errNameEmpty:"El nombre del ejercicio no puede estar vacío.",errNameDuplicate:"El nombre está repetido en la rutina.",errWorkMin:"El tiempo de trabajo debe ser mayor a 0 seg.",errMaxTime:"El tiempo no puede superar 1440 min (24 horas).",errRoutineEmpty:"La rutina debe tener al menos un ejercicio.",errRoutineNameEmpty:"El nombre de la rutina no puede estar vacío.",previewBadge:"✨ Rutina Compartida",previewModeBtn:"👁️ Vista Previa",editRoutineBtn:"✏️ Editar / Personalizar en Web",downloadWktBtn:"📥 Descargar (.wkt)",sharedBy:"Compartida por",workVsRestRatio:"Distribución Trabajo vs Descanso",prepareBadge:"Preparación inicial",noRest:"Sin pausa",downloadApkBtn:"Descargar App Android (.apk)",welcomeDesc:"Diseña, personaliza y comparte tus rutinas de entrenamiento cronometradas (.wkt)",newRoutineBtn:"+ Nueva Rutina",openWktBtn:"Abrir archivo .wkt",examplesTitle:"⚡ O explora una rutina de ejemplo:",exercisesWord:"ejercicios",homeBtn:"🏠 Inicio",sharedBanner:"✨ Rutina cargada desde enlace compartido.",invalidWktErr:"El archivo seleccionado no tiene un formato .wkt válido.",readWktErr:"No se pudo leer el archivo .wkt seleccionado.",openFileBtn:"Abrir Archivo",saveLocalBtn:"Guardar Local",exerciseDefaultName:"Ejercicio",minOneExerciseAlert:"La rutina debe tener al menos un ejercicio.",changeGifTitle:"Cambiar GIF o imagen del ejercicio",addGifTitle:"Agregar GIF o imagen",removeGifTitle:"Quitar GIF / imagen",moveUpTitle:"Mover arriba",moveDownTitle:"Mover abajo",duplicateTitle:"Duplicar",deleteTitle:"Eliminar",exerciseNamePlaceholder:"Nombre del ejercicio",mediaModalTitle:"Animación o imagen del ejercicio",mediaModalDesc:"Elige del catálogo, sube un archivo o crea un GIF 3D a medida",tabCatalog:"Catálogo",tabUploadShort:"Subir",tabCreator3d:"🎨 Crear GIF 3D (cualquier ejercicio)",uploadOwnGifBtn:"📤 Subir GIF o imagen propia (se comprime auto.)",optimizingGifBtn:"⏳ Optimizando GIF / imagen (220×220)...",integratedCatalog:"Catálogo integrado",clearCurrent:"Quitar actual",searchExercisePlaceholder:"Buscar ejercicio (ej. burpees, boxeo, plancha)...",noPresetFound:"No hay ningún preset llamado",inPresetsWord:"en los",presetsWord:"predefinidos.",createIn3dBtn:"Crear en el Creador 3D",describeExerciseLabel:"✨ Describe cualquier ejercicio",describePlaceholder:"Ej. Bicho muerto alternado, puente a una pierna...",generatePoseBtn:"Generar pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Postura base",propLabel:"Equipo / Accesorio",cameraLabel:"Cámara",speedLabel:"Velocidad",editingPoseLabel:"Editando Pose",startWord:"(Inicio)",endWord:"(Fin)",copyAToB:"Copiar A → B",torsoHeightTab:"Torso y Altura",armsTab:"Brazos",legsTab:"Piernas",symmetricArmsLabel:"Mover ambos brazos iguales (simétrico)",symmetricLegsLabel:"Mover ambas piernas iguales (simétrico)",createApplyGifBtn:"🎨 Crear y aplicar GIF al ejercicio",creatingGifBtn:"⏳ Generando GIF...",downloadGifBtn:"💾 Descargar .gif"},en:{appTitle:"Timer Routine Studio",subtitle:".wkt files",currentFile:"Current file",openLocal:"📂 Open (.wkt)",save:"💾 Save",saveAs:"📑 Save as...",shareWhatsApp:"Share via WhatsApp",openInApp:"📲 Open in App",validationAlertTitle:"⚠️ Routine contains issues that must be fixed:",routineName:"Routine Name",author:"Author / Coach",category:"Category",sport:"Sport",cycles:"Global Cycles",prepare:"Preparation (sec / max 24h)",prepareShort:"Preparation (sec)",totalTime:"Total Time",tut:"Work (TUT)",rest:"Rest",totalRounds:"Total Rounds",exercisesRoundsLabel:"Exercises / Rounds",exercisesList:"Exercises List",exercisesHeading:"Exercises",addExercise:"+ Add Exercise",addAnotherExercise:"+ Add another exercise",rounds:"Rounds",work:"Work (sec)",restBetween:"Round Rest (sec)",restAfter:"Final Rest (sec)",subtotal:"Exercise subtotal:",estimatedDuration:"Estimated exercise duration:",savedIn:"Saved to",savedAs:"Saved as",systemLanguage:"System Language",systemLanguageDesc:"Default system language",languageLabel:"Language",shareMessageIntro:"🔥 Check out my workout routine on the timer!",clipboardNotice:"📋 .wkt file downloaded. Redirecting to WhatsApp...",openingApp:"🚀 Sending routine to mobile app...",errNameEmpty:"Exercise name cannot be empty.",errNameDuplicate:"Exercise name is duplicated in the routine.",errWorkMin:"Work duration must be greater than 0 sec.",errMaxTime:"Time cannot exceed 1440 min (24 hours).",errRoutineEmpty:"Routine must contain at least one exercise.",errRoutineNameEmpty:"Routine name cannot be empty.",previewBadge:"✨ Shared Routine",previewModeBtn:"👁️ Preview",editRoutineBtn:"✏️ Edit / Customize on Web",downloadWktBtn:"📥 Download (.wkt)",sharedBy:"Shared by",workVsRestRatio:"Work vs Rest Distribution",prepareBadge:"Initial preparation",noRest:"No rest",downloadApkBtn:"Download Android App (.apk)",welcomeDesc:"Design, customize, and share your timed workout routines (.wkt)",newRoutineBtn:"+ New Routine",openWktBtn:"Open .wkt file",examplesTitle:"⚡ Or explore a sample routine:",exercisesWord:"exercises",homeBtn:"🏠 Home",sharedBanner:"✨ Routine loaded from shared link.",invalidWktErr:"The selected file is not a valid .wkt format.",readWktErr:"Could not read the selected .wkt file.",openFileBtn:"Open File",saveLocalBtn:"Save Local",exerciseDefaultName:"Exercise",minOneExerciseAlert:"Routine must contain at least one exercise.",changeGifTitle:"Change exercise GIF or image",addGifTitle:"Add GIF or image",removeGifTitle:"Remove GIF / image",moveUpTitle:"Move up",moveDownTitle:"Move down",duplicateTitle:"Duplicate",deleteTitle:"Delete",exerciseNamePlaceholder:"Exercise name",mediaModalTitle:"Exercise animation or image",mediaModalDesc:"Pick from catalog, upload a file, or create a custom 3D GIF",tabCatalog:"Catalog",tabUploadShort:"Upload",tabCreator3d:"🎨 Create 3D GIF (any exercise)",uploadOwnGifBtn:"📤 Upload own GIF or image (auto-compressed)",optimizingGifBtn:"⏳ Optimizing GIF / image (220×220)...",integratedCatalog:"Built-in catalog",clearCurrent:"Remove current",searchExercisePlaceholder:"Search exercise (e.g. burpees, boxing, plank)...",noPresetFound:"No preset found for",inPresetsWord:"among the",presetsWord:"presets.",createIn3dBtn:"Create in 3D Creator",describeExerciseLabel:"✨ Describe any exercise",describePlaceholder:"E.g. Alternating dead bug, single-leg glute bridge...",generatePoseBtn:"Generate pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Base posture",propLabel:"Equipment / Prop",cameraLabel:"Camera",speedLabel:"Speed",editingPoseLabel:"Editing Pose",startWord:"(Start)",endWord:"(End)",copyAToB:"Copy A → B",torsoHeightTab:"Torso & Height",armsTab:"Arms",legsTab:"Legs",symmetricArmsLabel:"Move both arms symmetrically",symmetricLegsLabel:"Move both legs symmetrically",createApplyGifBtn:"🎨 Create & apply GIF to exercise",creatingGifBtn:"⏳ Generating GIF...",downloadGifBtn:"💾 Download .gif"},pt:{appTitle:"Timer Routine Studio",subtitle:"Arquivos .wkt",currentFile:"Arquivo atual",openLocal:"📂 Abrir (.wkt)",save:"💾 Salvar",saveAs:"📑 Salvar como...",shareWhatsApp:"Compartilhar WhatsApp",openInApp:"📲 Abrir no App",validationAlertTitle:"⚠️ A rotina contém itens que precisam ser corrigidos:",routineName:"Nome da Rotina",author:"Autor / Treinador",category:"Categoria",sport:"Esporte",cycles:"Ciclos Globais",prepare:"Preparação (seg / máx 24h)",prepareShort:"Preparação (seg)",totalTime:"Tempo Total",tut:"Trabalho (TUT)",rest:"Descanso",totalRounds:"Total de Séries",exercisesRoundsLabel:"Exercícios / Séries",exercisesList:"Lista de Exercícios",exercisesHeading:"Exercícios",addExercise:"+ Adicionar Exercício",addAnotherExercise:"+ Adicionar outro exercício",rounds:"Séries",work:"Trabalho (seg)",restBetween:"Pausa Séries (seg)",restAfter:"Pausa Final (seg)",subtotal:"Subtotal do exercício:",estimatedDuration:"Duração estimada do exercício:",savedIn:"Salvo em",savedAs:"Salvo como",systemLanguage:"Idioma do Sistema",systemLanguageDesc:"Padrão do sistema",languageLabel:"Idioma",shareMessageIntro:"🔥 Veja meu treino no cronômetro!",clipboardNotice:"📋 Arquivo .wkt baixado. Redirecionando para o WhatsApp...",openingApp:"🚀 Enviando rotina para o App móvel...",errNameEmpty:"O nome do exercício não pode ficar vazio.",errNameDuplicate:"O nome do exercício está duplicado na rotina.",errWorkMin:"O tempo de trabalho deve ser maior que 0 seg.",errMaxTime:"O tempo não pode ultrapassar 1440 min (24 horas).",errRoutineEmpty:"A rotina deve conter pelo menos um exercício.",errRoutineNameEmpty:"O nome da rotina não pode ficar vazio.",previewBadge:"✨ Rotina Compartilhada",previewModeBtn:"👁️ Pré-visualizar",editRoutineBtn:"✏️ Editar / Personalizar na Web",downloadWktBtn:"📥 Baixar (.wkt)",sharedBy:"Compartilhada por",workVsRestRatio:"Distribuição Trabalho vs Descanso",prepareBadge:"Preparação inicial",noRest:"Sem pausa",downloadApkBtn:"Baixar App Android (.apk)",welcomeDesc:"Crie, personalize e compartilhe seus treinos cronometrados (.wkt)",newRoutineBtn:"+ Nova Rotina",openWktBtn:"Abrir arquivo .wkt",examplesTitle:"⚡ Ou explore uma rotina de exemplo:",exercisesWord:"exercícios",homeBtn:"🏠 Início",sharedBanner:"✨ Rotina carregada de link compartilhado.",invalidWktErr:"O arquivo selecionado não tem um formato .wkt válido.",readWktErr:"Não foi possível ler o arquivo .wkt selecionado.",openFileBtn:"Abrir Arquivo",saveLocalBtn:"Salvar Local",exerciseDefaultName:"Exercício",minOneExerciseAlert:"A rotina deve conter pelo menos um exercício.",changeGifTitle:"Alterar GIF ou imagem do exercício",addGifTitle:"Adicionar GIF ou imagem",removeGifTitle:"Remover GIF / imagem",moveUpTitle:"Mover para cima",moveDownTitle:"Mover para baixo",duplicateTitle:"Duplicar",deleteTitle:"Excluir",exerciseNamePlaceholder:"Nome do exercício",mediaModalTitle:"Animação ou imagem do exercício",mediaModalDesc:"Escolha do catálogo, envie um arquivo ou crie um GIF 3D",tabCatalog:"Catálogo",tabUploadShort:"Enviar",tabCreator3d:"🎨 Criar GIF 3D (qualquer exercício)",uploadOwnGifBtn:"📤 Enviar GIF ou imagem própria (compactação auto.)",optimizingGifBtn:"⏳ Otimizando GIF / imagem (220×220)...",integratedCatalog:"Catálogo integrado",clearCurrent:"Remover atual",searchExercisePlaceholder:"Buscar exercício (ex. burpees, boxe, prancha)...",noPresetFound:"Nenhum preset encontrado para",inPresetsWord:"nos",presetsWord:"predefinidos.",createIn3dBtn:"Criar no Criador 3D",describeExerciseLabel:"✨ Descreva qualquer exercício",describePlaceholder:"Ex. Dead bug alternado, elevação pélvica unilateral...",generatePoseBtn:"Gerar pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Postura base",propLabel:"Equipamento",cameraLabel:"Câmera",speedLabel:"Velocidade",editingPoseLabel:"Editando Pose",startWord:"(Início)",endWord:"(Fim)",copyAToB:"Copiar A → B",torsoHeightTab:"Tronco e Altura",armsTab:"Braços",legsTab:"Pernas",symmetricArmsLabel:"Mover ambos os braços iguais (simétrico)",symmetricLegsLabel:"Mover ambas as pernas iguais (simétrico)",createApplyGifBtn:"🎨 Criar e aplicar GIF ao exercício",creatingGifBtn:"⏳ Gerando GIF...",downloadGifBtn:"💾 Baixar .gif"},fr:{appTitle:"Timer Routine Studio",subtitle:"Fichiers .wkt",currentFile:"Fichier actuel",openLocal:"📂 Ouvrir (.wkt)",save:"💾 Enregistrer",saveAs:"📑 Enregistrer sous...",shareWhatsApp:"Partager WhatsApp",openInApp:"📲 Ouvrir dans l'App",validationAlertTitle:"⚠️ La routine contient des points à corriger :",routineName:"Nom de la Routine",author:"Auteur / Coach",category:"Catégorie",sport:"Sport",cycles:"Cycles Globaux",prepare:"Préparation (sec / max 24h)",prepareShort:"Préparation (sec)",totalTime:"Temps Total",tut:"Travail (TUT)",rest:"Repos",totalRounds:"Rounds Totaux",exercisesRoundsLabel:"Exercices / Rounds",exercisesList:"Liste des Exercices",exercisesHeading:"Exercices",addExercise:"+ Ajouter un Exercice",addAnotherExercise:"+ Ajouter un autre exercice",rounds:"Rounds",work:"Travail (sec)",restBetween:"Pause Rounds (sec)",restAfter:"Pause Finale (sec)",subtotal:"Sous-total exercice :",estimatedDuration:"Durée estimée de l'exercice :",savedIn:"Enregistré dans",savedAs:"Enregistré sous",systemLanguage:"Langue du système",systemLanguageDesc:"Langue par défaut",languageLabel:"Langue",shareMessageIntro:"🔥 Regarde ma séance sur le minuteur !",clipboardNotice:"📋 Fichier .wkt téléchargé. Redirection vers WhatsApp...",openingApp:"🚀 Envoi de la routine à l'application mobile...",errNameEmpty:"Le nom de l'exercice ne peut pas être vide.",errNameDuplicate:"Le nom de l'exercice est dupliqué dans la routine.",errWorkMin:"Le temps de travail doit être supérieur à 0 sec.",errMaxTime:"Le temps ne peut pas dépasser 1440 min (24 heures).",errRoutineEmpty:"La routine doit contenir au moins un exercice.",errRoutineNameEmpty:"Le nom de la routine ne peut pas être vide.",previewBadge:"✨ Routine Partagée",previewModeBtn:"👁️ Aperçu",editRoutineBtn:"✏️ Modifier / Personnaliser sur le Web",downloadWktBtn:"📥 Télécharger (.wkt)",sharedBy:"Partagée par",workVsRestRatio:"Répartition Travail vs Repos",prepareBadge:"Préparation initiale",noRest:"Sans pause",downloadApkBtn:"Télécharger l'App Android (.apk)",welcomeDesc:"Créez, personnalisez et partagez vos routines chronométrées (.wkt)",newRoutineBtn:"+ Nouvelle Routine",openWktBtn:"Ouvrir fichier .wkt",examplesTitle:"⚡ Ou explorez un exemple de routine :",exercisesWord:"exercices",homeBtn:"🏠 Accueil",sharedBanner:"✨ Routine chargée depuis un lien partagé.",invalidWktErr:"Le fichier sélectionné n'a pas un format .wkt valide.",readWktErr:"Impossible de lire le fichier .wkt sélectionné.",openFileBtn:"Ouvrir Fichier",saveLocalBtn:"Enregistrer",exerciseDefaultName:"Exercice",minOneExerciseAlert:"La routine doit contenir au moins un exercice.",changeGifTitle:"Changer le GIF ou l'image",addGifTitle:"Ajouter un GIF ou une image",removeGifTitle:"Retirer GIF / image",moveUpTitle:"Monter",moveDownTitle:"Descendre",duplicateTitle:"Dupliquer",deleteTitle:"Supprimer",exerciseNamePlaceholder:"Nom de l'exercice",mediaModalTitle:"Animation ou image de l'exercice",mediaModalDesc:"Choisissez du catalogue, importez ou créez un GIF 3D",tabCatalog:"Catalogue",tabUploadShort:"Importer",tabCreator3d:"🎨 Créer GIF 3D (tout exercice)",uploadOwnGifBtn:"📤 Importer votre GIF/image (compressé auto.)",optimizingGifBtn:"⏳ Optimisation GIF / image (220×220)...",integratedCatalog:"Catalogue intégré",clearCurrent:"Retirer actuel",searchExercisePlaceholder:"Rechercher (ex. burpees, boxe, planche)...",noPresetFound:"Aucun préréglage trouvé pour",inPresetsWord:"parmi les",presetsWord:"prédéfinis.",createIn3dBtn:"Créer dans l'Éditeur 3D",describeExerciseLabel:"✨ Décrivez n'importe quel exercice",describePlaceholder:"Ex. Dead bug alterné, pont fessier à une jambe...",generatePoseBtn:"Générer pose",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Posture de base",propLabel:"Équipement",cameraLabel:"Caméra",speedLabel:"Vitesse",editingPoseLabel:"Édition Pose",startWord:"(Début)",endWord:"(Fin)",copyAToB:"Copier A → B",torsoHeightTab:"Torse & Hauteur",armsTab:"Bras",legsTab:"Jambes",symmetricArmsLabel:"Bouger les deux bras ensemble",symmetricLegsLabel:"Bouger les deux jambes ensemble",createApplyGifBtn:"🎨 Créer et appliquer le GIF",creatingGifBtn:"⏳ Génération du GIF...",downloadGifBtn:"💾 Télécharger .gif"},de:{appTitle:"Timer Routine Studio",subtitle:".wkt-Dateien",currentFile:"Aktuelle Datei",openLocal:"📂 Öffnen (.wkt)",save:"💾 Speichern",saveAs:"📑 Speichern unter...",shareWhatsApp:"Über WhatsApp teilen",openInApp:"📲 In App öffnen",validationAlertTitle:"⚠️ Die Routine enthält Fehler, die behoben werden müssen:",routineName:"Name der Routine",author:"Autor / Trainer",category:"Kategorie",sport:"Sportart",cycles:"Globale Zyklen",prepare:"Vorbereitung (Sek / max 24h)",prepareShort:"Vorbereitung (Sek)",totalTime:"Gesamtzeit",tut:"Arbeit (TUT)",rest:"Pause",totalRounds:"Gesamtrunden",exercisesRoundsLabel:"Übungen / Runden",exercisesList:"Übungsliste",exercisesHeading:"Übungen",addExercise:"+ Übung hinzufügen",addAnotherExercise:"+ Weitere Übung hinzufügen",rounds:"Runden",work:"Arbeit (Sek)",restBetween:"Rundenpause (Sek)",restAfter:"Abschlusspause (Sek)",subtotal:"Zwischensumme Übung:",estimatedDuration:"Geschätzte Übungsdauer:",savedIn:"Gespeichert in",savedAs:"Gespeichert als",systemLanguage:"Systemsprache",systemLanguageDesc:"Standardsprache des Systems",languageLabel:"Sprache",shareMessageIntro:"🔥 Schau dir meine Trainingsroutine auf dem Timer an!",clipboardNotice:"📋 .wkt-Datei heruntergeladen. Weiterleitung zu WhatsApp...",openingApp:"🚀 Routine an mobile App senden...",errNameEmpty:"Übungsname darf nicht leer sein.",errNameDuplicate:"Übungsname ist in der Routine doppelt vorhanden.",errWorkMin:"Die Arbeitszeit muss größer als 0 Sek sein.",errMaxTime:"Die Zeit darf 1440 Min (24 Stunden) nicht überschreiten.",errRoutineEmpty:"Die Routine muss mindestens eine Übung enthalten.",errRoutineNameEmpty:"Der Name der Routine darf nicht leer sein.",previewBadge:"✨ Geteilte Routine",previewModeBtn:"👁️ Vorschau",editRoutineBtn:"✏️ Im Web bearbeiten / anpassen",downloadWktBtn:"📥 Herunterladen (.wkt)",sharedBy:"Geteilt von",workVsRestRatio:"Verteilung Arbeit vs Pause",prepareBadge:"Vorbereitung",noRest:"Keine Pause",downloadApkBtn:"Android-App herunterladen (.apk)",welcomeDesc:"Erstelle, passe an und teile deine Timer-Trainingsroutinen (.wkt)",newRoutineBtn:"+ Neue Routine",openWktBtn:".wkt-Datei öffnen",examplesTitle:"⚡ Oder probiere eine Beispiel-Routine:",exercisesWord:"Übungen",homeBtn:"🏠 Start",sharedBanner:"✨ Routine über geteilten Link geladen.",invalidWktErr:"Die ausgewählte Datei hat kein gültiges .wkt-Format.",readWktErr:"Die ausgewählte .wkt-Datei konnte nicht gelesen werden.",openFileBtn:"Datei öffnen",saveLocalBtn:"Lokal speichern",exerciseDefaultName:"Übung",minOneExerciseAlert:"Die Routine muss mindestens eine Übung enthalten.",changeGifTitle:"GIF oder Bild ändern",addGifTitle:"GIF oder Bild hinzufügen",removeGifTitle:"GIF / Bild entfernen",moveUpTitle:"Nach oben",moveDownTitle:"Nach unten",duplicateTitle:"Duplizieren",deleteTitle:"Löschen",exerciseNamePlaceholder:"Name der Übung",mediaModalTitle:"Übungsanimation oder Bild",mediaModalDesc:"Aus Katalog wählen, Datei hochladen oder 3D-GIF erstellen",tabCatalog:"Katalog",tabUploadShort:"Hochladen",tabCreator3d:"🎨 3D-GIF erstellen (jede Übung)",uploadOwnGifBtn:"📤 Eigenes GIF/Bild hochladen (auto-komprimiert)",optimizingGifBtn:"⏳ GIF / Bild wird optimiert (220×220)...",integratedCatalog:"Integrierter Katalog",clearCurrent:"Aktuelles entfernen",searchExercisePlaceholder:"Übung suchen (z. B. Burpees, Boxen, Plank)...",noPresetFound:"Kein Preset gefunden für",inPresetsWord:"unter den",presetsWord:"Vorlagen.",createIn3dBtn:"Im 3D-Editor erstellen",describeExerciseLabel:"✨ Beschreibe eine beliebige Übung",describePlaceholder:"Z. B. Dead Bug, einbeinige Hüftbrücke...",generatePoseBtn:"Pose erzeugen",animPreview:"▶ Anim",poseABtn:"Pose A",poseBBtn:"Pose B",basePostureLabel:"Grundhaltung",propLabel:"Ausrüstung",cameraLabel:"Kamera",speedLabel:"Tempo",editingPoseLabel:"Bearbeite Pose",startWord:"(Start)",endWord:"(Ende)",copyAToB:"A → B kopieren",torsoHeightTab:"Oberkörper & Höhe",armsTab:"Arme",legsTab:"Beine",symmetricArmsLabel:"Beide Arme symmetrisch bewegen",symmetricLegsLabel:"Beide Beine symmetrisch bewegen",createApplyGifBtn:"🎨 GIF erstellen & anwenden",creatingGifBtn:"⏳ GIF wird erstellt...",downloadGifBtn:"💾 .gif herunterladen"},it:{appTitle:"Timer Routine Studio",subtitle:"File .wkt",currentFile:"File corrente",openLocal:"📂 Apri (.wkt)",save:"💾 Salva",saveAs:"📑 Salva come...",shareWhatsApp:"Condividi WhatsApp",openInApp:"📲 Apri nell'App",validationAlertTitle:"⚠️ La routine contiene errori da correggere:",routineName:"Nome della Routine",author:"Autore / Allenatore",category:"Categoria",sport:"Sport",cycles:"Cicli Globali",prepare:"Preparazione (sec / max 24h)",prepareShort:"Preparazione (sec)",totalTime:"Tempo Totale",tut:"Lavoro (TUT)",rest:"Riposo",totalRounds:"Round Totali",exercisesRoundsLabel:"Esercizi / Round",exercisesList:"Elenco Esercizi",exercisesHeading:"Esercizi",addExercise:"+ Aggiungi Esercizio",addAnotherExercise:"+ Aggiungi un altro esercizio",rounds:"Round",work:"Lavoro (sec)",restBetween:"Pausa Round (sec)",restAfter:"Pausa Finale (sec)",subtotal:"Subtotale esercizio:",estimatedDuration:"Durata stimata dell'esercizio:",savedIn:"Salvato in",savedAs:"Salvato come",systemLanguage:"Lingua di sistema",systemLanguageDesc:"Lingua predefinita",languageLabel:"Lingua",shareMessageIntro:"🔥 Guarda il mio allenamento sul timer!",clipboardNotice:"📋 File .wkt scaricato. Reindirizzamento a WhatsApp...",openingApp:"🚀 Invio della routine all'App mobile...",errNameEmpty:"Il nome dell'esercizio non può essere vuoto.",errNameDuplicate:"Il nome dell'esercizio è duplicato nella routine.",errWorkMin:"Il tempo di lavoro deve essere maggiore di 0 sec.",errMaxTime:"Il tempo non può superare 1440 min (24 ore).",errRoutineEmpty:"La routine deve contenere almeno un esercizio.",errRoutineNameEmpty:"Il nome della routine non può essere vuoto.",previewBadge:"✨ Routine Condivisa",previewModeBtn:"👁️ Anteprima",editRoutineBtn:"✏️ Modifica / Personalizza sul Web",downloadWktBtn:"📥 Scarica (.wkt)",sharedBy:"Condivisa da",workVsRestRatio:"Distribuzione Lavoro vs Riposo",prepareBadge:"Preparazione iniziale",noRest:"Nessuna pausa",downloadApkBtn:"Scarica App Android (.apk)",welcomeDesc:"Progetta, personalizza e condividi i tuoi allenamenti a intervalli (.wkt)",newRoutineBtn:"+ Nuova Routine",openWktBtn:"Apri file .wkt",examplesTitle:"⚡ Oppure esplora una routine di esempio:",exercisesWord:"esercizi",homeBtn:"🏠 Home",sharedBanner:"✨ Routine caricata da link condiviso.",invalidWktErr:"Il file selezionato non ha un formato .wkt valido.",readWktErr:"Impossibile leggere il file .wkt selezionato.",openFileBtn:"Apri File",saveLocalBtn:"Salva Locale",exerciseDefaultName:"Esercizio",minOneExerciseAlert:"La routine deve contenere almeno un esercizio.",changeGifTitle:"Cambia GIF o immagine",addGifTitle:"Aggiungi GIF o immagine",removeGifTitle:"Rimuovi GIF / immagine",moveUpTitle:"Sposta su",moveDownTitle:"Sposta giù",duplicateTitle:"Duplica",deleteTitle:"Elimina",exerciseNamePlaceholder:"Nome dell'esercizio",mediaModalTitle:"Animazione o immagine dell'esercizio",mediaModalDesc:"Scegli dal catalogo, carica un file o crea una GIF 3D",tabCatalog:"Catalogo",tabUploadShort:"Carica",tabCreator3d:"🎨 Crea GIF 3D (qualsiasi esercizio)",uploadOwnGifBtn:"📤 Carica GIF o immagine propria (compressa auto.)",optimizingGifBtn:"⏳ Ottimizzazione GIF / immagine (220×220)...",integratedCatalog:"Catalogo integrato",clearCurrent:"Rimuovi attuale",searchExercisePlaceholder:"Cerca esercizio (es. burpees, boxe, plank)...",noPresetFound:"Nessun preset trovato per",inPresetsWord:"tra i",presetsWord:"predefiniti.",createIn3dBtn:"Crea nel Creatore 3D",describeExerciseLabel:"✨ Descrivi qualsiasi esercizio",describePlaceholder:"Es. Dead bug alternato, ponte glutei su una gamba...",generatePoseBtn:"Genera posa",animPreview:"▶ Anim",poseABtn:"Posa A",poseBBtn:"Posa B",basePostureLabel:"Postura base",propLabel:"Attrezzo",cameraLabel:"Camera",speedLabel:"Velocità",editingPoseLabel:"Modifica Posa",startWord:"(Inizio)",endWord:"(Fine)",copyAToB:"Copia A → B",torsoHeightTab:"Busto e Altezza",armsTab:"Braccia",legsTab:"Gambe",symmetricArmsLabel:"Muovi entrambe le braccia insieme",symmetricLegsLabel:"Muovi entrambe le gambe insieme",createApplyGifBtn:"🎨 Crea e applica GIF",creatingGifBtn:"⏳ Generazione GIF...",downloadGifBtn:"💾 Scarica .gif"}},US=["Europe/Madrid","Atlantic/Canary","America/Montevideo","America/Buenos_Aires","America/Argentina","America/Cordoba","America/Mendoza","America/Santiago","America/La_Paz","America/Asuncion","America/Lima","America/Bogota","America/Guayaquil","America/Caracas","America/Panama","America/Costa_Rica","America/Managua","America/Tegucigalpa","America/El_Salvador","America/Guatemala","America/Mexico_City","America/Merida","America/Monterrey","America/Cancun","America/Chihuahua","America/Tijuana","America/Mazatlan","America/Hermosillo","America/Havana","America/Santo_Domingo","America/Puerto_Rico"];function OS(){try{const t=Intl.DateTimeFormat().resolvedOptions().timeZone||"";if(!t)return null;if(US.some(e=>t.startsWith(e)))return"es";if(t.startsWith("America/Sao_Paulo")||t.startsWith("America/Manaus")||t.startsWith("America/Recife")||t.startsWith("America/Fortaleza")||t.startsWith("America/Belem")||t.startsWith("Europe/Lisbon"))return"pt";if(t.startsWith("Europe/Paris"))return"fr";if(t.startsWith("Europe/Berlin")||t.startsWith("Europe/Vienna")||t.startsWith("Europe/Zurich"))return"de";if(t.startsWith("Europe/Rome"))return"it"}catch{}return null}function BS(t){if(t==="SYSTEM"||!t){const n=[];try{const a=Intl.DateTimeFormat().resolvedOptions().locale;a&&n.push(a)}catch{}typeof navigator<"u"&&(Array.isArray(navigator.languages)&&n.push(...navigator.languages),navigator.language&&n.push(navigator.language));const i=n.map(a=>(a||"").split("-")[0].toLowerCase()).filter(a=>!!(a&&Oi[a])),r=i.find(a=>a!=="en");if(r)return r;const s=OS();return s&&Oi[s]?s:i[0]||"es"}const e=t.split("-")[0].toLowerCase();return Oi[e]?e:"es"}const om=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),y.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),kS=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("polyline",{points:"3 6 5 6 21 6"}),y.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),zS=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),y.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),GS=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),y.jsx("polyline",{points:"5 12 12 5 19 12"})]}),HS=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),y.jsx("polyline",{points:"19 12 12 19 5 12"})]}),VS=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),y.jsx("polyline",{points:"7 10 12 15 17 10"}),y.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),lm=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("circle",{cx:"12",cy:"12",r:"10"}),y.jsx("polyline",{points:"12 6 12 12 16 14"})]}),WS=({size:t=20,className:e="",...n})=>y.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:y.jsx("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),Nx=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}),y.jsx("polygon",{points:"22 19 19 9 2 9 5 19 22 19"})]}),Dx=({size:t=20,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),y.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),y.jsx("polyline",{points:"7 3 7 8 15 8"})]}),Yl=({className:t="w-7 h-7 shrink-0",...e})=>y.jsxs("svg",{viewBox:"0 0 108 108",className:t,"aria-hidden":"true",...e,children:[y.jsx("rect",{width:"108",height:"108",rx:"24",fill:"#0F172A",stroke:"#1E293B",strokeWidth:"4"}),y.jsx("path",{fill:"#10B981",d:"M51,21 L57,21 L57,26 L51,26 Z"}),y.jsx("path",{fill:"#00E676",d:"M44,15 L64,15 A2,2 0 0,1 66,17 L66,20 A2,2 0 0,1 64,22 L44,22 A2,2 0 0,1 42,20 L42,17 A2,2 0 0,1 44,15 Z"}),y.jsx("path",{fill:"#10B981",d:"M33,27 L37,31 L33,35 L29,31 Z"}),y.jsx("path",{fill:"#00E676",d:"M25,25 L33,19 L37,23 L29,29 Z"}),y.jsx("path",{fill:"#10B981",d:"M75,27 L79,31 L75,35 L71,31 Z"}),y.jsx("path",{fill:"#00E676",d:"M75,19 L83,25 L79,29 L71,23 Z"}),y.jsx("path",{fill:"#00E676",d:"M54,26 A31,31 0 1,1 53.9,26 Z M54,32 A25,25 0 1,0 54.1,32 Z"}),y.jsx("path",{fill:"#10B981",d:"M52.5,34 L55.5,34 L55.5,38 L52.5,38 Z"}),y.jsx("path",{fill:"#10B981",d:"M52.5,76 L55.5,76 L55.5,80 L52.5,80 Z"}),y.jsx("path",{fill:"#10B981",d:"M31,55.5 L35,55.5 L35,58.5 L31,58.5 Z"}),y.jsx("path",{fill:"#10B981",d:"M73,55.5 L77,55.5 L77,58.5 L73,58.5 Z"}),y.jsx("path",{fill:"#00E676",d:"M57,41 L45,58 L54,58 L51,73 L63,56 L54,56 Z"})]}),Kl=({className:t="w-4 h-4 shrink-0",...e})=>y.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:t,"aria-hidden":"true",...e,children:y.jsx("path",{d:"M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"})}),cm=({size:t=18,className:e="",...n})=>y.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,...n,children:[y.jsx("circle",{cx:"12",cy:"12",r:"10"}),y.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),y.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),jS=({metrics:t,t:e=Oi.es})=>y.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 my-4",children:[y.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[y.jsx("div",{className:"p-2.5 rounded-lg bg-slate-700/50 text-white",children:y.jsx(lm,{size:22})}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-slate-400 font-medium",children:e.totalTime}),y.jsx("p",{className:"text-xl font-bold text-white",children:Tt(t.totalSeconds)})]})]}),y.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-xl p-3 flex items-center space-x-3",children:[y.jsx("div",{className:"p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400",children:y.jsx(WS,{size:22})}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-emerald-300 font-medium",children:e.tut}),y.jsx("p",{className:"text-xl font-bold text-emerald-400",children:Tt(t.tutSeconds)})]})]}),y.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-xl p-3 flex items-center space-x-3",children:[y.jsx("div",{className:"p-2.5 rounded-lg bg-rose-500/20 text-rose-400",children:y.jsx(lm,{size:22})}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-rose-300 font-medium",children:e.rest}),y.jsx("p",{className:"text-xl font-bold text-rose-400",children:Tt(t.restSeconds)})]})]}),y.jsxs("div",{className:"bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center space-x-3",children:[y.jsx("div",{className:"p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400",children:y.jsx("span",{className:"font-bold text-base",children:"#"})}),y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-slate-400 font-medium",children:e.exercisesRoundsLabel||"Ejercicios / Rondas"}),y.jsxs("p",{className:"text-xl font-bold text-cyan-400",children:[t.exerciseCount," ",y.jsxs("span",{className:"text-xs text-slate-400",children:["(",t.totalRounds," r)"]})]})]})]})]});var jr={},Ix={},Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});Bi.loop=Bi.conditional=Bi.parse=void 0;var XS=function t(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(n))n.forEach(function(a){return t(e,a,i,r)});else if(typeof n=="function")n(e,i,r,t);else{var s=Object.keys(n)[0];Array.isArray(n[s])?(r[s]={},t(e,n[s],i,r[s])):r[s]=n[s](e,i,r,t)}return i};Bi.parse=XS;var $S=function(e,n){return function(i,r,s,a){n(i,r,s)&&a(i,e,r,s)}};Bi.conditional=$S;var qS=function(e,n){return function(i,r,s,a){for(var o=[],c=i.pos;n(i,r,s);){var l={};if(a(i,e,r,l),i.pos===c)break;c=i.pos,o.push(l)}return o}};Bi.loop=qS;var Ct={};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.readBits=Ct.readArray=Ct.readUnsigned=Ct.readString=Ct.peekBytes=Ct.readBytes=Ct.peekByte=Ct.readByte=Ct.buildStream=void 0;var YS=function(e){return{data:e,pos:0}};Ct.buildStream=YS;var Fx=function(){return function(e){return e.data[e.pos++]}};Ct.readByte=Fx;var KS=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(n){return n.data[n.pos+e]}};Ct.peekByte=KS;var Mc=function(e){return function(n){return n.data.subarray(n.pos,n.pos+=e)}};Ct.readBytes=Mc;var ZS=function(e){return function(n){return n.data.subarray(n.pos,n.pos+e)}};Ct.peekBytes=ZS;var JS=function(e){return function(n){return Array.from(Mc(e)(n)).map(function(i){return String.fromCharCode(i)}).join("")}};Ct.readString=JS;var QS=function(e){return function(n){var i=Mc(2)(n);return e?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};Ct.readUnsigned=QS;var eM=function(e,n){return function(i,r,s){for(var a=typeof n=="function"?n(i,r,s):n,o=Mc(e),c=new Array(a),l=0;l<a;l++)c[l]=o(i);return c}};Ct.readArray=eM;var tM=function(e,n,i){for(var r=0,s=0;s<i;s++)r+=e[n+s]&&Math.pow(2,i-s-1);return r},nM=function(e){return function(n){for(var i=Fx()(n),r=new Array(8),s=0;s<8;s++)r[7-s]=!!(i&1<<s);return Object.keys(e).reduce(function(a,o){var c=e[o];return c.length?a[o]=tM(r,c.index,c.length):a[o]=r[c.index],a},{})}};Ct.readBits=nM;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=Bi,n=Ct,i={blocks:function(u){for(var p=0,m=[],v=u.data.length,x=0,h=(0,n.readByte)()(u);h!==p&&h;h=(0,n.readByte)()(u)){if(u.pos+h>=v){var g=v-u.pos;m.push((0,n.readBytes)(g)(u)),x+=g;break}m.push((0,n.readBytes)(h)(u)),x+=h}for(var S=new Uint8Array(x),M=0,b=0;b<m.length;b++)S.set(m[b],M),M+=m[b].length;return S}},r=(0,e.conditional)({gce:[{codes:(0,n.readBytes)(2)},{byteSize:(0,n.readByte)()},{extras:(0,n.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,n.readUnsigned)(!0)},{transparentColorIndex:(0,n.readByte)()},{terminator:(0,n.readByte)()}]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===249}),s=(0,e.conditional)({image:[{code:(0,n.readByte)()},{descriptor:[{left:(0,n.readUnsigned)(!0)},{top:(0,n.readUnsigned)(!0)},{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{lct:(0,n.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,n.readArray)(3,function(f,u,p){return Math.pow(2,p.descriptor.lct.size+1)})},function(f,u,p){return p.descriptor.lct.exists}),{data:[{minCodeSize:(0,n.readByte)()},i]}]},function(f){return(0,n.peekByte)()(f)===44}),a=(0,e.conditional)({text:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{preData:function(u,p,m){return(0,n.readBytes)(m.text.blockSize)(u)}},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===1}),o=(0,e.conditional)({application:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{id:function(u,p,m){return(0,n.readString)(m.blockSize)(u)}},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===255}),c=(0,e.conditional)({comment:[{codes:(0,n.readBytes)(2)},i]},function(f){var u=(0,n.peekBytes)(2)(f);return u[0]===33&&u[1]===254}),l=[{header:[{signature:(0,n.readString)(3)},{version:(0,n.readString)(3)}]},{lsd:[{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{gct:(0,n.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,n.readByte)()},{pixelAspectRatio:(0,n.readByte)()}]},(0,e.conditional)({gct:(0,n.readArray)(3,function(f,u){return Math.pow(2,u.lsd.gct.size+1)})},function(f,u){return u.lsd.gct.exists}),{frames:(0,e.loop)([r,o,c,s,a],function(f){var u=(0,n.peekByte)()(f);return u===33||u===44})}],d=l;t.default=d})(Ix);var Ec={};Object.defineProperty(Ec,"__esModule",{value:!0});Ec.deinterlace=void 0;var iM=function(e,n){for(var i=new Array(e.length),r=e.length/n,s=function(u,p){var m=e.slice(p*n,(p+1)*n);i.splice.apply(i,[u*n,n].concat(m))},a=[0,4,2,1],o=[8,8,4,2],c=0,l=0;l<4;l++)for(var d=a[l];d<r;d+=o[l])s(d,c),c++;return i};Ec.deinterlace=iM;var wc={};Object.defineProperty(wc,"__esModule",{value:!0});wc.lzw=void 0;var rM=function(e,n,i){var r=4096,s=-1,a=i,o,c,l,d,f,u,p,T,m,v,b,x,_,E,P,N,h=new Array(i),g=new Array(r),S=new Array(r),M=new Array(r+1);for(x=e,c=1<<x,f=c+1,o=c+2,p=s,d=x+1,l=(1<<d)-1,m=0;m<c;m++)g[m]=0,S[m]=m;var b,T,_,E,N,P;for(b=T=_=E=N=P=0,v=0;v<a;){if(E===0){if(T<d){b+=n[P]<<T,T+=8,P++;continue}if(m=b&l,b>>=d,T-=d,m>o||m==f)break;if(m==c){d=x+1,l=(1<<d)-1,o=c+2,p=s;continue}if(p==s){M[E++]=S[m],p=m,_=m;continue}for(u=m,m==o&&(M[E++]=_,m=p);m>c;)M[E++]=S[m],m=g[m];_=S[m]&255,M[E++]=_,o<r&&(g[o]=p,S[o]=_,o++,!(o&l)&&o<r&&(d++,l+=o)),p=u}E--,h[N++]=M[E],v++}for(v=N;v<a;v++)h[v]=0;return h};wc.lzw=rM;Object.defineProperty(jr,"__esModule",{value:!0});var Ux=jr.decompressFrames=jr.decompressFrame=Ox=jr.parseGIF=void 0,sM=uM(Ix),aM=Bi,oM=Ct,lM=Ec,cM=wc;function uM(t){return t&&t.__esModule?t:{default:t}}var dM=function(e){var n=new Uint8Array(e);return(0,aM.parse)((0,oM.buildStream)(n),sM.default)},Ox=jr.parseGIF=dM,fM=function(e){for(var n=e.pixels.length,i=new Uint8ClampedArray(n*4),r=0;r<n;r++){var s=r*4,a=e.pixels[r],o=e.colorTable[a]||[0,0,0];i[s]=o[0],i[s+1]=o[1],i[s+2]=o[2],i[s+3]=a!==e.transparentIndex?255:0}return i},Bx=function(e,n,i){if(!e.image){console.warn("gif frame does not have associated image.");return}var r=e.image,s=r.descriptor.width*r.descriptor.height,a=(0,cM.lzw)(r.data.minCodeSize,r.data.blocks,s);r.descriptor.lct.interlaced&&(a=(0,lM.deinterlace)(a,r.descriptor.width));var o={pixels:a,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?o.colorTable=r.lct:o.colorTable=n,e.gce&&(o.delay=(e.gce.delay||10)*10,o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),i&&(o.patch=fM(o)),o};jr.decompressFrame=Bx;var hM=function(e,n){return e.frames.filter(function(i){return i.image}).map(function(i){return Bx(i,e.gct,n)})};Ux=jr.decompressFrames=hM;var pM={trailer:59};function kx(t=256){let e=0,n=new Uint8Array(t);return{get buffer(){return n.buffer},reset(){e=0},bytesView(){return n.subarray(0,e)},bytes(){return n.slice(0,e)},writeByte(r){i(e+1),n[e]=r,e++},writeBytes(r,s=0,a=r.length){i(e+a);for(let o=0;o<a;o++)n[e++]=r[o+s]},writeBytesView(r,s=0,a=r.byteLength){i(e+a),n.set(r.subarray(s,s+a),e),e+=a}};function i(r){var s=n.length;if(s>=r)return;var a=1024*1024;r=Math.max(r,s*(s<a?2:1.125)>>>0),s!=0&&(r=Math.max(r,256));let o=n;n=new Uint8Array(r),e>0&&n.set(o.subarray(0,e),0)}}var su=12,um=5003,mM=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function gM(t,e,n,i,r=kx(512),s=new Uint8Array(256),a=new Int32Array(um),o=new Int32Array(um)){let c=a.length,l=Math.max(2,i);s.fill(0),o.fill(0),a.fill(-1);let d=0,f=0,u=l+1,p=u,m=!1,v=p,x=(1<<v)-1,h=1<<u-1,g=h+1,S=h+2,M=0,b=n[0],T=0;for(let N=c;N<65536;N*=2)++T;T=8-T,r.writeByte(l),E(h);let _=n.length;for(let N=1;N<_;N++)e:{let P=n[N],I=(P<<su)+b,z=P<<T^b;if(a[z]===I){b=o[z];break e}let R=z===0?1:c-z;for(;a[z]>=0;)if(z-=R,z<0&&(z+=c),a[z]===I){b=o[z];break e}E(b),b=P,S<1<<su?(o[z]=S++,a[z]=I):(a.fill(-1),S=h+2,m=!0,E(h))}return E(b),E(g),r.writeByte(0),r.bytesView();function E(N){for(d&=mM[f],f>0?d|=N<<f:d=N,f+=v;f>=8;)s[M++]=d&255,M>=254&&(r.writeByte(M),r.writeBytesView(s,0,M),M=0),d>>=8,f-=8;if((S>x||m)&&(m?(v=p,x=(1<<v)-1,m=!1):(++v,x=v===su?1<<v:(1<<v)-1)),N==g){for(;f>0;)s[M++]=d&255,M>=254&&(r.writeByte(M),r.writeBytesView(s,0,M),M=0),d>>=8,f-=8;M>0&&(r.writeByte(M),r.writeBytesView(s,0,M),M=0)}}}var xM=gM;function zx(t,e,n){return t<<8&63488|e<<2&992|n>>3}function Gx(t,e,n,i){return t>>4|e&240|(n&240)<<4|(i&240)<<8}function Hx(t,e,n){return t>>4<<8|e&240|n>>4}function Io(t,e,n){return t<e?e:t>n?n:t}function gl(t){return t*t}function dm(t,e,n){var i=0,r=1e100;let s=t[e],a=s.cnt;s.ac;let o=s.rc,c=s.gc,l=s.bc;for(var d=s.fw;d!=0;d=t[d].fw){let u=t[d],p=u.cnt,m=a*p/(a+p);if(!(m>=r)){var f=0;f+=m*gl(u.rc-o),!(f>=r)&&(f+=m*gl(u.gc-c),!(f>=r)&&(f+=m*gl(u.bc-l),!(f>=r)&&(r=f,i=d)))}}s.err=r,s.nn=i}function au(){return{ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0}}function vM(t,e){let n=e==="rgb444"?4096:65536,i=new Array(n),r=t.length;if(e==="rgba4444")for(let s=0;s<r;++s){let a=t[s],o=a>>24&255,c=a>>16&255,l=a>>8&255,d=a&255,f=Gx(d,l,c,o),u=f in i?i[f]:i[f]=au();u.rc+=d,u.gc+=l,u.bc+=c,u.ac+=o,u.cnt++}else if(e==="rgb444")for(let s=0;s<r;++s){let a=t[s],o=a>>16&255,c=a>>8&255,l=a&255,d=Hx(l,c,o),f=d in i?i[d]:i[d]=au();f.rc+=l,f.gc+=c,f.bc+=o,f.cnt++}else for(let s=0;s<r;++s){let a=t[s],o=a>>16&255,c=a>>8&255,l=a&255,d=zx(l,c,o),f=d in i?i[d]:i[d]=au();f.rc+=l,f.gc+=c,f.bc+=o,f.cnt++}return i}function Vx(t,e,n={}){let{format:i="rgb565",clearAlpha:r=!0,clearAlphaColor:s=0,clearAlphaThreshold:a=0,oneBitAlpha:o=!1}=n;if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");let c=new Uint32Array(t.buffer),l=n.useSqrt!==!1,d=i==="rgba4444",f=vM(c,i),u=f.length,p=u-1,m=new Uint32Array(u+1);for(var v=0,x=0;x<u;++x){let C=f[x];if(C!=null){var h=1/C.cnt;d&&(C.ac*=h),C.rc*=h,C.gc*=h,C.bc*=h,f[v++]=C}}gl(e)/v<.022&&(l=!1);for(var x=0;x<v-1;++x)f[x].fw=x+1,f[x+1].bk=x,l&&(f[x].cnt=Math.sqrt(f[x].cnt));l&&(f[x].cnt=Math.sqrt(f[x].cnt));var g,S,M;for(x=0;x<v;++x){dm(f,x);var b=f[x].err;for(S=++m[0];S>1&&(M=S>>1,!(f[g=m[M]].err<=b));S=M)m[S]=g;m[S]=x}var T=v-e;for(x=0;x<T;){for(var _;;){var E=m[1];if(_=f[E],_.tm>=_.mtm&&f[_.nn].mtm<=_.tm)break;_.mtm==p?E=m[1]=m[m[0]--]:(dm(f,E),_.tm=x);var b=f[E].err;for(S=1;(M=S+S)<=m[0]&&(M<m[0]&&f[m[M]].err>f[m[M+1]].err&&M++,!(b<=f[g=m[M]].err));S=M)m[S]=g;m[S]=E}var N=f[_.nn],P=_.cnt,I=N.cnt,h=1/(P+I);d&&(_.ac=h*(P*_.ac+I*N.ac)),_.rc=h*(P*_.rc+I*N.rc),_.gc=h*(P*_.gc+I*N.gc),_.bc=h*(P*_.bc+I*N.bc),_.cnt+=N.cnt,_.mtm=++x,f[N.bk].fw=N.fw,f[N.fw].bk=N.bk,N.mtm=p}let z=[];var R=0;for(x=0;;++R){let C=Io(Math.round(f[x].rc),0,255),D=Io(Math.round(f[x].gc),0,255),G=Io(Math.round(f[x].bc),0,255),k=255;d&&(k=Io(Math.round(f[x].ac),0,255),o&&(k=k<=(typeof o=="number"?o:127)?0:255),r&&k<=a&&(C=D=G=s,k=0));let B=d?[C,D,G,k]:[C,D,G];if(_M(z,B)||z.push(B),(x=f[x].fw)==0)break}return z}function _M(t,e){for(let n=0;n<t.length;n++){let i=t[n],r=i[0]===e[0]&&i[1]===e[1]&&i[2]===e[2],s=i.length>=4&&e.length>=4?i[3]===e[3]:!0;if(r&&s)return!0}return!1}function Wx(t,e,n="rgb565"){if(!t||!t.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(t instanceof Uint8Array)&&!(t instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");if(e.length>256)throw new Error("applyPalette() only works with 256 colors or less");let i=new Uint32Array(t.buffer),r=i.length,s=n==="rgb444"?4096:65536,a=new Uint8Array(r),o=new Array(s);if(n==="rgba4444")for(let c=0;c<r;c++){let l=i[c],d=l>>24&255,f=l>>16&255,u=l>>8&255,p=l&255,m=Gx(p,u,f,d),v=m in o?o[m]:o[m]=yM(p,u,f,d,e);a[c]=v}else{let c=n==="rgb444"?Hx:zx;for(let l=0;l<r;l++){let d=i[l],f=d>>16&255,u=d>>8&255,p=d&255,m=c(p,u,f),v=m in o?o[m]:o[m]=SM(p,u,f,e);a[l]=v}}return a}function yM(t,e,n,i,r){let s=0,a=1e100;for(let o=0;o<r.length;o++){let c=r[o],l=c[3],d=Hr(l-i);if(d>a)continue;let f=c[0];if(d+=Hr(f-t),d>a)continue;let u=c[1];if(d+=Hr(u-e),d>a)continue;let p=c[2];d+=Hr(p-n),!(d>a)&&(a=d,s=o)}return s}function SM(t,e,n,i){let r=0,s=1e100;for(let a=0;a<i.length;a++){let o=i[a],c=o[0],l=Hr(c-t);if(l>s)continue;let d=o[1];if(l+=Hr(d-e),l>s)continue;let f=o[2];l+=Hr(f-n),!(l>s)&&(s=l,r=a)}return r}function Hr(t){return t*t}function jx(t={}){let{initialCapacity:e=4096,auto:n=!0}=t,i=kx(e),r=5003,s=new Uint8Array(256),a=new Int32Array(r),o=new Int32Array(r),c=!1;return{reset(){i.reset(),c=!1},finish(){i.writeByte(pM.trailer)},bytes(){return i.bytes()},bytesView(){return i.bytesView()},get buffer(){return i.buffer},get stream(){return i},writeHeader:l,writeFrame(d,f,u,p={}){let{transparent:m=!1,transparentIndex:v=0,delay:x=0,palette:h=null,repeat:g=0,colorDepth:S=8,dispose:M=-1}=p,b=!1;if(n?c||(b=!0,l(),c=!0):b=!!p.first,f=Math.max(0,Math.floor(f)),u=Math.max(0,Math.floor(u)),b){if(!h)throw new Error("First frame must include a { palette } option");EM(i,f,u,h,S),fm(i,h),g>=0&&wM(i,g)}let T=Math.round(x/10);MM(i,M,T,m,v);let _=!!h&&!b;bM(i,f,u,_?h:null),_&&fm(i,h),AM(i,d,f,u,S,s,a,o)}};function l(){Xx(i,"GIF89a")}}function MM(t,e,n,i,r){t.writeByte(33),t.writeByte(249),t.writeByte(4),r<0&&(r=0,i=!1);var s,a;i?(s=1,a=2):(s=0,a=0),e>=0&&(a=e&7),a<<=2,t.writeByte(0|a|0|s),ur(t,n),t.writeByte(r||0),t.writeByte(0)}function EM(t,e,n,i,r=8){let s=1,a=0,o=vh(i.length)-1,c=s<<7|r-1<<4|a<<3|o;ur(t,e),ur(t,n),t.writeBytes([c,0,0])}function wM(t,e){t.writeByte(33),t.writeByte(255),t.writeByte(11),Xx(t,"NETSCAPE2.0"),t.writeByte(3),t.writeByte(1),ur(t,e),t.writeByte(0)}function fm(t,e){let n=1<<vh(e.length);for(let i=0;i<n;i++){let r=[0,0,0];i<e.length&&(r=e[i]),t.writeByte(r[0]),t.writeByte(r[1]),t.writeByte(r[2])}}function bM(t,e,n,i){if(t.writeByte(44),ur(t,0),ur(t,0),ur(t,e),ur(t,n),i){let r=0,s=0,a=vh(i.length)-1;t.writeByte(128|r|s|0|a)}else t.writeByte(0)}function AM(t,e,n,i,r=8,s,a,o){xM(n,i,e,r,t,s,a,o)}function ur(t,e){t.writeByte(e&255),t.writeByte(e>>8&255)}function Xx(t,e){for(var n=0;n<e.length;n++)t.writeByte(e.charCodeAt(n))}function vh(t){return Math.max(Math.ceil(Math.log2(t)),1)}const TM=240,CM=220,hm=180,pm=85,RM=240*1024,PM=280*1024,ou=60;function LM(t){if(t.length<6)return!1;const e=String.fromCharCode(t[0],t[1],t[2],t[3],t[4],t[5]);return e==="GIF87a"||e==="GIF89a"}function NM(t){const n=[];for(let i=0;i<t.length;i+=32768){const r=t.subarray(i,i+32768);n.push(String.fromCharCode(...r))}return btoa(n.join(""))}function $x(t,e,n){if(t<=0||e<=0)return{width:n,height:n};if(t<=n&&e<=n)return{width:t,height:e};const i=Math.min(n/t,n/e);return{width:Math.max(1,Math.round(t*i)),height:Math.max(1,Math.round(e*i))}}function DM(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e;const r=i.getContext("2d",{willReadFrequently:!0});if(!r)return[];const s=document.createElement("canvas"),a=s.getContext("2d");if(!a)return[];const o=[];let c=0;for(let u=0;u<n.length;u++){const p=n[u].delay&&n[u].delay>0?n[u].delay:100,m=Math.max(p,20);u===0?(o.push({frameIdx:0,delayMs:m}),c=0):(c+=m,(c>=pm||u===n.length-1)&&(o.push({frameIdx:u,delayMs:c}),c=0))}let l;if(o.length>ou){l=new Map;const u=o.length/ou;for(let p=0;p<ou;p++){const m=Math.floor(p*u),v=Math.min(o.length,Math.floor((p+1)*u));let x=0;for(let h=m;h<v;h++)x+=o[h].delayMs;l.set(o[m].frameIdx,Math.max(pm,x))}}else l=new Map(o.map(u=>[u.frameIdx,u.delayMs]));const d=[];let f=null;for(let u=0;u<n.length;u++){const p=n[u],{width:m,height:v,left:x,top:h}=p.dims;if(p.disposalType===3&&(f=r.getImageData(0,0,t,e)),m>0&&v>0&&p.patch&&p.patch.length===m*v*4){s.width=m,s.height=v;const S=new ImageData(new Uint8ClampedArray(p.patch),m,v);a.putImageData(S,0,0),r.drawImage(s,x,h)}const g=l.get(u);if(g!==void 0){const S=document.createElement("canvas");S.width=t,S.height=e;const M=S.getContext("2d");M&&(M.fillStyle="#0F172A",M.fillRect(0,0,t,e),M.drawImage(i,0,0),d.push({canvas:S,delayMs:g}))}p.disposalType===2?r.clearRect(x,h,m,v):p.disposalType===3&&f&&(r.putImageData(f,0,0),f=null)}return d}function lu(t,e,n,i,r,s){const{width:a,height:o}=$x(e,n,i),c=document.createElement("canvas");c.width=a,c.height=o;const l=c.getContext("2d",{willReadFrequently:!0});if(!l)return null;const d=jx();let f=0;for(let u=0;u<t.length;u+=s){const p=t[u];let m=p.delayMs;if(s>1)for(let g=u+1;g<Math.min(u+s,t.length);g++)m+=t[g].delayMs;l.fillStyle="#0F172A",l.fillRect(0,0,a,o),l.drawImage(p.canvas,0,0,a,o);const v=l.getImageData(0,0,a,o).data,x=Vx(v,r,{format:"rgb565"}),h=Wx(v,x,"rgb565");d.writeFrame(h,a,o,{palette:x,delay:m,repeat:f===0?0:void 0}),f++}return f===0?null:(d.finish(),d.bytes())}async function IM(t){const e=URL.createObjectURL(t);try{const n=await new Promise((d,f)=>{const u=new Image;u.onload=()=>d(u),u.onerror=()=>f(new Error("No se pudo decodificar la imagen.")),u.src=e}),{width:i,height:r}=$x(n.naturalWidth||n.width,n.naturalHeight||n.height,TM),s=document.createElement("canvas");s.width=i,s.height=r;const a=s.getContext("2d");if(!a)throw new Error("Canvas no disponible.");a.fillStyle="#0F172A",a.fillRect(0,0,i,r),a.drawImage(n,0,0,i,r);let o=s.toDataURL("image/webp",.8);o.startsWith("data:image/webp")||(o=s.toDataURL("image/jpeg",.82));const c=o.slice(o.indexOf("base64,")+7).length,l=Math.max(1,Math.round(c*3/4/1024));return{mediaData:o,sizeKb:l,isAnimated:!1}}finally{URL.revokeObjectURL(e)}}async function FM(t){const e=await t.arrayBuffer(),n=new Uint8Array(e);if(LM(n)||t.type==="image/gif")try{const r=Ox(e),s=Ux(r,!0);if(s.length>1){const a=r.lsd.width||s[0].dims.width,o=r.lsd.height||s[0].dims.height,c=DM(a,o,s);if(c.length>1){let l=lu(c,a,o,CM,64,1);if(l&&l.length>RM&&(l=lu(c,a,o,hm,32,1)),l&&l.length>PM&&(l=lu(c,a,o,hm,32,2)),l&&l.length>0){const d=`data:image/gif;base64,${NM(l)}`,f=Math.max(1,Math.round(l.length/1024));return{mediaData:d,sizeKb:f,isAnimated:!0}}}}}catch(r){console.warn("Fallo al re-codificar GIF en navegador, usando modo estático:",r)}return IM(t)}const ss={pelvisOffsetY:0,torsoPitch:0,torsoTwist:0,torsoRoll:0,headPitch:0,leftArmLift:8,rightArmLift:8,leftArmOut:8,rightArmOut:8,leftElbowFlex:12,rightElbowFlex:12,leftHipFlex:0,rightHipFlex:0,leftHipOut:4,rightHipOut:4,leftKneeFlex:4,rightKneeFlex:4};function Fe(t){switch(t){case"supine":return{...ss,headPitch:15,leftArmLift:0,rightArmLift:0,leftArmOut:12,rightArmOut:12,leftHipFlex:10,rightHipFlex:10,leftKneeFlex:10,rightKneeFlex:10};case"prone":return{...ss,headPitch:-22,leftArmLift:165,rightArmLift:165,leftArmOut:8,rightArmOut:8,leftHipFlex:-5,rightHipFlex:-5};case"plank":return{...ss,headPitch:-15,leftArmLift:88,rightArmLift:88,leftElbowFlex:6,rightElbowFlex:6,leftHipFlex:0,rightHipFlex:0};case"quadruped":return{...ss,headPitch:-18,leftArmLift:88,rightArmLift:88,leftElbowFlex:4,rightElbowFlex:4,leftHipFlex:88,rightHipFlex:88,leftKneeFlex:90,rightKneeFlex:90};case"seated":return{...ss,torsoPitch:10,leftArmLift:25,rightArmLift:25,leftElbowFlex:70,rightElbowFlex:70,leftHipFlex:82,rightHipFlex:82,leftKneeFlex:75,rightKneeFlex:75};case"standing":default:return{...ss}}}function UM(t,e="Ejercicio personalizado"){const n=Fe(t);return{title:e,posture:t,prop:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"||t==="seated"?"mat":"none",camera:t==="supine"||t==="prone"||t==="plank"||t==="quadruped"?"low_side":"three_quarter",frameDelayMs:80,isometricPulse:!1,poseA:{...n},poseB:{...n}}}function OM(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}function ke(t,e){return e.some(n=>t.includes(n))}const BM=["Bicho muerto alternado","Puente de glúteo a una pierna","Toque de talones tumbado boca arriba","Isométrico de cuello","Patada de glúteo en cuatro apoyos","Remo alternado con mancuernas"];function Fo(t){const e=t.trim()||"Ejercicio personalizado",n=OM(e),i=[],r=ke(n,["una pierna","un brazo","unilateral","single leg","single arm","alternad","alterno","alterna","izquierd","derech"]),s=ke(n,["isometric","mantener","hold","estatic","aguantar"]);let a="none";if(ke(n,["mancuerna","dumbbell","pesa ","pesas"])?(a="dumbbells",i.push("Mancuernas")):ke(n,["barra","barbell","press militar","peso muerto"])?(a="barbell",i.push("Barra")):ke(n,["kettlebell","pesa rusa","disco","plate"])?(a="kettlebell",i.push("Kettlebell / Disco")):ke(n,["cajon","box","banco","silla","step","escalon"])?(a="box",i.push("Cajón / Banco")):ke(n,["boxeo","guante","jab","cross","gancho","hook","uppercut","puno"])&&(a="gloves",i.push("Guantes de boxeo")),ke(n,["bicho muerto","dead bug","deadbug"]))return i.push("Boca arriba en colchoneta","Movimiento cruzado brazo/pierna"),{spec:{title:e,posture:"supine",prop:a==="none"?"mat":a,camera:"low_side",frameDelayMs:90,isometricPulse:s,poseA:s?{...Fe("supine"),leftArmLift:90,rightArmLift:90,leftHipFlex:90,rightHipFlex:90,leftKneeFlex:90,rightKneeFlex:90}:{...Fe("supine"),leftArmLift:165,rightArmLift:90,leftHipFlex:90,rightHipFlex:12,leftKneeFlex:90,rightKneeFlex:10},poseB:s?{...Fe("supine"),pelvisOffsetY:.02,leftArmLift:94,rightArmLift:94,leftHipFlex:86,rightHipFlex:86,leftKneeFlex:90,rightKneeFlex:90}:{...Fe("supine"),leftArmLift:90,rightArmLift:165,leftHipFlex:12,rightHipFlex:90,leftKneeFlex:10,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if(ke(n,["toque de talon","tocar talon","talones","heel touch","penguin"]))return i.push("Boca arriba","Rodillas flexionadas y balanceo lateral"),{spec:{title:e,posture:"supine",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...Fe("supine"),torsoPitch:24,torsoTwist:-18,torsoRoll:-16,headPitch:22,leftArmLift:25,rightArmLift:15,leftArmOut:22,rightArmOut:10,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112},poseB:{...Fe("supine"),torsoPitch:24,torsoTwist:18,torsoRoll:16,headPitch:22,leftArmLift:15,rightArmLift:25,leftArmOut:10,rightArmOut:22,leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112}},matchedNotes:i,confidence:"high"};if(ke(n,["puente","glute bridge","hip thrust","elevacion de cadera"]))return i.push("Boca arriba",r?"A una pierna":"Elevación de cadera"),{spec:{title:e,posture:"supine",prop:"mat",camera:"low_side",frameDelayMs:85,isometricPulse:s,poseA:{...Fe("supine"),pelvisOffsetY:0,torsoPitch:0,leftHipFlex:55,rightHipFlex:r?75:55,leftKneeFlex:115,rightKneeFlex:r?12:115,leftArmLift:0,rightArmLift:0,leftArmOut:14,rightArmOut:14},poseB:{...Fe("supine"),pelvisOffsetY:.22,torsoPitch:24,headPitch:18,leftHipFlex:0,rightHipFlex:r?45:0,leftKneeFlex:92,rightKneeFlex:r?10:92,leftArmLift:-20,rightArmLift:-20,leftArmOut:14,rightArmOut:14}},matchedNotes:i,confidence:"high"};if(ke(n,["cuello","neck","cervical"]))return i.push("Activación cervical",s?"Isométrico":"Movilidad de cuello"),{spec:{title:e,posture:"standing",prop:"none",camera:"three_quarter",frameDelayMs:95,isometricPulse:!0,poseA:{...Fe("standing"),headPitch:s?-6:-22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18},poseB:{...Fe("standing"),headPitch:s?6:22,leftArmLift:65,rightArmLift:12,leftElbowFlex:115,rightElbowFlex:18}},matchedNotes:i,confidence:"high"};if(ke(n,["bird dog","birddog","perro de caza","perro pajaro"]))return i.push("Cuatro apoyos","Extensión cruzada"),{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...Fe("quadruped"),leftArmLift:170,rightArmLift:88,leftHipFlex:88,rightHipFlex:-8,leftKneeFlex:90,rightKneeFlex:8},poseB:{...Fe("quadruped"),leftArmLift:88,rightArmLift:170,leftHipFlex:-8,rightHipFlex:88,leftKneeFlex:8,rightKneeFlex:90}},matchedNotes:i,confidence:"high"};if(ke(n,["patada de gluteo","donkey kick","glute kick","hidrante","cuatro apoyos","cuadrupedia"])){i.push("Cuatro apoyos en colchoneta");const u=ke(n,["hidrante","lateral","abduccion"]);return{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:80,isometricPulse:!1,poseA:Fe("quadruped"),poseB:{...Fe("quadruped"),leftHipFlex:u?85:-25,leftHipOut:u?55:0,leftKneeFlex:85}},matchedNotes:i,confidence:"high"}}if(ke(n,["escalador","mountain climber","climber"]))return i.push("Plancha dinámica","Rodillas alternadas al pecho"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:70,isometricPulse:!1,poseA:{...Fe("plank"),leftHipFlex:75,leftKneeFlex:95,rightHipFlex:0,rightKneeFlex:5},poseB:{...Fe("plank"),leftHipFlex:0,leftKneeFlex:5,rightHipFlex:75,rightKneeFlex:95}},matchedNotes:i,confidence:"high"};if(ke(n,["burpee"]))return i.push("HIIT Completo","Sentadilla profunda a salto vertical"),{spec:{title:e,posture:"standing",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...Fe("standing"),pelvisOffsetY:-.42,torsoPitch:45,leftHipFlex:105,rightHipFlex:105,leftKneeFlex:115,rightKneeFlex:115,leftArmLift:75,rightArmLift:75},poseB:{...Fe("standing"),pelvisOffsetY:.18,torsoPitch:-5,leftArmLift:170,rightArmLift:170,leftArmOut:18,rightArmOut:18}},matchedNotes:i,confidence:"high"};if(ke(n,["bicicleta","bicycle"]))return i.push("Core","Bicicleta abdominal alternada"),{spec:{title:e,posture:"supine",prop:"mat",camera:"low_side",frameDelayMs:75,isometricPulse:!1,poseA:{...Fe("supine"),torsoPitch:28,torsoTwist:-28,headPitch:20,leftArmLift:85,rightArmLift:85,leftElbowFlex:115,rightElbowFlex:115,leftHipFlex:88,leftKneeFlex:95,rightHipFlex:20,rightKneeFlex:10},poseB:{...Fe("supine"),torsoPitch:28,torsoTwist:28,headPitch:20,leftArmLift:85,rightArmLift:85,leftElbowFlex:115,rightElbowFlex:115,leftHipFlex:20,leftKneeFlex:10,rightHipFlex:88,rightKneeFlex:95}},matchedNotes:i,confidence:"high"};if(ke(n,["patadas tijera","flutter kick","elev. piernas","elevacion de piernas","leg raise"])){const u=ke(n,["tijera","flutter","altern"]);return i.push("Core inferior",u?"Patadas tijera alternadas":"Elevación de piernas"),{spec:{title:e,posture:"supine",prop:"mat",camera:"low_side",frameDelayMs:u?70:85,isometricPulse:!1,poseA:{...Fe("supine"),leftHipFlex:u?55:15,rightHipFlex:15,leftKneeFlex:6,rightKneeFlex:6},poseB:{...Fe("supine"),leftHipFlex:u?15:82,rightHipFlex:u?55:82,leftKneeFlex:6,rightKneeFlex:6}},matchedNotes:i,confidence:"high"}}if(ke(n,["gato","vaca","cat cow","cat-cow"]))return i.push("Movilidad espinal en cuatro apoyos"),{spec:{title:e,posture:"quadruped",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...Fe("quadruped"),torsoPitch:18,headPitch:25,pelvisOffsetY:.04},poseB:{...Fe("quadruped"),torsoPitch:-16,headPitch:-28,pelvisOffsetY:-.04}},matchedNotes:i,confidence:"high"};if(ke(n,["superman","espinal","hiperextension"])&&!ke(n,["plancha","plank"]))return i.push("Boca abajo","Extensión lumbar Superman"),{spec:{title:e,posture:"prone",prop:"mat",camera:"low_side",frameDelayMs:85,isometricPulse:!1,poseA:Fe("prone"),poseB:{...Fe("prone"),torsoPitch:-24,headPitch:-32,leftArmLift:178,rightArmLift:178,leftHipFlex:-24,rightHipFlex:-24}},matchedNotes:i,confidence:"high"};if(ke(n,["press banca","bench press","press de pecho"]))return i.push("Fuerza pecho","Empuje tumbado con barra"),{spec:{title:e,posture:"supine",prop:"barbell",camera:"three_quarter",frameDelayMs:80,isometricPulse:!1,poseA:{...Fe("supine"),leftArmLift:45,rightArmLift:45,leftArmOut:55,rightArmOut:55,leftElbowFlex:105,rightElbowFlex:105,leftHipFlex:55,rightHipFlex:55,leftKneeFlex:100,rightKneeFlex:100},poseB:{...Fe("supine"),leftArmLift:92,rightArmLift:92,leftArmOut:12,rightArmOut:12,leftElbowFlex:8,rightElbowFlex:8,leftHipFlex:55,rightHipFlex:55,leftKneeFlex:100,rightKneeFlex:100}},matchedNotes:i,confidence:"high"};if(ke(n,["sombra boxeo","saco boxeo","shadow boxing","heavy bag","uppercut","gancho","jab","boxeo"]))return i.push("Combate / Boxeo","Combinación de guardia y golpeo"),{spec:{title:e,posture:"standing",prop:"gloves",camera:"three_quarter",frameDelayMs:70,isometricPulse:!1,poseA:{...Fe("standing"),torsoPitch:8,torsoTwist:-22,leftArmLift:92,leftElbowFlex:12,rightArmLift:65,rightElbowFlex:112,leftHipFlex:18,rightHipFlex:-12,leftKneeFlex:18,rightKneeFlex:18},poseB:{...Fe("standing"),torsoPitch:10,torsoTwist:26,leftArmLift:65,leftElbowFlex:112,rightArmLift:95,rightElbowFlex:14,leftHipFlex:-12,rightHipFlex:18,leftKneeFlex:18,rightKneeFlex:18}},matchedNotes:i,confidence:"high"};if(ke(n,["swing","balanceo"]))return i.push("Potencia de cadera","Kettlebell Swing"),{spec:{title:e,posture:"standing",prop:"kettlebell",camera:"side",frameDelayMs:75,isometricPulse:!1,poseA:{...Fe("standing"),pelvisOffsetY:-.18,torsoPitch:48,leftHipFlex:65,rightHipFlex:65,leftKneeFlex:38,rightKneeFlex:38,leftArmLift:20,rightArmLift:20,leftHipOut:16,rightHipOut:16},poseB:{...Fe("standing"),pelvisOffsetY:0,torsoPitch:-4,leftArmLift:92,rightArmLift:92,leftHipOut:16,rightHipOut:16}},matchedNotes:i,confidence:"high"};if(ke(n,["patada tricep","kickback","fondos tricep","tricep dip","fondos"])){const u=ke(n,["fondo","dip"]);return i.push("Fuerza de tríceps",u?"Fondos en banco/cajón":"Extensión de codo inclinado"),{spec:{title:e,posture:"standing",prop:u?"box":"dumbbells",camera:"side",frameDelayMs:80,isometricPulse:!1,poseA:u?{...Fe("standing"),pelvisOffsetY:-.22,leftArmLift:-35,rightArmLift:-35,leftElbowFlex:15,rightElbowFlex:15,leftHipFlex:65,rightHipFlex:65,leftKneeFlex:75,rightKneeFlex:75}:{...Fe("standing"),torsoPitch:45,leftHipFlex:45,rightHipFlex:45,leftKneeFlex:25,rightKneeFlex:25,leftArmLift:-25,rightArmLift:-25,leftElbowFlex:110,rightElbowFlex:110},poseB:u?{...Fe("standing"),pelvisOffsetY:-.38,leftArmLift:-45,rightArmLift:-45,leftElbowFlex:95,rightElbowFlex:95,leftHipFlex:78,rightHipFlex:78,leftKneeFlex:92,rightKneeFlex:92}:{...Fe("standing"),torsoPitch:45,leftHipFlex:45,rightHipFlex:45,leftKneeFlex:25,rightKneeFlex:25,leftArmLift:-38,rightArmLift:-38,leftElbowFlex:6,rightElbowFlex:6}},matchedNotes:i,confidence:"high"}}if(ke(n,["dominada","pullup","pull-up","chin-up"]))return i.push("Tracción vertical","Dominadas"),{spec:{title:e,posture:"standing",prop:"none",camera:"front",frameDelayMs:85,isometricPulse:!1,poseA:{...Fe("standing"),leftArmLift:172,rightArmLift:172,leftArmOut:25,rightArmOut:25,leftElbowFlex:10,rightElbowFlex:10,leftKneeFlex:25,rightKneeFlex:25},poseB:{...Fe("standing"),pelvisOffsetY:.22,leftArmLift:135,rightArmLift:135,leftArmOut:55,rightArmOut:55,leftElbowFlex:118,rightElbowFlex:118,leftKneeFlex:35,rightKneeFlex:35}},matchedNotes:i,confidence:"high"};if(ke(n,["plancha","plank"]))return ke(n,["lateral","side"])?(i.push("Core oblicuos","Plancha lateral"),{spec:{title:e,posture:"plank",prop:"mat",camera:"three_quarter",frameDelayMs:90,isometricPulse:!0,poseA:{...Fe("plank"),torsoRoll:35,leftArmLift:90,leftElbowFlex:88,rightArmLift:15,rightArmOut:85},poseB:{...Fe("plank"),torsoRoll:35,pelvisOffsetY:.04,leftArmLift:90,leftElbowFlex:88,rightArmLift:15,rightArmOut:115}},matchedNotes:i,confidence:"high"}):ke(n,["superman"])?(i.push("Plancha","Extensión alternada brazo/pierna"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:90,isometricPulse:!1,poseA:{...Fe("plank"),leftArmLift:172,rightHipFlex:-16},poseB:{...Fe("plank"),rightArmLift:172,leftHipFlex:-16}},matchedNotes:i,confidence:"high"}):ke(n,["toque de hombro","shoulder tap","hombros"])?(i.push("Plancha","Toques de hombro alternados"),{spec:{title:e,posture:"plank",prop:"mat",camera:"three_quarter",frameDelayMs:75,isometricPulse:!1,poseA:{...Fe("plank"),leftArmLift:105,leftArmOut:-20,leftElbowFlex:120},poseB:{...Fe("plank"),rightArmLift:105,rightArmOut:-20,rightElbowFlex:120}},matchedNotes:i,confidence:"high"}):(i.push("Plancha abdominal"),{spec:{title:e,posture:"plank",prop:"mat",camera:"low_side",frameDelayMs:95,isometricPulse:!0,poseA:{...Fe("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.18},poseB:{...Fe("plank"),leftArmLift:90,rightArmLift:90,leftElbowFlex:88,rightElbowFlex:88,pelvisOffsetY:-.15,torsoPitch:3}},matchedNotes:i,confidence:"high"});let o="standing";ke(n,["boca arriba","tumbado","acostado","abdominal","crunch","hollow","v-up","sit up"])?(o="supine",i.push("Postura boca arriba")):ke(n,["boca abajo","superman","lumbar","espinal"])?(o="prone",i.push("Postura boca abajo")):ke(n,["sentado","seated","giro ruso","russian"])&&(o="seated",i.push("Postura sentada")),a==="none"&&o!=="standing"&&(a="mat");const c=Fe(o),l=Fe(o);let d=o==="standing"?"three_quarter":"low_side",f=!1;if(ke(n,["sentadilla","squat","silla"])){f=!0,i.push("Flexión de piernas (sentadilla)");const u=ke(n,["sumo","abierta"]);c.leftHipOut=u?28:8,c.rightHipOut=u?28:8,l.pelvisOffsetY=-.34,l.torsoPitch=18,l.leftHipFlex=82,l.rightHipFlex=r?25:82,l.leftHipOut=u?34:10,l.rightHipOut=u?34:10,l.leftKneeFlex=96,l.rightKneeFlex=r?10:96,l.leftArmLift=65,l.rightArmLift=65,(a==="dumbbells"||a==="kettlebell")&&(c.leftArmLift=45,c.rightArmLift=45,c.leftElbowFlex=95,c.rightElbowFlex=95,l.leftArmLift=55,l.rightArmLift=55,l.leftElbowFlex=95,l.rightElbowFlex=95)}else ke(n,["zancada","estocada","lunge","bulgara"])?(f=!0,i.push("Zancada"),d="side",l.pelvisOffsetY=-.26,l.leftHipFlex=78,l.leftKneeFlex=85,l.rightHipFlex=-22,l.rightKneeFlex=88,l.leftArmLift=45,l.rightArmLift=45):ke(n,["flexion","pushup","push-up","lagartija"])?(f=!0,o="plank",a="mat",d="low_side",i.push("Flexiones en suelo"),Object.assign(c,Fe("plank")),Object.assign(l,Fe("plank"),{pelvisOffsetY:-.2,leftArmLift:58,rightArmLift:58,leftArmOut:28,rightArmOut:28,leftElbowFlex:105,rightElbowFlex:105})):ke(n,["remo","row"])?(f=!0,a==="none"&&(a="dumbbells"),d="three_quarter",i.push("Tracción / Remo"),c.pelvisOffsetY=-.06,c.torsoPitch=38,c.headPitch=-25,c.leftHipFlex=42,c.rightHipFlex=42,c.leftKneeFlex=24,c.rightKneeFlex=24,c.leftArmLift=45,c.rightArmLift=45,Object.assign(l,c),l.leftArmLift=-10,l.leftElbowFlex=92,r?(c.rightArmLift=-10,c.rightElbowFlex=92,l.rightArmLift=45,l.rightElbowFlex=10):(l.rightArmLift=-10,l.rightElbowFlex=92)):ke(n,["curl","bicep"])?(f=!0,a==="none"&&(a="dumbbells"),i.push("Flexión de bíceps"),c.leftElbowFlex=12,c.rightElbowFlex=r?128:12,l.leftElbowFlex=128,l.rightElbowFlex=r?12:128):ke(n,["press","hombro","militar","empuje arriba"])?(f=!0,a==="none"&&(a="dumbbells"),i.push("Empuje vertical sobre cabeza"),c.leftArmLift=42,c.rightArmLift=42,c.leftArmOut=30,c.rightArmOut=30,c.leftElbowFlex=105,c.rightElbowFlex=105,l.leftArmLift=172,l.rightArmLift=r?42:172,l.leftArmOut=10,l.rightArmOut=r?30:10,l.leftElbowFlex=8,l.rightElbowFlex=r?105:8):ke(n,["lateral","vuelo","pajaro","abduccion brazo"])?(f=!0,a==="none"&&(a="dumbbells"),d="front",i.push("Elevación lateral"),c.leftArmOut=10,c.rightArmOut=10,l.leftArmOut=88,l.rightArmOut=88,l.leftElbowFlex=16,l.rightElbowFlex=16):ke(n,["peso muerto","deadlift","buenos dias","good morning","bisagra"])?(f=!0,d="side",i.push("Bisagra de cadera"),l.pelvisOffsetY=-.06,l.torsoPitch=58,l.headPitch=-28,l.leftHipFlex=58,l.rightHipFlex=58,l.leftKneeFlex=20,l.rightKneeFlex=20,l.leftArmLift=58,l.rightArmLift=58):ke(n,["patada","kick","rodillazo","rodilla"])?(f=!0,d="three_quarter",i.push("Patada / elevación de pierna"),c.leftArmLift=55,c.rightArmLift=55,c.leftElbowFlex=95,c.rightElbowFlex=95,Object.assign(l,c),l.leftHipFlex=95,l.leftKneeFlex=ke(n,["rodilla","knee"])?95:10):ke(n,["salto","jump","tijera","jack","skipping"])?(f=!0,d="front",i.push("Salto dinámico"),l.pelvisOffsetY=.14,l.leftArmOut=145,l.rightArmOut=145,l.leftHipOut=26,l.rightHipOut=26):ke(n,["giro","rotacion","twist","lenador","oblicuo"])?(f=!0,i.push("Rotación de tronco"),c.torsoTwist=-38,c.leftArmLift=65,c.rightArmLift=65,c.leftElbowFlex=45,c.rightElbowFlex=45,Object.assign(l,c),l.torsoTwist=38):ke(n,["abdominal","crunch","encogimiento","sit up"])?(f=!0,o="supine",a="mat",d="low_side",i.push("Flexión abdominal"),Object.assign(c,Fe("supine"),{leftHipFlex:58,rightHipFlex:58,leftKneeFlex:112,rightKneeFlex:112,leftArmLift:90,rightArmLift:90,leftElbowFlex:110,rightElbowFlex:110}),Object.assign(l,c,{torsoPitch:36,headPitch:25})):ke(n,["elevacion","elevar","subir","levantar"])&&(f=!0,i.push("Elevación controlada"),ke(n,["pierna","leg","rodilla"])?(l.leftHipFlex=78,l.rightHipFlex=r?0:78):(l.leftArmLift=155,l.rightArmLift=r?10:155));return s&&f&&(i.push("Variante isométrica"),Object.assign(c,l),l.pelvisOffsetY=Math.min(.3,l.pelvisOffsetY+.02),l.torsoPitch=Math.min(90,l.torsoPitch+2)),{spec:{title:e,posture:o,prop:a,camera:d,frameDelayMs:s?95:80,isometricPulse:s,poseA:c,poseB:l},matchedNotes:i.length>0?i:["Postura base sugerida (ajusta Pose A y Pose B a tu gusto)"],confidence:f?"high":i.length>0?"medium":"low"}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="187",kM=0,mm=1,zM=2,xl=1,qx=2,Sa=3,Jr=0,En=1,gi=2,Bs=0,Na=1,gm=2,xm=3,vm=4,GM=5,vs=100,HM=101,VM=102,WM=103,jM=104,XM=200,$M=201,qM=202,YM=203,Yx=204,Kx=205,KM=206,ZM=207,JM=208,QM=209,e1=210,t1=211,n1=212,i1=213,r1=214,Nd=0,Dd=1,Id=2,Za=3,Fd=4,Ud=5,Od=6,Bd=7,Zx=0,s1=1,a1=2,ki=0,Jx=1,Qx=2,ev=3,yh=4,tv=5,nv=6,iv=7,rv=300,$s=301,Ja=302,cu=303,uu=304,kd=1e3,Fi=1001,zd=1002,Zt=1003,o1=1004,Uo=1005,_n=1006,du=1007,dr=1008,Cn=1009,sv=1010,av=1011,Qa=1012,Sh=1013,Mi=1014,xi=1015,Ei=1016,Mh=1017,Eh=1018,qs=1020,ov=35902,lv=35899,cv=1021,uv=1022,vi=1023,wr=1026,fr=1027,dv=1028,wh=1029,Qr=1030,bh=1031,Ah=1033,vl=33776,_l=33777,yl=33778,Sl=33779,Gd=35840,Hd=35841,Vd=35842,Wd=35843,jd=36196,Xd=37492,$d=37496,qd=37488,Yd=37489,Zl=37490,Kd=37491,Zd=37808,Jd=37809,Qd=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,af=37816,of=37817,lf=37818,cf=37819,uf=37820,df=37821,ff=36492,hf=36494,pf=36495,mf=36283,gf=36284,Jl=36285,xf=36286,l1=3200,vf=0,c1=1,or="",Hn="srgb",Ql="srgb-linear",ec="linear",lt="srgb",fu=7680,u1=519,d1=512,f1=513,h1=514,fv=515,p1=516,m1=517,hv=518,pv=519,g1=35044,_m="300 es",si=2e3,eo=2001;function x1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function v1(){const t=tc("canvas");return t.style.display="block",t}const ym={};function Sm(...t){const e="THREE."+t.shift();console.log(e,...t)}function mv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=mv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function rt(...t){t=mv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ml(...t){const e=t.join(" ");e in ym||(ym[e]=!0,ze(...t))}function _1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const y1={[Nd]:Nd,[Id]:Od,[Fd]:Fd,[Za]:Ud,[Dd]:Dd,[Od]:Id,[Bd]:Bd,[Ud]:Za};class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hu=Math.PI/180,_f=180/Math.PI;function oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function S1(t,e){return(t%e+e)%e}function pu(t,e,n){return(1-n)*t+n*e}function M1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Th(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function E1(t,e){if(e.constructor===Float32Array)return t;const n=Th(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function w1(t,e){if(e.constructor===Float32Array)return t;const n=Th(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Fh=class Fh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fh.prototype.isVector2=!0;let Oe=Fh;class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],d=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(f!==v||c!==u||l!==p||d!==m){let x=c*u+l*p+d*m+f*v;x<0&&(u=-u,p=-p,m=-m,v=-v,x=-x);let h=1-o;if(x<.9995){const g=Math.acos(x),S=Math.sin(g);h=Math.sin(h*g)/S,o=Math.sin(o*g)/S,c=c*h+u*o,l=l*h+p*o,d=d*h+m*o,f=f*h+v*o}else{c=c*h+u*o,l=l*h+p*o,d=d*h+m*o,f=f*h+v*o;const g=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=g,l*=g,d*=g,f*=g}}e[n]=c,e[n+1]=l,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],d=i[r+3],f=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+d*f+c*p-l*u,e[n+1]=c*m+d*u+l*f-o*p,e[n+2]=l*m+d*p+o*u-c*f,e[n+3]=d*m-o*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(r/2),f=o(s/2),u=c(i/2),p=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=u*d*f+l*p*m,this._y=l*p*f-u*d*m,this._z=l*d*m+u*p*f,this._w=l*d*f-u*p*m;break;case"YXZ":this._x=u*d*f+l*p*m,this._y=l*p*f-u*d*m,this._z=l*d*m-u*p*f,this._w=l*d*f+u*p*m;break;case"ZXY":this._x=u*d*f-l*p*m,this._y=l*p*f+u*d*m,this._z=l*d*m+u*p*f,this._w=l*d*f-u*p*m;break;case"ZYX":this._x=u*d*f-l*p*m,this._y=l*p*f+u*d*m,this._z=l*d*m-u*p*f,this._w=l*d*f+u*p*m;break;case"YZX":this._x=u*d*f+l*p*m,this._y=l*p*f+u*d*m,this._z=l*d*m-u*p*f,this._w=l*d*f-u*p*m;break;case"XZY":this._x=u*d*f-l*p*m,this._y=l*p*f-u*d*m,this._z=l*d*m+u*p*f,this._w=l*d*f+u*p*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],d=n[6],f=n[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,d=n._w;return this._x=i*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-i*l,this._z=s*d+a*l+i*c-r*o,this._w=a*d-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,n=Math.sin(n*l)/d,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uh=class Uh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*d,this.y=i+c*d+o*l-s*f,this.z=r+c*f+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;let $=Uh;const mu=new $,Mm=new ea,Oh=class Oh{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],f=i[7],u=i[2],p=i[5],m=i[8],v=r[0],x=r[3],h=r[6],g=r[1],S=r[4],M=r[7],b=r[2],T=r[5],_=r[8];return s[0]=a*v+o*g+c*b,s[3]=a*x+o*S+c*T,s[6]=a*h+o*M+c*_,s[1]=l*v+d*g+f*b,s[4]=l*x+d*S+f*T,s[7]=l*h+d*M+f*_,s[2]=u*v+p*g+m*b,s[5]=u*x+p*S+m*T,s[8]=u*h+p*M+m*_,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return n*a*d-n*o*l-i*s*d+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*a-o*l,u=o*c-d*s,p=l*s-a*c,m=n*f+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*l-d*i)*v,e[2]=(o*i-r*a)*v,e[3]=u*v,e[4]=(d*n-r*c)*v,e[5]=(r*s-o*n)*v,e[6]=p*v,e[7]=(i*c-l*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return Ml("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gu.makeScale(e,n)),this}rotate(e){return Ml("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return Ml("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oh.prototype.isMatrix3=!0;let He=Oh;const gu=new He,Em=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b1(){const t={enabled:!0,workingColorSpace:Ql,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ql]:{primaries:e,whitePoint:i,transfer:ec,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),t}const Je=b1();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let as;class A1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=tc("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T1=0;class Ch{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xu(r[a].image)):s.push(xu(r[a]))}else s=xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?A1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let C1=0;const vu=new $;class pn extends is{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fi,r=Fi,s=_n,a=dr,o=vi,c=Cn,l=pn.DEFAULT_ANISOTROPY,d=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=oo(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=rv;pn.DEFAULT_ANISOTROPY=1;const Bh=class Bh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],p=c[5],m=c[9],v=c[2],x=c[6],h=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+x)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,M=(p+1)/2,b=(h+1)/2,T=(d+u)/4,_=(f+v)/4,E=(m+x)/4;return S>M&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=_/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=E/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=_/s,r=E/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-m)*(x-m)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(f-v)/g,this.z=(u-d)/g,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bh.prototype.isVector4=!0;let Mt=Bh;class R1 extends is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new pn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ch(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends R1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P1 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const rc=class rc{constructor(e,n,i,r,s,a,o,c,l,d,f,u,p,m,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,d,f,u,p,m,v,x)}set(e,n,i,r,s,a,o,c,l,d,f,u,p,m,v,x){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=m,h[11]=v,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*f,m=o*d,v=o*f;n[0]=c*d,n[4]=-c*f,n[8]=l,n[1]=p+m*l,n[5]=u-v*l,n[9]=-o*c,n[2]=v-u*l,n[6]=m+p*l,n[10]=a*c}else if(e.order==="YXZ"){const u=c*d,p=c*f,m=l*d,v=l*f;n[0]=u+v*o,n[4]=m*o-p,n[8]=a*l,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=p*o-m,n[6]=v+u*o,n[10]=a*c}else if(e.order==="ZXY"){const u=c*d,p=c*f,m=l*d,v=l*f;n[0]=u-v*o,n[4]=-a*f,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*d,n[9]=v-u*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const u=a*d,p=a*f,m=o*d,v=o*f;n[0]=c*d,n[4]=m*l-p,n[8]=u*l+v,n[1]=c*f,n[5]=v*l+u,n[9]=p*l-m,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,m=o*c,v=o*l;n[0]=c*d,n[4]=v-u*f,n[8]=m*f+p,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-l*d,n[6]=p*f+m,n[10]=u-v*f}else if(e.order==="XZY"){const u=a*c,p=a*l,m=o*c,v=o*l;n[0]=c*d,n[4]=-f,n[8]=l*d,n[1]=u*f+v,n[5]=a*d,n[9]=p*f-m,n[2]=m*f-p,n[6]=o*d,n[10]=v*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L1,e,N1)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Yi.crossVectors(i,bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Yi.crossVectors(i,bn)),Yi.normalize(),Oo.crossVectors(bn,Yi),r[0]=Yi.x,r[4]=Oo.x,r[8]=bn.x,r[1]=Yi.y,r[5]=Oo.y,r[9]=bn.y,r[2]=Yi.z,r[6]=Oo.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],f=i[5],u=i[9],p=i[13],m=i[2],v=i[6],x=i[10],h=i[14],g=i[3],S=i[7],M=i[11],b=i[15],T=r[0],_=r[4],E=r[8],N=r[12],P=r[1],I=r[5],z=r[9],R=r[13],C=r[2],D=r[6],G=r[10],k=r[14],B=r[3],F=r[7],W=r[11],K=r[15];return s[0]=a*T+o*P+c*C+l*B,s[4]=a*_+o*I+c*D+l*F,s[8]=a*E+o*z+c*G+l*W,s[12]=a*N+o*R+c*k+l*K,s[1]=d*T+f*P+u*C+p*B,s[5]=d*_+f*I+u*D+p*F,s[9]=d*E+f*z+u*G+p*W,s[13]=d*N+f*R+u*k+p*K,s[2]=m*T+v*P+x*C+h*B,s[6]=m*_+v*I+x*D+h*F,s[10]=m*E+v*z+x*G+h*W,s[14]=m*N+v*R+x*k+h*K,s[3]=g*T+S*P+M*C+b*B,s[7]=g*_+S*I+M*D+b*F,s[11]=g*E+S*z+M*G+b*W,s[15]=g*N+S*R+M*k+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],p=e[14],m=e[3],v=e[7],x=e[11],h=e[15],g=c*p-l*u,S=o*p-l*f,M=o*u-c*f,b=a*p-l*d,T=a*u-c*d,_=a*f-o*d;return n*(v*g-x*S+h*M)-i*(m*g-x*b+h*T)+r*(m*S-v*b+h*_)-s*(m*M-v*T+x*_)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return n*(a*d-o*l)-i*(s*d-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],p=e[11],m=e[12],v=e[13],x=e[14],h=e[15],g=n*o-i*a,S=n*c-r*a,M=n*l-s*a,b=i*c-r*o,T=i*l-s*o,_=r*l-s*c,E=d*v-f*m,N=d*x-u*m,P=d*h-p*m,I=f*x-u*v,z=f*h-p*v,R=u*h-p*x,C=g*R-S*z+M*I+b*P-T*N+_*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=(o*R-c*z+l*I)*D,e[1]=(r*z-i*R-s*I)*D,e[2]=(v*_-x*T+h*b)*D,e[3]=(u*T-f*_-p*b)*D,e[4]=(c*P-a*R-l*N)*D,e[5]=(n*R-r*P+s*N)*D,e[6]=(x*M-m*_-h*S)*D,e[7]=(d*_-u*M+p*S)*D,e[8]=(a*z-o*P+l*E)*D,e[9]=(i*P-n*z-s*E)*D,e[10]=(m*T-v*M+h*g)*D,e[11]=(f*M-d*T-p*g)*D,e[12]=(o*N-a*I-c*E)*D,e[13]=(n*I-i*N+r*E)*D,e[14]=(v*S-m*b-x*g)*D,e[15]=(d*b-f*S+u*g)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+i,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,d=a+a,f=o+o,u=s*l,p=s*d,m=s*f,v=a*d,x=a*f,h=o*f,g=c*l,S=c*d,M=c*f,b=i.x,T=i.y,_=i.z;return r[0]=(1-(v+h))*b,r[1]=(p+M)*b,r[2]=(m-S)*b,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(u+h))*T,r[6]=(x+g)*T,r[7]=0,r[8]=(m+S)*_,r[9]=(x-g)*_,r[10]=(1-(u+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),c=os.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);const l=1/a,d=1/o,f=1/c;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,n.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=si,c=!1){const l=this.elements,d=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,v;if(c)m=s/(a-s),v=a*s/(a-s);else if(o===si)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===eo)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=si,c=!1){const l=this.elements,d=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,v;if(c)m=1/(a-s),v=a/(a-s);else if(o===si)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===eo)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};rc.prototype.isMatrix4=!0;let wt=rc;const os=new $,Zn=new wt,L1=new $(0,0,0),N1=new $(1,1,1),Yi=new $,Oo=new $,bn=new $,bm=new wt,Am=new ea;class br{constructor(e=0,n=0,i=0,r=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class xv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D1=0;const Tm=new $,ls=new ea,bi=new wt,Bo=new $,da=new $,I1=new $,F1=new ea,Cm=new $(1,0,0),Rm=new $(0,1,0),Pm=new $(0,0,1),Lm={type:"added"},U1={type:"removed"},cs={type:"childadded",child:null},_u={type:"childremoved",child:null};class Qt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new $,n=new br,i=new ea,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new He}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,n){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bo.copy(e):Bo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(da,Bo,this.up):bi.lookAt(Bo,da,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(bi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),cs.child=e,this.dispatchEvent(cs),cs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(U1),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,I1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,F1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qt.DEFAULT_UP=new $(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ft extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O1={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const x=n.getJointPose(v,i),h=this._getHandJoint(l,v);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=S1(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Su(a,s,e+1/3),this.g=Su(a,s,e),this.b=Su(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=vv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Je.workingToColorSpace(on.copy(this),e),Math.round(Ze(on.r*255,0,255))*65536+Math.round(Ze(on.g*255,0,255))*256+Math.round(Ze(on.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Hn){Je.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(ko);const i=pu(Ki.h,ko.h,n),r=pu(Ki.s,ko.s,n),s=pu(Ki.l,ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Qe;Qe.NAMES=vv;class B1 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new $,Ai=new $,Mu=new $,Ti=new $,us=new $,ds=new $,Nm=new $,Eu=new $,wu=new $,bu=new $,Au=new Mt,Tu=new Mt,Cu=new Mt;class ri{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ai.subVectors(i,n),Mu.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Ai),c=Jn.dot(Mu),l=Ai.dot(Ai),d=Ai.dot(Mu),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-o*d)*u,m=(a*d-o*c)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Au.setScalar(0),Tu.setScalar(0),Cu.setScalar(0),Au.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,i),Cu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Au,s.x),a.addScaledVector(Tu,s.y),a.addScaledVector(Cu,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ai.subVectors(e,n),Jn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;us.subVectors(r,i),ds.subVectors(s,i),Eu.subVectors(e,i);const c=us.dot(Eu),l=ds.dot(Eu);if(c<=0&&l<=0)return n.copy(i);wu.subVectors(e,r);const d=us.dot(wu),f=ds.dot(wu);if(d>=0&&f<=d)return n.copy(r);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0&&c-d>0)return a=c/(c-d),n.copy(i).addScaledVector(us,a);bu.subVectors(e,s);const p=us.dot(bu),m=ds.dot(bu);if(m>=0&&p<=m)return n.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),n.copy(i).addScaledVector(ds,o);const x=d*m-p*f;if(x<=0&&f-d>=0&&p-m>=0)return Nm.subVectors(s,r),o=(f-d)/(f-d+(p-m)),n.copy(r).addScaledVector(Nm,o);const h=1/(x+v+u);return a=v*h,o=u*h,n.copy(i).addScaledVector(us,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Go.subVectors(this.max,fa),fs.subVectors(e.a,fa),hs.subVectors(e.b,fa),ps.subVectors(e.c,fa),Zi.subVectors(hs,fs),Ji.subVectors(ps,hs),Nr.subVectors(fs,ps);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Nr.z,Nr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Nr.z,0,-Nr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Nr.y,Nr.x,0];return!Ru(n,fs,hs,ps,Go)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,fs,hs,ps,Go))?!1:(Ho.crossVectors(Zi,Ji),n=[Ho.x,Ho.y,Ho.z],Ru(n,fs,hs,ps,Go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new $,new $,new $,new $,new $,new $,new $,new $],Qn=new $,zo=new lo,fs=new $,hs=new $,ps=new $,Zi=new $,Ji=new $,Nr=new $,fa=new $,Go=new $,Ho=new $,Dr=new $;function Ru(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Dr.fromArray(t,s);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),c=e.dot(Dr),l=n.dot(Dr),d=i.dot(Dr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Lt=new $,Vo=new Oe;let k1=0;class Xr extends is{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=g1,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?Th(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vo.fromBufferAttribute(this,n),Vo.applyMatrix3(e),this.setXY(n,Vo.x,Vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):E1(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):w1(e,this.array)}}class _v extends Xr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yv extends Xr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class at extends Xr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const z1=new lo,ha=new $,Pu=new $;class Rh{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):z1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const n=ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Pu)),this.expandByPoint(ha.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let G1=0;const kn=new wt,Lu=new Qt,ms=new $,An=new lo,pa=new lo,Wt=new $;class wn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x1(e)?yv:_v)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(An.min,pa.min),An.expandByPoint(Wt),Wt.addVectors(An.max,pa.max),An.expandByPoint(Wt)):(An.expandByPoint(pa.min),An.expandByPoint(pa.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Wt.fromBufferAttribute(o,l),c&&(ms.fromBufferAttribute(e,l),Wt.add(ms)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new $,c[N]=new $;const d=new $,f=new $,u=new $,p=new Oe,m=new Oe,v=new Oe,x=new $,h=new $;function g(N,P,I){l[N]=l[P]=l[I]=1,d.fromBufferAttribute(i,N),f.fromBufferAttribute(i,P),u.fromBufferAttribute(i,I),p.fromBufferAttribute(s,N),m.fromBufferAttribute(s,P),v.fromBufferAttribute(s,I),f.sub(d),u.sub(d),m.sub(p),v.sub(p);const z=1/(m.x*v.y-v.x*m.y);isFinite(z)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(z),h.copy(u).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(z),o[N].add(x),o[P].add(x),o[I].add(x),c[N].add(h),c[P].add(h),c[I].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,P=S.length;N<P;++N){const I=S[N],z=I.start,R=I.count;for(let C=z,D=z+R;C<D;C+=3)g(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const M=new $,b=new $,T=new $,_=new $;function E(N){T.fromBufferAttribute(r,N),_.copy(T);const P=o[N];M.copy(P),M.sub(T.multiplyScalar(T.dot(P))).normalize(),b.crossVectors(_,P);const z=b.dot(c[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,z)}for(let N=0,P=i.count;N<P;++N)l[N]&&E(N);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Xr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new $,s=new $,a=new $,o=new $,c=new $,l=new $,d=new $,f=new $;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,x),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),o.add(d),c.add(d),l.add(d),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,u=new l.constructor(c.length*d);let p=0,m=0;for(let v=0,x=c.length;v<x;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*d;for(let h=0;h<d;h++)u[m++]=l[p++]}return new Xr(u,d,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,f=l.length;d<f;d++){const u=l[d],p=e(u,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(n))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new $,H1=new $,V1=new He;class ir{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(H1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Nu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||V1.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let W1=0;class co extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Na,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yx,this.blendDst=Kx,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fu,this.stencilZFail=fu,this.stencilZPass=fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ir().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new $,Du=new $,Wo=new $,jo=new $;class j1{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Du.copy(e).add(n).multiplyScalar(.5),Wo.copy(n).sub(e).normalize(),jo.copy(this.origin).sub(Du);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Wo),o=jo.dot(this.direction),c=-jo.dot(Wo),l=jo.lengthSq(),d=Math.abs(1-a*a);let f,u,p,m;if(d>0)if(f=a*c-o,u=a*o-c,m=s*d,f>=0)if(u>=-m)if(u<=m){const v=1/d;f*=v,u*=v,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Du).addScaledVector(Wo,u),p}intersectSphere(e,n){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,m=n.x-a.x,v=n.y-a.y,x=n.z-a.z,h=i.x-a.x,g=i.y-a.y,S=i.z-a.z,M=Math.abs(c),b=Math.abs(l),T=Math.abs(d);let _,E,N,P,I,z,R,C,D,G,k,B;if(M>=b&&M>=T?(N=c,z=f,D=m,B=h,c>=0?(_=l,E=d,P=u,I=p,R=v,C=x,G=g,k=S):(_=d,E=l,P=p,I=u,R=x,C=v,G=S,k=g)):b>=T?(N=l,z=u,D=v,B=g,l>=0?(_=d,E=c,P=p,I=f,R=x,C=m,G=S,k=h):(_=c,E=d,P=f,I=p,R=m,C=x,G=h,k=S)):(N=d,z=p,D=x,B=S,d>=0?(_=c,E=l,P=f,I=u,R=m,C=v,G=h,k=g):(_=l,E=c,P=u,I=f,R=v,C=m,G=g,k=h)),N===0)return null;const F=_/N,W=E/N,K=1/N,oe=P-F*z,Te=I-W*z,Y=R-F*D,ae=C-W*D,U=G-F*B,se=k-W*B,ie=U*ae-se*Y,we=oe*se-Te*U,et=Y*Te-ae*oe;if(r){if(ie<0||we<0||et<0)return null}else if((ie<0||we<0||et<0)&&(ie>0||we>0||et>0))return null;const Z=ie+we+et;if(Z===0)return null;const Ee=K*(ie*z+we*D+et*B);return(Z>0?Ee<0:Ee>0)?null:this.at(Ee/Z,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sv extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dm=new wt,Ir=new j1,Xo=new Rh,Im=new $,$o=new $,qo=new $,Yo=new $,Iu=new $,Ko=new $,Fm=new $,Zo=new $;class $e extends Qt{constructor(e=new wn,n=new Sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ko.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],f=s[c];d!==0&&(Iu.fromBufferAttribute(f,e),a?Ko.addScaledVector(Iu,d):Ko.addScaledVector(Iu.sub(n),d))}n.add(Ko)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Xo.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Xo,Im)===null||Ir.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Dm.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Dm),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const x=u[m],h=a[x.materialIndex],g=Math.max(x.start,p.start),S=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let M=g,b=S;M<b;M+=3){const T=o.getX(M),_=o.getX(M+1),E=o.getX(M+2);r=Jo(this,h,e,i,l,d,f,T,_,E),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let x=m,h=v;x<h;x+=3){const g=o.getX(x),S=o.getX(x+1),M=o.getX(x+2);r=Jo(this,a,e,i,l,d,f,g,S,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const x=u[m],h=a[x.materialIndex],g=Math.max(x.start,p.start),S=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let M=g,b=S;M<b;M+=3){const T=M,_=M+1,E=M+2;r=Jo(this,h,e,i,l,d,f,T,_,E),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let x=m,h=v;x<h;x+=3){const g=x,S=x+1,M=x+2;r=Jo(this,a,e,i,l,d,f,g,S,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function X1(t,e,n,i,r,s,a,o){let c;if(e.side===En?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Jr,o),c===null)return null;Zo.copy(o),Zo.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Zo);return l<n.near||l>n.far?null:{distance:l,point:Zo.clone(),object:t}}function Jo(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,$o),t.getVertexPosition(c,qo),t.getVertexPosition(l,Yo);const d=X1(t,e,n,i,$o,qo,Yo,Fm);if(d){const f=new $;ri.getBarycoord(Fm,$o,qo,Yo,f),r&&(d.uv=ri.getInterpolatedAttribute(r,o,c,l,f,new Oe)),s&&(d.uv1=ri.getInterpolatedAttribute(s,o,c,l,f,new Oe)),a&&(d.normal=ri.getInterpolatedAttribute(a,o,c,l,f,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new $,materialIndex:0};ri.getNormal($o,qo,Yo,u.normal),d.face=u,d.barycoord=f}return d}class $1 extends pn{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Zt,d=Zt,f,u){super(null,a,o,c,l,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fr=new Rh,q1=new Oe(.5,.5),Qo=new $;class to{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,a=new ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],f=s[5],u=s[6],p=s[7],m=s[8],v=s[9],x=s[10],h=s[11],g=s[12],S=s[13],M=s[14],b=s[15];if(r[0].setComponents(l-a,p-d,h-m,b-g).normalize(),r[1].setComponents(l+a,p+d,h+m,b+g).normalize(),r[2].setComponents(l+o,p+f,h+v,b+S).normalize(),r[3].setComponents(l-o,p-f,h-v,b-S).normalize(),i)r[4].setComponents(c,u,x,M).normalize(),r[5].setComponents(l-c,p-u,h-x,b-M).normalize();else if(r[4].setComponents(l-c,p-u,h-x,b-M).normalize(),n===si)r[5].setComponents(l+c,p+u,h+x,b+M).normalize();else if(n===eo)r[5].setComponents(c,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const n=q1.distanceTo(e.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qo.x=r.normal.x>0?e.max.x:e.min.x,Qo.y=r.normal.y>0?e.max.y:e.min.y,Qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Um=new wt;class Ph{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Um.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new to),i[r].setFromProjectionMatrix(Um,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new to),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Ph().copy(this)}}class Mv extends pn{constructor(e=[],n=$s,i,r,s,a,o,c,l,d){super(e,n,i,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends pn{constructor(e,n,i=Mi,r,s,a,o=Zt,c=Zt,l,d=wr,f=1){if(d!==wr&&d!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Ev extends Ys{constructor(e,n=Mi,i=$s,r,s,a=Zt,o=Zt,c,l=wr){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wv extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sr extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],f=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function m(v,x,h,g,S,M,b,T,_,E,N){const P=M/_,I=b/E,z=M/2,R=b/2,C=T/2,D=_+1,G=E+1;let k=0,B=0;const F=new $;for(let W=0;W<G;W++){const K=W*I-R;for(let oe=0;oe<D;oe++){const Te=oe*P-z;F[v]=Te*g,F[x]=K*S,F[h]=C,l.push(F.x,F.y,F.z),F[v]=0,F[x]=0,F[h]=T>0?1:-1,d.push(F.x,F.y,F.z),f.push(oe/_),f.push(1-W/E),k+=1}}for(let W=0;W<E;W++)for(let K=0;K<_;K++){const oe=u+K+D*W,Te=u+K+D*(W+1),Y=u+(K+1)+D*(W+1),ae=u+(K+1)+D*W;c.push(oe,Te,ae),c.push(Te,Y,ae),B+=6}o.addGroup(p,B,N),p+=B,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nc extends wn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],d=n/2,f=Math.PI/2*e,u=n,p=2*f+u,m=i*2+s,v=r+1,x=new $,h=new $;for(let g=0;g<=m;g++){let S=0,M=0,b=0,T=0;if(g<=i){const N=g/i,P=N*Math.PI/2;M=-d-e*Math.cos(P),b=e*Math.sin(P),T=-e*Math.cos(P),S=N*f}else if(g<=i+s){const N=(g-i)/s;M=-d+N*n,b=e,T=0,S=f+N*u}else{const N=(g-i-s)/i,P=N*Math.PI/2;M=d+e*Math.sin(P),b=e*Math.cos(P),T=e*Math.sin(P),S=f+u+N*f}const _=Math.max(0,Math.min(1,S/p));let E=0;g===0?E=.5/r:g===m&&(E=-.5/r);for(let N=0;N<=r;N++){const P=N/r,I=P*Math.PI*2,z=Math.sin(I),R=Math.cos(I);h.x=-b*R,h.y=M,h.z=b*z,o.push(h.x,h.y,h.z),x.set(-b*R,T,b*z),x.normalize(),c.push(x.x,x.y,x.z),l.push(P+E,_)}if(g>0){const N=(g-1)*v;for(let P=0;P<r;P++){const I=N+P,z=N+P+1,R=g*v+P,C=g*v+P+1;a.push(I,z,R),a.push(z,C,R)}}}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Lh extends wn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],c=[],l=new $,d=new Oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=n;f++,u+=3){const p=i+f/n*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rr extends wn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],p=[];let m=0;const v=[],x=i/2;let h=0;g(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(p,2));function g(){const M=new $,b=new $;let T=0;const _=(n-e)/i;for(let E=0;E<=s;E++){const N=[],P=E/s,I=P*(n-e)+e;for(let z=0;z<=r;z++){const R=z/r,C=R*c+o,D=Math.sin(C),G=Math.cos(C);b.x=I*D,b.y=-P*i+x,b.z=I*G,f.push(b.x,b.y,b.z),M.set(D,_,G).normalize(),u.push(M.x,M.y,M.z),p.push(R,1-P),N.push(m++)}v.push(N)}for(let E=0;E<r;E++)for(let N=0;N<s;N++){const P=v[N][E],I=v[N+1][E],z=v[N+1][E+1],R=v[N][E+1];(e>0||N!==0)&&(d.push(P,I,R),T+=3),(n>0||N!==s-1)&&(d.push(I,z,R),T+=3)}l.addGroup(h,T,0),h+=T}function S(M){const b=m,T=new Oe,_=new $;let E=0;const N=M===!0?e:n,P=M===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,x*P,0),u.push(0,P,0),p.push(.5,.5),m++;const I=m;for(let z=0;z<=r;z++){const C=z/r*c+o,D=Math.cos(C),G=Math.sin(C);_.x=N*G,_.y=x*P,_.z=N*D,f.push(_.x,_.y,_.z),u.push(0,P,0),T.x=D*.5+.5,T.y=G*.5*P+.5,p.push(T.x,T.y),m++}for(let z=0;z<r;z++){const R=b+z,C=I+z;M===!0?d.push(C,C+1,R):d.push(C+1,C,R),E+=3}l.addGroup(h,E,M===!0?1:2),h+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bc extends wn{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Ze(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],d=1/n,f=new $,u=new Oe,p=new $,m=new $,v=new $;let x=0,h=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:x=e[g+1].x-e[g].x,h=e[g+1].y-e[g].y,p.x=h*1,p.y=-x,p.z=h*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:x=e[g+1].x-e[g].x,h=e[g+1].y-e[g].y,p.x=h*1,p.y=-x,p.z=h*0,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(m)}for(let g=0;g<=n;g++){const S=i+g*d*r,M=Math.sin(S),b=Math.cos(S);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*M,f.y=e[T].y,f.z=e[T].x*b,a.push(f.x,f.y,f.z),u.x=g/n,u.y=T/(e.length-1),o.push(u.x,u.y);const _=c[3*T+0]*M,E=c[3*T+1],N=c[3*T+0]*b;l.push(_,E,N)}}for(let g=0;g<n;g++)for(let S=0;S<e.length-1;S++){const M=S+g*e.length,b=M,T=M+e.length,_=M+e.length+1,E=M+1;s.push(b,T,E),s.push(_,E,T)}this.setIndex(s),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.points,e.segments,e.phiStart,e.phiLength)}}class Ac extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,d=c+1,f=e/o,u=n/c,p=[],m=[],v=[],x=[];for(let h=0;h<d;h++){const g=h*u-a;for(let S=0;S<l;S++){const M=S*f-s;m.push(M,-g,0),v.push(0,0,1),x.push(S/o),x.push(1-h/c)}}for(let h=0;h<c;h++)for(let g=0;g<o;g++){const S=g+l*h,M=g+l*(h+1),b=g+1+l*(h+1),T=g+1+l*h;p.push(S,M,T),p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nh extends wn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],d=[];let f=e;const u=(n-e)/r,p=new $,m=new Oe;for(let v=0;v<=r;v++){for(let x=0;x<=i;x++){const h=s+x/i*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,d.push(m.x,m.y)}f+=u}for(let v=0;v<r;v++){const x=v*(i+1);for(let h=0;h<i;h++){const g=h+x,S=g,M=g+i+1,b=g+i+2,T=g+1;o.push(S,M,T),o.push(M,b,T)}}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Li extends wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],f=new $,u=new $,p=[],m=[],v=[],x=[];for(let h=0;h<=i;h++){const g=[],S=h/i,M=a+S*o,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b);let _=0;h===0&&a===0?_=.5/n:h===i&&c===Math.PI&&(_=-.5/n);for(let E=0;E<=n;E++){const N=E/n,P=r+N*s;f.x=-T*Math.cos(P),f.y=b,f.z=T*Math.sin(P),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),x.push(N+_,1-S),g.push(l++)}d.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const S=d[h][g+1],M=d[h][g],b=d[h+1][g],T=d[h+1][g+1];(h!==0||a>0)&&p.push(S,M,T),(h!==i-1||c<Math.PI)&&p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dh extends wn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],d=[],f=[],u=new $,p=new $,m=new $;for(let v=0;v<=i;v++){const x=a+v/i*o;for(let h=0;h<=r;h++){const g=h/r*s;p.x=(e+n*Math.cos(x))*Math.cos(g),p.y=(e+n*Math.cos(x))*Math.sin(g),p.z=n*Math.sin(x),l.push(p.x,p.y,p.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),m.subVectors(p,u).normalize(),d.push(m.x,m.y,m.z),f.push(h/r),f.push(v/i)}}for(let v=1;v<=i;v++)for(let x=1;x<=r;x++){const h=(r+1)*v+x-1,g=(r+1)*(v-1)+x-1,S=(r+1)*(v-1)+x,M=(r+1)*v+x;c.push(h,g,M),c.push(g,S,M)}this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Om(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Om(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function Om(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Y1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const K1={clone:Ks,merge:dn};var Z1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z1,this.fragmentShader=J1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Q1 extends es{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zn extends co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eE extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tE extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Av extends Qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class nE extends Av{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Fu=new wt,Bm=new $,km=new $;class iE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bm),km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(km),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Fu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===eo||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),n.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const el=new $,tl=new ea,ui=new $;class Tv extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(el,tl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,ui.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(el,tl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,tl,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new $,zm=new Oe,Gm=new Oe;class ii extends Tv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,zm,Gm),n.subVectors(Gm,zm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Cv extends Tv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class rE extends iE{constructor(){super(new Cv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uu extends Av{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new rE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const gs=-90,xs=1;class yf extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(gs,xs,e,n);r.layers=this.layers,this.add(r);const s=new ii(gs,xs,e,n);s.layers=this.layers,this.add(s);const a=new ii(gs,xs,e,n);a.layers=this.layers,this.add(a);const o=new ii(gs,xs,e,n);o.layers=this.layers,this.add(o);const c=new ii(gs,xs,e,n);c.layers=this.layers,this.add(c);const l=new ii(gs,xs,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class sE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Hm(t,e,n,i){const r=aE(i);switch(n){case cv:return t*e;case dv:return t*e/r.components*r.byteLength;case wh:return t*e/r.components*r.byteLength;case Qr:return t*e*2/r.components*r.byteLength;case bh:return t*e*2/r.components*r.byteLength;case uv:return t*e*3/r.components*r.byteLength;case vi:return t*e*4/r.components*r.byteLength;case Ah:return t*e*4/r.components*r.byteLength;case vl:case _l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Wd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case Vd:return Math.max(t,8)*Math.max(e,8)/2;case jd:case Xd:case qd:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:case Zl:case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ff:case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Jl:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aE(t){switch(t){case Cn:case sv:return{byteLength:1,components:1};case Qa:case av:case Ei:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case Mi:case Sh:case xi:return{byteLength:4,components:1};case ov:case lv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oE(t){const e=new WeakMap;function n(o,c){const l=o.array,d=o.usage,f=l.byteLength,u=t.createBuffer();t.bindBuffer(c,u),t.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const d=c.array,f=c.updateRanges;if(t.bindBuffer(l,o),f.length===0)t.bufferSubData(l,0,d);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){const m=f[u],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){const v=f[p];t.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
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
#endif`,uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
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
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
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
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SE=`#ifdef USE_IRIDESCENCE
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
#endif`,ME=`#ifdef USE_BUMPMAP
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LE=`#define PI 3.141592653589793
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
} // validated`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OE="gl_FragColor = linearToOutputTexel( gl_FragColor );",BE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qE=`#ifdef USE_GRADIENTMAP
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
}`,YE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,QE=`#ifdef USE_ENVMAP
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
#endif`,ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rw=`PhysicalMaterial material;
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
#endif`,sw=`uniform sampler2D dfgLUT;
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
}`,aw=`
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
#endif`,ow=`#if defined( RE_IndirectDiffuse )
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
#endif`,lw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xw=`#if defined( USE_POINTS_UV )
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
#endif`,vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sw=`#if defined( USE_MORPHCOLORS )
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
#endif`,Mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ew=`#ifdef USE_MORPHTARGETS
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
#endif`,ww=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Aw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pw=`#ifdef USE_NORMALMAP
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
#endif`,Lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xw=`float getShadowMask() {
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
}`,$w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qw=`#ifdef USE_SKINNING
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
#endif`,Yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kw=`#ifdef USE_SKINNING
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
#endif`,Zw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`uniform float backgroundBlurriness;
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
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
}`,pb=`#if DEPTH_PACKING == 3200
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
}`,mb=`#define DISTANCE
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
}`,gb=`#define DISTANCE
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Eb=`#define LAMBERT
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
}`,wb=`#define LAMBERT
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
}`,bb=`#define MATCAP
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
}`,Ab=`#define MATCAP
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
}`,Tb=`#define NORMAL
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
}`,Cb=`#define NORMAL
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
}`,Rb=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,Lb=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,Ib=`#define TOON
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
}`,Fb=`uniform float size;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Bb=`uniform vec3 color;
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
}`,kb=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:lE,alphahash_pars_fragment:cE,alphamap_fragment:uE,alphamap_pars_fragment:dE,alphatest_fragment:fE,alphatest_pars_fragment:hE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:xE,begin_vertex:vE,beginnormal_vertex:_E,bsdfs:yE,iridescence_fragment:SE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:wE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:AE,color_fragment:TE,color_pars_fragment:CE,color_pars_vertex:RE,color_vertex:PE,common:LE,defaultnormal_vertex:NE,displacementmap_pars_vertex:DE,displacementmap_vertex:IE,emissivemap_fragment:FE,emissivemap_pars_fragment:UE,colorspace_fragment:OE,colorspace_pars_fragment:BE,envmap_fragment:kE,envmap_common_pars_fragment:zE,envmap_pars_fragment:GE,envmap_pars_vertex:HE,envmap_physical_pars_fragment:QE,envmap_vertex:VE,fog_vertex:WE,fog_pars_vertex:jE,fog_fragment:XE,fog_pars_fragment:$E,gradientmap_pars_fragment:qE,lightmap_pars_fragment:YE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:ZE,lights_pars_begin:JE,lights_toon_fragment:ew,lights_toon_pars_fragment:tw,lights_phong_fragment:nw,lights_phong_pars_fragment:iw,lights_physical_fragment:rw,lights_physical_pars_fragment:sw,lights_fragment_begin:aw,lights_fragment_maps:ow,lights_fragment_end:lw,lightprobes_pars_fragment:cw,logdepthbuf_fragment:uw,logdepthbuf_pars_fragment:dw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:hw,map_fragment:pw,map_pars_fragment:mw,map_particle_fragment:gw,map_particle_pars_fragment:xw,metalnessmap_fragment:vw,metalnessmap_pars_fragment:_w,morphinstance_vertex:yw,morphcolor_vertex:Sw,morphnormal_vertex:Mw,morphtarget_pars_vertex:Ew,morphtarget_vertex:ww,normal_fragment_begin:bw,normal_fragment_maps:Aw,normal_pars_fragment:Tw,normal_pars_vertex:Cw,normal_vertex:Rw,normalmap_pars_fragment:Pw,clearcoat_normal_fragment_begin:Lw,clearcoat_normal_fragment_maps:Nw,clearcoat_pars_fragment:Dw,iridescence_pars_fragment:Iw,opaque_fragment:Fw,packing:Uw,premultiplied_alpha_fragment:Ow,project_vertex:Bw,dithering_fragment:kw,dithering_pars_fragment:zw,roughnessmap_fragment:Gw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Vw,shadowmap_pars_vertex:Ww,shadowmap_vertex:jw,shadowmask_pars_fragment:Xw,skinbase_vertex:$w,skinning_pars_vertex:qw,skinning_vertex:Yw,skinnormal_vertex:Kw,specularmap_fragment:Zw,specularmap_pars_fragment:Jw,tonemapping_fragment:Qw,tonemapping_pars_fragment:eb,transmission_fragment:tb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:rb,uv_vertex:sb,worldpos_vertex:ab,background_vert:ob,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:ub,cube_vert:db,cube_frag:fb,depth_vert:hb,depth_frag:pb,distance_vert:mb,distance_frag:gb,equirect_vert:xb,equirect_frag:vb,linedashed_vert:_b,linedashed_frag:yb,meshbasic_vert:Sb,meshbasic_frag:Mb,meshlambert_vert:Eb,meshlambert_frag:wb,meshmatcap_vert:bb,meshmatcap_frag:Ab,meshnormal_vert:Tb,meshnormal_frag:Cb,meshphong_vert:Rb,meshphong_frag:Pb,meshphysical_vert:Lb,meshphysical_frag:Nb,meshtoon_vert:Db,meshtoon_frag:Ib,points_vert:Fb,points_frag:Ub,shadow_vert:Ob,shadow_frag:Bb,sprite_vert:kb,sprite_frag:zb},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},pi={basic:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:dn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:dn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:dn([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:dn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:dn([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:dn([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:dn([Se.common,Se.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:dn([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};pi.physical={uniforms:dn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const nl={r:0,b:0,g:0},Gb=new wt,Pv=new He;Pv.set(-1,0,0,0,1,0,0,0,1);function Hb(t,e,n,i,r,s){const a=new Qe(0);let o=r===!0?0:1,c,l,d=null,f=0,u=null;function p(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const M=g.backgroundBlurriness>0;S=e.get(S,M)}return S}function m(g){let S=!1;const M=p(g);M===null?x(a,o):M&&M.isColor&&(x(M,1),S=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,S){const M=p(S);M&&M.isCubeTexture?(l===void 0&&(l=new $e(new Sr(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:Ks(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Pv),l.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,(d!==M||f!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $e(new Ac(2,2),new es({name:"BackgroundMaterial",uniforms:Ks(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,S){g.getRGB(nl,bv(t)),n.buffers.color.setClear(nl.r,nl.g,nl.b,S,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,S=1){a.set(g),o=S,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(a,o)},render:m,addToRenderList:v,dispose:h}}function Vb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(I,z,R,C,D){let G=!1;const k=f(I,C,R,z);s!==k&&(s=k,l(s.object)),G=p(I,C,R,D),G&&m(I,C,R,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(I,z,R,C),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return t.createVertexArray()}function l(I){return t.bindVertexArray(I)}function d(I){return t.deleteVertexArray(I)}function f(I,z,R,C){const D=C.wireframe===!0;let G=i[z.id];G===void 0&&(G={},i[z.id]=G);const k=I.isInstancedMesh===!0?I.id:0;let B=G[k];B===void 0&&(B={},G[k]=B);let F=B[R.id];F===void 0&&(F={},B[R.id]=F);let W=F[D];return W===void 0&&(W=u(c()),F[D]=W),W}function u(I){const z=[],R=[],C=[];for(let D=0;D<n;D++)z[D]=0,R[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:R,attributeDivisors:C,object:I,attributes:{},index:null}}function p(I,z,R,C){const D=s.attributes,G=z.attributes;let k=0;const B=R.getAttributes();for(const F in B)if(B[F].location>=0){const K=D[F];let oe=G[F];if(oe===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;k++}return s.attributesNum!==k||s.index!==C}function m(I,z,R,C){const D={},G=z.attributes;let k=0;const B=R.getAttributes();for(const F in B)if(B[F].location>=0){let K=G[F];K===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),D[F]=oe,k++}s.attributes=D,s.attributesNum=k,s.index=C}function v(){const I=s.newAttributes;for(let z=0,R=I.length;z<R;z++)I[z]=0}function x(I){h(I,0)}function h(I,z){const R=s.newAttributes,C=s.enabledAttributes,D=s.attributeDivisors;R[I]=1,C[I]===0&&(t.enableVertexAttribArray(I),C[I]=1),D[I]!==z&&(t.vertexAttribDivisor(I,z),D[I]=z)}function g(){const I=s.newAttributes,z=s.enabledAttributes;for(let R=0,C=z.length;R<C;R++)z[R]!==I[R]&&(t.disableVertexAttribArray(R),z[R]=0)}function S(I,z,R,C,D,G,k){k===!0?t.vertexAttribIPointer(I,z,R,D,G):t.vertexAttribPointer(I,z,R,C,D,G)}function M(I,z,R,C){v();const D=C.attributes,G=R.getAttributes(),k=z.defaultAttributeValues;for(const B in G){const F=G[B];if(F.location>=0){let W=D[B];if(W===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const K=W.normalized,oe=W.itemSize,Te=e.get(W);if(Te===void 0)continue;const Y=Te.buffer,ae=Te.type,U=Te.bytesPerElement,se=ae===t.INT||ae===t.UNSIGNED_INT||W.gpuType===Sh;if(W.isInterleavedBufferAttribute){const ie=W.data,we=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,et=W.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Z=0;Z<F.locationSize;Z++)h(F.location+Z,ie.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Z=0;Z<F.locationSize;Z++)x(F.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let Z=0;Z<F.locationSize;Z++)S(F.location+Z,oe/F.locationSize,ae,K,we*U,(et+oe/F.locationSize*Z)*U,se)}else{if(W.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)h(F.location+ie,W.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<F.locationSize;ie++)x(F.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let ie=0;ie<F.locationSize;ie++)S(F.location+ie,oe/F.locationSize,ae,K,oe*U,oe/F.locationSize*ie*U,se)}}else if(k!==void 0){const K=k[B];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(F.location,K);break;case 3:t.vertexAttrib3fv(F.location,K);break;case 4:t.vertexAttrib4fv(F.location,K);break;default:t.vertexAttrib1fv(F.location,K)}}}}g()}function b(){N();for(const I in i){const z=i[I];for(const R in z){const C=z[R];for(const D in C){const G=C[D];for(const k in G)d(G[k].object),delete G[k];delete C[D]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const z=i[I.id];for(const R in z){const C=z[R];for(const D in C){const G=C[D];for(const k in G)d(G[k].object),delete G[k];delete C[D]}}delete i[I.id]}function _(I){for(const z in i){const R=i[z];for(const C in R){const D=R[C];if(D[I.id]===void 0)continue;const G=D[I.id];for(const k in G)d(G[k].object),delete G[k];delete D[I.id]}}}function E(I){for(const z in i){const R=i[z],C=I.isInstancedMesh===!0?I.id:0,D=R[C];if(D!==void 0){for(const G in D){const k=D[G];for(const B in k)d(k[B].object),delete k[B];delete D[G]}delete R[C],Object.keys(R).length===0&&delete i[z]}}}function N(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:x,disableUnusedAttributes:g}}function Wb(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,d){d!==0&&(t.drawArraysInstanced(i,c,l,d),n.update(l,i,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let u=0;for(let p=0;p<d;p++)u+=l[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function jb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==vi&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Cn&&_!==xi&&!E&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const d=c(l);d!==l&&(ze("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:T}}function Xb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ir,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const m=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,h=t.get(f);if(!r||m===null||m.length===0||s&&!x)s?d(null):l();else{const g=s?0:i,S=g*4;let M=h.clippingState||null;c.value=M,M=d(m,u,S,p);for(let b=0;b!==S;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,m){const v=f!==null?f.length:0;let x=null;if(v!==0){if(x=c.value,m!==!0||x===null){const h=p+v*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<h)&&(x=new Float32Array(h));for(let S=0,M=p;S!==v;++S,M+=4)a.copy(f[S]).applyMatrix4(g,o),a.normal.toArray(x,M),x[M+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}class Ih extends Si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sr(5,5,5),s=new es({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Bs});s.uniforms.tEquirect.value=n;const a=new $e(r,s),o=n.minFilter;return n.minFilter===dr&&(n.minFilter=_n),new yf(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Vm=256,$b=3,qb=20,Lv=256,Nv=16,Yb=3,Kb=new $,Zb=new Qe;class ic{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yf(1,10,null),this._boxMesh=new $e(new Sr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Kb}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),d=this._getSourceTarget(!0);n>0&&(d.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,m=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Zb));const x=new yf(i,r,d);return x.position.copy(o),x.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=m,e.background=v,n>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,n)),this._applyPMREM(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Vm,M1(e))}_fromTexture(e,n){e.mapping===$s||e.mapping===Ja?this._setSize(e.image.length===0?Vm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Wm(e,!1,!1),i=Math.log2(e)-$b;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Wm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===$s||e.mapping===Ja?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Jb(),this._integrationMaterial=Qb());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Nv);for(let a=0;a<=i;a++){const o=ic.lodToRoughness(a,i);if(a>i-Yb)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(n)+.5*Math.log2(6/(Lv*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=eA());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Wm(t,e,n){return new Ih(t,{minFilter:dr,generateMipmaps:e,type:Ei,colorSpace:Ql,depthBuffer:n})}function uo(t,e,n){return new es({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:n,side:En,blending:Bs,depthTest:!1,depthWrite:!1})}function Jb(){return uo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lv}u

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
	`)}function Qb(){return uo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nv}},`

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
	`)}function eA(){return uo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qb}
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
	`)}function jm(){return uo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xm(){return uo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tA(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===cu||p===uu)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new Ih(m.height);return v.fromEquirectangularTexture(t,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,m=p===cu||p===uu,v=p===$s||p===Ja;if(m||v){let x=n.get(u);const h=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new ic(t)),x=m?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),x.texture;if(x!==void 0)return x.texture;{const g=u.image;return m&&g&&g.height>0||v&&g&&c(g)?(i===null&&(i=new ic(t)),x=m?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),u.addEventListener("dispose",d),x.texture):null}}}return u}function o(u,p){return p===cu?u.mapping=$s:p===uu&&(u.mapping=Ja),u}function c(u){let p=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&p++;return p===m}function l(u){const p=u.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function nA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ml("WebGLRenderer: "+i+" extension not supported."),r}}}function iA(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(m=>delete r[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",o),delete r[m.id],a.unregister(m);const v=s.get(m);v&&(e.remove(v),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function l(m,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),n.memory.geometries++),v}function d(m){const v=m.attributes;for(const x in v)e.update(v[x],t.ARRAY_BUFFER)}function f(m){const v=m.index,x=m.attributes.position;let h=0;if(x===void 0)return;const g=v!==null?v.array.length:x.array.length/3-1,S=x.count>=65535?yv:_v,M=new S(Math.ceil(g/3)*6,1),b=M.array;if(v!==null){const _=v.array;h=v.version;for(let E=0,N=0;E<g;E+=3){const P=_[E+0],I=_[E+1],z=_[E+2];b[N++]=P,b[N++]=I,b[N++]=I,b[N++]=z,b[N++]=z,b[N++]=P}}else{h=x.version;for(let _=0,E=0;_<g;_+=3){const N=_+0,P=_+1,I=_+2;b[E++]=N,b[E++]=P,b[E++]=P,b[E++]=I,b[E++]=I,b[E++]=N}}M.version=h;const T=s.get(m);T&&e.remove(T),s.set(m,M)}function u(m){const v=s.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&f(m)}else f(m);return s.get(m)}function p(){for(const m in r){const v=r[m].deref();v!==void 0&&c(v)}}return{get:l,update:d,getWireframeAttribute:u,dispose:p}}function rA(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){t.drawElements(i,u,s,f*a),n.update(u,i,1)}function l(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,f*a,p),n.update(u,i,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let v=0;for(let x=0;x<p;x++)v+=u[x];n.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function sA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aA(t,e,n){const i=new WeakMap,r=new Mt;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let P=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),x===!0&&(M=3);let b=o.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const _=new Float32Array(b*T*4*f),E=new gv(_,b,T,f);E.type=xi,E.needsUpdate=!0;const N=M*4;for(let I=0;I<f;I++){const z=h[I],R=g[I],C=S[I],D=b*T*4*I;for(let G=0;G<z.count;G++){const k=G*N;m===!0&&(r.fromBufferAttribute(z,G),_[D+k+0]=r.x,_[D+k+1]=r.y,_[D+k+2]=r.z,_[D+k+3]=0),v===!0&&(r.fromBufferAttribute(R,G),_[D+k+4]=r.x,_[D+k+5]=r.y,_[D+k+6]=r.z,_[D+k+7]=0),x===!0&&(r.fromBufferAttribute(C,G),_[D+k+8]=r.x,_[D+k+9]=r.y,_[D+k+10]=r.z,_[D+k+11]=C.itemSize===4?r.w:1)}}u={count:f,texture:E,size:new Oe(b,T)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function oA(t,e,n,i,r){let s=new WeakMap;function a(l){const d=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const lA={[Jx]:"LINEAR_TONE_MAPPING",[Qx]:"REINHARD_TONE_MAPPING",[ev]:"CINEON_TONE_MAPPING",[yh]:"ACES_FILMIC_TONE_MAPPING",[nv]:"AGX_TONE_MAPPING",[iv]:"NEUTRAL_TONE_MAPPING",[tv]:"CUSTOM_TONE_MAPPING"};function cA(t,e,n,i,r,s){const a=new Si(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const d=new wn;d.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new at([0,2,0,0,2,0],2));const f=new Q1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new $e(d,f),p=new Cv(-1,1,1,-1,0,1);let m=null,v=null,x=!1,h,g=null,S=[],M=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),c!==null&&c.setSize(b,T);for(let _=0;_<S.length;_++){const E=S[_];E.setSize&&E.setSize(b,T)}},this.setEffects=function(b){S=b,M=S.length>0&&S[0].isRenderPass===!0;const T=a.width,_=a.height;S.length>0&&o===null&&(o=new Si(T,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),c=new Si(T,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));const E=r===!0&&S.some(N=>N.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new Ys(T,_),s===!0&&(l.format=fr,l.type=qs)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let N=0;N<S.length;N++){const P=S[N];P.setSize&&P.setSize(T,_),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(b,T){if(x||b.toneMapping===ki&&S.length===0)return!1;if(g=T,T!==null){const _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return M===!1&&b.setRenderTarget(a),h=b.toneMapping,b.toneMapping=ki,!0},this.hasRenderPass=function(){return M},this.end=function(b,T){b.toneMapping=h,x=!0;let _=a,E=o;for(let N=0;N<S.length;N++){const P=S[N];P.enabled!==!1&&(P.render(b,E,_,T),P.needsSwap!==!1&&(_=E,E=E===o?c:o))}if(m!==b.outputColorSpace||v!==b.toneMapping){m=b.outputColorSpace,v=b.toneMapping,f.defines={},Je.getTransfer(m)===lt&&(f.defines.SRGB_TRANSFER="");const N=lA[v];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(g),b.render(u,p),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}const Dv=new pn,Iv=new Ys(1,1),Fv=new Ev(1),Uv=new gv,Ov=new P1,Bv=new Mv,$m=[],qm=[],Ym=new Float32Array(16),Km=new Float32Array(9),Zm=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$m[r];if(s===void 0&&(s=new Float32Array(r),$m[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=qm[e];n===void 0&&(n=new Int32Array(e),qm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function pA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Zm.set(i),t.uniformMatrix2fv(this.addr,!1,Zm),kt(n,i)}}function mA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Km.set(i),t.uniformMatrix3fv(this.addr,!1,Km),kt(n,i)}}function gA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;Ym.set(i),t.uniformMatrix4fv(this.addr,!1,Ym),kt(n,i)}}function xA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function SA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Cc(t){return t.version===0&&(t.compareFunction=pv,t.needsUpdate=!0),t}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Cc(Iv):s=Dv,n.setTexture2D(e||s,r)}function AA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ov,r)}function TA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Cc(Fv):s=Bv,n.setTextureCube(e||s,r)}function CA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Uv,r)}function RA(t){switch(t){case 5126:return uA;case 35664:return dA;case 35665:return fA;case 35666:return hA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return xA;case 35667:case 35671:return vA;case 35668:case 35672:return _A;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return CA}}function PA(t,e){t.uniform1fv(this.addr,e)}function LA(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function NA(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function DA(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function IA(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function FA(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function UA(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OA(t,e){t.uniform1iv(this.addr,e)}function BA(t,e){t.uniform2iv(this.addr,e)}function kA(t,e){t.uniform3iv(this.addr,e)}function zA(t,e){t.uniform4iv(this.addr,e)}function GA(t,e){t.uniform1uiv(this.addr,e)}function HA(t,e){t.uniform2uiv(this.addr,e)}function VA(t,e){t.uniform3uiv(this.addr,e)}function WA(t,e){t.uniform4uiv(this.addr,e)}function jA(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Cc(Iv):a=Dv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function XA(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ov,s[a])}function $A(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Cc(Fv):a=Bv;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function qA(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Uv,s[a])}function YA(t){switch(t){case 5126:return PA;case 35664:return LA;case 35665:return NA;case 35666:return DA;case 35674:return IA;case 35675:return FA;case 35676:return UA;case 5124:case 35670:return OA;case 35667:case 35671:return BA;case 35668:case 35672:return kA;case 35669:case 35673:return zA;case 5125:return GA;case 36294:return HA;case 36295:return VA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return qA}}class KA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RA(n.type)}}class ZA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YA(n.type)}}class JA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ou=/(\w+)(\])?(\[|\.)?/g;function Jm(t,e){t.seq.push(e),t.map[e.id]=e}function QA(t,e,n){const i=t.name,r=i.length;for(Ou.lastIndex=0;;){const s=Ou.exec(i),a=Ou.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Jm(n,l===void 0?new KA(o,t,e):new ZA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new JA(o),Jm(n,f)),n=f}}}class El{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);QA(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Qm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eT=37297;let tT=0;function nT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const e0=new He;function iT(t){Je._getMatrix(e0,Je.workingColorSpace,t);const e=`mat3( ${e0.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case ec:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function t0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+nT(t.getShaderSource(e),o)}else return s}function rT(t,e){const n=iT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const sT={[Jx]:"Linear",[Qx]:"Reinhard",[ev]:"Cineon",[yh]:"ACESFilmic",[nv]:"AgX",[iv]:"Neutral",[tv]:"Custom"};function aT(t,e){const n=sT[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const il=new $;function oT(){Je.getLuminanceCoefficients(il);const t=il.x.toFixed(4),e=il.y.toFixed(4),n=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function cT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ma(t){return t!==""}function n0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function i0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(t){return t.replace(dT,fT)}function fT(t,e){const n=Xe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sf(n)}const hT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r0(t){return t.replace(hT,pT)}function pT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function s0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const mT={[xl]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function gT(t){return mT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xT={[Ja]:"ENVMAP_MODE_REFRACTION"};function vT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":xT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _T={[Zx]:"ENVMAP_BLENDING_MULTIPLY",[s1]:"ENVMAP_BLENDING_MIX",[a1]:"ENVMAP_BLENDING_ADD"};function yT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":_T[t.combine]||"ENVMAP_BLENDING_NONE"}function ST(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=gT(n),l=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=vT(n),f=yT(n),u=lT(n),p=cT(s),m=r.createProgram();let v,x,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Ma).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Ma).join(`
`),x.length>0&&(x+=`
`)):(v=[s0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),x=[s0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?Xe.tonemapping_pars_fragment:"",n.toneMapping!==ki?aT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,rT("linearToOutputTexel",n.outputColorSpace),oT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Sf(a),a=n0(a,n),a=i0(a,n),o=Sf(o),o=n0(o,n),o=i0(o,n),a=r0(a),o=r0(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",n.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const g=h+v+a,S=h+x+o,M=Qm(r,r.VERTEX_SHADER,g),b=Qm(r,r.FRAGMENT_SHADER,S);r.attachShader(m,M),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function T(P){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(m)||"",z=r.getShaderInfoLog(M)||"",R=r.getShaderInfoLog(b)||"",C=I.trim(),D=z.trim(),G=R.trim();let k=!0,B=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,M,b);else{const F=t0(r,M,"vertex"),W=t0(r,b,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+F+`
`+W)}else C!==""?ze("WebGLProgram: Program Info Log:",C):(D===""||G==="")&&(B=!1);B&&(P.diagnostics={runnable:k,programLog:C,vertexShader:{log:D,prefix:v},fragmentShader:{log:G,prefix:x}})}r.deleteShader(M),r.deleteShader(b),_=new El(r,m),E=uT(r,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,eT)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wT(e),n.set(e,i)),i}}class wT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function bT(t){return t===Qr||t===Zl||t===Jl}function AT(t,e,n,i,r,s){const a=new xv,o=new ET,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,E,N,P,I,z){const R=P.fog,C=I.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||D,G),B=u[_.type];let F=i.precision;_.precision!==null&&(F=i.getMaxPrecision(_.precision),F!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",F,"instead."));const W=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,K=W!==void 0?W.length:0;let oe=0;C.morphAttributes.position!==void 0&&(oe=1),C.morphAttributes.normal!==void 0&&(oe=2),C.morphAttributes.color!==void 0&&(oe=3);let Te,Y,ae,U;if(B){const ye=pi[B];Te=ye.vertexShader,Y=ye.fragmentShader}else{Te=_.vertexShader,Y=_.fragmentShader;const ye=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,ye,ot),ae=ye.id,U=ot.id}const se=t.getRenderTarget(),ie=t.state.buffers.depth.getReversed(),we=I.isInstancedMesh===!0,et=I.isBatchedMesh===!0,Z=!!_.map,Ee=!!_.matcap,Ue=!!k,Pe=Ue&&k.isPMREMTexture===!0,st=!!_.aoMap,ht=!!_.lightMap,zt=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,In=!!_.displacementMap,Gt=!!_.emissiveMap,Fn=!!_.metalnessMap,Un=!!_.roughnessMap,On=_.anisotropy>0,V=_.clearcoat>0,Bn=_.diffuseRoughness>0,xt=_.dispersion>0,vt=_.retroreflectivity>0,_e=_.iridescence>0,Dt=_.sheen>0,Be=_.transmission>0,Ge=On&&!!_.anisotropyMap,L=V&&!!_.clearcoatMap,w=V&&!!_.clearcoatNormalMap,X=V&&!!_.clearcoatRoughnessMap,le=Bn&&!!_.diffuseRoughnessMap,re=_e&&!!_.iridescenceMap,fe=_e&&!!_.iridescenceThicknessMap,xe=Dt&&!!_.sheenColorMap,ee=Dt&&!!_.sheenRoughnessMap,te=!!_.specularMap,pe=!!_.specularColorMap,O=!!_.specularIntensityMap,ne=Be&&!!_.transmissionMap,Q=Be&&!!_.thicknessMap,me=!!_.gradientMap,de=!!_.alphaMap,he=_.alphaTest>0,Ne=!!_.alphaHash,je=!!_.extensions;let ue=ki;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ue=t.toneMapping);const De=Pe?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,We={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:Te,fragmentShader:Y,defines:_.defines,customVertexShaderID:ae,customFragmentShaderID:U,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:F,batching:et,batchingColor:et&&I._colorsTexture!==null,instancing:we,instancingColor:we&&I.instanceColor!==null,instancingMorph:we&&I.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Z,matcap:Ee,envMap:Ue,envMapMode:Ue&&k.mapping,envMapPMREM:Pe,envMapMaxLod:Pe?De.length-1:null,envMapSize:Pe?De[0].width:null,aoMap:st,lightMap:ht,bumpMap:zt,normalMap:gt,displacementMap:In,emissiveMap:Gt,normalMapObjectSpace:gt&&_.normalMapType===c1,normalMapTangentSpace:gt&&_.normalMapType===vf,packedNormalMap:gt&&_.normalMapType===vf&&bT(_.normalMap.format),metalnessMap:Fn,roughnessMap:Un,anisotropy:On,anisotropyMap:Ge,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:X,diffuseRoughness:Bn,diffuseRoughnessMap:le,dispersion:xt,retroreflection:vt,iridescence:_e,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:Dt,sheenColorMap:xe,sheenRoughnessMap:ee,specularMap:te,specularColorMap:pe,specularIntensityMap:O,transmission:Be,transmissionMap:ne,thicknessMap:Q,gradientMap:me,opaque:_.transparent===!1&&_.blending===Na&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:he,alphaHash:Ne,combine:_.combine,mapUv:Z&&p(_.map.channel),aoMapUv:st&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:zt&&p(_.bumpMap.channel),normalMapUv:gt&&p(_.normalMap.channel),displacementMapUv:In&&p(_.displacementMap.channel),emissiveMapUv:Gt&&p(_.emissiveMap.channel),metalnessMapUv:Fn&&p(_.metalnessMap.channel),roughnessMapUv:Un&&p(_.roughnessMap.channel),anisotropyMapUv:Ge&&p(_.anisotropyMap.channel),clearcoatMapUv:L&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(_.sheenRoughnessMap.channel),specularMapUv:te&&p(_.specularMap.channel),specularColorMapUv:pe&&p(_.specularColorMap.channel),specularIntensityMapUv:O&&p(_.specularIntensityMap.channel),transmissionMapUv:ne&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:de&&p(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(gt||On),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(Z||de),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:oe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.filter(ye=>ye.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ue,decodeVideoTexture:Z&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Gt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gi,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function v(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(x(E,_),h(E,_),E.push(t.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function x(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function h(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function g(_){const E=u[_.type];let N;if(E){const P=pi[E];N=K1.clone(P.uniforms)}else N=_.uniforms;return N}function S(_,E){let N=d.get(E);return N!==void 0?++N.usedTimes:(N=new ST(t,E,_,r),l.push(N),d.set(E,N)),N}function M(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:g,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:T}}function TT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function a0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function o0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,m,v,x,h){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:x,group:h},t[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=m,g.materialVariant=a(u),g.groupOrder=v,g.renderOrder=u.renderOrder,g.z=x,g.group=h),e++,g}function c(u,p,m,v,x,h,g){g.reversedDepth===!0&&(x=-x);const S=o(u,p,m,v,x,h);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):n.push(S)}function l(u,p,m,v,x,h){const g=o(u,p,m,v,x,h);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function d(u,p){n.length>1&&n.sort(u||CT),i.length>1&&i.sort(p||a0),r.length>1&&r.sort(p||a0)}function f(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:d}}function RT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new o0,t.set(i,[a])):r>=s.length?(a=new o0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function PT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new $,color:new Qe};break;case"SpotLight":n={position:new $,direction:new $,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function LT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NT=0;function DT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IT(t){const e=new PT,n=LT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const r=new $,s=new wt,a=new wt;function o(l){let d=0,f=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,m=0,v=0,x=0,h=0,g=0,S=0,M=0,b=0,T=0,_=0,E=0,N=0,P=0;l.sort(DT);for(let z=0,R=l.length;z<R;z++){const C=l[z],D=C.color,G=C.intensity,k=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Qr?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=D.r*G,f+=D.g*G,u+=D.b*G;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],G);P++}else if(C.isSunLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,K=n.get(C);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[m]=K,i.sunShadowMap[m]=B;const oe=W.getViewportCount();for(let Te=0;Te<oe;Te++)i.sunShadowMatrix[v+Te]=W.getMatrix(Te),i.sunShadowCascade[v+Te]=W._cascadeData[Te];v+=oe,m++}i.sun[p]=F,p++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,K=n.get(C);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.directionalShadow[x]=K,i.directionalShadowMap[x]=B,i.directionalShadowMatrix[x]=C.shadow.matrix,b++}i.directional[x]=F,x++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(D).multiplyScalar(G),F.distance=k,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[g]=F;const W=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,W.updateMatrices(C),C.castShadow&&N++),i.spotLightMatrix[g]=W.matrix,C.castShadow){const K=n.get(C);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=B,_++}g++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(D).multiplyScalar(G),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[S]=F,S++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const W=C.shadow,K=n.get(C);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,i.pointShadow[h]=K,i.pointShadowMap[h]=B,i.pointShadowMatrix[h]=C.shadow.matrix,T++}i.point[h]=F,h++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(G),F.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[M]=F,M++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const I=i.hash;(I.sunLength!==p||I.directionalLength!==x||I.pointLength!==h||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==M||I.numSunShadows!==m||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==E||I.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=x,i.spot.length=g,i.rectArea.length=S,i.point.length=h,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+E-N,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,I.sunLength=p,I.directionalLength=x,I.pointLength=h,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=M,I.numSunShadows=m,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=E,I.numLightProbes=P,i.version=NT++)}function c(l,d){let f=0,u=0,p=0,m=0,v=0,x=0;const h=d.matrixWorldInverse;for(let g=0,S=l.length;g<S;g++){const M=l[g];if(M.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(h),f++}else if(M.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),u++}else if(M.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),m++}else if(M.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(M.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(h),p++}else if(M.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(h),x++}}}return{setup:o,setupView:c,state:i}}function l0(t){const e=new IT(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):n.push(f)}function o(f){i.push(f)}function c(){e.setup(n),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function FT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new l0(t),e.set(r,[o])):s>=a.length?(o=new l0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OT=`uniform sampler2D shadow_pass;
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
}`,BT=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],kT=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],c0=new wt,ma=new $,Bu=new $;function zT(t,e,n){let i=new to;const r=new Oe,s=new Oe,a=new Mt,o=new eE,c=new tE,l={},d=n.maxTextureSize,f={[Jr]:En,[En]:Jr,[gi]:gi},u=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:UT,fragmentShader:OT}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new wn;m.setAttribute("position",new Xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $e(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let h=this.type;this.render=function(T,_,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===qx&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xl);const N=t.getRenderTarget(),P=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Bs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const R=h!==this.type;R&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=T.length;C<D;C++){const G=T[C],k=G.shadow;if(k===void 0){ze("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const B=k.getFrameExtents();r.multiply(B),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/B.x),r.x=s.x*B.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/B.y),r.y=s.y*B.y,k.mapSize.y=s.y));const F=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=F,k.map===null||R===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Sa){if(G.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Si(r.x,r.y,{format:Qr,type:Ei,minFilter:_n,magFilter:_n,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new Ys(r.x,r.y,xi),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=wr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Zt,k.map.depthTexture.magFilter=Zt}else G.isPointLight?(k.map=new Ih(r.x),k.map.depthTexture=new Ev(r.x,Mi)):(k.map=new Si(r.x,r.y),k.map.depthTexture=new Ys(r.x,r.y,Mi)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=wr,this.type===xl?(k.map.depthTexture.compareFunction=F?hv:fv,k.map.depthTexture.minFilter=_n,k.map.depthTexture.magFilter=_n):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Zt,k.map.depthTexture.magFilter=Zt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const W=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();G.isPointLight!==!0&&k.updateMatrices(G,E);const K=k.camera.layers.mask&4294967294?k.camera.layers:E.layers;for(let oe=0;oe<W;oe++){const Te=k.getCamera(oe);if(G.isPointLight){const Y=k.camera,ae=k.matrix,U=G.distance||Y.far;U!==Y.far&&(Y.far=U,Y.updateProjectionMatrix()),ma.setFromMatrixPosition(G.matrixWorld),Y.position.copy(ma),Bu.copy(Y.position),Bu.add(BT[oe]),Y.up.copy(kT[oe]),Y.lookAt(Bu),Y.updateMatrixWorld(),ae.makeTranslation(-ma.x,-ma.y,-ma.z),c0.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(c0,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(k.map),t.clear());const Y=k.getViewport(oe);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),z.viewport(a)}i=k.getFrustum(oe),M(_,E,Te,G,K,this.type)}k.isPointLightShadow!==!0&&this.type===Sa&&g(k,E),k.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(N,P,I)};function g(T,_){const E=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Si(r.x,r.y,{format:Qr,type:Ei}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(_,null,E,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(_,null,E,p,v,null)}function S(T,_,E,N){let P=null;const I=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)P=I;else if(P=E.isPointLight===!0?c:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const z=P.uuid,R=_.uuid;let C=l[z];C===void 0&&(C={},l[z]=C);let D=C[R];D===void 0&&(D=P.clone(),C[R]=D,_.addEventListener("dispose",b)),P=D}if(P.visible=_.visible,P.wireframe=_.wireframe,N===Sa?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:f[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const z=t.properties.get(P);z.light=E}return P}function M(T,_,E,N,P,I){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Sa)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const C=e.update(T),D=T.material;if(Array.isArray(D)){const G=C.groups;for(let k=0,B=G.length;k<B;k++){const F=G[k],W=D[F.materialIndex];if(W&&W.visible){const K=S(T,W,N,I);T.onBeforeShadow(t,T,_,E,C,K,F),t.renderBufferDirect(E,null,C,K,T,F),T.onAfterShadow(t,T,_,E,C,K,F)}}}else if(D.visible){const G=S(T,D,N,I);T.onBeforeShadow(t,T,_,E,C,G,null),t.renderBufferDirect(E,null,C,G,T,null),T.onAfterShadow(t,T,_,E,C,G,null)}}const R=T.children;for(let C=0,D=R.length;C<D;C++)M(R[C],_,E,N,P,I)}function b(T){T.target.removeEventListener("dispose",b);for(const E in l){const N=l[E],P=T.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function GT(t,e){function n(){let O=!1;const ne=new Mt;let Q=null;const me=new Mt(0,0,0,0);return{setMask:function(de){Q!==de&&!O&&(t.colorMask(de,de,de,de),Q=de)},setLocked:function(de){O=de},setClear:function(de,he,Ne,je,ue){ue===!0&&(de*=je,he*=je,Ne*=je),ne.set(de,he,Ne,je),me.equals(ne)===!1&&(t.clearColor(de,he,Ne,je),me.copy(ne))},reset:function(){O=!1,Q=null,me.set(-1,0,0,0)}}}function i(){let O=!1,ne=!1,Q=null,me=null,de=null;return{setReversed:function(he){if(ne!==he){const Ne=e.get("EXT_clip_control");he?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ne=he;const je=de;de=null,this.setClear(je)}},getReversed:function(){return ne},setTest:function(he){he?ie(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(he){Q!==he&&!O&&(t.depthMask(he),Q=he)},setFunc:function(he){if(ne&&(he=y1[he]),me!==he){switch(he){case Nd:t.depthFunc(t.NEVER);break;case Dd:t.depthFunc(t.ALWAYS);break;case Id:t.depthFunc(t.LESS);break;case Za:t.depthFunc(t.LEQUAL);break;case Fd:t.depthFunc(t.EQUAL);break;case Ud:t.depthFunc(t.GEQUAL);break;case Od:t.depthFunc(t.GREATER);break;case Bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=he}},setLocked:function(he){O=he},setClear:function(he){de!==he&&(de=he,ne&&(he=1-he),t.clearDepth(he))},reset:function(){O=!1,Q=null,me=null,de=null,ne=!1}}}function r(){let O=!1,ne=null,Q=null,me=null,de=null,he=null,Ne=null,je=null,ue=null;return{setTest:function(De){O||(De?ie(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(De){ne!==De&&!O&&(t.stencilMask(De),ne=De)},setFunc:function(De,We,ye){(Q!==De||me!==We||de!==ye)&&(t.stencilFunc(De,We,ye),Q=De,me=We,de=ye)},setOp:function(De,We,ye){(he!==De||Ne!==We||je!==ye)&&(t.stencilOp(De,We,ye),he=De,Ne=We,je=ye)},setLocked:function(De){O=De},setClear:function(De){ue!==De&&(t.clearStencil(De),ue=De)},reset:function(){O=!1,ne=null,Q=null,me=null,de=null,he=null,Ne=null,je=null,ue=null}}}const s=new n,a=new i,o=new r;let c={};const l=new WeakMap;let d={},f={},u={},p=new WeakMap,m=[],v=null,x=!1,h=null,g=null,S=null,M=null,b=null,T=null,_=null,E=new Qe(0,0,0),N=0,P=!1,I=null,z=null,R=null,C=null,D=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=B>=2);let W=null,K={};const oe=t.getParameter(t.SCISSOR_BOX),Te=t.getParameter(t.VIEWPORT),Y=new Mt().fromArray(oe),ae=new Mt().fromArray(Te);function U(O,ne,Q,me){const de=new Uint8Array(4),he=t.createTexture();t.bindTexture(O,he),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<Q;Ne++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ne+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return he}const se={};se[t.TEXTURE_2D]=U(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=U(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=U(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=U(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Za),zt(!1),gt(mm),ie(t.CULL_FACE),st(Bs);function ie(O){d[O]!==!0&&(t.enable(O),d[O]=!0)}function we(O){d[O]!==!1&&(t.disable(O),d[O]=!1)}function et(O,ne){return u[O]!==ne?(t.bindFramebuffer(O,ne),u[O]=ne,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ne),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ne),!0):!1}function Z(O,ne){let Q=m,me=!1;if(O){Q=p.get(ne),Q===void 0&&(Q=[],p.set(ne,Q));const de=O.textures;if(Q.length!==de.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ne=de.length;he<Ne;he++)Q[he]=t.COLOR_ATTACHMENT0+he;Q.length=de.length,me=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,me=!0);me&&t.drawBuffers(Q)}function Ee(O){return v!==O?(t.useProgram(O),v=O,!0):!1}const Ue={[vs]:t.FUNC_ADD,[HM]:t.FUNC_SUBTRACT,[VM]:t.FUNC_REVERSE_SUBTRACT};Ue[WM]=t.MIN,Ue[jM]=t.MAX;const Pe={[XM]:t.ZERO,[$M]:t.ONE,[qM]:t.SRC_COLOR,[Yx]:t.SRC_ALPHA,[e1]:t.SRC_ALPHA_SATURATE,[JM]:t.DST_COLOR,[KM]:t.DST_ALPHA,[YM]:t.ONE_MINUS_SRC_COLOR,[Kx]:t.ONE_MINUS_SRC_ALPHA,[QM]:t.ONE_MINUS_DST_COLOR,[ZM]:t.ONE_MINUS_DST_ALPHA,[t1]:t.CONSTANT_COLOR,[n1]:t.ONE_MINUS_CONSTANT_COLOR,[i1]:t.CONSTANT_ALPHA,[r1]:t.ONE_MINUS_CONSTANT_ALPHA};function st(O,ne,Q,me,de,he,Ne,je,ue,De){if(O===Bs){x===!0&&(we(t.BLEND),x=!1);return}if(x===!1&&(ie(t.BLEND),x=!0),O!==GM){if(O!==h||De!==P){if((g!==vs||b!==vs)&&(t.blendEquation(t.FUNC_ADD),g=vs,b=vs),De)switch(O){case Na:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFunc(t.ONE,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",O);break}else switch(O){case Na:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case xm:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vm:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",O);break}S=null,M=null,T=null,_=null,E.set(0,0,0),N=0,h=O,P=De}return}de=de||ne,he=he||Q,Ne=Ne||me,(ne!==g||de!==b)&&(t.blendEquationSeparate(Ue[ne],Ue[de]),g=ne,b=de),(Q!==S||me!==M||he!==T||Ne!==_)&&(t.blendFuncSeparate(Pe[Q],Pe[me],Pe[he],Pe[Ne]),S=Q,M=me,T=he,_=Ne),(je.equals(E)===!1||ue!==N)&&(t.blendColor(je.r,je.g,je.b,ue),E.copy(je),N=ue),h=O,P=!1}function ht(O,ne){O.side===gi?we(t.CULL_FACE):ie(t.CULL_FACE);let Q=O.side===En;ne&&(Q=!Q),zt(Q),O.blending===Na&&O.transparent===!1?st(Bs):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const me=O.stencilWrite;o.setTest(me),me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function zt(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function gt(O){O!==kM?(ie(t.CULL_FACE),O!==z&&(O===mm?t.cullFace(t.BACK):O===zM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),z=O}function In(O){O!==R&&(k&&t.lineWidth(O),R=O)}function Gt(O,ne,Q){O?(ie(t.POLYGON_OFFSET_FILL),(C!==ne||D!==Q)&&(C=ne,D=Q,a.getReversed()&&(ne=-ne,Q=-Q),t.polygonOffset(ne,Q))):we(t.POLYGON_OFFSET_FILL)}function Fn(O){O?ie(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Un(O){O===void 0&&(O=t.TEXTURE0+G-1),W!==O&&(t.activeTexture(O),W=O)}function On(O,ne,Q){Q===void 0&&(W===null?Q=t.TEXTURE0+G-1:Q=W);let me=K[Q];me===void 0&&(me={type:void 0,texture:void 0},K[Q]=me),(me.type!==O||me.texture!==ne)&&(W!==Q&&(t.activeTexture(Q),W=Q),t.bindTexture(O,ne||se[O]),me.type=O,me.texture=ne)}function V(){const O=K[W];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Bn(){try{t.compressedTexImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function xt(){try{t.compressedTexImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function vt(){try{t.texSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function _e(){try{t.texSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function Dt(){try{t.compressedTexSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function Be(){try{t.compressedTexSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function Ge(){try{t.texStorage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function L(){try{t.texStorage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function w(){try{t.texImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function X(){try{t.texImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function le(O){return f[O]!==void 0?f[O]:t.getParameter(O)}function re(O,ne){f[O]!==ne&&(t.pixelStorei(O,ne),f[O]=ne)}function fe(O){Y.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Y.copy(O))}function xe(O){ae.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ae.copy(O))}function ee(O,ne){let Q=l.get(ne);Q===void 0&&(Q=new WeakMap,l.set(ne,Q));let me=Q.get(O);me===void 0&&(me=t.getUniformBlockIndex(ne,O.name),t.uniformBlockBinding(ne,me,me),Q.set(O,me))}function te(O,ne,Q){const de=l.get(ne).get(O);c[de]!==Q&&(t.bindBufferBase(t.UNIFORM_BUFFER,de,Q),c[de]=Q)}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},W=null,K={},u={},c={},p=new WeakMap,m=[],v=null,x=!1,h=null,g=null,S=null,M=null,b=null,T=null,_=null,E=new Qe(0,0,0),N=0,P=!1,I=null,z=null,R=null,C=null,D=null,Y.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:we,bindFramebuffer:et,drawBuffers:Z,useProgram:Ee,setBlending:st,setMaterial:ht,setFlipSided:zt,setCullFace:gt,setLineWidth:In,setPolygonOffset:Gt,setScissorTest:Fn,activeTexture:Un,bindTexture:On,unbindTexture:V,compressedTexImage2D:Bn,compressedTexImage3D:xt,texImage2D:w,texImage3D:X,pixelStorei:re,getParameter:le,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:Ge,texStorage3D:L,texSubImage2D:vt,texSubImage3D:_e,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Be,scissor:fe,viewport:xe,reset:pe}}function HT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,d=new WeakMap,f=new Set;let u;const p=new WeakMap,m=new Set,v=new FinalizationRegistry(L=>m.delete(L));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(L,w){return x?new OffscreenCanvas(L,w):tc("canvas")}function g(L,w,X){let le=1;const re=Ge(L);if((re.width>X||re.height>X)&&(le=X/Math.max(re.width,re.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(le*re.width),xe=Math.floor(le*re.height);u===void 0&&(u=h(fe,xe));const ee=w?h(fe,xe):u;return ee.width=fe,ee.height=xe,ee.getContext("2d").drawImage(L,0,0,fe,xe),ze("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+fe+"x"+xe+")."),ee}else return"data"in L&&ze("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function S(L){return L.generateMipmaps}function M(L){t.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?t.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(L,w,X,le,re,fe=!1){if(L!==null){if(t[L]!==void 0)return t[L];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe;le&&(xe=e.get("EXT_texture_norm16"),xe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8),X===t.UNSIGNED_SHORT&&xe&&(ee=xe.R16_EXT),X===t.SHORT&&xe&&(ee=xe.R16_SNORM_EXT)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),w===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8),X===t.UNSIGNED_SHORT&&xe&&(ee=xe.RG16_EXT),X===t.SHORT&&xe&&(ee=xe.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),w===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),X===t.UNSIGNED_INT&&(ee=t.RGB32UI),X===t.BYTE&&(ee=t.RGB8I),X===t.SHORT&&(ee=t.RGB16I),X===t.INT&&(ee=t.RGB32I)),w===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),X===t.UNSIGNED_INT&&(ee=t.RGBA32UI),X===t.BYTE&&(ee=t.RGBA8I),X===t.SHORT&&(ee=t.RGBA16I),X===t.INT&&(ee=t.RGBA32I)),w===t.RGB&&(X===t.UNSIGNED_SHORT&&xe&&(ee=xe.RGB16_EXT),X===t.SHORT&&xe&&(ee=xe.RGB16_SNORM_EXT),X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),w===t.RGBA){const te=fe?ec:Je.getTransfer(re);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=te===lt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT&&xe&&(ee=xe.RGBA16_EXT),X===t.SHORT&&xe&&(ee=xe.RGBA16_SNORM_EXT),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(L,w){let X;return L?w===null||w===Mi||w===qs?X=t.DEPTH24_STENCIL8:w===xi?X=t.DEPTH32F_STENCIL8:w===Qa&&(X=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Mi||w===qs?X=t.DEPTH_COMPONENT24:w===xi?X=t.DEPTH_COMPONENT32F:w===Qa&&(X=t.DEPTH_COMPONENT16),X}function E(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function N(L){const w=new WeakRef(L);i.get(L).__ref=w,m.add(w),v.register(L,w,w)}function P(L){const w=i.get(L).__ref;w!==void 0&&(m.delete(w),v.unregister(w))}function I(L){R(L.target)}function z(L){C(L.target)}function R(L){L.removeEventListener("dispose",I),P(L),G(L),L.isVideoTexture&&d.delete(L),L.isHTMLTexture&&f.delete(L)}function C(L){L.removeEventListener("dispose",z),P(L),B(L)}function D(){for(const L of m){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?C(w):R(w))}m.clear(),f.clear()}function G(L){const w=i.get(L);if(w.__webglInit===void 0)return;const X=L.source,le=p.get(X);if(le){const re=le[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&k(L),Object.keys(le).length===0&&p.delete(X)}i.remove(L)}function k(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const X=L.source,le=p.get(X);delete le[w.__cacheKey],a.memory.textures--}function B(L){const w=i.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const X=L.depthTexture;if(X&&X.renderTarget===L&&R(X),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let fe=0;fe<w.__webglFramebuffer[re].length;fe++)t.deleteFramebuffer(w.__webglFramebuffer[re][fe]);else t.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)t.deleteFramebuffer(w.__webglFramebuffer[re]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const le=L.textures;for(let re=0,fe=le.length;re<fe;re++){const xe=i.get(le[re]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(le[re])}i.remove(L)}let F=0;function W(){F=0}function K(){return F}function oe(L){F=L}function Te(){const L=F;return L>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,L}function Y(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function ae(L,w){const X=i.get(L);if(L.isVideoTexture&&Dt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const le=L.image;if(le===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(X,L,w);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function U(L,w){const X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ht(X,L,w);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function se(L,w){const X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ht(X,L,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function ie(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){zt(X,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const we={[kd]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[zd]:t.MIRRORED_REPEAT},et={[Zt]:t.NEAREST,[o1]:t.NEAREST_MIPMAP_NEAREST,[Uo]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[du]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},Z={[d1]:t.NEVER,[pv]:t.ALWAYS,[f1]:t.LESS,[fv]:t.LEQUAL,[h1]:t.EQUAL,[hv]:t.GEQUAL,[p1]:t.GREATER,[m1]:t.NOTEQUAL};function Ee(L,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===du||w.magFilter===Uo||w.magFilter===dr||w.minFilter===_n||w.minFilter===du||w.minFilter===Uo||w.minFilter===dr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,we[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,we[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,we[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,et[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,et[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Zt||w.minFilter!==Uo&&w.minFilter!==dr||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I),N(w));const le=w.source;let re=p.get(le);re===void 0&&(re={},p.set(le,re));const fe=Y(w);if(fe!==L.__cacheKey){re[fe]===void 0&&(re[fe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[fe].usedTimes++;const xe=re[L.__cacheKey];xe!==void 0&&(re[L.__cacheKey].usedTimes--,xe.usedTimes===0&&k(w)),L.__cacheKey=fe,L.__webglTexture=re[fe].texture}return X}function Pe(L,w,X){return Math.floor(Math.floor(L/X)/w)}function st(L,w,X,le){const fe=L.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,X,le,w.data);else{fe.sort((O,ne)=>O.start-ne.start);let xe=0;for(let O=1;O<fe.length;O++){const ne=fe[xe],Q=fe[O],me=ne.start+ne.count,de=Pe(Q.start,w.width,4),he=Pe(ne.start,w.width,4);Q.start<=me+1&&de===he&&Pe(Q.start+Q.count-1,w.width,4)===de?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++xe,fe[xe]=Q)}fe.length=xe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let O=0,ne=fe.length;O<ne;O++){const Q=fe[O],me=Math.floor(Q.start/4),de=Math.ceil(Q.count/4),he=me%w.width,Ne=Math.floor(me/w.width),je=de,ue=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,he),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ne),n.texSubImage2D(t.TEXTURE_2D,0,he,Ne,je,ue,X,le,w.data)}L.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function ht(L,w,X){let le=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=t.TEXTURE_3D);const re=Ue(L,w),fe=w.source;n.bindTexture(le,L.__webglTexture,t.TEXTURE0+X);const xe=i.get(fe);if(fe.version!==xe.__version||re===!0){if(n.activeTexture(t.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ue=Je.getPrimaries(Je.workingColorSpace),De=w.colorSpace===or?null:Je.getPrimaries(w.colorSpace),We=w.colorSpace===or||ue===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let te=g(w.image,!1,r.maxTextureSize);te=Be(w,te);const pe=s.convert(w.format,w.colorSpace),O=s.convert(w.type);let ne=T(w.internalFormat,pe,O,w.normalized,w.colorSpace,w.isVideoTexture);Ee(le,w);let Q;const me=w.mipmaps,de=w.isVideoTexture!==!0,he=xe.__version===void 0||re===!0,Ne=fe.dataReady,je=E(w,te);if(w.isDepthTexture)ne=_(w.format===fr,w.type),he&&(de?n.texStorage2D(t.TEXTURE_2D,1,ne,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ne,te.width,te.height,0,pe,O,null));else if(w.isDataTexture)if(me.length>0){de&&he&&n.texStorage2D(t.TEXTURE_2D,je,ne,me[0].width,me[0].height);for(let ue=0,De=me.length;ue<De;ue++)Q=me[ue],de?Ne&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Q.width,Q.height,pe,O,Q.data):n.texImage2D(t.TEXTURE_2D,ue,ne,Q.width,Q.height,0,pe,O,Q.data);w.generateMipmaps=!1}else de?(he&&n.texStorage2D(t.TEXTURE_2D,je,ne,te.width,te.height),Ne&&st(w,te,pe,O)):n.texImage2D(t.TEXTURE_2D,0,ne,te.width,te.height,0,pe,O,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){de&&he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,ne,me[0].width,me[0].height,te.depth);for(let ue=0,De=me.length;ue<De;ue++)if(Q=me[ue],w.format!==vi)if(pe!==null)if(de){if(Ne)if(w.layerUpdates.size>0){const We=Hm(Q.width,Q.height,w.format,w.type);for(const ye of w.layerUpdates){const ot=Q.data.subarray(ye*We/Q.data.BYTES_PER_ELEMENT,(ye+1)*We/Q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,ye,Q.width,Q.height,1,pe,ot)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Q.width,Q.height,te.depth,pe,Q.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,ne,Q.width,Q.height,te.depth,0,Q.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Q.width,Q.height,te.depth,pe,O,Q.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,ne,Q.width,Q.height,te.depth,0,pe,O,Q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{de&&he&&n.texStorage2D(t.TEXTURE_2D,je,ne,me[0].width,me[0].height);for(let ue=0,De=me.length;ue<De;ue++)Q=me[ue],w.format!==vi?pe!==null?de?Ne&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Q.width,Q.height,pe,Q.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,ne,Q.width,Q.height,0,Q.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Ne&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Q.width,Q.height,pe,O,Q.data):n.texImage2D(t.TEXTURE_2D,ue,ne,Q.width,Q.height,0,pe,O,Q.data)}else if(w.isDataArrayTexture)if(de){if(he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,ne,te.width,te.height,te.depth),Ne)if(w.layerUpdates.size>0){const ue=Hm(te.width,te.height,w.format,w.type);for(const De of w.layerUpdates){const We=te.data.subarray(De*ue/te.data.BYTES_PER_ELEMENT,(De+1)*ue/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,te.width,te.height,1,pe,O,We)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,O,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,pe,O,te.data);else if(w.isData3DTexture)de?(he&&n.texStorage3D(t.TEXTURE_3D,je,ne,te.width,te.height,te.depth),Ne&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,O,te.data)):n.texImage3D(t.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,pe,O,te.data);else if(w.isFramebufferTexture){if(he)if(de)n.texStorage2D(t.TEXTURE_2D,je,ne,te.width,te.height);else{let ue=te.width,De=te.height;for(let We=0;We<je;We++)n.texImage2D(t.TEXTURE_2D,We,ne,ue,De,0,pe,O,null),ue>>=1,De>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){const ue=t.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),te.parentNode!==ue){ue.appendChild(te),f.add(w),ue.onpaint=De=>{const We=De.changedElements;for(const ye of f)We.includes(ye.image)&&(ye.needsUpdate=!0)},ue.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const We=t.RGBA,ye=t.RGBA,ot=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,We,ye,ot,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(me.length>0){if(de&&he){const ue=Ge(me[0]);n.texStorage2D(t.TEXTURE_2D,je,ne,ue.width,ue.height)}for(let ue=0,De=me.length;ue<De;ue++)Q=me[ue],de?Ne&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,pe,O,Q):n.texImage2D(t.TEXTURE_2D,ue,ne,pe,O,Q);w.generateMipmaps=!1}else if(de){if(he){const ue=Ge(te);n.texStorage2D(t.TEXTURE_2D,je,ne,ue.width,ue.height)}Ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,O,te)}else n.texImage2D(t.TEXTURE_2D,0,ne,pe,O,te);S(w)&&w.mipmapsAutoUpdate===!0&&M(le),xe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function zt(L,w,X){if(w.image.length!==6)return;const le=Ue(L,w),re=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const fe=i.get(re);if(re.version!==fe.__version||le===!0){n.activeTexture(t.TEXTURE0+X);const xe=Je.getPrimaries(Je.workingColorSpace),ee=w.colorSpace===or?null:Je.getPrimaries(w.colorSpace),te=w.colorSpace===or||xe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const pe=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let ye=0;ye<6;ye++)!pe&&!O?ne[ye]=g(w.image[ye],!0,r.maxCubemapSize):ne[ye]=O?w.image[ye].image:w.image[ye],ne[ye]=Be(w,ne[ye]);const Q=ne[0],me=s.convert(w.format,w.colorSpace),de=s.convert(w.type);let he=T(w.internalFormat,me,de,w.normalized,w.colorSpace);const Ne=w.isVideoTexture!==!0,je=fe.__version===void 0||le===!0,ue=re.dataReady;let De=E(w,Q);Ee(t.TEXTURE_CUBE_MAP,w);let We;if(w.isDepthTexture){if(he=_(w.format===fr,w.type),je)if(Ne)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,he,Q.width,Q.height);else for(let ye=0;ye<6;ye++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,Q.width,Q.height,0,me,de,null)}else if(pe){Ne&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,he,Q.width,Q.height);for(let ye=0;ye<6;ye++){We=ne[ye].mipmaps;for(let ot=0;ot<We.length;ot++){const Ht=We[ot];w.format!==vi?me!==null?Ne?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot,0,0,Ht.width,Ht.height,me,Ht.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot,he,Ht.width,Ht.height,0,Ht.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot,0,0,Ht.width,Ht.height,me,de,Ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot,he,Ht.width,Ht.height,0,me,de,Ht.data)}}}else{if(We=w.mipmaps,Ne&&je){We.length>0&&De++;const ye=Ge(ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,he,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(O){Ne?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ne[ye].width,ne[ye].height,me,de,ne[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,ne[ye].width,ne[ye].height,0,me,de,ne[ye].data);for(let ot=0;ot<We.length;ot++){const Xi=We[ot].image[ye].image;Ne?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot+1,0,0,Xi.width,Xi.height,me,de,Xi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot+1,he,Xi.width,Xi.height,0,me,de,Xi.data)}}else{Ne?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,me,de,ne[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,me,de,ne[ye]);for(let ot=0;ot<We.length;ot++){const Ht=We[ot];Ne?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot+1,0,0,me,de,Ht.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ot+1,he,me,de,Ht.image[ye])}}}S(w)&&w.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),fe.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function gt(L,w,X,le,re,fe){const xe=s.convert(X.format,X.colorSpace),ee=s.convert(X.type),te=T(X.internalFormat,xe,ee,X.normalized,X.colorSpace),pe=i.get(w),O=i.get(X);if(O.__renderTarget=w,!pe.__hasExternalTextures){const ne=Math.max(1,w.width>>fe),Q=Math.max(1,w.height>>fe);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,fe,te,ne,Q,w.depth,0,xe,ee,null):n.texImage2D(re,fe,te,ne,Q,0,xe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),_e(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,re,O.__webglTexture,0,vt(w)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,re,O.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function In(L,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer){const le=w.depthTexture,re=le&&le.isDepthTexture?le.type:null,fe=_(w.stencilBuffer,re),xe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;_e(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(w),fe,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(w),fe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,fe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,L)}else{const le=w.textures;for(let re=0;re<le.length;re++){const fe=le[re],xe=s.convert(fe.format,fe.colorSpace),ee=s.convert(fe.type),te=T(fe.internalFormat,xe,ee,fe.normalized,fe.colorSpace);_e(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(w),te,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(w),te,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,te,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Gt(L,w,X){const le=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=i.get(w.depthTexture);re.__renderTarget=w;const fe=le?w.depthTexture.image[0]:w.depthTexture.image;(!re.__webglTexture||fe.width!==w.width||fe.height!==w.height)&&(fe.width=w.width,fe.height=w.height,w.depthTexture.needsUpdate=!0),le?ie(w.depthTexture,0):ae(w.depthTexture,0);const xe=re.__webglTexture,ee=vt(w),te=le?t.TEXTURE_CUBE_MAP_POSITIVE_X+X:t.TEXTURE_2D,pe=w.depthTexture.format===fr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===wr)_e(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,te,xe,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,pe,te,xe,0);else if(w.depthTexture.format===fr)_e(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,te,xe,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,pe,te,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fn(L){const w=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",re)};le.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=le}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let le=0;le<6;le++)Gt(w.__webglFramebuffer[le],L,le);else L.texture.mipmaps.length>0?Gt(w.__webglFramebuffer[0],L,0):Gt(w.__webglFramebuffer,L,0);else if(X){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=t.createRenderbuffer(),In(w.__webglDepthbuffer[le],L,!1);else{const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[le];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,fe)}}else if(L.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),In(w.__webglDepthbuffer,L,!1);else{const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,fe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Un(L,w,X){const le=i.get(L);w!==void 0&&gt(le.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Fn(L)}function On(L){const w=L.texture,X=i.get(L),le=i.get(w);L.addEventListener("dispose",z),N(L);const re=L.textures,fe=L.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=w.version,a.memory.textures++),fe){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let te=0;te<w.mipmaps.length;te++)X.__webglFramebuffer[ee][te]=t.createFramebuffer()}else X.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)X.__webglFramebuffer[ee]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ee=0,te=re.length;ee<te;ee++){const pe=i.get(re[ee]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&_e(L)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){const te=re[ee];X.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const pe=s.convert(te.format,te.colorSpace),O=s.convert(te.type),ne=T(te.internalFormat,pe,O,te.normalized,te.colorSpace,L.isXRRenderTarget===!0),Q=vt(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,ne,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),In(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)gt(X.__webglFramebuffer[ee][te],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else gt(X.__webglFramebuffer[ee],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(w)?M(t.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}else if(xe){for(let ee=0,te=re.length;ee<te;ee++){const pe=re[ee],O=i.get(pe);let ne=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,O.__webglTexture),Ee(ne,pe),gt(X.__webglFramebuffer,L,pe,t.COLOR_ATTACHMENT0+ee,ne,0),S(pe)&&M(ne)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,le.__webglTexture),Ee(ee,w),w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)gt(X.__webglFramebuffer[te],L,w,t.COLOR_ATTACHMENT0,ee,te);else gt(X.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,ee,0);S(w)?M(ee):w.mipmaps.length>0&&t.texParameteri(ee,t.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),n.unbindTexture()}L.depthBuffer&&Fn(L)}function V(L){const w=L.textures;for(let X=0,le=w.length;X<le;X++){const re=w[X];if(S(re)&&re.mipmapsAutoUpdate===!0){const fe=b(L),xe=i.get(re).__webglTexture;n.bindTexture(fe,xe),M(fe),n.unbindTexture()}}}const Bn=[];function xt(L){if(L.samples>0){if(_e(L)===!1){const w=L.textures,X=L.width,le=L.height;let re=t.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(L),ee=w.length>1;if(ee)for(let pe=0;pe<w.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const O=i.get(w[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,O,0)}t.blitFramebuffer(0,0,X,le,0,0,X,le,re,t.NEAREST),c===!0&&(Bn.length=0,Bn.push(t.COLOR_ATTACHMENT0+pe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Bn.push(fe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Bn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let pe=0;pe<w.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const O=i.get(w[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,O,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function vt(L){return Math.min(r.maxSamples,L.samples)}function _e(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Dt(L){const w=a.render.frame;d.get(L)!==w&&(d.set(L,w),L.update())}function Be(L,w){const X=L.colorSpace,le=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Ql&&X!==or&&(Je.getTransfer(X)===lt?(le!==vi||re!==Cn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",X)),w}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=Te,this.resetTextureUnits=W,this.getTextureUnits=K,this.setTextureUnits=oe,this.setTexture2D=ae,this.setTexture2DArray=U,this.setTexture3D=se,this.setTextureCube=ie,this.rebindTextures=Un,this.setupRenderTarget=On,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Fn,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=_e,this.dispose=D}function VT(t,e){function n(i,r=or){let s;const a=Je.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===Mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ov)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===sv)return t.BYTE;if(i===av)return t.SHORT;if(i===Qa)return t.UNSIGNED_SHORT;if(i===Sh)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===cv)return t.ALPHA;if(i===uv)return t.RGB;if(i===vi)return t.RGBA;if(i===wr)return t.DEPTH_COMPONENT;if(i===fr)return t.DEPTH_STENCIL;if(i===dv)return t.RED;if(i===wh)return t.RED_INTEGER;if(i===Qr)return t.RG;if(i===bh)return t.RG_INTEGER;if(i===Ah)return t.RGBA_INTEGER;if(i===vl||i===_l||i===yl||i===Sl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===Hd||i===Vd||i===Wd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jd||i===Xd||i===$d||i===qd||i===Yd||i===Zl||i===Kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jd||i===Xd)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qd)return s.COMPRESSED_R11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zl)return s.COMPRESSED_RG11_EAC;if(i===Kd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ef)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===af)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===of)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===df)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ff||i===hf||i===pf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ff)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mf||i===gf||i===Jl||i===xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jT=`
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

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new wv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new es({vertexShader:WT,fragmentShader:jT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new Ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $T extends is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,u=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",x=new XT,h={},g=n.getContextAttributes();let S=null,M=null;const b=[],T=[],_=new Oe;let E=null,N=null;const P=new ii;P.viewport=new Mt;const I=new ii;I.viewport=new Mt;const z=[P,I],R=new sE;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=b[Y];return ae===void 0&&(ae=new yu,b[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=b[Y];return ae===void 0&&(ae=new yu,b[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=b[Y];return ae===void 0&&(ae=new yu,b[Y]=ae),ae.getHandSpace()};function G(Y){const ae=T.indexOf(Y.inputSource);if(ae===-1)return;const U=b[ae];U!==void 0&&(U.update(Y.inputSource,Y.frame,l||a),U.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<b.length;Y++){const ae=T[Y];ae!==null&&(T[Y]=null,b[Y].disconnect(ae))}C=null,D=null,x.reset();for(const Y in h)delete h[Y];if(e.setRenderTarget(S),p=null,u=null,f=null,r=null,M=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),N!==null){const Y=N.camera;Y.fov=N.fov,Y.zoom=N.zoom,Y.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,se=null,ie=null;g.depth&&(ie=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=g.stencil?fr:wr,se=g.stencil?qs:Mi);const we={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(we),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Si(u.textureWidth,u.textureHeight,{format:vi,type:Cn,depthTexture:new Ys(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const U={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Si(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(Y){for(let ae=0;ae<Y.removed.length;ae++){const U=Y.removed[ae],se=T.indexOf(U);se>=0&&(T[se]=null,b[se].disconnect(U))}for(let ae=0;ae<Y.added.length;ae++){const U=Y.added[ae];let se=T.indexOf(U);if(se===-1){for(let we=0;we<b.length;we++)if(we>=T.length){T.push(U),se=we;break}else if(T[we]===null){T[we]=U,se=we;break}if(se===-1)break}const ie=b[se];ie&&ie.connect(U)}}function F(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ae=Y.near,U=Y.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(U=x.depthFar)),R.near=I.near=P.near=ae,R.far=I.far=P.far=U,(C!==R.near||D!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,D=R.far),R.layers.mask=Y.layers.mask|6,P.layers.mask=R.layers.mask&-5,I.layers.mask=R.layers.mask&-3;const se=Y.parent,ie=R.cameras;F(R,se);for(let we=0;we<ie.length;we++)F(ie[we],se);R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Y.isPerspectiveCamera&&(N={camera:Y,fov:Y.fov,zoom:Y.zoom}),W(Y,R,se)};function W(Y,ae,U){U===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(U.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_f*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(R)},this.getCameraTexture=function(Y){return h[Y]};let K=null;function oe(Y,ae){if(d=ae.getViewerPose(l||a),m=ae,d!==null){const U=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let se=!1;U.length!==R.cameras.length&&(R.cameras.length=0,se=!0);for(let Z=0;Z<U.length;Z++){const Ee=U[Z];let Ue=null;if(p!==null)Ue=p.getViewport(Ee);else{const st=f.getViewSubImage(u,Ee);Ue=st.viewport,Z===0&&(e.setRenderTargetTextures(M,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(M))}let Pe=z[Z];Pe===void 0&&(Pe=new ii,Pe.layers.enable(Z),Pe.viewport=new Mt,z[Z]=Pe),Pe.matrix.fromArray(Ee.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ee.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Z===0&&(R.matrix.copy(Pe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),se===!0&&R.cameras.push(Pe)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Z=f.getDepthInformation(U[0]);Z&&Z.isValid&&Z.texture&&x.init(Z,r.renderState)}if(ie&&ie.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Z=0;Z<U.length;Z++){const Ee=U[Z].camera;if(Ee){let Ue=h[Ee];Ue||(Ue=new wv,h[Ee]=Ue);const Pe=f.getCameraImage(Ee);Ue.sourceTexture=Pe}}}}for(let U=0;U<b.length;U++){const se=T[U],ie=b[U];se!==null&&ie!==void 0&&ie.update(se,ae,l||a)}K&&K(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}const Te=new Rv;Te.setAnimationLoop(oe),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}}const qT=new wt,kv=new He;kv.set(-1,0,0,0,1,0,0,0,1);function YT(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,bv(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,g,S,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(x,h):h.isMeshLambertMaterial?(s(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(x,h),f(x,h)):h.isMeshPhongMaterial?(s(x,h),d(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(x,h),u(x,h),h.isMeshPhysicalMaterial&&p(x,h,M)):h.isMeshMatcapMaterial?(s(x,h),m(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),v(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(a(x,h),h.isLineDashedMaterial&&o(x,h)):h.isPointsMaterial?c(x,h,g,S):h.isSpriteMaterial?l(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===En&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===En&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const g=e.get(h),S=g.envMap,M=g.envMapRotation;S&&(x.envMap.value=S,x.envMapRotation.value.setFromMatrix4(qT.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(kv),x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function a(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function o(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function c(x,h,g,S){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*g,x.scale.value=S*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function l(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function d(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function f(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function u(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function p(x,h,g){x.ior.value=h.ior,h.diffuseRoughness>0&&(x.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.retroreflectivity>0&&(x.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,h){h.matcap&&(x.matcap.value=h.matcap)}function v(x,h){const g=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KT(t,e,n,i){let r={},s={};function a(g,S){const M=S.program;i.uniformBlockBinding(g,M,r[g.id])}function o(g,S){let M=r[g.id];M===void 0&&(m(g),M=c(g),r[g.id]=M,g.addEventListener("dispose",x));const b=S.program;i.updateUBOMapping(g,b);const T=e.render.frame;s[g.id]!==T&&(l(g),s[g.id]=T)}function c(g){const S=t.createBuffer(),M=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,M,b),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function l(g){const S=r[g.id],M=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let T=0,_=M.length;T<_;T++){const E=M[T];if(Array.isArray(E))for(let N=0,P=E.length;N<P;N++)d(E[N],T,N,b);else d(E,T,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(g,S,M,b){if(u(g,S,M,b)===!0){const T=g.__offset,_=g.value;if(Array.isArray(_)){let E=0;for(let N=0;N<_.length;N++){const P=_[N],I=v(P,!0);f(P,g.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,g.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,g.__data)}}function f(g,S,M){typeof g=="number"||typeof g=="boolean"?S[M]=g:g.isMatrix3?(S[M]=g.elements[0],S[M+1]=g.elements[1],S[M+2]=g.elements[2],S[M+3]=0,S[M+4]=g.elements[3],S[M+5]=g.elements[4],S[M+6]=g.elements[5],S[M+7]=0,S[M+8]=g.elements[6],S[M+9]=g.elements[7],S[M+10]=g.elements[8],S[M+11]=0):ArrayBuffer.isView(g)?S.set(g.subarray(0,S.length-M),M):g.toArray(S,M)}function u(g,S,M,b){const T=g.value,_=S+"_"+M;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);const E=b[_];let N=!1;for(let P=0;P<T.length;P++)p(T[P],E,P)===!0&&(N=!0);return N}return p(T,b,_)}function p(g,S,M){if(S[M]===void 0)return typeof g=="number"||typeof g=="boolean"?S[M]=g:ArrayBuffer.isView(g)?S[M]=g.slice():S[M]=g.clone(),!0;{const b=S[M];if(typeof g=="number"||typeof g=="boolean"){if(b!==g)return S[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(b.equals(g)===!1)return b.copy(g),!0}}return!1}function m(g){const S=g.uniforms;let M=0;const b=16;for(let _=0,E=S.length;_<E;_++){const N=Array.isArray(S[_])?S[_]:[S[_]];for(let P=0,I=N.length;P<I;P++){const z=N[P],R=Array.isArray(z.value)?z.value:[z.value],C=Array.isArray(S[_])||Array.isArray(z.value);let D=M;for(let k=0,B=R.length;k<B;k++){const F=R[k],W=v(F,C),K=M%b,oe=K%W.boundary,Te=K+oe;M+=oe,Te!==0&&b-Te<W.storage&&(M+=b-Te),k===0&&(D=M),M+=W.storage}const G=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new G((M-D)/Float32Array.BYTES_PER_ELEMENT),z.__offset=D}}const T=M%b;return T>0&&(M+=b-T),g.__size=M,g.__cache={},this}function v(g,S){const M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=16,M.storage=48):g.isMatrix4?(M.boundary=16,M.storage=64):g.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",g),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function x(g){const S=g.target;S.removeEventListener("dispose",x),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);r={},s={}}return{bind:a,update:o,dispose:h}}const ZT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function JT(){return di===null&&(di=new $1(ZT,16,16,Qr,Ei),di.name="DFG_LUT",di.minFilter=_n,di.magFilter=_n,di.wrapS=Fi,di.wrapT=Fi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class QT{constructor(e={}){const{canvas:n=v1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=p,x=new Set([Ah,bh,wh]),h=new Set([Cn,Mi,Qa,qs,Mh,Eh]),g=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,T=null;const _=[],E=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,z=null,R=null,C=null,D=null;this._outputColorSpace=Hn;let G=0,k=0,B=null,F=-1,W=null;const K=new Mt,oe=new Mt;let Te=null;const Y=new Qe(0);let ae=0,U=n.width,se=n.height,ie=1,we=null,et=null;const Z=new Mt(0,0,U,se),Ee=new Mt(0,0,U,se);let Ue=!1;const Pe=new to,st=new Ph;let ht=!1,zt=!1;const gt=new wt,In=new $,Gt=new Mt,Fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Un=!1;function On(){return B===null?ie:1}let V=i;function Bn(A,H){return n.getContext(A,H)}let xt,vt,_e,Dt,Be,Ge,L,w,X,le,re,fe,xe,ee,te,pe,O,ne,Q,me,de,he,Ne;try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_h}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",We,!1),n.addEventListener("webglcontextcreationerror",ye,!1),V===null){const H="webgl2";if(V=Bn(H,A),V===null)throw Bn(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(A){throw n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),rt("WebGLRenderer: "+A.message),A}function je(){xt=new nA(V),xt.init(),de=new VT(V,xt),vt=new jb(V,xt,e,de),_e=new GT(V,xt),vt.reversedDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),R=V.createFramebuffer(),C=V.createFramebuffer(),D=V.createFramebuffer(),Dt=new sA(V),Be=new TT,Ge=new HT(V,xt,_e,Be,vt,de,Dt),L=new tA(P),w=new oE(V),he=new Vb(V,w),X=new iA(V,w,Dt,he),le=new oA(V,X,w,he,Dt),ne=new aA(V,vt,Ge),te=new Xb(Be),re=new AT(P,L,xt,vt,he,te),fe=new YT(P,Be),xe=new RT,ee=new FT(xt),O=new Hb(P,L,_e,le,m,c),pe=new zT(P,le,vt),Ne=new KT(V,Dt,vt,_e),Q=new Wb(V,xt,Dt),me=new rA(V,xt,Dt),Dt.programs=re.programs,P.capabilities=vt,P.extensions=xt,P.properties=Be,P.renderLists=xe,P.shadowMap=pe,P.state=_e,P.info=Dt}v!==Cn&&(N=new cA(v,n.width,n.height,o,r,s));const ue=new $T(P,V);this.xr=ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(A){A!==void 0&&(ie=A,this.setSize(U,se,!1))},this.getSize=function(A){return A.set(U,se)},this.setSize=function(A,H,J=!0){if(ue.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,se=H,n.width=Math.floor(A*ie),n.height=Math.floor(H*ie),J===!0&&(n.style.width=A+"px",n.style.height=H+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(U*ie,se*ie).floor()},this.setDrawingBufferSize=function(A,H,J){U=A,se=H,ie=J,n.width=Math.floor(A*J),n.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(v===Cn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,H,J,j){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,H,J,j),_e.viewport(K.copy(Z).multiplyScalar(On()).round())},this.getScissor=function(A){return A.copy(Ee)},this.setScissor=function(A,H,J,j){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,H,J,j),_e.scissor(oe.copy(Ee).multiplyScalar(On()).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){_e.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,J=!0){let j=0;if(A){let q=!1;if(B!==null){const ve=B.texture.format;q=x.has(ve)}if(q){const ve=B.texture.type,Ae=h.has(ve),ge=O.getClearColor(),Me=O.getClearAlpha(),Le=ge.r,Ve=ge.g,Ye=ge.b;Ae?(g[0]=Le,g[1]=Ve,g[2]=Ye,g[3]=Me,V.clearBufferuiv(V.COLOR,0,g)):(S[0]=Le,S[1]=Ve,S[2]=Ye,S[3]=Me,V.clearBufferiv(V.COLOR,0,S))}else j|=V.COLOR_BUFFER_BIT}H&&(j|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),O.dispose(),xe.dispose(),ee.dispose(),Ge.dispose(),Be.dispose(),L.dispose(),le.dispose(),X.dispose(),he.dispose(),Ne.dispose(),re.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",zh),ue.removeEventListener("sessionend",Gh),Rr.stop()};function De(A){A.preventDefault(),Sm("WebGLRenderer: Context Lost."),I=!0}function We(){Sm("WebGLRenderer: Context Restored."),I=!1;const A=Dt.autoReset,H=pe.enabled,J=pe.autoUpdate,j=pe.needsUpdate,q=pe.type;je(),Dt.autoReset=A,pe.enabled=H,pe.autoUpdate=J,pe.needsUpdate=j,pe.type=q}function ye(A){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const H=A.target;H.removeEventListener("dispose",ot),Ht(H)}function Ht(A){Xi(A),Be.remove(A)}function Xi(A){const H=Be.get(A).programs;H!==void 0&&(H.forEach(function(J){re.releaseProgram(J)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,j,q,ve){H===null&&(H=Fn);const Ae=q.isMesh&&q.matrixWorld.determinantAffine()<0,ge=Hv(A,H,J,j,q);_e.setMaterial(j,Ae);let Me=J.index,Le=1;if(j.wireframe===!0){if(Me=X.getWireframeAttribute(J),Me===void 0)return;Le=2}const Ve=J.drawRange,Ye=J.attributes.position;let Ce=Ve.start*Le,Ke=(Ve.start+Ve.count)*Le;ve!==null&&(Ce=Math.max(Ce,ve.start*Le),Ke=Math.min(Ke,(ve.start+ve.count)*Le)),Me!==null?(Ce=Math.max(Ce,0),Ke=Math.min(Ke,Me.count)):Ye!=null&&(Ce=Math.max(Ce,0),Ke=Math.min(Ke,Ye.count));const Pt=Ke-Ce;if(Pt<0||Pt===1/0)return;he.setup(q,j,ge,J,Me);let dt,ut=Q;if(Me!==null&&(dt=w.get(Me),ut=me,ut.setIndex(dt)),q.isMesh)j.wireframe===!0?(_e.setLineWidth(j.wireframeLinewidth*On()),ut.setMode(V.LINES)):ut.setMode(V.TRIANGLES);else if(q.isLine){let tn=j.linewidth;tn===void 0&&(tn=1),_e.setLineWidth(tn*On()),q.isLineSegments?ut.setMode(V.LINES):q.isLineLoop?ut.setMode(V.LINE_LOOP):ut.setMode(V.LINE_STRIP)}else q.isPoints?ut.setMode(V.POINTS):q.isSprite&&ut.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const tn=q._multiDrawStarts,Re=q._multiDrawCounts,un=q._multiDrawCount,it=Me?w.get(Me).bytesPerElement:1,Pr=Be.get(j).currentProgram.getUniforms();for(let nn=0;nn<un;nn++)Pr.setValue(V,"_gl_DrawID",nn),ut.render(tn[nn]/it,Re[nn])}else if(q.isInstancedMesh)ut.renderInstances(Ce,Pt,q.count);else if(J.isInstancedBufferGeometry){const tn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,tn);ut.renderInstances(Ce,Pt,Re)}else ut.render(Ce,Pt)};function kh(A,H,J,j){z!==null&&A.isNodeMaterial&&z.setObject(j,A),ht===!0&&te.setState(A,J,!1),A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,na(A,H,j),A.side=Jr,A.needsUpdate=!0,na(A,H,j),A.side=gi):na(A,H,j)}this.compile=function(A,H,J=null){J===null&&(J=A),z!==null&&z.renderStart(A,H,J),T=ee.get(J),T.init(H),E.push(T),J.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),A!==J&&A.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),zt=this.localClippingEnabled,ht=te.init(this.clippingPlanes,zt),ht===!0&&te.setGlobalState(this.clippingPlanes,H),z!==null&&pe.render(T.state.shadowsArray,J,H);const j=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ve=q.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const ge=ve[Ae];kh(ge,J,H,q),j.add(ge)}else kh(ve,J,H,q),j.add(ve)}),T=E.pop(),z!==null&&z.renderEnd(),j},this.compileAsync=function(A,H,J=null){const j=this.compile(A,H,J);return new Promise(q=>{function ve(){if(j.forEach(function(Ae){const Me=Be.get(Ae).currentProgram;(Me===void 0||Me.isReady())&&j.delete(Ae)}),j.size===0){q(A);return}setTimeout(ve,10)}xt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Rc=null;function zv(A){Rc&&Rc(A)}function zh(){Rr.stop()}function Gh(){Rr.start()}const Rr=new Rv;Rr.setAnimationLoop(zv),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(A){Rc=A,ue.setAnimationLoop(A),A===null?Rr.stop():Rr.start()},ue.addEventListener("sessionstart",zh),ue.addEventListener("sessionend",Gh),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(A,H);const J=ue.enabled===!0&&ue.isPresenting===!0,j=N!==null&&(B===null||J)&&N.begin(P,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,H,B),T=ee.get(A,E.length),T.init(H),T.state.textureUnits=Ge.getTextureUnits(),E.push(T),gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?st.setFromArrayCamera(H):Pe.setFromProjectionMatrix(gt,si,H.reversedDepth),zt=this.localClippingEnabled,ht=te.init(this.clippingPlanes,zt),b=xe.get(A,_.length),b.init(),_.push(b),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Pc(Ae,H,-1/0,P.sortObjects)}Pc(A,H,0,P.sortObjects),b.finish(),z!==null&&z.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(we,et),Un=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Un&&O.addToRenderList(b,A),this.info.autoReset===!0&&this.info.reset(),ht===!0&&te.beginShadows();const q=T.state.shadowsArray;if(pe.render(q,A,H),ht===!0&&te.endShadows(),(j&&N.hasRenderPass())===!1){const Ae=b.opaque,ge=b.transmissive;if(T.setupLights(),H.isArrayCamera){const Me=H.cameras;if(ge.length>0)for(let Le=0,Ve=Me.length;Le<Ve;Le++){const Ye=Me[Le];Vh(Ae,ge,A,Ye)}Un&&O.render(A);for(let Le=0,Ve=Me.length;Le<Ve;Le++){const Ye=Me[Le];Hh(b,A,Ye,Ye.viewport)}}else ge.length>0&&Vh(Ae,ge,A,H),Un&&O.render(A),Hh(b,A,H)}B!==null&&k===0&&(Ge.updateMultisampleRenderTarget(B),Ge.updateRenderTargetMipmap(B)),j&&N.end(P),A.isScene===!0&&A.onAfterRender(P,A,H),he.resetDefaultState(),F=-1,W=null,E.pop(),E.length>0?(T=E[E.length-1],Ge.setTextureUnits(T.state.textureUnits),ht===!0&&te.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,z!==null&&z.renderEnd()};function Pc(A,H,J,j){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){const Ae=H.isArrayCamera?st:Pe;if(!A.frustumCulled||A.intersectsFrustum(Ae)){j&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const ge=le.update(A),Me=A.material;Me.visible&&b.push(A,ge,Me,J,Gt.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){const Ae=H.isArrayCamera?st:Pe;if(!A.frustumCulled||A.intersectsFrustum(Ae)){const ge=le.update(A),Me=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Gt.copy(ge.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(Me)){const Le=ge.groups;for(let Ve=0,Ye=Le.length;Ve<Ye;Ve++){const Ce=Le[Ve],Ke=Me[Ce.materialIndex];Ke&&Ke.visible&&b.push(A,ge,Ke,J,Gt.z,Ce,H)}}else Me.visible&&b.push(A,ge,Me,J,Gt.z,null,H)}}}const ve=A.children;for(let Ae=0,ge=ve.length;Ae<ge;Ae++)Pc(ve[Ae],H,J,j)}function Hh(A,H,J,j){const{opaque:q,transmissive:ve,transparent:Ae}=A;T.setupLightsView(J),ht===!0&&te.setGlobalState(P.clippingPlanes,J),j&&_e.viewport(K.copy(j)),q.length>0&&fo(q,H,J),ve.length>0&&fo(ve,H,J),Ae.length>0&&fo(Ae,H,J),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Vh(A,H,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const Ce=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new Si(1,1,{generateMipmaps:!0,type:Ce?Ei:Cn,minFilter:dr,samples:Math.max(4,vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ve=T.state.transmissionRenderTarget[j.id],Ae=j.viewport||K;ve.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Me=P.getActiveCubeFace(),Le=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(Y),ae=P.getClearAlpha(),ae<1&&P.setClearColor(16777215,.5),P.clear(),Un&&O.render(J);const Ve=P.toneMapping;P.toneMapping=ki;const Ye=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),ht===!0&&te.setGlobalState(P.clippingPlanes,j),fo(A,J,j),Ge.updateMultisampleRenderTarget(ve),Ge.updateRenderTargetMipmap(ve),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ke=0,Pt=H.length;Ke<Pt;Ke++){const dt=H[Ke],{object:ut,geometry:tn,material:Re,group:un}=dt;if(Re.side===gi&&ut.layers.test(j.layers)){const it=Re.side;Re.side=En,Re.needsUpdate=!0,Wh(ut,J,j,tn,Re,un),Re.side=it,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ge.updateMultisampleRenderTarget(ve),Ge.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,Me,Le),P.setClearColor(Y,ae),Ye!==void 0&&(j.viewport=Ye),P.toneMapping=Ve}function fo(A,H,J){const j=H.isScene===!0?H.overrideMaterial:null;for(let q=0,ve=A.length;q<ve;q++){const Ae=A[q],{object:ge,geometry:Me,group:Le}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),ge.layers.test(J.layers)&&Wh(ge,H,J,Me,Ve,Le)}}function Wh(A,H,J,j,q,ve){z!==null&&q.isNodeMaterial&&z.setObject(A,q),A.onBeforeRender(P,H,J,j,q,ve),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(P,H,J,j,A,ve),q.transparent===!0&&q.side===gi&&q.forceSinglePass===!1?(q.side=En,q.needsUpdate=!0,P.renderBufferDirect(J,H,j,q,A,ve),q.side=Jr,q.needsUpdate=!0,P.renderBufferDirect(J,H,j,q,A,ve),q.side=gi):P.renderBufferDirect(J,H,j,q,A,ve),A.onAfterRender(P,H,J,j,q,ve)}function jh(A){let H=0;for(const J of A)J.texture!==null&&H++;return H}function na(A,H,J){H.isScene!==!0&&(H=Fn);const j=Be.get(A),q=T.state.lights,ve=T.state.shadowsArray,Ae=q.state.version,ge=re.getParameters(A,q.state,ve,H,J,T.state.lightProbeGridArray),Me=re.getProgramCacheKey(ge);let Le=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,j.fog=H.fog;const Ve=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=L.get(A.envMap||j.environment,Ve),j.envMapRotation=j.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",ot),Le=new Map,j.programs=Le,j.programVariants=new Map);let Ye=Le.get(Me);if(Ye!==void 0){if(j.currentProgram===Ye&&j.lightsStateVersion===Ae)return $h(A,ge),Ye}else ge.uniforms=re.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,J,ge),A.onBeforeCompile(ge,P),Ye=re.acquireProgram(ge,Me),Le.set(Me,Ye),j.uniforms=ge.uniforms;const Ce=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=te.uniform),$h(A,ge),j.needsLights=Wv(A),j.lightsStateVersion=Ae,j.needsLights&&(Ce.ambientLightColor.value=q.state.ambient,Ce.lightProbe.value=q.state.probe,Ce.sunLights.value=q.state.sun,Ce.sunLightShadows.value=q.state.sunShadow,Ce.directionalLights.value=q.state.directional,Ce.directionalLightShadows.value=q.state.directionalShadow,Ce.spotLights.value=q.state.spot,Ce.spotLightShadows.value=q.state.spotShadow,Ce.rectAreaLights.value=q.state.rectArea,Ce.ltc_1.value=q.state.rectAreaLTC1,Ce.ltc_2.value=q.state.rectAreaLTC2,Ce.pointLights.value=q.state.point,Ce.pointLightShadows.value=q.state.pointShadow,Ce.hemisphereLights.value=q.state.hemi,Ce.sunShadowMatrix.value=q.state.sunShadowMatrix,Ce.sunShadowCascade.value=q.state.sunShadowCascade,Ce.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ce.spotLightMatrix.value=q.state.spotLightMatrix,Ce.spotLightMap.value=q.state.spotLightMap,Ce.pointShadowMatrix.value=q.state.pointShadowMatrix),j.numLightProbeGrids=jh(T.state.lightProbeGridArray),j.currentProgram=Ye,j.uniformsList=null,Ye}function Gv(A,H,J,j,q){const ve=Be.get(A),Ae=ve.currentProgram.id+","+j+","+q;let ge=ve.programVariants.get(Ae);return ge===void 0?(ge=na(A,H,J),ve.programVariants.set(Ae,ge)):(ve.currentProgram=ge,ve.uniformsList=null,ve.outputColorSpace=j,ve.toneMapping=q),ge}function Xh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=El.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function $h(A,H){const J=Be.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Hv(A,H,J,j,q){H.isScene!==!0&&(H=Fn),Ge.resetTextureUnits();const ve=H.fog,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?H.environment:null,ge=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Je.workingColorSpace,Me=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Le=L.get(j.envMap||Ae,Me),Ve=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ye=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ce=!!J.morphAttributes.position,Ke=!!J.morphAttributes.normal,Pt=!!J.morphAttributes.color;let dt=ki;j.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(dt=P.toneMapping);const ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tn=ut!==void 0?ut.length:0,Re=Be.get(j),un=T.state.lights;if(ht===!0&&(zt===!0||A!==W)){const yt=A===W&&j.id===F;te.setState(j,A,yt)}let it=!1,Pr=!1;j.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==un.state.version||q.isBatchedMesh&&Re.batching===!1||!q.isBatchedMesh&&Re.batching===!0||q.isBatchedMesh&&Re.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Re.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Re.instancing===!1||!q.isInstancedMesh&&Re.instancing===!0||q.isSkinnedMesh&&Re.skinning===!1||!q.isSkinnedMesh&&Re.skinning===!0||q.isInstancedMesh&&Re.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Re.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Re.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Re.instancingMorph===!1&&q.morphTexture!==null||Re.envMap!==Le||j.fog===!0&&Re.fog!==ve||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==te.numPlanes||Re.numIntersection!==te.numIntersection)||Re.vertexAlphas!==Ve||Re.vertexTangents!==Ye||Re.morphTargets!==Ce||Re.morphNormals!==Ke||Re.morphColors!==Pt||Re.morphTargetsCount!==tn||Re.numLightProbeGrids!==jh(T.state.lightProbeGridArray)?it=!0:(Re.outputColorSpace!==ge||Re.toneMapping!==dt)&&(Pr=!0):(it=!0,Re.__version=j.version);let nn=Re.currentProgram;(it===!0||Pr===!0)&&(nn=Pr===!0?Gv(j,H,q,ge,dt):na(j,H,q),z&&j.isNodeMaterial&&z.onUpdateProgram(j,nn,Re));let ho=!1,$i=!1,Lr=!1;const tt=nn.getUniforms(),qt=Re.uniforms;if(_e.useProgram(nn.program)&&(ho=!0,$i=!0,Lr=!0),j.id!==F&&(F=j.id,$i=!0),ho||W!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),tt.setValue(V,"projectionMatrix",A.projectionMatrix),tt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Vt=tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(V,In.setFromMatrixPosition(A.matrixWorld)),vt.logarithmicDepthBuffer&&tt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&tt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,$i=!0,Lr=!0)}if(Re.needsLights&&(un.state.sunShadowMap.length>0&&tt.setValue(V,"sunShadowMap",un.state.sunShadowMap,Ge),un.state.directionalShadowMap.length>0&&tt.setValue(V,"directionalShadowMap",un.state.directionalShadowMap,Ge),un.state.spotShadowMap.length>0&&tt.setValue(V,"spotShadowMap",un.state.spotShadowMap,Ge),un.state.pointShadowMap.length>0&&tt.setValue(V,"pointShadowMap",un.state.pointShadowMap,Ge)),q.isSkinnedMesh){tt.setOptional(V,q,"bindMatrix"),tt.setOptional(V,q,"bindMatrixInverse");const yt=q.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),tt.setValue(V,"boneTexture",yt.boneTexture,Ge))}q.isBatchedMesh&&(tt.setOptional(V,q,"batchingTexture"),tt.setValue(V,"batchingTexture",q._matricesTexture,Ge),tt.setOptional(V,q,"batchingIdTexture"),tt.setValue(V,"batchingIdTexture",q._indirectTexture,Ge),tt.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&tt.setValue(V,"batchingColorTexture",q._colorsTexture,Ge));const Yn=J.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&ne.update(q,J,nn),($i||Re.receiveShadow!==q.receiveShadow)&&(Re.receiveShadow=q.receiveShadow,tt.setValue(V,"receiveShadow",q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&H.environment!==null&&(qt.envMapIntensity.value=H.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=JT()),$i){if(tt.setValue(V,"toneMappingExposure",P.toneMappingExposure),Re.needsLights&&Vv(qt,Lr),ve&&j.fog===!0&&fe.refreshFogUniforms(qt,ve),fe.refreshMaterialUniforms(qt,j,ie,se,T.state.transmissionRenderTarget[A.id]),Re.needsLights&&Re.numLightProbeGrids>0){const yt=M;let Vt=0;for(const wi of T.state.lightProbeGridArray)wi.texture!==null&&(yt.textures[Vt]=wi.texture,yt.min[Vt]=wi.boundingBox.min,yt.max[Vt]=wi.boundingBox.max,yt.resolution[Vt]=wi.resolution,Vt++);for(const wi in yt)yt[wi].length=Vt;qt.probesSH.value=yt.textures,qt.probesMin.value=yt.min,qt.probesMax.value=yt.max,qt.probesResolution.value=yt.resolution}El.upload(V,Xh(Re),qt,Ge)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(El.upload(V,Xh(Re),qt,Ge),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&tt.setValue(V,"center",q.center),tt.setValue(V,"modelViewMatrix",q.modelViewMatrix),tt.setValue(V,"normalMatrix",q.normalMatrix),tt.setValue(V,"modelMatrix",q.matrixWorld),j.uniformsGroups!==void 0){const yt=j.uniformsGroups;for(let Vt=0,wi=yt.length;Vt<wi;Vt++){const Yh=yt[Vt];Ne.update(Yh,nn),Ne.bind(Yh,nn)}}return nn}function Vv(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Wv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,H,J){const j=Be.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Be.get(A.texture).__webglTexture=H,Be.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const J=Be.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,J=0){B=A,G=H,k=J;let j=null,q=!1,ve=!1;if(A){const ge=Be.get(A);if(ge.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(V.FRAMEBUFFER,ge.__webglFramebuffer),K.copy(A.viewport),oe.copy(A.scissor),Te=A.scissorTest,_e.viewport(K),_e.scissor(oe),_e.setScissorTest(Te),F=-1;return}else if(ge.__webglFramebuffer===void 0)Ge.setupRenderTarget(A);else if(ge.__hasExternalTextures)Ge.rebindTextures(A,Be.get(A.texture).__webglTexture,Be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&Be.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(A)}}const Me=A.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ve=!0);const Le=Be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[H])?j=Le[H][J]:j=Le[H],q=!0):A.samples>0&&Ge.useMultisampledRTT(A)===!1?j=Be.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?j=Le[J]:j=Le,K.copy(A.viewport),oe.copy(A.scissor),Te=A.scissorTest}else K.copy(Z).multiplyScalar(ie).floor(),oe.copy(Ee).multiplyScalar(ie).floor(),Te=Ue;if(J!==0&&(j=R),_e.bindFramebuffer(V.FRAMEBUFFER,j)&&_e.drawBuffers(A,j),_e.viewport(K),_e.scissor(oe),_e.setScissorTest(Te),q){const ge=Be.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge.__webglTexture,J)}else if(ve){const ge=H;for(let Me=0;Me<A.textures.length;Me++){const Le=Be.get(A.textures[Me]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Me,Le.__webglTexture,J,ge)}}else if(A!==null&&J!==0){const ge=Be.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ge.__webglTexture,J)}F=-1};function qh(A){const H=Be.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=vt.textureFormatReadable(A.format),H.__typeReadable=vt.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,J,j,q,ve,Ae,ge=0){if(!(A&&A.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me){_e.bindFramebuffer(V.FRAMEBUFFER,Me);try{const Le=A.textures[ge],Ve=Le.format,Ye=Le.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ge);const Ce=qh(Le);if(Ce.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-j&&J>=0&&J<=A.height-q&&V.readPixels(H,J,j,q,de.convert(Ve),de.convert(Ye),ve)}finally{const Le=B!==null?Be.get(B).__webglFramebuffer:null;_e.bindFramebuffer(V.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,j,q,ve,Ae,ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me)if(H>=0&&H<=A.width-j&&J>=0&&J<=A.height-q){_e.bindFramebuffer(V.FRAMEBUFFER,Me);const Le=A.textures[ge],Ve=Le.format,Ye=Le.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ge);const Ce=qh(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.bufferData(V.PIXEL_PACK_BUFFER,ve.byteLength,V.STREAM_READ),V.readPixels(H,J,j,q,de.convert(Ve),de.convert(Ye),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Pt=B!==null?Be.get(B).__webglFramebuffer:null;_e.bindFramebuffer(V.FRAMEBUFFER,Pt);const dt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await _1(V,dt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ve),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Ke),V.deleteSync(dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,J=0){const j=Math.pow(2,-J),q=Math.floor(A.image.width*j),ve=Math.floor(A.image.height*j),Ae=H!==null?H.x:0,ge=H!==null?H.y:0;Ge.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,Ae,ge,q,ve),_e.unbindTexture()},this.copyTextureToTexture=function(A,H,J=null,j=null,q=0,ve=0){let Ae,ge,Me,Le,Ve,Ye,Ce,Ke,Pt;const dt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(J!==null)Ae=J.max.x-J.min.x,ge=J.max.y-J.min.y,Me=J.isBox3?J.max.z-J.min.z:1,Le=J.min.x,Ve=J.min.y,Ye=J.isBox3?J.min.z:0;else{const tt=Math.pow(2,-q);Ae=Math.floor(dt.width*tt),ge=Math.floor(dt.height*tt),A.isDataArrayTexture?Me=dt.depth:A.isData3DTexture?Me=Math.floor(dt.depth*tt):Me=1,Le=0,Ve=0,Ye=0}j!==null?(Ce=j.x,Ke=j.y,Pt=j.z):(Ce=0,Ke=0,Pt=0);const ut=de.convert(H.format),tn=de.convert(H.type);let Re;H.isData3DTexture?(Ge.setTexture3D(H,0),Re=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ge.setTexture2DArray(H,0),Re=V.TEXTURE_2D_ARRAY):(Ge.setTexture2D(H,0),Re=V.TEXTURE_2D),_e.activeTexture(V.TEXTURE0),_e.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),_e.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),_e.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);const un=_e.getParameter(V.UNPACK_ROW_LENGTH),it=_e.getParameter(V.UNPACK_IMAGE_HEIGHT),Pr=_e.getParameter(V.UNPACK_SKIP_PIXELS),nn=_e.getParameter(V.UNPACK_SKIP_ROWS),ho=_e.getParameter(V.UNPACK_SKIP_IMAGES);_e.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),_e.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),_e.pixelStorei(V.UNPACK_SKIP_PIXELS,Le),_e.pixelStorei(V.UNPACK_SKIP_ROWS,Ve),_e.pixelStorei(V.UNPACK_SKIP_IMAGES,Ye);const $i=A.isDataArrayTexture||A.isData3DTexture,Lr=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const tt=Be.get(A),qt=Be.get(H),Yn=Be.get(tt.__renderTarget),yt=Be.get(qt.__renderTarget);_e.bindFramebuffer(V.READ_FRAMEBUFFER,Yn.__webglFramebuffer),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Vt=0;Vt<Me;Vt++)$i&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.get(A).__webglTexture,q,Ye+Vt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.get(H).__webglTexture,ve,Pt+Vt)),V.blitFramebuffer(Le,Ve,Le+Ae,Ve+ge,Ce,Ke,Ce+Ae,Ke+ge,V.DEPTH_BUFFER_BIT,V.NEAREST);_e.bindFramebuffer(V.READ_FRAMEBUFFER,null),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Be.has(A)){const tt=Be.get(A),qt=Be.get(H);_e.bindFramebuffer(V.READ_FRAMEBUFFER,C),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,D);for(let Yn=0;Yn<Me;Yn++)$i?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,tt.__webglTexture,q,Ye+Yn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,tt.__webglTexture,q),Lr?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qt.__webglTexture,ve,Pt+Yn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,qt.__webglTexture,ve),q!==0?V.blitFramebuffer(Le,Ve,Le+Ae,Ve+ge,Ce,Ke,Ce+Ae,Ke+ge,V.COLOR_BUFFER_BIT,V.NEAREST):Lr?V.copyTexSubImage3D(Re,ve,Ce,Ke,Pt+Yn,Le,Ve,Ae,ge):V.copyTexSubImage2D(Re,ve,Ce,Ke,Le,Ve,Ae,ge);_e.bindFramebuffer(V.READ_FRAMEBUFFER,null),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lr?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Re,ve,Ce,Ke,Pt,Ae,ge,Me,ut,tn,dt.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Re,ve,Ce,Ke,Pt,Ae,ge,Me,ut,dt.data):V.texSubImage3D(Re,ve,Ce,Ke,Pt,Ae,ge,Me,ut,tn,dt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ve,Ce,Ke,Ae,ge,ut,tn,dt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ve,Ce,Ke,dt.width,dt.height,ut,dt.data):V.texSubImage2D(V.TEXTURE_2D,ve,Ce,Ke,Ae,ge,ut,tn,dt);_e.pixelStorei(V.UNPACK_ROW_LENGTH,un),_e.pixelStorei(V.UNPACK_IMAGE_HEIGHT,it),_e.pixelStorei(V.UNPACK_SKIP_PIXELS,Pr),_e.pixelStorei(V.UNPACK_SKIP_ROWS,nn),_e.pixelStorei(V.UNPACK_SKIP_IMAGES,ho),ve===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&V.generateMipmap(Re),_e.unbindTexture()},this.initRenderTarget=function(A){Be.get(A).__webglFramebuffer===void 0&&Ge.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ge.setTextureCube(A,0):A.isData3DTexture?Ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ge.setTexture2DArray(A,0):Ge.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){G=0,k=0,B=null,_e.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const fi=200,It=Math.PI/180;function Yt(t,e,n){return t+(e-t)*n}function e2(t,e,n){return{pelvisOffsetY:Yt(t.pelvisOffsetY,e.pelvisOffsetY,n),torsoPitch:Yt(t.torsoPitch,e.torsoPitch,n),torsoTwist:Yt(t.torsoTwist,e.torsoTwist,n),torsoRoll:Yt(t.torsoRoll,e.torsoRoll,n),headPitch:Yt(t.headPitch,e.headPitch,n),leftArmLift:Yt(t.leftArmLift,e.leftArmLift,n),rightArmLift:Yt(t.rightArmLift,e.rightArmLift,n),leftArmOut:Yt(t.leftArmOut,e.leftArmOut,n),rightArmOut:Yt(t.rightArmOut,e.rightArmOut,n),leftElbowFlex:Yt(t.leftElbowFlex,e.leftElbowFlex,n),rightElbowFlex:Yt(t.rightElbowFlex,e.rightElbowFlex,n),leftHipFlex:Yt(t.leftHipFlex,e.leftHipFlex,n),rightHipFlex:Yt(t.rightHipFlex,e.rightHipFlex,n),leftHipOut:Yt(t.leftHipOut,e.leftHipOut,n),rightHipOut:Yt(t.rightHipOut,e.rightHipOut,n),leftKneeFlex:Yt(t.leftKneeFlex,e.leftKneeFlex,n),rightKneeFlex:Yt(t.rightKneeFlex,e.rightKneeFlex,n)}}function er(t,e,n,i=20){const r=n/2,s=[],a=6;for(let c=0;c<=a;c++){const l=c/a*(Math.PI/2);s.push(new Oe(Math.sin(l)*e,-r-Math.cos(l)*e))}s.push(new Oe((e+t)*.52,0));for(let c=0;c<=a;c++){const l=c/a*(Math.PI/2);s.push(new Oe(Math.cos(l)*t,r+Math.sin(l)*t))}const o=new bc(s,i);return o.computeVertexNormals(),o}class t2{constructor(e,n=320){this.canvas=e,this.outCanvas=document.createElement("canvas"),this.outCanvas.width=fi,this.outCanvas.height=fi;const i=this.outCanvas.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("No se pudo inicializar el lienzo 2D para exportar GIF.");this.outCtx=i,this.renderer=new QT({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,alpha:!1}),this.renderer.setSize(n,n,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qx,this.renderer.toneMapping=yh,this.renderer.toneMappingExposure=1.12,this.scene=new B1,this.scene.background=new Qe(1054759),this.camera=new ii(34,1,.1,100);const r=new nE(14742270,1976635,1.05);this.scene.add(r);const s=new Uu(16774635,1.85);s.position.set(2.4,4.2,3.4),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.camera.near=.5,s.shadow.camera.far=14,s.shadow.camera.left=-2.4,s.shadow.camera.right=2.4,s.shadow.camera.top=3,s.shadow.camera.bottom=-1.5,s.shadow.bias=-.001,this.scene.add(s);const a=new Uu(9684477,.85);a.position.set(-3,2.2,1.8),this.scene.add(a);const o=new Uu(16708551,.95);o.position.set(0,2.8,-3.2),this.scene.add(o);const c=new $e(new Lh(1.9,48),new zn({color:1515571,roughness:.92,metalness:.04}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.scene.add(c);const l=new $e(new Nh(1.3,1.34,48),new Sv({color:3359061,side:gi}));l.rotation.x=-Math.PI/2,l.position.y=.002,this.scene.add(l);const d=new zn({color:9741240,roughness:.46,metalness:.12}),f=new zn({color:15680580,roughness:.42,metalness:.04}),u=new zn({color:12131356,roughness:.5,metalness:.05}),p=new zn({color:14870768,roughness:.48,metalness:.06}),m=new zn({color:988970,roughness:.75,metalness:.05}),v=new zn({color:13358561,roughness:.25,metalness:.85}),x=new zn({color:1976635,roughness:.55,metalness:.25}),h=new zn({color:16347926,roughness:.45,metalness:.1}),g=new zn({color:1976635,roughness:.85,metalness:.05}),S=new zn({color:14427686,roughness:.35,metalness:.08}),M=()=>{const Y=new Ft,ae=new $e(new rr(.015,.015,.2,12),v);ae.rotation.z=Math.PI/2,Y.add(ae);for(const U of[-.075,.075]){const se=new $e(new rr(.055,.055,.036,16),x);se.rotation.z=Math.PI/2,se.position.x=U,se.castShadow=!0,Y.add(se)}return Y},b=()=>{const ae=new Ft,U=new $e(new rr(.016,.016,1.2,14),v);U.rotation.z=Math.PI/2,U.castShadow=!0,ae.add(U);for(const se of[-1,1]){const ie=new $e(new rr(.145,.145,.042,22),x);ie.rotation.z=Math.PI/2,ie.position.x=se*(1.2*.42),ie.castShadow=!0,ae.add(ie);const we=new $e(new rr(.148,.148,.012,22),h);we.rotation.z=Math.PI/2,we.position.x=se*(1.2*.42),ae.add(we)}return ae},T=()=>{const Y=new Ft,ae=new $e(new Li(.088,18,14),x);ae.scale.set(1,.92,1),ae.position.y=-.09,ae.castShadow=!0,Y.add(ae);const U=new $e(new Dh(.052,.014,10,20,Math.PI),v);return U.position.y=-.01,Y.add(U),Y},_=new Ft,E=new Ft;E.position.set(0,.92,0),_.add(E);const N=new $e(er(.145,.148,.14,24),f);N.scale.set(1.16,1,.78),N.position.y=.01,N.castShadow=!0,E.add(N);const P=new $e(new rr(.144,.148,.042,24),u);P.scale.set(1.16,1,.78),P.position.y=.095,P.castShadow=!0,E.add(P);const I=new Ft;I.position.set(0,.1,0),E.add(I);const z=new $e(er(.145,.132,.16,24),d);z.scale.set(1.12,1,.72),z.position.y=.08,z.castShadow=!0,I.add(z);const R=new Ft;R.position.set(0,.14,0),I.add(R);const C=[new Oe(.001,0),new Oe(.132,.01),new Oe(.15,.08),new Oe(.172,.175),new Oe(.165,.22),new Oe(.125,.252),new Oe(.058,.282),new Oe(.001,.285)],D=new bc(C,26);D.computeVertexNormals();const G=new $e(D,d);G.scale.set(1.2,1,.74),G.castShadow=!0,R.add(G);const k=new Ft;k.position.set(0,.275,.008),R.add(k);const B=new $e(er(.047,.055,.062,18),d);B.position.y=.038,B.castShadow=!0,k.add(B);const F=new Ft;F.position.set(0,.078,.008),k.add(F);const W=new $e(new Li(.1,24,20),d);W.scale.set(.86,1.08,.96),W.position.y=.1,W.castShadow=!0,F.add(W);const K=new $e(new Li(.066,18,14),d);K.scale.set(.82,.85,.92),K.position.set(0,.046,.022),K.castShadow=!0,F.add(K);const oe=Y=>{const ae=new Ft;ae.position.set(Y*.205,.215,0),R.add(ae);const U=new $e(new Li(.058,16,14),d);U.scale.set(.95,1.08,.92),U.castShadow=!0,ae.add(U);const se=new $e(er(.052,.041,.22,18),d);se.position.y=-.135,se.castShadow=!0,ae.add(se);const ie=new Ft;ie.position.set(0,-.275,0),ae.add(ie);const we=new $e(new Li(.041,14,12),d);we.castShadow=!0,ie.add(we);const et=new $e(er(.042,.029,.2,18),d);et.position.y=-.12,et.castShadow=!0,ie.add(et);const Z=new Ft;Z.position.set(0,-.245,0),ie.add(Z);const Ee=new $e(new nc(.026,.055,6,12),d);Ee.scale.set(.68,1,1.15),Ee.position.y=-.042,Ee.castShadow=!0,Z.add(Ee);const Ue=new $e(new Li(.054,16,14),S);Ue.scale.set(.95,1.18,1.02),Ue.position.y=-.045,Ue.visible=!1,Ue.castShadow=!0,Z.add(Ue);const Pe=M();return Pe.position.set(0,-.055,.015),Pe.rotation.y=Math.PI/2,Pe.visible=!1,Z.add(Pe),{shoulder:ae,elbow:ie,wrist:Z,hand:Ee,glove:Ue,dumbbell:Pe}},Te=Y=>{const ae=new Ft;ae.position.set(Y*.102,-.03,0),E.add(ae);const U=new $e(er(.088,.084,.14,20),f);U.position.y=-.08,U.castShadow=!0,ae.add(U);const se=new $e(er(.074,.054,.23,20),d);se.position.y=-.275,se.castShadow=!0,ae.add(se);const ie=new Ft;ie.position.set(0,-.43,0),ae.add(ie);const we=new $e(new Li(.054,16,14),d);we.castShadow=!0,ie.add(we);const et=new $e(er(.058,.036,.31,20),d);et.position.y=-.195,et.castShadow=!0,ie.add(et);const Z=new Ft;Z.position.set(0,-.39,0),ie.add(Z);const Ee=new $e(new nc(.04,.105,8,12),p);Ee.rotation.x=Math.PI/2,Ee.position.set(0,-.025,.042),Ee.scale.set(1.02,1,.85),Ee.castShadow=!0,Z.add(Ee);const Ue=new $e(new Sr(.084,.02,.185),m);return Ue.position.set(0,-.048,.042),Ue.castShadow=!0,Z.add(Ue),{hip:ae,knee:ie,ankle:Z}};this.athlete={root:_,pelvis:E,spine:I,chest:R,neck:k,head:F,leftArm:oe(1),rightArm:oe(-1),leftLeg:Te(1),rightLeg:Te(-1)},this.scene.add(this.athlete.root),this.propMat=new $e(new Sr(.85,.024,1.9),g),this.propMat.position.set(0,.012,0),this.propMat.receiveShadow=!0,this.scene.add(this.propMat),this.propBarbell=b(),this.scene.add(this.propBarbell),this.propKettlebell=T(),this.scene.add(this.propKettlebell),this.propBox=new $e(new Sr(.68,.38,.56),new zn({color:3359061,roughness:.72,metalness:.1})),this.propBox.position.set(0,.19,-.18),this.propBox.castShadow=!0,this.propBox.receiveShadow=!0,this.scene.add(this.propBox)}getPostureBase(e){switch(e){case"supine":return{y:.12,z:-.18,pitchRad:-1.52,rootYawRad:Math.PI/2};case"prone":return{y:.11,z:0,pitchRad:1.54,rootYawRad:Math.PI/2};case"plank":return{y:.56,z:-.1,pitchRad:1.38,rootYawRad:Math.PI/2};case"quadruped":return{y:.48,z:-.16,pitchRad:1.5,rootYawRad:Math.PI/2};case"seated":return{y:.14,z:-.22,pitchRad:0,rootYawRad:.35};case"standing":default:return{y:.92,z:0,pitchRad:0,rootYawRad:0}}}applyCamera(e,n){const i=n==="supine"||n==="prone"||n==="plank"||n==="quadruped";switch(e){case"front":this.camera.position.set(0,i?.95:1.28,i?2.65:3.3),this.camera.lookAt(0,i?.35:.98,0);break;case"side":this.camera.position.set(i?.25:2.95,i?.85:1.2,i?2.65:.15),this.camera.lookAt(0,i?.34:.92,0);break;case"low_side":this.camera.position.set(1.95,.95,2.25),this.camera.lookAt(.02,i?.36:.85,0);break;case"overhead":this.camera.position.set(.35,2.85,1.45),this.camera.lookAt(0,i?.25:.8,0);break;case"three_quarter":default:this.camera.position.set(1.75,i?1.1:1.35,i?2.35:2.85),this.camera.lookAt(0,i?.36:.95,0);break}}applyProps(e,n){const i=this.athlete;this.propMat.visible=e==="mat"||n==="supine"||n==="prone"||n==="plank"||n==="quadruped",this.propMat.rotation.y=n==="standing"||n==="seated"?0:Math.PI/2,this.propBarbell.visible=e==="barbell",this.propKettlebell.visible=e==="kettlebell",this.propBox.visible=e==="box";for(const r of[i.leftArm,i.rightArm])r.hand.visible=e!=="gloves",r.glove.visible=e==="gloves",r.dumbbell.visible=e==="dumbbells"}applySpecAtProgress(e,n){const i=.5-.5*Math.cos(n*Math.PI*2),r=e2(e.poseA,e.poseB,i);this.applyPose(e,r)}applyStaticPose(e,n){this.applyPose(e,n==="A"?e.poseA:e.poseB)}applyPose(e,n){const i=this.athlete,r=this.getPostureBase(e.posture);i.root.position.set(0,0,0),i.root.rotation.set(0,r.rootYawRad,0),i.pelvis.position.set(0,r.y+n.pelvisOffsetY,r.z),i.pelvis.rotation.order="YXZ",i.pelvis.rotation.set(r.pitchRad,0,0),i.spine.rotation.order="YXZ",i.spine.rotation.set(n.torsoPitch*It*.55,n.torsoTwist*It*.55,n.torsoRoll*It*.55),i.chest.rotation.order="YXZ",i.chest.rotation.set(n.torsoPitch*It*.45,n.torsoTwist*It*.45,n.torsoRoll*It*.45),i.neck.rotation.set(0,0,0),i.head.rotation.set(n.headPitch*It,0,0),i.leftArm.shoulder.rotation.order="XZY",i.leftArm.shoulder.rotation.set(-n.leftArmLift*It,0,n.leftArmOut*It),i.leftArm.elbow.rotation.order="XYZ",i.leftArm.elbow.rotation.set(-n.leftElbowFlex*It,0,0),i.leftArm.wrist.rotation.set(0,0,0),i.rightArm.shoulder.rotation.order="XZY",i.rightArm.shoulder.rotation.set(-n.rightArmLift*It,0,-n.rightArmOut*It),i.rightArm.elbow.rotation.order="XYZ",i.rightArm.elbow.rotation.set(-n.rightElbowFlex*It,0,0),i.rightArm.wrist.rotation.set(0,0,0),i.leftLeg.hip.rotation.order="XZY",i.leftLeg.hip.rotation.set(-n.leftHipFlex*It,0,n.leftHipOut*It),i.leftLeg.knee.rotation.set(n.leftKneeFlex*It,0,0),i.leftLeg.ankle.rotation.set(0,0,0),i.rightLeg.hip.rotation.order="XZY",i.rightLeg.hip.rotation.set(-n.rightHipFlex*It,0,-n.rightHipOut*It),i.rightLeg.knee.rotation.set(n.rightKneeFlex*It,0,0),i.rightLeg.ankle.rotation.set(0,0,0),this.applyProps(e.prop,e.posture),this.applyCamera(e.camera,e.posture),i.root.updateMatrixWorld(!0);const s=new $,a=new $;i.leftArm.wrist.getWorldPosition(s),i.rightArm.wrist.getWorldPosition(a);const o=s.clone().add(a).multiplyScalar(.5);e.prop==="barbell"&&(this.propBarbell.position.copy(o),this.propBarbell.position.y-=.04,this.propBarbell.rotation.y=r.rootYawRad),e.prop==="kettlebell"&&(this.propKettlebell.position.copy(o),this.propKettlebell.position.y-=.03),this.renderer.render(this.scene,this.camera)}async exportGifDataUri(e){const i=Math.max(55,Math.min(140,e.frameDelayMs||80)),r=jx();for(let u=0;u<18;u++){this.applySpecAtProgress(e,u/18),this.outCtx.clearRect(0,0,fi,fi),this.outCtx.drawImage(this.canvas,0,0,fi,fi);const m=this.outCtx.getImageData(0,0,fi,fi).data,v=Vx(m,76),x=Wx(m,v);r.writeFrame(x,fi,fi,{palette:v,delay:i})}r.finish();const s=r.bytes(),a=32768,o=[];for(let u=0;u<s.length;u+=a)o.push(String.fromCharCode(...s.subarray(u,u+a)));const l=`data:image/gif;base64,${btoa(o.join(""))}`,d=Math.max(1,Math.round(s.length/1024)),f=new Blob([new Uint8Array(s)],{type:"image/gif"});return{mediaData:l,sizeKb:d,blob:f}}dispose(){this.renderer.dispose()}}const n2=[{id:"standing",label:"De pie"},{id:"supine",label:"Boca arriba"},{id:"prone",label:"Boca abajo"},{id:"plank",label:"Plancha"},{id:"quadruped",label:"4 apoyos"},{id:"seated",label:"Sentado"}],i2=[{id:"none",label:"Sin equipo"},{id:"mat",label:"Colchoneta"},{id:"dumbbells",label:"Mancuernas"},{id:"barbell",label:"Barra"},{id:"kettlebell",label:"Kettlebell"},{id:"box",label:"Cajón"},{id:"gloves",label:"Guantes"}],r2=[{id:"three_quarter",label:"3/4"},{id:"front",label:"Frontal"},{id:"side",label:"Lateral"},{id:"low_side",label:"Suelo"},{id:"overhead",label:"Arriba"}],jt=({label:t,value:e,min:n,max:i,step:r=1,unit:s="°",onChange:a})=>y.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[y.jsx("span",{className:"w-28 text-slate-300 font-medium truncate",children:t}),y.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:o=>a(Number(o.target.value)),className:"flex-1 accent-emerald-500 cursor-pointer h-1.5"}),y.jsxs("span",{className:"w-12 text-right font-mono text-emerald-300 font-bold",children:[r<1?e.toFixed(2):Math.round(e),s]})]}),s2=({initialExerciseName:t,initialSaveAsName:e,editingSourceLabel:n,t:i=Oi.es,onApplyGif:r})=>{const s=Ie.useRef(null),a=Ie.useRef(null),[o,c]=Ie.useState(t.trim()||""),[l,d]=Ie.useState((e??t).trim()||""),[f,u]=Ie.useState(()=>t.trim()?Fo(t).spec:UM("standing")),[p,m]=Ie.useState(()=>t.trim()?Fo(t).matchedNotes:["Elige un ejercicio por texto o ajusta las poses"]),[v,x]=Ie.useState("play"),[h,g]=Ie.useState("B"),[S,M]=Ie.useState(!1),[b,T]=Ie.useState(!1),[_,E]=Ie.useState("arms"),[N,P]=Ie.useState(!1),[I,z]=Ie.useState(null),[R,C]=Ie.useState(null),D=Ie.useRef(f);D.current=f;const G=Ie.useRef(v);G.current=v,Ie.useEffect(()=>{const U=t.trim();if(!U)return;c(U),d((e??U).trim());const se=Fo(U);u(se.spec),m(se.matchedNotes)},[t,e]),Ie.useEffect(()=>{const U=s.current;if(!U)return;let se=0;const ie=performance.now();try{const we=new t2(U,320);a.current=we;const et=Z=>{const Ee=D.current,Ue=G.current;if(Ue==="A"||Ue==="B")we.applyStaticPose(Ee,Ue);else{const Pe=Math.max(900,(Ee.frameDelayMs||80)*18),st=(Z-ie)%Pe/Pe;we.applySpecAtProgress(Ee,st)}se=requestAnimationFrame(et)};return se=requestAnimationFrame(et),()=>{cancelAnimationFrame(se),we.dispose(),a.current=null}}catch(we){C(we instanceof Error?we.message:"No se pudo iniciar WebGL 3D en este navegador.")}},[]);const k=U=>{const se=(U??o).trim();if(!se)return;U!==void 0?(c(U),d(U)):l.trim()||d(se);const ie=Fo(se);u(ie.spec),m(ie.matchedNotes),x("play"),z(null)},B=h==="A"?f.poseA:f.poseB,F=U=>{u(se=>{const we={...h==="A"?se.poseA:se.poseB,...U};return h==="A"?{...se,poseA:we}:{...se,poseB:we}})},W=U=>{const se=Fe(U);u(ie=>({...ie,posture:U,prop:U==="standing"||U==="seated"?ie.prop==="mat"?"none":ie.prop:ie.prop==="none"?"mat":ie.prop,camera:U==="standing"||U==="seated"?"three_quarter":"low_side",poseA:{...se},poseB:{...se}}))},K=()=>{u(U=>({...U,poseB:{...U.poseA}})),g("B"),x("B")},oe=()=>{u(U=>({...U,poseA:{...U.poseB},poseB:{...U.poseA}}))},Te=()=>l.trim()||o.trim()||t.trim()||"Ejercicio 3D",Y=async()=>{const U=a.current;if(!U)return;const se=Te();P(!0),z("Renderizando 18 cuadros 3D...");try{const ie=await U.exportGifDataUri(f);Ld({label:se,category:"Mi Catálogo",mediaData:ie.mediaData,sourceQuery:o.trim()||se}),z(`✅ GIF guardado como "${se}" (${ie.sizeKb} KB)`),r(ie.mediaData,se,o.trim()||se)}catch(ie){z(ie instanceof Error?`⚠️ ${ie.message}`:"⚠️ Error al generar GIF")}finally{P(!1)}},ae=async()=>{const U=a.current;if(!U)return;const se=Te();P(!0),z("Renderizando GIF 3D para guardar en tu PC...");try{const ie=await U.exportGifDataUri(f);Ld({label:se,category:"Mi Catálogo",mediaData:ie.mediaData,sourceQuery:o.trim()||se});const we=await Ax(ie.blob,se);z(we?`💾 Guardado en tu PC como "${we}" (${ie.sizeKb} KB) y añadido a Mi Catálogo`:"Guardado cancelado.")}catch(ie){z(ie instanceof Error?`⚠️ ${ie.message}`:"⚠️ Error al exportar GIF")}finally{P(!1)}};return y.jsxs("div",{className:"space-y-3.5",children:[n&&y.jsxs("div",{className:"bg-amber-500/15 border border-amber-500/40 rounded-xl px-3.5 py-2 flex items-center justify-between gap-2 text-xs text-amber-200",children:[y.jsxs("span",{children:["✏️ ",y.jsx("strong",{children:"Editando GIF del catálogo:"})," ",n]}),y.jsx("span",{className:"text-[11px] text-amber-300/90",children:"Modifica la pose y guárdalo con otro nombre"})]}),y.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-xl p-3 space-y-2.5",children:[y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 mb-1",children:i.describeExerciseLabel||"✨ Movimiento base / Descripción"}),y.jsxs("div",{className:"flex gap-1.5",children:[y.jsx("input",{type:"text",value:o,onChange:U=>c(U.target.value),onKeyDown:U=>{U.key==="Enter"&&(U.preventDefault(),k())},placeholder:i.describePlaceholder||"Ej. Sentadilla sumo, bicho muerto...",className:"flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"}),y.jsx("button",{type:"button",onClick:()=>k(),className:"px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition shrink-0 cursor-pointer",children:i.generatePoseBtn||"Generar pose"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-extrabold uppercase tracking-wider text-cyan-400 mb-1",children:"🏷️ Guardar GIF / Ejercicio con el nombre:"}),y.jsx("input",{type:"text",value:l,onChange:U=>d(U.target.value),placeholder:"Ej. Sentadillas con Pausa (Personalizado)",className:"w-full bg-slate-900 border border-cyan-500/40 rounded-lg px-2.5 py-1.5 text-xs text-cyan-100 font-semibold placeholder-slate-500 focus:outline-none focus:border-cyan-400"})]})]}),y.jsx("div",{className:"flex flex-wrap gap-1.5",children:BM.map(U=>y.jsx("button",{type:"button",onClick:()=>k(U),className:"px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-[10px] font-semibold text-slate-300 transition cursor-pointer",children:U},U))}),p.length>0&&y.jsxs("p",{className:"text-[11px] text-slate-400",children:["🎯 ",p.join(" · ")]})]}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 items-start",children:[y.jsxs("div",{className:"flex flex-col items-center gap-2",children:[y.jsxs("div",{className:"w-[200px] h-[200px] rounded-xl overflow-hidden border border-slate-700 bg-[#101827] relative",children:[y.jsx("canvas",{ref:s,width:320,height:320,className:"w-full h-full block"}),R&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/90 p-3 flex items-center justify-center text-center text-xs text-rose-400",children:R})]}),y.jsx("div",{className:"grid grid-cols-3 gap-1 w-[200px]",children:[["play",i.animPreview||"▶ Anim"],["A",i.poseABtn||"Pose A"],["B",i.poseBBtn||"Pose B"]].map(([U,se])=>y.jsx("button",{type:"button",onClick:()=>{x(U),(U==="A"||U==="B")&&g(U)},className:`py-1 rounded-lg text-[10px] font-bold border transition cursor-pointer ${v===U?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"}`,children:se},U))})]}),y.jsxs("div",{className:"space-y-2.5",children:[y.jsxs("div",{children:[y.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:i.basePostureLabel||"Postura base"}),y.jsx("div",{className:"flex flex-wrap gap-1",children:n2.map(U=>y.jsx("button",{type:"button",onClick:()=>W(U.id),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${f.posture===U.id?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:U.label},U.id))})]}),y.jsxs("div",{children:[y.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:i.propLabel||"Equipo / Accesorio"}),y.jsx("div",{className:"flex flex-wrap gap-1",children:i2.map(U=>y.jsx("button",{type:"button",onClick:()=>u(se=>({...se,prop:U.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${f.prop===U.id?"bg-cyan-500/20 border-cyan-400 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:U.label},U.id))})]}),y.jsxs("div",{children:[y.jsx("span",{className:"block text-[10px] font-bold uppercase text-slate-400 mb-1",children:i.cameraLabel||"Cámara"}),y.jsx("div",{className:"flex flex-wrap gap-1",children:r2.map(U=>y.jsx("button",{type:"button",onClick:()=>u(se=>({...se,camera:U.id})),className:`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${f.camera===U.id?"bg-indigo-500/20 border-indigo-400 text-indigo-300":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600"}`,children:U.label},U.id))})]}),y.jsx(jt,{label:i.speedLabel||"Velocidad",value:f.frameDelayMs,min:55,max:130,step:5,unit:"ms",onChange:U=>u(se=>({...se,frameDelayMs:U}))})]})]}),y.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3 space-y-2.5",children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("div",{className:"flex items-center gap-1",children:["A","B"].map(U=>y.jsxs("button",{type:"button",onClick:()=>{g(U),x(U)},className:`px-2.5 py-1 rounded-lg text-xs font-extrabold border transition cursor-pointer ${h===U?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-900 text-slate-300 border-slate-700"}`,children:[i.editingPoseLabel||"Editando Pose"," ",U," ",U==="A"?i.startWord||"(Inicio)":i.endWord||"(Fin)"]},U))}),y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx("button",{type:"button",onClick:K,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:i.copyAToB||"Copiar A → B"}),y.jsx("button",{type:"button",onClick:oe,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-300 cursor-pointer",children:"A ↔ B"})]})]}),y.jsx("div",{className:"grid grid-cols-3 gap-1",children:[["torso",i.torsoHeightTab||"Torso y Altura"],["arms",i.armsTab||"Brazos"],["legs",i.legsTab||"Piernas"]].map(([U,se])=>y.jsx("button",{type:"button",onClick:()=>E(U),className:`py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${_===U?"bg-slate-800 text-emerald-300 border border-emerald-500/40":"bg-slate-900/60 text-slate-400 hover:text-slate-200"}`,children:se},U))}),_==="torso"&&y.jsxs("div",{className:"space-y-1.5",children:[y.jsx(jt,{label:"Altura cadera",value:B.pelvisOffsetY,min:-.55,max:.3,step:.02,unit:"m",onChange:U=>F({pelvisOffsetY:U})}),y.jsx(jt,{label:"Inclinar torso",value:B.torsoPitch,min:-75,max:75,onChange:U=>F({torsoPitch:U})}),y.jsx(jt,{label:"Giro torso",value:B.torsoTwist,min:-60,max:60,onChange:U=>F({torsoTwist:U})}),y.jsx(jt,{label:"Ladeo lateral",value:B.torsoRoll,min:-35,max:35,onChange:U=>F({torsoRoll:U})}),y.jsx(jt,{label:"Cabeza",value:B.headPitch,min:-40,max:40,onChange:U=>F({headPitch:U})})]}),_==="arms"&&y.jsxs("div",{className:"space-y-1.5",children:[y.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[y.jsx("input",{type:"checkbox",checked:S,onChange:U=>M(U.target.checked),className:"accent-emerald-500"}),y.jsx("span",{children:i.symmetricArmsLabel||"Mover ambos brazos iguales (simétrico)"})]}),y.jsx(jt,{label:S?"Brazos adelante":"Brazo Izq. adelante",value:B.leftArmLift,min:-55,max:180,onChange:U=>F(S?{leftArmLift:U,rightArmLift:U}:{leftArmLift:U})}),!S&&y.jsx(jt,{label:"Brazo Der. adelante",value:B.rightArmLift,min:-55,max:180,onChange:U=>F({rightArmLift:U})}),y.jsx(jt,{label:S?"Abrir brazos":"Abrir brazo Izq.",value:B.leftArmOut,min:-25,max:155,onChange:U=>F(S?{leftArmOut:U,rightArmOut:U}:{leftArmOut:U})}),!S&&y.jsx(jt,{label:"Abrir brazo Der.",value:B.rightArmOut,min:-25,max:155,onChange:U=>F({rightArmOut:U})}),y.jsx(jt,{label:S?"Flexión codos":"Codo Izq.",value:B.leftElbowFlex,min:0,max:145,onChange:U=>F(S?{leftElbowFlex:U,rightElbowFlex:U}:{leftElbowFlex:U})}),!S&&y.jsx(jt,{label:"Codo Der.",value:B.rightElbowFlex,min:0,max:145,onChange:U=>F({rightElbowFlex:U})})]}),_==="legs"&&y.jsxs("div",{className:"space-y-1.5",children:[y.jsxs("label",{className:"flex items-center gap-2 text-[11px] text-slate-300 cursor-pointer pb-1",children:[y.jsx("input",{type:"checkbox",checked:b,onChange:U=>T(U.target.checked),className:"accent-emerald-500"}),y.jsx("span",{children:i.symmetricLegsLabel||"Mover ambas piernas iguales (simétrico)"})]}),y.jsx(jt,{label:b?"Subir piernas":"Pierna Izq.",value:B.leftHipFlex,min:-50,max:130,onChange:U=>F(b?{leftHipFlex:U,rightHipFlex:U}:{leftHipFlex:U})}),!b&&y.jsx(jt,{label:"Pierna Der.",value:B.rightHipFlex,min:-50,max:130,onChange:U=>F({rightHipFlex:U})}),y.jsx(jt,{label:b?"Abrir piernas":"Abrir Izq.",value:B.leftHipOut,min:-25,max:65,onChange:U=>F(b?{leftHipOut:U,rightHipOut:U}:{leftHipOut:U})}),!b&&y.jsx(jt,{label:"Abrir Der.",value:B.rightHipOut,min:-25,max:65,onChange:U=>F({rightHipOut:U})}),y.jsx(jt,{label:b?"Flexión rodillas":"Rodilla Izq.",value:B.leftKneeFlex,min:0,max:145,onChange:U=>F(b?{leftKneeFlex:U,rightKneeFlex:U}:{leftKneeFlex:U})}),!b&&y.jsx(jt,{label:"Rodilla Der.",value:B.rightKneeFlex,min:0,max:145,onChange:U=>F({rightKneeFlex:U})})]})]}),y.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1",children:[y.jsx("button",{type:"button",disabled:N||!!R,onClick:Y,className:"flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-black text-xs sm:text-sm transition cursor-pointer",children:N?i.creatingGifBtn||"⏳ Generando GIF...":`🎨 Guardar como "${Te()}" y aplicar`}),y.jsx("button",{type:"button",disabled:N||!!R,onClick:ae,className:"py-2.5 px-3.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 disabled:opacity-60 text-cyan-200 font-bold text-xs border border-cyan-500/40 transition cursor-pointer",title:"Elegir en qué carpeta de tu PC guardar el archivo .gif",children:"💾 Guardar .gif en PC (elegir carpeta)..."})]}),I&&y.jsx("p",{className:"text-xs text-emerald-300 font-semibold",children:I})]})};function Ur(t){const e=t.trim();return e?/^(Ejercicio|Exercise|Exercício|Exercice|Übung|Esercizio)\s+\d+$/i.test(e):!0}const a2=({exercise:t,index:e,total:n,t:i=Oi.es,onChange:r,onDuplicate:s,onDelete:a,onMoveUp:o,onMoveDown:c})=>{const l=Sc(t),[d,f]=Ie.useState(!1),[u,p]=Ie.useState("catalog"),[m,v]=Ie.useState(""),[x,h]=Ie.useState(!1),[g,S]=Ie.useState(null),[M,b]=Ie.useState(null),[T,_]=Ie.useState(()=>Ls()),[E,N]=Ie.useState(""),[P,I]=Ie.useState(""),[z,R]=Ie.useState(null),C=Ie.useRef(null),D=xh(t),G=gh(t.mediaRef||t.mediaId),k=RS(t.mediaData);Ie.useEffect(()=>{d&&_(Ls())},[d]);const B=Z=>{b(Z),setTimeout(()=>b(null),3500)},F=Ie.useMemo(()=>{const Z=m.trim().toLowerCase();return Z?ya.filter(Ee=>Ee.label.toLowerCase().includes(Z)||Ee.category.toLowerCase().includes(Z)||Ee.key.toLowerCase().includes(Z)):ya},[m]),W=Ie.useMemo(()=>{const Z=m.trim().toLowerCase();return Z?T.filter(Ee=>Ee.label.toLowerCase().includes(Z)||Ee.category.toLowerCase().includes(Z)):T},[T,m]),K=(Z,Ee)=>{r({...t,[Z]:typeof Ee=="string"?Ee:Math.max(0,Number(Ee)||0)})},oe=Z=>{const{mediaData:Ee,mediaId:Ue,...Pe}=t,st=Ur(t.name)?Z.label:t.name;r({...Pe,name:st,mediaRef:Z.mediaRef}),S(null),f(!1)},Te=Z=>{const{mediaRef:Ee,mediaId:Ue,...Pe}=t;r({...Pe,name:Z.label,mediaData:Z.mediaData}),S(null),f(!1)},Y=Z=>{N(Z.label),I(`${Z.label} (Personalizado)`),R(Z.label),p("creator3d"),f(!0)},ae=Z=>{N(Z.sourceQuery||Z.label),I(`${Z.label} (Variante)`),R(Z.label),p("creator3d"),f(!0)},U=()=>{if(G)N(G.label),I(t.name.trim()&&t.name.trim().toLowerCase()!==G.label.toLowerCase()?t.name.trim():`${G.label} (Personalizado)`),R(G.label);else{const Z=t.name.trim()&&!Ur(t.name)?t.name.trim():"Sentadillas";N(Z),I(D?`${Z} (Modificado)`:Z),R(D?Z:null)}p("creator3d"),f(!0)},se=async(Z,Ee)=>{const Ue=Z||D;if(!Ue)return;const Pe=Ee||(Ur(t.name)?G==null?void 0:G.label:t.name.trim())||"ejercicio";try{const st=await TS(Ue,Pe);st&&B(`💾 GIF guardado en tu PC: ${st}`)}catch{B("⚠️ No se pudo guardar el archivo GIF.")}},ie=()=>{const{mediaData:Z,mediaRef:Ee,mediaId:Ue,...Pe}=t;r(Pe),S(null),f(!1)},we=(Z,Ee,Ue)=>{const{mediaRef:Pe,mediaId:st,...ht}=t,zt=Ee&&Ee.trim()?Ee.trim():t.name;r({...ht,name:zt,mediaData:Z}),_(Ls()),S(null),f(!1),B(`✅ GIF "${zt}" aplicado al ejercicio`)},et=async Z=>{var Ue;const Ee=(Ue=Z.target.files)==null?void 0:Ue[0];if(Z.target.value="",!!Ee){h(!0),S(null);try{const Pe=await FM(Ee),st=Ee.name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," "),ht=Ur(t.name)&&st?st:t.name;Ld({label:ht||st||"GIF Subido",category:"Subido de PC",mediaData:Pe.mediaData,sourceQuery:ht||st}),_(Ls());const{mediaRef:zt,mediaId:gt,...In}=t;r({...In,name:ht,mediaData:Pe.mediaData}),f(!1)}catch(Pe){S(Pe instanceof Error?Pe.message:"No se pudo procesar la imagen o GIF seleccionado.")}finally{h(!1)}}};return y.jsxs("div",{className:"bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-sm hover:border-slate-600 transition",children:[M&&y.jsx("div",{className:"mb-3 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-between",children:y.jsx("span",{children:M})}),y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 mb-3.5",children:[y.jsxs("div",{className:"flex items-start gap-3.5 flex-1 min-w-0",children:[y.jsxs("div",{className:"relative shrink-0",children:[y.jsx("button",{type:"button",onClick:()=>{S(null),R(null),p("catalog"),f(!0)},title:D?i.changeGifTitle||"Cambiar o editar GIF del ejercicio":i.addGifTitle||"Elegir o crear GIF animado 3D",className:`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 overflow-hidden flex flex-col items-center justify-center transition cursor-pointer shadow-md ${D?"border-emerald-500/70 bg-slate-950 hover:border-emerald-400":"border-dashed border-slate-600 bg-slate-900/80 hover:border-emerald-500/60 text-slate-400 hover:text-emerald-400"}`,children:D?y.jsxs(y.Fragment,{children:[y.jsx("img",{src:D,alt:t.name||i.exerciseDefaultName||"Ejercicio",className:"w-full h-full object-contain bg-[#101827]"}),G?y.jsx("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/85 text-[9px] font-extrabold text-emerald-400 text-center leading-tight py-0.5 truncate px-1",children:G.label}):k!==null?y.jsxs("span",{className:"absolute bottom-0 left-0 right-0 bg-slate-950/85 text-[9px] font-mono font-bold text-cyan-300 text-center leading-tight py-0.5",children:["GIF 3D · ",k,"KB"]}):null]}):y.jsxs("div",{className:"flex flex-col items-center justify-center p-2 text-center",children:[y.jsx("span",{className:"text-xl mb-1",children:"🎬"}),y.jsx("span",{className:"text-[11px] font-extrabold tracking-tight leading-tight",children:"Elegir / Crear GIF"})]})}),D&&y.jsx("button",{type:"button",onClick:ie,title:i.removeGifTitle||"Quitar GIF / imagen",className:"absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-black flex items-center justify-center shadow-lg cursor-pointer",children:"×"})]}),y.jsxs("div",{className:"flex-1 min-w-0 space-y-2",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs shrink-0",children:e+1}),y.jsx("input",{type:"text",value:t.name,onChange:Z=>K("name",Z.target.value),placeholder:i.exerciseNamePlaceholder||"Nombre del ejercicio",className:"flex-1 bg-slate-900/70 border border-slate-700 rounded-xl px-3 py-2 text-sm sm:text-base font-bold text-slate-100 focus:outline-none focus:border-emerald-500"})]}),y.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[y.jsxs("button",{type:"button",onClick:()=>{S(null),R(null),p("catalog"),f(!0)},className:"px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-bold transition cursor-pointer",children:["📚 ",D?"Cambiar GIF":"Catálogo GIFs"]}),y.jsxs("button",{type:"button",onClick:U,className:"px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold transition cursor-pointer",title:"Modificar este GIF en el editor 3D y guardarlo con otro nombre",children:["✏️ ",D?"Editar GIF 3D / Renombrar":"Crear GIF 3D"]}),D&&y.jsx("button",{type:"button",onClick:()=>void se(),className:"px-2.5 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold transition cursor-pointer",title:"Guardar este archivo .gif en la carpeta de tu PC que elijas",children:"💾 Guardar GIF en PC..."})]})]})]}),y.jsxs("div",{className:"flex items-center space-x-1 self-end sm:self-start shrink-0",children:[y.jsx("button",{type:"button",onClick:o,disabled:e===0,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:i.moveUpTitle||"Mover arriba",children:y.jsx(GS,{size:16})}),y.jsx("button",{type:"button",onClick:c,disabled:e===n-1,className:"p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 disabled:opacity-30 disabled:cursor-not-allowed",title:i.moveDownTitle||"Mover abajo",children:y.jsx(HS,{size:16})}),y.jsx("button",{type:"button",onClick:s,className:"p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-700/60",title:i.duplicateTitle||"Duplicar",children:y.jsx(zS,{size:16})}),y.jsx("button",{type:"button",onClick:a,className:"p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-700/60",title:i.deleteTitle||"Eliminar",children:y.jsx(kS,{size:16})})]})]}),y.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:i.rounds}),y.jsx("input",{type:"number",min:1,value:t.roundCount,onChange:Z=>K("roundCount",parseInt(Z.target.value)||1),className:"w-full bg-slate-900/80 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold focus:outline-none focus:border-cyan-400"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-bold text-emerald-400 mb-1",children:i.work}),y.jsx("input",{type:"number",min:1,value:t.workDurationSeconds,onChange:Z=>K("workDurationSeconds",parseInt(Z.target.value)||0),className:"w-full bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-sm text-emerald-300 font-mono font-bold focus:outline-none focus:border-emerald-400"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-bold text-rose-400 mb-1",children:i.restBetween}),y.jsx("input",{type:"number",min:0,value:t.restBetweenRoundsSeconds,onChange:Z=>K("restBetweenRoundsSeconds",parseInt(Z.target.value)||0),className:"w-full bg-[#7A0D1E]/40 border border-rose-500/40 rounded-lg px-2.5 py-1.5 text-sm text-rose-300 font-mono font-bold focus:outline-none focus:border-rose-400"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:i.restAfter}),y.jsx("input",{type:"number",min:0,value:t.restAfterExerciseSeconds,onChange:Z=>K("restAfterExerciseSeconds",parseInt(Z.target.value)||0),className:"w-full bg-[#5E3A00]/40 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold focus:outline-none focus:border-amber-400"})]})]}),y.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-400",children:[y.jsx("span",{children:i.estimatedDuration||"Duración estimada del ejercicio:"}),y.jsx("span",{className:"font-semibold text-slate-300 font-mono",children:Tt(l.totalSeconds)})]}),d&&y.jsx("div",{className:"fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>!x&&f(!1),children:y.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all",onClick:Z=>Z.stopPropagation(),children:[y.jsxs("div",{className:"flex items-center justify-between px-5 py-3.5 border-b border-slate-800",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"text-base font-black text-white",children:i.mediaModalTitle||"Animación GIF del ejercicio"}),y.jsx("p",{className:"text-xs text-slate-400",children:"Elige del catálogo, edita cualquier GIF para guardarlo con otro nombre o guárdalo en tu PC"})]}),y.jsx("button",{type:"button",onClick:()=>!x&&f(!1),className:"w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer",children:"×"})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-1.5 px-4 pt-3 pb-2 bg-slate-950/60 border-b border-slate-800/80",children:[y.jsxs("button",{type:"button",onClick:()=>p("catalog"),className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${u==="catalog"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:["📚 ",i.tabCatalog||"Catálogo"," (",ya.length+T.length,") /"," ",i.tabUploadShort||"Cargar de PC"]}),y.jsx("button",{type:"button",onClick:()=>{if(!E){const Z=(G==null?void 0:G.label)||(Ur(t.name)?"":t.name.trim())||m.trim();N(Z),I(G?`${G.label} (Personalizado)`:Z)}p("creator3d")},className:`py-2 px-3 rounded-xl text-xs font-extrabold border transition cursor-pointer ${u==="creator3d"?"bg-emerald-500/15 border-emerald-400 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:"🎨 Crear / Editar GIF 3D (y guardar con otro nombre)"})]}),y.jsx("div",{className:"p-4 space-y-4 overflow-y-auto flex-1",children:u==="creator3d"?y.jsx(s2,{initialExerciseName:E||(G==null?void 0:G.label)||(Ur(t.name)?"":t.name.trim())||m.trim(),initialSaveAsName:P||(G?`${G.label} (Personalizado)`:Ur(t.name)?"":t.name.trim()),editingSourceLabel:z,t:i,onApplyGif:we}):y.jsxs(y.Fragment,{children:[y.jsxs("div",{children:[y.jsx("input",{ref:C,type:"file",accept:"image/gif,image/png,image/jpeg,image/webp",onChange:et,className:"hidden"}),y.jsx("button",{type:"button",disabled:x,onClick:()=>{var Z;return(Z=C.current)==null?void 0:Z.click()},className:"w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-950 font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer",children:x?y.jsx("span",{children:i.optimizingGifBtn||"⏳ Optimizando GIF / imagen (220×220)..."}):y.jsx("span",{children:"📂 Cargar GIF desde una carpeta de mi PC (se añade a tu catálogo)"})}),g&&y.jsxs("p",{className:"mt-2 text-xs text-rose-400 font-medium",children:["⚠️ ",g]})]}),y.jsx("input",{type:"text",value:m,onChange:Z=>v(Z.target.value),placeholder:i.searchExercisePlaceholder||"Buscar ejercicio (ej. burpees, boxeo, plancha)...",className:"w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"}),W.length>0&&y.jsxs("div",{className:"space-y-2",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("span",{className:"text-xs font-extrabold uppercase tracking-wider text-cyan-400",children:["⭐ Mi Catálogo Personal (",W.length,")"]}),y.jsx("span",{className:"text-[11px] text-slate-400",children:"GIFs creados o editados por ti"})]}),y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:W.map(Z=>y.jsxs("div",{className:"rounded-xl p-2.5 border border-cyan-500/40 bg-slate-950/90 flex flex-col items-center gap-2 relative",children:[y.jsx("button",{type:"button",onClick:()=>{_(bS(Z.id))},title:"Eliminar de Mi Catálogo",className:"absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center cursor-pointer",children:"×"}),y.jsxs("button",{type:"button",onClick:()=>Te(Z),className:"flex flex-col items-center gap-1.5 w-full cursor-pointer",children:[y.jsx("img",{src:Z.mediaData,alt:Z.label,className:"w-24 h-24 rounded-xl object-contain bg-[#101827] border border-slate-800"}),y.jsx("span",{className:"text-xs font-bold text-cyan-200 leading-tight line-clamp-2 text-center",children:Z.label})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-1 w-full",children:[y.jsx("button",{type:"button",onClick:()=>ae(Z),className:"py-1 px-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 text-[10px] font-bold transition cursor-pointer",children:"✏️ Editar"}),y.jsx("button",{type:"button",onClick:()=>void se(Z.mediaData,Z.label),className:"py-1 px-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[10px] font-bold transition cursor-pointer",title:"Guardar archivo .gif en una carpeta de tu PC",children:"💾 En PC"})]})]},Z.id))})]}),y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("span",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400",children:[i.integratedCatalog||"Catálogo integrado"," (",F.length,")"]}),D&&y.jsx("button",{type:"button",onClick:ie,className:"text-xs font-bold text-rose-400 hover:text-rose-300 cursor-pointer",children:i.clearCurrent||"Quitar actual"})]}),F.length===0?y.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center space-y-2.5",children:[y.jsxs("p",{className:"text-xs text-slate-400",children:[i.noPresetFound||"No hay ningún preset llamado"," ",y.jsxs("span",{className:"text-slate-200 font-semibold",children:['"',m.trim(),'"']})," ",i.inPresetsWord||"en los"," ",ya.length," ",i.presetsWord||"predefinidos."]}),y.jsxs("button",{type:"button",onClick:()=>{N(m.trim()),I(m.trim()),R(null),p("creator3d")},className:"px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer",children:["🎨 ",i.createIn3dBtn||"Crear en el Creador 3D"," (",m.trim(),")"]})]}):y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:F.map(Z=>{const Ee=(G==null?void 0:G.key)===Z.key;return y.jsxs("div",{className:`rounded-xl p-2.5 border text-center transition flex flex-col items-center justify-between gap-2 ${Ee?"border-emerald-400 bg-emerald-500/15":"border-slate-800 bg-slate-950/80 hover:border-slate-600"}`,children:[y.jsxs("button",{type:"button",onClick:()=>oe(Z),className:"flex flex-col items-center gap-1.5 w-full cursor-pointer",children:[y.jsx("img",{src:Z.url,alt:Z.label,className:"w-24 h-24 rounded-xl object-contain bg-[#101827] border border-slate-800/80"}),y.jsx("span",{className:"text-xs font-bold text-slate-100 leading-tight line-clamp-2",children:Z.label}),y.jsxs("span",{className:"text-[9px] font-semibold text-slate-400 uppercase",children:[Z.category,Z.bundled?"":" · WEB"]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-1 w-full pt-1 border-t border-slate-800/80",children:[y.jsx("button",{type:"button",onClick:()=>Y(Z),className:"py-1 px-1.5 rounded-lg bg-slate-800 hover:bg-emerald-500/20 text-emerald-300 text-[10px] font-bold transition cursor-pointer",title:`Modificar "${Z.label}" en 3D y guardarlo con otro nombre`,children:"✏️ Editar 3D"}),y.jsx("button",{type:"button",onClick:()=>void se(Z.url,Z.label),className:"py-1 px-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-cyan-300 text-[10px] font-bold transition cursor-pointer",title:`Guardar "${Z.label}.gif" en una carpeta de tu PC`,children:"💾 En PC"})]})]},Z.key)})})]})]})})]})})]})},o2=({initialWorkout:t,t:e=Oi.es,onWorkoutChange:n,onSaveFile:i,onOpenFile:r,onPreviewRoutine:s,onShareWhatsApp:a})=>{const[o,c]=Ie.useState(t),[l,d]=Ie.useState(null),[f,u]=Ie.useState(null),p=o_.useRef(null);Ie.useEffect(()=>{c(R=>R===t?R:t),u(null)},[t]),Ie.useEffect(()=>{n==null||n(o)},[o,n]);const m=o.routines[0],v=Ka(m),x=R=>{d(R),setTimeout(()=>d(null),3500)},h=()=>{var C,D;if(!m.name||!m.name.trim()){const G=e.errRoutineNameEmpty||"⚠️ Debes ingresar un nombre para la rutina antes de guardar (ej: HIIT / Tabata).";return u(G),x(G),(C=p.current)==null||C.focus(),(D=p.current)==null||D.scrollIntoView({behavior:"smooth",block:"center"}),!1}const R=m.exercises.findIndex(G=>!G.name||!G.name.trim());if(R>=0){const G=`⚠️ El ejercicio #${R+1} debe tener un nombre antes de guardar.`;return x(G),!1}return u(null),!0},g=(R,C)=>{c(D=>({...D,[R]:C}))},S=(R,C)=>{R==="name"&&typeof C=="string"&&C.trim()&&u(null),c(D=>{const G=[...D.routines];return G[0]={...G[0],[R]:typeof C=="string"?C:Math.max(1,Number(C)||0)},{...D,routines:G}})},M=(R,C)=>{c(D=>{const G=[...D.routines],k=[...G[0].exercises];return k[R]=C,G[0]={...G[0],exercises:k},{...D,routines:G}})},b=()=>{c(R=>{const C=[...R.routines],D={...wx,id:"ex-"+Date.now(),name:`${e.exerciseDefaultName||"Ejercicio"} ${C[0].exercises.length+1}`};return C[0]={...C[0],exercises:[...C[0].exercises,D]},{...R,routines:C}})},T=R=>{c(C=>{const D=[...C.routines],G=D[0].exercises[R],k={...G,id:"ex-"+Date.now(),name:`${G.name} (copia)`},B=[...D[0].exercises];return B.splice(R+1,0,k),D[0]={...D[0],exercises:B},{...C,routines:D}})},_=R=>{if(m.exercises.length<=1){alert(e.minOneExerciseAlert||"La rutina debe tener al menos un ejercicio.");return}c(C=>{const D=[...C.routines],G=D[0].exercises.filter((k,B)=>B!==R);return D[0]={...D[0],exercises:G},{...C,routines:D}})},E=(R,C)=>{const D=C==="up"?R-1:R+1;D<0||D>=m.exercises.length||c(G=>{const k=[...G.routines],B=[...k[0].exercises],F=B[R];return B[R]=B[D],B[D]=F,k[0]={...k[0],exercises:B},{...G,routines:k}})},N=async()=>{if(!h())return;if(a){await a(o);return}const R=m.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",C=JSON.stringify(o,null,2),D=new File([C],`${R}.wkt`,{type:"application/octet-stream"}),G=`🔥 ¡${m.name}! • ⏱️ ${Tt(v.totalSeconds)} • 💪 ${m.exercises.length} ${e.exercisesWord||"ejercicios"}
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`,k=await Lx(o,e);if(k){const B=new File([k],`${R}_card.png`,{type:"image/png"});if(typeof navigator.canShare=="function"&&navigator.canShare({files:[B,D]}))try{await navigator.share({title:m.name,text:G,files:[B,D]});return}catch(F){if((F==null?void 0:F.name)==="AbortError")return}}window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(G)}`,"_blank")},P=()=>{if(!h())return;const R=Px(o);window.location.href=R,x(e.openingApp||"Abriendo aplicación en el móvil...")},I=()=>{h()&&(s==null||s())},z=async()=>{if(!h())return;if(i){await i(o)!==!1&&x(`💾 ${e.savedAs||"Guardado"}: ${m.name.trim()}.wkt`);return}const R=new Blob([JSON.stringify(o,null,2)],{type:"application/octet-stream"}),C=URL.createObjectURL(R),D=document.createElement("a");D.href=C,D.download=`${m.name.trim().toLowerCase().replace(/\s+/g,"_")}.wkt`,D.click(),URL.revokeObjectURL(C),x("Archivo .wkt descargado.")};return y.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[l&&y.jsx("div",{className:`fixed bottom-6 right-6 z-50 font-semibold px-4 py-3 rounded-xl shadow-lg border animate-bounce ${l.startsWith("⚠️")?"bg-rose-600 text-white border-rose-400":"bg-emerald-500 text-slate-950 border-emerald-400"}`,children:l}),y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800",children:[y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx(Yl,{className:"w-10 h-10 shrink-0 shadow-md rounded-xl"}),y.jsxs("div",{children:[y.jsx("h1",{className:"text-2xl font-black text-slate-100 tracking-tight",children:e.appTitle}),y.jsx("p",{className:"text-xs text-slate-400",children:e.subtitle})]})]}),y.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s&&y.jsx("button",{type:"button",onClick:I,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-bold transition cursor-pointer",children:y.jsx("span",{children:e.previewModeBtn||"👁️ Vista Previa"})}),r&&y.jsxs("button",{type:"button",onClick:r,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition cursor-pointer",title:e.openWktBtn||"Abrir archivo .wkt",children:[y.jsx(Nx,{size:16}),y.jsx("span",{children:e.openFileBtn||"Abrir Archivo"})]}),y.jsxs("button",{type:"button",onClick:z,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition cursor-pointer",title:e.saveAs||"Elegir dónde guardar el archivo .wkt",children:[y.jsx(Dx,{size:16}),y.jsx("span",{children:e.saveLocalBtn||"Guardar Local"})]}),y.jsxs("button",{type:"button",onClick:N,className:"flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-lg text-xs font-bold transition shadow-sm cursor-pointer",children:[y.jsx(Kl,{className:"w-4 h-4 shrink-0"}),y.jsx("span",{children:e.shareWhatsApp})]}),y.jsxs("button",{type:"button",onClick:P,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition cursor-pointer",children:[y.jsx(VS,{size:16}),y.jsx("span",{children:e.openInApp})]})]})]}),y.jsxs("div",{className:"bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 mb-4",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[y.jsxs("div",{children:[y.jsxs("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:[e.routineName," ",y.jsx("span",{className:"text-rose-400",children:"*"})]}),y.jsx("input",{ref:p,type:"text",value:m.name,onChange:R=>S("name",R.target.value),placeholder:"Por ejemplo: HIIT / Tabata",className:`w-full bg-slate-900 border rounded-xl px-3 py-2 text-slate-100 font-semibold placeholder-slate-500 focus:outline-none transition ${f?"border-rose-500 ring-2 ring-rose-500/30 focus:border-rose-400":"border-slate-700 focus:border-emerald-500"}`}),f&&y.jsx("p",{className:"mt-1.5 text-xs font-bold text-rose-400",children:f})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-semibold text-slate-300 mb-1",children:e.author}),y.jsx("input",{type:"text",value:m.author,onChange:R=>S("author",R.target.value),placeholder:"",className:"w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-emerald-500"})]})]}),y.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:e.category}),y.jsx("input",{type:"text",value:o.category,onChange:R=>g("category",R.target.value),placeholder:"Fitness...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-medium text-slate-400 mb-1",children:e.sport}),y.jsx("input",{type:"text",value:o.sport,onChange:R=>g("sport",R.target.value),placeholder:"HIIT...",className:"w-full bg-slate-900/90 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm text-slate-200"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-bold text-cyan-400 mb-1",children:e.cycles}),y.jsx("input",{type:"number",min:1,value:m.routineCycles,onChange:R=>S("routineCycles",parseInt(R.target.value)||1),className:"w-full bg-slate-900/90 border border-cyan-500/30 rounded-lg px-2.5 py-1.5 text-sm text-cyan-300 font-mono font-bold"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-bold text-amber-400 mb-1",children:e.prepareShort||"Preparación (seg)"}),y.jsx("input",{type:"number",min:0,value:m.prepareDurationSeconds,onChange:R=>S("prepareDurationSeconds",parseInt(R.target.value)||0),className:"w-full bg-[#5E3A00]/35 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-sm text-amber-300 font-mono font-bold"})]})]})]}),y.jsx(jS,{metrics:v,t:e}),y.jsxs("div",{className:"my-6",children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsxs("h2",{className:"text-lg font-bold text-slate-200",children:[e.exercisesHeading||"Ejercicios"," (",m.exercises.length,")"]}),y.jsxs("button",{type:"button",onClick:b,className:"flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition cursor-pointer",children:[y.jsx(om,{size:16}),y.jsx("span",{children:e.addExercise})]})]}),y.jsx("div",{className:"space-y-3",children:m.exercises.map((R,C)=>y.jsx(a2,{exercise:R,index:C,total:m.exercises.length,t:e,onChange:D=>M(C,D),onDuplicate:()=>T(C),onDelete:()=>_(C),onMoveUp:()=>E(C,"up"),onMoveDown:()=>E(C,"down")},R.id||C))}),y.jsxs("button",{type:"button",onClick:b,className:"mt-4 w-full py-3 border-2 border-dashed border-slate-700 hover:border-emerald-500/60 rounded-xl flex items-center justify-center space-x-2 text-slate-400 hover:text-emerald-400 transition cursor-pointer",children:[y.jsx(om,{size:18}),y.jsx("span",{className:"text-sm font-semibold",children:e.addAnotherExercise})]})]})]})},l2=({workout:t,t:e,onOpenInApp:n,onEditInWeb:i,onDownloadWkt:r,onShareWhatsApp:s,onGoHome:a})=>{const o=t.routines[0],c=Ka(o),l=c.totalSeconds>0?Math.round(c.tutSeconds/c.totalSeconds*100):50,d=Math.max(0,100-l);return y.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-6",children:[a&&y.jsx("div",{className:"mb-3 flex justify-between items-center",children:y.jsx("button",{type:"button",onClick:a,className:"px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",children:y.jsx("span",{children:e.homeBtn||"🏠 Inicio"})})}),y.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden",children:[y.jsx("div",{className:"absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),y.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-3",children:[y.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:e.previewBadge||"✨ Rutina Compartida"}),t.category&&y.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700",children:["🏷️ ",t.category]}),t.sport&&y.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-cyan-300 border border-slate-700",children:["🏅 ",t.sport]}),o.routineCycles>1&&y.jsxs("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:["🔄 ",o.routineCycles,"x ",e.cycles||e.cyclesLabel]})]}),y.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight",children:o.name}),o.author&&y.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-1.5 flex items-center gap-1.5",children:[y.jsxs("span",{children:["👤 ",e.sharedBy||"Compartida por",":"]}),y.jsx("strong",{className:"text-slate-200",children:o.author})]}),y.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6",children:[y.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[y.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalTime}),y.jsx("span",{className:"text-xl sm:text-2xl font-black text-white font-mono mt-1 block",children:Tt(c.totalSeconds)})]}),y.jsxs("div",{className:"bg-[#0F4D2A]/40 border border-emerald-500/40 rounded-2xl p-3.5 text-center",children:[y.jsx("span",{className:"block text-[10px] font-bold text-emerald-300 uppercase tracking-wider",children:e.tut}),y.jsx("span",{className:"text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1 block",children:Tt(c.tutSeconds)})]}),y.jsxs("div",{className:"bg-[#7A0D1E]/40 border border-rose-500/40 rounded-2xl p-3.5 text-center",children:[y.jsx("span",{className:"block text-[10px] font-bold text-rose-300 uppercase tracking-wider",children:e.rest}),y.jsx("span",{className:"text-xl sm:text-2xl font-black text-rose-400 font-mono mt-1 block",children:Tt(c.restSeconds)})]}),y.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 text-center",children:[y.jsx("span",{className:"block text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:e.totalRounds}),y.jsxs("span",{className:"text-xl sm:text-2xl font-black text-cyan-400 font-mono mt-1 block",children:[c.totalRounds," ",y.jsxs("span",{className:"text-xs font-normal text-slate-500",children:["(",c.exerciseCount,")"]})]})]})]}),y.jsxs("div",{className:"mb-6",children:[y.jsxs("div",{className:"flex justify-between text-[11px] font-semibold text-slate-400 mb-1.5",children:[y.jsx("span",{children:e.workVsRestRatio||"Distribución Trabajo vs Descanso"}),y.jsxs("span",{children:[y.jsxs("strong",{className:"text-emerald-400",children:[l,"%"]})," /"," ",y.jsxs("strong",{className:"text-rose-400",children:[d,"%"]})]})]}),y.jsxs("div",{className:"w-full h-2.5 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800",children:[y.jsx("div",{style:{width:`${l}%`},className:"bg-emerald-500 h-full transition-all"}),y.jsx("div",{style:{width:`${d}%`},className:"bg-rose-500 h-full transition-all"})]})]}),y.jsxs("div",{className:"space-y-2.5 mb-6",children:[y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[y.jsx("button",{type:"button",onClick:n,className:"w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 cursor-pointer",children:y.jsx("span",{children:e.openInApp})}),y.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[y.jsx(Yl,{className:"w-6 h-6 shrink-0"}),y.jsx("span",{children:e.downloadApkBtn||"Descargar App Android (.apk)"})]})]}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[y.jsx("button",{type:"button",onClick:i,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.editRoutineBtn||"✏️ Editar en Web"}),y.jsx("button",{type:"button",onClick:r,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer",children:e.downloadWktBtn||"📥 Descargar (.wkt)"}),y.jsxs("button",{type:"button",onClick:s,className:"py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold rounded-xl text-xs border border-slate-700 transition cursor-pointer flex items-center justify-center gap-1.5",children:[y.jsx(Kl,{className:"w-4 h-4 text-[#25D366] shrink-0"}),y.jsx("span",{children:e.shareWhatsApp})]})]})]}),y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsxs("h2",{className:"text-sm font-extrabold text-slate-300 uppercase tracking-wider",children:[e.exercisesList," (",o.exercises.length,")"]}),o.prepareDurationSeconds>0&&y.jsxs("span",{className:"text-xs font-mono text-amber-300 bg-[#5E3A00]/50 border border-amber-500/40 px-2.5 py-0.5 rounded-lg font-bold",children:["⏱️ ",e.prepareBadge||"Preparación",": ",Tt(o.prepareDurationSeconds)]})]}),y.jsx("div",{className:"space-y-2.5",children:o.exercises.map((f,u)=>{const p=Sc(f),m=xh(f);return y.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/90 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-xs flex items-center justify-center shrink-0",children:u+1}),m&&y.jsx("img",{src:m,alt:f.name,className:"w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-contain border border-slate-700 bg-[#101827] shrink-0"}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-bold text-slate-100 text-sm sm:text-base",children:f.name}),y.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-1 text-[11px] font-mono",children:[y.jsxs("span",{className:"px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-300 font-semibold",children:["🔄 ",f.roundCount," ",e.rounds]}),y.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#0F4D2A]/60 border border-emerald-500/40 text-emerald-300 font-bold",children:["⚡ ",Tt(f.workDurationSeconds)]}),f.restBetweenRoundsSeconds>0&&y.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#7A0D1E]/60 border border-rose-500/40 text-rose-300 font-bold",children:["💨 ",Tt(f.restBetweenRoundsSeconds)]}),f.restAfterExerciseSeconds>0&&y.jsxs("span",{className:"px-2 py-0.5 rounded bg-[#5E3A00]/60 border border-amber-500/40 text-amber-300 font-bold",children:["🛑 ",Tt(f.restAfterExerciseSeconds)]})]})]})]}),y.jsxs("div",{className:"text-right sm:border-l sm:border-slate-800 sm:pl-4 flex sm:flex-col justify-between items-center sm:items-end",children:[y.jsx("span",{className:"text-[10px] uppercase text-slate-500 font-semibold",children:e.subtotal}),y.jsx("span",{className:"text-sm font-mono font-bold text-slate-200",children:Tt(p.totalSeconds)})]})]},f.id||u)})})]})]})]})},u0=({tag:t,className:e="w-6 h-4"})=>{switch(t){case"es-ES":return y.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[y.jsx("rect",{width:"36",height:"24",fill:"#AA151B"}),y.jsx("rect",{y:"6",width:"36",height:"12",fill:"#F1BF00"}),y.jsxs("g",{transform:"translate(8, 8)",children:[y.jsx("rect",{x:"0",y:"1.5",width:"1",height:"5.5",fill:"#d4af37"}),y.jsx("rect",{x:"6",y:"1.5",width:"1",height:"5.5",fill:"#d4af37"}),y.jsx("rect",{x:"1.5",y:"1.5",width:"4",height:"5",rx:"1",fill:"#AA151B",stroke:"#d4af37",strokeWidth:"0.6"}),y.jsx("rect",{x:"3.5",y:"1.5",width:"2",height:"2.5",fill:"#F1BF00"}),y.jsx("circle",{cx:"3.5",cy:"0.8",r:"1.1",fill:"#AA151B"}),y.jsx("circle",{cx:"3.5",cy:"4",r:"0.8",fill:"#003399"})]})]});case"es-MX":return y.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[y.jsx("rect",{width:"12",height:"24",fill:"#006847"}),y.jsx("rect",{x:"12",width:"12",height:"24",fill:"#FFFFFF"}),y.jsx("rect",{x:"24",width:"12",height:"24",fill:"#CE1126"}),y.jsx("circle",{cx:"18",cy:"12",r:"2.7",fill:"#784421"}),y.jsx("path",{d:"M15.4 13.6 A 3.2 3.2 0 0 0 20.6 13.6",fill:"none",stroke:"#006847",strokeWidth:"1"}),y.jsx("circle",{cx:"18",cy:"11.6",r:"1.1",fill:"#d4af37"})]});case"en-US":return y.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[y.jsx("rect",{width:"36",height:"24",fill:"#FFFFFF"}),[0,2,4,6,8,10,12].map(n=>y.jsx("rect",{y:n*24/13,width:"36",height:24/13,fill:"#B22234"},n)),y.jsx("rect",{width:"15.5",height:24*7/13,fill:"#3C3B6E"}),[2.5,5.5,8.5,11.5,13.8].map(n=>[2.4,5.4,8.4,10.8].map(i=>y.jsx("circle",{cx:n,cy:i,r:"0.65",fill:"#FFFFFF"},`${n}-${i}`)))]});case"pt-BR":return y.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[y.jsx("rect",{width:"36",height:"24",fill:"#009739"}),y.jsx("polygon",{points:"18,2.5 33,12 18,21.5 3,12",fill:"#FEDD00"}),y.jsx("circle",{cx:"18",cy:"12",r:"5.5",fill:"#012169"}),y.jsx("path",{d:"M12.7 10.6 Q 18 8.8 23.3 13.1",fill:"none",stroke:"#FFFFFF",strokeWidth:"1.5"})]});case"fr-FR":return y.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[y.jsx("rect",{width:"12",height:"24",fill:"#002395"}),y.jsx("rect",{x:"12",width:"12",height:"24",fill:"#FFFFFF"}),y.jsx("rect",{x:"24",width:"12",height:"24",fill:"#ED2939"})]});case"de-DE":return y.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[y.jsx("rect",{width:"36",height:"8",fill:"#000000"}),y.jsx("rect",{y:"8",width:"36",height:"8",fill:"#DD0000"}),y.jsx("rect",{y:"16",width:"36",height:"8",fill:"#FFCE00"})]});case"it-IT":return y.jsxs("svg",{viewBox:"0 0 36 24",className:`${e} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/15`,"aria-hidden":"true",children:[y.jsx("rect",{width:"12",height:"24",fill:"#009246"}),y.jsx("rect",{x:"12",width:"12",height:"24",fill:"#FFFFFF"}),y.jsx("rect",{x:"24",width:"12",height:"24",fill:"#CE2B37"})]});case"SYSTEM":default:return y.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 shrink-0","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"#0284c7"}),y.jsx("path",{d:"M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",fill:"none",stroke:"#7dd3fc",strokeWidth:"1.6"}),y.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5"})]})}};function c2(t,e){var n;if(t&&t!=="SYSTEM")return t;switch(e){case"es":{try{if((((n=Intl.DateTimeFormat().resolvedOptions().timeZone)==null?void 0:n.toLowerCase())||"").startsWith("america/"))return"es-MX";const r=(Intl.DateTimeFormat().resolvedOptions().locale||"").toLowerCase();if(r.includes("-es"))return"es-ES";if(r.startsWith("es-"))return"es-MX"}catch{}return"es-ES"}case"pt":return"pt-BR";case"fr":return"fr-FR";case"de":return"de-DE";case"it":return"it-IT";case"en":default:return"en-US"}}const u2=({langTag:t,resolvedLangKey:e,label:n="Idioma",systemLanguageName:i,systemLanguageDesc:r,onChangeLang:s})=>{const[a,o]=Ie.useState(!1),c=Ie.useRef(null);Ie.useEffect(()=>{if(!a)return;const u=m=>{c.current&&!c.current.contains(m.target)&&o(!1)},p=m=>{m.key==="Escape"&&o(!1)};return document.addEventListener("mousedown",u),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("keydown",p)}},[a]);const l=ru.find(u=>u.tag===t)||ru[0],d=e.toUpperCase(),f=c2(l.tag,e);return y.jsxs("div",{ref:c,className:"relative",children:[y.jsxs("button",{type:"button",onClick:()=>o(u=>!u),title:n,"aria-label":n,"aria-expanded":a,className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 text-xs font-bold shadow-sm transition cursor-pointer",children:[y.jsx(cm,{size:15,className:"text-emerald-400 shrink-0"}),y.jsx(u0,{tag:f,className:"w-5 h-3.5"}),y.jsx("span",{className:"font-mono tracking-wide",children:d}),y.jsx("span",{className:"text-[10px] text-slate-400",children:"▾"})]}),a&&y.jsxs("div",{className:"absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden",children:[y.jsxs("div",{className:"px-4 py-2 border-b border-slate-800 text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5",children:[y.jsx(cm,{size:14,className:"text-emerald-400"}),y.jsx("span",{children:n})]}),y.jsx("div",{className:"max-h-80 overflow-y-auto p-1.5 space-y-1",children:ru.map(u=>{const p=u.tag===l.tag,m=u.tag==="SYSTEM"&&i?i:u.displayName,v=u.tag==="SYSTEM"&&r?r:u.localeName;return y.jsx("button",{type:"button",onClick:()=>{s(u.tag),o(!1)},className:`w-full px-3 py-2.5 rounded-xl text-left flex items-center justify-between gap-2.5 transition cursor-pointer border ${p?"bg-emerald-500/15 border-emerald-500/60 text-white":"bg-slate-950/40 border-slate-800/80 text-slate-200 hover:bg-slate-800/80 hover:border-slate-700"}`,children:y.jsxs("span",{className:"flex items-center gap-3 min-w-0",children:[y.jsx("span",{className:`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${p?"border-emerald-400":"border-slate-500"}`,children:p&&y.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})}),y.jsx("span",{className:"w-7 flex items-center justify-center shrink-0",children:y.jsx(u0,{tag:u.tag,className:"w-6 h-4"})}),y.jsxs("span",{className:"flex flex-col min-w-0",children:[y.jsx("span",{className:`text-xs truncate ${p?"font-bold text-emerald-300":"font-medium text-slate-100"}`,children:m}),y.jsx("span",{className:"text-[10px] text-slate-400 truncate",children:v})]})]})},u.tag)})})]})]})},d2=()=>{const[t,e]=Ie.useState(()=>sm()),[n,i]=Ie.useState(!1),[r,s]=Ie.useState(null),[a,o]=Ie.useState("welcome"),[c,l]=Ie.useState(()=>localStorage.getItem("timer_lang_tag")||"SYSTEM"),[d,f]=Ie.useState(null),u=Ie.useRef(null),p=Ie.useRef("preview"),m=Ie.useMemo(()=>BS(c),[c]),v=Oi[m]||Oi.es,x=R=>{localStorage.setItem("timer_lang_tag",R),l(R)},h=R=>{var F;const D=(((F=R.routines[0])==null?void 0:F.name)||"rutina").toLowerCase().replace(/\s+/g,"_")||"rutina",G=new Blob([JSON.stringify(R,null,2)],{type:"application/octet-stream"}),k=URL.createObjectURL(G),B=document.createElement("a");B.href=k,B.download=`${D}.wkt`,B.click(),URL.revokeObjectURL(k)},g=async R=>{var F;const G=`${(((F=R.routines[0])==null?void 0:F.name)||"rutina").trim().toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina"}.wkt`,k=JSON.stringify(R,null,2),B=window;if(typeof B.showSaveFilePicker=="function")try{const W=await B.showSaveFilePicker({suggestedName:G,types:[{description:"Rutina de entrenamiento (.wkt)",accept:{"application/json":[".wkt"],"application/octet-stream":[".wkt"]}}]}),K=await W.createWritable();return await K.write(k),await K.close(),d&&f(oe=>oe?{...oe,wktSavedName:W.name}:null),!0}catch(W){if((W==null?void 0:W.name)==="AbortError")return!1}return h(R),d&&f(W=>W?{...W,wktSavedName:G}:null),!0},S=()=>{d!=null&&d.cardObjectUrl&&URL.revokeObjectURL(d.cardObjectUrl),f(null)};Ie.useEffect(()=>{const R=new URLSearchParams(window.location.search),C=R.get("wkt"),D=R.get("mode"),G=R.get("dl");if(C){const k=DS(C);k&&(e(k),i(!0),o(D==="edit"?"editor":"preview"),G==="1"&&setTimeout(()=>h(k),400))}},[]);const M=R=>{var C;p.current=R,s(null),(C=u.current)==null||C.click()},b=async R=>{var D;const C=(D=R.target.files)==null?void 0:D[0];if(R.target.value="",!!C)try{const G=await C.text(),k=JSON.parse(G);if(!Cx(k)){s(v.invalidWktErr||"El archivo seleccionado no tiene un formato .wkt válido.");return}const B=Rx(k);e(B),i(!1),s(null),o(p.current)}catch{s(v.readWktErr||"No se pudo leer el archivo .wkt seleccionado.")}},T=()=>{window.location.href=Px(t)},_=()=>{g(t)},E=R=>{const C=R.routines[0],D=Ka(C),G=IS(D.totalSeconds),k=C.exercises.length,B=v.exercisesWord||"ejercicios";return`🔥 ¡${C.name}! • ⏱️ ${G} • 💪 ${k} ${B}
📎 Archivo .wkt adjunto (ábrelo en la App o en https://alvarpereira-dot.github.io)`},N=async(R=t)=>{const C=R.routines[0],D=C.name.toLowerCase().replace(/[^a-z0-9_-]/g,"_")||"rutina",G=JSON.stringify(R,null,2),k=new File([G],`${D}.wkt`,{type:"application/octet-stream"}),B=E(R),F=await Lx(R,v);if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent||"")&&F&&typeof navigator.canShare=="function"){const Te=new File([F],`${D}_card.png`,{type:"image/png"});if(navigator.canShare({files:[Te,k]}))try{await navigator.share({title:C.name,text:B,files:[Te,k]});return}catch(Y){if((Y==null?void 0:Y.name)==="AbortError")return}}let K=!1;if(F&&navigator.clipboard&&typeof ClipboardItem<"u")try{await navigator.clipboard.write([new ClipboardItem({"image/png":F})]),K=!0}catch{K=!1}d!=null&&d.cardObjectUrl&&URL.revokeObjectURL(d.cardObjectUrl);const oe=F?URL.createObjectURL(F):null;f({workout:R,safeName:D,messageText:B,cardBlob:F,cardObjectUrl:oe,copiedToClipboard:K,wktSavedName:null})},P=async()=>{if(!(!(d!=null&&d.cardBlob)||!navigator.clipboard||typeof ClipboardItem>"u"))try{await navigator.clipboard.write([new ClipboardItem({"image/png":d.cardBlob})]),f(R=>R?{...R,copiedToClipboard:!0}:null)}catch{}},I=async()=>{if(!(d!=null&&d.cardBlob))return;const R=`${d.safeName}_card.png`,C=window;if(typeof C.showSaveFilePicker=="function")try{const B=await(await C.showSaveFilePicker({suggestedName:R,types:[{description:"Imagen PNG (.png)",accept:{"image/png":[".png"]}}]})).createWritable();await B.write(d.cardBlob),await B.close();return}catch(k){if((k==null?void 0:k.name)==="AbortError")return}const D=URL.createObjectURL(d.cardBlob),G=document.createElement("a");G.href=D,G.download=R,G.click(),URL.revokeObjectURL(D)},z=()=>{if(!d)return;const R=`https://api.whatsapp.com/send?text=${encodeURIComponent(d.messageText)}`;window.open(R,"_blank")};return y.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950",children:[y.jsx("input",{ref:u,type:"file",accept:".wkt,.json,application/json",onChange:b,className:"hidden"}),y.jsxs("header",{className:"max-w-4xl mx-auto w-full px-4 pt-3 flex items-center justify-between gap-2",children:[y.jsx("div",{children:a==="editor"&&y.jsx("button",{type:"button",onClick:()=>o("welcome"),className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",children:y.jsx("span",{children:v.homeBtn||"🏠 Inicio"})})}),y.jsx(u2,{langTag:c,resolvedLangKey:m,label:v.languageLabel||"Idioma",systemLanguageName:v.systemLanguage,systemLanguageDesc:v.systemLanguageDesc,onChangeLang:x})]}),n&&y.jsxs("div",{className:"bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 py-2 px-4 mt-2 flex items-center justify-center gap-3 text-xs font-medium",children:[y.jsx("span",{children:v.sharedBanner||"✨ Rutina cargada desde enlace compartido."}),y.jsx("button",{type:"button",onClick:()=>o(a==="preview"?"editor":"preview"),className:"px-2.5 py-0.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold transition cursor-pointer",children:a==="preview"?v.editRoutineBtn:v.previewModeBtn})]}),y.jsx("main",{className:"flex-1",children:a==="welcome"?y.jsx("div",{className:"max-w-2xl mx-auto px-4 py-8",children:y.jsxs("div",{className:"bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center",children:[y.jsx("div",{className:"flex justify-center mb-4",children:y.jsx(Yl,{className:"w-20 h-20 shadow-xl rounded-2xl"})}),y.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:v.appTitle}),y.jsx("p",{className:"text-sm sm:text-base text-slate-400 mt-2 max-w-md mx-auto",children:v.welcomeDesc||"Diseña, personaliza y comparte tus rutinas de entrenamiento cronometradas (.wkt)"}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7",children:[y.jsx("button",{type:"button",onClick:()=>{e(sm()),s(null),o("editor")},className:"w-full py-4 px-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-base shadow-lg shadow-emerald-500/20 transition cursor-pointer",children:v.newRoutineBtn||"+ Nueva Rutina"}),y.jsxs("button",{type:"button",onClick:()=>M("preview"),className:"w-full py-4 px-5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold rounded-2xl text-base transition flex items-center justify-center gap-2 cursor-pointer",children:[y.jsx(Nx,{size:20}),y.jsx("span",{children:v.openWktBtn||"Abrir archivo .wkt"})]})]}),y.jsxs("a",{href:"./TimerDeAlvar.apk",download:"TimerDeAlvar.apk",className:"mt-3 w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-black rounded-2xl text-sm sm:text-base shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 cursor-pointer text-center",children:[y.jsx(Yl,{className:"w-6 h-6 shrink-0"}),y.jsx("span",{children:v.downloadApkBtn||"Descargar App Android (.apk)"})]}),r&&y.jsxs("p",{className:"mt-3 text-xs text-rose-400 font-semibold",children:["⚠️ ",r]}),y.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-800/90 text-left",children:[y.jsx("h2",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3",children:v.examplesTitle||"⚡ O explora una rutina de ejemplo:"}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:_S.map(R=>{const C=R.workout.routines[0],D=Ka(C);return y.jsxs("button",{type:"button",onClick:()=>{e(JSON.parse(JSON.stringify(R.workout))),o("preview")},className:"text-left bg-slate-950/90 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 transition cursor-pointer",children:[y.jsxs("span",{className:"text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:[R.badgeIcon," ",R.workout.category]}),y.jsx("h3",{className:"text-base font-black text-white mt-1.5",children:C.name}),y.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:["⏱️ ",Tt(D.totalSeconds)," • 💪"," ",C.exercises.length," ",v.exercisesWord||"ejercicios"]})]},R.id)})})]})]})}):a==="preview"?y.jsx(l2,{workout:t,t:v,onOpenInApp:T,onEditInWeb:()=>o("editor"),onDownloadWkt:_,onShareWhatsApp:()=>void N(t),onGoHome:()=>o("welcome")}):y.jsx(o2,{initialWorkout:t,t:v,onWorkoutChange:e,onSaveFile:g,onOpenFile:()=>M("editor"),onPreviewRoutine:()=>o("preview"),onShareWhatsApp:N})}),d&&y.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:S,children:y.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden",onClick:R=>R.stopPropagation(),children:[y.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-slate-800",children:[y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("span",{className:"w-8 h-8 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center",children:y.jsx(Kl,{className:"w-4 h-4"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-base font-black text-white",children:v.shareWhatsApp}),y.jsx("p",{className:"text-xs text-slate-400",children:"Tarjeta visual + archivo .wkt + mensaje con iconos"})]})]}),y.jsx("button",{type:"button",onClick:S,className:"w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center cursor-pointer",children:"×"})]}),y.jsxs("div",{className:"p-5 space-y-4 overflow-y-auto flex-1",children:[d.cardObjectUrl&&y.jsxs("div",{className:"space-y-2",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider text-emerald-400",children:"1. Tarjeta visual de la rutina"}),d.copiedToClipboard&&y.jsx("span",{className:"text-[11px] font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full",children:"✓ Copiada al portapapeles (Ctrl + V en WhatsApp)"})]}),y.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-2.5 flex justify-center max-h-64 overflow-y-auto",children:y.jsx("img",{src:d.cardObjectUrl,alt:"Tarjeta de rutina",className:"max-w-full h-auto rounded-xl border border-slate-800"})}),y.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[y.jsx("button",{type:"button",onClick:P,className:"py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer",children:"📋 Copiar imagen al portapapeles"}),y.jsx("button",{type:"button",onClick:I,className:"py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer",children:"🖼️ Guardar tarjeta (.png)..."})]})]}),y.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 space-y-2",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"text-xs font-extrabold uppercase tracking-wider text-cyan-400",children:"2. Archivo de rutina (.wkt) para adjuntar"}),d.wktSavedName&&y.jsxs("span",{className:"text-[11px] font-bold text-cyan-300",children:["✓ Guardado: ",d.wktSavedName]})]}),y.jsxs("button",{type:"button",onClick:()=>void g(d.workout),className:"w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs border border-cyan-500/30 transition flex items-center justify-center gap-2 cursor-pointer",children:[y.jsx(Dx,{size:15}),y.jsxs("span",{children:['Elegir dónde guardar "',d.safeName,'.wkt"...']})]})]}),y.jsxs("div",{className:"bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 space-y-2",children:[y.jsx("span",{className:"block text-xs font-extrabold uppercase tracking-wider text-slate-400",children:"3. Mensaje para WhatsApp (con iconos)"}),y.jsx("pre",{className:"text-xs text-slate-200 whitespace-pre-wrap font-sans bg-slate-900/90 border border-slate-800 rounded-xl p-3 leading-relaxed",children:d.messageText})]}),y.jsxs("button",{type:"button",onClick:z,className:"w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-sm shadow-lg shadow-[#25D366]/20 transition flex items-center justify-center gap-2 cursor-pointer",children:[y.jsx(Kl,{className:"w-5 h-5"}),y.jsx("span",{children:"Abrir WhatsApp con este mensaje"})]})]})]})}),y.jsxs("footer",{className:"border-t border-slate-900 py-4 text-center text-xs text-slate-500",children:[v.appTitle," • ",v.subtitle]})]})};Ex(document.getElementById("root")).render(y.jsx(Ie.StrictMode,{children:y.jsx(d2,{})}));
