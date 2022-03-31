import {
  EDIT_ESTIMATE_VIEW,
  EsitmateState,
  SET_ESTIMATE,
  setForm,
  setIsEdit
} from '@Features/ESTIMATE/EstimateSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BigContainer } from '@Global/BasicTheme';
import FirstSection from './FirstSection';
import FixedButton from '@Components/Button/FixedButton';
import { useHistory } from 'react-router-dom';

const Container = () => {
  const dispatch = useDispatch();
  const data = useSelector(EsitmateState);
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [undeFinedData, setUndeFinedData] = useState({});
  const submit = () => {
    dispatch(SET_ESTIMATE(data.estimateForm));
    history.push('/estimate/list');
  };

  const edit = () => {
    dispatch(EDIT_ESTIMATE_VIEW({ form: data.estimateForm, sn: data.view[0].sn }));
    dispatch(setIsEdit());
    history.push('/estimate/list');
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setForm({ ...data.estimateForm, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (data.bolType.isEdit === true) {
      dispatch(setForm(data.view[0]));
    }
  }, []);

  const filterUndefinedData = () => {
    return Object.keys(data.estimateForm)
      .filter((datas) => data.estimateForm[datas] === undefined)
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
      return key;
    });

    const BolInArray = undeFinedDataKey.map((datas) => {
      if (data.estimateForm[datas] !== undefined) {
        if (data.estimateForm[datas] !== '') {
          return true;
        }
        return false;
      }
    }) as any;

    if (
      BolInArray.length === BolInArray.filter((datas) => datas === true).length &&
      data.estimateForm.estimateProvideServiceList.length > 0
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data.estimateForm]);

  useEffect(() => {
    setOpen(false);
    filterUndefinedData();
    setUndeFinedData(filterUndefinedData);
  }, []);

  return (
    <BigContainer>
      <h1>견적서 보내기</h1>
      <FirstSection handleChange={handleChange} data={data} />
      <FixedButton
        w='80%'
        onClick={data.bolType.isEdit ? edit : submit}
        isChange
        isDisabled={!open}
      >
        {data.bolType.isEdit ? '견적서 수정' : '견적서 등록'}
      </FixedButton>
    </BigContainer>
  );
};

export default Container;
