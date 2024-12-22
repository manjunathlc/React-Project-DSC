import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  //   const generateRandomNumber = () => {
  //     console.log(Math.floor(Math.random() * 6) + 1);
  //     return Math.floor(Math.random() * 6) + 1;
  //   };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <>
      <MainContainer>
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </MainContainer>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <ButtonContainer className="btns">
        <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
        {showRules && <Rules />}
      </ButtonContainer>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
