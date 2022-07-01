import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em 0;
  width: 100%;
`
const Label = styled.label`
  font-weight: 600;
  color: #7e88c3;
  font-size: 0.8em;
`
const StyledSelect = styled.select`
  display: block;
  font-family: 'Spartan', sans-serif;
  font-weight: bold;
  width: 100%;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #DFE3FA;
`

const Select = ({ label, name, options }) => {
  const [field] = useField(name);
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...field}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
