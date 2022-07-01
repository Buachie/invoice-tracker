import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik } from "formik";
import Form from "./Form";
import { initialValues } from "./data";
import { storage } from "../../pages/api/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import InvoiceFields from "./InvoiceFields";
import styles from "./Form.module.scss";
import { createInvoice } from "../../utilities/Form";
import { AnimatePresence } from "framer-motion";
import { Button } from "../shared/Buttons";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  gap: 1em;
`

const CreateInvoice = ({ setIsOpen, isOpen }) => {
  const { currentUser } = useAuth();

  const onSubmit = async (values) => {
    await addDoc(
      collection(storage, "users", currentUser.uid, "invoices"),
      createInvoice("Pending", values)
    );
  };

  const addDraft = async (values) => {
    await addDoc(
      collection(storage, "users", currentUser.uid, "invoices"),
      createInvoice("Draft", values)
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form setIsOpen={setIsOpen}>
              <InvoiceFields />
              <ButtonWrapper>
                <Button background='#f0f0f0' textColor='#000' type='button' onClick={()=>setIsOpen(false)}>Discard</Button>
                <Button background='#f0f0f0' textColor='#000' type='button' onClick={()=> addDraft(formik.values)}>Save Draft</Button>
                <Button background='#7c5dfa' textColor='#fff' type='submit'>Save &amp; Send</Button>
                {/* <button type="button" onClick={() => setIsOpen(false)}>
                  Discard
                </button>
                <button onClick={() => addDraft(formik.values)}>
                  Save Draft
                </button>
                <button className={styles.submit} type="submit">
                  Save &amp; Send
                </button> */}
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      )}
    </AnimatePresence>
  );
};

export default CreateInvoice;
