import { extendObservable, makeObservable } from 'mobx';
import AriticleStore from '@/stores/ArticleStore';
// import { action, extendObservable, makeObservable, observable } from 'mobx';

import SearchResultStore from '@/stores/SearchResultStore';
import HomeStore from '../stores/HomeStore';

export interface IArticleData {
  id: number;
  title: string;
  content: string;
  voteItem1: string;
  voteItem2: string;
  createdAt: string;
  item1stat: string;
  item2stat: string;
}

class ArticleModel {
  store: HomeStore | AriticleStore | SearchResultStore ;

  id = 0;

  title = '';

  content = '';

  voteItem1= "";

  voteItem2= '';

  item1stat = "";

  item2stat = "";

  createdAt = '';

  constructor(store: HomeStore | AriticleStore, data: IArticleData) {
    makeObservable(this, {});
    extendObservable(this, data);
    this.store = store;
  }
}

export default ArticleModel;
