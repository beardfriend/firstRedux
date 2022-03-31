import InputChange from '@Components/Form/InputChange';
import React from 'react';
const FirstSection = ({ data, isLoading }) => {
  return (
    <>
      <InputChange
        isNecessary={false}
        title='제목'
        value={data.title}
        name='title'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='제공서비스'
        value='empty'
        name='title'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='파트너명'
        value={data.partnerName}
        name='partnerName'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='전화번호'
        value={data.partnerPhoneNum}
        name='partnerPhoneNum'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='이메일'
        value={data.estimateEmail}
        name='estimateEmail'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='작업 예정 날짜'
        value={`${data.workFromdate} ~${data.workTodate}`}
        name='estimateEmail'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        name='estimateAmount'
        isButtonhide
        title='총견적금액'
        value={data.estimateAmount}
        isReadOnly
        isLoading={isLoading}
      />
    </>
  );
};

export default FirstSection;

FirstSection.defaultProps = {
  data: {
    title: null
  }
};
