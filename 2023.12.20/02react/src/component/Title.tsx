import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
  color: #000;
  font-size: 40px;
`;

//readOnly :뱐하지 않는 고정값을 주고 싶다면 label앞에 
interface props {
  label: string;
}

const Title = ({ label }: props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Title;
