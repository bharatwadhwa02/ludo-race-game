import React from "react";
import "./ProgressBar.css";
const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "70%",
    // backgroundColor: "whitesmoke",
    // borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };
  return (
    <div className="parent-div" style={Parentdiv}>
      <div className="child-div" style={Childdiv}>
        <span style={progresstext}>{`${progress}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
