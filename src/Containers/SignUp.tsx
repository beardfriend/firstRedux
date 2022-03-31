import { Box, Title_Box } from '@Global/BasicTheme';
import React, { useEffect } from 'react';
import { SET_SIGNUP, SignUpState, setFormData } from '@Features/USER/SignUpSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@chakra-ui/react';
import { ErrorCheck } from '../Hooks/ErrorChecks';
import InputAlert from '@Components/Form/InputAlert';
import { MainLayout } from '@Components/Layout/index';
import { UserState } from '@Features/USER/UserSlice';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const {
    emailState,
    passwordState,
    nameState,
    repasswordState,
    handleEmailCheck,
    handlePasswordCheck,
    handleNameCheck,
    handleRepasswordCheck
  } = ErrorCheck();

  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector(SignUpState);
  const userData = useSelector(UserState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      SET_SIGNUP({
        email: data.signUpPost.email,
        name: data.signUpPost.name,
        password: data.signUpPost.password
      })
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setFormData({ ...data.signUpPost, [e.target.name]: e.target.value }));
  };

  //button disable
  const handleDisable = () => {
    const { email, password, name, repassword } = data.signUpPost;
    if (
      email.length === 0 ||
      password.length === 0 ||
      name.length === 0 ||
      repassword?.length === 0
    ) {
      return true;
    }
    if (emailState.bol || nameState.bol || passwordState.bol || repasswordState.bol) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (data.status === 'SUCCESS') {
      history.push('/usertype');
    }
  }, [data.status]);

  useEffect(() => {
    if (userData.user.email === null) {
      history.push('/');
    }
  }, [userData.user.email, history]);

  useEffect(() => {
    handleEmailCheck(data.signUpPost.email, '이메일 형식을 확인해주세요.');
    handlePasswordCheck(
      data.signUpPost.password,
      '특수문자, 숫자, 영문을 포함 8자리 이상 입력해주세요.'
    );
    handleNameCheck(data.signUpPost.name, '3글자 이상 입력해주세요.');
    handleRepasswordCheck(data.signUpPost.repassword, '비밀번호가 일치하지 않습니다.');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    data.signUpPost.email,
    data.signUpPost.password,
    data.signUpPost.name,
    data.signUpPost.repassword
  ]);

  return (
    <>
      <MainLayout middle='middle' login>
        <Title_Box>
          <h1>회원가입</h1>
          <Box>
            <form onSubmit={handleSubmit}>
              <InputAlert
                type='email'
                name='email'
                placeholder='example@email.com'
                InputName='ID'
                errorBol={emailState.bol}
                value={data.signUpPost.email}
                onChange={handleChange}
                finish={data.signUpPost.email === '' ? false : !emailState.bol}
                message={emailState.msg}
                maxLength={30}
              />

              <InputAlert
                type='text'
                name='name'
                InputName='이름'
                value={data.signUpPost.name}
                onChange={handleChange}
                errorBol={nameState.bol}
                finish={data.signUpPost.name === '' ? false : !nameState.bol}
                placeholder='실명을 입력해주세요'
                message={nameState.msg}
                maxLength={8}
              />
              <InputAlert
                name='password'
                placeholder='비밀번호 입력'
                InputName='비밀번호'
                type='password'
                value={data.signUpPost.password}
                onChange={handleChange}
                errorBol={passwordState.bol}
                finish={data.signUpPost.password === '' ? false : !passwordState.bol}
                message={passwordState.msg}
                maxLength={20}
              />
              <InputAlert
                name='repassword'
                placeholder='비밀번호 재입력'
                InputName='비밀번호 재입력'
                type='password'
                value={data.signUpPost.repassword}
                onChange={handleChange}
                errorBol={repasswordState.bol}
                isDisabled={data.signUpPost.password === '' ? true : passwordState.bol}
                finish={data.signUpPost.repassword === '' ? false : !repasswordState.bol}
                message={repasswordState.msg}
                maxLength={20}
              />
              <Button
                colorScheme='teal'
                isLoading={data.status === 'LOADING'}
                isDisabled={handleDisable()}
                width='100%'
                type='submit'
                mt='3rem'
              >
                회원가입
              </Button>
            </form>
          </Box>
        </Title_Box>
      </MainLayout>
    </>
  );
};

export default Signup;
