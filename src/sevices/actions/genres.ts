import {
  genresRequestAction,
  genresSuccessAction,
  genresFailedAction,
} from '../reducers/genres';
import api from "../../utils/Api";

// @ts-ignore
export const getGenres = () => (dispatch) => {
  dispatch(genresRequestAction());
  return api.getGenres()
    .then(genres => {
      dispatch(genresSuccessAction(genres))
    })
    .catch(error => {
      console.log(error);
      // @ts-ignore
      dispatch(genresFailedAction(error));
    })
}
