import React, { useContext, useEffect } from 'react';
import { when } from 'mobx';

import Blur from '@/components/Blur';
import Section from '@/components/Section';
import Title from '@/components/Title';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RootStore from '@/stores/RootStore';
import StoreContext from '@/contexts/Store';
import EditButton from '@/components/EditButton';
import HomeCollection from '@/collections/HomeCollection';
import Logo from '@/components/Logo';

const Home = () => {
  const rootStore: RootStore = useContext(StoreContext) as RootStore;

  useEffect(() => {
    const disposer = when(
      () => !rootStore.homeStore.isLoading,
      () => {
        rootStore.setIsLoading(false);
      },
    );

    rootStore.homeStore.fetchArticles();

    return () => {
      disposer();
    };
  }, [rootStore]);

  return (
    <Section className="home">
      <Blur>
        <Header className="search-result-header">
          <Logo />
          <Title text="Balance Game" />
        </Header>
        
        <Search />

        <br />

        <EditButton />

        <HomeCollection />
        <Footer />
      </Blur>
    </Section>
  );
};

export default Home;
