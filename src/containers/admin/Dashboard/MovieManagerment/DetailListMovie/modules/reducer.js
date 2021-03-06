import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, DELETE_MOVIE, } from "./constans";



let initialState = {
  loading: false,
  listMovie: [],
  err: null,
};


const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    case DETAIL_LISTMOVIE_REQUEST:
      state.loading = true;
      state.listMovie = [];
      state.err = null;

      return { ...state };
    case DETAIL_LISTMOVIE_SUCCESS:
      state.loading = false;
      state.listMovie = action.listMovie;
      state.err = null;

      return { ...state };
    case DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.listMovie = [];
      state.err = action.err;

      return { ...state };
    case DELETE_MOVIE:
      state.movie = action.movie;
      return { ...state };

    default:
      return { ...state };

  }
}
export default movieReducer;