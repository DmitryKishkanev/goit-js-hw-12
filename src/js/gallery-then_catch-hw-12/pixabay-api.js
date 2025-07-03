import axios from 'axios';

// Переменная для хранения базового URL
const BASE_URL = 'https://pixabay.com/api/';
// Переменная для хранения APY KEY
const API_KEY = '50268892-929648ae4af930c873d247de9';

// Класс запроса на бэкенд
export default class GetImagesByQuery {
  // Конструктор для хранения объекта состояний
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.searchTotalLoaded = 0;
    this.searchTotalHits = 0;
  }

  // Функция запроса на бэкенд
  fetchArticles() {
    return axios
      .get(BASE_URL, {
        params: {
          key: API_KEY,
          q: this.query,
          page: this.page,
          per_page: 15,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      })
      .then(response => {
        this.incrementPage();

        return response.data;
      });
  }
  // Метод увеличения номера группы загружаемых данных на 1
  incrementPage() {
    this.page += 1;
  }

  // Метод сброса состояний
  resetPage() {
    this.page = 1;
    this.searchTotalLoaded = 0;
    this.searchTotalHits = 0;
  }

  // Геттеры и сеттеры для записи и чтения состояний конструктора
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get totalLoaded() {
    return this.searchTotalLoaded;
  }

  set totalLoaded(newTotalLoaded) {
    this.searchTotalLoaded = newTotalLoaded;
  }

  get totalHits() {
    return this.searchTotalHits;
  }

  set totalHits(newtotalHits) {
    this.searchTotalHits = newtotalHits;
  }
}

// // Функция запроса на бэкенд
// export function getImagesByQuery(query, page) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '50268892-929648ae4af930c873d247de9';

//   return axios
//     .get(BASE_URL, {
//       params: {
//         key: API_KEY,
//         q: query,
//         page: page,
//         per_page: 15,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//       },
//     })
//     .then(response => response.data);
// }
