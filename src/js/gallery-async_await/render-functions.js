import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

//Создание экземпляра модельного окна SimpleLightbox с дополнительными настройками
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// Функция рендера изображений
function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${likes}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${views}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${comments}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${downloads}
      </li>
    </ul>
  </a>
</li>

  `;
      }
    )
    .join('');

  // Добавляем карточки в контейнер галереи
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

  // Метод удаления и повторной инициализации лайтбокса
  lightbox.refresh();
}

// Функция очистки контейнера галереи
function clearGallery() {
  galleryContainer.innerHTML = '';
}

// Функция отображения Loader
function showLoader() {
  loaderEl.classList.add('active');
}

// Функция скрывания Loader
function hideLoader() {
  loaderEl.classList.remove('active');
}

export { createGallery, clearGallery, showLoader, hideLoader };
