import React from 'react';
import styled from 'styled-components';

const Container = () => {
  return (
    <>
      <FirstSection>
        <p style={{ color: 'white' }}>개인정보처리방침</p>
        <span>|</span>
        <p>이용약관</p>
        <span>|</span>
        <p>쿠키정책</p>
      </FirstSection>
      <SecondSeciton>
        <aside>
          <div>
            <p>고객상담센터 : pleasehaejo@gmail.com</p>
            <span>|</span>
            <p>상담가능시간 : whenever</p>
            <span>|</span>
            <p>공휴일 휴무</p>
          </div>
          <div>
            <p>정영호 & 신지혜 & 박세훈</p>
            <span>|</span>
            <p>아무말 대잔치</p>
            <span>|</span>
            <p>사업자 등록번호 : 없어용</p>
            <span>|</span>
            <p>주소 : 페이스북 따라해서 아늑한 우리집</p>
          </div>
          <div>
            <p>
              @ 멋진 말은 아무나 할 수 있는 것입니다. 길수록 뭔가 홈페이지가 예뻐보이기 마련입니다.
            </p>
          </div>
          <div>
            <p>@ 2021 플리즈해조 공동합작품</p>
          </div>
        </aside>
        <aside>
          <img src='/logo512.png' />
        </aside>
      </SecondSeciton>
    </>
  );
};

export default Container;

const FirstSection = styled.section`
  padding: 20px 100px;
  display: flex;
  p {
    font-size: 15px;
    margin-left: 30px;
  }
  span {
    margin-left: 30px;
    text-align: center;
  }

  color: #4a4a4a;
  border-bottom: 1px solid #777777;
`;

const SecondSeciton = styled.section`
  img {
    max-width: 100px;
  }

  display: grid;
  grid-template-columns: 3fr 1fr;

  div {
    display: flex;
    margin-top: 5px;
  }
  p {
    font-size: 15px;
    margin-left: 30px;
  }
  span {
    margin-left: 30px;
    text-align: center;
  }

  padding: 50px 100px;
  color: #525252;
`;
