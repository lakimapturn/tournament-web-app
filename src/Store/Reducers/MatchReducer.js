import { FETCHING_MATCH_DATA, FETCH_MATCH_LIST } from "../Actions/MatchActions";

const initialState = {
  isFetching: false,
  matches: [],
  initialNumMatches: 2,
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MATCH_DATA: {
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
      });
    }

    case FETCH_MATCH_LIST: {
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        matches: action.payload.matches,
        initialNumMatches: action.payload.initial_num_matches,
      });
    }

    default: {
      return state;
    }
  }
};

export default matchReducer;
