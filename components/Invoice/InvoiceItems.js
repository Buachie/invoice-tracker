import styles from "./InvoiceItems.module.scss";

const InvoiceItems = ({ items }) => {
  console.log(items);
  return (
    <div className={styles.container}>
      <table className={styles.tbody}>
        <thead>
          <tr>
            <th className={styles.header}>Item Name</th>
            <th className={styles.header}>QTY.</th>
            <th className={styles.header}>Price</th>
            <th className={styles.header}>Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td className={styles.data}>{item.ItemName}</td>
                <td className={styles.data}>{item.Qty}</td>
                <td className={styles.data}>{item.Price}</td>
                <td className={styles.data}>{item.Total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.footer}>
        <p>Amount Due</p>
        <h2>$1000</h2>
      </div>
    </div>
  );
};

export default InvoiceItems;
