class Api {  // создаем и экспортируем класс работы с API
  constructor(dataConfig) {
    this._url = dataConfig.url;
  }

  _checkResponse(res) { // создаем приватный метод для обработки ошибок
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  }

  getAllRates() {  // метод получения котировок с сервера
    return fetch(`${this._url}daily_json.js`)
             .then(this._checkResponse);
  }

  getArchiveRates = (date) => {  // метод получения архивных котировок с сервера
    return fetch(`${this._url}archive/${date}/daily_json.js`)
             .then(this._checkResponse);
  }
}

const api = new Api ({  // записываем в переменную экземпляр класса Api;
  url: "https://www.cbr-xml-daily.ru/",
});

export default api;
