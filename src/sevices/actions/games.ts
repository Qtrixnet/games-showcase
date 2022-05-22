import {
  gamesRequestAction,
  gamesSuccessAction,
  gamesFailedAction,
} from '../reducers/games';
import api from "../../utils/Api";
import {AppDispatch} from "../store";

export const getGamesInfo = () => (dispatch: AppDispatch) => {
  dispatch(gamesRequestAction());
  return api.getGamesInfo()
    .then(gamesInfo => {
      dispatch(gamesSuccessAction(gamesInfo))
    })
    .catch(error => {
      console.log(error);
      dispatch(gamesFailedAction());
    })
}
