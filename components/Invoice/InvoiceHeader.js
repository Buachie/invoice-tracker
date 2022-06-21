import styles from "./InvoiceHeader.module.scss";
import { markAsPaid } from "../Utilities/Invoice";
import Link from "next/link";
import InvoiceStatus from "../shared/InvoiceStatus";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  background-color: #fff;
  padding: 1em;
  border-radius: 20px;
  @media (max-width: 400px) {
    display: none;
  }
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1em;
  @media (max-wdith: 400px) {
    display: none;
  }
  & > * {
    border-radius: 20px;
    border: none;
    padding: 1em;
    font-weight: bold;
  }
  .edit {
    background-color: #f9fafe;
    color: #7e88c3;
  }
  .delete {
    background-color: #ec5757;
    color: #fff;
  }

  .markPaid {
    background-color: #7c5dfa;
    color: #fff;
  }
`;

const InvoiceHeader = ({
  status,
  id,
  currentUser,
  setPopupIsOpen,
  setFormIsOpen,
}) => {
  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.back}>
            <img src="/icon-arrow-left.svg" alt="left-arrow" />
            <span> Go Back</span>
          </div>
        </Link>
      </div>
      <Wrapper>
        <Status>
          <span>Status</span>
          <InvoiceStatus status={status} />
        </Status>
        <ButtonWrapper>
          <button className="edit" onClick={() => setFormIsOpen(true)}>
            Edit
          </button>
          <button className="delete" onClick={() => setPopupIsOpen(true)}>
            Delete
          </button>
          {status == "Pending" ? (
            <button
              onClick={() => markAsPaid(id, currentUser)}
              className="markPaid"
            >
              Mark as Paid
            </button>
          ) : null}
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default InvoiceHeader;
