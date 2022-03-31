import styled, { css } from 'styled-components';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { Avatar } from '@chakra-ui/react';
import React from 'react';

interface Props {
  src: string;
  name: string;
  isChange?: boolean;
}
interface ContainerProps {
  isChange?: boolean;
}

const AvatarImage = ({ src, name, isChange }: Props) => {
  return (
    <Container isChange={isChange}>
      <label>
        <Avatar size='xl' name={name} src={src} />

        {isChange && <input type='file' style={{ display: 'none' }} accept='.jpg' />}
        {isChange && <AiOutlineUserAdd />}
      </label>
    </Container>
  );
};

export default AvatarImage;

const Container = styled.div<ContainerProps>`
  ${({ isChange }) => {
    if (isChange) {
      return css`
        label {
          position: relative;
          cursor: pointer;
        }
        svg {
          font-size: 50px;
          position: absolute;
          top: 200%;
          left: 100%;
          z-index: 10;
          transform: translate(-50%);
        }
      `;
    }
  }}
`;
