import React from 'react';

import {Flex, Link, ChakraProvider } from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';

import {MdChevronLeft} from 'react-icons/md'
import Blur from '@/components/Blur';
import Section from '@/components/Section';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import ArticleRegistForm from '@/components/ArticleForm';
import Header from '@/components/Header';

const ArticleRegist = () => {
    return (
      <ChakraProvider>
      <Section className="home">
      <Blur>
        <Header>
          <Flex align="center">
              <Link as={RouterLink} to="/">
                <MdChevronLeft fontSize="20px"/>
              </Link>
              <Title text="질문 등록하기" />    
          </Flex>
        </Header>
        <ArticleRegistForm />
        <Footer/>
      </Blur>
    </Section>
    </ChakraProvider>
  );
}

export default ArticleRegist;