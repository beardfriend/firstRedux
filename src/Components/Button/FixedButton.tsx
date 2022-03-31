import { Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
  [x: string]: any;
}

const FixedButton = ({ children, isChange, ...props }: Props) => {
  return (
    <Button
      {...props}
      w='300px'
      h='70px'
      colorScheme={isChange ? 'red' : 'teal'}
      borderRadius='15px'
      position='fixed'
      bottom='5%'
      right='0'
      marginRight='15%'
      fontSize='23px'
      boxShadow='rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'
    >
      {children}
    </Button>
  );
};

export default FixedButton;
