import { forwardRef, useRef } from "react";
import { useAuth } from "../../contexts/AuthenticationContext";
import { motion } from "framer-motion";
import Backdrop from "../form/Backdrop";
import styles from "./Navbar.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

const NavMenu = ({ isOpen, setIsOpen, setLoginIsOpen, setRegisterIsOpen }) => {
  const { currentUser, logout } = useAuth();

  const openSignUp = () => {
    setRegisterIsOpen(true);
    setIsOpen(false);
  };

  const openLogin = () => {
    setLoginIsOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          {currentUser ? (
            <div className={styles.navItems}>
              <button onClick={logout}>Sign Out</button>
            </div>
          ) : (
            <div className={styles.navItems}>
              <button onClick={openLogin}>Login</button>
              <button onClick={openSignUp}>Register</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavMenu;
