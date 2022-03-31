import styled, { css } from 'styled-components';

import Footer from '@Components/Footer';
import { Head_Foot } from '@Global/BasicTheme';
import Header from '@Components/Headers';
import React from 'react';

interface Props {
  readonly height?: string;
  readonly middle?: string;
  readonly center?: boolean;
  readonly login?: boolean;
  readonly MM?: boolean;
  readonly isFixed?: boolean;
}

interface LayoutProps {
  middle?: string;
  login?: boolean;
  center?: boolean;
  children?: React.ReactNode;
  isFixed?: boolean;
  MM?: boolean;
  isMain?: boolean;
}

//html
export const MainLayout = ({ children, middle, login, isMain, MM, isFixed }: LayoutProps) => {
  return (
    <FlexContainer>
      <Header isFixed={isFixed} />
      <Main middle={middle} login={login} MM={MM} isFixed={isFixed}>
        {children}
      </Main>

      {!isMain && (
        <FooterContainer>
          <Footer />
        </FooterContainer>
      )}
    </FlexContainer>
  );
};

//css
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main<Props>`
  ${({ isFixed }) => {
    if (isFixed === true) {
      return css`
        margin-top: 0;
      `;
    } else {
      return css`
        position: relative;
        margin-top: -70px;
      `;
    }
  }}
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
  flex: 1;
  background: ${(props) => props.login && '#fafafa'};
  @keyframes gradi {
    0% {
      background-position: 100% 0;
    }
    50% {
      background-position: 0 100%;
    }
    to {
      background-position: 100% 0;
    }
  }
  ${({ middle }) => {
    if (middle === 'middle') {
      return css`
        padding: 6rem 0;
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
      `;
    } else {
      return null;
    }
  }};

  ${({ MM }) => {
    if (MM === true) {
      return css`
        background-size: 400% 400%;
        animation: gradi 20s ease infinite;
        animation: apper 500ms ease;
        background-image: linear-gradient(
          240deg,
          rgb(35, 130, 132),
          rgb(191, 248, 242),
          rgb(118, 212, 211),
          rgb(29, 110, 113)
        );
      `;
    }
  }}
`;

export const FooterContainer = styled.footer<Props>`
  ${Head_Foot};

  flex-direction: column;
  background: #222222 !important;
  min-height: ${(props) => props.height || '300px'};
`;
