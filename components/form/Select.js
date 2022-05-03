import { useField } from "formik";
import styles from "./Form.module.scss";
const Select = ({ label, name, options }) => {
  const [field] = useField(name);
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <select {...field} className={styles.input}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
