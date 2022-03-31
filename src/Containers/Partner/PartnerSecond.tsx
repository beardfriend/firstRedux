import React, { useEffect } from 'react';
import { deleteArea, setArea, setAreaProperty, setKaKaoLocal } from '@Features/MYPAGE/Partnerslice';

import { DaumPosts } from '@Hooks/DaumPost';
import InputChange from '@Components/Form/InputChange';
import InputEtcBox from '@Components/Form/InputEtcBox';
import KaKaoLocal from '@Components/Form/KaKaoLocal';
import { Labels } from '@Components/Form/Badge';
import SelectRegion from '@Containers/PartnerChange/SelectRegion';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const PartnerSecond = ({ isChanged, onChange, data, isLoading }) => {
  const { roadName, detailRegion, career } = data.partnerProfileEntity;
  const { businessBol } = data.other;
  const { businessRegi } = data.default;
  const { isOpen, onOpen, fullAddress, onCompletePost, local, onClose } = DaumPosts();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setAreaProperty({ ...businessBol, [e.target.value]: e.target.checked }));
    if (e.target.checked) {
      dispatch(setArea(e.target.value));
    } else {
      dispatch(deleteArea(e.target.value));
    }
  };

  useEffect(() => {
    if (local.x.length !== 0) {
      dispatch(setKaKaoLocal(local));
    }
  }, [local]);

  return (
    <Section>
      {isChanged ? (
        <KaKaoLocal
          name='사업장 주소'
          onClose={onClose}
          isOpen={isOpen}
          onOpen={onOpen}
          address={isChanged ? data.formData.partnerProfileEntity.roadName : roadName}
          addressCode={isChanged ? data.formData.partnerProfileEntity.roadName : roadName}
          addressLine={isChanged ? data.formData.partnerProfileEntity.detailRegion : detailRegion}
          addressLineName='detailRegion'
          isDisabled={fullAddress?.length !== 0}
          onChange={onChange}
          onCompletePost={onCompletePost}
        />
      ) : (
        <InputChange
          isReadOnly
          name='adressLine'
          isButtonhide
          title='사업장 주소'
          value={roadName}
          isLoading={isLoading}
        />
      )}

      {isChanged ? (
        <SelectRegion
          title='활동 지역'
          onChange={handleClick}
          data={businessRegi}
          isChecked={businessBol}
        />
      ) : (
        <InputEtcBox name='활동 지역' isLoading={isLoading}>
          {data.partnerActivityAreaList.map((data) => {
            return <Labels key={data.activeRegion}>{data.activeRegion}</Labels>;
          })}
        </InputEtcBox>
      )}

      <InputChange
        isReadOnly={!isChanged}
        onChange={onChange}
        isButtonhide
        title='경력'
        name='career'
        placeholder='xx년'
        value={isChanged ? data.formData.partnerProfileEntity.career : career}
        isLoading={isLoading}
      />
    </Section>
  );
};

export default PartnerSecond;

const Section = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 20px;
`;
