import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import ColorImage from "../assets/ColorMain.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question1");
  };

  return (
    <>
      <Container>
        <Header>퍼스널 컬러 진단!</Header>
        <Wrapper>
          <Title>나의 색을 찾아라</Title>
          <LogoImage>
            <img
              src={ColorImage}
              alt="색상 사진"
              className="rounded-circle"
              width={350}
              height={350}
            />
          </LogoImage>
          <Desc>MBTI를 기반으로 하는 퍼스널 컬러 찾기</Desc>
          <Desc>내게 맞는 색깔은?</Desc>
          {/* <LogoImage src={logo} /> */}
          <Button
            onClick={handleClickButton}
            className="btn-danger"
            style={{
              fontFamily: "SimKyungha",
              fontSize: 25,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            테스트 시작하기
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #fffacd;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  font-size: 40pt;
  font-family: "SimKyungha";
  height: 10vh;
  width: 100%;
  background: #ffa07a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 30pt;
  font-family: "SimKyungha";
  font-weight: 550;
`;

const Desc = styled.div`
  font-size: 20pt;
  font-family: "SimKyungha";
  font-weight: 550;
`;