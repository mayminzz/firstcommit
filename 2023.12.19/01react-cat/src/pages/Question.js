import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  console.log(totalScore);
  // const handleClickButtonA = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     // splice 바꿔치기
  //     totalScore.splice(0, 1, newObject);
  //   } else if(type === "SN"){
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   }else if(type === "TF"){
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else if(type === "JP"){
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };
  // const handleClickButtonB = (no, type) => {
  //   setQuestionNo(questionNo + 1);
  // };

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    console.log(newScore);
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      console.log(mbti);
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="success"
        now={(questionNo / QuestionData.length) * 100}
        style={{
          marginTop: 20,
        }}
      />
      <Title>{QuestionData[0].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          className="btn-warning"
          style={{
            width: "30%",
            height: "200px",
            fontSize: "20px",
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          className="btn-warning"
          style={{
            width: "30%",
            height: "200px",
            fontSize: "20px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;
