import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";

const MovieCard = ({ item }) => {
  const [genre, setgenre] = useState([]);

  useEffect(() => {
    const genreList = () => {
      const response = fetch("https://api.themoviedb.org/3/genre/movie/list");
      console.log(response);
      const result = response.json();
      setgenre(result);
    };
  }, []);

  console.log(item);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/phttps://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id, index) => (
            <Badge key={index} bg="danger">
              {id}
            </Badge>
          ))}
        </div>
        <span>{item.vote_average}</span>
        <span>{item.adult ? "청불" : "청소년관람가"}</span>
      </div>
    </div>
  );
};

export default MovieCard;
