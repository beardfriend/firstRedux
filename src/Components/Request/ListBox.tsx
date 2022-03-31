import { AiFillEdit } from 'react-icons/ai';
import { Button } from '@chakra-ui/react';
import { Labels } from '@Components/Form/Badge';
import { Link } from 'react-router-dom';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import styled from 'styled-components';
interface ListType {
  Delete?: any;
  Edit?: () => any;
  service: { [key: string]: string }[];
  region: string;
  date?: string;
  title?: string;
}

const ListBox = ({ Delete, Edit, service, region, date, title }: ListType) => {
  return (
    <ListCotainer>
      <div className='js min'>
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
      <div className='min'>
        {service.map((serviceData) => {
          return <Labels key={serviceData.serviceType}>{serviceData.serviceType}</Labels>;
        })}
      </div>

      <div className='js min'>
        <h1>
          {region} / {date} 견적마감
        </h1>

        <div className='flex'>
          <Link to='#'>
            <Button onClick={Delete}>
              <RiDeleteBinLine />
            </Button>
          </Link>
          <Link to='#'>
            <Button onClick={Edit}>
              <AiFillEdit />
            </Button>
          </Link>
        </div>
      </div>
    </ListCotainer>
  );
};

export default ListBox;

const ListCotainer = styled.div`
  min-width: 400px;
  min-height: 200px;
  position: relative;
  z-index: 10;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  area {
    min-height: 20px;
  }
  button {
    opacity: 0;
  }
  svg {
    opacity: 0;
    z-index: 999;
    font-size: 25px;
    position: relative;
  }
  &:hover {
    button {
      opacity: 1;
    }
    svg {
      opacity: 1;
    }
    transform: scale(1.05);
    transition: all 500ms ease;
  }

  .min {
    min-height: 30px;
  }
  .js {
    display: flex;

    justify-content: space-between;
  }
  .flex {
    display: flex;
    gap: 10px;
    /* svg {
      cursor: pointer;
    } */
  }
`;

ListBox.defaultProps = {
  data: ['철거', '정리', '서비스'],
  service: [{ serviceType: 'test' }, { serviceType: '기타' }],
  date: '2021-05-12'
};
