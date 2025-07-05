import axios from 'axios';

// Функция запроса на бэкенд
export function fetchData(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '50268892-929648ae4af930c873d247de9';

  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
}
