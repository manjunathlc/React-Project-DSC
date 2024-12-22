/* eslint-disable react/prop-types */
import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNum.map((ele, i) => (
          <Box
            key={i}
            onClick={() => {
              setSelectedNumber(ele);
              setError("");
            }}
            isSelected={ele === selectedNumber}
          >
            {ele}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
