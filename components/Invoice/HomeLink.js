import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    color: gray;
  }
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: gray;
    }
  }
`;
const animation = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0,
    },
  },
};
const HomeLink = () => {
  return (
    <Wrapper variants={animation} initial="hidden" animate="show">
      <Link href="/">
        <a>
          <img src="/icon-arrow-left.svg" alt="left-arrow" />
          <span> Go Back</span>
        </a>
      </Link>
    </Wrapper>
  );
};

export default HomeLink;
