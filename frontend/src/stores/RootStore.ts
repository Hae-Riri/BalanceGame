import { action, makeObservable, observable } from 'mobx';

import HomeStore from '@/stores/HomeStore';
import UIStore from '@/stores/UIStore';
import SearchResultStore from './SearchResultStore';
import AriticleStore from './ArticleStore';

class RootStore {
  homeStore: HomeStore;

  searchResultStore: SearchResultStore;

  articleStore: AriticleStore;

  uiStore: UIStore;

  isLoading = true;

  constructor() {
    this.homeStore = new HomeStore(this);
    this.uiStore = new UIStore(this);
    this.searchResultStore = new SearchResultStore(this);
    // 등록
    this.articleStore = new AriticleStore(this);

    makeObservable(this, {
      isLoading: observable,
      setIsLoading: action,
    });
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export default RootStore;
