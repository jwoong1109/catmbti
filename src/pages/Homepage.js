import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// CSS-in-JS
import styled from 'styled-components';
import '../css/Header.css';
import '../css/Test.css';
import '../css/Top.css';
import './Join';
import Top from './Top';
import { TestData } from '../assets/data/testdata';

const Homepage = () => {
  const Header = () => {
    return <div className="name-logo">MBTI 테스트 하기</div>;
  };
  const Test = () => {
    return (
      <div className="main-container">
        {/* 테스트 1을 Home 컴포넌트로 링크 */}
        <Link to="/Home" className="section section-1">
          <div>{TestData[0].name}</div>
        </Link>
        <div className="section section-2">
          <div>테스트 1</div>
        </div>
        <div className="section section-3">
          <div>테스트 1</div>
        </div>
        <div className="section section-4">
          <div>테스트 1</div>
        </div>
      </div>
    );
  };

  return (
    <Wrapper>
      <Top />
      <Header />
      <Contents>
        <Title>Choose Your Test!</Title>
        <Test />
      </Contents>
      <Footer />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
background: rgba(142, 68, 173, 0.5); /* 투명한 배경 색상 */
  height: 100vh; /* 화면 높이 100%로 설정 */
  width: 100%; /* 화면 너비 100%로 설정 */
  position: relative; /* 상대 위치 지정 */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>저작권 © 2023 내 웹사이트.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333; /* 원하는 배경색 설정 */
  color: #fff;
  padding: 10px;
  text-align: center;
  position: absolute; /* 절대 위치 지정 */
  bottom: 0; /* 페이지 하단에 배치 */
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  text-align: center;
  font-family: "EF_jejudoldam";
`;
