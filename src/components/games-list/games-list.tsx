import './games-list.scss';
import {FC} from "react";
import {IGamesListProps} from "../../sevices/types/types";
import GameCard from "../game-card/game-card";

const GamesList:FC<IGamesListProps> = ({games}) => {
  return (
    <section>
      <ul className="games-list">
        {
          games.map(game => <GameCard key={game.id} game={game}/>)
        }
      </ul>
    </section>
  );
};

export default GamesList;
