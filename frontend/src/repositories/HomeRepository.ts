import API from '@/utils/api';

class HomeRepository {
  URL = process.env.ENV === 'local' ? '/articles' : '/v1/articles';

  constructor(url: string) {
    this.URL = url || this.URL;
  }

  getArticle() {
    const currentTime = new Date().getTime();
    return API.get(`${this.URL}?_=${currentTime}`);
  }
}

export default new HomeRepository('');