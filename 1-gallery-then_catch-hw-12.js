import"./assets/styles-BvmzGJGv.js";import{a as q,S as v,i as E}from"./assets/vendor-BpUGnplp.js";function i(t,o){return q.get("https://pixabay.com/api/",{params:{key:"50268892-929648ae4af930c873d247de9",q:t,page:o,per_page:100,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(l=>l.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),n=document.querySelector(".load-button"),k=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(t){const o=t.map(({webformatURL:r,largeImageURL:s,tags:l,likes:p,views:L,comments:S,downloads:b})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-image" src="${r}" alt="${l}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${p}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${L}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${S}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${b}
      </li>
    </ul>
  </a>
</li>

  `).join("");c.insertAdjacentHTML("beforeend",o),k.refresh()}function B(){c.innerHTML=""}function d(){u.classList.add("active")}function g(){u.classList.remove("active")}function y(){n.classList.remove("is-hidden")}function a(){n.classList.add("is-hidden")}const m=document.querySelector(".form");m.addEventListener("submit",M);n.addEventListener("click",$);const e={query:"",page:1,totalLoaded:0,totalHits:0};function H(){e.page=1,e.totalLoaded=0,e.totalHits=0}a();function M(t){t.preventDefault(),B(),a(),d(),H(),e.query=t.currentTarget.elements["search-text"].value.trim(),i(e.query,e.page).then(o=>{if(o.hits.length===0){f("Sorry, there are no images matching your search query. Please try again!","pink");return}h(o.hits),y(),e.totalHits=o.totalHits,e.totalLoaded+=o.hits.length,e.page+=1,m.reset()}).catch(o=>{console.log("Ошибка при загрузке изображений:",o)}).finally(()=>{g()})}function $(){a(),d(),i(e.query,e.page).then(t=>{h(t.hits),e.totalLoaded+=t.hits.length,e.page+=1,e.totalLoaded>=e.totalHits?(f("Sorry, but you have reached the end of the search results","pink"),a()):y()}).catch(t=>{console.log("Ошибка при загрузке дополнительных изображений:",t)}).finally(()=>{g()})}function f(t,o){return E.show({message:t,messageColor:"#ff0000",backgroundColor:o,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=1-gallery-then_catch-hw-12.js.map
