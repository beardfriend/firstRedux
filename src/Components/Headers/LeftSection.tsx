import { Link } from 'react-router-dom';
import React from 'react';
import { UserState } from '@Features/USER/UserSlice';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const LeftSection = () => {
  const data = useSelector(UserState);

  if (data.role.role === 'PARTNER') {
    return (
      <NavContainer>
        <Link to='/'>
          <img src='/logo512.png' alt='logo' />
        </Link>

        <Link to='/request/partner/list'>요청서 보기</Link>
        <Link to='/estimate/list'>보낸견적</Link>
      </NavContainer>
    );
  }
  if (data.role.role === 'CLIENT') {
    return (
      <NavContainer>
        <Link to='/'>
          <img src='/logo512.png' alt='logo' />
        </Link>

        <Link to='/estimate/client/list'>받은 견적</Link>
        <Link to='/request/add'>요청서 작성</Link>
      </NavContainer>
    );
  }

  return (
    <NavContainer>
      <Link to='/'>
        <img src='/logo512.png' alt='logo' />
      </Link>
    </NavContainer>
  );
};

export default LeftSection;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  a,
  button {
    margin-left: 36px;
    font-weight: 400;
    color: #323232;
    font-size: 16px;
  }
  .notmargin {
    margin: 0;
  }
`;
