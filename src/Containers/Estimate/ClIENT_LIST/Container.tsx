import { EsitmateState, GET_ESTIMATE_CLIENT } from '@Features/ESTIMATE/EstimateSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import EstimateTable from '@Components/Table/EstimateTable';
import NoEstimate from './NoEstimate';
import Spinners from '@Components/Loading/Spinner';

const Container = () => {
  const dispatch = useDispatch();
  const data = useSelector(EsitmateState);
  useEffect(() => {
    if (data.status === null) {
      dispatch(GET_ESTIMATE_CLIENT());
    }
  }, []);
  if (data.status === null || data.status === 'LOADING') {
    return <Spinners />;
  }
  return (
    <>
      {!data.bolType.isClientList ? (
        <NoEstimate />
      ) : (
        <div>
          <h1
            style={{
              textAlign: 'center',
              fontSize: '30px',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}
          >
            견적서 목록
          </h1>
          <EstimateTable data={data.ClientList} />
        </div>
      )}
    </>
  );
};

export default Container;
