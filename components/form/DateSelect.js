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

const Input = styled.input`
  display: block;
        font-family: 'Spartan', sans-serif;
        font-weight: bold;
        width: 100%;
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #DFE3FA;
`

const DateSelect = ({ label, name, ...rest }) => {
  const [field, meta] = useField(name);

  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="date"
        id={name}
        {...field}
        {...rest}
      />
    </Wrapper>
  );
};

export default DateSelect;
