import API from '@/utils/api';

class AriticleRepository {
  URL = process.env.ENV === 'local' ? '/comments' : '/v1/comments';

  constructor(url: string) {
    this.URL = url || this.URL;
  }

  getComments() {
    console.log(API.get(`${this.URL}`));
    return API.get(`${this.URL}`);
  }
}

export default new AriticleRepository('');
