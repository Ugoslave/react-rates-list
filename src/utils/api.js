class Api {  // создаем и экспортируем класс работы с API
  constructor(dataConfig) {
    this._url = dataConfig.url;
    this._headers = dataConfig.headers;
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

  getArchiveRates() {  // метод получения архивных котировок с сервера
    return fetch(`${this._url}archive/2022/02/11/daily_json.js`)
             .then(this._checkResponse);
  }
}

const api = new Api ({  // записываем в переменную экземпляр класса Api;
  url: "https://www.cbr-xml-daily.ru/",
});

export default api;
