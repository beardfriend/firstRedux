import { Box, Popover, PopoverArrow, PopoverContent, PopoverTrigger } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import React from 'react';

const Popovers = ({ children }) => {
  const Out = () => {
    window.location.href = 'http://localhost:8084/api/logout';
    sessionStorage.removeItem('email');

    // history.push() 이후에 headers만 update하는 방법을 찾아보면 좋을 듯 싶다.
  };
  return (
    <>
      <Popover isLazy trigger='hover'>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent w='150px' textAlign='center' p={5}>
          <PopoverArrow />
          <Box mt={5}>
            <Link className='notmargin' to='/mypage'>
              마이페이지
            </Link>
          </Box>
          <Box mt={5} mb={5} onClick={Out} cursor='pointer'>
            로그아웃
          </Box>
          {/* <a href='http://localhost:8084/api/logout'>test</a> */}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Popovers;
