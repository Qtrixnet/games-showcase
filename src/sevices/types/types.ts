export interface IGenre {
  games: [],
  games_count: number,
  id: number,
  image_background: string,
  name: string,
  slug: string,
};

export interface IPlatform {
  games: [],
  games_count: number,
  id: number,
  image: string | null,
  image_background: string,
  name: string,
  slug: string,
  year_end: number | null,
  year_start: number | null,
};

export interface IGame {
  added: number,
  added_by_status: {},
  background_image: string,
  clip: null,
  dominant_color: string,
  esrb_rating: {},
  genres: IGenre[],
  id: number,
  metacritic: number,
  name: string,
  parent_platforms: object[],
  platforms: object[],
  playtime: number,
  rating: number,
  rating_top: number,
  ratings: object[],
  ratings_count: number,
  released: string,
  reviews_count: number,
  reviews_text_count: number,
  saturated_color: string,
  short_screenshots: object[],
  slug: string,
  stores: object[],
  suggestions_count: number,
  tags: object[],
  tba: boolean,
  updated: string,
  user_game: null,
}

export interface INavigationItemProps {
  title: string,
  isNavigationPointsLoading: boolean,
  navigationPoints: IGenre[] | null,
  isGenres: boolean,
}

export interface IGamesListProps {
  games: IGame[],
}
