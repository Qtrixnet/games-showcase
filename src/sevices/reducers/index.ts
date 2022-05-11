import {combineReducers} from "redux";
import gamesReducer from './gamesData';

export const rootReducer = combineReducers({
  games: gamesReducer
});
