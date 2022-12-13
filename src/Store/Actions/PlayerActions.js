import { baseUrl } from "../../Constants/Data";
import { getCookie } from "../../Constants/Functions";

export const FETCHING_PLAYER_DATA = "FETCHING_PLAYER_DATA";
export const FETCH_PLAYER_DATA = "FETCH_PLAYER_DATA";

export const fetchPlayerData = (tournamentId, gender, age, eventId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_PLAYER_DATA });

      const csrftoken = getCookie("csrftoken");

      const response = await fetch(
        `${baseUrl}teams?gender=${gender}&age=${age}&tournament_id=${tournamentId}&event_id=${eventId}`,
        {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        }
      );
      const data = await response.json();
      // console.log("Success! ", data);

      return await dispatch({
        type: FETCH_PLAYER_DATA,
        payload: { teams: data },
      });
    } catch (err) {
      console.log("FETCH PLAYER DATA ERROR: " + err);
    }
  };
};
