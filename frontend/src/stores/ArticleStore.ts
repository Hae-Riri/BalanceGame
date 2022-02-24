import { makeObservable, observable, action } from 'mobx';
import CommentModel, { ICommentData } from '@/models/CommentModel';

import RootStore from './RootStore';
import ArticleRepository from '@/repositories/ArticleRepository';

class AriticleStore {
  rootStore: RootStore;

  isLoading = true;

  comments: CommentModel[] = [];
  
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      comments: observable,
      isLoading: observable,
      setComments: action,
      setIsLoading: action,
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
      console.log(data);
      // 배열형태
      this.setComments(data);
      console.log(data);
    } catch (e) {
      // TODO: handle error
      // eslint-disable-next-line no-console
      console.error(e);
    }

    this.setIsLoading(false);
  }

}

export default AriticleStore;
