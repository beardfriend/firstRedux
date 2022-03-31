import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MainLayout } from '@Components/Layout';
import React from 'react';
const Notfound = () => {
  return (
    <MainLayout middle='middle'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center' }}>
        <h1 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
          🚧
          <br />
          존재하지 않는 페이지입니다.
        </h1>
        <Link to='/'>
          <Button colorScheme='teal' w='300px'>
            메인페이지로 돌아가기
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Notfound;
