(self.webpackChunktonana_landing=self.webpackChunktonana_landing||[]).push([[577],{9609:function(e,n,t){var r=t(9070)("jsonp");e.exports=function(e,n,t){"function"==typeof n&&(t=n,n={});n||(n={});var a,c,i=n.prefix||"__jp",u=n.name||i+o++,l=n.param||"callback",f=null!=n.timeout?n.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;f&&(c=setTimeout((function(){m(),t&&t(new Error("Timeout"))}),f));function m(){a.parentNode&&a.parentNode.removeChild(a),window[u]=s,c&&clearTimeout(c)}return window[u]=function(e){r("jsonp got",e),m(),t&&t(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+d(u)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,p.parentNode.insertBefore(a,p),function(){window[u]&&m()}};var o=0;function s(){}},9070:function(e,n,t){function r(){var e;try{e=n.storage.debug}catch(t){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"/landing",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MAILCHIMP_KEY:"https://chat.us14.list-manage.com/subscribe/post?u=63396c3932c39d351c5a97e14&id=5b38a1847d"}.DEBUG),e}(n=e.exports=t(4443)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))})),e.splice(s,0,r)},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(t){}},n.load=r,n.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}},n.enable(r())},4443:function(e,n,t){var r;function o(e){function t(){if(t.enabled){var e=t,o=+new Date,s=o-(r||o);e.diff=s,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),c=0;c<a.length;c++)a[c]=arguments[c];a[0]=n.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var i=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(t,r){if("%%"===t)return t;i++;var o=n.formatters[r];if("function"===typeof o){var s=a[i];t=o.call(e,s),a.splice(i,1),i--}return t})),n.formatArgs.call(e,a);var u=t.log||n.log||console.log.bind(console);u.apply(e,a)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}(e),"function"===typeof n.init&&n.init(t),t}(n=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"===typeof e?e:"").split(/[\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&("-"===(e=t[o].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=t(2927),n.names=[],n.skips=[],n.formatters={}},2927:function(e){var n=1e3,t=60*n,r=60*t,o=24*r,s=365.25*o;function a(e,n,t){if(!(e<n))return e<1.5*n?Math.floor(e/n)+" "+t:Math.ceil(e/n)+" "+t+"s"}e.exports=function(e,c){c=c||{};var i,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*t;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&!1===isNaN(e))return c.long?a(i=e,o,"day")||a(i,r,"hour")||a(i,t,"minute")||a(i,n,"second")||i+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=t)return Math.round(e/t)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},9577:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(2791),o=t(9609),s=t.n(o),a=t(1491),c=t.n(a),i=function(e){var n=e.status,t=e.message,o=e.className,s=e.style,a=e.onSubmitted,c=void 0;return r.createElement("div",{className:o,style:s},"sending"===n&&r.createElement("div",{style:{color:"blue"}},"sending..."),"error"===n&&r.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:t}}),"success"===n&&r.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:t}}),r.createElement("input",{ref:function(e){return c=e},type:"email",placeholder:"Your email"}),r.createElement("button",{onClick:function(){return c&&c.value.indexOf("@")>-1&&a({EMAIL:c.value})}},"Submit"))};function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}var f=function(e){return e.replace("/post?","/post-json?")},d=function(e){function n(){var t,r;u(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=l(this,e.call.apply(e,[this].concat(a))),r.state={status:null,message:null},r.subscribe=function(e){var n=c()(e),t=f(r.props.url)+"&"+n;r.setState({status:"sending",message:null},(function(){return s()(t,{param:"c"},(function(e,n){e?r.setState({status:"error",message:e}):"success"!==n.result?r.setState({status:"error",message:n.msg}):r.setState({status:"success",message:n.msg})}))}))},l(r,t)}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),n.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},n}(r.Component);d.propTypes={},d.defaultProps={render:function(e){var n=e.subscribe,t=e.status,o=e.message;return r.createElement(i,{status:t,message:o,onSubmitted:function(e){return n(e)}})}};var p=d},1491:function(e){"undefined"!=typeof self&&self,e.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e,n,t,r,o){var c=r&&o.arrayPrefix||"";return"object"===(void 0===n?"undefined":a(n))?""+s(n,t+""+e+c+(t&&"]")+"[",o):t&&t.length?""+t+e+"]"+c+"="+encodeURIComponent(n):""+e+c+"="+encodeURIComponent(n)}function o(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n.map((function(n){return r(e,n,t,!0,o)})).join("&")}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=[];return s=Array.isArray(e)?e.map((function(e,o){return r(""+o,e,n,!0,t)})):Object.keys(e).filter((function(n){return void 0!==e[n]})).map((function(s){return e[s]&&Array.isArray(e[s])?o(""+s,e[s],n,t):r(s,e[s],n,!1,t)})),s.join("&").replace(/%20/g,"+")}Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.default=s}])}}]);
//# sourceMappingURL=577.fbf35f48.chunk.js.map