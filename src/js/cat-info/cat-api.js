import axios from 'axios';

const myApiKey =
  'live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP';

axios.defaults.headers.common['x-api-key'] = myApiKey;

const BASE_URL = 'https://api.thecatapi.com/v1/';
// Функция запроса на бэкенд всех пород кошек
async function fetchBreeds() {
  const response = await axios.get(`${BASE_URL}breeds`);
  return response.data;
}

// Функция запроса на бэкенд одной породы кошки, ожидающая получить аргументом Id породы
async function fetchBreedInfo(breedId) {
  const response = await axios.get(`${BASE_URL}breeds/${breedId}`);
  return response.data;
}

// Функция запроса на бэкенд фотографии кошеки, ожидающая получить аргументом Id породы
async function fetchCatByBreed(breedId) {
  const response = await axios.get(
    `${BASE_URL}images/search?breed_ids=${breedId}`
  );
  return response;
}

// Именованный экспорт всех функций
export { fetchBreeds, fetchBreedInfo, fetchCatByBreed };
