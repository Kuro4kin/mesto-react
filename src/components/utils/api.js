import apiConfig from './utils.js'

class Api {
  constructor(config) {
    this._config = config;
  }

  _getResponseData(res) {
    if (!res.ok) {
      Promise.reject(res.status);
    } else {
      return res.json();
    }
  }

  getInitialUserInfo() {
    return fetch(this._config.user, {
      method: 'GET',
      headers: {
        authorization: this._config.authorization
      }
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  getInitialCards() {
    return fetch(this._config.cards, {
      method: 'GET',
      headers: {
        authorization: this._config.authorization
      }
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  editUserInfo(data) {
    return fetch(this._config.user, {
      method: 'PATCH',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  editUserAvatar(data) {
    return fetch(`${this._config.user}/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        avatar: data.avatar
      }),
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  createNewCard(data) {
    return fetch(this._config.cards, {
      method: 'POST',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  likeThisCard(card) {
    return fetch(`${this._config.cards}/${card.cardID}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      }
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  unlikeThisCard(card) {
    return fetch(`${this._config.cards}/${card.cardID}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      }
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }

  removeThisCard(card) {
    return fetch(`${this._config.cards}/${card.cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._config.authorization,
        "Content-type": "application/json"
      }
    })
    .then((res) => {
      return this._getResponseData(res);
    })
  }
};

export const api = new Api(apiConfig);

