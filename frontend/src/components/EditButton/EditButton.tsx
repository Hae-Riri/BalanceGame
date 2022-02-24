import React from 'react';
import {
  ChakraProvider,
  IconButton,
  useDisclosure,
  UseDisclosureReturn
} from '@chakra-ui/react';
import { MdAddCircleOutline } from 'react-icons/md';
import EditModal from '../EditModal';

const EditButton = () => {
  const { isOpen, onOpen, onClose }: UseDisclosureReturn = useDisclosure();

  return (
    <ChakraProvider>
      <IconButton aria-label='질문등록' onClick={onOpen} icon={<MdAddCircleOutline />} size="lg" />
      <EditModal onClose={onClose} isOpen={isOpen} />
    </ChakraProvider>
  );
}

export default EditButton;
