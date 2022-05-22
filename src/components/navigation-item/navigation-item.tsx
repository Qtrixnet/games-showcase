import './navigation-item.scss';
import {FC} from 'react';
import {INavigationItemProps} from "../../sevices/types/types";
import ProgressLoader from "../loaders/progress/progress";

const NavigationItem: FC<INavigationItemProps> = ({title, isNavigationPointsLoading, navigationPoints, isGenres}) => {
  return (
    <section className="navigation-item">
      <span className="navigation-item__title">{title}</span>
      <ul className="navigation-item__list">
        {
          isNavigationPointsLoading ? (
            <ProgressLoader />
          ) : (
            <>
              {
                // @ts-ignore
                navigationPoints && navigationPoints.map((navigationPoint) => {
                  return (
                    <li
                      key={navigationPoint.id}
                      className="navigation-item__list-item"
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
                            <div className={`navigation-item__list-item-icon navigation-item__list-item-icon--${navigationPoint.slug}`}/>
                          </div>
                        )
                      }
                      <span>{navigationPoint.name}</span>
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
