import { motion } from "framer-motion";
import InvoiceItems from "./InvoiceItems";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  padding: 1em;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  p {
    color: #7e88c3;
    font-size: 0.8em;
  }
`;
const StyledHead = styled.div`
  grid-row: 1/2;
  grid-column: 1/5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .invoiceId {
    text-transform: uppercase;
  }
`;
const Sender = styled.div`
  grid-column: 2/3;
  text-align: right;
  @media (max-width: 768px) {
    grid-column: 1/2;
    text-align: left;
  }
`;

const InvoiceContent = styled.div`
  grid-row: 2/2;
  grid-column: 1/5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const InvoiceBody = ({ invoice, invoiceId }) => {
  return (
    <Wrapper variants={animation} initial="hidden" animate="show">
      <StyledHead>
        <div className="subject">
          <h3 className="invoiceId">#{invoiceId.substring(0, 5)}</h3>
          <p>{invoice.description}</p>
        </div>
        <Sender>
          <p>{invoice.senderAddress.street}</p>
          <p>{invoice.senderAddress.city}</p>
          <p>{invoice.senderAddress.postCode}</p>
          <p>{invoice.senderAddress.country}</p>
        </Sender>
      </StyledHead>
      <InvoiceContent>
        <div className="date">
          <div className="receipt">
            <p>Invoice Date</p>
            <h4>{invoice.createdAt}</h4>
          </div>
          <div className="due-date">
            <p>Payment Due</p>
            <h4>{invoice.paymentDue}</h4>
          </div>
        </div>

        <div className="client-info">
          <p>Bill To</p>
          <h4>{invoice.clientName}</h4>
          <p>{invoice.clientAddress.street}</p>
          <p>{invoice.clientAddress.city}</p>
          <p>{invoice.clientAddress.postCode}</p>
          <p>{invoice.clientAddress.country}</p>
        </div>
        <div className="email">
          <p>Sent to</p>
          <h4>{invoice.clientEmail}</h4>
        </div>
      </InvoiceContent>
      <InvoiceItems items={invoice.items} total={invoice.total} />
    </Wrapper>
  );
};

export default InvoiceBody;
