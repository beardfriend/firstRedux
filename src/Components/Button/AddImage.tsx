import { GrFormAdd } from 'react-icons/gr';
import React from 'react';
import { fc_aC } from '@Global/BasicTheme';
import styled from 'styled-components';
const AddImage = () => {
  return (
    <>
      <label>
        <Box>
          <GrFormAdd />
          <input type='file' style={{ display: 'none' }} />
        </Box>
      </label>
    </>
  );
};

export default AddImage;

const Box = styled.div`
  ${fc_aC}
  justify-content: center;
  background: white;
  &:hover {
    background: gray;
    cursor: pointer;
    label {
      cursor: pointer;
    }
  }

  width: 70px;
  height: 70px;
  svg {
    font-size: 50px;
  }
`;
