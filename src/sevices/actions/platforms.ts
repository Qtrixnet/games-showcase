import {
  platformsRequestAction,
  platformsSuccessAction,
  platformsFailedAction
} from '../reducers/platforms';
import api from "../../utils/Api";
import {getFilteredPlatforms} from "../../utils/utils";
import {filteredPlatformsMock} from "../../mocks/platforms";

// @ts-ignore
export const getPlatforms = () => (dispatch) => {
  dispatch(platformsRequestAction());
  return api.getPlatforms()
    .then(platforms => {
      const filteredPlatforms = getFilteredPlatforms(platforms.results, filteredPlatformsMock)
      dispatch(platformsSuccessAction(filteredPlatforms))
    })
    .catch(error => {
      console.log(error);
      // @ts-ignore
      dispatch(platformsFailedAction(error));
    })
}
