import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background: #000;
  height: 200vh;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
`;
const Banner = styled.div<{ $bgphoto: string | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 60px;
  background-image: url(${(props) => props.$bgphoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 58px;
  margin-bottom: 20px;
`;
const Overview = styled.p`
  font-size: 20px;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
`;
const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  gap: 10px;
  width: 100%;
`;
const Box = styled(motion.div)`
  background: #fff;
  height: 200px;
  color: ${(props) => props.theme.red};
  font-size: 70px;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "mowPlaying"],
    getMovies
  );
  console.log(data, isLoading);
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) => prev + 1);
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      {isLoading ? <Loader>Loading...</Loader> : null}
      <>
        <Banner
          onClick={increaseIndex}
          $bgphoto={makeImagePath(data?.results[2].backdrop_path)}
        >
          <Title>{data?.results[2].title}</Title>
          <Overview>{data?.results[2].overview}</Overview>
        </Banner>
        <Slider>
          {/* exit 이 끝나면 실행시켜줄 함수 = onExitComplete */}
          <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
            <Row
              key={index}
              transition={{ type: "tween", duration: 1 }}
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Box key={1}>{i}</Box>
              ))}
            </Row>
          </AnimatePresence>
        </Slider>
      </>
    </Wrapper>
  );
};

export default Home;
