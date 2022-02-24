import { extendObservable, makeObservable } from 'mobx';
// import { action, extendObservable, makeObservable, observable } from 'mobx';
import HomeStore from '../stores/HomeStore';

export interface ICommentData {
  id: number;
  content: string;
  createdAt: string;
}

class CommentModel {
  store: HomeStore;

  id = 0;

  content = '';

  createdAt = '';

  constructor(store: HomeStore, data: ICommentData) {
    makeObservable(this, {
      // isHomeAppIconDragEnter: observable,
      // setIsHomeAppIconDragEnter: action.bound,
    });
    extendObservable(this, data);
    this.store = store;
  }
}

export default CommentModel;
