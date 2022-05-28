import { useAuth } from "../../contexts/AuthenticationContext";
import styles from "./Navbar.module.scss";

const NavMenu = ({ isOpen, setLoginIsOpen, setRegisterIsOpen }) => {
  const { currentUser, logout } = useAuth();

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
              <button onClick={() => setLoginIsOpen(true)}>Login</button>
              <button onClick={() => setRegisterIsOpen(true)}>Register</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavMenu;
