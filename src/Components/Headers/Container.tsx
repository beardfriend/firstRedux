import styled, { css } from 'styled-components';

import { Head_Foot } from '@Global/BasicTheme';
import LeftSection from './LeftSection';
import React from 'react';
import RightSection from './RightSection';

interface props {
  readonly isFixed?: boolean;
}
const Container = ({ isFixed }) => {
  return (
    <HeaderContainer isFixed={isFixed}>
      <LeftSection />
      <RightSection />
    </HeaderContainer>
  );
};

export default Container;

const HeaderContainer = styled.header<props>`
  ${({ isFixed }) => {
    if (isFixed) {
      return css`
        position: absolute;
      `;
    } else {
      return css`
        position: sticky;
        opacity: 0.8;
      `;
    }
  }}

  top: 0;
  z-index: 99;
  height: 70px;
  ${Head_Foot};
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.875rem;
  img {
    max-width: 3.125rem;
  }
`;
