import Container from '@Containers/Estimate/LIST/Container';
import { MainLayout } from '@Components/Layout';
import React from 'react';
const EstimateList = () => {
  return (
    <MainLayout middle='middle'>
      <div style={{ padding: `0 100px` }}>
        <Container />
      </div>
    </MainLayout>
  );
};

export default EstimateList;
