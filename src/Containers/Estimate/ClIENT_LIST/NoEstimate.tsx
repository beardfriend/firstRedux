import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ListContainer } from '@Containers/Request/LIST/RequestList';
import React from 'react';
const NoEstimate = () => {
  return (
    <ListContainer>
      <h1 className='title'>받은 견적서가 없습니다.</h1>
      <Link to='/request/add'>
        <Button w='300px' h='70px' colorScheme='teal'>
          요청서 작성
        </Button>
      </Link>
    </ListContainer>
  );
};

export default NoEstimate;
