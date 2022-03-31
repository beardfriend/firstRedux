import 'react-datepicker/dist/react-datepicker.css';

import DatePicker, { registerLocale } from 'react-datepicker';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { FcCalendar } from 'react-icons/fc';
import React from 'react';
import ko from 'date-fns/locale/ko';

interface typess {
  wid?: boolean | undefined;
  selected?: Date | null | undefined;
  onChange?: (date: Date | null) => void;
  handleChange?: any;
}

const DatePick = ({ wid, selected, handleChange }: typess) => {
  registerLocale('ko', ko);
  const ExampleCustomInput = React.forwardRef(({ value, onClick }: any, ref: any) => (
    <>
      <InputGroup w={!wid ? '300px' : '100%'}>
        <InputRightElement
          pointerEvents='none'
          children={<FcCalendar style={{ fontSize: '25px' }} />}
        />
        <Input readOnly onClick={onClick} ref={ref} value={value} style={{ cursor: 'pointer' }} />
      </InputGroup>
    </>
  ));
  return (
    <DatePicker
      selected={selected}
      locale='ko'
      onChange={handleChange}
      dateFormat='yyyy-MM-dd-(eee)'
      customInput={<ExampleCustomInput />}
    />
  );
};
export default DatePick;
