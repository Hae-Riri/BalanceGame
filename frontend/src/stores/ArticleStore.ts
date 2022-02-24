import { makeObservable, observable, action, flow } from 'mobx';
import CommentModel, { ICommentData } from '@/models/CommentModel';

import RootStore from './RootStore';
import ArticleRepository from '@/repositories/ArticleRepository';
import ArticleModel from '@/models/ArticleModel';

class AriticleStore {
  rootStore: RootStore;

  isLoading = true;

  public comments: CommentModel[] = [];

  public article: ArticleModel = {
    "store": this,
    "id": 1,
    "title": "",
    "voteItem1": "",
    "voteItem2": "",
    "item1stat": "",
    "item2stat": "",
    "content": "",
    "createdAt": ""
  };
  
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      comments: observable,
      article: observable,
      isLoading: observable,
      setComments: action,
      setIsLoading: action,
      fetchArticle: flow,
    });
    this.rootStore = rootStore;
  }

  setComments(comments: CommentModel[]) {
    this.comments = comments.map((comment: ICommentData)=> new CommentModel(this, comment));
  }

  setArticle(article: ArticleModel) {
    this.article = article;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  *fetchArticle() {
    this.setIsLoading(true);

    try {
      // const { data : commentData } = yield ArticleRepository.getComments();
      const { data : articleData } = yield ArticleRepository.getArticle(this.rootStore.uiStore.selectedArticleId);
      // 배열형태
      // this.setComments(commentData);
      this.setArticle(articleData);
    } catch (e) {
      // TODO: handle error
      // eslint-disable-next-line no-console
      console.error(e);
    }

    this.setIsLoading(false);
  }
  
  // flow method 여러개 만들기

  // 댓글을 post하는 로직
  

}

export default AriticleStore;
