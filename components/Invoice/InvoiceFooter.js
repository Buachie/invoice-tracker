import styles from "./InvoiceFooter.module.scss";

const InvoiceFooter = () => {
  return (
    <div className={styles.container}>
      <button className={styles.edit}>Edit</button>
      <button className={styles.delete}>Delete</button>
      <button className={styles.markPaid}>Mark as Paid</button>
    </div>
  );
};

export default InvoiceFooter;
