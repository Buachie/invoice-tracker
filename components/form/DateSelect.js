import { useField, useFormikContext } from "formik";
import React from "react";
import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react.datepicker.css";
import styles from "./Form.module.scss";

const DateSelect = ({ label, name, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        type="date"
        id={name}
        {...field}
        {...rest}
      />
    </div>
  );
};

export default DateSelect;
