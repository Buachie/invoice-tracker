import { useAuth } from "../../contexts/AuthenticationContext";
import { storage } from "../../pages/api/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./data";
import { createInvoice } from "../../utilities/Form";
import { AnimatePresence } from "framer-motion";
import { Button } from "../shared/Buttons";
import Form from "./Form";
import InvoiceFields from "./InvoiceFields";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-self: flex-end;
  padding: 1em 0;
`;

const CreateInvoice = ({ setIsOpen, isOpen, getInvoices }) => {
  const { currentUser } = useAuth();

  const onSubmit = async (values) => {
    await addDoc(
      collection(storage, "users", currentUser.uid, "invoices"),
      createInvoice("Pending", values)
    ).then(() => {
      getInvoices();
      setIsOpen(false);
    });
  };

  const addDraft = async (values) => {
    await addDoc(
      collection(storage, "users", currentUser.uid, "invoices"),
      createInvoice("Draft", values)
    ).then(() => {
      getInvoices();
      setIsOpen(false);
    });
  };

  return (
    <AnimatePresence key="create-invoice">
      {isOpen && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form setIsOpen={setIsOpen}>
              <InvoiceFields />
              <ButtonWrapper>
                <Button
                  background="#f0f0f0"
                  textColor="#000"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Discard
                </Button>
                <Button
                  background="#373B53"
                  textColor="#888EB0"
                  type="button"
                  onClick={() => addDraft(formik.values)}
                >
                  Save as Draft
                </Button>
                <Button background="#7c5dfa" textColor="#fff" type="submit">
                  Save &amp; Send
                </Button>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      )}
    </AnimatePresence>
  );
};

export default CreateInvoice;
