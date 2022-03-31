import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react';

import React from 'react';

interface ModalType {
  type: 'Delete' | 'Finish';
  onClick?: () => void;
}

const Modal = ({ type, onClick }: ModalType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: React.RefObject<any> | null = React.useRef();
  return (
    <>
      <Button onClick={onOpen} colorScheme='teal' w='100%' mt='20px' height='50px'>
        {type === 'Finish' && <>마감하기</>}
        {type === 'Delete' && <>삭제하기</>}
      </Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size='2xl'
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader></AlertDialogHeader>
          <AlertDialogCloseButton />

          <AlertDialogBody style={{ fontWeight: 'bold', textAlign: 'center' }} p={10}>
            {type === 'Finish' && (
              <>
                견적 요청이 완료처리되고 파트너들의 견적서를 받을 수 없습니다.
                <br />
                마감하시겠습니까?
              </>
            )}
            {type === 'Delete' && <>정말로 삭제하시겠습니까?</>}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              취소
            </Button>
            <Button colorScheme='red' ml={3} onClick={onClick}>
              {type === 'Finish' && <>마감하기</>}
              {type === 'Delete' && <>삭제하기</>}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Modal;

Modal.defaultProps = {
  type: 'Finish'
};
