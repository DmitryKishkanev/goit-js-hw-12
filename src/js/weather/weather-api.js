import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Функция запроса на бэкенд
export function fetchWeather(city, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = '09a333eec31b44aab6a163037252406';

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=ru`
  ).then(response => {
    // Если ответ пришёл с ошибкой
    if (!response.ok) {
      // Вызов нотификации
      iziToastOptions(
        'Sorry, there is no information matching your search query. Try again!',
        'pink'
      );
      // Создание принудительной ошибки
      throw new Error(response.statusText);
    }
    // Возвращаем из then распарсенный json
    return response.json();
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
