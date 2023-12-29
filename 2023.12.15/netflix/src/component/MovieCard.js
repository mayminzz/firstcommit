import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  console.log(genreList);
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
            <Badge className="badge" key={index} bg="danger">
              {/* 비교하는 값과 같다면 새로운 배열을 만들어줌 */}
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <span className="average">{(item.vote_average).toFixed(1)}점 </span>
        <span>{item.adult ? "청불" : "청소년관람가"}</span>
      </div>
    </div>
  );
};

export default MovieCard;
