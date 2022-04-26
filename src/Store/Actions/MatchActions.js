import { baseUrl } from "../../Constants/Data";
import { getCookie } from "../../Constants/Functions";

export const FETCHING_MATCH_DATA = "FETCHING_MATCH_DATA";
export const FETCH_MATCH_LIST = "FETCH_MATCH_LIST";

export const fetchMatchList = (tournamentId, age, gender, eventId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_MATCH_DATA });

      const csrftoken = getCookie("csrftoken");

      const response = await fetch(
        `${baseUrl}matches?tournament_id=${tournamentId}&age=${age}&gender=${gender}&event_id=${eventId}`,
        {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        }
      );
      const data = await response.json();
      // console.log("Success! ", data);

      return await dispatch({
        type: FETCH_MATCH_LIST,
        payload: {
          matches: data.matches,
          initial_num_teams: data["initial-teams"],
        },
      });
    } catch (err) {
      console.log("FETCH MATCH LIST ERROR: " + err);
    }
  };
};
