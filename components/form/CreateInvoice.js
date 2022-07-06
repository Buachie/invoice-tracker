import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik } from "formik";
import Form from "./Form";
import { initialValues, validationSchema } from "./data";
import { storage } from "../../pages/api/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import InvoiceFields from "./InvoiceFields";
import { createInvoice } from "../../utilities/Form";
import { AnimatePresence } from "framer-motion";
import { Button } from "../shared/Buttons";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const CreateInvoice = ({ setIsOpen, isOpen, getInvoices }) => {
  const { currentUser } = useAuth();

  const onSubmit = async (values) => {
    console.log(createInvoice("Pending", values));
    await addDoc(
      collection(storage, "users", currentUser.uid, "invoices"),
      createInvoice("Pending", values)
    ).then(() => {
      // console.log("Invoice Created");
      getInvoices();
      setIsOpen(false);
    });
  };

  const addDraft = async (values) => {
    await addDoc(
      collection(storage, "users", currentUser.uid, "invoices"),
      createInvoice("Draft", values)
    ).then(() => {
      // console.log("Invoice Created");
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
                  background="#f0f0f0"
                  textColor="#000"
                  type="button"
                  onClick={() => addDraft(formik.values)}
                >
                  Save Draft
                </Button>
                <Button background="#7c5dfa" textColor="#fff" type="submit">
                  Save &amp; Send
                </Button>
                {/* <button type="button" onClick={() => setIsOpen(false)}>
                  Discard
                </button>
                <button onClick={() => addDraft(formik.values)}>
                  Save Draft
                </button>
                <button type="submit">Save &amp; Send</button> */}
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      )}
    </AnimatePresence>
  );
};

export default CreateInvoice;
