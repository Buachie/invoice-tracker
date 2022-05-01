import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import styles from "./Form.module.scss";
import Input from "./Input";

const Item = ({ index, helpers }) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const total = values.items[index].qty * values.items[index].price;
    const rounded = Math.round((total + Number.EPSILON) * 100) / 100;
    setFieldValue(`items[${index}].total`, rounded || "0");
  }, [values.items[index].qty, values.items[index].price]);

  return (
    <div className={styles.itemInput}>
      <Input label="Item Name" name={`items[${index}].name`} />
      <Input label="Qty." name={`items[${index}].qty`} />
      <Input label="Price" name={`items[${index}].price`} />
      <Input label="Total" name={`items[${index}].total`} disabled />
      <button
        className={styles.deleteItem}
        onClick={() => helpers.remove(index)}
      >
        <img src="/icon-delete.svg" />
      </button>
    </div>
  );
};

export default Item;
