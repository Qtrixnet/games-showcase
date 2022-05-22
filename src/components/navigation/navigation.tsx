import './navigation.scss'
import {FC} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import NavigationItem from "../navigation-item/navigation-item";

const Navigation: FC = () => {
  const genres = useTypedSelector(state => state.genres.genres);
  const platforms = useTypedSelector(state => state.platforms.platforms);
  const isPlatformsRequest = useTypedSelector(state => state.platforms.platformsRequest);
  const isGenresRequest = useTypedSelector(state => state.genres.genresRequest);

  return (
    <aside className="navigation">
      <nav className="navigation__container">
        <div className="navigation__wrapper">
          <NavigationItem
            title="Platforms"
            isNavigationPointsLoading={isPlatformsRequest}
            navigationPoints={platforms}
            isGenres={false}
          />
          <NavigationItem
            title="Genres"
            isNavigationPointsLoading={isGenresRequest}
            navigationPoints={genres}
            isGenres={true}
          />
        </div>
      </nav>
    </aside>
  );
};

export default Navigation;
