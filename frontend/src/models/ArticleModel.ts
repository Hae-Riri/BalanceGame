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
  voteCount: number;
  articleCategoryDto: {
    id: number;
    name: string;
  };
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

  voteCount = 0;

  articleCategoryDto = {
    id: 0,
    name: '',
  };

  constructor(store: HomeStore | SearchResultStore, data: any) {
    makeObservable(this, {});
    extendObservable(this, {
      id: data?.id || this.id,
      title: data?.title || this.title,
      content: data?.content || this.content,
      createdAt: data?.createdAt || this.createdAt,
      voteCount: data?.totalCount || this.voteCount,
      articleCategoryDto: data?.articleCategoryDto || this.articleCategoryDto,
    });
    this.store = store;
  }
}

export default ArticleModel;
