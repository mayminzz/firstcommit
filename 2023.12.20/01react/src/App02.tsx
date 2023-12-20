import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface Container {}

function App() {
  return (
    <Container>
      <H1>Protected</H1>
    </Container>
  );
}

export default App;
