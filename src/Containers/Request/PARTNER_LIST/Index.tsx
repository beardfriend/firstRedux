import { GET_PARTNER_REQUEST, RequestState } from '@Features/REQUEST/RequestSlice';
import React, { useEffect } from 'react';
import { Spinner, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import RequestTable from '@Components/Table/RequestTable';
import { useParams } from 'react-router-dom';

const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(RequestState);

  useEffect(() => {
    dispatch(GET_PARTNER_REQUEST());
  }, []);

  if (data.status === 'LOADING') {
    return (
      <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    );
  }

  return (
    <>
      <h1
        style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px', fontWeight: 'bold' }}
      >
        요청서 목록
      </h1>
      <RequestTable data={data.allList} />
    </>
  );
};

export default Index;

//첫 번쨰로, 데이터의 개수를 알 수 없다.
// 데이터 개수를 알기 위해서는, 그 전에 로딩을 해놔야 하는데, 그러기에는 너무 데이터 소모가 크다.
// 그렇다면 데이터의 개수를
