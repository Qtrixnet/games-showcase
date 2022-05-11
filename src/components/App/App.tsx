import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getGamesInfo} from "../../sevices/actions/gamesData";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(getGamesInfo())
  }, [dispatch])

  return (
    <div className="App">
    </div>
  );
}

export default App;
