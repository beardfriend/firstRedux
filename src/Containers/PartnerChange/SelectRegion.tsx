import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

import { Button } from '@chakra-ui/react';
import CheckGu from '@Components/CheckBox/CheckGu';
import styled from 'styled-components';

interface SelectRegionType {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: string[];
  isChecked: { [property: string]: boolean };
}

const SelectRegion = ({ title, onChange, data, isChecked }: SelectRegionType) => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenModal = () => {
    setIsOpen(!isOpen);
    console.log('hello');
  };

  return (
    <Contain>
      <Button
        onClick={isOpenModal}
        w='100%'
        colorScheme='teal'
        rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      >
        {title}
      </Button>
      {isOpen && (
        <InnerContainer>
          {data.map((datas) => {
            return (
              <CheckGu
                key={datas}
                name={datas}
                onChange={onChange}
                value={datas}
                isChecked={isChecked[`${datas}`]}
              />
            );
          })}
        </InnerContainer>
      )}
    </Contain>
  );
};

export default SelectRegion;
const Contain = styled.div`
  width: 80%;
  position: relative;
`;
const InnerContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50px;
  background: #4c4c4c;
  z-index: 99;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  border-radius: 25px;
  min-height: 200px;
  justify-content: center;
  padding: 20px 20px;
`;
