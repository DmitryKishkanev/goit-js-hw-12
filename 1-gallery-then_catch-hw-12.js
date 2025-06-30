import"./assets/styles-C23EK1d7.js";import{a as y,S as d,i as f}from"./assets/vendor-BpUGnplp.js";function p(e,t){return y.get("https://pixabay.com/api/",{params:{key:"50268892-929648ae4af930c873d247de9",q:e,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),s=document.querySelector(".loader"),i=document.querySelector(".load-button"),L=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(e){const t=e.map(({webformatURL:a,largeImageURL:n,tags:o,likes:u,views:h,comments:g,downloads:m})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img class="gallery-image" src="${a}" alt="${o}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${u}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${h}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${g}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${m}
      </li>
    </ul>
  </a>
</li>

  `).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function S(){l.innerHTML=""}function E(){s.classList.add("active")}function $(){s.classList.remove("active")}function q(){i.classList.remove("is-hidden")}function v(){i.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",w);let r=1;v();function w(e){e.preventDefault(),S(),E();const t=e.currentTarget.elements["search-text"].value.trim();p(t,r).then(a=>{a.hits.length===0&&B("Sorry, there are no images matching your search query. Please try again!","pink"),b(a.hits),r+=1,q(),c.reset()}).catch(a=>{console.log(a)}).finally(()=>{$()})}function B(e,t){return f.show({message:e,messageColor:"#ff0000",backgroundColor:t,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=1-gallery-then_catch-hw-12.js.map
