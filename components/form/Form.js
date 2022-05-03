import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthenticationContext";
import { Form } from "formik";
import Input from "./Input";
import DateSelect from "./DateSelect";
import styles from "./Form.module.scss";
import Items from "./Items";

const InvoiceFields = ({ title, submitBtn, redirect }) => {
  const { currentUser } = useAuth();
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
