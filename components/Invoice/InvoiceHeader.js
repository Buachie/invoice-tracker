import { useState } from "react";
import styles from "./InvoiceHeader.module.scss";
import { markAsPaid, deleteInvoice } from "../Utilities/Invoice";
import DeletePopup from "./DeletePopup";

const InvoiceHeader = ({ status, id, currentUser }) => {
  const [openPopup, setOpenPopup] = useState(false);

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
        <button onClick={() => setOpenPopup(true)} className={styles.delete}>
          Delete
        </button>
        <button
          onClick={() => markAsPaid(id, currentUser)}
          className={styles.markPaid}
        >
          Mark as Paid
        </button>
      </div>
      {openPopup && <DeletePopup isOpen={openPopup} />}
    </div>
  );
};

export default InvoiceHeader;
