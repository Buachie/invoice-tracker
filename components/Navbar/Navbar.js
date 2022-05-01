import styles from "./Navbar.module.scss";
import Image from "next/image";
import Logo from "/public/logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img className={styles.icon} src="/logo.svg" alt="invoicer-logo" />
      </div>
      <div className={styles.tools}>
        <div className={styles.divider}></div>
        <img className={styles.avatar} src="/image-avatar.jpg" />
      </div>
    </nav>
  );
};

export default Navbar;
