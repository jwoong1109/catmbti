import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/ggompang.jpeg'
import  Button  from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();


    const handleClickButton = () => {
        //useHistotry
        navigate('/question');
    }
    return (
        <Wrapper>
        <Header>예비 집사 판별기.</Header>
        <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
            <img src={PangImage} className='rounded-circle' width={350} height={350}></img>
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 맞는 고양이 찾기</Desc>
        <Button style={{fontFamily: "font-family: EF_jejudoldam"}} onClick={handleClickButton}>테스트 시작하기</Button>
        </Contents>
        </Wrapper>
    )
}


export default Home;

const Wrapper = styled.div`
height:100vh;
eidth:100%;
`

const Header = styled.div`
font-size: 48pt;
display: flex;
justify-content: center;
align-items: center;
font-family: "EF_jejudoldam"
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

const LogoImage = styled.div`
margin-top: 10px;
`

const Desc = styled.div`
font-size: 20pt;
margin-top: 20px;
font-family: "EF_jejudoldam"
`