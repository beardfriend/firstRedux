import { Button, Skeleton, Spinner } from '@chakra-ui/react';
import {
  DEL_ESTIMATE_VIEW,
  EsitmateState,
  GET_ESTIMATE,
  setEstimateList,
  setIsEdit,
  setParamsId,
  setViewSuccess
} from '@Features/ESTIMATE/EstimateSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { BigContainer } from '@Global/BasicTheme';
import { Container as Containers } from '@Global/BasicTheme';
import FirstSection from './FirstSection';
import Modal from '@Components/Alert/Modal';

const Container = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const data = useSelector(EsitmateState);
  const { view } = data;
  const reFresh = async () => {
    try {
      await dispatch(GET_ESTIMATE());
      dispatch(setEstimateList(id));
    } catch (err) {
      console.log(err);
    }
    dispatch(setViewSuccess());
  };

  useEffect(() => {
    reFresh();
  }, []);

  const Delete = () => {
    dispatch(DEL_ESTIMATE_VIEW(view[0].sn));
    history.push('/estimate/list');
  };
  const Edit = () => {
    dispatch(setIsEdit());
    dispatch(setParamsId(view[0].sn));
    history.push('/estimate/add');
  };

  if (data.viewStatus === 'LOADING' || data.viewStatus === null) {
    return <Spinner color='teal' thickness='4px' speed='0.65s' size='xl' emptyColor='gray.200' />;
  }

  return (
    <>
      <BigContainer>
        <h1>{view[0].userEntity.name}님의 견적서</h1>
        <FirstSection data={view[0]} isLoading={data.status === 'LOADING'} />
        <Containers style={{ width: '80%' }}>
          <Modal type='Delete' onClick={Delete} />
          <Button w='100%' colorScheme='teal' mt='20px' height='50px' onClick={Edit}>
            수정
          </Button>
        </Containers>
      </BigContainer>
    </>
  );
};

export default Container;

Container.defaultProps = {
  data: {
    view: [
      {
        userEntity: {
          name: null
        }
      }
    ]
  }
};
