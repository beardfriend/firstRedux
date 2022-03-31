import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

import { Labels } from '@Components/Form/Badge';
import { Link } from 'react-router-dom';
import React from 'react';

interface TableType {
  writeAble: boolean;

  data: [
    {
      title: string;
      sort?: [];
      sn: string;
      deadline?: string;
      createdDate?: string;
      region2DepthName?: string;
      state?: string;
      user?: string;
      userEntity: {
        name: string;
      };
      requisitionEntity: any;
    }
  ];
}

const RequestTable = ({ data, writeAble }: TableType) => {
  return (
    <>
      <Table variant='striped' colorScheme='gray'>
        <TableCaption>PleaseHaejo</TableCaption>
        <Thead>
          <Tr>
            <Th>제목</Th>
            <Th>분류</Th>
            <Th>지역</Th>
            <Th>{writeAble ? <>견적마감일</> : <>작업시작일</>}</Th>
            <Th>작성일</Th>
            <Th>상태</Th>
            <Th>{writeAble ? <>작성자</> : <>요청자</>}</Th>
          </Tr>
        </Thead>
        <Tbody style={{ fontSize: '15px' }}>
          {data.map((data) => {
            return (
              <Tr key={data.sn}>
                <Td>
                  <Link
                    to={
                      writeAble ? `/estimate/list/${data.sn}` : `/request/partner/list/${data.sn}`
                    }
                  >
                    {data.title}
                  </Link>
                </Td>

                <Td>
                  {/* {data.sort.map((datas) => {
                    return <Labels>{datas}</Labels>;
                  })} */}
                  <h1>empty</h1>
                </Td>
                <Td>
                  {writeAble ? data.requisitionEntity.region2DepthName : data.region2DepthName}
                </Td>
                <Td>{writeAble ? data.requisitionEntity.deadline : data.deadline}</Td>
                <Td>{writeAble ? data.createdDate : data.createdDate}</Td>

                <Td
                  style={
                    data.state === 'SUCCESS'
                      ? { color: 'red', fontWeight: 'bold' }
                      : { color: 'blue' }
                  }
                >
                  {writeAble ? data.requisitionEntity.state : data.state}
                </Td>
                <Td>{data.userEntity.name}</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </>
  );
};

export default RequestTable;

RequestTable.defaultProps = {
  writeAble: false,
  data: [
    {
      title: 'defaultTitle',
      sort: ['SERVICE', '서비스'],
      deadline: '2021-00-00',
      createdDate: '작성일',
      region2DepthName: 'defaultregion',
      state: 'SUCCESS',
      userEntity: {
        name: '홍길동'
      }
    }
  ]
};
