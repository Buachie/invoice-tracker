import { useAuth } from "../../contexts/AuthenticationContext";
import { useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 0.5em;
  border-radius: 15px;
  position: absolute;
  top: -100%;
  left: 60%;
  @media (max-width: 768px) {
    top: 70%;
    left: -60%;
  }
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  margin: 0.5em;
  padding: 1em;
  border: none;
  border-radius: 10px;
  background-color: #7c5dfa;
  color: #fff;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: #9277ff;
  }
`;
const NavMenu = ({ isOpen, setIsOpen, setLoginIsOpen, setRegisterIsOpen }) => {
  const { currentUser, logout } = useAuth();
  const menu = useRef();
  const openSignUp = () => {
    setRegisterIsOpen(true);
    setIsOpen(false);
  };

  const openLogin = () => {
    setLoginIsOpen(true);
    setIsOpen(false);
  };
  const handleClickOutside = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <>
      {isOpen && (
        <Wrapper ref={menu}>
          {currentUser ? (
            <NavContent>
              <StyledButton onClick={logout}>Sign Out</StyledButton>
            </NavContent>
          ) : (
            <NavContent>
              <StyledButton onClick={openLogin}>Login</StyledButton>
              <StyledButton onClick={openSignUp}>Register</StyledButton>
            </NavContent>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default NavMenu;
