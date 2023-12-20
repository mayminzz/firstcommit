import React from "react";
import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  borderColor,
  bgColor,
  //값이 없다면 dafault text 출력시켜라(기본값)
  text = "dafault text",
}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>("true");
  setCounter("Hello");
  //counter는 지금 숫자 1을 넣기로 약속이 되어있기 때문에 number가 아닌 값이 들어오게될 경우 오류가 뜬다. 초기값과 같은 형태를 주어야 한다.
  //=> 근데 만약 섞어서 넣고 싶다면 제네릭형식의 타입 <number | string> 숫자 또는 문자가 들어올수 있게 입력. (*또는 버티컬바 |)
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  //부모로부터 오게된다면 bgColor를 borderColor값으로 주겠다.borderColor가 정상적으로 들어오게된다면 bgColor가 들어온다(단락회로평가)
};

export default Circle;
