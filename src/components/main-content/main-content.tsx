import './main-content.scss';
import React, {FC} from 'react';
import Navigation from "../navigation/navigation";

const MainContent: FC = () => {
  return (
    <div className="main-content">
      <Navigation/>
      <section>Список игр</section>
    </div>
  );
};

export default MainContent;
