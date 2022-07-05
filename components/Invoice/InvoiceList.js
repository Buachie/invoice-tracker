import Invoice from "./Invoice";
import { motion } from "framer-motion";
import styled from "styled-components";

const animation = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
`;
const InvoiceList = ({ invoices }) => {
  return (
    <>
      {invoices && (
        <Wrapper variants={animation} initial="hidden" animate="visible">
          {invoices.map((invoice) => {
            return (
              <Invoice
                key={invoice.id}
                id={invoice.id}
                paymentDue={invoice.paymentDue}
                clientName={invoice.clientName}
                total={invoice.total}
                status={invoice.status}
              />
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

export default InvoiceList;
