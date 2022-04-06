import styles from "./Navbar.module.scss";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="invoicer-logo" width={50} height={50} />
      </div>
      <div className={styles.tools}>
        <div className={styles.divider}></div>
        <Image src="/image-avatar.jpg" width={30} height={60} />
      </div>
    </nav>
  );
};

export default Navbar;
