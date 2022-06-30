import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Layout.module.scss";
import { AuthProvider } from "../contexts/AuthenticationContext";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body{
  padding: 0;
  margin: 0;
  font-family: 'Spartan', sans-serif;
  background-color: #f8f8f8;
}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Main = styled.main`
  max-width: 1100px;
  width: 95%;
  margin: 5rem auto 0 auto;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  return (
    <AuthProvider>
      <GlobalStyle/>
      <Wrapper onClick={() => setMenuIsOpen(false)}>
        <Navbar
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
          setLoginIsOpen={setLoginIsOpen}
          setRegisterIsOpen={setRegisterIsOpen}
        />
        <SignIn isOpen={loginIsOpen} setIsOpen={setLoginIsOpen} />
        <SignUp isOpen={registerIsOpen} setIsOpen={setRegisterIsOpen} />
        <Main onClick={() => setMenuIsOpen(false)}>
          {children}
        </Main>
      </Wrapper>
    </AuthProvider>
  );
};

export default Layout;
