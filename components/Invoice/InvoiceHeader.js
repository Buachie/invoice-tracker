import InvoiceStatus from "../shared/InvoiceStatus";
import { Button } from "../shared/Buttons";
import { markAsPaid } from "../Utilities/Invoice";
import styled from "styled-components";
import HomeLink from "./HomeLink";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  background-color: #fff;
  padding: 1em;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  @media (max-width: 400px) {
    /* display: none; */
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
  @media (max-width: 400px) {
    display: none;
  }
`;

const animation = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

const InvoiceHeader = ({
  status,
  id,
  currentUser,
  setPopupIsOpen,
  setFormIsOpen,
  setInvoices,
}) => {
  return (
    <>
      <HomeLink />
      <Wrapper variants={animation} initial="hidden" animate="show">
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
              onClick={() => {
                markAsPaid(id, currentUser);
                setInvoices();
              }}
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
