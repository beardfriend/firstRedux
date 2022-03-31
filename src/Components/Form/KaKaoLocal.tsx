import { Button, Input } from '@chakra-ui/react';
import { f_aC, fc_aC } from '@Global/BasicTheme';

import { Formname } from '@Global/FormTheme';
import KaKaoPost from './KakaoPost';
import React from 'react';
import styled from 'styled-components';

interface ChakraType {
  onClose: () => void;
  isOpen: boolean;
  onOpen: () => void;
  name?: string | undefined;
}

interface InputType {
  onCompletePost: (data: any) => void;
  addressCode: string | undefined;
  address: string | undefined;
  addressLine: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  addressLineName: string | undefined;
}

const KaKaoLocal = ({
  onClose,
  isOpen,
  onOpen,
  addressCode,
  address,
  isDisabled,
  addressLine,
  onChange,
  onCompletePost,
  name,
  addressLineName
}: ChakraType & InputType) => {
  return (
    <>
      <KaKaoPost onClose={onClose} isOpen={isOpen} onCompletePost={onCompletePost} />
      <FlexBox>
        <Formname>
          {name}
          <span>*</span>
        </Formname>
        <Flex>
          <Input value={addressCode} readOnly />
          <Button type='button' key='xl' colorScheme='teal' onClick={onOpen}>
            🔎주소검색
          </Button>
        </Flex>
        <Input value={address} readOnly />

        <Input
          isDisabled={!isDisabled}
          placeholder='상세주소 입력'
          value={addressLine}
          name={addressLineName}
          onChange={onChange}
        />
      </FlexBox>
    </>
  );
};

export default KaKaoLocal;

const FlexBox = styled.div`
  ${fc_aC}
  width:80%;
  gap: 10px;
`;
const Flex = styled.div`
  ${f_aC}
  width:100%;
  gap: 20px;
`;

KaKaoLocal.defaultProps = {
  addressLine: '',
  name: '카카오'
};
