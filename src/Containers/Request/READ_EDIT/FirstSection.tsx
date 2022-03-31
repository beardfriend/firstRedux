import { Checkbox, Input, useDisclosure } from '@chakra-ui/react';
import { Container, Section } from '@Global/BasicTheme';
import React, { useCallback, useEffect, useState } from 'react';
import {
  RequestState,
  deleteService,
  setService,
  setServiceProperty
} from '@Features/REQUEST/RequestSlice';
import { useDispatch, useSelector } from 'react-redux';

import InputChange from '@Components/Form/InputChange';
import InputEtcBox from '@Components/Form/InputEtcBox';
import InputName from '@Components/Form/InputName';
import KaKaoLocal from '@Components/Form/KaKaoLocal';
import { Labels } from '@Components/Form/Badge';
import { RequsetType } from '@Features/REQUEST/State';
import SelectRegion from '@Containers/PartnerChange/SelectRegion';
import axios from 'axios';

interface sectionType {
  handleChange?: (e) => void;
  isEdit?: boolean;
  datas: any;
  requestFormData?: any;
}

const FirstSection = ({ handleChange, isEdit, datas, requestFormData }: sectionType) => {
  const {
    title,
    phoneNum,
    content,
    region1DepthName,
    region2DepthName,
    roadName,
    detailRegion,
    subBuildingNo,
    mainBuildingNo
  } = datas;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setServiceProperty({ ...datas.other.serviceBol, [e.target.value]: e.target.checked }));
    if (e.target.checked) {
      dispatch(setService(e.target.value));
    } else {
      dispatch(deleteService(e.target.value));
    }
  };

  return (
    <Section>
      {/* {isEdit ? (
        <SelectRegion
          title='요청 서비스'
          onChange={handleClick}
          data={datas.default.service}
          isChecked={datas.other.serviceBol}
        />
      ) : (
        <InputEtcBox name='요청 서비스'>
          hello 
        </InputEtcBox>
      )} */}

      <InputChange
        name='title'
        isButtonhide
        isReadOnly={!isEdit}
        title='제목'
        value={!isEdit ? title || undefined : requestFormData.title}
        onChange={handleChange}
        maxLength={10}
      />

      <InputChange
        isReadOnly
        name='adressLine'
        isButtonhide
        readOnly={!isEdit}
        title='사업장 주소'
        value={`${region1DepthName} ${region2DepthName} ${roadName} ${mainBuildingNo} ${
          subBuildingNo === null ? '' : subBuildingNo
        } ${detailRegion === null ? '' : detailRegion}`}
      />

      <InputName name='전화번호'>
        <Container>
          <Input
            placeholder='- 없이 입력해주세요'
            w='100%'
            readOnly={!isEdit}
            name='phoneNum'
            value={phoneNum || undefined}
            onChange={handleChange}
          />
        </Container>
      </InputName>
      <InputChange
        title='내용'
        name='content'
        readOnly={!isEdit}
        value={content || undefined}
        TextAreaOnChange={handleChange}
        maxLength={20}
        isTextArea
      />
    </Section>
  );
};

export default FirstSection;

FirstSection.defaultProps = {
  isChange: false,
  isEdit: false,
  datas: [{ title: 'asd' }]
};
