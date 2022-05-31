import { useEffect, useRef, useState } from "react";
import NavMenu from "./NavMenu";
import styles from "./Navbar.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

const Navbar = ({ isOpen, setIsOpen, setLoginIsOpen, setRegisterIsOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { show, nodeRef, triggerRef } = useClickOutside(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img className={styles.icon} src="/logo.svg" alt="invoicer-logo" />
      </div>
      <div className={styles.tools}>
        <div className={styles.divider}></div>
        <img
          ref={triggerRef}
          className={styles.avatar}
          src="/user-icon.jpg"
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
    </nav>
  );
};

export default Navbar;
