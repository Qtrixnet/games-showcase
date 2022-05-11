import {BASE_URL} from "./constants";

class Api {
  private _baseUrl: string;

  constructor(url) {
    this._baseUrl = url;
  }

  //* Проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }

  //* Запрос инфо об играх
  getGamesInfo() {
    return fetch(this._baseUrl)
      .then((res) => this._requestResult(res))
  }
}

const api = new Api(BASE_URL);

export default api;
