import React from 'react';
import { Select } from '@chakra-ui/react';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
interface TimeType {
  [x: string]: any;
}
const Timepicker = ({ ...props }: TimeType) => {
  return (
    <>
      <Select {...props} variant='outline' w='200px'>
        {data.map((data) => {
          return (
            <option key={data} value={data} style={{ position: 'absolute', top: 0 }}>
              {data}시
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default Timepicker;
