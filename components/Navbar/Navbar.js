import { useClickOutside } from "../../hooks/useClickOutside";
import styled from "styled-components";
import { useState } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";

const Wrapper = styled.nav`
  min-height: 100vh;
  width: 80px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #373b53;
  border-radius: 0 20px 20px 0;
  @media screen and (max-width: 768px) {
    min-height: 80px;
    width: 100%;
    flex-direction: row;
    border-radius: 0;
    margin-bottom: 2em;
  }

  .tools {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0.4em;
    position: relative;
    @media screen and (max-width: 768px) {
      flex-direction: row;
    }
  }
`;
const UserAvatar = styled.img`
  border-radius: 50%;
  max-width: 70px;
  width: 100%;
  padding: 1em;
`;

const Divider = styled.div`
  height: 1px;
  width: 95%;
  margin: 0 auto;
  background-color: gray;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 1px;
    margin: 0;
  }
`;

const Navbar = ({ setLoginIsOpen, setRegisterIsOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { show, nodeRef, triggerRef } = useClickOutside(false);

  return (
    <Wrapper>
      <Logo />
      <div className='tools'>
        <Divider />
        <UserAvatar
          src='/user-icon.jpg'
          ref={triggerRef}
          onClick={() => setMenuIsOpen(true)}
        />
        {show && (
          <NavMenu
            nodeRef={nodeRef}
            isOpen={menuIsOpen}
            setIsOpen={setMenuIsOpen}
            setLoginIsOpen={setLoginIsOpen}
            setRegisterIsOpen={setRegisterIsOpen}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;
