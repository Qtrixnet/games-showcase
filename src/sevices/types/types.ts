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

export interface INavigationItemProps {
  title: string,
  isNavigationPointsLoading: boolean,
  navigationPoints: IGenre[] | null,
}
