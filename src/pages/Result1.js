import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
// import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from "react-router-dom";
// import queryString from "query-string";
import { ResultData } from "../assets/data/resultdata1";



const Result = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [searchParams] = useSearchParams();
  // const mbti = queryString.parse(location.search).mbti;
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  // React.useEffect(() => {
  //   // window.location.reload();
  // }, [mbti]);

  return (
    <>
      <Container>
      <Header style={{ background: resultData.color, fontFamily: "SimKyungha" }}>
  My Color is {resultData.name}
</Header>
        <Wrapper>
          <Title>당신의 퍼스널 컬러는</Title>
          <LogoImage>
            <img
              src={resultData.image}
              alt="옴팡사진"
              width={350}
              height={350}
              style={{marginTop: 30}}
            />
          </LogoImage>
          <Desc
            style={{
              marginTop: 10,
            }}
          >
            {resultData.desc}
          </Desc>
          <Desc
            style={{
              fontSize: "4rem",
            }}
          >
            {resultData.best}
            "{resultData.name}"
          </Desc>
        
          <div>
            <Button
              onClick={() => navigate("/")}
              className="btn-danger"
              style={{
                width: 220,
                fontFamily: "SimKyungha",
                fontSize: 25,
                marginTop: 20,
              }}
            >
              테스트 다시하기
            </Button>
            
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  height: 120vh;
  width: 100%;
  background: #fffacd;
  flex-direction: column;
`;

const Header = styled.div`
  color: black;
  font-size: 35pt;
  font-family: "SimKyungha";
  height: 10vh;
  width: 100%;
  background: #ffa07a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 70px;
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
  font-size: 3rem;
  font-family: "SimKyungha";
  font-weight: 550;
  width: 90%;
  text-align: center;
`;

// const ShareButtonGroup = styled.div`
//   margin-top: 20px;
//   display: flex;
//   // flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;