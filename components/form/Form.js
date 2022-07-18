import { Form as FormikForm } from "formik";
import styled from "styled-components";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const animation = {
  hidden: { x: "-100%", transition: { type: "spring", duration: 0.75 } },
  visible: { x: 0, transition: { type: "spring", duration: 0.75 } },
};

const Wrapper = styled(motion.div)`
  padding: 0.5em;
  padding-left: 6em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 60%;
  background-color: #fff;
  border-radius: 0 20px 20px 0;
  overflow-y: scroll;
  @media (max-width: 768px) {
    margin-top: 5em;
    width: 85%;
    height: calc(100% - 80px);
    padding: 1em;
  }

  @media (max-width: 420px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const StyledFormikForm = styled(FormikForm)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Form = ({ setIsOpen, children }) => {
  return (
    <>
      <Backdrop setIsOpen={setIsOpen} />
      <Wrapper
        variants={animation}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <StyledFormikForm>{children}</StyledFormikForm>
      </Wrapper>
    </>
  );
};

export default Form;
