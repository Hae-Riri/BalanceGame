import API from '@/utils/api';

class AriticleRepository {
  COMMENT_URL = process.env.ENV === 'local' ? '/comments' : '/v1/comments';

  // TODO : 추후 URL 변경 필요
  ARTICLE_URL = process.env.ENV === 'local' ? '/article' : '/v1/article'; 

  constructor(url: string) {
    this.COMMENT_URL = url || this.COMMENT_URL;
    this.ARTICLE_URL = url || this.ARTICLE_URL;
  }

  getComments() {
    return API.get(`${this.COMMENT_URL}`);
  }
  
  getArticle(articleId : number) {
    // TODO : 추후 URL 변경 필요
    return API.get(`${this.ARTICLE_URL}?articleId=${articleId}`);
  }
}

export default new AriticleRepository('');
