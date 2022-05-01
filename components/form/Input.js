import React from "react";
import { useField } from "formik";
import styles from "./Form.module.scss";

const Input = ({ label, name, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} id={name} {...field} {...rest} />
    </div>
  );
};

export default Input;
