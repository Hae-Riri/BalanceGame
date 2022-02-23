import { action, flow, makeObservable, observable } from 'mobx';
import dayjs from 'dayjs';

import ArticleModel, { IArticleData } from '@/models/ArticleModel';
import SearchResultRepository from '@/repositories/SearchResultRepository';

import RootStore from './RootStore';

class SearchResultStore {
  rootStore: RootStore;

  isLoading = true;

  public searchKeyword = '';

  public articles: ArticleModel[] = [];

  public timeLine: { days: string[]; timeLine: {} } = { days: [], timeLine: {} };

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      isLoading: observable,
      articles: observable,
      timeLine: observable,
      searchKeyword: observable,
      fetchArticles: flow,
      setIsLoading: action,
      setSearchKeyword: action,
    });
    this.rootStore = rootStore;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setArticles(articles: ArticleModel[]) {
    this.articles = articles.map((article: IArticleData) => new ArticleModel(this, article));
  }

  setSearchKeyword(searchKeyword: string) {
    this.searchKeyword = searchKeyword;
  }

  *fetchArticles() {
    this.setIsLoading(true);

    const { selectedCategory } = this.rootStore.uiStore;

    try {
      const { data } = yield SearchResultRepository.getArticle(
        `searchKeyword=${this.searchKeyword}&category=${selectedCategory}`,
      );
      this.setArticles(data);
      this.timeLine = this.groupByDay(this.articles);
    } catch (e) {
      // TODO: handle error
      // eslint-disable-next-line no-console
      console.error(e);
    }

    this.setIsLoading(false);
  }

  groupByDay(data: ArticleModel[]) {
    const timeLine = data.reduce((acc, cur) => {
      const history = acc;
      const day = cur.createdAt.split(' ')[0];

      if (!history[day]) {
        history[day] = [];
      }

      history[day] = history[day].concat(cur);

      return history;
    }, this.timeLine.timeLine);

    return {
      days: Object.keys(timeLine).sort((a, b) => (dayjs(b).isBefore(a, 'date') ? -1 : 1)),
      timeLine,
    };
  }
}

export default SearchResultStore;
