import { useRouter } from "next/router";
import InvoiceStatus from "../shared/InvoiceStatus";
import styled from "styled-components";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0 },
  visible: {
    transition: { opacity: 1 },
  },
};

const Wrapper = styled(motion.button)`
  font-size: 1em;
  text-decoration: none;
  background-color: #fff;
  padding: 1em;
  border: none;
  border-radius: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 5rem 1fr 1fr min-content min-content min-content;
  grid-template-rows: min-content;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }

  .arrow {
    grid-column: 6/7;
    grid-row: 1/2;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const InvoiceID = styled.div`
  font-weight: bold;
  text span {
    font-weight: normal;
  }
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 1/2;
    text-align: left;
  }
`;

const DueDate = styled.div`
  color: #7e88c3;
  grid-column: 2/3;
  grid-row: 1/2;
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
    text-align: left;
  }
`;

const ClientName = styled.div`
  color: #7e88c3;
  grid-column: 3/4;
  grid-row: 1/2;
  @media (max-width: 768px) {
    text-align: right;
    grid-column: 2/2;
    grid-row: 1/2;
  }
`;

const Total = styled.div`
  grid-column: 4/5;
  font-weight: bold;
  @media (max-width: 768px) {
    grid-column: 1/3;
    grid-row: 3/3;
    text-align: left;
  }
`;

const Invoice = ({ id, paymentDue, clientName, total, status }) => {
  const router = useRouter();
  const showFullInvoiceHandler = () => {
    router.push("/invoice/" + id);
  };

  return (
    <Wrapper
      onClick={showFullInvoiceHandler}
      variants={animation}
      animate="visible"
    >
      <InvoiceID>
        <span>#</span>
        {id.substring(0, 5)}
      </InvoiceID>
      <DueDate>Due {paymentDue}</DueDate>
      <ClientName>{clientName}</ClientName>
      <Total>{`$${total}`}</Total>
      <InvoiceStatus status={status} />
      <div className="arrow">
        <img src="/icon-arrow-right.svg" alt="" />
      </div>
    </Wrapper>
  );
};

export default Invoice;
