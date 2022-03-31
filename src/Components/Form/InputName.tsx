import { Formname } from '@Global/FormTheme';
import React from 'react';
import styled from 'styled-components';

interface InputNameType {
  name: string;
  isDefault?: boolean;
  children: React.ReactNode;
}

const InputName = ({ name, children, isDefault }: InputNameType) => {
  return (
    <Container>
      <Formname>
        {name}
        {!isDefault ? <span>*</span> : ''}
      </Formname>
      {children}
    </Container>
  );
};

export default InputName;

const Container = styled.section`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
