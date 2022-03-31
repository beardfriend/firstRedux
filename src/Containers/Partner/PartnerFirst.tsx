import { deleteService, setService, setServiceProperty } from '@Features/MYPAGE/Partnerslice';

import InputChange from '@Components/Form/InputChange';
import InputEtcBox from '@Components/Form/InputEtcBox';
import { Labels } from '@Components/Form/Badge';
import React from 'react';
import { Section } from '@Global/BasicTheme';
import SelectRegion from '@Containers/PartnerChange/SelectRegion';
import { useDispatch } from 'react-redux';

const PartnerFisrt = ({ isChange, onChange, data, isLoading }) => {
  const { companyNm, phoneNum, introduce } = data.partnerProfileEntity;
  const { email, name } = data.user;
  const { serviceBol } = data.other;
  const { service } = data.default;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setServiceProperty({ ...serviceBol, [e.target.value]: e.target.checked }));
    if (e.target.checked) {
      dispatch(setService(e.target.value));
    } else {
      dispatch(deleteService(e.target.value));
    }
  };

  return (
    <Section>
      <InputChange
        name='email'
        isReadOnly
        isButtonhide
        title='ID'
        value={email}
        isLoading={isLoading}
      />
      <InputChange
        isReadOnly
        onChange={onChange}
        isButtonhide
        name='name'
        title='이름(닉네임)'
        value={name}
        maxLength={10}
        isLoading={isLoading}
      />
      <InputChange
        isReadOnly={!isChange}
        isButtonhide
        onChange={onChange}
        title='업체명'
        value={isChange ? data.formData.partnerProfileEntity.companyNm : companyNm}
        name='companyNm'
        isLoading={isLoading}
      />
      {isChange ? (
        <SelectRegion
          title='제공 서비스'
          onChange={handleClick}
          data={service}
          isChecked={serviceBol}
        />
      ) : (
        <InputEtcBox name='제공 서비스' isLoading={isLoading}>
          {data.partnerProvideServiceList.map((datas) => {
            return <Labels key={datas.serviceType}>{datas.serviceType}</Labels>;
          })}
        </InputEtcBox>
      )}

      <InputChange
        isReadOnly={!isChange}
        onChange={onChange}
        isButtonhide
        name='phoneNum'
        title='휴대전화 번호'
        value={isChange ? data.formData.partnerProfileEntity.phoneNum : phoneNum}
        isLoading={isLoading}
      />
      <InputChange
        title='서비스 설명'
        TextAreaOnChange={onChange}
        name='introduce'
        value={isChange ? data.formData.partnerProfileEntity.introduce : introduce}
        isTextArea
        isReadOnly={!isChange}
        isLoading={isLoading}
      />
    </Section>
  );
};

export default PartnerFisrt;
