import React from "react";
import styles from "./Toolbar.module.scss";

const Toolbar = ({ invoices, setFormIsOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.invoiceData}>
        <h1>Invoices</h1>
      </div>
      <div className={styles.options}>
        <p>Filter by status</p>
        <button
          className={styles.addInvoice}
          type="button"
          onClick={() => setFormIsOpen(true)}
        >
          New Invoice
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
