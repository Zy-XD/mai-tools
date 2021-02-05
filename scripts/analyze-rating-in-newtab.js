!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=90)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LANG=void 0;const r=new URLSearchParams(document.location.search);let o="en";r.get("hl")?o=r.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(o="zh"),t.LANG=o},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const r={zh:{advStart:"🕓 下載黃譜成績中…",advDone:"✔ 黃譜成績下載完畢！",expStart:"🕓 下載紅譜成績中…",expDone:"✔ 紅譜成績下載完畢！",masStart:"🕓 下載紫譜成績中…",masDone:"✔ 紫譜成績下載完畢！",remStart:"🕓 下載白譜成績中…",remDone:"✔ 白譜成績下載完畢！"},en:{advStart:"🕓 Downloading Advanced scores…",advDone:"✔ Advanced scores downloaded!",expStart:"🕓 Downloading Expert scores…",expDone:"✔ Expert scores downloaded!",masStart:"🕓 Downloading Master scores…",masDone:"✔ Master scores downloaded!",remStart:"🕓 Downloading Re:Master scores…",remDone:"✔ Re:Master scores downloaded!"}}[n(1).LANG];t.statusText=function(e,t){switch(e){case"Re:MASTER":return t?r.remDone:r.remStart;case"MASTER":return t?r.masDone:r.masStart;case"EXPERT":return t?r.expDone:r.expStart;case"ADVANCED":return t?r.advDone:r.advStart}return""}},16:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const o=n(5),a=n(2);t.SELF_SCORE_URLS=new Map([["Re:MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],["MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],["EXPERT","/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],["ADVANCED","/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"]]),t.fetchScores=function(e,n){return r(this,void 0,void 0,(function*(){const r=t.SELF_SCORE_URLS.get(e);if(!r)return;const i=(yield a.fetchPage(r)).querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:"",scoreList:n};i.forEach(t=>function(e,t,n){const r=e.classList.contains("screw_block"),a=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(r)n.genre=e.innerText;else if(a){const r=o.getSongName(e),a=o.getChartLevel(e),i=o.getChartType(e),c=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!c)return;n.scoreList.push([r,n.genre,t,a,i,c].join("\t"))}}(t,e,c))}))}},2:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};function o(e){return r(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0,t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io"],t.handleError=function(e){alert(e)},t.fetchPage=o,t.fetchGameVersion=function e(t){return r(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?n.value:e(t=yield o("/maimai-mobile/record/musicVersion/"))}))},t.getPostMessageFunc=function(e,t){return(n,r)=>{const o={action:n,payload:r};e.postMessage(o,t)}}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPlayerGrade=t.getPlayerName=t.getChartType=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0,t.getSongName=function(e){return e.getElementsByClassName("music_name_block")[0].innerText},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){e.classList.contains("pointer")||(e=e.querySelector(".pointer"));const t=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getChartType=function(e){return e.id?e.id.includes("sta_")?"STANDARD":"DX":e.querySelector("img:nth-child(2)").src.includes("_standard")?"STANDARD":"DX"},t.getPlayerName=function(e){var t;return null===(t=e.querySelector(".name_block"))||void 0===t?void 0:t.innerText},t.fetchPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},90:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),a=n(16),i=n(1),c=n(11),s=n(2);!function(){const e={zh:{pleaseLogIn:"請登入 maimai NET",analyze:"分析 Rating"},en:{pleaseLogIn:"Please log in to maimai DX NET.",analyze:"Analyze Rating"}}[i.LANG];!function(){const t=document.location.host;if("maimaidx-eng.com"!==t&&"maimaidx.jp"!==t)return void s.handleError(e.pleaseLogIn);let n="https://myjian.github.io/mai-tools/rating-calculator/";const i=new URLSearchParams,u=o.getPlayerName(document.body);u&&i.set("playerName",u);const l=i.toString();l&&(n+="?"+l),navigator.userAgent.startsWith("Mozilla/5.0 (iP")?function(t){const n=document.body.querySelector(".basic_block.p_10.f_0");if(!n)return;const r=n.querySelector(".basic_block > .p_l_10");let o=n.querySelector(".analyzeLink");o&&o.remove(),o=document.createElement("a"),o.className="analyzeLink f_r f_14",o.style.color="#1477e6",o.target="selfRating",o.innerText=e.analyze,o.href=t,r.append(o)}(n):window.open(n,"selfRating"),window.addEventListener("message",e=>{console.log(e.origin,e.data),s.ALLOWED_ORIGINS.includes(e.origin)&&"ready"===e.data&&function(e){r(this,void 0,void 0,(function*(){const t=yield s.fetchGameVersion(document.body);e("gameVersion",t);const n=o.fetchPlayerGrade(document.body);n&&e("playerGrade",n);const r=[];for(const t of a.SELF_SCORE_URLS.keys())e("appendPlayerScore",c.statusText(t,!1)),yield a.fetchScores(t,r),e("appendPlayerScore",c.statusText(t,!0));e("replacePlayerScore",""),e("appendPlayerScore",r.join("\n")),e("calculateRating","")}))}(s.getPostMessageFunc(e.source,e.origin))})}()}()}});