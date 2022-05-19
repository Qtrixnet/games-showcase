import './app.scss';
import {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getGamesInfo} from "../../sevices/actions/games";
import {getGenres} from "../../sevices/actions/genres";
import {getPlatforms} from "../../sevices/actions/platforms";
import Header from "../header/header";
import Main from "../../pages/main/main";

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getGamesInfo())
    // @ts-ignore
    dispatch(getGenres())
    // @ts-ignore
    dispatch(getPlatforms())
  }, [dispatch])

  return (
    <div className="app">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
