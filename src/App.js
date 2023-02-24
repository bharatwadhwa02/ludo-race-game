import "./App.css";
import Player1 from "./components/Player1";
import Player2 from "./components/Player2";
import "./components/RollDie";
import RollDie from "./components/RollDie";
import ProgressBar from "./components/ProgressBar";
import { useGlobalContext } from "./context";
import { useState, useEffect } from "react";
function App() {
  const {
    randomNum,
    progressWidth,
    setProgressWidth,
    progressWidthTwo,
    setProgressWidthTwo,
  } = useGlobalContext();
  useEffect(() => {
    if (progressWidth > 100) {
      alert("Player 1 cannot move, Try again in next turn");
      setProgressWidth(progressWidth - randomNum);
    }
    if (progressWidthTwo > 100) {
      alert("Player 2 cannot move, Try again in next turn");
      setProgressWidthTwo(progressWidthTwo - randomNum);
    }
    if (progressWidth === 100) {
      console.log("player 1 wins");
      alert("Player 1 wins");
      setProgressWidth(0);
      setProgressWidthTwo(0);
    }
    if (progressWidthTwo === 100) {
      console.log("player 2 wins");
      alert("Player 2 wins");
      setProgressWidth(0);
      setProgressWidthTwo(0);
    }
  });
  return (
    <div className="app">
      {/* <div className="progress-bar-div">
        <ProgressBar bgcolor="orange" progress={progressWidth} height={30} />
        <p>{100 - progressWidth} steps</p>
      </div> */}
      <div className="scoreboard">
        <Player1 />
        <RollDie />
        <Player2 />
      </div>
    </div>
  );
}

export default App;
