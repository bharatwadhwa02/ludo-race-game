import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ProgressBar from "../components/ProgressBar";
import { useGlobalContext } from "../context";
import "../components/Player.css";
import girl from "../images/girl.png";
import Pin from "../images/locationPin.png";
import Flag from "../images/winningFlag.png";
const Player2 = () => {
  const { progressWidthTwo, turn, setProgressWidth, setProgressWidthTwo } =
    useGlobalContext();

  return (
    <div>
      <div className="progress-bar-div-two">
        <img src={Pin} alt="" />
        <ProgressBar
          bgcolor="#CF2428"
          progress={progressWidthTwo}
          height={30}
        />
        <img className="flag" src={Flag} alt="" />
        <p>{100 - progressWidthTwo} remaining steps</p>
      </div>
      <div className="profile girl">
        <div>
          <h4>Ansi Singh</h4>
          <p>{progressWidthTwo}</p>
        </div>
        <img src={girl} alt="" />
      </div>
    </div>
  );
};

export default Player2;
