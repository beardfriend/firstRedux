import { Box, Title_Box } from '@Global/BasicTheme';
import { Button, Checkbox, Flex } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  SET_SIGNIN,
  postData,
  setForm,
  setIsChecked,
  signInState
} from '@Features/USER/SignInSlice';
import { useDispatch, useSelector } from 'react-redux';

import AlertMSS from '@Components/Alert/index';
import { ErrorCheck } from '../Hooks/ErrorChecks';
import InputAlert from '@Components/Form/InputAlert';
import { UserState } from '@Features/USER/UserSlice';

export const LoginBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(signInState);
  const postDatas = useSelector(postData);
  const userData = useSelector(UserState);
  const { emailState, passwordState, handleEmailCheck } = ErrorCheck();

  const handleChanges = (e) => {
    e.preventDefault();
    dispatch(setForm({ ...postDatas, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(SET_SIGNIN(postDatas));
    } catch (error) {}
  };
  useEffect(() => {
    if (data.status === 'SUCCESS') {
      history.push('/');
    }
  }, [data.status]);

  useEffect(() => {
    if (userData.user.email !== null) {
      history.push('/');
    }
  }, [history, userData.user.email]);

  useEffect(() => {
    handleEmailCheck(postDatas.email, '올바른 이메일 형식이 아닙니다.');
  }, [postDatas.email]);

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Title_Box>
      <h1>로그인</h1>
      <Box>
        <form style={{ marginTop: '50px' }} onSubmit={handleSubmit}>
          <AlertMSS msg={data.ErrorMessage.password} />
          <InputAlert
            type='email'
            name='email'
            value={postDatas.email}
            InputName='ID'
            message={emailState.msg}
            errorBol={emailState.bol}
            onChange={handleChanges}
            isNecessary
          />

          <Flex mt={2} mb={5}>
            <Checkbox
              size='sm'
              defaultIsChecked={data.isIDsave}
              onChange={() => dispatch(setIsChecked(!data.isIDsave))}
            >
              아이디저장
            </Checkbox>
          </Flex>

          <InputAlert
            type='password'
            name='password'
            value={postDatas.password}
            InputName='Password'
            message={passwordState.msg}
            errorBol={passwordState.bol}
            onChange={handleChanges}
            isNecessary
            isButtonhide
          />
          <Button
            width='100%'
            type='submit'
            mt='3rem'
            colorScheme='teal'
            isLoading={data.status === 'LOADING'}
          >
            로그인
          </Button>

          <p
            style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontWeight: 'bold',
              textDecoration: 'underline'
            }}
          >
            <Link to='/signup'>계정이 없으신가요?</Link>
          </p>
        </form>
      </Box>
    </Title_Box>
  );
};
