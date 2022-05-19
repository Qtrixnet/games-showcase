import './navigation.scss'
import {FC} from "react";
import {useSelector} from "react-redux";
import {IGenre} from "../../sevices/types/types";

const Navigation: FC = () => {
  // @ts-ignore
  const genres = useSelector(state => state.genres.genres)
  // @ts-ignore
  const platforms = useSelector(state => state.platforms.platforms)

  console.log(platforms)

  return (
    <aside className="navigation">
      <nav className="navigation__container">
        <div className="navigation__wrapper">
          <span className="navigation__title">Home</span>
          <span className="navigation__title">User</span>
          <span className="navigation__title">Platforms</span>
          <ul className="navigation__list">
            {
              platforms && platforms.map((platform: IGenre) => (
                <li key={platform.id} className="navigation__list-item">
                  <img className="navigation__list-item-image" src={platform.image_background} alt={platform.name}/>
                  <span>
                  {platform.name}
                  </span>
                </li>
              ))
            }
          </ul>
          <span className="navigation__title">Genres</span>
          <ul className="navigation__list">
            {
              genres && genres.map((genre: IGenre) => (
                <li key={genre.id} className="navigation__list-item">
                  <img className="navigation__list-item-image" src={genre.image_background} alt={genre.name}/>
                  <span>
                  {genre.name}
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Navigation;
