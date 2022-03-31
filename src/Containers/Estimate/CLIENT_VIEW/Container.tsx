import {
  EsitmateState,
  GET_ESTIMATE_CLIENT,
  GET_ESTIMATE_CLIENT_VIEW,
  setClientViewSuccess
} from '@Features/ESTIMATE/EstimateSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { BigContainer } from '@Global/BasicTheme';
import FirstSection from './FirstSection';
import { Skeleton } from '@chakra-ui/react';
import Spinners from '@Components/Loading/Spinner';

const Container = () => {
  const dispatch = useDispatch();
  const data = useSelector(EsitmateState);
  const { id } = useParams();
  const reFresh = async () => {
    try {
      await dispatch(GET_ESTIMATE_CLIENT_VIEW(String(id)));
    } catch (err) {
      console.log(err);
    }
    dispatch(setClientViewSuccess());
  };

  useEffect(() => {
    reFresh();
  }, []);
  // console.log(data.ClientView.userEntity.name);
  // console.log(data.ClientView);
  if (data.ClientGETstatus !== 'SUCCESS') {
    return <Spinners />;
  }
  return (
    <BigContainer>
      {data.ClientGETstatus !== 'SUCCESS' ? (
        <Skeleton height='40px' width='80%' />
      ) : (
        <h1>{data.ClientView.userEntity.name}님의 견적서</h1>
      )}
      <FirstSection data={data.ClientView} isLoading={data.ClientGETstatus !== 'SUCCESS'} />
    </BigContainer>
  );
};

export default Container;
