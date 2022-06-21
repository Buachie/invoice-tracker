import { forwardRef, useRef, useEffect } from "react";
import { useAuth } from "../../contexts/AuthenticationContext";
import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";

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
        <div className={styles.container} ref={menu}>
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
