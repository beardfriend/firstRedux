import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  Spinner,
  Textarea
} from '@chakra-ui/react';

import { Formname } from '@Global/FormTheme';
import React from 'react';
import styled from 'styled-components';

interface BasicProps {
  value?: string | undefined;
  type?: string;
  title: string;
  placeholder?: string;
  isReadOnly?: boolean;
  isNecessary?: boolean;
}
interface InputProps {
  isUpdate?: boolean;
  isButtonhide?: boolean;
  isTextArea?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  TextAreaOnChange?: (e) => void;
  onClick?: () => void;
  name?: string;
  maxLength?: number | undefined;

  [x: string]: any;
}

const InputChange = ({
  title,
  value,
  type,
  placeholder,
  isUpdate,
  onChange,
  onClick,
  isButtonhide,
  isReadOnly,
  isTextArea,
  isNecessary,
  name,
  maxLength,
  TextAreaOnChange,
  isLoading,

  ...props
}: BasicProps & InputProps) => {
  const handleSelect = (e) => {
    e.target.select();
  };

  return (
    <>
      <Container>
        <Formname>
          {title}
          {isNecessary && <span>*</span>}
        </Formname>
        {isLoading ? (
          <Skeleton height='50' />
        ) : (
          <>
            {isTextArea ? (
              <Textarea
                {...props}
                onFocus={handleSelect}
                placeholder={value}
                isReadOnly={isReadOnly}
                name={name}
                onChange={TextAreaOnChange}
                value={value}
                maxLength={maxLength}
              />
            ) : (
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  isReadOnly={isReadOnly}
                  value={value}
                  onChange={onChange}
                  type={type}
                  name={name}
                  maxLength={maxLength}
                  placeholder={placeholder}
                />

                <InputRightElement width='4.5rem'>
                  {!isButtonhide && (
                    <Button
                      h='1.75rem'
                      size='sm'
                      onClick={onClick}
                      colorScheme={isUpdate ? 'gray' : 'teal'}
                    >
                      {isUpdate ? '수정' : '완료'}
                    </Button>
                  )}
                </InputRightElement>
              </InputGroup>
            )}
          </>
        )}
      </Container>
    </>
  );
};

InputChange.defaultProps = {
  isUpdate: true,
  value: undefined || '',
  type: 'text',
  title: 'default',
  isButtonhide: false,
  isNecessary: true
};

export default InputChange;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
