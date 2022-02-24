import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import StoreContext from '@/contexts/Store';
import RootStore from '@/stores/RootStore';
import Article from '@/components/Article';

interface IArticleCollectionProps {}

const ArticleCollection = () => {
  // 이렇게 사용하면 전달할 수 있다. 
  const rootStore: RootStore = useContext(StoreContext) as RootStore;
  const { articleStore } = rootStore;
  
  return (
      <Article store={articleStore}/>
  );
};

export default observer<IArticleCollectionProps>(ArticleCollection);
