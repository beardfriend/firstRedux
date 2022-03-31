import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { Container } from '@Global/BasicTheme';

interface checkType {
  [x: string]: any;
  isChecked: boolean;
}

const CheckButton = ({ isChecked, children, ...props }: checkType) => {
  return (
    <>
      {isChecked ? (
        <Button {...props} colorScheme='teal'>
          {children}
        </Button>
      ) : (
        <Button {...props}>{children}</Button>
      )}
    </>
  );
};

const Filter = ({ data }) => {
  const [isChecked, setIsCheceked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(isChecked);
  return (
    <>
      <Button onClick={onOpen}>Filter</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {data.map((datas) => {
              return (
                <Container style={{ alignItems: 'center', marginBottom: '15px' }}>
                  <h1 style={{ fontWeight: 'bold', marginRight: '50px' }}> {datas.title}</h1>
                  {datas.title === '분류' &&
                    datas.sort.map((sortdata) => {
                      return (
                        <CheckButton
                          isChecked={isChecked}
                          onClick={() => setIsCheceked(!isChecked)}
                        >
                          {sortdata}
                        </CheckButton>
                      );
                    })}

                  {/* {datas.title === '지역' &&

                    } */}
                </Container>
              );
            })}
            {/* <Container style={{ alignItems: 'center' }}>
              <h1 style={{ fontWeight: 'bold', marginRight: '50px' }}>분류</h1>
              <CheckButton isChecked={isChecked} onClick={() => setIsCheceked(!isChecked)}>
                dd
              </CheckButton>
              <CheckButton isChecked={isChecked} onClick={() => setIsCheceked(!isChecked)}>
                dd
              </CheckButton>
              <CheckButton isChecked={isChecked} onClick={() => setIsCheceked(!isChecked)}>
                dd
              </CheckButton>
            </Container>
            <Container style={{ alignItems: 'center' }}>
              <h1 style={{ fontWeight: 'bold', marginRight: '50px' }}>지역</h1>
            </Container>
            <Container>dd</Container>
            <Container>dd</Container> */}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Filter;

Filter.defaultProps = {
  data: [
    {
      id: 1,
      title: '분류',
      sort: ['전체', '서비스', '양질']
    },
    {
      id: 1,
      title: '지역',
      sort: ['전체', '서비스', '양질']
    }
  ]
};
