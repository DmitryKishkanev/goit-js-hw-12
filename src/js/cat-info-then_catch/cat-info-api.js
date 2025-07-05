import axios from 'axios';

const myApiKey =
  'live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP';

axios.defaults.headers.common['x-api-key'] = myApiKey;

// Функция запроса на бэкенд всех пород кошек
function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
    return response.data;
  });
}

// Функция запроса на бэкенд одной породы кошки, ожидающая получить аргументом Id породы
function fetchBreedInfo(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/breeds/${breedId}`)
    .then(response => {
      return response.data;
    });
}

// Функция запроса на бэкенд фотографии кошеки, ожидающая получить аргументом Id породы
function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response;
    });
}

// Именованный экспорт всех функций
export { fetchBreeds, fetchBreedInfo, fetchCatByBreed };
