import React from "react";
import "../components/Player.css";
import ProgressBar from "../components/ProgressBar";
import { useGlobalContext } from "../context";
import boy from "../images/boy.png";
import Pin from "../images/locationPin.png";
import Flag from "../images/winningFlag.png";
const Player1 = () => {
  const { progressWidth, turn } = useGlobalContext();

  return (
    <div>
      <div className="progress-bar-div-one">
        <img className="pin" src={Pin} alt="" />
        <ProgressBar bgcolor="#CF2428" progress={progressWidth} height={30} />
        <img className="flag" src={Flag} alt="" />
        <p>{100 - progressWidth} remaining steps</p>
      </div>
      <div className="profile boy">
        <img src={boy} alt="" />
        <div>
          <h4>Aman Singh</h4>
          <p>{progressWidth}</p>
        </div>
      </div>
    </div>
  );
};

export default Player1;
