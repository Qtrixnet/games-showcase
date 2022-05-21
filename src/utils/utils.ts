import {IGenre, IPlatform} from "../sevices/types/types";

export const getFilteredGenres = (allGenres: IGenre[], filteredGenres: string[]) => allGenres?.filter(genre => filteredGenres.includes(genre.name));

export const getFilteredPlatforms = (allPlatforms: IPlatform[], filteredPlatforms: string[]) => allPlatforms?.filter(platform => filteredPlatforms.includes(platform.name));
