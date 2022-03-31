import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

import InputChange from '@Components/Form/InputChange';
import React from 'react';

const ChangePassword = ({ isOpen, onClose, initialRef, finalRef }) => {
  return (
    <>
      <Modal
        isCentered
        size='xl'
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>🚧준비중입니다...</ModalHeader>
          <ModalHeader textAlign='center'>비밀번호 설정</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <InputChange title='현재 비밀번호' value='' isButtonhide isReadOnly />
            <InputChange title='새로운 비밀번호' value='' isButtonhide isReadOnly />
            <InputChange title='새로운 비밀번호 재입력' value='' isButtonhide isReadOnly />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              취소
            </Button>
            <Button colorScheme='blue'>변경하기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangePassword;
