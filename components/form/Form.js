import React from "react";
import styles from "./Form.module.scss";
import Backdrop from "./Backdrop";
import { Form as FormikForm } from "formik";
import { motion } from "framer-motion";

const animation = {
  hidden: { x: "-100%", transition: { type: "spring", duration: 0.75 } },
  visible: { x: 0, transition: { type: "spring", duration: 0.75 } },
};
const Form = ({ setIsOpen, children }) => {
  return (
    <>
      <Backdrop setIsOpen={setIsOpen} />
      <motion.div
        variants={animation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={styles.container}
      >
        <FormikForm>{children}</FormikForm>
      </motion.div>
    </>
  );
};

export default Form;
