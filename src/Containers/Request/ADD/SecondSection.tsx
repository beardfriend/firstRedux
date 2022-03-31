import { Container, Section } from '@Global/BasicTheme';
import React, { useEffect, useState } from 'react';

import AddImage from '@Components/Button/AddImage';
import DatePick from '@Components/Form/DatePicker';
import { Input } from '@chakra-ui/react';
import InputName from '@Components/Form/InputName';
import RadioGrup from '@Components/Form/RadioGrup';
import { setDeadLine } from '@Features/REQUEST/RequestSlice';
import { useDispatch } from 'react-redux';

interface secondType {
  handleChange: (e) => void;
  data: any;
}

const SecondSection = ({ handleChange, data }: secondType) => {
  const { area, floor, elevator } = data.requestForm;
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<any>(new Date());

  const dispatching = (e) => {
    setStartDate(e);
    dispatch(setDeadLine(startDate.toISOString()));
  };

  useEffect(() => {
    dispatch(setDeadLine(startDate.toISOString()));
  }, []);
  return (
    <Section>
      <InputName name='사진' isDefault>
        <AddImage />
      </InputName>

      <InputName name='작업 면적' isDefault>
        <Container>
          <Input w='20%' onChange={handleChange} value={area} name='area' />
          <p style={{ display: 'flex', alignItems: 'center' }}>㎡</p>
        </Container>
      </InputName>

      <InputName name='층수' isDefault>
        <Container>
          <Input w='20%' onChange={handleChange} value={floor} name='floor' />
          <p style={{ display: 'flex', alignItems: 'center' }}>층</p>
        </Container>
      </InputName>

      <InputName name='승강기 사용여부'>
        <RadioGrup value={elevator} onChange={handleChange} name='elevator' />
      </InputName>

      <InputName name='견적마감일자'>
        <DatePick handleChange={dispatching} selected={startDate} />
      </InputName>
    </Section>
  );
};

export default SecondSection;
