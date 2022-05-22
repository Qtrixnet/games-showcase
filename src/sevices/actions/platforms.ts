import {
  platformsRequestAction,
  platformsSuccessAction,
  platformsFailedAction
} from '../reducers/platforms';
import api from "../../utils/Api";
import {getFilteredPlatforms} from "../../utils/utils";
import {filteredPlatformsMock} from "../../mocks/platforms";
import {AppDispatch} from "../store";

export const getPlatforms = () => (dispatch: AppDispatch) => {
  dispatch(platformsRequestAction());
  return api.getPlatforms()
    .then(platforms => {
      const filteredPlatforms = getFilteredPlatforms(platforms.results, filteredPlatformsMock)
      dispatch(platformsSuccessAction(filteredPlatforms))
    })
    .catch(error => {
      console.log(error);
      dispatch(platformsFailedAction());
    })
}
