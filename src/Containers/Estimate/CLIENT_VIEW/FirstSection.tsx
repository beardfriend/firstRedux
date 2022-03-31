import InputChange from '@Components/Form/InputChange';
import React from 'react';
const FirstSection = ({ data, isLoading }) => {
  const {
    title,
    partnerName,
    partnerPhoneNum,
    estimateEmail,
    workFromdate,
    workTodate,
    estimateAmount
  } = data;
  return (
    <>
      <InputChange
        isNecessary={false}
        title='제공 서비스 '
        value='empty'
        name='service'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='제목'
        value={title}
        name='title'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='파트너명'
        value={partnerName}
        name='partnerName'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='전화번호'
        value={partnerPhoneNum}
        name='partnerPhoneNum'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='이메일'
        value={estimateEmail}
        name='estimateEmail'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />

      <InputChange
        isNecessary={false}
        title='작업예정날짜'
        value={`${workFromdate} ~ ${workTodate}`}
        name='preDate'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='총 견적 금액'
        value={estimateAmount}
        name='estimateAmount'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
    </>
  );
};

export default FirstSection;
