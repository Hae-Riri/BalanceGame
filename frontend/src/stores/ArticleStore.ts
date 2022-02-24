import { makeObservable, observable, action, flow } from 'mobx';
import CommentModel, { ICommentData } from '@/models/CommentModel';

import RootStore from './RootStore';
import ArticleRepository from '@/repositories/ArticleRepository';
import ArticleModel from '@/models/ArticleModel';

class AriticleStore {
  rootStore: RootStore;

  isLoading = true;

  // getter를 사용하지 않고 직접접근하기 위해서는 public을 붙여주자
  public comments: CommentModel[] = [];

  // 단건 조회시 저장되는 
  public article: ArticleModel = new ArticleModel(this, {
    "id": 1,
    "title": "",
    "voteItem1": "",
    "voteItem2": "",
    "item1stat": "",
    "item2stat": "",
    "content": "",
    "createdAt": ""
  });
  
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

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  *fetchArticle() {
    this.setIsLoading(true);

    try {
      const { data } = yield ArticleRepository.getComments();
      // 배열형태
      this.setComments(data);
    } catch (e) {
      // TODO: handle error
      // eslint-disable-next-line no-console
      console.error(e);
    }

    this.setIsLoading(false);
  }
  
  // flow method 여러개 만들기

}

export default AriticleStore;
