import styles from "./Form.module.scss";

const Backdrop = ({ setIsOpen, children }) => {
  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
      {children}
    </div>
  );
};

export default Backdrop;
