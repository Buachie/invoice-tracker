import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Layout.module.scss";
import { AuthProvider } from "../contexts/AuthenticationContext";
const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </div>
    </AuthProvider>
  );
};

export default Layout;
