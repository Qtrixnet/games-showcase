import {combineReducers} from "redux";
import gamesReducer from './games';
import genresReducer from './genres';
import platformsReducer from './platforms';

export const rootReducer = combineReducers({
  games: gamesReducer,
  genres: genresReducer,
  platforms: platformsReducer,
});
