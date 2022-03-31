import { Message, Progress } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import { setStatusNull, signInState } from '@Features/USER/SignInSlice';
import { useDispatch, useSelector } from 'react-redux';

import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

interface props {
  readonly props?: boolean;
}
const Index = ({ msg }: any) => {
  const [value, setValue] = useState<number>(100);
  const dispatch = useDispatch();
  const data = useSelector(signInState);

  useEffect(() => {
    if (value < 0) {
      if (data.status === 'FAIL') {
        dispatch(setStatusNull());
        setTimeout(() => {
          setValue(100);
        }, 500);
      }
    }

    if (data.status === 'FAIL') {
      const helo = setInterval(() => {
        setValue((value) => value - 10);
      }, 60);
      return () => clearInterval(helo);
    }
  }, [data.status, value]);

  return (
    <>
      <Container>
        <CSSTransition
          in={data.status === 'FAIL'}
          appear={true}
          timeout={900}
          classNames='fadein'
          unmountOnExit={true}
        >
          <Message color='red'>
            <Progress percent={value} error size='tiny' />
            {msg}
          </Message>
        </CSSTransition>
      </Container>
    </>
  );
};

export default Index;

const Container = styled.div<props>`
  position: absolute;
  top: 10%;
  .fadein-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .fadein-enter-active {
    opacity: 1;
    transition: all 500ms ease;
    transform: translateY(0px);
  }

  .fadein-exit {
    opacity: 1;
    transform: translateY(0px);
  }
  .fadein-exit-active {
    opacity: 0;
    transition: all 500ms ease;
    transform: translateY(-20px);
  }
  @keyframes ani {
    to {
      opacity: 0;
      transform: translateY(0px);
    }
    from {
      opacity: 1;
      transform: translateY(-20px);
    }
  }
`;
