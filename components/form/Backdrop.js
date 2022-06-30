import styled from "styled-components";
import { motion } from "framer-motion";

const animation = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 },
};

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.267);
  overflow: hidden;
`;
const Backdrop = ({ setIsOpen, children }) => {
  return (
    <Wrapper
      variants={animation}
      initial='hidden'
      animate='visible'
      exit='hidden'
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Wrapper>
  );
};

export default Backdrop;
