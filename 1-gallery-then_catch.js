import"./assets/styles-B_vy0JBt.js";import{a as m,S as y,i as g}from"./assets/vendor-BpUGnplp.js";function f(e){return m.get("https://pixabay.com/api/",{params:{key:"50268892-929648ae4af930c873d247de9",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),r=document.querySelector(".loader"),p=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function d(e){const t=e.map(({webformatURL:a,largeImageURL:o,tags:i,likes:s,views:c,comments:u,downloads:h})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${a}" alt="${i}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${s}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${c}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${u}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${h}
      </li>
    </ul>
  </a>
</li>

  `).join("");l.insertAdjacentHTML("beforeend",t),p.refresh()}function L(){l.innerHTML=""}function b(){r.classList.add("active")}function S(){r.classList.remove("active")}const n=document.querySelector(".form");n.addEventListener("submit",E);function E(e){e.preventDefault(),L(),b();const t=e.currentTarget.elements["search-text"].value.trim();f(t).then(a=>{a.hits.length===0&&$("Sorry, there are no images matching your search query. Please try again!","pink"),d(a.hits),n.reset()}).catch(a=>{console.log(a)}).finally(()=>{S()})}function $(e,t){return g.show({message:e,messageColor:"#ff0000",backgroundColor:t,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=1-gallery-then_catch.js.map
