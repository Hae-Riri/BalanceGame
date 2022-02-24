import API from '@/utils/api';

class AriticleRepository {
  COMMENT_URL = process.env.ENV === 'local' ? '/comments' : '/v1/comments';

  ARTICLE_URL = process.env.ENV === 'local' ? '/articles' : '/v1/articles'; 

  constructor(url: string) {
    this.COMMENT_URL = url || this.COMMENT_URL;
    this.ARTICLE_URL = url || this.ARTICLE_URL;
  }

  getComments() {
    return API.get(`${this.COMMENT_URL}`);
  }
  
  getArticle(articleId : String) {
    return API.get(`${this.COMMENT_URL}/${articleId}`);
  }
}

export default new AriticleRepository('');
