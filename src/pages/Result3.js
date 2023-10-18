import React from 'react';
// css-in-js 
import styled from 'styled-components';
// import PangImage from '../assets/ggompang.jpeg';
import Button from 'react-bootstrap/Button';
import { ResultData3 } from '../assets/data/resultdata3';
import { useSearchParams, useNavigate } from 'react-router-dom';


const Result3 = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData3.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti])



  return (
    <Wrapper>
      <Header>여행지 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img src={resultData.image} className="rounded-circle" width={350} height={350} />
        </LogoImage>
        <Desc>당신의 추천 여행지는 {resultData.name}입니다.</Desc>
          <Button style={{ fontFamily: "12", width: 170 }} onClick={() => navigate("/")}>
            테스트 다시하기
          </Button>

      </Contents>
    </Wrapper >
  )
}

export default Result3;

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
