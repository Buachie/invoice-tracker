import InvoiceStatus from "../shared/InvoiceStatus";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { addCommas, roundToNearestCent } from "../Utilities/Invoice";

const Wrapper = styled(motion.a)`
  font-size: 1em;
  text-decoration: none;
  background-color: #fff;
  padding: 1em;
  border: 2px solid #fff;
  border-radius: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 5rem 10rem 1fr min-content min-content min-content;
  grid-template-rows: min-content;
  align-items: center;
  gap: 0.8em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    border: 2px solid #7c5dfa;
  }
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
  text-transform: uppercase;
  color: #000;
  span {
    color: #7e88c3;
    /* font-weight: normal; */
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
  text-align: left;
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
  color: #000;
  @media (max-width: 768px) {
    grid-column: 1/3;
    grid-row: 3/3;
    text-align: left;
  }
`;

const Invoice = ({ id, paymentDue, clientName, total, status }) => {
  return (
    <Link href={`/invoice/${id}`} passHref={true} scroll={false}>
      <Wrapper>
        <InvoiceID>
          <span>#</span>
          {id.substring(0, 5)}
        </InvoiceID>
        <DueDate>Due {paymentDue}</DueDate>
        <ClientName>{clientName}</ClientName>
        <Total>{`$${roundToNearestCent(addCommas(total))}`}</Total>
        <InvoiceStatus status={status} />
        <div className="arrow">
          <img src="/icon-arrow-right.svg" alt="right-arrow" />
        </div>
      </Wrapper>
    </Link>
  );
};

export default Invoice;
