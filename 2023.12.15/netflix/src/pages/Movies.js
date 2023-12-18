import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const Movies = ({ item }) => {
  const { nowPlayingMovies, loading } = useSelector((state) => state.movie);

  console.log(nowPlayingMovies);
  useEffect(() => {}, []);
  if (loading || nowPlayingMovies === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div
      className="movies"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w440_and_h660_face/${nowPlayingMovies?.results[0].poster_path}` +
          ")",
      }}
    >
      {nowPlayingMovies.results.map((movie, index) => (
        <div key={index}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Movies;
