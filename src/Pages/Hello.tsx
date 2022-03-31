import HeaderPage from '@Containers/HeaderPage';
import { MainLayout } from '@Components/Layout';
import React from 'react';

const Hello = () => {
  return (
    <MainLayout middle='middle' login>
      <HeaderPage />
    </MainLayout>
  );
};

export default Hello;
