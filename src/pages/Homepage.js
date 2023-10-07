import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//css-in-js
import styled from 'styled-components';
import  Button  from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import '../css/Header.css';
import '../css/Test.css';
import '../css/Top.css';
import './Login';



const Homepage = () => {
    const navigate = useNavigate();
    
    const handleClickButton = () => {
        //useHistotry
        navigate('/Login');
    }
    const [TestData, setTestData] = React.useState({});

    const Top = () => {
        return (
          <nav className="navbar">
            <button className="button" onClick={() => navigate("/Login")}>로그인</button>
          </nav>
        );
      }
    const Header = () => {
        return (
          <div className="name-logo">
            MBTI 테스트 하기
          </div>
        );
      }
      const Test = () => {
        return (
           <div className="main-container">
      {/* 테스트 1을 Home 컴포넌트로 링크 */}
      <Link to="/Home" className="section section-1">
        <div>{TestData.name}</div>
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
      }
    
    return (
        <Wrapper>
        <Top />
        <Header></Header>
        <Contents>
        <Title>Choose Your Test!</Title>
        <Test></Test>
        <Desc>테스트 하러가기!!</Desc>
        <Button style={{fontFamily: "font-family: EF_jejudoldam"}} onClick={handleClickButton}>테스트 시작하기</Button>
        </Contents>
        </Wrapper>
    )
}


export default Homepage;

const Wrapper = styled.div`
height:100%;
width:100%;
`

const Contents = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.div`
font-size:30pt;
margin-top:40px;
font-family: "EF_jejudoldam"
`


const Desc = styled.div`
font-size: 20pt;
margin-top: 20px;
font-family: "EF_jejudoldam"
`