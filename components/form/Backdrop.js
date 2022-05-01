import React from "react";
import styles from "./Form.module.scss";
const Backdrop = ({ children }) => {
  return <div className={styles.backdrop}>{children}</div>;
};

export default Backdrop;
