import './main-content.scss';
import {FC} from 'react';
import Navigation from "../navigation/navigation";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import GamesList from "../games-list/games-list";
import PulseLoader from "../loaders/pulse/pulse";

const MainContent: FC = () => {
  const allGames = useTypedSelector(state => state.games.games);
  const isGamesLoading = useTypedSelector(state => state.games.gamesRequest);

  return (
    <div className="main-content">
      <Navigation/>
      <div className={`main-content__container ${isGamesLoading && 'main-content__container--loading'}`}>
        {
          isGamesLoading ? (<PulseLoader />) : allGames && (<GamesList games={allGames}/>)
        }
      </div>
    </div>
  );
};

export default MainContent;
