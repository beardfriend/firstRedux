import { GET_USERDATA, UserState } from '@Features/USER/UserSlice';
import { Link, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@Global/BasicTheme';
import { BsFillPersonFill } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';
import { ImUserTie } from 'react-icons/im';
import { IoReceiptSharp } from 'react-icons/io5';
import styled from 'styled-components';

const HeaderPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(UserState);
  useEffect(() => {
    if (data.user.email === null) {
      history.push('/');
      return;
    }
    dispatch(GET_USERDATA());
  }, []);
  const Out = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'http://localhost:8084/api/logout';
      sessionStorage.removeItem('email');
    }
  };

  if (data.role.role === '' || data.role.role === 'NONE') {
    return (
      <>
        <Container>
          <Button colorScheme='teal' width='100%' h='50px' onClick={Out}>
            로그아웃
          </Button>
        </Container>
      </>
    );
  }
  return (
    <Container>
      <MenuBox>
        <h2>
          안녕하세요 <span style={{ marginLeft: '0.5rem' }}>{data.user.name}님</span>.
        </h2>
      </MenuBox>

      <MenuBox>
        <Link to='/mypage'>
          <BsFillPersonFill />
          <h1>마이페이지</h1>
        </Link>
      </MenuBox>
      <MenuBox>
        {data.role.role === 'CLIENT' ? (
          <Link to='/estimate/client/list'>
            <IoReceiptSharp />
            <h1>받은 견적</h1>
          </Link>
        ) : (
          <Link to='/partnerprofile'>
            <ImUserTie />
            <h1>파트너프로필</h1>
          </Link>
        )}
      </MenuBox>
      <MenuBox>
        <IoReceiptSharp />
        <Link to={data.role.role === 'CLIENT' ? '/request/list' : '/estimate/list'}>
          {data.role.role === 'CLIENT' ? <h1>나의 요청서</h1> : <h1>보낸 견적</h1>}
        </Link>
      </MenuBox>

      <Button colorScheme='teal' width='80%' h='50px' onClick={Out}>
        로그아웃
      </Button>
    </Container>
  );
};

export default HeaderPage;

const MenuBox = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 50px;
`;

const Container = styled(Box)`
  justify-content: space-around;
  width: 600px;
  min-height: 700px;
  h2 {
    font-size: 25px;
    font-weight: 800;
  }
  span {
    font-weight: 800;
    font-size: 30px;
  }
`;
