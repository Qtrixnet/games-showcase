import {
  platformsRequestAction,
  platformsSuccessAction,
  platformsFailedAction
} from '../reducers/platforms';
import api from "../../utils/Api";

// @ts-ignore
export const getPlatforms = () => (dispatch) => {
  dispatch(platformsRequestAction());
  return api.getPlatforms()
    .then(genres => {
      dispatch(platformsSuccessAction(genres))
    })
    .catch(error => {
      console.log(error);
      // @ts-ignore
      dispatch(platformsFailedAction(error));
    })
}
