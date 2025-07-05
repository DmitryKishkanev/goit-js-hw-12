// Функция рендера данных
export function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li class="weather-item">
          <img src="${icon}" alt="${text}" class="weather-img">
          <p>${text}</p>
          <h2>${date}</h2>
          <h3>${avgtemp_c} &deg;С</h3>
        </li>`
    )
    .join('');
}
