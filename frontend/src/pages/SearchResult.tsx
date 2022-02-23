import React, { useContext, useEffect } from 'react';
import { when } from 'mobx';

import StoreContext from '@/contexts/Store';
import RootStore from '@/stores/RootStore';
import Section from '@/components/Section';
import Blur from '@/components/Blur';
import Header from '@/components/Header';
import SearchResultCollection from '@/collections/SearchResultCollection';
import Footer from '@/components/Footer';
import Search from '@/components/Search';
import Logo from '@/components/Logo';

const SearchResult = () => {
  const rootStore: RootStore = useContext(StoreContext) as RootStore;
  const { uiStore } = rootStore;

  useEffect(() => {
    const disposer = when(
      () => !rootStore.searchResultStore.isLoading,
      () => {
        rootStore.setIsLoading(false);
      },
    );

    rootStore.searchResultStore.fetchArticles();

    return () => {
      disposer();
    };
  }, [rootStore]);

  return (
    <Section className="search-result">
      <Blur>
        <Header className="search-result-header">
          <Logo />
          <Search uiStore={uiStore} className="search-result-wrapper" />
        </Header>

        <SearchResultCollection />

        <Footer />
      </Blur>
    </Section>
  );
};

export default SearchResult;
