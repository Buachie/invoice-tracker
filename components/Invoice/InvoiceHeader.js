import InvoiceStatus from "../shared/InvoiceStatus";
import { Button } from "../shared/Buttons";
import { markAsPaid } from "../Utilities/Invoice";
import styled from "styled-components";
import Link from "next/link";

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

const BackButton = styled.a`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    color: gray;
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
      <Link href="/">
        <BackButton>
          <img src="/icon-arrow-left.svg" alt="left-arrow" />
          <span> Go Back</span>
        </BackButton>
      </Link>
      <Wrapper>
        <Status>
          <span>Status</span>
          <InvoiceStatus status={status} />
        </Status>
        <ButtonWrapper>
          <Button
            background="#f9fafe"
            textColor="#7e88c3"
            onClick={() => setFormIsOpen(true)}
          >
            Edit
          </Button>
          <Button
            background="#ec5757"
            textColor="#fff"
            onClick={() => setPopupIsOpen(true)}
          >
            Delete
          </Button>
          {status == "Pending" && (
            <Button
              background="#7c5dfa"
              textColor="#fff"
              onClick={() => markAsPaid(id, currentUser)}
            >
              Mark as Paid
            </Button>
          )}
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default InvoiceHeader;
