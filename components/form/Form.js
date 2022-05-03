import { useAuth } from "../../contexts/AuthenticationContext";
import Input from "./Input";
import DateSelect from "./DateSelect";
import styles from "./Form.module.scss";
import Items from "./Items";
import Select from "./Select";

const InvoiceFields = ({ title, submitBtn, redirect }) => {
  const dropdownOptions = [
    { name: "Net 1 Day", value: 1 },
    { name: "Net 7 Days", value: 7 },
    { name: "Net 14 Days", value: 14 },
    { name: "Net 30 Days", value: 30 },
  ];
  return (
    <>
      <h2>{title}</h2>

      <h4>Bill From</h4>
      <Input label="Street Address" name="senderAddress.street" />
      <div className={styles.multiInput}>
        <Input label="City" name="senderAddress.city" />
        <Input label="Post Code" name="senderAddress.postCode" />
        <Input label="Country" name="senderAddress.country" />
      </div>

      <h4>Bill To</h4>
      <Input label="Client Name" name="clientName" />
      <Input label="Client Email" name="clientEmail" />
      <Input label="Street Address" name="clientAddress.street" />
      <div className={styles.multiInput}>
        <Input label="City" name="clientAddress.city" />
        <Input label="Post Code" name="clientAddress.postCode" />
        <Input label="Country" name="clientAddress.country" />
      </div>
      <div className={styles.multiInput}>
        <DateSelect label="Invoice Date" name="createdAt" />
        <Select
          label="Payment Terms"
          name="paymentTerms"
          options={dropdownOptions}
        />
      </div>
      <Input label="Project Description" name="projectDescription" />

      <h4>Item List</h4>
      <Items name="items" />
    </>
  );
};

InvoiceFields.defaultProps = {
  title: "New Invoice",
};

export default InvoiceFields;
