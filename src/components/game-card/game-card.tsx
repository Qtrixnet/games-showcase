import './game-card.scss';
import {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {numberWithCommas} from "../../utils/utils";
import GameCardPlatformsList from "../game-card-platforms-list/game-card-platforms-list";
import {IGameCardProps, IGenre} from "../../sevices/types/types";

const GameCard: FC<IGameCardProps> = ({game}) => {
  const {platforms, background_image, name, slug, metacritic, added, released, genres, rating_top} = game;
  const [isHover, setIsHover] = useState(false);
  const [metacriticLevel, setMetaCriticLevel] = useState('')
  const handleMouseOver = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  useEffect(() => {
    if (metacritic) {
      if (metacritic >= 70) {
        setMetaCriticLevel('success')
      } else if (metacritic < 70 && metacritic >= 50) {
        setMetaCriticLevel('warning')
      } else {
        setMetaCriticLevel('danger')
      }
    }
  }, [metacritic])

  return (
    <li
      className={`game-card ${isHover && 'game-card--hovered'}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {
        isHover && (
          <button className="game-card__like"/>
        )
      }
      <div className="game-card__image-container">
        <img
          src={background_image}
          alt={name}
          className="game-card__image"
        />
      </div>
      <div className="game-card__container">
        <Link
          to={`games/${slug}`}
          className="game-card__link"
        >
          {name}
        </Link>
        <div className="game-card__wrapper">
          {
            // @ts-ignore
            <GameCardPlatformsList platforms={platforms}/>
          }
          {metacritic && (
            <div className={`game-card__metacritic game-card__metacritic--${metacriticLevel}`}>
              {metacritic}
            </div>
          )}
        </div>
        <div className="game-card__added">
          <span className="game-card__added-icon"/>
          <span className="game-card__added-text">{numberWithCommas(added)}</span>
        </div>
      </div>
      {
        isHover && (
          <div className="game-card__drop-down">
            <div className="game-card__drop-down-section">
              <p className="game-card__drop-down-title">Release date:</p>
              <p className="game-card__drop-down-info">{released}</p>
            </div>
            <div className="game-card__drop-down-section">
              <p className="game-card__drop-down-title">Genres:</p>
              <div className="game-card__drop-down-info">{
                genres.map((genre: IGenre, idx) => <p key={idx}>{genre.name}</p>)
              }</div>
            </div>
            <div className="game-card__drop-down-section">
              <p className="game-card__drop-down-title">Chart:</p>
              <p className="game-card__drop-down-info">#{rating_top} Top 2022</p>
            </div>
          </div>
        )
      }
    </li>
  );
};

export default GameCard;
