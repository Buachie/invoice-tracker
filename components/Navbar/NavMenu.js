import Link from "next/link";
import { useAuth } from "../../contexts/AuthenticationContext";
import styles from "./Navbar.module.scss";

const NavMenu = ({ isOpen, setIsOpen }) => {
  const { currentUser, logout } = useAuth();

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          {currentUser ? (
            <div>
              <button onClick={logout}>Sign Out</button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default NavMenu;
