import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
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

function App() {
  const x = useMotionValue(0);
  // const t = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-8000, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238),rgb(0,83,238)",
      "linear-gradient(135deg, rgb(238,0,153),rgb(211,0,238)",
      "linear-gradient(135deg, rgb(0,238,155),rgb(238,178,0)",
    ]
  );
  console.log(x);

  useEffect(() => {
    // t.on("change", () => console.log(t.get()));
    // x.on("change",() => console.log(x.get()));
  }, [x]);
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      {/* <button onClick={() => x.set(200)}>click me😃</button> */}
      <Box style={{ x, rotateZ, scale }} drag="y" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
