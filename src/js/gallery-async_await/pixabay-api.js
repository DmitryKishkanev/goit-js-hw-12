import axios from 'axios';

// Функция запроса на бэкенд
export async function fetchData(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '50268892-929648ae4af930c873d247de9';

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
