import './app.scss';
import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getGamesInfo} from "../../sevices/actions/gamesData";
import Header from "../header/header";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getGamesInfo())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
