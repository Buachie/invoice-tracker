import styles from "./InvoiceHeader.module.scss";

const InvoiceHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <span>Status</span>{" "}
        <div
          className={`${styles.invoiceStatus} ${
            props.status === "Pending" ? styles.pending : styles.paid
          }`}
        >
          <span className={styles.bullet}>&#9679;</span>
          {props.status}
        </div>{" "}
      </div>
      <div className={styles.options}>
        <button className={styles.edit}>Edit</button>
        <button className={styles.delete}>Delete</button>
        <button className={styles.markPaid}>Mark as Paid</button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
