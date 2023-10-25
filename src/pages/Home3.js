import React from 'react';
// css-in-js 
import styled from 'styled-components';
import PangImage from '../assets/trip/45.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home3 = () => {
 
  const navigate = useNavigate();

  const handleClickButton = () => {
    // useHistory
    navigate('/question3');

  }

    return (
      <Wrapper>
      <Header>여행지 판별기</Header>
      <Contents>
        <Title>나에게 맞는 여행지는?</Title>
        <LogoImage>
          <img src={PangImage} className="rounded-circle" width={350} height={350} />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 여행지 찾기!</Desc>
        <Button style={{ fontfamily: "12" }} onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  )
}

export default Home3;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "12";
`
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "12";

`

const LogoImage = styled.div`
  margin-top: 10px;
`


const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "12";

`