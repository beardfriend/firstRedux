import { Button, Spinner } from '@chakra-ui/react';
import {
  DEL_CLIENT_REQUSET,
  EDIT_CLIENT_REQUSET,
  GET_CLIENT_REQUEST,
  RequestState,
  setForm,
  setRequestList,
  setSuccess
} from '@Features/REQUEST/RequestSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { BigContainer } from '@Global/BasicTheme';
import { Container as Containers } from '@Global/BasicTheme';
import FirstSection from './FirstSection';
import Modal from '@Components/Alert/Modal';
import SecondSection from './SecondSection';

const Container = () => {
  const dispatch = useDispatch();
  const data = useSelector(RequestState);
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const { list, view } = data;

  const reFresh = async () => {
    try {
      await dispatch(GET_CLIENT_REQUEST());
      dispatch(setRequestList(id));
    } catch (err) {
      console.log(err);
    }
    dispatch(setSuccess());
  };

  useEffect(() => {
    reFresh();
  }, []);

  const Delete = () => {
    dispatch(DEL_CLIENT_REQUSET(view[0].sn));
    history.push('/request/list');
  };

  // const Edit = () => {
  //   setIsEdit(!isEdit);
  //   dispatch(setForm(view[0]));
  //   dispatch(EDIT_CLIENT_REQUSET(view[0].sn));
  //   reFresh();
  // };
  // const EditSuccess = () => {
  //   setIsEdit(!isEdit);
  //   dispatch(EDIT_CLIENT_REQUSET(view[0].sn));
  //   reFresh();
  // };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setForm({ ...data.requestForm, [e.target.name]: e.target.value }));
  };

  if (data.status === 'LOADING') {
    return <Spinner color='teal' thickness='4px' speed='0.65s' size='xl' emptyColor='gray.200' />;
  }

  return (
    <BigContainer>
      <h1>요청서 보기</h1>
      <FirstSection
        datas={view[0]}
        handleChange={handleChange}
        isEdit={isEdit}
        requestFormData={data.requestForm}
      />
      <SecondSection datas={view[0]} isEdit={isEdit} handleChange={handleChange} />
      <Containers>
        <Modal type='Delete' onClick={Delete} />
        {/* <Modal type='Finish' /> */}
        {/* <Button
          w='100%'
          colorScheme={!isEdit ? 'teal' : 'red'}
          mt='20px'
          height='50px'
          onClick={!isEdit ? Edit : EditSuccess}
        >
          {!isEdit ? '수정하기' : '수정완료'}
        </Button> */}
      </Containers>
    </BigContainer>
  );
};

export default Container;
