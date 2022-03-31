import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

import DaumPostcode from 'react-daum-postcode';
import React from 'react';

//  interface type {
//    sido: string;
//    sigungu: string;
//    bname: string;
//    address: string;
//    addressCode: string;
//  }
interface KakoPostType {
  isOpen: boolean;
  onClose: () => void;
  onCompletePost: (data) => void;
}
const KaKaoPost = ({ isOpen, onClose, onCompletePost }: KakoPostType) => {
  // const onCompletePost = (data) => {
  //   let fullAddr = data.address;
  //   let extraAddr = '';

  //   if (data.addressType === 'R') {
  //     if (data.bname !== '') {
  //       extraAddr += data.bname;
  //     }
  //     if (data.buildingName !== '') {
  //       extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
  //     }
  //     fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
  //   }
  //   const nwobject: type = {
  //     sido: data.sido,
  //     sigungu: data.sigungu,
  //     bname: data.bname,
  //     address: fullAddr,
  //     addressCode: data.zonecode
  //   };

  //   setBuild(data.buildingName);
  //   setAddress(data.zonecode);
  //   setAddressDetail(fullAddr);
  //   setIsOpenPost(false);
  //   dispatch(setAdd(nwobject));
  //   onClose();
  // };

  const postCodeStyle: React.CSSProperties = {
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '520px',
    height: '620px',
    padding: '7px'
  };

  return (
    <>
      <Modal onClose={onClose} size='xl' isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>주소입력</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KaKaoPost;
