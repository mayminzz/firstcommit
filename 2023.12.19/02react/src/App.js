import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
  background: ${(props) => props.theme.background};
`;
const Title = styled.h1`
  // props는 index에서 theme={darkTheme} 를 말하는 것
  color: ${(props) => props.theme.textColor};
`;

// const Box = styled.div`
//   background: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;
// const Input = styled.input.attrs({ required: true })`
//   background: tomato;
// `;

// const rotationAnimation = keyframes`
// 0% {
//   transform : retate(0deg);
//   border-radius: 0px;
// }
// 50% {
//   transform: rotate(360deg);
//   border-radius: 50%;
// }
// 100% {
//   transform : retate(0deg);
//   border-radius: 0px;
// }
// `;

// const Emoji = styled.span`
//   font-size: 50px;
// `;

// const Box = styled.div`
//   width: 200px;
//   height: 200px;
//   background: yellow;
//   animation: ${rotationAnimation} 1s linear infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${Emoji} {
//     &:hover {
//       font-size: 100px;
//     }
//     &:active {
//       opacity: 0;
//     }
//   }
// `;



function App() {
  return (
    <Container>
      <Title>Hello, minju!</Title>
      {/* <Input />
      <Input />
      <Input />
      <Input />
      <Input /> */}
      {/* <Box>
        <Emoji>🐣</Emoji>
      </Box>
      <Emoji>🤬</Emoji> */}
    </Container>
  );
}

export default App;
