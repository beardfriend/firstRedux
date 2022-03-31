import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { UserState } from '@Features/USER/UserSlice';
import styled from 'styled-components';

const RightSection = () => {
  const [user, setUser] = useState(sessionStorage.getItem('email'));

  if (user) {
    return (
      <>
        <NavContainer>
          <Link to='/hello'>{user}</Link>
        </NavContainer>
      </>
    );
  }
  return (
    <NavContainer>
      {!user && (
        <>
          <Link to='/signup'>회원가입</Link>

          <Link to='/login'>로그인</Link>
        </>
      )}
    </NavContainer>
  );
};

export default RightSection;

const NavContainer = styled.nav`
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
