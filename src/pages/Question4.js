import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData4 } from '../assets/data/questiondata4';


const Question4 = () => {
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
    
        if (QuestionData4.length !== questionNo + 1) {
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
            pathname: "/result4",
            search: `?${createSearchParams({
              mbti: mbti,
            })}`
          });
        }
      }
  
   return (
    <Wrapper>
      <ProgressBar striped variant="danger" now={(questionNo / QuestionData4.length) * 100} style={{ marginTop: '20px' }} />
      <Title>{QuestionData4[questionNo].title}</Title>
      <ButtonGroup>
        <Button onClick={() => handleClickButton(1, QuestionData4[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>{QuestionData4[questionNo].answera}</Button>
        <Button onClick={() => handleClickButton(0, QuestionData4[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt", marginLeft: "20px" }}>{QuestionData4[questionNo].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
   }

export default Question4;

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