import { action, flow, makeObservable, observable } from 'mobx';

import dayjs from 'dayjs';
import RootStore from '@/stores/RootStore';
import ArticleModel from '@/models/ArticleModel';
import HomeRepository from '@/repositories/HomeRepository';

class HomeStore {
  rootStore: RootStore;

  isLoading = true;

  public articles: ArticleModel[] = [];

  public timeLine: { days: string[]; timeLine: {} } = { days: [], timeLine: {} };

  public lastOffset: number = 6;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      isLoading: observable,
      articles: observable,
      timeLine: observable,
      lastOffset: observable,
      fetchArticles: flow,
      setIsLoading: action,
      setLastOffset: action.bound,
      setTimeLines: action.bound,
    });
    this.rootStore = rootStore;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setArticles(articles: any[]) {
    this.articles = articles.map((article: any) => new ArticleModel(this, article));
  }

  setTimeLines(articles: any[]) {
    this.timeLine = this.groupByDay(articles.map((article: any) => new ArticleModel(this, article)));
  }

  setLastOffset(lastOffset: number) {
    this.lastOffset = lastOffset;
  }

  async fetchArticles() {
    this.setIsLoading(true);
    this.reset();

    try {
      const response = await HomeRepository.getArticle('');
      this.setArticles(response[0].data.data);
      const articleLength = response[0].data.data.length - 1;
      this.setLastOffset(response[0]?.data?.data[articleLength]?.id || undefined);
      this.timeLine = this.groupByDay(this.articles);
    } catch (e) {
      // TODO: handle error
      // eslint-disable-next-line no-console
      console.error(e);
    }

    this.setIsLoading(false);
  }

  reset() {
    const defaultCategory = this.rootStore.uiStore.categories[0] as string;

    this.lastOffset = 6;
    this.timeLine = { days: [], timeLine: {} };
    this.rootStore.searchResultStore.searchKeyword = '';
    this.rootStore.uiStore.setSelectedCategory(defaultCategory);
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

export default HomeStore;
