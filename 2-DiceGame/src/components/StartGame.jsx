/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="dice.png" alt="diceImage" />
      </div>
      <div className="content">
        <h1>Dice game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.section`
  max-width: 73.75rem;
  display: flex;
  margin: 0 auto;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

