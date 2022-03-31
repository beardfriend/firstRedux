import React, { useEffect, useState } from 'react';
import { RequestState, SET_CLIENT_REQUEST, setForm } from '@Features/REQUEST/RequestSlice';
import { useDispatch, useSelector } from 'react-redux';

import { BigContainer } from '@Global/BasicTheme';
import FirstSection from './FirstSection';
import FixedButton from '@Components/Button/FixedButton';
import SecondSection from './SecondSection';
import { useHistory } from 'react-router-dom';

const Container = () => {
  const dispatch = useDispatch();
  const data = useSelector(RequestState);
  const history = useHistory();
  const [open, setOpen] = useState<any>(false);
  const [undeFinedData, setUndeFinedData] = useState({});

  const submit = () => {
    dispatch(SET_CLIENT_REQUEST(data.requestForm));
    history.push('/request/list');
  };

  const handleChange = (e) => {
    console.log(data);
    e.preventDefault();
    dispatch(setForm({ ...data.requestForm, [e.target.name]: e.target.value }));
  };

  const filterUndefinedData = () => {
    return Object.keys(data.requestForm)
      .filter((datas) => data.requestForm[datas] === undefined)
      .reduce((obj: any, key) => {
        return {
          ...obj,
          [key]: false
        };
      }, {});
  };

  useEffect(() => {
    const undeFinedDataKey = Object.entries(undeFinedData).map((datas) => {
      const key = datas[0] as any;
      console.log(key);
      return key;
    });

    const BolInArray = undeFinedDataKey.map((datas) => {
      if (data.requestForm[datas] !== undefined) {
        if (data.requestForm[datas] !== '') {
          return true;
        }
        return false;
      }
    }) as any;

    if (
      BolInArray.length === BolInArray.filter((datas) => datas === true).length &&
      data.requestForm.requisitionRequestServiceList.length > 0
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data.requestForm]);

  useEffect(() => {
    setOpen(false);
    filterUndefinedData();
    setUndeFinedData(filterUndefinedData);
  }, []);

  return (
    <BigContainer>
      <h1>요청서 작성</h1>
      <FirstSection handleChange={handleChange} />
      <SecondSection handleChange={handleChange} data={data} />
      <FixedButton w='80%' onClick={submit} isChange isDisabled={!open}>
        요청서 등록
      </FixedButton>
    </BigContainer>
  );
};

export default Container;
