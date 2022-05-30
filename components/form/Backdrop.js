import styles from "./Form.module.scss";
import { motion } from "framer-motion";

const animation = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 },
};
const Backdrop = ({ setIsOpen, children }) => {
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles.backdrop}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
