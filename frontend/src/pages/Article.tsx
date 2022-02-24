import React, {useContext, useEffect}from 'react';
import { when } from 'mobx';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Blur from '@/components/Blur';
import Section from '@/components/Section';
import Title from '@/components/Title';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RootStore from '@/stores/RootStore';
import StoreContext from '@/contexts/Store';

import ArticleCollection from '@/collections/ArticleCollection';
import Logo from '@/components/Logo';

const Article = () => {
  const rootStore: RootStore = useContext(StoreContext) as RootStore;

  useEffect(() => {
    const disposer = when(
      () => !rootStore.articleStore.isLoading,
      () => {
        rootStore.setIsLoading(false);
      },
    );

    rootStore.articleStore.fetchArticle();
    return () => {
      disposer();
    };
  }, [rootStore]);

  return (
    <ChakraProvider>
      <Section className="article">
        <Blur>
          <Header className="search-result-header">
              <Logo />
              <Title text="11st Balance Game" />
          </Header>

          <ArticleCollection />
          <Footer />
        </Blur>
      </Section>
    </ChakraProvider >
  );
}

export default Article;