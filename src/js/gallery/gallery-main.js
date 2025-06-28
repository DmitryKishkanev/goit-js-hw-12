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

// Обработчик слушателя события
async function onFormSubmit(evt) {
  evt.preventDefault();

  // Очищаем галерею
  clearGallery();

  // Показываем Loader
  showLoader();

  // Сохраняем в переменную данные из инпута
  const searchInput = evt.currentTarget.elements['search-text'].value.trim();

  try {
    // Получаем данные c бэкенда
    const data = await fetchData(searchInput);
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
  } catch (error) {
    // Отображаем сообщение об ошибке
    console.log('Ошибка при получении данных:', error);
    iziToastOptions(
      'Oops! Something went wrong while fetching images. Please try again later.',
      'pink'
    );
  } finally {
    // Очищаем инпут
    formEl.reset();
    // Скрываем Loader
    hideLoader();
  }
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
