import"./assets/styles-BvmzGJGv.js";import{a as c,i as f}from"./assets/vendor-BpUGnplp.js";const g="live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP";c.defaults.headers.common["x-api-key"]=g;const i="https://api.thecatapi.com/v1/";async function y(){return(await c.get(`${i}breeds`)).data}async function v(e){return(await c.get(`${i}breeds/${e}`)).data}async function L(e){return await c.get(`${i}images/search?breed_ids=${e}`)}const l=document.querySelector(".loader");function w(e,t){t.classList.remove("is-hidden"),e.forEach(a=>{const o=document.createElement("option");o.value=a.id,o.textContent=a.name,t.appendChild(o)})}async function $(e,t,a,o){const u=e.data[0];try{const s=await v(t.value),h=`
  <div class="cat-card">
    <img src="${u.url}" alt="${s.name}" class="cat-img" />
    <div class="cat-description">
      <h2>${s.name}</h2>
      <p><strong>Temperament:</strong> ${s.temperament}</p>
      <p><strong>Description:</strong> ${s.description}</p>
    </div>
  </div>
      `;a.classList.remove("is-hidden"),a.innerHTML=h}catch(s){o(s)}}function p(){l.classList.add("active")}function m(){l.classList.remove("active")}const n=document.querySelector(".breed-select"),d=document.querySelector(".cat-info");n.addEventListener("change",C);n.classList.add("is-hidden");p();async function B(){try{const e=await y();w(e,n)}catch{r(),n.classList.add("is-hidden")}finally{m()}}B();async function C(){d.classList.add("is-hidden"),p();const e=n.value;try{const t=await L(e);$(t,n,d,r)}catch{r()}finally{m()}}function r(){return f.show({message:"Oops! Something went wrong! Try reloading the page!",messageColor:"white",backgroundColor:"red",icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=3-cat-info.js.map
