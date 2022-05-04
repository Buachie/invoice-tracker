import { useRouter } from "next/router";
import styles from "./Invoice.module.scss";

const Invoice = (props) => {
  const router = useRouter();
  const showFullInvoiceHandler = () => {
    router.push("/invoice/" + props.invoiceId);
  };

  return (
    <div className={styles.invoice} onClick={showFullInvoiceHandler}>
      <div className={styles.invoiceId}>
        <span>#</span>
        {props.invoiceId.substring(0, 5)}
      </div>
      <div className={styles.dueDate}>Due {props.paymentDue}</div>
      <div className={styles.clientName}>{props.clientName}</div>
      <div className={styles.invoiceTotal}>{`$${props.total}`}</div>
      <div
        className={`${styles.invoiceStatus} ${
          props.status === "Pending" ? styles.pending : styles.paid
        }`}
      >
        <span className={styles.bullet}>&#9679;</span>
        {props.status}
      </div>
      <div className={styles.arrow}>
        <img src="/icon-arrow-right.svg" alt="" />
      </div>
    </div>
  );
};

export default Invoice;
