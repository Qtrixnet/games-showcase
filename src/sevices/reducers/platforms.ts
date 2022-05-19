import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  platforms: null,
  platformsRequest: false,
  platformsFailed: false,
};

export const platformsSlice = createSlice({
  name: 'platforms',
  initialState,
  reducers: {
    platformsRequestAction: (state) => {
      state.platformsRequest = true;
    },
    platformsSuccessAction: (state, action) => {
      state.platformsRequest = false;
      state.platforms = action.payload.results;
    },
    platformsFailedAction: (state) => {
      state.platformsRequest = false;
      state.platformsFailed = true;
    }
  }
})

const {actions, reducer} = platformsSlice;

export const {
  platformsRequestAction,
  platformsSuccessAction,
  platformsFailedAction
} = actions;

export default reducer
