import {
  gamesRequestAction,
  gamesSuccessAction,
  gamesFailedAction
} from '../reducers/gamesData';
import api from "../../utils/Api";

export const getGamesInfo = () => (dispatch) => {
  dispatch(gamesRequestAction());
  return api.getGamesInfo()
    .then(gamesInfo => {
      dispatch(gamesSuccessAction(gamesInfo))
    })
    .catch(error => {
      console.log(error);
      dispatch(gamesFailedAction(error));
    })
}
