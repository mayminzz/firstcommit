const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
      };
    default:
      return { ...state };
  }
};
export default movieReducer;
