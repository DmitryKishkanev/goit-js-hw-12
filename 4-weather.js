import"./assets/styles-BvmzGJGv.js";import{i as c}from"./assets/vendor-BpUGnplp.js";async function u(e,t){const a=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=09a333eec31b44aab6a163037252406&q=${e}&days=${t}&lang=ru`);if(!a.ok)throw l("Sorry, there is no information matching your search query. Try again!","pink"),new Error(`Ошибка ${a.status}: ${a.statusText}`);return a.json()}function l(e,t){return c.show({message:e,messageColor:"#ff0000",backgroundColor:t,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}function h(e){return e.map(({date:t,day:{avgtemp_c:r,condition:{icon:o,text:a}}})=>`<li class="weather-item">
          <img src="${o}" alt="${a}" class="weather-img">
          <p>${a}</p>
          <h2>${t}</h2>
          <h3>${r} &deg;С</h3>
        </li>`).join("")}const n=document.querySelector(".js-search"),s=document.querySelector(".js-list"),i=document.querySelector(".loader");n.addEventListener("submit",f);async function f(e){e.preventDefault(),d(),m();const{query:t,days:r}=e.currentTarget.elements;try{const o=await u(t.value.trim(),r.value);s.innerHTML=h(o.forecast.forecastday),n.reset()}catch(o){console.log("Ошибка при получении данных:",o)}finally{y()}}function d(){s.innerHTML=""}function m(){i.classList.add("active")}function y(){i.classList.remove("active")}
//# sourceMappingURL=4-weather.js.map
