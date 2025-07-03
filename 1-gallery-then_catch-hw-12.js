import"./assets/styles-BvmzGJGv.js";import{a as b,S as H,i as q}from"./assets/vendor-BpUGnplp.js";const S="https://pixabay.com/api/",v="50268892-929648ae4af930c873d247de9";class k{constructor(){this.searchQuery="",this.page=1,this.searchTotalLoaded=0,this.searchTotalHits=0}fetchArticles(){return b.get(S,{params:{key:v,q:this.query,page:this.page,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>(this.incrementPage(),e.data))}incrementPage(){this.page+=1}resetPage(){this.page=1,this.searchTotalLoaded=0,this.searchTotalHits=0}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get totalLoaded(){return this.searchTotalLoaded}set totalLoaded(e){this.searchTotalLoaded=e}get totalHits(){return this.searchTotalHits}set totalHits(e){this.searchTotalHits=e}}const r=document.querySelector(".gallery"),i=document.querySelector(".loader"),o=document.querySelector(".load-button"),w=new H(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function l(t){const e=t.map(({webformatURL:g,largeImageURL:y,tags:m,likes:f,views:p,comments:L,downloads:T})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${y}">
    <img class="gallery-image" src="${g}" alt="${m}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${f}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${p}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${L}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${T}
      </li>
    </ul>
  </a>
</li>

  `).join("");r.insertAdjacentHTML("beforeend",e),w.refresh()}function B(){r.innerHTML=""}function n(){i.classList.add("active")}function c(){i.classList.remove("active")}function h(){o.classList.remove("is-hidden")}function s(){o.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",M);o.addEventListener("click",P);const a=new k;s();function M(t){t.preventDefault(),B(),s(),n(),a.resetPage(),a.query=t.currentTarget.elements["search-text"].value.trim(),a.fetchArticles().then(e=>{if(e.hits.length===0){d("Sorry, there are no images matching your search query. Please try again!","pink");return}l(e.hits),h(),a.totalHits=e.totalHits,a.totalLoaded+=e.hits.length,u.reset()}).catch(e=>{console.log("Ошибка при загрузке изображений:",e)}).finally(()=>{c()})}function P(){s(),n(),a.fetchArticles().then(t=>{l(t.hits),a.totalLoaded+=t.hits.length,a.totalLoaded>=a.totalHits?(d("Sorry, but you have reached the end of the search results","pink"),s()):h()}).catch(t=>{console.log("Ошибка при загрузке дополнительных изображений:",t)}).finally(()=>{c()})}function d(t,e){return q.show({message:t,messageColor:"#ff0000",backgroundColor:e,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=1-gallery-then_catch-hw-12.js.map
