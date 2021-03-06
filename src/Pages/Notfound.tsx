import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MainLayout } from '@Components/Layout';
import React from 'react';
const Notfound = () => {
  return (
    <MainLayout middle='middle'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center' }}>
        <h1 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
          π§
          <br />
          μ‘΄μ¬νμ§ μλ νμ΄μ§μλλ€.
        </h1>
        <Link to='/'>
          <Button colorScheme='teal' w='300px'>
            λ©μΈνμ΄μ§λ‘ λμκ°κΈ°
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Notfound;
