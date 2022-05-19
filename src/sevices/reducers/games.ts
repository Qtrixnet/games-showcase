import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  games: null,
  gamesRequest: false,
  gamesFailed: false,
  gamesCount: null,
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesRequestAction: (state) => {
      state.gamesRequest = true;
    },
    gamesSuccessAction: (state, action) => {
      state.gamesRequest = false;
      state.games = action.payload.results;
      state.gamesCount = action.payload.count;
    },
    gamesFailedAction: (state) => {
      state.gamesRequest = false;
      state.gamesFailed = true;
    },
  }
})

const {actions, reducer} = gamesSlice;

export const {
  gamesRequestAction,
  gamesSuccessAction,
  gamesFailedAction,
} = actions;

export default reducer
