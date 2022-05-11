// import api from "../../utils/Api";

import {
  gamesRequestAction,
  gamesSuccessAction,
  gamesFailedAction
} from '../reducers/gamesData';

export const getGamesInfo = () => (dispatch) => {
  dispatch(gamesRequestAction());
  return api.getCreditInfo()
    .then(gamesInfo => {
      dispatch(gamesSuccessAction(gamesInfo))
    })
    .catch(error => {
      console.log(error);
      dispatch(gamesFailedAction(error));
    })
}
