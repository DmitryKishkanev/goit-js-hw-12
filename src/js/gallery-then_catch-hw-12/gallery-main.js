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

// Перменная хранит объект состояний
const searchState = {
  query: '',
  page: 1,
  totalLoaded: 0,
  totalHits: 0,
};

// Функция сброса состояний
function resetSearch() {
  searchState.page = 1;
  searchState.totalLoaded = 0;
  searchState.totalHits = 0;
}

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

  // Сохраняем в объект состояний данные из инпута
  searchState.query = evt.currentTarget.elements['search-text'].value.trim();

  // Обрабатываем промис функции запроса на бэкенд
  getImagesByQuery(searchState.query, searchState.page)
    .then(data => {
      // Если ответ пришёл с ошибкой
      if (data.hits.length === 0) {
        // Вызов нотификации
        iziToastOptions(
          'Sorry, there are no images matching your search query. Please try again!',
          'pink'
        );
        return;
      }
      // Создаём галерю с данными из бэкенда
      createGallery(data.hits);
      // Отображаем кнопку load more
      showLoadMoreButton();

      // Сохраняем  в объект состояний кол-во доступных элементов
      searchState.totalHits = data.totalHits;
      // Сохраняем  в объект состояний общее кол-во загруженных элементов
      searchState.totalLoaded += data.hits.length;
      // Сохраняем  в объект состояний увеличение номера группы на 1
      searchState.page += 1;
      // Очищаем инпут
      formEl.reset();
    })
    .catch(error => {
      console.log('Ошибка при загрузке изображений:', error);
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
  getImagesByQuery(searchState.query, searchState.page)
    .then(data => {
      // Добавляем в галерю данные к уже существующим
      createGallery(data.hits);
      // Обновляем в объекте состояний кол-во загруженных элементов
      searchState.totalLoaded += data.hits.length;
      // Увеличиваем в объекте состояний номера группы загружаемых элементов на 1
      searchState.page += 1;

      // Проверяем не превышает ли кол-во загруженных элементов кличества доступных
      if (searchState.totalLoaded >= searchState.totalHits) {
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
      console.log('Ошибка при загрузке дополнительных изображений:', error);
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
