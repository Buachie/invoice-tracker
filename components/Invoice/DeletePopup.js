import React from "react";
import Backdrop from "../form/Backdrop";
import { deleteInvoice } from "../Utilities/Invoice";
import styles from "./Popup.module.scss";
import { useAuth } from "../../contexts/AuthenticationContext";
import { useRouter } from "next/router";

const DeletePopup = ({ invoiceId, isOpen, setIsOpen }) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const confirmDelete = () => {
    deleteInvoice(invoiceId, currentUser);
    router.replace("/");
  };
  return (
    <>
      <Backdrop setIsOpen={isOpen} />
      <div className={styles.container}>
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.cancel} type="button">
            Cancel
          </button>
          <button
            className={styles.delete}
            type="button"
            onClick={confirmDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeletePopup;
