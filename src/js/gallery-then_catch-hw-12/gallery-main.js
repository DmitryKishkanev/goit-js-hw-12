import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getImagesByQuery } from './pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreButton,
} from './render-functions';
import '../../css/styles.css';

const formEl = document.querySelector('.form');

// Вешаем на форму слушатель события submit
formEl.addEventListener('submit', onFormSubmit);
loadMoreButton.addEventListener('click', onLoadMoreButton);

// Переменная для хранения данных их инпута
let searchInput = '';
// Переменная хранит номером группы загружаемых элементов
let page = 1;
// Переменная для хранения общего кол-ва загруженных элементов
let totalLoaded = 0;
// Переменная для хранения общего кол-ва доступных элементов
let totalHits = 0;

// Скрываем кнопку load more
hideLoadMoreButton();

// Функция - обработчик слушателя события формы
function onFormSubmit(evt) {
  evt.preventDefault();

  // Очищаем галерею
  clearGallery();
  // Скрываем кнопку load more
  hideLoadMoreButton();
  // Показываем Loader
  showLoader();
  // Cбрасываем счётчики
  resetSearch();

  // Сохраняем в переменную данные из инпута
  searchInput = evt.currentTarget.elements['search-text'].value.trim();

  // Обрабатываем промис функции запроса на бэкенд
  getImagesByQuery(searchInput, page)
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
      // Отображаем кнопку load more
      showLoadMoreButton();
      // Увеличиваем номер группы на 1
      page += 1;
      // Сохраняем в переменную общее кол-во доступных элементов
      totalHits = data.totalHits;
      // Сохраняем в переменную общее кол-во загруженных элементов
      totalLoaded += data.hits.length;
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

// Функция - обработчик слушателя события кнопки load more
function onLoadMoreButton() {
  // Скрываем кнопку load more
  hideLoadMoreButton();
  // Показываем Loader
  showLoader();

  // Функция запроса дополнительной загрузки
  getImagesByQuery(searchInput, page)
    .then(data => {
      // Обновляем переменную кол-ва загруженных элементов
      totalLoaded += data.hits.length;
      // Увеличиваем перменную номера группы загружаемых элементов на 1
      page += 1;
      // Добавляем в галерю данные к уже существующим
      createGallery(data.hits);

      // Проверяем не превышает ли кол-во загруженных элементов кличества доступных
      if (totalLoaded >= totalHits) {
        // Отображаем нотификацию, если всё загружено
        iziToastOptions(
          'Sorry, but you have reached the end of the search results',
          'pink'
        );
        // Скрываем кнопку load more, если всё загружено
        hideLoadMoreButton();
      } else {
        // Иначе отображаем кнопку load more снова
        showLoadMoreButton();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // Скрываем Loader
      hideLoader();
    });
}

// Функция сброса счётчиков
function resetSearch() {
  page = 1;
  totalLoaded = 0;
  totalHits = 0;
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
