import { getCookie } from "../../Constants/Functions";

export const FETCHING_TOURNAMENT_DATA = "FETCHING_TOURNAMENT_DATA";
export const FETCH_TOURNAMENT_LIST = "FETCH_TOURNAMENT_LIST";
export const FETCH_TOURNAMENT_DETAILS = "FETCH_TOURNAMENT_DETAILS";

export const fetchTournamentList = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_TOURNAMENT_DATA });

      const csrftoken = getCookie("csrftoken");

      const response = await fetch(
        "https://gma-tournament-admin.herokuapp.com/tournament-list",
        {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        }
      );
      const data = await response.json();
      // console.log("Tournament List Success! ", data);

      return await dispatch({
        type: FETCH_TOURNAMENT_LIST,
        payload: { tournament_list: data },
      });
    } catch (err) {
      console.log("FETCH TOURNAMENT LIST ERROR: " + err);
    }
  };
};

export const fetchTournamentDetails = (tournamentId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_TOURNAMENT_DATA });

      const csrftoken = getCookie("csrftoken");

      const response = await fetch(
        `https://gma-tournament-admin.herokuapp.com/tournament-details?id=${tournamentId}`,
        {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        }
      );
      const data = await response.json();
      // console.log("Success! ", data);

      return await dispatch({
        type: FETCH_TOURNAMENT_DETAILS,
        payload: { tournament_details: data },
      });
    } catch (err) {
      console.log("FETCH TOURNAMENT DETAILS ERROR: " + err);
    }
  };
};
