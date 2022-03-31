import { EsitmateState, GET_ESTIMATE } from '@Features/ESTIMATE/EstimateSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RequestTable from '@Components/Table/RequestTable';
import { Spinner } from '@chakra-ui/react';

const EstimateList = () => {
  const data = useSelector(EsitmateState);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(GET_ESTIMATE());
  }, []);

  if (data.status === 'LOADING' || data.delStatus === 'LOADING' || data.setStatus === 'LOADING') {
    return (
      <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    );
  }

  return (
    <>
      <h1
        style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px', fontWeight: 'bold' }}
      >
        보낸 견적
      </h1>
      <RequestTable data={data.list} writeAble />
    </>
  );
};

export default EstimateList;
