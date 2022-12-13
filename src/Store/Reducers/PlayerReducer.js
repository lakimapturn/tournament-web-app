import {
  FETCHING_PLAYER_DATA,
  FETCH_PLAYER_DATA,
} from "../Actions/PlayerActions";

const initialState = {
  isFetching: false,
  players: [],
  school_players: [],
  teams: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PLAYER_DATA: {
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
      });
    }

    case FETCH_PLAYER_DATA: {
      const schoolPlayers = {};
      const players = [];
      action.payload.teams.forEach((team) => {
        if (!schoolPlayers[team.school.name])
          schoolPlayers[team.school.name] = [];
        team.players.forEach((player) => {
          schoolPlayers[team.school.name].push(player);
          players.push(player);
        });
      });

      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        players: players,
        teams: action.payload.teams,
        school_players: schoolPlayers,
      });
    }

    default: {
      return state;
    }
  }
};

export default playerReducer;
