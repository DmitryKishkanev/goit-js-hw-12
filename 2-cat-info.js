import"./assets/styles-BR4n9dJH.js";import{a as c,i as u}from"./assets/vendor-BpUGnplp.js";const f="live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP";c.defaults.headers.common["x-api-key"]=f;function g(){return c.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}function v(e){return c.get(`https://api.thecatapi.com/v1/breeds/${e}`).then(t=>t.data)}function y(e){return c.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(t=>t)}const d=document.querySelector(".loader");function L(e,t){t.classList.remove("is-hidden"),e.forEach(o=>{const s=document.createElement("option");s.value=o.id,s.textContent=o.name,t.appendChild(s)})}function C(e,t,o,s){const m=e.data[0];v(t.value).then(n=>{const p=`
<div class="cat-card">
  <img src="${m.url}" alt="${n.name}" class="cat-img" />
  <div class="cat-description">
    <h2>${n.name}</h2>
    <p><strong>Temperament:</strong> ${n.temperament}</p>
    <p><strong>Description:</strong> ${n.description}</p>
  </div>
</div>
    `;o.classList.remove("is-hidden"),o.innerHTML=p}).catch(n=>{s(n)})}function l(){d.classList.add("active")}function h(){d.classList.remove("active")}const a=document.querySelector(".breed-select"),r=document.querySelector(".cat-info");a.addEventListener("change",O);a.classList.add("is-hidden");l();g().then(e=>{L(e,a)}).catch(e=>{i(),a.classList.add("is-hidden")}).finally(()=>{h()});function O(){r.classList.add("is-hidden"),l();const e=a.value;y(e).then(t=>{C(t,a,r,i)}).catch(t=>{i()}).finally(()=>{h()})}function i(){return u.show({message:"Oops! Something went wrong! Try reloading the page!",messageColor:"white",backgroundColor:"red",icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=2-cat-info.js.map
