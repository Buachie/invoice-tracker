import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
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
const HomeLink = () => {
  return (
    <Wrapper>
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
