import"./assets/styles-BvmzGJGv.js";import{a as B,S as M,i as $}from"./assets/vendor-BpUGnplp.js";function u(e,t){return B.get("https://pixabay.com/api/",{params:{key:"50268892-929648ae4af930c873d247de9",q:e,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(l=>l.data)}const g=document.querySelector(".gallery"),d=document.querySelector(".loader"),i=document.querySelector(".load-button"),q=new M(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(e){const t=e.map(({webformatURL:c,largeImageURL:h,tags:l,likes:b,views:v,comments:E,downloads:k})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${h}">
    <img class="gallery-image" src="${c}" alt="${l}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${b}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${v}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${E}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${k}
      </li>
    </ul>
  </a>
</li>

  `).join("");g.insertAdjacentHTML("beforeend",t),q.refresh()}function w(){g.innerHTML=""}function m(){d.classList.add("active")}function f(){d.classList.remove("active")}function p(){i.classList.remove("is-hidden")}function a(){i.classList.add("is-hidden")}const L=document.querySelector(".form");L.addEventListener("submit",_);i.addEventListener("click",x);let r="",o=1,n=0,s=0;a();function _(e){e.preventDefault(),w(),a(),m(),A(),r=e.currentTarget.elements["search-text"].value.trim(),u(r,o).then(t=>{t.hits.length===0&&S("Sorry, there are no images matching your search query. Please try again!","pink"),y(t.hits),p(),o+=1,s=t.totalHits,n+=t.hits.length,L.reset()}).catch(t=>{console.log(t)}).finally(()=>{f()})}function x(){a(),m(),u(r,o).then(e=>{n+=e.hits.length,o+=1,y(e.hits),n>=s?(S("Sorry, but you have reached the end of the search results","pink"),a()):p()}).catch(e=>{console.log(e)}).finally(()=>{f()})}function A(){o=1,n=0,s=0}function S(e,t){return $.show({message:e,messageColor:"#ff0000",backgroundColor:t,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=1-gallery-then_catch-hw-12.js.map
