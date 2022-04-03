import {
  FETCHING_TOURNAMENT_DATA,
  FETCH_TOURNAMENT_DETAILS,
  FETCH_TOURNAMENT_LIST,
} from "../Actions/TournamentActions";

const initialState = {
  isFetching: false,
  tournaments: [],
};

const tournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TOURNAMENT_DATA: {
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
      });
    }

    case FETCH_TOURNAMENT_LIST: {
      if (state.tournaments.length !== action.payload.tournament_list)
        return Object.assign({}, state, {
          ...state,
          isFetching: false,
          tournaments: action.payload.tournament_list,
        });
      else
        return Object.assign({}, state, {
          ...state,
          isFetching: false,
        });
    }

    case FETCH_TOURNAMENT_DETAILS: {
      const detailedTournaments = [...state.tournaments];

      const tournamentId = detailedTournaments.findIndex((tournament) => {
        return tournament.id === action.payload.tournament_details.id;
      });
      detailedTournaments[tournamentId === -1 ? 0 : tournamentId] =
        action.payload.tournament_details;

      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        tournaments: detailedTournaments,
      });
    }

    default: {
      return state;
    }
  }
};

export default tournamentReducer;
