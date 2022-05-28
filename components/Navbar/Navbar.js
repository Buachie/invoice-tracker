import { useState } from "react";
import NavMenu from "./NavMenu";
import styles from "./Navbar.module.scss";

const Navbar = ({ isOpen, setIsOpen, setLoginIsOpen, setRegisterIsOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img className={styles.icon} src="/logo.svg" alt="invoicer-logo" />
      </div>
      <div className={styles.tools}>
        <div className={styles.divider}></div>
        <img
          className={styles.avatar}
          src="/image-avatar.jpg"
          onClick={() => setMenuIsOpen(true)}
        />
        <NavMenu
          isOpen={menuIsOpen}
          setLoginIsOpen={setLoginIsOpen}
          setRegisterIsOpen={setRegisterIsOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
