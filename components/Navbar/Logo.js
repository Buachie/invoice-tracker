import styled from "styled-components";

const Wrapper = styled.div`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #7c5dfa;
  height: 80px;
  padding: 1em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background-color: #9277ff;
    border-radius: 15px 0 15px 0;
    z-index: 3;
  }
  .icon {
    width: 70%;
    z-index: 4;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <img className='icon' src='/logo.svg' alt='invoicer-logo' />
    </Wrapper>
  );
};

export default Logo;
