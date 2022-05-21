import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  genres: null,
  genresRequest: false,
  genresFailed: false,
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    genresRequestAction: (state) => {
      state.genresRequest = true;
    },
    genresSuccessAction: (state, action) => {
      state.genresRequest = false;
      state.genres = action.payload;
    },
    genresFailedAction: (state) => {
      state.genresRequest = false;
      state.genresFailed = true;
    }
  }
})

const {actions, reducer} = genresSlice;

export const {
  genresRequestAction,
  genresSuccessAction,
  genresFailedAction
} = actions;

export default reducer
