import React, { useState } from 'react';
import {
  Container, VStack, Text, Grid,
  GridItem,
  Textarea,
  Button,
  Flex,
  IconButton,
  // useDisclosure
} from '@chakra-ui/react';
import {ArrowLeftIcon, ArrowRightIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { observer } from 'mobx-react-lite';
import AriticleStore from '@/stores/ArticleStore';
import UIStore from '@/stores/UIStore';
// import ArticleModal from '../ArticleModal';

interface IArticleProp {
  store: AriticleStore;
  uiStore: UIStore;
}

const Article = ({ store, uiStore } : IArticleProp) => {
  // const { isOpen, onClose } = useDisclosure();
  const { article } = store;
  const { selectedArticleId} = uiStore;
  const [voted, setVoted] = useState<boolean>(false);
  const [selectedVote, selectVote] = useState<string>("");

  const enterOtherArticle = (offset: number): void => {
    document.location.href = `/article?articleId=${selectedArticleId + offset}`;
  };

  const enterEditArticle = (): void => {
    document.location.href = `/article/edit?articleId=${selectedArticleId}`;
  }

  const vote = (clickedVote: string) : void => {
      if(!voted){
        setVoted(true);
        selectVote(clickedVote);
        // TODO : 선택한 vote에 대한 전달 및 post 수행
      }
  }

  return (
    <>
      <VStack w="100%">
        <Container marginTop={5} marginBottom={3} pr={0}>
          <Flex justify="center" align="center">
              <Text fontSize='lg' align="center" fontWeight="700">Q. {article.title}</Text>
              <IconButton
                variant="unstyled"
                aria-label='wow'
                borderRadius="none"
                p={0} ml={2} mr={0}
                icon={<EditIcon/>}
                onClick={enterEditArticle}
              />
            </Flex>
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
              bg={voted ? "gray.200": "red.100"}
              as={voted ? "div": "button"}
              paddingTop={2}
              paddingBottom={2}
              borderRadius="md"
              borderWidth={0}
              borderColor="red"
              h="full"
              display="flex"
              alignItems="center"
              onClick={()=>vote("voteItem1")}
            >
              <VStack w="full">
                {
                  article.voteItem1?.split("\n").map((text) => {
                    return <Text fontSize="sm" color="red.500" w="full" align="center">{text}</Text>
                  })
                }
                {
                  voted && (
                    <Text fontSize="2xl" color="red.500" w="full" align="center">{article.item1stat}표</Text>
                  )
                }
                {
                  selectedVote === "voteItem1" && (
                    <CheckIcon color='green.500'/>
                  )
                }
              </VStack>
            </Container>
          </GridItem>
          <GridItem overflowX="auto">
            <Container
              bg={voted ? "gray.200": "blue.100"}
              as={voted ? "div": "button"}
              paddingTop={2}
              paddingBottom={2}
              borderRadius="md"
              h="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={()=>vote("voteItem2")}
            >
              <VStack w="full">
                {
                  article.voteItem2?.split("\n").map((text) => {
                    return <Text fontSize="sm" color="blue.500" w="full" align="center">{text}</Text>
                  })
                }
                {
                  voted && (
                    <Text fontSize="2xl" color="blue.500" w="full" align="center">{article.item2stat}표</Text>
                  )
                }
                {
                  selectedVote === "voteItem2" && (
                    <CheckIcon color='green.500'/>
                  )
                }
              </VStack>
            </Container>
          </GridItem>
        </Grid>
        <Container bg="gray.300">
          <Textarea 
            disabled 
            h="max-content" 
            size="sm" 
            variant="unstyled" 
            value={article.content as string} 
            borderRadius="sm" 
          />
        </Container>
      </VStack>
      <Flex justify="space-between" marginX={4} marginTop={1}>
        <Button 
          size="xs" 
          variant="ghost" 
          bg="lavender" 
          leftIcon={<ArrowLeftIcon />}
          onClick={()=>enterOtherArticle(-1)}
        >이전 질문</Button>
        <Button 
          size="xs" 
          variant="ghost" 
          bg="lavender" 
          rightIcon={<ArrowRightIcon />}
          onClick={()=>enterOtherArticle(1)}
        >다음 질문</Button>
      </Flex>
      {/* <ArticleModal isOpen={isOpen} onClose={onClose}/> */}
    </>
  );
}

export default observer<IArticleProp>(Article);