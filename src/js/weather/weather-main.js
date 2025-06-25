import { fetchWeather } from './weather-api';
import { createMarkup } from './render-functions';
import '../../css/styles.css';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const loaderEl = document.querySelector('.loader');

search.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  // Очищаем контейнер
  clearList();

  // Показываем Loader
  showLoader();

  // Сохраняем в переменные данные из формы
  const { query, days } = evt.currentTarget.elements;

  // Обрабатываем промис функции запроса на бэкенд
  fetchWeather(query.value.trim(), days.value)
    .then(
      // Создаём карточки с данными из бэкенда
      data => {
        list.innerHTML = createMarkup(data.forecast.forecastday);
        // Очищаем инпут
        search.reset();
      }
    )
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // Скрываем Loader
      hideLoader();
    });
}

// Функция очистки контейнера галереи
function clearList() {
  list.innerHTML = '';
}

// Функция отображения Loader
function showLoader() {
  loaderEl.classList.add('active');
}

// Функция скрывания Loader
function hideLoader() {
  loaderEl.classList.remove('active');
}
