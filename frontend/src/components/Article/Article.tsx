import React from 'react';
import {
  Container, VStack, Text, Grid,
  GridItem,
  Textarea,
  Button,
  Flex,
  Divider,
  Center
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

import CommentList from '@/components/CommentList';
import AriticleStore from '@/stores/ArticleStore';

interface IArticlesProp {
  articleId: String;
  title: String;
  voteItem1: String;
  voteItem2: String;
  content: String;
}

const dummy: IArticlesProp = {
  "articleId": '1',
  "title": "당신은 프론트엔드 개발자입니다 .당신은 누구입니까? 당신의 이름은 무엇인가요?",
  "voteItem1": "박찬우",
  "voteItem2": "이호찬",
  "content": "둘 중 하나를 택하세요 안그러면 죽습니다."
}

interface IArticleProp {
  store: AriticleStore;
}

const Article = ({ store } : IArticleProp) => {
  const { comments } = store;

  return (
      <>
          <Container p={2}>
            
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
          <Center mb={3}>
            <Divider borderWidth={2} mt={3} w="80%"/>
          </Center>
          <section className="time-line">
            <CommentList comments={comments} />
            <div className="time-line__read-more">+ read more</div>
          </section>
      </>
  );
}

export default observer<IArticleProp>(Article);