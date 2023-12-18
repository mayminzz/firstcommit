const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  nowPlayingMovies: {},
  genre: [],
  loading: true,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        nowPlayingMovies: payload.nowPlayingMovies,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
export default movieReducer;
