import {
  EDIT_PARTNER_PROFILE,
  GET_PARTNER_PROFILE,
  partnerState,
  setCurrentData,
  setProfileChange
} from '@Features/MYPAGE/Partnerslice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AvatarImage from '@Components/Form/AvatarImage';
import { BigContainer } from '@Global/BasicTheme';
import { Button } from '@chakra-ui/react';
import FixedButton from '@Components/Button/FixedButton';
import { MainLayout } from '@Components/Layout';
import PartnerFirst from './PartnerFirst';
import PartnerSecond from './PartnerSecond';
import { signInState } from '@Features/USER/SignInSlice';

const Container = () => {
  const dispatch = useDispatch();
  const data = useSelector(partnerState);
  const userData = useSelector(signInState);
  const [isChange, setIsChange] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      setProfileChange({ ...data.formData.partnerProfileEntity, [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = () => {
    setIsChange(!isChange);
    if (isChange === false) {
      dispatch(setCurrentData());
    }
    if (data.bolType.isChanged === false) {
      console.log('pass');
      return;
    }

    if (isChange === true) {
      console.log('dispatch');
      dispatch(
        EDIT_PARTNER_PROFILE({
          partnerProfileEntity: data.formData.partnerProfileEntity,
          partnerProvideServiceList: data.formData.partnerProvideServiceList,
          partnerActivityAreaList: data.formData.partnerActivityAreaList
        })
      );
    }
  };

  //프로필 조회
  useEffect(() => {
    if (data.user.email !== '') {
      return;
    }
    dispatch(GET_PARTNER_PROFILE());
  }, []);

  return (
    <MainLayout middle='middle' login>
      <BigContainer>
        <h1>파트너</h1>
        <AvatarImage
          name='jack'
          src='https://post-phinf.pstatic.net/MjAyMDEwMjdfMTI1/MDAxNjAzNzgxNjU1MTU1.83f91AAlRcnWwldW0IbN25q12NLEtoyTQ_Nr4bq4WXAg.8j4iRL_wPGaMDgJkQpARjhh6WjzIzVRtfsqVqNe2Mq8g.JPEG/121609901_191204092517872_7257056504530801338_n.jpg?type=w1200'
          isChange={isChange}
        />
        <PartnerFirst
          onChange={handleChange}
          isChange={isChange}
          data={data}
          isLoading={data.status === 'LOADING'}
        />
        <PartnerSecond
          isChanged={isChange}
          onChange={handleChange}
          data={data}
          isLoading={data.status === 'LOADING'}
        />
      </BigContainer>
      <FixedButton isChange={isChange} onClick={handleSubmit} isLoading={data.status === 'LOADING'}>
        {isChange ? '프로필 수정완료' : '프로필 수정하기'}
      </FixedButton>
    </MainLayout>
  );
};
export default Container;
