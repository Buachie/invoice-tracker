import styles from "./InvoiceHeader.module.scss";
import { markAsPaid } from "../Utilities/Invoice";
import Link from "next/link";

const InvoiceHeader = ({
  status,
  id,
  currentUser,
  setPopupIsOpen,
  setFormIsOpen,
}) => {
  return (
    <>
      <Link href="/">
        <div className={styles.back}>
          <img src="/icon-arrow-left.svg" alt="left-arrow" />
          <span> Go Back</span>
        </div>
      </Link>
      <div className={styles.container}>
        <div className={styles.status}>
          <span>Status</span>
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
          <button className={styles.edit} onClick={() => setFormIsOpen(true)}>
            Edit
          </button>
          <button
            onClick={() => setPopupIsOpen(true)}
            className={styles.delete}
          >
            Delete
          </button>
          <button
            onClick={() => markAsPaid(id, currentUser)}
            className={styles.markPaid}
          >
            Mark as Paid
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;
