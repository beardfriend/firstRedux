import { BadegBox } from '@Global/BasicTheme';
import { Formname } from '@Global/FormTheme';
import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import styled from 'styled-components';

interface Props {
  name: string;
  children: React.ReactNode;
  isLoading?: boolean;
}
const InputEtcBox = ({ name, children, isLoading }: Props) => {
  return (
    <>
      {isLoading ? (
        <Skeleton height='50' width='80%' />
      ) : (
        <Section>
          <Formname>
            {name}
            <span>*</span>
          </Formname>
          <BadegBox>{children}</BadegBox>
        </Section>
      )}
    </>
  );
};

export default InputEtcBox;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  gap: 10px;
  width: 80%;
`;
