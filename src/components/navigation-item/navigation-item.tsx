import './navigation-item.scss';
import {FC} from 'react';
import {INavigationItemProps} from "../../sevices/types/types";
import ProgressLoader from "../loaders/progress/progress";
import {Link} from "react-router-dom";

const NavigationItem: FC<INavigationItemProps> = ({title, isNavigationPointsLoading, navigationPoints, isGenres}) => {
  return (
    <section className="navigation-item">
      <Link
        to={title.toLowerCase()}
        className="navigation-item__link"
      >
        <span className="navigation-item__title">{title}</span>
      </Link>
      <ul className="navigation-item__list">
        {
          isNavigationPointsLoading ? (
            <ProgressLoader/>
          ) : (
            <>
              {
                navigationPoints && navigationPoints.map((navigationPoint) => {
                  return (
                    <li
                      key={navigationPoint.id}
                      className="navigation-item__list-item"
                    >
                      <Link
                        to={`${title.toLowerCase()}/${navigationPoint.slug}`}
                        className="navigation-item__list-item-link"
                      >
                      {
                        isGenres ? (
                          <img
                            className={`navigation-item__list-item-image`}
                            src={navigationPoint.image_background}
                            alt={navigationPoint.name}
                          />
                        ) : (
                          <div className="navigation-item__list-item-image">
                            <div
                              className={`navigation-item__list-item-icon navigation-item__list-item-icon--${navigationPoint.slug}`}/>
                          </div>
                        )
                      }
                      <span>{navigationPoint.name}</span>
                    </Link>
                    </li>
                  )
                })
              }
            </>
          )
        }
      </ul>
    </section>
  );
};

export default NavigationItem;
