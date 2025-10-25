import{a as f,S as g,i as s}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function m(o){return f.get("https://pixabay.com/api/",{params:{key:"52839812-b4c86bdfff86c9a3d984b9ce5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(o),console.log(t.data.hits),t.data.hits)).catch(t=>{console.log(t.message)})}let h=new g(".gallery a",{sourceAttr:"href",overlay:!0,overlayOpacity:.9,spinner:!0,nav:!0,navText:["<",">"],captions:!0,captionsData:"alt",captionSelector:"img",captionDelay:150,showCounter:!0,scrollZoom:!0,close:!0});const c=document.querySelector("#loader"),u=document.querySelector(".gallery");function p(o){u.insertAdjacentHTML("afterbegin",S(o)),h.refresh()}function y(){u.innerHTML=""}function L(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}function S(o){return o.map(({largeImageURL:t,webformatURL:n,tags:a,likes:e,views:r,comments:i,downloads:d})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
            <img
                width="360"
                height="200"
                class="gallery-image"
                src="${n}"
                alt="${a}"
            />
        </a>
        <ul>
            <li>Likes: ${e}</li>
            <li>Views: ${r}</li>
            <li>Comments: ${i}</li>
            <li>Downloads: ${d}</li>
        </ul>
    </li>`).join(`
`)}const l=document.querySelector("#searchInput"),b=document.querySelector("#searchBtn");b.addEventListener("click",o=>{if(o.preventDefault(),!l.value.trim())return s.error({position:"topRight",message:"Sorry, you have to write something in order to find something! :) Please try again!"});y(),L(),m(l.value).then(t=>{if(!t||t.length===0)return s.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});p(t)}).catch(t=>{console.log(t.message)}).finally(()=>v())});
//# sourceMappingURL=index.js.map
