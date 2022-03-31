import {
  GET_PARTNER_REQUEST,
  RequestState,
  setPartnerView,
  setViewSuccess
} from '@Features/REQUEST/RequestSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { BigContainer } from '@Global/BasicTheme';
import { Button } from '@chakra-ui/react';
import FirstSection from './FirstSection';
import { Skeleton } from '@chakra-ui/react';
import Spinners from '@Components/Loading/Spinner';
import { setParamsId } from '@Features/ESTIMATE/EstimateSlice';

const Container = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data: any = useSelector(RequestState);
  const { id } = useParams();
  const { partnerView } = data;
  const reFresh = async () => {
    try {
      await dispatch(GET_PARTNER_REQUEST());
      dispatch(setPartnerView(id));
    } catch (err) {
      console.log(err);
    }
    dispatch(setViewSuccess());
  };

  useEffect(() => {
    reFresh();
  }, []);
  const Estimate = () => {
    dispatch(setParamsId(id));
    history.push('/estimate/add');
  };

  if (data.ViewStatus === 'LOADING' || data.ViewStatus === null) {
    return <Spinners />;
  }

  return (
    <BigContainer>
      {data.status === 'LOADING' ? (
        <Skeleton height='40px' width='80%' />
      ) : (
        <h1>{data.partnerView[0].userEntity.name}님의 요청서</h1>
      )}
      <FirstSection data={data.partnerView[0]} isLoading={data.status === 'LOADING'} />
      <Button w='80%' colorScheme='teal' mt='20px' height='50px' onClick={Estimate}>
        견적서 작성
      </Button>
    </BigContainer>
  );
};

export default Container;
