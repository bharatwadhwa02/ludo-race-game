import React, { useState } from "react";
import Die from "./Die";
import "./RollDie.css";
import { useGlobalContext } from "../context";
const RollDie = ({ sides }) => {
  var { setRandomNum } = useGlobalContext();
  const [state, setState] = useState({
    die: "one",
    rolling: false,
    totalScore: 0,
  });
  const { die, rolling, totalScore } = state;

  const roll = () => {
    const randomNumber = Math.floor(Math.random() * sides.length);
    const newDie = sides[randomNumber];
    const score = Object.values(newDie);
    console.log("score", score);
    setState({
      die: Object.keys(newDie),
      rolling: true,
      totalScore: score[0],
    });

    setRandomNum(randomNumber + 1);
    // console.log(randomNumber + 1);
    // localStorage.setItem("progress", randomNum + 1);
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, rolling: false }));
    }, 1000);
  };

  return (
    <div className="roll-dice">
      <button onClick={roll} disabled={rolling}>
        <Die face={String(die)} rolling={rolling} />
      </button>
    </div>
  );
};

RollDie.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};

export default RollDie;
