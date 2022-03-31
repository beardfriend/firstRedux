import { Checkbox } from '@chakra-ui/react';
import React from 'react';

interface CheckType {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isChecked?: boolean | undefined;
  [x: string]: any;
}

const CheckGu = ({ name, onChange, value, isChecked, ...props }: CheckType) => {
  return (
    <>
      <div>
        <Checkbox
          {...props}
          size='lg'
          colorScheme='teal'
          onChange={onChange}
          value={value}
          isChecked={isChecked}
        >
          <span style={{ fontSize: '13px', color: 'white' }}>{name}</span>
        </Checkbox>
      </div>
    </>
  );
};

export default CheckGu;
