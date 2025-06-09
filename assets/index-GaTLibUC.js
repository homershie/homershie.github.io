(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();document.addEventListener("DOMContentLoaded",function(){function t(){document.querySelectorAll("img").forEach(P=>{P.addEventListener("error",function(){console.warn("Image failed to load:",this.src),this.alt="圖片載入失敗"})})}function e(){document.querySelectorAll('a[href^="http"]:not([href*="'+window.location.hostname+'"])').forEach(P=>{P.getAttribute("rel")||P.setAttribute("rel","noopener noreferrer")})}t(),e(),document.querySelectorAll('a[href^="#"]').forEach(E=>{E.addEventListener("click",function(P){const R=this.getAttribute("href");if(R&&R!=="#"){P.preventDefault();const D=document.querySelector(R);D&&D.scrollIntoView({behavior:"smooth"})}})});const n=document.querySelector(".navbar-toggler"),r=document.querySelector(".navbar .bg");n&&r&&n.addEventListener("click",function(){r.style.display==="none"||r.style.display===""?r.style.display="block":r.style.display="none"});const s=document.querySelector(".navbar-chang");window.addEventListener("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>300?s&&s.classList.add("nav-scroll"):s&&s.classList.remove("nav-scroll")});const a=document.querySelectorAll(".fixed-menu .menu-links a");a.forEach(E=>{E.addEventListener("click",function(P){P.preventDefault();const R=this.getAttribute("data-tab");a.forEach(Z=>Z.classList.remove("active")),this.classList.add("active"),document.querySelectorAll(".min-box .min-sec").forEach(Z=>Z.classList.remove("current"));const q=document.getElementById(R);q&&q.classList.add("current")})}),document.querySelectorAll(".bg-img, section").forEach(E=>{const P=E.getAttribute("data-background");P&&(E.style.backgroundImage=`url(${P})`)});const l=document.querySelectorAll("#tabs .tab-links .item-link");l.forEach(E=>{E.addEventListener("click",function(P){P.preventDefault();const R=this.getAttribute("data-tab");l.forEach(Z=>Z.classList.remove("current")),this.classList.add("current"),document.querySelectorAll(".tab-content").forEach(Z=>Z.style.display="none");const q=document.getElementById(R);q&&(q.style.display="block")})});const c=document.querySelectorAll("#tabs-fade .tab-links .item-link");c.forEach(E=>{E.addEventListener("click",function(P){P.preventDefault();const R=this.getAttribute("data-tab");c.forEach(Z=>Z.classList.remove("current")),this.classList.add("current"),document.querySelectorAll(".tab-content").forEach(Z=>{Z.style.opacity="0",setTimeout(()=>Z.style.display="none",300)});const q=document.getElementById(R);q&&setTimeout(()=>{q.style.display="block",setTimeout(()=>q.style.opacity="1",10)},300)})}),document.querySelectorAll(".accordion .title").forEach(E=>{E.addEventListener("click",function(){const P=this.nextElementSibling;document.querySelectorAll(".accordion-info").forEach(D=>{D!==P&&(D.style.display="none")}),P&&(P.style.display=P.style.display==="block"?"none":"block")})});const f=document.querySelectorAll(".accordion .item");f.forEach(E=>{E.addEventListener("click",function(){f.forEach(P=>P.classList.remove("active")),this.classList.add("active")})}),document.querySelectorAll("[data-tooltip-tit]").forEach(E=>{E.addEventListener("mouseenter",function(){const P=this.getAttribute("data-tooltip-tit"),R=document.createElement("div");R.className="div-tooltip-tit",R.textContent=P,R.style.cssText=`
                  position: absolute;
                  background: #333;
                  color: white;
                  padding: 5px 10px;
                  border-radius: 4px;
                  font-size: 12px;
                  z-index: 9999;
                  pointer-events: none;
                  opacity: 0;
                  transition: opacity 0.3s ease;
              `,document.body.appendChild(R);const D=this.getBoundingClientRect();R.style.left=D.left+"px",R.style.top=D.top-R.offsetHeight-5+"px",setTimeout(()=>R.style.opacity="1",10)}),E.addEventListener("mouseleave",function(){document.querySelectorAll(".div-tooltip-tit").forEach(R=>R.remove())}),E.addEventListener("mousemove",function(P){const R=document.querySelector(".div-tooltip-tit");R&&(R.style.left=P.pageX+10+"px",R.style.top=P.pageY-30+"px")})}),document.querySelectorAll("[data-tooltip-sub]").forEach(E=>{E.addEventListener("mouseenter",function(){const P=this.getAttribute("data-tooltip-sub"),R=document.createElement("div");R.className="div-tooltip-sub",R.textContent=P,R.style.cssText=`
                  position: absolute;
                  background: #333;
                  color: white;
                  padding: 5px 10px;
                  border-radius: 4px;
                  font-size: 12px;
                  z-index: 9999;
                  pointer-events: none;
                  opacity: 0;
                  transition: opacity 0.3s ease;
              `,document.body.appendChild(R);const D=this.getBoundingClientRect();R.style.left=D.left+30+"px",R.style.top=D.top-15+"px",setTimeout(()=>R.style.opacity="1",10)}),E.addEventListener("mouseleave",function(){document.querySelectorAll(".div-tooltip-sub").forEach(R=>R.remove())}),E.addEventListener("mousemove",function(P){const R=document.querySelector(".div-tooltip-sub");R&&(R.style.left=P.pageX+30+"px",R.style.top=P.pageY-15+"px")})}),document.querySelectorAll(".fixed-menu a, .left-area .menu-links a").forEach(E=>{E.addEventListener("mouseenter",function(){this.classList.add("show")}),E.addEventListener("mouseleave",function(){this.classList.remove("show")})}),window.addEventListener("scroll",function(){document.querySelectorAll(".skill-progress .progres").forEach(P=>{const R=P.getBoundingClientRect(),D=window.innerHeight;if(R.bottom<=D&&R.top>=0){const q=P.getAttribute("data-value");q&&!P.classList.contains("animated")&&(P.classList.add("animated"),P.style.width=q)}})});const _=document.querySelectorAll(".parallaxie");function y(){_.forEach(E=>{const R=-(window.pageYOffset*.8);E.style.transform=`translateY(${R}px)`,E.style.backgroundSize="cover"})}window.addEventListener("scroll",y),window.GLightbox&&GLightbox({selector:".popup-img .popimg, .gallery .popimg",touchNavigation:!0,loop:!0,autoplayVideos:!0});function p(){document.querySelectorAll(".number-sec .count").forEach(P=>{const R=parseInt(P.textContent),q=R/(500/16);let Z=0;const se=()=>{Z+=q,Z<R?(P.textContent=Math.floor(Z),requestAnimationFrame(se)):P.textContent=R};se()})}const m=document.querySelector(".number-sec");if(m){const E=new IntersectionObserver(P=>{P.forEach(R=>{R.isIntersecting&&(p(),E.unobserve(R.target))})},{threshold:.5});E.observe(m)}const v=document.querySelectorAll(".hover-this"),x=document.querySelector(".cursor");v.forEach(E=>{E.addEventListener("mousemove",function(P){const R=this.querySelector(".hover-anim");if(R){const D=this.getBoundingClientRect(),q=P.clientX-D.left,Z=P.clientY-D.top,se=D.width,te=D.height,G=25,K=q/se*(G*2)-G,ve=Z/te*(G*2)-G;R.style.transform=`translate(${K}px, ${ve}px)`}}),E.addEventListener("mouseleave",function(){const P=this.querySelector(".hover-anim");P&&(P.style.transform="")})}),x&&(window.addEventListener("mousemove",function(P){x.style.left=P.clientX+"px",x.style.top=P.clientY+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(P=>{P.addEventListener("mouseenter",function(){x.classList.add("cursor-active")}),P.addEventListener("mouseleave",function(){x.classList.remove("cursor-active")})})),document.querySelectorAll(".rolling-text").forEach(E=>{const P=E.innerText;E.innerHTML="";const R=document.createElement("div");R.classList.add("block");for(let D of P){const q=document.createElement("span");q.innerText=D.trim()===""?" ":D,q.classList.add("letter"),R.appendChild(q)}E.appendChild(R),E.appendChild(R.cloneNode(!0)),E.addEventListener("mouseover",()=>{E.classList.remove("play")})}),document.querySelectorAll('[data-carousel="swiper"]').forEach(function(E){const P=E.querySelector('[data-swiper="container"]'),R=E.querySelector('[data-swiper="pagination"]'),D=E.querySelector('[data-swiper="prev"]'),q=E.querySelector('[data-swiper="next"]'),Z=P?P.getAttribute("id"):null,se=R?R.getAttribute("id"):null,te=D?D.getAttribute("id"):null,G=q?q.getAttribute("id"):null,K=E.dataset.items,ve=E.dataset.autoplay,I=E.dataset.initial,xe=E.dataset.loop,Ie=E.dataset.parallax,at=E.dataset.space,Me=E.dataset.speed,Ye=E.dataset.center,Oe=E.dataset.effect,z=E.dataset.direction,V=E.dataset.mousewheel;let N={};if(E.classList.contains("swiper5")&&(N={breakpoints:{0:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:3},1024:{slidesPerView:5}}}),E.classList.contains("swiper4")&&(N={breakpoints:{0:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3},1024:{slidesPerView:4}}}),E.classList.contains("resume-swiper")&&(N={pagination:{el:".resume .swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}}),E.classList.contains("resume-swiper2")&&(N={pagination:{el:".resume .swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2}}}),E.classList.contains("testim-swiper")&&(N={breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}},pagination:{el:".testimonials .swiper-pagination",clickable:!0},navigation:{nextEl:".testimonials .testim-controls .swiper-button-next",prevEl:".testimonials .testim-controls .swiper-button-prev"}}),E.classList.contains("testim-swiper2")&&(N={breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:1},1024:{slidesPerView:2}},pagination:{el:".testimonials .swiper-pagination",clickable:!0},navigation:{nextEl:".testimonials .testim-controls .swiper-button-next",prevEl:".testimonials .testim-controls .swiper-button-prev"}}),E.classList.contains("pagination")&&(N={pagination:{el:".swiper-pagination",clickable:!0}}),K&&(N.slidesPerView=parseInt(K)),ve&&(N.autoplay=JSON.parse(ve)),I&&(N.initialSlide=parseInt(I)),Ye&&(N.centeredSlides=JSON.parse(Ye)),xe&&(N.loop=JSON.parse(xe)),Ie&&(N.parallax=JSON.parse(Ie)),at&&(N.spaceBetween=parseInt(at)),Me&&(N.speed=parseInt(Me)),V&&(N.mousewheel=JSON.parse(V)),Oe&&(N.effect=Oe),z&&(N.direction=z),te&&(N.navigation||(N.navigation={}),N.navigation.prevEl="#"+te),G&&(N.navigation||(N.navigation={}),N.navigation.nextEl="#"+G),se&&(N.pagination={el:"#"+se,clickable:!0}),Z){const J="#"+Z;new Swiper(J,N)}});const M=document.getElementById("search-input");if(M&&M.addEventListener("input",function(){const E=this.value.toLowerCase();document.querySelectorAll(".blog-post").forEach(function(R){const D=R.querySelector(".post-title");D&&(D.textContent.toLowerCase().includes(E)?R.style.display="":R.style.display="none")})}),typeof gsap<"u"){const E=document.getElementById("svg");if(E){const P=gsap.timeline(),R="M0 502S175 272 500 272s500 230 500 230V0H0Z",D="M0 2S175 1 500 1s500 1 500 1V0H0Z";P.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),P.to(E,{duration:.5,attr:{d:R},ease:"power2.easeIn"}).to(E,{duration:.5,attr:{d:D},ease:"power2.easeOut"}),P.to(".loader-wrap",{y:-1500}),P.to(".loader-wrap",{zIndex:-1,display:"none"})}}function B(){if(window.innerWidth<991){const P=document.querySelector(".navbar .navbar-nav");P&&P.querySelectorAll(".nav-link").forEach(function(D){D.addEventListener("click",function(){P.querySelectorAll(".dropdown .dropdown-menu").forEach(function(te){te.classList.remove("show")});const se=this.parentElement.querySelector(".dropdown-menu");se&&se.classList.add("show")})})}}B(),window.addEventListener("resize",B)});window.addEventListener("load",function(){const t=document.body;if(t.classList.add("loaded"),setTimeout(function(){t.classList.remove("loaded")},1500),window.Isotope){const n=document.querySelector(".gallery");if(n){const r=new Isotope(n,{itemSelector:".items"}),s=document.querySelectorAll(".filtering span");s.forEach(a=>{a.addEventListener("click",function(){const o=this.getAttribute("data-filter");r.arrange({filter:o}),s.forEach(l=>l.classList.remove("active")),this.classList.add("active")})})}}const e=document.getElementById("contact-form");e&&e.addEventListener("submit",function(n){n.preventDefault();const r=this.querySelector('input[name="name"]'),s=this.querySelector('input[name="email"]'),a=this.querySelector('textarea[name="message"]');let o=!0;if(r.value.trim()?r.style.borderColor="":(r.style.borderColor="red",o=!1),!s.value.trim()||!s.value.includes("@")?(s.style.borderColor="red",o=!1):s.style.borderColor="",a.value.trim()?a.style.borderColor="":(a.style.borderColor="red",o=!1),o){const l=new FormData(this);fetch("contact.php",{method:"POST",body:l}).then(c=>c.json()).then(c=>{const u="alert-"+c.type,f=c.message,g=`<div class="alert ${u} alert-dismissable">
                          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                          ${f}
                      </div>`,d=this.querySelector(".messages");d&&u&&f&&(d.innerHTML=g,this.reset())}).catch(c=>{console.error("Error:",c)})}});const i=document.querySelector(".progress-wrap path");if(i){const n=i.getTotalLength();i.style.transition=i.style.WebkitTransition="none",i.style.strokeDasharray=n+" "+n,i.style.strokeDashoffset=n,i.getBoundingClientRect(),i.style.transition=i.style.WebkitTransition="stroke-dashoffset 10ms linear";const r=function(){const o=window.pageYOffset,l=document.documentElement.scrollHeight-window.innerHeight,c=n-o*n/l;i.style.strokeDashoffset=c};r(),window.addEventListener("scroll",r);const s=150,a=document.querySelector(".progress-wrap");window.addEventListener("scroll",function(){window.pageYOffset>s?a.classList.add("active-progress"):a.classList.remove("active-progress")}),a&&a.addEventListener("click",function(o){return o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1})}});/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pu(t){const e=Object.create(null);for(const i of t.split(","))e[i]=1;return i=>i in e}const We={},es=[],nn=()=>{},w0=()=>!1,Zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hu=t=>t.startsWith("onUpdate:"),Wt=Object.assign,mu=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},x0=Object.prototype.hasOwnProperty,Fe=(t,e)=>x0.call(t,e),fe=Array.isArray,ts=t=>Qo(t)==="[object Map]",$g=t=>Qo(t)==="[object Set]",_e=t=>typeof t=="function",ut=t=>typeof t=="string",tr=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",Wg=t=>(Qe(t)||_e(t))&&_e(t.then)&&_e(t.catch),Ug=Object.prototype.toString,Qo=t=>Ug.call(t),k0=t=>Qo(t).slice(8,-1),Hg=t=>Qo(t)==="[object Object]",_u=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},S0=/-(\w)/g,Oi=el(t=>t.replace(S0,(e,i)=>i?i.toUpperCase():"")),A0=/\B([A-Z])/g,Lr=el(t=>t.replace(A0,"-$1").toLowerCase()),tl=el(t=>t.charAt(0).toUpperCase()+t.slice(1)),xl=el(t=>t?`on${tl(t)}`:""),Un=(t,e)=>!Object.is(t,e),co=(t,...e)=>{for(let i=0;i<t.length;i++)t[i](...e)},Vg=(t,e,i,n=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:n,value:i})},lc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ef;const il=()=>Ef||(Ef=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gs(t){if(fe(t)){const e={};for(let i=0;i<t.length;i++){const n=t[i],r=ut(n)?P0(n):gs(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(ut(t)||Qe(t))return t}const E0=/;(?![^(]*\))/g,T0=/:([^]+)/,C0=/\/\*[^]*?\*\//g;function P0(t){const e={};return t.replace(C0,"").split(E0).forEach(i=>{if(i){const n=i.split(T0);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ps(t){let e="";if(ut(t))e=t;else if(fe(t))for(let i=0;i<t.length;i++){const n=ps(t[i]);n&&(e+=n+" ")}else if(Qe(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const I0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",M0=pu(I0);function Gg(t){return!!t||t===""}const Yg=t=>!!(t&&t.__v_isRef===!0),we=t=>ut(t)?t:t==null?"":fe(t)||Qe(t)&&(t.toString===Ug||!_e(t.toString))?Yg(t)?we(t.value):JSON.stringify(t,qg,2):String(t),qg=(t,e)=>Yg(e)?qg(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[n,r],s)=>(i[kl(n,s)+" =>"]=r,i),{})}:$g(e)?{[`Set(${e.size})`]:[...e.values()].map(i=>kl(i))}:tr(e)?kl(e):Qe(e)&&!fe(e)&&!Hg(e)?String(e):e,kl=(t,e="")=>{var i;return tr(t)?`Symbol(${(i=t.description)!=null?i:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ti;class Xg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ti,!e&&ti&&(this.index=(ti.scopes||(ti.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].pause();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].resume();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].resume()}}run(e){if(this._active){const i=ti;try{return ti=this,e()}finally{ti=i}}}on(){++this._on===1&&(this.prevScope=ti,ti=this)}off(){this._on>0&&--this._on===0&&(ti=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function O0(t){return new Xg(t)}function z0(){return ti}let Ve;const Sl=new WeakSet;class Kg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ti&&ti.active&&ti.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sl.has(this)&&(Sl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tf(this),Qg(this);const e=Ve,i=Fi;Ve=this,Fi=!0;try{return this.fn()}finally{ep(this),Ve=e,Fi=i,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vu(e);this.deps=this.depsTail=void 0,Tf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cc(this)&&this.run()}get dirty(){return cc(this)}}let Jg=0,Ks,Js;function Zg(t,e=!1){if(t.flags|=8,e){t.next=Js,Js=t;return}t.next=Ks,Ks=t}function yu(){Jg++}function bu(){if(--Jg>0)return;if(Js){let e=Js;for(Js=void 0;e;){const i=e.next;e.next=void 0,e.flags&=-9,e=i}}let t;for(;Ks;){let e=Ks;for(Ks=void 0;e;){const i=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){t||(t=n)}e=i}}if(t)throw t}function Qg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ep(t){let e,i=t.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),vu(n),R0(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}t.deps=e,t.depsTail=i}function cc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function tp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ya)||(t.globalVersion=ya,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!cc(t))))return;t.flags|=2;const e=t.dep,i=Ve,n=Fi;Ve=t,Fi=!0;try{Qg(t);const r=t.fn(t._value);(e.version===0||Un(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ve=i,Fi=n,ep(t),t.flags&=-3}}function vu(t,e=!1){const{dep:i,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),i.subs===t&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let s=i.computed.deps;s;s=s.nextDep)vu(s,!0)}!e&&!--i.sc&&i.map&&i.map.delete(i.key)}function R0(t){const{prevDep:e,nextDep:i}=t;e&&(e.nextDep=i,t.prevDep=void 0),i&&(i.prevDep=e,t.nextDep=void 0)}let Fi=!0;const ip=[];function wn(){ip.push(Fi),Fi=!1}function xn(){const t=ip.pop();Fi=t===void 0?!0:t}function Tf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const i=Ve;Ve=void 0;try{e()}finally{Ve=i}}}let ya=0;class L0{constructor(e,i){this.sub=e,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!Fi||Ve===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==Ve)i=this.activeLink=new L0(Ve,this),Ve.deps?(i.prevDep=Ve.depsTail,Ve.depsTail.nextDep=i,Ve.depsTail=i):Ve.deps=Ve.depsTail=i,np(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=Ve.depsTail,i.nextDep=void 0,Ve.depsTail.nextDep=i,Ve.depsTail=i,Ve.deps===i&&(Ve.deps=n)}return i}trigger(e){this.version++,ya++,this.notify(e)}notify(e){yu();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{bu()}}}function np(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)np(n)}const i=t.dep.subs;i!==t&&(t.prevSub=i,i&&(i.nextSub=t)),t.dep.subs=t}}const uc=new WeakMap,br=Symbol(""),fc=Symbol(""),ba=Symbol("");function Dt(t,e,i){if(Fi&&Ve){let n=uc.get(t);n||uc.set(t,n=new Map);let r=n.get(i);r||(n.set(i,r=new wu),r.map=n,r.key=i),r.track()}}function hn(t,e,i,n,r,s){const a=uc.get(t);if(!a){ya++;return}const o=l=>{l&&l.trigger()};if(yu(),e==="clear")a.forEach(o);else{const l=fe(t),c=l&&_u(i);if(l&&i==="length"){const u=Number(n);a.forEach((f,g)=>{(g==="length"||g===ba||!tr(g)&&g>=u)&&o(f)})}else switch((i!==void 0||a.has(void 0))&&o(a.get(i)),c&&o(a.get(ba)),e){case"add":l?c&&o(a.get("length")):(o(a.get(br)),ts(t)&&o(a.get(fc)));break;case"delete":l||(o(a.get(br)),ts(t)&&o(a.get(fc)));break;case"set":ts(t)&&o(a.get(br));break}}bu()}function Br(t){const e=Ne(t);return e===t?e:(Dt(e,"iterate",ba),Ci(t)?e:e.map(Et))}function nl(t){return Dt(t=Ne(t),"iterate",ba),t}const D0={__proto__:null,[Symbol.iterator](){return Al(this,Symbol.iterator,Et)},concat(...t){return Br(this).concat(...t.map(e=>fe(e)?Br(e):e))},entries(){return Al(this,"entries",t=>(t[1]=Et(t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,i=>i.map(Et),arguments)},find(t,e){return un(this,"find",t,e,Et,arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,Et,arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return El(this,"includes",t)},indexOf(...t){return El(this,"indexOf",t)},join(t){return Br(this).join(t)},lastIndexOf(...t){return El(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return Ms(this,"pop")},push(...t){return Ms(this,"push",t)},reduce(t,...e){return Cf(this,"reduce",t,e)},reduceRight(t,...e){return Cf(this,"reduceRight",t,e)},shift(){return Ms(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return Ms(this,"splice",t)},toReversed(){return Br(this).toReversed()},toSorted(t){return Br(this).toSorted(t)},toSpliced(...t){return Br(this).toSpliced(...t)},unshift(...t){return Ms(this,"unshift",t)},values(){return Al(this,"values",Et)}};function Al(t,e,i){const n=nl(t),r=n[e]();return n!==t&&!Ci(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=i(s.value)),s}),r}const j0=Array.prototype;function un(t,e,i,n,r,s){const a=nl(t),o=a!==t&&!Ci(t),l=a[e];if(l!==j0[e]){const f=l.apply(t,s);return o?Et(f):f}let c=i;a!==t&&(o?c=function(f,g){return i.call(this,Et(f),g,t)}:i.length>2&&(c=function(f,g){return i.call(this,f,g,t)}));const u=l.call(a,c,n);return o&&r?r(u):u}function Cf(t,e,i,n){const r=nl(t);let s=i;return r!==t&&(Ci(t)?i.length>3&&(s=function(a,o,l){return i.call(this,a,o,l,t)}):s=function(a,o,l){return i.call(this,a,Et(o),l,t)}),r[e](s,...n)}function El(t,e,i){const n=Ne(t);Dt(n,"iterate",ba);const r=n[e](...i);return(r===-1||r===!1)&&Su(i[0])?(i[0]=Ne(i[0]),n[e](...i)):r}function Ms(t,e,i=[]){wn(),yu();const n=Ne(t)[e].apply(t,i);return bu(),xn(),n}const N0=pu("__proto__,__v_isRef,__isVue"),rp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr));function F0(t){tr(t)||(t=String(t));const e=Ne(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class sp{constructor(e=!1,i=!1){this._isReadonly=e,this._isShallow=i}get(e,i,n){if(i==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return s;if(i==="__v_raw")return n===(r?s?X0:cp:s?lp:op).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=fe(e);if(!r){let l;if(a&&(l=D0[i]))return l;if(i==="hasOwnProperty")return F0}const o=Reflect.get(e,i,Bt(e)?e:n);return(tr(i)?rp.has(i):N0(i))||(r||Dt(e,"get",i),s)?o:Bt(o)?a&&_u(i)?o:o.value:Qe(o)?r?fp(o):Da(o):o}}class ap extends sp{constructor(e=!1){super(!1,e)}set(e,i,n,r){let s=e[i];if(!this._isShallow){const l=Yn(s);if(!Ci(n)&&!Yn(n)&&(s=Ne(s),n=Ne(n)),!fe(e)&&Bt(s)&&!Bt(n))return l?!1:(s.value=n,!0)}const a=fe(e)&&_u(i)?Number(i)<e.length:Fe(e,i),o=Reflect.set(e,i,n,Bt(e)?e:r);return e===Ne(r)&&(a?Un(n,s)&&hn(e,"set",i,n):hn(e,"add",i,n)),o}deleteProperty(e,i){const n=Fe(e,i);e[i];const r=Reflect.deleteProperty(e,i);return r&&n&&hn(e,"delete",i,void 0),r}has(e,i){const n=Reflect.has(e,i);return(!tr(i)||!rp.has(i))&&Dt(e,"has",i),n}ownKeys(e){return Dt(e,"iterate",fe(e)?"length":br),Reflect.ownKeys(e)}}class B0 extends sp{constructor(e=!1){super(!0,e)}set(e,i){return!0}deleteProperty(e,i){return!0}}const $0=new ap,W0=new B0,U0=new ap(!0);const dc=t=>t,Ha=t=>Reflect.getPrototypeOf(t);function H0(t,e,i){return function(...n){const r=this.__v_raw,s=Ne(r),a=ts(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...n),u=i?dc:e?Co:Et;return!e&&Dt(s,"iterate",l?fc:br),{next(){const{value:f,done:g}=c.next();return g?{value:f,done:g}:{value:o?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function Va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function V0(t,e){const i={get(r){const s=this.__v_raw,a=Ne(s),o=Ne(r);t||(Un(r,o)&&Dt(a,"get",r),Dt(a,"get",o));const{has:l}=Ha(a),c=e?dc:t?Co:Et;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Dt(Ne(r),"iterate",br),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Ne(s),o=Ne(r);return t||(Un(r,o)&&Dt(a,"has",r),Dt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ne(o),c=e?dc:t?Co:Et;return!t&&Dt(l,"iterate",br),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Wt(i,t?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(r){!e&&!Ci(r)&&!Yn(r)&&(r=Ne(r));const s=Ne(this);return Ha(s).has.call(s,r)||(s.add(r),hn(s,"add",r,r)),this},set(r,s){!e&&!Ci(s)&&!Yn(s)&&(s=Ne(s));const a=Ne(this),{has:o,get:l}=Ha(a);let c=o.call(a,r);c||(r=Ne(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Un(s,u)&&hn(a,"set",r,s):hn(a,"add",r,s),this},delete(r){const s=Ne(this),{has:a,get:o}=Ha(s);let l=a.call(s,r);l||(r=Ne(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&hn(s,"delete",r,void 0),c},clear(){const r=Ne(this),s=r.size!==0,a=r.clear();return s&&hn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=H0(r,t,e)}),i}function xu(t,e){const i=V0(t,e);return(n,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?n:Reflect.get(Fe(i,r)&&r in n?i:n,r,s)}const G0={get:xu(!1,!1)},Y0={get:xu(!1,!0)},q0={get:xu(!0,!1)};const op=new WeakMap,lp=new WeakMap,cp=new WeakMap,X0=new WeakMap;function K0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J0(t){return t.__v_skip||!Object.isExtensible(t)?0:K0(k0(t))}function Da(t){return Yn(t)?t:ku(t,!1,$0,G0,op)}function up(t){return ku(t,!1,U0,Y0,lp)}function fp(t){return ku(t,!0,W0,q0,cp)}function ku(t,e,i,n,r){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=J0(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?n:i);return r.set(t,o),o}function is(t){return Yn(t)?is(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function Ci(t){return!!(t&&t.__v_isShallow)}function Su(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function dp(t){return!Fe(t,"__v_skip")&&Object.isExtensible(t)&&Vg(t,"__v_skip",!0),t}const Et=t=>Qe(t)?Da(t):t,Co=t=>Qe(t)?fp(t):t;function Bt(t){return t?t.__v_isRef===!0:!1}function Ge(t){return gp(t,!1)}function Z0(t){return gp(t,!0)}function gp(t,e){return Bt(t)?t:new Q0(t,e)}class Q0{constructor(e,i){this.dep=new wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?e:Ne(e),this._value=i?e:Et(e),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(e){const i=this._rawValue,n=this.__v_isShallow||Ci(e)||Yn(e);e=n?e:Ne(e),Un(e,i)&&(this._rawValue=e,this._value=n?e:Et(e),this.dep.trigger())}}function rn(t){return Bt(t)?t.value:t}const e_={get:(t,e,i)=>e==="__v_raw"?t:rn(Reflect.get(t,e,i)),set:(t,e,i,n)=>{const r=t[e];return Bt(r)&&!Bt(i)?(r.value=i,!0):Reflect.set(t,e,i,n)}};function pp(t){return is(t)?t:new Proxy(t,e_)}class t_{constructor(e,i,n){this.fn=e,this.setter=i,this._value=void 0,this.dep=new wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ya-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Zg(this,!0),!0}get value(){const e=this.dep.track();return tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function i_(t,e,i=!1){let n,r;return _e(t)?n=t:(n=t.get,r=t.set),new t_(n,r,i)}const Ga={},Po=new WeakMap;let fr;function n_(t,e=!1,i=fr){if(i){let n=Po.get(i);n||Po.set(i,n=[]),n.push(t)}}function r_(t,e,i=We){const{immediate:n,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=i,c=x=>r?x:Ci(x)||r===!1||r===0?mn(x,1):mn(x);let u,f,g,d,b=!1,_=!1;if(Bt(t)?(f=()=>t.value,b=Ci(t)):is(t)?(f=()=>c(t),b=!0):fe(t)?(_=!0,b=t.some(x=>is(x)||Ci(x)),f=()=>t.map(x=>{if(Bt(x))return x.value;if(is(x))return c(x);if(_e(x))return l?l(x,2):x()})):_e(t)?e?f=l?()=>l(t,2):t:f=()=>{if(g){wn();try{g()}finally{xn()}}const x=fr;fr=u;try{return l?l(t,3,[d]):t(d)}finally{fr=x}}:f=nn,e&&r){const x=f,T=r===!0?1/0:r;f=()=>mn(x(),T)}const y=z0(),p=()=>{u.stop(),y&&y.active&&mu(y.effects,u)};if(s&&e){const x=e;e=(...T)=>{x(...T),p()}}let m=_?new Array(t.length).fill(Ga):Ga;const v=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const T=u.run();if(r||b||(_?T.some((O,M)=>Un(O,m[M])):Un(T,m))){g&&g();const O=fr;fr=u;try{const M=[T,m===Ga?void 0:_&&m[0]===Ga?[]:m,d];m=T,l?l(e,3,M):e(...M)}finally{fr=O}}}else u.run()};return o&&o(v),u=new Kg(f),u.scheduler=a?()=>a(v,!1):v,d=x=>n_(x,!1,u),g=u.onStop=()=>{const x=Po.get(u);if(x){if(l)l(x,4);else for(const T of x)T();Po.delete(u)}},e?n?v(!0):m=u.run():a?a(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function mn(t,e=1/0,i){if(e<=0||!Qe(t)||t.__v_skip||(i=i||new Set,i.has(t)))return t;if(i.add(t),e--,Bt(t))mn(t.value,e,i);else if(fe(t))for(let n=0;n<t.length;n++)mn(t[n],e,i);else if($g(t)||ts(t))t.forEach(n=>{mn(n,e,i)});else if(Hg(t)){for(const n in t)mn(t[n],e,i);for(const n of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,n)&&mn(t[n],e,i)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ja(t,e,i,n){try{return n?t(...n):t()}catch(r){rl(r,e,i)}}function on(t,e,i,n){if(_e(t)){const r=ja(t,e,i,n);return r&&Wg(r)&&r.catch(s=>{rl(s,e,i)}),r}if(fe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(on(t[s],e,i,n));return r}}function rl(t,e,i,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||We;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${i}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){wn(),ja(s,null,10,[t,l,c]),xn();return}}s_(t,i,r,n,a)}function s_(t,e,i,n=!0,r=!1){if(r)throw t;console.error(t)}const Jt=[];let Yi=-1;const ns=[];let Rn=null,Hr=0;const hp=Promise.resolve();let Io=null;function Dr(t){const e=Io||hp;return t?e.then(this?t.bind(this):t):e}function a_(t){let e=Yi+1,i=Jt.length;for(;e<i;){const n=e+i>>>1,r=Jt[n],s=va(r);s<t||s===t&&r.flags&2?e=n+1:i=n}return e}function Au(t){if(!(t.flags&1)){const e=va(t),i=Jt[Jt.length-1];!i||!(t.flags&2)&&e>=va(i)?Jt.push(t):Jt.splice(a_(e),0,t),t.flags|=1,mp()}}function mp(){Io||(Io=hp.then(yp))}function o_(t){fe(t)?ns.push(...t):Rn&&t.id===-1?Rn.splice(Hr+1,0,t):t.flags&1||(ns.push(t),t.flags|=1),mp()}function Pf(t,e,i=Yi+1){for(;i<Jt.length;i++){const n=Jt[i];if(n&&n.flags&2){if(t&&n.id!==t.uid)continue;Jt.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function _p(t){if(ns.length){const e=[...new Set(ns)].sort((i,n)=>va(i)-va(n));if(ns.length=0,Rn){Rn.push(...e);return}for(Rn=e,Hr=0;Hr<Rn.length;Hr++){const i=Rn[Hr];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}Rn=null,Hr=0}}const va=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yp(t){try{for(Yi=0;Yi<Jt.length;Yi++){const e=Jt[Yi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ja(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yi<Jt.length;Yi++){const e=Jt[Yi];e&&(e.flags&=-2)}Yi=-1,Jt.length=0,_p(),Io=null,(Jt.length||ns.length)&&yp()}}let ni=null,bp=null;function Mo(t){const e=ni;return ni=t,bp=t&&t.type.__scopeId||null,e}function it(t,e=ni,i){if(!e||t._n)return t;const n=(...r)=>{n._d&&Wf(-1);const s=Mo(e);let a;try{a=t(...r)}finally{Mo(s),n._d&&Wf(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function jn(t,e){if(ni===null)return t;const i=ll(ni),n=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=We]=e[r];s&&(_e(s)&&(s={mounted:s,updated:s}),s.deep&&mn(a),n.push({dir:s,instance:i,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function or(t,e,i,n){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(wn(),on(l,i,8,[t.el,o,t,e]),xn())}}const vp=Symbol("_vte"),l_=t=>t.__isTeleport,Zs=t=>t&&(t.disabled||t.disabled===""),If=t=>t&&(t.defer||t.defer===""),Mf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Of=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,gc=(t,e)=>{const i=t&&t.to;return ut(i)?e?e(i):null:i},wp={name:"Teleport",__isTeleport:!0,process(t,e,i,n,r,s,a,o,l,c){const{mc:u,pc:f,pbc:g,o:{insert:d,querySelector:b,createText:_,createComment:y}}=c,p=Zs(e.props);let{shapeFlag:m,children:v,dynamicChildren:x}=e;if(t==null){const T=e.el=_(""),O=e.anchor=_("");d(T,i,n),d(O,i,n);const M=(E,P)=>{m&16&&(r&&r.isCE&&(r.ce._teleportTarget=E),u(v,E,P,r,s,a,o,l))},B=()=>{const E=e.target=gc(e.props,b),P=xp(E,e,_,d);E&&(a!=="svg"&&Mf(E)?a="svg":a!=="mathml"&&Of(E)&&(a="mathml"),p||(M(E,P),uo(e,!1)))};p&&(M(i,O),uo(e,!0)),If(e.props)?(e.el.__isMounted=!1,Yt(()=>{B(),delete e.el.__isMounted},s)):B()}else{if(If(e.props)&&t.el.__isMounted===!1){Yt(()=>{wp.process(t,e,i,n,r,s,a,o,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const T=e.anchor=t.anchor,O=e.target=t.target,M=e.targetAnchor=t.targetAnchor,B=Zs(t.props),E=B?i:O,P=B?T:M;if(a==="svg"||Mf(O)?a="svg":(a==="mathml"||Of(O))&&(a="mathml"),x?(g(t.dynamicChildren,x,E,r,s,a,o),Mu(t,e,!0)):l||f(t,e,E,P,r,s,a,o,!1),p)B?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ya(e,i,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=gc(e.props,b);R&&Ya(e,R,null,c,0)}else B&&Ya(e,O,M,c,1);uo(e,p)}},remove(t,e,i,{um:n,o:{remove:r}},s){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:u,target:f,props:g}=t;if(f&&(r(c),r(u)),s&&r(l),a&16){const d=s||!Zs(g);for(let b=0;b<o.length;b++){const _=o[b];n(_,e,i,d,!!_.dynamicChildren)}}},move:Ya,hydrate:c_};function Ya(t,e,i,{o:{insert:n},m:r},s=2){s===0&&n(t.targetAnchor,e,i);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&n(a,e,i),(!f||Zs(u))&&l&16)for(let g=0;g<c.length;g++)r(c[g],e,i,2);f&&n(o,e,i)}function c_(t,e,i,n,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:u}},f){const g=e.target=gc(e.props,l);if(g){const d=Zs(e.props),b=g._lpa||g.firstChild;if(e.shapeFlag&16)if(d)e.anchor=f(a(t),e,o(t),i,n,r,s),e.targetStart=b,e.targetAnchor=b&&a(b);else{e.anchor=a(t);let _=b;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,g._lpa=e.targetAnchor&&a(e.targetAnchor);break}}_=a(_)}e.targetAnchor||xp(g,e,u,c),f(b&&a(b),e,g,i,n,r,s)}uo(e,d)}return e.anchor&&a(e.anchor)}const u_=wp;function uo(t,e){const i=t.ctx;if(i&&i.ut){let n,r;for(e?(n=t.el,r=t.anchor):(n=t.targetStart,r=t.targetAnchor);n&&n!==r;)n.nodeType===1&&n.setAttribute("data-v-owner",i.uid),n=n.nextSibling;i.ut()}}function xp(t,e,i,n){const r=e.targetStart=i(""),s=e.targetAnchor=i("");return r[vp]=s,t&&(n(r,t),n(s,t)),s}function Eu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Eu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Tu(t,e){return _e(t)?Wt({name:t.name},e,{setup:t}):t}function kp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oo(t,e,i,n,r=!1){if(fe(t)){t.forEach((b,_)=>Oo(b,e&&(fe(e)?e[_]:e),i,n,r));return}if(Qs(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Oo(t,e,i,n.component.subTree);return}const s=n.shapeFlag&4?ll(n.component):n.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===We?o.refs={}:o.refs,f=o.setupState,g=Ne(f),d=f===We?()=>!1:b=>Fe(g,b);if(c!=null&&c!==l&&(ut(c)?(u[c]=null,d(c)&&(f[c]=null)):Bt(c)&&(c.value=null)),_e(l))ja(l,o,12,[a,u]);else{const b=ut(l),_=Bt(l);if(b||_){const y=()=>{if(t.f){const p=b?d(l)?f[l]:u[l]:l.value;r?fe(p)&&mu(p,s):fe(p)?p.includes(s)||p.push(s):b?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else b?(u[l]=a,d(l)&&(f[l]=a)):_&&(l.value=a,t.k&&(u[t.k]=a))};a?(y.id=-1,Yt(y,i)):y()}}}il().requestIdleCallback;il().cancelIdleCallback;const Qs=t=>!!t.type.__asyncLoader,Sp=t=>t.type.__isKeepAlive;function Ap(t,e){Tp(t,"a",e)}function Ep(t,e){Tp(t,"da",e)}function Tp(t,e,i=Tt){const n=t.__wdc||(t.__wdc=()=>{let r=i;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(sl(e,n,i),i){let r=i.parent;for(;r&&r.parent;)Sp(r.parent.vnode)&&f_(n,e,i,r),r=r.parent}}function f_(t,e,i,n){const r=sl(e,t,n,!0);Cp(()=>{mu(n[e],r)},i)}function sl(t,e,i=Tt,n=!1){if(i){const r=i[t]||(i[t]=[]),s=e.__weh||(e.__weh=(...a)=>{wn();const o=Na(i),l=on(e,i,t,a);return o(),xn(),l});return n?r.unshift(s):r.push(s),s}}const Tn=t=>(e,i=Tt)=>{(!xa||t==="sp")&&sl(t,(...n)=>e(...n),i)},d_=Tn("bm"),Cn=Tn("m"),g_=Tn("bu"),p_=Tn("u"),Cu=Tn("bum"),Cp=Tn("um"),h_=Tn("sp"),m_=Tn("rtg"),__=Tn("rtc");function y_(t,e=Tt){sl("ec",t,e)}const b_="components";function jr(t,e){return w_(b_,t,!0,e)||t}const v_=Symbol.for("v-ndc");function w_(t,e,i=!0,n=!1){const r=ni||Tt;if(r){const s=r.type;{const o=c1(s,!1);if(o&&(o===e||o===Oi(e)||o===tl(Oi(e))))return s}const a=zf(r[t]||s[t],e)||zf(r.appContext[t],e);return!a&&n?s:a}}function zf(t,e){return t&&(t[e]||t[Oi(e)]||t[tl(Oi(e))])}function Cr(t,e,i,n){let r;const s=i,a=fe(t);if(a||ut(t)){const o=a&&is(t);let l=!1,c=!1;o&&(l=!Ci(t),c=Yn(t),t=nl(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Co(Et(t[u])):Et(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(Qe(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const pc=t=>t?Gp(t)?ll(t):pc(t.parent):null,ea=Wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ip(t),$forceUpdate:t=>t.f||(t.f=()=>{Au(t.update)}),$nextTick:t=>t.n||(t.n=Dr.bind(t.proxy)),$watch:t=>U_.bind(t)}),Tl=(t,e)=>t!==We&&!t.__isScriptSetup&&Fe(t,e),x_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:i,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return i[e];case 3:return s[e]}else{if(Tl(n,e))return a[e]=1,n[e];if(r!==We&&Fe(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&Fe(c,e))return a[e]=3,s[e];if(i!==We&&Fe(i,e))return a[e]=4,i[e];hc&&(a[e]=0)}}const u=ea[e];let f,g;if(u)return e==="$attrs"&&Dt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(i!==We&&Fe(i,e))return a[e]=4,i[e];if(g=l.config.globalProperties,Fe(g,e))return g[e]},set({_:t},e,i){const{data:n,setupState:r,ctx:s}=t;return Tl(r,e)?(r[e]=i,!0):n!==We&&Fe(n,e)?(n[e]=i,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:n,appContext:r,propsOptions:s}},a){let o;return!!i[a]||t!==We&&Fe(t,a)||Tl(e,a)||(o=s[0])&&Fe(o,a)||Fe(n,a)||Fe(ea,a)||Fe(r.config.globalProperties,a)},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:Fe(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function Rf(t){return fe(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}let hc=!0;function k_(t){const e=Ip(t),i=t.proxy,n=t.ctx;hc=!1,e.beforeCreate&&Lf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:g,beforeUpdate:d,updated:b,activated:_,deactivated:y,beforeDestroy:p,beforeUnmount:m,destroyed:v,unmounted:x,render:T,renderTracked:O,renderTriggered:M,errorCaptured:B,serverPrefetch:E,expose:P,inheritAttrs:R,components:D,directives:q,filters:Z}=e;if(c&&S_(c,n,null),a)for(const G in a){const K=a[G];_e(K)&&(n[G]=K.bind(i))}if(r){const G=r.call(i,i);Qe(G)&&(t.data=Da(G))}if(hc=!0,s)for(const G in s){const K=s[G],ve=_e(K)?K.bind(i,i):_e(K.get)?K.get.bind(i,i):nn,I=!_e(K)&&_e(K.set)?K.set.bind(i):nn,xe=ze({get:ve,set:I});Object.defineProperty(n,G,{enumerable:!0,configurable:!0,get:()=>xe.value,set:Ie=>xe.value=Ie})}if(o)for(const G in o)Pp(o[G],n,i,G);if(l){const G=_e(l)?l.call(i):l;Reflect.ownKeys(G).forEach(K=>{fo(K,G[K])})}u&&Lf(u,t,"c");function te(G,K){fe(K)?K.forEach(ve=>G(ve.bind(i))):K&&G(K.bind(i))}if(te(d_,f),te(Cn,g),te(g_,d),te(p_,b),te(Ap,_),te(Ep,y),te(y_,B),te(__,O),te(m_,M),te(Cu,m),te(Cp,x),te(h_,E),fe(P))if(P.length){const G=t.exposed||(t.exposed={});P.forEach(K=>{Object.defineProperty(G,K,{get:()=>i[K],set:ve=>i[K]=ve})})}else t.exposed||(t.exposed={});T&&t.render===nn&&(t.render=T),R!=null&&(t.inheritAttrs=R),D&&(t.components=D),q&&(t.directives=q),E&&kp(t)}function S_(t,e,i=nn){fe(t)&&(t=mc(t));for(const n in t){const r=t[n];let s;Qe(r)?"default"in r?s=Pi(r.from||n,r.default,!0):s=Pi(r.from||n):s=Pi(r),Bt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[n]=s}}function Lf(t,e,i){on(fe(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,i)}function Pp(t,e,i,n){let r=n.includes(".")?$p(i,n):()=>i[n];if(ut(t)){const s=e[t];_e(s)&&Bi(r,s)}else if(_e(t))Bi(r,t.bind(i));else if(Qe(t))if(fe(t))t.forEach(s=>Pp(s,e,i,n));else{const s=_e(t.handler)?t.handler.bind(i):e[t.handler];_e(s)&&Bi(r,s,t)}}function Ip(t){const e=t.type,{mixins:i,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!i&&!n?l=e:(l={},r.length&&r.forEach(c=>zo(l,c,a,!0)),zo(l,e,a)),Qe(e)&&s.set(e,l),l}function zo(t,e,i,n=!1){const{mixins:r,extends:s}=e;s&&zo(t,s,i,!0),r&&r.forEach(a=>zo(t,a,i,!0));for(const a in e)if(!(n&&a==="expose")){const o=A_[a]||i&&i[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const A_={data:Df,props:jf,emits:jf,methods:Fs,computed:Fs,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Fs,directives:Fs,watch:T_,provide:Df,inject:E_};function Df(t,e){return e?t?function(){return Wt(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function E_(t,e){return Fs(mc(t),mc(e))}function mc(t){if(fe(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?Wt(Object.create(null),t,e):e}function jf(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Wt(Object.create(null),Rf(t),Rf(e??{})):e}function T_(t,e){if(!t)return e;if(!e)return t;const i=Wt(Object.create(null),t);for(const n in e)i[n]=Vt(t[n],e[n]);return i}function Mp(){return{app:null,config:{isNativeTag:w0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C_=0;function P_(t,e){return function(n,r=null){_e(n)||(n=Wt({},n)),r!=null&&!Qe(r)&&(r=null);const s=Mp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:C_++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:f1,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&_e(u.install)?(a.add(u),u.install(c,...f)):_e(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,g){if(!l){const d=c._ceVNode||ce(n,r);return d.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(d,u,g),l=!0,c._container=u,u.__vue_app__=c,ll(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(on(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=rs;rs=c;try{return u()}finally{rs=f}}};return c}}let rs=null;function fo(t,e){if(Tt){let i=Tt.provides;const n=Tt.parent&&Tt.parent.provides;n===i&&(i=Tt.provides=Object.create(n)),i[t]=e}}function Pi(t,e,i=!1){const n=Tt||ni;if(n||rs){let r=rs?rs._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return i&&_e(e)?e.call(n&&n.proxy):e}}const Op={},zp=()=>Object.create(Op),Rp=t=>Object.getPrototypeOf(t)===Op;function I_(t,e,i,n=!1){const r={},s=zp();t.propsDefaults=Object.create(null),Lp(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);i?t.props=n?r:up(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function M_(t,e,i,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=Ne(r),[l]=t.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(al(t.emitsOptions,g))continue;const d=e[g];if(l)if(Fe(s,g))d!==s[g]&&(s[g]=d,c=!0);else{const b=Oi(g);r[b]=_c(l,o,b,d,t,!1)}else d!==s[g]&&(s[g]=d,c=!0)}}}else{Lp(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Fe(e,f)&&((u=Lr(f))===f||!Fe(e,u)))&&(l?i&&(i[f]!==void 0||i[u]!==void 0)&&(r[f]=_c(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Fe(e,f))&&(delete s[f],c=!0)}c&&hn(t.attrs,"set","")}function Lp(t,e,i,n){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let u;r&&Fe(r,u=Oi(l))?!s||!s.includes(u)?i[u]=c:(o||(o={}))[u]=c:al(t.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=Ne(i),c=o||We;for(let u=0;u<s.length;u++){const f=s[u];i[f]=_c(r,l,f,c[f],t,!Fe(c,f))}}return a}function _c(t,e,i,n,r,s){const a=t[i];if(a!=null){const o=Fe(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&_e(l)){const{propsDefaults:c}=r;if(i in c)n=c[i];else{const u=Na(r);n=c[i]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(i,n)}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===Lr(i))&&(n=!0))}return n}const O_=new WeakMap;function Dp(t,e,i=!1){const n=i?O_:e.propsCache,r=n.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!_e(t)){const u=f=>{l=!0;const[g,d]=Dp(f,e,!0);Wt(a,g),d&&o.push(...d)};!i&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Qe(t)&&n.set(t,es),es;if(fe(s))for(let u=0;u<s.length;u++){const f=Oi(s[u]);Nf(f)&&(a[f]=We)}else if(s)for(const u in s){const f=Oi(u);if(Nf(f)){const g=s[u],d=a[f]=fe(g)||_e(g)?{type:g}:Wt({},g),b=d.type;let _=!1,y=!0;if(fe(b))for(let p=0;p<b.length;++p){const m=b[p],v=_e(m)&&m.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(y=!1)}else _=_e(b)&&b.name==="Boolean";d[0]=_,d[1]=y,(_||Fe(d,"default"))&&o.push(f)}}const c=[a,o];return Qe(t)&&n.set(t,c),c}function Nf(t){return t[0]!=="$"&&!Xs(t)}const Pu=t=>t[0]==="_"||t==="$stable",Iu=t=>fe(t)?t.map(Ki):[Ki(t)],z_=(t,e,i)=>{if(e._n)return e;const n=it((...r)=>Iu(e(...r)),i);return n._c=!1,n},jp=(t,e,i)=>{const n=t._ctx;for(const r in t){if(Pu(r))continue;const s=t[r];if(_e(s))e[r]=z_(r,s,n);else if(s!=null){const a=Iu(s);e[r]=()=>a}}},Np=(t,e)=>{const i=Iu(e);t.slots.default=()=>i},Fp=(t,e,i)=>{for(const n in e)(i||!Pu(n))&&(t[n]=e[n])},R_=(t,e,i)=>{const n=t.slots=zp();if(t.vnode.shapeFlag&32){const r=e._;r?(Fp(n,e,i),i&&Vg(n,"_",r,!0)):jp(e,n)}else e&&Np(t,e)},L_=(t,e,i)=>{const{vnode:n,slots:r}=t;let s=!0,a=We;if(n.shapeFlag&32){const o=e._;o?i&&o===1?s=!1:Fp(r,e,i):(s=!e.$stable,jp(e,r)),a=e}else e&&(Np(t,e),a={default:1});if(s)for(const o in r)!Pu(o)&&a[o]==null&&delete r[o]},Yt=K_;function D_(t){return j_(t)}function j_(t,e){const i=il();i.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:g,setScopeId:d=nn,insertStaticContent:b}=t,_=(k,w,C,L=null,j=null,A=null,H=void 0,U=null,W=!!w.dynamicChildren)=>{if(k===w)return;k&&!Os(k,w)&&(L=z(k),Ie(k,j,A,!0),k=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:F,ref:ie,shapeFlag:Y}=w;switch(F){case ol:y(k,w,C,L);break;case qn:p(k,w,C,L);break;case go:k==null&&m(w,C,L,H);break;case yt:D(k,w,C,L,j,A,H,U,W);break;default:Y&1?T(k,w,C,L,j,A,H,U,W):Y&6?q(k,w,C,L,j,A,H,U,W):(Y&64||Y&128)&&F.process(k,w,C,L,j,A,H,U,W,J)}ie!=null&&j&&Oo(ie,k&&k.ref,A,w||k,!w)},y=(k,w,C,L)=>{if(k==null)n(w.el=o(w.children),C,L);else{const j=w.el=k.el;w.children!==k.children&&c(j,w.children)}},p=(k,w,C,L)=>{k==null?n(w.el=l(w.children||""),C,L):w.el=k.el},m=(k,w,C,L)=>{[k.el,k.anchor]=b(k.children,w,C,L,k.el,k.anchor)},v=({el:k,anchor:w},C,L)=>{let j;for(;k&&k!==w;)j=g(k),n(k,C,L),k=j;n(w,C,L)},x=({el:k,anchor:w})=>{let C;for(;k&&k!==w;)C=g(k),r(k),k=C;r(w)},T=(k,w,C,L,j,A,H,U,W)=>{w.type==="svg"?H="svg":w.type==="math"&&(H="mathml"),k==null?O(w,C,L,j,A,H,U,W):E(k,w,j,A,H,U,W)},O=(k,w,C,L,j,A,H,U)=>{let W,F;const{props:ie,shapeFlag:Y,transition:ne,dirs:ee}=k;if(W=k.el=a(k.type,A,ie&&ie.is,ie),Y&8?u(W,k.children):Y&16&&B(k.children,W,null,L,j,Cl(k,A),H,U),ee&&or(k,null,L,"created"),M(W,k,k.scopeId,H,L),ie){for(const le in ie)le!=="value"&&!Xs(le)&&s(W,le,null,ie[le],A,L);"value"in ie&&s(W,"value",null,ie.value,A),(F=ie.onVnodeBeforeMount)&&Gi(F,L,k)}ee&&or(k,null,L,"beforeMount");const ge=N_(j,ne);ge&&ne.beforeEnter(W),n(W,w,C),((F=ie&&ie.onVnodeMounted)||ge||ee)&&Yt(()=>{F&&Gi(F,L,k),ge&&ne.enter(W),ee&&or(k,null,L,"mounted")},j)},M=(k,w,C,L,j)=>{if(C&&d(k,C),L)for(let A=0;A<L.length;A++)d(k,L[A]);if(j){let A=j.subTree;if(w===A||Up(A.type)&&(A.ssContent===w||A.ssFallback===w)){const H=j.vnode;M(k,H,H.scopeId,H.slotScopeIds,j.parent)}}},B=(k,w,C,L,j,A,H,U,W=0)=>{for(let F=W;F<k.length;F++){const ie=k[F]=U?Ln(k[F]):Ki(k[F]);_(null,ie,w,C,L,j,A,H,U)}},E=(k,w,C,L,j,A,H)=>{const U=w.el=k.el;let{patchFlag:W,dynamicChildren:F,dirs:ie}=w;W|=k.patchFlag&16;const Y=k.props||We,ne=w.props||We;let ee;if(C&&lr(C,!1),(ee=ne.onVnodeBeforeUpdate)&&Gi(ee,C,w,k),ie&&or(w,k,C,"beforeUpdate"),C&&lr(C,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&u(U,""),F?P(k.dynamicChildren,F,U,C,L,Cl(w,j),A):H||K(k,w,U,null,C,L,Cl(w,j),A,!1),W>0){if(W&16)R(U,Y,ne,C,j);else if(W&2&&Y.class!==ne.class&&s(U,"class",null,ne.class,j),W&4&&s(U,"style",Y.style,ne.style,j),W&8){const ge=w.dynamicProps;for(let le=0;le<ge.length;le++){const be=ge[le],Ue=Y[be],Xe=ne[be];(Xe!==Ue||be==="value")&&s(U,be,Ue,Xe,j,C)}}W&1&&k.children!==w.children&&u(U,w.children)}else!H&&F==null&&R(U,Y,ne,C,j);((ee=ne.onVnodeUpdated)||ie)&&Yt(()=>{ee&&Gi(ee,C,w,k),ie&&or(w,k,C,"updated")},L)},P=(k,w,C,L,j,A,H)=>{for(let U=0;U<w.length;U++){const W=k[U],F=w[U],ie=W.el&&(W.type===yt||!Os(W,F)||W.shapeFlag&198)?f(W.el):C;_(W,F,ie,null,L,j,A,H,!0)}},R=(k,w,C,L,j)=>{if(w!==C){if(w!==We)for(const A in w)!Xs(A)&&!(A in C)&&s(k,A,w[A],null,j,L);for(const A in C){if(Xs(A))continue;const H=C[A],U=w[A];H!==U&&A!=="value"&&s(k,A,U,H,j,L)}"value"in C&&s(k,"value",w.value,C.value,j)}},D=(k,w,C,L,j,A,H,U,W)=>{const F=w.el=k?k.el:o(""),ie=w.anchor=k?k.anchor:o("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ee}=w;ee&&(U=U?U.concat(ee):ee),k==null?(n(F,C,L),n(ie,C,L),B(w.children||[],C,ie,j,A,H,U,W)):Y>0&&Y&64&&ne&&k.dynamicChildren?(P(k.dynamicChildren,ne,C,j,A,H,U),(w.key!=null||j&&w===j.subTree)&&Mu(k,w,!0)):K(k,w,C,ie,j,A,H,U,W)},q=(k,w,C,L,j,A,H,U,W)=>{w.slotScopeIds=U,k==null?w.shapeFlag&512?j.ctx.activate(w,C,L,H,W):Z(w,C,L,j,A,H,W):se(k,w,W)},Z=(k,w,C,L,j,A,H)=>{const U=k.component=n1(k,L,j);if(Sp(k)&&(U.ctx.renderer=J),s1(U,!1,H),U.asyncDep){if(j&&j.registerDep(U,te,H),!k.el){const W=U.subTree=ce(qn);p(null,W,w,C)}}else te(U,k,w,C,j,A,H)},se=(k,w,C)=>{const L=w.component=k.component;if(q_(k,w,C))if(L.asyncDep&&!L.asyncResolved){G(L,w,C);return}else L.next=w,L.update();else w.el=k.el,L.vnode=w},te=(k,w,C,L,j,A,H)=>{const U=()=>{if(k.isMounted){let{next:Y,bu:ne,u:ee,parent:ge,vnode:le}=k;{const Re=Bp(k);if(Re){Y&&(Y.el=le.el,G(k,Y,H)),Re.asyncDep.then(()=>{k.isUnmounted||U()});return}}let be=Y,Ue;lr(k,!1),Y?(Y.el=le.el,G(k,Y,H)):Y=le,ne&&co(ne),(Ue=Y.props&&Y.props.onVnodeBeforeUpdate)&&Gi(Ue,ge,Y,le),lr(k,!0);const Xe=Bf(k),It=k.subTree;k.subTree=Xe,_(It,Xe,f(It.el),z(It),k,j,A),Y.el=Xe.el,be===null&&X_(k,Xe.el),ee&&Yt(ee,j),(Ue=Y.props&&Y.props.onVnodeUpdated)&&Yt(()=>Gi(Ue,ge,Y,le),j)}else{let Y;const{el:ne,props:ee}=w,{bm:ge,m:le,parent:be,root:Ue,type:Xe}=k,It=Qs(w);lr(k,!1),ge&&co(ge),!It&&(Y=ee&&ee.onVnodeBeforeMount)&&Gi(Y,be,w),lr(k,!0);{Ue.ce&&Ue.ce._injectChildStyle(Xe);const Re=k.subTree=Bf(k);_(null,Re,C,L,k,j,A),w.el=Re.el}if(le&&Yt(le,j),!It&&(Y=ee&&ee.onVnodeMounted)){const Re=w;Yt(()=>Gi(Y,be,Re),j)}(w.shapeFlag&256||be&&Qs(be.vnode)&&be.vnode.shapeFlag&256)&&k.a&&Yt(k.a,j),k.isMounted=!0,w=C=L=null}};k.scope.on();const W=k.effect=new Kg(U);k.scope.off();const F=k.update=W.run.bind(W),ie=k.job=W.runIfDirty.bind(W);ie.i=k,ie.id=k.uid,W.scheduler=()=>Au(ie),lr(k,!0),F()},G=(k,w,C)=>{w.component=k;const L=k.vnode.props;k.vnode=w,k.next=null,M_(k,w.props,L,C),L_(k,w.children,C),wn(),Pf(k),xn()},K=(k,w,C,L,j,A,H,U,W=!1)=>{const F=k&&k.children,ie=k?k.shapeFlag:0,Y=w.children,{patchFlag:ne,shapeFlag:ee}=w;if(ne>0){if(ne&128){I(F,Y,C,L,j,A,H,U,W);return}else if(ne&256){ve(F,Y,C,L,j,A,H,U,W);return}}ee&8?(ie&16&&Oe(F,j,A),Y!==F&&u(C,Y)):ie&16?ee&16?I(F,Y,C,L,j,A,H,U,W):Oe(F,j,A,!0):(ie&8&&u(C,""),ee&16&&B(Y,C,L,j,A,H,U,W))},ve=(k,w,C,L,j,A,H,U,W)=>{k=k||es,w=w||es;const F=k.length,ie=w.length,Y=Math.min(F,ie);let ne;for(ne=0;ne<Y;ne++){const ee=w[ne]=W?Ln(w[ne]):Ki(w[ne]);_(k[ne],ee,C,null,j,A,H,U,W)}F>ie?Oe(k,j,A,!0,!1,Y):B(w,C,L,j,A,H,U,W,Y)},I=(k,w,C,L,j,A,H,U,W)=>{let F=0;const ie=w.length;let Y=k.length-1,ne=ie-1;for(;F<=Y&&F<=ne;){const ee=k[F],ge=w[F]=W?Ln(w[F]):Ki(w[F]);if(Os(ee,ge))_(ee,ge,C,null,j,A,H,U,W);else break;F++}for(;F<=Y&&F<=ne;){const ee=k[Y],ge=w[ne]=W?Ln(w[ne]):Ki(w[ne]);if(Os(ee,ge))_(ee,ge,C,null,j,A,H,U,W);else break;Y--,ne--}if(F>Y){if(F<=ne){const ee=ne+1,ge=ee<ie?w[ee].el:L;for(;F<=ne;)_(null,w[F]=W?Ln(w[F]):Ki(w[F]),C,ge,j,A,H,U,W),F++}}else if(F>ne)for(;F<=Y;)Ie(k[F],j,A,!0),F++;else{const ee=F,ge=F,le=new Map;for(F=ge;F<=ne;F++){const ft=w[F]=W?Ln(w[F]):Ki(w[F]);ft.key!=null&&le.set(ft.key,F)}let be,Ue=0;const Xe=ne-ge+1;let It=!1,Re=0;const Wi=new Array(Xe);for(F=0;F<Xe;F++)Wi[F]=0;for(F=ee;F<=Y;F++){const ft=k[F];if(Ue>=Xe){Ie(ft,j,A,!0);continue}let kt;if(ft.key!=null)kt=le.get(ft.key);else for(be=ge;be<=ne;be++)if(Wi[be-ge]===0&&Os(ft,w[be])){kt=be;break}kt===void 0?Ie(ft,j,A,!0):(Wi[kt-ge]=F+1,kt>=Re?Re=kt:It=!0,_(ft,w[kt],C,null,j,A,H,U,W),Ue++)}const xi=It?F_(Wi):es;for(be=xi.length-1,F=Xe-1;F>=0;F--){const ft=ge+F,kt=w[ft],zi=ft+1<ie?w[ft+1].el:L;Wi[F]===0?_(null,kt,C,zi,j,A,H,U,W):It&&(be<0||F!==xi[be]?xe(kt,C,zi,2):be--)}}},xe=(k,w,C,L,j=null)=>{const{el:A,type:H,transition:U,children:W,shapeFlag:F}=k;if(F&6){xe(k.component.subTree,w,C,L);return}if(F&128){k.suspense.move(w,C,L);return}if(F&64){H.move(k,w,C,J);return}if(H===yt){n(A,w,C);for(let Y=0;Y<W.length;Y++)xe(W[Y],w,C,L);n(k.anchor,w,C);return}if(H===go){v(k,w,C);return}if(L!==2&&F&1&&U)if(L===0)U.beforeEnter(A),n(A,w,C),Yt(()=>U.enter(A),j);else{const{leave:Y,delayLeave:ne,afterLeave:ee}=U,ge=()=>{k.ctx.isUnmounted?r(A):n(A,w,C)},le=()=>{Y(A,()=>{ge(),ee&&ee()})};ne?ne(A,ge,le):le()}else n(A,w,C)},Ie=(k,w,C,L=!1,j=!1)=>{const{type:A,props:H,ref:U,children:W,dynamicChildren:F,shapeFlag:ie,patchFlag:Y,dirs:ne,cacheIndex:ee}=k;if(Y===-2&&(j=!1),U!=null&&(wn(),Oo(U,null,C,k,!0),xn()),ee!=null&&(w.renderCache[ee]=void 0),ie&256){w.ctx.deactivate(k);return}const ge=ie&1&&ne,le=!Qs(k);let be;if(le&&(be=H&&H.onVnodeBeforeUnmount)&&Gi(be,w,k),ie&6)Ye(k.component,C,L);else{if(ie&128){k.suspense.unmount(C,L);return}ge&&or(k,null,w,"beforeUnmount"),ie&64?k.type.remove(k,w,C,J,L):F&&!F.hasOnce&&(A!==yt||Y>0&&Y&64)?Oe(F,w,C,!1,!0):(A===yt&&Y&384||!j&&ie&16)&&Oe(W,w,C),L&&at(k)}(le&&(be=H&&H.onVnodeUnmounted)||ge)&&Yt(()=>{be&&Gi(be,w,k),ge&&or(k,null,w,"unmounted")},C)},at=k=>{const{type:w,el:C,anchor:L,transition:j}=k;if(w===yt){Me(C,L);return}if(w===go){x(k);return}const A=()=>{r(C),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(k.shapeFlag&1&&j&&!j.persisted){const{leave:H,delayLeave:U}=j,W=()=>H(C,A);U?U(k.el,A,W):W()}else A()},Me=(k,w)=>{let C;for(;k!==w;)C=g(k),r(k),k=C;r(w)},Ye=(k,w,C)=>{const{bum:L,scope:j,job:A,subTree:H,um:U,m:W,a:F,parent:ie,slots:{__:Y}}=k;Ff(W),Ff(F),L&&co(L),ie&&fe(Y)&&Y.forEach(ne=>{ie.renderCache[ne]=void 0}),j.stop(),A&&(A.flags|=8,Ie(H,k,w,C)),U&&Yt(U,w),Yt(()=>{k.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Oe=(k,w,C,L=!1,j=!1,A=0)=>{for(let H=A;H<k.length;H++)Ie(k[H],w,C,L,j)},z=k=>{if(k.shapeFlag&6)return z(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const w=g(k.anchor||k.el),C=w&&w[vp];return C?g(C):w};let V=!1;const N=(k,w,C)=>{k==null?w._vnode&&Ie(w._vnode,null,null,!0):_(w._vnode||null,k,w,null,null,null,C),w._vnode=k,V||(V=!0,Pf(),_p(),V=!1)},J={p:_,um:Ie,m:xe,r:at,mt:Z,mc:B,pc:K,pbc:P,n:z,o:t};return{render:N,hydrate:void 0,createApp:P_(N)}}function Cl({type:t,props:e},i){return i==="svg"&&t==="foreignObject"||i==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:i}function lr({effect:t,job:e},i){i?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function N_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Mu(t,e,i=!1){const n=t.children,r=e.children;if(fe(n)&&fe(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ln(r[s]),o.el=a.el),!i&&o.patchFlag!==-2&&Mu(a,o)),o.type===ol&&(o.el=a.el),o.type===qn&&!o.el&&(o.el=a.el)}}function F_(t){const e=t.slice(),i=[0];let n,r,s,a,o;const l=t.length;for(n=0;n<l;n++){const c=t[n];if(c!==0){if(r=i[i.length-1],t[r]<c){e[n]=r,i.push(n);continue}for(s=0,a=i.length-1;s<a;)o=s+a>>1,t[i[o]]<c?s=o+1:a=o;c<t[i[s]]&&(s>0&&(e[n]=i[s-1]),i[s]=n)}}for(s=i.length,a=i[s-1];s-- >0;)i[s]=a,a=e[a];return i}function Bp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bp(e)}function Ff(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const B_=Symbol.for("v-scx"),$_=()=>Pi(B_);function W_(t,e){return Ou(t,null,e)}function Bi(t,e,i){return Ou(t,e,i)}function Ou(t,e,i=We){const{immediate:n,deep:r,flush:s,once:a}=i,o=Wt({},i),l=e&&n||!e&&s!=="post";let c;if(xa){if(s==="sync"){const d=$_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=nn,d.resume=nn,d.pause=nn,d}}const u=Tt;o.call=(d,b,_)=>on(d,u,b,_);let f=!1;s==="post"?o.scheduler=d=>{Yt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,b)=>{b?d():Au(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const g=r_(t,e,o);return xa&&(c?c.push(g):l&&g()),g}function U_(t,e,i){const n=this.proxy,r=ut(t)?t.includes(".")?$p(n,t):()=>n[t]:t.bind(n,n);let s;_e(e)?s=e:(s=e.handler,i=e);const a=Na(this),o=Ou(r,s.bind(n),i);return a(),o}function $p(t,e){const i=e.split(".");return()=>{let n=t;for(let r=0;r<i.length&&n;r++)n=n[i[r]];return n}}const H_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Oi(e)}Modifiers`]||t[`${Lr(e)}Modifiers`];function V_(t,e,...i){if(t.isUnmounted)return;const n=t.vnode.props||We;let r=i;const s=e.startsWith("update:"),a=s&&H_(n,e.slice(7));a&&(a.trim&&(r=i.map(u=>ut(u)?u.trim():u)),a.number&&(r=i.map(lc)));let o,l=n[o=xl(e)]||n[o=xl(Oi(e))];!l&&s&&(l=n[o=xl(Lr(e))]),l&&on(l,t,6,r);const c=n[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,on(c,t,6,r)}}function Wp(t,e,i=!1){const n=e.emitsCache,r=n.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!_e(t)){const l=c=>{const u=Wp(c,e,!0);u&&(o=!0,Wt(a,u))};!i&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(Qe(t)&&n.set(t,null),null):(fe(s)?s.forEach(l=>a[l]=null):Wt(a,s),Qe(t)&&n.set(t,a),a)}function al(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,Lr(e))||Fe(t,e))}function Bf(t){const{type:e,vnode:i,proxy:n,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:g,setupState:d,ctx:b,inheritAttrs:_}=t,y=Mo(t);let p,m;try{if(i.shapeFlag&4){const x=r||n,T=x;p=Ki(c.call(T,x,u,f,d,g,b)),m=o}else{const x=e;p=Ki(x.length>1?x(f,{attrs:o,slots:a,emit:l}):x(f,null)),m=e.props?o:G_(o)}}catch(x){ta.length=0,rl(x,t,1),p=ce(qn)}let v=p;if(m&&_!==!1){const x=Object.keys(m),{shapeFlag:T}=v;x.length&&T&7&&(s&&x.some(hu)&&(m=Y_(m,s)),v=hs(v,m,!1,!0))}return i.dirs&&(v=hs(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(i.dirs):i.dirs),i.transition&&Eu(v,i.transition),p=v,Mo(y),p}const G_=t=>{let e;for(const i in t)(i==="class"||i==="style"||Zo(i))&&((e||(e={}))[i]=t[i]);return e},Y_=(t,e)=>{const i={};for(const n in t)(!hu(n)||!(n.slice(9)in e))&&(i[n]=t[n]);return i};function q_(t,e,i){const{props:n,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return n?$f(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(a[g]!==n[g]&&!al(c,g))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?$f(n,a,c):!0:!!a;return!1}function $f(t,e,i){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==t[s]&&!al(i,s))return!0}return!1}function X_({vnode:t,parent:e},i){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.el=t.el),n===t)(t=e.vnode).el=i,e=e.parent;else break}}const Up=t=>t.__isSuspense;function K_(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):o_(t)}const yt=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),ta=[];let mi=null;function ue(t=!1){ta.push(mi=t?null:[])}function J_(){ta.pop(),mi=ta[ta.length-1]||null}let wa=1;function Wf(t,e=!1){wa+=t,t<0&&mi&&e&&(mi.hasOnce=!0)}function Hp(t){return t.dynamicChildren=wa>0?mi||es:null,J_(),wa>0&&mi&&mi.push(t),t}function me(t,e,i,n,r,s){return Hp(h(t,e,i,n,r,s,!0))}function zu(t,e,i,n,r){return Hp(ce(t,e,i,n,r,!0))}function Ro(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const Vp=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?ut(t)||Bt(t)||_e(t)?{i:ni,r:t,k:e,f:!!i}:t:null);function h(t,e=null,i=null,n=0,r=null,s=t===yt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vp(e),ref:e&&po(e),scopeId:bp,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ni};return o?(Ru(l,i),s&128&&t.normalize(l)):i&&(l.shapeFlag|=ut(i)?8:16),wa>0&&!a&&mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mi.push(l),l}const ce=Z_;function Z_(t,e=null,i=null,n=0,r=null,s=!1){if((!t||t===v_)&&(t=qn),Ro(t)){const o=hs(t,e,!0);return i&&Ru(o,i),wa>0&&!s&&mi&&(o.shapeFlag&6?mi[mi.indexOf(t)]=o:mi.push(o)),o.patchFlag=-2,o}if(u1(t)&&(t=t.__vccOpts),e){e=Q_(e);let{class:o,style:l}=e;o&&!ut(o)&&(e.class=ps(o)),Qe(l)&&(Su(l)&&!fe(l)&&(l=Wt({},l)),e.style=gs(l))}const a=ut(t)?1:Up(t)?128:l_(t)?64:Qe(t)?4:_e(t)?2:0;return h(t,e,i,n,r,a,s,!0)}function Q_(t){return t?Su(t)||Rp(t)?Wt({},t):t:null}function hs(t,e,i=!1,n=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?e1(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Vp(c),ref:e&&e.ref?i&&s?fe(s)?s.concat(po(e)):[s,po(e)]:po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&n&&Eu(u,l.clone(u)),u}function Je(t=" ",e=0){return ce(ol,null,t,e)}function Ii(t,e){const i=ce(go,null,t);return i.staticCount=e,i}function hr(t="",e=!1){return e?(ue(),zu(qn,null,t)):ce(qn,null,t)}function Ki(t){return t==null||typeof t=="boolean"?ce(qn):fe(t)?ce(yt,null,t.slice()):Ro(t)?Ln(t):ce(ol,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function Ru(t,e){let i=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(fe(e))i=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Ru(t,r()),r._c&&(r._d=!0));return}else{i=32;const r=e._;!r&&!Rp(e)?e._ctx=ni:r===3&&ni&&(ni.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:ni},i=32):(e=String(e),n&64?(i=16,e=[Je(e)]):i=8);t.children=e,t.shapeFlag|=i}function e1(...t){const e={};for(let i=0;i<t.length;i++){const n=t[i];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=ps([e.class,n.class]));else if(r==="style")e.style=gs([e.style,n.style]);else if(Zo(r)){const s=e[r],a=n[r];a&&s!==a&&!(fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function Gi(t,e,i,n=null){on(t,e,7,[i,n])}const t1=Mp();let i1=0;function n1(t,e,i){const n=t.type,r=(e?e.appContext:t.appContext)||t1,s={uid:i1++,vnode:t,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dp(n,r),emitsOptions:Wp(n,r),emit:null,emitted:null,propsDefaults:We,inheritAttrs:n.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=V_.bind(null,s),t.ce&&t.ce(s),s}let Tt=null;const r1=()=>Tt||ni;let Lo,yc;{const t=il(),e=(i,n)=>{let r;return(r=t[i])||(r=t[i]=[]),r.push(n),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Lo=e("__VUE_INSTANCE_SETTERS__",i=>Tt=i),yc=e("__VUE_SSR_SETTERS__",i=>xa=i)}const Na=t=>{const e=Tt;return Lo(t),t.scope.on(),()=>{t.scope.off(),Lo(e)}},Uf=()=>{Tt&&Tt.scope.off(),Lo(null)};function Gp(t){return t.vnode.shapeFlag&4}let xa=!1;function s1(t,e=!1,i=!1){e&&yc(e);const{props:n,children:r}=t.vnode,s=Gp(t);I_(t,n,s,e),R_(t,r,i||e);const a=s?a1(t,e):void 0;return e&&yc(!1),a}function a1(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,x_);const{setup:n}=i;if(n){wn();const r=t.setupContext=n.length>1?l1(t):null,s=Na(t),a=ja(n,t,0,[t.props,r]),o=Wg(a);if(xn(),s(),(o||t.sp)&&!Qs(t)&&kp(t),o){if(a.then(Uf,Uf),e)return a.then(l=>{Hf(t,l)}).catch(l=>{rl(l,t,0)});t.asyncDep=a}else Hf(t,a)}else Yp(t)}function Hf(t,e,i){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=pp(e)),Yp(t)}function Yp(t,e,i){const n=t.type;t.render||(t.render=n.render||nn);{const r=Na(t);wn();try{k_(t)}finally{xn(),r()}}}const o1={get(t,e){return Dt(t,"get",""),t[e]}};function l1(t){const e=i=>{t.exposed=i||{}};return{attrs:new Proxy(t.attrs,o1),slots:t.slots,emit:t.emit,expose:e}}function ll(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pp(dp(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in ea)return ea[i](t)},has(e,i){return i in e||i in ea}})):t.proxy}function c1(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function u1(t){return _e(t)&&"__vccOpts"in t}const ze=(t,e)=>i_(t,e,xa);function Lu(t,e,i){const n=arguments.length;return n===2?Qe(e)&&!fe(e)?Ro(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(n>3?i=Array.prototype.slice.call(arguments,2):n===3&&Ro(i)&&(i=[i]),ce(t,e,i))}const f1="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bc;const Vf=typeof window<"u"&&window.trustedTypes;if(Vf)try{bc=Vf.createPolicy("vue",{createHTML:t=>t})}catch{}const qp=bc?t=>bc.createHTML(t):t=>t,d1="http://www.w3.org/2000/svg",g1="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,Gf=dn&&dn.createElement("template"),p1={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,n)=>{const r=e==="svg"?dn.createElementNS(d1,t):e==="mathml"?dn.createElementNS(g1,t):i?dn.createElement(t,{is:i}):dn.createElement(t);return t==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,n,r,s){const a=i?i.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),i),!(r===s||!(r=r.nextSibling)););else{Gf.innerHTML=qp(n==="svg"?`<svg>${t}</svg>`:n==="mathml"?`<math>${t}</math>`:t);const o=Gf.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,i)}return[a?a.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}},h1=Symbol("_vtc");function m1(t,e,i){const n=t[h1];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}const Do=Symbol("_vod"),Xp=Symbol("_vsh"),vc={beforeMount(t,{value:e},{transition:i}){t[Do]=t.style.display==="none"?"":t.style.display,i&&e?i.beforeEnter(t):zs(t,e)},mounted(t,{value:e},{transition:i}){i&&e&&i.enter(t)},updated(t,{value:e,oldValue:i},{transition:n}){!e!=!i&&(n?e?(n.beforeEnter(t),zs(t,!0),n.enter(t)):n.leave(t,()=>{zs(t,!1)}):zs(t,e))},beforeUnmount(t,{value:e}){zs(t,e)}};function zs(t,e){t.style.display=e?t[Do]:"none",t[Xp]=!e}const _1=Symbol(""),y1=/(^|;)\s*display\s*:/;function b1(t,e,i){const n=t.style,r=ut(i);let s=!1;if(i&&!r){if(e)if(ut(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();i[o]==null&&ho(n,o,"")}else for(const a in e)i[a]==null&&ho(n,a,"");for(const a in i)a==="display"&&(s=!0),ho(n,a,i[a])}else if(r){if(e!==i){const a=n[_1];a&&(i+=";"+a),n.cssText=i,s=y1.test(i)}}else e&&t.removeAttribute("style");Do in t&&(t[Do]=s?n.display:"",t[Xp]&&(n.display="none"))}const Yf=/\s*!important$/;function ho(t,e,i){if(fe(i))i.forEach(n=>ho(t,e,n));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const n=v1(t,e);Yf.test(i)?t.setProperty(Lr(n),i.replace(Yf,""),"important"):t[n]=i}}const qf=["Webkit","Moz","ms"],Pl={};function v1(t,e){const i=Pl[e];if(i)return i;let n=Oi(e);if(n!=="filter"&&n in t)return Pl[e]=n;n=tl(n);for(let r=0;r<qf.length;r++){const s=qf[r]+n;if(s in t)return Pl[e]=s}return e}const Xf="http://www.w3.org/1999/xlink";function Kf(t,e,i,n,r,s=M0(e)){n&&e.startsWith("xlink:")?i==null?t.removeAttributeNS(Xf,e.slice(6,e.length)):t.setAttributeNS(Xf,e,i):i==null||s&&!Gg(i)?t.removeAttribute(e):t.setAttribute(e,s?"":tr(i)?String(i):i)}function Jf(t,e,i,n,r){if(e==="innerHTML"||e==="textContent"){i!=null&&(t[e]=e==="innerHTML"?qp(i):i);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=i==null?t.type==="checkbox"?"on":"":String(i);(o!==l||!("_value"in t))&&(t.value=l),i==null&&t.removeAttribute(e),t._value=i;return}let a=!1;if(i===""||i==null){const o=typeof t[e];o==="boolean"?i=Gg(i):i==null&&o==="string"?(i="",a=!0):o==="number"&&(i=0,a=!0)}try{t[e]=i}catch{}a&&t.removeAttribute(r||e)}function Vr(t,e,i,n){t.addEventListener(e,i,n)}function w1(t,e,i,n){t.removeEventListener(e,i,n)}const Zf=Symbol("_vei");function x1(t,e,i,n,r=null){const s=t[Zf]||(t[Zf]={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=k1(e);if(n){const c=s[e]=E1(n,r);Vr(t,o,c,l)}else a&&(w1(t,o,a,l),s[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function k1(t){let e;if(Qf.test(t)){e={};let n;for(;n=t.match(Qf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let Il=0;const S1=Promise.resolve(),A1=()=>Il||(S1.then(()=>Il=0),Il=Date.now());function E1(t,e){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;on(T1(n,i.value),e,5,[n])};return i.value=t,i.attached=A1(),i}function T1(t,e){if(fe(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const ed=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,C1=(t,e,i,n,r,s)=>{const a=r==="svg";e==="class"?m1(t,n,a):e==="style"?b1(t,i,n):Zo(e)?hu(e)||x1(t,e,i,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):P1(t,e,n,a))?(Jf(t,e,n),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kf(t,e,n,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ut(n))?Jf(t,Oi(e),n,s,e):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),Kf(t,e,n,a))};function P1(t,e,i,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in t&&ed(e)&&_e(i));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ed(e)&&ut(i)?!1:e in t}const td=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?i=>co(e,i):e};function I1(t){t.target.composing=!0}function id(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ml=Symbol("_assign"),Bs={created(t,{modifiers:{lazy:e,trim:i,number:n}},r){t[Ml]=td(r);const s=n||r.props&&r.props.type==="number";Vr(t,e?"change":"input",a=>{if(a.target.composing)return;let o=t.value;i&&(o=o.trim()),s&&(o=lc(o)),t[Ml](o)}),i&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",I1),Vr(t,"compositionend",id),Vr(t,"change",id))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:i,modifiers:{lazy:n,trim:r,number:s}},a){if(t[Ml]=td(a),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?lc(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n&&e===i||r&&t.value.trim()===l)||(t.value=l))}},M1=["ctrl","shift","alt","meta"],O1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>M1.some(i=>t[`${i}Key`]&&!e.includes(i))},vr=(t,e)=>{const i=t._withMods||(t._withMods={}),n=e.join(".");return i[n]||(i[n]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=O1[e[a]];if(o&&o(r,e))return}return t(r,...s)})},z1=Wt({patchProp:C1},p1);let nd;function R1(){return nd||(nd=D_(z1))}const L1=(...t)=>{const e=R1().createApp(...t),{mount:i}=e;return e.mount=n=>{const r=j1(n);if(!r)return;const s=e._component;!_e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=i(r,!1,D1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function D1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function j1(t){return ut(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const N1=Symbol();var rd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rd||(rd={}));function F1(){const t=O0(!0),e=t.run(()=>Ge({}));let i=[],n=[];const r=dp({install(s){r._a=s,s.provide(N1,r),s.config.globalProperties.$pinia=r,n.forEach(a=>i.push(a)),n=[]},use(s){return this._a?i.push(s):n.push(s),this},_p:i,_a:null,_e:t,_s:new Map,state:e});return r}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof document<"u";function Kp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function B1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Kp(t.default)}const De=Object.assign;function Ol(t,e){const i={};for(const n in e){const r=e[n];i[n]=$i(r)?r.map(t):t(r)}return i}const ia=()=>{},$i=Array.isArray,Jp=/#/g,$1=/&/g,W1=/\//g,U1=/=/g,H1=/\?/g,Zp=/\+/g,V1=/%5B/g,G1=/%5D/g,Qp=/%5E/g,Y1=/%60/g,eh=/%7B/g,q1=/%7C/g,th=/%7D/g,X1=/%20/g;function Du(t){return encodeURI(""+t).replace(q1,"|").replace(V1,"[").replace(G1,"]")}function K1(t){return Du(t).replace(eh,"{").replace(th,"}").replace(Qp,"^")}function wc(t){return Du(t).replace(Zp,"%2B").replace(X1,"+").replace(Jp,"%23").replace($1,"%26").replace(Y1,"`").replace(eh,"{").replace(th,"}").replace(Qp,"^")}function J1(t){return wc(t).replace(U1,"%3D")}function Z1(t){return Du(t).replace(Jp,"%23").replace(H1,"%3F")}function Q1(t){return t==null?"":Z1(t).replace(W1,"%2F")}function ka(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ey=/\/$/,ty=t=>t.replace(ey,"");function zl(t,e,i="/"){let n,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(n=n||e.slice(0,o),a=e.slice(o,e.length)),n=sy(n??e,i),{fullPath:n+(s&&"?")+s+a,path:n,query:r,hash:ka(a)}}function iy(t,e){const i=e.query?t(e.query):"";return e.path+(i&&"?")+i+(e.hash||"")}function sd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ny(t,e,i){const n=e.matched.length-1,r=i.matched.length-1;return n>-1&&n===r&&ms(e.matched[n],i.matched[r])&&ih(e.params,i.params)&&t(e.query)===t(i.query)&&e.hash===i.hash}function ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ih(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i in t)if(!ry(t[i],e[i]))return!1;return!0}function ry(t,e){return $i(t)?ad(t,e):$i(e)?ad(e,t):t===e}function ad(t,e){return $i(e)?t.length===e.length&&t.every((i,n)=>i===e[n]):t.length===1&&t[0]===e}function sy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const i=e.split("/"),n=t.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=i.length-1,a,o;for(a=0;a<n.length;a++)if(o=n[a],o!==".")if(o==="..")s>1&&s--;else break;return i.slice(0,s).join("/")+"/"+n.slice(a).join("/")}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Sa;(function(t){t.pop="pop",t.push="push"})(Sa||(Sa={}));var na;(function(t){t.back="back",t.forward="forward",t.unknown=""})(na||(na={}));function ay(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ty(t)}const oy=/^[^#]+#/;function ly(t,e){return t.replace(oy,"#")+e}function cy(t,e){const i=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-i.left-(e.left||0),top:n.top-i.top-(e.top||0)}}const cl=()=>({left:window.scrollX,top:window.scrollY});function uy(t){let e;if("el"in t){const i=t.el,n=typeof i=="string"&&i.startsWith("#"),r=typeof i=="string"?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!r)return;e=cy(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function od(t,e){return(history.state?history.state.position-e:-1)+t}const xc=new Map;function fy(t,e){xc.set(t,e)}function dy(t){const e=xc.get(t);return xc.delete(t),e}let gy=()=>location.protocol+"//"+location.host;function nh(t,e){const{pathname:i,search:n,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),sd(l,"")}return sd(i,t)+n+r}function py(t,e,i,n){let r=[],s=[],a=null;const o=({state:g})=>{const d=nh(t,location),b=i.value,_=e.value;let y=0;if(g){if(i.value=d,e.value=g,a&&a===b){a=null;return}y=_?g.position-_.position:0}else n(d);r.forEach(p=>{p(i.value,b,{delta:y,type:Sa.pop,direction:y?y>0?na.forward:na.back:na.unknown})})};function l(){a=i.value}function c(g){r.push(g);const d=()=>{const b=r.indexOf(g);b>-1&&r.splice(b,1)};return s.push(d),d}function u(){const{history:g}=window;g.state&&g.replaceState(De({},g.state,{scroll:cl()}),"")}function f(){for(const g of s)g();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ld(t,e,i,n=!1,r=!1){return{back:t,current:e,forward:i,replaced:n,position:window.history.length,scroll:r?cl():null}}function hy(t){const{history:e,location:i}=window,n={value:nh(t,i)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),g=f>-1?(i.host&&document.querySelector("base")?t:t.slice(f))+l:gy()+t+l;try{e[u?"replaceState":"pushState"](c,"",g),r.value=c}catch(d){console.error(d),i[u?"replace":"assign"](g)}}function a(l,c){const u=De({},e.state,ld(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function o(l,c){const u=De({},r.value,e.state,{forward:l,scroll:cl()});s(u.current,u,!0);const f=De({},ld(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:o,replace:a}}function my(t){t=ay(t);const e=hy(t),i=py(t,e.state,e.location,e.replace);function n(s,a=!0){a||i.pauseListeners(),history.go(s)}const r=De({location:"",base:t,go:n,createHref:ly.bind(null,t)},e,i);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function _y(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),my(t)}function yy(t){return typeof t=="string"||t&&typeof t=="object"}function rh(t){return typeof t=="string"||typeof t=="symbol"}const sh=Symbol("");var cd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cd||(cd={}));function _s(t,e){return De(new Error,{type:t,[sh]:!0},e)}function fn(t,e){return t instanceof Error&&sh in t&&(e==null||!!(t.type&e))}const ud="[^/]+?",by={sensitive:!1,strict:!1,start:!0,end:!0},vy=/[.+*?^${}()[\]/\\]/g;function wy(t,e){const i=De({},by,e),n=[];let r=i.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];i.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const g=c[f];let d=40+(i.sensitive?.25:0);if(g.type===0)f||(r+="/"),r+=g.value.replace(vy,"\\$&"),d+=40;else if(g.type===1){const{value:b,repeatable:_,optional:y,regexp:p}=g;s.push({name:b,repeatable:_,optional:y});const m=p||ud;if(m!==ud){d+=10;try{new RegExp(`(${m})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${m}): `+x.message)}}let v=_?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;f||(v=y&&c.length<2?`(?:/${v})`:"/"+v),y&&(v+="?"),r+=v,d+=20,y&&(d+=-8),_&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(i.strict&&i.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}i.strict||(r+="/?"),i.end?r+="$":i.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,i.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let g=1;g<u.length;g++){const d=u[g]||"",b=s[g-1];f[b.name]=d&&b.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const g of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of g)if(d.type===0)u+=d.value;else if(d.type===1){const{value:b,repeatable:_,optional:y}=d,p=b in c?c[b]:"";if($i(p)&&!_)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const m=$i(p)?p.join("/"):p;if(!m)if(y)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=m}}return u||"/"}return{re:a,score:n,keys:s,parse:o,stringify:l}}function xy(t,e){let i=0;for(;i<t.length&&i<e.length;){const n=e[i]-t[i];if(n)return n;i++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ah(t,e){let i=0;const n=t.score,r=e.score;for(;i<n.length&&i<r.length;){const s=xy(n[i],r[i]);if(s)return s;i++}if(Math.abs(r.length-n.length)===1){if(fd(n))return 1;if(fd(r))return-1}return r.length-n.length}function fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ky={type:0,value:""},Sy=/[a-zA-Z0-9_]/;function Ay(t){if(!t)return[[]];if(t==="/")return[[ky]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${i})/"${c}": ${d}`)}let i=0,n=i;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(i===0?s.push({type:0,value:c}):i===1||i===2||i===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function g(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&i!==2){n=i,i=4;continue}switch(i){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),i=1):g();break;case 4:g(),i=n;break;case 1:l==="("?i=2:Sy.test(l)?g():(f(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:i=3:u+=l;break;case 3:f(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return i===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Ey(t,e,i){const n=wy(Ay(t.path),i),r=De(n,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ty(t,e){const i=[],n=new Map;e=hd({strict:!1,end:!0,sensitive:!1},e);function r(f){return n.get(f)}function s(f,g,d){const b=!d,_=gd(f);_.aliasOf=d&&d.record;const y=hd(e,f),p=[_];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const T of x)p.push(gd(De({},_,{components:d?d.record.components:_.components,path:T,aliasOf:d?d.record:_})))}let m,v;for(const x of p){const{path:T}=x;if(g&&T[0]!=="/"){const O=g.record.path,M=O[O.length-1]==="/"?"":"/";x.path=g.record.path+(T&&M+T)}if(m=Ey(x,g,y),d?d.alias.push(m):(v=v||m,v!==m&&v.alias.push(m),b&&f.name&&!pd(m)&&a(f.name)),oh(m)&&l(m),_.children){const O=_.children;for(let M=0;M<O.length;M++)s(O[M],m,d&&d.children[M])}d=d||m}return v?()=>{a(v)}:ia}function a(f){if(rh(f)){const g=n.get(f);g&&(n.delete(f),i.splice(i.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=i.indexOf(f);g>-1&&(i.splice(g,1),f.record.name&&n.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return i}function l(f){const g=Iy(f,i);i.splice(g,0,f),f.record.name&&!pd(f)&&n.set(f.record.name,f)}function c(f,g){let d,b={},_,y;if("name"in f&&f.name){if(d=n.get(f.name),!d)throw _s(1,{location:f});y=d.record.name,b=De(dd(g.params,d.keys.filter(v=>!v.optional).concat(d.parent?d.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&dd(f.params,d.keys.map(v=>v.name))),_=d.stringify(b)}else if(f.path!=null)_=f.path,d=i.find(v=>v.re.test(_)),d&&(b=d.parse(_),y=d.record.name);else{if(d=g.name?n.get(g.name):i.find(v=>v.re.test(g.path)),!d)throw _s(1,{location:f,currentLocation:g});y=d.record.name,b=De({},g.params,f.params),_=d.stringify(b)}const p=[];let m=d;for(;m;)p.unshift(m.record),m=m.parent;return{name:y,path:_,params:b,matched:p,meta:Py(p)}}t.forEach(f=>s(f));function u(){i.length=0,n.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function dd(t,e){const i={};for(const n of e)n in t&&(i[n]=t[n]);return i}function gd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Cy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Cy(t){const e={},i=t.props||!1;if("component"in t)e.default=i;else for(const n in t.components)e[n]=typeof i=="object"?i[n]:i;return e}function pd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Py(t){return t.reduce((e,i)=>De(e,i.meta),{})}function hd(t,e){const i={};for(const n in t)i[n]=n in e?e[n]:t[n];return i}function Iy(t,e){let i=0,n=e.length;for(;i!==n;){const s=i+n>>1;ah(t,e[s])<0?n=s:i=s+1}const r=My(t);return r&&(n=e.lastIndexOf(r,n-1)),n}function My(t){let e=t;for(;e=e.parent;)if(oh(e)&&ah(t,e)===0)return e}function oh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Oy(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Zp," "),a=s.indexOf("="),o=ka(a<0?s:s.slice(0,a)),l=a<0?null:ka(s.slice(a+1));if(o in e){let c=e[o];$i(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function md(t){let e="";for(let i in t){const n=t[i];if(i=J1(i),n==null){n!==void 0&&(e+=(e.length?"&":"")+i);continue}($i(n)?n.map(s=>s&&wc(s)):[n&&wc(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+i,s!=null&&(e+="="+s))})}return e}function zy(t){const e={};for(const i in t){const n=t[i];n!==void 0&&(e[i]=$i(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const Ry=Symbol(""),_d=Symbol(""),ul=Symbol(""),ju=Symbol(""),kc=Symbol("");function Rs(){let t=[];function e(n){return t.push(n),()=>{const r=t.indexOf(n);r>-1&&t.splice(r,1)}}function i(){t=[]}return{add:e,list:()=>t.slice(),reset:i}}function Dn(t,e,i,n,r,s=a=>a()){const a=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=g=>{g===!1?l(_s(4,{from:i,to:e})):g instanceof Error?l(g):yy(g)?l(_s(2,{from:e,to:g})):(a&&n.enterCallbacks[r]===a&&typeof g=="function"&&a.push(g),o())},u=s(()=>t.call(n&&n.instances[r],e,i,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(g=>l(g))})}function Rl(t,e,i,n,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Kp(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Dn(u,i,n,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=B1(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&Dn(d,i,n,a,o,r)()}))}}return s}function yd(t){const e=Pi(ul),i=Pi(ju),n=ze(()=>{const l=rn(t.to);return e.resolve(l)}),r=ze(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=i.matched;if(!u||!f.length)return-1;const g=f.findIndex(ms.bind(null,u));if(g>-1)return g;const d=bd(l[c-2]);return c>1&&bd(u)===d&&f[f.length-1].path!==d?f.findIndex(ms.bind(null,l[c-2])):g}),s=ze(()=>r.value>-1&&Fy(i.params,n.value.params)),a=ze(()=>r.value>-1&&r.value===i.matched.length-1&&ih(i.params,n.value.params));function o(l={}){if(Ny(l)){const c=e[rn(t.replace)?"replace":"push"](rn(t.to)).catch(ia);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:ze(()=>n.value.href),isActive:s,isExactActive:a,navigate:o}}function Ly(t){return t.length===1?t[0]:t}const Dy=Tu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yd,setup(t,{slots:e}){const i=Da(yd(t)),{options:n}=Pi(ul),r=ze(()=>({[vd(t.activeClass,n.linkActiveClass,"router-link-active")]:i.isActive,[vd(t.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const s=e.default&&Ly(e.default(i));return t.custom?s:Lu("a",{"aria-current":i.isExactActive?t.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:r.value},s)}}}),jy=Dy;function Ny(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Fy(t,e){for(const i in e){const n=e[i],r=t[i];if(typeof n=="string"){if(n!==r)return!1}else if(!$i(r)||r.length!==n.length||n.some((s,a)=>s!==r[a]))return!1}return!0}function bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vd=(t,e,i)=>t??e??i,By=Tu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:i}){const n=Pi(kc),r=ze(()=>t.route||n.value),s=Pi(_d,0),a=ze(()=>{let c=rn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=ze(()=>r.value.matched[a.value]);fo(_d,ze(()=>a.value+1)),fo(Ry,o),fo(kc,r);const l=Ge();return Bi(()=>[l.value,o.value,t.name],([c,u,f],[g,d,b])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===g&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ms(u,d)||!g)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,g=f&&f.components[u];if(!g)return wd(i.default,{Component:g,route:c});const d=f.props[u],b=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Lu(g,De({},b,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wd(i.default,{Component:y,route:c})||y}}});function wd(t,e){if(!t)return null;const i=t(e);return i.length===1?i[0]:i}const lh=By;function $y(t){const e=Ty(t.routes,t),i=t.parseQuery||Oy,n=t.stringifyQuery||md,r=t.history,s=Rs(),a=Rs(),o=Rs(),l=Z0(Mn);let c=Mn;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ol.bind(null,z=>""+z),f=Ol.bind(null,Q1),g=Ol.bind(null,ka);function d(z,V){let N,J;return rh(z)?(N=e.getRecordMatcher(z),J=V):J=z,e.addRoute(J,N)}function b(z){const V=e.getRecordMatcher(z);V&&e.removeRoute(V)}function _(){return e.getRoutes().map(z=>z.record)}function y(z){return!!e.getRecordMatcher(z)}function p(z,V){if(V=De({},V||l.value),typeof z=="string"){const C=zl(i,z,V.path),L=e.resolve({path:C.path},V),j=r.createHref(C.fullPath);return De(C,L,{params:g(L.params),hash:ka(C.hash),redirectedFrom:void 0,href:j})}let N;if(z.path!=null)N=De({},z,{path:zl(i,z.path,V.path).path});else{const C=De({},z.params);for(const L in C)C[L]==null&&delete C[L];N=De({},z,{params:f(C)}),V.params=f(V.params)}const J=e.resolve(N,V),de=z.hash||"";J.params=u(g(J.params));const k=iy(n,De({},z,{hash:K1(de),path:J.path})),w=r.createHref(k);return De({fullPath:k,hash:de,query:n===md?zy(z.query):z.query||{}},J,{redirectedFrom:void 0,href:w})}function m(z){return typeof z=="string"?zl(i,z,l.value.path):De({},z)}function v(z,V){if(c!==z)return _s(8,{from:V,to:z})}function x(z){return M(z)}function T(z){return x(De(m(z),{replace:!0}))}function O(z){const V=z.matched[z.matched.length-1];if(V&&V.redirect){const{redirect:N}=V;let J=typeof N=="function"?N(z):N;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=m(J):{path:J},J.params={}),De({query:z.query,hash:z.hash,params:J.path!=null?{}:z.params},J)}}function M(z,V){const N=c=p(z),J=l.value,de=z.state,k=z.force,w=z.replace===!0,C=O(N);if(C)return M(De(m(C),{state:typeof C=="object"?De({},de,C.state):de,force:k,replace:w}),V||N);const L=N;L.redirectedFrom=V;let j;return!k&&ny(n,J,N)&&(j=_s(16,{to:L,from:J}),xe(J,J,!0,!1)),(j?Promise.resolve(j):P(L,J)).catch(A=>fn(A)?fn(A,2)?A:I(A):K(A,L,J)).then(A=>{if(A){if(fn(A,2))return M(De({replace:w},m(A.to),{state:typeof A.to=="object"?De({},de,A.to.state):de,force:k}),V||L)}else A=D(L,J,!0,w,de);return R(L,J,A),A})}function B(z,V){const N=v(z,V);return N?Promise.reject(N):Promise.resolve()}function E(z){const V=Me.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(z):z()}function P(z,V){let N;const[J,de,k]=Wy(z,V);N=Rl(J.reverse(),"beforeRouteLeave",z,V);for(const C of J)C.leaveGuards.forEach(L=>{N.push(Dn(L,z,V))});const w=B.bind(null,z,V);return N.push(w),Oe(N).then(()=>{N=[];for(const C of s.list())N.push(Dn(C,z,V));return N.push(w),Oe(N)}).then(()=>{N=Rl(de,"beforeRouteUpdate",z,V);for(const C of de)C.updateGuards.forEach(L=>{N.push(Dn(L,z,V))});return N.push(w),Oe(N)}).then(()=>{N=[];for(const C of k)if(C.beforeEnter)if($i(C.beforeEnter))for(const L of C.beforeEnter)N.push(Dn(L,z,V));else N.push(Dn(C.beforeEnter,z,V));return N.push(w),Oe(N)}).then(()=>(z.matched.forEach(C=>C.enterCallbacks={}),N=Rl(k,"beforeRouteEnter",z,V,E),N.push(w),Oe(N))).then(()=>{N=[];for(const C of a.list())N.push(Dn(C,z,V));return N.push(w),Oe(N)}).catch(C=>fn(C,8)?C:Promise.reject(C))}function R(z,V,N){o.list().forEach(J=>E(()=>J(z,V,N)))}function D(z,V,N,J,de){const k=v(z,V);if(k)return k;const w=V===Mn,C=Gr?history.state:{};N&&(J||w?r.replace(z.fullPath,De({scroll:w&&C&&C.scroll},de)):r.push(z.fullPath,de)),l.value=z,xe(z,V,N,w),I()}let q;function Z(){q||(q=r.listen((z,V,N)=>{if(!Ye.listening)return;const J=p(z),de=O(J);if(de){M(De(de,{replace:!0,force:!0}),J).catch(ia);return}c=J;const k=l.value;Gr&&fy(od(k.fullPath,N.delta),cl()),P(J,k).catch(w=>fn(w,12)?w:fn(w,2)?(M(De(m(w.to),{force:!0}),J).then(C=>{fn(C,20)&&!N.delta&&N.type===Sa.pop&&r.go(-1,!1)}).catch(ia),Promise.reject()):(N.delta&&r.go(-N.delta,!1),K(w,J,k))).then(w=>{w=w||D(J,k,!1),w&&(N.delta&&!fn(w,8)?r.go(-N.delta,!1):N.type===Sa.pop&&fn(w,20)&&r.go(-1,!1)),R(J,k,w)}).catch(ia)}))}let se=Rs(),te=Rs(),G;function K(z,V,N){I(z);const J=te.list();return J.length?J.forEach(de=>de(z,V,N)):console.error(z),Promise.reject(z)}function ve(){return G&&l.value!==Mn?Promise.resolve():new Promise((z,V)=>{se.add([z,V])})}function I(z){return G||(G=!z,Z(),se.list().forEach(([V,N])=>z?N(z):V()),se.reset()),z}function xe(z,V,N,J){const{scrollBehavior:de}=t;if(!Gr||!de)return Promise.resolve();const k=!N&&dy(od(z.fullPath,0))||(J||!N)&&history.state&&history.state.scroll||null;return Dr().then(()=>de(z,V,k)).then(w=>w&&uy(w)).catch(w=>K(w,z,V))}const Ie=z=>r.go(z);let at;const Me=new Set,Ye={currentRoute:l,listening:!0,addRoute:d,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:y,getRoutes:_,resolve:p,options:t,push:x,replace:T,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:ve,install(z){const V=this;z.component("RouterLink",jy),z.component("RouterView",lh),z.config.globalProperties.$router=V,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>rn(l)}),Gr&&!at&&l.value===Mn&&(at=!0,x(r.location).catch(de=>{}));const N={};for(const de in Mn)Object.defineProperty(N,de,{get:()=>l.value[de],enumerable:!0});z.provide(ul,V),z.provide(ju,up(N)),z.provide(kc,l);const J=z.unmount;Me.add(z),z.unmount=function(){Me.delete(z),Me.size<1&&(c=Mn,q&&q(),q=null,l.value=Mn,at=!1,G=!1),J()}}};function Oe(z){return z.reduce((V,N)=>V.then(()=>E(N)),Promise.resolve())}return Ye}function Wy(t,e){const i=[],n=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>ms(c,o))?n.push(o):i.push(o));const l=t.matched[a];l&&(e.matched.find(c=>ms(c,l))||r.push(l))}return[i,n,r]}function ch(){return Pi(ul)}function Nu(t){return Pi(ju)}const Uy="/assets/imgs/logo-light.png";function gn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function uh(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},Fu,Pt,Ze,sn=1e8,Ft=1/sn,Sc=Math.PI*2,Hy=Sc/4,Vy=0,fh=Math.sqrt,Gy=Math.cos,Yy=Math.sin,xt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},kn=function(e){return typeof e=="number"},Bu=function(e){return typeof e>"u"},ln=function(e){return typeof e=="object"},ri=function(e){return e!==!1},$u=function(){return typeof window<"u"},qa=function(e){return st(e)||xt(e)},dh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,Ac=/(?:-?\.?\d|\.)+/gi,gh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ph=/[+-]=-?[.\d]+/,hh=/[^,'"\[\]\s]+/gi,qy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,qi,Ec,Wu,bi={},jo={},mh,_h=function(e){return(jo=bs(e,bi))&&li},Uu=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},Aa=function(e,i){return!i&&console.warn(e)},yh=function(e,i){return e&&(bi[e]=i)&&jo&&(jo[e]=i)||bi},Ea=function(){return 0},Xy={suppressEvents:!0,isStart:!0,kill:!1},mo={suppressEvents:!0,kill:!1},Ky={suppressEvents:!0},Hu={},Hn=[],Tc={},bh,di={},Dl={},xd=30,_o=[],Vu="",Gu=function(e){var i=e[0],n,r;if(ln(i)||st(i)||(e=[e]),!(n=(i._gsap||{}).harness)){for(r=_o.length;r--&&!_o[r].targetTest(i););n=_o[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Uh(e[r],n)))||e.splice(r,1);return e},wr=function(e){return e._gsap||Gu(Ei(e))[0]._gsap},vh=function(e,i,n){return(n=e[i])&&st(n)?e[i]():Bu(n)&&e.getAttribute&&e.getAttribute(i)||n},si=function(e,i){return(e=e.split(",")).forEach(i)||e},lt=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},ss=function(e,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Jy=function(e,i){for(var n=i.length,r=0;e.indexOf(i[r])<0&&++r<n;);return r<n},No=function(){var e=Hn.length,i=Hn.slice(0),n,r;for(Tc={},Hn.length=0,n=0;n<e;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yu=function(e){return!!(e._initted||e._startAt||e.add)},wh=function(e,i,n,r){Hn.length&&!Pt&&No(),e.render(i,n,!!(Pt&&i<0&&Yu(e))),Hn.length&&!Pt&&No()},xh=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(hh).length<2?i:xt(e)?e.trim():e},kh=function(e){return e},vi=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},Zy=function(e){return function(i,n){for(var r in n)r in i||r==="duration"&&e||r==="ease"||(i[r]=n[r])}},bs=function(e,i){for(var n in i)e[n]=i[n];return e},kd=function t(e,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ln(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},Fo=function(e,i){var n={},r;for(r in e)r in i||(n[r]=e[r]);return n},ra=function(e){var i=e.parent||tt,n=e.keyframes?Zy($t(e.keyframes)):vi;if(ri(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},Qy=function(e,i){for(var n=e.length,r=n===i.length;r&&n--&&e[n]===i[n];);return n<0},Sh=function(e,i,n,r,s){var a=e[r],o;if(s)for(o=i[s];a&&a[s]>o;)a=a._prev;return a?(i._next=a._next,a._next=i):(i._next=e[n],e[n]=i),i._next?i._next._prev=i:e[r]=i,i._prev=a,i.parent=i._dp=e,i},fl=function(e,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=i._prev,a=i._next;s?s._next=a:e[n]===i&&(e[n]=a),a?a._prev=s:e[r]===i&&(e[r]=s),i._next=i._prev=i.parent=null},Xn=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xr=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},eb=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Cc=function(e,i,n,r){return e._startAt&&(Pt?e._startAt.revert(mo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},tb=function t(e){return!e||e._ts&&t(e.parent)},Sd=function(e){return e._repeat?vs(e._tTime,e=e.duration()+e._rDelay)*e:0},vs=function(e,i){var n=Math.floor(e=pt(e/i));return e&&n===e?n-1:n},Bo=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},dl=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ft)||0))},gl=function(e,i){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pt(n._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),dl(e),n._dirty||xr(n,e)),e},Ah=function(e,i){var n;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(n=Bo(e.rawTime(),i),(!i._dur||Fa(0,i.totalDuration(),n)-i._tTime>Ft)&&i.render(n,!0)),xr(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Ji=function(e,i,n,r){return i.parent&&Xn(i),i._start=pt((kn(n)?n:n||e!==tt?ki(e,n,i):e._time)+i._delay),i._end=pt(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Sh(e,i,"_first","_last",e._sort?"_start":0),Pc(i)||(e._recent=i),r||Ah(e,i),e._ts<0&&gl(e,e._tTime),e},Eh=function(e,i){return(bi.ScrollTrigger||Uu("scrollTrigger",i))&&bi.ScrollTrigger.create(i,e)},Th=function(e,i,n,r,s){if(Xu(e,i,s),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bh!==pi.frame)return Hn.push(e),e._lazy=[s,r],1},ib=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},Pc=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},nb=function(e,i,n,r){var s=e.ratio,a=i<0||!i&&(!e._start&&ib(e)&&!(!e._initted&&Pc(e))||(e._ts<0||e._dp._ts<0)&&!Pc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Fa(0,e._tDur,i),u=vs(l,o),e._yoyo&&u&1&&(a=1-a),u!==vs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Pt||r||e._zTime===Ft||!i&&e._zTime){if(!e._initted&&Th(e,i,r,n,l))return;for(f=e._zTime,e._zTime=i||(n?Ft:0),n||(n=i&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;i<0&&Cc(e,i,n,!0),e._onUpdate&&!n&&_i(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_i(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===a&&(a&&Xn(e,1),!n&&!Pt&&(_i(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},rb=function(e,i,n){var r;if(n>i)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},ws=function(e,i,n,r){var s=e._repeat,a=pt(i)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:pt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&gl(e,e._tTime=e._tDur*o),e.parent&&dl(e),n||xr(e.parent,e),e},Ad=function(e){return e instanceof Zt?xr(e):ws(e,e._dur)},sb={_start:0,endTime:Ea,totalDuration:Ea},ki=function t(e,i,n){var r=e.labels,s=e._recent||sb,a=e.duration()>=sn?s.endTime(!1):e._dur,o,l,c;return xt(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),c=i.substr(-1)==="%",o=i.indexOf("="),l==="<"||l===">"?(o>=0&&(i=i.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(i in r||(r[i]=a),r[i]):(l=parseFloat(i.charAt(o-1)+i.substr(o+1)),c&&n&&(l=l/100*($t(n)?n[0]:n).totalDuration()),o>1?t(e,i.substr(0,o-1),n)+l:a+l)):i==null?a:+i},sa=function(e,i,n){var r=kn(i[1]),s=(r?2:1)+(e<2?0:1),a=i[s],o,l;if(r&&(a.duration=i[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;a.immediateRender=ri(o.immediateRender),e<2?a.runBackwards=1:a.startAt=i[s-1]}return new gt(i[0],a,i[s+1])},ir=function(e,i){return e||e===0?i(e):i},Fa=function(e,i,n){return n<e?e:n>i?i:n},jt=function(e,i){return!xt(e)||!(i=qy.exec(e))?"":i[1]},ab=function(e,i,n){return ir(n,function(r){return Fa(e,i,r)})},Ic=[].slice,Ch=function(e,i){return e&&ln(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&ln(e[0]))&&!e.nodeType&&e!==qi},ob=function(e,i,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return xt(r)&&!i||Ch(r,1)?(s=n).push.apply(s,Ei(r)):n.push(r)})||n},Ei=function(e,i,n){return Ze&&!i&&Ze.selector?Ze.selector(e):xt(e)&&!n&&(Ec||!xs())?Ic.call((i||Wu).querySelectorAll(e),0):$t(e)?ob(e,n):Ch(e)?Ic.call(e,0):e?[e]:[]},Mc=function(e){return e=Ei(e)[0]||Aa("Invalid scope")||{},function(i){var n=e.current||e.nativeElement||e;return Ei(i,n.querySelectorAll?n:n===e?Aa("Invalid scope")||Wu.createElement("div"):e)}},Ph=function(e){return e.sort(function(){return .5-Math.random()})},Ih=function(e){if(st(e))return e;var i=ln(e)?e:{each:e},n=kr(i.ease),r=i.from||0,s=parseFloat(i.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=i.axis,u=r,f=r;return xt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(g,d,b){var _=(b||i).length,y=a[_],p,m,v,x,T,O,M,B,E;if(!y){if(E=i.grid==="auto"?0:(i.grid||[1,sn])[1],!E){for(M=-1e8;M<(M=b[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(y=a[_]=[],p=l?Math.min(E,_)*u-.5:r%E,m=E===sn?0:l?_*f/E-.5:r/E|0,M=0,B=sn,O=0;O<_;O++)v=O%E-p,x=m-(O/E|0),y[O]=T=c?Math.abs(c==="y"?x:v):fh(v*v+x*x),T>M&&(M=T),T<B&&(B=T);r==="random"&&Ph(y),y.max=M-B,y.min=B,y.v=_=(parseFloat(i.amount)||parseFloat(i.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),y.b=_<0?s-_:s,y.u=jt(i.amount||i.each)||0,n=n&&_<0?Bh(n):n}return _=(y[g]-y.min)/y.max||0,pt(y.b+(n?n(_):_)*y.v)+y.u}},Oc=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=pt(Math.round(parseFloat(n)/e)*e*i);return(r-r%1)/i+(kn(n)?0:jt(n))}},Mh=function(e,i){var n=$t(e),r,s;return!n&&ln(e)&&(r=n=e.radius||sn,e.values?(e=Ei(e.values),(s=!kn(e[0]))&&(r*=r)):e=Oc(e.increment)),ir(i,n?st(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=sn,u=0,f=e.length,g,d;f--;)s?(g=e[f].x-o,d=e[f].y-l,g=g*g+d*d):g=Math.abs(e[f]-o),g<c&&(c=g,u=f);return u=!r||c<=r?e[u]:a,s||u===a||kn(a)?u:u+jt(a)}:Oc(e))},Oh=function(e,i,n,r){return ir($t(e)?!i:n===!0?!!(n=0):!r,function(){return $t(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(i-e+n*.99))/n)*n*r)/r})},lb=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return function(r){return i.reduce(function(s,a){return a(s)},r)}},cb=function(e,i){return function(n){return e(parseFloat(n))+(i||jt(n))}},ub=function(e,i,n){return Rh(e,i,0,1,n)},zh=function(e,i,n){return ir(n,function(r){return e[~~i(r)]})},fb=function t(e,i,n){var r=i-e;return $t(e)?zh(e,t(0,e.length),i):ir(n,function(s){return(r+(s-e)%r)%r+e})},db=function t(e,i,n){var r=i-e,s=r*2;return $t(e)?zh(e,t(0,e.length-1),i):ir(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ta=function(e){for(var i=0,n="",r,s,a,o;~(r=e.indexOf("random(",i));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?hh:Ac),n+=e.substr(i,r-i)+Oh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),i=a+1;return n+e.substr(i,e.length-i)},Rh=function(e,i,n,r,s){var a=i-e,o=r-n;return ir(s,function(l){return n+((l-e)/a*o||0)})},gb=function t(e,i,n,r){var s=isNaN(e+i)?0:function(d){return(1-d)*e+d*i};if(!s){var a=xt(e),o={},l,c,u,f,g;if(n===!0&&(r=1)&&(n=null),a)e={p:e},i={p:i};else if($t(e)&&!$t(i)){for(u=[],f=e.length,g=f-2,c=1;c<f;c++)u.push(t(e[c-1],e[c]));f--,s=function(b){b*=f;var _=Math.min(g,~~b);return u[_](b-_)},n=i}else r||(e=bs($t(e)?[]:{},e));if(!u){for(l in i)qu.call(o,e,l,"get",i[l]);s=function(b){return Zu(b,o)||(a?e.p:e)}}}return ir(n,s)},Ed=function(e,i,n){var r=e.labels,s=sn,a,o,l;for(a in r)o=r[a]-i,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},_i=function(e,i,n){var r=e.vars,s=r[i],a=Ze,o=e._ctx,l,c,u;if(s)return l=r[i+"Params"],c=r.callbackScope||e,n&&Hn.length&&No(),o&&(Ze=o),u=l?s.apply(c,l):s.call(c),Ze=a,u},$s=function(e){return Xn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&_i(e,"onInterrupt"),e},Jr,Lh=[],Dh=function(e){if(e)if(e=!e.name&&e.default||e,$u()||e.headless){var i=e.name,n=st(e),r=i&&!n&&e.init?function(){this._props=[]}:e,s={init:Ea,render:Zu,add:qu,kill:Pb,modifier:Cb,rawVars:0},a={targetTest:0,get:0,getSetter:Ju,aliases:{},register:0};if(xs(),e!==r){if(di[i])return;vi(r,vi(Fo(e,s),a)),bs(r.prototype,bs(s,Fo(e,a))),di[r.prop=i]=r,e.targetTest&&(_o.push(r),Hu[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}yh(i,r),e.register&&e.register(li,r,ai)}else Lh.push(e)},$e=255,Ws={aqua:[0,$e,$e],lime:[0,$e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$e],navy:[0,0,128],white:[$e,$e,$e],olive:[128,128,0],yellow:[$e,$e,0],orange:[$e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$e,0,0],pink:[$e,192,203],cyan:[0,$e,$e],transparent:[$e,$e,$e,0]},jl=function(e,i,n){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(n-i)*e*6:e<.5?n:e*3<2?i+(n-i)*(2/3-e)*6:i)*$e+.5|0},jh=function(e,i,n){var r=e?kn(e)?[e>>16,e>>8&$e,e&$e]:0:Ws.black,s,a,o,l,c,u,f,g,d,b;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ws[e])r=Ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&$e,r&$e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&$e,e&$e]}else if(e.substr(0,3)==="hsl"){if(r=b=e.match(Ac),!i)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=jl(l+1/3,s,a),r[1]=jl(l,s,a),r[2]=jl(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(gh),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ac)||Ws.transparent;r=r.map(Number)}return i&&!b&&(s=r[0]/$e,a=r[1]/$e,o=r[2]/$e,f=Math.max(s,a,o),g=Math.min(s,a,o),u=(f+g)/2,f===g?l=c=0:(d=f-g,c=u>.5?d/(2-f-g):d/(f+g),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Nh=function(e){var i=[],n=[],r=-1;return e.split(Vn).forEach(function(s){var a=s.match(Kr)||[];i.push.apply(i,a),n.push(r+=a.length+1)}),i.c=n,i},Td=function(e,i,n){var r="",s=(e+r).match(Vn),a=i?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(g){return(g=jh(g,i,1))&&a+(i?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(u=Nh(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Vn,"1").split(Kr),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Vn),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Vn=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ws)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),pb=/hsl[a]?\(/,Fh=function(e){var i=e.join(" "),n;if(Vn.lastIndex=0,Vn.test(i))return n=pb.test(i),e[1]=Td(e[1],n),e[0]=Td(e[0],n,Nh(e[1])),!0},Ca,pi=function(){var t=Date.now,e=500,i=33,n=t(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,g,d,b=function _(y){var p=t()-r,m=y===!0,v,x,T,O;if((p>e||p<0)&&(n+=p-i),r+=p,T=r-n,v=T-a,(v>0||m)&&(O=++f.frame,g=T-f.time*1e3,f.time=T=T/1e3,a+=v+(v>=s?4:s-v),x=1),m||(l=c(_)),x)for(d=0;d<o.length;d++)o[d](T,g,O,y)};return f={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){mh&&(!Ec&&$u()&&(qi=Ec=window,Wu=qi.document||{},bi.gsap=li,(qi.gsapVersions||(qi.gsapVersions=[])).push(li.version),_h(jo||qi.GreenSockGlobals||!qi.gsap&&qi||{}),Lh.forEach(Dh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(y){return setTimeout(y,a-f.time*1e3+1|0)},Ca=1,b(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ca=0,c=Ea},lagSmoothing:function(y,p){e=y||1/0,i=Math.min(p||33,e)},fps:function(y){s=1e3/(y||240),a=f.time*1e3+s},add:function(y,p,m){var v=p?function(x,T,O,M){y(x,T,O,M),f.remove(v)}:y;return f.remove(y),o[m?"unshift":"push"](v),xs(),v},remove:function(y,p){~(p=o.indexOf(y))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),xs=function(){return!Ca&&pi.wake()},Pe={},hb=/^[\d.\-M][\d.\-,\s]/,mb=/["']/g,_b=function(e){for(var i={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),i[r]=isNaN(c)?c.replace(mb,"").trim():+c,r=l.substr(o+1).trim();return i},yb=function(e){var i=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<n?e.indexOf(")",n+1):n)},bb=function(e){var i=(e+"").split("("),n=Pe[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_b(i[1])]:yb(e).split(",").map(xh)):Pe._CE&&hb.test(e)?Pe._CE("",e):n},Bh=function(e){return function(i){return 1-e(1-i)}},$h=function t(e,i){for(var n=e._first,r;n;)n instanceof Zt?t(n,i):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==i&&(n.timeline?t(n.timeline,i):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=i)),n=n._next},kr=function(e,i){return e&&(st(e)?e:Pe[e]||bb(e))||i},Nr=function(e,i,n,r){n===void 0&&(n=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var s={easeIn:i,easeOut:n,easeInOut:r},a;return si(e,function(o){Pe[o]=bi[o]=s,Pe[a=o.toLowerCase()]=n;for(var l in s)Pe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Pe[o+"."+l]=s[l]}),s},Wh=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},Nl=function t(e,i,n){var r=i>=1?i:1,s=(n||(e?.3:.45))/(i<1?i:1),a=s/Sc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Yy((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Wh(o);return s=Sc/s,l.config=function(c,u){return t(e,c,u)},l},Fl=function t(e,i){i===void 0&&(i=1.70158);var n=function(a){return a?--a*a*((i+1)*a+i)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Wh(n);return r.config=function(s){return t(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;Nr(t+",Power"+(i-1),e?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;Nr("Elastic",Nl("in"),Nl("out"),Nl());(function(t,e){var i=1/e,n=2*i,r=2.5*i,s=function(o){return o<i?t*o*o:o<n?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};Nr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Nr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Nr("Circ",function(t){return-(fh(1-t*t)-1)});Nr("Sine",function(t){return t===1?1:-Gy(t*Hy)+1});Nr("Back",Fl("in"),Fl("out"),Fl());Pe.SteppedEase=Pe.steps=bi.SteppedEase={config:function(e,i){e===void 0&&(e=1);var n=1/e,r=e+(i?0:1),s=i?1:0,a=1-Ft;return function(o){return((r*Fa(0,a,o)|0)+s)*n}}};ys.ease=Pe["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Vu+=t+","+t+"Params,"});var Uh=function(e,i){this.id=Vy++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:vh,this.set=i?i.getSetter:Ju},Pa=function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,ws(this,+i.duration,1,1),this.data=i.data,Ze&&(this._ctx=Ze,Ze.data.push(this)),Ca||pi.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gl(this,n),!s._dp||s.parent||Ah(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wh(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?vs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Bo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),dl(this),eb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ji(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bo(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ky);var r=Pt;return Pt=n,Yu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ad(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Ad(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ki(this,n),ri(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ri(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ft)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=st(n)?n:kh,o=function(){var c=r.then;r.then=null,st(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){$s(this)},t}();vi(Pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Zt=function(t){uh(e,t);function e(n,r){var s;return n===void 0&&(n={}),s=t.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),tt&&Ji(n.parent||tt,gn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Eh(gn(s),n.scrollTrigger),s}var i=e.prototype;return i.to=function(r,s,a){return sa(0,arguments,this),this},i.from=function(r,s,a){return sa(1,arguments,this),this},i.fromTo=function(r,s,a,o){return sa(2,arguments,this),this},i.set=function(r,s,a){return s.duration=0,s.parent=this,ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new gt(r,s,ki(this,a),1),this},i.call=function(r,s,a){return Ji(this,gt.delayedCall(0,r,s),a)},i.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new gt(r,a,ki(this,l)),this},i.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ra(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},i.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,ra(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},i.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:pt(r),f=this._zTime<0!=r<0&&(this._initted||!c),g,d,b,_,y,p,m,v,x,T,O,M;if(this!==tt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),g=u,x=this._start,v=this._ts,p=!v,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(O=this._yoyo,y=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,s,a);if(g=pt(u%y),u===l?(_=this._repeat,g=c):(T=pt(u/y),_=~~T,_&&_===T&&(g=c,_--),g>c&&(g=c)),T=vs(this._tTime,y),!o&&this._tTime&&T!==_&&this._tTime-T*y-this._dur<=0&&(T=_),O&&_&1&&(g=c-g,M=1),_!==T&&!this._lock){var B=O&&T&1,E=B===(O&&_&1);if(_<T&&(B=!B),o=B?0:u%c?c:u,this._lock=1,this.render(o||(M?0:pt(_*y)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=B?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;$h(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=rb(this,pt(o),pt(g)),m&&(u-=g-(g=m._start))),this._tTime=u,this._time=g,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!T&&(_i(this,"onStart"),this._tTime!==u))return this;if(g>=o&&r>=0)for(d=this._first;d;){if(b=d._next,(d._act||g>=d._start)&&d._ts&&m!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(g-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(g-d._start)*d._ts,s,a),g!==this._time||!this._ts&&!p){m=0,b&&(u+=this._zTime=-1e-8);break}}d=b}else{d=this._last;for(var P=r<0?r:g;d;){if(b=d._prev,(d._act||P<=d._end)&&d._ts&&m!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,s,a||Pt&&Yu(d)),g!==this._time||!this._ts&&!p){m=0,b&&(u+=this._zTime=P?-1e-8:Ft);break}}d=b}}if(m&&!s&&(this.pause(),m.render(g>=o?0:-1e-8)._zTime=g>=o?1:-1,this._ts))return this._start=x,dl(this),this.render(r,s,a);this._onUpdate&&!s&&_i(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xn(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(_i(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,s){var a=this;if(kn(s)||(s=ki(this,s,r)),!(r instanceof Pa)){if($t(r))return r.forEach(function(o){return a.add(o,s)}),this;if(xt(r))return this.addLabel(r,s);if(st(r))r=gt.delayedCall(0,r);else return this}return this!==r?Ji(this,r,s):this},i.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof gt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},i.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},i.remove=function(r){return xt(r)?this.removeLabel(r):st(r)?this.killTweensOf(r):(r.parent===this&&fl(this,r),r===this._recent&&(this._recent=this._last),xr(this))},i.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(pi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},i.addLabel=function(r,s){return this.labels[r]=ki(this,s),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,s,a){var o=gt.delayedCall(0,s||Ea,a);return o.data="isPause",this._hasPause=1,Ji(this,o,ki(this,r))},i.removePause=function(r){var s=this._first;for(r=ki(this,r);s;)s._start===r&&s.data==="isPause"&&Xn(s),s=s._next},i.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Nn!==o[l]&&o[l].kill(r,s);return this},i.getTweensOf=function(r,s){for(var a=[],o=Ei(r),l=this._first,c=kn(s),u;l;)l instanceof gt?Jy(l._targets,o)&&(c?(!Nn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},i.tweenTo=function(r,s){s=s||{};var a=this,o=ki(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,g=l.immediateRender,d,b=gt.to(a,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ft,onStart:function(){if(a.pause(),!d){var y=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());b._dur!==y&&ws(b,y,0,1).render(b._time,!0,!0),d=1}u&&u.apply(b,f||[])}},s));return g?b.render(0):b},i.tweenFromTo=function(r,s,a){return this.tweenTo(s,vi({startAt:{time:ki(this,r)}},a))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),Ed(this,ki(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),Ed(this,ki(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ft)},i.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return xr(this)},i.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xr(this)},i.totalDuration=function(r){var s=0,a=this,o=a._last,l=sn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ji(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ws(a,a===tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(tt._ts&&(wh(tt,Bo(r,tt)),bh=pi.frame),pi.frame>=xd){xd+=yi.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&yi.autoSleep&&pi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pi.sleep()}}},e}(Pa);vi(Zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var vb=function(e,i,n,r,s,a,o){var l=new ai(this._pt,e,i,0,1,Xh,null,s),c=0,u=0,f,g,d,b,_,y,p,m;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Ta(r)),a&&(m=[n,r],a(m,e,i),n=m[0],r=m[1]),g=n.match(Ll)||[];f=Ll.exec(r);)b=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),b!==g[u++]&&(y=parseFloat(g[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:y,c:b.charAt(1)==="="?ss(y,b)-y:parseFloat(b)-y,m:d&&d<4?Math.round:0},c=Ll.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(ph.test(r)||p)&&(l.e=0),this._pt=l,l},qu=function(e,i,n,r,s,a,o,l,c,u){st(r)&&(r=r(s||0,e,a));var f=e[i],g=n!=="get"?n:st(f)?c?e[i.indexOf("set")||!st(e["get"+i.substr(3)])?i:"get"+i.substr(3)](c):e[i]():f,d=st(f)?c?Ab:Yh:Ku,b;if(xt(r)&&(~r.indexOf("random(")&&(r=Ta(r)),r.charAt(1)==="="&&(b=ss(g,r)+(jt(g)||0),(b||b===0)&&(r=b))),!u||g!==r||zc)return!isNaN(g*r)&&r!==""?(b=new ai(this._pt,e,i,+g||0,r-(g||0),typeof f=="boolean"?Tb:qh,0,d),c&&(b.fp=c),o&&b.modifier(o,this,e),this._pt=b):(!f&&!(i in e)&&Uu(i,r),vb.call(this,e,i,g,r,d,l||yi.stringFilter,c))},wb=function(e,i,n,r,s){if(st(e)&&(e=aa(e,s,i,n,r)),!ln(e)||e.style&&e.nodeType||$t(e)||dh(e))return xt(e)?aa(e,s,i,n,r):e;var a={},o;for(o in e)a[o]=aa(e[o],s,i,n,r);return a},Hh=function(e,i,n,r,s,a){var o,l,c,u;if(di[e]&&(o=new di[e]).init(s,o.rawVars?i[e]:wb(i[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new ai(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Jr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Nn,zc,Xu=function t(e,i,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,g=r.keyframes,d=r.autoRevert,b=e._dur,_=e._startAt,y=e._targets,p=e.parent,m=p&&p.data==="nested"?p.vars.targets:y,v=e._overwrite==="auto"&&!Fu,x=e.timeline,T,O,M,B,E,P,R,D,q,Z,se,te,G;if(x&&(!g||!s)&&(s="none"),e._ease=kr(s,ys.ease),e._yEase=f?Bh(kr(f===!0?s:f,ys.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!r.runBackwards,!x||g&&!r.stagger){if(D=y[0]?wr(y[0]).harness:0,te=D&&r[D.prop],T=Fo(r,Hu),_&&(_._zTime<0&&_.progress(1),i<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&b?mo:Xy),_._lazy=0),a){if(Xn(e._startAt=gt.set(y,vi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return _i(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Pt||!o&&!d)&&e._startAt.revert(mo),o&&b&&i<=0&&n<=0){i&&(e._zTime=i);return}}else if(u&&b&&!_){if(i&&(o=!1),M=vi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ri(l),immediateRender:o,stagger:0,parent:p},T),te&&(M[D.prop]=te),Xn(e._startAt=gt.set(y,M)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Pt?e._startAt.revert(mo):e._startAt.render(-1,!0)),e._zTime=i,!o)t(e._startAt,Ft,Ft);else if(!i)return}for(e._pt=e._ptCache=0,l=b&&ri(l)||l&&!b,O=0;O<y.length;O++){if(E=y[O],R=E._gsap||Gu(y)[O]._gsap,e._ptLookup[O]=Z={},Tc[R.id]&&Hn.length&&No(),se=m===y?O:m.indexOf(E),D&&(q=new D).init(E,te||T,e,se,m)!==!1&&(e._pt=B=new ai(e._pt,E,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(K){Z[K]=B}),q.priority&&(P=1)),!D||te)for(M in T)di[M]&&(q=Hh(M,T,e,se,E,m))?q.priority&&(P=1):Z[M]=B=qu.call(e,E,M,"get",T[M],se,m,0,r.stringFilter);e._op&&e._op[O]&&e.kill(E,e._op[O]),v&&e._pt&&(Nn=e,tt.killTweensOf(E,Z,e.globalTime(i)),G=!e.parent,Nn=0),e._pt&&l&&(Tc[R.id]=1)}P&&Kh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,g&&i<=0&&x.render(sn,!0,!0)},xb=function(e,i,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[i],u,f,g,d;if(!c)for(c=e._ptCache[i]=[],g=e._ptLookup,d=e._targets.length;d--;){if(u=g[d][i],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==i&&u.fp!==i;)u=u._next;if(!u)return zc=1,e.vars[i]="+=0",Xu(e,o),zc=0,l?Aa(i+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=lt(n)+jt(f.e)),f.b&&(f.b=u.s+jt(f.b))},kb=function(e,i){var n=e[0]?wr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return i;s=bs({},i);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Sb=function(e,i,n,r){var s=i.ease||r||"power1.inOut",a,o;if($t(i))o=n[e]||(n[e]=[]),i.forEach(function(l,c){return o.push({t:c/(i.length-1)*100,v:l,e:s})});else for(a in i)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:i[a],e:s})},aa=function(e,i,n,r,s){return st(e)?e.call(i,n,r,s):xt(e)&&~e.indexOf("random(")?Ta(e):e},Vh=Vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gh={};si(Vh+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Gh[t]=1});var gt=function(t){uh(e,t);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:ra(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,g=l.stagger,d=l.overwrite,b=l.keyframes,_=l.defaults,y=l.scrollTrigger,p=l.yoyoEase,m=r.parent||tt,v=($t(n)||dh(n)?kn(n[0]):"length"in r)?[n]:Ei(n),x,T,O,M,B,E,P,R;if(o._targets=v.length?Gu(v):Aa("GSAP target "+n+" not found. https://gsap.com",!yi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,b||g||qa(c)||qa(u)){if(r=o.vars,x=o.timeline=new Zt({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),x.kill(),x.parent=x._dp=gn(o),x._start=0,g||qa(c)||qa(u)){if(M=v.length,P=g&&Ih(g),ln(g))for(B in g)~Vh.indexOf(B)&&(R||(R={}),R[B]=g[B]);for(T=0;T<M;T++)O=Fo(r,Gh),O.stagger=0,p&&(O.yoyoEase=p),R&&bs(O,R),E=v[T],O.duration=+aa(c,gn(o),T,E,v),O.delay=(+aa(u,gn(o),T,E,v)||0)-o._delay,!g&&M===1&&O.delay&&(o._delay=u=O.delay,o._start+=u,O.delay=0),x.to(E,O,P?P(T,E,v):0),x._ease=Pe.none;x.duration()?c=u=0:o.timeline=0}else if(b){ra(vi(x.vars.defaults,{ease:"none"})),x._ease=kr(b.ease||r.ease||"none");var D=0,q,Z,se;if($t(b))b.forEach(function(te){return x.to(v,te,">")}),x.duration();else{O={};for(B in b)B==="ease"||B==="easeEach"||Sb(B,b[B],O,b.easeEach);for(B in O)for(q=O[B].sort(function(te,G){return te.t-G.t}),D=0,T=0;T<q.length;T++)Z=q[T],se={ease:Z.e,duration:(Z.t-(T?q[T-1].t:0))/100*c},se[B]=Z.v,x.to(v,se,D),D+=se.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!Fu&&(Nn=gn(o),tt.killTweensOf(v),Nn=0),Ji(m,gn(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!b&&o._start===pt(m._time)&&ri(f)&&tb(gn(o))&&m.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),y&&Eh(gn(o),y),o}var i=e.prototype;return i.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ft&&!u?l:r<Ft?0:r,g,d,b,_,y,p,m,v,x;if(!c)nb(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(g=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(g=pt(f%_),f===l?(b=this._repeat,g=c):(y=pt(f/_),b=~~y,b&&b===y?(g=c,b--):g>c&&(g=c)),p=this._yoyo&&b&1,p&&(x=this._yEase,g=c-g),y=vs(this._tTime,_),g===o&&!a&&this._initted&&b===y)return this._tTime=f,this;b!==y&&(v&&this._yEase&&$h(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&g!==_&&this._initted&&(this._lock=a=1,this.render(pt(_*b),!0).invalidate()._lock=0))}if(!this._initted){if(Th(this,u?r:g,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&b!==y))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(x||this._ease)(g/c),this._from&&(this.ratio=m=1-m),!o&&f&&!s&&!y&&(_i(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(m,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(g/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Cc(this,r,s,a),_i(this,"onUpdate")),this._repeat&&b!==y&&this.vars.onRepeat&&!s&&this.parent&&_i(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Cc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Xn(this,1),!s&&!(u&&!o)&&(f||o||p)&&(_i(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},i.resetTo=function(r,s,a,o,l){Ca||pi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Xu(this,c),u=this._ease(c/this._dur),xb(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(gl(this,0),this.parent||Sh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$s(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Nn&&Nn.vars.overwrite!==!0)._first||$s(this),this.parent&&a!==this.timeline.totalDuration()&&ws(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Ei(r):o,c=this._ptLookup,u=this._pt,f,g,d,b,_,y,p;if((!s||s==="all")&&Qy(o,l))return s==="all"&&(this._pt=0),$s(this);for(f=this._op=this._op||[],s!=="all"&&(xt(s)&&(_={},si(s,function(m){return _[m]=1}),s=_),s=kb(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){g=c[p],s==="all"?(f[p]=s,b=g,d={}):(d=f[p]=f[p]||{},b=s);for(_ in b)y=g&&g[_],y&&((!("kill"in y.d)||y.d.kill(_)===!0)&&fl(this,y,"_pt"),delete g[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&$s(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return sa(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return sa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return tt.killTweensOf(r,s,a)},e}(Pa);vi(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(t){gt[t]=function(){var e=new Zt,i=Ic.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var Ku=function(e,i,n){return e[i]=n},Yh=function(e,i,n){return e[i](n)},Ab=function(e,i,n,r){return e[i](r.fp,n)},Eb=function(e,i,n){return e.setAttribute(i,n)},Ju=function(e,i){return st(e[i])?Yh:Bu(e[i])&&e.setAttribute?Eb:Ku},qh=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},Tb=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},Xh=function(e,i){var n=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},Zu=function(e,i){for(var n=i._pt;n;)n.r(e,n.d),n=n._next},Cb=function(e,i,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,i,n),s=a},Pb=function(e){for(var i=this._pt,n,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?fl(this,i,"_pt"):i.dep||(n=1),i=r;return!n},Ib=function(e,i,n,r){r.mSet(e,i,r.m.call(r.tween,n,r.mt),r)},Kh=function(e){for(var i=e._pt,n,r,s,a;i;){for(n=i._next,r=s;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:a)?i._prev._next=i:s=i,(i._next=r)?r._prev=i:a=i,i=n}e._pt=s},ai=function(){function t(i,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||qh,this.d=l||this,this.set=c||Ku,this.pr=u||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Ib,this.m=n,this.mt=s,this.tween=r},t}();si(Vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return Hu[t]=1});bi.TweenMax=bi.TweenLite=gt;bi.TimelineLite=bi.TimelineMax=Zt;tt=new Zt({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yi.stringFilter=Fh;var Sr=[],yo={},Mb=[],Cd=0,Ob=0,Bl=function(e){return(yo[e]||Mb).map(function(i){return i()})},Rc=function(){var e=Date.now(),i=[];e-Cd>2&&(Bl("matchMediaInit"),Sr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=qi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&i.push(n))}),Bl("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Cd=e,Bl("matchMedia"))},Jh=function(){function t(i,n){this.selector=n&&Mc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ob++,i&&this.add(i)}var e=t.prototype;return e.add=function(n,r,s){st(n)&&(s=r,r=n,n=st);var a=this,o=function(){var c=Ze,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Mc(s)),Ze=a,f=r.apply(a,arguments),st(f)&&a._r.push(f),Ze=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===st?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Ze;Ze=null,n(this),Ze=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof t?n.push.apply(n,r.getTweens()):r instanceof gt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof gt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Sr.length;a--;)Sr[a].id===this.id&&Sr.splice(a,1)},e.revert=function(n){this.kill(n||{})},t}(),zb=function(){function t(i){this.contexts=[],this.scope=i,Ze&&Ze.data.push(this)}var e=t.prototype;return e.add=function(n,r,s){ln(n)||(n={matches:n});var a=new Jh(0,s||this.scope),o=a.conditions={},l,c,u;Ze&&!a.selector&&(a.selector=Ze.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=qi.matchMedia(n[c]),l&&(Sr.indexOf(a)<0&&Sr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rc):l.addEventListener("change",Rc)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},t}(),$o={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.forEach(function(r){return Dh(r)})},timeline:function(e){return new Zt(e)},getTweensOf:function(e,i){return tt.getTweensOf(e,i)},getProperty:function(e,i,n,r){xt(e)&&(e=Ei(e)[0]);var s=wr(e||{}).get,a=n?kh:xh;return n==="native"&&(n=""),e&&(i?a((di[i]&&di[i].get||s)(e,i,n,r)):function(o,l,c){return a((di[o]&&di[o].get||s)(e,o,l,c))})},quickSetter:function(e,i,n){if(e=Ei(e),e.length>1){var r=e.map(function(u){return li.quickSetter(u,i,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=di[i],o=wr(e),l=o.harness&&(o.harness.aliases||{})[i]||i,c=a?function(u){var f=new a;Jr._pt=0,f.init(e,n?u+n:u,Jr,0,[e]),f.render(1,f),Jr._pt&&Zu(1,Jr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,i,n){var r,s=li.to(e,vi((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(i,l,c,u)};return a.tween=s,a},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=kr(e.ease,ys.ease)),kd(ys,e||{})},config:function(e){return kd(yi,e||{})},registerEffect:function(e){var i=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!di[o]&&!bi[o]&&Aa(i+" effect requires "+o+" plugin.")}),Dl[i]=function(o,l,c){return n(Ei(o),vi(l||{},s),c)},a&&(Zt.prototype[i]=function(o,l,c){return this.add(Dl[i](o,ln(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,i){Pe[e]=kr(i)},parseEase:function(e,i){return arguments.length?kr(e,i):Pe},getById:function(e){return tt.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var n=new Zt(e),r,s;for(n.smoothChildTiming=ri(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,r=tt._first;r;)s=r._next,(i||!(!r._dur&&r instanceof gt&&r.vars.onComplete===r._targets[0]))&&Ji(n,r,r._start-r._delay),r=s;return Ji(tt,n,0),n},context:function(e,i){return e?new Jh(e,i):Ze},matchMedia:function(e){return new zb(e)},matchMediaRefresh:function(){return Sr.forEach(function(e){var i=e.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&e.revert()})||Rc()},addEventListener:function(e,i){var n=yo[e]||(yo[e]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(e,i){var n=yo[e],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:fb,wrapYoyo:db,distribute:Ih,random:Oh,snap:Mh,normalize:ub,getUnit:jt,clamp:ab,splitColor:jh,toArray:Ei,selector:Mc,mapRange:Rh,pipe:lb,unitize:cb,interpolate:gb,shuffle:Ph},install:_h,effects:Dl,ticker:pi,updateRoot:Zt.updateRoot,plugins:di,globalTimeline:tt,core:{PropTween:ai,globals:yh,Tween:gt,Timeline:Zt,Animation:Pa,getCache:wr,_removeLinkedListItem:fl,reverting:function(){return Pt},context:function(e){return e&&Ze&&(Ze.data.push(e),e._ctx=Ze),Ze},suppressOverwrites:function(e){return Fu=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return $o[t]=gt[t]});pi.add(Zt.updateRoot);Jr=$o.to({},{duration:0});var Rb=function(e,i){for(var n=e._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},Lb=function(e,i){var n=e._targets,r,s,a;for(r in i)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Rb(a,r)),a&&a.modifier&&a.modifier(i[r],e,n[s],r))},$l=function(e,i){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(xt(s)&&(l={},si(s,function(u){return l[u]=1}),s=l),i){l={};for(c in s)l[c]=i(s[c]);s=l}Lb(o,s)}}}},li=$o.registerPlugin({name:"attr",init:function(e,i,n,r,s){var a,o,l;this.tween=n;for(a in i)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",i[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,i){for(var n=i._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,i){for(var n=i.length;n--;)this.add(e,n,e[n]||0,i[n],0,0,0,0,0,1)}},$l("roundProps",Oc),$l("modifiers"),$l("snap",Mh))||$o;gt.version=Zt.version=li.version="3.13.0";mh=1;$u()&&xs();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pd,Fn,as,Qu,mr,Id,ef,Db=function(){return typeof window<"u"},Sn={},dr=180/Math.PI,os=Math.PI/180,$r=Math.atan2,Md=1e8,tf=/([A-Z])/g,jb=/(left|right|width|margin|padding|x)/i,Nb=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lc=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Fb=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Bb=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},$b=function(e,i){var n=i.s+i.c*e;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},Zh=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},Qh=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},Wb=function(e,i,n){return e.style[i]=n},Ub=function(e,i,n){return e.style.setProperty(i,n)},Hb=function(e,i,n){return e._gsap[i]=n},Vb=function(e,i,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gb=function(e,i,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Yb=function(e,i,n,r,s){var a=e._gsap;a[i]=n,a.renderTransform(s,a)},nt="transform",oi=nt+"Origin",qb=function t(e,i){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Sn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=pn(r,o)}):this.tfm[e]=a.x?a[e]:pn(r,e),e===oi&&(this.tfm.zOrigin=a.zOrigin);else return Zi.transform.split(",").forEach(function(o){return t.call(n,o,i)});if(this.props.indexOf(nt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,i,"")),e=nt}(s||i)&&this.props.push(e,i,s[e])},em=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xb=function(){var e=this.props,i=this.target,n=i.style,r=i._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?i[e[s]](e[s+2]):i[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=ef(),(!s||!s.isStart)&&!n[nt]&&(em(n),r.zOrigin&&n[oi]&&(n[oi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},tm=function(e,i){var n={target:e,props:[],revert:Xb,save:qb};return e._gsap||li.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},im,Dc=function(e,i){var n=Fn.createElementNS?Fn.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fn.createElement(e);return n&&n.style?n:Fn.createElement(e)},Ti=function t(e,i,n){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(tf,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&t(e,ks(i)||i,1)||""},Od="O,Moz,ms,Ms,Webkit".split(","),ks=function(e,i,n){var r=i||mr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Od[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Od[a]:"")+e},jc=function(){Db()&&window.document&&(Pd=window,Fn=Pd.document,as=Fn.documentElement,mr=Dc("div")||{style:{}},Dc("div"),nt=ks(nt),oi=nt+"Origin",mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",im=!!ks("perspective"),ef=li.core.reverting,Qu=1)},zd=function(e){var i=e.ownerSVGElement,n=Dc("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),as.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),as.removeChild(n),s},Rd=function(e,i){for(var n=i.length;n--;)if(e.hasAttribute(i[n]))return e.getAttribute(i[n])},nm=function(e){var i,n;try{i=e.getBBox()}catch{i=zd(e),n=1}return i&&(i.width||i.height)||n||(i=zd(e)),i&&!i.width&&!i.x&&!i.y?{x:+Rd(e,["x","cx","x1"])||0,y:+Rd(e,["y","cy","y1"])||0,width:0,height:0}:i},rm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nm(e))},Pr=function(e,i){if(i){var n=e.style,r;i in Sn&&i!==oi&&(i=nt),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(tf,"-$1").toLowerCase())):n.removeAttribute(i)}},Bn=function(e,i,n,r,s,a){var o=new ai(e._pt,i,n,0,1,a?Qh:Zh);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Ld={deg:1,rad:1,turn:1},Kb={grid:1,flex:1},Kn=function t(e,i,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=mr.style,l=jb.test(i),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,g=r==="px",d=r==="%",b,_,y,p;if(r===a||!s||Ld[r]||Ld[a])return s;if(a!=="px"&&!g&&(s=t(e,i,n,"px")),p=e.getCTM&&rm(e),(d||a==="%")&&(Sn[i]||~i.indexOf("adius")))return b=p?e.getBBox()[l?"width":"height"]:e[u],lt(d?s/b*f:s/100*b);if(o[l?"width":"height"]=f+(g?a:r),_=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Fn||!_.appendChild)&&(_=Fn.body),y=_._gsap,y&&d&&y.width&&l&&y.time===pi.time&&!y.uncache)return lt(s/y.width*f);if(d&&(i==="height"||i==="width")){var m=e.style[i];e.style[i]=f+r,b=e[u],m?e.style[i]=m:Pr(e,i)}else(d||a==="%")&&!Kb[Ti(_,"display")]&&(o.position=Ti(e,"position")),_===e&&(o.position="static"),_.appendChild(mr),b=mr[u],_.removeChild(mr),o.position="absolute";return l&&d&&(y=wr(_),y.time=pi.time,y.width=_[u]),lt(g?b*s/f:b&&s?f/b*s:0)},pn=function(e,i,n,r){var s;return Qu||jc(),i in Zi&&i!=="transform"&&(i=Zi[i],~i.indexOf(",")&&(i=i.split(",")[0])),Sn[i]&&i!=="transform"?(s=Ma(e,r),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:Uo(Ti(e,oi))+" "+s.zOrigin+"px"):(s=e.style[i],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Wo[i]&&Wo[i](e,i,n)||Ti(e,i)||vh(e,i)||(i==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kn(e,i,s,n)+n:s},Jb=function(e,i,n,r){if(!n||n==="none"){var s=ks(i,e,1),a=s&&Ti(e,s,1);a&&a!==n?(i=s,n=a):i==="borderColor"&&(n=Ti(e,"borderTopColor"))}var o=new ai(this._pt,e.style,i,0,1,Xh),l=0,c=0,u,f,g,d,b,_,y,p,m,v,x,T;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Ti(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[i],e.style[i]=r,r=Ti(e,i)||r,_?e.style[i]=_:Pr(e,i)),u=[n,r],Fh(u),n=u[0],r=u[1],g=n.match(Kr)||[],T=r.match(Kr)||[],T.length){for(;f=Kr.exec(r);)y=f[0],m=r.substring(l,f.index),b?b=(b+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(b=1),y!==(_=g[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),y.charAt(1)==="="&&(y=ss(d,y)+x),p=parseFloat(y),v=y.substr((p+"").length),l=Kr.lastIndex-v.length,v||(v=v||yi.units[i]||x,l===r.length&&(r+=v,o.e+=v)),x!==v&&(d=Kn(e,i,_,v)||0),o._pt={_next:o._pt,p:m||c===1?m:",",s:d,c:p-d,m:b&&b<4||i==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=i==="display"&&r==="none"?Qh:Zh;return ph.test(r)&&(o.e=0),this._pt=o,o},Dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zb=function(e){var i=e.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),i[0]=Dd[n]||n,i[1]=Dd[r]||r,i.join(" ")},Qb=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,s=i.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Sn[o]&&(l=1,o=o==="transformOrigin"?oi:nt),Pr(n,o);l&&(Pr(n,nt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ma(n,1),a.uncache=1,em(r)))}},Wo={clearProps:function(e,i,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new ai(e._pt,i,n,0,0,Qb);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ia=[1,0,0,1,0,0],sm={},am=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jd=function(e){var i=Ti(e,nt);return am(i)?Ia:i.substr(7).match(gh).map(lt)},nf=function(e,i){var n=e._gsap||wr(e),r=e.style,s=jd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ia:s):(s===Ia&&!e.offsetParent&&e!==as&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,as.appendChild(e)),s=jd(e),l?r.display=l:Pr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):as.removeChild(e))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nc=function(e,i,n,r,s,a){var o=e._gsap,l=s||nf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,g=o.yOffset||0,d=l[0],b=l[1],_=l[2],y=l[3],p=l[4],m=l[5],v=i.split(" "),x=parseFloat(v[0])||0,T=parseFloat(v[1])||0,O,M,B,E;n?l!==Ia&&(M=d*y-b*_)&&(B=x*(y/M)+T*(-_/M)+(_*m-y*p)/M,E=x*(-b/M)+T*(d/M)-(d*m-b*p)/M,x=B,T=E):(O=nm(e),x=O.x+(~v[0].indexOf("%")?x/100*O.width:x),T=O.y+(~(v[1]||v[0]).indexOf("%")?T/100*O.height:T)),r||r!==!1&&o.smooth?(p=x-c,m=T-u,o.xOffset=f+(p*d+m*_)-p,o.yOffset=g+(p*b+m*y)-m):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=T,o.smooth=!!r,o.origin=i,o.originIsAbsolute=!!n,e.style[oi]="0px 0px",a&&(Bn(a,o,"xOrigin",c,x),Bn(a,o,"yOrigin",u,T),Bn(a,o,"xOffset",f,o.xOffset),Bn(a,o,"yOffset",g,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+T)},Ma=function(e,i){var n=e._gsap||new Uh(e);if("x"in n&&!i&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ti(e,oi)||"0",u,f,g,d,b,_,y,p,m,v,x,T,O,M,B,E,P,R,D,q,Z,se,te,G,K,ve,I,xe,Ie,at,Me,Ye;return u=f=g=_=y=p=m=v=x=0,d=b=1,n.svg=!!(e.getCTM&&rm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),r.scale=r.rotate=r.translate="none"),M=nf(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",G=""):G=!i&&e.getAttribute("data-svg-origin"),Nc(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,M)),T=n.xOrigin||0,O=n.yOrigin||0,M!==Ia&&(R=M[0],D=M[1],q=M[2],Z=M[3],u=se=M[4],f=te=M[5],M.length===6?(d=Math.sqrt(R*R+D*D),b=Math.sqrt(Z*Z+q*q),_=R||D?$r(D,R)*dr:0,m=q||Z?$r(q,Z)*dr+_:0,m&&(b*=Math.abs(Math.cos(m*os))),n.svg&&(u-=T-(T*R+O*q),f-=O-(T*D+O*Z))):(Ye=M[6],at=M[7],I=M[8],xe=M[9],Ie=M[10],Me=M[11],u=M[12],f=M[13],g=M[14],B=$r(Ye,Ie),y=B*dr,B&&(E=Math.cos(-B),P=Math.sin(-B),G=se*E+I*P,K=te*E+xe*P,ve=Ye*E+Ie*P,I=se*-P+I*E,xe=te*-P+xe*E,Ie=Ye*-P+Ie*E,Me=at*-P+Me*E,se=G,te=K,Ye=ve),B=$r(-q,Ie),p=B*dr,B&&(E=Math.cos(-B),P=Math.sin(-B),G=R*E-I*P,K=D*E-xe*P,ve=q*E-Ie*P,Me=Z*P+Me*E,R=G,D=K,q=ve),B=$r(D,R),_=B*dr,B&&(E=Math.cos(B),P=Math.sin(B),G=R*E+D*P,K=se*E+te*P,D=D*E-R*P,te=te*E-se*P,R=G,se=K),y&&Math.abs(y)+Math.abs(_)>359.9&&(y=_=0,p=180-p),d=lt(Math.sqrt(R*R+D*D+q*q)),b=lt(Math.sqrt(te*te+Ye*Ye)),B=$r(se,te),m=Math.abs(B)>2e-4?B*dr:0,x=Me?1/(Me<0?-Me:Me):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!am(Ti(e,nt)),G&&e.setAttribute("transform",G))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(d*=-1,m+=_<=0?180:-180,_+=_<=0?180:-180):(b*=-1,m+=m<=0?180:-180)),i=i||n.uncache,n.x=u-((n.xPercent=u&&(!i&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!i&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=g+a,n.scaleX=lt(d),n.scaleY=lt(b),n.rotation=lt(_)+o,n.rotationX=lt(y)+o,n.rotationY=lt(p)+o,n.skewX=m+o,n.skewY=v+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!i&&n.zOrigin||0)&&(r[oi]=Uo(c)),n.xOffset=n.yOffset=0,n.force3D=yi.force3D,n.renderTransform=n.svg?tv:im?om:ev,n.uncache=0,n},Uo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wl=function(e,i,n){var r=jt(i);return lt(parseFloat(i)+parseFloat(Kn(e,"x",n+"px",r)))+r},ev=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,om(e,i)},cr="0deg",Ls="0px",ur=") ",om=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,g=n.skewX,d=n.skewY,b=n.scaleX,_=n.scaleY,y=n.transformPerspective,p=n.force3D,m=n.target,v=n.zOrigin,x="",T=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==cr||u!==cr)){var O=parseFloat(u)*os,M=Math.sin(O),B=Math.cos(O),E;O=parseFloat(f)*os,E=Math.cos(O),a=Wl(m,a,M*E*-v),o=Wl(m,o,-Math.sin(O)*-v),l=Wl(m,l,B*E*-v+v)}y!==Ls&&(x+="perspective("+y+ur),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(T||a!==Ls||o!==Ls||l!==Ls)&&(x+=l!==Ls||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ur),c!==cr&&(x+="rotate("+c+ur),u!==cr&&(x+="rotateY("+u+ur),f!==cr&&(x+="rotateX("+f+ur),(g!==cr||d!==cr)&&(x+="skew("+g+", "+d+ur),(b!==1||_!==1)&&(x+="scale("+b+", "+_+ur),m.style[nt]=x||"translate(0, 0)"},tv=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,g=n.scaleY,d=n.target,b=n.xOrigin,_=n.yOrigin,y=n.xOffset,p=n.yOffset,m=n.forceCSS,v=parseFloat(a),x=parseFloat(o),T,O,M,B,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=os,c*=os,T=Math.cos(l)*f,O=Math.sin(l)*f,M=Math.sin(l-c)*-g,B=Math.cos(l-c)*g,c&&(u*=os,E=Math.tan(c-u),E=Math.sqrt(1+E*E),M*=E,B*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),T*=E,O*=E)),T=lt(T),O=lt(O),M=lt(M),B=lt(B)):(T=f,B=g,O=M=0),(v&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(v=Kn(d,"x",a,"px"),x=Kn(d,"y",o,"px")),(b||_||y||p)&&(v=lt(v+b-(b*T+_*M)+y),x=lt(x+_-(b*O+_*B)+p)),(r||s)&&(E=d.getBBox(),v=lt(v+r/100*E.width),x=lt(x+s/100*E.height)),E="matrix("+T+","+O+","+M+","+B+","+v+","+x+")",d.setAttribute("transform",E),m&&(d.style[nt]=E)},iv=function(e,i,n,r,s){var a=360,o=xt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?dr:1),c=l-r,u=r+c+"deg",f,g;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),f==="cw"&&c<0?c=(c+a*Md)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Md)%a-~~(c/a)*a)),e._pt=g=new ai(e._pt,i,n,r,c,Fb),g.e=u,g.u="deg",e._props.push(n),g},Nd=function(e,i){for(var n in i)e[n]=i[n];return e},nv=function(e,i,n){var r=Nd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,g,d,b;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[nt]=i,o=Ma(n,1),Pr(n,nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nt],a[nt]=i,o=Ma(n,1),a[nt]=c);for(l in Sn)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=jt(c),b=jt(u),f=d!==b?Kn(n,l,c,b):parseFloat(c),g=parseFloat(u),e._pt=new ai(e._pt,o,l,f,g-f,Lc),e._pt.u=b||0,e._props.push(l));Nd(o,r)};si("padding,margin,Width,Radius",function(t,e){var i="Top",n="Right",r="Bottom",s="Left",a=(e<3?[i,n,r,s]:[i+s,i+n,r+n,r+s]).map(function(o){return e<2?t+o:"border"+o+t});Wo[e>1?"border"+t:t]=function(o,l,c,u,f){var g,d;if(arguments.length<4)return g=a.map(function(b){return pn(o,b,c)}),d=g.join(" "),d.split(g[0]).length===5?g[0]:d;g=(u+"").split(" "),d={},a.forEach(function(b,_){return d[b]=g[_]=g[_]||g[(_-1)/2|0]}),o.init(l,d,f)}});var lm={name:"css",register:jc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,g,d,b,_,y,p,m,v,x,T,O,M,B;Qu||jc(),this.styles=this.styles||tm(e),B=this.styles.props,this.tween=n;for(_ in i)if(_!=="autoRound"&&(u=i[_],!(di[_]&&Hh(_,i,n,r,e,s)))){if(d=typeof u,b=Wo[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ta(u)),b)b(this,e,_,u,n)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Vn.lastIndex=0,Vn.test(c)||(y=jt(c),p=jt(u)),p?y!==p&&(c=Kn(e,_,c,p)+p):y&&(u+=y),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),B.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],xt(c)&&~c.indexOf("random(")&&(c=Ta(c)),jt(c+"")||c==="auto"||(c+=yi.units[_]||jt(pn(e,_))||""),(c+"").charAt(1)==="="&&(c=pn(e,_))):c=pn(e,_),g=parseFloat(c),m=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),f=parseFloat(u),_ in Zi&&(_==="autoAlpha"&&(g===1&&pn(e,"visibility")==="hidden"&&f&&(g=0),B.push("visibility",0,o.visibility),Bn(this,o,"visibility",g?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Sn,v){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Ti(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),x||(T=e._gsap,T.renderTransform&&!i.parseTransform||Ma(e,i.parseTransform),O=i.smoothOrigin!==!1&&T.smooth,x=this._pt=new ai(this._pt,o,nt,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new ai(this._pt,T,"scaleY",T.scaleY,(m?ss(T.scaleY,m+f):f)-T.scaleY||0,Lc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){B.push(oi,0,o[oi]),u=Zb(u),T.svg?Nc(e,u,0,O,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&Bn(this,T,"zOrigin",T.zOrigin,p),Bn(this,o,_,Uo(c),Uo(u)));continue}else if(_==="svgOrigin"){Nc(e,u,1,O,0,this);continue}else if(_ in sm){iv(this,T,_,g,m?ss(g,m+u):u);continue}else if(_==="smoothOrigin"){Bn(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){nv(this,u,e);continue}}else _ in o||(_=ks(_)||_);if(v||(f||f===0)&&(g||g===0)&&!Nb.test(u)&&_ in o)y=(c+"").substr((g+"").length),f||(f=0),p=jt(u)||(_ in yi.units?yi.units[_]:y),y!==p&&(g=Kn(e,_,c,p)),this._pt=new ai(this._pt,v?T:o,_,g,(m?ss(g,m+f):f)-g,!v&&(p==="px"||_==="zIndex")&&i.autoRound!==!1?$b:Lc),this._pt.u=p||0,y!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Bb);else if(_ in o)Jb.call(this,e,_,c,m?m+u:u);else if(_ in e)this.add(e,_,c||e[_],m?m+u:u,r,s);else if(_!=="parseTransform"){Uu(_,u);continue}v||(_ in o?B.push(_,0,o[_]):typeof e[_]=="function"?B.push(_,2,e[_]()):B.push(_,1,c||e[_])),a.push(_)}}M&&Kh(this)},render:function(e,i){if(i.tween._time||!ef())for(var n=i._pt;n;)n.r(e,n.d),n=n._next;else i.styles.revert()},get:pn,aliases:Zi,getSetter:function(e,i,n){var r=Zi[i];return r&&r.indexOf(",")<0&&(i=r),i in Sn&&i!==oi&&(e._gsap.x||pn(e,"x"))?n&&Id===n?i==="scale"?Vb:Hb:(Id=n||{})&&(i==="scale"?Gb:Yb):e.style&&!Bu(e.style[i])?Wb:~i.indexOf("-")?Ub:Ju(e,i)},core:{_removeProperty:Pr,_getMatrix:nf}};li.utils.checkPrefix=ks;li.core.getStyleSaver=tm;(function(t,e,i,n){var r=si(t+","+e+","+i,function(s){Sn[s]=1});si(e,function(s){yi.units[s]="deg",sm[s]=1}),Zi[r[13]]=t+","+e,si(n,function(s){var a=s.split(":");Zi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){yi.units[t]="px"});li.registerPlugin(lm);var ls=li.registerPlugin(lm)||li;ls.core.Tween;const Es=(t,e)=>{const i=t.__vccOpts||t;for(const[n,r]of e)i[n]=r;return i},rv={class:"navbar navbar-chang navbar-expand-lg"},sv={class:"container position-re"},av={class:"row"},ov={class:"col-lg-3 col-6 order1"},lv={class:"bord"},cv={class:"col-lg-6 order3"},uv={class:"full-width"},fv={class:"navbar-nav text-center"},dv={class:"nav-item"},gv={class:"nav-item"},pv={class:"nav-item"},hv={class:"nav-item"},mv={class:"nav-item"},_v={class:"nav-item"},yv={class:"col-lg-3 col-6 order2"},bv={class:"bord d-flex justify-content-end"},vv={class:"overlay"},wv={__name:"AppNavbar",setup(t){const e=Nu(),i=Ge(!1),n=Ge(window.innerWidth>991),r=Ge(null),s=()=>{i.value=!i.value},a=()=>{n.value=window.innerWidth>991,n.value&&(i.value=!1)};return Cn(()=>{window.addEventListener("resize",a),a()}),Cu(()=>{window.removeEventListener("resize",a)}),Bi(i,async o=>{o&&!n.value&&(await Dr(),ls.fromTo(r.value,{y:-100,autoAlpha:0,filter:"blur(50px)"},{y:0,autoAlpha:1,filter:"blur(0px)",duration:.5,ease:"power2.out"}))}),Bi(()=>e.path,()=>{n.value||(i.value=!1)}),(o,l)=>{const c=jr("router-link");return ue(),me(yt,null,[h("nav",rv,[h("div",sv,[h("div",av,[h("div",ov,[h("div",lv,[ce(c,{class:"logo icon-img-120",to:"/"},{default:it(()=>l[0]||(l[0]=[h("img",{src:Uy,alt:"荷馬桑 Homer Shie - 視覺設計師標誌",loading:"eager"},null,-1)])),_:1,__:[0]})])]),h("div",cv,[jn(h("div",{class:ps(["bg",{open:i.value}]),ref_key:"bgRef",ref:r},[h("div",uv,[h("ul",fv,[h("li",dv,[ce(c,{class:"nav-link",to:"/"},{default:it(()=>l[1]||(l[1]=[h("span",{class:"rolling-text"},"首頁",-1)])),_:1,__:[1]})]),h("li",gv,[ce(c,{class:"nav-link",to:"/about"},{default:it(()=>l[2]||(l[2]=[h("span",{class:"rolling-text"},"關於",-1)])),_:1,__:[2]})]),h("li",pv,[ce(c,{class:"nav-link",to:"/services"},{default:it(()=>l[3]||(l[3]=[h("span",{class:"rolling-text"},"服務",-1)])),_:1,__:[3]})]),h("li",hv,[ce(c,{class:"nav-link",to:"/portfolio"},{default:it(()=>l[4]||(l[4]=[h("span",{class:"rolling-text"},"作品",-1)])),_:1,__:[4]})]),h("li",mv,[ce(c,{class:"nav-link",to:"/blogs"},{default:it(()=>l[5]||(l[5]=[h("span",{class:"rolling-text"},"部落格",-1)])),_:1,__:[5]})]),h("li",_v,[ce(c,{class:"nav-link",to:"/contact"},{default:it(()=>l[6]||(l[6]=[h("span",{class:"rolling-text"},"聯絡我",-1)])),_:1,__:[6]})])])])],2),[[vc,i.value||n.value]])]),h("div",yv,[h("div",bv,[l[8]||(l[8]=Ii('<ul class="social d-flex rest" data-v-c0187b26><li data-v-c0187b26><a href="https://www.instagram.com/homer_create" rel="noopener noreferrer" target="_blank" aria-label="前往 Instagram 查看荷馬桑作品" data-v-c0187b26><i class="fab fa-instagram" aria-hidden="true" data-v-c0187b26></i></a></li><li data-v-c0187b26><a href="https://github.com/homershie" rel="noopener noreferrer" target="_blank" aria-label="前往 GitHub 查看荷馬桑的程式" data-v-c0187b26><i class="fab fa-github" aria-hidden="true" data-v-c0187b26></i></a></li><li data-v-c0187b26><a href="https://medium.com/homer-create" rel="noopener noreferrer" target="_blank" aria-label="前往 Medium 閱讀荷馬桑文章" data-v-c0187b26><i class="fab fa-medium" aria-hidden="true" data-v-c0187b26></i></a></li></ul>',1)),h("button",{class:ps(["navbar-toggler",{active:i.value}]),type:"button",onClick:vr(s,["stop"])},l[7]||(l[7]=[h("span",{class:"icon-bar"},null,-1),h("span",{class:"icon-bar"},null,-1),h("span",{class:"icon-bar"},null,-1)]),2)])])])])]),(ue(),zu(u_,{to:"body"},[jn(h("div",vv,null,512),[[vc,i.value&&!n.value]])]))],64)}}},xv=Es(wv,[["__scopeId","data-v-c0187b26"]]),kv={class:"container pb-30 pt-30 bord-thin-top"},Sv={class:"row"},Av={class:"col-12"},Ev={class:"text-center"},Tv={class:"fz-13"},Cv={__name:"AppFooter",setup(t){const e=ze(()=>new Date().getFullYear());return(i,n)=>(ue(),me("footer",null,[h("div",kv,[h("div",Sv,[h("div",Av,[h("div",Ev,[h("p",Tv,[Je(" © "+we(e.value)+" Homer Shie. Proudly powered by ",1),n[0]||(n[0]=h("span",{class:"underline main-color"},[h("a",{href:"https://themeforest.net/user/ui-themez",target:"_blank",rel:"noopener noreferrer"},"Ui-ThemeZ")],-1))])])])])])]))}},Pv=Es(Cv,[["__scopeId","data-v-4d001553"]]),Iv={class:"loader-wrap"},cm={__name:"PreLoader",emits:["loaded"],setup(t,{emit:e}){const i=e,n=Ge(!0);return Cn(()=>{ls.timeline({onComplete(){n.value=!1,i("loaded")}}).to(".loader-wrap-heading .load-text",{y:-100,opacity:0,delay:1.5}).to("#loader-path",{attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},duration:.5,ease:"power2.easeIn"}).to("#loader-path",{attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},duration:.5,ease:"power2.easeOut"}).to("#svg",{opacity:0,duration:.5},"<").to(".loader-wrap",{y:-1500}).set(".loader-wrap",{display:"none"})}),(r,s)=>jn((ue(),me("div",Iv,s[0]||(s[0]=[h("svg",{id:"svg",viewBox:"0 0 1000 1000",preserveAspectRatio:"none"},[h("path",{id:"loader-path",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})],-1),h("div",{class:"loader-wrap-heading"},[h("div",{class:"load-text"},[h("span",null,"L"),h("span",null,"o"),h("span",null,"a"),h("span",null,"d"),h("span",null,"i"),h("span",null,"n"),h("span",null,"g")])],-1)]),512)),[[vc,n.value]])}},Mv={id:"app"},Ov={__name:"App",setup(t){const e=Ge(!0);return(i,n)=>(ue(),me("div",Mv,[ce(cm,{onLoaded:n[0]||(n[0]=r=>e.value=!1)}),ce(xv),h("main",null,[ce(rn(lh))]),ce(Pv)]))}},um="/assets/imgs/header/profile.jpg",S=t=>`/assets/imgs/works/${t}`,rf=[{id:1,title:"獸人",description:"獸人數位素描。",website:null,image:S("work_0001.jpg"),mainImage:S("work_0001.jpg"),gallery:[],category:["插畫"],client:null,date:"2013-08-27",type:"image"},{id:2,title:"中國水墨風",description:"中國水墨風格。",website:null,image:S("work_0002.jpg"),mainImage:S("work_0002.jpg"),gallery:[],category:["插畫"],client:null,date:"2015-01-09",type:"image"},{id:3,title:"水彩",description:"水彩的上色練習。",website:null,image:S("work_0003.jpg"),mainImage:S("work_0003.jpg"),gallery:[],category:["插畫"],client:null,date:"2012-07-30",type:"image"},{id:4,title:"水墨之力",description:"水墨媒材的數位繪畫。",website:null,image:S("work_0004.jpg"),mainImage:S("work_0004.jpg"),gallery:[],category:["插畫"],client:null,date:"2013-10-07",type:"image"},{id:5,title:"忍野忍",description:"水彩媒材加上忍野忍。",website:null,image:S("work_0005.jpg"),mainImage:S("work_0005.jpg"),gallery:[],category:["插畫"],client:null,date:"2013-09-12",type:"image"},{id:6,title:"怪奇墳墓",description:"神奇的墓園。",website:null,image:S("work_0006.jpg"),mainImage:S("work_0006.jpg"),gallery:[],category:["插畫"],client:null,date:"2013-10-30",type:"image"},{id:7,title:"練習當刺客",description:"刺客教條的數位作畫練習。",website:null,image:S("work_0007.jpg"),mainImage:S("work_0007.jpg"),gallery:[],category:["插畫"],client:null,date:"2013-11-15",type:"image"},{id:8,title:"驚魚",description:"一隻魚逃出了作為寵物的命運，毅然決然游向自由的大海，但是等著牠的只有現實。這是在學期間插畫課的一系列插畫，用8張圖說一個故事。",website:null,image:S("work_0008.jpg"),mainImage:S("work_0008.jpg"),gallery:[],category:["插畫"],client:null,date:"2014-12-29",type:"image"},{id:9,title:"肌肉女",description:"角色設計練習，練習人體解剖的肌肉，",website:null,image:S("work_0009.jpg"),mainImage:S("work_0009.jpg"),gallery:[],category:["插畫"],client:null,date:"2015-01-19",type:"image"},{id:10,title:"霸凌至零 Bully to Zero-24屆金犢獎",description:`霸凌帶來快感，但背後相伴著落寞，透過同理心將霸凌至零，替人生填上色彩。
組員：謝昇運/許庭維/黃敦樸/蔡謹存
指導老師：侯文治`,website:null,image:S("work_0010.jpg"),mainImage:S("work_0010.jpg"),gallery:[],category:["動畫"],client:null,date:"2015-10-13",type:"video",video:"https://www.youtube.com/embed/lHxQZbZKkcw?si=jJv8fC4S1ZACmJ_8"},{id:11,title:"銀河鬧艦隊-系學會活動",description:"系學會活動倒數宣傳影片，用影片開始太空艦的小強人出發，用現有的照片變成外星小強倒數。",website:null,image:S("work_0011.jpg"),mainImage:S("work_0011.jpg"),gallery:[],category:["影片剪輯","影片特效"],client:null,date:"2015-10-13",type:"image"},{id:12,title:"Whispbar商品形象圖",description:"過去兼職使用在自家電商的商品介紹用圖，Whispbar車頂架。",website:"http://www.pcstore.com.tw/acmelux29950316/M23014722.htm",image:S("work_0012.jpg"),mainImage:S("work_0012.jpg"),gallery:[],category:["平面設計"],client:"松果戶外",date:"2016-04-15",type:"image"},{id:13,title:"Coleman商品形象圖",description:"過去兼職使用在自家電商的商品介紹用圖，Coleman北極星汽化燈。",website:"http://www.pcstore.com.tw/acmelux29950316/M24057715.htm",image:S("work_0013.jpg"),mainImage:S("work_0013.jpg"),gallery:[],category:["平面設計"],client:"松果戶外",date:"2016-04-15",type:"image"},{id:14,title:"今敏網頁設計",description:"在學時期以今敏導演為主題所建置的網頁作品，使用到html、CSS、JQuery，主要介紹生平經歷、作品、作品分析等等。",website:"https://homershie.com/Kon-Satoshi-Introduction/",image:S("work_0014.jpg"),mainImage:S("work_0014.jpg"),gallery:[],category:["網頁設計"],client:null,date:"2015-12-31",type:"image"},{id:15,title:"Vetrump競標提案",description:"客戶訴求以Tiffany綠為主、簡約時尚風格並具有獨特性、識別度強烈，因此以英文字母V延伸為紙飛機，帶上夢想的意涵。",website:null,image:S("work_0015.jpg"),mainImage:S("work_0015.jpg"),gallery:[],category:["品牌設計"],client:"待補",date:"2016-04-28",type:"image"},{id:16,title:"2017媒體公民會議",description:'裝飾風藝術Art Deco是盛行在20世紀中葉的藝術風格，有"現代、菁英"文化符碼，透過使用裝飾風藝術的圖樣與媒體產業賴以為生的四項工具組合而成的圖像，搭配曼菲斯風格的近代配色，組合成媒體公民會議的主視覺。',website:null,image:S("work_0016.jpg"),mainImage:S("work_0016.jpg"),gallery:[],category:["主視覺設計"],client:"詩柏夏廣告有限公司",date:"2017-06-01",type:"image"},{id:17,title:"綠色哨音 Green Whistle",description:`海龜與男孩在海邊過著簡單愉快的生活，卻因為污染而被分開；
海龜以為小男孩會回來，就在相處的海岸地痴痴地等待，但等到的的不是男孩，而是....

A sea turtle lived a happy life with a boy, but their life was torn by the pollution.
This innocent animal believed that the boy would come back to him and waited at the seashore for a long time. However, it couldn't find the little boy ...

輔仁大學應用美術系106級 
電腦動畫組 畢業專題

Director
謝昇運 Homer Shie

Producer
謝昇運 Homer Shie

Script
莊佳蓉 Chia-Jung Chuang｜謝昇運 Homer Shie

Art
許庭維 Bealy Hsu｜莊佳蓉 Chia-Jung Chuang

Modeling
劉俊毅 Tim Liu｜黃敦樸 Gary Huang

Rigging
劉俊毅 Tim Liu｜黃敦樸 Gary Huang

Texturing
許庭維 Bealy Hsu｜莊佳蓉 Chia-Jung Chuang

Lighting
謝昇運 Homer Shie

Rendering
謝昇運 Homer Shie

Compositing
謝昇運 Homer Shie

VFX
謝昇運 Homer Shie

2D animation
許庭維 Bealy Hsu｜莊佳蓉 Chia-Jung Chuang

3D animation
劉俊毅 Tim Liu｜黃敦樸 Gary Huang｜謝昇運 Homer Shie

Music & Sound Production
紋聲音樂​ ​​WinSound Studio ​

Music ＆ Sound Design
林孝親 Hsiao-Chin Lin｜林思妤 Szu-Yu Lin

Whistle
江志倫 Chih-Lun Chiang

Scoring Mixer & Re-recording Mixer
林孝親 Hsiao-Chin Lin

Boy
林佑俽 Yu-Hsin Lin（聲產力文創 Sounds Great Institute）

Turtle
江志倫 Chih-Lun Chiang（聲產力文創 Sounds Great Institute）

Voice Recording
林孝親 Hsiao-Chin Lin

Recoring Studio
浮光音樂錄音室 Fullight Music`,website:null,image:S("work_0017.jpg"),mainImage:S("work_0017.jpg"),gallery:[S("project/work_main_0017_A.png"),S("project/work_main_0017_B.png")],category:["動畫"],client:null,date:"2017-06-23",type:"video",video:"https://player.vimeo.com/video/222200986?h=ac9b6caa54"},{id:18,title:"2017旅運時空資料分析與公共運輸服務應用發展計畫成果影片",description:"動畫介紹系統能透過手機偵測到民眾的位置，回報到中央系統，判斷何處人潮眾多，並回報到大眾交通系統，在特定時間配合增加或縮減班次。",website:null,image:S("work_0018.jpg"),mainImage:S("work_0018.jpg"),gallery:[],category:["動態設計","動畫"],client:"詩柏夏廣告有限公司",date:"2017-11-25",type:"video",video:"https://www.youtube.com/embed/L_RP1c2Ldrw?si=6lrmxvPe5711TArZ"},{id:19,title:"2017 Showreel",description:"截至2017年底為止的動態設計、動畫等作品。",website:null,image:S("work_0019.jpg"),mainImage:S("work_0019.jpg"),gallery:[],category:["動態設計","動畫"],client:null,date:"2018-01-12",type:"video",video:"https://player.vimeo.com/video/261434754?h=3e9ab57dd5"},{id:20,title:"同學贊文理補習班 Thumbs up Education",description:`同學贊是莫言的詩，緬懷在學時代的美好回憶，因此以學士帽、推手、擁抱為主要的視覺元素，在理性的升學中加入擁抱的感性元素，在圖像上表達客戶對同學們除了成績之外，更有無限關愛。

客戶Client: 同學贊文理補習班 `,website:null,image:S("work_0020.jpg"),mainImage:S("work_0020.jpg"),gallery:[],category:["品牌設計"],client:"同學贊文理補習班 ",date:"2018-04-13",type:"image"},{id:21,title:"無人機創新應用論壇",description:"無人機在這幾年蓬勃法展，不同的應用方式讓人充滿希望與驚奇，就像是孩提時代最愛玩的戳戳樂，以圓跟戳戳樂的概念發想，以創新及驚奇為訴求，搭配簡潔的用色完成的主視覺作品。",website:null,image:S("work_0021.jpg"),mainImage:S("work_0021.jpg"),gallery:[],category:["動態設計","動畫"],client:"詩柏夏廣告有限公司",date:"2018-06-06",type:"video",video:"https://www.youtube.com/embed/kKotFu2245k?si=9ZEfdkV3tNfbAt6v"},{id:22,title:"大鵬灣賽車boom x pscct",description:"為PSCCT在大鵬灣舉辦車聚所需要的宣傳用Logo，主要將火焰與惡魔的表情動起來，做成GIF的Loop動畫。",website:null,image:S("work_0022.gif"),mainImage:S("work_0022.gif"),gallery:[],category:["動畫"],client:"巧思娛樂",date:"2018-07-25",type:"image"},{id:23,title:"加強高齡行人及兒童交通安全宣導",description:`台北市政府警察局、交通部道安會、內政部警政署等三個單位聯合針對高齡及兒童舉辦的交通宣導活動，主視覺以摩西過海的概念發想，搭配日常生活中家長帶小朋友過馬路的畫面，將人物象徵成摩西，只要待在斑馬線中就能將交通工具分在左右兩側，安全無虞。
使用帶有童趣的蠟筆媒材表現，希望能讓小朋友對海報產生共鳴，也激起大人想保護小朋友的情感，從而注重交通安全規範。`,website:null,image:S("work_0023.jpg"),mainImage:S("work_0023.jpg"),gallery:[],category:["主視覺設計"],client:"詩柏夏廣告有限公司",date:"2018-08-17",type:"image"},{id:24,title:"淡淡的蛋蛋 Egg",description:"蛋黃裡面是生命。",website:null,image:S("work_0024.jpg"),mainImage:S("work_0024.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-07-23",type:"image"},{id:25,title:"苦痛的向上 Up painfully",description:"硬拉著同事、親人、朋友、愛人們一起朝向更好的生活，是折磨還是幸福。",website:null,image:S("work_0025.jpg"),mainImage:S("work_main_0025.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-08-07",type:"image"},{id:26,title:"愛心 Love",description:"以愛心符號為主形體，融合立體派、普普藝術、荷蘭風格派、超扁平風格，把矛盾、衝突加入愛心，表達對濫情的省思。",website:null,image:S("work_0026.jpg"),mainImage:S("work_0026.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-08-17",type:"image"},{id:27,title:"蛙生苦短 Life is short",description:`含著水鴛鴦青蛙。
A frog which a firecracker is on its mouth.
`,website:null,image:S("work_0027.jpg"),mainImage:S("work_0027.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-08-24",type:"image"},{id:28,title:"哭哭冰淇淋 Melting ice cream",description:`模仿美式漫畫的向量畫風，在炎炎夏日中的冰淇淋兄弟漸漸承受不住高溫而融化，戲謔且痛苦。

In a vector art style reminiscent of American comics, the ice cream brothers gradually melt under the scorching summer heat, a scene that is both humorous and painful.`,website:null,image:S("work_0028.jpg"),mainImage:S("work_0028.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-08-24",type:"image"},{id:29,title:"打撈 Salvage",description:`上班的過程像被捕上漁船。
The process of going to office is like being salvaged by a fishing boat.`,website:null,image:S("work_0029.jpg"),mainImage:S("work_0029.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-09-03",type:"image"},{id:30,title:"合流 String",description:`一隻黑熊，染著金髮，穿著嘻哈的衣服，頭頂美國飛來的棒球帽，站在宣紙上，身上的影子還是日本漫畫常見的網點。
A black bear, dyed with blond hair, wearing hip hop clothes and a baseball cap flying over from America, standing on rice paper, the shadow is still a common screentone pattern from Japanese manga.`,website:null,image:S("work_0030.jpg"),mainImage:S("work_0030.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-09-09",type:"image"},{id:31,title:"包租婆 Landlady",description:`不知道這樣認不認得出來，來自田中一光的風格，從功夫跑出來的包租婆。
Don't know if you can recognize her? A style from Ikko Tanaka, and this character is "Landlady" from movie 《Kung Fu Hustle》`,website:null,image:S("work_0031.jpg"),mainImage:S("work_0031.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-09-09",type:"image"},{id:32,title:"刺蝟 Hedgehog",description:`刺向別人，也扎著自己。
Stinging to other, but also stabbing yourself.`,website:null,image:S("work_0032.jpg"),mainImage:S("work_0032.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-09-14",type:"image"},{id:33,title:"永劫回歸 Eternal return",description:`來自生命中不可承受之輕的靈感，加上台灣的配色。
use idea from 'The Unbearable Lightness of Being' and color from Taiwan.`,website:null,image:S("work_0033.jpg"),mainImage:S("work_0033.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-09-27",type:"image"},{id:34,title:"寶物庫 Treasure library",description:`
第16屆Clip Studio與Adobe合作舉辦的國際插畫競賽訂定主題為寶物，為了參加比賽，這張圖以台灣傳統的柑仔店為主題，回憶小時候走進柑仔店發現琳琅滿目的零食跟玩具，像是走進寶物庫一樣讓人沉醉。

The 16th session of Clip Studio and Adobe's international illustrator competition set the theme as treasures. In order to participate in the competition, this picture is based on the traditional Taiwanese grocery store. When I was a child, I went to the citrus shop and found a lot of snacks and toys. It is as intoxicating as walking into the treasure library.`,website:null,image:S("work_0034.jpg"),mainImage:S("work_0034.jpg"),gallery:[],category:["插畫"],client:null,date:"2018-10-31",type:"image"},{id:35,title:"2018 旅運時空資料分析與公共運輸服務應用發展計畫成果影片",description:"隨著手機的日漸普及，在臺灣地區，幾乎是人手一機，透過手機與基地台間的訊號互動，可以在50公尺大小的網格中定位出民眾大概的所在位置，推估出民眾的時空軌跡與旅運需求，再據此提供合適的公共運輸服務。",website:null,image:S("work_0035.jpg"),mainImage:S("work_0035.jpg"),gallery:[],category:["動態設計","動畫"],client:"詩柏夏廣告有限公司",date:"2018-11-12",type:"video",video:"https://www.youtube.com/embed/JJtgXHyUFxU?si=MO0aYGpliQ4-aKlA"},{id:36,title:"貓熊馬戲團 Circus Panda",description:`快來!免費欣賞!新來的貓熊騎單車遛達去!
帶著紅色單車上的貓熊到處冒險，或者欣賞貓熊嘗試穿越超小圈圈吧!

Come on in! The show is free! We have just recruited a new panda! Look! He's trying so hard to entertain the audience!
Carry him around and watch him ride on his tiny red bicycle, or hooping the much too small hula hoop anywhere you go!`,website:"https://apps.garmin.com/zh-TW/apps/7cce4e72-5fba-4553-bfa6-ea18ac45a79c",image:S("work_0036.gif"),mainImage:S("work_0036.gif"),gallery:[],category:["平面設計","UI/UX","插畫","動畫"],client:"Gamin Ltd.",date:"2019-04-10",type:"image"},{id:37,title:"逃出錶面！ Animal Smash!",description:`錶面上的動物企圖逃出錶面!逃脫不成的動物，貼著錶面滑下來了。

讓大貓熊、小貓熊、丹頂鶴、金絲猴和華南虎留在錶面上。

此款錶面顯示日期、時間、步數以及電池效能。

也可自選背景顏色隨意與動物搭配。

Watch as animals attempt, and fail to, break free of your watch… and slide off the screen.

Kept inside your watch are the Giant Panda, the Red Panda, the Red-Crowned Crane, the Golden Monkey, and the South China Tiger.

Displayed on the screen are the date, time, steps taken, and the battery status.

You can also select the back ground color to go with each animal.`,website:"https://apps.garmin.com/zh-TW/apps/12f00785-5c17-4ce2-b5a4-7d6fe22e4c13",image:S("work_0037.gif"),mainImage:S("work_0037.gif"),gallery:[S("project/work_main_0037_A.png"),S("project/work_main_0037_B.png")],category:["平面設計","UI/UX","插畫","動畫"],client:"Gamin Ltd.",date:"2018-08-31",type:"image"},{id:38,title:"格鬥熊貓 PANDA-MAN",description:`我是唯一的格鬥熊貓，世界上獨一無二的貓熊超級英雄。
如果貓熊這兩個詞讓你想到毛茸茸可以抱緊處理的胖胖肉球的話，那你就大錯特錯了，這個黑白錶面就是對熊貓最貼切的詮釋。

錶面上輪番出現我的帥臉、厚實的拳頭、頭冠、我嘶吼的英姿還有瀟灑的背影！慷慨如我願意騰出空間顯示時間、日期、電池效能並從6種數據中選一種顯示，當然還要加上我的專屬圖章。

如果你偏好可愛的貓熊，儘管去下載數百萬種可愛版熊貓錶面啦！

但是，真正的格鬥熊貓就只有我一個！

You there. I'm PANDA-MAN. The one and only superhero panda in the world.
If the word PANDA reminds you of some cuddly, clumsy, furry, FAT MEATBALLS, then you are SERIOUSLY MISTAKEN, and I will make your watch face BLACK-AND-WHITE to show you once and for all what a TRUE PANDA is like.

You will be greeted with (in sequence) my FACE, my PAWNCH, my CROWN, my ROAR and my BACK, as a bonus I will also show you the time, date, battery status, and one of SIX stats I keep track of, adorned with my signature icons.

If you still prefer those DUMBED DOWN existences you find cute, feel free to go download any of the MILLIONS OF CUTE PANDA WATCH FACES OUT THERE.

But remember: There is, and will ever be, only one PANDA-MAN.`,website:"https://apps.garmin.com/zh-TW/apps/94532bcd-0e92-49b3-ba78-e003bee8f3ac",image:S("work_0038.png"),mainImage:S("work_0038.png"),gallery:[],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2018-12-25",type:"image"},{id:39,title:"柯基 Corgi",description:`繞圈圈的柯基，在追著什麼呢?啊，尾巴!

A corgi is running in a circle. What is it chasing? Ah, its own tail!`,website:"https://apps.garmin.com/zh-TW/apps/d5cf60d2-4ec6-4450-b082-0b3a9adea6bd",image:S("work_0039.gif"),mainImage:S("work_0039.gif"),gallery:[],category:["平面設計","UI/UX","插畫","動畫"],client:"Gamin Ltd.",date:"2019-07-18",type:"image"},{id:40,title:"貓熊寶寶 Panda Baby",description:`你願意幫忙照顧這隻可愛的貓熊寶寶嗎?帶著貓熊寶寶到處去、陪玩、伴讀、餵三餐，睡前記得唱個催眠曲幫助貓熊寶寶入眠。

Care to babysit our little panda? Walk with him, play with him, study with him, and don't forget to feed him well and put him to sleep at night.`,website:"https://apps.garmin.com/zh-TW/apps/5f30b7d1-8d25-4243-8b23-3833c9059bbe",image:S("work_0040.png"),mainImage:S("work_0040.png"),gallery:[S("project/work_main_0040_A.png"),S("project/work_main_0040_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2019-04-24",type:"image"},{id:41,title:"西瓜甜甜 Sweet Watermelon",description:`錶面上的西瓜剖面圖，搭配簡潔的指針設計，真想知道西瓜甜不甜?

A cross-section of watermelon with neatly designed watch hands - a tempting design that reminds you of the sweetness of the fruit.`,website:"https://apps.garmin.com/zh-TW/apps/d7b7b622-fb68-4c45-943b-4e8a8b010473",image:S("work_0041.png"),mainImage:S("work_0041.png"),gallery:[],category:["平面設計","UI/UX","動畫"],client:"Gamin Ltd.",date:"2019-07-30",type:"image"},{id:42,title:"緹花 Abstract Flowers",description:`選用抽象的花朵意象，以漸層背景映襯，帶來優雅且智慧的一面。

Using abstract flower patterns on a gradient background, this watch face will give your watch an elegant and smart look.`,website:"https://apps.garmin.com/EN/apps/dd5f241e-5b74-47a3-b4a9-06aff3ec188f",image:S("work_0042.png"),mainImage:S("work_0042.png"),gallery:[],category:["平面設計","UI/UX","動畫"],client:"Gamin Ltd.",date:"2019-07-09",type:"image"},{id:43,title:"運球前進 Dribble forward",description:`這款錶面以趣味的像素方式，呈現踢球前進的運動員。不管是誰，都可以帶著足球一直往前進!

The watch face shows a playful pixel version of an athlete kicking a ball forward. Anyone can take a soccer ball and run with it. `,website:"https://apps.garmin.com/zh-TW/apps/fb15609a-84c4-4874-bf09-6653f9c1d145",image:S("work_0043.gif"),mainImage:S("work_0043.gif"),gallery:[S("project/work_main_0043_A.png"),S("project/work_main_0043_B.png")],category:["平面設計","UI/UX","插畫","動畫"],client:"Gamin Ltd.",date:"2019-07-31",type:"image"},{id:44,title:"簡單的夏天 A Simple Summer",description:`將時間抽象簡化為兩種幾合圖形疊加的三色文字，利用檸檬、莓果、橘子三種水果色彩，帶來清爽的視覺感受。整體使用幾何、圓潤的造型元素!

This watch face uses simplified font with fruity colors and geometric, smooth elements.`,website:"https://apps.garmin.com/zh-TW/apps/b1d206b9-59b1-4ef7-9bea-6fb023213445",image:S("work_0044.png"),mainImage:S("work_0044.png"),gallery:[S("project/work_main_0044_A.png"),S("project/work_main_0044_B.png")],category:["平面設計","UI/UX"],client:"Gamin Ltd.",date:"2019-09-06",type:"image"},{id:45,title:"芒果與夏天 Mango Summer",description:`紅、橘、黃，滿版的芒果彷彿可以聞到夏日的香氣，搭配清爽的背景色，讓人精神為之一振!

Red, orange and yellow - an entire watch face of mangos will surely give you a taste of the summer. The refreshing background color only makes it more invigorating!`,website:"https://apps.garmin.com/zh-TW/apps/146b688c-4921-409c-94ba-5addb0812f50",image:S("work_0045.png"),mainImage:S("work_0045.png"),gallery:[],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2019-07-30",type:"image"},{id:46,title:"獬豸 Xie Zhi",description:`獬豸是東亞神話中的一種神獸，代表著公義。錶面中除了獬豸也融入喜鵲以及太極，兩種圖案都是南韓的象徵物。

The Xie Zhi, also known as Haetae, is a legendary beast from East Asian mythology that often regarded as a creature of justice. Besides the Xie Zhi, the watch look is also completed with a magpie bird and Taegeuk, both serve as symbols representing South Korea.`,website:"https://apps.garmin.com/zh-TW/apps/658abb1f-bbcd-4375-9871-796673dd76a7",image:S("work_0046.png"),mainImage:S("work_0046.png"),gallery:[S("project/work_main_0046_A.png"),S("project/work_main_0046_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-09-30",type:"image"},{id:47,title:"全國循環創新競賽 宣傳影片",description:`剪輯 Video Editor：荷馬桑 Homer Shie
特效 VFX：荷馬桑 Homer Shie

經濟部工業局特舉辦「全國循環創新競賽」，廣邀國內大專院校學生參與，並鼓勵不同學科系跨領域合作，使競賽作品具備多領域之元素，包含方案原創性、循環再利用性、方案影響深度、方案可行性評估及未來替代產出的效益等，共同為循環經濟及永續發展盡一份力。`,website:null,image:S("work_0047.jpg"),mainImage:S("work_0047.jpg"),gallery:[],category:["影片剪輯","影片特效"],client:"詩柏夏廣告有限公司",date:"2020-11-17",type:"video",video:"https://www.youtube.com/embed/iya8S2q8LXA?si=DBGxlPxTSiYe551_"},{id:48,title:"海洋夢 Sea Dream",description:`靜靜地躺在海底享受太陽透過海水折射出的閃耀光芒，一起體會身在海中和不同海底生物共存的美好，潛水吧！

Lie quietly on the seabed and enjoy the sparkling light refracted by the sun through the water. Experience the beauty of being in the sea and coexisting with different marine creatures. Let's go diving!`,website:null,image:S("work_0048.png"),mainImage:S("work_0048.png"),gallery:[],category:["插畫"],client:null,date:"2020-10-18",type:"image"},{id:49,title:"手寫的溫度 Flow of Hands",description:`這款手寫字錶面，讓漸層的文字看起來彷彿在流動一般，帶來輕鬆隨性的效果。

The handwritten numbers appears as if they are flowing, portraying the carefree attitude toward life.`,website:"https://apps.garmin.com/zh-TW/apps/dc72dc6e-becd-4494-80cd-4c7e023ea34a",image:S("work_0049.jpg"),mainImage:S("work_0049.jpg"),gallery:[S("project/work_main_0049_A.png")],category:["平面設計","UI/UX"],client:"Gamin Ltd.",date:"2019-10-5",type:"image"},{id:50,title:"遠山 Shan Shui",description:`宣紙上的墨色暈染開來，錶面上的雲霧與山林交織，此刻的山有如海上的群島一般，佐以直立書寫的時間，傳達悠遠寧靜的氛圍。

The watch face features mountains painted with ink on calligraphic paper. The mountains peak out from under a sea of cloud, like an archipelago in the ocean. The artwork is accompanied with vertically written time, emanating a serene feeling.`,website:"https://apps.garmin.com/zh-TW/apps/e8f9a2d8-15bf-4bfa-87b0-32b22af4edb8",image:S("work_0050.jpg"),mainImage:S("work_0050.jpg"),gallery:[],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2019-10-5",type:"image"},{id:51,title:"可愛白兔 White Rabbit",description:`這款錶面以金色手寫字體和討喜的小白兔圖案搭配花草與彩蛋，讓人滿心期待迎接美好春日的到來。

Decorated with gold handwritten font and adorable white bunny surrounded by flowers and painted eggs, you've never been so hyped to kick off your best spring ever.`,website:"https://apps.garmin.com/zh-TW/apps/1955ad4b-c236-41dd-83e2-7acdc9421b83",image:S("work_0051.jpg"),mainImage:S("work_0051.jpg"),gallery:[S("project/work_main_0051_A.png"),S("project/work_main_0051_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-3-30",type:"image"},{id:52,title:"暖狐 Fox",description:`沉浸在和煦陽光中的小火狐，準備好陪伴您上路。充滿童趣的藝術風格帶給您鼓動內心的溫暖與幸福。

Basked in warm sunbeam, this little red fox is ready to accompany you anywhere. The cute art style just makes your heart flutter with warmth and happiness.`,website:"https://apps.garmin.com/zh-TW/apps/ea745edd-5f8f-49e9-af30-db5bbfd6835e",image:S("work_0052.jpg"),mainImage:S("work_0052.jpg"),gallery:[S("project/work_main_0052_A.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-6-11",type:"image"},{id:53,title:"遊戲 Retro Games",description:`將漸層和切角的數字加入錶面，時間的字體使畫面活潑，在右欄刻意列出較多細節，讓錶面看來像復古遊戲的畫面。

The isometric blocks of time in vivid colors on the left, and the lines of data on the right bring back memories of the old retro arcade games.`,website:"https://apps.garmin.com/zh-TW/apps/5fe279fe-c5fc-4e49-908e-e81f91aeb9ed",image:S("work_0053.jpg"),mainImage:S("work_0053.jpg"),gallery:[S("project/work_main_0053_A.png")],category:["平面設計","UI/UX"],client:"待補",date:"2019-10-24",type:"image"},{id:54,title:"錦鯉 Koi",description:`這款錶面設計靈感來自流傳於東亞文化的魚躍龍門，相傳一隻鯉魚躍上龍門後變身成一條龍，後來成為人們追求成功的象徵。這款錶面以知名的浮世繪畫風呈現，完美展現傳統元素的魅力。

This watch face is inspired from East Asian literature about a carp that could leap over the Dragon Gate and transform into a dragon, which then becomes a symbol of man's desire for success. Painted with the well-known Ukiyo-e art style, this watch face truly accentuates its traditional charm.`,website:"https://apps.garmin.com/zh-TW/apps/bb9809d0-80b1-49fb-b6ee-86549c8fd9ed",image:S("work_0054.jpg"),mainImage:S("work_0054.jpg"),gallery:[S("project/work_main_0054_A.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-8-11",type:"image"},{id:55,title:"蓮花 Lotus",description:`蓮花是越南國花，代表著純潔及神聖之美。簡約典雅的設計為您的優雅造型加分。

Lotus is the national flower of Vietnam that signifies purity and divine beauty. With a simple yet elegant design, this watch face is ready to complete your chic look.`,website:"https://apps.garmin.com/zh-TW/apps/69edfd2d-f925-420f-a0cd-af66673db8d4",image:S("work_0055.jpg"),mainImage:S("work_0055.jpg"),gallery:[S("project/work_main_0055_A.png"),S("project/work_main_0055_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-8-7",type:"image"},{id:56,title:"復古都會 Urban Retro",description:`用這款 1980 年代主題的錶面創造屬於您的虛擬世界。金屬色系搭配金屬風格營造出新舊夾雜的復古未來風。

Create your own virtual world with this memorable 80's-themed watch face. The metallic color combination and style reminds you of a new yet nostalgic retro futuristic feeling.`,website:"https://apps.garmin.com/zh-TW/apps/ee142e7e-c614-4488-86c4-d9936aeefea6",image:S("work_0056.jpg"),mainImage:S("work_0056.jpg"),gallery:[S("project/work_main_0056_A.png"),S("project/work_main_0056_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-8-18",type:"image"},{id:57,title:"歡樂 Jolly",description:`用這款活力十足的錶面為您的跨年慶祝活動增添色彩。幾何方形背景呈現出相互堆疊的禮物盒，讓您隨時隨地與他人分享喜悅。

Liven up your end-of-the-year celebration with this vibrant watch face. The geometric square background is neatly arranged into a collection of tiny gifts, ready to be shared.`,website:"https://apps.garmin.com/zh-TW/apps/23a38575-731a-44ed-ad44-0c7cb69b74ab",image:S("work_0057.png"),mainImage:S("work_0057.png"),gallery:[S("project/work_main_0056_A.png"),S("project/work_main_0056_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-8-7",type:"image"},{id:58,title:"跨年夜 New Year's Eve",description:`準備好目睹今年最華麗的煙火！時鐘呈現於立體大樓屋頂上，隨著時間推移改變外觀。紅藍配色讓您在跨年夜維持優雅低調的風格。

Be ready to witness the grandest firework this year! The clock sits at the top of an isometric-style rooftop and reshapes to different appearances when the number changes. With its' reddish-blue color pallete, keep your style in check during the New Year's Eve celebration.`,website:"https://apps.garmin.com/zh-TW/apps/c5777aae-82db-47c7-ba16-0b755c9c11c6",image:S("work_0058.png"),mainImage:S("work_0058.png"),gallery:[S("project/work_main_0058_A.png"),S("project/work_main_0058_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-10-18",type:"image"},{id:59,title:"水果跑者 Food Runner",description:"輕快調皮的柳橙選手位居第一，奇異果選手雖然身材不如人但靠著拚勁緊追在後，草莓選手不慌不忙的在賽道外跟著加油，憨厚的鳳梨選手就算有點落後還是沒有放棄，平時疏於鍛鍊的蘋果選手動起來啦！",website:null,image:S("work_0059.gif"),mainImage:S("work_0059.gif"),gallery:[],category:["動畫"],client:"Gamin Ltd.",date:"2020-4-28",type:"image"},{id:60,title:"成為傳奇－傳承款A－相撲 Road to Legend - Heritage A - Sumo",description:`陶醉於相撲之美，這項展現謙遜與恆心的日本國技以絢麗的紅白藍配色呈現。

Revel in the beauty of 'sumo', one of Japan's national sports that symbolizes modesty and persistence, splashed in stunning colours of red, white and blue.`,website:"https://apps.garmin.com/zh-TW/apps/2e14fc8e-d98c-4d72-b312-b2cf3e6a50f7",image:S("work_0060.png"),mainImage:S("work_0060.png"),gallery:[],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2021-7-12",type:"image"},{id:61,title:"成為傳奇－傳承款B－鳥居 Road to Legend - Heritage A - Torii",description:`陶醉於嚴島神社的水上鳥居之美，這座日本文化地標以絢麗的紅白藍配色呈現。

Revel in the beauty of the "floating torii gate" in Itsukushima Shinto Shrine, one of Japan's iconic cultural landmarks, splashed in stunning colours of red, white and blue.`,website:"https://apps.garmin.com/zh-TW/apps/d7e2f610-b8f3-4206-8b73-05bac2a2e75e",image:S("work_0061.png"),mainImage:S("work_0061.png"),gallery:[],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2021-7-12",type:"image"},{id:62,title:"成為傳奇－傳承款C－金魚Road to Legend - Heritage A - Goldfish",description:`陶醉於金魚之美，這個代表尊貴、財富與繁榮的日本文化象徵以絢麗的紅白藍配色呈現。

Revel in the beauty of the "goldfish", one of Japan's prominent cultural symbols of nobility, fortune and prosperity, splashed in stunning colours of red, white and blue.`,website:"https://apps.garmin.com/zh-TW/apps/cb2c38fb-c980-4b93-9e45-d3dd70347a4e",image:S("work_0062.png"),mainImage:S("work_0062.png"),gallery:[],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2021-7-12",type:"image"},{id:63,title:"海底世界 The World Under",description:`縱身俯衝躍入更深層的迷人海底世界。 探索滿佈各種奇異水中生物與繽紛多彩珊瑚礁的大自然之美。

Plunge deeper to the enchanting world below the sea. Explore the beauty of mother nature filled with exotic underwater creatures and colorful coral reefs.`,website:"https://apps.garmin.com/zh-TW/apps/99d7dbbd-ee9b-4ed7-a59d-e68dabd1c575#compatible-devices",image:S("work_0063.png"),mainImage:S("work_0063.png"),gallery:[S("project/work_main_0063_A.png"),S("project/work_main_0063_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2020-11-6",type:"image"},{id:64,title:"遐想 Reverie",description:`填滿療癒的長春花藍色，這款錶面呈現出空靈的視覺效果，帶你進入遐想的世界。

Imbued with the soothing very peri color, this watch face offers an ethereal visual that draws you into reverie.`,website:"https://apps.garmin.com/zh-TW/apps/d106a720-19ab-4d3c-85ad-2ed0ceaaae8d",image:S("work_0064.png"),mainImage:S("work_0064.png"),gallery:[S("project/work_main_0064_A.png"),S("project/work_main_0064_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2022-2-8",type:"image"},{id:65,title:"雪之舞 Snow Dance",description:`藍色調中的波浪線象徵著充滿歡樂的節奏運動，好似雪在寒冷的天氣中隨風起舞。同時無縫地交織在一起，代表了在團結中克服逆境的意象。

The waving lines in blue color pallete symbolize a rythmic movement full of cheeriness, akin to how the snow dances in the wind of a frosty weather. They intertwine seamlessly as to represent the impression of overcoming adversity in togetherness.`,website:"https://apps.garmin.com/jp/apps/280da24c-b20d-4693-8aa2-2287a2c8e290",image:S("work_0065.png"),mainImage:S("work_0065.png"),gallery:[S("project/work_main_0065_A.png"),S("project/work_main_0065_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2022-1-19",type:"image"},{id:66,title:"母愛如水 The Philosophy of Mother and Water",description:`就像流向大海的河川，越往下游越寬大，母親為孩子無條件付出的愛，也是源源不絕。下載這款錶面，和摯愛的母親一起慶祝這個特別的日子。

Just as how the river flows constantly and keeps getting bigger until it reaches the sea, the love of a mother always flows unconditionally. Download this watch face and celebrate this very special day with our beloved mother.`,website:"https://apps.garmin.com/zh-TW/apps/c98d9093-f107-467b-a704-80e948761ced",image:S("work_0066.png"),mainImage:S("work_0066.png"),gallery:[S("project/work_main_0066_A.png"),S("project/work_main_0066_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2022-3-1",type:"image"},{id:67,title:"父愛如山 The Philosophy of Father and Mountain",description:`與父親之間的珍貴互動將永遠烙印在我們的心中。錶面背景中的山岳代表父親的堅持不懈。透過粗獷的幾何線條及雜訊紋理效果詮釋穩固如山的父愛。

Precious interaction with dear father is something that will be engraved in our heart forever. The mountains on the background represent the perseverance of a father. His love, solid as a mountain, is depicted through the use of rigid geometric lines and noise texture.`,website:"https://apps.garmin.com/zh-TW/apps/2f9525cc-b1f7-48bb-9b46-34466ec0d0b3",image:S("work_0067.png"),mainImage:S("work_0067.png"),gallery:[S("project/work_main_0067_A.png"),S("project/work_main_0067_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2022-3-1",type:"image"},{id:68,title:"明日惜食主廚",description:"以手、鮮食、重生的概念做為發想，使用比較童趣的配色互相交疊象徵合作，宣導剩食也是美食的概念。",website:"https://www.gogreenchef.org.tw/",image:S("work_0068.png"),mainImage:S("work_main_0068_A.png"),gallery:[S("project/work_main_0068_B.png"),S("project/work_main_0068_C.png")],category:["品牌設計"],client:null,date:"2022-6-29",type:"image"},{id:69,title:"生化人 Cyborg",description:`拼湊成一體的各式金屬物件營造粗曠的金屬質感，彷彿生化人的身體部位。黑白配色同時為錶面注入令人熟悉的科幻感。

Pieces of steel components arranged into one, creates a rigid and metallic impression that resembles the body parts of a cyborg. The monochromatic colors also accentuate a familiar sci-fi feel into the watch face.`,website:"https://apps.garmin.com/zh-TW/apps/71ba9f20-9439-4819-b4d5-d8c06c4bf69f",image:S("work_0069.png"),mainImage:S("work_0069.png"),gallery:[S("project/work_main_0069_A.png"),S("project/work_main_0069_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2021-4-30",type:"image"},{id:70,title:"副櫛龍 Parasaurus",description:`靈感來自1990年代電玩的像素化設計，造型可愛的鴨嘴龍站在迷人的夜空下，準備好編織您的童年回憶。

Inspired by the pixelated design of 90s games, this adorable parasaurus bunch is standing under a captivating night sky, ready to weave nostalgic reminiscence of your childhood memories.`,website:"https://apps.garmin.com/zh-TW/apps/2f1b0a59-7a3c-40d4-b913-36f2dc42c678",image:S("work_0070.gif"),mainImage:S("work_0070.gif"),gallery:[S("project/work_main_0070_A.png"),S("project/work_main_0070_B.png")],category:["平面設計","UI/UX","插畫","動畫"],client:"Gamin Ltd.",date:"2021-3-26",type:"image"},{id:71,title:"潛水高手 Diver",description:`帶著這款專為潛水玩家設計的錶面，讓您的水下探索來到嶄新的深度。潛水裝備以街頭風黑白插畫呈現，作為錶面的主題元素，為您的腕錶塑造獨特的魅力。

Dive to a whole new depth of wonder wih the perfect watch face designed specifically for diving lovers. The diving equipment is designed with street-style illustrations in black and white, and put as the main focus to create a unique display for your watch.`,website:"https://apps.garmin.com/zh-TW/apps/d430ce96-dfc2-4b2d-9eed-ce4c39404e05",image:S("work_0071.png"),mainImage:S("work_0071.png"),gallery:[S("project/work_main_0071_A.png"),S("project/work_main_0071_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2021-9-27",type:"image"},{id:72,title:"Garmin開機動畫 Garmin booting animation",description:`以Garmin Logo中使用的三角形元素設計出像火箭起飛意象的開機動畫，配合以程式運行的文字動畫。

Using the triangular elements used in the Garmin Logo to design a booting animation that looks like a rocket taking off, combined with a 'Hello!' text animation that runs by programing.`,website:null,image:S("work_0072.gif"),mainImage:S("work_0072.gif"),gallery:[],category:["動態設計","UI/UX"],client:"Gamin Ltd.",date:"2022-6-29",type:"image"},{id:73,title:"幾何式讀取動畫 Geometry loading animation",description:`用方形跟稜角的概念構想機械幾何感的讀取icon動畫。

Use the concept of square and angular to conceive the loading icon animation of mechanical geometry.`,website:null,image:S("work_0073.gif"),mainImage:S("work_0073.gif"),gallery:[],category:["動態設計","UI/UX"],client:null,date:"2022-9-21",type:"image"},{id:74,title:"活動icon動畫Animated activity icon",description:`在Gamin手錶上表示進行中活動的icon動畫化。

Animated icons representing ongoing activities on Garmin watchface.`,website:null,image:S("work_0074.gif"),mainImage:S("work_0074.gif"),gallery:[],category:["動態設計","UI/UX"],client:"Gamin Ltd.",date:"2023-4-10",type:"image"},{id:75,title:"小村遠遠－形象宣傳動畫",description:`專案管理 Project Manager：洄幀映像
製片 Producer：洄幀映像
導演 Director：洄幀映像
分鏡 Storyboard：洄幀映像、黑眼珠音像藝術
美術監督 Art Director：荷馬桑 Homer Shie
人物設計 Character Design：荷馬桑 Homer Shie
場景設計 Scene design：荷馬桑 Homer Shie
動畫 Animation：黑眼珠音像藝術 Black Pupil Sounds and Image Studio
合成 Compositing：黑眼珠音像藝術 Black Pupil Sounds and Image Studio`,website:"https://www.farfarawayvillage.com/?fbclid=IwAR0Wjt_s0dGEkXx6siIxsBjwjJnJ-lYiMgeIBAvrspQqOjugeGQDZ8a5I9Y",image:S("work_0075.jpg"),mainImage:S("work_0075.jpg"),gallery:[S("project/work_main_0075_A.jpg"),S("project/work_main_0075_B.jpg")],category:["美術設計"],client:"小村遠遠",date:"2023-1-17",type:"video",video:"https://www.youtube.com/embed/h_Mt34f342o?si=1bx-Ues406I7XzvQ"},{id:76,title:"海洋奇想 Ocean Fantasy",description:`在浩瀚海底，百萬年人類文明持續昌盛並與水中生物和睦共存，創造出豐富的驚奇寶庫。這款藍紫配色錶面，喚醒一座海底奇想世界，以繽紛珊瑚礁點綴裝飾。

At the bottom of the sea, lies a million years old of human civilization that thrives and blends with life below water, creating a magnificent treasure trove of wonder. Infused with blue and puple, this watch face awakens a fantasy world under the sea, adorned with colorful coral reefs.`,website:"https://apps.garmin.com/zh-TW/apps/65b1b0bf-b224-4b5f-920f-1fb3319f8cf0",image:S("work_0076.png"),mainImage:S("work_0076.png"),gallery:[S("project/work_main_0076_A.png"),S("project/work_main_0076_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2022-4-28",type:"image"},{id:77,title:"霓虹星球 Neon Planet",description:`在這座看似蘊藏先進文明的夢幻星球開啟一段嶄新的旅程。結合簡單的資料欄位配置，符合你對 錶面設計簡潔又美觀的期待。

Unlock a new adventure in a dreamy planet that seems to hide a mysterious advanced civilization underneath. Combined with a simple layout of data fields, it has all the beauty and simplicity you look for in a watch face.`,website:"https://apps.garmin.com/zh-TW/apps/c572d26e-a0e7-4da5-8e3e-fce3240ddecb",image:S("work_0077.png"),mainImage:S("work_0077.png"),gallery:[S("project/work_main_0077_A.png"),S("project/work_main_0077_B.png")],category:["平面設計","UI/UX","插畫","3D"],client:"Gamin Ltd.",date:"2022-9-1",type:"image"},{id:78,title:"木曜四限定錶面 Muyao Limited Watch Face",description:`2020年底木曜四造訪 Garmin 拍攝一日系列，答應送給 KID 的手錶中，預設的錶面之一，有幸負責動畫呈現和 UI 設計的部分。

At the end of 2020, I visited Garmin to shoot a one-day series and agreed to give KID a watch. One of the default watch faces was designed by me, and I was fortunate enough to be responsible for the animation and UI design.`,website:null,image:S("work_0078.gif"),mainImage:S("work_0078.gif"),gallery:[S("project/work_main_0078_A.png"),S("project/work_main_0078_B.png")],category:["平面設計","UI/UX","動畫"],client:"Gamin Ltd.",date:"2020-12-22",type:"image"},{id:79,title:"WatchiBeastie - 你的健康好習慣怪獸夥伴",description:`WatchiBeastie 結合經典虛擬寵物養成遊戲與健康習慣養成目標，激勵你使用 Garmin 手錶多運動、健康吃、好好睡覺來讓你的怪獸進化！

WatchiBeastie combines the classic virtual pet raising game with the goal of motivating you to exercise more, eat well, and sleep tight to raise your beastie with your Garmin watch!`,website:"https://apps.garmin.cn/zh-TW/apps/492a2959-7a9b-4146-b97d-7aa502df2765",image:S("work_0079.gif"),mainImage:S("work_0079.gif"),gallery:[S("project/work_main_0079_A.png"),S("project/work_main_0079_B.png")],category:["美術設計","UI/UX","動畫"],client:"Gamin Ltd.",date:"2023-10-17",type:"image"},{id:80,title:"虛擬山景 Virtual Mountain",description:`以朦朧線條和圓點構成的虛擬山景作為背景，突出的金屬質感數字呈現出科幻感。你可以從三個顏色中選擇你喜愛的背景色。

The virtual scenery of mountains formed by blurry lines and dots set as a background for the metallic numbers up front to create a sci-fi feeling. Pick your favorite background color from the three options available.`,website:"https://apps.garmin.cn/zh-TW/apps/e082d3fd-045a-44d5-a180-a0cb6761cb70",image:S("work_0080.png"),mainImage:S("work_0080.png"),gallery:[S("project/work_main_0080_A.png"),S("project/work_main_0080_B.png")],category:["平面設計","UI/UX","3D"],client:"Gamin Ltd.",date:"2023-5-12",type:"image"},{id:81,title:"虛擬山景 Virtual Mountain",description:`想堆雪人嗎？馬上來堆！而且不用到雪地裡把自己弄得又濕又冷喔！你只需要達到自己的每日目標，雪人就會自己堆起來，還會為你穿上衣服。

Would you like to build a snowman? Now you can! Without getting cold and wet in a snowfield too! All you have to do is reach your daily goals, and the snowman will be built, and dressed, for you.`,website:"https://apps.garmin.cn/zh-TW/apps/e8487c0e-87d4-42f7-aa0d-959c815fa4aa",image:S("work_0081.png"),mainImage:S("work_0081.png"),gallery:[S("project/work_main_0081_A.png"),S("project/work_main_0081_B.png")],category:["平面設計","UI/UX","3D"],client:"Gamin Ltd.",date:"2023-11-14",type:"image"},{id:82,title:"雪中高爾夫 Golf in the Snow",description:`冬天要來了！看來聖誕老人正為他的全球之旅暖身中！

Winter is coming! And looks like Santa is warming up for his trip around the globe!`,website:"https://apps.garmin.cn/zh-TW/apps/8d01e3f9-4eb8-463f-89d0-c1d8960c1e9e",image:S("work_0082.gif"),mainImage:S("work_0082.gif"),gallery:[S("project/work_main_0082_A.png"),S("project/work_main_0082_B.png")],category:["平面設計","UI/UX","3D"],client:"Gamin Ltd.",date:"2023-5-12",type:"image"},{id:83,title:"2024 Garmin Run 亞洲系列賽",description:`Garmin Run 亞洲系列賽再度開跑。今年的賽事擴大到亞洲 9 大城市。一起為下一站的賽事倒數，或顯示你選擇的城市，在背景中呈現相應的市景。

GARMIN RUN ASIA SERIES is back, and this year the event has expanded to nine cities across Asia. We will count down the days to the next stage of the run, or the city you select, with a matching stylized cityscape in the background.`,website:"https://apps.garmin.cn/zh-TW/apps/8d01e3f9-4eb8-463f-89d0-c1d8960c1e9e",image:S("work_0083.png"),mainImage:S("work_0083.png"),gallery:[S("project/work_main_0083_A.png"),S("project/work_main_0083_B.png")],category:["平面設計","UI/UX","3D"],client:"Gamin Ltd.",date:"2024-7-10",type:"image"},{id:84,title:"聖誕花圈 Christmas Wreath",description:`今年聖誕節佈置就從你腕上的這款花圈開始！經典的金色字樣增添過節的歡樂氣氛。你還能在 4 種裝飾品之間切換：松果、薑餅人、拐杖糖和裝飾球。

Start decorating this Christmas with a wreath on your wrist! The wreath comes with vintage gold fonts that evoke the joy of Christmas. You can also switch between 4 options included in this watch face: pinecones, gingerbread men, candy canes, and baubles.`,website:"https://apps.garmin.cn/zh-TW/apps/f20f4285-dff3-4431-95d1-ebc5249d5677",image:S("work_0084.png"),mainImage:S("work_0084.png"),gallery:[S("project/work_main_0084_A.png"),S("project/work_main_0084_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2024-9-24",type:"image"},{id:85,title:"越野跑者 Trail Runner",description:`這款木版畫風格的錶面描繪一名在不同風景中跑向地平線的跑者。風景會隨著你的海拔變化而切換。

This woodblock-print styled watch face depicts a runner running towards the horizon on different landscapes. The landscape changes as you reach different altitudes.`,website:"https://apps.garmin.cn/zh-TW/apps/ba270df7-3a7e-475e-ade5-0c9403ee5048?tid=0",image:S("work_0085.png"),mainImage:S("work_0085.png"),gallery:[S("project/work_main_0085_A.png"),S("project/work_main_0085_B.png")],category:["平面設計","UI/UX","插畫"],client:"Gamin Ltd.",date:"2025-1-17",type:"image"},{id:86,title:"壯寶的運動日常 Live Healthy and Be STRONG!",description:`跟著 2025 世界壯年運動會吉祥物壯寶一起健康生活！
壯寶一早會帶頭晨跑為你開啟一天，下午會展現 10 種訓練動畫，晚上則會陪你獲得充足睡眠。世壯運前一週壯寶還會和你一起倒數迎接開幕日！
動得好更要睡得好，一起為世壯運加油！

Embrace a healthier lifestyle with Strong — Mascot of the World Masters Games 2025!​
Strong leads the way with a morning run to kick off the day, followed by 10 animated sports throughout the afternoon, and gets a restful sleep during the night. All while counting down to the WMG opening day!`,website:"https://apps.garmin.cn/zh-TW/apps/ba270df7-3a7e-475e-ade5-0c9403ee5048?tid=0",image:S("work_0086.gif"),mainImage:S("work_0086.gif"),gallery:[S("project/work_main_0086_A.png"),S("project/work_main_0086_B.png")],category:["平面設計","UI/UX","動畫"],client:"Gamin Ltd.",date:"2025-4-17",type:"image"},{id:87,title:"流動的時鐘 Flowing Clock ",description:`流動中的時間：一場 Canvas 上的視覺實驗
這不是普通的時鐘，而是一場時間與動態設計的融合練習。以 JavaScript 操作 Canvas，呈現每秒流動的抽象曲線與時分秒結構，結合程式邏輯與視覺美感。是作品，也是冥想。

Time in Motion: A Visual Meditation with Canvas
More than just a clock, this is a visual experiment in the fluidity of time. Using JavaScript and Canvas, abstract curves flow and morph with every passing second. A fusion of logic and aesthetics—a poetic visualization of time you can watch unfold.`,website:"https://github.com/homershie/flowing_clock",image:S("work_0087.png"),mainImage:S("work_0087.png"),gallery:[],category:["網頁設計","UI/UX"],client:"N/A",date:"2025-5-2",type:"image"},{id:88,title:"財富的重量 Weight of Wealth",description:`一場關於熱量、慾望與資本的點擊遊戲實驗。
在這款迷因風格的增量式遊戲中，你不是賺錢，而是囤積熱量。點擊薯條，解鎖雞塊與漢堡，雇用吉祥物加速你的肥胖之路。一切只是娛樂？還是你已經身陷現代社會對「消費」的崇拜？這不只是一款遊戲，是一面諷刺的鏡子。

A Clicker Game of Calories, Cravings & Capitalism.
In this meme-style incremental game, you don’t earn gold—you hoard calories. Click falling fries, unlock nuggets and burgers, and hire mascots to boost your consumption. Satire? Simulation? Or simply addictive fun in the face of our modern worship of consumer culture?`,website:"https://github.com/homershie/weight_of_wealth",image:S("work_0088.png"),mainImage:S("work_0088.png"),gallery:[],category:["網頁設計","UI/UX"],client:"N/A",date:"2025-5-22",type:"image"},{id:89,title:"吃我壓路機！－無限 ORA ORA / Road Roller Da ∞ ORAORA INFINITY",description:`承太郎 vs 迪奧：用拳頭對抗從天而降的壓路機！
改編自經典動漫場景的防守型遊戲，玩家需操控承太郎的拳頭，擊退不斷飛來的壓路機。打擊節奏越快，分數越高。DIO 的怒火如潮水湧來，你是否能撐到最後？

Defend with Your Fist: Jotaro vs DIO in a Roadroller Showdown!
Inspired by the iconic anime moment, this defense-style mini game pits you as Jotaro, fending off Dio’s endless barrage of falling road rollers. Punch fast, survive long, and rack up your score as the chaos intensifies. Simple to play, hard to master—pure ORA ORA fury.`,website:"https://github.com/homershie/road_roller_da",image:S("work_0089.png"),mainImage:S("work_0089.png"),gallery:[],category:["網頁設計","UI/UX"],client:"N/A",date:"2025-5-27",type:"image"}],zv={class:"hero section-padding"},Rv={class:"container"},Lv={class:"row"},Dv={class:"col-lg-5"},jv={class:"intro"},Nv={class:"lg-box"},Fv={class:"box1"},Bv={class:"tow-items"},$v={class:"item1 box-shadwo"},Wv={class:"circle-item d-flex align-items-center justify-content-center"},Uv={class:"text-center mt-30"},Hv={href:"/assets/resume/Homer_Shie_Resume.pdf",target:"_blank"},Vv={class:"arrow-down",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 34.2 32.3","xml:space":"preserve",style:{"stroke-width":"2"}},Gv={class:"item2"},Yv={class:"sub-item1 box-shadwo d-flex align-items-center justify-content-center"},qv={class:"text-center"},Xv={class:"fw-700"},Kv={class:"item-down box-shadwo d-flex align-items-center"},Jv={class:"circle-item d-flex align-items-center justify-content-center"},Zv={class:"arrow-right",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 34.2 32.3","xml:space":"preserve",style:{"stroke-width":"2"}},Qv={class:"ml-15"},ew={class:"box2"},tw={class:"item4 box-shadwo d-flex align-items-center"},iw={class:"author-profile"},nw={class:"butns mt-30"},rw={class:"col-lg-7 valign"},sw={class:"content"},aw={class:"stauts mt-50 pt-50 bord-thin-top"},ow={class:"d-flex align-items-center"},lw={class:"mr-40"},cw={class:"d-flex align-items-center"},uw={class:"ml-auto"},fw={class:"butn-presv"},dw={__name:"HomeView",setup(t){const e=ze(()=>new Date().getFullYear()-2018),i=ze(()=>rf.length);return(n,r)=>{const s=jr("router-link");return ue(),me("section",zv,[h("div",Rv,[h("div",Lv,[h("div",Dv,[h("div",jv,[h("div",Nv,[h("div",Fv,[h("div",Bv,[h("div",$v,[h("div",Wv,[h("h6",null,[ce(s,{to:"/about"},{default:it(()=>r[0]||(r[0]=[Je("關於我")])),_:1,__:[0]})])]),h("div",Uv,[h("a",Hv,[(ue(),me("svg",Vv,r[1]||(r[1]=[h("line",{x1:"0",y1:"16",x2:"33",y2:"16"},null,-1),h("line",{x1:"17.3",y1:"0.7",x2:"33.2",y2:"16.5"},null,-1),h("line",{x1:"17.3",y1:"31.6",x2:"33.5",y2:"15.4"},null,-1)]))),r[2]||(r[2]=h("p",{class:"fz-13 mt-15"},"下載履歷",-1))])])]),h("div",Gv,[h("div",Yv,[h("div",qv,[h("h2",Xv,we(e.value),1),r[3]||(r[3]=h("p",{class:"fz-13"},[Je(" 年 "),h("br"),Je(" 工作經驗 ")],-1))])]),r[4]||(r[4]=h("div",{class:"sub-item2 box-shadwo"},null,-1))])]),h("div",Kv,[h("div",null,[h("div",Jv,[ce(s,{to:"/services"},{default:it(()=>[(ue(),me("svg",Zv,r[5]||(r[5]=[h("line",{x1:"0",y1:"16",x2:"33",y2:"16"},null,-1),h("line",{x1:"17.3",y1:"0.7",x2:"33.2",y2:"16.5"},null,-1),h("line",{x1:"17.3",y1:"31.6",x2:"33.5",y2:"15.4"},null,-1)])))]),_:1})])]),h("h6",Qv,[ce(s,{to:"/services"},{default:it(()=>r[6]||(r[6]=[Je("我的服務")])),_:1,__:[6]})])])]),h("div",ew,[r[8]||(r[8]=h("div",{class:"item3 box-shadwo"},null,-1)),h("div",tw,[h("h6",null,[ce(s,{to:"/portfolio"},{default:it(()=>r[7]||(r[7]=[h("br",null,null,-1),Je("我的作品集 ")])),_:1,__:[7]})])])])]),r[9]||(r[9]=Ii('<div class="bottom-boxs" data-v-c2c7ed4b><div class="item5 box-shadwo d-flex align-items-center justify-content-center" data-v-c2c7ed4b><a href="https://www.instagram.com/homer_create" class="icon" rel="noopener noreferrer" target="_blank" data-v-c2c7ed4b><i class="fab fa-instagram" data-v-c2c7ed4b></i></a></div><div class="item6 box-shadwo d-flex align-items-center justify-content-center" data-v-c2c7ed4b><a href="https://github.com/homershie" class="icon" rel="noopener noreferrer" target="_blank" data-v-c2c7ed4b><i class="fab fa-github" data-v-c2c7ed4b></i></a></div><div class="item7 box-shadwo d-flex align-items-center justify-content-center" data-v-c2c7ed4b><a href="https://medium.com/homer-create" class="icon" rel="noopener noreferrer" target="_blank" data-v-c2c7ed4b><i class="fab fa-medium" data-v-c2c7ed4b></i></a></div></div>',1))]),h("div",iw,[r[12]||(r[12]=Ii('<div class="author-img" data-v-c2c7ed4b><div class="img" data-v-c2c7ed4b><img src="'+um+'" alt="荷馬桑 Homer Shie 個人照片" loading="lazy" data-v-c2c7ed4b></div></div><div class="author-info" data-v-c2c7ed4b><div class="text-center" data-v-c2c7ed4b><span class="main-color sub-title mb-10" data-v-c2c7ed4b>視覺設計師 / 動態設計師</span><h4 class="fw-500" data-v-c2c7ed4b>Hi, 我是荷馬桑 Homer Shie</h4></div><div class="social mt-20" data-v-c2c7ed4b><a href="https://www.instagram.com/homer_create" class="icon" rel="noopener noreferrer" target="_blank" aria-label="前往 Instagram" data-v-c2c7ed4b><i class="fab fa-instagram" aria-hidden="true" data-v-c2c7ed4b></i></a><a href="https://www.pinterest.com/HomerShie/" class="icon" rel="noopener noreferrer" target="_blank" aria-label="前往 Pinterest" data-v-c2c7ed4b><i class="fab fa-pinterest" aria-hidden="true" data-v-c2c7ed4b></i></a><a href="https://medium.com/homer-create" class="icon" rel="noopener noreferrer" target="_blank" aria-label="前往 Medium" data-v-c2c7ed4b><i class="fab fa-medium" aria-hidden="true" data-v-c2c7ed4b></i></a></div></div>',2)),h("div",nw,[ce(s,{to:"/contact",class:"inf-butn"},{default:it(()=>r[10]||(r[10]=[h("span",null,"聯絡我",-1)])),_:1,__:[10]}),r[11]||(r[11]=h("a",{href:"/assets/resume/Homer_Shie_Resume.pdf",class:"inf-butn",target:"_blank"},[h("span",null,"下載履歷")],-1))])])]),h("div",rw,[h("div",sw,[r[16]||(r[16]=Ii('<h5 class="cd-headline slide" data-v-c2c7ed4b><span data-v-c2c7ed4b>哈囉, 我是</span><span class="cd-words-wrapper main-color" data-v-c2c7ed4b><b class="is-visible" data-v-c2c7ed4b>荷馬桑</b><b data-v-c2c7ed4b>Homer Shie</b><b data-v-c2c7ed4b>視覺設計師</b><b data-v-c2c7ed4b>動態設計師</b><b data-v-c2c7ed4b>遊戲玩家</b><b data-v-c2c7ed4b>宅宅</b><b data-v-c2c7ed4b>Fingerstyle學生</b></span></h5><h1 data-v-c2c7ed4b> 在台灣擔任動態設計師和 <span class="bord" data-v-c2c7ed4b>視覺設計師</span> 兼職接案中。 </h1><p class="text" data-v-c2c7ed4b> 作為一位專業的視覺師，除了擅長平面設計和插畫，也熟悉動畫、3D軟體和網頁語法。我曾經遠端為Garmin等客戶提供設計服務，並成功完成了許多B2B和B2C的創作。其中最值得一提的是，我曾與Garmin合作，將木曜四超玩主題的錶面動畫化。此外，我在大學期間參加了皮克斯的動畫營，並獲得了當時的皮克斯動畫師的肯定。我致力於創造出獨特且具有視覺吸引力的設計，期待能為您的業務帶來價值。 </p>',3)),h("div",aw,[h("div",ow,[h("div",lw,[h("div",cw,[h("h2",null,we(i.value),1),r[13]||(r[13]=h("p",null,[Je(" 件 "),h("br"),Je(" 已完成專案 ")],-1))])]),r[15]||(r[15]=h("div",{class:"mr-40"},[h("div",{class:"d-flex align-items-center"},[h("h2",null,"10"),h("p",null,[Je(" 個 "),h("br"),Je(" 擅長軟體 ")])])],-1)),h("div",uw,[h("div",fw,[ce(s,{to:"/contact",class:"butn butn-md butn-bord radius-5 skew"},{default:it(()=>r[14]||(r[14]=[h("span",null,"跟我聯繫！",-1)])),_:1,__:[14]})])])])])])])])])])}}},gw=Es(dw,[["__scopeId","data-v-c2c7ed4b"]]),pw="/assets/imgs/header/icon1.png",hw="/assets/imgs/header/icon2.png",mw="/assets/imgs/header/icon3.png",_w="/assets/imgs/header/icon4.png",yw={class:"about section-padding"},bw={class:"container with-pad"},vw={class:"row lg-marg"},ww={class:"col-lg-7 valign"},xw={class:"cont"},kw={class:"text"},Sw={class:"info mt-50"},Aw={class:"row"},Ew={class:"col-sm-6"},Tw={class:"item d-flex align-items-center sm-mb30"},Cw={class:"mr-15"},Pw={class:"skills section-padding pt-0"},Iw={class:"container with-pad"},Mw={class:"sec-head mb-80"},Ow={class:"row justify-content-center"},zw={class:"col-lg-6 text-center"},Rw={class:"sub-title-icon d-flex align-items-center mx-auto"},Lw={class:"row"},Dw={class:"item mb-30"},jw={class:"d-flex align-items-center mb-30"},Nw={class:"mr-30"},Fw={class:"img icon-img-40"},Bw=["src","alt"],$w={class:"fz-18"},Ww={class:"skill-progress"},Uw=["data-value"],Hw={class:"value"},Vw={class:"resume section-padding pt-0"},Gw={class:"container with-pad"},Yw={class:"sec-head mb-80"},qw={class:"row justify-content-center"},Xw={class:"col-lg-6 text-center"},Kw={class:"d-inline-block"},Jw={class:"sub-title-icon d-flex align-items-center"},Zw={class:"resume-swiper","data-carousel":"swiper","data-space":"50","data-speed":"1000"},Qw={id:"content-carousel-container-unq-resume",class:"swiper-container","data-swiper":"container"},e2={class:"swiper-wrapper"},t2={class:"item text-center"},i2={class:"main-color date fz-15 mb-60"},n2={class:"opacity-8 fw-500 mt-10"},r2={class:"fz-13 mt-15"},s2={__name:"AboutView",setup(t,{expose:e}){const i=Ge(!1),n=Ge([{id:1,name:"平面設計",percentage:95,icon:"/assets/imgs/resume/s1.png"},{id:2,name:"插畫",percentage:85,icon:"/assets/imgs/resume/s2.png"},{id:3,name:"動態設計",percentage:80,icon:"/assets/imgs/resume/s3.png"},{id:4,name:"3D動畫",percentage:72,icon:"/assets/imgs/resume/s4.png"},{id:5,name:"UI設計",percentage:65,icon:"/assets/imgs/resume/s5.png"},{id:6,name:"網頁開發",percentage:60,icon:"/assets/imgs/resume/s6.png"}]),r=Ge([{id:1,period:"2025 - 現在",title:"前端工程師學徒",company:"職訓局北分署",description:"2024年底問禮有限公司因為營運狀況不佳，因此面臨資遣風波。為了更穩定收入，我決定藉此機會報名職訓局的前端設計課程，並從2025年3月開始學習前端工程師的技能。這個課程不僅提供了前端開發的基礎知識，還包括LINEBOT的開發，讓我能夠在學習中體驗實用的技術。我希望透過這段時間的學習，能夠成為一名合格的前端工程師，並在未來的職業生涯中融合我的創意和技術能力。"},{id:2,period:"2019 - 現在",title:"視覺&動態設計師",company:"接案休息中",description:"開始工作時，一直都有陸續接案，直到2019年與Gamin緊密合作，我開始以動態設計和視覺設計全職接案。主要負責設計智慧手錶的錶面，並涵蓋平面設計、品牌營造、行銷視覺設計、動畫製作、影片剪輯和特效等多元業務。同時積極學習並累積大量作品，並在業餘時間持續進修動畫、3D、UI設計和網頁建置等專業知識，以提升自己的專業能力和服務品質。"},{id:3,period:"2023 - 2025",title:"兼職資深美術編輯",company:"問禮有限公司",description:"在2023年底，由於案源減少，我選擇尋找兼職工作以穩定收入。在問禮有限公司主要負責兒童英文學習教材出版的設計工作，包括繪製教材插圖和設計教材排版和包裝，並參與品牌的建置工作。以此穩定收入作為根基，我預計將朝前端工程師的方向努力。"},{id:4,period:"2018 - 2019",title:"視覺設計師",company:"臺灣娜珂黛肌有限公司",description:"我透過創新的視覺設計，專注於推廣公司的主要產品—薑的營養保健品。傳達產品的獨特價值和優勢，並提升了產品在市場上的認知度。在此期間，我與行銷團隊緊密合作，負責網站的視覺優化和維護，設計和製作吸引人的網頁行銷圖片和banner等素材，共同創造出有效的行銷輸出物，以達到公司的行銷目標，提升用戶體驗和網站流量。這段經驗讓我深入了解如何將視覺設計與產品行銷策略結合，並實現業務目標。"},{id:5,period:"2013 - 2017",title:"應用美術學系",company:"天主教輔仁大學",description:"專注於學習如何創造吸引人的視覺設計，並始終將使用者需求放在設計的核心。透過各種課程和實作經驗，加上在學期間的兼職工作，從中儲備了大量的市場經驗，深入理解了設計的各個方面，包括概念發展、視覺溝通以及技術實現。同時，我累積了扎實的設計基礎和豐富的創新思維，並期待將這些知識和技能應用到未來的工作中。"}]),s=o=>{n.value.push({id:n.value.length+1,...o})},a=o=>{r.value.unshift({id:r.value.length+1,...o})};return Cn(()=>{const o=document.querySelector(".skills"),l=new IntersectionObserver(c=>{c[0].isIntersecting&&(i.value=!0,l.disconnect())},{threshold:.5});l.observe(o),new window.Swiper(".resume-swiper .swiper-container",{spaceBetween:50,speed:1e3,loop:!1,pagination:{el:".resume-swiper .swiper-pagination",clickable:!0,dynamicBullets:!1,type:"bullets"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}}})}),e({addSkill:s,addExperience:a}),(o,l)=>{const c=jr("font-awesome-icon");return ue(),me(yt,null,[h("section",yw,[h("div",bw,[h("div",vw,[l[3]||(l[3]=Ii('<div class="col-lg-5 valign"><div class="profile-img"><div class="img"><img src="'+um+'" alt="荷馬桑個人照片"></div><span class="icon"><img src="'+pw+'" alt=""></span><span class="icon"><img src="'+hw+'" alt=""></span><span class="icon"><img src="'+mw+'" alt=""></span><span class="icon"><img src="'+_w+'" alt=""></span></div></div>',1)),h("div",ww,[h("div",xw,[l[2]||(l[2]=h("div",{class:"sub-title-icon d-flex align-items-center"},[h("span",{class:"icon fas fa-lightbulb"}),h("h6",null,"關於")],-1)),h("div",kw,[l[1]||(l[1]=Ii('<h4 class="mb-30"> 我是荷馬桑，來自台灣的 <span class="main-color"> 視覺和動態設計師 </span> 。 <br> 專注於平面媒體工作和思考如何平面媒體轉換為活潑的動畫，擅長將複雜的概念轉化為直覺且吸引人的視覺呈現。 </h4><p> 我利用平面和動態的設計元素，結合我日常的興趣， 如插畫、動畫、遊戲、音樂和動漫，創造出獨特且具有個人風格的設計作品。同時，致力於從多元包容的視角出發，有效地傳達行銷訊息和塑造品牌形象。 我在設計領域累積了豐富的經驗，並且在商業界創作了大量的設計作品。 <br> 在閒暇之餘，我會更新部落格，發表我對視覺美感的見解，並整理出視覺風格和一些厲害的巨巨給視覺視覺麻瓜們認識。 我認為視覺美感也需要普及，不管是提案還是喜歡視覺藝術，我希望我的文章能對你有所幫助。有時間的話，可以幫我點一下LikeCoin， 你們的支持也許能成為我前進的動力。 <br> 感謝你們！ </p><div class="feat mt-30"><div class="row"><div class="col-sm-6"><div class="item mb-15"><h6 class="sub-title ls1"><span class="fz-13 mr-10 main-color"><i class="fas fa-check"></i></span> 平面設計 </h6></div><div class="item sm-mb15"><h6 class="sub-title ls1"><span class="fz-13 mr-10 main-color"><i class="fas fa-check"></i></span> 動態設計 </h6></div></div><div class="col-sm-6"><div class="item mb-15"><h6 class="sub-title ls1"><span class="fz-13 mr-10 main-color"><i class="fas fa-check"></i></span> 3D動畫 </h6></div><div class="item"><h6 class="sub-title ls1"><span class="fz-13 mr-10 main-color"><i class="fas fa-check"></i></span> 插畫 </h6></div></div></div></div>',3)),h("div",Sw,[h("div",Aw,[h("div",Ew,[h("div",Tw,[h("div",Cw,[ce(c,{icon:["far","envelope"],class:"icon main-color"})]),l[0]||(l[0]=h("div",null,[h("span",{class:"opacity-7 mb-5"},"電子信箱"),h("h6",null,"homerxworkshop@gmail.com")],-1))])])])])])])])])])]),h("section",Pw,[h("div",Iw,[h("div",Mw,[h("div",Ow,[h("div",zw,[h("div",Rw,[ce(c,{icon:["fas","dumbbell"],class:"icon"}),l[4]||(l[4]=h("h6",null,"我的技能",-1))]),l[5]||(l[5]=h("h3",null,"優勢",-1))])])]),h("div",Lw,[(ue(!0),me(yt,null,Cr(n.value,u=>(ue(),me("div",{key:u.id,class:"col-lg-4 col-md-6"},[h("div",Dw,[h("div",jw,[h("div",Nw,[h("div",Fw,[h("img",{src:u.icon,alt:u.name},null,8,Bw)])]),h("div",null,[h("h6",$w,we(u.name),1)])]),h("div",Ww,[h("span",{class:"progres","data-value":u.percentage+"%",style:gs({width:i.value?u.percentage+"%":"0%"})},null,12,Uw)]),h("span",Hw,we(u.percentage)+"%",1)])]))),128))])])]),h("section",Vw,[h("div",Gw,[h("div",Yw,[h("div",qw,[h("div",Xw,[h("div",Kw,[h("div",Jw,[ce(c,{icon:["fas","file-alt"],class:"icon"}),l[6]||(l[6]=h("h6",null,"我的簡歷",-1))])]),l[7]||(l[7]=h("h3",null,"學歷和工作經驗",-1))])])]),h("div",null,[h("div",Zw,[h("div",Qw,[h("div",e2,[(ue(!0),me(yt,null,Cr(r.value,u=>(ue(),me("div",{key:u.id,class:"swiper-slide"},[h("div",t2,[h("h6",i2,we(u.period),1),h("h5",null,we(u.title),1),h("span",n2,"[ "+we(u.company)+" ]",1),h("p",r2,we(u.description),1)])]))),128))]),l[8]||(l[8]=h("div",{class:"swiper-pagination"},null,-1))])])])])])],64)}}},a2="/assets/imgs/serv-img/1.png",o2="/assets/imgs/serv-img/2.png",l2="/assets/imgs/serv-img/3.png",c2="/assets/imgs/serv-img/4.png",u2="/assets/imgs/serv-img/5.png",f2="/assets/imgs/serv-img/6.png",d2="/assets/imgs/brands/garmin.png",g2={class:"services section-padding"},p2={class:"container with-pad"},h2={class:"sec-head mb-80"},m2={class:"row justify-content-center"},_2={class:"col-lg-8 text-center"},y2={class:"d-inline-block"},b2={class:"sub-title-icon d-flex align-items-center"},v2={class:"row"},w2={class:"col-lg-4 col-md-6"},x2={class:"item mb-30"},k2={class:"cont"},S2={class:"d-flex align-items-center mb-30"},A2={class:"opacity-7 fz-13 mb-5"},E2={class:"col-lg-4 col-md-6"},T2={class:"item mb-30"},C2={class:"cont"},P2={class:"d-flex align-items-center mb-30"},I2={class:"opacity-7 fz-13 mb-5"},M2={class:"col-lg-4 col-md-6"},O2={class:"item mb-30"},z2={class:"cont"},R2={class:"d-flex align-items-center mb-30"},L2={class:"opacity-7 fz-13 mb-5"},D2={class:"col-lg-4 col-md-6"},j2={class:"item md-mb30"},N2={class:"cont"},F2={class:"d-flex align-items-center mb-30"},B2={class:"opacity-7 fz-13 mb-5"},$2={class:"col-lg-4 col-md-6"},W2={class:"item sm-mb30"},U2={class:"cont"},H2={class:"d-flex align-items-center mb-30"},V2={class:"opacity-7 fz-13 mb-5"},G2={class:"col-lg-4 col-md-6"},Y2={class:"item"},q2={class:"cont"},X2={class:"d-flex align-items-center mb-30"},K2={class:"opacity-7 fz-13 mb-5"},J2={class:"price section-padding pt-0"},Z2={class:"container with-pad"},Q2={class:"sec-head mb-80"},e3={class:"row justify-content-center"},t3={class:"col-lg-8 text-center"},i3={class:"d-inline-block"},n3={class:"sub-title-icon d-flex align-items-center"},r3={class:"brands section-padding pt-0"},s3={class:"container with-pad"},a3={class:"text-center"},o3={class:"main-color"},l3={__name:"ServicesView",setup(t){const e=Ge(rf),i=ze(()=>e.value.length),n=s=>e.value.length?e.value.filter(a=>Array.isArray(a.category)?a.category.includes(s):a.category===s).length:0;function r(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}return(s,a)=>{const o=jr("font-awesome-icon");return ue(),me(yt,null,[h("section",g2,[h("div",p2,[h("div",h2,[h("div",m2,[h("div",_2,[h("div",y2,[h("div",b2,[ce(o,{icon:["fas","bell"],class:"icon"}),a[0]||(a[0]=h("h6",null,"我的服務",-1))])]),a[1]||(a[1]=h("h3",null,"我有哪些方式讓您眼前一亮？",-1))])])]),h("div",v2,[h("div",w2,[h("div",x2,[h("div",k2,[h("div",S2,[a[3]||(a[3]=h("div",null,[h("span",{class:"icon-img-50 mr-40"},[h("img",{src:a2,alt:"平面設計"})])],-1)),h("div",null,[h("span",A2,we(n("平面設計"))+"+ 專案",1),a[2]||(a[2]=h("h5",{class:"fz-20"},"平面設計",-1))])]),a[4]||(a[4]=h("p",null," 擅長品牌識別、海報與包裝設計，從色彩到構圖，每一筆都蘊含策略思維與視覺魔法，協助你在一眼之間脫穎而出。 ",-1))])])]),h("div",E2,[h("div",T2,[h("div",C2,[h("div",P2,[a[6]||(a[6]=h("div",null,[h("span",{class:"icon-img-50 mr-40"},[h("img",{src:o2,alt:"動態設計"})])],-1)),h("div",null,[h("span",I2,we(n("動畫"))+"+ 專案",1),a[5]||(a[5]=h("h5",{class:"fz-20"},"動態設計",-1))])]),a[7]||(a[7]=h("p",null," 為靜態畫面注入靈魂，打造流暢、有記憶點的動畫內容——不論是品牌動畫、行銷短片，或社群用的動態視覺，皆能呈現故事的脈動。 ",-1))])])]),h("div",M2,[h("div",O2,[h("div",z2,[h("div",R2,[a[9]||(a[9]=h("div",null,[h("span",{class:"icon-img-50 mr-40"},[h("img",{src:l2,alt:"插畫創作"})])],-1)),h("div",null,[h("span",L2,we(n("插畫"))+"+ 專案",1),a[8]||(a[8]=h("h5",{class:"fz-20"},"插畫創作",-1))])]),a[10]||(a[10]=h("p",null," 從奇想世界到品牌角色，風格橫跨可愛、極簡、奇幻與實驗。每一筆插畫不只是圖像，而是能與觀者對話的故事容器。 ",-1))])])]),h("div",D2,[h("div",j2,[h("div",N2,[h("div",F2,[a[12]||(a[12]=h("div",null,[h("span",{class:"icon-img-50 mr-40"},[h("img",{src:c2,alt:"3D動畫"})])],-1)),h("div",null,[h("span",B2,we(n("3D"))+"+ 專案",1),a[11]||(a[11]=h("h5",{class:"fz-20"},"3D",-1))])]),a[13]||(a[13]=h("p",null," 利用3D模型與動畫打造立體世界，讓幻想栩栩如生，把概念化為實體，為品牌和行銷帶來更高維度的想像空間。 ",-1))])])]),h("div",$2,[h("div",W2,[h("div",U2,[h("div",H2,[a[15]||(a[15]=h("div",null,[h("span",{class:"icon-img-50 mr-40"},[h("img",{src:u2,alt:"品牌設計"})])],-1)),h("div",null,[h("span",V2,we(n("品牌設計"))+"+ 專案",1),a[14]||(a[14]=h("h5",{class:"fz-20"},"品牌設計",-1))])]),a[16]||(a[16]=h("p",null," 從 Logo 到整體識別系統，量身打造一套視覺語言，讓品牌在每個接觸點都一致、鮮明且令人記住，打造專屬於你的符號學。 ",-1))])])]),h("div",G2,[h("div",Y2,[h("div",q2,[h("div",X2,[a[18]||(a[18]=h("div",null,[h("span",{class:"icon-img-50 mr-40"},[h("img",{src:f2,alt:"UI設計"})])],-1)),h("div",null,[h("span",K2,we(n("網頁設計"))+"+ 專案",1),a[17]||(a[17]=h("h5",{class:"fz-20"},"網頁前端設計",-1))])]),a[19]||(a[19]=h("p",null," 結合設計美感與互動邏輯，打造富有視覺張力且使用直覺的網站介面。讓使用者不只瀏覽，而是享受每一次的點擊與滑動。 ",-1))])])])])])]),h("section",J2,[h("div",Z2,[h("div",Q2,[h("div",e3,[h("div",t3,[h("div",i3,[h("div",n3,[ce(o,{icon:["fas","sticky-note"],class:"icon"}),a[20]||(a[20]=h("h6",null,"合作方案",-1))])]),a[21]||(a[21]=h("h3",null,"讓好的設計成為值得的投資",-1)),a[22]||(a[22]=h("p",{class:"mt-15"}," 我重視與每一位客戶的深入溝通，致力於理解需求、解決設計挑戰，並透過專業的視覺語言為專案創造實質價值。 ",-1))])])]),h("div",{class:"row"},[h("div",{class:"col-lg-6"},[h("div",{class:"item md-mb50"},[a[26]||(a[26]=h("h6",{class:"type"},"平面設計方案",-1)),h("div",{class:"content d-flex align-items-center"},[h("div",{class:"amount mr-40"},[a[24]||(a[24]=h("h2",{class:"main-color"},"議價",-1)),h("a",{href:"#0",class:"butn butn-md butn-bord radius-30 text-u text-center mt-30",onClick:r},a[23]||(a[23]=[h("span",null,"聯絡我",-1)]))]),a[25]||(a[25]=Ii('<div class="feat"><ul class="rest"><li><i class="fas fa-check"></i><span>平面設計服務</span></li><li><i class="fas fa-check"></i><span>品牌識別設計</span></li><li><i class="fas fa-check"></i><span>插畫創作</span></li><li><i class="fas fa-check"></i><span>主視覺設計</span></li></ul></div>',1))])])]),h("div",{class:"col-lg-6"},[h("div",{class:"item"},[a[30]||(a[30]=h("h6",{class:"type"},"動態設計方案",-1)),h("div",{class:"content d-flex align-items-center"},[h("div",{class:"amount mr-40"},[a[28]||(a[28]=h("h2",{class:"main-color"},"議價",-1)),h("a",{href:"#0",class:"butn butn-md butn-bord radius-30 text-u text-center mt-30",onClick:r},a[27]||(a[27]=[h("span",null,"聯絡我",-1)]))]),a[29]||(a[29]=Ii('<div class="feat"><ul class="rest"><li><i class="fas fa-check"></i><span>動態設計與動畫</span></li><li><i class="fas fa-check"></i><span>3D視覺效果</span></li><li><i class="fas fa-check"></i><span>影片特效與剪輯</span></li><li><i class="fas fa-check"></i><span>現代化網頁設計</span></li></ul></div>',1))])])])])])]),h("section",r3,[h("div",s3,[h("div",a3,[h("h6",null,[a[31]||(a[31]=Je(" 超過 ")),h("span",o3,we(i.value)+"+ 專案",1),a[32]||(a[32]=Je(" 的成功合作經驗 "))])]),a[33]||(a[33]=Ii('<div class="row"><div class="col"><div class="item"><div class="img w-25"><img src="'+d2+'" style="filter:brightness(0.5);" alt="garmin-logo"></div></div></div></div>',1))])])],64)}}};function fm(t=[]){t.slice(0,12).forEach(e=>{const i=new Image;i.src=e})}function c3(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u3(t,e,i){return e&&c3(t.prototype,e),t}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ct,bo,hi,$n,Wn,cs,dm,gr,oa,gm,bn,Ni,pm,hm=function(){return Ct||typeof window<"u"&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},mm=1,Zr=[],Ae=[],an=[],la=Date.now,Fc=function(e,i){return i},f3=function(){var e=oa.core,i=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Ae),r.push.apply(r,an),Ae=n,an=r,Fc=function(a,o){return i[a](o)}},Gn=function(e,i){return~an.indexOf(e)&&an[an.indexOf(e)+1][i]},ca=function(e){return!!~gm.indexOf(e)},Gt=function(e,i,n,r,s){return e.addEventListener(i,n,{passive:r!==!1,capture:!!s})},Ht=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},Xa="scrollLeft",Ka="scrollTop",Bc=function(){return bn&&bn.isPressed||Ae.cache++},Ho=function(e,i){var n=function r(s){if(s||s===0){mm&&(hi.history.scrollRestoration="manual");var a=bn&&bn.isPressed;s=r.v=Math.round(s)||(bn&&bn.iOS?1:0),e(s),r.cacheID=Ae.cache,a&&Fc("ss",s)}else(i||Ae.cache!==r.cacheID||Fc("ref"))&&(r.cacheID=Ae.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Qt={s:Xa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ho(function(t){return arguments.length?hi.scrollTo(t,_t.sc()):hi.pageXOffset||$n[Xa]||Wn[Xa]||cs[Xa]||0})},_t={s:Ka,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Qt,sc:Ho(function(t){return arguments.length?hi.scrollTo(Qt.sc(),t):hi.pageYOffset||$n[Ka]||Wn[Ka]||cs[Ka]||0})},ii=function(e,i){return(i&&i._ctx&&i._ctx.selector||Ct.utils.toArray)(e)[0]||(typeof e=="string"&&Ct.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},d3=function(e,i){for(var n=i.length;n--;)if(i[n]===e||i[n].contains(e))return!0;return!1},Jn=function(e,i){var n=i.s,r=i.sc;ca(e)&&(e=$n.scrollingElement||Wn);var s=Ae.indexOf(e),a=r===_t.sc?1:2;!~s&&(s=Ae.push(e)-1),Ae[s+a]||Gt(e,"scroll",Bc);var o=Ae[s+a],l=o||(Ae[s+a]=Ho(Gn(e,n),!0)||(ca(e)?r:Ho(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Ct.getProperty(e,"scrollBehavior")==="smooth"),l},$c=function(e,i,n){var r=e,s=e,a=la(),o=a,l=i||50,c=Math.max(500,l*3),u=function(b,_){var y=la();_||y-a>l?(s=r,r=b,o=a,a=y):n?r+=b:r=s+(b-s)/(y-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},g=function(b){var _=o,y=s,p=la();return(b||b===0)&&b!==r&&u(b),a===o||p-o>c?0:(r+(n?y:-y))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:g}},Ds=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Fd=function(e){var i=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(n)?i:n},_m=function(){oa=Ct.core.globals().ScrollTrigger,oa&&oa.core&&f3()},ym=function(e){return Ct=e||hm(),!bo&&Ct&&typeof document<"u"&&document.body&&(hi=window,$n=document,Wn=$n.documentElement,cs=$n.body,gm=[hi,$n,Wn,cs],Ct.utils.clamp,pm=Ct.core.context||function(){},gr="onpointerenter"in cs?"pointer":"mouse",dm=ct.isTouch=hi.matchMedia&&hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=ct.eventTypes=("ontouchstart"in Wn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return mm=0},500),_m(),bo=1),bo};Qt.op=_t;Ae.cache=0;var ct=function(){function t(i){this.init(i)}var e=t.prototype;return e.init=function(n){bo||ym(Ct)||console.warn("Please gsap.registerPlugin(Observer)"),oa||_m();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,g=n.onStopDelay,d=n.ignore,b=n.wheelSpeed,_=n.event,y=n.onDragStart,p=n.onDragEnd,m=n.onDrag,v=n.onPress,x=n.onRelease,T=n.onRight,O=n.onLeft,M=n.onUp,B=n.onDown,E=n.onChangeX,P=n.onChangeY,R=n.onChange,D=n.onToggleX,q=n.onToggleY,Z=n.onHover,se=n.onHoverEnd,te=n.onMove,G=n.ignoreCheck,K=n.isNormalizer,ve=n.onGestureStart,I=n.onGestureEnd,xe=n.onWheel,Ie=n.onEnable,at=n.onDisable,Me=n.onClick,Ye=n.scrollSpeed,Oe=n.capture,z=n.allowClicks,V=n.lockAxis,N=n.onLockAxis;this.target=o=ii(o)||Wn,this.vars=n,d&&(d=Ct.utils.toArray(d)),r=r||1e-9,s=s||0,b=b||1,Ye=Ye||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(hi.getComputedStyle(cs).lineHeight)||22);var J,de,k,w,C,L,j,A=this,H=0,U=0,W=n.passive||!u&&n.passive!==!1,F=Jn(o,Qt),ie=Jn(o,_t),Y=F(),ne=ie(),ee=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ni[0]==="pointerdown",ge=ca(o),le=o.ownerDocument||$n,be=[0,0,0],Ue=[0,0,0],Xe=0,It=function(){return Xe=la()},Re=function(oe,Le){return(A.event=oe)&&d&&d3(oe.target,d)||Le&&ee&&oe.pointerType!=="touch"||G&&G(oe,Le)},Wi=function(){A._vx.reset(),A._vy.reset(),de.pause(),f&&f(A)},xi=function(){var oe=A.deltaX=Fd(be),Le=A.deltaY=Fd(Ue),X=Math.abs(oe)>=r,pe=Math.abs(Le)>=r;R&&(X||pe)&&R(A,oe,Le,be,Ue),X&&(T&&A.deltaX>0&&T(A),O&&A.deltaX<0&&O(A),E&&E(A),D&&A.deltaX<0!=H<0&&D(A),H=A.deltaX,be[0]=be[1]=be[2]=0),pe&&(B&&A.deltaY>0&&B(A),M&&A.deltaY<0&&M(A),P&&P(A),q&&A.deltaY<0!=U<0&&q(A),U=A.deltaY,Ue[0]=Ue[1]=Ue[2]=0),(w||k)&&(te&&te(A),k&&(y&&k===1&&y(A),m&&m(A),k=0),w=!1),L&&!(L=!1)&&N&&N(A),C&&(xe(A),C=!1),J=0},ft=function(oe,Le,X){be[X]+=oe,Ue[X]+=Le,A._vx.update(oe),A._vy.update(Le),c?J||(J=requestAnimationFrame(xi)):xi()},kt=function(oe,Le){V&&!j&&(A.axis=j=Math.abs(oe)>Math.abs(Le)?"x":"y",L=!0),j!=="y"&&(be[2]+=oe,A._vx.update(oe,!0)),j!=="x"&&(Ue[2]+=Le,A._vy.update(Le,!0)),c?J||(J=requestAnimationFrame(xi)):xi()},zi=function(oe){if(!Re(oe,1)){oe=Ds(oe,u);var Le=oe.clientX,X=oe.clientY,pe=Le-A.x,ae=X-A.y,he=A.isDragging;A.x=Le,A.y=X,(he||(pe||ae)&&(Math.abs(A.startX-Le)>=s||Math.abs(A.startY-X)>=s))&&(k=he?2:1,he||(A.isDragging=!0),kt(pe,ae))}},nr=A.onPress=function(ye){Re(ye,1)||ye&&ye.button||(A.axis=j=null,de.pause(),A.isPressed=!0,ye=Ds(ye),H=U=0,A.startX=A.x=ye.clientX,A.startY=A.y=ye.clientY,A._vx.reset(),A._vy.reset(),Gt(K?o:le,Ni[1],zi,W,!0),A.deltaX=A.deltaY=0,v&&v(A))},Ee=A.onRelease=function(ye){if(!Re(ye,1)){Ht(K?o:le,Ni[1],zi,!0);var oe=!isNaN(A.y-A.startY),Le=A.isDragging,X=Le&&(Math.abs(A.x-A.startX)>3||Math.abs(A.y-A.startY)>3),pe=Ds(ye);!X&&oe&&(A._vx.reset(),A._vy.reset(),u&&z&&Ct.delayedCall(.08,function(){if(la()-Xe>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(le.createEvent){var ae=le.createEvent("MouseEvents");ae.initMouseEvent("click",!0,!0,hi,1,pe.screenX,pe.screenY,pe.clientX,pe.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(ae)}}})),A.isDragging=A.isGesturing=A.isPressed=!1,f&&Le&&!K&&de.restart(!0),k&&xi(),p&&Le&&p(A),x&&x(A,X)}},rr=function(oe){return oe.touches&&oe.touches.length>1&&(A.isGesturing=!0)&&ve(oe,A.isDragging)},Ri=function(){return(A.isGesturing=!1)||I(A)},Li=function(oe){if(!Re(oe)){var Le=F(),X=ie();ft((Le-Y)*Ye,(X-ne)*Ye,1),Y=Le,ne=X,f&&de.restart(!0)}},Di=function(oe){if(!Re(oe)){oe=Ds(oe,u),xe&&(C=!0);var Le=(oe.deltaMode===1?l:oe.deltaMode===2?hi.innerHeight:1)*b;ft(oe.deltaX*Le,oe.deltaY*Le,0),f&&!K&&de.restart(!0)}},sr=function(oe){if(!Re(oe)){var Le=oe.clientX,X=oe.clientY,pe=Le-A.x,ae=X-A.y;A.x=Le,A.y=X,w=!0,f&&de.restart(!0),(pe||ae)&&kt(pe,ae)}},Fr=function(oe){A.event=oe,Z(A)},cn=function(oe){A.event=oe,se(A)},Cs=function(oe){return Re(oe)||Ds(oe,u)&&Me(A)};de=A._dc=Ct.delayedCall(g||.25,Wi).pause(),A.deltaX=A.deltaY=0,A._vx=$c(0,50,!0),A._vy=$c(0,50,!0),A.scrollX=F,A.scrollY=ie,A.isDragging=A.isGesturing=A.isPressed=!1,pm(this),A.enable=function(ye){return A.isEnabled||(Gt(ge?le:o,"scroll",Bc),a.indexOf("scroll")>=0&&Gt(ge?le:o,"scroll",Li,W,Oe),a.indexOf("wheel")>=0&&Gt(o,"wheel",Di,W,Oe),(a.indexOf("touch")>=0&&dm||a.indexOf("pointer")>=0)&&(Gt(o,Ni[0],nr,W,Oe),Gt(le,Ni[2],Ee),Gt(le,Ni[3],Ee),z&&Gt(o,"click",It,!0,!0),Me&&Gt(o,"click",Cs),ve&&Gt(le,"gesturestart",rr),I&&Gt(le,"gestureend",Ri),Z&&Gt(o,gr+"enter",Fr),se&&Gt(o,gr+"leave",cn),te&&Gt(o,gr+"move",sr)),A.isEnabled=!0,A.isDragging=A.isGesturing=A.isPressed=w=k=!1,A._vx.reset(),A._vy.reset(),Y=F(),ne=ie(),ye&&ye.type&&nr(ye),Ie&&Ie(A)),A},A.disable=function(){A.isEnabled&&(Zr.filter(function(ye){return ye!==A&&ca(ye.target)}).length||Ht(ge?le:o,"scroll",Bc),A.isPressed&&(A._vx.reset(),A._vy.reset(),Ht(K?o:le,Ni[1],zi,!0)),Ht(ge?le:o,"scroll",Li,Oe),Ht(o,"wheel",Di,Oe),Ht(o,Ni[0],nr,Oe),Ht(le,Ni[2],Ee),Ht(le,Ni[3],Ee),Ht(o,"click",It,!0),Ht(o,"click",Cs),Ht(le,"gesturestart",rr),Ht(le,"gestureend",Ri),Ht(o,gr+"enter",Fr),Ht(o,gr+"leave",cn),Ht(o,gr+"move",sr),A.isEnabled=A.isPressed=A.isDragging=!1,at&&at(A))},A.kill=A.revert=function(){A.disable();var ye=Zr.indexOf(A);ye>=0&&Zr.splice(ye,1),bn===A&&(bn=0)},Zr.push(A),K&&ca(o)&&(bn=A),A.enable(_)},u3(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();ct.version="3.13.0";ct.create=function(t){return new ct(t)};ct.register=ym;ct.getAll=function(){return Zr.slice()};ct.getById=function(t){return Zr.filter(function(e){return e.vars.id===t})[0]};hm()&&Ct.registerPlugin(ct);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Q,Yr,Se,He,gi,je,sf,Vo,Oa,ua,Us,Ja,Rt,pl,Wc,Xt,Bd,$d,qr,bm,Ul,vm,qt,Uc,wm,xm,zn,Hc,af,us,of,Go,Vc,Hl,Za=1,Lt=Date.now,Vl=Lt(),Mi=0,Hs=0,Wd=function(e,i,n){var r=fi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ud=function(e,i){return i&&(!fi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},g3=function t(){return Hs&&requestAnimationFrame(t)},Hd=function(){return pl=1},Vd=function(){return pl=0},Xi=function(e){return e},Vs=function(e){return Math.round(e*1e5)/1e5||0},km=function(){return typeof window<"u"},Sm=function(){return Q||km()&&(Q=window.gsap)&&Q.registerPlugin&&Q},Ir=function(e){return!!~sf.indexOf(e)},Am=function(e){return(e==="Height"?of:Se["inner"+e])||gi["client"+e]||je["client"+e]},Em=function(e){return Gn(e,"getBoundingClientRect")||(Ir(e)?function(){return So.width=Se.innerWidth,So.height=of,So}:function(){return _n(e)})},p3=function(e,i,n){var r=n.d,s=n.d2,a=n.a;return(a=Gn(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(i?Am(s):e["client"+s])||0}},h3=function(e,i){return!i||~an.indexOf(e)?Em(e):function(){return So}},Qi=function(e,i){var n=i.s,r=i.d2,s=i.d,a=i.a;return Math.max(0,(n="scroll"+r)&&(a=Gn(e,n))?a()-Em(e)()[s]:Ir(e)?(gi[n]||je[n])-Am(r):e[n]-e["offset"+r])},Qa=function(e,i){for(var n=0;n<qr.length;n+=3)(!i||~i.indexOf(qr[n+1]))&&e(qr[n],qr[n+1],qr[n+2])},fi=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},Gs=function(e){return typeof e=="number"},pr=function(e){return typeof e=="object"},js=function(e,i,n){return e&&e.progress(i?0:1)&&n&&e.pause()},Gl=function(e,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return i(e)}):i(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Wr=Math.abs,Tm="left",Cm="top",lf="right",cf="bottom",Ar="width",Er="height",fa="Right",da="Left",ga="Top",pa="Bottom",dt="padding",Si="margin",Ss="Width",uf="Height",mt="px",Ai=function(e){return Se.getComputedStyle(e)},m3=function(e){var i=Ai(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},Gd=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},_n=function(e,i){var n=i&&Ai(e)[Wc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Q.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Yo=function(e,i){var n=i.d2;return e["offset"+n]||e["client"+n]||0},Pm=function(e){var i=[],n=e.labels,r=e.duration(),s;for(s in n)i.push(n[s]/r);return i},_3=function(e){return function(i){return Q.utils.snap(Pm(e),i)}},ff=function(e){var i=Q.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return i(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=i(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:i(s<0?r-e:r+e)}},y3=function(e){return function(i,n){return ff(Pm(e))(i,n.direction)}},eo=function(e,i,n,r){return n.split(",").forEach(function(s){return e(i,s,r)})},wt=function(e,i,n,r,s){return e.addEventListener(i,n,{passive:!r,capture:!!s})},vt=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},to=function(e,i,n){n=n&&n.wheelHandler,n&&(e(i,"wheel",n),e(i,"touchmove",n))},Yd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},io={toggleActions:"play",anticipatePin:0},qo={top:0,left:0,center:.5,bottom:1,right:1},vo=function(e,i){if(fi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=i/100),e=e.substr(0,n-1)),e=r+(e in qo?qo[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},no=function(e,i,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,g=s.indent,d=s.fontWeight,b=He.createElement("div"),_=Ir(n)||Gn(n,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,p=_?je:n,m=e.indexOf("start")!==-1,v=m?c:u,x="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((y||l)&&_?"fixed;":"absolute;"),(y||l||!_)&&(x+=(r===_t?lf:cf)+":"+(a+parseFloat(g))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),b._isStart=m,b.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),b.style.cssText=x,b.innerText=i||i===0?e+"-"+i:e,p.children[0]?p.insertBefore(b,p.children[0]):p.appendChild(b),b._offset=b["offset"+r.op.d2],wo(b,0,r,m),b},wo=function(e,i,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Ss]=1,s["border"+o+Ss]=0,s[n.p]=i+"px",Q.set(e,s)},ke=[],Gc={},za,qd=function(){return Lt()-Mi>34&&(za||(za=requestAnimationFrame(vn)))},Ur=function(){(!qt||!qt.isPressed||qt.startX>je.clientWidth)&&(Ae.cache++,qt?za||(za=requestAnimationFrame(vn)):vn(),Mi||Or("scrollStart"),Mi=Lt())},Yl=function(){xm=Se.innerWidth,wm=Se.innerHeight},Ys=function(e){Ae.cache++,(e===!0||!Rt&&!vm&&!He.fullscreenElement&&!He.webkitFullscreenElement&&(!Uc||xm!==Se.innerWidth||Math.abs(Se.innerHeight-wm)>Se.innerHeight*.25))&&Vo.restart(!0)},Mr={},b3=[],Im=function t(){return vt(Te,"scrollEnd",t)||_r(!0)},Or=function(e){return Mr[e]&&Mr[e].map(function(i){return i()})||b3},ui=[],Mm=function(e){for(var i=0;i<ui.length;i+=5)(!e||ui[i+4]&&ui[i+4].query===e)&&(ui[i].style.cssText=ui[i+1],ui[i].getBBox&&ui[i].setAttribute("transform",ui[i+2]||""),ui[i+3].uncache=1)},df=function(e,i){var n;for(Xt=0;Xt<ke.length;Xt++)n=ke[Xt],n&&(!i||n._ctx===i)&&(e?n.kill(1):n.revert(!0,!0));Go=!0,i&&Mm(i),i||Or("revert")},Om=function(e,i){Ae.cache++,(i||!Kt)&&Ae.forEach(function(n){return Nt(n)&&n.cacheID++&&(n.rec=0)}),fi(e)&&(Se.history.scrollRestoration=af=e)},Kt,Tr=0,Xd,v3=function(){if(Xd!==Tr){var e=Xd=Tr;requestAnimationFrame(function(){return e===Tr&&_r(!0)})}},zm=function(){je.appendChild(us),of=!qt&&us.offsetHeight||Se.innerHeight,je.removeChild(us)},Kd=function(e){return Oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},_r=function(e,i){if(gi=He.documentElement,je=He.body,sf=[Se,He,gi,je],Mi&&!e&&!Go){wt(Te,"scrollEnd",Im);return}zm(),Kt=Te.isRefreshing=!0,Ae.forEach(function(r){return Nt(r)&&++r.cacheID&&(r.rec=r())});var n=Or("refreshInit");bm&&Te.sort(),i||df(),Ae.forEach(function(r){Nt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ke.slice(0).forEach(function(r){return r.refresh()}),Go=!1,ke.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Vc=1,Kd(!0),ke.forEach(function(r){var s=Qi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Kd(!1),Vc=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Ae.forEach(function(r){Nt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Om(af,1),Vo.pause(),Tr++,Kt=2,vn(2),ke.forEach(function(r){return Nt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Kt=Te.isRefreshing=!1,Or("refresh")},Yc=0,xo=1,ha,vn=function(e){if(e===2||!Kt&&!Go){Te.isUpdating=!0,ha&&ha.update(0);var i=ke.length,n=Lt(),r=n-Vl>=50,s=i&&ke[0].scroll();if(xo=Yc>s?-1:1,Kt||(Yc=s),r&&(Mi&&!pl&&n-Mi>200&&(Mi=0,Or("scrollEnd")),Us=Vl,Vl=n),xo<0){for(Xt=i;Xt-- >0;)ke[Xt]&&ke[Xt].update(0,r);xo=1}else for(Xt=0;Xt<i;Xt++)ke[Xt]&&ke[Xt].update(0,r);Te.isUpdating=!1}za=0},qc=[Tm,Cm,cf,lf,Si+pa,Si+fa,Si+ga,Si+da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ko=qc.concat([Ar,Er,"boxSizing","max"+Ss,"max"+uf,"position",Si,dt,dt+ga,dt+fa,dt+pa,dt+da]),w3=function(e,i,n){fs(n);var r=e._gsap;if(r.spacerIsNative)fs(r.spacerState);else if(e._gsap.swappedIn){var s=i.parentNode;s&&(s.insertBefore(e,i),s.removeChild(i))}e._gsap.swappedIn=!1},ql=function(e,i,n,r){if(!e._gsap.swappedIn){for(var s=qc.length,a=i.style,o=e.style,l;s--;)l=qc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[cf]=o[lf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ar]=Yo(e,Qt)+mt,a[Er]=Yo(e,_t)+mt,a[dt]=o[Si]=o[Cm]=o[Tm]="0",fs(r),o[Ar]=o["max"+Ss]=n[Ar],o[Er]=o["max"+uf]=n[Er],o[dt]=n[dt],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},x3=/([A-Z])/g,fs=function(e){if(e){var i=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Q.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?i[s]=a:i[s]&&i.removeProperty(s.replace(x3,"-$1").toLowerCase())}},ro=function(e){for(var i=ko.length,n=e.style,r=[],s=0;s<i;s++)r.push(ko[s],n[ko[s]]);return r.t=e,r},k3=function(e,i,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in i?i[o]:e[a+1]);return r.t=e.t,r},So={left:0,top:0},Jd=function(e,i,n,r,s,a,o,l,c,u,f,g,d,b){Nt(e)&&(e=e(l)),fi(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?vo("0"+e.substr(3),n):0));var _=d?d.time():0,y,p,m;if(d&&d.seek(0),isNaN(e)||(e=+e),Gs(e))d&&(e=Q.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,g,e)),o&&wo(o,n,r,!0);else{Nt(i)&&(i=i(l));var v=(e||"0").split(" "),x,T,O,M;m=ii(i,l)||je,x=_n(m)||{},(!x||!x.left&&!x.top)&&Ai(m).display==="none"&&(M=m.style.display,m.style.display="block",x=_n(m),M?m.style.display=M:m.style.removeProperty("display")),T=vo(v[0],x[r.d]),O=vo(v[1]||"0",n),e=x[r.p]-c[r.p]-u+T+s-O,o&&wo(o,O,r,n-O<20||o._isStart&&O>20),n-=n-O}if(b&&(l[b]=e||-.001,e<0&&(e=0)),a){var B=e+n,E=a._isStart;y="scroll"+r.d2,wo(a,B,r,E&&B>20||!E&&(f?Math.max(je[y],gi[y]):a.parentNode[y])<=B+1),f&&(c=_n(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+mt))}return d&&m&&(y=_n(m),d.seek(g),p=_n(m),d._caScrollDist=y[r.p]-p[r.p],e=e/d._caScrollDist*g),d&&d.seek(_),d?e:Math.round(e)},S3=/(webkit|moz|length|cssText|inset)/i,Zd=function(e,i,n,r){if(e.parentNode!==i){var s=e.style,a,o;if(i===je){e._stOrig=s.cssText,o=Ai(e);for(a in o)!+a&&!S3.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Q.core.getCache(e).uncache=1,i.appendChild(e)}},Rm=function(e,i,n){var r=i,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},so=function(e,i,n){var r={};r[i.p]="+="+n,Q.set(e,r)},Qd=function(e,i){var n=Jn(e,i),r="_scroll"+i.p2,s=function a(o,l,c,u,f){var g=a.tween,d=l.onComplete,b={};c=c||n();var _=Rm(n,c,function(){g.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,g&&g.kill(),l[r]=o,l.inherit=!1,l.modifiers=b,b[r]=function(){return _(c+u*g.ratio+f*g.ratio*g.ratio)},l.onUpdate=function(){Ae.cache++,a.tween&&vn()},l.onComplete=function(){a.tween=0,d&&d.call(g)},g=a.tween=Q.to(e,l),g};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},wt(e,"wheel",n.wheelHandler),Te.isTouch&&wt(e,"touchmove",n.wheelHandler),s},Te=function(){function t(i,n){Yr||t.register(Q)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hc(this),this.init(i,n)}var e=t.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Hs){this.update=this.refresh=this.kill=Xi;return}n=Gd(fi(n)||Gs(n)||n.nodeType?{trigger:n}:n,io);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,g=s.trigger,d=s.pin,b=s.pinSpacing,_=s.invalidateOnRefresh,y=s.anticipatePin,p=s.onScrubComplete,m=s.onSnapComplete,v=s.once,x=s.snap,T=s.pinReparent,O=s.pinSpacer,M=s.containerAnimation,B=s.fastScrollEnd,E=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Qt:_t,R=!f&&f!==0,D=ii(n.scroller||Se),q=Q.core.getCache(D),Z=Ir(D),se=("pinType"in n?n.pinType:Gn(D,"pinType")||Z&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=R&&n.toggleActions.split(" "),K="markers"in n?n.markers:io.markers,ve=Z?0:parseFloat(Ai(D)["border"+P.p2+Ss])||0,I=this,xe=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Ie=p3(D,Z,P),at=h3(D,Z),Me=0,Ye=0,Oe=0,z=Jn(D,P),V,N,J,de,k,w,C,L,j,A,H,U,W,F,ie,Y,ne,ee,ge,le,be,Ue,Xe,It,Re,Wi,xi,ft,kt,zi,nr,Ee,rr,Ri,Li,Di,sr,Fr,cn;if(I._startClamp=I._endClamp=!1,I._dir=P,y*=45,I.scroller=D,I.scroll=M?M.time.bind(M):z,de=z(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(bm=1,n.refreshPriority===-9999&&(ha=I)),q.tweenScroll=q.tweenScroll||{top:Qd(D,_t),left:Qd(D,Qt)},I.tweenTo=V=q.tweenScroll[P.p],I.scrubDuration=function(X){rr=Gs(X)&&X,rr?Ee?Ee.duration(X):Ee=Q.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:rr,paused:!0,onComplete:function(){return p&&p(I)}}):(Ee&&Ee.progress(1).kill(),Ee=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(f),zi=0,l||(l=r.vars.id)),x&&((!pr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in je.style&&Q.set(Z?[je,gi]:D,{scrollBehavior:"auto"}),Ae.forEach(function(X){return Nt(X)&&X.target===(Z?He.scrollingElement||gi:D)&&(X.smooth=!1)}),J=Nt(x.snapTo)?x.snapTo:x.snapTo==="labels"?_3(r):x.snapTo==="labelsDirectional"?y3(r):x.directional!==!1?function(X,pe){return ff(x.snapTo)(X,Lt()-Ye<500?0:pe.direction)}:Q.utils.snap(x.snapTo),Ri=x.duration||{min:.1,max:2},Ri=pr(Ri)?ua(Ri.min,Ri.max):ua(Ri,Ri),Li=Q.delayedCall(x.delay||rr/2||.1,function(){var X=z(),pe=Lt()-Ye<500,ae=V.tween;if((pe||Math.abs(I.getVelocity())<10)&&!ae&&!pl&&Me!==X){var he=(X-w)/F,bt=r&&!R?r.totalProgress():he,Ce=pe?0:(bt-nr)/(Lt()-Us)*1e3||0,ot=Q.utils.clamp(-he,1-he,Wr(Ce/2)*Ce/.185),Mt=he+(x.inertia===!1?0:ot),rt,Ke,Be=x,ji=Be.onStart,et=Be.onInterrupt,ci=Be.onComplete;if(rt=J(Mt,I),Gs(rt)||(rt=Mt),Ke=Math.max(0,Math.round(w+rt*F)),X<=C&&X>=w&&Ke!==X){if(ae&&!ae._initted&&ae.data<=Wr(Ke-X))return;x.inertia===!1&&(ot=rt-he),V(Ke,{duration:Ri(Wr(Math.max(Wr(Mt-bt),Wr(rt-bt))*.185/Ce/.05||0)),ease:x.ease||"power3",data:Wr(Ke-X),onInterrupt:function(){return Li.restart(!0)&&et&&et(I)},onComplete:function(){I.update(),Me=z(),r&&!R&&(Ee?Ee.resetTo("totalProgress",rt,r._tTime/r._tDur):r.progress(rt)),zi=nr=r&&!R?r.totalProgress():I.progress,m&&m(I),ci&&ci(I)}},X,ot*F,Ke-X-ot*F),ji&&ji(I,V.tween)}}else I.isActive&&Me!==X&&Li.restart(!0)}).pause()),l&&(Gc[l]=I),g=I.trigger=ii(g||d!==!0&&d),cn=g&&g._gsap&&g._gsap.stRevert,cn&&(cn=cn(I)),d=d===!0?g:ii(d),fi(o)&&(o={targets:g,className:o}),d&&(b===!1||b===Si||(b=!b&&d.parentNode&&d.parentNode.style&&Ai(d.parentNode).display==="flex"?!1:dt),I.pin=d,N=Q.core.getCache(d),N.spacer?ie=N.pinState:(O&&(O=ii(O),O&&!O.nodeType&&(O=O.current||O.nativeElement),N.spacerIsNative=!!O,O&&(N.spacerState=ro(O))),N.spacer=ee=O||He.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),N.pinState=ie=ro(d)),n.force3D!==!1&&Q.set(d,{force3D:!0}),I.spacer=ee=N.spacer,kt=Ai(d),It=kt[b+P.os2],le=Q.getProperty(d),be=Q.quickSetter(d,P.a,mt),ql(d,ee,kt),ne=ro(d)),K){U=pr(K)?Gd(K,Yd):Yd,A=no("scroller-start",l,D,P,U,0),H=no("scroller-end",l,D,P,U,0,A),ge=A["offset"+P.op.d2];var Cs=ii(Gn(D,"content")||D);L=this.markerStart=no("start",l,Cs,P,U,ge,0,M),j=this.markerEnd=no("end",l,Cs,P,U,ge,0,M),M&&(Fr=Q.quickSetter([L,j],P.a,mt)),!se&&!(an.length&&Gn(D,"fixedMarkers")===!0)&&(m3(Z?je:D),Q.set([A,H],{force3D:!0}),Wi=Q.quickSetter(A,P.a,mt),ft=Q.quickSetter(H,P.a,mt))}if(M){var ye=M.vars.onUpdate,oe=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){I.update(0,0,1),ye&&ye.apply(M,oe||[])})}if(I.previous=function(){return ke[ke.indexOf(I)-1]},I.next=function(){return ke[ke.indexOf(I)+1]},I.revert=function(X,pe){if(!pe)return I.kill(!0);var ae=X!==!1||!I.enabled,he=Rt;ae!==I.isReverted&&(ae&&(Di=Math.max(z(),I.scroll.rec||0),Oe=I.progress,sr=r&&r.progress()),L&&[L,j,A,H].forEach(function(bt){return bt.style.display=ae?"none":"block"}),ae&&(Rt=I,I.update(ae)),d&&(!T||!I.isActive)&&(ae?w3(d,ee,ie):ql(d,ee,Ai(d),Re)),ae||I.update(ae),Rt=he,I.isReverted=ae)},I.refresh=function(X,pe,ae,he){if(!((Rt||!I.enabled)&&!pe)){if(d&&X&&Mi){wt(t,"scrollEnd",Im);return}!Kt&&xe&&xe(I),Rt=I,V.tween&&!ae&&(V.tween.kill(),V.tween=0),Ee&&Ee.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(In){return In.vars.immediateRender&&In.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var bt=Ie(),Ce=at(),ot=M?M.duration():Qi(D,P),Mt=F<=.01||!F,rt=0,Ke=he||0,Be=pr(ae)?ae.end:n.end,ji=n.endTrigger||g,et=pr(ae)?ae.start:n.start||(n.start===0||!g?0:d?"0 0":"0 100%"),ci=I.pinnedContainer=n.pinnedContainer&&ii(n.pinnedContainer,I),Ui=g&&Math.max(0,ke.indexOf(I))||0,St=Ui,At,Ot,ar,Wa,zt,ht,Hi,wl,Af,Ps,Vi,Is,Ua;for(K&&pr(ae)&&(Is=Q.getProperty(A,P.p),Ua=Q.getProperty(H,P.p));St-- >0;)ht=ke[St],ht.end||ht.refresh(0,1)||(Rt=I),Hi=ht.pin,Hi&&(Hi===g||Hi===d||Hi===ci)&&!ht.isReverted&&(Ps||(Ps=[]),Ps.unshift(ht),ht.revert(!0,!0)),ht!==ke[St]&&(Ui--,St--);for(Nt(et)&&(et=et(I)),et=Wd(et,"start",I),w=Jd(et,g,bt,P,z(),L,A,I,Ce,ve,se,ot,M,I._startClamp&&"_startClamp")||(d?-.001:0),Nt(Be)&&(Be=Be(I)),fi(Be)&&!Be.indexOf("+=")&&(~Be.indexOf(" ")?Be=(fi(et)?et.split(" ")[0]:"")+Be:(rt=vo(Be.substr(2),bt),Be=fi(et)?et:(M?Q.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,w):w)+rt,ji=g)),Be=Wd(Be,"end",I),C=Math.max(w,Jd(Be||(ji?"100% 0":ot),ji,bt,P,z()+rt,j,H,I,Ce,ve,se,ot,M,I._endClamp&&"_endClamp"))||-.001,rt=0,St=Ui;St--;)ht=ke[St],Hi=ht.pin,Hi&&ht.start-ht._pinPush<=w&&!M&&ht.end>0&&(At=ht.end-(I._startClamp?Math.max(0,ht.start):ht.start),(Hi===g&&ht.start-ht._pinPush<w||Hi===ci)&&isNaN(et)&&(rt+=At*(1-ht.progress)),Hi===d&&(Ke+=At));if(w+=rt,C+=rt,I._startClamp&&(I._startClamp+=rt),I._endClamp&&!Kt&&(I._endClamp=C||-.001,C=Math.min(C,Qi(D,P))),F=C-w||(w-=.01)&&.001,Mt&&(Oe=Q.utils.clamp(0,1,Q.utils.normalize(w,C,Di))),I._pinPush=Ke,L&&rt&&(At={},At[P.a]="+="+rt,ci&&(At[P.p]="-="+z()),Q.set([L,j],At)),d&&!(Vc&&I.end>=Qi(D,P)))At=Ai(d),Wa=P===_t,ar=z(),Ue=parseFloat(le(P.a))+Ke,!ot&&C>1&&(Vi=(Z?He.scrollingElement||gi:D).style,Vi={style:Vi,value:Vi["overflow"+P.a.toUpperCase()]},Z&&Ai(je)["overflow"+P.a.toUpperCase()]!=="scroll"&&(Vi.style["overflow"+P.a.toUpperCase()]="scroll")),ql(d,ee,At),ne=ro(d),Ot=_n(d,!0),wl=se&&Jn(D,Wa?Qt:_t)(),b?(Re=[b+P.os2,F+Ke+mt],Re.t=ee,St=b===dt?Yo(d,P)+F+Ke:0,St&&(Re.push(P.d,St+mt),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=St+mt)),fs(Re),ci&&ke.forEach(function(In){In.pin===ci&&In.vars.pinSpacing!==!1&&(In._subPinOffset=!0)}),se&&z(Di)):(St=Yo(d,P),St&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=St+mt)),se&&(zt={top:Ot.top+(Wa?ar-w:wl)+mt,left:Ot.left+(Wa?wl:ar-w)+mt,boxSizing:"border-box",position:"fixed"},zt[Ar]=zt["max"+Ss]=Math.ceil(Ot.width)+mt,zt[Er]=zt["max"+uf]=Math.ceil(Ot.height)+mt,zt[Si]=zt[Si+ga]=zt[Si+fa]=zt[Si+pa]=zt[Si+da]="0",zt[dt]=At[dt],zt[dt+ga]=At[dt+ga],zt[dt+fa]=At[dt+fa],zt[dt+pa]=At[dt+pa],zt[dt+da]=At[dt+da],Y=k3(ie,zt,T),Kt&&z(0)),r?(Af=r._initted,Ul(1),r.render(r.duration(),!0,!0),Xe=le(P.a)-Ue+F+Ke,xi=Math.abs(F-Xe)>1,se&&xi&&Y.splice(Y.length-2,2),r.render(0,!0,!0),Af||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ul(0)):Xe=F,Vi&&(Vi.value?Vi.style["overflow"+P.a.toUpperCase()]=Vi.value:Vi.style.removeProperty("overflow-"+P.a));else if(g&&z()&&!M)for(Ot=g.parentNode;Ot&&Ot!==je;)Ot._pinOffset&&(w-=Ot._pinOffset,C-=Ot._pinOffset),Ot=Ot.parentNode;Ps&&Ps.forEach(function(In){return In.revert(!1,!0)}),I.start=w,I.end=C,de=k=Kt?Di:z(),!M&&!Kt&&(de<Di&&z(Di),I.scroll.rec=0),I.revert(!1,!0),Ye=Lt(),Li&&(Me=-1,Li.restart(!0)),Rt=0,r&&R&&(r._initted||sr)&&r.progress()!==sr&&r.progress(sr||0,!0).render(r.time(),!0,!0),(Mt||Oe!==I.progress||M||_||r&&!r._initted)&&(r&&!R&&(r._initted||Oe||r.vars.immediateRender!==!1)&&r.totalProgress(M&&w<-.001&&!Oe?Q.utils.normalize(w,C,0):Oe,!0),I.progress=Mt||(de-w)/F===Oe?0:Oe),d&&b&&(ee._pinOffset=Math.round(I.progress*Xe)),Ee&&Ee.invalidate(),isNaN(Is)||(Is-=Q.getProperty(A,P.p),Ua-=Q.getProperty(H,P.p),so(A,P,Is),so(L,P,Is-(he||0)),so(H,P,Ua),so(j,P,Ua-(he||0))),Mt&&!Kt&&I.update(),u&&!Kt&&!W&&(W=!0,u(I),W=!1)}},I.getVelocity=function(){return(z()-k)/(Lt()-Us)*1e3||0},I.endAnimation=function(){js(I.callbackAnimation),r&&(Ee?Ee.progress(1):r.paused()?R||js(r,I.direction<0,1):js(r,r.reversed()))},I.labelToScroll=function(X){return r&&r.labels&&(w||I.refresh()||w)+r.labels[X]/r.duration()*F||0},I.getTrailing=function(X){var pe=ke.indexOf(I),ae=I.direction>0?ke.slice(0,pe).reverse():ke.slice(pe+1);return(fi(X)?ae.filter(function(he){return he.vars.preventOverlaps===X}):ae).filter(function(he){return I.direction>0?he.end<=w:he.start>=C})},I.update=function(X,pe,ae){if(!(M&&!ae&&!X)){var he=Kt===!0?Di:I.scroll(),bt=X?0:(he-w)/F,Ce=bt<0?0:bt>1?1:bt||0,ot=I.progress,Mt,rt,Ke,Be,ji,et,ci,Ui;if(pe&&(k=de,de=M?z():he,x&&(nr=zi,zi=r&&!R?r.totalProgress():Ce)),y&&d&&!Rt&&!Za&&Mi&&(!Ce&&w<he+(he-k)/(Lt()-Us)*y?Ce=1e-4:Ce===1&&C>he+(he-k)/(Lt()-Us)*y&&(Ce=.9999)),Ce!==ot&&I.enabled){if(Mt=I.isActive=!!Ce&&Ce<1,rt=!!ot&&ot<1,et=Mt!==rt,ji=et||!!Ce!=!!ot,I.direction=Ce>ot?1:-1,I.progress=Ce,ji&&!Rt&&(Ke=Ce&&!ot?0:Ce===1?1:ot===1?2:3,R&&(Be=!et&&G[Ke+1]!=="none"&&G[Ke+1]||G[Ke],Ui=r&&(Be==="complete"||Be==="reset"||Be in r))),E&&(et||Ui)&&(Ui||f||!r)&&(Nt(E)?E(I):I.getTrailing(E).forEach(function(ar){return ar.endAnimation()})),R||(Ee&&!Rt&&!Za?(Ee._dp._time-Ee._start!==Ee._time&&Ee.render(Ee._dp._time-Ee._start),Ee.resetTo?Ee.resetTo("totalProgress",Ce,r._tTime/r._tDur):(Ee.vars.totalProgress=Ce,Ee.invalidate().restart())):r&&r.totalProgress(Ce,!!(Rt&&(Ye||X)))),d){if(X&&b&&(ee.style[b+P.os2]=It),!se)be(Vs(Ue+Xe*Ce));else if(ji){if(ci=!X&&Ce>ot&&C+1>he&&he+1>=Qi(D,P),T)if(!X&&(Mt||ci)){var St=_n(d,!0),At=he-w;Zd(d,je,St.top+(P===_t?At:0)+mt,St.left+(P===_t?0:At)+mt)}else Zd(d,ee);fs(Mt||ci?Y:ne),xi&&Ce<1&&Mt||be(Ue+(Ce===1&&!ci?Xe:0))}}x&&!V.tween&&!Rt&&!Za&&Li.restart(!0),o&&(et||v&&Ce&&(Ce<1||!Hl))&&Oa(o.targets).forEach(function(ar){return ar.classList[Mt||v?"add":"remove"](o.className)}),a&&!R&&!X&&a(I),ji&&!Rt?(R&&(Ui&&(Be==="complete"?r.pause().totalProgress(1):Be==="reset"?r.restart(!0).pause():Be==="restart"?r.restart(!0):r[Be]()),a&&a(I)),(et||!Hl)&&(c&&et&&Gl(I,c),te[Ke]&&Gl(I,te[Ke]),v&&(Ce===1?I.kill(!1,1):te[Ke]=0),et||(Ke=Ce===1?1:3,te[Ke]&&Gl(I,te[Ke]))),B&&!Mt&&Math.abs(I.getVelocity())>(Gs(B)?B:2500)&&(js(I.callbackAnimation),Ee?Ee.progress(1):js(r,Be==="reverse"?1:!Ce,1))):R&&a&&!Rt&&a(I)}if(ft){var Ot=M?he/M.duration()*(M._caScrollDist||0):he;Wi(Ot+(A._isFlipped?1:0)),ft(Ot)}Fr&&Fr(-he/M.duration()*(M._caScrollDist||0))}},I.enable=function(X,pe){I.enabled||(I.enabled=!0,wt(D,"resize",Ys),Z||wt(D,"scroll",Ur),xe&&wt(t,"refreshInit",xe),X!==!1&&(I.progress=Oe=0,de=k=Me=z()),pe!==!1&&I.refresh())},I.getTween=function(X){return X&&V?V.tween:Ee},I.setPositions=function(X,pe,ae,he){if(M){var bt=M.scrollTrigger,Ce=M.duration(),ot=bt.end-bt.start;X=bt.start+ot*X/Ce,pe=bt.start+ot*pe/Ce}I.refresh(!1,!1,{start:Ud(X,ae&&!!I._startClamp),end:Ud(pe,ae&&!!I._endClamp)},he),I.update()},I.adjustPinSpacing=function(X){if(Re&&X){var pe=Re.indexOf(P.d)+1;Re[pe]=parseFloat(Re[pe])+X+mt,Re[1]=parseFloat(Re[1])+X+mt,fs(Re)}},I.disable=function(X,pe){if(I.enabled&&(X!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,pe||Ee&&Ee.pause(),Di=0,N&&(N.uncache=1),xe&&vt(t,"refreshInit",xe),Li&&(Li.pause(),V.tween&&V.tween.kill()&&(V.tween=0)),!Z)){for(var ae=ke.length;ae--;)if(ke[ae].scroller===D&&ke[ae]!==I)return;vt(D,"resize",Ys),Z||vt(D,"scroll",Ur)}},I.kill=function(X,pe){I.disable(X,pe),Ee&&!pe&&Ee.kill(),l&&delete Gc[l];var ae=ke.indexOf(I);ae>=0&&ke.splice(ae,1),ae===Xt&&xo>0&&Xt--,ae=0,ke.forEach(function(he){return he.scroller===I.scroller&&(ae=1)}),ae||Kt||(I.scroll.rec=0),r&&(r.scrollTrigger=null,X&&r.revert({kill:!1}),pe||r.kill()),L&&[L,j,A,H].forEach(function(he){return he.parentNode&&he.parentNode.removeChild(he)}),ha===I&&(ha=0),d&&(N&&(N.uncache=1),ae=0,ke.forEach(function(he){return he.pin===d&&ae++}),ae||(N.spacer=0)),n.onKill&&n.onKill(I)},ke.push(I),I.enable(!1,!1),cn&&cn(I),r&&r.add&&!F){var Le=I.update;I.update=function(){I.update=Le,Ae.cache++,w||C||I.refresh()},Q.delayedCall(.01,I.update),F=.01,w=C=0}else I.refresh();d&&v3()},t.register=function(n){return Yr||(Q=n||Sm(),km()&&window.document&&t.enable(),Yr=Hs),Yr},t.defaults=function(n){if(n)for(var r in n)io[r]=n[r];return io},t.disable=function(n,r){Hs=0,ke.forEach(function(a){return a[r?"kill":"disable"](n)}),vt(Se,"wheel",Ur),vt(He,"scroll",Ur),clearInterval(Ja),vt(He,"touchcancel",Xi),vt(je,"touchstart",Xi),eo(vt,He,"pointerdown,touchstart,mousedown",Hd),eo(vt,He,"pointerup,touchend,mouseup",Vd),Vo.kill(),Qa(vt);for(var s=0;s<Ae.length;s+=3)to(vt,Ae[s],Ae[s+1]),to(vt,Ae[s],Ae[s+2])},t.enable=function(){if(Se=window,He=document,gi=He.documentElement,je=He.body,Q&&(Oa=Q.utils.toArray,ua=Q.utils.clamp,Hc=Q.core.context||Xi,Ul=Q.core.suppressOverwrites||Xi,af=Se.history.scrollRestoration||"auto",Yc=Se.pageYOffset||0,Q.core.globals("ScrollTrigger",t),je)){Hs=1,us=document.createElement("div"),us.style.height="100vh",us.style.position="absolute",zm(),g3(),ct.register(Q),t.isTouch=ct.isTouch,zn=ct.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Uc=ct.isTouch===1,wt(Se,"wheel",Ur),sf=[Se,He,gi,je],Q.matchMedia?(t.matchMedia=function(c){var u=Q.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Q.addEventListener("matchMediaInit",function(){return df()}),Q.addEventListener("matchMediaRevert",function(){return Mm()}),Q.addEventListener("matchMedia",function(){_r(0,1),Or("matchMedia")}),Q.matchMedia().add("(orientation: portrait)",function(){return Yl(),Yl})):console.warn("Requires GSAP 3.11.0 or later"),Yl(),wt(He,"scroll",Ur);var n=je.hasAttribute("style"),r=je.style,s=r.borderTopStyle,a=Q.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=_n(je),_t.m=Math.round(o.top+_t.sc())||0,Qt.m=Math.round(o.left+Qt.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(je.setAttribute("style",""),je.removeAttribute("style")),Ja=setInterval(qd,250),Q.delayedCall(.5,function(){return Za=0}),wt(He,"touchcancel",Xi),wt(je,"touchstart",Xi),eo(wt,He,"pointerdown,touchstart,mousedown",Hd),eo(wt,He,"pointerup,touchend,mouseup",Vd),Wc=Q.utils.checkPrefix("transform"),ko.push(Wc),Yr=Lt(),Vo=Q.delayedCall(.2,_r).pause(),qr=[He,"visibilitychange",function(){var c=Se.innerWidth,u=Se.innerHeight;He.hidden?(Bd=c,$d=u):(Bd!==c||$d!==u)&&Ys()},He,"DOMContentLoaded",_r,Se,"load",_r,Se,"resize",Ys],Qa(wt),ke.forEach(function(c){return c.enable(0,1)}),l=0;l<Ae.length;l+=3)to(vt,Ae[l],Ae[l+1]),to(vt,Ae[l],Ae[l+2])}},t.config=function(n){"limitCallbacks"in n&&(Hl=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ja)||(Ja=r)&&setInterval(qd,r),"ignoreMobileResize"in n&&(Uc=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Qa(vt)||Qa(wt,n.autoRefreshEvents||"none"),vm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,r){var s=ii(n),a=Ae.indexOf(s),o=Ir(s);~a&&Ae.splice(a,o?6:2),r&&(o?an.unshift(Se,r,je,r,gi,r):an.unshift(s,r))},t.clearMatchMedia=function(n){ke.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},t.isInViewport=function(n,r,s){var a=(fi(n)?ii(n):n).getBoundingClientRect(),o=a[s?Ar:Er]*r||0;return s?a.right-o>0&&a.left+o<Se.innerWidth:a.bottom-o>0&&a.top+o<Se.innerHeight},t.positionInViewport=function(n,r,s){fi(n)&&(n=ii(n));var a=n.getBoundingClientRect(),o=a[s?Ar:Er],l=r==null?o/2:r in qo?qo[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/Se.innerWidth:(a.top+l)/Se.innerHeight},t.killAll=function(n){if(ke.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Mr.killAll||[];Mr={},r.forEach(function(s){return s()})}},t}();Te.version="3.13.0";Te.saveStyles=function(t){return t?Oa(t).forEach(function(e){if(e&&e.style){var i=ui.indexOf(e);i>=0&&ui.splice(i,5),ui.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Q.core.getCache(e),Hc())}}):ui};Te.revert=function(t,e){return df(!t,e)};Te.create=function(t,e){return new Te(t,e)};Te.refresh=function(t){return t?Ys(!0):(Yr||Te.register())&&_r(!0)};Te.update=function(t){return++Ae.cache&&vn(t===!0?2:0)};Te.clearScrollMemory=Om;Te.maxScroll=function(t,e){return Qi(t,e?Qt:_t)};Te.getScrollFunc=function(t,e){return Jn(ii(t),e?Qt:_t)};Te.getById=function(t){return Gc[t]};Te.getAll=function(){return ke.filter(function(t){return t.vars.id!=="ScrollSmoother"})};Te.isScrolling=function(){return!!Mi};Te.snapDirectional=ff;Te.addEventListener=function(t,e){var i=Mr[t]||(Mr[t]=[]);~i.indexOf(e)||i.push(e)};Te.removeEventListener=function(t,e){var i=Mr[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)};Te.batch=function(t,e){var i=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],g=[],d=Q.delayedCall(r,function(){u(f,g),f=[],g=[]}).pause();return function(b){f.length||d.restart(!0),f.push(b.trigger),g.push(b),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Nt(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Nt(s)&&(s=s(),wt(Te,"refresh",function(){return s=e.batchMax()})),Oa(t).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,i.push(Te.create(c))}),i};var eg=function(e,i,n,r){return i>r?e(r):i<0&&e(0),n>r?(r-i)/(n-i):n<0?i/(i-n):1},Xl=function t(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(ct.isTouch?" pinch-zoom":""):"none",e===gi&&t(je,i)},ao={auto:1,scroll:1},A3=function(e){var i=e.event,n=e.target,r=e.axis,s=(i.changedTouches?i.changedTouches[0]:i).target,a=s._gsap||Q.core.getCache(s),o=Lt(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==je&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ao[(l=Ai(s)).overflowY]||ao[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ir(s)&&(ao[(l=Ai(s)).overflowY]||ao[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Lm=function(e,i,n,r){return ct.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&A3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&wt(He,ct.eventTypes[0],ig,!1,!0)},onDisable:function(){return vt(He,ct.eventTypes[0],ig,!0)}})},E3=/(input|label|select|textarea)/i,tg,ig=function(e){var i=E3.test(e.target.tagName);(i||tg)&&(e._gsapAllow=!0,tg=i)},T3=function(e){pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,n=i.normalizeScrollX,r=i.momentum,s=i.allowNestedScroll,a=i.onRelease,o,l,c=ii(e.target)||gi,u=Q.core.globals().ScrollSmoother,f=u&&u.get(),g=zn&&(e.content&&ii(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Jn(c,_t),b=Jn(c,Qt),_=1,y=(ct.isTouch&&Se.visualViewport?Se.visualViewport.scale*Se.visualViewport.width:Se.outerWidth)/Se.innerWidth,p=0,m=Nt(r)?function(){return r(o)}:function(){return r||2.8},v,x,T=Lm(c,e.type,!0,s),O=function(){return x=!1},M=Xi,B=Xi,E=function(){l=Qi(c,_t),B=ua(zn?1:0,l),n&&(M=ua(0,Qi(c,Qt))),v=Tr},P=function(){g._gsap.y=Vs(parseFloat(g._gsap.y)+d.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(x){requestAnimationFrame(O);var K=Vs(o.deltaY/2),ve=B(d.v-K);if(g&&ve!==d.v+d.offset){d.offset=ve-d.v;var I=Vs((parseFloat(g&&g._gsap.y)||0)-d.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",g._gsap.y=I+"px",d.cacheID=Ae.cache,vn()}return!0}d.offset&&P(),x=!0},D,q,Z,se,te=function(){E(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return g&&Q.set(g,{y:"+=0"}),e.ignoreCheck=function(G){return zn&&G.type==="touchmove"&&R()||_>1.05&&G.type!=="touchstart"||o.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){x=!1;var G=_;_=Vs((Se.visualViewport&&Se.visualViewport.scale||1)/y),D.pause(),G!==_&&Xl(c,_>1.01?!0:n?!1:"x"),q=b(),Z=d(),E(),v=Tr},e.onRelease=e.onGestureStart=function(G,K){if(d.offset&&P(),!K)se.restart(!0);else{Ae.cache++;var ve=m(),I,xe;n&&(I=b(),xe=I+ve*.05*-G.velocityX/.227,ve*=eg(b,I,xe,Qi(c,Qt)),D.vars.scrollX=M(xe)),I=d(),xe=I+ve*.05*-G.velocityY/.227,ve*=eg(d,I,xe,Qi(c,_t)),D.vars.scrollY=B(xe),D.invalidate().duration(ve).play(.01),(zn&&D.vars.scrollY>=l||I>=l-1)&&Q.to({},{onUpdate:te,duration:ve})}a&&a(G)},e.onWheel=function(){D._ts&&D.pause(),Lt()-p>1e3&&(v=0,p=Lt())},e.onChange=function(G,K,ve,I,xe){if(Tr!==v&&E(),K&&n&&b(M(I[2]===K?q+(G.startX-G.x):b()+K-I[1])),ve){d.offset&&P();var Ie=xe[2]===ve,at=Ie?Z+G.startY-G.y:d()+ve-xe[1],Me=B(at);Ie&&at!==Me&&(Z+=Me-at),d(Me)}(ve||K)&&vn()},e.onEnable=function(){Xl(c,n?!1:"x"),Te.addEventListener("refresh",te),wt(Se,"resize",te),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=b.smooth=!1),T.enable()},e.onDisable=function(){Xl(c,!0),vt(Se,"resize",te),Te.removeEventListener("refresh",te),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new ct(e),o.iOS=zn,zn&&!d()&&d(1),zn&&Q.ticker.add(Xi),se=o._dc,D=Q.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Rm(d,d(),function(){return D.pause()})},onUpdate:vn,onComplete:se.vars.onComplete}),o};Te.sort=function(t){if(Nt(t))return ke.sort(t);var e=Se.pageYOffset||0;return Te.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+Se.innerHeight}),ke.sort(t||function(i,n){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Te.observe=function(t){return new ct(t)};Te.normalizeScroll=function(t){if(typeof t>"u")return qt;if(t===!0&&qt)return qt.enable();if(t===!1){qt&&qt.kill(),qt=t;return}var e=t instanceof ct?t:T3(t);return qt&&qt.target===e.target&&qt.kill(),Ir(e.target)&&(qt=e),e};Te.core={_getVelocityProp:$c,_inputObserver:Lm,_scrollers:Ae,_proxies:an,bridge:{ss:function(){Mi||Or("scrollStart"),Mi=Lt()},ref:function(){return Rt}}};Sm()&&Q.registerPlugin(Te);function C3(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kl={exports:{}},Jl={exports:{}},Ao={exports:{}},P3=Ao.exports,ng;function Dm(){return ng||(ng=1,function(t){(function(e,i){t.exports?t.exports=i():e.EvEmitter=i()})(typeof window<"u"?window:P3,function(){function e(){}var i=e.prototype;return i.on=function(n,r){if(!(!n||!r)){var s=this._events=this._events||{},a=s[n]=s[n]||[];return a.indexOf(r)==-1&&a.push(r),this}},i.once=function(n,r){if(!(!n||!r)){this.on(n,r);var s=this._onceEvents=this._onceEvents||{},a=s[n]=s[n]||{};return a[r]=!0,this}},i.off=function(n,r){var s=this._events&&this._events[n];if(!(!s||!s.length)){var a=s.indexOf(r);return a!=-1&&s.splice(a,1),this}},i.emitEvent=function(n,r){var s=this._events&&this._events[n];if(!(!s||!s.length)){s=s.slice(0),r=r||[];for(var a=this._onceEvents&&this._onceEvents[n],o=0;o<s.length;o++){var l=s[o],c=a&&a[l];c&&(this.off(n,l),delete a[l]),l.apply(this,r)}return this}},i.allOff=function(){delete this._events,delete this._onceEvents},e})}(Ao)),Ao.exports}var Zl={exports:{}};/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */var rg;function gf(){return rg||(rg=1,function(t){(function(e,i){t.exports?t.exports=i():e.getSize=i()})(window,function(){function i(d){var b=parseFloat(d),_=d.indexOf("%")==-1&&!isNaN(b);return _&&b}function n(){}var r=typeof console>"u"?n:function(d){console.error(d)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],a=s.length;function o(){for(var d={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0;b<a;b++){var _=s[b];d[_]=0}return d}function l(d){var b=getComputedStyle(d);return b||r("Style returned "+b+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),b}var c=!1,u;function f(){if(!c){c=!0;var d=document.createElement("div");d.style.width="200px",d.style.padding="1px 2px 3px 4px",d.style.borderStyle="solid",d.style.borderWidth="1px 2px 3px 4px",d.style.boxSizing="border-box";var b=document.body||document.documentElement;b.appendChild(d);var _=l(d);u=Math.round(i(_.width))==200,g.isBoxSizeOuter=u,b.removeChild(d)}}function g(d){if(f(),typeof d=="string"&&(d=document.querySelector(d)),!(!d||typeof d!="object"||!d.nodeType)){var b=l(d);if(b.display=="none")return o();var _={};_.width=d.offsetWidth,_.height=d.offsetHeight;for(var y=_.isBorderBox=b.boxSizing=="border-box",p=0;p<a;p++){var m=s[p],v=b[m],x=parseFloat(v);_[m]=isNaN(x)?0:x}var T=_.paddingLeft+_.paddingRight,O=_.paddingTop+_.paddingBottom,M=_.marginLeft+_.marginRight,B=_.marginTop+_.marginBottom,E=_.borderLeftWidth+_.borderRightWidth,P=_.borderTopWidth+_.borderBottomWidth,R=y&&u,D=i(b.width);D!==!1&&(_.width=D+(R?0:T+E));var q=i(b.height);return q!==!1&&(_.height=q+(R?0:O+P)),_.innerWidth=_.width-(T+E),_.innerHeight=_.height-(O+P),_.outerWidth=_.width+M,_.outerHeight=_.height+B,_}}return g})}(Zl)),Zl.exports}var Ql={exports:{}},ec={exports:{}},sg;function I3(){return sg||(sg=1,function(t){(function(e,i){t.exports?t.exports=i():e.matchesSelector=i()})(window,function(){var i=function(){var n=window.Element.prototype;if(n.matches)return"matches";if(n.matchesSelector)return"matchesSelector";for(var r=["webkit","moz","ms","o"],s=0;s<r.length;s++){var a=r[s],o=a+"MatchesSelector";if(n[o])return o}}();return function(r,s){return r[i](s)}})}(ec)),ec.exports}var ag;function M3(){return ag||(ag=1,function(t){(function(e,i){t.exports?t.exports=i(e,I3()):e.fizzyUIUtils=i(e,e.matchesSelector)})(window,function(i,n){var r={};r.extend=function(o,l){for(var c in l)o[c]=l[c];return o},r.modulo=function(o,l){return(o%l+l)%l};var s=Array.prototype.slice;r.makeArray=function(o){if(Array.isArray(o))return o;if(o==null)return[];var l=typeof o=="object"&&typeof o.length=="number";return l?s.call(o):[o]},r.removeFrom=function(o,l){var c=o.indexOf(l);c!=-1&&o.splice(c,1)},r.getParent=function(o,l){for(;o.parentNode&&o!=document.body;)if(o=o.parentNode,n(o,l))return o},r.getQueryElement=function(o){return typeof o=="string"?document.querySelector(o):o},r.handleEvent=function(o){var l="on"+o.type;this[l]&&this[l](o)},r.filterFindElements=function(o,l){o=r.makeArray(o);var c=[];return o.forEach(function(u){if(u instanceof HTMLElement){if(!l){c.push(u);return}n(u,l)&&c.push(u);for(var f=u.querySelectorAll(l),g=0;g<f.length;g++)c.push(f[g])}}),c},r.debounceMethod=function(o,l,c){c=c||100;var u=o.prototype[l],f=l+"Timeout";o.prototype[l]=function(){var g=this[f];clearTimeout(g);var d=arguments,b=this;this[f]=setTimeout(function(){u.apply(b,d),delete b[f]},c)}},r.docReady=function(o){var l=document.readyState;l=="complete"||l=="interactive"?setTimeout(o):document.addEventListener("DOMContentLoaded",o)},r.toDashed=function(o){return o.replace(/(.)([A-Z])/g,function(l,c,u){return c+"-"+u}).toLowerCase()};var a=i.console;return r.htmlInit=function(o,l){r.docReady(function(){var c=r.toDashed(l),u="data-"+c,f=document.querySelectorAll("["+u+"]"),g=document.querySelectorAll(".js-"+c),d=r.makeArray(f).concat(r.makeArray(g)),b=u+"-options",_=i.jQuery;d.forEach(function(y){var p=y.getAttribute(u)||y.getAttribute(b),m;try{m=p&&JSON.parse(p)}catch(x){a&&a.error("Error parsing "+u+" on "+y.className+": "+x);return}var v=new o(y,m);_&&_.data(y,l,v)})})},r})}(Ql)),Ql.exports}var tc={exports:{}},og;function O3(){return og||(og=1,function(t){(function(e,i){t.exports?t.exports=i(Dm(),gf()):(e.Outlayer={},e.Outlayer.Item=i(e.EvEmitter,e.getSize))})(window,function(i,n){function r(y){for(var p in y)return!1;return p=null,!0}var s=document.documentElement.style,a=typeof s.transition=="string"?"transition":"WebkitTransition",o=typeof s.transform=="string"?"transform":"WebkitTransform",l={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],c={transform:o,transition:a,transitionDuration:a+"Duration",transitionProperty:a+"Property",transitionDelay:a+"Delay"};function u(y,p){y&&(this.element=y,this.layout=p,this.position={x:0,y:0},this._create())}var f=u.prototype=Object.create(i.prototype);f.constructor=u,f._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},f.handleEvent=function(y){var p="on"+y.type;this[p]&&this[p](y)},f.getSize=function(){this.size=n(this.element)},f.css=function(y){var p=this.element.style;for(var m in y){var v=c[m]||m;p[v]=y[m]}},f.getPosition=function(){var y=getComputedStyle(this.element),p=this.layout._getOption("originLeft"),m=this.layout._getOption("originTop"),v=y[p?"left":"right"],x=y[m?"top":"bottom"],T=parseFloat(v),O=parseFloat(x),M=this.layout.size;v.indexOf("%")!=-1&&(T=T/100*M.width),x.indexOf("%")!=-1&&(O=O/100*M.height),T=isNaN(T)?0:T,O=isNaN(O)?0:O,T-=p?M.paddingLeft:M.paddingRight,O-=m?M.paddingTop:M.paddingBottom,this.position.x=T,this.position.y=O},f.layoutPosition=function(){var y=this.layout.size,p={},m=this.layout._getOption("originLeft"),v=this.layout._getOption("originTop"),x=m?"paddingLeft":"paddingRight",T=m?"left":"right",O=m?"right":"left",M=this.position.x+y[x];p[T]=this.getXValue(M),p[O]="";var B=v?"paddingTop":"paddingBottom",E=v?"top":"bottom",P=v?"bottom":"top",R=this.position.y+y[B];p[E]=this.getYValue(R),p[P]="",this.css(p),this.emitEvent("layout",[this])},f.getXValue=function(y){var p=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!p?y/this.layout.size.width*100+"%":y+"px"},f.getYValue=function(y){var p=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&p?y/this.layout.size.height*100+"%":y+"px"},f._transitionTo=function(y,p){this.getPosition();var m=this.position.x,v=this.position.y,x=y==this.position.x&&p==this.position.y;if(this.setPosition(y,p),x&&!this.isTransitioning){this.layoutPosition();return}var T=y-m,O=p-v,M={};M.transform=this.getTranslate(T,O),this.transition({to:M,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},f.getTranslate=function(y,p){var m=this.layout._getOption("originLeft"),v=this.layout._getOption("originTop");return y=m?y:-y,p=v?p:-p,"translate3d("+y+"px, "+p+"px, 0)"},f.goTo=function(y,p){this.setPosition(y,p),this.layoutPosition()},f.moveTo=f._transitionTo,f.setPosition=function(y,p){this.position.x=parseFloat(y),this.position.y=parseFloat(p)},f._nonTransition=function(y){this.css(y.to),y.isCleaning&&this._removeStyles(y.to);for(var p in y.onTransitionEnd)y.onTransitionEnd[p].call(this)},f.transition=function(y){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(y);return}var p=this._transn;for(var m in y.onTransitionEnd)p.onEnd[m]=y.onTransitionEnd[m];for(m in y.to)p.ingProperties[m]=!0,y.isCleaning&&(p.clean[m]=!0);y.from&&(this.css(y.from),this.element.offsetHeight),this.enableTransition(y.to),this.css(y.to),this.isTransitioning=!0};function g(y){return y.replace(/([A-Z])/g,function(p){return"-"+p.toLowerCase()})}var d="opacity,"+g(o);f.enableTransition=function(){if(!this.isTransitioning){var y=this.layout.options.transitionDuration;y=typeof y=="number"?y+"ms":y,this.css({transitionProperty:d,transitionDuration:y,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(l,this,!1)}},f.onwebkitTransitionEnd=function(y){this.ontransitionend(y)},f.onotransitionend=function(y){this.ontransitionend(y)};var b={"-webkit-transform":"transform"};f.ontransitionend=function(y){if(y.target===this.element){var p=this._transn,m=b[y.propertyName]||y.propertyName;if(delete p.ingProperties[m],r(p.ingProperties)&&this.disableTransition(),m in p.clean&&(this.element.style[y.propertyName]="",delete p.clean[m]),m in p.onEnd){var v=p.onEnd[m];v.call(this),delete p.onEnd[m]}this.emitEvent("transitionEnd",[this])}},f.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(l,this,!1),this.isTransitioning=!1},f._removeStyles=function(y){var p={};for(var m in y)p[m]="";this.css(p)};var _={transitionProperty:"",transitionDuration:"",transitionDelay:""};return f.removeTransitionStyles=function(){this.css(_)},f.stagger=function(y){y=isNaN(y)?0:y,this.staggerDelay=y+"ms"},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},f.remove=function(){if(!a||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},f.reveal=function(){delete this.isHidden,this.css({display:""});var y=this.layout.options,p={},m=this.getHideRevealTransitionEndProperty("visibleStyle");p[m]=this.onRevealTransitionEnd,this.transition({from:y.hiddenStyle,to:y.visibleStyle,isCleaning:!0,onTransitionEnd:p})},f.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},f.getHideRevealTransitionEndProperty=function(y){var p=this.layout.options[y];if(p.opacity)return"opacity";for(var m in p)return m},f.hide=function(){this.isHidden=!0,this.css({display:""});var y=this.layout.options,p={},m=this.getHideRevealTransitionEndProperty("hiddenStyle");p[m]=this.onHideTransitionEnd,this.transition({from:y.visibleStyle,to:y.hiddenStyle,isCleaning:!0,onTransitionEnd:p})},f.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},f.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},u})}(tc)),tc.exports}/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */var lg;function z3(){return lg||(lg=1,function(t){(function(e,i){t.exports?t.exports=i(e,Dm(),gf(),M3(),O3()):e.Outlayer=i(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)})(window,function(i,n,r,s,a){var o=i.console,l=i.jQuery,c=function(){},u=0,f={};function g(p,m){var v=s.getQueryElement(p);if(!v){o&&o.error("Bad element for "+this.constructor.namespace+": "+(v||p));return}this.element=v,l&&(this.$element=l(this.element)),this.options=s.extend({},this.constructor.defaults),this.option(m);var x=++u;this.element.outlayerGUID=x,f[x]=this,this._create();var T=this._getOption("initLayout");T&&this.layout()}g.namespace="outlayer",g.Item=a,g.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=g.prototype;s.extend(d,n.prototype),d.option=function(p){s.extend(this.options,p)},d._getOption=function(p){var m=this.constructor.compatOptions[p];return m&&this.options[m]!==void 0?this.options[m]:this.options[p]},g.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),s.extend(this.element.style,this.options.containerStyle);var p=this._getOption("resize");p&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(p){for(var m=this._filterFindItemElements(p),v=this.constructor.Item,x=[],T=0;T<m.length;T++){var O=m[T],M=new v(O,this);x.push(M)}return x},d._filterFindItemElements=function(p){return s.filterFindElements(p,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(p){return p.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var p=this._getOption("layoutInstant"),m=p!==void 0?p:!this._isLayoutInited;this.layoutItems(this.items,m),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=r(this.element)},d._getMeasurement=function(p,m){var v=this.options[p],x;v?(typeof v=="string"?x=this.element.querySelector(v):v instanceof HTMLElement&&(x=v),this[p]=x?r(x)[m]:v):this[p]=0},d.layoutItems=function(p,m){p=this._getItemsForLayout(p),this._layoutItems(p,m),this._postLayout()},d._getItemsForLayout=function(p){return p.filter(function(m){return!m.isIgnored})},d._layoutItems=function(p,m){if(this._emitCompleteOnItems("layout",p),!(!p||!p.length)){var v=[];p.forEach(function(x){var T=this._getItemLayoutPosition(x);T.item=x,T.isInstant=m||x.isLayoutInstant,v.push(T)},this),this._processLayoutQueue(v)}},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(p){this.updateStagger(),p.forEach(function(m,v){this._positionItem(m.item,m.x,m.y,m.isInstant,v)},this)},d.updateStagger=function(){var p=this.options.stagger;if(p==null){this.stagger=0;return}return this.stagger=y(p),this.stagger},d._positionItem=function(p,m,v,x,T){x?p.goTo(m,v):(p.stagger(T*this.stagger),p.moveTo(m,v))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){var p=this._getOption("resizeContainer");if(p){var m=this._getContainerSize();m&&(this._setContainerMeasure(m.width,!0),this._setContainerMeasure(m.height,!1))}},d._getContainerSize=c,d._setContainerMeasure=function(p,m){if(p!==void 0){var v=this.size;v.isBorderBox&&(p+=m?v.paddingLeft+v.paddingRight+v.borderLeftWidth+v.borderRightWidth:v.paddingBottom+v.paddingTop+v.borderTopWidth+v.borderBottomWidth),p=Math.max(p,0),this.element.style[m?"width":"height"]=p+"px"}},d._emitCompleteOnItems=function(p,m){var v=this;function x(){v.dispatchEvent(p+"Complete",null,[m])}var T=m.length;if(!m||!T){x();return}var O=0;function M(){O++,O==T&&x()}m.forEach(function(B){B.once(p,M)})},d.dispatchEvent=function(p,m,v){var x=m?[m].concat(v):v;if(this.emitEvent(p,x),l)if(this.$element=this.$element||l(this.element),m){var T=l.Event(m);T.type=p,this.$element.trigger(T,v)}else this.$element.trigger(p,v)},d.ignore=function(p){var m=this.getItem(p);m&&(m.isIgnored=!0)},d.unignore=function(p){var m=this.getItem(p);m&&delete m.isIgnored},d.stamp=function(p){p=this._find(p),p&&(this.stamps=this.stamps.concat(p),p.forEach(this.ignore,this))},d.unstamp=function(p){p=this._find(p),p&&p.forEach(function(m){s.removeFrom(this.stamps,m),this.unignore(m)},this)},d._find=function(p){if(p)return typeof p=="string"&&(p=this.element.querySelectorAll(p)),p=s.makeArray(p),p},d._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var p=this.element.getBoundingClientRect(),m=this.size;this._boundingRect={left:p.left+m.paddingLeft+m.borderLeftWidth,top:p.top+m.paddingTop+m.borderTopWidth,right:p.right-(m.paddingRight+m.borderRightWidth),bottom:p.bottom-(m.paddingBottom+m.borderBottomWidth)}},d._manageStamp=c,d._getElementOffset=function(p){var m=p.getBoundingClientRect(),v=this._boundingRect,x=r(p),T={left:m.left-v.left-x.marginLeft,top:m.top-v.top-x.marginTop,right:v.right-m.right-x.marginRight,bottom:v.bottom-m.bottom-x.marginBottom};return T},d.handleEvent=s.handleEvent,d.bindResize=function(){i.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){i.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},s.debounceMethod(g,"onresize",100),d.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},d.needsResizeLayout=function(){var p=r(this.element),m=this.size&&p;return m&&p.innerWidth!==this.size.innerWidth},d.addItems=function(p){var m=this._itemize(p);return m.length&&(this.items=this.items.concat(m)),m},d.appended=function(p){var m=this.addItems(p);m.length&&(this.layoutItems(m,!0),this.reveal(m))},d.prepended=function(p){var m=this._itemize(p);if(m.length){var v=this.items.slice(0);this.items=m.concat(v),this._resetLayout(),this._manageStamps(),this.layoutItems(m,!0),this.reveal(m),this.layoutItems(v)}},d.reveal=function(p){if(this._emitCompleteOnItems("reveal",p),!(!p||!p.length)){var m=this.updateStagger();p.forEach(function(v,x){v.stagger(x*m),v.reveal()})}},d.hide=function(p){if(this._emitCompleteOnItems("hide",p),!(!p||!p.length)){var m=this.updateStagger();p.forEach(function(v,x){v.stagger(x*m),v.hide()})}},d.revealItemElements=function(p){var m=this.getItems(p);this.reveal(m)},d.hideItemElements=function(p){var m=this.getItems(p);this.hide(m)},d.getItem=function(p){for(var m=0;m<this.items.length;m++){var v=this.items[m];if(v.element==p)return v}},d.getItems=function(p){p=s.makeArray(p);var m=[];return p.forEach(function(v){var x=this.getItem(v);x&&m.push(x)},this),m},d.remove=function(p){var m=this.getItems(p);this._emitCompleteOnItems("remove",m),!(!m||!m.length)&&m.forEach(function(v){v.remove(),s.removeFrom(this.items,v)},this)},d.destroy=function(){var p=this.element.style;p.height="",p.position="",p.width="",this.items.forEach(function(v){v.destroy()}),this.unbindResize();var m=this.element.outlayerGUID;delete f[m],delete this.element.outlayerGUID,l&&l.removeData(this.element,this.constructor.namespace)},g.data=function(p){p=s.getQueryElement(p);var m=p&&p.outlayerGUID;return m&&f[m]},g.create=function(p,m){var v=b(g);return v.defaults=s.extend({},g.defaults),s.extend(v.defaults,m),v.compatOptions=s.extend({},g.compatOptions),v.namespace=p,v.data=g.data,v.Item=b(a),s.htmlInit(v,p),l&&l.bridget&&l.bridget(p,v),v};function b(p){function m(){p.apply(this,arguments)}return m.prototype=Object.create(p.prototype),m.prototype.constructor=m,m}var _={ms:1,s:1e3};function y(p){if(typeof p=="number")return p;var m=p.match(/(^\d*\.?\d*)(\w*)/),v=m&&m[1],x=m&&m[2];if(!v.length)return 0;v=parseFloat(v);var T=_[x]||1;return v*T}return g.Item=a,g})}(Jl)),Jl.exports}/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */var cg;function R3(){return cg||(cg=1,function(t){(function(e,i){t.exports?t.exports=i(z3(),gf()):e.Masonry=i(e.Outlayer,e.getSize)})(window,function(i,n){var r=i.create("masonry");r.compatOptions.fitWidth="isFitWidth";var s=r.prototype;return s._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var a=0;a<this.cols;a++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},s.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],o=a&&a.element;this.columnWidth=o&&n(o).outerWidth||this.containerWidth}var l=this.columnWidth+=this.gutter,c=this.containerWidth+this.gutter,u=c/l,f=l-c%l,g=f&&f<1?"round":"floor";u=Math[g](u),this.cols=Math.max(u,1)},s.getContainerWidth=function(){var a=this._getOption("fitWidth"),o=a?this.element.parentNode:this.element,l=n(o);this.containerWidth=l&&l.innerWidth},s._getItemLayoutPosition=function(a){a.getSize();var o=a.size.outerWidth%this.columnWidth,l=o&&o<1?"round":"ceil",c=Math[l](a.size.outerWidth/this.columnWidth);c=Math.min(c,this.cols);for(var u=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",f=this[u](c,a),g={x:this.columnWidth*f.col,y:f.y},d=f.y+a.size.outerHeight,b=c+f.col,_=f.col;_<b;_++)this.colYs[_]=d;return g},s._getTopColPosition=function(a){var o=this._getTopColGroup(a),l=Math.min.apply(Math,o);return{col:o.indexOf(l),y:l}},s._getTopColGroup=function(a){if(a<2)return this.colYs;for(var o=[],l=this.cols+1-a,c=0;c<l;c++)o[c]=this._getColGroupY(c,a);return o},s._getColGroupY=function(a,o){if(o<2)return this.colYs[a];var l=this.colYs.slice(a,a+o);return Math.max.apply(Math,l)},s._getHorizontalColPosition=function(a,o){var l=this.horizontalColIndex%this.cols,c=a>1&&l+a>this.cols;l=c?0:l;var u=o.size.outerWidth&&o.size.outerHeight;return this.horizontalColIndex=u?l+a:this.horizontalColIndex,{col:l,y:this._getColGroupY(l,a)}},s._manageStamp=function(a){var o=n(a),l=this._getElementOffset(a),c=this._getOption("originLeft"),u=c?l.left:l.right,f=u+o.outerWidth,g=Math.floor(u/this.columnWidth);g=Math.max(0,g);var d=Math.floor(f/this.columnWidth);d-=f%this.columnWidth?0:1,d=Math.min(this.cols-1,d);for(var b=this._getOption("originTop"),_=(b?l.top:l.bottom)+o.outerHeight,y=g;y<=d;y++)this.colYs[y]=Math.max(_,this.colYs[y])},s._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this._getOption("fitWidth")&&(a.width=this._getContainerFitWidth()),a},s._getContainerFitWidth=function(){for(var a=0,o=this.cols;--o&&this.colYs[o]===0;)a++;return(this.cols-a)*this.columnWidth-this.gutter},s.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!=this.containerWidth},r})}(Kl)),Kl.exports}var L3=R3();const jm=C3(L3),D3={class:"gallery"},j3={class:"row"},N3={class:"item"},F3={class:"img"},B3=["src","alt"],$3=["onClick"],W3={class:"cont d-flex align-items-center"},U3={class:"ml-auto"},H3={class:"arrow"},V3=["onClick"],G3={class:"arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34.2 32.3",style:{"stroke-width":"2"}},Y3={__name:"PortfolioList",props:{works:{type:Array,required:!0}},emits:["view-details"],setup(t,{emit:e}){ls.registerPlugin(Te);const i=t,n=e;function r(a){n("view-details",a)}const s=ze(()=>[...i.works].sort((a,o)=>o.id-a.id));return Cn(()=>{let a=null;Dr(()=>{const o=document.querySelector(".gallery"),l=document.querySelectorAll(".items");if(!o||l.length===0)return;l.forEach(y=>{ls.set(y,{opacity:0,y:50})});const c=()=>{a&&a.destroy(),a=new jm(o,{itemSelector:".items",columnWidth:".items",percentPosition:!0,gutter:0,transitionDuration:0})},u=o.querySelectorAll("img");let f=0;const g=u.length,d=()=>{f++,f===g&&setTimeout(()=>{c(),b()},100)};g===0?setTimeout(()=>{c(),b()},100):u.forEach(y=>{y.complete?d():(y.addEventListener("load",d),y.addEventListener("error",d))});const b=()=>{const y=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(ls.to(m.target,{opacity:1,y:0,duration:.6,ease:"power2.out",onComplete:()=>{a&&a.layout()}}),y.unobserve(m.target))})},{threshold:.1,rootMargin:"0px 0px -10% 0px"});l.forEach(p=>{y.observe(p)})},_=()=>{a&&setTimeout(()=>{a.layout()},100)};return window.addEventListener("resize",_),()=>{a&&a.destroy(),window.removeEventListener("resize",_)}})}),(a,o)=>(ue(),me("div",D3,[h("div",j3,[(ue(!0),me(yt,null,Cr(s.value,l=>(ue(),me("div",{class:"col-lg-4 items",key:l.id},[h("div",N3,[h("div",F3,[h("img",{src:l.image,alt:l.title},null,8,B3),h("a",{href:"#0",class:"link",onClick:vr(c=>r(l),["prevent"])},null,8,$3)]),h("div",W3,[h("div",null,[h("h6",null,we(l.title),1),(ue(!0),me(yt,null,Cr(l.category,(c,u)=>(ue(),me("span",{class:"tag",key:u},we(c),1))),128))]),h("div",U3,[h("div",H3,[h("a",{href:"#0",onClick:vr(c=>r(l),["prevent"])},[(ue(),me("svg",G3,o[0]||(o[0]=[h("line",{x1:"0",y1:"16",x2:"33",y2:"16"},null,-1),h("line",{x1:"17.3",y1:"0.7",x2:"33.2",y2:"16.5"},null,-1),h("line",{x1:"17.3",y1:"31.6",x2:"33.5",y2:"15.4"},null,-1)])))],8,V3)])])])])]))),128))])]))}},Ns=Ge(rf),q3=Ge(!1),X3=Ge(null);function Nm(){const t=n=>Ns.value.find(r=>r.id===parseInt(n)),e=n=>!n||n==="all"?Ns.value:Ns.value.filter(r=>Array.isArray(r.category)?r.category.includes(n):r.category===n),i=ze(()=>{const n=Ns.value.flatMap(r=>r.category||[]);return["all",...Array.from(new Set(n))]});return{portfolioData:ze(()=>Ns.value),loading:ze(()=>q3.value),error:ze(()=>X3.value),getWorkById:t,getWorksByCategory:e,categories:i}}const K3={class:"portfolio section-padding"},J3={class:"container"},Z3={__name:"PortfolioView",setup(t){const e=ch(),{portfolioData:i}=Nm(),n=Ge(!1),r=()=>{Dr(()=>{const a=document.querySelector(".portfolio-list");a&&new jm(a,{itemSelector:".portfolio-item",columnWidth:".portfolio-item",percentPosition:!0}).layout()})};Cn(async()=>{const a=i.value.map(o=>o.image);await fm(a),n.value=!0,r()});const s=a=>{e.push(`/project/${a.id}`)};return(a,o)=>(ue(),me("section",K3,[h("div",J3,[o[0]||(o[0]=Ii('<div class="sec-head mb-40"><div class="row justify-content-center"><div class="col-lg-8 text-center"><div class="d-inline-block"><div class="sub-title-icon d-flex align-items-center"><span class="icon fas fa-briefcase"></span><h6>我的作品</h6></div></div><h3> 透過視覺方法 <br> 讓萬物賦予意義 </h3></div></div></div>',1)),ce(Y3,{works:rn(i),onViewDetails:s},null,8,["works"])])]))}},Xr={"pop-art":{id:"pop-art",date:"2018-8-27",title:"波普藝術－漫畫是藝術嗎？",category:"GraphicStyle",categoryName:"視覺風格大全",excerpt:"早在第一次世界大戰期間產生的達達主義思潮，杜象（Henri-Robert-Marcel Duchamp）就用《噴泉》，連鎖店購買的小便斗，使用現成物、日常生活用品試圖傳統藝術拉下崇高的殿堂，提問什麼是藝術？",image:"/assets/imgs/blog/pop-art.jpg",thumbnail:"/assets/imgs/blog/pop-art.jpg",author:"Homer Shie",content:`
<article>
  <!-- 首圖 -->
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pop_Art/cri_000000229136.jpg"
      alt="Sweet Dreams, Baby! by Roy Lichtenstein"
      loading="lazy"
    />
    <figcaption>
      《Sweet Dreams, Baby!》 Roy Lichtenstein，<a
        href="https://www.moma.org/collection/works/65792?artist_id=3542&locale=zh&page=1&sov_referrer=artist"
        target="_blank"
        >MoMA</a
      >
    </figcaption>
  </figure>

  <!-- 章節：什麼是藝術？ -->
  <h2>什麼是藝術？</h2>
  <p>
    早在第一次世界大戰期間產生的達達主義思潮，杜象（Henri-Robert-Marcel
    Duchamp）就用《噴泉》，連鎖店購買的小便斗，使用現成物、日常生活用品試圖傳統藝術拉下崇高的殿堂，提問什麼是藝術？
  </p>
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pop_Art/300px-Fontaine_Duchamp.jpg"
      alt="Fountain by Marcel Duchamp"
      loading="lazy"
    />
    <figcaption>
      《Fountain》 Marcel Duchamp，<a
        href="https://zh.wikipedia.org/wiki/%E5%99%B4%E6%B3%89_(%E6%9D%9C%E8%B1%A1)"
        target="_blank"
        >Wiki</a
      >
    </figcaption>
  </figure>

  <!-- 章節：反權威的波普藝術 -->
  <h2>反權威的波普藝術</h2>
  <p>
    時間快轉到1950年代，被稱為新達達派的波普藝術（Pop
    art，又稱「波普藝術」或「通俗藝術」），繼承達達主義的虛無主義、無政府主義，藉此反抗當時的權威文化，將創作媒材與主題指向日常、流行、通俗、現成物。漫畫也是通俗文化的一環，知名的藝術家羅伊·利希滕斯坦（Roy
    Fox
    Lichtenstein）就是以漫畫與網點聞名，有一連串以漫畫形式所創作的作品，並收藏在紐約現代藝術博物館，波普藝術其他知名藝術品像是的安迪·沃荷（Andy
    Warhol）的《金寶湯罐頭》及《沃荷式的夢露》，理察·漢密爾頓（Richard
    Hamilton）的拼貼畫《是什麽使今天的家庭如此不同，如此具有魅力？》等等，到了現代也沒什麼人說這些作品難登大雅之堂，都是在小時候的教科書裡面會看到的知名作品。
  </p>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pop_Art/Campbells_Soup_Cans_MOMA_reduced_80%.jpg"
      alt="Campbells Soup Cans by Andy Warhol"
      loading="lazy"
    />

    <figcaption>
      《Campbells Soup Cans》 Andy Warhol, from
      <a href="https://en.wikipedia.org/wiki/Campbell%27s_Soup_Cans" target="_blank">Wiki</a>
    </figcaption>
  </figure>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pop_Art/file1.jpg" alt="Monroe in Warhol style" loading="lazy" />
      <figcaption>
        《Monroe in Warhol style》 Andy Warhol from
        <a href="https://www.ss.net.tw/paint-167_136-9094.html" target="_blank">Here</a>.
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pop_Art/Hamilton-appealing2.jpg"
        alt="Just what is it that makes today's homes so different, so appealing? by Richard Hamilton"
        loading="lazy"
      />
      <figcaption>
        《Just what is it that makes today's homes so different, so appealing?》 Richard Hamilton
        from
        <a
          href="https://en.wikipedia.org/wiki/Just_what_is_it_that_makes_today27s_homes_so_different,_so_appealing3F"
          target="_blank"
          >Wiki</a
        >,
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pop_Art/Oh,_Jeff...I_Love_You,_Too...But....jpg"
        alt="Oh, Jeff…I Love You, Too…But.."
        loading="lazy"
      />
      <figcaption>
        《Oh, Jeff…I Love You, Too…But..》by Roy Lichtenstein, from
        <a href="https://en.wikipedia.org/wiki/Oh,_Jeff...I_Love_You,_Too...But..." target="_blank"
          >Wiki</a
        >.
      </figcaption>
    </figure>
  </div>

  <!-- 章節：流行文化是藝術嗎？ -->
  <h2>流行文化是藝術嗎？</h2>
  <p>
    狹義的波普藝術既定印象停留在20世紀中葉的上述作品中，高明度高彩度色彩的對比色，黑邊、網點、拼貼畫、誇張的造型、視覺感強烈。
  </p>
  <p>
    但是都稱做流行藝術了，怎麼可能沒有與時俱進，所以個人認為普普藝術廣義上是以流行文化為手法的創作風格，近代的日本藝術家：村上隆、草間彌生、高野綾（タカノ綾）等以動漫、斑點、大眾文化作為藝術形式的手法，都可以被歸類在波普藝術家，當然這些標籤式的歸類還是由個人判斷，所以漫畫是不是藝術，就讓波普藝術跟你說。
  </p>

  <figure class="image">
    <img src="/assets/imgs/blog/Pop_Art/takashi-murakami-superflat.jpg" loading="lazy" />
    <figcaption>《Flower》by 村上隆, 2004</figcaption>
  </figure>
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pop_Art/草間彌生_Yayoi_KUSAMA｜No.327_南瓜_A_Pumpkin_YB-B｜2004｜絲網版畫_Screenprint｜24x28.5cm｜限量120版_Edition_of_120.jpg"
      loading="lazy"
    />
    <figcaption>《A pumpkin》by 草間彌生, 2004</figcaption>
  </figure>
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pop_Art/aya-takano-secrets-of-the-thousand-year-spiral_-ozuka.jpg"
      loading="lazy"
    />
    <figcaption>《SECRETS OF THE THOUSAND YEAR SPIRAL: OZUKA》by タカノ綾, 2013</figcaption>
  </figure>

  <h2>其他的波普藝術</h2>

  <div class="image-masonry">
    <a
      href="http://www.magdiellopez.com/dailyposters/9vlb5wnb5jujk9v21kljo9yz0fnc3r"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/f193c8be9057dba3b88f25d1ac18439c.jpg"
          loading="lazy"
          alt="poster by Magdiel Lopez"
        />
        <figcaption>poster by Magdiel Lopez</figcaption>
      </figure>
    </a>
    <a href="http://cristinadaura.tumblr.com/?amp_see_more=1" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/9cb5ac8554888b57fda0cdf9f736bae9.jpg"
          loading="lazy"
          alt="Cristina Daura-illustration"
        />
        <figcaption>
          Cristina Daura-illustration Here.
        </figcaption>
      </figure>
    </a>
    <a href="https://www.kkbox.com/tw/tc/song/zbv00OK8XSX-b4UP-b4UP0XL-index.html" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/Release_小老虎專輯封面_2.jpg"
          loading="lazy"
          alt="逍遙客小老虎專輯封面"
        />
        <figcaption>逍遙客小老虎專輯封面</figcaption>
      </figure>
    </a>
    <a href="https://www.instagram.com/utomaru/?hl=zh-tw" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/e3b49e366e5e2c92395b90d33341acb6.jpg"
          loading="lazy"
          alt="Utomaru-illustration"
        />
        <figcaption>Utomaru-illustration</figcaption>
      </figure>
    </a>
    <a
      href="https://blog.spoongraphics.co.uk/articles/fun-magazine-cover-doodle-art-by-ana-strumpf-hattie-stewart"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/b9197a8dcd92ad277eab026b419ee5e9.jpg"
          loading="lazy"
          alt="Fun Magazine Cover Doodle Art"
        />
        <figcaption>Fun Magazine Cover Doodle Art</figcaption>
      </figure>
    </a>
    <a
      href="https://i.pinimg.com/originals/18/fc/0c/18fc0c154cef98f75f48ba77c7699971.png"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/18fc0c154cef98f75f48ba77c7699971.jpg"
          loading="lazy"
          alt="Anitta Bang - Ilustração"
        />
        <figcaption>Anitta Bang - Ilustração</figcaption>
      </figure>
    </a>
    <a href="https://agentpekka.com/artist/craig-karl/variety/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/35df3b718225fa0ea9296b6a62895353.jpg"
          loading="lazy"
          alt="Variety Craig & Karl"
        />
        <figcaption>
          Variety Craig & Karl
          Wiki.
        </figcaption>
      </figure>
    </a>
    <a href="https://agentpekka.com/artist/craig-karl/jay-z/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/e60a1177be6f1ad2dd25777a91ae8882.jpg"
          loading="lazy"
          alt="Jay-Z by Craig & Karl"
        />
        <figcaption>
          Jay-Z by Craig & Karl.
        </figcaption>
      </figure>
    </a>
    <a href="https://www.canva.com/learn/ways-pop-art-changed-modern-design/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/d5c5be67edc035c9a431d2865827b656.jpg"
          loading="lazy"
          alt="10 ways to apply the lessons of pop art to your design"
        />
        <figcaption>
          10 ways to apply the lessons of pop art to your design
          Wiki.
        </figcaption>
      </figure>
    </a>
    <a href="http://illustrationfriday.com/2015/01/kendra-dandy/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/8fde8aa908614bc35e4209bbe36049e0.jpg"
          loading="lazy"
          alt="by Bryna Shields"
        />
        <figcaption>by Bryna Shields</figcaption>
      </figure>
    </a>
    <a href="https://www.cinra.net/news/gallery/62646/0" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/c776fa06a6f84993736d9362a518c49a.jpg"
          loading="lazy"
          alt="＊ASTERISK Poster"
        />
        <figcaption>＊ASTERISK Poster</figcaption>
      </figure>
    </a>
    <a href="https://www.flickr.com/photos/bobeightpop/3290484170/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Pop_Art/789bfd23e8202927f96de99aa78e29a5.jpg"
          loading="lazy"
          alt="Oh Me Oh My | James Joyce"
        />
        <figcaption>Oh Me Oh My | James Joyce</figcaption>
      </figure>
    </a>
  </div>

  <h2>參考資料</h2>
  <p>
    維基百科《西方美術史》、《達達主義》、《普普藝術》、《安迪·沃荷》、《羅伊·利希滕斯坦》、《Richard
    Hamilton》、《村上隆》、《草間彌生》。
    <br />知乎《什麼是波普藝術》、《達達主義和波普藝術的關係？》
  </p>

  <hr />
  <p>
    <strong
      >轉載請標明出處並告知，我會很感謝你注重智慧財產😉<br />如果有錯誤的訊息或是不同的見解和研究可以到下面留言或</strong
    >
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      ><strong>Instagram</strong></a
    >
    <strong>找我！</strong>
  </p>

  <p>
    Please indicate the source and inform me if you want to reprint, I will thank you for your
    apperciate to intellectual property.<br />
    If there are any mistakes of advice, you can reply or find me on my
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      >Instagram</a
    >.
  </p>
</article>



    `,seo:{description:"既定印象停留在20世紀中葉的上述作品中，高明度高彩度色彩的對比色，黑邊、網點、拼貼畫、誇張的造型、視覺感強烈。但是都稱做流行藝術了，怎麼可能沒有與時俱進，所以個人認為普普藝術廣義上是以流行文化為手法的創作風格，近代的日本藝術家：村上隆、草間彌生、高野綾（タカノ綾）等以動漫、斑點、大眾文化作為藝術形式的手法，都可以被歸類在波普藝術家。",keywords:"波普藝術,Pop Art,漫畫,藝術,視覺設計,Roy Lichtenstein,Andy Warhol"}},mbe:{id:"mbe",date:"2018-9-4",title:"MBE風格－MBE是什麼，可以吃嗎？",category:"GraphicStyle",categoryName:"視覺風格大全",excerpt:"這幾年的設計風格漸漸走向扁平化、單一化、抽象化，其中可能包含了文化因素、社會因素等等深層的原因，要論說其原因不是三言兩語就可以帶過，所以我將自己推測，加上部分照記憶引用大學時馮老師在上課時介紹的設計史與設計趨勢，簡單歸納出以下2點，因為沒有統計數據佐證所以可以當作參考就好：...",image:"/assets/imgs/blog/mbe.jpg",thumbnail:"/assets/imgs/blog/mbe.jpg",author:"Homer Shie",content:`
<article>
  <!-- 首圖 -->
  <figure class="image">
    <img
      src="/assets/imgs/blog/MBE/beer.jpg"
      alt="Sweet Dreams, Baby! by Roy Lichtenstein"
      loading="lazy"
    />
    <figcaption>《Beer》, by MBE, from Dribble</figcaption>
  </figure>

  <!-- 章節：什麼是藝術？ -->
  <h2>扁平化的興起</h2>
  <p>
    這幾年的設計風格漸漸走向扁平化、單一化、抽象化，其中可能包含了文化因素、社會因素等等深層的原因，要論說其原因不是三言兩語就可以帶過，所以我將自己推測，加上部分照記憶引用大學時馮老師在上課時介紹的設計史與設計趨勢，簡單歸納出以下2點，因為沒有統計數據佐證所以可以當作參考就好：
  </p>

  <h3>1. 快還要更快</h3>
  <p>
    因應工業4.0的時代到來，商業上對應用在網頁、行銷、UI上等視覺元素需求與時遽增，因此需要設計與創意展現的更有效率、更有產值，藉以達成各種用途上的目的，因此淘汰掉耗時、繁複的、裝飾性強的後現代時期設計風格，走向更簡單、更快速的創作。
    註：現代主義也是以簡單、幾何的形狀著稱，但是這裡指的視覺元素保留了現代主義的簡單，但不像現代主義一樣去人性化，同時保留了後現代的調皮，可想像成你有一個嚴肅的阿公跟一個調皮的爸爸，你就需要有時候調皮有時候嚴肅😆
  </p>

  <h3>2. 讓我一個人靜一靜</h3>
  <p>
    資訊爆炸、大數據，這些名詞在這幾年很常出現在媒體中，這個時代的人類處理的資訊量遠大於農業時代，科技加速的發展又將差距一天比一天拉大，面對了一整天的資訊，回到家會想要幹嘛？當然是倒頭直接攤軟在床上看著無止盡的劇直到睡著，隔天再一次輪迴。因此一目了然又簡單清晰的視覺風格才真正適合讓人想要看，在你手指往上滑的三秒間馬上讓你知道這個置入的廣告到底葫蘆裡賣什麼藥。
  </p>
  <p>
    馮老師將這種扁平化、單一化、抽象化的設計風格命名為「輕現代」，是一種融合現代與後現代主義的視覺風格，同時也認為輕現代是未來設計風格的強勢風格。
  </p>
  <figure class="image">
    <img src="/assets/imgs/blog/MBE/01_Pepsi-tb-752x0.jpg" alt="pepsi-Logo" loading="lazy" />
    <figcaption>《pepsi Logo》</figcaption>
  </figure>
  <figure class="image">
    <img src="/assets/imgs/blog/MBE/Memphis-Grizzlies.jpg" alt="Memphis-Grizzlies" loading="lazy" />
    <figcaption>《Memphis Grizzlies Logo》</figcaption>
  </figure>

  <!-- 章節：反權威的波普藝術 -->
  <h2>MBE是什麼？</h2>
  <p>
    今天要跟大家介紹的MBE風格也是屬於輕現代風格，MBE風格的命名來自Dribbble這個網站中一位設計師
    MBE，因為他的設計簡約、有趣，因此自成一派，MBE風格主要有幾個特點：
  </p>

  <ul>
    <li>扁平設計，無立體感</li>
    <li>又圓又粗又黑的破碎黑線</li>
    <li>幾何形狀的有機變形</li>
    <li>高明度高彩度的配色</li>
    <li>往旁邊歪了一點的填色</li>
    <li>不用漸層上色</li>
    <li>Q版卡通化造型，:D←這個臉</li>
    <li>幾何元素小裝飾，星形、十字、圓形、放射線等</li>
    <li>快速的向量製圖</li>
  </ul>

  <p>
    一般對MBE風格的既定印象有以上這8點，但是實際去Dribble看MBE的作品可以發現近期的作品有在嘗試以漸層填色創作，也拿掉了代表性的黑邊，不確定是否是想做創作上的突破，可以再繼續關注。
  </p>

  <!-- 圖庫展示 -->
  <div class="image-gallery-3">
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/mountains.jpg" alt="mountains" loading="lazy" />
      <figcaption>mountains</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/fruit.jpg" alt="fruit" loading="lazy" />
      <figcaption>fruit</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/banarabit.jpg" alt="banarabit" loading="lazy" />
      <figcaption>banarabit</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/mario.jpg" alt="mario" loading="lazy" />
      <figcaption>Mario</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/rocket.jpg" alt="rocket" loading="lazy" />
      <figcaption>rocket</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/searchwhat.jpg" alt="searchwhat" loading="lazy" />
      <figcaption>searchwhat</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/beer.jpg" alt="beer" loading="lazy" />
      <figcaption>beer</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/ghost.jpg" alt="ghost" loading="lazy" />
      <figcaption>ghost</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/MBE/ice-cream.jpg" alt="ice-cream" loading="lazy" />
      <figcaption>ice-cream</figcaption>
    </figure>
  </div>

  <h2>總結</h2>
  <p>
    MBE風格非常適合拿來作網頁與UI的視覺風格，同時因為作畫簡單，在動畫上也可以以較低成本的方式來進行創作，但是自己的隱憂是這種風格較無文化上的底蘊，很容易畫出來以為是哪個外國人畫的，算是科技衍生出的一種視覺產物，但也因為這個原因，<strong>非常適合用在科技產業、網路產業</strong>，如果要避免觀者誤會你是外國人的話，建議可以在造型上多加著墨，我很期待看到有人能用MBE風格畫出豬血糕😋
  </p>

  <h2>參考資料</h2>
  <p>
    <a target="_blank" href="https://read01.com/zh-tw/dd7ymo.html#.Xb_oXpozaUl"> 壹讀</a>、<a
      target="_blank"
      href="http://www.sucaijishi.com/2016/worth_0805/150.html"
      >素材集市</a
    >、<a target="_blank" href="https://dribbble.com/Madebyelvis">MBE Dribble</a>
  </p>

  <hr />
  <p>
    <strong
      >轉載請標明出處並告知，我會很感謝你注重智慧財產😉<br />如果有錯誤的訊息或是不同的見解和研究可以到下面留言或</strong
    >
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      ><strong>Instagram</strong></a
    >
    <strong>找我！</strong>
  </p>

  <p>
    Please indicate the source and inform me if you want to reprint, I will thank you for your
    apperciate to intellectual property.<br />
    If there are any mistakes of advice, you can reply or find me on my
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      >Instagram</a
    >.
  </p>
</article>

    `,seo:{description:"MBE是什麼？ · 扁平設計，無立體感 · 又圓又粗又黑的破碎黑線 · 幾何形狀的有機變形 · 高明度高彩度的配色 · 往旁邊歪了一點的填色 · 不用漸層上色 · Q版 ...",keywords:"視覺風格,設計,藝術,插畫,平面設計,工業40,輕現代F,latDesign,扁平設計,graphicdesign,商業,share,Vector,visualstyle,Animation,大數據,現代,介紹,教學,design,向量,分享,後現代,MBE"}},"pixel-art":{id:"pixel-art",date:"2018-9-21",title:"像素風格－遊戲人生我逍遙",category:"GraphicStyle",categoryName:"視覺風格大全",excerpt:"什麼是像素風格？ 像素風格起源於電子遊戲，早期的作品有像小精靈Pac-Man (1980)、太空侵略者Space Invaders (1978)等等知名的遊戲，早期的電腦跟電子遊戲機沒有辦法像現代的電腦一樣動輒1080p或是4k，於是像素藝術家通過從有限數量的像素創作圖像，找到解決方案，讓遊戲畫面能夠在有限的像素下呈現出更好的畫面，這些像素藝術家也被稱為像素藝術家（Pixel Artist）。",image:"/assets/imgs/blog/pixel-art.jpg",thumbnail:"/assets/imgs/blog/pixel-art.jpg",author:"Homer Shie",content:`
<article>
  <!-- 首圖 -->
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pixel_Art/4c9211f3ff33b6e85d2ed5d108a57a71.jpg"
      alt="Super Mario Bros Pixel Art"
      loading="lazy"
    />
    <figcaption>《Super Mario Bros Pixel Art》 by unknown.</figcaption>
  </figure>

  <p><i>「一定程度受限的條件、環境能激發你的創意」</i></p>
  <p>
    在大四苦惱畢製的劇本時，老師在課堂上分享這句話，一開始以為只能用在劇本寫作上，但最近越來越能體會這句話的意涵。
    <br />
    每個創作人都無法絕對自由的創作，或多或少都受限於生命中的時間與體力，又或者是大環境之下的脈動，從藝術分支出設計後，加上電腦與軟體的普及，近年的設計與藝術作品產生了壓縮時間以提高產值的現象，因此在這個趨勢下扁平化設計、極簡主義、#Low-poly等等風格逐漸抬起頭來，而像素風格風及一時的時代，同樣也有種種的限制，因此誕生了這種風格。
  </p>

  <h2>什麼是像素風格？</h2>
  <p>
    像素風格起源於電子遊戲，早期的作品有像"小精靈Pac-Man" (1980)、"太空侵略者Space Invaders"
    (1978)等等知名的遊戲，早期的電腦跟電子遊戲機沒有辦法像現代的電腦一樣動輒1080p或是4k，於是像素藝術家通過從有限數量的像素創作圖像，找到解決這些限制的方法，也有人稱像素風格是像”點彩畫派”取經，而衍生出的風格。
  </p>
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pixel_Art/pointillism-496x273.jpg"
      alt="A Sunday on La Grande Jatte"
      loading="lazy"
    />
    <figcaption>《A Sunday on La Grande Jatte》by Georges Seurat</figcaption>
  </figure>
  <figure class="image">
    <img
      src="/assets/imgs/blog/Pixel_Art/1280px-Paul_Signac_-_L'Hirondelle_Steamer_on_the_Seine.jpg"
      alt="L'Hirondelle Steamer on the Seine"
      loading="lazy"
    />
    <figcaption>《L'Hirondelle Steamer on the Seine》by Paul Signac</figcaption>
  </figure>

  <h2>像素已死？</h2>
  <p>
    隨著科技的發展，平滑的2D曲線跟3D繪圖已經普及，像素風格已經成為一種復古的視覺表現形式，而這種風格同時在文化上與電動遊戲脫離不了關係，甚至成為遊戲藝術的象徵，而這種風格在熱愛者的眼中還是很有影響力，近期的遊戲還是有製作商使用這種風格，同時這種風格也因會消耗計算機資源較低，也是適合用在網頁、UI的表現手法，像素風格一定程度上的抽象化了造型，變得很卡通Q版，因此也很有可愛感。
  </p>

  <figure class="image">
    <img
      src="/assets/imgs/blog/Pixel_Art/2523822-7471044340-m01WP.png"
      alt="Paper, please"
      loading="lazy"
    />
    <figcaption>Game 《Paper, please》, 2013</figcaption>
  </figure>

  <h2>新時代的像素</h2>

  <p>
    像素風格雖然復古，但卻不過時，近年還有藝術家以像素風格作為表現手法，而近年視覺工作者在3D引擎上使用像素風格的作品也不在少數。<a
      href="https://www.eboy.com/?srsltid=AfmBOorb33bG5s-1iiAHHBfb3QvWGcYAlxmqBLqbQ001eZWV3yUIjJkD"
      target="_blank"
      >EBoy</a
    >從1998年來一直熱忠於像素風格，是一家專門創作像素風格的平面設計公司。他們的客戶包括Nike, Paul
    Smith, Playstation, Kidrobot等等，證明了像素藝術的受歡迎程度和吸引力。eBoy的Kai
    Verschamer解釋說，像素藝術永遠不會過時，因為它是如此基本和令人愉快的工作：
  </p>

  <p>
    <i
      >⌈我們選擇使用像素，因為我們希望能夠最小部分的控制螢幕。事實證明，像素的局限性和模組化特性對於創作來說非常有趣。⌋</i
    >
  </p>

  <figure class="image">
    <img
      src="/assets/imgs/blog/Pixel_Art/eboy-london.jpg"
      alt="pixelated cityscapes"
      loading="lazy"
    />
    <figcaption>eBoy, detailed, pixelated cityscapes</figcaption>
  </figure>

  <h2>新時代的像素</h2>
  <h3>歐美</h3>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/Mucha.jpg" alt="Mucha" loading="lazy" />

      <figcaption>Mucha</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/The-starry-night.jpg"
        alt="The-starry-night"
        loading="lazy"
      />
      <figcaption>The starry night</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/vin-gogh.jpg" alt="Vin Gogh" loading="lazy" />
      <figcaption>Vin Gogh</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/Jaebum-copy-of-George-seurat.jpg"
        alt="Jaebum copy of George seurat"
        loading="lazy"
      />
      <figcaption>Jaebum copy of George seurat</figcaption>
    </figure>
    <p class="text-center artist">
      <a href="https://www.behance.net/joojaebum" target="_blank">Joo Jaebum</a>
    </p>
  </div>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/pixel_7_web.jpg" alt="pixel_7_web" loading="lazy" />

      <figcaption>pixel 7</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/pixel_5_web.jpg" alt="pixel_5_web" loading="lazy" />
      <figcaption>pixel 5</figcaption>
    </figure>
    <p class="text-center artist">
      <a href="https://www.behance.net/aflynn" target="_blank">Adam Flynn</a>
    </p>
  </div>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/Svard-self-portrait.jpg"
        alt="Svard-self-portrait"
        loading="lazy"
      />

      <figcaption>Svard self portrait</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/Wacek-by-Js.jpg" loading="lazy" />
      <figcaption>Wacek by Js</figcaption>
    </figure>
    <p class="text-center artist">
      <a href="https://www.behance.net/james_svard" target="_blank">James Svärd</a>
    </p>
  </div>

  <h3>台灣</h3>
  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/40463940_1833753923409701_180006859673960448_n.png"
        alt="Kamen-Rider-EX-AID"
        loading="lazy"
      />

      <figcaption>Kamen Rider EX-AID</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/40400243_1832381480213612_3443973995072847872_n.png"
        alt="Rutile"
        loading="lazy"
      />
      <figcaption>Rutile</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/39950275_1821673161284444_2233793236311212032_n.png"
        alt="太陽餅店"
        loading="lazy"
      />
      <figcaption>太陽餅店</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/38500060_1791025477682546_2073601470250352640_n.png"
        alt="台中州廳"
        loading="lazy"
      />
      <figcaption>台中州廳</figcaption>
    </figure>
    <p class="text-center artist">
      <a href="https://www.instagram.com/kai_pixelart/" target="_blank">kai_pixelart</a>
    </p>
  </div>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/photo.jpg" alt="中秋拜拜" loading="lazy" />

      <figcaption>中秋拜拜</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/28336363_1590431064383218_5369127127752856553_o.jpg"
        alt="祈福"
        loading="lazy"
      />
      <figcaption>祈福 / Pray for good fortune</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/38032720_1770762416350081_543049535987908608_o.jpg"
        alt="深夜福利"
        loading="lazy"
      />
      <figcaption>深夜福利 / Nights</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/37245024_1752707358155587_4754501536514572288_o.jpg"
        alt="水果攤 "
        loading="lazy"
      />
      <figcaption>水果攤 / Fruit Stand</figcaption>
    </figure>
    <p class="text-center artist">
      <a href="https://www.facebook.com/PixelJeff/" target="_blank">PIXEL JEFF</a>
    </p>
  </div>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/attackM01.gif" alt="attackM01" loading="lazy" />
      <figcaption>attackM01</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/朱雀羽扇II.png" alt="朱雀羽扇II" loading="lazy" />
      <figcaption>朱雀羽扇II</figcaption>
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/飛雲.png" alt="飛雲" loading="lazy" />
      <figcaption>飛雲</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/冒險介面_對話狀態2.png"
        alt="冒險介面_對話狀態2"
        loading="lazy"
      />
      <figcaption>冒險介面_對話狀態2</figcaption>
    </figure>
    <p class="text-center artist">
      <a href="https://www.facebook.com/ThreeBastardsinTaoyuan" target="_blank">三爺</a>
    </p>
  </div>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/21149929_1559297130758725_1565544402944185110_n.jpg"
        alt="doodle"
        loading="lazy"
      />
      <figcaption>doodle</figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/11234866_969179516437159_7734001953992364884_n.jpg"
        alt="doodle_workflow"
        loading="lazy"
      />
      <figcaption>doodle_workflow</figcaption>
    </figure>
    <p class="text-center artist">
      <a href="https://www.instagram.com/ano9s/" target="_blank">ANO塗鴉阿諾</a>
    </p>
  </div>

  <h2>其他視覺應用</h2>

  <div class="image-masonry">
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/4507c42540f6e41874d3a35e501f05d1.jpg" loading="lazy" />
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/4787d162af1f8decb2210ff666dee18e.jpg" loading="lazy" />
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/1f27de955a69ab27d9c198f0aa0zg7g4.JPG" loading="lazy" />
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/6350F5E3-4EAC-40A7-BDA9-1EDF94B41667.jpg"
        loading="lazy"
      />
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/41222bda42b53e2f8e8a972b5fda3780.jpg" loading="lazy" />
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/d4ac0b9b0dd126b91bd766e5481eefe9.jpg" loading="lazy" />
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Pixel_Art/40683911_10216879875133773_3031083511709696000_n.jpg"
        loading="lazy"
      />
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/d55cc1a84ddcfd497cc2681a05967246.jpg" loading="lazy" />
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/uisdc-sq-20180607-2.jpg" loading="lazy" />
    </figure>
    <figure class="image">
      <img src="/assets/imgs/blog/Pixel_Art/mariopixelartbymetinseven.png" loading="lazy" />
    </figure>
  </div>

  <h2>參考資料</h2>
  <p>
    <a href="http://idesigni.co.uk/blog/past-present-future-pixel-art/" target="_blank"
      >《The Past, Present and Future of Pixel Art》</a
    >
    <br />
    <a href="https://en.wikipedia.org/wiki/Pixel_art" target="_blank">《Wiki: Pixel art》</a>
  </p>

  <p><strong>🤙有其他擅長這風格的像素風格創作者也可以通知我把你擺上來唷！</strong></p>

  <hr />
  <p>
    <strong
      >轉載請標明出處並告知，我會很感謝你注重智慧財產😉<br />如果有錯誤的訊息或是不同的見解和研究可以到下面留言或</strong
    >
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      ><strong>Instagram</strong></a
    >
    <strong>找我！</strong>
  </p>

  <p>
    Please indicate the source and inform me if you want to reprint, I will thank you for your
    apperciate to intellectual property.<br />
    If there are any mistakes of advice, you can reply or find me on my
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      >Instagram</a
    >.
  </p>
</article>
`,seo:{description:"像素風格雖然復古，但卻不過時，近年還有藝術家以像素風格作為表現手法，而近年視覺工作者在3D引擎上使用像素風格的作品也不在少數。EBoy從1998年來一直熱衷於像素藝術，並且創作了許多像素風格的作品，像是《Pixel City》、《Pixel Forest》等等，這些作品都可以在他們的網站上找到。",keywords:"視覺風格,設計,藝術,插畫,FlatDesign,artist,Taiwan,台灣,扁平化設計,JooJaebum,pixelart,電動,像素風格,JamesSvard,AdamFlynn,kaipixelart,極簡,kai,Lowpoly,三爺,minimalist,Ano塗鴉阿諾,遊戲,電玩,8bit,EBoy,videogame,藝術家,Jeff"}},vaporwave:{id:"vaporwave",date:"2019-11-1",title:"蒸氣波－我們的現在是都是過去的未來",category:"GraphicStyle",categoryName:"視覺風格大全",excerpt:"​「對酒當歌，人生幾何！譬如朝露，去日苦多。」 有些專家說我們這代二十幾歲的人是Z世代、90後、數位原生世代。有些人對未來感到迷茫，找不到生活的重心，對什麼事情都提不起勁；有些人看到房子、車子的價格對現實感到挫折無力。於是我們專注在享受當下，領到薪水馬上吃一頓千元的大餐...",image:"/assets/imgs/blog/vaporwave.jpg",thumbnail:"/assets/imgs/blog/vaporwave.jpg",author:"Homer Shie",content:`
<article>
  <!-- 首圖 -->
  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/01.png" alt="Am I Kawaiiiiiiii?" loading="lazy" />
    <figcaption>《Am I Kawaiiiiiiii?》 by Homer Shie</figcaption>
  </figure>

  <p><i>「對酒當歌，人生幾何！譬如朝露，去日苦多。」</i></p>
  <p>
    有些專家說我們這代二十幾歲的人是Z世代、90後、數位原生世代。有些人對未來感到迷茫，找不到生活的重心，對什麼事情都提不起勁；有些人看到房子、車子的價格對現實感到挫折無力。於是我們專注在享受當下，領到薪水馬上吃一頓千元的大餐；買幾件昂貴衣物炫耀自己的品味；到IG熱門的景點拍幾張網美照告訴家人朋友自己過得不錯。這種虛無感正是蒸氣波(Vaporwave)這類音樂和視覺風格誕生的根基。過生活嘛～Why
    so serious？
  </p>
  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/02.jpg" alt="Way out" loading="lazy" />
    <figcaption>《Way out》by Homer Shie.</figcaption>
  </figure>

  <h2>什麼是蒸氣波(Vaporwave)？</h2>
  <p>
    蒸氣波興起於網路，最一開始流行的地方是
    tumblr，大量取材字70到90年代的流行元素。作為一個音樂風格，像EDM和Trap一樣讓人有放鬆、沉醉的Chill感受，符合90後及時行樂、享受當下所帶來超脫現實的感受。但這邊不談論音樂，只針對視覺風格層面來探討。
  </p>
  <p>
    蒸氣波在視覺上營造出一種夢幻泡沫般的幻滅感，鏘鏘的視覺風格在年輕人中很快就流行起來。給人的感覺是復古未來的(Retro-futurism)、隨興的、爵士的、低保真的(Lo-Fi)
    、前衛的、迷幻的、放鬆的、人文的、感性的、浪漫的、虛無的、反烏托邦的、詭異的。融合不同形式的風格，像是故障藝術(Glitch
    Art)、像素藝術(Pixel Art)、普普藝術(Pop
    Art)、賽博龐克(Cyberpunk)、超現實主義(Surrealism)，在視覺層面上是一種新舊交疊，充滿衝突和對比的強烈風格，常見的蒸氣波有幾個常見的視覺元素：
  </p>

  <h3>1. 大面積的洋紅、紫色系的運用，或是粉彩色的配合</h3>
  <p>
    洋紅和紫色系給人夢幻和超現實的虛擬感受，部分使用高明度、低彩度的粉色系讓視覺上有放鬆沉醉的效果。這點跟賽博龐克很容易混淆，但發展脈絡有點不大一樣。
  </p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/03.jpg" alt="You can’t afford love" loading="lazy" />
    <figcaption>
      <a
        href="https://www.instagram.com/p/Bw67tICDpcK/?utm_source=ig_web_options_share_sheet"
        target="_blank"
      >
        《You can’t afford love》
      </a>
    </figcaption>
  </figure>

  <h3>2. 陽光、沙灘和棕櫚樹。</h3>
  <p>取自邁阿密的明媚風光，尤如1984年邁阿密風雲劇集嚮往的生活。</p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/04.jpg" alt="Vaporwave by unknown" loading="lazy" />
    <figcaption>
      <a href="https://aesthetik133.tumblr.com/post/179603317992" target="_blank"
        >Vaporwave by unknown
      </a>
    </figcaption>
  </figure>

  <h3>3. 古希臘雕塑和建築。</h3>
  <p>
    80年代在購物商場常見的裝飾；有些人說用雕塑和柱子象徵現代的文藝復興；也有些人說是用傳統美學常見的石膏像與現代數位藝術做出對比。
  </p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/05.png" alt="Crying folders" loading="lazy" />
    <figcaption>
      <a
        href="https://itguidesandnews.tumblr.com/post/169732604704/crying-folders-itguidesandnewstumblrcom"
        target="_blank"
      >
        《Crying folders》
      </a>
    </figcaption>
  </figure>

  <h3>4. 低解析度和壓縮失真的濾鏡。</h3>
  <p>模仿舊時代的陰極射線管電視機和VHS家用錄影系統。</p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/06.jpg" alt="There’s a disconnect" loading="lazy" />
    <figcaption>
      <a
        href="https://www.tumblr.com/gothravendarkholme/167167720159/namelessbutnoah-theres-a-disconnect"
        target="_blank"
      >《There’s a disconnect》
      </a>
    </figcaption>
  </figure>

  <h3>5. 虛擬網格、賽博空間。</h3>
  <p>使用數位的符號對未來表達無限可能性的嚮往，或是風刺高度發展的資訊社會。</p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/07.gif" alt="80S Glitch GIF" loading="lazy" />
    <figcaption>
      <a href="https://giphy.com/gifs/80s-glitch-retro-l41lSv6cb1eUGoLTi" target="_blank">
        《80S Glitch GIF》by Barth
      </a>
    </figcaption>
  </figure>

  <h3>6. 80年代大眾傳媒的產品廣告。</h3>
  <p>緬懷資本主義的盛世，或是諷刺消費主義和物質主義嘗試塑造的美好願景。</p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/08.gif" alt="Mc Donalds Art GIF" loading="lazy" />
    <figcaption>
      <a href="https://giphy.com/gifs/gif-art-vaporwave-r9clNYxqOO4qk" target="_blank">
        《Mc Donalds Art GIF》
      </a>
    </figcaption>
  </figure>

  <h3>7. 日語文字、動漫和遊戲。</h3>
  <p>表達日本文化的喜好，緬懷舊時代兒時記憶中純樸美好虛幻的娛樂活動，或是讚揚世界主義。</p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/09.jpg" alt="unknown from Pinterest" loading="lazy" />
    <figcaption>
      <a href="https://www.pinterest.com/pin/71072500355880345/" target="_blank">
        unknown from Pinterest.
      </a>
    </figcaption>
  </figure>

  <h3>8. 早期電腦設計及3D繪圖。</h3>
  <p>模仿舊時代的作業系統Windows 95和數位藝術開始發展時的簡易3D模型。</p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/10.jpg" alt="Women's Fashion notitle" loading="lazy" />
    <figcaption>
      <a href="http://4.allepin.site/20619-2/" target="_blank"> Women's Fashion notitle </a>
    </figcaption>
  </figure>

  <h2>人生苦短，及時行樂</h2>
  <p>
    有些人說蒸氣波是對資本主義盛世的緬懷，相反的，也有人說蒸氣波是諷刺高速發展的社會迷失的真實與純樸。但我認為的蒸氣波比較像是後現代虛無主義的延伸。
  </p>
  <p>
    蒸氣波帶來的是形而上的沉浸感、超脫現實的迷幻感，強烈的視覺風格在次文化領域迅速受到歡迎，甚至被諷刺的資本社會也吸收了這種風格用在行銷廣告上，這種諷刺感讓我想到電影「小丑」中的一段劇情，身為資本主義代表的權貴顯要，在電影院看著諷刺權貴的「摩登時代」，看得眉開眼笑並拍手叫好。
  </p>
  <p>
    撇除蒸氣波背後帶來的意義，這類視覺風格在幾何元素爛大街的時代，用另一個相對比較複雜、有機的脈絡，提出了另一種創作的角度，亦或是另一種人生的價值觀。期待這種鏘鏘的風格市場接受度能變高，因為我有一個案子的提案就是因為用了這個風格被打槍😬
  </p>

  <figure class="image">
    <img src="/assets/imgs/blog/Vapowave/11.gif" alt="Loop Aesthetics" loading="lazy" />
    <figcaption>
      <a href="https://giphy.com/gifs/seapunk-vaporwave-webpunk-3oBUVMNuHNSuY" target="_blank">
        《Loop Aesthetics》</a
      >
    </figcaption>
  </figure>

  <h2>作品參考</h2>

  <div class="image-masonry">
    <a href="https://www.facebook.com/simpleinfo/posts/1273973496112088" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/12.jpg"
          alt="圖文不符-能自動駕駛的AI智慧車"
          loading="lazy"
        />
        <figcaption>圖文不符-能自動駕駛的AI智慧車</figcaption>
      </figure>
    </a>
    <a
      href="https://richartevent.com.tw/fa-shiau-tsai/?utm_source=youtube&utm_medium=click&utm_campaign=fa_shiau_tsai_201911&utm_content=fa_shiau_tsai_201911_30s_ad"
      target="_blank"
    >
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/richard.png" alt="Richard發小財" loading="lazy" />
        <figcaption>Richard 發小財- 影片及網頁設計</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/50977253/TRIP-TRIP-TRIP" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/13.png" alt="TRIP TRIP TRIP" loading="lazy" />
        <figcaption>TRIP TRIP TRIP</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/81720815/portfolio-2019" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/15.png"
          alt="Laura Giordani portfolio 2019"
          loading="lazy"
        />
        <figcaption>Laura Giordani portfolio 2019</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/64375303/Birthday-Invitation-Posters" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/17.png"
          alt="Birthday Invitation Posters"
          loading="lazy"
        />
        <figcaption>Birthday Invitation Posters</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/42174781/Loop-the-loop" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/18.gif" alt="Loop-the-loop" loading="lazy" />
        <figcaption>Loop-the-loop</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/48568067/Mtv-Breaks" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/19.jpg"
          alt="Mtv Breaks
"
          loading="lazy"
        />
        <figcaption>Mtv Breaks</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/44298589/Craft-Beer-Festival" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/21.jpg" alt="Craft Beer Festival" loading="lazy" />
        <figcaption>Craft Beer Festival</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/82078403/Post-Up" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/22.png" alt="Post Up" loading="lazy" />
        <figcaption>Post Up</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/36846143/Bubbaloo-da-California" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/23.jpg"
          alt="Bubbaloo da Califórnia
"
          loading="lazy"
        />
        <figcaption>Bubbaloo da Califórnia</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/68743479/Kiehls-Youth-Dose" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/24.jpg" alt="Kiehl’s “Youth Dose”" loading="lazy" />
        <figcaption>Kiehl’s “Youth Dose”</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/36113145/Synchrotron-design" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/25.jpg" alt="Synchrotron design" loading="lazy" />
        <figcaption>Synchrotron design</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/29872467/Remorses-Dreams-Expectations" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/26.jpg"
          alt="Remorses • Dreams • Expectations"
          loading="lazy"
        />
        <figcaption>Remorses • Dreams • Expectations</figcaption>
      </figure>
    </a>
    <a
      href="https://www.behance.net/gallery/47020993/Sistemas-de-identidad-Espacio-Cultural-de-la-ciencia"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/27.jpg"
          alt="Sistemas de identidad | Espacio Cult"
          loading="lazy"
        />
        <figcaption>Sistemas de identidad | Espacio Cult</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/47692513/-82-99" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/28.jpg"
          alt="レトロフューチャー 82 99
"
          loading="lazy"
        />
        <figcaption>レトロフューチャー 82 99</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/29856031/V-A-P-O-R-W-A-V-E-9-6-" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/29.png"
          alt="V A P O R W A V E • '9 6 🌴📼"
          loading="lazy"
        />
        <figcaption>V A P O R W A V E • '9 6 🌴📼</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/85463211/MACROSS-82-99" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/30.png"
          alt="マクロスMACROSS 82-99 Cham! album"
          loading="lazy"
        />
        <figcaption>マクロスMACROSS 82-99 Cham! album</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/41023081/Instagram-for-Win95" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Vapowave/31.jpg" alt="Instagram for Win95" loading="lazy" />
        <figcaption>Instagram for Win95</figcaption>
      </figure>
    </a>
    <a href="https://www.behance.net/gallery/58140225/WISH-YOU-1111-HAPPY" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Vapowave/32.jpg"
          alt="マクロスMACROSS 82–99 Cham! album、Instagram for Win95、WISH YOU 11.11 HAPPY"
          loading="lazy"
        />
        <figcaption>
          マクロスMACROSS 82–99 Cham! album、Instagram for Win95、WISH YOU 11.11 HAPPY
        </figcaption>
      </figure>
    </a>
  </div>

  <h2>參考資料</h2>
  <p>
    <a href="https://zh.wikipedia.org/wiki/%E8%92%B8%E6%B0%94%E6%B3%A2" target="_blank">維基百科</a
    >、<a href="https://flipermag.com/2015/09/10/vaporwave/" target="_blank">FLIPER</a>、<a
      href="https://medium.com/@derekmhopper/meditations-on-vaporwave-e7ba576adaf3"
      target="_blank"
      >Meditations on Vaporwave</a
    >、<a href="https://daily.bandcamp.com/2016/09/16/vaporwave-iconography-column/" target="_blank"
      >bandcamp</a
    >、<a href="https://zhuanlan.zhihu.com/p/67275811" target="_blank"
      >什麼是蒸氣波的設計風格？ 為什麼流行？</a
    >、<a href="https://zhuanlan.zhihu.com/p/38458080" target="_blank"
      >Vaporwave/蒸氣波 蒸得到底是什麼</a
    >、<a href="https://www.zhihu.com/question/45911422" target="_blank"
      >什麼是蒸氣波（Vaporwave）？</a
    >、<a href="https://www.reddit.com/" target="_blank">Reddit</a>、<a
      href="https://www.wazaiii.com/articles?id=787"
      target="_blank"
      >WAZAIII</a
    >
  </p>

  <p><strong>🤙有其他擅長這風格的像素風格創作者也可以通知我把你擺上來唷！</strong></p>

  <hr />
  <p>
    <strong
      >轉載請標明出處並告知，我會很感謝你注重智慧財產😉<br />如果有錯誤的訊息或是不同的見解和研究可以到下面留言或</strong
    >
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      ><strong>Instagram</strong></a
    >
    <strong>找我！</strong>
  </p>

  <p>
    Please indicate the source and inform me if you want to reprint, I will thank you for your
    apperciate to intellectual property.<br />
    If there are any mistakes of advice, you can reply or find me on my
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      >Instagram</a
    >.
  </p>
</article>
`,seo:{description:"，鏘鏘的視覺風格在年輕人中很快就流行起來。給人的感覺是復古未來的(Retro-futurism)、隨興的、爵士的、低保真(Lo-Fi)、迷幻的、超現實的、反烏托邦的、蒸氣波(Vaporwave)、賽博龐克(Cyberpunk)等風格。這些風格在視覺上都很有趣，並且能夠讓人感受到一種懷舊的感覺。",keywords:"視覺風格,設計,藝術,插畫,artist,Taiwan,台灣,Trap,Tumblr,PopArt,Glitch,Art,Chill,PixelArt,普普藝術,Vaporwave,Retro,futurism,故障藝術,賽博龐克,Cyberpunk,復古未來,像素藝術,超現實主義,反烏托邦,蒸氣波,LoFi,Surrealism,陷阱,蒸氣,音樂,低保真,EDM"}},"modern-design-intro":{id:"modern-design-intro",date:"2020-9-25",title:"設計流派導覽－當代、現代、後現代、超現代、元現代，哪個才是現在？像素風格－遊戲人生我逍遙",category:"WorldVision",categoryName:"世界視界",excerpt:"常常被各種「現代」搞的烏煙瘴氣？這個系列主要幫助大家釐清各種「現代」運動對視覺傳達領域所帶來的明顯影響，以及瞭解正在萌芽的新時代文化思潮－元現代主義，讓大家不只是認識視覺設計歷史，還能實實在在的把歷史活用在你的專案。",image:"/assets/imgs/blog/modern-design-intro.jpg",thumbnail:"/assets/imgs/blog/modern-design-intro.jpg",author:"Homer Shie",content:`
<article>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/IntroImage.png"
      alt="IntroImage"
      loading="lazy"
    />
    <figcaption>
      1.<a
        href="https://www.apartmenttherapy.com/art-deco-vs-art-nouveau-whats-the-difference-227508"
        target="_blank"
        >傳統時代</a
      >
      2.<a
        href="https://www.mpweekly.com/culture/%e7%94%b0%e4%b8%ad%e4%b8%80%e5%85%89-%e5%b9%b3%e9%9d%a2%e8%a8%ad%e8%a8%88-%e7%84%a1%e5%8d%b0%e8%89%af%e5%93%81-125298"
        target="_blank"
        >現代主義</a
      >
      3.<a href="https://en.wikipedia.org/wiki/You_Are_Not_Yourself" target="_blank">後現代主義</a>
      4.<a
        href="https://www.behance.net/gallery/65400943/Team-Patata?tracking_source=search_projects_recommended%7C3d+women"
        target="_blank"
        >元現代主義</a
      >
    </figcaption>
  </figure>

  <p>
    相信大家一開始在閱讀各種西方文化運動的時候常常被各種「現代」搞的烏煙瘴氣，這個系列主要幫助大家釐清各種「現代」運動對視覺傳達領域所帶來的明顯影響，以及瞭解正在萌芽的新時代文化思潮－元現代主義，讓大家不只是認識視覺設計歷史，還能實實在在的把歷史活用在你的專案。
  </p>
  <p>
    本篇導覽把視覺風格化繁為簡，避開繁瑣的歷史脈絡和各類分支，簡單歸納成四大流派，<strong>傳統時代、現代、後現代、元現代</strong>，著重在用簡單的描述介紹各個流派的個性以及視覺語言。之後陸續會有一系列的文章介紹對這四大類各自形成的脈絡和衍伸出的不同風格，以及對歷史背景、文化層面更詳細的介紹，對這些流派的前世今生有興趣的話，可以再關注之後的更新！
  </p>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/年表.png"
      alt="年表"
      loading="lazy"
    />
  </figure>
<hr />
  <h2>經典的老靈魂－傳統時代 （19世紀初－20世紀中葉）</h2>
  <p>
    介紹現代之前，還必須先瞭解什麼是古典和傳統，傳統時代起源於第二次工業革命，機械印刷機取代人力印刷，帶來印刷刊物的發展，到20世紀初現代主義在視覺領域橫空出世，傳統時代的風格還一直持續發展到20世紀中葉左右，甚至在現代台灣的老店面都能觀察到傳統時代的影響。
  </p>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/traditional_01.png"
      alt="traditional_01"
      loading="lazy"
    />
    <figcaption>
      1.<a href="http://www.sheaff-ephemera.com/list/gaslight_style.html" target="_blank"
        >維多利亞風格海報</a
      >
      2.<a
        href="https://www.trc-leiden.nl/trc-needles/organisations-and-movements/artistic-movements/arts-and-crafts-movement"
        target="_blank"
        >美術工藝運動海報</a
      >
      3.<a
        href="https://www.apartmenttherapy.com/art-deco-vs-art-nouveau-whats-the-difference-227508"
        target="_blank"
        >新藝術運動海報</a
      >
    </figcaption>
  </figure>
  <p>
    在這個時代，設計甚至還不是一個職業，一般視覺刊物都是透過科班出身的藝術家來操刀，因此脫離不了寫實繪畫，以及各種複雜的視覺元素，部分很明顯受洛可可藝術風格的影響。比較知名的有維多利亞風格(Victorian
    Style)、美術工藝運動(Arts & Crafts)、新藝術運動(Art
    Nouveau)。這邊定義的傳統時代跟平面設計史的叢書定義不大一樣，比較多是個人主觀認為應該定義在傳統時代下的視覺風格，例如20世紀初世界大戰開打帶來的政宣海報(Heroic
    Realism)、美國媚俗風格(American Kitsch
    Style)、老上海式的海報、台灣早期的包裝都會歸在此類，這些設計受不同國家傳統繪畫和文化影響，因此在世界各地都有不同樣貌。
  </p>

  <h3>傳統時期的視覺特色有以下幾點：</h3>
  <ul>
    <li>以寫實美術繪畫為主，搭配有機曲線或植物造型</li>
    <li>裝飾性強烈的視覺元素或文字</li>
    <li>大部分使用中高亮度、低彩度顏色，並以相近色配色</li>
    <li>畫面安排工整，或是對稱</li>
  </ul>

  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/traditional_02.png"
      alt="traditional_02"
      loading="lazy"
    />
    <figcaption>
      1.<a href="https://china20.weebly.com/252092651925209233803681621160.html" target="_blank"
        >政宣海報－批林批孔運動</a
      >
      2.<a href="https://www.widewalls.ch/magazine/50s-posters" target="_blank">美國媚俗風格海報</a>
      3.<a
        href="https://hokkfabrica.com/long-read-women-and-flower-case-image-in-30s/"
        target="_blank"
        >老上海海報</a
      >
    </figcaption>
  </figure>

  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/traditional_03.png"
      alt="traditional_03"
      loading="lazy"
    />
    <figcaption>
      4.<a
        href="https://www.facebook.com/twoldillustration/photos/a.1678534932384040/1787427728161426/?type=1&amp;theater="
        target="_blank"
        >台灣5.60年代的朝晚牙粉紙包裝</a
      >
      5.
      <a
        href="http://www.taichung-life.com.tw/index.php?CID=3866&amp;REQUEST_ID=cGFnZT1jb2x1bW5fbGl2ZQ%3D%3D&amp;sub_class=%EF%BF%BD%EF%BF%BD%EF%BF%BD%C3%AEa"
        target="_blank"
        >寄藥包</a
      >
      6.
      <a
        href="https://www.facebook.com/twoldillustration/photos/a.1678534932384040/1796685593902306/?type=3&amp;theater="
        target="_blank"
        >餅乾鐵盒上蓋</a
      >
    </figcaption>
  </figure>
<hr />
  <h2>考試都考一百分－現代主義 （20世紀初－中葉）</h2>

  <p>
    現代主義並不是沒來由地戛然而生，從現代主義的哲學論述到視覺領域的變革，在現代主義誕生前有一段藝術領域的實驗期，並在爾後幾十年間甚至到現在還深遠影響著視覺設計領域，例如英國新藝術風格(British
    Art Nouveau style)、裝飾風藝術(Art
    Deco)、立體主義(Cubism)、達達主義(Dada)、未來主義(Futurism)、超現實主義(Surrealism)，等等知名的藝術風格為現代主義作鋪墊。
  </p>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/modern_01.png"
      alt="modern_01"
      loading="lazy"
    />
    <figcaption>
      1.<a
        href="https://en.wikipedia.org/wiki/Modern_Style_(British_Art_Nouveau_style)"
        target="_blank"
        >英國新藝術風格</a
      >
      2.<a href="https://en.wikipedia.org/wiki/Art_Deco" target="_blank">裝飾風藝術</a> 3.<a
        href="https://manhattanarts.com/what-is-cubism/"
        target="_blank"
        >立體主義</a
      >
    </figcaption>
  </figure>

  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/modern_02.png"
      alt="modern_02"
      loading="lazy"
    />
    <figcaption>
      4.<a
        href="https://www.apollo-magazine.com/what-is-dada-and-how-much-is-it-worth/"
        target="_blank"
        >達達主義</a
      >
      5.<a
        href="https://legomenon.com/time-and-motion-in-art-futurist-paintings-of-movement.html"
        target="_blank"
        >未來主義</a
      >
      6.<a href="https://mymodernmet.com/what-is-surrealism-definition/" target="_blank"
        >超現實主義</a
      >
    </figcaption>
  </figure>

  <p>
    吸收了這些藝術養分後，現代主義的設計在20世紀初世界的各處綻放，也算是某種共時性的現象。這個時代以科學做基礎，講求理性、最大功利性，大膽使用新材料與技術，大破大立地與傳統時代畫出分界線，將設計導入科學方法，拆解形態、色彩、材質、空間，因此大量使用幾何圖型和原色作為設計語言，例如俄國構成主義(Russian
    Constructivism)、荷蘭風格派(De
    Stijl)、德國包浩斯風格(Bauhaus)、瑞士國際主義設計風格(International Style/Swiss
    Style)，同時也催生功能主義(Functionalism)和極簡主義(Minimalism)的誕生。
  </p>
  <h3>現代時期的視覺特色有以下幾點：</h3>
  <ul>
    <li>以幾何形狀及線條元素為主</li>
    <li>很少或甚至沒有裝飾性元素</li>
    <li>大部分使用高亮度、高彩度顏色，強調原色和二次色</li>
    <li>畫面安排工整嚴謹</li>
  </ul>

  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/modern_03.png"
      alt="modern_03"
      loading="lazy"
    />
    <figcaption>
      1.<a href="https://www.wikiwand.com/en/El_Lissitzky" target="_blank">俄國構成主義</a> 2.<a
        href="https://leightonestick.wordpress.com/2015/11/15/de-stijl-1917-1931/"
        target="_blank"
        >荷蘭風格派</a
      >
      3.<a
        href="https://www.europeanheritagetimes.eu/2019/08/09/the-new-bauhaus-museum-in-weimar-a-conversational-retrospective/"
        target="_blank"
        >德國包浩斯風格</a
      >
    </figcaption>
  </figure>

  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/modern_04.png"
      alt="modern_04"
      loading="lazy"
    />
    <figcaption>
      4.<a href="http://flyergoodness.blogspot.com/search?q=swiss+style" target="_blank"
        >瑞士國際主義</a
      >
      5.<a href="https://twitter.com/magalleriabath/status/934086037462241281" target="_blank"
        >功能主義</a
      >
      6.<a href="https://www.artsy.net/artwork/ellsworth-kelly-red-slash-blue" target="_blank"
        >極簡主義</a
      >
    </figcaption>
  </figure>

  <hr />
  <h2>台北暴徒－後現代主義 （20世紀中葉－現在）</h2>
  <p>
    後現代主義可以說是視覺上叛逆的青少年aka.台北暴徒，在視覺上有明顯和現代主義的差別，大部分人都會認同後現代是二戰後人們對自身理性和邏輯提出的質疑，也是戰後對資本主義和工業社會的檢討。在這個時代下產生了鼓催愛與和平的嬉皮文化，以及懷疑理性或甚至反對理性的搖滾文化。
  </p>

  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/postmodern_01.png"
      alt="postmodern_01"
      loading="lazy"
    />
    <figcaption>
      1.<a
        href="https://photos.com/featured/surprised-woman-with-omg-text-mcmillan-digital-art.html"
        target="_blank"
        >普普藝術</a
      >
      2.<a href="https://www.behance.net/gallery/4166175/Graphic-Deconstruction-1" target="_blank"
        >解構主義</a
      >
      3.<a
        href="https://www.amazon.com/Composition-Notebook-College-Mandelbrot-Fractals/dp/1719829101"
        target="_blank"
        >分形藝術</a
      >
    </figcaption>
  </figure>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/postmodern_02.png"
      alt="postmodern_02"
      loading="lazy"
    />
    <figcaption>
      4.<a href="https://www.widewalls.ch/magazine/psychedelic-art" target="_blank">迷幻藝術</a>
      5.<a
        href="https://cindygoesbeyond.wordpress.com/2016/03/18/surrender-78-mad-max-fury-road/"
        target="_blank"
        >垃圾風格</a
      >
      6.<a href="https://bashooka.com/photoshop/synthwave-flyer-design-templates/" target="_blank"
        >蒸氣波</a
      >
    </figcaption>
  </figure>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/postmodern_03.png"
      alt="postmodern_03"
      loading="lazy"
    />
    <figcaption>
      7.<a href="https://www.behance.net/gallery/28177177/Glitch" target="_blank">故障藝術</a> 8.<a
        href="https://www.amazon.com/Trends-International-Poster-Roses-22-375/dp/B071WCY1LQ"
        target="_blank"
        >槍與玫瑰海報</a
      >
      9.<a
        href="https://www.artsy.net/article/artsy-editorial-6-iconic-works-banksy"
        target="_blank"
        >塗鴉藝術</a
      >
    </figcaption>
  </figure>

  <p>
    這個時代的人們崇尚人性和自然，完全不使用理性的幾何元素，很多充滿生命力的視覺作品都產生在這個時期，像是廣泛使用實物拼貼、追求流行文化的後現代先鋒－普普藝術(Pop
    Art)和歐普藝術(Op
    Art)、分解再構成的煉金術－解構主義(Deconstruction)、以混沌理論作為創作基礎的電腦藝術－分形藝術(Fractal
    art)、不知道吸了什麼的迷幻藝術(Psychedelic Art)、還有像遊戲Fallout和電影Mad
    Max就滿滿的廢土感的垃圾風格(Grunge
    Style)，直接模仿垃圾的質地創作，以及各式各樣的塗鴉藝術、音樂和反戰海報等等。一直到近代後現代對視覺文化的影響仍然存在，除了上述的經典風格外，最近幾年流行的蒸氣波(Vaporwave/Synthwave)和故障藝術(Glitch
    Art)都能看到後現代視覺的影子，還有近期還看到以醜作為設計脈絡的作品，查了一下有些人稱呼做新醜風，未來視覺風格介紹的系列會有一篇來專題討論，這邊就先老高一下💪
  </p>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/postmodern_04.png"
      alt="postmodern_04"
      loading="lazy"
    />
  </figure>
  <p>
    在商業領域的運用以商標Logo為例，不像現代時期的作品強調幾何造型，而是使用流線或有機的造型，加上仿真的材質，例如汽車產業會在商標上作出擬真的浮凸和金屬質地，常常在Photoshop看到的效果像陰影、凹凸、漸層、光暈等等，很常在這個時期運用在商業領域，在有點歷史的企業商標有很明顯的差異。
  </p>
  <h3>後現代時期的視覺特色有以下幾點：</h3>
  <ul>
    <li>以有機形狀或實物照片拼貼為主</li>
    <li>大量使用裝飾性元素</li>
    <li>使用強烈色彩傳達情緒，黑白對比或色彩對比</li>
    <li>畫面安排隨機，甚至凌亂</li>
  </ul>

  <hr />
  <h2>卑鄙元之助－元現代主義 （21世紀初－現在）</h2>
  <p>
    新現代主義(Neomodernism)、晚期現代主義(Late modernism /Liquid
    modernism)、再現代主義(Remodernism)、後後現代主義(Post-postmodernism)、超現代主義(Hypermodernism)、變現代(Altermodernism)、數位現代主義(Digimodernism)、輕現代，其他沒有中文翻譯的還有Cosmodernism、Performatism、Automodernism、Transmodernism、renewalism等等，有興趣加上英文比較好又喜歡看學術論文的人可以用這些關鍵字搜索。這些滿滿的現代主義一次滿足，全部都歸類在元現代主義(Metamodernism)之下。私心推薦一下液態現代性很有趣👍
  </p>
  <p>
    這邊先澄清一下，元現代主義是21世紀慢慢成形中的哲學學術研究，被認為是繼後現代主義之後的時代精神，其實在元現代出現之前有其他相似的論述，但是目前網路上主流用法都以超現代(Hypermodernism)和元現代(Metamodernism)為主，這邊主要選擇以元現代稱呼，是因為不想要再日後又看到新的學說叫Ultramodernism，像設計師取不完名字的final檔一樣沒完沒了又很難翻譯🤐
  </p>
  <p>
    元現代主義通常會被定義為介於現代主義和後現代主義之間的思想或是視覺表現，我會把現代主義當作是做事一板一眼、講求邏輯理性的科學家爺爺；後現代主義是情緒豐富又討厭爺爺的藝術家爸爸；元現代是不想要像爸爸跟爺爺一樣偏激的兒子，這個兒子桑又恰巧遇上了二次工業革命，歷經風霜、做事圓融，還在持續自我探索。
  </p>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/metamodern_01.png"
      alt="metamodern_01"
      loading="lazy"
    />
    <figcaption>
      1.<a
        href="https://imagedj.pixnet.net/blog/post/185757867-%E8%A8%AD%E8%A8%88%E6%9C%9D%E8%81%96%EF%BD%9C%E9%8C%AF%E8%A6%BA%E8%A8%AD%E8%A8%88%E7%9A%84%E9%AD%94%E6%B3%95%E5%B8%AB%EF%BC%8D%E7%A6%8F%E7%94%B0%E7%B9%81%E9%9B%84-"
        target="_blank"
        >福田繁雄(晚期現代風格)</a
      >
      2.
      <a href="https://www.paulrand.design/" target="_blank">Paul Rand (晚期現代風格)</a>
      3.<a
        href="https://www.shutterstock.com/zh-Hant/blog/memphis-style-design-trend-explained"
        target="_blank"
        >曼菲斯風格</a
      >
    </figcaption>
  </figure>
  <p>
    我目前會把幾個風格類型歸類在元現代之下，例如從現代風格發展出的晚期現代風格(Late Modern
    Style)和曼菲斯風格(Memphis Design)；走向數位化過逞產生的風格－像素風格(Pixel
    Art)和等距風格(Isometric)；伴隨不同使用裝置和情境衍伸的風格－扁平設計(Flat
    Design)，扁平設計下的延伸產物－MBE風格和扁平化三維風格；以及液態和雷射漸層風格(Laser/Fluid
    gradient)、動態設計(Motion
    Graphic)等等新媒材的運用，最近在大大小小設計上看到的扁平插畫加上紋理材質也能算是元現代下的產物。元現代時期的設計因為數位化的普及，透過個人電腦讓設計有了新的製程、虛擬化可以普遍發展，在未來隨著科技發展可能會將現實的元素應用延伸到虛擬世界(VR)和大大小小的數位裝置端，成為新型態的時代劃分。
  </p>
  <h3>元現代時期的視覺特色有以下幾點：</h3>
  <ul>
    <li>幾何和有機形狀混雜、避免過於寫實的造型</li>
    <li>適量使用裝飾性元素</li>
    <li>大部分使用高亮度、中高彩度的顏色配置</li>
    <li>畫面安排隨機，但是保持和諧</li>
  </ul>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/metamodern_02.png"
      alt="metamodern_02"
      loading="lazy"
    />
    <figcaption>
      1.<a href="http://adam-flynn.com/work/glitched.html" target="_blank">像素風格</a> 2.<a
        href="https://www.behance.net/gallery/23869083/City-Life-Isometric-Cityscape"
        target="_blank"
        >等距風格</a
      >
      3.<a
        href="https://www.dandad.org/awards/professional/2018/posters/26940/jardins-de-metis-2017/"
        target="_blank"
        >扁平設計</a
      >
    </figcaption>
  </figure>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/metamodern_03.png"
      alt="metamodern_03"
      loading="lazy"
    />
    <figcaption>
      4.<a href="https://www.behance.net/gallery/71586415/Framed-Artwork-Series" target="_blank"
        >扁平化三維</a
      >
      5.<a
        href="https://www.behance.net/gallery/88111483/OCCUPATIONS-01-Print-Concepts?tracking_source=search_projects_recommended%7Claser+gradient"
        target="_blank"
        >雷射漸層</a
      >
      6.<a
        href="https://www.behance.net/gallery/65968373/Stick-Your-Tongue-Out?tracking_source=search_projects_recommended%7Cillustration+texture"
        target="_blank"
        >扁平紋理插畫</a
      >
    </figcaption>
  </figure>
  <figure class="image">
    <img
      class="w-100"
      src="/assets/imgs/blog/World_Vision/motion_logo.gif"
      alt="motion_logo.gif"
      loading="lazy"
    />
    <figcaption>
      7.<a
        href="https://www.behance.net/gallery/101769783/Logo-Animation-Collection?tracking_source=search_projects_recommended%7Cmotion+logo"
        target="_blank"
        >動態商標</a
      >
    </figcaption>
  </figure>

  <hr />
  <h2>結語</h2>
  <p>
    做科技公司的商案我會選擇朝現代主義的脈絡發想；博物館的展覽我則會朝傳統時代發想；在台灣的音樂周邊也能看到很多後現代的影子，這些不同時代的流派一直到截稿的今天都仍然不同的形式影響著現在，所以回應標題「當代、現代、後現代、超現代、元現代，哪個才是現在？」，我會說不管是哪個都是現在進行式，透過隨著歷史演變至今加上新科技的發展，這樣兼容並蓄的多元視覺語言就是現今的時代特色，也是我大部分的靈感來源。能透過多元流動性的思考不同的面相，來回搖擺在不同的事物之間，藉此因應時代潮流快速的變化。
  </p>
  <p>
    雖然為了方便把四大類標上了活躍的年代、流派喜歡的設計語言，但是各個時代風格都還是深遠影響著現在，也因為不同創作者的表現手法都有不同的差異，只能約略的分類設
  </p>
  <p>
    <strong
      >大家可以留言下方數字分享你最喜歡的流派，歡迎分享你喜歡的原因～
      下期會先以留言參考來規劃下期文章唷！感謝你的觀看👍</strong
    >
  </p>

  <ol>
    <li>唯美華麗的傳統時代</li>
    <li>高冷理性的現代主義</li>
    <li>反骨叛逆的後現代主義</li>
    <li>優柔寡斷的元現代主義</li>
    <li>我全都愛</li>
  </ol>

  <h2>參考資料</h2>
  <p>
    <a href="https://www.zcool.com.cn/article/ZNTk1Mzg0.html?switchPage=on" target="_blank"
      >現代平面設計簡史</a
    >、<a
      href="https://www.onlinedesignteacher.com/2016/05/graphic-design-styles.html"
      target="_blank"
      >Graphic Design Styles</a
    >、<a href="http://www.designhistory.org/index.html" target="_blank">Graphic Design History</a
    >、<a
      href="https://thesideview.co/journal/mapping-metamodernism-for-collective-intelligence/"
      target="_blank"
      >Mapping Metamodernism for Collective Intelligence</a
    >、<a href="https://en.wikipedia.org/wiki/Criticism_of_postmodernism" target="_blank"
      >Criticism of postmodernism(Wiki)</a
    >
  </p>
  <hr />
  <p>
    <strong
      >轉載請標明出處並告知，我會很感謝你注重智慧財產😉<br />如果有錯誤的訊息或是不同的見解和研究可以到下面留言或</strong
    >
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      ><strong>Instagram</strong></a
    >
    <strong>找我！</strong>
  </p>

  <p>
    Please indicate the source and inform me if you want to reprint, I will thank you for your
    apperciate to intellectual property.<br />
    If there are any mistakes of advice, you can reply or find me on my
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      >Instagram</a
    >.
  </p>
</article>


`,seo:{description:"本篇導覽把視覺風格化繁為簡，避開繁瑣的歷史脈絡和各類分支，簡單歸納成四大流派，傳統時代、現代、後現代、元現代，著重在用簡單的描述介紹各個流派的個性 ...本篇導覽把視覺風格化繁為簡，避開繁瑣的歷史脈絡和各類分支，簡單歸納成四大流派，傳統時代、現代、後現代、元現代，著重在用簡單的描述介紹各個流派的個性，並且介紹各個流派的代表人物、代表作品、代表風格，讓大家能夠快速的了解這些流派的特色，並且能夠在實際的專案中運用這些流派的特色。",keywords:"視覺風格,平面設計,工業40,輕現代,世界視界,平面設計史,現代主義,後現代主義,元現代主義,新現代主義,晚期現代主義,再現代主義,後後現代主義,超現代主義,變現代,數位現代主義,設計思潮"}},"art-nouveau":{id:"art-nouveau",date:"2020-11-4",title:"新藝術運動－少女的力量",category:"GraphicStyle",categoryName:"視覺風格大全",excerpt:"少女、花朵和植物不管何時都是藝術家和設計師們喜愛的元素，新藝術運動可以被視作開山始祖，但在一百多年前則是受人唾棄的商業藝術、應用美術。究竟新藝術運動如何翻身一躍變成世界範圍的美術運動，直到今天還能在庫洛魔法使的牌組等等流行文化一探新藝術的身影，就讓我們繼續看下去🕵️‍♀️",image:"/assets/imgs/blog/art-nouveau.jpg",thumbnail:"/assets/imgs/blog/art-nouveau.jpg",author:"Homer Shie",content:`
<article>
  <figure class="image">
    <img
      src="/assets/imgs/blog/Art_Nouveau/ad7hftxdivxxvm.cloudfront.jpg"
      alt="Alphonse Mucha, Le Zodiaque, 1896. © Mucha Trust 2018."
      loading="lazy"
    />
    <figcaption>Alphonse Mucha, Le Zodiaque, 1896. © Mucha Trust 2018.</figcaption>
  </figure>

  <p>
    在一次面試設計相關工作的時候曾經被說過：「你的作品看起來很商業。」，當時我把這句話當作對作品的貶抑，並對此感到羞愧。
  </p>
  <p>
    在18世紀中葉，應用美術（Applied art）和商業藝術正在萌芽的時代，純美術（Fine
    art）和學院藝術（Academic
    art）是主流認為追求藝術的最高殿堂，應用美術和商業藝術被當作次等和低劣的藝術表現形式。生在這個時代的代表藝術家－慕夏（Alfons
    Maria
    Mucha），也對自己在商業藝術上取得的成就和名聲感到挫敗。這個想法直到達達主義和後續的普普藝術出現讓兩者之間的疆界打破，商業藝術才不再被視為低等的藝術形式。
  </p>
  <p>
    時至今日設計師工作已經成為一項職業，兩者之間的界線在上一個世紀就被打破，但「純美術就是藝術的最高殿堂」卻還是一直深植在承先啟後的藝術工作者心中，所以在現代的台灣還能看到「你的作品看起來很商業。」的這種說法。但是現在我會認為這句話只是一種客觀評價或是個人偏好，只是水平的一端太靠近觀者不喜歡的方向而已。思考作品中商業價值與藝術價值之間的平衡變成了現今創作者的課題，這時不訪重新回頭看看新藝術運動（Art
    Nouveau）中的名家們如何完成他們的商業作品，且在後人看來仍然保有藝術價值。
  </p>

  <figure class="image">
    <img
      src="/assets/imgs/blog/Art_Nouveau/2b2895_0c88584924384c6cb459e121fc9ec286~mv2.jpg"
      alt="Alphonse Mucha, Rêverie, 1897. © Mucha Trust 2018."
      loading="lazy"
    />
    <figcaption>Alphonse Mucha, Rêverie, 1897. © Mucha Trust 2018.</figcaption>
  </figure>

  <h2>什麼是新藝術運動？</h2>
  <p>
    在新藝術運動（Art Nouveau）之前還有一個理念相似的美術運動－美術工藝運動（Arts & Crafts
    Movement），主要是批評工業革命後生產的工藝品過於粗製濫造，讚揚職人手工的美妙，比較偏向產品、工業、建築設計的大事件，這邊知道一下就好。新藝術運動（Art
    Nouveau）則是延續這個時代浪潮下的視覺風格。在歐洲不同國家有不同稱呼：德國Jugendstil、奧地利Sezessionstil、意大利Stile
    Floreale、西班牙Modernismo。
  </p>
  <figure class="image">
    <img
      class="img-fluid"
      src="/assets/imgs/blog/Art_Nouveau/1863_Alexandre_Cabanel_-_The_Birth_of_Venus.jpg"
      alt="維納斯的誕生 by Alexandre Cabanel, 1863"
      loading="lazy"
    />
    <figcaption>學院藝術代表－維納斯的誕生 by Alexandre Cabanel, 1863</figcaption>
  </figure>

  <p>
    新藝術運動哪裡新？在新藝術運動之前，學院派藝術（Academic
    art）深受歷史主義（Historicism）和現實主義（Realism）影響，衷於刻劃物體與事件的原貌，強調物件的立體感。新藝術風格多作商業活動使用，使用在海報及刊物，因此導入了文字排版，強調圖文之間的協調性。受高更（Paul
    Gauguin）和羅特列克（Henri de
    Toulouse-Lautrec）的藝術實驗影響，捨棄傳統西方繪畫的透視法，轉以浮世繪（Ukiyoe）中深刻的線條表現觀賞者眼中的主觀空間，注重抽象的曲線線條表現。也有學者認為曲線抽象表現的方式是取材自愛爾蘭與蘇格蘭文化中的凱爾經（Book
    of Kells）。同時也因為平版印刷的發展，讓藝術品得以批量生產，當時也是刷新人們三觀的一大進步。
  </p>

  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/Henri_de_Toulouse-Lautrec_Yvette_Guilbert_Gants_noirs.jpg"
        alt="朗讀狀的依薇特·吉爾貝 by 羅特列克, 1894"
        loading="lazy"
      />
      <figcaption>
        <a
          href="https://zh.wikipedia.org/wiki/%E4%BA%A8%E5%88%A9%C2%B7%E5%BE%B7%C2%B7%E5%9C%9F%E9%AD%AF%E6%96%AF-%E7%BE%85%E7%89%B9%E5%88%97%E5%85%8B#"
          target="_blank"
          >朗讀狀的依薇特·吉爾貝 by 羅特列克, 1894</a
        >
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/800px-The_Yellow_Christ,_Paul_Gauguin.jpg"
        alt="黃色的基督 by 高更, 1889"
        loading="lazy"
      />
      <figcaption>
        <a
          href="https://zh.wikipedia.org/wiki/%E4%BF%9D%E7%BE%85%C2%B7%E9%AB%98%E6%9B%B4#/media/File:The_Yellow_Christ,_Paul_Gauguin.jpg"
          target="_blank"
          >黃色的基督 by 高更, 1889</a
        >
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/800px-Utamaro1.jpg"
        alt="寬政三美人 by 喜多川歌麿"
        loading="lazy"
      />
      <figcaption>
        <a
          href="https://zh.wikipedia.org/wiki/%E6%B5%AE%E4%B8%96%E7%B9%AA#/media/File:Utamaro1.jpg"
          target="_blank"
          >寬政三美人 by 喜多川歌麿</a
        >
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/800px-LindisfarneFol27rIncipitMatt.jpg"
        alt="凱爾經"
        loading="lazy"
      />
      <figcaption>
        <a
          href="https://zh.wikipedia.org/wiki/%E5%87%B1%E7%88%BE%E7%B6%93#/media/File:LindisfarneFol27rIncipitMatt.jpg"
          target="_blank"
          >凱爾經</a
        >
      </figcaption>
    </figure>
  </div>

  <p>
    新藝術運動透過簡化的植物、花卉和鳥獸元素作為裝飾元素，以柔美的女性作為主體，強調文字排版和圖像之間的協調性，使用感覺性、流線型曲線、非對稱的表現形式，<strong>在現代給人的感覺是自然的、有機的、唯美的、浪漫的、柔美的、優雅的、感性的、古典的、復古的</strong>，繼承美術工藝運動（Arts
    & Crafts Movement），啟發裝飾藝術風格（Art Deco）和現代風格（Modern
    Style），也在一個世紀後的1960年代，影響嬉皮文化（Hippie）和迷幻藝術（Psychedelic art）。
  </p>

  <!-- 圖庫展示 -->
  <div class="image-masonry">
    <a href="https://en.wikipedia.org/wiki/Aubrey_Beardsley" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/Aubrey_Beardsley_-_The_Stomach_Dance.jpg"
          alt="Aubrey Beardsley, 1893–4"
          loading="lazy"
        />
        <figcaption>Aubrey Beardsley, 1893–4</figcaption>
      </figure>
    </a>
    <a
      href="https://en.wikipedia.org/wiki/Eug%C3%A8ne_Grasset#/media/File:Eugene_Grasset,_poster_for_Grafton_Galleries,_1893.jpg"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/800px-Eugene_Grasset,_poster_for_Grafton_Galleries,_1893.jpg"
          alt="Eugène Grasset, 1893"
          loading="lazy"
        />
        <figcaption>Eugène Grasset, 1893</figcaption>
      </figure>
    </a>
    <a
      href="https://commons.wikimedia.org/wiki/File:Otto_Eckmann_-_Jugend_Nr._14,_1896.jpg"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/426px-Otto_Eckmann_-_Jugend_Nr._14,_1896.jpg"
          alt="德國Jugend雜誌封面, 1896"
          loading="lazy"
        />
        <figcaption>德國Jugend雜誌封面, 1896</figcaption>
      </figure>
    </a>
    <a
      href="https://en.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec#/media/File:Lautrec_moulin_rouge,_la_goulue_(poster)_1891.jpg"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/Lautrec_moulin_rouge%2C_la_goulue_%28poster%29_1891.jpg"
          alt="羅特列克, 1891"
          loading="lazy"
        />
        <figcaption>羅特列克, 1891</figcaption>
      </figure>
    </a>
    <a href="https://en.wikipedia.org/wiki/Will_H._Bradley" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/800px-William_Henry_Bradley_-_The_Blue_Lady,_poster_for_The_Chap-Book_-_Google_Art_Project.jpg"
          alt="Will H. Bradley, 1894"
          loading="lazy"
        />
        <figcaption>Will H. Bradley, 1894</figcaption>
      </figure>
    </a>
    <a
      href="https://en.wikipedia.org/wiki/Alphonse_Mucha#/media/File:Alfons_Mucha_-_1898_-_Dance.jpg"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/800px-Alfons_Mucha_-_1898_-_Dance.jpg"
          alt="穆夏, 1898"
          loading="lazy"
        />
        <figcaption>穆夏, 1898</figcaption>
      </figure>
    </a>
    <a
      href="https://en.wikipedia.org/wiki/Les_Ma%C3%AEtres_de_l%27Affiche#/media/File:Jules_Ch%C3%A9ret-Fete_des_Fleurs.jpg"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/Jules_Chéret-Fete_des_Fleurs.jpg"
          alt="切雷 aka. 現代海報之父"
          loading="lazy"
        />
        <figcaption>切雷 aka. 現代海報之父</figcaption>
      </figure>
    </a>
    <a
      href="https://en.wikipedia.org/wiki/Art_Nouveau#/media/File:Kolo_Moser_-_M%C3%A4dchenkopf_-_1899.jpeg"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/800px-Kolo_Moser_-_Mädchenkopf_-_1899.jpg"
          alt="Koloman Moser, 1899"
          loading="lazy"
        />
        <figcaption>Koloman Moser, 1899</figcaption>
      </figure>
    </a>
    <a href="https://en.wikipedia.org/wiki/Art_Nouveau#" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/800px-Richard_Strauss-Woche,_festival_poster,_1910_by_Ludwig_Hohlwein.jpg"
          alt="Ludwig Hohlwein, 1910"
          loading="lazy"
        />
        <figcaption>Ludwig Hohlwein, 1910</figcaption>
      </figure>
    </a>
  </div>

  <h2>嬉皮和新藝術運動</h2>
  <blockquote>
    <p>
      <em
        >「我們是屬於這個世代的年輕人，我們在舒適中成長，在大學就讀，但是卻不安地凝視這個環繞我們的世界。」1962年的〈休倫港宣言〉有一段話這麼寫下。</em
      >
    </p>
  </blockquote>
  <p>
    面對新和平的時代抗爭卻沒有結束，新的敵人不是火藥跟槍械可以解決，大學畢業的年輕人要面對的是資本主義的異化和機器般的官僚體制，民權運動，反戰運動、反文化、嬉皮、性解放，反映了六十年代的衝突與焦慮。
  </p>
    <figure class="image">
    <img
      class="img-fluid"
      src="/assets/imgs/blog/Art_Nouveau/1834019_orig.jpg"
      alt="Wes Wilson－海報, 1966"
      loading="lazy"
    />
    <figcaption>
      <a href="https://www.wes-wilson.com/bill-graham-presents.html" target="_blank">
        學院藝術代表－Wes Wilson－海報, 1966
      </a>
    </figcaption>
  </figure>
  <p>
    年輕的嬉皮士面對社會的不平等、大公司的貪婪、傳統道德的狹窄和戰爭的慘無人道，崇尚愛與和平，也有人將嬉皮士稱作花的孩子（Flower
    Children）。在視覺方面崇尚自然主義美學，因此跟新藝術時期的實驗不謀而合，加上流行服用LSD藥物所產生的迷幻藝術（Psychedelic
    art）風格結合，在迷幻搖滾（Psychedelic Rock / Acid
    Rock）時期常常出現在樂團海報、專輯封面上，讓新藝術風格重新浮現在大眾的視野。迷幻藝術也是先挖的一個小坑，日後再跟讀者們介紹😎
  </p>


  <!-- 圖庫展示 -->
  <div class="image-gallery">
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/3002465_orig.jpg"
        alt="Wes Wilson－海報, 1967"
        loading="lazy"
      />
      <figcaption>
        <a href="https://www.wes-wilson.com/bill-graham-presents.html" target="_blank"
          >Wes Wilson－海報, 1967</a
        >
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/4138034_orig.jpg"
        alt="Wes Wilson－海報, 1967"
        loading="lazy"
      />
      <figcaption>
        <a href="https://www.wes-wilson.com/bill-graham-presents.html" target="_blank"
          >Wes Wilson－海報, 1967</a
        >
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/686a355ffa7ce251276ed1b465b7aa9c.jpg"
        alt="Victor Moscoso－海報, 1967
"
        loading="lazy"
      />
      <figcaption>
        <a href="https://www.moma.org/artists/4117-victor-moscoso" target="_blank"
          >Victor Moscoso－海報, 1967
        </a>
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/Left-Victor-Moscoso-Avalon-Ballroom-Big-Brother-and-the-Holding-Company-1966-Right-Wes-Wilson-Poster-c.jpg"
        alt="Victor Moscoso－海報, 1966"
        loading="lazy"
      />
      <figcaption>
        <a href="https://blog.artsper.com/en/" target="_blank">Victor Moscoso－海報, 1966</a>
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/il_794xN.540723011_s2uf.jpg"
        alt="Pink Floyd樂團海報"
        loading="lazy"
      />
      <figcaption>
        <a
          href="https://www.etsy.com/listing/173076260/pink-floyd-1960s-art-nouveau-concert?utm_source=OpenGraph&utm_medium=PageTools&utm_campaign=Share&epik=dj0yJnU9SXduSkJUR0Qwbklvc29mM0dHb3RDOV84eGJqdmg4SHkmcD0wJm49ZEhFVHlzWk82bG9lOUVobUZTRE9aZyZ0PUFBQUFBRi1nZWZV"
          target="_blank"
          >Pink Floyd樂團海報</a
        >
      </figcaption>
    </figure>
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/il_794xN.2399336779_s1wk.jpg"
        alt="Fleetwood Mac樂團海報"
        loading="lazy"
      />
      <figcaption>
        <a
          href="https://www.etsy.com/listing/821302485/?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=fleetwood+mac+poster&ref=sr_gallery-1-3&pro=1"
          target="_blank"
          >Fleetwood Mac樂團海報</a
        >
      </figcaption>
    </figure>
  </div>

  <h2>新新新藝術</h2>
  <p>
    新藝術風格在最近的設計作品中非常少見，反而常常在插畫、日本動漫中才能看到身影，在Pixiv或Twitter中搜尋“ミュシャ風”（穆夏風格）時，會讓你開啟一扇插畫類型的大門，而Clamp大媽廣為人知的漫畫－庫洛魔法使（又譯作百變小櫻、魔卡少女櫻），其中的庫洛牌設計就帶有新藝術風格，甚至一些少女漫畫中都有新藝術風格味道。
  </p>
  <figure class="image">
    <img
      src="/assets/imgs/blog/Art_Nouveau/21742220851431_607.jpg"
      alt="Romantic 乙女 Style by 高橋真琴"
      loading="lazy"
    />
    <figcaption>
      <a href="https://talk.ltn.com.tw/article/breakingnews/1521576" target="_blank">
        Romantic 乙女 Style by 高橋真琴</a
      >
    </figcaption>
  </figure>

  <p>
    近期也有看到圖案（Pattern）類型的插畫有漸漸傾向原始主義（Primitivism）的趨勢，各類花草、藤蔓等等圖案，常常作為復古元素使用在平面設計中；在服裝方面從2019一直流行到今年2020的夏威夷襯衫，也是直接把花草穿上身的不滅單品。這些跡象雖然無法推測新藝術風格可能復甦，但也間接說明人們對植物、花卉的喜愛，不會受時間影響，下次不訪試試看一些新藝術風格的元素或表現手法吧！
  </p>

  <!-- 圖庫展示 -->
  <div class="image-masonry">
    <figure class="image">
      <img
        src="/assets/imgs/blog/Art_Nouveau/1456974983_4693.jpg"
        alt="生活蘇格蘭紅茶－舊包裝"
        loading="lazy"
      />
      <figcaption>生活蘇格蘭紅茶－舊包裝</figcaption>
    </figure>
    <a href="https://www.facebook.com/heartmeltinging/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/42545078_2131430963783134_8619102956152684544_o.jpg"
          alt="生活蘇格蘭紅茶－包裝設計1 by 心融"
          loading="lazy"
        />
        <figcaption>生活蘇格蘭紅茶－包裝設計1 by 心融</figcaption>
      </figure>
    </a>
    <a href="https://www.facebook.com/heartmeltinging/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/42636669_2131430993783131_1491868490972266496_o.jpg"
          alt="生活蘇格蘭紅茶－包裝設計2 by 心融"
          loading="lazy"
        />
        <figcaption>生活蘇格蘭紅茶－包裝設計2 by 心融</figcaption>
      </figure>
    </a>
    <a
      href="https://www.deviantart.com/neo2009/art/Nokia-L-Amour-Ad-Concept-77229117"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/d19zad9-dfa6762a-a72a-405e-85e8-f11072927283.jpg"
          alt="Nokia l’amour L’Amour "
          loading="lazy"
        />
        <figcaption>Nokia l’amour L’Amour</figcaption>
      </figure>
    </a>
    <a href="https://monochrome-watches.com/personalize-jaeger-lecoultre-reverso/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/JLC_reverso_Enamelling_8.jpg"
          alt="Jaeger Reservo Mucha"
          loading="lazy"
        />
        <figcaption>Jaeger Reservo Mucha</figcaption>
      </figure>
    </a>
    <a href="https://411posters.com/tag/chuck-sperry/page/4/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/sperry-MAENADS-LA-WEB.jpg"
          alt="Maenad (Blue), 2015"
          loading="lazy"
        />
        <figcaption>Maenad (Blue), 2015</figcaption>
      </figure>
    </a>
    <a href="https://indieground.net/blog/weekly-inspiration-dose-067/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/weekly-inspiration-dose-067_indiegroundblog_01.jpg"
          alt="Lana Del Rey by Unknown"
          loading="lazy"
        />
        <figcaption>Lana Del Rey by Unknown</figcaption>
      </figure>
    </a>
    <a href="https://www.etsy.com/listing/604536725/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/il_794xN.1467196978_lv4q.jpg"
          alt="神力女超人海報 by Unknown"
          loading="lazy"
        />
        <figcaption>神力女超人海報 by Unknown</figcaption>
      </figure>
    </a>
    <a href="https://zh.moegirl.org.cn/zh-tw/%E5%BA%93%E6%B4%9B%E7%89%8C" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Art_Nouveau/CWood.jpg" alt="庫洛牌-木" loading="lazy" />
        <figcaption>庫洛牌-木</figcaption>
      </figure>
    </a>
    <a href="https://zh.moegirl.org.cn/zh-tw/%E5%BA%93%E6%B4%9B%E7%89%8C" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Art_Nouveau/CIllusion.jpg" alt="庫洛牌-幻" loading="lazy" />
        <figcaption>庫洛牌-幻</figcaption>
      </figure>
    </a>
    <a href="https://zh.moegirl.org.cn/zh-tw/%E5%BA%93%E6%B4%9B%E7%89%8C" target="_blank">
      <figure class="image">
        <img src="/assets/imgs/blog/Art_Nouveau/CLight.jpg" alt="庫洛牌-光" loading="lazy" />
        <figcaption>庫洛牌-光</figcaption>
      </figure>
    </a>
    <a href="https://www.instagram.com/takumitoxin.tm/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/mmbiz.qpic.jpg"
          alt="吉普力系列插畫1 by TAKUMI"
          loading="lazy"
        />
        <figcaption>吉普力系列插畫1 by TAKUMI</figcaption>
      </figure>
    </a>
    <a href="https://www.instagram.com/takumitoxin.tm/" target="_blank">
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/170e-hymscpq3379640.jpg"
          alt="吉普力系列插畫2 by TAKUMI"
          loading="lazy"
        />
        <figcaption>吉普力系列插畫2 by TAKUMI</figcaption>
      </figure>
    </a>
    <a
      href="https://www.behance.net/gallery/16663633/Pixel-art-%28masterpiece-series%29?tracking_source=search_projects_recommended%7Cmucha"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/cc550216663633.562af947e8364.jpg"
          alt="Mucha x Pixel Art"
          loading="lazy"
        />
        <figcaption>Mucha x Pixel Art</figcaption>
      </figure>
    </a>
    <a
      href="https://www.behance.net/gallery/87835469/Microsoft-x-Surface?tracking_source=search_projects_recommended%7Cline+plant+illustration"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/d35ff587835469.5dc4007143250.jpg"
          alt="Microsoft x Surface"
          loading="lazy"
        />
        <figcaption>Microsoft x Surface</figcaption>
      </figure>
    </a>
    <a
      href="https://www.behance.net/gallery/88168751/Samsung-Mercedes-Bazan?tracking_source=search_projects_recommended%7Cabstract+plant"
      target="_blank"
    >
      <figure class="image">
        <img
          src="/assets/imgs/blog/Art_Nouveau/a4224088168751.5dcdcd41d7f95.jpg"
          alt="Samsung × Mercedes Bazan"
          loading="lazy"
        />
        <figcaption>Samsung × Mercedes Bazan</figcaption>
      </figure>
    </a>
  </div>

  <h2>參考資料</h2>
  <p>
    <a href="https://en.wikipedia.org/wiki/Art_Nouveau" target="_blank">Jugendstil(Wiki)</a>、
    <a href="https://en.wikipedia.org/wiki/Exposition_Universelle_%281900%29" target="_blank"
      >1900年世界博覽會(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Jules_Ch%C3%A9ret" target="_blank"
      >朱爾斯·切雷(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Alphonse_Mucha" target="_blank">阿爾豐斯·慕夏(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Gisbert_Combaz" target="_blank"
      >Gisbert Combaz(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Aubrey_Beardsley" target="_blank"
      >奧伯利·比亞茲萊(Wiki)</a
    >、<a href="http://www.artnet.com/artists/albert-klingner/" target="_blank">Albert Klingner</a
    >、<a href="https://en.wikipedia.org/wiki/Antoni_Gaud%C3%AD" target="_blank"
      >安東尼·高第(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Paul_Gauguin" target="_blank">保羅·高更(Wiki)</a>、<a
      href="https://en.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec"
      target="_blank"
      >羅特列克(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Bill_Graham_%28promoter%29" target="_blank"
      >Bill Graham(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Wes_Wilson" target="_blank">Wes Wilson(Wiki)</a>、<a
      href="https://en.wikipedia.org/wiki/Book_of_Kells"
      target="_blank"
      >凱爾經(Wiki)</a
    >、<a href="https://en.wikipedia.org/wiki/Henry_van_de_Velde" target="_blank"
      >亨利·范·德費爾德(Wiki)</a
    >、<a href="https://artemperor.tw/knowledge/53" target="_blank">非池中-新藝術運動</a>、<a
      href="https://www.luoow.com/dc_hk/104683123"
      target="_blank"
      >你可知日本漫畫也曾抄襲？</a
    >、<a
      href="https://thepolysh.com/blog/2016/05/15/the-art-nouveau-poster-by-alain-weill/"
      target="_blank"
      >INSPIRATION｜《THE ART NOUVEAU POSTER》，新藝術海報的黃金年代</a
    >、<a href="https://hippie.wikia.org/wiki/Art_Nouveau_and_hippie_art" target="_blank"
      >Art Nouveau and hippie art</a
    >、<a href="https://www.britannica.com/art/Art-Nouveau" target="_blank">Art Nouveau</a>、<a
      href="https://gallerease.com/en/magazine/articles/the-difference-between-art-nouveau-art-deco__6ae04a6d3cbf"
      target="_blank"
      >The difference between Art Nouveau and Art Deco explained!</a
    >、<a
      href="https://www.hunker.com/13725336/difference-between-arts-and-crafts-and-art-nouveau"
      target="_blank"
      >Arts and Crafts vs. Art Nouveau: Two Iconic Styles, One Major Difference</a
    >、<a
      href="https://canvas.saatchiart.com/lifestyle/inspiration/art-deco-art-nouveau-arts-and-crafts-whats-the-difference"
      target="_blank"
      >Art Deco, Art Nouveau, Arts and Crafts: What’s the Difference?</a
    >、<a href="https://www.gq.com.tw/life/content-38834" target="_blank"
      >為什麼這麼多人嚮往60年代─一本書告訴你關鍵事件</a
    >、<a
      href="http://www.openculture.com/2019/11/how-art-nouveau-inspired-the-psychedelic-designs-of-the-1960s.html"
      target="_blank"
      >How Art Nouveau Inspired the Psychedelic Designs of the 1960s</a
    >
  </p>

  <hr />
  <p>
    <strong
      >轉載請標明出處並告知，我會很感謝你注重智慧財產😉<br />如果有錯誤的訊息或是不同的見解和研究可以到下面留言或</strong
    >
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      ><strong>Instagram</strong></a
    >
    <strong>找我！</strong>
  </p>

  <p>
    Please indicate the source and inform me if you want to reprint, I will thank you for your
    apperciate to intellectual property.<br />
    If there are any mistakes of advice, you can reply or find me on my
    <a href="https://www.instagram.com/homer_create/" rel="noopener ugc nofollow" target="_blank"
      >Instagram</a
    >.
  </p>
</article>
`,seo:{description:"新藝術運動（Art Nouveau）則是延續這個時代浪潮下的視覺風格。在歐洲不同國家有不同稱呼：德國Jugendstil、奧地利Sezessionstil、意大利Stile Floreale",keywords:"視覺風格, 設計, 藝術, 插畫, 平面設計, 荷馬桑, homershie, 設計史, 藝術史, 藝術運動, 視覺, 工業革命, 美術工藝運動, 新藝術運動, 裝飾藝術, 嬉皮, 迷幻藝術, 迷幻搖滾, 古典, 復古, 唯美, 浪漫, 慕夏, 高更, 羅特列克, 切雷, 少女, 庫洛魔法使, 魔法少女, 少女漫畫"}}},Q3={class:"blog section-padding"},ex={class:"container with-pad"},tx={class:"row lg-marg justify-content-center"},ix={class:"col-lg-7"},nx={class:"md-mb80"},rx=["data-category"],sx={class:"img"},ax=["src","alt"],ox={class:"cont mt-30"},lx={class:"date mb-10"},cx={class:"mb-15 post-title"},ux={class:"col-lg-4"},fx={class:"sidebar"},dx={class:"search-box"},gx={class:"widget catogry"},px={class:"rest"},hx={class:"ml-auto"},mx={class:"ml-auto"},_x={class:"ml-auto"},yx={class:"widget last-post-thum"},bx={class:"valign"},vx={class:"img"},wx=["src","alt"],xx={class:"cont"},kx={__name:"BlogsView",setup(t){const e=Ge(""),i=Ge("all"),n=u=>new Date(u).toLocaleDateString(),r=Ge(Object.values(Xr).sort((u,f)=>new Date(f.date)-new Date(u.date))),s=ze(()=>{let u=r.value;return i.value!=="all"&&(u=u.filter(f=>f.category===i.value)),e.value&&(u=u.filter(f=>f.title.toLowerCase().includes(e.value.toLowerCase())||f.excerpt.toLowerCase().includes(e.value.toLowerCase()))),u.sort((f,g)=>new Date(g.date)-new Date(f.date))}),a=ze(()=>r.value.slice(0,3));function o(u){return r.value.filter(f=>f.category===u).length}function l(u){i.value=u}function c(){}return(u,f)=>{const g=jr("router-link");return ue(),me("section",Q3,[h("div",ex,[f[8]||(f[8]=Ii('<div class="sec-head mb-80" data-v-e0e93199><div class="row justify-content-center" data-v-e0e93199><div class="col-lg-8 text-center" data-v-e0e93199><div class="d-inline-block" data-v-e0e93199><div class="sub-title-icon d-flex align-items-center" data-v-e0e93199><span class="icon fas fa-sticky-note" data-v-e0e93199></span><h6 data-v-e0e93199>部落格</h6></div></div><h3 data-v-e0e93199>開啟你的視界</h3></div></div></div>',1)),h("div",tx,[h("div",ix,[h("div",nx,[(ue(!0),me(yt,null,Cr(s.value,d=>(ue(),me("div",{key:d.id,class:"item pb-50 mb-50 bord-thin-bottom blog-post","data-category":d.category},[ce(g,{to:`/article/${d.id}`},{default:it(()=>[h("div",sx,[h("img",{src:d.image,alt:d.title},null,8,ax)])]),_:2},1032,["to"]),h("div",ox,[h("span",lx,we(n(d.date)),1),h("h4",cx,[ce(g,{to:`/article/${d.id}`},{default:it(()=>[Je(we(d.title),1)]),_:2},1032,["to"])]),h("p",null,we(d.excerpt),1),ce(g,{to:`/article/${d.id}`,class:"mt-15 read-more"},{default:it(()=>f[4]||(f[4]=[Je(" 閱讀更多 "),h("i",{class:"fas fa-arrow-right ml-10"},null,-1)])),_:2,__:[4]},1032,["to"])])],8,rx))),128))])]),h("div",ux,[h("div",fx,[h("div",dx,[jn(h("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=d=>e.value=d),placeholder:"搜尋文章",onInput:c},null,544),[[Bs,e.value]]),f[5]||(f[5]=h("span",{class:"icon pe-7s-search"},null,-1))]),h("div",gx,[f[6]||(f[6]=h("h6",{class:"title-widget"},"分類",-1)),h("ul",px,[h("li",null,[h("span",null,[h("a",{href:"#0",onClick:f[1]||(f[1]=vr(d=>l("all"),["prevent"]))}," 全部文章 ")]),h("span",hx,we(r.value.length),1)]),h("li",null,[h("span",null,[h("a",{href:"#0",onClick:f[2]||(f[2]=vr(d=>l("GraphicStyle"),["prevent"]))}," 視覺風格大全 ")]),h("span",mx,we(o("GraphicStyle")),1)]),h("li",null,[h("span",null,[h("a",{href:"#0",onClick:f[3]||(f[3]=vr(d=>l("WorldVision"),["prevent"]))}," 世界視界 ")]),h("span",_x,we(o("WorldVision")),1)])])]),h("div",yx,[f[7]||(f[7]=h("h6",{class:"title-widget"},"最新文章",-1)),(ue(!0),me(yt,null,Cr(a.value,d=>(ue(),me("div",{key:d.id,class:"item"},[h("div",bx,[h("div",vx,[ce(g,{to:`/article/${d.id}`},{default:it(()=>[h("img",{src:d.thumbnail,alt:d.title},null,8,wx)]),_:2},1032,["to"])])]),h("div",xx,[h("h6",null,[ce(g,{to:`/article/${d.id}`},{default:it(()=>[Je(we(d.title),1)]),_:2},1032,["to"])]),h("span",null,[ce(g,{to:`/article/${d.id}`},{default:it(()=>[Je(we(n(d.date)),1)]),_:2},1032,["to"])])])]))),128))])])])])])])}}},Sx=Es(kx,[["__scopeId","data-v-e0e93199"]]);let Ax;function Ex(){return Ax}function Tx(t){return typeof t=="function"?t():rn(t)}function Xc(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=Tx(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(i=>Xc(i));if(typeof e=="object"){const i={};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(n==="titleTemplate"||n[0]==="o"&&n[1]==="n"){i[n]=rn(e[n]);continue}i[n]=Xc(e[n])}return i}return e}const Cx="usehead",ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fg="__unhead_injection_handler__";function Px(){return fg in ug?ug[fg]():Pi(Cx)||Ex()}function Ix(t,e={}){const i=e.head||Px();if(i)return i.ssr?i.push(t,e):Mx(i,t,e)}function Mx(t,e,i={}){const n=Ge(!1),r=Ge({});W_(()=>{r.value=n.value?{}:Xc(e)});const s=t.push(r.value,i);return Bi(r,o=>{s.patch(o)}),r1()&&(Cu(()=>{s.dispose()}),Ep(()=>{n.value=!0}),Ap(()=>{n.value=!1})),s}function Kc(){Dr(()=>{document.querySelectorAll(".cont .image img").forEach(e=>{let i=!1,n=e.parentElement;for(;n;){if(n.tagName&&n.tagName.toLowerCase()==="a"){i=!0;break}n=n.parentElement}i?(e.style.cursor="pointer",e.onclick=null):(e.style.cursor="zoom-in",e.onclick=r=>{r.stopPropagation(),Ox(e.src,e.alt)})})})}function Ox(t,e){const i=document.createElement("div");i.style="position:fixed;z-index:9999;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;",i.onclick=()=>document.body.removeChild(i);const n=document.createElement("img");n.src=t,n.alt=e,n.style=["max-width:90vw","max-height:90vh","width:auto","height:90vh","border-radius:10px","box-shadow:0 0 20px #000","object-fit:contain","display:block"].join(";"),i.appendChild(n),document.body.appendChild(i)}Cn(()=>{Kc()});const zx={key:0,class:"main-post section-padding"},Rx={class:"container with-pad"},Lx={class:"row justify-content-center"},Dx={class:"col-lg-10"},jx={class:"caption text-center"},Nx={class:"gat"},Fx={href:"#0"},Bx={class:"fz-40 mt-30"},$x={class:"sub-title mt-15"},Wx={class:"row justify-content-center"},Ux={class:"col-lg-9"},Hx={class:"cont"},Vx=["innerHTML"],Gx={class:"info-area flex mt-20 pb-20 pt-20 bord-thin-top bord-thin-bottom"},Yx={class:"tags flex"},qx={href:"#0"},Xx={class:"ml-auto"},Kx={class:"share-icon flex"},Jx=["href"],Zx=["href"],Qx={class:"next-prv-post flex mt-50"},ek={class:"fw-500 fz-16",style:{"text-shadow":"2px 2px 2px #000"}},tk={class:"fw-500 fz-16",style:{"text-shadow":"2px 2px 2px #000"}},ik={key:1,class:"section-padding"},nk={class:"container text-center"},rk={__name:"ArticleView",setup(t){const e=Nu(),i=ch(),n=Ge(!1),r=Ge(null),s=Object.keys(Xr),a=ze(()=>{if(!r.value)return null;const f=s.indexOf(r.value.id);if(f===-1)return null;const g=f-1;return g>=0?Xr[s[g]]:null}),o=ze(()=>{if(!r.value)return null;const f=s.indexOf(r.value.id);if(f===-1)return null;const g=f+1;return g<s.length?Xr[s[g]]:null}),l=ze(()=>{if(!r.value)return{};const f=i.currentRoute.value.fullPath,g=`${window.location.origin}${f}`,d=encodeURIComponent(g),b=encodeURIComponent(r.value.title);return{facebook:`https://www.facebook.com/sharer/sharer.php?u=${d}&quote=${b}`,twitter:`https://twitter.com/intent/tweet?url=${d}&text=${b}`}});function c(){const f=e.params.id;Xr[f]?(r.value=Xr[f],document.title=`${r.value.title} - 荷馬桑 Homer Shie`,r.value.seo&&u(r.value.seo)):r.value=null}function u(f){let g=document.querySelector('meta[name="description"]');g&&g.setAttribute("content",f.description);let d=document.querySelector('meta[name="keywords"]');d&&d.setAttribute("content",f.keywords)}return Bi(()=>e.params.id,c),Bi(r,f=>{f&&(Ix({title:`${f.title} – 荷馬桑 Homer Shie`,meta:[{name:"description",content:f.seo.description},{name:"keywords",content:f.seo.keywords},{property:"og:title",content:f.title},{property:"og:description",content:f.seo.description},{property:"og:image",content:f.image},{name:"twitter:card",content:"summary_large_image"}]}),Kc())}),Bi(r,async f=>{if(!f)return;await Dr();const g=Array.from(document.querySelectorAll(".cont .image img")).map(d=>d.src);await fm(g),n.value=!0,Kc()}),Cn(()=>{c()}),(f,g)=>{const d=jr("router-link");return r.value?(ue(),me("section",zx,[h("div",Rx,[h("div",Lx,[h("div",Dx,[h("div",jx,[h("div",Nx,[h("a",Fx,[h("span",null,we(r.value.categoryName),1)])]),h("h1",Bx,we(r.value.title),1),h("p",$x,we(r.value.date)+" - By "+we(r.value.author),1)])])]),h("div",Wx,[h("div",Ux,[h("div",Hx,[h("div",{innerHTML:r.value.content},null,8,Vx),h("div",Gx,[h("div",null,[h("div",Yx,[g[0]||(g[0]=h("div",{class:"valign"},[h("span",null,"Tags :")],-1)),h("div",null,[h("a",qx,we(r.value.categoryName),1)])])]),h("div",Xx,[h("div",Kx,[g[3]||(g[3]=h("div",{class:"valign"},[h("span",null,"Share :")],-1)),h("div",null,[h("a",{href:l.value.facebook,target:"_blank"},g[1]||(g[1]=[h("i",{class:"fab fa-facebook-f"},null,-1)]),8,Jx),h("a",{href:l.value.twitter,target:"_blank"},g[2]||(g[2]=[h("i",{class:"fab fa-x"},null,-1)]),8,Zx)])])])]),h("div",Qx,[a.value?(ue(),me("div",{key:0,class:"thumb-post bg-img",style:gs({backgroundImage:`url('${a.value.thumbnail}')`,backgroundPosition:"center center",backgroundSize:"cover"})},[ce(d,{to:`/article/${a.value.id}`},{default:it(()=>[g[4]||(g[4]=h("span",{class:"fz-12 text-u ls1 main-color mb-15",style:{"text-shadow":"2px 2px 2px #000"}},[h("i",{class:"fas fa-angle-left"}),Je(" 上一篇 ")],-1)),h("h6",ek,we(a.value.title),1)]),_:1,__:[4]},8,["to"])],4)):hr("",!0),o.value?(ue(),me("div",{key:1,class:"thumb-post ml-auto text-right bg-img",style:gs({backgroundImage:`url('${o.value.thumbnail}')`,backgroundPosition:"center center",backgroundSize:"cover"})},[ce(d,{to:`/article/${o.value.id}`},{default:it(()=>[g[5]||(g[5]=h("span",{class:"fz-12 text-u ls1 main-color mb-15",style:{"text-shadow":"2px 2px 2px #000"}},[Je(" 下一篇 "),h("i",{class:"fas fa-angle-right"})],-1)),h("h6",tk,we(o.value.title),1)]),_:1,__:[5]},8,["to"])],4)):hr("",!0)])])])])])])):(ue(),me("section",ik,[h("div",nk,[g[7]||(g[7]=h("h2",null,"文章不存在",-1)),ce(d,{to:"/blogs",class:"butn butn-md butn-bord radius-30 mt-30"},{default:it(()=>g[6]||(g[6]=[h("span",null,"回到部落格",-1)])),_:1,__:[6]})])]))}}},sk={class:"contact section-padding"},ak={class:"container"},ok={class:"row justify-content-center"},lk={class:"col-lg-5 valign"},ck={class:"info full-width md-mb80"},uk={class:"item mb-30 d-flex align-items-center"},fk={class:"mr-15"},dk={class:"item d-flex align-items-center"},gk={class:"mr-15"},pk={class:"col-lg-7 valign"},hk={class:"full-width"},mk={key:0,class:"messages"},_k={class:"controls row"},yk={class:"col-lg-6"},bk={class:"form-group mb-30"},vk=["disabled"],wk={class:"col-lg-6"},xk={class:"form-group mb-30"},kk=["disabled"],Sk={class:"col-12"},Ak={class:"form-group mb-30"},Ek=["disabled"],Tk={class:"col-12"},Ck={class:"form-group"},Pk=["disabled"],Ik={class:"mt-30"},Mk=["disabled"],Ok={key:0,class:"text"},zk={key:1,class:"text"},Rk={__name:"ContactView",setup(t){const e=Ge(!1),i=Ge(""),n=Ge(""),r=Da({name:"",email:"",subject:"",message:""});async function s(){e.value=!0,i.value="";try{await new Promise(a=>setTimeout(a,2e3)),i.value="訊息已成功發送！我會盡快回復您。",n.value="alert alert-success",Object.keys(r).forEach(a=>{r[a]=""})}catch(a){console.error("表單發送錯誤:",a),i.value="發送失敗，請稍後再試或直接發送電子郵件給我。",n.value="alert alert-danger"}finally{e.value=!1,setTimeout(()=>{i.value=""},5e3)}}return(a,o)=>{const l=jr("font-awesome-icon");return ue(),me("section",sk,[h("div",ak,[o[14]||(o[14]=Ii('<div class="sec-head mb-80" data-v-c1331091><div class="row justify-content-center" data-v-c1331091><div class="col-lg-8 text-center" data-v-c1331091><div class="d-inline-block" data-v-c1331091><div class="sub-title-icon d-flex align-items-center" data-v-c1331091><span class="icon fas fa-map-marker-alt" data-v-c1331091></span><h6 data-v-c1331091>聯絡我</h6></div></div><h3 data-v-c1331091>如有任何問題，請隨時與我聯繫。</h3></div></div></div>',1)),h("div",ok,[o[13]||(o[13]=h("div",{class:"col-lg-12"},[h("div",{class:"google-map mb-80"},[h("iframe",{id:"gmap_canvas",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.7907963814307!2d121.46259308881785!3d25.01432952508229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8196a224e67%3A0xec9f88ff96729962!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A57ij5rCR5aSn6YGT5LqM5q61N-iVn-adv-api-i7iuermQ!5e0!3m2!1szh-TW!2stw!4v1722060602168!5m2!1szh-TW!2stw",width:"100%",height:"400",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1)),h("div",lk,[h("div",ck,[h("div",uk,[h("div",fk,[ce(l,{icon:["far","envelope"],class:"icon main-color"})]),o[4]||(o[4]=h("div",{class:"mr-10"},[h("h6",{class:"opacity-7"},"Email")],-1)),o[5]||(o[5]=h("div",{class:"ml-auto"},[h("h4",null,[h("a",{href:"mailto:homerxworkshop@gmail.com"},"homerxworkshop@gmail.com")])],-1))]),h("div",dk,[h("div",gk,[ce(l,{icon:["far","map"],class:"icon main-color"})]),o[6]||(o[6]=h("div",{class:"mr-10"},[h("h6",{class:"opacity-7"},"Address")],-1)),o[7]||(o[7]=h("div",{class:"ml-auto"},[h("h4",null,"新北市板橋區，台灣")],-1))])])]),h("div",pk,[h("div",hk,[h("form",{onSubmit:vr(s,["prevent"]),ref:"contactForm"},[i.value?(ue(),me("div",mk,[h("div",{class:ps(n.value)},we(i.value),3)])):hr("",!0),h("div",_k,[h("div",yk,[h("div",bk,[o[8]||(o[8]=h("label",null,"你的名字 *",-1)),jn(h("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>r.name=c),type:"text",name:"name",required:"",disabled:e.value},null,8,vk),[[Bs,r.name]])])]),h("div",wk,[h("div",xk,[o[9]||(o[9]=h("label",null,"你的電子信箱 *",-1)),jn(h("input",{"onUpdate:modelValue":o[1]||(o[1]=c=>r.email=c),type:"email",name:"email",required:"",disabled:e.value},null,8,kk),[[Bs,r.email]])])]),h("div",Sk,[h("div",Ak,[o[10]||(o[10]=h("label",null,"主旨",-1)),jn(h("input",{"onUpdate:modelValue":o[2]||(o[2]=c=>r.subject=c),type:"text",name:"subject",disabled:e.value},null,8,Ek),[[Bs,r.subject]])])]),h("div",Tk,[h("div",Ck,[o[11]||(o[11]=h("label",null,"你的訊息 *",-1)),jn(h("textarea",{"onUpdate:modelValue":o[3]||(o[3]=c=>r.message=c),name:"message",rows:"6",required:"",disabled:e.value,placeholder:"請詳細描述您的需求、預算範圍、專案時程等資訊..."},null,8,Pk),[[Bs,r.message]])]),h("div",Ik,[h("button",{type:"submit",disabled:e.value,class:"submit-btn"},[e.value?(ue(),me("span",zk,o[12]||(o[12]=[h("i",{class:"fas fa-spinner fa-spin"},null,-1),Je(" 傳送中... ")]))):(ue(),me("span",Ok,"傳送訊息"))],8,Mk)])])])],544)])])])])])}}},Lk=Es(Rk,[["__scopeId","data-v-c1331091"]]),Dk={class:"project section-padding radius-15"},jk={class:"container"},Nk={key:0,class:"row justify-content-center"},Fk={class:"col-lg-12"},Bk={class:"img mb-80 text-center"},$k=["src"],Wk=["src","alt"],Uk={class:"row justify-content-center"},Hk={class:"col-lg-7"},Vk={class:"cont md-mb50"},Gk={class:"mb-15 fw-500"},Yk=["innerHTML"],qk={key:0,class:"imgs mt-80"},Xk={class:"row md-marg"},Kk={class:"img sm-mb30"},Jk=["src","alt"],Zk={class:"col-lg-4"},Qk={class:"info"},e4={class:"mb-30"},t4={class:"mb-30"},i4={key:0,class:"mb-30"},n4={key:1},r4=["href"],s4={__name:"ProjectDetailView",setup(t){const e=Nu(),i=Ge(null),{getWorkById:n}=Nm(),r=ze(()=>{var o;return(o=i.value)!=null&&o.description?i.value.description.replace(/\n/g,"<br>"):""}),s=o=>o?new Date(o).toLocaleDateString("zh-TW",{year:"numeric",month:"long",day:"numeric"}):"",a=o=>o?Array.isArray(o)?o.join(", "):o:"";return Cn(()=>{const o=e.params.id;i.value=n(o),(!i.value.gallery||!Array.isArray(i.value.gallery))&&(i.value.gallery=[])}),(o,l)=>(ue(),me("section",Dk,[h("div",jk,[i.value?(ue(),me("div",Nk,[h("div",Fk,[h("div",Bk,[i.value.type==="video"?(ue(),me("iframe",{key:0,src:i.value.video,class:"radius-5 w-75 h-auto",style:{"aspect-ratio":"16/9"},frameborder:"0",allowfullscreen:""},null,8,$k)):(ue(),me("img",{key:1,src:i.value.mainImage,alt:i.value.title,class:"radius-5 w-50"},null,8,Wk))]),h("div",Uk,[h("div",Hk,[h("div",Vk,[h("h3",Gk,we(i.value.title),1),h("p",{innerHTML:r.value},null,8,Yk),i.value.gallery&&i.value.gallery.some(c=>c)?(ue(),me("div",qk,[h("div",Xk,[(ue(!0),me(yt,null,Cr(i.value.gallery,(c,u)=>(ue(),me("div",{key:u,class:"col-md-6"},[h("div",Kk,[c?(ue(),me("img",{key:0,src:c,alt:`${i.value.title} ${u+1}`},null,8,Jk)):hr("",!0)])]))),128))])])):hr("",!0)])]),h("div",Zk,[h("div",Qk,[h("ul",null,[h("li",e4,[l[0]||(l[0]=h("span",{class:"sub-title"},[h("i",{class:"far fa-calendar-alt mr-10"}),Je(" 日期 : ")],-1)),h("p",null,we(s(i.value.date)),1)]),h("li",t4,[l[1]||(l[1]=h("span",{class:"sub-title"},[h("i",{class:"fas fa-list-ul mr-10"}),Je(" 類別 : ")],-1)),h("p",null,we(a(i.value.category)),1)]),i.value.client?(ue(),me("li",i4,[l[2]||(l[2]=h("span",{class:"sub-title"},[h("i",{class:"far fa-user mr-10"}),Je(" 客戶 : ")],-1)),h("p",null,we(i.value.client),1)])):hr("",!0),i.value.website?(ue(),me("li",n4,[l[3]||(l[3]=h("span",{class:"sub-title"},[h("i",{class:"fas fa-globe mr-10"}),Je(" 連結 : ")],-1)),h("p",null,[h("a",{href:i.value.website,target:"_blank",class:"break-link"},we(i.value.website),9,r4)])])):hr("",!0)])])])])])])):(ue(),zu(cm,{key:1}))])]))}},a4=Es(s4,[["__scopeId","data-v-6e4e6c46"]]),o4=$y({history:_y("/"),routes:[{path:"/",name:"home",component:gw},{path:"/about",name:"about",component:s2},{path:"/services",name:"services",component:l3},{path:"/portfolio",name:"portfolio",component:Z3},{path:"/blogs",name:"blogs",component:Sx},{path:"/article/:id",name:"article",component:rk},{path:"/contact",name:"contact",component:Lk},{path:"/project/:id",name:"project",component:a4}],scrollBehavior(t,e,i){return i||(t.hash?{el:t.hash,behavior:"smooth"}:{top:0,behavior:"smooth"})}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function l4(t,e,i){return(e=u4(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function dg(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function $(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?dg(Object(i),!0).forEach(function(n){l4(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):dg(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function c4(t,e){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function u4(t){var e=c4(t,"string");return typeof e=="symbol"?e:e+""}const gg=()=>{};let pf={},Fm={},Bm=null,$m={mark:gg,measure:gg};try{typeof window<"u"&&(pf=window),typeof document<"u"&&(Fm=document),typeof MutationObserver<"u"&&(Bm=MutationObserver),typeof performance<"u"&&($m=performance)}catch{}const{userAgent:pg=""}=pf.navigator||{},Zn=pf,qe=Fm,hg=Bm,oo=$m;Zn.document;const Pn=!!qe.documentElement&&!!qe.head&&typeof qe.addEventListener=="function"&&typeof qe.createElement=="function",Wm=~pg.indexOf("MSIE")||~pg.indexOf("Trident/");var f4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,d4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Um={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},g4={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Hm=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ut="classic",hl="duotone",p4="sharp",h4="sharp-duotone",Vm=[Ut,hl,p4,h4],m4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},_4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},y4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),b4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},v4=["fak","fa-kit","fakd","fa-kit-duotone"],mg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},w4=["kit"],x4={kit:{"fa-kit":"fak"}},k4=["fak","fakd"],S4={kit:{fak:"fa-kit"}},_g={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},lo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],E4=["fak","fa-kit","fakd","fa-kit-duotone"],T4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},C4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},P4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Jc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},I4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Zc=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...A4,...I4],M4=["solid","regular","light","thin","duotone","brands"],Gm=[1,2,3,4,5,6,7,8,9,10],O4=Gm.concat([11,12,13,14,15,16,17,18,19,20]),z4=[...Object.keys(P4),...M4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lo.GROUP,lo.SWAP_OPACITY,lo.PRIMARY,lo.SECONDARY].concat(Gm.map(t=>"".concat(t,"x"))).concat(O4.map(t=>"w-".concat(t))),R4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const An="___FONT_AWESOME___",Qc=16,Ym="fa",qm="svg-inline--fa",zr="data-fa-i2svg",eu="data-fa-pseudo-element",L4="data-fa-pseudo-element-pending",hf="data-prefix",mf="data-icon",yg="fontawesome-i2svg",D4="async",j4=["HTML","HEAD","STYLE","SCRIPT"],Xm=(()=>{try{return!0}catch{return!1}})();function Ba(t){return new Proxy(t,{get(e,i){return i in e?e[i]:e[Ut]}})}const Km=$({},Um);Km[Ut]=$($($($({},{"fa-duotone":"duotone"}),Um[Ut]),mg.kit),mg["kit-duotone"]);const N4=Ba(Km),tu=$({},b4);tu[Ut]=$($($($({},{duotone:"fad"}),tu[Ut]),_g.kit),_g["kit-duotone"]);const bg=Ba(tu),iu=$({},Jc);iu[Ut]=$($({},iu[Ut]),S4.kit);const _f=Ba(iu),nu=$({},C4);nu[Ut]=$($({},nu[Ut]),x4.kit);Ba(nu);const F4=f4,Jm="fa-layers-text",B4=d4,$4=$({},m4);Ba($4);const W4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ic=g4,U4=[...w4,...z4],ma=Zn.FontAwesomeConfig||{};function H4(t){var e=qe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function V4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}qe&&typeof qe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[i,n]=e;const r=V4(H4(i));r!=null&&(ma[n]=r)});const Zm={styleDefault:"solid",familyDefault:Ut,cssPrefix:Ym,replacementClass:qm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ma.familyPrefix&&(ma.cssPrefix=ma.familyPrefix);const As=$($({},Zm),ma);As.autoReplaceSvg||(As.observeMutations=!1);const re={};Object.keys(Zm).forEach(t=>{Object.defineProperty(re,t,{enumerable:!0,set:function(e){As[t]=e,_a.forEach(i=>i(re))},get:function(){return As[t]}})});Object.defineProperty(re,"familyPrefix",{enumerable:!0,set:function(t){As.cssPrefix=t,_a.forEach(e=>e(re))},get:function(){return As.cssPrefix}});Zn.FontAwesomeConfig=re;const _a=[];function G4(t){return _a.push(t),()=>{_a.splice(_a.indexOf(t),1)}}const On=Qc,en={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Y4(t){if(!t||!Pn)return;const e=qe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const i=qe.head.childNodes;let n=null;for(let r=i.length-1;r>-1;r--){const s=i[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=s)}return qe.head.insertBefore(e,n),t}const q4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ra(){let t=12,e="";for(;t-- >0;)e+=q4[Math.random()*62|0];return e}function Ts(t){const e=[];for(let i=(t||[]).length>>>0;i--;)e[i]=t[i];return e}function yf(t){return t.classList?Ts(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Qm(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X4(t){return Object.keys(t||{}).reduce((e,i)=>e+"".concat(i,'="').concat(Qm(t[i]),'" '),"").trim()}function ml(t){return Object.keys(t||{}).reduce((e,i)=>e+"".concat(i,": ").concat(t[i].trim(),";"),"")}function bf(t){return t.size!==en.size||t.x!==en.x||t.y!==en.y||t.rotate!==en.rotate||t.flipX||t.flipY}function K4(t){let{transform:e,containerWidth:i,iconWidth:n}=t;const r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}function J4(t){let{transform:e,width:i=Qc,height:n=Qc,startCentered:r=!1}=t,s="";return r&&Wm?s+="translate(".concat(e.x/On-i/2,"em, ").concat(e.y/On-n/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/On,"em), calc(-50% + ").concat(e.y/On,"em)) "):s+="translate(".concat(e.x/On,"em, ").concat(e.y/On,"em) "),s+="scale(".concat(e.size/On*(e.flipX?-1:1),", ").concat(e.size/On*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Z4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function e0(){const t=Ym,e=qm,i=re.cssPrefix,n=re.replacementClass;let r=Z4;if(i!==t||n!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(i,"-")).replace(a,"--".concat(i,"-")).replace(o,".".concat(n))}return r}let vg=!1;function nc(){re.autoAddCss&&!vg&&(Y4(e0()),vg=!0)}var Q4={mixout(){return{dom:{css:e0,insertCss:nc}}},hooks(){return{beforeDOMElementCreation(){nc()},beforeI2svg(){nc()}}}};const En=Zn||{};En[An]||(En[An]={});En[An].styles||(En[An].styles={});En[An].hooks||(En[An].hooks={});En[An].shims||(En[An].shims=[]);var tn=En[An];const t0=[],i0=function(){qe.removeEventListener("DOMContentLoaded",i0),Xo=1,t0.map(t=>t())};let Xo=!1;Pn&&(Xo=(qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(qe.readyState),Xo||qe.addEventListener("DOMContentLoaded",i0));function e6(t){Pn&&(Xo?setTimeout(t,0):t0.push(t))}function $a(t){const{tag:e,attributes:i={},children:n=[]}=t;return typeof t=="string"?Qm(t):"<".concat(e," ").concat(X4(i),">").concat(n.map($a).join(""),"</").concat(e,">")}function wg(t,e,i){if(t&&t[e]&&t[e][i])return{prefix:e,iconName:i,icon:t[e][i]}}var rc=function(e,i,n,r){var s=Object.keys(e),a=s.length,o=i,l,c,u;for(n===void 0?(l=1,u=e[s[0]]):(l=0,u=n);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function t6(t){const e=[];let i=0;const n=t.length;for(;i<n;){const r=t.charCodeAt(i++);if(r>=55296&&r<=56319&&i<n){const s=t.charCodeAt(i++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),i--)}else e.push(r)}return e}function ru(t){const e=t6(t);return e.length===1?e[0].toString(16):null}function i6(t,e){const i=t.length;let n=t.charCodeAt(e),r;return n>=55296&&n<=56319&&i>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function xg(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return!!n.icon?e[n.iconName]=n.icon:e[i]=n,e},{})}function su(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:n=!1}=i,r=xg(e);typeof tn.hooks.addPack=="function"&&!n?tn.hooks.addPack(t,xg(e)):tn.styles[t]=$($({},tn.styles[t]||{}),r),t==="fas"&&su("fa",e)}const{styles:La,shims:n6}=tn,n0=Object.keys(_f),r6=n0.reduce((t,e)=>(t[e]=Object.keys(_f[e]),t),{});let vf=null,r0={},s0={},a0={},o0={},l0={};function s6(t){return~U4.indexOf(t)}function a6(t,e){const i=e.split("-"),n=i[0],r=i.slice(1).join("-");return n===t&&r!==""&&!s6(r)?r:null}const c0=()=>{const t=n=>rc(La,(r,s,a)=>(r[a]=rc(s,n,{}),r),{});r0=t((n,r,s)=>(r[3]&&(n[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{n[o.toString(16)]=s}),n)),s0=t((n,r,s)=>(n[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{n[o]=s}),n)),l0=t((n,r,s)=>{const a=r[2];return n[s]=s,a.forEach(o=>{n[o]=s}),n});const e="far"in La||re.autoFetchSvg,i=rc(n6,(n,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(n.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:a,iconName:o}),n},{names:{},unicodes:{}});a0=i.names,o0=i.unicodes,vf=_l(re.styleDefault,{family:re.familyDefault})};G4(t=>{vf=_l(t.styleDefault,{family:re.familyDefault})});c0();function wf(t,e){return(r0[t]||{})[e]}function o6(t,e){return(s0[t]||{})[e]}function yr(t,e){return(l0[t]||{})[e]}function u0(t){return a0[t]||{prefix:null,iconName:null}}function l6(t){const e=o0[t],i=wf("fas",t);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Qn(){return vf}const f0=()=>({prefix:null,iconName:null,rest:[]});function c6(t){let e=Ut;const i=n0.reduce((n,r)=>(n[r]="".concat(re.cssPrefix,"-").concat(r),n),{});return Vm.forEach(n=>{(t.includes(i[n])||t.some(r=>r6[n].includes(r)))&&(e=n)}),e}function _l(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:i=Ut}=e,n=N4[i][t];if(i===hl&&!t)return"fad";const r=bg[i][t]||bg[i][n],s=t in tn.styles?t:null;return r||s||null}function u6(t){let e=[],i=null;return t.forEach(n=>{const r=a6(re.cssPrefix,n);r?i=r:n&&e.push(n)}),{iconName:i,rest:e}}function kg(t){return t.sort().filter((e,i,n)=>n.indexOf(e)===i)}function yl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:i=!1}=e;let n=null;const r=Zc.concat(E4),s=kg(t.filter(f=>r.includes(f))),a=kg(t.filter(f=>!Zc.includes(f))),o=s.filter(f=>(n=f,!Hm.includes(f))),[l=null]=o,c=c6(s),u=$($({},u6(a)),{},{prefix:_l(l,{family:c})});return $($($({},u),p6({values:t,family:c,styles:La,config:re,canonical:u,givenPrefix:n})),f6(i,n,u))}function f6(t,e,i){let{prefix:n,iconName:r}=i;if(t||!n||!r)return{prefix:n,iconName:r};const s=e==="fa"?u0(r):{},a=yr(n,r);return r=s.iconName||a||r,n=s.prefix||n,n==="far"&&!La.far&&La.fas&&!re.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}const d6=Vm.filter(t=>t!==Ut||t!==hl),g6=Object.keys(Jc).filter(t=>t!==Ut).map(t=>Object.keys(Jc[t])).flat();function p6(t){const{values:e,family:i,canonical:n,givenPrefix:r="",styles:s={},config:a={}}=t,o=i===hl,l=e.includes("fa-duotone")||e.includes("fad"),c=a.familyDefault==="duotone",u=n.prefix==="fad"||n.prefix==="fa-duotone";if(!o&&(l||c||u)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&d6.includes(i)&&(Object.keys(s).find(g=>g6.includes(g))||a.autoFetchSvg)){const g=y4.get(i).defaultShortPrefixId;n.prefix=g,n.iconName=yr(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||r==="fa")&&(n.prefix=Qn()||"fas"),n}class h6{constructor(){this.definitions={}}add(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];const r=i.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=$($({},this.definitions[s]||{}),r[s]),su(s,r[s]);const a=_f[Ut][s];a&&su(a,r[s]),c0()})}reset(){this.definitions={}}_pullDefinitions(e,i){const n=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(n).map(r=>{const{prefix:s,iconName:a,icon:o}=n[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let Sg=[],Qr={};const ds={},m6=Object.keys(ds);function _6(t,e){let{mixoutsTo:i}=e;return Sg=t,Qr={},Object.keys(ds).forEach(n=>{m6.indexOf(n)===-1&&delete ds[n]}),Sg.forEach(n=>{const r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(i[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{i[s]||(i[s]={}),i[s][a]=r[s][a]})}),n.hooks){const s=n.hooks();Object.keys(s).forEach(a=>{Qr[a]||(Qr[a]=[]),Qr[a].push(s[a])})}n.provides&&n.provides(ds)}),i}function au(t,e){for(var i=arguments.length,n=new Array(i>2?i-2:0),r=2;r<i;r++)n[r-2]=arguments[r];return(Qr[t]||[]).forEach(a=>{e=a.apply(null,[e,...n])}),e}function Rr(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];(Qr[t]||[]).forEach(s=>{s.apply(null,i)})}function er(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ds[t]?ds[t].apply(null,e):void 0}function ou(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const i=t.prefix||Qn();if(e)return e=yr(i,e)||e,wg(d0.definitions,i,e)||wg(tn.styles,i,e)}const d0=new h6,y6=()=>{re.autoReplaceSvg=!1,re.observeMutations=!1,Rr("noAuto")},b6={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pn?(Rr("beforeI2svg",t),er("pseudoElements2svg",t),er("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;re.autoReplaceSvg===!1&&(re.autoReplaceSvg=!0),re.observeMutations=!0,e6(()=>{w6({autoReplaceSvgRoot:e}),Rr("watch",t)})}},v6={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=_l(t[0]);return{prefix:i,iconName:yr(i,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(re.cssPrefix,"-"))>-1||t.match(F4))){const e=yl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Qn(),iconName:yr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Qn();return{prefix:e,iconName:yr(e,t)||t}}}},wi={noAuto:y6,config:re,dom:b6,parse:v6,library:d0,findIconDefinition:ou,toHtml:$a},w6=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=qe}=t;(Object.keys(tn.styles).length>0||re.autoFetchSvg)&&Pn&&re.autoReplaceSvg&&wi.dom.i2svg({node:e})};function bl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(i=>$a(i))}}),Object.defineProperty(t,"node",{get:function(){if(!Pn)return;const i=qe.createElement("div");return i.innerHTML=t.html,i.children}}),t}function x6(t){let{children:e,main:i,mask:n,attributes:r,styles:s,transform:a}=t;if(bf(a)&&i.found&&!n.found){const{width:o,height:l}=i,c={x:o/l/2,y:.5};r.style=ml($($({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function k6(t){let{prefix:e,iconName:i,children:n,attributes:r,symbol:s}=t;const a=s===!0?"".concat(e,"-").concat(re.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},r),{},{id:a}),children:n}]}]}function xf(t){const{icons:{main:e,mask:i},prefix:n,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:g,height:d}=i.found?i:e,b=k4.includes(n),_=[re.replacementClass,r?"".concat(re.cssPrefix,"-").concat(r):""].filter(T=>u.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(u.classes).join(" ");let y={children:[],attributes:$($({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(d)})};const p=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/d*16*.0625,"em")}:{};f&&(y.attributes[zr]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Ra())},children:[o]}),delete y.attributes.title);const m=$($({},y),{},{prefix:n,iconName:r,main:e,mask:i,maskId:l,transform:s,symbol:a,styles:$($({},p),u.styles)}),{children:v,attributes:x}=i.found&&e.found?er("generateAbstractMask",m)||{children:[],attributes:{}}:er("generateAbstractIcon",m)||{children:[],attributes:{}};return m.children=v,m.attributes=x,a?k6(m):x6(m)}function Ag(t){const{content:e,width:i,height:n,transform:r,title:s,extra:a,watchable:o=!1}=t,l=$($($({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});o&&(l[zr]="");const c=$({},a.styles);bf(r)&&(c.transform=J4({transform:r,startCentered:!0,width:i,height:n}),c["-webkit-transform"]=c.transform);const u=ml(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function S6(t){const{content:e,title:i,extra:n}=t,r=$($($({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")}),s=ml(n.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),i&&a.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),a}const{styles:sc}=tn;function lu(t){const e=t[0],i=t[1],[n]=t.slice(4);let r=null;return Array.isArray(n)?r={tag:"g",attributes:{class:"".concat(re.cssPrefix,"-").concat(ic.GROUP)},children:[{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(ic.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(ic.PRIMARY),fill:"currentColor",d:n[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:i,icon:r}}const A6={found:!1,width:512,height:512};function E6(t,e){!Xm&&!re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function cu(t,e){let i=e;return e==="fa"&&re.styleDefault!==null&&(e=Qn()),new Promise((n,r)=>{if(i==="fa"){const s=u0(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&sc[e]&&sc[e][t]){const s=sc[e][t];return n(lu(s))}E6(t,e),n($($({},A6),{},{icon:re.showMissingIcons&&t?er("missingIconAbstract")||{}:{}}))})}const Eg=()=>{},uu=re.measurePerformance&&oo&&oo.mark&&oo.measure?oo:{mark:Eg,measure:Eg},qs='FA "6.7.2"',T6=t=>(uu.mark("".concat(qs," ").concat(t," begins")),()=>g0(t)),g0=t=>{uu.mark("".concat(qs," ").concat(t," ends")),uu.measure("".concat(qs," ").concat(t),"".concat(qs," ").concat(t," begins"),"".concat(qs," ").concat(t," ends"))};var kf={begin:T6,end:g0};const Eo=()=>{};function Tg(t){return typeof(t.getAttribute?t.getAttribute(zr):null)=="string"}function C6(t){const e=t.getAttribute?t.getAttribute(hf):null,i=t.getAttribute?t.getAttribute(mf):null;return e&&i}function P6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(re.replacementClass)}function I6(){return re.autoReplaceSvg===!0?To.replace:To[re.autoReplaceSvg]||To.replace}function M6(t){return qe.createElementNS("http://www.w3.org/2000/svg",t)}function O6(t){return qe.createElement(t)}function p0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:i=t.tag==="svg"?M6:O6}=e;if(typeof t=="string")return qe.createTextNode(t);const n=i(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){n.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){n.appendChild(p0(s,{ceFn:i}))}),n}function z6(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const To={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(i=>{e.parentNode.insertBefore(p0(i),e)}),e.getAttribute(zr)===null&&re.keepOriginalSource){let i=qe.createComment(z6(e));e.parentNode.replaceChild(i,e)}else e.remove()},nest:function(t){const e=t[0],i=t[1];if(~yf(e).indexOf(re.replacementClass))return To.replace(t);const n=new RegExp("".concat(re.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){const s=i[0].attributes.class.split(" ").reduce((a,o)=>(o===re.replacementClass||o.match(n)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=i.map(s=>$a(s)).join(`
`);e.setAttribute(zr,""),e.innerHTML=r}};function Cg(t){t()}function h0(t,e){const i=typeof e=="function"?e:Eo;if(t.length===0)i();else{let n=Cg;re.mutateApproach===D4&&(n=Zn.requestAnimationFrame||Cg),n(()=>{const r=I6(),s=kf.begin("mutate");t.map(r),s(),i()})}}let Sf=!1;function m0(){Sf=!0}function fu(){Sf=!1}let Ko=null;function Pg(t){if(!hg||!re.observeMutations)return;const{treeCallback:e=Eo,nodeCallback:i=Eo,pseudoElementsCallback:n=Eo,observeMutationsRoot:r=qe}=t;Ko=new hg(s=>{if(Sf)return;const a=Qn();Ts(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Tg(o.addedNodes[0])&&(re.searchPseudoElements&&n(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&re.searchPseudoElements&&n(o.target.parentNode),o.type==="attributes"&&Tg(o.target)&&~W4.indexOf(o.attributeName))if(o.attributeName==="class"&&C6(o.target)){const{prefix:l,iconName:c}=yl(yf(o.target));o.target.setAttribute(hf,l||a),c&&o.target.setAttribute(mf,c)}else P6(o.target)&&i(o.target)})}),Pn&&Ko.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function R6(){Ko&&Ko.disconnect()}function L6(t){const e=t.getAttribute("style");let i=[];return e&&(i=e.split(";").reduce((n,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(n[a]=o.join(":").trim()),n},{})),i}function D6(t){const e=t.getAttribute("data-prefix"),i=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"";let r=yl(yf(t));return r.prefix||(r.prefix=Qn()),e&&i&&(r.prefix=e,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=o6(r.prefix,t.innerText)||wf(r.prefix,ru(t.innerText))),!r.iconName&&re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function j6(t){const e=Ts(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),i=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return re.autoA11y&&(i?e["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(n||Ra()):(e["aria-hidden"]="true",e.focusable="false")),e}function N6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:en,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ig(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:i,prefix:n,rest:r}=D6(t),s=j6(t),a=au("parseNodeAttributes",{},t);let o=e.styleParser?L6(t):[];return $({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:en,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},a)}const{styles:F6}=tn;function _0(t){const e=re.autoReplaceSvg==="nest"?Ig(t,{styleParser:!1}):Ig(t);return~e.extra.classes.indexOf(Jm)?er("generateLayersText",t,e):er("generateSvgReplacementMutation",t,e)}function B6(){return[...v4,...Zc]}function Mg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pn)return Promise.resolve();const i=qe.documentElement.classList,n=u=>i.add("".concat(yg,"-").concat(u)),r=u=>i.remove("".concat(yg,"-").concat(u)),s=re.autoFetchSvg?B6():Hm.concat(Object.keys(F6));s.includes("fa")||s.push("fa");const a=[".".concat(Jm,":not([").concat(zr,"])")].concat(s.map(u=>".".concat(u,":not([").concat(zr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=Ts(t.querySelectorAll(a))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();const l=kf.begin("onTree"),c=o.reduce((u,f)=>{try{const g=_0(f);g&&u.push(g)}catch(g){Xm||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(g=>{h0(g,()=>{n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(g=>{l(),f(g)})})}function $6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_0(t).then(i=>{i&&h0([i],e)})}function W6(t){return function(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=(e||{}).icon?e:ou(e||{});let{mask:r}=i;return r&&(r=(r||{}).icon?r:ou(r||{})),t(n,$($({},i),{},{mask:r}))}}const U6=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:i=en,symbol:n=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:g,icon:d}=t;return bl($({type:"icon"},t),()=>(Rr("beforeDOMElementCreation",{iconDefinition:t,params:e}),re.autoA11y&&(a?c["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(o||Ra()):(c["aria-hidden"]="true",c.focusable="false")),xf({icons:{main:lu(d),mask:r?lu(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:g,transform:$($({},en),i),symbol:n,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var H6={mixout(){return{icon:W6(U6)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Mg,t.nodeCallback=$6,t}}},provides(t){t.i2svg=function(e){const{node:i=qe,callback:n=()=>{}}=e;return Mg(i,n)},t.generateSvgReplacementMutation=function(e,i){const{iconName:n,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:f}=i;return new Promise((g,d)=>{Promise.all([cu(n,a),c.iconName?cu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[_,y]=b;g([e,xf({icons:{main:_,mask:y},prefix:a,iconName:n,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:f,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:i,attributes:n,main:r,transform:s,styles:a}=e;const o=ml(a);o.length>0&&(n.style=o);let l;return bf(s)&&(l=er("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),i.push(l||r.icon),{children:i,attributes:n}}}},V6={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:i=[]}=e;return bl({type:"layer"},()=>{Rr("beforeDOMElementCreation",{assembler:t,params:e});let n=[];return t(r=>{Array.isArray(r)?r.map(s=>{n=n.concat(s.abstract)}):n=n.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(re.cssPrefix,"-layers"),...i].join(" ")},children:n}]})}}}},G6={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:i=null,classes:n=[],attributes:r={},styles:s={}}=e;return bl({type:"counter",content:t},()=>(Rr("beforeDOMElementCreation",{content:t,params:e}),S6({content:t.toString(),title:i,extra:{attributes:r,styles:s,classes:["".concat(re.cssPrefix,"-layers-counter"),...n]}})))}}}},Y6={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:i=en,title:n=null,classes:r=[],attributes:s={},styles:a={}}=e;return bl({type:"text",content:t},()=>(Rr("beforeDOMElementCreation",{content:t,params:e}),Ag({content:t,transform:$($({},en),i),title:n,extra:{attributes:s,styles:a,classes:["".concat(re.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,i){const{title:n,transform:r,extra:s}=i;let a=null,o=null;if(Wm){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return re.autoA11y&&!n&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Ag({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:s,watchable:!0})])}}};const q6=new RegExp('"',"ug"),Og=[1105920,1112319],zg=$($($($({},{FontAwesome:{normal:"fas",400:"fas"}}),_4),R4),T4),du=Object.keys(zg).reduce((t,e)=>(t[e.toLowerCase()]=zg[e],t),{}),X6=Object.keys(du).reduce((t,e)=>{const i=du[e];return t[e]=i[900]||[...Object.entries(i)][0][1],t},{});function K6(t){const e=t.replace(q6,""),i=i6(e,0),n=i>=Og[0]&&i<=Og[1],r=e.length===2?e[0]===e[1]:!1;return{value:ru(r?e[0]:e),isSecondary:n||r}}function J6(t,e){const i=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),r=isNaN(n)?"normal":n;return(du[i]||{})[r]||X6[i]}function Rg(t,e){const i="".concat(L4).concat(e.replace(":","-"));return new Promise((n,r)=>{if(t.getAttribute(i)!==null)return n();const a=Ts(t.children).filter(g=>g.getAttribute(eu)===e)[0],o=Zn.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(B4),u=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),n();if(c&&f!=="none"&&f!==""){const g=o.getPropertyValue("content");let d=J6(l,u);const{value:b,isSecondary:_}=K6(g),y=c[0].startsWith("FontAwesome");let p=wf(d,b),m=p;if(y){const v=l6(b);v.iconName&&v.prefix&&(p=v.iconName,d=v.prefix)}if(p&&!_&&(!a||a.getAttribute(hf)!==d||a.getAttribute(mf)!==m)){t.setAttribute(i,m),a&&t.removeChild(a);const v=N6(),{extra:x}=v;x.attributes[eu]=e,cu(p,d).then(T=>{const O=xf($($({},v),{},{icons:{main:T,mask:f0()},prefix:d,iconName:m,extra:x,watchable:!0})),M=qe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=O.map(B=>$a(B)).join(`
`),t.removeAttribute(i),n()}).catch(r)}else n()}else n()})}function Z6(t){return Promise.all([Rg(t,"::before"),Rg(t,"::after")])}function Q6(t){return t.parentNode!==document.head&&!~j4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(eu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Lg(t){if(Pn)return new Promise((e,i)=>{const n=Ts(t.querySelectorAll("*")).filter(Q6).map(Z6),r=kf.begin("searchPseudoElements");m0(),Promise.all(n).then(()=>{r(),fu(),e()}).catch(()=>{r(),fu(),i()})})}var e5={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Lg,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:i=qe}=e;re.searchPseudoElements&&Lg(i)}}};let Dg=!1;var t5={mixout(){return{dom:{unwatch(){m0(),Dg=!0}}}},hooks(){return{bootstrap(){Pg(au("mutationObserverCallbacks",{}))},noAuto(){R6()},watch(t){const{observeMutationsRoot:e}=t;Dg?fu():Pg(au("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const jg=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((i,n)=>{const r=n.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return i.flipX=!0,i;if(s&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(s){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},e)};var i5={mixout(){return{parse:{transform:t=>jg(t)}}},hooks(){return{parseNodeAttributes(t,e){const i=e.getAttribute("data-fa-transform");return i&&(t.transform=jg(i)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:i,transform:n,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:u,path:f};return{tag:"g",attributes:$({},g.outer),children:[{tag:"g",attributes:$({},g.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:$($({},i.icon.attributes),g.path)}]}]}}}};const ac={x:0,y:0,width:"100%",height:"100%"};function Ng(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function n5(t){return t.tag==="g"?t.children:[t]}var r5={hooks(){return{parseNodeAttributes(t,e){const i=e.getAttribute("data-fa-mask"),n=i?yl(i.split(" ").map(r=>r.trim())):f0();return n.prefix||(n.prefix=Qn()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:i,attributes:n,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:f}=s,g=K4({transform:o,containerWidth:u,iconWidth:l}),d={tag:"rect",attributes:$($({},ac),{},{fill:"white"})},b=c.children?{children:c.children.map(Ng)}:{},_={tag:"g",attributes:$({},g.inner),children:[Ng($({tag:c.tag,attributes:$($({},c.attributes),g.path)},b))]},y={tag:"g",attributes:$({},g.outer),children:[_]},p="mask-".concat(a||Ra()),m="clip-".concat(a||Ra()),v={tag:"mask",attributes:$($({},ac),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,y]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:n5(f)},v]};return i.push(x,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(p,")")},ac)}),{children:i,attributes:n}}}},s5={provides(t){let e=!1;Zn.matchMedia&&(e=Zn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const i=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:$($({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=$($({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:$($({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:$($({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:$($({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||i.push({tag:"path",attributes:$($({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},a5={hooks(){return{parseNodeAttributes(t,e){const i=e.getAttribute("data-fa-symbol"),n=i===null?!1:i===""?!0:i;return t.symbol=n,t}}}},o5=[Q4,H6,V6,G6,Y6,e5,t5,i5,r5,s5,a5];_6(o5,{mixoutsTo:wi});wi.noAuto;wi.config;const l5=wi.library;wi.dom;const gu=wi.parse;wi.findIconDefinition;wi.toHtml;const c5=wi.icon;wi.layer;wi.text;wi.counter;function Fg(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function yn(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Fg(Object(i),!0).forEach(function(n){ei(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Fg(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function u5(t,e){if(typeof t!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function f5(t){var e=u5(t,"string");return typeof e=="symbol"?e:e+""}function Jo(t){"@babel/helpers - typeof";return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jo(t)}function ei(t,e,i){return e=f5(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function d5(t,e){if(t==null)return{};var i={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;i[n]=t[n]}return i}function g5(t,e){if(t==null)return{};var i=d5(t,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y0={exports:{}};(function(t){(function(e){var i=function(p,m,v){if(!c(m)||f(m)||g(m)||d(m)||l(m))return m;var x,T=0,O=0;if(u(m))for(x=[],O=m.length;T<O;T++)x.push(i(p,m[T],v));else{x={};for(var M in m)Object.prototype.hasOwnProperty.call(m,M)&&(x[p(M,v)]=i(p,m[M],v))}return x},n=function(p,m){m=m||{};var v=m.separator||"_",x=m.split||/(?=[A-Z])/;return p.split(x).join(v)},r=function(p){return b(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(m,v){return v?v.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},s=function(p){var m=r(p);return m.substr(0,1).toUpperCase()+m.substr(1)},a=function(p,m){return n(p,m).toLowerCase()},o=Object.prototype.toString,l=function(p){return typeof p=="function"},c=function(p){return p===Object(p)},u=function(p){return o.call(p)=="[object Array]"},f=function(p){return o.call(p)=="[object Date]"},g=function(p){return o.call(p)=="[object RegExp]"},d=function(p){return o.call(p)=="[object Boolean]"},b=function(p){return p=p-0,p===p},_=function(p,m){var v=m&&"process"in m?m.process:m;return typeof v!="function"?p:function(x,T){return v(x,p,T)}},y={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(p,m){return i(_(r,m),p)},decamelizeKeys:function(p,m){return i(_(a,m),p,m)},pascalizeKeys:function(p,m){return i(_(s,m),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=y:e.humps=y})(p5)})(y0);var h5=y0.exports,m5=["class","style"];function _5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,i){var n=i.indexOf(":"),r=h5.camelize(i.slice(0,n)),s=i.slice(n+1).trim();return e[r]=s,e},{})}function y5(t){return t.split(/\s+/).reduce(function(e,i){return e[i]=!0,e},{})}function b0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(l){return b0(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=y5(u);break;case"style":l.style=_5(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});i.class;var s=i.style,a=s===void 0?{}:s,o=g5(i,m5);return Lu(t.tag,yn(yn(yn({},e),{},{class:r.class,style:yn(yn({},r.style),a)},r.attrs),o),n)}var v0=!1;try{v0=!0}catch{}function b5(){if(!v0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function oc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ei({},t,e):{}}function v5(t){var e,i=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ei(ei(ei(ei(ei(ei(ei(ei(ei(ei(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),ei(ei(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(i).map(function(n){return i[n]?n:null}).filter(function(n){return n})}function Bg(t){if(t&&Jo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gu.icon)return gu.icon(t);if(t===null)return null;if(Jo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var w5=Tu({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,i){var n=i.attrs,r=ze(function(){return Bg(e.icon)}),s=ze(function(){return oc("classes",v5(e))}),a=ze(function(){return oc("transform",typeof e.transform=="string"?gu.transform(e.transform):e.transform)}),o=ze(function(){return oc("mask",Bg(e.mask))}),l=ze(function(){return c5(r.value,yn(yn(yn(yn({},s.value),a.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Bi(l,function(u){if(!u)return b5("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=ze(function(){return l.value?b0(l.value.abstract[0],{},n):null});return function(){return c.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const x5={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},k5=x5,S5={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},A5={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"]},E5={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},T5={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},C5=T5,P5={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"]},I5={prefix:"fas",iconName:"note-sticky",icon:[448,512,[62026,"sticky-note"],"f249","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z"]},M5=I5;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const O5={prefix:"far",iconName:"comments",icon:[640,512,[128490,61670],"f086","M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"]},z5={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"]},R5={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"]},L5={prefix:"far",iconName:"map",icon:[576,512,[128506,62072],"f279","M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const D5={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},j5={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},N5={prefix:"fab",iconName:"pinterest",icon:[496,512,[],"f0d2","M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"]},F5={prefix:"fab",iconName:"medium",icon:[640,512,[62407,"medium-m"],"f23a","M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"]};l5.add(R5,L5,z5,O5,D5,N5,F5,j5,A5,k5,P5,S5,E5,M5,C5);const vl=L1(Ov);vl.component("font-awesome-icon",w5);vl.use(F1());vl.use(o4);vl.mount("#app");
