import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormHelperText,
  FormLabel,
  PinInput,
  PinInputField
} from '@chakra-ui/react';


const ArticleModal = ({isOpen, onClose}: {isOpen: boolean, onClose : ()=>void}) => {
  const [password, setPassword] = useState<string>('');

  useEffect(()=> {
    console.log(password);
  }, [password])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel htmlFor='password' fontSize="sm">비밀번호</FormLabel>
              <PinInput
                id="password"
                mask
                size="sm"
                placeholder='*'
                onChange={(value) => setPassword(value)}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            <FormHelperText fontSize="sm">수정시 필요한 비밀번호를 입력하세요.</FormHelperText>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
};

export default ArticleModal;