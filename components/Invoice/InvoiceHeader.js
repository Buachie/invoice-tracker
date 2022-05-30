import styles from "./InvoiceHeader.module.scss";
import { markAsPaid } from "../Utilities/Invoice";
import Link from "next/link";
import InvoiceStatus from "../shared/InvoiceStatus";

const InvoiceHeader = ({
  status,
  id,
  currentUser,
  setPopupIsOpen,
  setFormIsOpen,
}) => {
  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.back}>
            <img src="/icon-arrow-left.svg" alt="left-arrow" />
            <span> Go Back</span>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.status}>
          <span>Status</span>
          <InvoiceStatus status={status} />
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
          {status == "Pending" ? (
            <button
              onClick={() => markAsPaid(id, currentUser)}
              className={styles.markPaid}
            >
              Mark as Paid
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;
