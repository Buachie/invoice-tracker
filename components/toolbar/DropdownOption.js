import React from "react";
import styled from "styled-components";

const StyledOption = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-weight: bold;

  input {
    display: none;
    > span {
      opacity: 0;
    }
    :hover + span {
      border: 1px solid #7c5dfa;
    }
    :checked + span {
      background: #7c5dfa;
      > img {
        opacity: 1;
      }
    }
  }
`;
const StyledCheckbox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  background-color: #dfe3fa;
`;
const DropdownOption = ({ id, checked, handleClick, children }) => {
  return (
    <StyledOption>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          handleClick(id);
        }}
      />
      <StyledCheckbox>
        <img src="/icon-check.svg" alt="checkmark" />
      </StyledCheckbox>
      <span>{children}</span>
    </StyledOption>
  );
};

export default DropdownOption;
