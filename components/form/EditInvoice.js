import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik } from "formik";
import Form from "./Form";
import { storage } from "../../pages/api/firebaseconfig";
import { setDoc, doc } from "firebase/firestore";
import { createInvoice } from "../../utilities/Form";
import styles from "./Form.module.scss";
import InvoiceFields from "./InvoiceFields";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Button } from "../shared/Buttons";

const ButtonWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  gap: 1em;
`

const EditInvoice = ({ setIsOpen, isOpen, invoice, invoiceId }) => {
  const { currentUser } = useAuth();

  const onSubmit = async (values) => {
    await setDoc(
      doc(storage, "users", currentUser.uid, "invoices", invoiceId),
      createInvoice(invoice.status, values),
      { merge: true }
    ).then(() => {
      setIsOpen(false);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Formik
          initialValues={{
            senderAddress: invoice.senderAddress,
            clientName: invoice.clientName,
            clientEmail: invoice.clientEmail,
            clientAddress: invoice.clientAddress,
            createdAt: new Date(invoice.createdAt),
            paymentTerms: invoice.paymentTerms,
            projectDescription: invoice.projectDescription,
            items: invoice.items,
          }}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form setIsOpen={setIsOpen}>
              <InvoiceFields title={"Edit Invoice"} />

              <ButtonWrapper>
                <Button  background='#f0f0f0' textColor='#000' type="button" onClick={() => setIsOpen(false)}>
                  Discard
                </Button>
                <Button background='#7c5dfa' textColor='#fff'type="submit">
                  Update Invoice
                </Button>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      )}
    </AnimatePresence>
  );
};

export default EditInvoice;
