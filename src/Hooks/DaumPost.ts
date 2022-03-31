import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react';

export const DaumPosts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [local, setLocal] = useState({
    x: '',
    y: '',
    region1DepthName: '',
    region2DepthName: '',
    region3DepthName: '',
    roadName: '',
    mainBuildingNo: '',
    subBuildingNo: ''
  });
  const [fullAddress, setFullAddress] = useState('');
  const [onSuccess, setOnsuccess] = useState(false);

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setFullAddress(fullAddr);
    onClose();
    setOnsuccess(true);
  };

  //

  const getLocalData = useCallback(async () => {
    const url = 'https://dapi.kakao.com/v2/local/search/address.json?';
    const query = fullAddress;

    try {
      const res = await axios.get(`${url}query=${query}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`
        }
      });
      const {
        x,
        y,
        region_1depth_name,
        region_2depth_name,
        region_3depth_name,
        road_name,
        building_name,
        address_name,
        sub_building_no
      }: any = res.data.documents[0].road_address;
      setLocal({
        x: x,
        y: y,
        region1DepthName: region_1depth_name,
        region2DepthName: region_2depth_name,
        region3DepthName: region_3depth_name,
        roadName: road_name,
        mainBuildingNo: building_name,
        subBuildingNo: sub_building_no
      });
    } catch (err) {
      console.log(err);
    }
  }, [fullAddress]);

  //

  useEffect(() => {
    if (onSuccess) {
      getLocalData();
      setOnsuccess(false);
    }
  }, [onSuccess]);

  //
  return {
    isOpen,
    onOpen,
    onSuccess,
    fullAddress,
    onCompletePost,
    local,
    onClose
  };
};

//첫 번째 방법 state 에 저장하고 -> 원하는 곳에서 dispatch해준다.
// 한 번에 dispatch 해준다, 변하게 되면 재사용성이 떨어진다.
//
