import styles from "./InvoiceHeader.module.scss";
import { markAsPaid } from "../Utilities/Invoice";

const InvoiceHeader = ({ status, id, currentUser }) => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <span>Status</span>{" "}
        <div
          className={`${styles.invoiceStatus} ${
            status === "Pending" ? styles.pending : styles.paid
          }`}
        >
          <span className={styles.bullet}>&#9679;</span>
          {status}
        </div>{" "}
      </div>
      <div className={styles.options}>
        <button className={styles.edit}>Edit</button>
        <button className={styles.delete}>Delete</button>
        <button
          onClick={() => markAsPaid(id, currentUser)}
          className={styles.markPaid}
        >
          Mark as Paid
        </button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
