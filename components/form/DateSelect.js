import { useField } from "formik";
import styles from "./Form.module.scss";

const DateSelect = ({ label, name, ...rest }) => {
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
