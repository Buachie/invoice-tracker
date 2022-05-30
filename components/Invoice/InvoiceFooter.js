import styles from "./InvoiceFooter.module.scss";
import { markAsPaid } from "../Utilities/Invoice";

const InvoiceFooter = ({
  status,
  id,
  currentUser,
  setPopupIsOpen,
  setFormIsOpen,
}) => {
  return (
    <div className={styles.container}>
      <button className={styles.edit} onClick={() => setFormIsOpen(true)}>
        Edit
      </button>
      <button className={styles.delete} onClick={() => setPopupIsOpen(true)}>
        Delete
      </button>
      {status != "Paid" ? (
        <button
          className={styles.markPaid}
          onClick={() => markAsPaid(id, currentUser)}
        >
          Mark as Paid
        </button>
      ) : null}
    </div>
  );
};

export default InvoiceFooter;
