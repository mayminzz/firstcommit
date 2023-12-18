import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
const getMovie = () => {
  return async (dispatch) => {
    const popularMovieApi = await api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const topRatedMovieApi = await api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upComingMovieApi = await api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    const [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
      popularMovieApi,
      topRatedMovieApi,
      upComingMovieApi,
    ]);
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upComingMovies: upComingMovies.data,
      },
    });
  };
};

export const movieAction = { getMovie };
