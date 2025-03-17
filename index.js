import{a as m,S as d,i as p}from"./assets/vendor-DU6yh4ar.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function g(s){return m.get("https://pixabay.com/api",{params:{key:"49368815-3bbcd5bcef21230b847f53bd6",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:{hits:l}})=>l).catch(()=>[])}const f=new d("a.gallery-link",{captionsData:"alt"}),o=document.querySelector("ul.gallery"),n=document.querySelector("span.loader");function y(s){const l=s.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:i,comments:c,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${a}" alt="${e}">
          <ul class="gallery-list">
          <li class="gallery-list-item">
          <p class="gallery-list-item-text">Likes</p>
          <p class="gallery-list-item-value">${t}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Views</p>
          <p class="gallery-list-item-value">${i}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Comments</p>
          <p class="gallery-list-item-value">${c}</p>
          </li>
           <li class="gallery-list-item">
          <p class="gallery-list-item-text">Downloads</p>
          <p class="gallery-list-item-value">${u}</p>
          </li>
          </ul></a></li>`).join("");o.insertAdjacentHTML("beforeend",l),f.refresh()}function h(){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function L(){o.innerHTML="",n.classList.remove("hidden")}function b(){n.classList.add("hidden")}const x=document.querySelector("form");x.addEventListener("submit",s=>{s.preventDefault();const a=new FormData(s.target).get("search-text");a!==""&&(L(),g(a).then(r=>{b(),r.length===0?h():y(r)}).catch(r=>console.log(r)))});
//# sourceMappingURL=index.js.map
