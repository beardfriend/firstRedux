import React, { useEffect } from 'react';
import { SET_ROLE_CLIENT, SET_ROLE_PARTNER, UserState } from '@Features/USER/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

import { MainLayout } from '@Components/Layout';
import Spinners from '@Components/Loading/Spinner';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const SelectUser = () => {
  const history = useHistory();
  const data = useSelector(UserState);
  const dispatch = useDispatch();

  const handleSetClient = () => {
    dispatch(SET_ROLE_CLIENT(data.user.email));
  };

  const handleSetPartner = () => {
    dispatch(SET_ROLE_PARTNER(data.user.email));
  };

  useEffect(() => {
    if (data.roleStatus === 'SUCCESS') {
      history.push('/');
    }
  }, [data.roleStatus]);

  if (data.roleStatus === 'LOADING') {
    return <Spinners />;
  }
  return (
    <MainLayout>
      <Container>
        <h1>회원 유형 선택</h1>
        <Col>
          <button onClick={handleSetClient}>
            <div>
              <img src='user.png' alt='user' />
              <h1>사용자</h1>
              <p>사용자입니다</p>
            </div>
          </button>
          <button onClick={handleSetPartner}>
            <div>
              <img src='partner.png' alt='partner' />
              <h1>파트너</h1>
              <p>파트너입니다.</p>
            </div>
          </button>
        </Col>
      </Container>
    </MainLayout>
  );
};

export default SelectUser;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-top: 3rem;
    font-size: 4rem;
    font-weight: bold;
  }
`;
const Col = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5rem 5rem;
  div {
    width: 500px;
    height: 500px;
    background: white;
    filter: brightness(95%);
    padding: 50px 0;
    h1 {
      font-size: 3.125rem;
      font-weight: bold;
    }
    * {
      margin-top: 20px;
    }
  }
  div:hover {
    background: #81dad6;
    color: white;
    cursor: pointer;
    img {
      filter: invert(100%);
    }
  }
  img {
    width: 50%;
    margin: 0 auto;
  }
`;
