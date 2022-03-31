import { Checkbox, Input } from '@chakra-ui/react';
import { Container, Section } from '@Global/BasicTheme';
import React, { useEffect, useState } from 'react';
import {
  RequestState,
  deleteService,
  setDueDate,
  setKaKaoLocal,
  setService,
  setServiceProperty
} from '@Features/REQUEST/RequestSlice';
import { useDispatch, useSelector } from 'react-redux';

import DatePick from '@Components/Form/DatePicker';
import { DaumPosts } from '@Hooks/DaumPost';
import InputChange from '@Components/Form/InputChange';
import InputName from '@Components/Form/InputName';
import KaKaoLocal from '@Components/Form/KaKaoLocal';
import SelectRegion from '@Containers/PartnerChange/SelectRegion';

interface sectionType {
  handleChange?: (e) => void;
  onChange?: any;
}

const FirstSection = ({ onChange, handleChange }: sectionType) => {
  const data = useSelector(RequestState);
  const { isOpen, onOpen, fullAddress, onCompletePost, local, onClose } = DaumPosts();
  const { title, phoneNum, content, detailRegion } = data.requestForm;
  const [startDate, setStartDate] = useState<any>(new Date());
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setServiceProperty({ ...data.other.serviceBol, [e.target.value]: e.target.checked }));
    if (e.target.checked) {
      dispatch(setService(e.target.value));
    } else {
      dispatch(deleteService(e.target.value));
    }
  };

  const dispatching = (e) => {
    setStartDate(e);
    dispatch(setDueDate(startDate.toISOString()));
  };

  useEffect(() => {
    if (local.x.length !== 0) {
      dispatch(setKaKaoLocal(local));
    }
  }, [local]);

  useEffect(() => {
    dispatch(setDueDate(startDate.toISOString()));
  }, []);
  return (
    <Section>
      <SelectRegion
        title='요청 서비스'
        onChange={handleClick}
        data={data.default.service}
        isChecked={data.other.serviceBol}
      />
      <InputChange
        name='title'
        isButtonhide
        title='제목'
        value={title}
        onChange={handleChange}
        maxLength={10}
      />
      <KaKaoLocal
        name='작업공간 주소'
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
        address={fullAddress}
        addressCode={fullAddress}
        addressLine={detailRegion}
        addressLineName='detailRegion'
        isDisabled={fullAddress?.length !== 0}
        onChange={handleChange}
        onCompletePost={onCompletePost}
      />

      <InputName name='작업예정 날짜/시간'>
        <Container>
          <DatePick handleChange={dispatching} selected={startDate} />
        </Container>
      </InputName>
      <InputName name='전화번호'>
        <Container>
          <Input
            placeholder='- 없이 입력해주세요'
            w='85%'
            name='phoneNum'
            value={phoneNum || ''}
            onChange={handleChange}
          />
          <Checkbox defaultIsChecked>노출</Checkbox>
        </Container>
      </InputName>
      <InputChange
        title='내용'
        name='content'
        value={content}
        TextAreaOnChange={handleChange}
        maxLength={20}
        // value={data.info.explain}
        // onChange={onChange}
        isTextArea
        // isReadOnly={!isChange}
      />
    </Section>
  );
};

export default FirstSection;

FirstSection.defaultProps = {
  isChange: false
};
