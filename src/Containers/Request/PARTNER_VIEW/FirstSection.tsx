import InputChange from '@Components/Form/InputChange';
import React from 'react';
const FirstSection = ({ data, isLoading }) => {
  return (
    <>
      <InputChange
        isNecessary={false}
        title='요청서비스'
        value='empty'
        name='title'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='title'
        value={data.title}
        name='title'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='주소'
        value={`${data.region1DepthName} ${data.region2DepthName} ${data.roadName} ${
          data.mainBuildingNo
        } ${data.subBuildingNo === null ? '' : data.subBuildingNo} ${
          data.detailRegion === null ? '' : data.detailRegion
        }`}
        name='region'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='작업예정 날짜/시간'
        value={data.modifiedDate}
        name='modifiedDate'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='전화번호'
        value={data.phoneNum}
        name='phoneNum'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='내용'
        value={data.content}
        name='content'
        isButtonhide
        isReadOnly
        isTextArea
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='작업면적'
        value={data.title}
        name='title'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='층수'
        value={data.floor}
        name='floor'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='승강기 사용'
        value={data.elevator}
        name='elevator'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
      <InputChange
        isNecessary={false}
        title='견적 마감일자'
        value={data.deadline}
        name='deadline'
        isButtonhide
        isReadOnly
        isLoading={isLoading}
      />
    </>
  );
};

export default FirstSection;
