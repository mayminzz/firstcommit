import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 35px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center;
`;
// place-self: center; => 원들이 알아서 중앙정렬을 하게 된다.

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotate: 360, transition: { type: "spring", delay: 0.5 } },
// };

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255,255,255,0.4);
  border-radius: 40px;
  display:flex;
  justify-content:center;
  align-items: center;
  overflow:hidden;
`

const boxVariants01 = {
  start: { opscity: 0, scale: 0.5 },
  end: {
    opscity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: { opacity: 0, y: -200 },
  end: {
    opacity: 1,
    y: 0,
  },
};

const boxVariants02 = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgb(46, 204, 113)",
    transition: {
      duration: 0.3,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <BiggerBox>
        <Box
          variants={boxVariants02}
          whileHover="hover"
          whileTap="click"
          drag
          dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
          whileDrag="drag"
        />
      </BiggerBox>
      {/* <Box
        //mass:1 / duration:3/
        variants={myVars}
        initial="start"
        animate="end"
      /> */}
      {/* <motion.div></motion.div> */}
      {/* <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box> */}
    </Wrapper>
  );
}

export default App;
