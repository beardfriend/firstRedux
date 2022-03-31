import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { FcSearch } from 'react-icons/fc';
import React from 'react';

const Search = () => {
  return (
    <>
      <InputGroup>
        <InputRightElement
          pointerEvents='none'
          children={<FcSearch style={{ fontSize: '25px' }} />}
        />
        <Input readOnly />
      </InputGroup>
    </>
  );
};

export default Search;
