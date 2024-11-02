import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery");function h(i){return i.map(({webformatURL:o,largeImageURL:n,tags:t,likes:e,views:r,comments:s,downloads:u})=>` 
<li class="thumb"> 
    <a href="${n}" 
            class="gallery-item" > 
    <div class="photo-card"> 
            <img src="${o}" alt="${t}"  loading="lazy" 
            class="gallery-image"/> 
        <div class="info"> 
            <p class="info-item"> 
            <b>Likes</b>${e} 
            </p> 
            <p class="info-item"> 
            <b>Views</b>${r} 
            </p> 
            <p class="info-item"> 
            <b>Comments</b>${s} 
            </p> 
            <p class="info-item"> 
            <b>Downloads</b>${u} 
            </p> 
         </div> 
    </div> 
    </a> 
</li>`).join("")}function d(){c.innerHTML=""}function p(i){c.insertAdjacentHTML("beforeend",h(i))}const g="46856425-450f7e6938fc07d9efbff3295",y="https://pixabay.com/api/";function b(i){const o=new URLSearchParams({key:g,q:encodeURIComponent(i),image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${y}?${o.toString()}`;return fetch(n).then(t=>{if(!t.ok)throw new Error("Error fetching images.");return t.json()}).then(t=>(t.hits.length===0&&a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t.hits)).catch(t=>{a.error({position:"topRight",title:"Error",message:"Error fetching images. Try again!"}),console.error("Error fetching images:",t)})}const l=document.querySelector(".loader"),f=document.querySelector("#search-form");let L=new m(".gallery a",{captionsData:"alt",captionDelay:250});f.addEventListener("submit",w);function w(i){i.preventDefault();let o=i.currentTarget.searchQuery.value.trim();if(o==="")return a.info({position:"topRight",title:"Sorry",message:"Please, type what you what to search!"});d(),S(),b(o).then(n=>{p(n),L.refresh("show.simplelightbox")}).catch(n=>{console.error("Error fetching images:",n),a.error({position:"topRight",title:"Error",message:"Something went wrong while fetching images. Please try again later!"})}).finally(()=>{E(),f.reset()})}function S(){l.classList.remove("hidden")}function E(){l.classList.add("hidden")}
//# sourceMappingURL=index.js.map
