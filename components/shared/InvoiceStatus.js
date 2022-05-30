import styles from "./InvoiceStatus.module.scss";

const InvoiceStatus = ({ status }) => {
  return (
    <div
      className={`${styles.invoiceStatus} ${
        status === "Pending" ? styles.pending : styles.paid
      }`}
    >
      <span className={styles.bullet}>&#9679;</span>
      {status}
    </div>
  );
};

export default InvoiceStatus;
