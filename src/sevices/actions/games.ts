import {
  gamesRequestAction,
  gamesSuccessAction,
  gamesFailedAction,
} from '../reducers/games';
import api from "../../utils/Api";

// @ts-ignore
export const getGamesInfo = () => (dispatch) => {
  dispatch(gamesRequestAction());
  return api.getGamesInfo()
    .then(gamesInfo => {
      dispatch(gamesSuccessAction(gamesInfo))
    })
    .catch(error => {
      console.log(error);
      // @ts-ignore
      dispatch(gamesFailedAction(error));
    })
}
