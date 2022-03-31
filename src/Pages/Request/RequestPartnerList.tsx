import { MainLayout } from '@Components/Layout';
import PARTNEREAD from '@Containers/Request/PARTNER_LIST/Index';
import React from 'react';

const RequestPartnerList = () => {
  return (
    <MainLayout middle='middle'>
      <div style={{ padding: `0 100px` }}>
        <PARTNEREAD />
      </div>
    </MainLayout>
  );
};

export default RequestPartnerList;
