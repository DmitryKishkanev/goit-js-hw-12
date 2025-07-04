import axios from 'axios';

// Переменная для хранения базового URL
const BASE_URL = 'https://pixabay.com/api/';
// Переменная для хранения APY KEY
const API_KEY = '50268892-929648ae4af930c873d247de9';

// Класс запроса на бэкенд
export default class GetImagesByQuery {
  // Конструктор для хранения объекта состояний
  constructor(options = {}) {
    this.searchQuery = '';
    this.page = 1;
    this.searchTotalLoaded = 0;
    this.searchTotalHits = 0;

    this.perPage = options.perPage || 15;
    this.orientation = options.orientation || 'horizontal';
  }

  // Функция запроса на бэкенд
  async fetchArticles() {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: this.searchQuery,
          page: this.page,
          per_page: this.perPage,
          image_type: 'photo',
          orientation: this.orientation,
          safesearch: true,
        },
      });
      this.incrementPage();

      return response.data;
    } catch (error) {
      console.error('Ошибка при запросе изображений:', error);
      // Пробрасываем ошибку дальше для обработки
      throw error;
    }
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

  // Метод проверки доступных изображений
  hasMore() {
    return this.searchTotalLoaded < this.searchTotalHits;
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
// export async function getImagesByQuery(query, page) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '50268892-929648ae4af930c873d247de9';

//   const response = await axios.get(BASE_URL, {
//     params: {
//       key: API_KEY,
//       q: query,
//       page: page,
//       per_page: 15,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//     },
//   });
//   return response.data;
// }
