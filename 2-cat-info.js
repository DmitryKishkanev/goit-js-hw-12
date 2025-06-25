import"./assets/styles-BR4n9dJH.js";import{a as c,i as f}from"./assets/vendor-BpUGnplp.js";const g="live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP";c.defaults.headers.common["x-api-key"]=g;const r="https://api.thecatapi.com/v1/";async function y(){return(await c.get(`${r}breeds`)).data}async function v(e){return(await c.get(`${r}breeds/${e}`)).data}async function L(e){return await c.get(`${r}images/search?breed_ids=${e}`)}const l=document.querySelector(".loader");function w(e,t){t.classList.remove("is-hidden"),e.forEach(a=>{const o=document.createElement("option");o.value=a.id,o.textContent=a.name,t.appendChild(o)})}function $(e,t,a,o){const h=e.data[0];v(t.value).then(n=>{const u=`
<div class="cat-card">
  <img src="${h.url}" alt="${n.name}" class="cat-img" />
  <div class="cat-description">
    <h2>${n.name}</h2>
    <p><strong>Temperament:</strong> ${n.temperament}</p>
    <p><strong>Description:</strong> ${n.description}</p>
  </div>
</div>
    `;a.classList.remove("is-hidden"),a.innerHTML=u}).catch(n=>{o(n)})}function p(){l.classList.add("active")}function m(){l.classList.remove("active")}const s=document.querySelector(".breed-select"),d=document.querySelector(".cat-info");s.addEventListener("change",B);s.classList.add("is-hidden");p();async function C(){try{const e=await y();w(e,s)}catch{i(),s.classList.add("is-hidden")}finally{m()}}C();function B(){d.classList.add("is-hidden"),p();const e=s.value;L(e).then(t=>{$(t,s,d,i)}).catch(t=>{i()}).finally(()=>{m()})}function i(){return f.show({message:"Oops! Something went wrong! Try reloading the page!",messageColor:"white",backgroundColor:"red",icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=2-cat-info.js.map
