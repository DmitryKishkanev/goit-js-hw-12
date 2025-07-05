import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchData } from './pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions';
import '../../css/styles.css';

const formEl = document.querySelector('.form');

// Вешаем на форму слушатель события submit
formEl.addEventListener('submit', onFormSubmit);

// Функция - обработчик слушателя события формы
function onFormSubmit(evt) {
  evt.preventDefault();

  // Очищаем галерею
  clearGallery();

  // Показываем Loader
  showLoader();

  // Сохраняем в переменную данные из инпута
  const searchInput = evt.currentTarget.elements['search-text'].value.trim();

  // Обрабатываем промис функции запроса на бэкенд
  fetchData(searchInput)
    .then(data => {
      // Если ответ пришёл с ошибкой
      if (data.hits.length === 0) {
        // Вызов нотификации
        iziToastOptions(
          'Sorry, there are no images matching your search query. Please try again!',
          'pink'
        );
      }
      // Создаём галерю с данными из бэкенда
      createGallery(data.hits);
      // Очищаем инпут
      formEl.reset();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // Скрываем Loader
      hideLoader();
    });
}

// Опции подключенного через библиотеку alert
function iziToastOptions(message, backgroundColor) {
  return iziToast.show({
    message,
    messageColor: '#ff0000',
    backgroundColor,
    icon: '	fa fa-ban',
    iconColor: '#8b0000',
    position: 'topRight',
  });
}
