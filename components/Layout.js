import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Layout.module.scss";
import { AuthProvider } from "../contexts/AuthenticationContext";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";

const Layout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  return (
    <AuthProvider>
      <div className={styles.container} onClick={() => setMenuIsOpen(false)}>
        <Navbar
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
          setLoginIsOpen={setLoginIsOpen}
          setRegisterIsOpen={setRegisterIsOpen}
        />
        <SignIn isOpen={loginIsOpen} setIsOpen={setLoginIsOpen} />
        <SignUp isOpen={registerIsOpen} setIsOpen={setRegisterIsOpen} />
        <main className={styles.main} onClick={() => setMenuIsOpen(false)}>
          {children}
        </main>
      </div>
    </AuthProvider>
  );
};

export default Layout;
