import api from './app/api.js';

export default class Search {
  static query(q = '') {
    api.collections().then(x => document.querySelector("tbody").innerHTML = x);
  }
}
