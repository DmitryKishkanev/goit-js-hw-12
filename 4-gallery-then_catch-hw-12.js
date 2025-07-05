import"./assets/styles-B_vy0JBt.js";import{a as T,S,i as b}from"./assets/vendor-BpUGnplp.js";const H="https://pixabay.com/api/",P="50268892-929648ae4af930c873d247de9";class q{constructor(e={}){this.searchQuery="",this.page=1,this.searchTotalLoaded=0,this.searchTotalHits=0,this.perPage=e.perPage||15,this.orientation=e.orientation||"horizontal"}fetchArticles(){return T.get(H,{params:{key:P,q:this.searchQuery,page:this.page,per_page:this.perPage,image_type:"photo",orientation:this.orientation,safesearch:!0}}).then(e=>(this.incrementPage(),e.data)).catch(e=>{throw console.error("Ошибка при запросе изображений:",e),e})}incrementPage(){this.page+=1}resetPage(){this.page=1,this.searchTotalLoaded=0,this.searchTotalHits=0}hasMore(){return this.searchTotalLoaded<this.searchTotalHits}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get totalLoaded(){return this.searchTotalLoaded}set totalLoaded(e){this.searchTotalLoaded=e}get totalHits(){return this.searchTotalHits}set totalHits(e){this.searchTotalHits=e}}const c=document.querySelector(".gallery"),h=document.querySelector(".loader"),l=document.querySelector(".load-button"),k=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function u(t){const e=t.map(({webformatURL:i,largeImageURL:o,tags:n,likes:f,views:p,comments:L,downloads:w})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${i}" alt="${n}" />
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
        ${w}
      </li>
    </ul>
  </a>
</li>

  `).join("");c.insertAdjacentHTML("beforeend",e),k.refresh()}function v(){c.innerHTML=""}function g(){h.classList.add("active")}function d(){h.classList.remove("active")}function y(){l.classList.remove("is-hidden")}function s(){l.classList.add("is-hidden")}function M(t={}){const{selector:e=".gallery-item",multiplier:i=2}=t;requestAnimationFrame(function(){const o=document.querySelector(e);if(o){const n=o.getBoundingClientRect().height;window.scrollBy({top:n*i,left:0,behavior:"smooth"})}})}const m=document.querySelector(".form");m.addEventListener("submit",A);l.addEventListener("click",B);const a=new q;s();function A(t){t.preventDefault(),v(),s(),g(),a.resetPage(),a.query=t.currentTarget.elements["search-text"].value.trim(),a.fetchArticles().then(e=>{if(e.hits.length===0){r("Sorry, there are no images matching your search query. Please try again!","pink");return}u(e.hits),y(),a.totalHits=e.totalHits,a.totalLoaded+=e.hits.length,m.reset()}).catch(e=>{console.log("Ошибка, что-то пошло не так:",e),r("Oops! Something went wrong while fetching images. Please try again later.","pink")}).finally(()=>{d()})}function B(){s(),g(),a.fetchArticles().then(t=>{u(t.hits),M(),a.totalLoaded+=t.hits.length,a.hasMore()?y():(r("Sorry, but you have reached the end of the search results","pink"),s())}).catch(t=>{console.log("Ошибка, что-то пошло не так:",t),r("Oops! Something went wrong while fetching images. Please try again later.","pink")}).finally(()=>{d()})}function r(t,e){return b.show({message:t,messageColor:"#ff0000",backgroundColor:e,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=4-gallery-then_catch-hw-12.js.map
