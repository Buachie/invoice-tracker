import React from "react";
import Backdrop from "../form/Backdrop";
import { deleteInvoice } from "../Utilities/Invoice";
import { useAuth } from "../../contexts/AuthenticationContext";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  padding: 1em;
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .bold {
    font-weight: bold;
  }
`;
const StyledButton = styled.button`
  border: none;
  padding: 1em;
  border-radius: 24px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &.delete {
    background-color: red;
    color: #fff;
  }
`;
const DeletePopup = ({ invoiceId, isOpen, setIsOpen }) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  const confirmDelete = () => {
    deleteInvoice(invoiceId, currentUser);
    router.replace("/");
  };

  return (
    <>
      {isOpen && (
        <Backdrop setIsOpen={setIsOpen}>
          <Wrapper>
            <h2>Confirm Deletion</h2>
            <p>
              Are you sure you want to delete invoice{" "}
              <span className="bold">#{invoiceId.substring(0, 5)}</span>? This
              action cannot be undone.
            </p>
            <div>
              <StyledButton
                className="cancel"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </StyledButton>
              <StyledButton
                className="delete"
                type="button"
                onClick={confirmDelete}
              >
                Delete
              </StyledButton>
            </div>
          </Wrapper>
        </Backdrop>
      )}
    </>
  );
};

export default DeletePopup;
