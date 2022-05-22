import './game-card-platforms-list.scss';
import {useEffect, useState} from "react";
import {getGameCardPlatforms} from "../../utils/utils";

// @ts-ignore
const GameCardPlatformsList = ({platforms}) => {
  const [basePlatforms, setBasePlatforms] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setBasePlatforms(getGameCardPlatforms(platforms))
  }, [platforms])

  return (
    <ul className="game-card-platforms-list">
      {
        basePlatforms.map((platform: any, idx: number) => (
          <li
            key={idx}
            className={`game-card-platforms-list__item game-card-platforms-list__item--${platform}`}>
          </li>
        ))
      }
    </ul>
  );
};

export default GameCardPlatformsList;
