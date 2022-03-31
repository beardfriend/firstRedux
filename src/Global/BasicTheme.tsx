import { css } from 'styled-components';
import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  z-index: 100;
`;

export const f_aC = css`
  display: flex;
  align-items: center;
`;
export const fc_aC = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Head_Foot = css`
  display: flex;
  width: 100%;
  background: rgb(255, 255, 255);
`;

export const BadegBox = styled.div`
  border: 1px solid #e2e8f0;
  padding: 10px 15px;
  display: flex;
  gap: 10px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }
  img:hover {
    filter: brightness(90%);
  }
`;

export const Container = styled.div`
  display: flex;

  gap: 10px;
`;

interface Props {
  border?: boolean;
}
export const Box = styled.div<Props>`
  width: 500px;
  min-height: 600px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background: #ffffff;
  border: ${(props) => (!props.border ? '1px solid #e5e5e5' : '')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  form {
    width: 80%;
  }
`;
// 요청서 및 파트너 페이지

export const BigContainer = styled(Box)`
  width: 700px;

  gap: 20px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  section {
    width: 80%;
  }
  #hundred {
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title_Box = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;
