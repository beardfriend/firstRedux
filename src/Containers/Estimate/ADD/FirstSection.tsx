import { Container, Section } from '@Global/BasicTheme';
import React, { useState } from 'react';
import {
  deleteService,
  setFromDate,
  setService,
  setServiceProperty,
  setToDate
} from '@Features/ESTIMATE/EstimateSlice';

import DatePick from '@Components/Form/DatePicker';
import InputChange from '@Components/Form/InputChange';
import InputName from '@Components/Form/InputName';
import SelectRegion from '@Containers/PartnerChange/SelectRegion';
import { useDispatch } from 'react-redux';

interface sectionType {
  handleChange: (e) => void;
  data: any;
}

const FirstSection = ({ handleChange, data }: sectionType) => {
  const { title, estimateEmail, partnerName, partnerPhoneNum, estimateAmount } = data.estimateForm;
  const dispatch = useDispatch();
  const [startDate, setStartDateState] = useState<any>(new Date());
  const [endDate, setEndDateState] = useState<any>(new Date());

  const setFromData = (e) => {
    setStartDateState(e);
    dispatch(setFromDate(startDate.toISOString()));
  };

  const setToData = (e) => {
    setEndDateState(e);
    dispatch(setToDate(endDate.toISOString()));
  };
  const handleClick = (e) => {
    dispatch(setServiceProperty({ ...data.other.serviceBol, [e.target.value]: e.target.checked }));
    if (e.target.checked) {
      dispatch(setService(e.target.value));
    } else {
      dispatch(deleteService(e.target.value));
    }
  };

  return (
    <Section>
      <InputChange
        name='title'
        isButtonhide
        title='제목'
        value={title}
        onChange={handleChange}
        maxLength={20}
      />
      <SelectRegion
        title='제공 서비스'
        onChange={handleClick}
        data={data.default.service}
        isChecked={data.other.serviceBol}
      />
      <InputChange
        name='partnerName'
        isButtonhide
        title='파트너명'
        value={partnerName}
        onChange={handleChange}
        maxLength={20}
      />
      <InputChange
        name='partnerPhoneNum'
        isButtonhide
        title='전화번호'
        type='number'
        value={partnerPhoneNum}
        onChange={handleChange}
        maxLength={20}
      />
      <InputChange
        name='estimateEmail'
        isButtonhide
        title='이메일'
        type='email'
        value={estimateEmail}
        onChange={handleChange}
        maxLength={20}
      />
      <InputName name='작업예정 날짜/시간'>
        <Container>
          <DatePick wid handleChange={setFromData} selected={startDate} />
          ~
          <DatePick wid handleChange={setToData} selected={endDate} />
        </Container>
      </InputName>
      <InputChange
        name='estimateAmount'
        isButtonhide
        title='총견적금액'
        type='number'
        value={estimateAmount}
        onChange={handleChange}
      />
    </Section>
  );
};

export default FirstSection;
