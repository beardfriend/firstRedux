import React, { useEffect } from 'react';
import { SectionFirst, SectionSecond } from '@Containers/Main';
import { useDispatch, useSelector } from 'react-redux';

import Headers from '@Components/Headers';
import ReactPageScroller from 'react-page-scroller';
import { signInState } from '@Features/USER/SignInSlice';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const getSession = sessionStorage.getItem('email'); //로컬스토리지로 바꿔도 될듯
  const data = useSelector(signInState);

  // const checkUser = async () => {
  //   if (!getSession) return;
  //   try {
  //     const res = await getUserInfoAPI();
  //     console.log(res.data);
  //     console.log('sucess');
  //   } catch (error) {
  //     console.log(error);
  //     console.log('err');
  //   }
  // };
  // useEffect(() => {
  //   checkUser();
  //   console.log('hi');
  // }, []);
  //로그인 회원가입 시 데이터 조회.
  // useEffect(() => {
  //   if (data.SUCCESS || datas.SUCCESS) {
  //     dispatch(getUserData());
  //   }
  // }, []);

  // useEffect(() => {
  //   if (data.userData.email.length === 0 && getSession !== null) {
  //     dispatch(getUserData());
  //   }
  // }, []);
  // 새로고침 했을 때, redux가 다 날라간다. 새로고침 했을

  //세션에 데이터가 있는데, redux에 값이 있으면 조회를 안하면 좋다. -> role으로 판단할 것인지 ?
  // useEffect(() => {}, [data.role.role]);
  // const getSession = sessionStorage.getItem('email');
  // console.log(getSession);
  // 세션스토리지에 값이 들어 있으면, 데이터 조회를 안 한다.
  // cookie에 값이 없으면,
  // useEffect(() => {
  //   if (data.role.role === 'NONE') {
  //     if (data.isSetUser === true) {
  //       return;
  //     }
  //     history.push('/usertype');
  //   }
  // }, [data.role.role]);

  return (
    <>
      <Headers isFixed={true} />
      <Div>
        <ReactPageScroller>
          <SectionFirst />
          <SectionSecond />
        </ReactPageScroller>
      </Div>
    </>
  );
};

export default Main;

const Div = styled.div`
  animation: apper 500ms ease;
  @keyframes apper {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transition: all 500ms;
      transform: translateY(0);
    }
  }
`;
