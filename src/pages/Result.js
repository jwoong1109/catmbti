import React from 'react';
//css-in-js
import styled from 'styled-components';
import PangImage from '../assets/ggompang.jpeg'
import  Button  from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';


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
    <Wrapper>
        <Header>예비 집사 판별기.</Header>
        <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
            <img src={resultData.image} className='rounded-circle' width={350} height={350}></img>
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
        <Button style={{fontFamily: "font-family: EF_jejudoldam"}} onClick={() => navigate("/")} >
            테스트 다시하기</Button>
        </Contents>
    </Wrapper>
        )
}

export default Result;

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