import React, { useState, useEffect } from "react";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
  useField,
} from "formik";
import Backdrop from "./Backdrop";
import Input from "./Input";
import { formValues, initialValues } from "./data";
import styles from "./Form.module.scss";
import Items from "./Items";

const InvoiceForm = ({
  title,
  invoice,
  formArr,
  submitBtn,
  onSubmit,
  redirect,
}) => {
  return (
    <Backdrop>
      <div className={styles.container}>
        <Formik initialValues={initialValues}>
          <Form>
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

            <h4>Item List</h4>
            <Items name="items" />
          </Form>
        </Formik>
      </div>
    </Backdrop>
  );
};

InvoiceForm.defaultProps = {
  title: "New Invoice",
};

export default InvoiceForm;
