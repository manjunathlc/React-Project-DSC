/* eslint-disable react/prop-types */
import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={() => roleDice()}>
        <img src={`dice_${currentDice}.png`} alt={`dice_${currentDice}`} />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
