import { Label, SemanticCOLORS } from 'semantic-ui-react';

import { BsX } from 'react-icons/bs';
import React from 'react';
import styled from 'styled-components';

interface Props {
  color?: SemanticCOLORS | undefined;
  children: string;
  isDelete?: boolean;
  onClick?: () => void;
}

export const Labels = ({ color, isDelete, children, onClick }: Props) => (
  <>
    <Label color={color}>
      <FlexBox>
        {children}
        {isDelete && <Icon onClick={onClick} />}
      </FlexBox>
    </Label>
  </>
);

Label.defaultProps = {
  color: 'teal'
};

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled(BsX)`
  cursor: pointer;
  &:hover {
    color: black;
  }
  font-size: 15px;
  color: white;
`;
