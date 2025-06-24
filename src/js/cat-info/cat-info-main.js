import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Именованный импорт
import { fetchBreeds, fetchCatByBreed } from './cat-api';
// Именованный импорт
import {
  createSelect,
  createInfo,
  showLoader,
  hideLoader,
} from './render-functions';
import '../../css/styles.css';

// Получаем в переменную HTML-элемент списка
const breedSelect = document.querySelector('.breed-select');

// Получаем в переменную контейнер для рендера информации
const infoContainer = document.querySelector('.cat-info');

// Вешаем слушатель события change на HTML-элемент списка
breedSelect.addEventListener('change', onbreedSelect);

// Скрываем HTML-элемент списка
breedSelect.classList.add('is-hidden');

// Отображения loader
showLoader();

// Реализация запроса всех пород кошек, создание списка, оброботка ошибки
fetchBreeds()
  .then(response => {
    createSelect(response, breedSelect);
  })
  .catch(error => {
    // Отображаем сообщение об ошибке
    iziToastOptions(error);

    // Скрываем HTML-элемент списка
    breedSelect.classList.add('is-hidden');
  })
  .finally(() => {
    // Скрываем Loader
    hideLoader();
  });

// Обработчик слушателя события
function onbreedSelect() {
  // Скрываем контейнер
  infoContainer.classList.add('is-hidden');

  // Отображения loader
  showLoader();

  // Получаем в переменную значение выбранное из списка
  const selectedCatId = breedSelect.value;

  // Реализация запроса породы кошки по значению выбранному из списка,
  // отображение данных, обработка ошибки
  fetchCatByBreed(selectedCatId)
    .then(response => {
      createInfo(response, breedSelect, infoContainer, iziToastOptions);
    })
    .catch(error => {
      // Отображаем сообщение об ошибке
      iziToastOptions(error);
    })
    .finally(() => {
      // Скрываем Loader
      hideLoader();
    });
}

// Опции подключенного через библиотеку alert
function iziToastOptions() {
  return iziToast.show({
    message: 'Oops! Something went wrong! Try reloading the page!',
    messageColor: 'white',
    backgroundColor: 'red',
    icon: '	fa fa-ban',
    iconColor: '#8b0000',
    position: 'topRight',
  });
}
