!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=92)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LANG=void 0;const a=new URLSearchParams(document.location.search);let o="en";a.get("hl")?o=a.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(o="zh"),t.LANG=o},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DX_SPLASH_GAME_VERSION=t.DX_PLUS_GAME_VERSION=t.DX_GAME_VERSION=t.SSSPLUS_MIN_ACHIEVEMENT=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],t.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),t.SSSPLUS_MIN_ACHIEVEMENT=100.5,t.DX_GAME_VERSION=13,t.DX_PLUS_GAME_VERSION=14,t.DX_SPLASH_GAME_VERSION=15},92:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function c(e){try{d(a.next(e))}catch(e){r(e)}}function s(e){try{d(a.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}d((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),r=n(1);!function(){const e={zh:{date:"日期",songName:"歌曲",difficulty:"難度",achievement:"達成率",stamps:"成就",playDate:"遊玩日期：",newRecordToggleHeading:"顯示：",sortBy:"排序方式：",newRecordsOnly:"只顯示新高分紀錄",allRecords:"全部",olderFirst:"由舊到新",newerFirst:"由新到舊",copy:"複製",copied:"已複製到剪貼簿",downloadAsImage:"存成圖片"},en:{date:"Date",songName:"Song",difficulty:"Difficulty",achievement:"Achv",stamps:"Grade",playDate:"Play date:",newRecordToggleHeading:"Display:",sortBy:"Sort by:",newRecordsOnly:"New records only",allRecords:"All",olderFirst:"Older first",newerFirst:"Newer first",copy:"Copy",copied:"Copied to clipboard",downloadAsImage:"Save as image"}}[r.LANG],t=new Map([["fc","FC"],["fcplus","FC+"],["ap","AP"],["applus","AP+"]]),n=new Map([["fs","FULL SYNC"],["fsplus","FULL SYNC+"],["fsd","FULL SYNC DX"],["fsdplus","FULL SYNC DX+"]]),c=["dateCell","songTitleCell","difficultyCell","achievementCell","stampsCell"],s=document.createElement.bind(document);function d(e,t){return t=t||2,e.toString().padStart(t,"0")}function l(e){const t=e.querySelector(".sub_title").children[1].innerText.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),n=new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5]));return new Date(n.valueOf()-36e5)}function i(e){return e.querySelector(".m_5.p_5.f_13").childNodes[1].wholeText}function u(e,t,n){return a(this,void 0,void 0,(function*(){return n.drawImage(e.querySelector(".music_img"),0,0,t.width,t.height),new Promise(e=>{e(t.toDataURL())})}))}function p(e){const t=e.children[1].className;let n=t.substring(t.indexOf("_")+1,t.lastIndexOf("_"));n="remaster"===n?"Re:MASTER":n.toUpperCase();return e.querySelector(".playlog_music_kind_icon").src.endsWith("music_dx.png")?"DX "+n:n}function m(e){return parseFloat(e.querySelector(".playlog_achievement_txt").innerText)}function f(e){const a=e.querySelector("img.playlog_scorerank").src,o=a.substring(a.lastIndexOf("/")+1,a.lastIndexOf(".")).replace("plus","+").toUpperCase(),r=e.querySelectorAll(".playlog_result_innerblock > img"),c=r[0].src,s=c.substring(c.lastIndexOf("/")+1,c.lastIndexOf(".")),d=r[1].src,l=d.substring(d.lastIndexOf("/")+1,d.lastIndexOf("."));let i=o;return t.has(s)&&(i+=" / "+t.get(s)),n.has(l)&&(i+=" / "+n.get(l)),i}function y(e){return!!e.querySelector(".playlog_achievement_label_block + img.playlog_achievement_newrecord")}function g(e){return e.getFullYear()+"-"+d(e.getMonth()+1)+"-"+d(e.getDate())+" "+d(e.getHours())+":"+d(e.getMinutes())}function h(e,t,n){const a=s("tr");for(const e of t)a.classList.add(e);return e.forEach((e,t)=>{const o=s(n?"th":"td");"string"==typeof e?o.append(e):(o.classList.add("songImg"),o.style.backgroundImage='url("'+e[1]+'")',o.append(e[0])),o.classList.add("recordCell"),o.classList.add(c[t]),a.append(o)}),a}function _(t,n,a,r){a.innerHTML="",r.innerHTML="",a.append(h([e.date,e.songName,e.difficulty,e.achievement,e.stamps],["recordRow"],!0)),t.forEach(e=>{r.append(function(e){const t=e.difficulty.split(" ").pop();return h([g(e.date),[e.songName,e.songImgSrc],e.difficulty,e.achievement.toFixed(4)+"%",e.stamps],["recordRow",o.DIFFICULTY_CLASSNAME_MAP.get(t)],!1)}(e))}),n.style.paddingBottom=Math.floor(t.length/2)+2+"px"}function S(e,t){let n=[].concat(e);if(console.log(t),t.dates&&(n=n.filter(e=>t.dates.has(g(e.date).split(" ")[0]))),!t.showAll){const e=new Map;n.forEach(t=>{if(t.isNewRecord){const n=t.difficulty+" "+t.songName;e.delete(n),e.set(n,t)}}),n=[],e.forEach(e=>{n.push(e)})}return t.olderFirst||n.reverse(),n}function v(t,n){const a=t.reduce((e,t)=>(e.add(g(t.date).split(" ")[0]),e),new Set);let o=document.getElementById("recordSummary");o?o.innerHTML="":(o=s("div"),o.id="recordSummary");const r=s("div");r.className="playRecordContainer";const c=s("table"),d=s("thead"),l=s("tbody");c.className="playRecordTable",c.append(d,l),r.append(c);const i=()=>{_(S(t,function(){const e=document.querySelectorAll("input.dateCheckbox"),t=new Set;e.forEach(e=>{e.checked&&t.add(e.value)});let n=!1;document.getElementsByName("newRecordRadio").forEach(e=>{e.checked&&(n="allRecords"===e.value)});let a=!0;return document.getElementsByName("sortByRadio").forEach(e=>{e.checked&&(a="olderFirst"===e.value)}),{dates:t,showAll:n,olderFirst:a}}()),r,d,l)};o.append(function(t,n){const a=s("div");a.className="m_b_10 dateOptionsContainer";const o=s("div");return o.className="t_c m_5",o.append(e.playDate),a.append(o),t.forEach(e=>{const t=s("label");t.className="f_14 dateOptionLabel";const o=s("input");o.type="checkbox",o.className="dateCheckbox",o.value=e,o.checked=!0,o.addEventListener("change",n),t.append(o,e),a.append(t)}),a}(a,i)),o.append(function(t){const n=s("div");n.className="m_b_10 newRecordToggleContainer";const a=s("div");return a.className="t_c m_5",a.append(e.newRecordToggleHeading),n.append(a),["newRecordsOnly","allRecords"].forEach((a,o)=>{const r=s("label");r.className="f_14 newRecordLabel";const c=s("input");c.type="radio",c.name="newRecordRadio",c.className="newRecordRadio",c.value=a,c.checked=0===o,c.addEventListener("change",t),r.append(c,e[a]),n.append(r)}),n}(i)),o.append(function(t){const n=s("div");n.className="m_b_10 sortByRadioContainer";const a=s("div");return a.className="t_c m_5",a.append(e.sortBy),n.append(a),["newerFirst","olderFirst"].forEach((a,o)=>{const r=s("label");r.className="f_14 sortByLabel";const c=s("input");c.type="radio",c.name="sortByRadio",c.className="sortByRadio",c.value=a,c.checked=0===o,c.addEventListener("change",t),r.append(c,e[a]),n.append(r)}),n}(i));const u=function(t){const n=s("div");n.className="copyBtnContainer";const a=s("button");a.className="copyBtn",a.append(e.copy),n.append(a);let o=document.querySelector(".snackbarContainer"),r=document.querySelector(".snackbar");o||(o=s("div"),o.className="snackbarContainer",o.style.display="none",document.body.append(o)),r||(r=s("div"),r.className="wrapper snackbar",r.innerText=e.copied,o.append(r)),a.addEventListener("click",e=>{t(e),document.execCommand("copy"),o.style.display="block",r.style.opacity="1",setTimeout(()=>{r.style.opacity="0",setTimeout(()=>{o.style.display="none"},500)},4e3)});const c=s("button");return c.className="downloadImgBtn",c.append(e.downloadAsImage),c.addEventListener("click",()=>{if(!domtoimage)return void console.warn("domtoimage not available");const e=document.querySelector(".playRecordContainer");domtoimage.toPng(e).then(e=>{const t="record_"+g(new Date).replace(" ","_").replace(":","-")+".png",n=document.createElement("a");n.href=e,n.download=t,n.click()})}),n.append(c),n}(()=>{const e=window.getSelection(),t=document.createRange();t.selectNodeContents(l),e.removeAllRanges(),e.addRange(t)});o.append(u),_(S(t,{olderFirst:!1}),r,d,l),o.append(r),n.insertAdjacentElement("beforebegin",o)}const E=document.querySelector(".main_wrapper > img.title");if(E){const e="recentPlayStyles";if(!document.getElementById(e)){const t=s("link");t.id=e,t.rel="stylesheet",t.href="https://myjian.github.io/mai-tools/scripts/recent-play-downloader.css",t.addEventListener("load",()=>{(function(){return a(this,void 0,void 0,(function*(){const e=Array.from(document.querySelectorAll(".main_wrapper .p_10.t_l.f_0.v_b")),t=[],n=document.createElement("canvas");n.width=90,n.height=90;const a=n.getContext("2d");for(const o of e)t.push({date:l(o),songName:i(o),songImgSrc:yield u(o,n,a),difficulty:p(o),achievement:m(o),stamps:f(o),isNewRecord:y(o)});return t.reverse(),t}))})().then(e=>{v(e,E)}).catch(e=>{const t=document.getElementsByTagName("footer")[0],n=document.createElement("textarea");t.append(n),n.value=e.message+"\n"+e.stack})}),document.head.append(t)}const t="d2i";if(!document.getElementById(t)){const e=document.createElement("script");e.id=t,e.type="text/javascript",e.src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js",document.body.append(e)}}}()}});