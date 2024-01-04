import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { useNavigate, useMatch } from "react-router-dom";

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
const Box = styled(motion.div)<{ $bgphoto: string }>`
  background: #fff;
  background-image: url(${(props) => props.$bgphoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  // color: ${(props) => props.theme.red};
  position: relative;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const Info = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  opacity: 0;
  position: absolute;
  width: 91.7%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18x;
  }
`;
const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    zIndex: 99,
    scale: 1.2,
    y: -50,
    transition: { delay: 0.3, type: "tween" },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
  },
};

const offset = 6;

const Home = () => {
  const bigMovieMatch = useMatch("/movies/:movieId");
  console.log(bigMovieMatch);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "mowPlaying"],
    getMovies
  );
  console.log(data, isLoading);
  const history = useNavigate();
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  return (
    <Wrapper>
      {isLoading ? <Loader>Loading...</Loader> : null}
      <>
        <Banner
          onClick={increaseIndex}
          $bgphoto={makeImagePath(data?.results[8].backdrop_path)}
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
              {data?.results
                .slice(2)
                .slice(offset * index, offset * index + offset)
                .map((movie) => (
                  <Box
                    layoutId={movie.id + ""}
                    key={movie.id}
                    variants={boxVariants}
                    initial="normal"
                    whileHover="hover"
                    $bgphoto={makeImagePath(movie.backdrop_path, "w500")}
                    onClick={() => onBoxClicked(movie.id)}
                  >
                    <Info variants={infoVariants}>
                      <h4>{movie.title}</h4>
                    </Info>
                  </Box>
                ))}
            </Row>
          </AnimatePresence>
        </Slider>
        <AnimatePresence>
          {bigMovieMatch ? (
            <>
              <Overlay />
              <motion.div
                layoutId={bigMovieMatch.params.movieId}
                style={{
                  position: "absolute",
                  width: "40vw",
                  height: "80vh",
                  top: 50,
                  left: 0,
                  right: 0,
                  background: "#f00",
                  margin: "0 auto",
                }}
              />
            </>
          ) : null}
        </AnimatePresence>
      </>
    </Wrapper>
  );
};

export default Home;
