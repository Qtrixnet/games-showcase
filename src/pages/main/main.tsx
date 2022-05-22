 import './main.scss';
import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import MainContent from "../../components/main-content/main-content";

const Main: FC = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<MainContent/>}/>
      </Routes>
      <Routes>
        <Route path="/games/:slug" element={<MainContent/>}/>
      </Routes>
    </main>
  );
};

export default Main;
