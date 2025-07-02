import"./assets/styles-BvmzGJGv.js";import{a as y,S as m,i as f}from"./assets/vendor-BpUGnplp.js";async function p(e){return(await y.get("https://pixabay.com/api/",{params:{key:"50268892-929648ae4af930c873d247de9",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const n=document.querySelector(".gallery"),s=document.querySelector(".loader"),d=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(e){const t=e.map(({webformatURL:a,largeImageURL:o,tags:l,likes:c,views:h,comments:u,downloads:g})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${a}" alt="${l}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${c}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${h}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${u}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${g}
      </li>
    </ul>
  </a>
</li>

  `).join("");n.insertAdjacentHTML("beforeend",t),d.refresh()}function w(){n.innerHTML=""}function S(){s.classList.add("active")}function b(){s.classList.remove("active")}const i=document.querySelector(".form");i.addEventListener("submit",E);async function E(e){e.preventDefault(),w(),S();const t=e.currentTarget.elements["search-text"].value.trim();try{const a=await p(t);a.hits.length===0&&r("Sorry, there are no images matching your search query. Please try again!","pink"),L(a.hits)}catch(a){console.log("Ошибка при получении данных:",a),r("Oops! Something went wrong while fetching images. Please try again later.","pink")}finally{i.reset(),b()}}function r(e,t){return f.show({message:e,messageColor:"#ff0000",backgroundColor:t,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=2-gallery.js.map
