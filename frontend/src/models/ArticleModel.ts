import { extendObservable, makeObservable } from 'mobx';
import AriticleStore from '@/stores/ArticleStore';
// import { action, extendObservable, makeObservable, observable } from 'mobx';
import HomeStore from '../stores/HomeStore';

export interface IArticleData {
  id: number;
  title: string;
  content: string;
  voteItem1: string;
  voteItem2: string;
  voteCount: number;
  createdAt: string;
  item2stat: string;
  item1stat: string;
}

class ArticleModel {
  store: HomeStore | AriticleStore ;

  id = 0;

  title = '';

  content = '';

  voteItem1= "";

  voteItem2= '';

  item1stat = "";

  item2stat = "";

  createdAt = '';

  constructor(store: HomeStore | AriticleStore, data: IArticleData) {
    makeObservable(this, {
      // isHomeAppIconDragEnter: observable,
      // setIsHomeAppIconDragEnter: action.bound,
    });
    extendObservable(this, data);
    this.store = store;
  }
}

export default ArticleModel;
