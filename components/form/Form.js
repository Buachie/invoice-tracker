import React from "react";
import styles from "./Form.module.scss";
import Backdrop from "./Backdrop";
import { Form as FormikForm } from "formik";

const Form = ({ setIsOpen, children }) => {
  return (
    <>
      <Backdrop setIsOpen={setIsOpen} />
      <div className={styles.container}>
        <FormikForm>{children}</FormikForm>
      </div>
    </>
  );
};

export default Form;
