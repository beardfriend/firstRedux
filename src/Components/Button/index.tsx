import { Button } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

export const Buttons = ({ children }) => {
  return <Btn colorScheme='blue'>{children}</Btn>;
};

export const TestButton = () => {
  const handleClick = async () => {
    const res = await axios.post('http://localhost:8084/oauth2/authorization/google', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    console.log(res);
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  );
};

const Btn = styled(Button)`
  width: 200px;
  height: 50px;
`;

const Div = styled.a`
  position: relative;
  z-index: 100;
`;
