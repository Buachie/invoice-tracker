import React, { useEffect, useRef, useState } from "react";
import DropdownOption from "./DropdownOption";
import styled from "styled-components";

const Toggle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  border: none;
  background: transparent;
  position: relative;
  @media screen and (max-width: 550px) {
    span {
      display: none;
    }
  }
`;

const Options = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 1em;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Dropdown = ({ setFilter }) => {
  const dropdown = useRef();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([
    { id: 11, value: "Paid", checked: false },
    { id: 21, value: "Pending", checked: false },
    { id: 31, value: "Draft", checked: false },
  ]);

  const handleClick = (id) => {
    setOptions(
      options.map((option) => {
        if (id === option.id) {
          setFilter(option.checked ? null : option.value);
          return { ...option, checked: !option.checked };
        }
        return { ...option, checked: false };
      })
    );
  };

  const handleClickOutside = (e) => {
    if (dropdown.current && !dropdown.current.contains(e.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={dropdown} open={open}>
      <Toggle type="button" onClick={() => setOpen(!open)}>
        <h3>
          Filter <span>by status</span>
        </h3>{" "}
        <img src="/icon-arrow-down.svg" alt="down-arrow" />
      </Toggle>
      {open && (
        <Options>
          {options.map((option) => {
            return (
              <DropdownOption
                key={option.id}
                id={option.id}
                checked={option.checked}
                handleClick={handleClick}
              >
                {option.value}
              </DropdownOption>
            );
          })}
        </Options>
      )}
    </div>
  );
};

export default Dropdown;
