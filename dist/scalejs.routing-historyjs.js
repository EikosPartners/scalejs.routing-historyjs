
/* Copyright (c) Microsoft Open Technologies, Inc. All rights reserved. See License.txt in the project root for license information.*/
(function(a){function b(a){if(a.isDisposed)throw new Error(cb)}function c(a){for(var b=[],c=0,d=a.length;d>c;c++)b.push(a[c]);return b}function d(a,b){if(db&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(hb)){for(var c=[],d=b;d;d=d.source)d.stack&&c.unshift(d.stack);c.unshift(a.stack);var f=c.join("\n"+hb+"\n");a.stack=e(f)}}function e(a){for(var b=a.split("\n"),c=[],d=0,e=b.length;e>d;d++){var h=b[d];f(h)||g(h)||!h||c.push(h)}return c.join("\n")}function f(a){var b=j(a);if(!b)return!1;var c=b[0],d=b[1];return c===fb&&d>=gb&&Yc>=d}function g(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function h(){if(db)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=j(c);if(!d)return;return fb=d[0],d[1]}}function j(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function k(a){var b=[];if(!Jb(a))return b;Ib.nonEnumArgs&&a.length&&Kb(a)&&(a=Mb.call(a));var c=Ib.enumPrototypes&&"function"==typeof a,d=Ib.enumErrorProps&&(a===Db||a instanceof Error);for(var e in a)c&&"prototype"==e||d&&("message"==e||"name"==e)||b.push(e);if(Ib.nonEnumShadows&&a!==Eb){var f=a.constructor,g=-1,h=pb;if(a===(f&&f.prototype))var i=a===Fb?zb:a===Db?ub:Ab.call(a),j=Hb[i];for(;++g<h;)e=ob[g],j&&j[e]||!Bb.call(a,e)||b.push(e)}return b}function l(a,b,c){for(var d=-1,e=c(a),f=e.length;++d<f;){var g=e[d];if(b(a[g],g,a)===!1)break}return a}function m(a,b){return l(a,b,k)}function n(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}function o(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;var e=typeof a,f=typeof b;if(a===a&&(null==a||null==b||"function"!=e&&"object"!=e&&"function"!=f&&"object"!=f))return!1;var g=Ab.call(a),h=Ab.call(b);if(g==qb&&(g=xb),h==qb&&(h=xb),g!=h)return!1;switch(g){case sb:case tb:return+a==+b;case wb:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case yb:case zb:return a==String(b)}var i=g==rb;if(!i){if(g!=xb||!Ib.nodeClass&&(n(a)||n(b)))return!1;var j=!Ib.argsObject&&Kb(a)?Object:a.constructor,k=!Ib.argsObject&&Kb(b)?Object:b.constructor;if(!(j==k||Bb.call(a,"constructor")&&Bb.call(b,"constructor")||ab(j)&&j instanceof j&&ab(k)&&k instanceof k||!("constructor"in a&&"constructor"in b)))return!1}c||(c=[]),d||(d=[]);for(var l=c.length;l--;)if(c[l]==a)return d[l]==b;var p=0,q=!0;if(c.push(a),d.push(b),i){if(l=a.length,p=b.length,q=p==l)for(;p--;){var r=b[p];if(!(q=o(a[p],r,c,d)))break}}else m(b,function(b,e,f){return Bb.call(f,e)?(p++,q=Bb.call(a,e)&&o(a[e],b,c,d)):void 0}),q&&m(a,function(a,b,c){return Bb.call(c,b)?q=--p>-1:void 0});return c.pop(),d.pop(),q}function p(a,b){for(var c=new Array(a),d=0;a>d;d++)c[d]=b();return c}function q(a,b){this.id=a,this.value=b}function r(a,b){this.scheduler=a,this.disposable=b,this.isDisposed=!1}function t(a,b){b.isDisposed||(b.isDisposed=!0,b.disposable.dispose())}function u(){this._s=s}function v(){this._s=s,this._l=s.length,this._i=0}function w(a){this._a=a}function x(a){this._a=a,this._l=B(a),this._i=0}function y(a){return"number"==typeof a&&O.isFinite(a)}function z(b){var c,d=b[ib];if(!d&&"string"==typeof b)return c=new u(b),c[ib]();if(!d&&b.length!==a)return c=new w(b),c[ib]();if(!d)throw new TypeError("Object is not iterable");return b[ib]()}function A(a){var b=+a;return 0===b?b:isNaN(b)?b:0>b?-1:1}function B(a){var b=+a.length;return isNaN(b)?0:0!==b&&y(b)?(b=A(b)*Math.floor(Math.abs(b)),0>=b?0:b>Ec?Ec:b):b}function C(a,b){return V(a)||(a=dc),new Tc(function(c){var d=0,e=b.length;return a.scheduleRecursive(function(a){e>d?(c.onNext(b[d++]),a()):c.onCompleted()})})}function D(a,b){return new Tc(function(c){var d=new Xb,e=new Yb;return e.setDisposable(d),d.setDisposable(a.subscribe(c.onNext.bind(c),function(a){var d,f;try{f=b(a)}catch(g){return void c.onError(g)}_(f)&&(f=Bc(f)),d=new Xb,e.setDisposable(d),d.setDisposable(f.subscribe(c))},c.onCompleted.bind(c))),e},a)}function E(a,b){var c=this;return new Tc(function(d){var e=0,f=a.length;return c.subscribe(function(c){if(f>e){var g,h=a[e++];try{g=b(c,h)}catch(i){return d.onError(i)}d.onNext(g)}else d.onCompleted()},function(a){d.onError(a)},function(){d.onCompleted()})},c)}function F(){return!1}function G(){return[]}function H(a,b,c){var d=nb(b,c,3);return a.map(function(b,c){var e=d(b,c,a);return _(e)&&(e=Bc(e)),(lb(e)||kb(e))&&(e=Fc(e)),e}).concatAll()}function I(a,b,c){for(var d=0,e=a.length;e>d;d++)if(c(a[d],b))return d;return-1}function J(a){this.comparer=a,this.set=[]}function K(a,b,c){this.observer=a,this.selector=b,this.source=c,this.index=0,this.isStopped=!1}function L(a,b,c){var d=nb(b,c,3);return a.map(function(b,c){var e=d(b,c,a);return _(e)&&(e=Bc(e)),(lb(e)||kb(e))&&(e=Fc(e)),e}).mergeAll()}function M(a,b,c){this.observer=a,this.predicate=b,this.source=c,this.index=0,this.isStopped=!1}var N={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},O=N[typeof window]&&window||this,P=N[typeof exports]&&exports&&!exports.nodeType&&exports,Q=N[typeof module]&&module&&!module.nodeType&&module,R=Q&&Q.exports===P&&P,S=N[typeof global]&&global;!S||S.global!==S&&S.window!==S||(O=S);var T={internals:{},config:{Promise:O.Promise},helpers:{}},U=T.helpers.noop=function(){},V=(T.helpers.notDefined=function(a){return"undefined"==typeof a},T.helpers.isScheduler=function(a){return a instanceof T.Scheduler}),W=T.helpers.identity=function(a){return a},X=(T.helpers.pluck=function(a){return function(b){return b[a]}},T.helpers.just=function(a){return function(){return a}},T.helpers.defaultNow=Date.now),Y=T.helpers.defaultComparer=function(a,b){return Lb(a,b)},Z=T.helpers.defaultSubComparer=function(a,b){return a>b?1:b>a?-1:0},$=(T.helpers.defaultKeySerializer=function(a){return a.toString()},T.helpers.defaultError=function(a){throw a}),_=T.helpers.isPromise=function(a){return!!a&&"function"==typeof a.then},ab=(T.helpers.asArray=function(){return Array.prototype.slice.call(arguments)},T.helpers.not=function(a){return!a},T.helpers.isFunction=function(){var a=function(a){return"function"==typeof a||!1};return a(/x/)&&(a=function(a){return"function"==typeof a&&"[object Function]"==Ab.call(a)}),a}()),bb="Argument out of range",cb="Object has been disposed";T.config.longStackSupport=!1;var db=!1;try{throw new Error}catch(eb){db=!!eb.stack}var fb,gb=h(),hb="From previous event:",ib="function"==typeof Symbol&&Symbol.iterator||"_es6shim_iterator_";O.Set&&"function"==typeof(new O.Set)["@@iterator"]&&(ib="@@iterator");var jb=T.doneEnumerator={done:!0,value:a},kb=T.helpers.isIterable=function(b){return b[ib]!==a},lb=T.helpers.isArrayLike=function(b){return b&&b.length!==a};T.helpers.iterator=ib;var mb,nb=T.internals.bindCallback=function(a,b,c){if("undefined"==typeof b)return a;switch(c){case 0:return function(){return a.call(b)};case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}},ob=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],pb=ob.length,qb="[object Arguments]",rb="[object Array]",sb="[object Boolean]",tb="[object Date]",ub="[object Error]",vb="[object Function]",wb="[object Number]",xb="[object Object]",yb="[object RegExp]",zb="[object String]",Ab=Object.prototype.toString,Bb=Object.prototype.hasOwnProperty,Cb=Ab.call(arguments)==qb,Db=Error.prototype,Eb=Object.prototype,Fb=String.prototype,Gb=Eb.propertyIsEnumerable;try{mb=!(Ab.call(document)==xb&&!({toString:0}+""))}catch(eb){mb=!0}var Hb={};Hb[rb]=Hb[tb]=Hb[wb]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Hb[sb]=Hb[zb]={constructor:!0,toString:!0,valueOf:!0},Hb[ub]=Hb[vb]=Hb[yb]={constructor:!0,toString:!0},Hb[xb]={constructor:!0};var Ib={};!function(){var a=function(){this.x=1},b=[];a.prototype={valueOf:1,y:1};for(var c in new a)b.push(c);for(c in arguments);Ib.enumErrorProps=Gb.call(Db,"message")||Gb.call(Db,"name"),Ib.enumPrototypes=Gb.call(a,"prototype"),Ib.nonEnumArgs=0!=c,Ib.nonEnumShadows=!/valueOf/.test(b)}(1);var Jb=T.internals.isObject=function(a){var b=typeof a;return a&&("function"==b||"object"==b)||!1},Kb=function(a){return a&&"object"==typeof a?Ab.call(a)==qb:!1};Cb||(Kb=function(a){return a&&"object"==typeof a?Bb.call(a,"callee"):!1});var Lb=T.internals.isEqual=function(a,b){return o(a,b,[],[])},Mb=({}.hasOwnProperty,Array.prototype.slice),Nb=this.inherits=T.internals.inherits=function(a,b){function c(){this.constructor=a}c.prototype=b.prototype,a.prototype=new c},Ob=T.internals.addProperties=function(a){for(var b=[],c=1,d=arguments.length;d>c;c++)b.push(arguments[c]);for(var e=0,f=b.length;f>e;e++){var g=b[e];for(var h in g)a[h]=g[h]}},Pb=T.internals.addRef=function(a,b){return new Tc(function(c){return new Sb(b.getDisposable(),a.subscribe(c))})};q.prototype.compareTo=function(a){var b=this.value.compareTo(a.value);return 0===b&&(b=this.id-a.id),b};var Qb=T.internals.PriorityQueue=function(a){this.items=new Array(a),this.length=0},Rb=Qb.prototype;Rb.isHigherPriority=function(a,b){return this.items[a].compareTo(this.items[b])<0},Rb.percolate=function(a){if(!(a>=this.length||0>a)){var b=a-1>>1;if(!(0>b||b===a)&&this.isHigherPriority(a,b)){var c=this.items[a];this.items[a]=this.items[b],this.items[b]=c,this.percolate(b)}}},Rb.heapify=function(a){if(+a||(a=0),!(a>=this.length||0>a)){var b=2*a+1,c=2*a+2,d=a;if(b<this.length&&this.isHigherPriority(b,d)&&(d=b),c<this.length&&this.isHigherPriority(c,d)&&(d=c),d!==a){var e=this.items[a];this.items[a]=this.items[d],this.items[d]=e,this.heapify(d)}}},Rb.peek=function(){return this.items[0].value},Rb.removeAt=function(b){this.items[b]=this.items[--this.length],this.items[this.length]=a,this.heapify()},Rb.dequeue=function(){var a=this.peek();return this.removeAt(0),a},Rb.enqueue=function(a){var b=this.length++;this.items[b]=new q(Qb.count++,a),this.percolate(b)},Rb.remove=function(a){for(var b=0;b<this.length;b++)if(this.items[b].value===a)return this.removeAt(b),!0;return!1},Qb.count=0;var Sb=T.CompositeDisposable=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else for(var b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);this.disposables=a,this.isDisposed=!1,this.length=this.disposables.length},Tb=Sb.prototype;Tb.add=function(a){this.isDisposed?a.dispose():(this.disposables.push(a),this.length++)},Tb.remove=function(a){var b=!1;if(!this.isDisposed){var c=this.disposables.indexOf(a);-1!==c&&(b=!0,this.disposables.splice(c,1),this.length--,a.dispose())}return b},Tb.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;for(var a=[],b=0,c=this.disposables.length;c>b;b++)a.push(this.disposables[b]);for(this.disposables=[],this.length=0,b=0,c=a.length;c>b;b++)a[b].dispose()}},Tb.toArray=function(){for(var a=[],b=this.disposables.length;b>i;i++)a.push(this.disposables[i]);return a};var Ub=T.Disposable=function(a){this.isDisposed=!1,this.action=a||U};Ub.prototype.dispose=function(){this.isDisposed||(this.action(),this.isDisposed=!0)};var Vb=Ub.create=function(a){return new Ub(a)},Wb=Ub.empty={dispose:U},Xb=T.SingleAssignmentDisposable=function(){function a(){this.isDisposed=!1,this.current=null}var b=a.prototype;return b.getDisposable=function(){return this.current},b.setDisposable=function(a){var b=this.isDisposed;if(!b){var c=this.current;this.current=a}c&&c.dispose(),b&&a&&a.dispose()},b.dispose=function(){if(!this.isDisposed){this.isDisposed=!0;var a=this.current;this.current=null}a&&a.dispose()},a}(),Yb=T.SerialDisposable=Xb,Zb=T.RefCountDisposable=function(){function a(a){this.disposable=a,this.disposable.count++,this.isInnerDisposed=!1}function b(a){this.underlyingDisposable=a,this.isDisposed=!1,this.isPrimaryDisposed=!1,this.count=0}return a.prototype.dispose=function(){this.disposable.isDisposed||this.isInnerDisposed||(this.isInnerDisposed=!0,this.disposable.count--,0===this.disposable.count&&this.disposable.isPrimaryDisposed&&(this.disposable.isDisposed=!0,this.disposable.underlyingDisposable.dispose()))},b.prototype.dispose=function(){this.isDisposed||this.isPrimaryDisposed||(this.isPrimaryDisposed=!0,0===this.count&&(this.isDisposed=!0,this.underlyingDisposable.dispose()))},b.prototype.getDisposable=function(){return this.isDisposed?Wb:new a(this)},b}();r.prototype.dispose=function(){this.scheduler.scheduleWithState(this,t)};var $b=T.internals.ScheduledItem=function(a,b,c,d,e){this.scheduler=a,this.state=b,this.action=c,this.dueTime=d,this.comparer=e||Z,this.disposable=new Xb};$b.prototype.invoke=function(){this.disposable.setDisposable(this.invokeCore())},$b.prototype.compareTo=function(a){return this.comparer(this.dueTime,a.dueTime)},$b.prototype.isCancelled=function(){return this.disposable.isDisposed},$b.prototype.invokeCore=function(){return this.action(this.scheduler,this.state)};var _b=T.Scheduler=function(){function a(a,b,c,d){this.now=a,this._schedule=b,this._scheduleRelative=c,this._scheduleAbsolute=d}function b(a,b){return b(),Wb}var c=a.prototype;return c.schedule=function(a){return this._schedule(a,b)},c.scheduleWithState=function(a,b){return this._schedule(a,b)},c.scheduleWithRelative=function(a,c){return this._scheduleRelative(c,a,b)},c.scheduleWithRelativeAndState=function(a,b,c){return this._scheduleRelative(a,b,c)},c.scheduleWithAbsolute=function(a,c){return this._scheduleAbsolute(c,a,b)},c.scheduleWithAbsoluteAndState=function(a,b,c){return this._scheduleAbsolute(a,b,c)},a.now=X,a.normalize=function(a){return 0>a&&(a=0),a},a}(),ac=_b.normalize;!function(a){function b(a,b){var c=b.first,d=b.second,e=new Sb,f=function(b){d(b,function(b){var c=!1,d=!1,g=a.scheduleWithState(b,function(a,b){return c?e.remove(g):d=!0,f(b),Wb});d||(e.add(g),c=!0)})};return f(c),e}function c(a,b,c){var d=b.first,e=b.second,f=new Sb,g=function(b){e(b,function(b,d){var e=!1,h=!1,i=a[c](b,d,function(a,b){return e?f.remove(i):h=!0,g(b),Wb});h||(f.add(i),e=!0)})};return g(d),f}function d(a,b){a(function(c){b(a,c)})}a.scheduleRecursive=function(a){return this.scheduleRecursiveWithState(a,function(a,b){a(function(){b(a)})})},a.scheduleRecursiveWithState=function(a,c){return this.scheduleWithState({first:a,second:c},b)},a.scheduleRecursiveWithRelative=function(a,b){return this.scheduleRecursiveWithRelativeAndState(b,a,d)},a.scheduleRecursiveWithRelativeAndState=function(a,b,d){return this._scheduleRelative({first:a,second:d},b,function(a,b){return c(a,b,"scheduleWithRelativeAndState")})},a.scheduleRecursiveWithAbsolute=function(a,b){return this.scheduleRecursiveWithAbsoluteAndState(b,a,d)},a.scheduleRecursiveWithAbsoluteAndState=function(a,b,d){return this._scheduleAbsolute({first:a,second:d},b,function(a,b){return c(a,b,"scheduleWithAbsoluteAndState")})}}(_b.prototype),function(){_b.prototype.schedulePeriodic=function(a,b){return this.schedulePeriodicWithState(null,a,b)},_b.prototype.schedulePeriodicWithState=function(a,b,c){if("undefined"==typeof O.setInterval)throw new Error("Periodic scheduling not supported.");var d=a,e=O.setInterval(function(){d=c(d)},b);return Vb(function(){O.clearInterval(e)})}}(_b.prototype),function(a){a.catchError=a["catch"]=function(a){return new ic(this,a)}}(_b.prototype);var bc,cc=(T.internals.SchedulePeriodicRecursive=function(){function a(a,b){b(0,this._period);try{this._state=this._action(this._state)}catch(c){throw this._cancel.dispose(),c}}function b(a,b,c,d){this._scheduler=a,this._state=b,this._period=c,this._action=d}return b.prototype.start=function(){var b=new Xb;return this._cancel=b,b.setDisposable(this._scheduler.scheduleRecursiveWithRelativeAndState(0,this._period,a.bind(this))),b},b}(),_b.immediate=function(){function a(a,b){return b(this,a)}function b(a,b,c){for(var d=this.now()+ac(b);d-this.now()>0;);return c(this,a)}function c(a,b,c){return this.scheduleWithRelativeAndState(a,b-this.now(),c)}return new _b(X,a,b,c)}()),dc=_b.currentThread=function(){function a(a){for(;a.length>0;){var b=a.dequeue();if(!b.isCancelled()){for(;b.dueTime-_b.now()>0;);!b.isCancelled()&&b.invoke()}}}function b(a,b){return this.scheduleWithRelativeAndState(a,0,b)}function c(b,c,d){var f=this.now()+_b.normalize(c),g=new $b(this,b,d,f);if(e)e.enqueue(g);else{e=new Qb(4),e.enqueue(g);try{a(e)}catch(h){throw h}finally{e=null}}return g.disposable}function d(a,b,c){return this.scheduleWithRelativeAndState(a,b-this.now(),c)}var e,f=new _b(X,b,c,d);return f.scheduleRequired=function(){return!e},f.ensureTrampoline=function(a){e?a():this.schedule(a)},f}(),ec=U,fc=function(){var a,b=U;if("WScript"in this)a=function(a,b){WScript.Sleep(b),a()};else{if(!O.setTimeout)throw new Error("No concurrency detected!");a=O.setTimeout,b=O.clearTimeout}return{setTimeout:a,clearTimeout:b}}(),gc=fc.setTimeout,hc=fc.clearTimeout;!function(){function a(){if(!O.postMessage||O.importScripts)return!1;var a=!1,b=O.onmessage;return O.onmessage=function(){a=!0},O.postMessage("","*"),O.onmessage=b,a}var b=RegExp("^"+String(Ab).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),c="function"==typeof(c=S&&R&&S.setImmediate)&&!b.test(c)&&c,d="function"==typeof(d=S&&R&&S.clearImmediate)&&!b.test(d)&&d;if("function"==typeof c)bc=c,ec=d;else if("undefined"!=typeof process&&"[object process]"==={}.toString.call(process))bc=process.nextTick;else if(a()){var e="ms.rx.schedule"+Math.random(),f={},g=0,h=function(a){if("string"==typeof a.data&&a.data.substring(0,e.length)===e){var b=a.data.substring(e.length),c=f[b];c(),delete f[b]}};O.addEventListener?O.addEventListener("message",h,!1):O.attachEvent("onmessage",h,!1),bc=function(a){var b=g++;f[b]=a,O.postMessage(e+b,"*")}}else if(O.MessageChannel){var i=new O.MessageChannel,j={},k=0;i.port1.onmessage=function(a){var b=a.data,c=j[b];c(),delete j[b]},bc=function(a){var b=k++;j[b]=a,i.port2.postMessage(b)}}else"document"in O&&"onreadystatechange"in O.document.createElement("script")?bc=function(a){var b=O.document.createElement("script");b.onreadystatechange=function(){a(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},O.document.documentElement.appendChild(b)}:(bc=function(a){return gc(a,0)},ec=hc)}();var ic=(_b.timeout=function(){function a(a,b){var c=this,d=new Xb,e=bc(function(){d.isDisposed||d.setDisposable(b(c,a))});return new Sb(d,Vb(function(){ec(e)}))}function b(a,b,c){var d=this,e=_b.normalize(b);if(0===e)return d.scheduleWithState(a,c);var f=new Xb,g=gc(function(){f.isDisposed||f.setDisposable(c(d,a))},e);return new Sb(f,Vb(function(){hc(g)}))}function c(a,b,c){return this.scheduleWithRelativeAndState(a,b-this.now(),c)}return new _b(X,a,b,c)}(),function(a){function b(a,b){return this._scheduler.scheduleWithState(a,this._wrap(b))}function c(a,b,c){return this._scheduler.scheduleWithRelativeAndState(a,b,this._wrap(c))}function d(a,b,c){return this._scheduler.scheduleWithAbsoluteAndState(a,b,this._wrap(c))}function e(e,f){this._scheduler=e,this._handler=f,this._recursiveOriginal=null,this._recursiveWrapper=null,a.call(this,this._scheduler.now.bind(this._scheduler),b,c,d)}return Nb(e,a),e.prototype._clone=function(a){return new e(a,this._handler)},e.prototype._wrap=function(a){var b=this;return function(c,d){try{return a(b._getRecursiveWrapper(c),d)}catch(e){if(!b._handler(e))throw e;return Wb}}},e.prototype._getRecursiveWrapper=function(a){if(this._recursiveOriginal!==a){this._recursiveOriginal=a;var b=this._clone(a);b._recursiveOriginal=a,b._recursiveWrapper=b,this._recursiveWrapper=b}return this._recursiveWrapper},e.prototype.schedulePeriodicWithState=function(a,b,c){var d=this,e=!1,f=new Xb;return f.setDisposable(this._scheduler.schedulePeriodicWithState(a,b,function(a){if(e)return null;try{return c(a)}catch(b){if(e=!0,!d._handler(b))throw b;return f.dispose(),null}})),f},e}(_b)),jc=T.Notification=function(){function a(a,b){this.hasValue=null==b?!1:b,this.kind=a}return a.prototype.accept=function(a,b,c){return a&&"object"==typeof a?this._acceptObservable(a):this._accept(a,b,c)},a.prototype.toObservable=function(a){var b=this;return V(a)||(a=cc),new Tc(function(c){return a.schedule(function(){b._acceptObservable(c),"N"===b.kind&&c.onCompleted()})})},a}(),kc=jc.createOnNext=function(){function a(a){return a(this.value)}function b(a){return a.onNext(this.value)}function c(){return"OnNext("+this.value+")"}return function(d){var e=new jc("N",!0);return e.value=d,e._accept=a,e._acceptObservable=b,e.toString=c,e}}(),lc=jc.createOnError=function(){function a(a,b){return b(this.exception)}function b(a){return a.onError(this.exception)}function c(){return"OnError("+this.exception+")"}return function(d){var e=new jc("E");return e.exception=d,e._accept=a,e._acceptObservable=b,e.toString=c,e}}(),mc=jc.createOnCompleted=function(){function a(a,b,c){return c()}function b(a){return a.onCompleted()}function c(){return"OnCompleted()"}return function(){var d=new jc("C");return d._accept=a,d._acceptObservable=b,d.toString=c,d}}(),nc=T.internals.Enumerator=function(a){this._next=a};nc.prototype.next=function(){return this._next()},nc.prototype[ib]=function(){return this};var oc=T.internals.Enumerable=function(a){this._iterator=a};oc.prototype[ib]=function(){return this._iterator()},oc.prototype.concat=function(){var a=this;return new Tc(function(b){var c,d=a[ib](),e=new Yb,f=cc.scheduleRecursive(function(a){if(!c){try{var f=d.next()}catch(g){return b.onError(g)}if(f.done)return b.onCompleted();var h=f.value;_(h)&&(h=Bc(h));var i=new Xb;e.setDisposable(i),i.setDisposable(h.subscribe(function(a){b.onNext(a)},function(a){b.onError(a)},a))}});return new Sb(e,f,Vb(function(){c=!0}))})},oc.prototype.catchError=function(){var a=this;return new Tc(function(b){var c,d=a[ib](),e=new Yb,f=cc.scheduleRecursiveWithState(null,function(a,f){if(!c){try{var g=d.next()}catch(h){return observer.onError(h)}if(g.done)return void(null!==a?b.onError(a):b.onCompleted());var i=g.value;_(i)&&(i=Bc(i));var j=new Xb;e.setDisposable(j),j.setDisposable(i.subscribe(function(a){b.onNext(a)},f,function(){b.onCompleted()}))}});return new Sb(e,f,Vb(function(){c=!0}))})},oc.prototype.catchErrorWhen=function(a){var b=this;return new Tc(function(c){var d,e,f=new Wc,g=new Wc,h=a(f),i=h.subscribe(g),j=b[ib](),k=new Yb,l=cc.scheduleRecursive(function(a){if(!d){try{var b=j.next()}catch(h){return c.onError(h)}if(b.done)return void(e?c.onError(e):c.onCompleted());var i=b.value;_(i)&&(i=Bc(i));var l=new Xb,m=new Xb;k.setDisposable(new Sb(m,l)),l.setDisposable(i.subscribe(function(a){c.onNext(a)},function(b){m.setDisposable(g.subscribe(a,function(a){c.onError(a)},function(){c.onCompleted()})),f.onNext(b)},function(){c.onCompleted()}))}});return new Sb(i,k,l,Vb(function(){d=!0}))})};var pc=oc.repeat=function(a,b){return null==b&&(b=-1),new oc(function(){var c=b;return new nc(function(){return 0===c?jb:(c>0&&c--,{done:!1,value:a})})})},qc=oc.of=function(a,b,c){if(b)var d=nb(b,c,3);return new oc(function(){var c=-1;return new nc(function(){return++c<a.length?{done:!1,value:b?d(a[c],c,a):a[c]}:jb})})},rc=T.Observer=function(){};rc.prototype.toNotifier=function(){var a=this;return function(b){return b.accept(a)}},rc.prototype.asObserver=function(){return new vc(this.onNext.bind(this),this.onError.bind(this),this.onCompleted.bind(this))},rc.prototype.checked=function(){return new wc(this)};var sc=rc.create=function(a,b,c){return a||(a=U),b||(b=$),c||(c=U),new vc(a,b,c)};rc.fromNotifier=function(a,b){return new vc(function(c){return a.call(b,kc(c))},function(c){return a.call(b,lc(c))},function(){return a.call(b,mc())})},rc.prototype.notifyOn=function(a){return new yc(a,this)},rc.prototype.makeSafe=function(a){return new AnonymousSafeObserver(this._onNext,this._onError,this._onCompleted,a)};var tc,uc=T.internals.AbstractObserver=function(a){function b(){this.isStopped=!1,a.call(this)}return Nb(b,a),b.prototype.onNext=function(a){this.isStopped||this.next(a)},b.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.error(a))},b.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.completed())},b.prototype.dispose=function(){this.isStopped=!0},b.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.error(a),!0)},b}(rc),vc=T.AnonymousObserver=function(a){function b(b,c,d){a.call(this),this._onNext=b,this._onError=c,this._onCompleted=d}return Nb(b,a),b.prototype.next=function(a){this._onNext(a)},b.prototype.error=function(a){this._onError(a)},b.prototype.completed=function(){this._onCompleted()},b}(uc),wc=function(a){function b(b){a.call(this),this._observer=b,this._state=0}Nb(b,a);var c=b.prototype;return c.onNext=function(a){this.checkAccess();try{this._observer.onNext(a)}catch(b){throw b}finally{this._state=0}},c.onError=function(a){this.checkAccess();try{this._observer.onError(a)}catch(b){throw b}finally{this._state=2}},c.onCompleted=function(){this.checkAccess();try{this._observer.onCompleted()}catch(a){throw a}finally{this._state=2}},c.checkAccess=function(){if(1===this._state)throw new Error("Re-entrancy detected");if(2===this._state)throw new Error("Observer completed");0===this._state&&(this._state=1)},b}(rc),xc=T.internals.ScheduledObserver=function(a){function b(b,c){a.call(this),this.scheduler=b,this.observer=c,this.isAcquired=!1,this.hasFaulted=!1,this.queue=[],this.disposable=new Yb}return Nb(b,a),b.prototype.next=function(a){var b=this;this.queue.push(function(){b.observer.onNext(a)})},b.prototype.error=function(a){var b=this;this.queue.push(function(){b.observer.onError(a)})},b.prototype.completed=function(){var a=this;this.queue.push(function(){a.observer.onCompleted()})},b.prototype.ensureActive=function(){var a=!1,b=this;!this.hasFaulted&&this.queue.length>0&&(a=!this.isAcquired,this.isAcquired=!0),a&&this.disposable.setDisposable(this.scheduler.scheduleRecursive(function(a){var c;if(!(b.queue.length>0))return void(b.isAcquired=!1);c=b.queue.shift();try{c()}catch(d){throw b.queue=[],b.hasFaulted=!0,d}a()}))},b.prototype.dispose=function(){a.prototype.dispose.call(this),this.disposable.dispose()},b}(uc),yc=function(a){function b(b,c,d){a.call(this,b,c),this._cancel=d}return Nb(b,a),b.prototype.next=function(b){a.prototype.next.call(this,b),this.ensureActive()},b.prototype.error=function(b){a.prototype.error.call(this,b),this.ensureActive()},b.prototype.completed=function(){a.prototype.completed.call(this),this.ensureActive()},b.prototype.dispose=function(){a.prototype.dispose.call(this),this._cancel&&this._cancel.dispose(),this._cancel=null},b}(xc),zc=T.Observable=function(){function a(a){if(T.config.longStackSupport&&db){try{throw new Error}catch(b){this.stack=b.stack.substring(b.stack.indexOf("\n")+1)}var c=this;this._subscribe=function(b){var e=b.onError.bind(b);return b.onError=function(a){d(a,c),e(a)},a.call(c,b)}}else this._subscribe=a}return tc=a.prototype,tc.subscribe=tc.forEach=function(a,b,c){return this._subscribe("object"==typeof a?a:sc(a,b,c))},tc.subscribeOnNext=function(a,b){return this._subscribe(sc("undefined"!=typeof b?function(c){a.call(b,c)}:a))},tc.subscribeOnError=function(a,b){return this._subscribe(sc(null,"undefined"!=typeof b?function(c){a.call(b,c)}:a))},tc.subscribeOnCompleted=function(a,b){return this._subscribe(sc(null,null,"undefined"!=typeof b?function(){a.call(b)}:a))},a}(),Ac=T.ObservableBase=function(a){function b(a){return a&&"function"==typeof a.dispose?a:"function"==typeof a?Vb(a):Wb}function c(a,c){var d=c[0],e=c[1];try{d.setDisposable(b(e.subscribeCore(d)))}catch(f){if(!d.fail(f))throw f}}function d(a){var b=new Uc(a),d=[b,this];return dc.scheduleRequired()?dc.scheduleWithState(d,c):c(null,d),b}function e(){a.call(this,d)}return Nb(e,a),e.prototype.subscribeCore=function(){throw new Error("Not implemeneted")},e}(zc);tc.observeOn=function(a){var b=this;return new Tc(function(c){return b.subscribe(new yc(a,c))},b)},tc.subscribeOn=function(a){var b=this;return new Tc(function(c){var d=new Xb,e=new Yb;return e.setDisposable(d),d.setDisposable(a.schedule(function(){e.setDisposable(new r(a,b.subscribe(c)))})),e},b)};var Bc=zc.fromPromise=function(a){return Cc(function(){var b=new T.AsyncSubject;return a.then(function(a){b.onNext(a),b.onCompleted()},b.onError.bind(b)),b})};tc.toPromise=function(a){if(a||(a=T.config.Promise),!a)throw new TypeError("Promise type not provided nor in Rx.config.Promise");var b=this;return new a(function(a,c){var d,e=!1;b.subscribe(function(a){d=a,e=!0},c,function(){e&&a(d)})})},tc.toArray=function(){var a=this;return new Tc(function(b){var c=[];return a.subscribe(function(a){c.push(a)},function(a){b.onError(a)},function(){b.onNext(c),b.onCompleted()})},a)},zc.create=zc.createWithDisposable=function(a,b){return new Tc(a,b)};var Cc=zc.defer=function(a){return new Tc(function(b){var c;try{c=a()}catch(d){return Lc(d).subscribe(b)}return _(c)&&(c=Bc(c)),c.subscribe(b)})},Dc=zc.empty=function(a){return V(a)||(a=cc),new Tc(function(b){return a.schedule(function(){b.onCompleted()})})},Ec=Math.pow(2,53)-1;u.prototype[ib]=function(){return new v(this._s)},v.prototype[ib]=function(){return this},v.prototype.next=function(){if(this._i<this._l){var a=this._s.charAt(this._i++);return{done:!1,value:a}}return jb},w.prototype[ib]=function(){return new x(this._a)},x.prototype[ib]=function(){return this},x.prototype.next=function(){if(this._i<this._l){var a=this._a[this._i++];return{done:!1,value:a}}return jb};var Fc=zc.from=function(a,b,c,d){if(null==a)throw new Error("iterable cannot be null.");if(b&&!ab(b))throw new Error("mapFn when provided must be a function");if(b)var e=nb(b,c,2);V(d)||(d=dc);var f=Object(a),g=z(f);return new Tc(function(a){return d.scheduleRecursiveWithState(0,function(b,c){try{var d=g.next()}catch(f){return void a.onError(f)}if(d.done)return void a.onCompleted();var h=d.value;if(e)try{h=e(h,b)}catch(f){return void a.onError(f)}a.onNext(h),c(b+1)})})},Gc=function(a){function b(b,c){this.args=b,this.scheduler=c||dc,a.call(this)}return Nb(b,a),b.prototype.subscribeCore=function(a){var b=new Hc(a,this);return b.run()},b}(Ac),Hc=function(){function a(a,b){this.observer=a,this.parent=b}function b(a,b){a.i<a.len?(a.observer.onNext(a.args[a.i++]),b(a)):a.observer.onCompleted()}return a.prototype.run=function(){return this.parent.scheduler.scheduleRecursiveWithState({i:0,args:this.parent.args,len:this.parent.args.length,observer:this.observer},b)},a}(),Ic=zc.fromArray=function(a,b){return new Gc(a,b)};zc.generate=function(a,b,c,d,e){return V(e)||(e=dc),new Tc(function(f){var g=!0,h=a;return e.scheduleRecursive(function(a){var e,i;try{g?g=!1:h=c(h),e=b(h),e&&(i=d(h))}catch(j){return void f.onError(j)}e?(f.onNext(i),a()):f.onCompleted()})})};var Jc=zc.never=function(){return new Tc(function(){return Wb})};zc.of=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return C(null,a)},zc.ofWithScheduler=function(a){for(var b=[],c=1,d=arguments.length;d>c;c++)b.push(arguments[c]);return C(a,b)},zc.pairs=function(a,b){return b||(b=T.Scheduler.currentThread),new Tc(function(c){var d=Object.keys(a),e=d.length;return b.scheduleRecursiveWithState(0,function(b,f){if(e>b){var g=d[b];c.onNext([g,a[g]]),f(b+1)}else c.onCompleted()})})},zc.range=function(a,b,c){return V(c)||(c=dc),new Tc(function(d){return c.scheduleRecursiveWithState(0,function(c,e){b>c?(d.onNext(a+c),e(c+1)):d.onCompleted()})})},zc.repeat=function(a,b,c){return V(c)||(c=dc),Kc(a,c).repeat(null==b?-1:b)};var Kc=zc["return"]=zc.just=function(a,b){return V(b)||(b=cc),new Tc(function(c){return b.schedule(function(){c.onNext(a),c.onCompleted()})})};zc.returnValue=function(){return Kc.apply(null,arguments)};var Lc=zc["throw"]=zc.throwError=function(a,b){return V(b)||(b=cc),new Tc(function(c){return b.schedule(function(){c.onError(a)})})};zc.throwException=function(){return zc.throwError.apply(null,arguments)},zc.using=function(a,b){return new Tc(function(c){var d,e,f=Wb;try{d=a(),d&&(f=d),e=b(d)}catch(g){return new Sb(Lc(g).subscribe(c),f)}return new Sb(e.subscribe(c),f)})},tc.amb=function(a){var b=this;return new Tc(function(c){function d(){f||(f=g,j.dispose())
}function e(){f||(f=h,i.dispose())}var f,g="L",h="R",i=new Xb,j=new Xb;return _(a)&&(a=Bc(a)),i.setDisposable(b.subscribe(function(a){d(),f===g&&c.onNext(a)},function(a){d(),f===g&&c.onError(a)},function(){d(),f===g&&c.onCompleted()})),j.setDisposable(a.subscribe(function(a){e(),f===h&&c.onNext(a)},function(a){e(),f===h&&c.onError(a)},function(){e(),f===h&&c.onCompleted()})),new Sb(i,j)})},zc.amb=function(){function a(a,b){return a.amb(b)}var b=Jc(),c=[];if(Array.isArray(arguments[0]))c=arguments[0];else for(var d=0,e=arguments.length;e>d;d++)c.push(arguments[d]);for(var d=0,e=c.length;e>d;d++)b=a(b,c[d]);return b},tc["catch"]=tc.catchError=function(a){return"function"==typeof a?D(this,a):Mc([this,a])},tc.catchException=function(a){return this.catchError(a)};var Mc=zc.catchError=zc["catch"]=zc.catchException=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else for(var b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return qc(a).catchError()};tc.combineLatest=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return Array.isArray(a[0])?a[0].unshift(this):a.unshift(this),Nc.apply(this,a)};var Nc=zc.combineLatest=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);var d=a.pop();return Array.isArray(a[0])&&(a=a[0]),new Tc(function(b){function c(a){var c;if(h[a]=!0,i||(i=h.every(W))){try{c=d.apply(null,k)}catch(e){return void b.onError(e)}b.onNext(c)}else j.filter(function(b,c){return c!==a}).every(W)&&b.onCompleted()}function e(a){j[a]=!0,j.every(W)&&b.onCompleted()}for(var f=function(){return!1},g=a.length,h=p(g,f),i=!1,j=p(g,f),k=new Array(g),l=new Array(g),m=0;g>m;m++)!function(d){var f=a[d],g=new Xb;_(f)&&(f=Bc(f)),g.setDisposable(f.subscribe(function(a){k[d]=a,c(d)},function(a){b.onError(a)},function(){e(d)})),l[d]=g}(m);return new Sb(l)},this)};tc.concat=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return a.unshift(this),Oc.apply(null,a)};var Oc=zc.concat=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else for(var b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return qc(a).concat()};tc.concatAll=tc.concatObservable=function(){return this.merge(1)},tc.merge=function(a){if("number"!=typeof a)return Pc(this,a);var b=this;return new Tc(function(c){function d(a){var b=new Xb;f.add(b),_(a)&&(a=Bc(a)),b.setDisposable(a.subscribe(function(a){c.onNext(a)},function(a){c.onError(a)},function(){f.remove(b),h.length>0?d(h.shift()):(e--,g&&0===e&&c.onCompleted())}))}var e=0,f=new Sb,g=!1,h=[];return f.add(b.subscribe(function(b){a>e?(e++,d(b)):h.push(b)},function(a){c.onError(a)},function(){g=!0,0===e&&c.onCompleted()})),f},b)};var Pc=zc.merge=function(){var a,b,c=[],d=arguments.length;if(arguments[0])if(V(arguments[0]))for(a=arguments[0],b=1;d>b;b++)c.push(arguments[b]);else for(a=cc,b=0;d>b;b++)c.push(arguments[b]);else for(a=cc,b=1;d>b;b++)c.push(arguments[b]);return Array.isArray(c[0])&&(c=c[0]),C(a,c).mergeAll()};tc.mergeAll=function(){var a=this;return new Tc(function(b){var c=new Sb,d=!1,e=new Xb;return c.add(e),e.setDisposable(a.subscribe(function(a){var e=new Xb;c.add(e),_(a)&&(a=Bc(a)),e.setDisposable(a.subscribe(function(a){b.onNext(a)},function(a){b.onError(a)},function(){c.remove(e),d&&1===c.length&&b.onCompleted()}))},function(a){b.onError(a)},function(){d=!0,1===c.length&&b.onCompleted()})),c},a)},tc.mergeObservable=function(){return this.mergeAll.apply(this,arguments)},tc.onErrorResumeNext=function(a){if(!a)throw new Error("Second observable is required");return Qc([this,a])};var Qc=zc.onErrorResumeNext=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else for(var b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return new Tc(function(b){var c=0,d=new Yb,e=cc.scheduleRecursive(function(e){var f,g;c<a.length?(f=a[c++],_(f)&&(f=Bc(f)),g=new Xb,d.setDisposable(g),g.setDisposable(f.subscribe(b.onNext.bind(b),e,e))):b.onCompleted()});return new Sb(d,e)})};tc.skipUntil=function(a){var b=this;return new Tc(function(c){var d=!1,e=new Sb(b.subscribe(function(a){d&&c.onNext(a)},function(a){c.onError(a)},function(){d&&c.onCompleted()}));_(a)&&(a=Bc(a));var f=new Xb;return e.add(f),f.setDisposable(a.subscribe(function(){d=!0,f.dispose()},function(a){c.onError(a)},function(){f.dispose()})),e},b)},tc["switch"]=tc.switchLatest=function(){var a=this;return new Tc(function(b){var c=!1,d=new Yb,e=!1,f=0,g=a.subscribe(function(a){var g=new Xb,h=++f;c=!0,d.setDisposable(g),_(a)&&(a=Bc(a)),g.setDisposable(a.subscribe(function(a){f===h&&b.onNext(a)},function(a){f===h&&b.onError(a)},function(){f===h&&(c=!1,e&&b.onCompleted())}))},function(a){b.onError(a)},function(){e=!0,!c&&b.onCompleted()});return new Sb(g,d)},a)},tc.takeUntil=function(a){var b=this;return new Tc(function(c){return _(a)&&(a=Bc(a)),new Sb(b.subscribe(c),a.subscribe(function(){c.onCompleted()},function(a){c.onError(a)},U))},b)},tc.withLatestFrom=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);var d=a.pop(),e=this;if("undefined"==typeof e)throw new Error("Source observable not found for withLatestFrom().");if("function"!=typeof d)throw new Error("withLatestFrom() expects a resultSelector function.");return Array.isArray(a[0])&&(a=a[0]),new Tc(function(b){for(var c=function(){return!1},f=a.length,g=p(f,c),h=!1,i=new Array(f),j=new Array(f+1),k=0;f>k;k++)!function(c){var d=a[c],e=new Xb;_(d)&&(d=Bc(d)),e.setDisposable(d.subscribe(function(a){i[c]=a,g[c]=!0,h=g.every(W)},b.onError.bind(b),function(){})),j[c]=e}(k);var l=new Xb;return l.setDisposable(e.subscribe(function(a){var c,e=[a].concat(i);if(h){try{c=d.apply(null,e)}catch(f){return void b.onError(f)}b.onNext(c)}},b.onError.bind(b),function(){b.onCompleted()})),j[f]=l,new Sb(j)},this)},tc.zip=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);if(Array.isArray(a[0]))return E.apply(this,a);var d=this,e=a.pop();return a.unshift(d),new Tc(function(b){function c(a){var c,f;if(h.every(function(a){return a.length>0})){try{f=h.map(function(a){return a.shift()}),c=e.apply(d,f)}catch(g){return void b.onError(g)}b.onNext(c)}else i.filter(function(b,c){return c!==a}).every(W)&&b.onCompleted()}function f(a){i[a]=!0,i.every(function(a){return a})&&b.onCompleted()}for(var g=a.length,h=p(g,G),i=p(g,F),j=new Array(g),k=0;g>k;k++)!function(d){var e=a[d],g=new Xb;_(e)&&(e=Bc(e)),g.setDisposable(e.subscribe(function(a){h[d].push(a),c(d)},function(a){b.onError(a)},function(){f(d)})),j[d]=g}(k);return new Sb(j)},d)},zc.zip=function(){for(var a=[],b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);var d=a.shift();return d.zip.apply(d,a)},zc.zipArray=function(){var a=[];if(Array.isArray(arguments[0]))a=arguments[0];else for(var b=0,c=arguments.length;c>b;b++)a.push(arguments[b]);return new Tc(function(b){function c(a){if(f.every(function(a){return a.length>0})){var c=f.map(function(a){return a.shift()});b.onNext(c)}else if(g.filter(function(b,c){return c!==a}).every(W))return void b.onCompleted()}function d(a){return g[a]=!0,g.every(W)?void b.onCompleted():void 0}for(var e=a.length,f=p(e,function(){return[]}),g=p(e,function(){return!1}),h=new Array(e),i=0;e>i;i++)!function(e){h[e]=new Xb,h[e].setDisposable(a[e].subscribe(function(a){f[e].push(a),c(e)},function(a){b.onError(a)},function(){d(e)}))}(i);return new Sb(h)})},tc.asObservable=function(){var a=this;return new Tc(function(b){return a.subscribe(b)},this)},tc.bufferWithCount=function(a,b){return"number"!=typeof b&&(b=a),this.windowWithCount(a,b).selectMany(function(a){return a.toArray()}).where(function(a){return a.length>0})},tc.dematerialize=function(){var a=this;return new Tc(function(b){return a.subscribe(function(a){return a.accept(b)},function(a){b.onError(a)},function(){b.onCompleted()})},this)},tc.distinctUntilChanged=function(a,b){var c=this;return b||(b=Y),new Tc(function(d){var e,f=!1;return c.subscribe(function(c){var g=c;if(a)try{g=a(c)}catch(h){return void d.onError(h)}if(f)try{var i=b(e,g)}catch(h){return void d.onError(h)}f&&i||(f=!0,e=g,d.onNext(c))},function(a){d.onError(a)},function(){d.onCompleted()})},this)},tc["do"]=tc.tap=tc.doAction=function(a,b,c){var d=this,e="function"==typeof a||"undefined"==typeof a?sc(a||U,b||U,c||U):a;return new Tc(function(a){return d.subscribe(function(b){try{e.onNext(b)}catch(c){a.onError(c)}a.onNext(b)},function(b){try{e.onError(b)}catch(c){a.onError(c)}a.onError(b)},function(){try{e.onCompleted()}catch(b){a.onError(b)}a.onCompleted()})},this)},tc.doOnNext=tc.tapOnNext=function(a,b){return this.tap("undefined"!=typeof b?function(c){a.call(b,c)}:a)},tc.doOnError=tc.tapOnError=function(a,b){return this.tap(U,"undefined"!=typeof b?function(c){a.call(b,c)}:a)},tc.doOnCompleted=tc.tapOnCompleted=function(a,b){return this.tap(U,null,"undefined"!=typeof b?function(){a.call(b)}:a)},tc["finally"]=tc.ensure=function(a){var b=this;return new Tc(function(c){var d;try{d=b.subscribe(c)}catch(e){throw a(),e}return Vb(function(){try{d.dispose()}catch(b){throw b}finally{a()}})},this)},tc.finallyAction=function(a){return this.ensure(a)},tc.ignoreElements=function(){var a=this;return new Tc(function(b){return a.subscribe(U,function(a){b.onError(a)},function(){b.onCompleted()})},a)},tc.materialize=function(){var a=this;return new Tc(function(b){return a.subscribe(function(a){b.onNext(kc(a))},function(a){b.onNext(lc(a)),b.onCompleted()},function(){b.onNext(mc()),b.onCompleted()})},a)},tc.repeat=function(a){return pc(this,a).concat()},tc.retry=function(a){return pc(this,a).catchError()},tc.retryWhen=function(a){return pc(this).catchErrorWhen(a)},tc.scan=function(){var a,b,c=!1,d=this;return 2===arguments.length?(c=!0,a=arguments[0],b=arguments[1]):b=arguments[0],new Tc(function(e){var f,g,h;return d.subscribe(function(d){!h&&(h=!0);try{f?g=b(g,d):(g=c?b(a,d):d,f=!0)}catch(i){return void e.onError(i)}e.onNext(g)},function(a){e.onError(a)},function(){!h&&c&&e.onNext(a),e.onCompleted()})},d)},tc.skipLast=function(a){var b=this;return new Tc(function(c){var d=[];return b.subscribe(function(b){d.push(b),d.length>a&&c.onNext(d.shift())},function(a){c.onError(a)},function(){c.onCompleted()})},b)},tc.startWith=function(){var a,b=0;arguments.length&&V(arguments[0])?(a=arguments[0],b=1):a=cc;for(var c=[],d=b,e=arguments.length;e>d;d++)c.push(arguments[d]);return qc([Ic(c,a),this]).concat()},tc.takeLast=function(a){var b=this;return new Tc(function(c){var d=[];return b.subscribe(function(b){d.push(b),d.length>a&&d.shift()},function(a){c.onError(a)},function(){for(;d.length>0;)c.onNext(d.shift());c.onCompleted()})},b)},tc.takeLastBuffer=function(a){var b=this;return new Tc(function(c){var d=[];return b.subscribe(function(b){d.push(b),d.length>a&&d.shift()},function(a){c.onError(a)},function(){c.onNext(d),c.onCompleted()})},b)},tc.windowWithCount=function(a,b){var c=this;if(+a||(a=0),1/0===Math.abs(a)&&(a=0),0>=a)throw new Error(bb);if(null==b&&(b=a),+b||(b=0),1/0===Math.abs(b)&&(b=0),0>=b)throw new Error(bb);return new Tc(function(d){function e(){var a=new Wc;i.push(a),d.onNext(Pb(a,g))}var f=new Xb,g=new Zb(f),h=0,i=[];return e(),f.setDisposable(c.subscribe(function(c){for(var d=0,f=i.length;f>d;d++)i[d].onNext(c);var g=h-a+1;g>=0&&g%b===0&&i.shift().onCompleted(),++h%b===0&&e()},function(a){for(;i.length>0;)i.shift().onError(a);d.onError(a)},function(){for(;i.length>0;)i.shift().onCompleted();d.onCompleted()})),g},c)},tc.selectConcat=tc.concatMap=function(a,b,c){return ab(a)&&ab(b)?this.concatMap(function(c,d){var e=a(c,d);return _(e)&&(e=Bc(e)),(lb(e)||kb(e))&&(e=Fc(e)),e.map(function(a,e){return b(c,a,d,e)})}):ab(a)?H(this,a,c):H(this,function(){return a})},tc.concatMapObserver=tc.selectConcatObserver=function(a,b,c,d){var e=this,f=nb(a,d,2),g=nb(b,d,1),h=nb(c,d,0);return new Tc(function(a){var b=0;return e.subscribe(function(c){var d;try{d=f(c,b++)}catch(e){return void a.onError(e)}_(d)&&(d=Bc(d)),a.onNext(d)},function(b){var c;try{c=g(b)}catch(d){return void a.onError(d)}_(c)&&(c=Bc(c)),a.onNext(c),a.onCompleted()},function(){var b;try{b=h()}catch(c){return void a.onError(c)}_(b)&&(b=Bc(b)),a.onNext(b),a.onCompleted()})},this).concatAll()},tc.defaultIfEmpty=function(b){var c=this;return b===a&&(b=null),new Tc(function(a){var d=!1;return c.subscribe(function(b){d=!0,a.onNext(b)},function(b){a.onError(b)},function(){!d&&a.onNext(b),a.onCompleted()})},c)},J.prototype.push=function(a){var b=-1===I(this.set,a,this.comparer);return b&&this.set.push(a),b},tc.distinct=function(a,b){var c=this;return b||(b=Y),new Tc(function(d){var e=new J(b);return c.subscribe(function(b){var c=b;if(a)try{c=a(b)}catch(f){return void d.onError(f)}e.push(c)&&d.onNext(b)},function(a){d.onError(a)},function(){d.onCompleted()})},this)};var Rc=function(a){function b(b,c,d){this.source=b,this.selector=nb(c,d,3),a.call(this)}return Nb(b,a),b.prototype.internalMap=function(a,c){var d=this;return new b(this.source,function(b,c,e){return a(d.selector(b,c,e),c,e)},c)},b.prototype.subscribeCore=function(a){return this.source.subscribe(new K(a,this.selector,this))},b}(Ac);K.prototype.onNext=function(a){if(!this.isStopped){try{var b=this.selector(a,this.index++,this.source)}catch(c){return this.observer.onError(c)}this.observer.onNext(b)}},K.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.observer.onError(a))},K.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.observer.onCompleted())},K.prototype.dispose=function(){this.isStopped=!0},K.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.observer.onError(a),!0)},tc.map=tc.select=function(a,b){var c="function"==typeof a?a:function(){return a};return this instanceof Rc?this.internalMap(a,b):new Rc(this,c,b)},tc.pluck=function(){var b=arguments,c=arguments.length;if(0===c)throw new Error("List of properties cannot be empty.");return this.map(function(d){for(var e=d,f=0;c>f;f++){var g=e[b[f]];if("undefined"==typeof g)return a;e=g}return e})},tc.flatMapObserver=tc.selectManyObserver=function(a,b,c,d){var e=this;return new Tc(function(f){var g=0;return e.subscribe(function(b){var c;try{c=a.call(d,b,g++)}catch(e){return void f.onError(e)}_(c)&&(c=Bc(c)),f.onNext(c)},function(a){var c;try{c=b.call(d,a)}catch(e){return void f.onError(e)}_(c)&&(c=Bc(c)),f.onNext(c),f.onCompleted()},function(){var a;try{a=c.call(d)}catch(b){return void f.onError(b)}_(a)&&(a=Bc(a)),f.onNext(a),f.onCompleted()})},e).mergeAll()},tc.selectMany=tc.flatMap=function(a,b,c){return ab(a)&&ab(b)?this.flatMap(function(c,d){var e=a(c,d);return _(e)&&(e=Bc(e)),(lb(e)||kb(e))&&(e=Fc(e)),e.map(function(a,e){return b(c,a,d,e)})},c):ab(a)?L(this,a,c):L(this,function(){return a})},tc.selectSwitch=tc.flatMapLatest=tc.switchMap=function(a,b){return this.select(a,b).switchLatest()},tc.skip=function(a){if(0>a)throw new Error(bb);var b=this;return new Tc(function(c){var d=a;return b.subscribe(function(a){0>=d?c.onNext(a):d--},function(a){c.onError(a)},function(){c.onCompleted()})},b)},tc.skipWhile=function(a,b){var c=this,d=nb(a,b,3);return new Tc(function(a){var b=0,e=!1;return c.subscribe(function(f){if(!e)try{e=!d(f,b++,c)}catch(g){return void a.onError(g)}e&&a.onNext(f)},function(b){a.onError(b)},function(){a.onCompleted()})},c)},tc.take=function(a,b){if(0>a)throw new RangeError(bb);if(0===a)return Dc(b);var c=this;return new Tc(function(b){var d=a;return c.subscribe(function(a){d-->0&&(b.onNext(a),0===d&&b.onCompleted())},function(a){b.onError(a)},function(){b.onCompleted()})},c)},tc.takeWhile=function(a,b){var c=this,d=nb(a,b,3);return new Tc(function(a){var b=0,e=!0;return c.subscribe(function(f){if(e){try{e=d(f,b++,c)}catch(g){return void a.onError(g)}e?a.onNext(f):a.onCompleted()}},function(b){a.onError(b)},function(){a.onCompleted()})},c)};var Sc=function(a){function b(b,c,d){this.source=b,this.predicate=nb(c,d,3),a.call(this)}return Nb(b,a),b.prototype.subscribeCore=function(a){return this.source.subscribe(new M(a,this.predicate,this))},b.prototype.internalFilter=function(a,c){var d=this;return new b(this.source,function(b,c,e){return d.predicate(b,c,e)&&a(b,c,e)},c)},b}(Ac);M.prototype.onNext=function(a){try{var b=this.predicate(a,this.index++,this.source)}catch(c){return this.observer.onError(c)}b&&this.observer.onNext(a)},M.prototype.onError=function(a){this.isStopped||(this.isStopped=!0,this.observer.onError(a))},M.prototype.onCompleted=function(){this.isStopped||(this.isStopped=!0,this.observer.onCompleted())},M.prototype.dispose=function(){this.isStopped=!0},M.prototype.fail=function(a){return this.isStopped?!1:(this.isStopped=!0,this.observer.onError(a),!0)},tc.filter=tc.where=function(a,b){return this instanceof Sc?this.internalFilter(a,b):new Sc(this,a,b)},tc.transduce=function(a){function b(a){return{init:function(){return a},step:function(a,b){return a.onNext(b)},result:function(a){return a.onCompleted()}}}var c=this;return new Tc(function(d){var e=a(b(d));return c.subscribe(function(a){try{e.step(d,a)}catch(b){d.onError(b)}},d.onError.bind(d),function(){e.result(d)})},c)};var Tc=T.AnonymousObservable=function(a){function b(a){return a&&"function"==typeof a.dispose?a:"function"==typeof a?Vb(a):Wb}function c(a,c){var d=c[0],e=c[1];try{d.setDisposable(b(e(d)))}catch(f){if(!d.fail(f))throw f}}function d(b,d){function e(a){var d=new Uc(a),e=[d,b];return dc.scheduleRequired()?dc.scheduleWithState(e,c):c(null,e),d}this.source=d,a.call(this,e)}return Nb(d,a),d}(zc),Uc=function(a){function b(b){a.call(this),this.observer=b,this.m=new Xb}Nb(b,a);var c=b.prototype;return c.next=function(a){var b=!1;try{this.observer.onNext(a),b=!0}catch(c){throw c}finally{!b&&this.dispose()}},c.error=function(a){try{this.observer.onError(a)}catch(b){throw b}finally{this.dispose()}},c.completed=function(){try{this.observer.onCompleted()}catch(a){throw a}finally{this.dispose()}},c.setDisposable=function(a){this.m.setDisposable(a)},c.getDisposable=function(){return this.m.getDisposable()},c.dispose=function(){a.prototype.dispose.call(this),this.m.dispose()},b}(uc),Vc=function(a,b){this.subject=a,this.observer=b};Vc.prototype.dispose=function(){if(!this.subject.isDisposed&&null!==this.observer){var a=this.subject.observers.indexOf(this.observer);this.subject.observers.splice(a,1),this.observer=null}};var Wc=T.Subject=function(a){function d(a){return b(this),this.isStopped?this.hasError?(a.onError(this.error),Wb):(a.onCompleted(),Wb):(this.observers.push(a),new Vc(this,a))}function e(){a.call(this,d),this.isDisposed=!1,this.isStopped=!1,this.observers=[],this.hasError=!1}return Nb(e,a),Ob(e.prototype,rc.prototype,{hasObservers:function(){return this.observers.length>0},onCompleted:function(){if(b(this),!this.isStopped){this.isStopped=!0;for(var a=0,d=c(this.observers),e=d.length;e>a;a++)d[a].onCompleted();this.observers.length=0}},onError:function(a){if(b(this),!this.isStopped){this.isStopped=!0,this.error=a,this.hasError=!0;for(var d=0,e=c(this.observers),f=e.length;f>d;d++)e[d].onError(a);this.observers.length=0}},onNext:function(a){if(b(this),!this.isStopped)for(var d=0,e=c(this.observers),f=e.length;f>d;d++)e[d].onNext(a)},dispose:function(){this.isDisposed=!0,this.observers=null}}),e.create=function(a,b){return new Xc(a,b)},e}(zc),Xc=(T.AsyncSubject=function(a){function d(a){return b(this),this.isStopped?(this.hasError?a.onError(this.error):this.hasValue?(a.onNext(this.value),a.onCompleted()):a.onCompleted(),Wb):(this.observers.push(a),new Vc(this,a))}function e(){a.call(this,d),this.isDisposed=!1,this.isStopped=!1,this.hasValue=!1,this.observers=[],this.hasError=!1}return Nb(e,a),Ob(e.prototype,rc,{hasObservers:function(){return b(this),this.observers.length>0},onCompleted:function(){var a,d;if(b(this),!this.isStopped){this.isStopped=!0;var e=c(this.observers),d=e.length;if(this.hasValue)for(a=0;d>a;a++){var f=e[a];f.onNext(this.value),f.onCompleted()}else for(a=0;d>a;a++)e[a].onCompleted();this.observers.length=0}},onError:function(a){if(b(this),!this.isStopped){this.isStopped=!0,this.hasError=!0,this.error=a;for(var d=0,e=c(this.observers),f=e.length;f>d;d++)e[d].onError(a);this.observers.length=0}},onNext:function(a){b(this),this.isStopped||(this.value=a,this.hasValue=!0)},dispose:function(){this.isDisposed=!0,this.observers=null,this.exception=null,this.value=null}}),e}(zc),T.AnonymousSubject=function(a){function b(a){return this.observable.subscribe(a)}function c(c,d){this.observer=c,this.observable=d,a.call(this,b)}return Nb(c,a),Ob(c.prototype,rc.prototype,{onCompleted:function(){this.observer.onCompleted()},onError:function(a){this.observer.onError(a)},onNext:function(a){this.observer.onNext(a)}}),c}(zc));"function"==typeof define&&"object"==typeof define.amd&&define.amd?(O.Rx=T,define('rx',[],function(){return T})):P&&Q?R?(Q.exports=T).Rx=T:P.Rx=T:O.Rx=T;var Yc=h()}).call(this);
//# sourceMappingURL=rx.map;
/*global define,window*/
define('scalejs.routing-historyjs/history',[
    'scalejs!core',
    'history',
    'rx'
], function (
    core,
    History,
    rx
) {
    'use strict';

    function add(state) {
        return History.pushState(state.data, state.title, state.url);
    }

    function get() {
        return History.getState();
    }

    function replace(state) {
        return History.replaceState(state.data, state.title, state.url);
    }

    function observe() {
        var observable = rx.Observable,
            disposable = rx.Disposable;

        return observable.createWithDisposable(function (observer) {
            History.Adapter.bind(window, 'statechange', function () {
                observer.onNext(get());
            });

            return disposable.create(function () {
                window.onstatechange = null;
            });
        }).publishValue(get())
            .refCount();
    }

    return {
        add: add,
        get: get,
        replace: replace,
        observe: observe
    };
});


/*global define*/
define('scalejs.routing-historyjs/routeMapper',[
    'scalejs!core'
], function (
    core
) {
    'use strict';

    var clone = core.object.clone;

    /*
     * Given a mapping /a/{id}
     *   fromUrl('/a/1?x=2&y=t') will return { id: 1, x: 1, y: 't'}
     *   toUrl({id : 1, x: 1, y: 't'}) will return '/a/1?x=2&y=t'
     */
    return function routeMapper(mapping) {
        var cleanedMapping,
            routeGroups = [],
            mappingRegex;

        function createMappingRegex() {
            var routeGroupsMatches,
                mappingRegexText;

            cleanedMapping = mapping.replace(/^\/*|[/?]*$/g, ''); // strip leading '/' and ending '/' and '?'

            routeGroupsMatches = cleanedMapping.match(/{([^}])*}/g);
            if (routeGroupsMatches) {
                routeGroups = routeGroupsMatches.map(function (m) {
                    return m.replace(/[{}]/g, '');
                });
            }

            mappingRegexText = '^[/]*' + cleanedMapping.replace(/{[^}]*}/g, '(.+?)') + '[?/]*$';

            mappingRegex = new RegExp(mappingRegexText);
        }

        function fromUrl(url) {
            var urlElements,
                path,
                query,
                matches,
                result = {};

            urlElements = url.split(/\/*\?/);
            path = urlElements[0];
            query = url.substring(path.length).replace(/^[?/]*/, '');

            matches = path.match(mappingRegex);

            if (matches === null) {
                return null;
            }

            matches.shift(); // get rid of 0th group that matches whole string
            matches.forEach(function (m, i) {
                result[routeGroups[i]] = m;
            });

            query.split('&').map(function (kv) {
                var parts = kv.split('='),
                    key = parts[0],
                    value = parts[1];

                if (key) {
                    result[key] = value;
                }
            });

            return result;
        }

        function toUrl(data) {
            data = data ? clone(data) : {};

            var path,
                query = {};

            path = routeGroups.reduce(function (path, g) {
                var p = path.replace('{' + g + '}', data[g]);
                delete data[g];
                return p;
            }, cleanedMapping);

            query = Object.keys(data)
                .map(function (key) {
                    return key + '=' + data[key];
                })
                .join('&');

            return '/' + path + (query ? '?' + query : '');
        }

        createMappingRegex();

        return {
            fromUrl: fromUrl,
            toUrl: toUrl
        };
    };
});
/*ignore jslint end*/
;
/*global define,window,document,console*/
/*jslint todo:true*/
define('scalejs.routing-historyjs/router',[
    //'scalejs!core',
    './routeMapper'
], function (
    //core,
    routeMapper
) {
    'use strict';

    var routes = {},
        baseUrl = '';

    function addRoute(routeName, route) {
        var mapper = routeMapper(route);
        routes[routeName] = mapper;
    }

    function tryFromUrl(routeName, url) {
        var mapper,
            parsed;

        if (url.indexOf(baseUrl) < 0) { return; }

        url = url.substring(baseUrl.length);

        mapper = routes[routeName];
        if (mapper) {
            parsed = mapper.fromUrl(url);
            return parsed;
        }
    }

    function tryToUrl(routeName, data) {
        var mapper,
            url;

        mapper = routes[routeName];
        if (mapper) {
            url = mapper.toUrl(data);
            return baseUrl + url;
        }
    }

    function setBaseUrl(newBaseUrl) {
        baseUrl = newBaseUrl || '';
        baseUrl = baseUrl.replace(/\/*$/, '');
    }

    return {
        addRoute: addRoute,
        tryToUrl: tryToUrl,
        tryFromUrl: tryFromUrl,
        setBaseUrl: setBaseUrl
    };
});

//   Copyright 2011-2012 Jacob Beard, INFICON, and other SCION contributors
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

//UMD boilerplate - https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('scion-ng',factory);
    } else {
        // Browser globals (root is window)
        root.scion = factory();
  }
}(this, function () {

    "use strict";

    var STATE_TYPES = {
        BASIC: 0,
        COMPOSITE: 1,
        PARALLEL: 2,
        HISTORY: 3,
        INITIAL: 4,
        FINAL: 5
    };

    function initializeModel(rootState){
        var transitions = [], idToStateMap = {}, documentOrder = 0;


        //TODO: need to add fake ids to anyone that doesn't have them
        //FIXME: make this safer - break into multiple passes
        var idCount = {};

        function generateId(type){
            if(idCount[type] === undefined) idCount[type] = 0;

            var count = idCount[type]++;
            return '$generated-' + type + '-' + count; 
        }

        function wrapInFakeRootState(state){
            return {
                $deserializeDatamodel : state.$deserializeDatamodel || function(){},
                $serializeDatamodel : state.$serializeDatamodel || function(){ return null;},
                $idToStateMap : idToStateMap,   //keep this for handy deserialization of serialized configuration
                states : [
                    {
                        type : 'initial',
                        transitions : [{
                            target : state
                        }]
                    },
                    state
                ]
            };
        }

        function normalizeAction(stateOrTransition,actionProperty){
            var v = stateOrTransition[actionProperty];

            function normalize(o){
                if(typeof o === 'string'){
                    return eval(o);             //TODO: global eval
                }else if(typeof o === 'function'){
                    return o;
                }else{
                    throw new Error('Unrecognized type of object for actionProperty ' + actionProperty);
                }
            }

            if(v !== undefined) stateOrTransition[actionProperty] = Array.isArray(v) ?  v.map(normalize) : [normalize(v)];

        }

        function traverse(ancestors,state){

            //add to global transition and state id caches
            if(state.transitions) transitions.push.apply(transitions,state.transitions);

            //populate state id map
            if(state.id){
                if(idToStateMap[state.id]) throw new Error('Redefinition of state id ' + state.id);

                idToStateMap[state.id] = state;
            }

            //create a default type, just to normalize things
            //this way we can check for unsupported types below
            state.type = state.type || 'state';

            //add ancestors and depth properties
            state.ancestors = ancestors;
            state.depth = ancestors.length;
            state.parent = ancestors[0];

            //add some information to transitions
            state.transitions = state.transitions || [];
            state.transitions.forEach(function(transition){
                transition.documentOrder = documentOrder++; 
                transition.source = state;
            });

            var t2 = traverse.bind(null,[state].concat(ancestors));

            //recursive step
            if(state.states) state.states.forEach(t2);

            //setup fast state type
            switch(state.type){
                case 'parallel':
                    state.typeEnum = STATE_TYPES.PARALLEL;
                    break;
                case 'initial' : 
                    state.typeEnum = STATE_TYPES.INITIAL;
                    break;
                case 'history' :
                    state.typeEnum = STATE_TYPES.HISTORY;
                    break;
                case 'final' : 
                    state.typeEnum = STATE_TYPES.FINAL;
                    break;
                case 'state' : 
                case 'scxml' :
                    if(state.states && state.states.length){
                        state.typeEnum = STATE_TYPES.COMPOSITE;
                    }else{
                        state.typeEnum = STATE_TYPES.BASIC;
                    }
                    break;
                default :
                    throw new Error('Unknown state type: ' + state.type);
            }

            //descendants property on states will now be populated. add descendants to this state
            if(state.states){
                state.descendants = state.states.concat(state.states.map(function(s){return s.descendants;}).reduce(function(a,b){return a.concat(b);},[]));
            }else{
                state.descendants = [];
            }

            var initialChildren;
            if(state.typeEnum === STATE_TYPES.COMPOSITE){
                //set up initial state
                
                if(typeof state.initial === 'string'){
                    //dereference him from his 
                    initialChildren = state.states.filter(function(child){
                        return child.id === state.initial;
                    });
                    if(initialChildren.length){
                        state.initialRef = initialChildren[0];
                    } 
                }else{
                    //take the first child that has initial type, or first child
                    initialChildren = state.states.filter(function(child){
                        return child.type === 'initial';
                    });

                    state.initialRef = initialChildren.length ? initialChildren[0] : state.states[0];
                }

                if(!state.initialRef) throw new Error('Unable to locate initial state for composite state: ' + state.id);
            }

            //hook up history
            if(state.typeEnum === STATE_TYPES.COMPOSITE ||
                    state.typeEnum === STATE_TYPES.PARALLEL){

                var historyChildren = state.states.filter(function(s){
                    return s.type === 'history';
                }); 

               state.historyRef = historyChildren[0];
            }

            //now it's safe to fill in fake state ids
            if(!state.id){
                state.id = generateId(state.type);
                idToStateMap[state.id] = state;
            }

            //normalize onEntry/onExit, which can be single fn or array
            ['onEntry','onExit'].forEach(normalizeAction.bind(this,state));
        }

        //TODO: convert events to regular expressions in advance

        function connectTransitionGraph(){
            //normalize as with onEntry/onExit
            transitions.forEach(function(t){
               normalizeAction(t,'onTransition');
            });

            transitions.forEach(function(t){
                //normalize "event" attribute into "events" attribute
                if(t.event){
                    t.events = t.event.trim().split(/ +/);
                }
            });

            //hook up targets
            transitions.forEach(function(t){
                if(t.targets || (typeof t.target === 'undefined')) return;   //targets have already been set up

                if(typeof t.target === 'string'){
                    //console.log('here1');
                    var target = idToStateMap[t.target];
                    if(!target) throw new Error('Unable to find target state with id ' + t.target);
                    t.target = target;
                    t.targets = [t.target];
                }else if(Array.isArray(t.target)){
                    //console.log('here2');
                    t.targets = t.target.map(function(target){
                        if(typeof target === 'string'){
                            target = idToStateMap[target];
                            if(!target) throw new Error('Unable to find target state with id ' + t.target);
                            return target;
                        }else{
                            return target;
                        } 
                    }); 
                }else if(typeof t.target === 'object'){
                    t.targets = [t.target];
                }else{
                    throw new Error('Transition target has unknown type: ' + t.target);
                }
            });

            //hook up LCA - optimization
            transitions.forEach(function(t){
                if(t.targets) t.lcca = getLCCA(t.source,t.targets[0]);    //FIXME: we technically do not need to hang onto the lcca. only the scope is used by the algorithm

                t.scope = getScope(t);
                //console.log('scope',t.source.id,t.scope.id,t.targets);
            });
        }

        function getScope(transition){
            //Transition scope is normally the least common compound ancestor (lcca).
            //Internal transitions have a scope equal to the source state.

            var transitionIsReallyInternal = 
                    transition.type === 'internal' &&
                        transition.source.parent &&    //root state won't have parent
                            transition.targets && //does it target its descendants
                                transition.targets.every(
                                    function(target){ return transition.source.descendants.indexOf(target) > -1;});

            if(!transition.targets){
                return transition.source; 
            }else if(transitionIsReallyInternal){
                return transition.source; 
            }else{
                return transition.lcca;
            }
        }

        function getLCCA(s1, s2) {
            //console.log('getLCCA',s1, s2);
            var commonAncestors = [];
            s1.ancestors.forEach(function(anc){
                //console.log('s1.id',s1.id,'anc',anc.id,'anc.typeEnum',anc.typeEnum,'s2.id',s2.id);
                if(anc.typeEnum === STATE_TYPES.COMPOSITE &&
                    anc.descendants.indexOf(s2) > -1){
                    commonAncestors.push(anc);
                }
            });
            //console.log('commonAncestors',s1.id,s2.id,commonAncestors.map(function(s){return s.id;}));
            if(!commonAncestors.length) throw new Error("Could not find LCA for states.");
            return commonAncestors[0];
        }

        //main execution starts here
        //FIXME: only wrap in root state if it's not a compound state
        var fakeRootState = wrapInFakeRootState(rootState);  //I wish we had pointer semantics and could make this a C-style "out argument". Instead we return him
        traverse([],fakeRootState);
        connectTransitionGraph();

        return fakeRootState;
    }


    /* begin ArraySet */

    /** @constructor */
    function ArraySet(l) {
        l = l || [];
        this.o = [];
            
        l.forEach(function(x){
            this.add(x);
        },this);
    }

    ArraySet.prototype = {

        add : function(x) {
            if (!this.contains(x)) return this.o.push(x);
        },

        remove : function(x) {
            var i = this.o.indexOf(x);
            if(i === -1){
                return false;
            }else{
                this.o.splice(i, 1);
            }
            return true;
        },

        union : function(l) {
            l = l.iter ? l.iter() : l;
            l.forEach(function(x){
                this.add(x);
            },this);
            return this;
        },

        difference : function(l) {
            l = l.iter ? l.iter() : l;

            l.forEach(function(x){
                this.remove(x);
            },this);
            return this;
        },

        contains : function(x) {
            return this.o.indexOf(x) > -1;
        },

        iter : function() {
            return this.o;
        },

        isEmpty : function() {
            return !this.o.length;
        },

        equals : function(s2) {
            var l2 = s2.iter();
            var l1 = this.o;

            return l1.every(function(x){
                return l2.indexOf(x) > -1;
            }) && l2.every(function(x){
                return l1.indexOf(x) > -1;
            });
        },

        toString : function() {
            return "Set(" + this.o.toString() + ")";
        }
    };

    var scxmlPrefixTransitionSelector = (function(){

        var eventNameReCache = {};

        function eventNameToRe(name) {
            return new RegExp("^" + (name.replace(/\./g, "\\.")) + "(\\.[0-9a-zA-Z]+)*$");
        }

        function retrieveEventRe(name) {
            return eventNameReCache[name] ? eventNameReCache[name] : eventNameReCache[name] = eventNameToRe(name);
        }

        function nameMatch(t, event) {
            return event && event.name &&
                        (t.events.indexOf("*") > -1 ? 
                            true : 
                                t.events.filter(function(tEvent){
                                    return retrieveEventRe(tEvent).test(event.name);
                                }).length);

        }

        return function(state, event, evaluator) {
            return state.transitions.filter(function(t){
                return (!t.events || nameMatch(t,event)) && (!t.cond || evaluator(t.cond));
            });
        };
    })();

    //model accessor functions
    var query = {
        getAncestors: function(s, root) {
            var ancestors, index, state;
            index = s.ancestors.indexOf(root);
            if (index > -1) {
                return s.ancestors.slice(0, index);
            } else {
                return s.ancestors;
            }
        },
        /** @this {model} */
        getAncestorsOrSelf: function(s, root) {
            return [s].concat(this.getAncestors(s, root));
        },
        getDescendantsOrSelf: function(s) {
            return [s].concat(s.descendants);
        },
        /** @this {model} */
        isOrthogonalTo: function(s1, s2) {
            //Two control states are orthogonal if they are not ancestrally
            //related, and their smallest, mutual parent is a Concurrent-state.
            return !this.isAncestrallyRelatedTo(s1, s2) && this.getLCA(s1, s2).typeEnum === STATE_TYPES.PARALLEL;
        },
        /** @this {model} */
        isAncestrallyRelatedTo: function(s1, s2) {
            //Two control states are ancestrally related if one is child/grandchild of another.
            return this.getAncestorsOrSelf(s2).indexOf(s1) > -1 || this.getAncestorsOrSelf(s1).indexOf(s2) > -1;
        },
        /** @this {model} */
        getLCA: function(s1, s2) {
            var commonAncestors = this.getAncestors(s1).filter(function(a){
                return a.descendants.indexOf(s2) > -1;
            },this);
            return commonAncestors[0];
        }
    };
    
    //priority comparison functions
    function getTransitionWithHigherSourceChildPriority(_arg) {
        var t1 = _arg[0], t2 = _arg[1];
        //compare transitions based first on depth, then based on document order
        if (t1.source.depth < t2.source.depth) {
            return t2;
        } else if (t2.source.depth < t1.source.depth) {
            return t1;
        } else {
            if (t1.documentOrder < t2.documentOrder) {
                return t1;
            } else {
                return t2;
            }
        }
    }

    function initializeModelGeneratorFn(modelFn, opts, interpreter){

         opts.x =  opts.x || {};

        var args = ['x','sessionid','name','ioprocessors'].
                            map(function(name){ return opts.x['_' + name] = opts[name]; }).
                                concat(interpreter.isIn.bind(interpreter));

        //the "model" might be a function, so we lazy-init him here to get the root state
        return modelFn.apply(interpreter,args);
    }

    function deserializeSerializedConfiguration(serializedConfiguration,idToStateMap){
      return serializedConfiguration.map(function(id){
        var state = idToStateMap[id];
        if(!state) throw new Error('Error loading serialized configuration. Unable to locate state with id ' + id);
        return state;
      });
    }

    function deserializeHistory(serializedHistory,idToStateMap){
      var o = {};
      Object.keys(serializedHistory).forEach(function(sid){
        o[sid] = serializedHistory[sid].map(function(id){
          var state = idToStateMap[id];
          if(!state) throw new Error('Error loading serialized history. Unable to locate state with id ' + id);
          return state;
        });
      });
      return o;
    }
 
    /** @const */
    var printTrace = false;

    /** @constructor */
    function BaseInterpreter(modelOrFnGenerator, opts){

        this._scriptingContext = opts.interpreterScriptingContext || (opts.InterpreterScriptingContext ? new opts.InterpreterScriptingContext(this) : {}); 

        var model;
        if(typeof modelOrFnGenerator === 'function'){
            model = initializeModelGeneratorFn(modelOrFnGenerator, opts, this);
        }else if(typeof modelOrFnGenerator === 'string'){
            model = JSON.parse(modelOrFnGenerator);
        }else{
            model = modelOrFnGenerator;
        }

        this._model = initializeModel(model);

        //console.log(require('util').inspect(this._model,false,4));
       
        this.opts = opts || {};

        this.opts.console = opts.console || (typeof console === 'undefined' ? {log : function(){}} : console);   //rely on global console if this console is undefined
        this.opts.Set = this.opts.Set || ArraySet;
        this.opts.priorityComparisonFn = this.opts.priorityComparisonFn || getTransitionWithHigherSourceChildPriority;
        this.opts.transitionSelector = this.opts.transitionSelector || scxmlPrefixTransitionSelector;

        this._scriptingContext.log = this._scriptingContext.log || this.opts.console.log;   //set up default scripting context log function

        this._internalEventQueue = [];

        //check if we're loading from a previous snapshot
        if(opts.snapshot){
          this._configuration = new this.opts.Set(deserializeSerializedConfiguration(opts.snapshot[0], this._model.$idToStateMap));
          this._historyValue = deserializeHistory(opts.snapshot[1], this._model.$idToStateMap); 
          this._isInFinalState = opts.snapshot[2];
          this._model.$deserializeDatamodel(opts.snapshot[3]);   //load up the datamodel
        }else{
          this._configuration = new this.opts.Set();
          this._historyValue = {};
          this._isInFinalState = false;
        }

        //SCXML system variables:
        this._x = {
            _sessionId : opts.sessionId || null,
            _name : model.name || opts.name || null,
            _ioprocessors : opts.ioprocessors || null
        };

        this._listeners = [];
    }

    BaseInterpreter.prototype = {

        /** @expose */
        start : function() {
            //perform big step without events to take all default transitions and reach stable initial state
            if (printTrace) this.opts.console.log("performing initial big step");

            //We effectively need to figure out states to enter here to populate initial config. assuming root is compound state makes this simple.
            //but if we want it to be parallel, then this becomes more complex. so when initializing the model, we add a 'fake' root state, which
            //makes the following operation safe.
            this._configuration.add(this._model.initialRef);   

            this._performBigStep();
            return this.getConfiguration();
        },

        /** @expose */
        getConfiguration : function() {
            return this._configuration.iter().map(function(s){return s.id;});
        },

        /** @expose */
        getFullConfiguration : function() {
            return this._configuration.iter().
                    map(function(s){ return [s].concat(query.getAncestors(s));},this).
                    reduce(function(a,b){return a.concat(b);},[]).    //flatten
                    map(function(s){return s.id;}).
                    reduce(function(a,b){return a.indexOf(b) > -1 ? a : a.concat(b);},[]); //uniq
        },


        /** @expose */
        isIn : function(stateName) {
            return this.getFullConfiguration().indexOf(stateName) > -1;
        },

        /** @expose */
        isFinal : function(stateName) {
            return this._isInFinalState;
        },

        /** @private */
        _performBigStep : function(e) {
            if (e) this._internalEventQueue.push(e);
            var keepGoing = true;
            while (keepGoing) {
                var currentEvent = this._internalEventQueue.shift() || null;

                var selectedTransitions = this._performSmallStep(currentEvent);
                keepGoing = !selectedTransitions.isEmpty();
            }
            this._isInFinalState = this._configuration.iter().every(function(s){ return s.typeEnum === STATE_TYPES.FINAL; });
        },

        /** @private */
        _performSmallStep : function(currentEvent) {

            if (printTrace) this.opts.console.log("selecting transitions with currentEvent: ", currentEvent);

            var selectedTransitions = this._selectTransitions(currentEvent);

            if (printTrace) this.opts.console.log("selected transitions: ", selectedTransitions);

            if (!selectedTransitions.isEmpty()) {

                if (printTrace) this.opts.console.log("sorted transitions: ", selectedTransitions);

                //we only want to enter and exit states from transitions with targets
                //filter out targetless transitions here - we will only use these to execute transition actions
                var selectedTransitionsWithTargets = new this.opts.Set(selectedTransitions.iter().filter(function(t){return t.targets;}));

                var exitedTuple = this._getStatesExited(selectedTransitionsWithTargets), 
                    basicStatesExited = exitedTuple[0], 
                    statesExited = exitedTuple[1];

                var enteredTuple = this._getStatesEntered(selectedTransitionsWithTargets), 
                    basicStatesEntered = enteredTuple[0], 
                    statesEntered = enteredTuple[1];

                if (printTrace) this.opts.console.log("basicStatesExited ", basicStatesExited);
                if (printTrace) this.opts.console.log("basicStatesEntered ", basicStatesEntered);
                if (printTrace) this.opts.console.log("statesExited ", statesExited);
                if (printTrace) this.opts.console.log("statesEntered ", statesEntered);

                var eventsToAddToInnerQueue = new this.opts.Set();

                //update history states
                if (printTrace) this.opts.console.log("executing state exit actions");

                var evaluateAction = this._evaluateAction.bind(this, currentEvent);        //create helper fn that actions can call later on

                statesExited.forEach(function(state){

                    if (printTrace || this.opts.logStatesEnteredAndExited) this.opts.console.log("exiting ", state.id);

                    //invoke listeners
                    this._listeners.forEach(function(l){
                       if(l.onExit) l.onExit(state.id); 
                    });

                    if(state.onExit !== undefined) state.onExit.forEach(evaluateAction);

                    var f;
                    if (state.historyRef) {
                        if (state.historyRef.isDeep) {
                            f = function(s0) {
                                return s0.typeEnum === STATE_TYPES.BASIC && state.descendants.indexOf(s0) > -1;
                            };
                        } else {
                            f = function(s0) {
                                return s0.parent === state;
                            };
                        }
                        //update history
                        this._historyValue[state.historyRef.id] = statesExited.filter(f);
                    }
                },this);


                // -> Concurrency: Number of transitions: Multiple
                // -> Concurrency: Order of transitions: Explicitly defined
                var sortedTransitions = selectedTransitions.iter().sort(function(t1, t2) {
                    return t1.documentOrder - t2.documentOrder;
                });

                if (printTrace) this.opts.console.log("executing transitition actions");


                sortedTransitions.forEach(function(transition){

                    var targetIds = transition.targets && transition.targets.map(function(target){return target.id;});

                    this._listeners.forEach(function(l){
                       if(l.onTransition) l.onTransition(transition.source.id,targetIds); 
                    });

                    if(transition.onTransition !== undefined) transition.onTransition.forEach(evaluateAction);
                },this);
     
                if (printTrace) this.opts.console.log("executing state enter actions");

                statesEntered.forEach(function(state){

                    if (printTrace || this.opts.logStatesEnteredAndExited) this.opts.console.log("entering", state.id);

                    this._listeners.forEach(function(l){
                       if(l.onEntry) l.onEntry(state.id); 
                    });

                    if(state.onEntry !== undefined) state.onEntry.forEach(evaluateAction);
                },this);

                if (printTrace) this.opts.console.log("updating configuration ");
                if (printTrace) this.opts.console.log("old configuration ", this._configuration);

                //update configuration by removing basic states exited, and adding basic states entered
                this._configuration.difference(basicStatesExited);
                this._configuration.union(basicStatesEntered);


                if (printTrace) this.opts.console.log("new configuration ", this._configuration);
                
                //add set of generated events to the innerEventQueue -> Event Lifelines: Next small-step
                if (!eventsToAddToInnerQueue.isEmpty()) {
                    if (printTrace) this.opts.console.log("adding triggered events to inner queue ", eventsToAddToInnerQueue);
                    this._internalEventQueue.push(eventsToAddToInnerQueue);
                }

            }

            //if selectedTransitions is empty, we have reached a stable state, and the big-step will stop, otherwise will continue -> Maximality: Take-Many
            return selectedTransitions;
        },

        /** @private */
        _evaluateAction : function(currentEvent, actionRef) {
            return actionRef.call(this._scriptingContext, currentEvent);     //SCXML system variables
        },

        /** @private */
        _getStatesExited : function(transitions) {
            var statesExited = new this.opts.Set();
            var basicStatesExited = new this.opts.Set();

            //States exited are defined to be active states that are
            //descendants of the scope of each priority-enabled transition.
            //Here, we iterate through the transitions, and collect states
            //that match this condition. 
            transitions.iter().forEach(function(transition){
                var scope = transition.scope,
                    desc = scope.descendants;

                //For each state in the configuration
                //is that state a descendant of the transition scope?
                //Store ancestors of that state up to but not including the scope.
                this._configuration.iter().forEach(function(state){
                    if(desc.indexOf(state) > -1){
                        basicStatesExited.add(state);
                        statesExited.add(state);
                        query.getAncestors(state,scope).forEach(function(anc){
                            statesExited.add(anc);
                        });
                    }
                },this);
            },this);

            var sortedStatesExited = statesExited.iter().sort(function(s1, s2) {
                return s2.depth - s1.depth;
            });
            return [basicStatesExited, sortedStatesExited];
        },

        /** @private */
        _getStatesEntered : function(transitions) {

            var o = {
                statesToEnter : new this.opts.Set(),
                basicStatesToEnter : new this.opts.Set(),
                statesProcessed  : new this.opts.Set(),
                statesToProcess : []
            };

            //do the initial setup
            transitions.iter().forEach(function(transition){
                transition.targets.forEach(function(target){
                    this._addStateAndAncestors(target,transition.scope,o);
                },this);
            },this);

            //loop and add states until there are no more to add (we reach a stable state)
            var s;
            /*jsl:ignore*/
            while(s = o.statesToProcess.pop()){
                /*jsl:end*/
                this._addStateAndDescendants(s,o);
            }

            //sort based on depth
            var sortedStatesEntered = o.statesToEnter.iter().sort(function(s1, s2) {
                return s1.depth - s2.depth;
            });

            return [o.basicStatesToEnter, sortedStatesEntered];
        },

        /** @private */
        _addStateAndAncestors : function(target,scope,o){

            //process each target
            this._addStateAndDescendants(target,o);

            //and process ancestors of targets up to the scope, but according to special rules
            query.getAncestors(target,scope).forEach(function(s){

                if (s.typeEnum === STATE_TYPES.COMPOSITE) {
                    //just add him to statesToEnter, and declare him processed
                    //this is to prevent adding his initial state later on
                    o.statesToEnter.add(s);

                    o.statesProcessed.add(s);
                }else{
                    //everything else can just be passed through as normal
                    this._addStateAndDescendants(s,o);
                } 
            },this);
        },

        /** @private */
        _addStateAndDescendants : function(s,o){

            if(o.statesProcessed.contains(s)) return;

            if (s.typeEnum === STATE_TYPES.HISTORY) {
                if (s.id in this._historyValue) {
                    this._historyValue[s.id].forEach(function(stateFromHistory){
                        this._addStateAndAncestors(stateFromHistory,s.parent,o);
                    },this);
                } else {
                    o.statesToEnter.add(s);
                    o.basicStatesToEnter.add(s);
                }
            } else {
                o.statesToEnter.add(s);

                if (s.typeEnum === STATE_TYPES.PARALLEL) {
                    o.statesToProcess.push.apply(o.statesToProcess,
                        s.states.filter(function(s){return s.typeEnum !== STATE_TYPES.HISTORY;}));
                } else if (s.typeEnum === STATE_TYPES.COMPOSITE) {
                    o.statesToProcess.push(s.initialRef); 
                } else if (s.typeEnum === STATE_TYPES.INITIAL || s.typeEnum === STATE_TYPES.BASIC || s.typeEnum === STATE_TYPES.FINAL) {
                    o.basicStatesToEnter.add(s);
                }
            }

            o.statesProcessed.add(s); 
        },

        /** @private */
        _selectTransitions : function(currentEvent) {
            if (this.opts.onlySelectFromBasicStates) {
                var states = this._configuration.iter();
            } else {
                var statesAndParents = new this.opts.Set;

                //get full configuration, unordered
                //this means we may select transitions from parents before states
                
                this._configuration.iter().forEach(function(basicState){
                    statesAndParents.add(basicState);
                    query.getAncestors(basicState).forEach(function(ancestor){
                        statesAndParents.add(ancestor);
                    });
                },this);

                states = statesAndParents.iter();
            }

            

            var usePrefixMatchingAlgorithm = currentEvent && currentEvent.name && currentEvent.name.search(".");

            var transitionSelector = usePrefixMatchingAlgorithm ? scxmlPrefixTransitionSelector : this.opts.transitionSelector;
            var enabledTransitions = new this.opts.Set();

            var e = this._evaluateAction.bind(this,currentEvent);

            states.forEach(function(state){
                transitionSelector(state,currentEvent,e).forEach(function(t){
                    enabledTransitions.add(t);
                });
            });

            var priorityEnabledTransitions = this._selectPriorityEnabledTransitions(enabledTransitions);

            if (printTrace) this.opts.console.log("priorityEnabledTransitions", priorityEnabledTransitions);
            
            return priorityEnabledTransitions;
        },

        /** @private */
        _selectPriorityEnabledTransitions : function(enabledTransitions) {
            var priorityEnabledTransitions = new this.opts.Set();

            var tuple = this._getInconsistentTransitions(enabledTransitions), 
                consistentTransitions = tuple[0], 
                inconsistentTransitionsPairs = tuple[1];

            priorityEnabledTransitions.union(consistentTransitions);

            if (printTrace) this.opts.console.log("enabledTransitions", enabledTransitions);
            if (printTrace) this.opts.console.log("consistentTransitions", consistentTransitions);
            if (printTrace) this.opts.console.log("inconsistentTransitionsPairs", inconsistentTransitionsPairs);
            if (printTrace) this.opts.console.log("priorityEnabledTransitions", priorityEnabledTransitions);
            
            while (!inconsistentTransitionsPairs.isEmpty()) {
                enabledTransitions = new this.opts.Set(
                        inconsistentTransitionsPairs.iter().map(function(t){return this.opts.priorityComparisonFn(t);},this));

                tuple = this._getInconsistentTransitions(enabledTransitions);
                consistentTransitions = tuple[0]; 
                inconsistentTransitionsPairs = tuple[1];

                priorityEnabledTransitions.union(consistentTransitions);

                if (printTrace) this.opts.console.log("enabledTransitions", enabledTransitions);
                if (printTrace) this.opts.console.log("consistentTransitions", consistentTransitions);
                if (printTrace) this.opts.console.log("inconsistentTransitionsPairs", inconsistentTransitionsPairs);
                if (printTrace) this.opts.console.log("priorityEnabledTransitions", priorityEnabledTransitions);
                
            }
            return priorityEnabledTransitions;
        },

        /** @private */
        _getInconsistentTransitions : function(transitions) {
            var allInconsistentTransitions = new this.opts.Set();
            var inconsistentTransitionsPairs = new this.opts.Set();
            var transitionList = transitions.iter();

            if (printTrace) this.opts.console.log("transitions", transitionList);

            for(var i = 0; i < transitionList.length; i++){
                for(var j = i+1; j < transitionList.length; j++){
                    var t1 = transitionList[i];
                    var t2 = transitionList[j];
                    if (this._conflicts(t1, t2)) {
                        allInconsistentTransitions.add(t1);
                        allInconsistentTransitions.add(t2);
                        inconsistentTransitionsPairs.add([t1, t2]);
                    }
                }
            }

            var consistentTransitions = transitions.difference(allInconsistentTransitions);
            return [consistentTransitions, inconsistentTransitionsPairs];
        },

        /** @private */
        _conflicts : function(t1, t2) {
            return !this._isArenaOrthogonal(t1, t2);
        },

        /** @private */
        _isArenaOrthogonal : function(t1, t2) {

            if (printTrace) this.opts.console.log("transition scopes", t1.scope, t2.scope);

            var isOrthogonal = query.isOrthogonalTo(t1.scope, t2.scope);

            if (printTrace) this.opts.console.log("transition scopes are orthogonal?", isOrthogonal);

            return isOrthogonal;
        },


        /*
            registerListener provides a generic mechanism to subscribe to state change notifications.
            Can be used for logging and debugging. For example, can attache a logger that simply logs the state changes.
            Or can attach a network debugging client that sends state change notifications to a debugging server.
        
            listener is of the form:
            {
              onEntry : function(stateId){},
              onExit : function(stateId){},
              onTransition : function(sourceStateId,targetStatesIds[]){}
            }
        */
        //TODO: refactor this to be event emitter? 

        /** @expose */
        registerListener : function(listener){
            return this._listeners.push(listener);
        },

        /** @expose */
        unregisterListener : function(listener){
            return this._listeners.splice(this._listeners.indexOf(listener),1);
        },

        /** @expose */
        getAllTransitionEvents : function(){
            var events = {};
            function getEvents(state){

                if(state.transitions){
                    state.transitions.forEach(function(transition){
                        events[transition.event] = true;
                    });
                }

                if(state.states) state.states.forEach(getEvents);
            }
            getEvents(this._model);

            return Object.keys(events);
        },

        
        /** @expose */
        /**
          Three things capture the current snapshot of a running SCION interpreter:

          * basic configuration (the set of basic states the state machine is in)
          * history state values (the states the state machine was in last time it was in the parent of a history state)
          * the datamodel
          
          Note that this assumes that the method to serialize a scion.SCXML
          instance is not called when the interpreter is executing a big-step (e.g. after
          scion.SCXML.prototype.gen is called, and before the call to gen returns). If
          the serialization method is called during the execution of a big-step, then the
          inner event queue must also be saved. I do not expect this to be a common
          requirement however, and therefore I believe it would be better to only support
          serialization when the interpreter is not executing a big-step.
        */
        getSnapshot : function(){
          if(this._isStepping) throw new Error('getSnapshot cannot be called while interpreter is executing a big-step');


          return [
            this.getConfiguration(),
            this._serializeHistory(),
            this._isInFinalState,
            this._model.$serializeDatamodel()
          ];
        },

        _serializeHistory : function(){
          var o = {};
          Object.keys(this._historyValue).forEach(function(sid){
            o[sid] = this._historyValue[sid].map(function(state){return state.id});
          },this);
          return o;
        }
    };

    /**
     * @constructor
     * @extends BaseInterpreter
     */
    function Statechart(model, opts) {
        opts = opts || {};

        opts.InterpreterScriptingContext = opts.InterpreterScriptingContext || InterpreterScriptingContext;

        this._isStepping = false;
        this._externalEventQueue = [];

        BaseInterpreter.call(this,model,opts);     //call super constructor
    }

    function beget(o){
        function F(){}
        F.prototype = o;
        return new F();
    }

    //Statechart.prototype = Object.create(BaseInterpreter.prototype);
    //would like to use Object.create here, but not portable, but it's too complicated to use portably
    Statechart.prototype = beget(BaseInterpreter.prototype);    

    /** @expose */
    Statechart.prototype.gen = function(evtObjOrName,optionalData) {

        var e;
        switch(typeof evtObjOrName){
            case 'string':
                e = {name : evtObjOrName, data : optionalData};
                break;
            case 'object':
                if(typeof evtObjOrName.name === 'string'){
                    e = evtObjOrName;
                }else{
                    throw new Error('Event object must have "name" property of type string.');
                }
                break;
            default:
                throw new Error('First argument to gen must be a string or object.');
        }

        this._externalEventQueue.push(e);

        if(this._isStepping) return null;       //we're already looping, we can exit and we'll process this event when the next big-step completes

        //otherwise, kick him off
        this._isStepping = true;

        var currentEvent;
        /*jsl:ignore*/
        while(currentEvent = this._externalEventQueue.shift()){
        /*jsl:end*/
            this._performBigStep(currentEvent);
        }

        this._isStepping = false;
        return this.getConfiguration();
    };

    function InterpreterScriptingContext(interpreter){
        this._interpreter = interpreter;
        this._timeoutMap = {};
    }

    //TODO: consider whether this is the API we would like to expose
    InterpreterScriptingContext.prototype = {
        raise : function(event){
            this._interpreter._internalEventQueue.push(event); 
        },
        send : function(event, options){
            if(options.delay === undefined){
                this.gen(event);
            }else{
                if( typeof setTimeout === 'undefined' ) throw new Error('Default implementation of Statechart.prototype.send will not work unless setTimeout is defined globally.');

                if (printTrace) this._interpreter.opts.log("sending event", event.name, "with content", event.data, "after delay", options.delay);

                var timeoutId = setTimeout(this._interpreter.gen.bind(this._interpreter,event), options.delay || 0);

                if (options.sendid) this._timeoutMap[options.sendid] = timeoutId;
            }
        },
        cancel : function(sendid){

            if( typeof clearTimeout === 'undefined' ) throw new Error('Default implementation of Statechart.prototype.cancel will not work unless setTimeout is defined globally.');

            if (sendid in this._timeoutMap) {
                if (printTrace) this._interpreter.opts.log("cancelling ", sendid, " with timeout id ", this._timeoutMap[sendid]);
                clearTimeout(this._timeoutMap[sendid]);
            }
        }

    };

    return {
        /** @expose */
        BaseInterpreter: BaseInterpreter,
        /** @expose */
        Statechart: Statechart,
        /** @expose */
        ArraySet : ArraySet,
        /** @expose */
        STATE_TYPES : STATE_TYPES,
        /** @expose */
        initializeModel : initializeModel,
        /** @expose */
        InterpreterScriptingContext : InterpreterScriptingContext
    };
}));

define("scalejs.functional/functional",[],function(){function a(){var a=Array.prototype.slice.call(arguments,0).reverse();return function(){var b=a.reduce(function(a,b){return[b.apply(void 0,a)]},Array.prototype.slice.call(arguments));return b[0]}}function b(){var a=Array.prototype.slice.call(arguments,0);return function(){var b=a.reduce(function(a,b){return[b.apply(void 0,a)]},Array.prototype.slice.call(arguments,0));return b[0]}}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return b.apply(a,c.concat(Array.prototype.slice.call(arguments,0)))}}function d(a,b){return function(){return a.apply(void 0,Array.prototype.slice.call(arguments,0,b))}}function e(){var a=Array.prototype.slice.call(arguments,0),b=a.reduce(function(a,b,c){return b===g?a.concat([c]):a},[]);return 0===b.length?a[0].apply(void 0,a.slice(1)):function(){var c;for(c=0;c<Math.min(b.length,arguments.length);c+=1)a[b[c]]=arguments[c];return e.apply(void 0,a)}}var f,g={};return f=function(a,b){if(1===arguments.length)return f(a,a.length);var c=Array.prototype.slice.call(arguments,2);return c.length>=b?a.apply(this,c):function(){var d=c.concat(Array.prototype.slice.call(arguments,0));return d.unshift(a,b),f.apply(this,d)}},{_:g,compose:a,sequence:b,bind:c,aritize:d,curry:f,partial:e}}),define("scalejs.functional/builder",[],function(){function a(a){var b,c,d,e;return d=function(a){if(!a||"$"!==a.kind)return a;if("function"==typeof a.expr)return a.expr.call(this);if("string"==typeof a.expr)return this[a.expr];throw new Error("Parameter in $(...) must be either a function or a string referencing a binding.")},e=function(a,e,f){function g(a){return"$return"===a||"$RETURN"===a||"$yield"===a||"$YIELD"===a}if("function"!=typeof c[a]&&"$then"!==a&&"$else"!==a)throw new Error("This control construct may only be used if the computation expression builder defines a `"+a+"` method.");var h,i=d(e);if(f.length>0&&"function"!=typeof c.combine)throw new Error("This control construct may only be used if the computation expression builder defines a `combine` method.");if(g(a)){if(0===f.length)return c[a](i);if("function"!=typeof c.delay)throw new Error("This control construct may only be used if the computation expression builder defines a `delay` method.");return c.combine(c[a](i),c.delay(function(){return b(f)}))}if("$for"===a)return c.combine(c.$for(e.items,function(a){var c=Array.prototype.slice.call(e.cexpr);return this[e.name]=a,b(c)}),b(f));if("$while"===a){if("function"!=typeof c.delay)throw new Error("This control construct may only be used if the computation expression builder defines a `delay` method.");return i=c.$while(e.condition.bind(this),c.delay(function(){var a=Array.prototype.slice.call(e.cexpr);return b(a)})),f.length>0?c.combine(i,b(f)):i}return"$then"===a||"$else"===a?(h=Array.prototype.slice.call(e.cexpr),c.combine(b(h),f)):c.combine(c[a](i),b(f))},a.missing||(a.missing=function(a){if(a.kind)throw new Error('Unknown operation "'+a.kind+'". Either define `missing` method on the builder or fix the spelling of the operation.');throw new Error("Expression "+JSON.stringify(a)+" cannot be processed. Either define `missing` method on the builder or convert expression to a function.")}),b=function(a){var f;if(a=Array.prototype.slice.call(a),0===a.length){if(c.zero)return c.zero();throw new Error("Computation expression builder must define `zero` method.")}if(f=a.shift(),"let"===f.kind)return this[f.name]=d(f.expr),b.call(this,a);if("do"===f.kind)return f.expr.call(this),b.call(this,a);if("letBind"===f.kind)return c.bind(f.expr.bind(this),function(c){return this[f.name]=c,b.call(this,a)}.bind(this));if("doBind"===f.kind||"$"===f.kind){if(a.length>0)return c.bind(f.expr.bind(this),function(){return b.call(this,a)}.bind(this));if("function"!=typeof c.$return)throw new Error("This control construct may only be used if the computation expression builder defines a `$return` method.");return c.bind(f.expr.bind(this),function(a){return c.$return(a)})}return"$return"===f.kind||"$RETURN"===f.kind||"$yield"===f.kind||"$YIELD"===f.kind?e(f.kind,f.expr,a):"$for"===f.kind||"$while"===f.kind?e(f.kind,f,a):"$if"===f.kind?f.condition.call(this)?e("$then",f.thenExpr,a):f.elseExpr?e("$else",f.elseExpr,a):e(b([]),a):"function"==typeof f&&c.call?(c.call(this),b.call(this,a)):"function"==typeof f?(f.call(this),b.call(this,a)):e("missing",f,a)},function(){function d(){var a={mixins:Array.prototype.slice.call(arguments,0)},b=f.bind(a);return b.mixin=function(){return Array.prototype.push.apply(a.mixins,arguments),b},b}var e=Array.prototype.slice.call(arguments),f=function(){var d,f,g,h=Array.prototype.slice.call(arguments,0);return c={},Object.keys(a).forEach(function(b){c[b]=a[b]}),this.mixins&&this.mixins.forEach(function(a){a.beforeBuild&&a.beforeBuild(h)}),g=function(){return b.call(this,h)},c.run||c.delay?(c.delay&&(f=g,g=function(){return c.delay(f)}),d=g(),c.run&&(d=c.run.apply(c,[d].concat(e)))):d=g(),this.mixins&&this.mixins.forEach(function(a){a.afterBuild&&(d=a.afterBuild(d))}),d};return f.mixin=d,f}}return a.$let=function(a,b){return{kind:"let",name:a,expr:b}},a.$LET=function(a,b){return{kind:"letBind",name:a,expr:b}},a.$do=function(a){return{kind:"do",expr:a}},a.$DO=function(a){return{kind:"doBind",expr:a}},a.$return=function(a){return{kind:"$return",expr:a}},a.$RETURN=function(a){return{kind:"$RETURN",expr:a}},a.$yield=function(a){return{kind:"$yield",expr:a}},a.$YIELD=function(a){return{kind:"$YIELD",expr:a}},a.$for=function(a,b){var c=Array.prototype.slice.call(arguments,2);return{kind:"$for",name:a,items:b,cexpr:c}},a.$while=function(a){if(arguments.length<2)throw new Error('Incomplete `while`. Expected "$while(<condition>, <expr>)".');var b=Array.prototype.slice.call(arguments,1);return{kind:"$while",condition:a,cexpr:b}},a.$if=function(a,b,c){if(arguments.length<2)throw new Error('Incomplete conditional. Expected "$if(<expr>, $then(expr))" or "$if(<expr>, $then(<expr>), $else(<expr>)"');if("function"!=typeof a)throw new Error("First argument must be a function that defines the condition of $if.");if("$then"!==b.kind)throw new Error('Unexpected "'+b.kind+'" in the place of "$then"');if(c&&"$else"!==c.kind)throw new Error('Unexpected "'+c.kind+'" in the place of "$else"');return{kind:"$if",condition:a,thenExpr:b,elseExpr:c}},a.$then=function(){var a=Array.prototype.slice.call(arguments,0);if(0===a.length)throw new Error("$then should contain at least one expression.");return{kind:"$then",cexpr:a}},a.$else=function(){var a=Array.prototype.slice.call(arguments,0);if(0===a.length)throw new Error("$else should contain at least one expression.");return{kind:"$else",cexpr:a}},a.$=function(a){return{kind:"$",expr:a}},a}),define("scalejs.functional/continuationBuilder",["./builder"],function(a){var b,c;return b=a({bind:function(a,b){return function(c,d){a(function(a){var e=b(a);return e(c,d)},d)}},$return:function(a){return function(b){b&&("function"==typeof a&&(a=a()),b(a))}},delay:function(a){return a},run:function(a){return function(b,c){var d=a.call(this);d.call(this,b,c)}}}),c=b().mixin({beforeBuild:function(b){b.forEach(function(c,d){"function"==typeof c&&(b[d]=a.$DO(c))})}})}),define("scalejs.functional",["scalejs!core","./scalejs.functional/functional","./scalejs.functional/builder","./scalejs.functional/continuationBuilder"],function(a,b,c,d){var e=a.object.merge;a.registerExtension({functional:e(b,{builder:c,builders:{continuation:d}})})});
/*--------------------------------------------------------------------------
 * linq.js - LINQ for JavaScript
 * ver 3.0.4-Beta5 (Jun. 20th, 2013)
 *
 * created and maintained by neuecc <ils@neue.cc>
 * licensed under MIT License
 * http://linqjs.codeplex.com/
 *------------------------------------------------------------------------*/

(function (root, undefined) {
    // ReadOnly Function
    var Functions = {
        Identity: function (x) { return x; },
        True: function () { return true; },
        Blank: function () { }
    };

    // const Type
    var Types = {
        Boolean: typeof true,
        Number: typeof 0,
        String: typeof "",
        Object: typeof {},
        Undefined: typeof undefined,
        Function: typeof function () { }
    };

    // createLambda cache
    var funcCache = { "": Functions.Identity };

    // private utility methods
    var Utils = {
        // Create anonymous function from lambda expression string
        createLambda: function (expression) {
            if (expression == null) return Functions.Identity;
            if (typeof expression === Types.String) {
                // get from cache
                var f = funcCache[expression];
                if (f != null) {
                    return f;
                }

                if (expression.indexOf("=>") === -1) {
                    var regexp = new RegExp("[$]+", "g");

                    var maxLength = 0;
                    var match;
                    while ((match = regexp.exec(expression)) != null) {
                        var paramNumber = match[0].length;
                        if (paramNumber > maxLength) {
                            maxLength = paramNumber;
                        }
                    }

                    var argArray = [];
                    for (var i = 1; i <= maxLength; i++) {
                        var dollar = "";
                        for (var j = 0; j < i; j++) {
                            dollar += "$";
                        }
                        argArray.push(dollar);
                    }

                    var args = Array.prototype.join.call(argArray, ",");

                    f = new Function(args, "return " + expression);
                    funcCache[expression] = f;
                    return f;
                }
                else {
                    var expr = expression.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
                    f = new Function(expr[1], "return " + expr[2]);
                    funcCache[expression] = f;
                    return f;
                }
            }
            return expression;
        },

        isIEnumerable: function (obj) {
            if (typeof Enumerator !== Types.Undefined) {
                try {
                    new Enumerator(obj); // check JScript(IE)'s Enumerator
                    return true;
                }
                catch (e) { }
            }

            return false;
        },

        // IE8's defineProperty is defined but cannot use, therefore check defineProperties
        defineProperty: (Object.defineProperties != null)
            ? function (target, methodName, value) {
                Object.defineProperty(target, methodName, {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: value
                })
            }
            : function (target, methodName, value) {
                target[methodName] = value;
            },

        compare: function (a, b) {
            return (a === b) ? 0
                 : (a > b) ? 1
                 : -1;
        },

        dispose: function (obj) {
            if (obj != null) obj.dispose();
        }
    };

    // IEnumerator State
    var State = { Before: 0, Running: 1, After: 2 };

    // "Enumerator" is conflict JScript's "Enumerator"
    var IEnumerator = function (initialize, tryGetNext, dispose) {
        var yielder = new Yielder();
        var state = State.Before;

        this.current = yielder.current;

        this.moveNext = function () {
            try {
                switch (state) {
                    case State.Before:
                        state = State.Running;
                        initialize();
                        // fall through
                    case State.Running:
                        if (tryGetNext.apply(yielder)) {
                            return true;
                        }
                        else {
                            this.dispose();
                            return false;
                        }
                    case State.After:
                        return false;
                }
            }
            catch (e) {
                this.dispose();
                throw e;
            }
        };

        this.dispose = function () {
            if (state != State.Running) return;

            try {
                dispose();
            }
            finally {
                state = State.After;
            }
        };
    };

    // for tryGetNext
    var Yielder = function () {
        var current = null;
        this.current = function () { return current; };
        this.yieldReturn = function (value) {
            current = value;
            return true;
        };
        this.yieldBreak = function () {
            return false;
        };
    };

    // Enumerable constuctor
    var Enumerable = function (getEnumerator) {
        this.getEnumerator = getEnumerator;
    };

    // Utility

    Enumerable.Utils = {}; // container

    Enumerable.Utils.createLambda = function (expression) {
        return Utils.createLambda(expression);
    };

    Enumerable.Utils.createEnumerable = function (getEnumerator) {
        return new Enumerable(getEnumerator);
    };

    Enumerable.Utils.createEnumerator = function (initialize, tryGetNext, dispose) {
        return new IEnumerator(initialize, tryGetNext, dispose);
    };

    Enumerable.Utils.extendTo = function (type) {
        var typeProto = type.prototype;
        var enumerableProto;

        if (type === Array) {
            enumerableProto = ArrayEnumerable.prototype;
            Utils.defineProperty(typeProto, "getSource", function () {
                return this;
            });
        }
        else {
            enumerableProto = Enumerable.prototype;
            Utils.defineProperty(typeProto, "getEnumerator", function () {
                return Enumerable.from(this).getEnumerator();
            });
        }

        for (var methodName in enumerableProto) {
            var func = enumerableProto[methodName];

            // already extended
            if (typeProto[methodName] == func) continue;

            // already defined(example Array#reverse/join/forEach...)
            if (typeProto[methodName] != null) {
                methodName = methodName + "ByLinq";
                if (typeProto[methodName] == func) continue; // recheck
            }

            if (func instanceof Function) {
                Utils.defineProperty(typeProto, methodName, func);
            }
        }
    };

    // Generator

    Enumerable.choice = function () // variable argument
    {
        var args = arguments;

        return new Enumerable(function () {
            return new IEnumerator(
                function () {
                    args = (args[0] instanceof Array) ? args[0]
                        : (args[0].getEnumerator != null) ? args[0].toArray()
                        : args;
                },
                function () {
                    return this.yieldReturn(args[Math.floor(Math.random() * args.length)]);
                },
                Functions.Blank);
        });
    };

    Enumerable.cycle = function () // variable argument
    {
        var args = arguments;

        return new Enumerable(function () {
            var index = 0;
            return new IEnumerator(
                function () {
                    args = (args[0] instanceof Array) ? args[0]
                        : (args[0].getEnumerator != null) ? args[0].toArray()
                        : args;
                },
                function () {
                    if (index >= args.length) index = 0;
                    return this.yieldReturn(args[index++]);
                },
                Functions.Blank);
        });
    };

    Enumerable.empty = function () {
        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () { return false; },
                Functions.Blank);
        });
    };

    Enumerable.from = function (obj) {
        if (obj == null) {
            return Enumerable.empty();
        }
        if (obj instanceof Enumerable) {
            return obj;
        }
        if (typeof obj == Types.Number || typeof obj == Types.Boolean) {
            return Enumerable.repeat(obj, 1);
        }
        if (typeof obj == Types.String) {
            return new Enumerable(function () {
                var index = 0;
                return new IEnumerator(
                    Functions.Blank,
                    function () {
                        return (index < obj.length) ? this.yieldReturn(obj.charAt(index++)) : false;
                    },
                    Functions.Blank);
            });
        }
        if (typeof obj != Types.Function) {
            // array or array like object
            if (typeof obj.length == Types.Number) {
                return new ArrayEnumerable(obj);
            }

            // JScript's IEnumerable
            if (!(obj instanceof Object) && Utils.isIEnumerable(obj)) {
                return new Enumerable(function () {
                    var isFirst = true;
                    var enumerator;
                    return new IEnumerator(
                        function () { enumerator = new Enumerator(obj); },
                        function () {
                            if (isFirst) isFirst = false;
                            else enumerator.moveNext();

                            return (enumerator.atEnd()) ? false : this.yieldReturn(enumerator.item());
                        },
                        Functions.Blank);
                });
            }

            // WinMD IIterable<T>
            if (typeof Windows === Types.Object && typeof obj.first === Types.Function) {
                return new Enumerable(function () {
                    var isFirst = true;
                    var enumerator;
                    return new IEnumerator(
                        function () { enumerator = obj.first(); },
                        function () {
                            if (isFirst) isFirst = false;
                            else enumerator.moveNext();

                            return (enumerator.hasCurrent) ? this.yieldReturn(enumerator.current) : this.yieldBreak();
                        },
                        Functions.Blank);
                });
            }
        }

        // case function/object : Create keyValuePair[]
        return new Enumerable(function () {
            var array = [];
            var index = 0;

            return new IEnumerator(
                function () {
                    for (var key in obj) {
                        var value = obj[key];
                        if (!(value instanceof Function) && Object.prototype.hasOwnProperty.call(obj, key)) {
                            array.push({ key: key, value: value });
                        }
                    }
                },
                function () {
                    return (index < array.length)
                        ? this.yieldReturn(array[index++])
                        : false;
                },
                Functions.Blank);
        });
    },

    Enumerable.make = function (element) {
        return Enumerable.repeat(element, 1);
    };

    // Overload:function(input, pattern)
    // Overload:function(input, pattern, flags)
    Enumerable.matches = function (input, pattern, flags) {
        if (flags == null) flags = "";
        if (pattern instanceof RegExp) {
            flags += (pattern.ignoreCase) ? "i" : "";
            flags += (pattern.multiline) ? "m" : "";
            pattern = pattern.source;
        }
        if (flags.indexOf("g") === -1) flags += "g";

        return new Enumerable(function () {
            var regex;
            return new IEnumerator(
                function () { regex = new RegExp(pattern, flags); },
                function () {
                    var match = regex.exec(input);
                    return (match) ? this.yieldReturn(match) : false;
                },
                Functions.Blank);
        });
    };

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.range = function (start, count, step) {
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            var index = 0;

            return new IEnumerator(
                function () { value = start - step; },
                function () {
                    return (index++ < count)
                        ? this.yieldReturn(value += step)
                        : this.yieldBreak();
                },
                Functions.Blank);
        });
    };

    // Overload:function(start, count)
    // Overload:function(start, count, step)
    Enumerable.rangeDown = function (start, count, step) {
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            var index = 0;

            return new IEnumerator(
                function () { value = start + step; },
                function () {
                    return (index++ < count)
                        ? this.yieldReturn(value -= step)
                        : this.yieldBreak();
                },
                Functions.Blank);
        });
    };

    // Overload:function(start, to)
    // Overload:function(start, to, step)
    Enumerable.rangeTo = function (start, to, step) {
        if (step == null) step = 1;

        if (start < to) {
            return new Enumerable(function () {
                var value;

                return new IEnumerator(
                function () { value = start - step; },
                function () {
                    var next = value += step;
                    return (next <= to)
                        ? this.yieldReturn(next)
                        : this.yieldBreak();
                },
                Functions.Blank);
            });
        }
        else {
            return new Enumerable(function () {
                var value;

                return new IEnumerator(
                function () { value = start + step; },
                function () {
                    var next = value -= step;
                    return (next >= to)
                        ? this.yieldReturn(next)
                        : this.yieldBreak();
                },
                Functions.Blank);
            });
        }
    };

    // Overload:function(element)
    // Overload:function(element, count)
    Enumerable.repeat = function (element, count) {
        if (count != null) return Enumerable.repeat(element).take(count);

        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () { return this.yieldReturn(element); },
                Functions.Blank);
        });
    };

    Enumerable.repeatWithFinalize = function (initializer, finalizer) {
        initializer = Utils.createLambda(initializer);
        finalizer = Utils.createLambda(finalizer);

        return new Enumerable(function () {
            var element;
            return new IEnumerator(
                function () { element = initializer(); },
                function () { return this.yieldReturn(element); },
                function () {
                    if (element != null) {
                        finalizer(element);
                        element = null;
                    }
                });
        });
    };

    // Overload:function(func)
    // Overload:function(func, count)
    Enumerable.generate = function (func, count) {
        if (count != null) return Enumerable.generate(func).take(count);
        func = Utils.createLambda(func);

        return new Enumerable(function () {
            return new IEnumerator(
                Functions.Blank,
                function () { return this.yieldReturn(func()); },
                Functions.Blank);
        });
    };

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.toInfinity = function (start, step) {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            return new IEnumerator(
                function () { value = start - step; },
                function () { return this.yieldReturn(value += step); },
                Functions.Blank);
        });
    };

    // Overload:function()
    // Overload:function(start)
    // Overload:function(start, step)
    Enumerable.toNegativeInfinity = function (start, step) {
        if (start == null) start = 0;
        if (step == null) step = 1;

        return new Enumerable(function () {
            var value;
            return new IEnumerator(
                function () { value = start + step; },
                function () { return this.yieldReturn(value -= step); },
                Functions.Blank);
        });
    };

    Enumerable.unfold = function (seed, func) {
        func = Utils.createLambda(func);

        return new Enumerable(function () {
            var isFirst = true;
            var value;
            return new IEnumerator(
                Functions.Blank,
                function () {
                    if (isFirst) {
                        isFirst = false;
                        value = seed;
                        return this.yieldReturn(value);
                    }
                    value = func(value);
                    return this.yieldReturn(value);
                },
                Functions.Blank);
        });
    };

    Enumerable.defer = function (enumerableFactory) {

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = Enumerable.from(enumerableFactory()).getEnumerator(); },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.current())
                        : this.yieldBreak();
                },
                function () {
                    Utils.dispose(enumerator);
                });
        });
    };

    // Extension Methods

    /* Projection and Filtering Methods */

    // Overload:function(func)
    // Overload:function(func, resultSelector<element>)
    // Overload:function(func, resultSelector<element, nestLevel>)
    Enumerable.prototype.traverseBreadthFirst = function (func, resultSelector) {
        var source = this;
        func = Utils.createLambda(func);
        resultSelector = Utils.createLambda(resultSelector);

        return new Enumerable(function () {
            var enumerator;
            var nestLevel = 0;
            var buffer = [];

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (true) {
                        if (enumerator.moveNext()) {
                            buffer.push(enumerator.current());
                            return this.yieldReturn(resultSelector(enumerator.current(), nestLevel));
                        }

                        var next = Enumerable.from(buffer).selectMany(function (x) { return func(x); });
                        if (!next.any()) {
                            return false;
                        }
                        else {
                            nestLevel++;
                            buffer = [];
                            Utils.dispose(enumerator);
                            enumerator = next.getEnumerator();
                        }
                    }
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(func)
    // Overload:function(func, resultSelector<element>)
    // Overload:function(func, resultSelector<element, nestLevel>)
    Enumerable.prototype.traverseDepthFirst = function (func, resultSelector) {
        var source = this;
        func = Utils.createLambda(func);
        resultSelector = Utils.createLambda(resultSelector);

        return new Enumerable(function () {
            var enumeratorStack = [];
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (true) {
                        if (enumerator.moveNext()) {
                            var value = resultSelector(enumerator.current(), enumeratorStack.length);
                            enumeratorStack.push(enumerator);
                            enumerator = Enumerable.from(func(enumerator.current())).getEnumerator();
                            return this.yieldReturn(value);
                        }

                        if (enumeratorStack.length <= 0) return false;
                        Utils.dispose(enumerator);
                        enumerator = enumeratorStack.pop();
                    }
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Enumerable.from(enumeratorStack).forEach(function (s) { s.dispose(); });
                    }
                });
        });
    };

    Enumerable.prototype.flatten = function () {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var middleEnumerator = null;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (true) {
                        if (middleEnumerator != null) {
                            if (middleEnumerator.moveNext()) {
                                return this.yieldReturn(middleEnumerator.current());
                            }
                            else {
                                middleEnumerator = null;
                            }
                        }

                        if (enumerator.moveNext()) {
                            if (enumerator.current() instanceof Array) {
                                Utils.dispose(middleEnumerator);
                                middleEnumerator = Enumerable.from(enumerator.current())
                                    .selectMany(Functions.Identity)
                                    .flatten()
                                    .getEnumerator();
                                continue;
                            }
                            else {
                                return this.yieldReturn(enumerator.current());
                            }
                        }

                        return false;
                    }
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Utils.dispose(middleEnumerator);
                    }
                });
        });
    };

    Enumerable.prototype.pairwise = function (selector) {
        var source = this;
        selector = Utils.createLambda(selector);

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    enumerator.moveNext();
                },
                function () {
                    var prev = enumerator.current();
                    return (enumerator.moveNext())
                        ? this.yieldReturn(selector(prev, enumerator.current()))
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(func)
    // Overload:function(seed,func<value,element>)
    Enumerable.prototype.scan = function (seed, func) {
        var isUseSeed;
        if (func == null) {
            func = Utils.createLambda(seed); // arguments[0]
            isUseSeed = false;
        } else {
            func = Utils.createLambda(func);
            isUseSeed = true;
        }
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var value;
            var isFirst = true;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (isFirst) {
                        isFirst = false;
                        if (!isUseSeed) {
                            if (enumerator.moveNext()) {
                                return this.yieldReturn(value = enumerator.current());
                            }
                        }
                        else {
                            return this.yieldReturn(value = seed);
                        }
                    }

                    return (enumerator.moveNext())
                        ? this.yieldReturn(value = func(value, enumerator.current()))
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(selector<element>)
    // Overload:function(selector<element,index>)
    Enumerable.prototype.select = function (selector) {
        selector = Utils.createLambda(selector);

        if (selector.length <= 1) {
            return new WhereSelectEnumerable(this, null, selector);
        }
        else {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.getEnumerator(); },
                    function () {
                        return (enumerator.moveNext())
                            ? this.yieldReturn(selector(enumerator.current(), index++))
                            : false;
                    },
                    function () { Utils.dispose(enumerator); });
            });
        }
    };

    // Overload:function(collectionSelector<element>)
    // Overload:function(collectionSelector<element,index>)
    // Overload:function(collectionSelector<element>,resultSelector)
    // Overload:function(collectionSelector<element,index>,resultSelector)
    Enumerable.prototype.selectMany = function (collectionSelector, resultSelector) {
        var source = this;
        collectionSelector = Utils.createLambda(collectionSelector);
        if (resultSelector == null) resultSelector = function (a, b) { return b; };
        resultSelector = Utils.createLambda(resultSelector);

        return new Enumerable(function () {
            var enumerator;
            var middleEnumerator = undefined;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (middleEnumerator === undefined) {
                        if (!enumerator.moveNext()) return false;
                    }
                    do {
                        if (middleEnumerator == null) {
                            var middleSeq = collectionSelector(enumerator.current(), index++);
                            middleEnumerator = Enumerable.from(middleSeq).getEnumerator();
                        }
                        if (middleEnumerator.moveNext()) {
                            return this.yieldReturn(resultSelector(enumerator.current(), middleEnumerator.current()));
                        }
                        Utils.dispose(middleEnumerator);
                        middleEnumerator = null;
                    } while (enumerator.moveNext());
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Utils.dispose(middleEnumerator);
                    }
                });
        });
    };

    // Overload:function(predicate<element>)
    // Overload:function(predicate<element,index>)
    Enumerable.prototype.where = function (predicate) {
        predicate = Utils.createLambda(predicate);

        if (predicate.length <= 1) {
            return new WhereEnumerable(this, predicate);
        }
        else {
            var source = this;

            return new Enumerable(function () {
                var enumerator;
                var index = 0;

                return new IEnumerator(
                    function () { enumerator = source.getEnumerator(); },
                    function () {
                        while (enumerator.moveNext()) {
                            if (predicate(enumerator.current(), index++)) {
                                return this.yieldReturn(enumerator.current());
                            }
                        }
                        return false;
                    },
                    function () { Utils.dispose(enumerator); });
            });
        }
    };


    // Overload:function(selector<element>)
    // Overload:function(selector<element,index>)
    Enumerable.prototype.choose = function (selector) {
        selector = Utils.createLambda(selector);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (enumerator.moveNext()) {
                        var result = selector(enumerator.current(), index++);
                        if (result != null) {
                            return this.yieldReturn(result);
                        }
                    }
                    return this.yieldBreak();
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.ofType = function (type) {
        var typeName;
        switch (type) {
            case Number:
                typeName = Types.Number;
                break;
            case String:
                typeName = Types.String;
                break;
            case Boolean:
                typeName = Types.Boolean;
                break;
            case Function:
                typeName = Types.Function;
                break;
            default:
                typeName = null;
                break;
        }
        return (typeName === null)
            ? this.where(function (x) { return x instanceof type; })
            : this.where(function (x) { return typeof x === typeName; });
    };

    // mutiple arguments, last one is selector, others are enumerable
    Enumerable.prototype.zip = function () {
        var args = arguments;
        var selector = Utils.createLambda(arguments[arguments.length - 1]);

        var source = this;
        // optimized case:argument is 2
        if (arguments.length == 2) {
            var second = arguments[0];

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;
                var index = 0;

                return new IEnumerator(
                function () {
                    firstEnumerator = source.getEnumerator();
                    secondEnumerator = Enumerable.from(second).getEnumerator();
                },
                function () {
                    if (firstEnumerator.moveNext() && secondEnumerator.moveNext()) {
                        return this.yieldReturn(selector(firstEnumerator.current(), secondEnumerator.current(), index++));
                    }
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    } finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
            });
        }
        else {
            return new Enumerable(function () {
                var enumerators;
                var index = 0;

                return new IEnumerator(
                function () {
                    var array = Enumerable.make(source)
                        .concat(Enumerable.from(args).takeExceptLast().select(Enumerable.from))
                        .select(function (x) { return x.getEnumerator() })
                        .toArray();
                    enumerators = Enumerable.from(array);
                },
                function () {
                    if (enumerators.all(function (x) { return x.moveNext() })) {
                        var array = enumerators
                            .select(function (x) { return x.current() })
                            .toArray();
                        array.push(index++);
                        return this.yieldReturn(selector.apply(null, array));
                    }
                    else {
                        return this.yieldBreak();
                    }
                },
                function () {
                    Enumerable.from(enumerators).forEach(Utils.dispose);
                });
            });
        }
    };

    // mutiple arguments
    Enumerable.prototype.merge = function () {
        var args = arguments;
        var source = this;

        return new Enumerable(function () {
            var enumerators;
            var index = -1;

            return new IEnumerator(
                function () {
                    enumerators = Enumerable.make(source)
                        .concat(Enumerable.from(args).select(Enumerable.from))
                        .select(function (x) { return x.getEnumerator() })
                        .toArray();
                },
                function () {
                    while (enumerators.length > 0) {
                        index = (index >= enumerators.length - 1) ? 0 : index + 1;
                        var enumerator = enumerators[index];

                        if (enumerator.moveNext()) {
                            return this.yieldReturn(enumerator.current());
                        }
                        else {
                            enumerator.dispose();
                            enumerators.splice(index--, 1);
                        }
                    }
                    return this.yieldBreak();
                },
                function () {
                    Enumerable.from(enumerators).forEach(Utils.dispose);
                });
        });
    };

    /* Join Methods */

    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
    Enumerable.prototype.join = function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector) {
        outerKeySelector = Utils.createLambda(outerKeySelector);
        innerKeySelector = Utils.createLambda(innerKeySelector);
        resultSelector = Utils.createLambda(resultSelector);
        compareSelector = Utils.createLambda(compareSelector);
        var source = this;

        return new Enumerable(function () {
            var outerEnumerator;
            var lookup;
            var innerElements = null;
            var innerCount = 0;

            return new IEnumerator(
                function () {
                    outerEnumerator = source.getEnumerator();
                    lookup = Enumerable.from(inner).toLookup(innerKeySelector, Functions.Identity, compareSelector);
                },
                function () {
                    while (true) {
                        if (innerElements != null) {
                            var innerElement = innerElements[innerCount++];
                            if (innerElement !== undefined) {
                                return this.yieldReturn(resultSelector(outerEnumerator.current(), innerElement));
                            }

                            innerElement = null;
                            innerCount = 0;
                        }

                        if (outerEnumerator.moveNext()) {
                            var key = outerKeySelector(outerEnumerator.current());
                            innerElements = lookup.get(key).toArray();
                        } else {
                            return false;
                        }
                    }
                },
                function () { Utils.dispose(outerEnumerator); });
        });
    };

    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
    // Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
    Enumerable.prototype.groupJoin = function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector) {
        outerKeySelector = Utils.createLambda(outerKeySelector);
        innerKeySelector = Utils.createLambda(innerKeySelector);
        resultSelector = Utils.createLambda(resultSelector);
        compareSelector = Utils.createLambda(compareSelector);
        var source = this;

        return new Enumerable(function () {
            var enumerator = source.getEnumerator();
            var lookup = null;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    lookup = Enumerable.from(inner).toLookup(innerKeySelector, Functions.Identity, compareSelector);
                },
                function () {
                    if (enumerator.moveNext()) {
                        var innerElement = lookup.get(outerKeySelector(enumerator.current()));
                        return this.yieldReturn(resultSelector(enumerator.current(), innerElement));
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    /* Set Methods */

    Enumerable.prototype.all = function (predicate) {
        predicate = Utils.createLambda(predicate);

        var result = true;
        this.forEach(function (x) {
            if (!predicate(x)) {
                result = false;
                return false; // break
            }
        });
        return result;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.any = function (predicate) {
        predicate = Utils.createLambda(predicate);

        var enumerator = this.getEnumerator();
        try {
            if (arguments.length == 0) return enumerator.moveNext(); // case:function()

            while (enumerator.moveNext()) // case:function(predicate)
            {
                if (predicate(enumerator.current())) return true;
            }
            return false;
        }
        finally {
            Utils.dispose(enumerator);
        }
    };

    Enumerable.prototype.isEmpty = function () {
        return !this.any();
    };

    // multiple arguments
    Enumerable.prototype.concat = function () {
        var source = this;

        if (arguments.length == 1) {
            var second = arguments[0];

            return new Enumerable(function () {
                var firstEnumerator;
                var secondEnumerator;

                return new IEnumerator(
                function () { firstEnumerator = source.getEnumerator(); },
                function () {
                    if (secondEnumerator == null) {
                        if (firstEnumerator.moveNext()) return this.yieldReturn(firstEnumerator.current());
                        secondEnumerator = Enumerable.from(second).getEnumerator();
                    }
                    if (secondEnumerator.moveNext()) return this.yieldReturn(secondEnumerator.current());
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    }
                    finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
            });
        }
        else {
            var args = arguments;

            return new Enumerable(function () {
                var enumerators;

                return new IEnumerator(
                    function () {
                        enumerators = Enumerable.make(source)
                            .concat(Enumerable.from(args).select(Enumerable.from))
                            .select(function (x) { return x.getEnumerator() })
                            .toArray();
                    },
                    function () {
                        while (enumerators.length > 0) {
                            var enumerator = enumerators[0];

                            if (enumerator.moveNext()) {
                                return this.yieldReturn(enumerator.current());
                            }
                            else {
                                enumerator.dispose();
                                enumerators.splice(0, 1);
                            }
                        }
                        return this.yieldBreak();
                    },
                    function () {
                        Enumerable.from(enumerators).forEach(Utils.dispose);
                    });
            });
        }
    };

    Enumerable.prototype.insert = function (index, second) {
        var source = this;

        return new Enumerable(function () {
            var firstEnumerator;
            var secondEnumerator;
            var count = 0;
            var isEnumerated = false;

            return new IEnumerator(
                function () {
                    firstEnumerator = source.getEnumerator();
                    secondEnumerator = Enumerable.from(second).getEnumerator();
                },
                function () {
                    if (count == index && secondEnumerator.moveNext()) {
                        isEnumerated = true;
                        return this.yieldReturn(secondEnumerator.current());
                    }
                    if (firstEnumerator.moveNext()) {
                        count++;
                        return this.yieldReturn(firstEnumerator.current());
                    }
                    if (!isEnumerated && secondEnumerator.moveNext()) {
                        return this.yieldReturn(secondEnumerator.current());
                    }
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    }
                    finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
        });
    };

    Enumerable.prototype.alternate = function (alternateValueOrSequence) {
        var source = this;

        return new Enumerable(function () {
            var buffer;
            var enumerator;
            var alternateSequence;
            var alternateEnumerator;

            return new IEnumerator(
                function () {
                    if (alternateValueOrSequence instanceof Array || alternateValueOrSequence.getEnumerator != null) {
                        alternateSequence = Enumerable.from(Enumerable.from(alternateValueOrSequence).toArray()); // freeze
                    }
                    else {
                        alternateSequence = Enumerable.make(alternateValueOrSequence);
                    }
                    enumerator = source.getEnumerator();
                    if (enumerator.moveNext()) buffer = enumerator.current();
                },
                function () {
                    while (true) {
                        if (alternateEnumerator != null) {
                            if (alternateEnumerator.moveNext()) {
                                return this.yieldReturn(alternateEnumerator.current());
                            }
                            else {
                                alternateEnumerator = null;
                            }
                        }

                        if (buffer == null && enumerator.moveNext()) {
                            buffer = enumerator.current(); // hasNext
                            alternateEnumerator = alternateSequence.getEnumerator();
                            continue; // GOTO
                        }
                        else if (buffer != null) {
                            var retVal = buffer;
                            buffer = null;
                            return this.yieldReturn(retVal);
                        }

                        return this.yieldBreak();
                    }
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    }
                    finally {
                        Utils.dispose(alternateEnumerator);
                    }
                });
        });
    };

    // Overload:function(value)
    // Overload:function(value, compareSelector)
    Enumerable.prototype.contains = function (value, compareSelector) {
        compareSelector = Utils.createLambda(compareSelector);
        var enumerator = this.getEnumerator();
        try {
            while (enumerator.moveNext()) {
                if (compareSelector(enumerator.current()) === value) return true;
            }
            return false;
        }
        finally {
            Utils.dispose(enumerator);
        }
    };

    Enumerable.prototype.defaultIfEmpty = function (defaultValue) {
        var source = this;
        if (defaultValue === undefined) defaultValue = null;

        return new Enumerable(function () {
            var enumerator;
            var isFirst = true;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (enumerator.moveNext()) {
                        isFirst = false;
                        return this.yieldReturn(enumerator.current());
                    }
                    else if (isFirst) {
                        isFirst = false;
                        return this.yieldReturn(defaultValue);
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function()
    // Overload:function(compareSelector)
    Enumerable.prototype.distinct = function (compareSelector) {
        return this.except(Enumerable.empty(), compareSelector);
    };

    Enumerable.prototype.distinctUntilChanged = function (compareSelector) {
        compareSelector = Utils.createLambda(compareSelector);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var compareKey;
            var initial;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                },
                function () {
                    while (enumerator.moveNext()) {
                        var key = compareSelector(enumerator.current());

                        if (initial) {
                            initial = false;
                            compareKey = key;
                            return this.yieldReturn(enumerator.current());
                        }

                        if (compareKey === key) {
                            continue;
                        }

                        compareKey = key;
                        return this.yieldReturn(enumerator.current());
                    }
                    return this.yieldBreak();
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(second)
    // Overload:function(second, compareSelector)
    Enumerable.prototype.except = function (second, compareSelector) {
        compareSelector = Utils.createLambda(compareSelector);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var keys;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    keys = new Dictionary(compareSelector);
                    Enumerable.from(second).forEach(function (key) { keys.add(key); });
                },
                function () {
                    while (enumerator.moveNext()) {
                        var current = enumerator.current();
                        if (!keys.contains(current)) {
                            keys.add(current);
                            return this.yieldReturn(current);
                        }
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(second)
    // Overload:function(second, compareSelector)
    Enumerable.prototype.intersect = function (second, compareSelector) {
        compareSelector = Utils.createLambda(compareSelector);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var keys;
            var outs;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();

                    keys = new Dictionary(compareSelector);
                    Enumerable.from(second).forEach(function (key) { keys.add(key); });
                    outs = new Dictionary(compareSelector);
                },
                function () {
                    while (enumerator.moveNext()) {
                        var current = enumerator.current();
                        if (!outs.contains(current) && keys.contains(current)) {
                            outs.add(current);
                            return this.yieldReturn(current);
                        }
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(second)
    // Overload:function(second, compareSelector)
    Enumerable.prototype.sequenceEqual = function (second, compareSelector) {
        compareSelector = Utils.createLambda(compareSelector);

        var firstEnumerator = this.getEnumerator();
        try {
            var secondEnumerator = Enumerable.from(second).getEnumerator();
            try {
                while (firstEnumerator.moveNext()) {
                    if (!secondEnumerator.moveNext()
                    || compareSelector(firstEnumerator.current()) !== compareSelector(secondEnumerator.current())) {
                        return false;
                    }
                }

                if (secondEnumerator.moveNext()) return false;
                return true;
            }
            finally {
                Utils.dispose(secondEnumerator);
            }
        }
        finally {
            Utils.dispose(firstEnumerator);
        }
    };

    Enumerable.prototype.union = function (second, compareSelector) {
        compareSelector = Utils.createLambda(compareSelector);
        var source = this;

        return new Enumerable(function () {
            var firstEnumerator;
            var secondEnumerator;
            var keys;

            return new IEnumerator(
                function () {
                    firstEnumerator = source.getEnumerator();
                    keys = new Dictionary(compareSelector);
                },
                function () {
                    var current;
                    if (secondEnumerator === undefined) {
                        while (firstEnumerator.moveNext()) {
                            current = firstEnumerator.current();
                            if (!keys.contains(current)) {
                                keys.add(current);
                                return this.yieldReturn(current);
                            }
                        }
                        secondEnumerator = Enumerable.from(second).getEnumerator();
                    }
                    while (secondEnumerator.moveNext()) {
                        current = secondEnumerator.current();
                        if (!keys.contains(current)) {
                            keys.add(current);
                            return this.yieldReturn(current);
                        }
                    }
                    return false;
                },
                function () {
                    try {
                        Utils.dispose(firstEnumerator);
                    }
                    finally {
                        Utils.dispose(secondEnumerator);
                    }
                });
        });
    };

    /* Ordering Methods */

    Enumerable.prototype.orderBy = function (keySelector) {
        return new OrderedEnumerable(this, keySelector, false);
    };

    Enumerable.prototype.orderByDescending = function (keySelector) {
        return new OrderedEnumerable(this, keySelector, true);
    };

    Enumerable.prototype.reverse = function () {
        var source = this;

        return new Enumerable(function () {
            var buffer;
            var index;

            return new IEnumerator(
                function () {
                    buffer = source.toArray();
                    index = buffer.length;
                },
                function () {
                    return (index > 0)
                        ? this.yieldReturn(buffer[--index])
                        : false;
                },
                Functions.Blank);
        });
    };

    Enumerable.prototype.shuffle = function () {
        var source = this;

        return new Enumerable(function () {
            var buffer;

            return new IEnumerator(
                function () { buffer = source.toArray(); },
                function () {
                    if (buffer.length > 0) {
                        var i = Math.floor(Math.random() * buffer.length);
                        return this.yieldReturn(buffer.splice(i, 1)[0]);
                    }
                    return false;
                },
                Functions.Blank);
        });
    };

    Enumerable.prototype.weightedSample = function (weightSelector) {
        weightSelector = Utils.createLambda(weightSelector);
        var source = this;

        return new Enumerable(function () {
            var sortedByBound;
            var totalWeight = 0;

            return new IEnumerator(
                function () {
                    sortedByBound = source
                        .choose(function (x) {
                            var weight = weightSelector(x);
                            if (weight <= 0) return null; // ignore 0

                            totalWeight += weight;
                            return { value: x, bound: totalWeight };
                        })
                        .toArray();
                },
                function () {
                    if (sortedByBound.length > 0) {
                        var draw = Math.floor(Math.random() * totalWeight) + 1;

                        var lower = -1;
                        var upper = sortedByBound.length;
                        while (upper - lower > 1) {
                            var index = Math.floor((lower + upper) / 2);
                            if (sortedByBound[index].bound >= draw) {
                                upper = index;
                            }
                            else {
                                lower = index;
                            }
                        }

                        return this.yieldReturn(sortedByBound[upper].value);
                    }

                    return this.yieldBreak();
                },
                Functions.Blank);
        });
    };

    /* Grouping Methods */

    // Overload:function(keySelector)
    // Overload:function(keySelector,elementSelector)
    // Overload:function(keySelector,elementSelector,resultSelector)
    // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
    Enumerable.prototype.groupBy = function (keySelector, elementSelector, resultSelector, compareSelector) {
        var source = this;
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);
        if (resultSelector != null) resultSelector = Utils.createLambda(resultSelector);
        compareSelector = Utils.createLambda(compareSelector);

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () {
                    enumerator = source.toLookup(keySelector, elementSelector, compareSelector)
                        .toEnumerable()
                        .getEnumerator();
                },
                function () {
                    while (enumerator.moveNext()) {
                        return (resultSelector == null)
                            ? this.yieldReturn(enumerator.current())
                            : this.yieldReturn(resultSelector(enumerator.current().key(), enumerator.current()));
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(keySelector)
    // Overload:function(keySelector,elementSelector)
    // Overload:function(keySelector,elementSelector,resultSelector)
    // Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
    Enumerable.prototype.partitionBy = function (keySelector, elementSelector, resultSelector, compareSelector) {

        var source = this;
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);
        compareSelector = Utils.createLambda(compareSelector);
        var hasResultSelector;
        if (resultSelector == null) {
            hasResultSelector = false;
            resultSelector = function (key, group) { return new Grouping(key, group); };
        }
        else {
            hasResultSelector = true;
            resultSelector = Utils.createLambda(resultSelector);
        }

        return new Enumerable(function () {
            var enumerator;
            var key;
            var compareKey;
            var group = [];

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    if (enumerator.moveNext()) {
                        key = keySelector(enumerator.current());
                        compareKey = compareSelector(key);
                        group.push(elementSelector(enumerator.current()));
                    }
                },
                function () {
                    var hasNext;
                    while ((hasNext = enumerator.moveNext()) == true) {
                        if (compareKey === compareSelector(keySelector(enumerator.current()))) {
                            group.push(elementSelector(enumerator.current()));
                        }
                        else break;
                    }

                    if (group.length > 0) {
                        var result = (hasResultSelector)
                            ? resultSelector(key, Enumerable.from(group))
                            : resultSelector(key, group);
                        if (hasNext) {
                            key = keySelector(enumerator.current());
                            compareKey = compareSelector(key);
                            group = [elementSelector(enumerator.current())];
                        }
                        else group = [];

                        return this.yieldReturn(result);
                    }

                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.buffer = function (count) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    var array = [];
                    var index = 0;
                    while (enumerator.moveNext()) {
                        array.push(enumerator.current());
                        if (++index >= count) return this.yieldReturn(array);
                    }
                    if (array.length > 0) return this.yieldReturn(array);
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    /* Aggregate Methods */

    // Overload:function(func)
    // Overload:function(seed,func)
    // Overload:function(seed,func,resultSelector)
    Enumerable.prototype.aggregate = function (seed, func, resultSelector) {
        resultSelector = Utils.createLambda(resultSelector);
        return resultSelector(this.scan(seed, func, resultSelector).last());
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.average = function (selector) {
        selector = Utils.createLambda(selector);

        var sum = 0;
        var count = 0;
        this.forEach(function (x) {
            sum += selector(x);
            ++count;
        });

        return sum / count;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.count = function (predicate) {
        predicate = (predicate == null) ? Functions.True : Utils.createLambda(predicate);

        var count = 0;
        this.forEach(function (x, i) {
            if (predicate(x, i))++count;
        });
        return count;
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.max = function (selector) {
        if (selector == null) selector = Functions.Identity;
        return this.select(selector).aggregate(function (a, b) { return (a > b) ? a : b; });
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.min = function (selector) {
        if (selector == null) selector = Functions.Identity;
        return this.select(selector).aggregate(function (a, b) { return (a < b) ? a : b; });
    };

    Enumerable.prototype.maxBy = function (keySelector) {
        keySelector = Utils.createLambda(keySelector);
        return this.aggregate(function (a, b) { return (keySelector(a) > keySelector(b)) ? a : b; });
    };

    Enumerable.prototype.minBy = function (keySelector) {
        keySelector = Utils.createLambda(keySelector);
        return this.aggregate(function (a, b) { return (keySelector(a) < keySelector(b)) ? a : b; });
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.sum = function (selector) {
        if (selector == null) selector = Functions.Identity;
        return this.select(selector).aggregate(0, function (a, b) { return a + b; });
    };

    /* Paging Methods */

    Enumerable.prototype.elementAt = function (index) {
        var value;
        var found = false;
        this.forEach(function (x, i) {
            if (i == index) {
                value = x;
                found = true;
                return false;
            }
        });

        if (!found) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
        return value;
    };

    Enumerable.prototype.elementAtOrDefault = function (index, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        var value;
        var found = false;
        this.forEach(function (x, i) {
            if (i == index) {
                value = x;
                found = true;
                return false;
            }
        });

        return (!found) ? defaultValue : value;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.first = function (predicate) {
        if (predicate != null) return this.where(predicate).first();

        var value;
        var found = false;
        this.forEach(function (x) {
            value = x;
            found = true;
            return false;
        });

        if (!found) throw new Error("first:No element satisfies the condition.");
        return value;
    };

    Enumerable.prototype.firstOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) return this.where(predicate).firstOrDefault(null, defaultValue);

        var value;
        var found = false;
        this.forEach(function (x) {
            value = x;
            found = true;
            return false;
        });
        return (!found) ? defaultValue : value;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.last = function (predicate) {
        if (predicate != null) return this.where(predicate).last();

        var value;
        var found = false;
        this.forEach(function (x) {
            found = true;
            value = x;
        });

        if (!found) throw new Error("last:No element satisfies the condition.");
        return value;
    };

    // Overload:function(defaultValue)
    // Overload:function(defaultValue,predicate)
    Enumerable.prototype.lastOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) return this.where(predicate).lastOrDefault(null, defaultValue);

        var value;
        var found = false;
        this.forEach(function (x) {
            found = true;
            value = x;
        });
        return (!found) ? defaultValue : value;
    };

    // Overload:function()
    // Overload:function(predicate)
    Enumerable.prototype.single = function (predicate) {
        if (predicate != null) return this.where(predicate).single();

        var value;
        var found = false;
        this.forEach(function (x) {
            if (!found) {
                found = true;
                value = x;
            } else throw new Error("single:sequence contains more than one element.");
        });

        if (!found) throw new Error("single:No element satisfies the condition.");
        return value;
    };

    // Overload:function(defaultValue)
    // Overload:function(defaultValue,predicate)
    Enumerable.prototype.singleOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) return this.where(predicate).singleOrDefault(null, defaultValue);

        var value;
        var found = false;
        this.forEach(function (x) {
            if (!found) {
                found = true;
                value = x;
            } else throw new Error("single:sequence contains more than one element.");
        });

        return (!found) ? defaultValue : value;
    };

    Enumerable.prototype.skip = function (count) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () {
                    enumerator = source.getEnumerator();
                    while (index++ < count && enumerator.moveNext()) {
                    }
                    ;
                },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.current())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(predicate<element>)
    // Overload:function(predicate<element,index>)
    Enumerable.prototype.skipWhile = function (predicate) {
        predicate = Utils.createLambda(predicate);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;
            var isSkipEnd = false;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (!isSkipEnd) {
                        if (enumerator.moveNext()) {
                            if (!predicate(enumerator.current(), index++)) {
                                isSkipEnd = true;
                                return this.yieldReturn(enumerator.current());
                            }
                            continue;
                        } else return false;
                    }

                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.current())
                        : false;

                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.take = function (count) {
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    return (index++ < count && enumerator.moveNext())
                        ? this.yieldReturn(enumerator.current())
                        : false;
                },
                function () { Utils.dispose(enumerator); }
            );
        });
    };

    // Overload:function(predicate<element>)
    // Overload:function(predicate<element,index>)
    Enumerable.prototype.takeWhile = function (predicate) {
        predicate = Utils.createLambda(predicate);
        var source = this;

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    return (enumerator.moveNext() && predicate(enumerator.current(), index++))
                        ? this.yieldReturn(enumerator.current())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function()
    // Overload:function(count)
    Enumerable.prototype.takeExceptLast = function (count) {
        if (count == null) count = 1;
        var source = this;

        return new Enumerable(function () {
            if (count <= 0) return source.getEnumerator(); // do nothing

            var enumerator;
            var q = [];

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    while (enumerator.moveNext()) {
                        if (q.length == count) {
                            q.push(enumerator.current());
                            return this.yieldReturn(q.shift());
                        }
                        q.push(enumerator.current());
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.takeFromLast = function (count) {
        if (count <= 0 || count == null) return Enumerable.empty();
        var source = this;

        return new Enumerable(function () {
            var sourceEnumerator;
            var enumerator;
            var q = [];

            return new IEnumerator(
                function () { sourceEnumerator = source.getEnumerator(); },
                function () {
                    while (sourceEnumerator.moveNext()) {
                        if (q.length == count) q.shift();
                        q.push(sourceEnumerator.current());
                    }
                    if (enumerator == null) {
                        enumerator = Enumerable.from(q).getEnumerator();
                    }
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.current())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(item)
    // Overload:function(predicate)
    Enumerable.prototype.indexOf = function (item) {
        var found = null;

        // item as predicate
        if (typeof (item) === Types.Function) {
            this.forEach(function (x, i) {
                if (item(x, i)) {
                    found = i;
                    return false;
                }
            });
        }
        else {
            this.forEach(function (x, i) {
                if (x === item) {
                    found = i;
                    return false;
                }
            });
        }

        return (found !== null) ? found : -1;
    };

    // Overload:function(item)
    // Overload:function(predicate)
    Enumerable.prototype.lastIndexOf = function (item) {
        var result = -1;

        // item as predicate
        if (typeof (item) === Types.Function) {
            this.forEach(function (x, i) {
                if (item(x, i)) result = i;
            });
        }
        else {
            this.forEach(function (x, i) {
                if (x === item) result = i;
            });
        }

        return result;
    };

    /* Convert Methods */

    Enumerable.prototype.cast = function () {
        return this;
    };

    Enumerable.prototype.asEnumerable = function () {
        return Enumerable.from(this);
    };

    Enumerable.prototype.toArray = function () {
        var array = [];
        this.forEach(function (x) { array.push(x); });
        return array;
    };

    // Overload:function(keySelector)
    // Overload:function(keySelector, elementSelector)
    // Overload:function(keySelector, elementSelector, compareSelector)
    Enumerable.prototype.toLookup = function (keySelector, elementSelector, compareSelector) {
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);
        compareSelector = Utils.createLambda(compareSelector);

        var dict = new Dictionary(compareSelector);
        this.forEach(function (x) {
            var key = keySelector(x);
            var element = elementSelector(x);

            var array = dict.get(key);
            if (array !== undefined) array.push(element);
            else dict.add(key, [element]);
        });
        return new Lookup(dict);
    };

    Enumerable.prototype.toObject = function (keySelector, elementSelector) {
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);

        var obj = {};
        this.forEach(function (x) {
            obj[keySelector(x)] = elementSelector(x);
        });
        return obj;
    };

    // Overload:function(keySelector, elementSelector)
    // Overload:function(keySelector, elementSelector, compareSelector)
    Enumerable.prototype.toDictionary = function (keySelector, elementSelector, compareSelector) {
        keySelector = Utils.createLambda(keySelector);
        elementSelector = Utils.createLambda(elementSelector);
        compareSelector = Utils.createLambda(compareSelector);

        var dict = new Dictionary(compareSelector);
        this.forEach(function (x) {
            dict.add(keySelector(x), elementSelector(x));
        });
        return dict;
    };

    // Overload:function()
    // Overload:function(replacer)
    // Overload:function(replacer, space)
    Enumerable.prototype.toJSONString = function (replacer, space) {
        if (typeof JSON === Types.Undefined || JSON.stringify == null) {
            throw new Error("toJSONString can't find JSON.stringify. This works native JSON support Browser or include json2.js");
        }
        return JSON.stringify(this.toArray(), replacer, space);
    };

    // Overload:function()
    // Overload:function(separator)
    // Overload:function(separator,selector)
    Enumerable.prototype.toJoinedString = function (separator, selector) {
        if (separator == null) separator = "";
        if (selector == null) selector = Functions.Identity;

        return this.select(selector).toArray().join(separator);
    };


    /* Action Methods */

    // Overload:function(action<element>)
    // Overload:function(action<element,index>)
    Enumerable.prototype.doAction = function (action) {
        var source = this;
        action = Utils.createLambda(action);

        return new Enumerable(function () {
            var enumerator;
            var index = 0;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    if (enumerator.moveNext()) {
                        action(enumerator.current(), index++);
                        return this.yieldReturn(enumerator.current());
                    }
                    return false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    // Overload:function(action<element>)
    // Overload:function(action<element,index>)
    // Overload:function(func<element,bool>)
    // Overload:function(func<element,index,bool>)
    Enumerable.prototype.forEach = function (action) {
        action = Utils.createLambda(action);

        var index = 0;
        var enumerator = this.getEnumerator();
        try {
            while (enumerator.moveNext()) {
                if (action(enumerator.current(), index++) === false) break;
            }
        } finally {
            Utils.dispose(enumerator);
        }
    };

    // Overload:function()
    // Overload:function(separator)
    // Overload:function(separator,selector)
    Enumerable.prototype.write = function (separator, selector) {
        if (separator == null) separator = "";
        selector = Utils.createLambda(selector);

        var isFirst = true;
        this.forEach(function (item) {
            if (isFirst) isFirst = false;
            else document.write(separator);
            document.write(selector(item));
        });
    };

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.writeLine = function (selector) {
        selector = Utils.createLambda(selector);

        this.forEach(function (item) {
            document.writeln(selector(item) + "<br />");
        });
    };

    Enumerable.prototype.force = function () {
        var enumerator = this.getEnumerator();

        try {
            while (enumerator.moveNext()) {
            }
        }
        finally {
            Utils.dispose(enumerator);
        }
    };

    /* Functional Methods */

    Enumerable.prototype.letBind = function (func) {
        func = Utils.createLambda(func);
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () {
                    enumerator = Enumerable.from(func(source)).getEnumerator();
                },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.current())
                        : false;
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.share = function () {
        var source = this;
        var sharedEnumerator;
        var disposed = false;

        return new DisposableEnumerable(function () {
            return new IEnumerator(
                function () {
                    if (sharedEnumerator == null) {
                        sharedEnumerator = source.getEnumerator();
                    }
                },
                function () {
                    if (disposed) throw new Error("enumerator is disposed");

                    return (sharedEnumerator.moveNext())
                        ? this.yieldReturn(sharedEnumerator.current())
                        : false;
                },
                Functions.Blank
            );
        }, function () {
            disposed = true;
            Utils.dispose(sharedEnumerator);
        });
    };

    Enumerable.prototype.memoize = function () {
        var source = this;
        var cache;
        var enumerator;
        var disposed = false;

        return new DisposableEnumerable(function () {
            var index = -1;

            return new IEnumerator(
                function () {
                    if (enumerator == null) {
                        enumerator = source.getEnumerator();
                        cache = [];
                    }
                },
                function () {
                    if (disposed) throw new Error("enumerator is disposed");

                    index++;
                    if (cache.length <= index) {
                        return (enumerator.moveNext())
                            ? this.yieldReturn(cache[index] = enumerator.current())
                            : false;
                    }

                    return this.yieldReturn(cache[index]);
                },
                Functions.Blank
            );
        }, function () {
            disposed = true;
            Utils.dispose(enumerator);
            cache = null;
        });
    };

    /* Error Handling Methods */

    Enumerable.prototype.catchError = function (handler) {
        handler = Utils.createLambda(handler);
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    try {
                        return (enumerator.moveNext())
                            ? this.yieldReturn(enumerator.current())
                            : false;
                    } catch (e) {
                        handler(e);
                        return false;
                    }
                },
                function () { Utils.dispose(enumerator); });
        });
    };

    Enumerable.prototype.finallyAction = function (finallyAction) {
        finallyAction = Utils.createLambda(finallyAction);
        var source = this;

        return new Enumerable(function () {
            var enumerator;

            return new IEnumerator(
                function () { enumerator = source.getEnumerator(); },
                function () {
                    return (enumerator.moveNext())
                        ? this.yieldReturn(enumerator.current())
                        : false;
                },
                function () {
                    try {
                        Utils.dispose(enumerator);
                    } finally {
                        finallyAction();
                    }
                });
        });
    };

    /* For Debug Methods */

    // Overload:function()
    // Overload:function(selector)
    Enumerable.prototype.log = function (selector) {
        selector = Utils.createLambda(selector);

        return this.doAction(function (item) {
            if (typeof console !== Types.Undefined) {
                console.log(selector(item));
            }
        });
    };

    // Overload:function()
    // Overload:function(message)
    // Overload:function(message,selector)
    Enumerable.prototype.trace = function (message, selector) {
        if (message == null) message = "Trace";
        selector = Utils.createLambda(selector);

        return this.doAction(function (item) {
            if (typeof console !== Types.Undefined) {
                console.log(message, selector(item));
            }
        });
    };

    // private

    var OrderedEnumerable = function (source, keySelector, descending, parent) {
        this.source = source;
        this.keySelector = Utils.createLambda(keySelector);
        this.descending = descending;
        this.parent = parent;
    };
    OrderedEnumerable.prototype = new Enumerable();

    OrderedEnumerable.prototype.createOrderedEnumerable = function (keySelector, descending) {
        return new OrderedEnumerable(this.source, keySelector, descending, this);
    };

    OrderedEnumerable.prototype.thenBy = function (keySelector) {
        return this.createOrderedEnumerable(keySelector, false);
    };

    OrderedEnumerable.prototype.thenByDescending = function (keySelector) {
        return this.createOrderedEnumerable(keySelector, true);
    };

    OrderedEnumerable.prototype.getEnumerator = function () {
        var self = this;
        var buffer;
        var indexes;
        var index = 0;

        return new IEnumerator(
            function () {
                buffer = [];
                indexes = [];
                self.source.forEach(function (item, index) {
                    buffer.push(item);
                    indexes.push(index);
                });
                var sortContext = SortContext.create(self, null);
                sortContext.GenerateKeys(buffer);

                indexes.sort(function (a, b) { return sortContext.compare(a, b); });
            },
            function () {
                return (index < indexes.length)
                    ? this.yieldReturn(buffer[indexes[index++]])
                    : false;
            },
            Functions.Blank
        );
    };

    var SortContext = function (keySelector, descending, child) {
        this.keySelector = keySelector;
        this.descending = descending;
        this.child = child;
        this.keys = null;
    };

    SortContext.create = function (orderedEnumerable, currentContext) {
        var context = new SortContext(orderedEnumerable.keySelector, orderedEnumerable.descending, currentContext);
        if (orderedEnumerable.parent != null) return SortContext.create(orderedEnumerable.parent, context);
        return context;
    };

    SortContext.prototype.GenerateKeys = function (source) {
        var len = source.length;
        var keySelector = this.keySelector;
        var keys = new Array(len);
        for (var i = 0; i < len; i++) keys[i] = keySelector(source[i]);
        this.keys = keys;

        if (this.child != null) this.child.GenerateKeys(source);
    };

    SortContext.prototype.compare = function (index1, index2) {
        var comparison = Utils.compare(this.keys[index1], this.keys[index2]);

        if (comparison == 0) {
            if (this.child != null) return this.child.compare(index1, index2);
            return Utils.compare(index1, index2);
        }

        return (this.descending) ? -comparison : comparison;
    };

    var DisposableEnumerable = function (getEnumerator, dispose) {
        this.dispose = dispose;
        Enumerable.call(this, getEnumerator);
    };
    DisposableEnumerable.prototype = new Enumerable();

    // optimize array or arraylike object

    var ArrayEnumerable = function (source) {
        this.getSource = function () { return source; };
    };
    ArrayEnumerable.prototype = new Enumerable();

    ArrayEnumerable.prototype.any = function (predicate) {
        return (predicate == null)
            ? (this.getSource().length > 0)
            : Enumerable.prototype.any.apply(this, arguments);
    };

    ArrayEnumerable.prototype.count = function (predicate) {
        return (predicate == null)
            ? this.getSource().length
            : Enumerable.prototype.count.apply(this, arguments);
    };

    ArrayEnumerable.prototype.elementAt = function (index) {
        var source = this.getSource();
        return (0 <= index && index < source.length)
            ? source[index]
            : Enumerable.prototype.elementAt.apply(this, arguments);
    };

    ArrayEnumerable.prototype.elementAtOrDefault = function (index, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        var source = this.getSource();
        return (0 <= index && index < source.length)
            ? source[index]
            : defaultValue;
    };

    ArrayEnumerable.prototype.first = function (predicate) {
        var source = this.getSource();
        return (predicate == null && source.length > 0)
            ? source[0]
            : Enumerable.prototype.first.apply(this, arguments);
    };

    ArrayEnumerable.prototype.firstOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) {
            return Enumerable.prototype.firstOrDefault.apply(this, arguments);
        }

        var source = this.getSource();
        return source.length > 0 ? source[0] : defaultValue;
    };

    ArrayEnumerable.prototype.last = function (predicate) {
        var source = this.getSource();
        return (predicate == null && source.length > 0)
            ? source[source.length - 1]
            : Enumerable.prototype.last.apply(this, arguments);
    };

    ArrayEnumerable.prototype.lastOrDefault = function (predicate, defaultValue) {
        if (defaultValue === undefined) defaultValue = null;
        if (predicate != null) {
            return Enumerable.prototype.lastOrDefault.apply(this, arguments);
        }

        var source = this.getSource();
        return source.length > 0 ? source[source.length - 1] : defaultValue;
    };

    ArrayEnumerable.prototype.skip = function (count) {
        var source = this.getSource();

        return new Enumerable(function () {
            var index;

            return new IEnumerator(
                function () { index = (count < 0) ? 0 : count; },
                function () {
                    return (index < source.length)
                        ? this.yieldReturn(source[index++])
                        : false;
                },
                Functions.Blank);
        });
    };

    ArrayEnumerable.prototype.takeExceptLast = function (count) {
        if (count == null) count = 1;
        return this.take(this.getSource().length - count);
    };

    ArrayEnumerable.prototype.takeFromLast = function (count) {
        return this.skip(this.getSource().length - count);
    };

    ArrayEnumerable.prototype.reverse = function () {
        var source = this.getSource();

        return new Enumerable(function () {
            var index;

            return new IEnumerator(
                function () {
                    index = source.length;
                },
                function () {
                    return (index > 0)
                        ? this.yieldReturn(source[--index])
                        : false;
                },
                Functions.Blank);
        });
    };

    ArrayEnumerable.prototype.sequenceEqual = function (second, compareSelector) {
        if ((second instanceof ArrayEnumerable || second instanceof Array)
            && compareSelector == null
            && Enumerable.from(second).count() != this.count()) {
            return false;
        }

        return Enumerable.prototype.sequenceEqual.apply(this, arguments);
    };

    ArrayEnumerable.prototype.toJoinedString = function (separator, selector) {
        var source = this.getSource();
        if (selector != null || !(source instanceof Array)) {
            return Enumerable.prototype.toJoinedString.apply(this, arguments);
        }

        if (separator == null) separator = "";
        return source.join(separator);
    };

    ArrayEnumerable.prototype.getEnumerator = function () {
        var source = this.getSource();
        var index = -1;

        // fast and simple enumerator
        return {
            current: function () { return source[index]; },
            moveNext: function () {
                return ++index < source.length;
            },
            dispose: Functions.Blank
        };
    };

    // optimization for multiple where and multiple select and whereselect

    var WhereEnumerable = function (source, predicate) {
        this.prevSource = source;
        this.prevPredicate = predicate; // predicate.length always <= 1
    };
    WhereEnumerable.prototype = new Enumerable();

    WhereEnumerable.prototype.where = function (predicate) {
        predicate = Utils.createLambda(predicate);

        if (predicate.length <= 1) {
            var prevPredicate = this.prevPredicate;
            var composedPredicate = function (x) { return prevPredicate(x) && predicate(x); };
            return new WhereEnumerable(this.prevSource, composedPredicate);
        }
        else {
            // if predicate use index, can't compose
            return Enumerable.prototype.where.call(this, predicate);
        }
    };

    WhereEnumerable.prototype.select = function (selector) {
        selector = Utils.createLambda(selector);

        return (selector.length <= 1)
            ? new WhereSelectEnumerable(this.prevSource, this.prevPredicate, selector)
            : Enumerable.prototype.select.call(this, selector);
    };

    WhereEnumerable.prototype.getEnumerator = function () {
        var predicate = this.prevPredicate;
        var source = this.prevSource;
        var enumerator;

        return new IEnumerator(
            function () { enumerator = source.getEnumerator(); },
            function () {
                while (enumerator.moveNext()) {
                    if (predicate(enumerator.current())) {
                        return this.yieldReturn(enumerator.current());
                    }
                }
                return false;
            },
            function () { Utils.dispose(enumerator); });
    };

    var WhereSelectEnumerable = function (source, predicate, selector) {
        this.prevSource = source;
        this.prevPredicate = predicate; // predicate.length always <= 1 or null
        this.prevSelector = selector; // selector.length always <= 1
    };
    WhereSelectEnumerable.prototype = new Enumerable();

    WhereSelectEnumerable.prototype.where = function (predicate) {
        predicate = Utils.createLambda(predicate);

        return (predicate.length <= 1)
            ? new WhereEnumerable(this, predicate)
            : Enumerable.prototype.where.call(this, predicate);
    };

    WhereSelectEnumerable.prototype.select = function (selector) {
        selector = Utils.createLambda(selector);

        if (selector.length <= 1) {
            var prevSelector = this.prevSelector;
            var composedSelector = function (x) { return selector(prevSelector(x)); };
            return new WhereSelectEnumerable(this.prevSource, this.prevPredicate, composedSelector);
        }
        else {
            // if selector use index, can't compose
            return Enumerable.prototype.select.call(this, selector);
        }
    };

    WhereSelectEnumerable.prototype.getEnumerator = function () {
        var predicate = this.prevPredicate;
        var selector = this.prevSelector;
        var source = this.prevSource;
        var enumerator;

        return new IEnumerator(
            function () { enumerator = source.getEnumerator(); },
            function () {
                while (enumerator.moveNext()) {
                    if (predicate == null || predicate(enumerator.current())) {
                        return this.yieldReturn(selector(enumerator.current()));
                    }
                }
                return false;
            },
            function () { Utils.dispose(enumerator); });
    };

    // Collections

    var Dictionary = (function () {
        // static utility methods
        var callHasOwnProperty = function (target, key) {
            return Object.prototype.hasOwnProperty.call(target, key);
        };

        var computeHashCode = function (obj) {
            if (obj === null) return "null";
            if (obj === undefined) return "undefined";

            return (typeof obj.toString === Types.Function)
                ? obj.toString()
                : Object.prototype.toString.call(obj);
        };

        // LinkedList for Dictionary
        var HashEntry = function (key, value) {
            this.key = key;
            this.value = value;
            this.prev = null;
            this.next = null;
        };

        var EntryList = function () {
            this.first = null;
            this.last = null;
        };
        EntryList.prototype =
        {
            addLast: function (entry) {
                if (this.last != null) {
                    this.last.next = entry;
                    entry.prev = this.last;
                    this.last = entry;
                } else this.first = this.last = entry;
            },

            replace: function (entry, newEntry) {
                if (entry.prev != null) {
                    entry.prev.next = newEntry;
                    newEntry.prev = entry.prev;
                } else this.first = newEntry;

                if (entry.next != null) {
                    entry.next.prev = newEntry;
                    newEntry.next = entry.next;
                } else this.last = newEntry;

            },

            remove: function (entry) {
                if (entry.prev != null) entry.prev.next = entry.next;
                else this.first = entry.next;

                if (entry.next != null) entry.next.prev = entry.prev;
                else this.last = entry.prev;
            }
        };

        // Overload:function()
        // Overload:function(compareSelector)
        var Dictionary = function (compareSelector) {
            this.countField = 0;
            this.entryList = new EntryList();
            this.buckets = {}; // as Dictionary<string,List<object>>
            this.compareSelector = (compareSelector == null) ? Functions.Identity : compareSelector;
        };
        Dictionary.prototype =
        {
            add: function (key, value) {
                var compareKey = this.compareSelector(key);
                var hash = computeHashCode(compareKey);
                var entry = new HashEntry(key, value);
                if (callHasOwnProperty(this.buckets, hash)) {
                    var array = this.buckets[hash];
                    for (var i = 0; i < array.length; i++) {
                        if (this.compareSelector(array[i].key) === compareKey) {
                            this.entryList.replace(array[i], entry);
                            array[i] = entry;
                            return;
                        }
                    }
                    array.push(entry);
                } else {
                    this.buckets[hash] = [entry];
                }
                this.countField++;
                this.entryList.addLast(entry);
            },

            get: function (key) {
                var compareKey = this.compareSelector(key);
                var hash = computeHashCode(compareKey);
                if (!callHasOwnProperty(this.buckets, hash)) return undefined;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++) {
                    var entry = array[i];
                    if (this.compareSelector(entry.key) === compareKey) return entry.value;
                }
                return undefined;
            },

            set: function (key, value) {
                var compareKey = this.compareSelector(key);
                var hash = computeHashCode(compareKey);
                if (callHasOwnProperty(this.buckets, hash)) {
                    var array = this.buckets[hash];
                    for (var i = 0; i < array.length; i++) {
                        if (this.compareSelector(array[i].key) === compareKey) {
                            var newEntry = new HashEntry(key, value);
                            this.entryList.replace(array[i], newEntry);
                            array[i] = newEntry;
                            return true;
                        }
                    }
                }
                return false;
            },

            contains: function (key) {
                var compareKey = this.compareSelector(key);
                var hash = computeHashCode(compareKey);
                if (!callHasOwnProperty(this.buckets, hash)) return false;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++) {
                    if (this.compareSelector(array[i].key) === compareKey) return true;
                }
                return false;
            },

            clear: function () {
                this.countField = 0;
                this.buckets = {};
                this.entryList = new EntryList();
            },

            remove: function (key) {
                var compareKey = this.compareSelector(key);
                var hash = computeHashCode(compareKey);
                if (!callHasOwnProperty(this.buckets, hash)) return;

                var array = this.buckets[hash];
                for (var i = 0; i < array.length; i++) {
                    if (this.compareSelector(array[i].key) === compareKey) {
                        this.entryList.remove(array[i]);
                        array.splice(i, 1);
                        if (array.length == 0) delete this.buckets[hash];
                        this.countField--;
                        return;
                    }
                }
            },

            count: function () {
                return this.countField;
            },

            toEnumerable: function () {
                var self = this;
                return new Enumerable(function () {
                    var currentEntry;

                    return new IEnumerator(
                        function () { currentEntry = self.entryList.first; },
                        function () {
                            if (currentEntry != null) {
                                var result = { key: currentEntry.key, value: currentEntry.value };
                                currentEntry = currentEntry.next;
                                return this.yieldReturn(result);
                            }
                            return false;
                        },
                        Functions.Blank);
                });
            }
        };

        return Dictionary;
    })();

    // dictionary = Dictionary<TKey, TValue[]>
    var Lookup = function (dictionary) {
        this.count = function () {
            return dictionary.count();
        };
        this.get = function (key) {
            return Enumerable.from(dictionary.get(key));
        };
        this.contains = function (key) {
            return dictionary.contains(key);
        };
        this.toEnumerable = function () {
            return dictionary.toEnumerable().select(function (kvp) {
                return new Grouping(kvp.key, kvp.value);
            });
        };
    };

    var Grouping = function (groupKey, elements) {
        this.key = function () {
            return groupKey;
        };
        ArrayEnumerable.call(this, elements);
    };
    Grouping.prototype = new ArrayEnumerable();

    // module export
    if (typeof define === Types.Function && define.amd) { // AMD
        define("linqjs", [], function () { return Enumerable; });
    }
    else if (typeof module !== Types.Undefined && module.exports) { // Node
        module.exports = Enumerable;
    }
    else {
        root.Enumerable = Enumerable;
    }
})(this);
define("scalejs.linq-linqjs",["scalejs!core","linqjs"],function(a,b){b.Utils.extendTo(Array),a.registerExtension({linq:{enumerable:b}})});
define("scalejs.statechart-scion/state.builder",["scalejs!core","scion-ng"],function(a,b){return function(c){function d(a){return A(function(b){if(b.onEntry)throw new Error("Only one `onEntry` action is allowed.");if("function"!=typeof a)throw new Error("`onEntry` takes a function as a parameter.");return b.onEntry=a,b})}function e(a){return A(function(b){if(b.onExit)throw new Error("Only one `onExit` action is allowed.");if("function"!=typeof a)throw new Error("`onExit` takes a function as a parameter.");return b.onExit=a,b})}function f(a){return A(function(b){b.event=a})}function g(a){return A(function(b){b.cond=a})}function h(a,b,c){return A(function(d){return"state"===d.type||"parallel"===d.type?u(h(a,b,c))(d):(a&&(d.type="internal"),void("function"==typeof b?d.onTransition=b:(d.target=x(b,"array")?b:b.split(" "),c&&(d.onTransition=c))))})}function i(a,b){return h(!1,a,b)}function j(a,b){return h(!0,a,b)}function k(a){if("function"==typeof a)return A(function(b){b.onTransition=a});if("$yield"===a.kind)return a;throw new Error("Unsupported transition action",a)}function l(){var a,b=v.copy(arguments),c=b.pop();if(b.length>2)throw new Error("First (optional) argument should be event name, second (optional) argument should be a condition function");if("function"!=typeof c&&"$yield"!==c.kind)throw new Error("Last argument should be either `goto` or a function.");return a=b.map(function(a){if("string"==typeof a)return f(a);if("function"==typeof a)return g(a);throw new Error("Transition argument ",a," is not supported. First (optional) argument should be event name, second (optional) argument should be a condition function")}),A(u.apply(null,a.concat([k(c)])))}function m(){var a=v.copy(arguments),b=a.pop();if(a.forEach(function(a){if("string"!=typeof a)throw new Error("`whenInStates` accepts list of states and either `goto` or a function as the last argument.")}),"function"!=typeof b&&"$yield"!==b.kind)throw new Error("Last argument should be either `goto` or a function.");return A(u(g(function(b,c){return a.every(function(a){return c(a)})}),b))}function n(){var a=v.copy(arguments),b=a.pop();if(a.forEach(function(a){if("string"!=typeof a)throw new Error("`whenNotInStates` accepts list of states and either `goto` or a function as the last argument.")}),"function"!=typeof b&&"$yield"!==b.kind)throw new Error("Last argument should be either `goto` or a function.");return A(u(g(function(b,c){return a.every(function(a){return!c(a)})}),b))}function o(a){return A(function(b){return b.parallel?new Error("`initial` shouldn't be specified on parallel region."):void(b.initial=a)})}function p(c){return function(){var d,e,f;return d=s.apply(null,arguments),e=new b.Statechart(d,y({log:a.log.debug},c)),f=e._scriptingContext.raise,e._scriptingContext.raise=function(a){var b="string"==typeof a?{name:a}:a;f.call(e._scriptingContext,b)},e.send=function(a,b){return e._scriptingContext.send.call(e,a,b||{})},e}}var q,r,s,t,u,v=a.array,w=a.object.has,x=a.type.is,y=a.object.merge,z=a.functional.builder,A=z.$yield;return q=z({run:function(a,b){var c={};return c.type=w(b,"parallel")?"parallel":"state",a(c),c},delay:function(a){return a()},zero:function(){return function(){}},$yield:function(a){return a},combine:function(a,b){return function(c){a(c),b(c)}},missing:function(a){if("string"==typeof a)return function(b){if(b.id)throw new Error("Can't set state id to \""+a+'". state\'s id is already set to "'+b.id+'"');b.id=a};if("function"==typeof a)return a;if("state"===a.type||"parallel"===a.type)return function(b){b.states||(b.states=[]),b.states.push(a)};throw new Error("Missing builder for expression: "+JSON.stringify(a))}}),s=q(),t=q({parallel:!0}),r=z({run:function(a){return function(b){b.transitions||(b.transitions=[]);var c={};a(c),b.transitions.push(c)}},delay:function(a){return a()},zero:function(){return function(){}},$yield:function(a){return a},combine:function(a,b){return function(c){a(c),b(c)}},missing:function(a){if("function"==typeof a)return a;throw new Error('Unknown operation "'+a.kind+'" in transition expression',a)}}),u=r(),{builder:p,state:s,parallel:t,initial:o,onEntry:d,onExit:e,on:l,whenInStates:m,whenNotInStates:n,"goto":i,gotoInternally:j,statechart:p({logStatesEnteredAndExited:c.logStatesEnteredAndExited,log:a.log.debug})}}}),define("scalejs.statechart-scion/state",["scalejs!core","./state.builder","scion-ng","scalejs.functional","scalejs.linq-linqjs"],function(a,b,c){return function(d){function e(a){return t(a,"states")?q.make(a).concat(q.from(a.states).selectMany(e)):q.make(a)}function f(a,b){var c=e(a).firstOrDefault(function(a){return a.id===b});return c}function g(a,b){var c=e(a).firstOrDefault(function(a){return a.states&&a.states.some(function(a){return a.id===b})});return c}function h(){return v(function(a,b){var c,d;if(c=f(o,a),!c)throw new Error('Parent state "'+a+"\" doesn't exist");if(t(b,"id")&&(d=f(o,b.id)))throw new Error('State "'+b.id+'" already exists.');t(c,"states")||(c.states=[]),c.states.push(b)}).apply(null,arguments)}function i(b){if(a.isApplicationRunning())throw new Error("Can't register a state while application is running.");r(arguments,1).forEach(h(b))}function j(a,b){var c;if(c=f(o,a),!c)throw new Error('Parent state "'+a+"\" doesn't exist");b.expr(c)}function k(){if(a.isApplicationRunning())throw new Error("Can't unregister a state while application is running.");r(arguments).forEach(function(a){var b=g(o,a),c=q.from(b.states).first(function(b){return b.id===a});s(b.states,c)})}function l(a,b,c){var d;if(u(a,"string"))d={name:a};else{if(!t(a,"name"))throw new Error("event object should have `name` property.");d=a}!t(c)&&u(b,"number")?c=b:d.data=b,p.send(d,{delay:c})}function m(){return a.reactive.Observable.create(function(a){var b={onEntry:function(b,c){a.onNext({event:"entry",state:b,context:this,currentEvent:c})},onExit:function(b,c){a.onNext({event:"exit",state:b,currentEvent:c})},onTransition:function(b,c,d){a.onNext({event:"transition",source:b,targets:c,currentEvent:d})}};return p?p.registerListener(b):z.push(b),function(){p.unregisterListener(b)}})}function n(a){return function(b){m().where(function(b){return"entry"===b.event&&b.state===a}).take(1).subscribe(function(){b()})}}var o,p,q=a.linq.enumerable,r=a.array.toArray,s=a.array.removeOne,t=a.object.has,u=a.type.is,v=a.functional.curry,w=b(d),x=w.state,y=w.parallel,z=[];return o=x("scalejs-app",y("root")),a.onApplicationEvent(function(b){var e;switch(b){case"started":p=new c.Statechart(o,{logStatesEnteredAndExited:d.logStatesEnteredAndExited,log:a.log.debug}),e=p._scriptingContext.raise,p._scriptingContext.raise=function(a){var b="string"==typeof a?{name:a}:a;e.call(p._scriptingContext,b)},p.send=function(a,b){return p._scriptingContext.send.call(p,a,b||{})},z.forEach(function(a){p.registerListener(a)}),p.start();break;case"stopped":}}),{registerStates:i,registerTransition:j,unregisterStates:k,raise:l,observe:m,onState:n,builder:w}}}),define("scalejs.statechart-scion",["scalejs!core","./scalejs.statechart-scion/state","module"],function(a,b,c){a.registerExtension({state:b(c.config())})});
/*global define,window,document*/
/*jslint todo:true*/
define('scalejs.routing-historyjs/routing',[
    'scalejs!core',
    './history',
    './router',
    'rx',
    'scalejs.statechart-scion'
], function (
    core,
    history,
    router,
    rx
) {
    'use strict';

    var has = core.object.has,
        extend = core.object.extend,
        toArray = core.array.toArray,
        on = core.state.builder.on,
        gotoInternally = core.state.builder.gotoInternally,
        onEntry = core.state.builder.onEntry,
        state = core.state.builder.state,
        raise = core.state.raise,
        $yield = core.functional.builder.$yield,
        registerTransition = core.state.registerTransition,
        observeState = core.state.observe,
        // properties
        routerStateId,
        routerTransitions = [],
        disposable = new rx.CompositeDisposable(),
        firstNavigation = true;

    function navigate(url) {
        if (firstNavigation) {
            firstNavigation = false;
            history.replace({ url: url });
        } else {
            history.add({ url: url });
        }
    }

    function setupRouting() {
        var currentUrl;

        disposable.add(observeState().subscribe(function (e) {
            var url;

            // do routing on state entry
            if (e.event !== 'entry') { return; }

            // try map data to url with the router
            url = router.tryToUrl(e.state, e.currentEvent ? e.currentEvent.data : null);

            // if mapping succeded then navigate to url
            if (url) {
                navigate(url);
            }
        }));

        disposable.add(history.observe().subscribe(function (e) {
            var url = e.hash;

            if (currentUrl === url) { return; } //do not cause statechange if url is the same
            currentUrl = url;

            // needs a delay of 0 so that the transition is defined on the parent state
            raise('routed', { url: url }, 0);
        }));
    }

    function disposeRouting() {
        disposable.dispose();
        //routerTransitions = [];
    }

    function route(routeDef) {
        return $yield(function (s) {
            var transition;

            // add route for this state to router
            router.addRoute(s.id, routeDef);
            // create transition that would trigger on 'routed' event and will attempt to parse the url
            transition = on('routed', function (e) {
                // if path of the 'routed' event matches the route then transition is active
                var parsed = router.tryFromUrl(s.id, e.data.url);

                if (parsed) {
                    extend(e.data, parsed);
                    return true;
                }
            }, gotoInternally(s.id));

            // if router state is already added then register transition on that state
            // otherwise add transition to the list of transitions to be registered once
            // the router state gets registered
            if (routerStateId) {
                registerTransition(routerStateId, transition);
            } else {
                routerTransitions.push(transition);
            }
        });
    }

    function routerState(stateId, optsOrBuilders) {
        var builders,
            builtRouterState;

        routerStateId = stateId;

        if (has(optsOrBuilders, 'baseUrl')) {
            router.setBaseUrl(optsOrBuilders.baseUrl);
            builders = toArray(arguments).slice(2, arguments.length);
        } else {
            builders = toArray(arguments).slice(1, arguments.length);
        }

        builtRouterState = state.apply(null, [
            routerStateId,
            on('router.disposing', gotoInternally('router.disposed')),
            state('router.waiting', onEntry(setupRouting)),
            state('router.disposed', onEntry(disposeRouting))
        ].concat(routerTransitions)
            .concat(builders));

        return builtRouterState;
    }

    return {
        route: route,
        routerState: routerState
    };
});

/*global define*/
define('scalejs.routing-historyjs',[
    'scalejs!core',
    './scalejs.routing-historyjs/routing'
], function (
    core,
    routing
) {
    'use strict';

    core.registerExtension({ routing: routing });
});

