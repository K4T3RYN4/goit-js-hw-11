import{a as d,S as f,i as s}from"./assets/vendor-BCVp9CTC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function g(o){return d.get("https://pixabay.com/api/",{params:{key:"52839812-b4c86bdfff86c9a3d984b9ce5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(o),console.log(t.data.hits),t.data.hits)).catch(t=>{console.log(t.message)})}const c=document.querySelector("#loader");function h(o){gallery.insertAdjacentHTML("afterbegin",o)}function m(){gallery.innerHTML=""}function p(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}const l=document.querySelector("#searchInput"),L=document.querySelector("#searchBtn");let v=new f(".gallery a",{sourceAttr:"href",overlay:!0,overlayOpacity:.9,spinner:!0,nav:!0,navText:["<",">"],captions:!0,captionsData:"alt",captionSelector:"img",captionDelay:150,showCounter:!0,scrollZoom:!0,close:!0});L.addEventListener("click",o=>{if(o.preventDefault(),!l.value.trim())return s.error({position:"topRight",message:"Sorry, you have to write something in order to find something! :) Please try again!"});m(),p(),g(l.value).then(t=>{if(!t||t.length===0)return s.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});h(b(t)),v.refresh()}).catch(t=>{console.log(t.message)}).finally(y)});function b(o){return o.map(({largeImageURL:t,webformatURL:n,tags:a,likes:e,views:r,comments:i,downloads:u})=>`
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
            <li>Downloads: ${u}</li>
        </ul>
    </li>`).join(`
`)}
//# sourceMappingURL=index.js.map
