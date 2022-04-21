import styles from "./InvoiceStatus.module.scss";

const InvoiceStatus = (props) => {
  return (
    <div
      className={`${styles.status} ${
        props.status === "Pending" ? styles.pending : styles.paid
      }`}
    >
      <span className={styles.bullet}>&#9679;</span>
      {props.status}
    </div>
  );
};

export default InvoiceStatus;
