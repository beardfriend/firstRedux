import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import React from 'react';

const EstimateTable = ({ data }) => {
  return (
    <>
      <Table variant='striped' colorScheme='gray'>
        <TableCaption>PleaseHaejo</TableCaption>
        <Thead>
          <Tr>
            <Th>제목</Th>
            <Th>분류</Th>
            <Th>견적금액</Th>
            <Th>작업시작일</Th>
            <Th>작성일</Th>
            <Th>상태</Th>
            <Th>작성자</Th>
          </Tr>
        </Thead>
        <Tbody style={{ fontSize: '15px' }}>
          {data.map((data) => {
            return (
              <Tr key={data.sn}>
                <Td>
                  <Link to={`/estimate/client/list/${data.sn}`}>{data.title}</Link>
                </Td>

                <Td>
                  {/* {data.sort.map((datas) => {
                    return <Labels>{datas}</Labels>;
                  })} */}
                  <h1>empty</h1>
                </Td>
                <Td>{data.estimateAmount}</Td>
                <Td>{data.workFromdate}</Td>
                <Td>{data.createdDate}</Td>

                <Td
                  style={
                    data.requisitionEntity.state === 'SUCCESS'
                      ? { color: 'red', fontWeight: 'bold' }
                      : { color: 'blue' }
                  }
                >
                  {data.requisitionEntity.state}
                </Td>
                <Td>{data.partnerName}</Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </>
  );
};

export default EstimateTable;

EstimateTable.defaultProps = {
  data: [
    {
      title: 'defaultTitle',
      sn: 1,
      estimateAmount: 'test',
      workFromdate: '2021-00-00',
      createdDate: '작성일',
      partnerName: 'name',
      requisitionEntity: {
        state: 'SUCCESS'
      }
    }
  ]
};
