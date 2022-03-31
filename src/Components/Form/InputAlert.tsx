import { Button, Input, InputGroup, InputRightElement, Skeleton } from '@chakra-ui/react';
import React, { useState } from 'react';

import { CheckIcon } from '@chakra-ui/icons';
import { Formname } from '@Global/FormTheme';
import styled from 'styled-components';

interface InputType {
  errorBol: boolean;
  InputName: string;
  message: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  finish?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  maxLength?: number | undefined;
  isNecessary?: boolean;
  isButtonhide?: boolean;
  isLoading?: boolean;
}

const InputAlert = ({
  name,
  errorBol,
  message,
  InputName,
  placeholder,
  type,
  value,
  onChange,
  finish,
  isDisabled,
  isReadOnly,
  maxLength,
  isNecessary,
  isButtonhide,
  isLoading
}: InputType) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleSelect = (e) => e.target.select();

  return (
    <>
      <Container>
        <Formname>
          {!isNecessary ? <>{InputName}</> : <h1>{InputName}</h1>}
          {!isNecessary && <span>*</span>}
        </Formname>
        {isLoading ? (
          <Skeleton height='40px' width='100%' />
        ) : (
          <InputGroup size='md'>
            <Input
              onFocus={handleSelect}
              placeholder={placeholder}
              name={name}
              isInvalid={errorBol}
              type={show ? 'text' : type}
              value={value}
              onChange={onChange}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              maxLength={maxLength}
            />
            <InputRightElement width='4.5rem'>
              {isButtonhide && (
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? '😎' : '👀'}
                </Button>
              )}
            </InputRightElement>
            {finish && <InputRightElement children={<CheckIcon color='green.500' />} />}
          </InputGroup>
        )}

        {errorBol && <ErrorMessage>{message}</ErrorMessage>}
      </Container>
    </>
  );
};

export default InputAlert;

const ErrorMessage = styled.p`
  color: #e53e32;
  font-size: 0.875rem;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 10px;
  h1 {
    font-size: 17px;
  }
`;
