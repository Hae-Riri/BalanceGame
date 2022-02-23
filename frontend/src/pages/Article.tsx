import React from 'react';

import {
  Container, VStack, Text, Grid,
  GridItem,
  Textarea,
  ChakraProvider,
  Button,
  Flex
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import Blur from '@/components/Blur';
import Section from '@/components/Section';
import Title from '@/components/Title';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface IArticleProp {
  articleId: String;
  title: String;
  voteItem1: String;
  voteItem2: String;
  content: String;
}

const dummy: IArticleProp = {
  "articleId": '1',
  "title": "당신은 프론트엔드 개발자입니다 .당신은 누구입니까? 당신의 이름은 무엇인가요?",
  "voteItem1": "박찬우",
  "voteItem2": "이호찬",
  "content": "둘 중 하나를 택하세요 안그러면 죽습니다."
}

const Article = () => {

  return (
    <ChakraProvider>
      <Section className="article">
        <Blur>
          <Header>
            <Grid templateColumns="1fr 3fr 1fr" alignItems="center">
              <Flex h="100%" alignItems="center">
                <Link to="/#">
                  <ArrowBackIcon boxSize={6} />
                </Link>
              </Flex>
              <Title text="11st Balance Game" />
            </Grid>
          </Header>

          <Container>
            <VStack w="100%">
              <Container marginTop={5} marginBottom={3}>
                <Text fontSize='lg' align="center" fontWeight="700">Q. {dummy.title}</Text>
              </Container>
              <Grid
                templateColumns="1fr 1fr"
                gap={1}
                h="max-content"
                minH={180}
                w="100%"
              >
                <GridItem overflowX="auto">
                  <Container
                    bg="red.100"
                    paddingTop={2}
                    paddingBottom={2}
                    borderRadius="md"
                    borderWidth={0}
                    borderColor="red"
                    as="button"
                    h="full"
                    display="flex"
                    alignItems="center"
                  >
                    <VStack w="full">
                      {
                        dummy.voteItem1?.split("\n").map((text) => {
                          return <Text fontSize="sm" color="red.500" w="full" align="center">{text}</Text>
                        })
                      }
                    </VStack>
                  </Container>
                </GridItem>
                <GridItem overflowX="auto">
                  <Container
                    bg="blue.100"
                    paddingTop={2}
                    paddingBottom={2}
                    borderRadius="md"
                    as="button"
                    h="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack w="full">
                      {
                        dummy.voteItem2?.split("\n").map((text) => {
                          return <Text fontSize="sm" color="blue.500" w="full" align="center">{text}</Text>
                        })
                      }
                    </VStack>
                  </Container>
                </GridItem>
              </Grid>
              <Container bg="gray.300">
                <Textarea disabled size="sm" variant="unstyled" value={dummy.content as string} borderRadius="sm" />
              </Container>
            </VStack>
          </Container>

          <Flex justify="space-between" marginX={4} marginTop={1}>
            <Button size="xs" variant="ghost" bg="lavender" leftIcon={<ArrowLeftIcon />}>이전 질문</Button>
            <Button size="xs" variant="ghost" bg="lavender" rightIcon={<ArrowRightIcon />}>다음 질문</Button>
          </Flex>
          <Footer />
        </Blur>
      </Section>
    </ChakraProvider >
  );
}

export default Article;