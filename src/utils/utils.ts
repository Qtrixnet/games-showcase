import {IGenre, IPlatform, IPlatformObject} from "../sevices/types/types";
import {filteredPlatformsMock} from "../mocks/platforms";

export const getFilteredGenres = (allGenres: IGenre[], filteredGenres: string[]) => allGenres?.filter(genre => filteredGenres.includes(genre.name));

export const getFilteredPlatforms = (allPlatforms: IPlatform[], filteredPlatforms: string[]) => allPlatforms?.filter(platform => filteredPlatforms.includes(platform.name.toLowerCase()));

export const numberWithCommas = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");

export const getGameCardPlatforms = (platforms: IPlatformObject[]) => {
  const platformsCollection = new Set()
  platforms.forEach((platformObject: any) => {
    filteredPlatformsMock.forEach(filteredPlatform => {
      platformObject.platform.slug.includes(filteredPlatform) && platformsCollection.add(filteredPlatform)
    })
  })
  return Array.from(platformsCollection).sort()
}
