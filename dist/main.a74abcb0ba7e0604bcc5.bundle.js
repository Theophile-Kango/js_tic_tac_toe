!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);let n="",o="";const u=(()=>{let e=!0;const t=(e,t,r)=>({name:e,symbol:t,score:r});return{players:(e,r)=>(n=t(e,"X",0),o=t(r,"O",0),[n,o]),switchPlayers:(t,r)=>!0===e?(e=!1,t):(e=!0,r),getPlayers:()=>[n,o]}})(),c=(()=>{const e=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];let t=[],r=[],n=0;return{checkWin:(t,r)=>{for(let n=0;n<e.length;n+=1)if(r.includes(e[n][0])&&r.includes(e[n][1])&&r.includes(e[n][2]))return t.score+=1,t.name+" wins!";return 9===n?"It's a draw!":""},populateArr:(e,n)=>"X"===n?(t.push(Number(e)+1),"X"):(r.push(Number(e)+1),"O"),resetArr:()=>{t=[],r=[],n=0},increaseCounter:()=>(n+=1,n),getGameboardArr:()=>[t,r]}})(),l=document.querySelector(".gameboard");let s="";const a={writeResult:(e,t)=>{document.getElementById("result").textContent=c.checkWin(e,t),s.score()},resetBoard:()=>{l.querySelectorAll("button").forEach(e=>{e.textContent=""}),document.getElementById("result").textContent="",c.resetArr()}};s={play:(e,t)=>(l.querySelectorAll("button").forEach((r,n)=>{r.setAttribute("id",n),r.addEventListener("click",()=>{const o=document.getElementById("result");if(c.increaseCounter(),"X"===r.textContent||"O"===r.textContent||""!==o.textContent)return!1;r.textContent=u.switchPlayers(e.symbol,t.symbol);const[l,s]=c.getGameboardArr();return"X"===c.populateArr(n,r.textContent)?a.writeResult(e,l):a.writeResult(t,s),!1})}),!1),score:()=>{const[e,t]=u.getPlayers(),r=document.getElementById("player1-score"),n=document.getElementById("player2-score");r.textContent=`${e.name}: ${e.score}`,n.textContent=`${t.name}: ${t.score}`}};var d={firstReset:()=>{document.getElementById("reset").addEventListener("click",()=>{a.resetBoard()})},firstStart:()=>{document.querySelector("#start").addEventListener("click",()=>{const e=document.getElementById("player-1").value,t=document.getElementById("player-2").value,[r,n]=u.players(e,t);s.play(r,n),s.score(r,n);const o=document.querySelector(".d-none"),c=document.querySelector("#hide-div");o.classList.remove("d-none"),c.classList.add("d-none")})}};d.firstReset(),d.firstStart()}]);