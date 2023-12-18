import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );
  console.log(popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);
  return (
    <div className="slide">
      {popularMovies.results && <Banner movie={popularMovies.results[6]} />}
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
