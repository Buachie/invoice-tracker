import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik } from "formik";
import Form from "./Form";
import { storage } from "../../pages/api/firebaseconfig";
import { setDoc, doc } from "firebase/firestore";
import { createInvoice } from "../../utilities/Form";
import InvoiceFields from "./InvoiceFields";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Button } from "../shared/Buttons";
import { validationSchema } from "./data";

const ButtonWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 1em 0;
`;

const EditInvoice = ({ setIsOpen, isOpen, invoice, setInvoice, invoiceId }) => {
  const { currentUser } = useAuth();

  const onSubmit = async (values) => {
    await setDoc(
      doc(storage, "users", currentUser.uid, "invoices", invoiceId),
      createInvoice(invoice.status, values),
      { merge: true }
    ).then(() => {
      setIsOpen(false);
      setInvoice();
    });
  };

  const publishInvoice = async (values) => {
    await setDoc(
      doc(storage, "users", currentUser.uid, "invoices", invoiceId),
      createInvoice("Pending", values),
      { merge: true }
    ).then(() => {
      setIsOpen(false);
      setInvoice();
    });
  };

  return (
    <AnimatePresence key="edit-invoice">
      {isOpen && (
        <Formik
          initialValues={{
            senderAddress: invoice.senderAddress,
            clientName: invoice.clientName,
            clientEmail: invoice.clientEmail,
            clientAddress: invoice.clientAddress,
            createdAt: new Date(invoice.createdAt),
            paymentTerms: invoice.paymentTerms,
            description: invoice.description,
            items: invoice.items,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form setIsOpen={setIsOpen}>
              <InvoiceFields title={"Edit Invoice"} />

              <ButtonWrapper>
                <Button
                  background="#f0f0f0"
                  textColor="#000"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Discard
                </Button>
                <Button background="#7c5dfa" textColor="#fff" type="submit">
                  Update Invoice
                </Button>
                {invoice.status === "Draft" && (
                  <Button
                    type="button"
                    background="#7c5dfa"
                    textColor="#fff"
                    onClick={() => publishInvoice(formik.values)}
                  >
                    Publish
                  </Button>
                )}
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      )}
    </AnimatePresence>
  );
};

export default EditInvoice;
