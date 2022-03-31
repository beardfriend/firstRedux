import {
  GET_MYPAGEDATA,
  SET_MYPAGE,
  mypageState,
  setCurrentData,
  setFormData
} from '@Features/MYPAGE/Mypageslice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AvatarImage from '@Components/Form/AvatarImage';
import { Box } from '@Global/BasicTheme';
import ChangePassword from './ChangePassword';
import InputChange from '@Components/Form/InputChange';
import { MainLayout } from '@Components/Layout';
import styled from 'styled-components';
import { useDisclosure } from '@chakra-ui/react';

const Mypage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isChange, setIsChange] = useState(false);

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const dispatch = useDispatch();
  const data = useSelector(mypageState);

  useEffect(() => {
    if (data.status === 'SUCCESS' || data.status === 'LOADING') {
      return;
    }
    dispatch(GET_MYPAGEDATA());
  }, [data.status]);

  const changeName = () => {
    setIsChange(!isChange);
    if (data.name === data.formData.name) {
      return;
    }
    dispatch(setCurrentData());
    if (isChange === true) {
      dispatch(SET_MYPAGE({ email: data.formData.name, phoneNum: data.formData.phone }));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setFormData(e.target.value));
  };

  return (
    <MainLayout middle='middle' login>
      <InputContainer>
        <h1>My page</h1>
        <AvatarImage
          name='jack'
          src='https://post-phinf.pstatic.net/MjAyMDEwMjdfMTI1/MDAxNjAzNzgxNjU1MTU1.83f91AAlRcnWwldW0IbN25q12NLEtoyTQ_Nr4bq4WXAg.8j4iRL_wPGaMDgJkQpARjhh6WjzIzVRtfsqVqNe2Mq8g.JPEG/121609901_191204092517872_7257056504530801338_n.jpg?type=w1200'
        />
        <InputChange
          title='ID'
          name='email'
          value={data.email}
          isButtonhide
          isReadOnly
          isLoading={data.status === 'LOADING'}
        />

        <InputChange
          title='비밀번호'
          type='password'
          onClick={onOpen}
          isReadOnly
          isLoading={data.status === 'LOADING'}
        />
        <ChangePassword
          finalRef={finalRef}
          initialRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        />

        <InputChange
          title='이름(닉네임)'
          name='name'
          value={isChange ? data.formData.name : data.name}
          onChange={handleChange}
          isUpdate={!isChange}
          isReadOnly={!isChange}
          onClick={changeName}
          isLoading={data.status === 'LOADING'}
        />

        <InputChange
          title='휴대전화 번호'
          type='tel'
          value='🚧준비중입니다..'
          isReadOnly
          isLoading={data.status === 'LOADING'}
        />
      </InputContainer>
    </MainLayout>
  );
};

export default Mypage;

const InputContainer = styled(Box)`
  section {
    width: 80%;
  }
  gap: 20px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
