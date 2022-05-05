import React from "react";
import Backdrop from "../form/Backdrop";

const DeletePopup = ({ invoiceId, isOpen, setIsOpen }) => {
  return (
    <Backdrop setIsOpen={isOpen}>
      <div className={styles.container}>
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.{" "}
        </p>
        <div className={styles.buttonContainer}>
          <button type="button">Cancel</button>
          <button type="button">Delete</button>
        </div>
      </div>
    </Backdrop>
  );
};

export default DeletePopup;
