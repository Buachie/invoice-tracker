import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import Input from "./Input";
import styled from "styled-components";
import {DeleteButton} from '../shared/Buttons'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 4.125rem 1.25fr .75fr min-content;
  gap: 1em;
  align-items: center;
  justify-content: center;
`

const Item = ({ index, helpers }) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const total = values.items[index].qty * values.items[index].price;
    const rounded = Math.round((total + Number.EPSILON) * 100) / 100;
    setFieldValue(`items[${index}].total`, rounded || "0");
  }, [values.items[index].qty, values.items[index].price]);

  return (
    <Wrapper>
      <Input label="Item Name" name={`items[${index}].name`} />
      <Input label="Qty." name={`items[${index}].qty`} />
      <Input label="Price" name={`items[${index}].price`} />
      <Input label="Total" name={`items[${index}].total`} disabled />
      <DeleteButton
        onClick={() => helpers.remove(index)}
      />
    </Wrapper>
  );
};

export default Item;
