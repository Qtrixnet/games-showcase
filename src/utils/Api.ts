import {API_KEY, BASE_URL} from "./constants";

class Api {
  private _baseUrl: string;
  private _apiKey: string;

  // @ts-ignore
  constructor(url, apiKey) {
    this._baseUrl = url;
    this._apiKey = apiKey
  }

  //* Проверка статуса запроса
  // @ts-ignore
  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }

  //* Запрос информации об играх
  getGamesInfo() {
    return fetch(`${this._baseUrl}games?key=${this._apiKey}&page_size=40`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => this._requestResult(res))
  }

  //* Запрос списка жанров
  getGenres() {
    return fetch(`${this._baseUrl}genres?key=${this._apiKey}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => this._requestResult(res))
  }

  //* Запрос списка платформ
  getPlatforms() {
    return fetch(`${this._baseUrl}platforms?key=${this._apiKey}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => this._requestResult(res))
  }
}

const api = new Api(BASE_URL, API_KEY);

export default api;
