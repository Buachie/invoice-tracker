import styles from "./InvoiceBody.module.scss";
import InvoiceItems from "./InvoiceItems";
const InvoiceBody = ({ invoice, invoiceId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.invoiceHead}>
        <div className={styles.subject}>
          <h3>#{invoiceId.substring(0, 5)}</h3>
          <p className={styles.lightText}>{invoice.projectDescription}</p>
        </div>
        <div className={styles.fromAddress}>
          <p className={styles.lightText}>{invoice.senderAddress.street}</p>
          <p className={styles.lightText}>{invoice.senderAddress.city}</p>
          <p className={styles.lightText}>{invoice.senderAddress.postCode}</p>
          <p className={styles.lightText}>{invoice.senderAddress.country}</p>
        </div>
      </div>
      <div className={styles.invoiceData}>
        <div className={styles.date}>
          <div className={styles.receiptSection}>
            <p className={styles.lightText}>Invoice Date</p>
            <h4>{invoice.createdAt}</h4>
          </div>
          <div className={styles.receiptCol}>
            <p className={styles.lightText}>Payment Due</p>
            <h4>{invoice.paymentDue}</h4>
          </div>
        </div>

        <div className={styles.clientInfo}>
          <p className={styles.lightText}>Bill To</p>
          <h4>{invoice.clientName}</h4>
          <p className={styles.lightText}>{invoice.clientAddress.street}</p>
          <p className={styles.lightText}>{invoice.clientAddress.city}</p>
          <p className={styles.lightText}>{invoice.clientAddress.postCode}</p>
          <p className={styles.lightText}>{invoice.clientAddress.country}</p>
        </div>
        <div className={styles.clientEmail}>
          <p className={styles.lightText}>Sent to</p>
          <h4>{invoice.clientEmail}</h4>
        </div>
      </div>
      <InvoiceItems items={invoice.items} />
    </div>
  );
};

export default InvoiceBody;
