import { Input } from '@chakra-ui/react';
import InputChange from '@Components/Form/InputChange';
import InputName from '@Components/Form/InputName';
import RadioGrup from '@Components/Form/RadioGrup';
import React from 'react';
import { Section } from '@Global/BasicTheme';

const SecondSection = ({ datas, isEdit, handleChange }) => {
  const { area, floor, elevator, deadline } = datas;
  return (
    <Section>
      <InputChange
        name='area'
        isButtonhide
        isNecessary={false}
        isReadOnly={!isEdit}
        onChange={handleChange}
        title='작업 면적'
        value={area || undefined}
        maxLength={10}
      />

      <InputChange
        name='floor'
        isButtonhide
        isNecessary={false}
        isReadOnly={!isEdit}
        title='층수'
        value={floor || undefined}
        onChange={handleChange}
        maxLength={10}
      />

      <InputName name='승강기 사용여부'>
        <RadioGrup value={elevator} isReadOnly={!isEdit} name='elevator' />
      </InputName>

      <InputName name='견적 마감일자'>
        <Input value={deadline} isReadOnly={!isEdit} onChange={handleChange} name='deadline' />
      </InputName>
    </Section>
  );
};

export default SecondSection;

SecondSection.defaultProps = {
  datas: [
    {
      area: null,
      floor: null
    }
  ]
};
