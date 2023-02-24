import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  var [randomNum, setRandomNum] = useState(0);
  var [progressWidth, setProgressWidth] = useState(0);
  var [progressWidthTwo, setProgressWidthTwo] = useState(0);
  const [turn, setTurn] = useState(0);
  useEffect(() => {
    if (turn === 1) {
      var x = progressWidth + randomNum;
      setProgressWidth(x);
      setTurn(0);
    } else {
      var x = progressWidthTwo + randomNum;
      setProgressWidthTwo(x);
      setTurn(1);
    }
  }, [randomNum]);

  return (
    <AppContext.Provider
      value={{
        progressWidth,
        setRandomNum,
        randomNum,
        setProgressWidth,
        progressWidthTwo,
        setProgressWidthTwo,
        turn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
