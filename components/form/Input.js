import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em 0;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 600;
  color: #7e88c3;
  font-size: 0.8em;
`;
const StyledInput = styled.input`
  display: block;
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  width: 100%;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.valid ? "#DFE3FA" : "#EC5757")};
`;

const Input = ({ label, name, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        id={name}
        {...field}
        valid={!(meta.touched && meta.error)}
        {...rest}
      />
    </Wrapper>
  );
};

export default Input;
