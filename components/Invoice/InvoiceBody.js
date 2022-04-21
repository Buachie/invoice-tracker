import styles from "./InvoiceBody.module.scss";

const InvoiceBody = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.invoiceHead}>
        <div className={styles.subject}>
          <h3>#{props.invoiceId.substring(0, 5)}</h3>
          <p className={styles.lightText}>{props.invoice.projectDescription}</p>
        </div>
        <div className={styles.fromAddress}>
          <p className={styles.lightText}>{props.invoice.senderAddress}</p>
          <p className={styles.lightText}>{props.invoice.senderCity}</p>
          <p className={styles.lightText}>{props.invoice.senderPostCode}</p>
          <p className={styles.lightText}>{props.invoice.senderCountry}</p>
        </div>
      </div>
      <div className={styles.invoiceData}>
        <div className={styles.date}>
          <div className={styles.receiptSection}>
            <p className={styles.lightText}>Invoice Date</p>
            <h3>{props.invoice.invoiceDate}</h3>
          </div>
          <div className={styles.receiptCol}>
            <p className={styles.lightText}>Payment Due</p>
            <h3>{props.invoice.dueDate}</h3>
          </div>
        </div>

        <div className={styles.clientInfo}>
          <p className={styles.lightText}>Bill To</p>
          <h3>{props.invoice.clientName}</h3>
          <p className={styles.lightText}>{props.invoice.clientAddress}</p>
          <p className={styles.lightText}>{props.invoice.clientCity}</p>
          <p className={styles.lightText}>{props.invoice.clientPostCode}</p>
          <p className={styles.lightText}>{props.invoice.clientCountry}</p>
        </div>
        <div className={styles.clientEmail}>
          <p className={styles.lightText}>Sent to</p>
          <h3>{props.invoice.clientEmail}</h3>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBody;
