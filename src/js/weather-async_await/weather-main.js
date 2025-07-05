import { fetchWeather } from './weather-api';
import { createMarkup } from './render-functions';
import '../../css/styles.css';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const loaderEl = document.querySelector('.loader');

search.addEventListener('submit', onSearch);

async function onSearch(evt) {
  evt.preventDefault();

  // Очищаем контейнер
  clearList();

  // Показываем Loader
  showLoader();

  // Сохраняем в переменные данные из формы
  const { query, days } = evt.currentTarget.elements;

  try {
    // Получаем данные c бэкенда
    const data = await fetchWeather(query.value.trim(), days.value);

    // Создаём карточки с данными из бэкенда
    list.innerHTML = createMarkup(data.forecast.forecastday);

    // Очищаем инпут
    search.reset();
  } catch (error) {
    console.log('Ошибка при получении данных:', error);
  } finally {
    // Скрываем Loader
    hideLoader();
  }
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
