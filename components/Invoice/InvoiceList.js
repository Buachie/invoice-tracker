import Invoice from "./Invoice";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
`;

const ItemWrapper = styled(motion.li)`
  width: 100%;
`;

const containerAnimation = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.5 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const InvoiceList = ({ invoices }) => {
  return (
    <>
      {invoices && (
        <Wrapper variants={containerAnimation} initial="hidden" animate="show">
          {invoices.map((invoice, count) => {
            return (
              <ItemWrapper
                variants={itemAnimation}
                transition={{ duration: 0.3, delay: count * 0.2 }}
              >
                <Invoice
                  key={invoice.id}
                  id={invoice.id}
                  paymentDue={invoice.paymentDue}
                  clientName={invoice.clientName}
                  total={invoice.total}
                  status={invoice.status}
                />
              </ItemWrapper>
            );
          })}
        </Wrapper>
      )}
    </>
  );
};

export default InvoiceList;
