import 'semantic-ui-css/semantic.min.css';

import Container from './Container';
import React from 'react';

interface props {
  isFixed?: boolean;
}

const Index = ({ isFixed }: props) => {
  return (
    <>
      <Container isFixed={isFixed} />
    </>
  );
};

export default Index;
