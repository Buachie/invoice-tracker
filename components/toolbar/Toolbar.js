import React from "react";
import styles from "./Toolbar.module.scss";
import { useAuth } from "../../contexts/AuthenticationContext";

const Toolbar = ({ invoices, setFormIsOpen, setLoginIsOpen }) => {
  const { currentUser } = useAuth();

  const detectUserPermission = () => {
    if (currentUser) {
      setFormIsOpen(true);
    } else {
      setLoginIsOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.invoiceData}>
        <h1>Invoices</h1>
        <p>
          {invoices.length > 0
            ? `There are ${invoices.length} total invoices`
            : "No Invoices"}
        </p>
      </div>
      <div className={styles.options}>
        <p>Filter by status</p>
        <button
          className={styles.addInvoice}
          type="button"
          onClick={detectUserPermission}
        >
          New Invoice
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
