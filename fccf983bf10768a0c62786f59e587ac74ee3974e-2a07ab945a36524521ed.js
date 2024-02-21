/*! For license information please see fccf983bf10768a0c62786f59e587ac74ee3974e-2a07ab945a36524521ed.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[707],{4063:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,a,o;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(a=n;0!=a--;)if(!e(t[a],r[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(a=n;0!=a--;)if(!Object.prototype.hasOwnProperty.call(r,o[a]))return!1;for(a=n;0!=a--;){var i=o[a];if(!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},219:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(7294),a=r(5697),o=r.n(a),i=r(4063),s=r.n(i),l=r(1062),u=r.n(l),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&g(e,r,t[r]);if(f)for(var r of f(t))h.call(t,r)&&g(e,r,t[r]);return e},v=(e,t)=>d(e,p(t));function b(e={}){return v(m({},e),{height:0,width:0,playerVars:v(m({},e.playerVars),{autoplay:0,start:0,end:0})})}var P={videoId:o().string,id:o().string,className:o().string,iframeClassName:o().string,style:o().object,title:o().string,loading:o().oneOf(["lazy","eager"]),opts:o().objectOf(o().any),onReady:o().func,onError:o().func,onPlay:o().func,onPause:o().func,onEnd:o().func,onStateChange:o().func,onPlaybackRateChange:o().func,onPlaybackQualityChange:o().func},w=class extends n.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,r;return null==(r=(t=this.props).onReady)?void 0:r.call(t,e)},this.onPlayerError=e=>{var t,r;return null==(r=(t=this.props).onError)?void 0:r.call(t,e)},this.onPlayerStateChange=e=>{var t,r,n,a,o,i,s,l;switch(null==(r=(t=this.props).onStateChange)||r.call(t,e),e.data){case w.PlayerState.ENDED:null==(a=(n=this.props).onEnd)||a.call(n,e);break;case w.PlayerState.PLAYING:null==(i=(o=this.props).onPlay)||i.call(o,e);break;case w.PlayerState.PAUSED:null==(l=(s=this.props).onPause)||l.call(s,e)}},this.onPlayerPlaybackRateChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackRateChange)?void 0:r.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackQualityChange)?void 0:r.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then((()=>this.destroyPlayerPromise=void 0)),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"==typeof document)return;if(this.destroyPlayerPromise)return void this.destroyPlayerPromise.then(this.createPlayer);const e=v(m({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=u()(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then((e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)}))},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then((e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")}))},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,r,n;if(void 0===this.props.videoId||null===this.props.videoId)return void(null==(e=this.internalPlayer)||e.stopVideo());let a=!1;const o={videoId:this.props.videoId};(null==(t=this.props.opts)?void 0:t.playerVars)&&(a=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),a?null==(r=this.internalPlayer)||r.loadVideoById(o):null==(n=this.internalPlayer)||n.cueVideoById(o)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return t=this,r=null,n=function*(){(function(e,t){var r,n,a,o;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(o=t.opts)?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!s()(b(e.opts),b(t.opts))}(e,this.props)&&(yield this.resetPlayer()),function(e,t){var r,n;if(e.videoId!==t.videoId)return!0;const a=(null==(r=e.opts)?void 0:r.playerVars)||{},o=(null==(n=t.opts)?void 0:n.playerVars)||{};return a.start!==o.start||a.end!==o.end}(e,this.props)&&this.updateVideo()},new Promise(((e,a)=>{var o=e=>{try{s(n.next(e))}catch(t){a(t)}},i=e=>{try{s(n.throw(e))}catch(t){a(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,i);s((n=n.apply(t,r)).next())}));var t,r,n}componentWillUnmount(){this.destroyPlayer()}render(){return n.createElement("div",{className:this.props.className,style:this.props.style},n.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},E=w;E.propTypes=P,E.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},E.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var C=E,S=r.p+"static/sona-bg-813b15ced8da09532d1600b0dc9fdcf7.jpg",A=r.p+"static/kinetic-9dc2afb911409de171017411240d4ae6.jpg",O=r.p+"static/concussive-92fcac1b1e5653cd8e77179cede774d3.jpg",I=r.p+"static/ethereal-f06a64b854614bd760710729df300843.jpg";var N=e=>{let{data:t,location:r}=e;const a=[{id:"AwlA2e_tFjc",name:"DJ SONA",description:"Kinetic",playerObj:"",coverImg:A,isPlaying:!1,isReady:!1},{id:"goHHknZJaIY",name:"DJ SONA",description:"Concussive",playerObj:"",coverImg:O,isPlaying:!1,isReady:!1},{id:"GOgFsAejQ0o",name:"DJ SONA",description:"Ethereal",playerObj:"",coverImg:I,isPlaying:!1,isReady:!1}],{0:o,1:i}=(0,n.useState)(a),s=(e,t)=>{let r={...t,playerObj:e.target,isReady:!0};var n,a;n=t.id,a=r,i((e=>e.map((e=>e.id===n?{...a}:e))))},l={height:"100%",width:"100%",playerVars:{controls:0,rel:0,showinfo:0}};return(0,n.useEffect)((()=>{}),[]),n.createElement("div",{className:"youtube-player-container",style:{backgroundImage:"url("+S+")"}},o.map(((e,t)=>n.createElement("article",{key:t,className:"player-wrapper "+(e.isPlaying?"playing":"stop")+" "+(e.isReady?"ready":"")},n.createElement("div",{className:"player-cover",onClick:()=>{var t,r;e.isReady&&(t=e.id,r=e.isPlaying,i(r?e=>e.map((e=>e.id===t?(e.playerObj.pauseVideo(),{...e,isPlaying:!1}):e)):e=>e.map((e=>e.id===t?(e.playerObj.playVideo(),{...e,isPlaying:!0}):(e.playerObj.pauseVideo(),{...e,isPlaying:!1})))))}},n.createElement("div",{className:"player-info"},n.createElement("h3",null,e.name),n.createElement("h4",null,e.description))),n.createElement("img",{className:"cover-img",src:e.coverImg,alt:"cover-img"}),n.createElement(C,{className:"app-player",videoId:e.id,opts:l,onReady:t=>{s(t,e)},onStateChange:e=>{var t;1===(t=e).data||t.data}})))))}},9090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,a),i.onload||t(i,a),o.appendChild(i)}},3988:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,a=t[e];if(a)for(n=a.length;n--;)a[n].handler(r)},e},e.exports=t},6006:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(2275),o=(n=a)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},9125:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(9215)),a=s(r(8255)),o=s(r(5279)),i=s(r(6006));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,a=!1,i=void 0;try{for(var s,u=o.default[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){r(s.value)}}catch(c){a=!0,i=c}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&i.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){var t=i.default[n],a=e.getPlayerState(),o=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var a=e.getPlayerState(),o=void 0;"number"==typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",n),clearTimeout(o),r())}))})).then((function(){return o})):o}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){return e[n].apply(e,r)}))}},o=!0,s=!1,l=void 0;try{for(var u,c=a.default[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){n(u.value)}}catch(d){s=!0,l=d}finally{try{!o&&c.return&&c.return()}finally{if(s)throw l}}return r}};t.default=u,e.exports=t.default},2275:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},5279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},1062:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=s(r(3988)),o=s(r(5900)),i=s(r(9125));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,a.default)();if(l||(l=(0,o.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var a=new n.Player(e,t);return s.on("ready",(function(){r(a)})),null}))})),c=i.default.promisifyPlayer(u,r);return c.on=s.on,c.off=s.off,c},e.exports=t.default},5900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(9090),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,o.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},9215:function(e,t,r){function n(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=r(5046)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())},5046:function(e,t,r){var n;function a(e){function r(){if(r.enabled){var e=r,a=+new Date,o=a-(n||a);e.diff=o,e.prev=n,e.curr=a,n=a;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var a=t.formatters[n];if("function"==typeof a){var o=i[l];r=a.call(e,o),i.splice(l,1),l--}return r})),t.formatArgs.call(e,i),(r.log||t.log||console.log.bind(console)).apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,a=0;a<n;a++)r[a]&&("-"===(e=r[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(4680),t.names=[],t.skips=[],t.formatters={}},4680:function(e){var t=1e3,r=60*t,n=60*r,a=24*n,o=365.25*a;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,s){s=s||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(l=e,a,"day")||i(l,n,"hour")||i(l,r,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=fccf983bf10768a0c62786f59e587ac74ee3974e-2a07ab945a36524521ed.js.map