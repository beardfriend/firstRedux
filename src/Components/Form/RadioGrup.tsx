import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

import React from 'react';

interface radioType {
  [x: string]: any;
  value: string;
}

const RadioGrup = ({ value, isReadOnly, ...props }: radioType) => {
  return (
    <>
      <RadioGroup defaultValue={value}>
        <Stack spacing={5} direction='row'>
          <Radio colorScheme='teal' value='y' isReadOnly={isReadOnly} {...props}>
            가능
          </Radio>
          <Radio colorScheme='teal' value='n' isReadOnly={isReadOnly} {...props}>
            불가능
          </Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default RadioGrup;
