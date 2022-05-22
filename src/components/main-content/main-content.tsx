import './main-content.scss';
import {FC} from 'react';
import Navigation from "../navigation/navigation";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import GamesList from "../games-list/games-list";

const MainContent: FC = () => {
  const allGames = useTypedSelector(state => state.games.games)

  return (
    <div className="main-content">
      <Navigation/>
      {
        allGames && (<GamesList games={allGames}/>)
      }
    </div>
  );
};

export default MainContent;
