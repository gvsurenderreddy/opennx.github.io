/* ***********************************
* Julia player
*
* @author prochor666@gmail.com
* version: 0.9.7
* build: 2016-2-25
* licensed under the MIT License
*
* @requires:
* hls.js [required]
* jquery [required]
* ionicons [required]
* rangeslider.js [required]
*
************************************* */

// Support libs
if(!window.jQuery)
{
    alert('jQuery is required');
    window.stop();
}

(function($)
{
    // Root path workaround
    var __JULIA_ROOT_PATH__ = 'julia';
    dir = document.querySelector('script[src*="julia-player"]').getAttribute('src');
    name = dir.split('/').pop();
    __JULIA_ROOT_PATH__ = dir.replace('/js/'+name,"");
    $('head').append('<link rel="stylesheet" type="text/css" href="'+__JULIA_ROOT_PATH__+'/css/ionicons.min.css">');

    // Support libs
    try {
        h = new Hls;

    }catch(err)
    {
        /*! hls.js 0.5.7, handle error or insert source */
        !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Hls=e()}}(function(){return function s(e,t,r){function n(a,d){if(!t[a]){if(!e[a]){var l="function"==typeof require&&require;if(!d&&l)return l(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var o=t[a]={exports:{}};e[a][0].call(o.exports,function(t){var r=e[a][1][t];return n(r?r:t)},o,o.exports,s,e,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(s,a,o){function e(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function t(e){return"function"==typeof e}function i(e){return"number"==typeof e}function r(e){return"object"==typeof e&&null!==e}function n(e){return void 0===e}a.exports=e,e.EventEmitter=e,e.prototype._events=void 0,e.prototype._maxListeners=void 0,e.defaultMaxListeners=10,e.prototype.setMaxListeners=function(e){if(!i(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},e.prototype.emit=function(l){var s,e,u,a,i,o;if(this._events||(this._events={}),"error"===l&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if(s=arguments[1],s instanceof Error)throw s;throw TypeError('Uncaught, unspecified "error" event.')}if(e=this._events[l],n(e))return!1;if(t(e))switch(arguments.length){case 1:e.call(this);break;case 2:e.call(this,arguments[1]);break;case 3:e.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),e.apply(this,a)}else if(r(e))for(a=Array.prototype.slice.call(arguments,1),o=e.slice(),u=o.length,i=0;u>i;i++)o[i].apply(this,a);return!0},e.prototype.addListener=function(a,i){var s;if(!t(i))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,t(i.listener)?i.listener:i),this._events[a]?r(this._events[a])?this._events[a].push(i):this._events[a]=[this._events[a],i]:this._events[a]=i,r(this._events[a])&&!this._events[a].warned&&(s=n(this._maxListeners)?e.defaultMaxListeners:this._maxListeners,s&&s>0&&this._events[a].length>s&&(this._events[a].warned=!0,"function"==typeof console.trace)),this},e.prototype.on=e.prototype.addListener,e.prototype.once=function(n,e){function r(){this.removeListener(n,r),a||(a=!0,e.apply(this,arguments))}if(!t(e))throw TypeError("listener must be a function");var a=!1;return r.listener=e,this.on(n,r),this},e.prototype.removeListener=function(a,n){var e,s,o,i;if(!t(n))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(e=this._events[a],o=e.length,s=-1,e===n||t(e.listener)&&e.listener===n)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,n);else if(r(e)){for(i=o;i-- >0;)if(e[i]===n||e[i].listener&&e[i].listener===n){s=i;break}if(0>s)return this;1===e.length?(e.length=0,delete this._events[a]):e.splice(s,1),this._events.removeListener&&this.emit("removeListener",a,n)}return this},e.prototype.removeAllListeners=function(r){var n,e;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[r]&&delete this._events[r],this;if(0===arguments.length){for(n in this._events)"removeListener"!==n&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events={},this}if(e=this._events[r],t(e))this.removeListener(r,e);else if(e)for(;e.length;)this.removeListener(r,e[e.length-1]);return delete this._events[r],this},e.prototype.listeners=function(e){var r;return r=this._events&&this._events[e]?t(this._events[e])?[this._events[e]]:this._events[e].slice():[]},e.prototype.listenerCount=function(r){if(this._events){var e=this._events[r];if(t(e))return 1;if(e)return e.length}return 0},e.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(i,n,s){var a=arguments[3],e=arguments[4],r=arguments[5],t=JSON.stringify;n.exports=function(l){for(var n,s=Object.keys(r),i=0,d=s.length;d>i;i++){var o=s[i],u=r[o].exports;if(u===l||u.default===l){n=o;break}}if(!n){n=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var f={},i=0,d=s.length;d>i;i++){var o=s[i];f[o]=o}e[n]=[Function(["require","module","exports"],"("+l+")(self)"),f]}var h=Math.floor(Math.pow(16,8)*Math.random()).toString(16),c={};c[n]=n,e[h]=[Function(["require"],"var f = require("+t(n)+");(f.default ? f.default : f)(self);"),c];var g="("+a+")({"+Object.keys(e).map(function(r){return t(r)+":["+e[r][0]+","+t(e[r][1])+"]"}).join(",")+"},{},["+t(h)+"])",v=window.URL||window.webkitURL||window.mozURL||window.msURL;return new Worker(v.createObjectURL(new Blob([g],{type:"text/javascript"})))}},{}],3:[function(e,h,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=e("../events"),u=r(l),d=e("../event-handler"),n=r(d),s=function(t){function e(r){a(this,e);var t=i(this,Object.getPrototypeOf(e).call(this,r,u.default.FRAG_LOAD_PROGRESS));return t.lastfetchlevel=0,t._autoLevelCapping=-1,t._nextAutoLevel=-1,t}return f(e,t),o(e,[{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"onFragLoadProgress",value:function(e){var t=e.stats;void 0===t.aborted&&1===e.frag.loadCounter&&(this.lastfetchduration=(performance.now()-t.trequest)/1e3,this.lastfetchlevel=e.frag.level,this.lastbw=8*t.loaded/this.lastfetchduration)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){this._autoLevelCapping=e}},{key:"nextAutoLevel",get:function(){var r,e,t,n=this.lastbw,a=this.hls;if(t=-1===this._autoLevelCapping?a.levels.length-1:this._autoLevelCapping,-1!==this._nextAutoLevel){var i=Math.min(this._nextAutoLevel,t);if(i!==this.lastfetchlevel)return i;this._nextAutoLevel=-1}for(e=0;t>=e;e++)if(r=e<=this.lastfetchlevel?.8*n:.7*n,r<a.levels[e].bitrate)return Math.max(0,e-1);return e-1},set:function(e){this._nextAutoLevel=e}}]),e}(n.default);t.default=s},{"../event-handler":20,"../events":21}],4:[function(n,g,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(a,"__esModule",{value:!0});var l=n("../events"),e=i(l),d=n("../event-handler"),s=i(d),t=n("../utils/logger"),r=n("../errors"),o=function(a){function n(r){u(this,n);var t=f(this,Object.getPrototypeOf(n).call(this,r,e.default.MEDIA_ATTACHING,e.default.MEDIA_DETACHING,e.default.BUFFER_RESET,e.default.BUFFER_APPENDING,e.default.BUFFER_CODECS,e.default.BUFFER_EOS,e.default.BUFFER_FLUSHING));return t.onsbue=t.onSBUpdateEnd.bind(t),t.onsbe=t.onSBUpdateError.bind(t),t}return h(n,a),c(n,[{key:"destroy",value:function(){s.default.prototype.destroy.call(this)}},{key:"onMediaAttaching",value:function(t){var r=this.media=t.media,e=this.mediaSource=new MediaSource;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),e.addEventListener("sourceopen",this.onmso),e.addEventListener("sourceended",this.onmse),e.addEventListener("sourceclose",this.onmsc),r.src=URL.createObjectURL(e)}},{key:"onMediaDetaching",value:function(){var r=this.mediaSource;if(r){if("open"===r.readyState)try{r.endOfStream()}catch(e){t.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}r.removeEventListener("sourceopen",this.onmso),r.removeEventListener("sourceended",this.onmse),r.removeEventListener("sourceclose",this.onmsc),this.media.src="",this.mediaSource=null,this.media=null,this.pendingTracks=null}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(e.default.MEDIA_DETACHED)}},{key:"onMediaSourceOpen",value:function(){t.logger.log("media source opened"),this.hls.trigger(e.default.MEDIA_ATTACHED,{media:this.media}),this.mediaSource.removeEventListener("sourceopen",this.onmso);var r=this.pendingTracks;r&&(this.onBufferCodecs(r),this.pendingTracks=null,this.doAppending())}},{key:"onMediaSourceClose",value:function(){t.logger.log("media source closed")}},{key:"onMediaSourceEnded",value:function(){t.logger.log("media source ended")}},{key:"onSBUpdateEnd",value:function(){this._needsFlush&&this.doFlush(),this._needsEos&&this.onBufferEos(),this.hls.trigger(e.default.BUFFER_APPENDED),this.doAppending()}},{key:"onSBUpdateError",value:function(n){t.logger.error("sourceBuffer error:"+n),this.hls.trigger(e.default.ERROR,{type:r.ErrorTypes.MEDIA_ERROR,details:r.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferReset",value:function(){var e=this.sourceBuffer;if(e){for(var r in e){var t=e[r];try{this.mediaSource.removeSourceBuffer(t),t.removeEventListener("updateend",this.onsbue),t.removeEventListener("error",this.onsbe)}catch(e){}}this.sourceBuffer=null}this.flushRange=[],this.appended=0}},{key:"onBufferCodecs",value:function(r){var n,a,e,s,i;if(!this.media)return void(this.pendingTracks=r);if(!this.sourceBuffer){var o={},l=this.mediaSource;for(a in r)e=r[a],s=e.levelCodec||e.codec,i=e.container+";codecs="+s,t.logger.log("creating sourceBuffer with mimeType:"+i),n=o[a]=l.addSourceBuffer(i),n.addEventListener("updateend",this.onsbue),n.addEventListener("error",this.onsbe);this.sourceBuffer=o}}},{key:"onBufferAppending",value:function(e){this.segments?this.segments.push(e):this.segments=[e],this.doAppending()}},{key:"onBufferAppendFail",value:function(n){t.logger.error("sourceBuffer error:"+n.event),this.hls.trigger(e.default.ERROR,{type:r.ErrorTypes.MEDIA_ERROR,details:r.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1,frag:this.fragCurrent})}},{key:"onBufferEos",value:function(){var e=this.sourceBuffer,r=this.mediaSource;r&&"open"===r.readyState&&(e.audio&&e.audio.updating||e.video&&e.video.updating?this._needsEos=!0:(t.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment"),r.endOfStream(),this._needsEos=!1))}},{key:"onBufferFlushing",value:function(e){this.flushRange.push({start:e.startOffset,end:e.endOffset}),this.flushBufferCounter=0,this.doFlush()}},{key:"doFlush",value:function(){for(;this.flushRange.length;){var r=this.flushRange[0];if(!this.flushBuffer(r.start,r.end))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var n=0,t=this.sourceBuffer;if(t)for(var a in t)n+=t[a].buffered.length;this.appended=n,this.hls.trigger(e.default.BUFFER_FLUSHED)}}},{key:"doAppending",value:function(){var i=this.hls,s=this.sourceBuffer,a=this.segments;if(s){if(this.media.error)return a=[],void t.logger.error("trying to append although a media error occured, flush segment and abort");for(var l in s)if(s[l].updating)return;if(a.length){var o=a.shift();try{s[o.type].appendBuffer(o.data),this.appendError=0,this.appended++}catch(s){t.logger.error("error while trying to append buffer:"+s.message),a.unshift(o);var n={type:r.ErrorTypes.MEDIA_ERROR};if(22!==s.code){if(this.appendError?this.appendError++:this.appendError=1,n.details=r.ErrorDetails.BUFFER_APPEND_ERROR,n.frag=this.fragCurrent,this.appendError>i.config.appendErrorMaxRetry)return t.logger.log("fail "+i.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),a=[],n.fatal=!0,void i.trigger(e.default.ERROR,n);n.fatal=!1,i.trigger(e.default.ERROR,n)}else a=[],n.details=r.ErrorDetails.BUFFER_FULL,i.trigger(e.default.ERROR,n)}}}}},{key:"flushBuffer",value:function(l,s){var e,r,o,i,n,a;if(this.flushBufferCounter<this.appended&&this.sourceBuffer)for(var u in this.sourceBuffer){if(e=this.sourceBuffer[u],e.updating)return t.logger.warn("cannot flush, sb updating in progress"),!1;for(r=0;r<e.buffered.length;r++)if(o=e.buffered.start(r),i=e.buffered.end(r),-1!==navigator.userAgent.toLowerCase().indexOf("firefox")&&s===Number.POSITIVE_INFINITY?(n=l,a=s):(n=Math.max(o,l),a=Math.min(i,s)),Math.min(a,i)-n>.5)return this.flushBufferCounter++,t.logger.log("flush "+u+" ["+n+","+a+"], of ["+o+","+i+"], pos:"+this.media.currentTime),e.remove(n,a),!1}else t.logger.warn("abort flushing too many retries");return t.logger.log("buffer flushed"),!0}}]),n}(s.default);a.default=o},{"../errors":19,"../event-handler":20,"../events":21,"../utils/logger":34}],5:[function(n,g,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(a,"__esModule",{value:!0});var l=n("../events"),t=i(l),d=n("../event-handler"),f=i(d),r=n("../utils/logger"),e=n("../errors"),o=function(a){function n(r){u(this,n);var e=h(this,Object.getPrototypeOf(n).call(this,r,t.default.MANIFEST_LOADED,t.default.LEVEL_LOADED,t.default.ERROR));return e.ontick=e.tick.bind(e),e._manualLevel=e._autoLevelCapping=-1,e}return s(n,a),c(n,[{key:"destroy",value:function(){this.timer&&clearInterval(this.timer),this._manualLevel=-1}},{key:"onManifestLoaded",value:function(l){var s,a,i=[],n=[],u={},d=!1,f=!1,o=this.hls;if(l.levels.forEach(function(e){e.videoCodec&&(d=!0),e.audioCodec&&(f=!0);var t=u[e.bitrate];void 0===t?(u[e.bitrate]=i.length,e.url=[e.url],e.urlId=0,i.push(e)):i[t].url.push(e.url)}),d&&f?i.forEach(function(e){e.videoCodec&&n.push(e)}):n=i,n=n.filter(function(e){var n=function(e){return MediaSource.isTypeSupported("audio/mp4;codecs="+e)},a=function(e){return MediaSource.isTypeSupported("video/mp4;codecs="+e)},t=e.audioCodec,r=e.videoCodec;return(!t||n(t))&&(!r||a(r))}),n.length){for(s=n[0].bitrate,n.sort(function(e,t){return e.bitrate-t.bitrate}),this._levels=n,a=0;a<n.length;a++)if(n[a].bitrate===s){this._firstLevel=a,r.logger.log("manifest loaded,"+n.length+" level(s) found, first bitrate:"+s);break}o.trigger(t.default.MANIFEST_PARSED,{levels:this._levels,firstLevel:this._firstLevel,stats:l.stats})}else o.trigger(t.default.ERROR,{type:e.ErrorTypes.NETWORK_ERROR,details:e.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:o.url,reason:"no compatible level found in manifest"})}},{key:"setLevelInternal",value:function(n){if(n>=0&&n<this._levels.length){this.timer&&(clearInterval(this.timer),this.timer=null),this._level=n,r.logger.log("switching to level "+n),this.hls.trigger(t.default.LEVEL_SWITCH,{level:n});var a=this._levels[n];if(void 0===a.details||a.details.live===!0){r.logger.log("(re)loading playlist for level "+n);var i=a.urlId;this.hls.trigger(t.default.LEVEL_LOADING,{url:a.url[i],level:n,id:i})}}else this.hls.trigger(t.default.ERROR,{type:e.ErrorTypes.OTHER_ERROR,details:e.ErrorDetails.LEVEL_SWITCH_ERROR,level:n,fatal:!1,reason:"invalid level idx"})}},{key:"onError",value:function(a){if(!a.fatal){var i,t,n=a.details,s=this.hls;switch(n){case e.ErrorDetails.FRAG_LOAD_ERROR:case e.ErrorDetails.FRAG_LOAD_TIMEOUT:case e.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case e.ErrorDetails.KEY_LOAD_ERROR:case e.ErrorDetails.KEY_LOAD_TIMEOUT:i=a.frag.level;break;case e.ErrorDetails.LEVEL_LOAD_ERROR:case e.ErrorDetails.LEVEL_LOAD_TIMEOUT:i=a.level}if(void 0!==i)if(t=this._levels[i],t.urlId<t.url.length-1)t.urlId++,t.details=void 0,r.logger.warn("level controller,"+n+" for level "+i+": switching to redundant stream id "+t.urlId);else{var o=-1===this._manualLevel&&i;o?(r.logger.warn("level controller,"+n+": emergency switch-down for next fragment"),s.abrController.nextAutoLevel=0):t&&t.details&&t.details.live?r.logger.warn("level controller,"+n+" on live stream, discard"):n!==e.ErrorDetails.FRAG_LOAD_ERROR&&n!==e.ErrorDetails.FRAG_LOAD_TIMEOUT&&(r.logger.error("cannot recover "+n+" error"),this._level=void 0,this.timer&&(clearInterval(this.timer),this.timer=null),a.fatal=!0,s.trigger(event,a))}}}},{key:"onLevelLoaded",value:function(e){e.details.live&&!this.timer&&(this.timer=setInterval(this.ontick,1e3*e.details.targetduration)),!e.details.live&&this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"tick",value:function(){var e=this._level;if(void 0!==e){var r=this._levels[e],n=r.urlId;this.hls.trigger(t.default.LEVEL_LOADING,{url:r.url[n],level:e,id:n})}}},{key:"nextLoadLevel",value:function(){return-1!==this._manualLevel?this._manualLevel:this.hls.abrController.nextAutoLevel}},{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this._level},set:function(e){(this._level!==e||void 0===this._levels[e].details)&&this.setLevelInternal(e)}},{key:"manualLevel",get:function(){return this._manualLevel},set:function(e){this._manualLevel=e,-1!==e&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){return void 0===this._startLevel?this._firstLevel:this._startLevel},set:function(e){this._startLevel=e}}]),n}(f.default);a.default=o},{"../errors":19,"../event-handler":20,"../events":21,"../utils/logger":34}],6:[function(a,_,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var m=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(o,"__esModule",{value:!0});var b=a("../demux/demuxer"),u=i(b),d=a("../events"),r=i(d),h=a("../event-handler"),s=i(h),t=a("../utils/logger"),v=a("../utils/binary-search"),p=i(v),y=a("../helper/level-helper"),l=i(y),n=a("../errors"),e={ERROR:"ERROR",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_LEVEL:"WAITING_LEVEL",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED"},E=function(i){function a(t){g(this,a);var e=f(this,Object.getPrototypeOf(a).call(this,t,r.default.MEDIA_ATTACHED,r.default.MEDIA_DETACHING,r.default.MANIFEST_PARSED,r.default.LEVEL_LOADED,r.default.KEY_LOADED,r.default.FRAG_LOADED,r.default.FRAG_PARSING_INIT_SEGMENT,r.default.FRAG_PARSING_DATA,r.default.FRAG_PARSED,r.default.ERROR,r.default.BUFFER_APPENDED,r.default.BUFFER_FLUSHED));return e.config=t.config,e.audioCodecSwap=!1,e.ticks=0,e.ontick=e.tick.bind(e),e}return c(a,i),m(a,[{key:"destroy",value:function(){this.stop(),s.default.prototype.destroy.call(this),this.state=e.IDLE}},{key:"startLoad",value:function(){if(this.levels){var r=this.media,n=this.lastCurrentTime;this.stop(),this.demuxer=new u.default(this.hls),this.timer=setInterval(this.ontick,100),this.level=-1,this.fragLoadError=0,r&&n?(t.logger.log("configure startPosition @"+n),this.lastPaused||(t.logger.log("resuming video"),r.play()),this.state=e.IDLE):(this.lastCurrentTime=this.startPosition?this.startPosition:0,this.state=e.STARTING),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else t.logger.warn("cannot start loading as manifest not parsed yet")}},{key:"stop",value:function(){this.bufferRange=[],this.stalled=!1;var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,t.logger.log("trigger BUFFER_RESET"),this.hls.trigger(r.default.BUFFER_RESET),this.timer&&(clearInterval(this.timer),this.timer=null),this.demuxer&&(this.demuxer.destroy(),this.demuxer=null)}},{key:"tick",value:function(){this.ticks++,1===this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){var h,o,i,l=this.hls,u=l.config;switch(this.state){case e.ERROR:case e.PAUSED:break;case e.STARTING:this.startLevel=l.startLevel,-1===this.startLevel&&(this.startLevel=0,this.fragBitrateTest=!0),this.level=l.nextLoadLevel=this.startLevel,this.state=e.WAITING_LEVEL,this.loadedmetadata=!1;break;case e.IDLE:if(!this.media&&(this.startFragRequested||!u.startFragPrefetch))break;h=this.loadedmetadata?this.media.currentTime:this.nextLoadPosition,o=this.startFragRequested===!1?this.startLevel:l.nextLoadLevel;var c,S=this.bufferInfo(h,u.maxBufferHole),x=S.len,f=S.end,g=this.fragPrevious;if(this.levels[o].hasOwnProperty("bitrate")?(c=Math.max(8*u.maxBufferSize/this.levels[o].bitrate,u.maxBufferLength),c=Math.min(c,u.maxMaxBufferLength)):c=u.maxBufferLength,c>x){if(l.nextLoadLevel=o,this.level=o,i=this.levels[o].details,"undefined"==typeof i||i.live&&this.levelLastLoaded!==o){this.state=e.WAITING_LEVEL;break}var d=i.fragments,v=d.length,y=d[0].start,L=d[v-1].start+d[v-1].duration,a=void 0;if(i.live){if(f<Math.max(y,L-u.liveMaxLatencyDurationCount*i.targetduration)&&(this.seekAfterBuffered=y+Math.max(0,i.totalduration-u.liveSyncDurationCount*i.targetduration),t.logger.log("buffer end: "+f+" is located too far from the end of live sliding playlist, media position will be reseted to: "+this.seekAfterBuffered.toFixed(3)),f=this.seekAfterBuffered),this.startFragRequested&&!i.PTSKnown){if(g){var b=g.sn+1;b>=i.startSN&&b<=i.endSN&&(a=d[b-i.startSN],t.logger.log("live playlist, switching playlist, load frag with next SN: "+a.sn))}a||(a=d[Math.min(v-1,Math.round(v/2))],t.logger.log("live playlist, switching playlist, unknown, load middle frag : "+a.sn))}}else y>f&&(a=d[0]);if(!a){var m;m=L>f?p.default.search(d,function(e){return e.start+e.duration<=f?1:e.start>f?-1:0}):d[v-1],m&&(a=m,y=m.start,g&&a.level===g.level&&a.sn===g.sn&&(a.sn<i.endSN?(a=d[a.sn+1-i.startSN],t.logger.log("SN just loaded, load next one: "+a.sn)):(i.live||(this.hls.trigger(r.default.BUFFER_EOS),this.state=e.ENDED),a=null)))}if(a)if(null!=a.decryptdata.uri&&null==a.decryptdata.key)t.logger.log("Loading key for "+a.sn+" of ["+i.startSN+" ,"+i.endSN+"],level "+o),this.state=e.KEY_LOADING,l.trigger(r.default.KEY_LOADING,{frag:a});else{if(t.logger.log("Loading "+a.sn+" of ["+i.startSN+" ,"+i.endSN+"],level "+o+", currentTime:"+h+",bufferEnd:"+f.toFixed(3)),a.autoLevel=l.autoLevelEnabled,this.levels.length>1&&(a.expectedLen=Math.round(a.duration*this.levels[o].bitrate/8),a.trequest=performance.now()),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,a.loadCounter){a.loadCounter++;var w=u.fragLoadingLoopThreshold;if(a.loadCounter>w&&Math.abs(this.fragLoadIdx-a.loadIdx)<w)return void l.trigger(r.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:a})}else a.loadCounter=1;a.loadIdx=this.fragLoadIdx,this.fragCurrent=a,this.startFragRequested=!0,l.trigger(r.default.FRAG_LOADING,{frag:a}),this.state=e.FRAG_LOADING}}break;case e.WAITING_LEVEL:o=this.levels[this.level],o&&o.details&&(this.state=e.IDLE);break;case e.FRAG_LOADING:var E=this.media,s=this.fragCurrent;if(E&&(!E.paused||this.loadedmetadata===!1)&&s.autoLevel&&this.level&&this.levels.length>1){var A=performance.now()-s.trequest;if(A>500*s.duration){var T=1e3*s.loaded/A;s.expectedLen<s.loaded&&(s.expectedLen=s.loaded),h=E.currentTime;var _=(s.expectedLen-s.loaded)/T,R=this.bufferInfo(h,u.maxBufferHole).end-h,O=s.duration*this.levels[l.nextLoadLevel].bitrate/(8*T);R<2*s.duration&&_>R&&_>O&&(t.logger.warn("loading too slow, abort fragment loading"),t.logger.log("fragLoadedDelay/bufferStarvationDelay/fragLevelNextLoadedDelay :"+_.toFixed(1)+"/"+R.toFixed(1)+"/"+O.toFixed(1)),s.loader.abort(),l.trigger(r.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:s}),this.state=e.IDLE)}}break;case e.FRAG_LOADING_WAITING_RETRY:var P=performance.now(),D=this.retryDate,k=this.media,I=k&&k.seeking;(!D||P>=D||I)&&(t.logger.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=e.IDLE);break;case e.PARSING:break;case e.PARSED:break;case e.ENDED:}this._checkBuffer(),this._checkFragmentChanged()}},{key:"bufferInfo",value:function(a,i){var r=this.media;if(r){var e,t=r.buffered,n=[];for(e=0;e<t.length;e++)n.push({start:t.start(e),end:t.end(e)});return this.bufferedInfo(n,a,i)}return{len:0,start:0,end:0,nextStart:void 0}}},{key:"bufferedInfo",value:function(r,n,a){var o,l,i,h,e,t=[];for(r.sort(function(e,t){var r=e.start-t.start;return r?r:t.end-e.end}),e=0;e<r.length;e++){var u=t.length;if(u){var d=t[u-1].end;r[e].start-d<a?r[e].end>d&&(t[u-1].end=r[e].end):t.push(r[e])}else t.push(r[e])}for(e=0,o=0,l=i=n;e<t.length;e++){var s=t[e].start,f=t[e].end;if(n+a>=s&&f>n)l=s,i=f+a,o=i-n;else if(s>n+a){h=s;break}}return{len:o,start:l,end:i,nextStart:h}}},{key:"getBufferRange",value:function(r){var e,t;for(e=this.bufferRange.length-1;e>=0;e--)if(t=this.bufferRange[e],r>=t.start&&r<=t.end)return t;return null}},{key:"followingBufferRange",value:function(e){return e?this.getBufferRange(e.end+.5):null}},{key:"isBuffered",value:function(r){for(var n=this.media,t=n.buffered,e=0;e<t.length;e++)if(r>=t.start(e)&&r<=t.end(e))return!0;return!1}},{key:"_checkFragmentChanged",value:function(){var t,e,n=this.media;if(n&&n.seeking===!1&&(e=n.currentTime,e>n.playbackRate*this.lastCurrentTime&&(this.lastCurrentTime=e),this.isBuffered(e)?t=this.getBufferRange(e):this.isBuffered(e+.1)&&(t=this.getBufferRange(e+.1)),t)){var a=t.frag;a!==this.fragPlaying&&(this.fragPlaying=a,this.hls.trigger(r.default.FRAG_CHANGED,{frag:a}))}}},{key:"immediateLevelSwitch",value:function(){t.logger.log("immediateLevelSwitch"),this.immediateSwitch||(this.immediateSwitch=!0,this.previouslyPaused=this.media.paused,this.media.pause());var n=this.fragCurrent;n&&n.loader&&n.loader.abort(),this.fragCurrent=null,this.hls.trigger(r.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY}),this.state=e.PAUSED,this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.tick()}},{key:"immediateLevelSwitchEnd",value:function(){this.immediateSwitch=!1,this.media.currentTime-=1e-4,this.previouslyPaused||this.media.play()}},{key:"nextLevelSwitch",value:function(){var a,n,t;if(n=this.getBufferRange(this.media.currentTime),n&&n.start>1&&(this.hls.trigger(r.default.BUFFER_FLUSHING,{startOffset:0,endOffset:n.start-1}),this.state=e.PAUSED),this.media.paused)a=0;else{var o=this.hls.nextLoadLevel,l=this.levels[o],s=this.fragLastKbps;a=s&&this.fragCurrent?this.fragCurrent.duration*l.bitrate/(1e3*s)+1:0}if(t=this.getBufferRange(this.media.currentTime+a),t&&(t=this.followingBufferRange(t))){this.hls.trigger(r.default.BUFFER_FLUSHING,{startOffset:t.start,endOffset:Number.POSITIVE_INFINITY}),this.state=e.PAUSED;var i=this.fragCurrent;i&&i.loader&&i.loader.abort(),this.fragCurrent=null,this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold}}},{key:"onMediaAttached",value:function(t){var e=this.media=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),e.addEventListener("seeking",this.onvseeking),e.addEventListener("seeked",this.onvseeked),e.addEventListener("ended",this.onvended),this.levels&&this.config.autoStartLoad&&this.startLoad()}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(t.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var r=this.levels;r&&r.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.loadCounter=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=null,this.loadedmetadata=!1,this.stop()}},{key:"onMediaSeeking",value:function(){if(this.state===e.FRAG_LOADING){if(0===this.bufferInfo(this.media.currentTime,this.config.maxBufferHole).len){t.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load");var r=this.fragCurrent;r&&(r.loader&&r.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.state=e.IDLE}}else this.state===e.ENDED&&(this.state=e.IDLE);this.media&&(this.lastCurrentTime=this.media.currentTime),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.tick()}},{key:"onMediaSeeked",value:function(){this.tick()}},{key:"onMediaEnded",value:function(){t.logger.log("media ended"),this.startPosition=this.lastCurrentTime=0}},{key:"onManifestParsed",value:function(r){var e,n=!1,a=!1;r.levels.forEach(function(t){e=t.audioCodec,e&&(-1!==e.indexOf("mp4a.40.2")&&(n=!0),-1!==e.indexOf("mp4a.40.5")&&(a=!0))}),this.audioCodecSwitch=n&&a,this.audioCodecSwitch&&t.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=r.levels,this.startLevelLoaded=!1,this.startFragRequested=!1,this.config.autoStartLoad&&this.startLoad()}},{key:"onLevelLoaded",value:function(s){var n=s.details,a=s.level,o=this.levels[a],u=n.totalduration,i=0;if(t.logger.log("level "+a+" loaded ["+n.startSN+","+n.endSN+"],duration:"+u),this.levelLastLoaded=a,n.live){var d=o.details;d?(l.default.mergeDetails(d,n),i=n.fragments[0].start,n.PTSKnown?t.logger.log("live playlist sliding:"+i.toFixed(3)):t.logger.log("live playlist - outdated PTS, unknown sliding")):(n.PTSKnown=!1,t.logger.log("live playlist - first load, unknown sliding"))}else n.PTSKnown=!1;o.details=n,this.hls.trigger(r.default.LEVEL_UPDATED,{details:n,level:a}),this.startFragRequested===!1&&(n.live&&(this.startPosition=Math.max(0,i+u-this.config.liveSyncDurationCount*n.targetduration)),
this.nextLoadPosition=this.startPosition),this.state===e.WAITING_LEVEL&&(this.state=e.IDLE),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===e.KEY_LOADING&&(this.state=e.IDLE,this.tick())}},{key:"onFragLoaded",value:function(a){var n=this.fragCurrent;if(this.state===e.FRAG_LOADING&&n&&a.frag.level===n.level&&a.frag.sn===n.sn)if(this.fragBitrateTest===!0)this.state=e.IDLE,this.fragBitrateTest=!1,a.stats.tparsed=a.stats.tbuffered=performance.now(),this.hls.trigger(r.default.FRAG_BUFFERED,{stats:a.stats,frag:n});else{this.state=e.PARSING,this.stats=a.stats;var s=this.levels[this.level],o=s.details,d=o.totalduration,f=n.start,l=n.level,u=n.sn,i=s.audioCodec||this.config.defaultAudioCodec;this.audioCodecSwap&&(t.logger.log("swapping playlist audio codec"),void 0===i&&(i=this.lastAudioCodec),i&&(i=-1!==i.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),this.pendingAppending=0,t.logger.log("Demuxing "+u+" of ["+o.startSN+" ,"+o.endSN+"],level "+l),this.demuxer.push(a.payload,i,s.videoCodec,f,n.cc,l,u,d,n.decryptdata)}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(l){if(this.state===e.PARSING){var s,n,a=l.tracks;if(n=a.audio){var o=this.levels[this.level].audioCodec;if(o&&this.audioCodecSwap&&(t.logger.log("swapping playlist audio codec"),o=-1!==o.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch){var u=navigator.userAgent.toLowerCase();1!==n.metadata.channelCount&&-1===u.indexOf("android")&&-1===u.indexOf("firefox")&&(o="mp4a.40.5")}n.levelCodec=o}if(n=a.video,n&&(n.levelCodec=this.levels[this.level].videoCodec),l.unique){var i={codec:"",levelCodec:""};for(s in l.tracks)n=a[s],i.container=n.container,i.codec&&(i.codec+=",",i.levelCodec+=","),n.codec&&(i.codec+=n.codec),n.levelCodec&&(i.levelCodec+=n.levelCodec);a={audiovideo:i}}this.hls.trigger(r.default.BUFFER_CODECS,a);for(s in a){n=a[s],t.logger.log("track:"+s+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var d=n.initSegment;d&&(this.pendingAppending++,this.hls.trigger(r.default.BUFFER_APPENDING,{type:s,data:d}))}this.tick()}}},{key:"onFragParsingData",value:function(n){var o=this;if(this.state===e.PARSING){this.tparse2=Date.now();var a=this.levels[this.level],i=this.fragCurrent;t.logger.log("parsed "+n.type+",PTS:["+n.startPTS.toFixed(3)+","+n.endPTS.toFixed(3)+"],DTS:["+n.startDTS.toFixed(3)+"/"+n.endDTS.toFixed(3)+"],nb:"+n.nb);var u=l.default.updateFragPTS(a.details,i.sn,n.startPTS,n.endPTS),s=this.hls;s.trigger(r.default.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:u}),[n.data1,n.data2].forEach(function(e){e&&(o.pendingAppending++,s.trigger(r.default.BUFFER_APPENDING,{type:n.type,data:e}))}),this.nextLoadPosition=n.endPTS,this.bufferRange.push({type:n.type,start:n.startPTS,end:n.endPTS,frag:i}),this.tick()}else t.logger.warn("not in PARSING state but "+this.state+", ignoring FRAG_PARSING_DATA event")}},{key:"onFragParsed",value:function(){this.state===e.PARSING&&(this.stats.tparsed=performance.now(),this.state=e.PARSED,this._checkAppendedParsed())}},{key:"onBufferAppended",value:function(){switch(this.state){case e.PARSING:case e.PARSED:this.pendingAppending--,this._checkAppendedParsed()}}},{key:"_checkAppendedParsed",value:function(){if(this.state===e.PARSED&&0===this.pendingAppending){var a=this.fragCurrent,n=this.stats;a&&(this.fragPrevious=a,n.tbuffered=performance.now(),this.fragLastKbps=Math.round(8*n.length/(n.tbuffered-n.tfirst)),this.hls.trigger(r.default.FRAG_BUFFERED,{stats:n,frag:a}),t.logger.log("media buffered : "+this.timeRangesToString(this.media.buffered)),this.state=e.IDLE),this.tick()}}},{key:"onError",value:function(a){switch(a.details){case n.ErrorDetails.FRAG_LOAD_ERROR:case n.ErrorDetails.FRAG_LOAD_TIMEOUT:if(!a.fatal){var i=this.fragLoadError;if(i?i++:i=1,i<=this.config.fragLoadingMaxRetry){this.fragLoadError=i,a.frag.loadCounter=0;var s=Math.min(Math.pow(2,i-1)*this.config.fragLoadingRetryDelay,64e3);t.logger.warn("mediaController: frag loading failed, retry in "+s+" ms"),this.retryDate=performance.now()+s,this.state=e.FRAG_LOADING_WAITING_RETRY}else t.logger.error("mediaController: "+a.details+" reaches max retry, redispatch as fatal ..."),a.fatal=!0,this.hls.trigger(r.default.ERROR,a),this.state=e.ERROR}break;case n.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case n.ErrorDetails.LEVEL_LOAD_ERROR:case n.ErrorDetails.LEVEL_LOAD_TIMEOUT:case n.ErrorDetails.KEY_LOAD_ERROR:case n.ErrorDetails.KEY_LOAD_TIMEOUT:t.logger.warn("mediaController: "+a.details+" while loading frag,switch to "+(a.fatal?"ERROR":"IDLE")+" state ..."),this.state=a.fatal?e.ERROR:e.IDLE;break;case n.ErrorDetails.BUFFER_FULL:this.config.maxMaxBufferLength/=2,t.logger.warn("reduce max buffer length to "+this.config.maxMaxBufferLength+"s and trigger a nextLevelSwitch to flush old buffer and fix QuotaExceededError"),this.nextLevelSwitch()}}},{key:"_checkBuffer",value:function(){var e=this.media;if(e){var d=e.readyState;if(d){var a,i,o=this.seekAfterBuffered;if(o)e.duration>=o&&(a=o,this.seekAfterBuffered=void 0);else{i=e.currentTime;var g=this.loadedmetadata;!g&&e.buffered.length&&(this.loadedmetadata=!0,i||i===this.startPosition||(a=this.startPosition))}a&&(i=a,t.logger.log("target seek position:"+a));var l=this.bufferInfo(i,0),c=!(e.paused||e.ended||e.seeking||2>d),u=.2,f=i>e.playbackRate*this.lastCurrentTime;if(this.stalled&&f&&(this.stalled=!1),l.len<=u){if(f||!c?u=0:(t.logger.log("playback seems stuck @"+i),this.stalled||(this.hls.trigger(r.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1}),this.stalled=!0)),l.len<=u){var s=l.nextStart,h=s-i;s&&h<this.config.maxSeekHole&&h>.005&&!e.seeking&&(t.logger.log("adjust currentTime from "+e.currentTime+" to next buffered @ "+s),e.currentTime=s)}}else a&&e.currentTime!==a&&(t.logger.log("adjust currentTime from "+e.currentTime+" to "+a),e.currentTime=a)}}}},{key:"onBufferFlushed",value:function(){var t,r,n=[];for(r=0;r<this.bufferRange.length;r++)t=this.bufferRange[r],this.isBuffered((t.start+t.end)/2)&&n.push(t);this.bufferRange=n,this.immediateSwitch&&this.immediateLevelSwitchEnd(),this.state=e.IDLE,this.fragPrevious=null}},{key:"swapAudioCodec",value:function(){this.audioCodecSwap=!this.audioCodecSwap}},{key:"timeRangesToString",value:function(t){for(var r="",n=t.length,e=0;n>e;e++)r+="["+t.start(e)+","+t.end(e)+"]";return r}},{key:"currentLevel",get:function(){if(this.media){var e=this.getBufferRange(this.media.currentTime);if(e)return e.frag.level}return-1}},{key:"nextBufferRange",get:function(){return this.media?this.followingBufferRange(this.getBufferRange(this.media.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferRange;return e?e.frag.level:-1}}]),a}(s.default);o.default=E},{"../demux/demuxer":15,"../errors":19,"../event-handler":20,"../events":21,"../helper/level-helper":22,"../utils/binary-search":32,"../utils/logger":34}],7:[function(t,g,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=t("../events"),e=r(l),d=t("../event-handler"),a=r(d),h=t("../utils/cea-708-interpreter"),o=r(h),u=function(r){function t(n){f(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,n,e.default.MEDIA_ATTACHING,e.default.MEDIA_DETACHING,e.default.FRAG_PARSING_USERDATA,e.default.MANIFEST_LOADING,e.default.FRAG_LOADED));return r.hls=n,r.config=n.config,r.config.enableCEA708Captions&&(r.cea708Interpreter=new o.default),r}return s(t,r),c(t,[{key:"destroy",value:function(){a.default.prototype.destroy.call(this)}},{key:"onMediaAttaching",value:function(e){var t=this.media=e.media;this.cea708Interpreter.attach(t)}},{key:"onMediaDetaching",value:function(){this.cea708Interpreter.detach()}},{key:"onManifestLoading",value:function(){this.lastPts=Number.POSITIVE_INFINITY}},{key:"onFragLoaded",value:function(t){var e=t.frag.start;e<=this.lastPts&&this.cea708Interpreter.clear(),this.lastPts=e}},{key:"onFragParsingUserdata",value:function(t){for(var e=0;e<t.samples.length;e++)this.cea708Interpreter.push(t.samples[e].pts,t.samples[e].bytes)}}]),t}(a.default);n.default=u},{"../event-handler":20,"../events":21,"../utils/cea-708-interpreter":33}],8:[function(a,i,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(f){t(this,e),this._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],this._precompute();var n,s,r,o,l,i=this._tables[0][4],u=this._tables[1],a=f.length,d=1;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);for(o=f.slice(0),l=[],this._key=[o,l],n=a;4*a+28>n;n++)r=o[n-1],(n%a===0||8===a&&n%a===4)&&(r=i[r>>>24]<<24^i[r>>16&255]<<16^i[r>>8&255]<<8^i[255&r],n%a===0&&(r=r<<8^r>>>24^d<<24,d=d<<1^283*(d>>7))),o[n]=o[n-a]^r;for(s=0;n;s++,n--)r=o[3&s?n:n-4],4>=n||4>s?l[s]=r:l[s]=u[0][i[r>>>24]]^u[1][i[r>>16&255]]^u[2][i[r>>8&255]]^u[3][i[255&r]]}return r(e,[{key:"_precompute",value:function(){var e,n,r,u,f,d,t,s,l,i=this._tables[0],o=this._tables[1],h=i[4],g=o[4],a=[],c=[];for(e=0;256>e;e++)c[(a[e]=e<<1^283*(e>>7))^e]=e;for(n=r=0;!h[n];n^=u||1,r=c[r]||1)for(t=r^r<<1^r<<2^r<<3^r<<4,t=t>>8^255&t^99,h[n]=t,g[t]=n,d=a[f=a[u=a[n]]],l=16843009*d^65537*f^257*u^16843008*n,s=257*a[t]^16843008*t,e=0;4>e;e++)i[e][n]=s=s<<24^s>>>8,o[e][t]=l=l<<24^l>>>8;for(e=0;5>e;e++)i[e]=i[e].slice(0),o[e]=o[e].slice(0)}},{key:"decrypt",value:function(R,p,_,E,b,m){var h,v,g,i,e=this._key[1],t=R^e[0],n=E^e[1],a=_^e[2],r=p^e[3],y=e.length/4-2,s=4,o=this._tables[1],f=o[0],d=o[1],u=o[2],l=o[3],c=o[4];for(i=0;y>i;i++)h=f[t>>>24]^d[n>>16&255]^u[a>>8&255]^l[255&r]^e[s],v=f[n>>>24]^d[a>>16&255]^u[r>>8&255]^l[255&t]^e[s+1],g=f[a>>>24]^d[r>>16&255]^u[t>>8&255]^l[255&n]^e[s+2],r=f[r>>>24]^d[t>>16&255]^u[n>>8&255]^l[255&a]^e[s+3],s+=4,t=h,n=v,a=g;for(i=0;4>i;i++)b[(3&-i)+m]=c[t>>>24]<<24^c[n>>16&255]<<16^c[a>>8&255]<<8^c[255&r]^e[s++],h=t,t=n,n=a,a=r,r=h}}]),e}();e.default=n},{}],9:[function(t,l,e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var i=t("./aes"),s=r(i),o=function(){function e(t,r){n(this,e),this.key=t,this.iv=r}return a(e,[{key:"ntoh",value:function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24}},{key:"doDecrypt",value:function(n,v,a){var u,h,o,f,l,c,d,i,e,r=new Int32Array(n.buffer,n.byteOffset,n.byteLength>>2),p=new s.default(Array.prototype.slice.call(v)),g=new Uint8Array(n.byteLength),t=new Int32Array(g.buffer);for(u=~~a[0],h=~~a[1],o=~~a[2],f=~~a[3],e=0;e<r.length;e+=4)l=~~this.ntoh(r[e]),c=~~this.ntoh(r[e+1]),d=~~this.ntoh(r[e+2]),i=~~this.ntoh(r[e+3]),p.decrypt(l,c,d,i,t,e),t[e]=this.ntoh(t[e]^u),t[e+1]=this.ntoh(t[e+1]^h),t[e+2]=this.ntoh(t[e+2]^o),t[e+3]=this.ntoh(t[e+3]^f),u=l,h=c,o=d,f=i;return g}},{key:"localDecrypt",value:function(e,t,r,n){var a=this.doDecrypt(e,t,r);n.set(a,e.byteOffset)}},{key:"decrypt",value:function(i){var r=32e3,t=new Int32Array(i),n=new Uint8Array(i.byteLength),e=0,s=this.key,a=this.iv;for(this.localDecrypt(t.subarray(e,e+r),s,a,n),e=r;e<t.length;e+=r)a=new Uint32Array([this.ntoh(t[e-4]),this.ntoh(t[e-3]),this.ntoh(t[e-2]),this.ntoh(t[e-1])]),this.localDecrypt(t.subarray(e,e+r),s,a,n);return n}}]),e}();e.default=o},{"./aes":8}],10:[function(t,d,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(r,"__esModule",{value:!0});var s=t("./aes128-decrypter"),o=l(s),n=t("../errors"),e=t("../utils/logger"),i=function(){function t(r){a(this,t),this.hls=r;try{var e=window?window.crypto:crypto;this.subtle=e.subtle||e.webkitSubtle,this.disableWebCrypto=!this.subtle}catch(e){this.disableWebCrypto=!0}}return u(t,[{key:"destroy",value:function(){}},{key:"decrypt",value:function(e,t,r,n){this.disableWebCrypto&&this.hls.config.enableSoftwareAES?this.decryptBySoftware(e,t,r,n):this.decryptByWebCrypto(e,t,r,n)}},{key:"decryptByWebCrypto",value:function(t,r,n,a){var i=this;e.logger.log("decrypting by WebCrypto API"),this.subtle.importKey("raw",r,{name:"AES-CBC",length:128},!1,["decrypt"]).then(function(e){i.subtle.decrypt({name:"AES-CBC",iv:n.buffer},e,t).then(a).catch(function(e){i.onWebCryptoError(e,t,r,n,a)})}).catch(function(e){i.onWebCryptoError(e,t,r,n,a)})}},{key:"decryptBySoftware",value:function(r,n,a,i){e.logger.log("decrypting by JavaScript Implementation");var t=new DataView(n.buffer),s=new Uint32Array([t.getUint32(0),t.getUint32(4),t.getUint32(8),t.getUint32(12)]);t=new DataView(a.buffer);var l=new Uint32Array([t.getUint32(0),t.getUint32(4),t.getUint32(8),t.getUint32(12)]),u=new o.default(s,l);i(u.decrypt(r).buffer)}},{key:"onWebCryptoError",value:function(t,r,a,i,s){this.hls.config.enableSoftwareAES?(e.logger.log("disabling to use WebCrypto API"),this.disableWebCrypto=!0,this.decryptBySoftware(r,a,i,s)):(e.logger.error("decrypting error : "+t.message),this.hls.trigger(Event.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:t.message}))}}]),t}();r.default=i},{"../errors":19,"../utils/logger":34,"./aes128-decrypter":9}],11:[function(e,f,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var d=e("./adts"),o=r(d),l=e("../utils/logger"),u=e("../demux/id3"),n=r(u),s=function(){function e(t,r){a(this,e),this.observer=t,this.remuxerClass=r,this.remuxer=new this.remuxerClass(t),this._aacTrack={container:"audio/adts",type:"audio",id:-1,sequenceNumber:0,samples:[],len:0}}return i(e,[{key:"push",value:function(t,p,R,m,_,E,b,y){var a,i,v,c,e,s,f,u,g,r=this._aacTrack,d=new n.default(t),h=90*d.timeStamp;for(e=d.length,u=t.length;u-1>e&&(255!==t[e]||240!==(240&t[e+1]));e++);for(r.audiosamplerate||(a=o.default.getAudioConfig(this.observer,t,e,p),r.config=a.config,r.audiosamplerate=a.samplerate,r.channelCount=a.channelCount,r.codec=a.codec,r.timescale=a.samplerate,r.duration=a.samplerate*y,l.logger.log("parsed codec:"+r.codec+",rate:"+a.samplerate+",nb channel:"+a.channelCount)),c=0,v=9216e4/r.audiosamplerate;u>e+5&&(s=1&t[e+1]?7:9,i=(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5,i-=s,i>0&&u>=e+s+i);)for(f=h+c*v,g={unit:t.subarray(e+s,e+s+i),pts:f,dts:f},r.samples.push(g),r.len+=i,e+=i+s,c++;u-1>e&&(255!==t[e]||240!==(240&t[e+1]));e++);this.remuxer.remux(this._aacTrack,{samples:[]},{samples:[{pts:h,dts:h,unit:d.payload}]},{samples:[]},m)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(t){var e,r,a=new n.default(t);if(a.hasTimeStamp)for(e=a.length,r=t.length;r-1>e;e++)if(255===t[e]&&240===(240&t[e+1]))return!0;return!1}}]),e}();t.default=s},{"../demux/id3":17,"../utils/logger":34,"./adts":12}],12:[function(e,o,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=e("../utils/logger"),r=e("../errors"),s=function(){function e(){n(this,e)}return a(e,null,[{key:"getAudioConfig",value:function(h,u,l,a){var n,e,s,o,t,f=navigator.userAgent.toLowerCase(),d=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];return n=((192&u[l+2])>>>6)+1,e=(60&u[l+2])>>>2,e>d.length-1?void h.trigger(Event.ERROR,{type:r.ErrorTypes.MEDIA_ERROR,details:r.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+e}):(o=(1&u[l+2])<<2,o|=(192&u[l+3])>>>6,i.logger.log("manifest codec:"+a+",ADTS data:type:"+n+",sampleingIndex:"+e+"["+d[e]+"Hz],channelConfig:"+o),-1!==f.indexOf("firefox")?e>=6?(n=5,t=new Array(4),s=e-3):(n=2,t=new Array(2),s=e):-1!==f.indexOf("android")?(n=2,t=new Array(2),s=e):(n=5,t=new Array(4),a&&(-1!==a.indexOf("mp4a.40.29")||-1!==a.indexOf("mp4a.40.5"))||!a&&e>=6?s=e-3:((a&&-1!==a.indexOf("mp4a.40.2")&&(e>=6||1===o)||!a&&1===o)&&(n=2,t=new Array(2)),s=e)),t[0]=n<<3,t[0]|=(14&e)>>1,t[1]|=(1&e)<<7,t[1]|=o<<3,5===n&&(t[1]|=(14&s)>>1,t[2]=(1&s)<<7,t[2]|=8,t[3]=0),{config:t,samplerate:d[e],channelCount:o,codec:"mp4a.40."+n})}}]),e}();t.default=s},{"../errors":19,"../utils/logger":34}],13:[function(e,y,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(n,"__esModule",{value:!0});var g=e("../events"),o=t(g),a=e("../errors"),p=e("../demux/aacdemuxer"),i=t(p),f=e("../demux/tsdemuxer"),r=t(f),c=e("../remux/mp4-remuxer"),s=t(c),v=e("../remux/passthrough-remuxer"),u=t(v),l=function(){function e(t,r){d(this,e),this.hls=t,this.typeSupported=r}return h(e,[{key:"destroy",value:function(){var e=this.demuxer;e&&e.destroy()}},{key:"push",value:function(n,l,d,f,h,c,g,v){var e=this.demuxer;if(!e){var t=this.hls;if(r.default.probe(n))e=this.typeSupported.mp2t===!0?new r.default(t,u.default):new r.default(t,s.default);else{if(!i.default.probe(n))return void t.trigger(o.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});e=new i.default(t,s.default)}this.demuxer=e}e.push(n,l,d,f,h,c,g,v)}}]),e}();n.default=l},{"../demux/aacdemuxer":11,"../demux/tsdemuxer":18,"../errors":19,"../events":21,"../remux/mp4-remuxer":29,"../remux/passthrough-remuxer":30}],14:[function(t,d,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t("../demux/demuxer-inline"),u=r(a),s=t("../events"),e=r(s),l=t("events"),i=r(l),o=function(r){var t=new i.default;t.trigger=function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),e=1;r>e;e++)a[e-1]=arguments[e];t.emit.apply(t,[n,n].concat(a))},t.off=function(a){for(var r=arguments.length,n=Array(r>1?r-1:0),e=1;r>e;e++)n[e-1]=arguments[e];t.removeListener.apply(t,[a].concat(n))},r.addEventListener("message",function(n){var e=n.data;switch(e.cmd){case"init":r.demuxer=new u.default(t,e.typeSupported);break;case"demux":r.demuxer.push(new Uint8Array(e.data),e.audioCodec,e.videoCodec,e.timeOffset,e.cc,e.level,e.sn,e.duration)}}),t.on(e.default.FRAG_PARSING_INIT_SEGMENT,function(t,e){r.postMessage({event:t,tracks:e.tracks,unique:e.unique})}),t.on(e.default.FRAG_PARSING_DATA,function(n,e){var t={event:n,type:e.type,startPTS:e.startPTS,endPTS:e.endPTS,startDTS:e.startDTS,endDTS:e.endDTS,data1:e.data1.buffer,data2:e.data2.buffer,nb:e.nb};r.postMessage(t,[t.data1,t.data2])}),t.on(e.default.FRAG_PARSED,function(e){r.postMessage({event:e})}),t.on(e.default.ERROR,function(e,t){r.postMessage({event:e,data:t})}),t.on(e.default.FRAG_PARSING_METADATA,function(e,t){var n={event:e,samples:t.samples};r.postMessage(n)}),t.on(e.default.FRAG_PARSING_USERDATA,function(e,t){var n={event:e,samples:t.samples};r.postMessage(n)})};n.default=o},{"../demux/demuxer-inline":13,"../events":21,events:1}],15:[function(t,v,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(n,"__esModule",{value:!0});var s=t("../events"),e=r(s),g=t("../demux/demuxer-inline"),a=r(g),d=t("../demux/demuxer-worker"),f=r(d),i=t("../utils/logger"),c=t("../crypt/decrypter"),l=r(c),o=function(){function r(e){u(this,r),this.hls=e;var n={mp4:MediaSource.isTypeSupported("video/mp4"),mp2t:e.config.enableMP2TPassThrough&&MediaSource.isTypeSupported("video/mp2t")};if(e.config.enableWorker&&"undefined"!=typeof Worker){i.logger.log("demuxing in webworker");try{var s=t("webworkify");this.w=s(f.default),this.onwmsg=this.onWorkerMessage.bind(this),this.w.addEventListener("message",this.onwmsg),this.w.postMessage({cmd:"init",typeSupported:n})}catch(t){i.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),this.demuxer=new a.default(e,n)}}else this.demuxer=new a.default(e,n);this.demuxInitialized=!0}return h(r,[{key:"destroy",value:function(){this.w?(this.w.removeEventListener("message",this.onwmsg),this.w.terminate(),this.w=null):(this.demuxer.destroy(),this.demuxer=null),this.decrypter&&(this.decrypter.destroy(),this.decrypter=null)}},{key:"pushDecrypted",value:function(e,t,r,n,a,i,s,o){this.w?this.w.postMessage({cmd:"demux",data:e,audioCodec:t,videoCodec:r,timeOffset:n,cc:a,level:i,sn:s,duration:o},[e]):this.demuxer.push(new Uint8Array(e),t,r,n,a,i,s,o)}},{key:"push",value:function(t,r,n,a,i,s,o,u,e){if(t.byteLength>0&&null!=e&&null!=e.key&&"AES-128"===e.method){null==this.decrypter&&(this.decrypter=new l.default(this.hls));var d=this;this.decrypter.decrypt(t,e.key,e.iv,function(e){d.pushDecrypted(e,r,n,a,i,s,o,u)})}else this.pushDecrypted(t,r,n,a,i,s,o,u)}},{key:"onWorkerMessage",value:function(n){var t=n.data;switch(t.event){case e.default.FRAG_PARSING_INIT_SEGMENT:var r={};r.tracks=t.tracks,r.unique=t.unique,this.hls.trigger(e.default.FRAG_PARSING_INIT_SEGMENT,r);break;case e.default.FRAG_PARSING_DATA:this.hls.trigger(e.default.FRAG_PARSING_DATA,{data1:new Uint8Array(t.data1),data2:new Uint8Array(t.data2),startPTS:t.startPTS,endPTS:t.endPTS,startDTS:t.startDTS,endDTS:t.endDTS,type:t.type,nb:t.nb});break;case e.default.FRAG_PARSING_METADATA:this.hls.trigger(e.default.FRAG_PARSING_METADATA,{samples:t.samples});break;case e.default.FRAG_PARSING_USERDATA:this.hls.trigger(e.default.FRAG_PARSING_USERDATA,{samples:t.samples});break;default:this.hls.trigger(t.event,t.data)}}}]),r}();n.default=o},{"../crypt/decrypter":10,"../demux/demuxer-inline":13,"../demux/demuxer-worker":14,"../events":21,"../utils/logger":34,webworkify:2}],16:[function(t,s,e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var a=t("../utils/logger"),i=function(){function e(t){r(this,e),this.data=t,this.bytesAvailable=this.data.byteLength,this.word=0,this.bitsAvailable=0}return n(e,[{key:"loadWord",value:function(){var t=this.data.byteLength-this.bytesAvailable,r=new Uint8Array(4),e=Math.min(4,this.bytesAvailable);if(0===e)throw new Error("no bytes available");r.set(this.data.subarray(t,t+e)),this.word=new DataView(r.buffer).getUint32(0),this.bitsAvailable=8*e,this.bytesAvailable-=e}},{key:"skipBits",value:function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}},{key:"readBits",value:function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;return t>32&&a.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),e=t-e,e>0?r<<e|this.readBits(e):r}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!==(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return 1===this.readBits(1)}},{key:"readUByte",value:function(){return this.readBits(8)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}},{key:"skipScalingList",value:function(a){var t,n,r=8,e=8;for(t=0;a>t;t++)0!==e&&(n=this.readEG(),e=(r+n+256)%256),r=0===e?r:e}},{key:"readSPS",value:function(){var t,v,p,l,a,i,n,o,r,s=0,d=0,f=0,h=0,c=1;if(this.readUByte(),t=this.readUByte(),v=this.readBits(5),this.skipBits(3),p=this.readUByte(),this.skipUEG(),100===t||110===t||122===t||244===t||44===t||83===t||86===t||118===t||128===t){var g=this.readUEG();if(3===g&&this.skipBits(1),this.skipUEG(),this.skipUEG(),this.skipBits(1),this.readBoolean())for(o=3!==g?8:12,r=0;o>r;r++)this.readBoolean()&&(6>r?this.skipScalingList(16):this.skipScalingList(64))}this.skipUEG();var u=this.readUEG();if(0===u)this.readUEG();else if(1===u)for(this.skipBits(1),this.skipEG(),this.skipEG(),l=this.readUEG(),r=0;l>r;r++)this.skipEG();if(this.skipUEG(),this.skipBits(1),a=this.readUEG(),i=this.readUEG(),n=this.readBits(1),0===n&&this.skipBits(1),this.skipBits(1),this.readBoolean()&&(s=this.readUEG(),d=this.readUEG(),f=this.readUEG(),h=this.readUEG()),this.readBoolean()&&this.readBoolean()){var e=void 0,y=this.readUByte();switch(y){case 1:e=[1,1];break;case 2:e=[12,11];break;case 3:e=[10,11];break;case 4:e=[16,11];break;case 5:e=[40,33];break;case 6:e=[24,11];break;case 7:e=[20,11];break;case 8:e=[32,11];break;case 9:e=[80,33];break;case 10:e=[18,11];break;case 11:e=[15,11];break;case 12:e=[64,33];break;case 13:e=[160,99];break;case 14:e=[4,3];break;case 15:e=[3,2];break;case 16:e=[2,1];break;case 255:e=[this.readUByte()<<8|this.readUByte(),this.readUByte()<<8|this.readUByte()]}e&&(c=e[0]/e[1])}return{width:Math.ceil((16*(a+1)-2*s-2*d)*c),height:(2-n)*(i+1)*16-(n?2:4)*(f+h)}}},{key:"readSliceType",value:function(){return this.readUByte(),this.readUEG(),this.readUEG()}}]),e}();e.default=i},{"../utils/logger":34}],17:[function(r,s,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var e=r("../utils/logger"),i=function(){function t(a){n(this,t),this._hasTimeStamp=!1;for(var l,u,d,f,h,s,o,i,r=0;;)if(o=this.readUTF(a,r,3),r+=3,"ID3"===o)r+=3,l=127&a[r++],u=127&a[r++],d=127&a[r++],f=127&a[r++],h=(l<<21)+(u<<14)+(d<<7)+f,s=r+h,this._parseID3Frames(a,r,s),r=s;else{if("3DI"!==o)return r-=3,i=r,void(i&&(this.hasTimeStamp||e.logger.warn("ID3 tag found, but no timestamp"),this._length=i,this._payload=a.subarray(0,i)));r+=7,e.logger.log("3DI footer found, end: "+r)}}return a(t,[{key:"readUTF",value:function(n,e,a){var t="",r=e,i=e+a;do t+=String.fromCharCode(n[r++]);while(i>r);return t}},{key:"_parseID3Frames",value:function(r,t,i){for(var a,s,o,l,n;i>=t+8;)switch(a=this.readUTF(r,t,4),t+=4,s=r[t++]<<24+r[t++]<<16+r[t++]<<8+r[t++],l=r[t++]<<8+r[t++],o=t,a){case"PRIV":if("com.apple.streaming.transportStreamTimestamp"===this.readUTF(r,t,44)){t+=44,t+=4;var u=1&r[t++];this._hasTimeStamp=!0,n=((r[t++]<<23)+(r[t++]<<15)+(r[t++]<<7)+r[t++])/45,u&&(n+=47721858.84),n=Math.round(n),e.logger.trace("ID3 timestamp found: "+n),this._timeStamp=n}}}},{key:"hasTimeStamp",get:function(){return this._hasTimeStamp}},{key:"timeStamp",get:function(){return this._timeStamp}},{key:"length",get:function(){return this._length}},{key:"payload",get:function(){return this._payload}}]),t}();t.default=i},{"../utils/logger":34}],18:[function(t,g,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(a,"__esModule",{value:!0});var h=t("./adts"),c=n(h),l=t("../events"),i=n(l),d=t("./exp-golomb"),s=n(d),e=t("../utils/logger"),r=t("../errors"),o=function(){function t(e,r){u(this,t),this.observer=e,this.remuxerClass=r,this.lastCC=0,this.remuxer=new this.remuxerClass(e)}return f(t,[{key:"switchLevel",value:function(){this.pmtParsed=!1,this._pmtId=-1,this.lastAacPTS=null,this.aacOverFlow=null,this._avcTrack={container:"video/mp2t",type:"video",id:-1,sequenceNumber:0,samples:[],len:0,nbNalu:0},this._aacTrack={container:"video/mp2t",type:"audio",id:-1,sequenceNumber:0,samples:[],len:0},this._id3Track={type:"id3",id:-1,sequenceNumber:0,samples:[],len:0},this._txtTrack={type:"text",id:-1,sequenceNumber:0,samples:[],len:0},this.remuxer.switchLevel()}},{key:"insertDiscontinuity",value:function(){this.switchLevel(),this.remuxer.insertDiscontinuity()}},{key:"push",value:function(n,R,k,_,p,m,b,A){var s,o,l,t,d,u,y,a,c=n.length,E=this.remuxer.passthrough;this.audioCodec=R,this.videoCodec=k,this.timeOffset=_,this._duration=A,this.contiguous=!1,p!==this.lastCC?(e.logger.log("discontinuity detected"),this.insertDiscontinuity(),this.lastCC=p):m!==this.lastLevel?(e.logger.log("level switch detected"),this.switchLevel(),this.lastLevel=m):b===this.lastSN+1&&(this.contiguous=!0),this.lastSN=b,this.contiguous||(this.aacOverFlow=null);var v=this.pmtParsed,h=this._avcTrack.id,f=this._aacTrack.id,g=this._id3Track.id;for(c-=c%188,t=0;c>t;t+=188)if(71===n[t]){if(d=!!(64&n[t+1]),u=((31&n[t+1])<<8)+n[t+2],y=(48&n[t+3])>>4,y>1){if(a=t+5+n[t+4],a===t+188)continue}else a=t+4;if(v)if(u===h){if(d){if(s&&(this._parseAVCPES(this._parsePES(s)),E&&this._avcTrack.codec&&(-1===f||this._aacTrack.codec)))return void this.remux(n);
s={data:[],size:0}}s&&(s.data.push(n.subarray(a,t+188)),s.size+=t+188-a)}else if(u===f){if(d){if(o&&(this._parseAACPES(this._parsePES(o)),E&&this._aacTrack.codec&&(-1===h||this._avcTrack.codec)))return void this.remux(n);o={data:[],size:0}}o&&(o.data.push(n.subarray(a,t+188)),o.size+=t+188-a)}else u===g&&(d&&(l&&this._parseID3PES(this._parsePES(l)),l={data:[],size:0}),l&&(l.data.push(n.subarray(a,t+188)),l.size+=t+188-a));else d&&(a+=n[a]+1),0===u?this._parsePAT(n,a):u===this._pmtId&&(this._parsePMT(n,a),v=this.pmtParsed=!0,h=this._avcTrack.id,f=this._aacTrack.id,g=this._id3Track.id)}else this.observer.trigger(i.default.ERROR,{type:r.ErrorTypes.MEDIA_ERROR,details:r.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});s&&this._parseAVCPES(this._parsePES(s)),o&&this._parseAACPES(this._parsePES(o)),l&&this._parseID3PES(this._parsePES(l)),this.remux(null)}},{key:"remux",value:function(e){this.remuxer.remux(this._aacTrack,this._avcTrack,this._id3Track,this._txtTrack,this.timeOffset,this.contiguous,e)}},{key:"destroy",value:function(){this.switchLevel(),this._initPTS=this._initDTS=void 0,this._duration=0}},{key:"_parsePAT",value:function(e,t){this._pmtId=(31&e[t+10])<<8|e[t+11]}},{key:"_parsePMT",value:function(r,t){var a,i,s,n;for(a=(15&r[t+1])<<8|r[t+2],i=t+3+a-4,s=(15&r[t+10])<<8|r[t+11],t+=12+s;i>t;){switch(n=(31&r[t+1])<<8|r[t+2],r[t]){case 15:this._aacTrack.id=n;break;case 21:this._id3Track.id=n;break;case 27:this._avcTrack.id=n;break;default:e.logger.log("unkown stream type:"+r[t])}t+=((15&r[t+3])<<8|r[t+4])+5}}},{key:"_parsePES",value:function(o){var e,i,h,d,u,l,n,r,t,f=0,s=o.data;if(e=s[0],h=(e[0]<<16)+(e[1]<<8)+e[2],1===h){for(d=(e[4]<<8)+e[5],i=e[7],192&i&&(n=536870912*(14&e[9])+4194304*(255&e[10])+16384*(254&e[11])+128*(255&e[12])+(254&e[13])/2,n>4294967295&&(n-=8589934592),64&i?(r=536870912*(14&e[14])+4194304*(255&e[15])+16384*(254&e[16])+128*(255&e[17])+(254&e[18])/2,r>4294967295&&(r-=8589934592)):r=n),u=e[8],t=u+9,o.size-=t,l=new Uint8Array(o.size);s.length;){e=s.shift();var a=e.byteLength;if(t){if(t>a){t-=a;continue}e=e.subarray(t),a-=t,t=0}l.set(e,f),f+=a}return{data:l,pts:n,dts:r,len:d}}return null}},{key:"_parseAVCPES",value:function(n){var t,y,i,l,f=this,r=this._avcTrack,u=r.samples,m=this._parseAVCNALu(n.data),d=[],o=!1,c=!1,g=0;if(0===m.length&&u.length>0){var v=u[u.length-1],h=v.units.units[v.units.units.length-1],p=new Uint8Array(h.data.byteLength+n.data.byteLength);p.set(h.data,0),p.set(n.data,h.data.byteLength),h.data=p,v.units.length+=n.data.byteLength,r.len+=n.data.byteLength}n.data=null;var a="";m.forEach(function(e){switch(e.type){case 1:i=!0,o&&(a+="NDR ");break;case 5:i=!0,o&&(a+="IDR "),c=!0;break;case 6:i=!0,o&&(a+="SEI "),t=new s.default(e.data),t.readUByte();var b=t.readUByte();if(4===b){var p=0;do p=t.readUByte();while(255===p);var R=t.readUByte();if(181===R){var _=t.readUShort();if(49===_){var A=t.readUInt();if(1195456820===A){var L=t.readUByte();if(3===L){var v=t.readUByte(),E=t.readUByte(),T=31&v,h=[v,E];for(l=0;T>l;l++)h.push(t.readUByte()),h.push(t.readUByte()),h.push(t.readUByte());f._txtTrack.samples.push({type:3,pts:n.pts,bytes:h})}}}}}break;case 7:if(i=!0,o&&(a+="SPS "),!r.sps){t=new s.default(e.data);var y=t.readSPS();r.width=y.width,r.height=y.height,r.sps=[e.data],r.timescale=f.remuxer.timescale,r.duration=f.remuxer.timescale*f._duration;var k=e.data.subarray(1,4),m="avc1.";for(l=0;3>l;l++){var u=k[l].toString(16);u.length<2&&(u="0"+u),m+=u}r.codec=m}break;case 8:i=!0,o&&(a+="PPS "),r.pps||(r.pps=[e.data]);break;case 9:i=!1,o&&(a+="AUD ");break;default:i=!1,a+="unknown NAL "+e.type+" "}i&&(d.push(e),g+=e.data.byteLength)}),(o||a.length)&&e.logger.log(a),d.length&&(c===!0||r.sps)&&(y={units:{units:d,length:g},pts:n.pts,dts:n.dts,key:c},u.push(y),r.len+=g,r.nbNalu+=d.length)}},{key:"_parseAVCNALu",value:function(r){for(var i,n,s,p,a,l,t=0,h=r.byteLength,e=0,d=[];h>t;)switch(i=r[t++],e){case 0:0===i&&(e=1);break;case 1:e=0===i?2:0;break;case 2:case 3:if(0===i)e=3;else if(1===i&&h>t){if(p=31&r[t],a)s={data:r.subarray(a,t-e-1),type:l},d.push(s);else if(n=t-e-1){var c=this._avcTrack,f=c.samples;if(f.length){var g=f[f.length-1],v=g.units.units,o=v[v.length-1],u=new Uint8Array(o.data.byteLength+n);u.set(o.data,0),u.set(r.subarray(0,n),o.data.byteLength),o.data=u,g.units.length+=n,c.len+=n}}a=t,l=p,e=0}else e=0}return a&&(s={data:r.subarray(a,h),type:l},d.push(s)),d}},{key:"_parseAACPES",value:function(R){var s,l,p,b,t,d,h,o,_,a=this._aacTrack,n=R.data,g=R.pts,L=0,k=this._duration,A=this.audioCodec,u=this.aacOverFlow,E=this.lastAacPTS;if(u){var m=new Uint8Array(u.byteLength+n.byteLength);m.set(u,0),m.set(n,u.byteLength),n=m}for(t=L,o=n.length;o-1>t&&(255!==n[t]||240!==(240&n[t+1]));t++);if(t){var y,f;if(o-1>t?(y="AAC PES did not start with ADTS header,offset:"+t,f=!1):(y="no ADTS header found in AAC PES",f=!0),this.observer.trigger(i.default.ERROR,{type:r.ErrorTypes.MEDIA_ERROR,details:r.ErrorDetails.FRAG_PARSING_ERROR,fatal:f,reason:y}),f)return}if(a.audiosamplerate||(s=c.default.getAudioConfig(this.observer,n,t,A),a.config=s.config,a.audiosamplerate=s.samplerate,a.channelCount=s.channelCount,a.codec=s.codec,a.timescale=s.samplerate,a.duration=s.samplerate*k,e.logger.log("parsed codec:"+a.codec+",rate:"+s.samplerate+",nb channel:"+s.channelCount)),b=0,p=9216e4/a.audiosamplerate,u&&E){var v=E+p;Math.abs(v-g)>1&&(e.logger.log("AAC: align PTS for overlapping frames by "+Math.round((v-g)/90)),g=v)}for(;o>t+5&&(d=1&n[t+1]?7:9,l=(3&n[t+3])<<11|n[t+4]<<3|(224&n[t+5])>>>5,l-=d,l>0&&o>=t+d+l);)for(h=g+b*p,_={unit:n.subarray(t+d,t+d+l),pts:h,dts:h},a.samples.push(_),a.len+=l,t+=l+d,b++;o-1>t&&(255!==n[t]||240!==(240&n[t+1]));t++);u=o>t?n.subarray(t,o):null,this.aacOverFlow=u,this.lastAacPTS=h}},{key:"_parseID3PES",value:function(e){this._id3Track.samples.push(e)}}],[{key:"probe",value:function(e){return e.length>=564&&71===e[0]&&71===e[188]&&71===e[376]?!0:!1}}]),t}();a.default=o},{"../errors":19,"../events":21,"../utils/logger":34,"./adts":12,"./exp-golomb":16}],19:[function(t,r,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ErrorTypes={NETWORK_ERROR:"hlsNetworkError",MEDIA_ERROR:"hlsMediaError",OTHER_ERROR:"hlsOtherError"},e.ErrorDetails={MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOOP_LOADING_ERROR:"fragLoopLoadingError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError"}},{}],20:[function(i,s,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},n=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(i){t(this,e),this.hls=i,this.onEvent=this.onEvent.bind(this);for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;n>r;r++)a[r-1]=arguments[r];this.handledEvents=a,this.useGenericHandler=!0,this.registerListeners()}return n(e,[{key:"destroy",value:function(){this.unregisterListeners()}},{key:"isEventHandler",value:function(){return"object"===r(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent}},{key:"registerListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){if("hlsEventGeneric"===e)throw new Error("Forbidden event name: "+e);this.hls.on(e,this.onEvent)}.bind(this))}},{key:"unregisterListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){this.hls.off(e,this.onEvent)}.bind(this))}},{key:"onEvent",value:function(e,t){this.onEventGeneric(e,t)}},{key:"onEventGeneric",value:function(e,t){var r=function(t,r){var e="on"+t.replace("hls","");if("function"!=typeof this[e])throw new Error("Event "+t+" has no generic handler in this "+this.constructor.name+" class (tried "+e+")");return this[e].bind(this,r)};r.call(this,e,t).call()}}]),e}();e.default=a},{}],21:[function(t,e,r){"use strict";e.exports={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",LEVEL_SWITCH:"hlsLevelSwitch",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded"}},{}],22:[function(r,s,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var e=r("../utils/logger"),i=function(){function t(){n(this,t)}return a(t,null,[{key:"mergeDetails",value:function(i,n){var s,c=Math.max(i.startSN,n.startSN)-n.startSN,d=Math.min(i.endSN,n.endSN)-n.startSN,f=n.startSN-i.startSN,h=i.fragments,o=n.fragments,u=0;if(c>d)return void(n.PTSKnown=!1);for(var r=c;d>=r;r++){var l=h[f+r],a=o[r];u=l.cc-a.cc,isNaN(l.startPTS)||(a.start=a.startPTS=l.startPTS,a.endPTS=l.endPTS,a.duration=l.duration,s=a)}if(u)for(e.logger.log("discontinuity sliding from playlist, take drift into account"),r=0;r<o.length;r++)o[r].cc+=u;if(s)t.updateFragPTS(n,s.sn,s.startPTS,s.endPTS);else{var g=h[f].start;for(r=0;r<o.length;r++)o[r].start+=g}n.PTSKnown=i.PTSKnown}},{key:"updateFragPTS",value:function(n,l,a,s){var o,i,r,e;if(l<n.startSN||l>n.endSN)return 0;o=l-n.startSN,i=n.fragments,r=i[o],isNaN(r.startPTS)||(a=Math.min(a,r.startPTS),s=Math.max(s,r.endPTS));var u=a-r.start;for(r.start=r.startPTS=a,r.endPTS=s,r.duration=s-a,e=o;e>0;e--)t.updatePTS(i,e,e-1);for(e=o;e<i.length-1;e++)t.updatePTS(i,e,e+1);return n.PTSKnown=!0,u}},{key:"updatePTS",value:function(s,n,a){var t=s[n],r=s[a],i=r.startPTS;isNaN(i)?a>n?r.start=t.start+t.duration:r.start=t.start-r.duration:a>n?(t.duration=i-t.start,t.duration<0&&e.logger.error("negative duration computed for frag "+t.sn+",level "+t.level+", there should be some duration drift between playlist and fragment!")):(r.duration=t.start-i,r.duration<0&&e.logger.error("negative duration computed for frag "+r.sn+",level "+r.level+", there should be some duration drift between playlist and fragment!"))}}]),t}();t.default=i},{"../utils/logger":34}],23:[function(t,D,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(a,"__esModule",{value:!0});var A=t("./events"),n=r(A),s=t("./errors"),u=t("./loader/playlist-loader"),d=r(u),f=t("./loader/fragment-loader"),h=r(f),c=t("./controller/abr-controller"),g=r(c),O=t("./controller/buffer-controller"),p=r(O),y=t("./controller/stream-controller"),m=r(y),b=t("./controller/level-controller"),E=r(b),_=t("./controller/timeline-controller"),R=r(_),e=t("./utils/logger"),k=t("./utils/xhr-loader"),L=r(k),T=t("events"),S=r(T),w=t("./loader/key-loader"),v=r(w),l=function(){function t(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,t);var i=t.DefaultConfig;for(var a in i)a in n||(n[a]=i[a]);if(void 0!==n.liveMaxLatencyDurationCount&&n.liveMaxLatencyDurationCount<=n.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');(0,e.enableLogs)(n.debug),this.config=n;var r=this.observer=new S.default;r.trigger=function(n){for(var t=arguments.length,a=Array(t>1?t-1:0),e=1;t>e;e++)a[e-1]=arguments[e];r.emit.apply(r,[n,n].concat(a))},r.off=function(a){for(var t=arguments.length,n=Array(t>1?t-1:0),e=1;t>e;e++)n[e-1]=arguments[e];r.removeListener.apply(r,[a].concat(n))},this.on=r.on.bind(r),this.off=r.off.bind(r),this.trigger=r.trigger.bind(r),this.playlistLoader=new d.default(this),this.fragmentLoader=new h.default(this),this.levelController=new E.default(this),this.abrController=new n.abrController(this),this.bufferController=new n.bufferController(this),this.streamController=new n.streamController(this),this.timelineController=new n.timelineController(this),this.keyLoader=new v.default(this)}return i(t,null,[{key:"isSupported",value:function(){return window.MediaSource&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')}},{key:"Events",get:function(){return n.default}},{key:"ErrorTypes",get:function(){return s.ErrorTypes}},{key:"ErrorDetails",get:function(){return s.ErrorDetails}},{key:"DefaultConfig",get:function(){return t.defaultConfig||(t.defaultConfig={autoStartLoad:!0,debug:!1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,maxSeekHole:2,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingLoopThreshold:3,startFragPrefetch:!1,appendErrorMaxRetry:3,loader:L.default,fLoader:void 0,pLoader:void 0,abrController:g.default,bufferController:p.default,streamController:m.default,timelineController:R.default,enableCEA708Captions:!0,enableMP2TPassThrough:!1}),t.defaultConfig},set:function(e){t.defaultConfig=e}}]),i(t,[{key:"destroy",value:function(){e.logger.log("destroy"),this.trigger(n.default.DESTROYING),this.detachMedia(),this.playlistLoader.destroy(),this.fragmentLoader.destroy(),this.levelController.destroy(),this.bufferController.destroy(),this.streamController.destroy(),this.timelineController.destroy(),this.keyLoader.destroy(),this.url=null,this.observer.removeAllListeners()}},{key:"attachMedia",value:function(t){e.logger.log("attachMedia"),this.media=t,this.trigger(n.default.MEDIA_ATTACHING,{media:t})}},{key:"detachMedia",value:function(){e.logger.log("detachMedia"),this.trigger(n.default.MEDIA_DETACHING),this.media=null}},{key:"loadSource",value:function(t){e.logger.log("loadSource:"+t),this.url=t,this.trigger(n.default.MANIFEST_LOADING,{url:t})}},{key:"startLoad",value:function(){e.logger.log("startLoad"),this.streamController.startLoad()}},{key:"swapAudioCodec",value:function(){e.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}},{key:"recoverMediaError",value:function(){e.logger.log("recoverMediaError");var t=this.media;this.detachMedia(),this.attachMedia(t)}},{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){e.logger.log("set currentLevel:"+t),this.loadLevel=t,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){e.logger.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){e.logger.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel()},set:function(e){this.levelController.level=e}},{key:"firstLevel",get:function(){return this.levelController.firstLevel},set:function(t){e.logger.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){e.logger.log("set startLevel:"+t),this.levelController.startLevel=t}},{key:"autoLevelCapping",get:function(){return this.abrController.autoLevelCapping},set:function(t){e.logger.log("set autoLevelCapping:"+t),this.abrController.autoLevelCapping=t}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}}]),t}();a.default=l},{"./controller/abr-controller":3,"./controller/buffer-controller":4,"./controller/level-controller":5,"./controller/stream-controller":6,"./controller/timeline-controller":7,"./errors":19,"./events":21,"./loader/fragment-loader":25,"./loader/key-loader":26,"./loader/playlist-loader":27,"./utils/logger":34,"./utils/xhr-loader":36,events:1}],24:[function(e,t,r){"use strict";t.exports=e("./hls.js").default},{"./hls.js":23}],25:[function(r,c,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var h=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=r("../events"),e=a(l),d=r("../event-handler"),i=a(d),t=r("../errors"),o=function(n){function r(t){return u(this,r),f(this,Object.getPrototypeOf(r).call(this,t,e.default.FRAG_LOADING))}return s(r,n),h(r,[{key:"destroy",value:function(){this.loader&&(this.loader.destroy(),this.loader=null),i.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(r){var t=r.frag;this.frag=t,this.frag.loaded=0;var e=this.hls.config;t.loader=this.loader="undefined"!=typeof e.fLoader?new e.fLoader(e):new e.loader(e),this.loader.load(t.url,"arraybuffer",this.loadsuccess.bind(this),this.loaderror.bind(this),this.loadtimeout.bind(this),e.fragLoadingTimeOut,1,0,this.loadprogress.bind(this),t)}},{key:"loadsuccess",value:function(n,t){var r=n.currentTarget.response;t.length=r.byteLength,this.frag.loader=void 0,this.hls.trigger(e.default.FRAG_LOADED,{payload:r,frag:this.frag,stats:t})}},{key:"loaderror",value:function(r){this.loader.abort(),this.hls.trigger(e.default.ERROR,{type:t.ErrorTypes.NETWORK_ERROR,details:t.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:this.frag,response:r})}},{key:"loadtimeout",value:function(){this.loader.abort(),this.hls.trigger(e.default.ERROR,{type:t.ErrorTypes.NETWORK_ERROR,details:t.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:this.frag})}},{key:"loadprogress",value:function(r,t){this.frag.loaded=t.loaded,this.hls.trigger(e.default.FRAG_LOAD_PROGRESS,{frag:this.frag,stats:t})}}]),r}(i.default);n.default=o},{"../errors":19,"../event-handler":20,"../events":21}],26:[function(r,c,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var h=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(n,"__esModule",{value:!0});var l=r("../events"),e=a(l),d=r("../event-handler"),i=a(d),t=r("../errors"),o=function(n){function r(n){u(this,r);var t=f(this,Object.getPrototypeOf(r).call(this,n,e.default.KEY_LOADING));return t.decryptkey=null,t.decrypturl=null,t}return s(r,n),h(r,[{key:"destroy",value:function(){this.loader&&(this.loader.destroy(),this.loader=null),i.default.prototype.destroy.call(this)}},{key:"onKeyLoading",value:function(i){var t=this.frag=i.frag,a=t.decryptdata,n=a.uri;if(n!==this.decrypturl||null===this.decryptkey){var r=this.hls.config;t.loader=this.loader=new r.loader(r),this.decrypturl=n,this.decryptkey=null,t.loader.load(n,"arraybuffer",this.loadsuccess.bind(this),this.loaderror.bind(this),this.loadtimeout.bind(this),r.fragLoadingTimeOut,r.fragLoadingMaxRetry,r.fragLoadingRetryDelay,this.loadprogress.bind(this),t)}else this.decryptkey&&(a.key=this.decryptkey,this.hls.trigger(e.default.KEY_LOADED,{frag:t}))}},{key:"loadsuccess",value:function(r){var t=this.frag;this.decryptkey=t.decryptdata.key=new Uint8Array(r.currentTarget.response),t.loader=void 0,this.hls.trigger(e.default.KEY_LOADED,{frag:t})}},{key:"loaderror",value:function(r){this.loader.abort(),this.hls.trigger(e.default.ERROR,{type:t.ErrorTypes.NETWORK_ERROR,details:t.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:this.frag,response:r})}},{key:"loadtimeout",value:function(){this.loader.abort(),this.hls.trigger(e.default.ERROR,{type:t.ErrorTypes.NETWORK_ERROR,details:t.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:this.frag})}},{key:"loadprogress",value:function(){}}]),r}(i.default);n.default=o},{"../errors":19,"../event-handler":20,"../events":21}],27:[function(r,y,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(s,"__esModule",{value:!0});var l=r("../events"),t=n(l),p=r("../event-handler"),i=n(p),e=r("../errors"),c=r("../utils/url"),g=n(c),v=r("../utils/attr-list"),a=n(v),u=function(n){function r(e){return d(this,r),f(this,Object.getPrototypeOf(r).call(this,e,t.default.MANIFEST_LOADING,t.default.LEVEL_LOADING))}return h(r,n),o(r,[{key:"destroy",value:function(){this.loader&&(this.loader.destroy(),this.loader=null),this.url=this.id=null,i.default.prototype.destroy.call(this)}},{key:"onManifestLoading",value:function(e){this.load(e.url,null)}},{key:"onLevelLoading",value:function(e){this.load(e.url,e.level,e.id)}},{key:"load",value:function(a,i,s){var t,r,n,e=this.hls.config;this.url=a,this.id=i,this.id2=s,void 0===this.id?(t=e.manifestLoadingMaxRetry,r=e.manifestLoadingTimeOut,n=e.manifestLoadingRetryDelay):(t=e.levelLoadingMaxRetry,r=e.levelLoadingTimeOut,n=e.levelLoadingRetryDelay),this.loader="undefined"!=typeof e.pLoader?new e.pLoader(e):new e.loader(e),this.loader.load(a,"",this.loadsuccess.bind(this),this.loaderror.bind(this),this.loadtimeout.bind(this),r,t,n)}},{key:"resolve",value:function(e,t){return g.default.buildAbsoluteURL(t,e)}},{key:"parseMasterPlaylist",value:function(f,u){for(var l=[],n=void 0,d=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;null!=(n=d.exec(f));){var e={},r=e.attrs=new a.default(n[1]);e.url=this.resolve(n[2],u);var s=r.decimalResolution("RESOLUTION");s&&(e.width=s.width,e.height=s.height),e.bitrate=r.decimalInteger("BANDWIDTH"),e.name=r.NAME;var t=r.CODECS;if(t){t=t.split(",");for(var o=0;o<t.length;o++){var i=t[o];-1!==i.indexOf("avc1")?e.videoCodec=this.avc1toavcoti(i):e.audioCodec=i}}l.push(e)}return l}},{key:"avc1toavcoti",value:function(r){var e,t=r.split(".");return t.length>2?(e=t.shift()+".",e+=parseInt(t.shift()).toString(16),e+=("000"+parseInt(t.shift()).toString(16)).substr(-4)):e=r,e}},{key:"cloneObj",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"parseLevelPlaylist",value:function(k,l,A){var e,E,s,i,v=0,o=0,n={url:l,fragments:[],live:!0,startSN:0},r={method:null,key:null,iv:null,uri:null},b=0,f=null,t=null;for(E=/(?:#EXT-X-(MEDIA-SEQUENCE):(\d+))|(?:#EXT-X-(TARGETDURATION):(\d+))|(?:#EXT-X-(KEY):(.*))|(?:#EXT(INF):([\d\.]+)[^\r\n]*([\r\n]+[^#|\r\n]+)?)|(?:#EXT-X-(BYTERANGE):([\d]+[@[\d]*)]*[\r\n]+([^#|\r\n]+)?|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.*))/g;null!==(e=E.exec(k));)switch(e.shift(),e=e.filter(function(e){return void 0!==e}),e[0]){case"MEDIA-SEQUENCE":v=n.startSN=parseInt(e[1]);break;case"TARGETDURATION":n.targetduration=parseFloat(e[1]);break;case"ENDLIST":n.live=!1;break;case"DIS":b++;break;case"BYTERANGE":var c=e[1].split("@");i=1===c.length?s:parseInt(c[1]),s=parseInt(c[0])+i,t&&!t.url&&(t.byteRangeStartOffset=i,t.byteRangeEndOffset=s,t.url=this.resolve(e[2],l));break;case"INF":var g=parseFloat(e[1]);if(!isNaN(g)){var u,m=v++;if(r.method&&r.uri&&!r.iv){u=this.cloneObj(r);for(var y=new Uint8Array(16),d=12;16>d;d++)y[d]=m>>8*(15-d)&255;u.iv=y}else u=r;var L=e[2]?this.resolve(e[2],l):null;t={url:L,duration:g,start:o,sn:m,level:A,cc:b,byteRangeStartOffset:i,byteRangeEndOffset:s,decryptdata:u,programDateTime:f},n.fragments.push(t),o+=g,i=null,f=null}break;case"KEY":var R=e[1],p=new a.default(R),h=p.enumeratedString("METHOD"),_=p.URI,T=p.hexadecimalInteger("IV");h&&(r={method:null,key:null,iv:null,uri:null},_&&"AES-128"===h&&(r.method=h,r.uri=this.resolve(_,l),r.key=null,r.iv=T));break;case"PROGRAM-DATE-TIME":f=new Date(Date.parse(e[1]))}return t&&!t.url&&(n.fragments.pop(),o-=t.duration),n.totalduration=o,n.endSN=v-1,n}},{key:"loadsuccess",value:function(u,n){var s,o=u.currentTarget,i=o.responseText,r=o.responseURL,l=this.id,d=this.id2,a=this.hls;if(void 0===r&&(r=this.url),n.tload=performance.now(),n.mtime=new Date(o.getResponseHeader("Last-Modified")),0===i.indexOf("#EXTM3U"))if(i.indexOf("#EXTINF:")>0)if(null===this.id)a.trigger(t.default.MANIFEST_LOADED,{levels:[{url:r}],url:r,stats:n});else{var f=this.parseLevelPlaylist(i,r,l);n.tparsed=performance.now(),a.trigger(t.default.LEVEL_LOADED,{details:f,level:l,id:d,stats:n})}else s=this.parseMasterPlaylist(i,r),s.length?a.trigger(t.default.MANIFEST_LOADED,{levels:s,url:r,stats:n}):a.trigger(t.default.ERROR,{type:e.ErrorTypes.NETWORK_ERROR,details:e.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:r,reason:"no level found in manifest"});else a.trigger(t.default.ERROR,{type:e.ErrorTypes.NETWORK_ERROR,details:e.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:r,reason:"no EXTM3U delimiter"})}},{key:"loaderror",value:function(a){var r,n;null===this.id?(r=e.ErrorDetails.MANIFEST_LOAD_ERROR,n=!0):(r=e.ErrorDetails.LEVEL_LOAD_ERROR,n=!1),this.loader.abort(),this.hls.trigger(t.default.ERROR,{type:e.ErrorTypes.NETWORK_ERROR,details:r,fatal:n,url:this.url,loader:this.loader,response:a.currentTarget,level:this.id,id:this.id2})}},{key:"loadtimeout",value:function(){var r,n;null===this.id?(r=e.ErrorDetails.MANIFEST_LOAD_TIMEOUT,n=!0):(r=e.ErrorDetails.LEVEL_LOAD_TIMEOUT,n=!1),this.loader.abort(),this.hls.trigger(t.default.ERROR,{type:e.ErrorTypes.NETWORK_ERROR,details:r,fatal:n,url:this.url,loader:this.loader,level:this.id,id:this.id2})}}]),r}(i.default);s.default=u},{"../errors":19,"../event-handler":20,"../events":21,"../utils/attr-list":31,"../utils/url":35}],28:[function(a,i,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(){t(this,e)}return r(e,null,[{key:"init",value:function(){e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var t;for(t in e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var n=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),a=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:n,audio:a};var i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),s=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=s,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var r=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,r,l,r,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,i))}},{key:"box",value:function(a){for(var t,n=Array.prototype.slice.call(arguments,1),e=8,r=n.length,i=r;r--;)e+=n[r].byteLength;for(t=new Uint8Array(e),t[0]=e>>24&255,t[1]=e>>16&255,t[2]=e>>8&255,t[3]=255&e,t.set(a,4),r=0,e=8;i>r;r++)t.set(n[r],e),e+=n[r].byteLength;return t}},{key:"hdlr",value:function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}},{key:"mdhd",value:function(t,r){return e.box(e.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24,r>>16&255,r>>8&255,255&r,85,196,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))}},{key:"mfhd",value:function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))}},{key:"minf",value:function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t));
}},{key:"moof",value:function(t,r,n){return e.box(e.types.moof,e.mfhd(t),e.traf(n,r))}},{key:"moov",value:function(t){for(var r=t.length,n=[];r--;)n[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(n).concat(e.mvex(t)))}},{key:"mvex",value:function(r){for(var t=r.length,n=[];t--;)n[t]=e.trex(r[t]);return e.box.apply(null,[e.types.mvex].concat(n))}},{key:"mvhd",value:function(t,r){var n=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,n)}},{key:"sdtp",value:function(i){var r,t,n=i.samples||[],a=new Uint8Array(4+n.length);for(t=0;t<n.length;t++)r=n[t].flags,a[t+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,a)}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))}},{key:"avc1",value:function(t){var r,a,i,n=[],s=[];for(r=0;r<t.sps.length;r++)a=t.sps[r],i=a.byteLength,n.push(i>>>8&255),n.push(255&i),n=n.concat(Array.prototype.slice.call(a));for(r=0;r<t.pps.length;r++)a=t.pps[r],i=a.byteLength,s.push(i>>>8&255),s.push(255&i),s=s.concat(Array.prototype.slice.call(a));var u=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(s))),o=t.width,l=t.height;return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,o>>8&255,255&o,l>>8&255,255&l,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),u,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))}},{key:"esds",value:function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))}},{key:"mp4a",value:function(t){var r=t.audiosamplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))}},{key:"stsd",value:function(t){return"audio"===t.type?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))}},{key:"tkhd",value:function(t){var r=t.id,n=t.duration,a=t.width,i=t.height;return e.box(e.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,i>>8&255,255&i,0,0]))}},{key:"traf",value:function(n,t){var a=e.sdtp(n),r=n.id;return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r])),e.box(e.types.tfdt,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t])),e.trun(n,a.length+16+16+8+16+8+8),a)}},{key:"trak",value:function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"trex",value:function(r){var t=r.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(h,o){var n,a,i,s,t,l,d=h.samples||[],r=d.length,f=12+16*r,u=new Uint8Array(f);for(o+=8+f,u.set([0,0,15,1,r>>>24&255,r>>>16&255,r>>>8&255,255&r,o>>>24&255,o>>>16&255,o>>>8&255,255&o],0),n=0;r>n;n++)a=d[n],i=a.duration,s=a.size,t=a.flags,l=a.cts,u.set([i>>>24&255,i>>>16&255,i>>>8&255,255&i,s>>>24&255,s>>>16&255,s>>>8&255,255&s,t.isLeading<<2|t.dependsOn,t.isDependedOn<<6|t.hasRedundancy<<4|t.paddingValue<<1|t.isNonSync,61440&t.degradPrio,15&t.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*n);return e.box(e.types.trun,u)}},{key:"initSegment",value:function(n){e.types||e.init();var t,r=e.moov(n);return t=new Uint8Array(e.FTYP.byteLength+r.byteLength),t.set(e.FTYP),t.set(r,e.FTYP.byteLength),t}}]),e}();e.default=n},{}],29:[function(n,h,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(a,"__esModule",{value:!0});var f=n("../events"),e=i(f),t=n("../utils/logger"),u=n("../remux/mp4-generator"),r=i(u),s=n("../errors"),d=function(){function n(e){o(this,n),this.observer=e,this.ISGenerated=!1,this.PES2MP4SCALEFACTOR=4,this.PES_TIMESCALE=9e4,this.MP4_TIMESCALE=this.PES_TIMESCALE/this.PES2MP4SCALEFACTOR}return l(n,[{key:"destroy",value:function(){}},{key:"insertDiscontinuity",value:function(){this._initPTS=this._initDTS=this.nextAacPts=this.nextAvcDts=void 0}},{key:"switchLevel",value:function(){this.ISGenerated=!1}},{key:"remux",value:function(r,n,a,i,t,s){this.ISGenerated||this.generateIS(r,n,t),n.samples.length&&this.remuxVideo(n,t,s),r.samples.length&&this.remuxAudio(r,t,s),a.samples.length&&this.remuxID3(a,t),i.samples.length&&this.remuxText(i,t),this.observer.trigger(e.default.FRAG_PARSED)}},{key:"generateIS",value:function(n,t,f){var a,i,h=this.observer,c=n.samples,u=t.samples,d=this.PES_TIMESCALE,o={},g={tracks:o,unique:!1},l=void 0===this._initPTS;l&&(a=i=1/0),n.config&&c.length&&(o.audio={container:"audio/mp4",codec:n.codec,initSegment:r.default.initSegment([n]),metadata:{channelCount:n.channelCount}},l&&(a=i=c[0].pts-d*f)),t.sps&&t.pps&&u.length&&(o.video={container:"video/mp4",codec:t.codec,initSegment:r.default.initSegment([t]),metadata:{width:t.width,height:t.height}},l&&(a=Math.min(a,u[0].pts-d*f),i=Math.min(i,u[0].dts-d*f))),Object.keys(o)?(h.trigger(e.default.FRAG_PARSING_INIT_SEGMENT,g),this.ISGenerated=!0,l&&(this._initPTS=a,this._initDTS=i)):h.trigger(e.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})}},{key:"remuxVideo",value:function(a,w,S){var k,l,v,A,g,d,T,L,R,h,_,c,o,n,s,p=8,b=this.PES_TIMESCALE,f=this.PES2MP4SCALEFACTOR,u=[];for(d=new Uint8Array(a.len+4*a.nbNalu+8),k=new DataView(d.buffer),k.setUint32(0,d.byteLength),d.set(r.default.types.mdat,4);a.samples.length;){for(l=a.samples.shift(),A=0;l.units.units.length;)g=l.units.units.shift(),k.setUint32(p,g.data.byteLength),p+=4,d.set(g.data,p),p+=g.data.byteLength,A+=4+g.data.byteLength;if(_=l.pts-this._initDTS,c=l.dts-this._initDTS,c=Math.min(_,c),void 0!==h){o=this._PTSNormalize(_,h),n=this._PTSNormalize(c,h);var y=(n-h)/f;0>=y&&(t.logger.log("invalid sample duration at PTS/DTS: "+l.pts+"/"+l.dts+":"+y),y=1),v.duration=y}else{var i,m=this.nextAvcDts;o=this._PTSNormalize(_,m),n=this._PTSNormalize(c,m),i=Math.round((n-m)/90),(S||Math.abs(i)<600)&&i&&(i>1?t.logger.log("AVC:"+i+" ms hole between fragments detected,filling it"):-1>i&&t.logger.log("AVC:"+-i+" ms overlapping between fragments detected"),n=m,o=Math.max(o-i,n),t.logger.log("Video/PTS/DTS adjusted: "+o+"/"+n+",delta:"+i)),L=Math.max(0,o),R=Math.max(0,n)}v={size:A,duration:0,cts:(o-n)/f,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0}},s=v.flags,l.key===!0?(s.dependsOn=2,s.isNonSync=0):(s.dependsOn=1,s.isNonSync=1),u.push(v),h=n}var E=0;u.length>=2&&(E=u[u.length-2].duration,v.duration=E),this.nextAvcDts=n+E*f,a.len=0,a.nbNalu=0,u.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&(s=u[0].flags,s.dependsOn=2,s.isNonSync=0),a.samples=u,T=r.default.moof(a.sequenceNumber++,R/f,a),a.samples=[],this.observer.trigger(e.default.FRAG_PARSING_DATA,{data1:T,data2:d,startPTS:L/b,endPTS:(o+f*E)/b,startDTS:R/b,endDTS:this.nextAvcDts/b,type:"video",nb:u.length})}},{key:"remuxAudio",value:function(n,w,S){var L,y,i,f,o,k,A,b,l,v,_,d,a,R=8,u=this.PES_TIMESCALE,T=n.timescale,h=u/T,m=[],E=[];for(n.samples.sort(function(e,t){return e.pts-t.pts}),E=n.samples;E.length;){if(y=E.shift(),f=y.unit,v=y.pts-this._initDTS,_=y.dts-this._initDTS,void 0!==l)d=this._PTSNormalize(v,l),a=this._PTSNormalize(_,l),i.duration=(a-l)/h,Math.abs(i.duration-1024)>10&&t.logger.log("invalid AAC sample duration at PTS "+Math.round(v/90)+",should be 1024,found :"+Math.round(i.duration)),i.duration=1024,a=1024*h+l;else{var s,p=this.nextAacPts;if(d=this._PTSNormalize(v,p),a=this._PTSNormalize(_,p),s=Math.round(1e3*(d-p)/u),(S||Math.abs(s)<600)&&s){if(s>0)t.logger.log(s+" ms hole between AAC samples detected,filling it");else if(-12>s){t.logger.log(-s+" ms overlapping between AAC samples detected, drop frame"),n.len-=f.byteLength;continue}d=a=p}if(A=Math.max(0,d),b=Math.max(0,a),!(n.len>0))return;o=new Uint8Array(n.len+8),L=new DataView(o.buffer),L.setUint32(0,o.byteLength),o.set(r.default.types.mdat,4)}o.set(f,R),R+=f.byteLength,i={size:f.byteLength,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},m.push(i),l=a}var g=0,c=m.length;c>=2&&(g=m[c-2].duration,i.duration=g),c&&(this.nextAacPts=d+h*g,n.len=0,n.samples=m,k=r.default.moof(n.sequenceNumber++,b/h,n),n.samples=[],this.observer.trigger(e.default.FRAG_PARSING_DATA,{data1:k,data2:o,startPTS:A/u,endPTS:this.nextAacPts/u,startDTS:b/u,endDTS:(a+h*g)/u,type:"audio",nb:c}))}},{key:"remuxID3",value:function(r,a){var t,i=r.samples.length;if(i){for(var n=0;i>n;n++)t=r.samples[n],t.pts=(t.pts-this._initPTS)/this.PES_TIMESCALE,t.dts=(t.dts-this._initDTS)/this.PES_TIMESCALE;this.observer.trigger(e.default.FRAG_PARSING_METADATA,{samples:r.samples})}r.samples=[],a=a}},{key:"remuxText",value:function(t,a){t.samples.sort(function(e,t){return e.pts-t.pts});var r,i=t.samples.length;if(i){for(var n=0;i>n;n++)r=t.samples[n],r.pts=(r.pts-this._initPTS)/this.PES_TIMESCALE;this.observer.trigger(e.default.FRAG_PARSING_USERDATA,{samples:t.samples})}t.samples=[],a=a}},{key:"_PTSNormalize",value:function(e,t){var r;if(void 0===t)return e;for(r=e>t?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e}},{key:"passthrough",get:function(){return!1}},{key:"timescale",get:function(){return this.MP4_TIMESCALE}}]),n}();a.default=d},{"../errors":19,"../events":21,"../remux/mp4-generator":28,"../utils/logger":34}],30:[function(r,l,e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var s=r("../events"),t=n(s),o=function(){function e(t){a(this,e),this.observer=t,this.ISGenerated=!1}return i(e,[{key:"destroy",value:function(){}},{key:"insertDiscontinuity",value:function(){}},{key:"switchLevel",value:function(){this.ISGenerated=!1}},{key:"remux",value:function(o,s,f,d,a,u){var i=this.observer;if(!this.ISGenerated){var l={},n={tracks:l,unique:!0},e=s,r=e.codec;r&&(n.tracks.video={container:e.container,codec:r,metadata:{width:e.width,height:e.height}}),e=o,r=e.codec,r&&(n.tracks.audio={container:e.container,codec:r,metadata:{channelCount:e.channelCount}}),this.ISGenerated=!0,i.trigger(t.default.FRAG_PARSING_INIT_SEGMENT,n)}i.trigger(t.default.FRAG_PARSING_DATA,{data1:u,startPTS:a,startDTS:a,type:"audiovideo",nb:1})}},{key:"passthrough",get:function(){return!0}},{key:"timescale",get:function(){return 0}}]),e}();e.default=o},{"../events":21}],31:[function(a,i,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(r){t(this,e),"string"==typeof r&&(r=e.parseAttrList(r));for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n])}return r(e,[{key:"decimalInteger",value:function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e}},{key:"hexadecimalInteger",value:function(r){if(this[r]){var e=(this[r]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var n=new Uint8Array(e.length/2),t=0;t<e.length/2;t++)n[t]=parseInt(e.slice(2*t,2*t+2),16);return n}return null}},{key:"hexadecimalIntegerAsNumber",value:function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e}},{key:"decimalFloatingPoint",value:function(e){return parseFloat(this[e])}},{key:"enumeratedString",value:function(e){return this[e]}},{key:"decimalResolution",value:function(t){var e=/^(\d+)x(\d+)$/.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}}}],[{key:"parseAttrList",value:function(a){for(var t,i=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,r={};null!==(t=i.exec(a));){var e=t[2],n='"';0===e.indexOf(n)&&e.lastIndexOf(n)===e.length-1&&(e=e.slice(1,-1)),r[t[1]]=e}return r}}]),e}();e.default=n},{}],32:[function(r,e,n){"use strict";var t={search:function(a,s){for(var t=0,r=a.length-1,e=null,n=null;r>=t;){e=(t+r)/2|0,n=a[e];var i=s(n);if(i>0)t=e+1;else{if(!(0>i))return n;r=e-1}}return null}};e.exports=t},{}],33:[function(a,i,e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(){t(this,e)}return r(e,[{key:"attach",value:function(e){this.media=e,this.display=[],this.memory=[]}},{key:"detach",value:function(){this.clear()}},{key:"destroy",value:function(){}},{key:"_createCue",value:function(){var t=window.VTTCue||window.TextTrackCue,e=this.cue=new t(-1,-1,"");e.text="",e.pauseOnExit=!1,e.startTime=Number.MAX_VALUE,e.endTime=Number.MAX_VALUE,this.memory.push(e)}},{key:"clear",value:function(){var e=this._textTrack;if(e&&e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}},{key:"push",value:function(r,n){this.cue||this._createCue();for(var a,t,e,s,o,u=31&n[0],i=2,l=0;u>l;l++)if(a=n[i++],t=127&n[i++],e=127&n[i++],s=0===(4&a)?!1:!0,o=3&a,(0!==t||0!==e)&&s&&0===o){if(32&t||64&t)this.cue.text+=this._fromCharCode(t)+this._fromCharCode(e);else if((17===t||25===t)&&e>=48&&63>=e)switch(e){case 48:this.cue.text+="®";break;case 49:this.cue.text+="°";break;case 50:this.cue.text+="½";break;case 51:this.cue.text+="¿";break;case 52:this.cue.text+="™";break;case 53:this.cue.text+="¢";break;case 54:this.cue.text+="";break;case 55:this.cue.text+="£";break;case 56:this.cue.text+="♪";break;case 57:this.cue.text+=" ";break;case 58:this.cue.text+="è";break;case 59:this.cue.text+="â";break;case 60:this.cue.text+="ê";break;case 61:this.cue.text+="î";break;case 62:this.cue.text+="ô";break;case 63:this.cue.text+="û"}if((17===t||25===t)&&e>=32&&47>=e)switch(e){case 32:break;case 33:break;case 34:break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 41:break;case 42:break;case 43:break;case 44:break;case 45:break;case 46:break;case 47:}if((20===t||28===t)&&e>=32&&47>=e)switch(e){case 32:this._clearActiveCues(r);break;case 33:this.cue.text=this.cue.text.substr(0,this.cue.text.length-1);break;case 34:break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 41:this._clearActiveCues(r);break;case 42:break;case 43:break;case 44:this._clearActiveCues(r);break;case 45:break;case 46:this._text="";break;case 47:this._flipMemory(r)}if((23===t||31===t)&&e>=33&&35>=e)switch(e){case 33:break;case 34:break;case 35:}}}},{key:"_fromCharCode",value:function(e){switch(e){case 42:return"á";case 2:return"á";case 2:return"é";case 4:return"í";case 5:return"ó";case 6:return"ú";case 3:return"ç";case 4:return"÷";case 5:return"Ñ";case 6:return"ñ";case 7:return"█";default:return String.fromCharCode(e)}}},{key:"_flipMemory",value:function(e){this._clearActiveCues(e),this._flushCaptions(e)}},{key:"_flushCaptions",value:function(s){this._has708||(this._textTrack=this.media.addTextTrack("captions","English","en"),this._has708=!0);var e=!0,n=!1,a=void 0;try{for(var i,t=this.memory[Symbol.iterator]();!(e=(i=t.next()).done);e=!0){var r=i.value;r.startTime=s,this._textTrack.addCue(r),this.display.push(r)}}catch(e){n=!0,a=e}finally{try{!e&&t.return&&t.return()}finally{if(n)throw a}}this.memory=[],this.cue=null}},{key:"_clearActiveCues",value:function(i){var e=!0,r=!1,n=void 0;try{for(var a,t=this.display[Symbol.iterator]();!(e=(a=t.next()).done);e=!0){var s=a.value;s.endTime=i}}catch(e){r=!0,n=e}finally{try{!e&&t.return&&t.return()}finally{if(r)throw n}}this.display=[]}},{key:"_clearBufferedCues",value:function(){}}]),e}();e.default=n},{}],34:[function(l,u,r){"use strict";function e(){}function a(t,e){return e="["+t+"] > "+e}function i(t){var r=window.console[t];return r?function(){for(var i=arguments.length,e=Array(i),n=0;i>n;n++)e[n]=arguments[n];e[0]&&(e[0]=a(t,e[0])),r.apply(window.console,e)}:e}function s(r){for(var n=arguments.length,a=Array(n>1?n-1:0),e=1;n>e;e++)a[e-1]=arguments[e];a.forEach(function(e){t[e]=r[e]?r[e].bind(r):i(e)})}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(r,"__esModule",{value:!0});var n={trace:e,debug:e,log:e,warn:e,info:e,error:e},t=n;r.enableLogs=function(e){if(e===!0||"object"===("undefined"==typeof e?"undefined":o(e))){s(e,"debug","log","info","warn","error");try{t.log()}catch(e){t=n}}else t=n},r.logger=t},{}],35:[function(r,t,n){"use strict";var e={buildAbsoluteURL:function(r,t){if(t=t.trim(),/^[a-z]+:/i.test(t))return t;var o=null,a=null,i=/^([^#]*)(.*)$/.exec(t);i&&(a=i[2],t=i[1]);var s=/^([^\?]*)(.*)$/.exec(t);s&&(o=s[2],t=s[1]);var f=/^([^#]*)(.*)$/.exec(r);f&&(r=f[1]);var u=/^([^\?]*)(.*)$/.exec(r);u&&(r=u[1]);var l=/^((([a-z]+):)?\/\/[a-z0-9\.-]+(:[0-9]+)?\/)(.*)$/i.exec(r),h=l[3],d=l[1],c=l[5],n=null;return n=/^\/\//.test(t)?h+"://"+e.buildAbsolutePath("",t.substring(2)):/^\//.test(t)?d+e.buildAbsolutePath("",t.substring(1)):e.buildAbsolutePath(d+c,t),o&&(n+=o),a&&(n+=a),n},buildAbsolutePath:function(i,s){for(var n,e,o=s,a="",t=i.replace(/[^\/]*$/,o.replace(/(\/|^)(?:\.?\/+)+/g,"$1")),r=0;e=t.indexOf("/../",r),e>-1;r=e+n)n=/^\/(?:\.\.\/)*/.exec(t.slice(e))[0].length,a=(a+t.substring(r,e)).replace(new RegExp("(?:\\/+[^\\/]*){0,"+(n-1)/3+"}$"),"/");return a+t.substr(r)}};t.exports=e},{}],36:[function(r,s,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var e=r("../utils/logger"),i=function(){function t(e){n(this,t),e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}return a(t,[{key:"destroy",value:function(){this.abort(),this.loader=null}},{key:"abort",value:function(){var e=this.loader,t=this.timeoutHandle;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),t&&window.clearTimeout(t)}},{key:"load",value:function(r,n,a,i,s,t,o,l){var u=arguments.length<=8||void 0===arguments[8]?null:arguments[8],e=arguments.length<=9||void 0===arguments[9]?null:arguments[9];this.url=r,!e||isNaN(e.byteRangeStartOffset)||isNaN(e.byteRangeEndOffset)||(this.byteRange=e.byteRangeStartOffset+"-"+(e.byteRangeEndOffset-1)),this.responseType=n,this.onSuccess=a,this.onProgress=u,this.onTimeout=s,this.onError=i,this.stats={trequest:performance.now(),retry:0},this.timeout=t,this.maxRetry=o,this.retryDelay=l,this.timeoutHandle=window.setTimeout(this.loadtimeout.bind(this),t),this.loadInternal()}},{key:"loadInternal",value:function(){var e;e="undefined"!=typeof XDomainRequest?this.loader=new XDomainRequest:this.loader=new XMLHttpRequest,e.onloadend=this.loadend.bind(this),e.onprogress=this.loadprogress.bind(this),e.open("GET",this.url,!0),this.byteRange&&e.setRequestHeader("Range","bytes="+this.byteRange),e.responseType=this.responseType,this.stats.tfirst=null,this.stats.loaded=0,this.xhrSetup&&this.xhrSetup(e,this.url),e.send()}},{key:"loadend",value:function(n){var a=n.currentTarget,r=a.status,t=this.stats;t.aborted||(r>=200&&300>r?(window.clearTimeout(this.timeoutHandle),t.tload=performance.now(),this.onSuccess(n,t)):t.retry<this.maxRetry?(e.logger.warn(r+" while loading "+this.url+", retrying in "+this.retryDelay+"..."),this.destroy(),window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,64e3),t.retry++):(window.clearTimeout(this.timeoutHandle),e.logger.error(r+" while loading "+this.url),this.onError(n)))}},{key:"loadtimeout",value:function(t){e.logger.warn("timeout while loading "+this.url),this.onTimeout(t,this.stats)}},{key:"loadprogress",value:function(t){var e=this.stats;null===e.tfirst&&(e.tfirst=performance.now()),e.loaded=t.loaded,this.onProgress&&this.onProgress(t,e)}}]),t}();t.default=i},{"../utils/logger":34}]},{},[24])(24)});

    }

    try {
        $.rangeslider();
    }catch(err)
    {
        /*! rangeslider.js - v2.1.1, handle error or insert source */
		!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(){var a=document.createElement("input");return a.setAttribute("type","range"),"text"!==a.type}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)}function d(a,b){return b=b||100,function(){if(!a.debouncing){var c=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,c),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},b),a.lastReturnVal}}function e(a){return a&&(0===a.offsetWidth||0===a.offsetHeight||a.open===!1)}function f(a){for(var b=[],c=a.parentNode;e(c);)b.push(c),c=c.parentNode;return b}function g(a,b){function c(a){"undefined"!=typeof a.open&&(a.open=a.open?!1:!0)}var d=f(a),e=d.length,g=[],h=a[b];if(e){for(var i=0;e>i;i++)g[i]=d[i].style.cssText,d[i].style.setProperty?d[i].style.setProperty("display","block","important"):d[i].style.cssText+=";display: block !important",d[i].style.height="0",d[i].style.overflow="hidden",d[i].style.visibility="hidden",c(d[i]);h=a[b];for(var j=0;e>j;j++)d[j].style.cssText=g[j],c(d[j])}return h}function h(a,b){var c=parseFloat(a);return Number.isNaN(c)?b:c}function i(a){return a.charAt(0).toUpperCase()+a.substr(1)}function j(b,e){if(this.$window=a(window),this.$document=a(document),this.$element=a(b),this.options=a.extend({},n,e),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=o.orientation[this.orientation].dimension,this.DIRECTION=o.orientation[this.orientation].direction,this.DIRECTION_STYLE=o.orientation[this.orientation].directionStyle,this.COORDINATE=o.orientation[this.orientation].coordinate,this.polyfill&&m)return!1;this.identifier="js-"+k+"-"+l++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=a('<div class="'+this.options.fillClass+'" />'),this.$handle=a('<div class="'+this.options.handleClass+'" />'),this.$range=a('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=a.proxy(this.handleDown,this),this.handleMove=a.proxy(this.handleMove,this),this.handleEnd=a.proxy(this.handleEnd,this),this.init();var f=this;this.$window.on("resize."+this.identifier,d(function(){c(function(){f.update(!1,!1)},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(a,b){if(!b||b.origin!==f.identifier){var c=a.target.value,d=f.getPositionFromValue(c);f.setPosition(d)}})}Number.isNaN=Number.isNaN||function(a){return"number"==typeof a&&a!==a};var k="rangeslider",l=0,m=b(),n={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},o={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return j.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},j.prototype.update=function(a,b){a=a||!1,a&&(this.min=h(this.$element[0].getAttribute("min"),0),this.max=h(this.$element[0].getAttribute("max"),100),this.value=h(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=h(this.$element[0].getAttribute("step"),1)),this.handleDimension=g(this.$handle[0],"offset"+i(this.DIMENSION)),this.rangeDimension=g(this.$range[0],"offset"+i(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,b)},j.prototype.handleDown=function(a){if(this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),!((" "+a.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var b=this.getRelativePosition(a),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=this.getPositionFromNode(this.$handle[0])-c,e="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(e),b>=d&&b<d+this.handleDimension&&(this.grabPos=b-d)}},j.prototype.handleMove=function(a){a.preventDefault();var b=this.getRelativePosition(a),c="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(c)},j.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},j.prototype.cap=function(a,b,c){return b>a?b:a>c?c:a},j.prototype.setPosition=function(a,b){var c,d;void 0===b&&(b=!0),c=this.getValueFromPosition(this.cap(a,0,this.maxHandlePos)),d=this.getPositionFromValue(c),this.$fill[0].style[this.DIMENSION]=d+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=d+"px",this.setValue(c),this.position=d,this.value=c,b&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(d,c)},j.prototype.getPositionFromNode=function(a){for(var b=0;null!==a;)b+=a.offsetLeft,a=a.offsetParent;return b},j.prototype.getRelativePosition=function(a){var b=i(this.COORDINATE),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=0;return"undefined"!=typeof a["page"+b]?d=a["client"+b]:"undefined"!=typeof a.originalEvent["client"+b]?d=a.originalEvent["client"+b]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0]["client"+b]?d=a.originalEvent.touches[0]["client"+b]:a.currentPoint&&"undefined"!=typeof a.currentPoint[this.COORDINATE]&&(d=a.currentPoint[this.COORDINATE]),d-c},j.prototype.getPositionFromValue=function(a){var b,c;return b=(a-this.min)/(this.max-this.min),c=Number.isNaN(b)?0:b*this.maxHandlePos},j.prototype.getValueFromPosition=function(a){var b,c;return b=a/(this.maxHandlePos||1),c=this.step*Math.round(b*(this.max-this.min)/this.step)+this.min,Number(c.toFixed(this.toFixed))},j.prototype.setValue=function(a){(a!==this.value||""===this.$element[0].value)&&this.$element.val(a).trigger("input",{origin:this.identifier})},j.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+k),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},a.fn[k]=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("plugin_"+k);e||d.data("plugin_"+k,e=new j(this,b)),"string"==typeof b&&e[b].apply(e,c)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});
    }

    // Julia main class
    _julia = function(el, opts)
    {
        // Custom options
        var options = typeof opts === 'undefined' ? {}: opts;
        var _element = typeof el === 'undefined' ? $('video'): el;

        // Default options
        var _options = {
            source: false,
            autoplay: false,
            volume: 25,
            muted: false,
            width: 512,
            height: 288,
            debug: false,
            debugPlayback: false,
            forceHls: false,
            live: false,
            responsive: true,
            dimensions: [
                [1920, 1080],
                [1280,720],
                [960,540],
                [640,360],
                [512,288]
            ],
            pauseOnClick: false,
            poster: '',
            hlsConfig: {
                debug : false,
                autoStartLoad : true,
                maxBufferLength : 60,
                maxBufferSize : 120*1000*1000,
                liveSyncDurationCount : 5, // D: 3
                liveMaxLatencyDurationCount: 20,
                enableWorker : true,
                fragLoadingTimeOut : 5000,
                fragLoadingMaxRetry : 6,
                fragLoadingRetryDelay : 100,
                manifestLoadingTimeOut : 10000,
                manifestLoadingMaxRetry : 6,
                manifestLoadingRetryDelay : 500,
                fpsDroppedMonitoringPeriod : 5000,
                fpsDroppedMonitoringThreshold : 0.2,
                appendErrorMaxRetry : 200,
            },
            suggest: [],
            suggestLimit: 2,
            suggestTimeout: 10000,
            swf: __JULIA_ROOT_PATH__+'/swf/flashlsChromeless.swf',
            themePath: __JULIA_ROOT_PATH__+'/css/themes',
            pluginPath: __JULIA_ROOT_PATH__+'/js/plugins',
            theme: 'default',
            i18n: {
                liveText: 'Live'
            },
            onTime: {},
            triggerHls: {},
            onPlay: false,
            onPause: false,
            onStop: false,
            onPosition: false,
            onSuggest: false,
        };


        // UI & behavior globals
        var _env = {
            shield: '',
            element: _element,
            suggest: '',
            toolbar: '',
            poster: '',
            api: '',
            apiId: Math.floor((Math.random()*10000000)+1), // Create a shadow api unique ID
            player: '',
            isLive: false,
            hls: {},
            canPlayMedia: '',
            canPlayMediaString: '',
            isHls: false,
            useHlsLib: false,
            tries: 0,
            source: '',
            flashApi: false,
            duration: 0,
            apiOk: false,
            onTimeRised: [],
            seeking: false,
            dimensions: {
            	width: 0,
            	height: 0,
            },
            flashCallbackName: '',
            started: false,
            publicApi: {},
            suggestPointer: 0,
            suggestClicked: false,
            progressStep: 0.01, // Full sense: 100, so .01 is enough accurate
        }

        // Extend options
        var _system = {

            extend: function()
            {
                for(o in _options)
                {
                    if(options.hasOwnProperty(o))
                    {
                        _options[o] = options[o];
                    }
                }

                options = _options;
            }
        };

        // Console debug
        var _debug = {

            run: function(data)
            {
                if(options.debug === true)
                {
                    if(window.console)
                    {
                        for(d in data)
                        {
                            console.log(' - [instance: '+_env.apiId+'] '+d+' ['+(typeof data[d])+']', data[d]);
                        }
                    }
                }
            }
        };

        // Persistent user data in cookies
        var _persist = {

            set: function(name, value, days)
            {
                dateObj = new Date();
                dateObj.setTime(dateObj.getTime() + (days*24*60*60*1000));
                var expires = 'expires=' + dateObj.toUTCString();
                document.cookie = name + '=' + value + '; ' + expires + '; path=/';
            },

            get: function(name)
            {
                var name = name + '=';
                var ca = document.cookie.split(';');

                for(var i=0; i<ca.length; i++)
                {
                    var c = ca[i];

                    while(c.charAt(0)==' ')
                    {
                        c = c.substring(1);
                    }

                    if(c.indexOf(name) == 0)
                    {
                        return c.substring(name.length,c.length);
                    }
                }

                return '';
            }

        };

        // Create valid api object
        var _api = {

            create: function()
            {
                $('#julia-api-'+_env.apiId).remove();

                // Create default api object
                if(_env.flashApi === false)
                {
                    _debug.run({
                        'apiType': 'html5video',
                    });

                    apiElement = $('<video class="julia-video" id="julia-api-'+_env.apiId+'" preload="auto"></video>');
                    _env.player.prepend(apiElement);
                    _env.api = document.getElementById('julia-api-'+_env.apiId);
                    _env.api.controls = false;
                    _env.apiOk = true;

                }else{

                    var flash = _flash.detect();
                    var flashOk = flash.installed;

                    if( (flash.major==11 && flash.minor>=2) || flash.major>11 )
                    {
                        _debug.run({
                            'apiType': 'flashls',
                        });

                        _env.apiOk = true;
                        _env.flashCallbackName = 'flashlsCallback'+_env.apiId;

                        apiElement = $('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="" id="julia-api-'+_env.apiId+'">'
                                    +'<param name="movie" value="'+options.swf+'?inline=1" />'
                                    +'<param name="quality" value="autohigh" />'
                                    +'<param name="swliveconnect" value="true" />'
                                    +'<param name="allowScriptAccess" value="sameDomain" />'
                                    +'<param name="bgcolor" value="#000000" />'
                                    +'<param name="allowFullScreen" value="true" />'
                                    +'<param name="wmode" value="opaque" />'
                                    +'<param name="FlashVars" value="callback='+_env.flashCallbackName+'" />'
                                    +'<embed src="'+options.swf+'?inline=1" name="julia-api-'+_env.apiId+'" '
                                    +'    quality="autohigh" '
                                    +'    bgcolor="#000000" '
                                    +'    align="middle" allowFullScreen="true" '
                                    +'    allowScriptAccess="sameDomain" '
                                    +'    type="application/x-shockwave-flash" '
                                    +'    swliveconnect="true" '
                                    +'    wmode="opaque" '
                                    +'    FlashVars="callback='+_env.flashCallbackName+'"'
                                    +'    pluginspage="http://www.macromedia.com/go/getflashplayer" >'
                                    +'</embed>'
                                +'</object>');

                        _env.player.prepend(apiElement);

                        flashlsAPI = function(flashObject)
                        {
                            this.constructor = function(flashObject)
                            {
                                this.flashObject = flashObject;
                            }

                            this.constructor(flashObject);

                            this.load = function(url)
                            {
                                this.flashObject.playerLoad(url);
                            }

                            this.play = function(offset)
                            {
                                started = true;
                                this.flashObject.playerPlay(offset);
                            }

                            this.pause = function()
                            {
                                this.flashObject.playerPause();
                            }

                            this.resume = function() {
                                this.flashObject.playerResume();
                            }

                            this.seek = function(offset) {
                                this.flashObject.playerSeek(offset);
                            }

                            this.stop = function() {
                                this.flashObject.playerStop();
                            }

                            this.volume = function(volume) {
                                this.flashObject.playerVolume(volume);
                            }

                            this.setCurrentLevel = function(level) {
                                this.flashObject.playerSetCurrentLevel(level);
                            }

                            this.setNextLevel = function(level) {
                                this.flashObject.playerSetNextLevel(level);
                            }

                            this.setLoadLevel = function(level) {
                                this.flashObject.playerSetLoadLevel(level);
                            }

                            this.setMaxBufferLength = function(len) {
                                this.flashObject.playerSetmaxBufferLength(len);
                            }

                            this.getPosition = function() {
                                return this.flashObject.getPosition();
                            }

                            this.getDuration = function() {
                                return this.flashObject.getDuration();
                            }

                            this.getbufferLength = function() {
                                return this.flashObject.getbufferLength();
                            }

                            this.getbackBufferLength = function() {
                                return this.flashObject.getbackBufferLength();
                            }

                            this.getLowBufferLength = function() {
                                return this.flashObject.getlowBufferLength();
                            }

                            this.getMinBufferLength = function() {
                                return this.flashObject.getminBufferLength();
                            }

                            this.getMaxBufferLength = function() {
                                return this.flashObject.getmaxBufferLength();
                            }

                            this.getLevels = function() {
                                return this.flashObject.getLevels();
                            }

                            this.getAutoLevel = function() {
                                return this.flashObject.getAutoLevel();
                            }

                            this.getCurrentLevel = function() {
                                return this.flashObject.getCurrentLevel();
                            }

                            this.getNextLevel = function() {
                                return this.flashObject.getNextLevel();
                            }

                            this.getLoadLevel = function() {
                                return this.flashObject.getLoadLevel();
                            }

                            this.getAudioTrackList = function() {
                                return this.flashObject.getAudioTrackList();
                            }

                            this.getStats = function() {
                                return this.flashObject.getStats();
                            }

                            this.setAudioTrack = function(trackId) {
                                this.flashObject.playerSetAudioTrack(trackId);
                            }

                            this.playerSetLogDebug = function(state) {
                                this.flashObject.playerSetLogDebug(state);
                            }

                            this.getLogDebug = function() {
                                return this.flashObject.getLogDebug();
                            }

                            this.playerSetLogDebug2 = function(state) {
                                this.flashObject.playerSetLogDebug2(state);
                            }

                            this.getLogDebug2 = function() {
                                return this.flashObject.getLogDebug2();
                            }

                            this.playerSetUseHardwareVideoDecoder = function(state) {
                                this.flashObject.playerSetUseHardwareVideoDecoder(state);
                            }

                            this.getUseHardwareVideoDecoder = function() {
                                return this.flashObject.getUseHardwareVideoDecoder();
                            }

                            this.playerSetflushLiveURLCache = function(state) {
                                this.flashObject.playerSetflushLiveURLCache(state);
                            }

                            this.getflushLiveURLCache = function() {
                                return this.flashObject.getflushLiveURLCache();
                            }

                            this.playerSetJSURLStream = function(state) {
                                this.flashObject.playerSetJSURLStream(state);
                            }

                            this.getJSURLStream = function() {
                                return this.flashObject.getJSURLStream();
                            }

                            this.playerCapLeveltoStage = function(state) {
                                this.flashObject.playerCapLeveltoStage(state);
                            }

                            this.getCapLeveltoStage = function() {
                                return this.flashObject.getCapLeveltoStage();
                            }

                            this.playerSetAutoLevelCapping = function(level) {
                                this.flashObject.playerSetAutoLevelCapping(level);
                            }

                            this.getAutoLevelCapping = function() {
                                return this.flashObject.getAutoLevelCapping();
                            }
                        };

                        getFlashMovieObject = function(movieName)
                        {
                            if (window.document[movieName])
                            {
                                return window.document[movieName];
                            }
                            if (navigator.appName.indexOf("Microsoft Internet")==-1)
                            {
                                if (document.embeds && document.embeds[movieName])
                                {
                                   return document.embeds[movieName];
                                }else // if (navigator.appName.indexOf("Microsoft Internet")!=-1)
                                {
                                    return document.getElementById(movieName);
                                }
                            }
                        }

                        _env.api = new flashlsAPI(getFlashMovieObject('julia-api-'+_env.apiId));

                    }else{

                        _env.api = {};
                        _env.shield.find('.julia-preloader').html('<div style="background: #111; color: #DDD; min-height: 100%; padding-top: 10%; font-size: 1.2em;"><span class="ion-android-warning"></span> <a href="https://get.adobe.com/cz/flashplayer/" target="_blank" style="color: #FFF;">Adobe Flash Player</a> is required</div>');
                        _env.api.flashObject = $('<div class="julia-error" id="julia-api-'+_env.apiId+'"></div>');
                        _env.player.prepend(_env.api.flashObject);
                    }
                }

                _debug.run({
                    'apiId': _env.apiId,
                    'api': _env.api,
                });
            }
        };


        var _flash = {

            detect: function()
            {
                var self = this;
                self.installed = false;
                self.raw = "";
                self.major = -1;
                self.minor = -1;
                self.revision = -1;
                self.revisionStr = "";
                var activeXDetectRules = [
                    {
                        "name":"ShockwaveFlash.ShockwaveFlash.7",
                        "version":function(obj){
                            return getActiveXVersion(obj);
                        }
                    },
                    {
                        "name":"ShockwaveFlash.ShockwaveFlash.6",
                        "version":function(obj){
                            var version = "6,0,21";
                            try{
                                obj.AllowScriptAccess = "always";
                                version = getActiveXVersion(obj);
                            }catch(err){}
                            return version;
                        }
                    },
                    {
                        "name":"ShockwaveFlash.ShockwaveFlash",
                        "version":function(obj){
                            return getActiveXVersion(obj);
                        }
                    }
                ];

                /**
                 * Extract the ActiveX version of the plugin.
                 *
                 * @param {Object} The flash ActiveX object.
                 * @type String
                 */
                var getActiveXVersion = function(activeXObj)
                {
                    var version = -1;
                    try
                    {
                        version = activeXObj.GetVariable("$version");
                    }catch(err)
                    {}
                    return version;
                };

                /**
                 * Try and retrieve an ActiveX object having a specified name.
                 *
                 * @param {String} name The ActiveX object name lookup.
                 * @return One of ActiveX object or a simple object having an attribute of activeXError with a value of true.
                 * @type Object
                 */
                var getActiveXObject = function(name)
                {
                    var obj = -1;
                    try
                    {
                        obj = new ActiveXObject(name);
                    }catch(err)
                    {
                        obj = {activeXError:true};
                    }
                    return obj;
                };

                /**
                 * Parse an ActiveX $version string into an object.
                 *
                 * @param {String} str The ActiveX Object GetVariable($version) return value.
                 * @return An object having raw, major, minor, revision and revisionStr attributes.
                 * @type Object
                 */
                var parseActiveXVersion = function(str)
                {
                    var versionArray = str.split(",");//replace with regex
                    return {
                        "raw":str,
                        "major":parseInt(versionArray[0].split(" ")[1], 10),
                        "minor":parseInt(versionArray[1], 10),
                        "revision":parseInt(versionArray[2], 10),
                        "revisionStr":versionArray[2]
                    };
                };

                /**
                 * Parse a standard enabledPlugin.description into an object.
                 *
                 * @param {String} str The enabledPlugin.description value.
                 * @return An object having raw, major, minor, revision and revisionStr attributes.
                 * @type Object
                 */
                var parseStandardVersion = function(str)
                {
                    var descParts = str.split(/ +/);
                    var majorMinor = descParts[2].split(/\./);
                    var revisionStr = descParts[3];
                    return {
                        "raw":str,
                        "major":parseInt(majorMinor[0], 10),
                        "minor":parseInt(majorMinor[1], 10),
                        "revisionStr":revisionStr,
                        "revision":parseRevisionStrToInt(revisionStr)
                    };
                };

                /**
                 * Parse the plugin revision string into an integer.
                 *
                 * @param {String} The revision in string format.
                 * @type Number
                 */
                var parseRevisionStrToInt = function(str)
                {
                    return parseInt(str.replace(/[a-zA-Z]/g, ""), 10) || self.revision;
                };

                /**
                 * Constructor, sets raw, major, minor, revisionStr, revision and installed public properties.
                */
                if(navigator.plugins && navigator.plugins.length>0)
                {
                    var type = 'application/x-shockwave-flash';
                    var mimeTypes = navigator.mimeTypes;
                    if(mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description)
                    {
                        var version = mimeTypes[type].enabledPlugin.description;
                        var versionObj = parseStandardVersion(version);
                        self.raw = versionObj.raw;
                        self.major = versionObj.major;
                        self.minor = versionObj.minor;
                        self.revisionStr = versionObj.revisionStr;
                        self.revision = versionObj.revision;
                        self.installed = true;
                    }
                }else if(navigator.appVersion.indexOf("Mac")==-1 && window.execScript)
                {
                    var version = -1;
                    for(var i=0; i<activeXDetectRules.length && version==-1; i++)
                    {
                        var obj = getActiveXObject(activeXDetectRules[i].name);
                        if(!obj.activeXError)
                        {
                            self.installed = true;
                            version = activeXDetectRules[i].version(obj);
                            if(version!=-1)
                            {
                                var versionObj = parseActiveXVersion(version);
                                self.raw = versionObj.raw;
                                self.major = versionObj.major;
                                self.minor = versionObj.minor;
                                self.revision = versionObj.revision;
                                self.revisionStr = versionObj.revisionStr;
                            }
                        }
                    }
                }

                return self;
            }
        };

        // UI kit
        var _ui = {

            // Video shield for helpers, buttons, preloaders, advertising etc...
            shield: function()
            {
                _env.shield = $('<div class="julia-shield" id="julia-shield-'+_env.apiId+'">'
                            +'  <button class="julia-btn julia-big-play"><i class="ion-play"></i></button>'
                            +'  <div class="julia-preloader"><i class="ion-load-c"></i></div>'
                            +'</div>'
                    );

                _env.suggest = $('<div class="julia-suggest" id="julia-suggest-'+_env.apiId+'"></div>');
            },

            posterSet: function()
            {
                _ui.posterUnset();
                if(_env.poster.length > 0)
                {
                    img = $('<img src="'+_env.poster+'" width="100%" height="100%">')

                    _env.shield.append(img);

                    _debug.run({
                        poster: _env.poster,
                    })
                }
            },

            posterUnset: function()
            {
                _env.shield.find('img').remove();
            },

            // Button toolbar
            toolbar: function()
            {
                _env.toolbar = $('<div class="julia-toolbar" id="julia-toolbar-'+_env.apiId+'">'
                    +'<div class="julia-progress">'
                    +'  <input type="range" value="0" min="0" max="100" step="'+_env.progressStep+'">'
                    +'</div>'
                    +'<div class="julia-panel julia-live-indicator">'
                    +'    <span>'+options.i18n.liveText+'</span>'
                    +'</div>'
                    +'<div class="julia-panel julia-currentTime">'
                    +'    <span>00:00:00</span> /&nbsp;'
                    +'</div>'
                    +'<div class="julia-panel julia-duration">'
                    +'    <span>00:00:00</span>'
                    +'</div>'
                    +'<button class="julia-btn julia-playback play">'
                    +'    <i class="ion-play"></i>'
                    +'</button>'
                    +'<button class="julia-btn julia-sound on">'
                    +'    <i class="ion-android-volume-up"></i>'
                    +'</button>'
                    +'<div class="julia-volume">'
                    +'  <input type="range" value="'+options.volume+'" min="0" max="100">'
                    +'</div>'
                    +'<button class="julia-btn julia-fullscreen-toggle on">'
                    +'    <i class="ion-android-expand"></i>'
                    +'</button>'
                +'</div>');
            },

            // Create player object
            player: function()
            {
                _ui.shield();
                _ui.toolbar();

                _env.player = $('<div class="julia-player julia-fullscreen-off julia-theme-'+options.theme+'" id="julia-player-'+_env.apiId+'">'
                            +'</div>');

                _env.player.append(_env.shield);
                _env.player.append(_env.suggest);
                _env.player.append(_env.toolbar);

                _env.element.hide();
                _env.player.insertAfter(_env.element);

                // Simulate preload
                _env.shield.find('.julia-big-play').hide();
                _env.toolbar.hide();

                // Rangeslider polyfill
                $('#julia-toolbar-'+_env.apiId+'>div.julia-progress>input, #julia-toolbar-'+_env.apiId+'>div.julia-volume>input').rangeslider({
                    polyfill: false,
                    rangeClass: 'julia-rangeslider',
                    disabledClass: 'julia-rangeslider--disabled',
                    horizontalClass: 'julia-rangeslider--horizontal',
                    verticalClass: 'julia-rangeslider--vertical',
                    fillClass: 'julia-rangeslider__fill',
                    handleClass: 'julia-rangeslider__handle',
                    onInit: function(){},
                    onSlide : function(position, value){},
                    onSlideEnd : function(position, value){}
                });

                _debug.run({
                    'element': _env.element,
                    'toolbar': _env.toolbar,
                    'shield': _env.shield,
                    'player': _env.player,
                });
            }
        };

        // Fullscreen on
        var _fullscreen = {

            on: function()
            {
                var videoFrame = document.querySelector('#julia-player-'+_env.apiId);

                if(videoFrame.requestFullscreen)
                {
                    videoFrame.requestFullscreen();
                } else if (videoFrame.msRequestFullscreen)
                {
                    videoFrame.msRequestFullscreen();
                } else if (videoFrame.mozRequestFullScreen)
                {
                    videoFrame.mozRequestFullScreen();
                } else if(videoFrame.webkitRequestFullscreen)
                {
                    videoFrame.webkitRequestFullscreen();
                }
            },

            // Fullscreen off
            off: function()
            {
                if(document.exitFullscreen)
                {
                    document.exitFullscreen();
                }else if(document.msExitFullscreen)
                {
                    document.msExitFullscreen();
                } else if(document.mozCancelFullScreen)
                {
                    document.mozCancelFullScreen();
                } else if(document.webkitExitFullscreen)
                {
                    document.webkitExitFullscreen();
                }
            }
        };

        // Timeline numbers coonversion
        var _timeline = {

            toPercents: function(currentTime)
            {
                p = (currentTime/_env.duration)*100;
                return p;
            },

            toSeconds: function(percent)
            {
                t = (_env.duration/100)*percent;
                return t;
            },

            toNum: function(human)
            {
                human = human.split(':');
                human.reverse();
                s = parseInt(human[0]);
                m = human.length>1 ? parseInt(human[1]): 0;
                h = human.length>2 ? parseInt(human[3]): 0;
                t = s + m*60 + h*60*60;
                return t;
            },

            toHuman: function(time)
            {
                time = time.toString().split('.');
                s = time[0];
                H = Math.floor(s/3600);
                M = Math.floor( ( s - (H*3600) ) / 60 );
                S = Math.floor( ( s - (H*3600) - (M*60) ) );

                H = ('0'+H.toString()).slice(-2);
                M = ('0'+M.toString()).slice(-2);
                S = ('0'+S.toString()).slice(-2);

                str = H>0 ? H+':'+M+':'+S: M+':'+S;

                return str;
            }
        };


        // Suggest engine
        var _suggest = {

            run: function()
            {
                _env.suggest.html('');
                _control.press('stop');
                _env.suggestClicked = false;
                _env.tries = 0;

                if(options.suggest.length > 0)
                {
                    x = 0;
                    for(var i in options.suggest)
                    {
                        if(x < options.suggestLimit && options.suggest[i].played === false)
                        {
                            mode = !!options.suggest[i].live && options.suggest[i].live === true ? 'live': 'vod';
                            liveText = !!options.suggest[i].liveText ? options.suggest[i].liveText: 'Live';
                            var poster = !!options.suggest[i].poster ? options.suggest[i].poster: '';
                            posterImage = poster.length>0 ? '<img src="'+poster+'" width="100%" height="100%">': '';
                            suggestItemWidget = $('<div class="julia-suggest-item" data-poster="'+poster+'" data-file="'+options.suggest[i].file+'" data-mode="'+mode+'" data-live-text="'+liveText+'" data-index="'+i+'">'
                                    + posterImage
                                    +'<div class="julia-suggest-item-title">'+options.suggest[i].title+'</div>'
                                +'</div>');

                                suggestItemWidget.on('click', function(e)
                                {

                                    if(options.onSuggest !== false)
                                    {
                                        _call.fn(options.onSuggest, options.suggest[i]);
                                    }


                                    if(_env.flashApi===false)
                                    {
                                        options.muted = _env.api.muted;
                                    }else{

                                    }

                                    options.poster = $(this).data('poster');
                                    _env.suggestClicked = true;
                                    _env.shield.find('.julia-big-play').hide();
                                    _env.started = false;
                                    options.source = $(this).data('file');
                                    _boot.selectSource();
                                    options.autoplay = true;
                                    options.live = $(this).data('mode') == 'live' ? true: false;
                                    options.i18n.liveText = $(this).data('live-text');

                                    _env.toolbar.find('.julia-live-indicator>span').text(options.i18n.liveText);

                                    _debug.run({
                                        suggestRemoveIndex: $(this).data('index'),
                                        suggestRemove: $(this).data('file')
                                    });

                                    options.suggest[$(this).data('index')].played = true;
                                    _env.suggest.removeClass('on');

                                    _boot.init();
                                    _boot.load();
                                    _support.resize();
                                });

                            _env.suggest.append(suggestItemWidget);
                            x++;
                        }
                    }

                    if(x > 0)
                    {
                        if(options.suggestTimeout > 0 && _support.isMobile() === false)
                        {
                            setTimeout( function()
                            {
                                if(_env.suggestClicked === false)
                                {
                                    _env.suggest.find('div.julia-suggest-item:first').click();
                                }
                            }, options.suggestTimeout);
                        }
                        _env.suggest.addClass('on');
                    }

                }else{
                    _fullscreen.off();
                }

                _debug.run({
                    'Suggest' : 'raised'
                });
            }
        };

        // Support
        var _support = {

            aspect: function(w,h)
            {
                return w>0 && h>0 ? h/w: 0;
            },

            isMobile: function()
            {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
                {
                    return true;
                }

                return false;
            },

            forceReady: function()
            {
                if( /Firefox/i.test(navigator.userAgent) )
                {
                    return true;
                }

                return false;
            },

            theme: function()
            {
                _debug.run({
                    'theme': options.themePath+'/'+options.theme+'/julia.css'
                });

                $('head').append('<link rel="stylesheet" type="text/css" href="'+options.themePath+'/'+options.theme+'/julia.css">');
            },

            canPlayMedia: function()
            {
                var vid = document.createElement('video');
                vid.id = 'video-cap-test-'+_env.apiId;
                _env.canPlayMediaString = vid.canPlayType('application/vnd.apple.mpegURL');
                $('#video-cap-test'+_env.apiId).remove();
                return (_env.canPlayMediaString == 'probably' || _env.canPlayMediaString == 'maybe');
            },

            resize: function()
            {
                // Player dimensions
                defaultDim = _env.element.width() ? [_env.element.width(), _env.element.height()]: [options.width, options.height];
                dimensions = options.responsive === true ? _support.getSize(): defaultDim;

                _debug.run({
                    'resizeDefaults': defaultDim,
                    'resize': dimensions
                });

                _env.player.width(dimensions[0]);
                _env.player.height(dimensions[1]);

                _env.dimensions.width = dimensions[0];
                _env.dimensions.height = dimensions[1];

                if(_env.flashApi===false)
                {
                    _env.api.setAttribute('width', '100%');
                    _env.api.setAttribute('height', '100%');
                }else{

                    if(_env.apiOk === true)
                    {
                        _env.api.flashObject.width = '100%';
                        _env.api.flashObject.height = '100%';
                    }else{
                        _env.api.flashObject.width('100%');
                        _env.api.flashObject.height('100%');
                    }
                }
            },

            getSize: function()
            {
                var parentWidth = _env.element.parent().width();
                for(i in options.dimensions)
                {
                    var dim = options.dimensions[i];
                    if(parentWidth>=dim[0])
                    {
                        if(_env.flashApi===false)
                        {
                            a = _support.aspect(parentWidth) == 0 ? dim[1]/dim[0]: _support.aspect(_env.api.videoWidth, _env.api.videoHeight);
                        }else{
                            a = _support.aspect(parentWidth) == 0 ? dim[1]/dim[0]: _support.aspect(_env.api.width(), _env.api.height());
                        }

                        dimensions = [dim[0],(dim[0]*a)];
                        _debug.run({
                            'resizePredefined': dimensions
                        });
                        return dimensions;
                    }
                }

                a = _support.aspect() == 0 ? dim[1]/dim[0]: _support.aspect(_env.api.videoWidth, _env.api.videoHeight);
                dimensions = [parentWidth, (parentWidth*a)];

                _debug.run({
                    'resizeFallback': dimensions
                });

                return dimensions;
            }
        };


        // Callback
        var _call = {

            fn: function(f, data)
            {
                data = data||{};
                if(f !== false)
                {
                    f(_options, _env, data);
                }
            }
        };

        // Api && UI control
        var _control = {

            press: function(action, data)
            {
                data = data||{};

                if(data.length>0)
                {
                    _debug.run({
                        'action': action,
                        'action-data': data,
                    });

                }else{

                    _debug.run({
                        'action': action,
                    });
                }

                switch(action)
                {
                    case 'play':

                        if(options.onPlay !== false)
                        {
                            _call.fn(options.onPlay, data);
                        }

                        if(_env.flashApi === false)
                        {
                            _env.api.play();

                        }else{

                            _env.shield.find('.julia-big-play').hide();

                            if(_env.started === false)
                            {
                                _env.api.play(-1);

                                _debug.run({
                                    'FlashPlay': 'play',
                                    'FlashPosition': _env.api.getPosition()
                                });

                            }else{

                                _env.api.resume(); //(api.getPosition());

                                _debug.run({
                                    'FlashPlay': 'resume',
                                    'FlashPosition': _env.api.getPosition()
                                });
                            }
                        }

                    break; case 'pause':

                        if(options.onPause !== false)
                        {
                            _call.fn(options.onPause, data);
                        }

                        if(_env.flashApi === false)
                        {
                            _env.api.pause();

                        }else{

                            _env.api.pause();
                            _env.toolbar.find('.julia-playback.pause').removeClass('pause').addClass('play')
                            .find('i').removeClass('ion-pause').addClass('ion-play');
                            _env.shield.find('.julia-big-play').show();
                        }

                    break; case 'stop':

                        if(options.onStop !== false)
                        {
                            _call.fn(options.onStop, data);
                        }

                        if(_env.flashApi === false)
                        {
                            _env.api.pause();
                            _env.api.currentTime = 0;

                        }else{

                            _env.started = false;
                            _env.api.stop();
                        }

                        _env.toolbar.find('.julia-playback.pause').removeClass('pause').addClass('play')
                        .find('i').removeClass('ion-pause').addClass('ion-play');
                        _env.shield.find('.julia-big-play').show();
                        _env.toolbar.find('.julia-progress>input').val(0).rangeslider('update', true);

                    break; case 'goto':

                        if(options.onPosition !== false)
                        {
                            _call.fn(options.onPosition, data);
                        }

                        if(_env.flashApi === false)
                        {
                            _env.api.currentTime = data.currentTime;

                        }else{

                            _env.api.seek(data.currentTime);
                        }

                    break; case 'setDuration':

                        _env.toolbar.find('.julia-panel.julia-duration>span').text(data.duration);

                        if(_env.started === false)
                        {
                            _env.toolbar.find('.julia-progress>input').val(0).rangeslider('update', true);
                        }

                        _debug.run({
                            'setDuration': data.duration
                        });

                    break; case 'volume':

                        if(_env.flashApi === false)
                        {
                            options.volume = data.volume;
                            _env.api.volume = data.volume/100;

                            _debug.run({
                                'volume is': _env.api.volume
                            });

                        }else{

                            options.volume = data.volume;
                            _env.api.volume(options.volume);

                            _debug.run({
                                'volume is': options.volume
                            });
                        }

                        _env.toolbar.find('.julia-volume>input').val(data.volume).rangeslider('update', true);

                        if(data.volume>0)
                        {
                            _control.press('sound-on');

                        }else{
                            _control.press('sound-off');
                        }

                    break; case 'sound-on':

                        if(_env.flashApi === false)
                        {
                            _env.api.muted = false;

                        }else{

                            _env.api.volume(options.volume);
                            _env.toolbar.find('.julia-volume>input').val(options.volume).rangeslider('update', true);
                        }

                        options.muted = false;
                        _persist.set('volume', options.volume, 30);
                        _persist.set('muted', options.muted, 30);

                        _env.toolbar.find('.julia-sound.off').removeClass('off').addClass('on')
                        .find('i').removeClass('ion-android-volume-off').addClass('ion-android-volume-up');

                    break; case 'sound-off':

                        if(_env.flashApi === false)
                        {
                            _env.api.muted = true;

                        }else{

                            _env.api.volume(0);
                            _env.toolbar.find('.julia-volume>input').val(0).rangeslider('update', true);
                        }

                        options.muted = true;
                        _persist.set('volume', options.volume, 30);
                        _persist.set('muted', options.muted, 30);

                        _env.toolbar.find('.julia-sound.on').removeClass('on').addClass('off')
                        .find('i').removeClass('ion-android-volume-up').addClass('ion-android-volume-off');

                    break; case 'fullscreen-on':
                        _fullscreen.on();

                    break; case 'fullscreen-off':
                        _fullscreen.off();

                    break; case 'destroy':

                        setTiemout( function(){
                            _env.player.remove();
                        }, 100);

                    break; default:

                }

                return;
            }
        };


        // Bindings
        var _bind = {

            // First play with some handlers
            playAllowStart: function(e)
            {
                _env.shield.find('.julia-preloader').removeClass('on');
                _env.shield.find('.julia-big-play').show();
                _env.toolbar.show();

                // Init actions
                _control.press('setDuration', {
                    'duration': _timeline.toHuman( _env.duration )
                });

                // Set mute if needed
                if(options.muted === true)
                {
                    _control.press('sound-off');
                }else{
                    _control.press('sound-on');

                    // Set initial volume
                    _control.press('volume', {
                        'volume': options.volume
                    });
                }

                // Autostart playback, if possible
                if(options.autoplay === true && _support.isMobile() === false)
                {
                    _control.press('play');
                }

                _debug.run({
                    'eventType': e.type,
                    'duration': _env.api.duration,
                    'readyState': _env.api.readyState
                });
            },

            // Bind can play by ready state / fake readyState
            // Because of Firefox cannot bind canplaythrough event with HLS.js properly
            canplaythrough: function()
            {
                if(_env.started === false)
                {
                    // don't let mobile Firefox make decision about readyState, mobile Firefox lie!
                    if(_env.api.readyState>=3 || (_support.isMobile() === true && _env.api.readyState>=2) )
                    {
                        _bind.playAllowStart({
                            type: '_bind.canplaythrough'
                        });
                    }else{
                        setTimeout( function()
                        {
                            _bind.canplaythrough();
                        }, 250);
                    }
                }
            },


            // Bind user action & DOM events
            domEvents: function()
            {
                // Buttons
                _env.toolbar.on('contextmenu', function(e)
                {
                    e.preventDefault();
                })
                .on('click', '.julia-playback.play', function(e)
                {
                    e.preventDefault();
                    _control.press('play');
                })
                .on('click', '.julia-playback.pause', function(e)
                {
                    e.preventDefault();
                    _control.press('pause');
                })
                .on('click', '.julia-sound.on', function(e)
                {
                    e.preventDefault();
                    _control.press('sound-off');
                })
                .on('click', '.julia-sound.off', function(e)
                {
                    e.preventDefault();
                    _control.press('sound-on');
                })
                .on('click', '.julia-fullscreen-toggle.on', function(e)
                {
                    e.preventDefault();
                    _control.press('fullscreen-on');
                })
                .on('click', '.julia-fullscreen-toggle.off', function(e)
                {
                    e.preventDefault();
                    _control.press('fullscreen-off');
                });

                // Big play
                _env.shield.on('click contextmenu', '.julia-big-play', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    if(e.type == 'click')
                    {
                        _control.press('play');
                    }
                });

                // Area click
                _env.shield.on('click', function(e)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    if(options.pauseOnClick === true && _support.isMobile() === false)
                    {
                        _control.press('pause');
                    }
                });

                // Fullscreen toolbar behavior bindings
                var mouseMoveCleaner;

                _env.player.on('mousemove', '#julia-shield-'+_env.apiId+', #julia-suggest-'+_env.apiId, function(e)
                {
                    e.preventDefault();
                    _env.toolbar.addClass('julia-toolbar-visible');
                    clearTimeout(mouseMoveCleaner);

                    mouseMoveCleaner = setTimeout(function()
                    {
                        _env.toolbar.removeClass('julia-toolbar-visible');
                    }, 1750);
                })
                .on('mouseover mousemove mouseout', '#julia-toolbar-'+_env.apiId+'.julia-toolbar-visible', function(e)
                {
                    e.preventDefault();
                    _env.toolbar.addClass('julia-toolbar-visible');
                    clearTimeout(mouseMoveCleaner);

                    if(e.type == 'mouseout')
                    {
                        mouseMoveCleaner = setTimeout(function(e)
                        {
                            _env.toolbar.removeClass('julia-toolbar-visible');
                        }, 1750);
                    }
                });

                // Bind progressbar change
                _env.toolbar.on('change input', '.julia-progress>input', function(e)
                {
                    if(e.type == 'input')
                    {
                        _env.seeking = true;
                    }else{

                        seekTo = _timeline.toSeconds( $(this).val() );
                        seekTo = seekTo >= _env.duration ? _env.duration: seekTo.toFixed(2);

                        _control.press('goto', {
                            currentTime: seekTo
                        });

                        _env.seeking = false;
                    }
                });

                // Bind volumebar change
                _env.toolbar.on('change', '.julia-volume>input', function()
                {
                    _control.press('volume', {
                        volume: $(this).val(),
                        'event': 'slideChange'
                    });
                });

                // Fullscreen event included
                $(window).on('resize', function()
                {
                    _support.resize();
                });

                // Fullscreen change event handler
                $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e)
                {
                    if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement)
                    {
                        $('.julia-player').removeClass('julia-fullscreen-on').addClass('julia-fullscreen-off')
                        .find('button.julia-fullscreen-toggle').removeClass('off').addClass('on')
                        .find('i').removeClass('ion-android-contract').addClass('ion-android-expand');

                        // Turn off landscape on mobile
                        if(_support.isMobile())
                        {
                            screen.orientation.unlock();
                            screen.msLockOrientation.unlock();
                            screen.mozLockOrientation.unlock();
                        }

                        _debug.run({
                            'fullscreen off' : '#julia-player-'+_env.apiId
                        });

                        _support.resize();

                    }else{

                        $('.julia-player').removeClass('julia-fullscreen-off').addClass('julia-fullscreen-on')
                        .find('button.julia-fullscreen-toggle').removeClass('on').addClass('off')
                        .find('i').removeClass('ion-android-expand').addClass('ion-android-contract');

                        // Force landscape in fullscreen mode on mobile
                        if(_support.isMobile())
                        {
                            screen.orientation.lock('landscape-primary');
                            screen.msLockOrientation.lock('landscape-primary');
                            screen.mozLockOrientation.lock('landscape-primary');
                        }

                        _debug.run({
                            'fullscreen on' : '#julia-player-'+_env.apiId
                        });
                    }
                });
            },


            // Native video api
            nativeEvents: function()
            {
                if(_support.forceReady()===true && _env.isHls === true)
                {
                    _bind.canplaythrough();
                }else{
                    _env.api.oncanplaythrough = function(e)
                    {
                        _env.duration = _env.api.duration;

                        if(_env.started === false && _env.api.readyState >= 3)
                        {
                            _bind.playAllowStart(e);
                        }
                    }
                }

                // Video playback detect
                _env.api.onplay = function(e)
                {
                    _env.toolbar.find('.julia-playback.play').removeClass('play').addClass('pause')
                    .find('i').removeClass('ion-play').addClass('ion-pause');
                    _env.shield.find('.julia-big-play').hide();
                    _env.shield.find('.julia-preloader').removeClass('on');
                    _ui.posterUnset();
                    _env.toolbar.show();
                }

                _env.api.onplaying = function(e)
                {
                    _env.toolbar.find('.julia-playback.play').removeClass('play').addClass('pause')
                    .find('i').removeClass('ion-play').addClass('ion-pause');
                    _env.shield.find('.julia-big-play').hide();
                    _env.shield.find('.julia-preloader').removeClass('on');
                    _env.suggest.html('').removeClass('on');
                    _env.toolbar.show();
                    _control.press('setDuration', {
                        'duration': _timeline.toHuman( _env.duration )
                    });
                    _env.started = true;
                }


                // Video pause
                _env.api.onpause = function(e)
                {
                    _env.toolbar.find('.julia-playback.pause').removeClass('pause').addClass('play')
                    .find('i').removeClass('ion-pause').addClass('ion-play');
                    _env.shield.find('.julia-big-play').show();
                }


                // Errors
                _env.api.onerror = function(e)
                {
                    // Bring to life again
                    if(_env.tries<11)
                    {
                        _boot.init();
                    }
                }

                _env.api.onemptied = function(e)
                {
                }

                _env.api.onstalled = function(e)
                {
                }

                _env.api.onsuspend = function(e)
                {
                }

                // Video position
                _env.api.ontimeupdate = function(e)
                {
                    if(_env.seeking === false)
                    {
                        currentTimeReadable = _timeline.toHuman( _env.api.currentTime.toFixed(2) );
                        _env.toolbar.find('.julia-progress>input').val( _timeline.toPercents( _env.api.currentTime.toFixed(2) ) ).rangeslider('update', true);
                        _env.toolbar.find('.julia-panel.julia-currentTime>span').text(currentTimeReadable);
                    }

                    _bind.onTime(currentTimeReadable, _env.api.currentTime);

                    if(options.debugPlayback === true)
                    {
                        _debug.run({
                            'duration/current': _env.duration+'/'+_env.api.currentTime.toFixed(2)+' > '+currentTimeReadable
                        });
                    }

                    // Fix for corrupted video end
                    // For development purposes only
                    /*
                    if(api.currentTime>=(duration-1))
                    {
                        if(_support.forceReady()===true)
                        {
                            _suggest.run();
                        }
                    }
                    */
                }

                // Video position
                _env.api.seeked = function(e)
                {
                    _env.seeking = false;
                }

                // Video position
                _env.api.seeking = function(e)
                {
                    _env.seeking = true;
                }

                // Volume
                _env.api.onvolumechange = function(e)
                {
                    if(_env.api.muted === false)
                    {
                        _env.toolbar.find('.julia-volume>input').val(_env.api.volume*100).rangeslider('update', true);
                    }else{
                        _env.toolbar.find('.julia-volume>input').val(0).rangeslider('update', true);
                    }
                }

                // Set video duration
                _env.api.ondurationchange = function(e)
                {
                    _env.duration = _env.api.duration;

                    if(_env.started === false)
                    {
                        _env.duration = _env.api.duration;
                        _env.seeking = false;

                        _debug.run({
                            'duration': _env.duration,
                            'readyState': _env.api.readyState,
                            'started': _env.started
                        });
                    }
                }

                // Bind playback end event
                _env.api.onended = function(e)
                {
                    _suggest.run();
                };
            },


            // Specific events, error handlers
            hlsLibEvents: function()
            {
                _env.hls.on(Hls.Events.ERROR, function(event, data)
                {
                    switch(data.details)
                    {
                        case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
                        case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                        case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
                        case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
                        case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                        case Hls.ErrorDetails.LEVEL_SWITCH_ERROR:
                        case Hls.ErrorDetails.FRAG_LOAD_ERROR:
                        case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                        case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        case Hls.ErrorDetails.FRAG_DECRYPT_ERROR:
                        case Hls.ErrorDetails.FRAG_PARSING_ERROR:
                        case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
                        case Hls.ErrorDetails.BUFFER_APPENDING_ERROR:

                            _debug.run({
                                recoveringError: data.details,
                                errorType: data.type,
                                errorFatal: data.fatal
                            });

                            if(data.fatal === true && _env.tries<11)
                            {
                                // Bring to life again
                                _boot.init();
                            }

                        break; default:
                    }
                });
            },


            // Flash fallback for legacy browsers
            flashEvents: function()
            {
                // Flash event object
                var flashlsEvents = {

                    ready: function(flashTime)
                    {
                        _env.api.load(_env.source);

                        _debug.run({
                            'ready': flashTime
                        });
                    },

                    videoSize: function(width, height) {
                        _support.resize();
                    },

                    complete: function()
                    {
                        _debug.run({
                            'suggest': 'call',
                            'flashPlayback': 'completed'
                        });

                        setTimeout( function()
                        {
                            _suggest.run();
                        }, 1500);
                    },

                    error: function(code, url, message)
                    {
                        _debug.run({
                            'flashErrorCode': code,
                            'flashErrorUrl': url,
                            'flashErrorMessage': message,
                        });

                        // Bring to life again
                        if(_env.tries<10)
                        {
                            _boot.init();
                        }
                    },

                    manifest: function(flashDuration, levels_, loadmetrics)
                    {
                        _env.duration = flashDuration.toFixed(2);
                        levels = levels_;
                        _debug.run({
                            'durationOrigin': flashDuration,
                            'duration': _env.duration,
                            'durationHuman': _timeline.toHuman( _env.duration ),
                            'levels': levels,
                            'metrics': loadmetrics,
                        });

                        if(_env.started === false)
                        {
                            _env.shield.find('.julia-preloader').removeClass('on');
                            _env.shield.find('.julia-big-play').show();
                            _env.toolbar.show();

                            // Init actions
                            _control.press('setDuration', {
                                'duration': _timeline.toHuman( _env.duration )
                            });

                            // Set initial volume
                            if(options.muted === false)
                            {
                                _control.press('volume', {
                                    'volume': options.volume
                                });
                            }
                            // Set mute if needed
                            if(options.muted === true)
                            {
                                _control.press('sound-off');
                            }

                            // Autostart playback, if possible
                            if(options.autoplay === true)
                            {
                                _env.api.play(-1);
                            }

                            _debug.run({
                                'duration': _env.api.duration,
                                'readyState': true
                            });
                        }
                    },

                    levelLoaded: function(loadmetrics)
                    {
                    },

                    fragmentLoaded: function(loadmetrics)
                    {
                    },

                    fragmentPlaying: function(playmetrics)
                    {
                        _env.toolbar.find('.julia-playback.play').removeClass('play').addClass('pause')
                        .find('i').removeClass('ion-play').addClass('ion-pause');
                        _env.shield.find('.julia-big-play').hide();
                        _env.shield.find('.julia-preloader').removeClass('on');
                        _ui.posterUnset();
                        _env.suggest.html('').removeClass('on');
                        _env.toolbar.show();
                        _env.started = true;
                    },

                    position: function(timemetrics)
                    {
                        if(_env.seeking === false)
                        {
                            currentTimeReadable = _timeline.toHuman( _env.api.getPosition() );
                            _env.toolbar.find('.julia-progress>input').val( _timeline.toPercents( _env.api.getPosition() ) ).rangeslider('update', true);
                            _env.toolbar.find('.julia-panel.julia-currentTime>span').text(currentTimeReadable);
                        }
                    }
                };

                // Create a single global callback function and pass it's name
                // to the SWF with the name `callback` in the FlashVars parameter.
                window[_env.flashCallbackName] = function(eventName, args)
                {
                    flashlsEvents[eventName].apply(null, args);
                };
            },

            // Time update event callbacks
            onTime: function(time, timeNum)
            {
                if( (time in options.onTime) && _env.onTimeRised.indexOf(time) == -1 )
                {
                    handle = options.onTime[time];
                    _env.onTimeRised.push(time);

                    if(typeof window[handle] === 'function')
                    {
                        window[handle](time, _env.publicApi);
                        _debug.run({
                            'onTime': handle+' raised'
                        });

                    }else{

                        _debug.run({
                            'onTimeError': handle+' is not a function, but: '+(typeof handle)
                        });
                    }
                }
            }
        };


        // Create player
        var _boot = {

            create: function()
            {
                // Extend default options with external options
                _system.extend();

                // Degbug header
                if(options.debug === true && window.console )
                {
                    console.info('=== Julia console debug start for '+_env.apiId+' ===');
                }

                _debug.run(options);

                // Suggest init
                for(i in options.suggest)
                {
                    options.suggest[i].played = false;
                }

                // Set theme CSS
                _support.theme();

                // User data
                volume = _persist.get('volume');
                muted = _persist.get('muted');

                if(volume.length>0)
                {
                    options.volume = parseInt(volume);
                }

                if(muted.length>0)
                {
                    options.muted = muted == 'false' ?  false: true;
                }

                // Create UI
                _ui.player();
            },

            // Select playback url
            selectSource: function()
            {
                _env.element.prop('preload', 'none');
                _env.source = options.source && options.source.length>0 ? options.source: _env.element.prop('src');

                _env.isHls = _env.source.indexOf('m3u8') == -1 ? false: true;
                if(options.forceHls === true)
                {
                    //_env.source += _env.source.indexOf('?') == -1 ? '?m3u8=yes': '&m3u8=yes';
                    _env.isHls = true;
                }

                _debug.run({
                    'sourceType': (_env.isHls === false ? 'file': 'hls')
                });

                _env.poster = options.poster && options.poster.length>0 ? options.poster: _env.element.prop('poster');
                _ui.posterSet();
            },


            // load media
            load: function()
            {
                _env.shield.find('.julia-preloader').addClass('on');

                // ************************
                // HLS library supported
                // and HLS requested
                // ************************
                if(_env.useHlsLib === true)
                {
                    _bind.hlsLibEvents();
                    _env.hls.loadSource(_env.source);
                    _env.hls.attachMedia(_env.api);

                    // DETECT LEVEL DATA
                    _env.hls.on(Hls.Events.LEVEL_LOADED,function(event, data)
                    {
                        // SET LIVE EVENT STATE
                        if(data.details.live === true || options.live === true)
                        {
                            _env.isLive = true;
                            _env.toolbar.addClass('live');
                        }else{
                            _env.toolbar.removeClass('live');
                        }
                    });

                    for(x in options.triggerHls)
                    {
                        handle = options.triggerHls[x];

                        if(typeof window[handle] === 'function')
                        {
                            _env.hls.on(Hls.Events[x], function(event, data)
                            {
                                window[handle](_env.apiId, event, data);
                            });

                        }else{

                            _debug.run({
                                'triggerHlsError': handle+' is not a function'
                            });
                        }
                    }

                // ************************
                // No HLS library support,
                // but HLS is requested
                // ************************
                }else if(_env.flashApi === true)
                {
                    _api.create();

                // ************************
                // Classic VOD file
                // ************************
                }else{

                    _env.api.load();
                }

                // ************************
                // Bind all events
                // ************************
                if(_env.apiOk === true)
                {
                    _bind.domEvents();

                    if(_env.flashApi === false)
                    {
                        // Classic html5 api
                        _bind.nativeEvents();
                    }else{
                        // Flash api
                        _bind.flashEvents();
                    }
                }

                stats = {
                    'isHls': _env.isHls,
                    'flashApi': _env.flashApi,
                    'useHlsLib': _env.useHlsLib,
                    'live': _env.isLive,
                    'canPlayMediaString': _env.canPlayMediaString,
                    'canPlayMedia': _env.canPlayMedia,
                };

                _debug.run(stats);

                // Define publicApi
                _env.publicApi = {
                    control: _control,
                    options: options,
                    support: _support,
                    dimensions: _env.dimensions,
                    timeline: _timeline,
                    shield: _env.shield,
                    toolbar: _env.toolbar,
                    media: _env.api,
                    id: _env.apiId,
                    stats: stats
                };

            },

            // Initilize player
            init: function()
            {
                // Create source
                _boot.selectSource();
                _env.useHlsLib = false;
                _env.flashApi = false;
                _env.isLive = false;
                _env.canPlayMedia = _support.canPlayMedia();
                _env.tries+=1;

                if(_env.isHls === true)
                {
                    _env.useHlsLib = _env.canPlayMedia === false && Hls.isSupported() ? true: false;
                }

                // ************************
                // HLS library supported
                // and HLS requested
                // ************************
                if(_env.useHlsLib === true)
                {
                    _api.create();
                    _env.hls = new Hls(options.hlsConfig);

                // ************************
                // No HLS library support,
                // but HLS is requested
                // ************************
                }else if(_env.isHls === true && _env.useHlsLib === false && _env.canPlayMedia === false)
                {
                    _env.flashApi = true;

                // ************************
                // Classic VOD file
                // ************************
                }else{

                    _api.create();
                    _env.api.src = _env.source;
                }

                if(options.live === true)
                {
                    _env.isLive = true;
                    _env.toolbar.addClass('live');
                }else{
                    _env.toolbar.removeClass('live');
                }
            }
        }

        // Build player object
        _boot.create();

        // Bring to life
        _boot.init();

        // Bring to life
        _boot.load();

        // Player dimensions
        _support.resize();

        // Populate public API
        return _env.publicApi;
    }

    // Build plugin instances
    $.fn.julia = function(opts)
    {
        var resize = [];
        return this.each(function()
        {
            var element = $(this);

            // Return if this element already has a plugin instance
            if ($(this).data('julia')) return;

            // Pass options to constructor
            var __julia = new _julia($(this), opts);

            // Store plugin object in element's data
            $(this).data('julia', __julia);
        });
    };

    // API wrappers
    $.fn.play = function()
    {
        $(this).data('julia').control.press('play');
    };

    $.fn.destroy = function()
    {
        $(this).data('julia').control.press('destroy');
    };

    $.fn.media = function()
    {
        return $(this).data('julia').media;
    };

    $.fn.pause = function()
    {
        $(this).data('julia').control.press('pause');
    };

    $.fn.stop = function()
    {
        $(this).data('julia').control.press('stop');
    };

    $.fn.goto = function(t)
    {
        $(this).data('julia').control.press('goto', {
            currentTime: t
        });
    };

    $.fn.mute = function()
    {
        if($(this).data('julia').media.muted === false)
        {
            $(this).data('julia').control.press('sound-off');
        }else{
            $(this).data('julia').control.press('sound-on');
        }
    };

    $.fn.volume = function(volume)
    {
        $(this).data('julia').control.press('volume', {
            volume: volume
        });
    };

    $.fn.getID = function()
    {
        return $(this).data('julia').id;
    };

    $.fn.stats = function()
    {
        return $(this).data('julia').stats;
    };

})(jQuery);
