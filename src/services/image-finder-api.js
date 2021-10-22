import axios from 'axios';

export default class FetchImages {
  constructor(BASE_URL, API_KEY) {
    this.BASE_URL = BASE_URL;
    this.API_KEY = API_KEY;
    this._page = 1;
  }
  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }
  searchPhotos(searchQuery, perPage) {
    try {
      axios.defaults.baseURL = this.BASE_URL;
      let url = `?key=${this.API_KEY}&q=${searchQuery}&per_page=${perPage}&page=${this._page}`;
      return axios
        .get(url)
        .then(res => res.data.hits)
        .catch(error => console.log(error.message));
    } catch (error) {
      alert(error);
    }
  }
}
