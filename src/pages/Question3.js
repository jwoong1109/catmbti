import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData3 } from '../assets/data/questiondata3';


const Question3 = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ])

  const navigate = useNavigate();

  console.log('totalScore', totalScore);

    const handleClickButton = (no, type) => {
      const newScore = totalScore.map((s) =>
        s.id === type ? { id: s.id, score: s.score + no } : s
      );
    
        setTotalScore(newScore);
    
        if (QuestionData3.length !== questionNo + 1) {
          // 다음문제로 문제수 증가
          setQuestionNo(questionNo + 1);
        } else {
          // mbti도출
          const mbti = newScore.reduce(
            (acc, curr) =>
              acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
            ""
          );
          // 결과 페이지 이동
          navigate({
            pathname: "/result3",
            search: `?${createSearchParams({
              mbti: mbti,
            })}`
          });
        }
      }
  
   return (
    <Wrapper>
      <ProgressBar striped variant="danger" now={(questionNo / QuestionData3.length) * 100} style={{ marginTop: '20px' }} />
      <Title>{QuestionData3[questionNo].title}</Title>
      <ButtonGroup>
        <Button onClick={() => handleClickButton(1, QuestionData3[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>{QuestionData3[questionNo].answera}</Button>
        <Button onClick={() => handleClickButton(0, QuestionData3[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt", marginLeft: "20px" }}>{QuestionData3[questionNo].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
   }

export default Question3;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  font-family: "12";
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction : row;
  align-items: center;
  justify-content: center;
  font-family: "12";
`