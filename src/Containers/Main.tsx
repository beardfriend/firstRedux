import { Button } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
export const SectionFirst = () => {
  return (
    <>
      <Section>
        <h1>
          철거, 원상복구, 정리 견적을
          <br />
          쉽고 빠르게 받아보세요
        </h1>
        <p>받은 견적서를 비교해 최적의 비용을 선택하세요.</p>
        <Button colorScheme='teal' w='300px' h='70px'>
          견적 요청하기
        </Button>
      </Section>
    </>
  );
};

export const SectionSecond = () => {
  return (
    <>
      <SectionTwo>
        <h1>
          더 많은 고객을 만나고 싶으신가요?
          <br />
          무료로 고객들의 요청서를 확인하고,
          <br />
          자유롭게 연락해보세요
        </h1>
        <Button colorScheme='teal' w='300px' h='70px'>
          파트너 가입하기
        </Button>
      </SectionTwo>
    </>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  min-height: 100vh;

  padding-left: 150px;
  justify-content: center;
  background: #ededed;
  h1 {
    font-weight: 700;
    font-size: 50px;
  }
  p {
    font-size: 20px;
  }
  button {
    font-size: 20px;
  }
`;

const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-right: 150px;
  justify-content: center;

  h1 {
    font-weight: 700;
    align-self: flex-end;
    font-size: 50px;
  }
  button {
    align-self: flex-end;
    font-size: 20px;
  }
  min-height: 100vh;
  background: white;
`;
