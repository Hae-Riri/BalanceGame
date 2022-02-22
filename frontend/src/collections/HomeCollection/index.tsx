import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import StoreContext from '@/contexts/Store';
import RootStore from '@/stores/RootStore';
import Search from '@/components/Search';

import ArticleList from '../ArticleCollection/ArticleList';

interface IHomeCollectionProps {}

const HomeCollection = () => {
  const rootStore: RootStore = useContext(StoreContext) as RootStore;
  const { homeStore: store, uiStore } = rootStore;
  const { articles } = store;

  const content = !rootStore.isLoading && articles.length > 0 ? <ArticleList articles={articles} /> : null;

  return (
    <>
      <Search uiStore={uiStore} />
      {content}
    </>
  );
};

export default observer<IHomeCollectionProps>(HomeCollection);
