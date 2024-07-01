import styled from "styled-components";
import React from "react";
import GamePlay from "./components/GamePlay";
import GameStart from "./components/GameStart";

const App = () => {
  const [isGameStarted, setIsGameStarted] = React.useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <GameStart toggle={toggleGamePlay} />}</>
  );
};

export default App;
