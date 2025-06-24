// Именованный импорт
import { fetchBreedInfo } from './cat-api';

// Получаем в переменную HTML-элемент loader
const loaderEl = document.querySelector('.loader');

// Функция создания списка всех пород кошек
function createSelect(breeds, breedSelect) {
  // Отображаем HTML-элемент списка
  breedSelect.classList.remove('is-hidden');

  // Перебераем через forEach полученный из запросак массив объектов
  // и отображаем имена пород в списке
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

// Функция отображения информации о выбранной породе
function createInfo(card, breedSelect, infoContainer, iziToastOptions) {
  // Сохраняем в перменную объект полученный из запроса
  const cat = card.data[0];

  // Реализация допролнительного запроса информации по значению выбранному из списка,
  // создание отобаржаемой карточки,
  // обработка ошибки
  fetchBreedInfo(breedSelect.value)
    .then(breed => {
      const cardMarkup = `
<div class="cat-card">
  <img src="${cat.url}" alt="${breed.name}" class="cat-img" />
  <div class="cat-description">
    <h2>${breed.name}</h2>
    <p><strong>Temperament:</strong> ${breed.temperament}</p>
    <p><strong>Description:</strong> ${breed.description}</p>
  </div>
</div>
    `;
      // Отображаем контейнер
      infoContainer.classList.remove('is-hidden');

      // Добавляем в контейнер нашу карточку
      infoContainer.innerHTML = cardMarkup;
    })
    .catch(error => {
      // Отображаем сообщение об ошибке
      iziToastOptions(error);
    });
}

// Функция отображения Loader
function showLoader() {
  loaderEl.classList.add('active');
}

// Функция скрывания Loader
function hideLoader() {
  loaderEl.classList.remove('active');
}

// Именованный экспорт всех функций
export { createSelect, createInfo, showLoader, hideLoader };
