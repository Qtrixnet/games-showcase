import {
  genresRequestAction,
  genresSuccessAction,
  genresFailedAction,
} from '../reducers/genres';
import api from "../../utils/Api";
import {getFilteredGenres} from "../../utils/utils";
import {filteredGenresMock} from "../../mocks/genres";
import {AppDispatch} from "../store";

export const getGenres = () => (dispatch: AppDispatch) => {
  dispatch(genresRequestAction());
  return api.getGenres()
    .then(genres => {
      const filteredGenres = getFilteredGenres(genres.results, filteredGenresMock)
      dispatch(genresSuccessAction(filteredGenres))
    })
    .catch(error => {
      console.log(error);
      dispatch(genresFailedAction());
    })
}
