import {
  DEL_CLIENT_REQUSET,
  GET_CLIENT_REQUEST,
  RequestState
} from '@Features/REQUEST/RequestSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ListBox from '@Components/Request/ListBox';
import { MainLayout } from '@Components/Layout';
import { Section } from '@Global/BasicTheme';
import Spinners from '@Components/Loading/Spinner';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const RequestList = () => {
  const data = useSelector(RequestState);
  const dispatch = useDispatch();
  const history = useHistory();
  const { list, bolType } = data;

  useEffect(() => {
    dispatch(GET_CLIENT_REQUEST());
  }, [dispatch]);

  const DeletePost = (sn) => {
    dispatch(DEL_CLIENT_REQUSET(sn));
  };

  const Edit = () => {
    console.log('hi');
  };

  return (
    <MainLayout middle='middle' login>
      {data.status === 'LOADING' ? (
        <Spinners />
      ) : (
        <ListContainer>
          {!bolType.isList ? (
            <>
              <h1 className='title'>전문가들에게 작업을 요청해보세요</h1>
              <Link to='/request/add'>
                <Button w='300px' h='70px' colorScheme='teal'>
                  요청서 작성
                </Button>
              </Link>
            </>
          ) : (
            <div className='list'>
              {list.map((datas) => {
                const {
                  title,
                  requisitionRequestServiceList,
                  region1DepthName,
                  region2DepthName,
                  sn
                } = datas;

                return (
                  <Link to={`/request/list/${sn}`} style={{ position: 'relative', zIndex: 1 }}>
                    <ListBox
                      key={title}
                      title={title}
                      region={`${region1DepthName} ${region2DepthName}`}
                      service={requisitionRequestServiceList}
                      Delete={() => DeletePost(sn)}
                      Edit={() => Edit()}
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </ListContainer>
      )}
    </MainLayout>
  );
};

export default RequestList;

export const ListContainer = styled(Section)`
  width: 80%;
  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 50px;
    gap: 20px;

    &:hover {
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;
