import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik } from "formik";
import Form from "./Form";
import { initialValues } from "./data";
import { storage } from "../../pages/api/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import InvoiceFields from "./InvoiceFields";
import styles from "./Form.module.scss";
import { createInvoice } from "../../utilities/Form";

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
      collection(storage, "users", currentUser.uid, "drafts"),
      createInvoice("Draft", values)
    );
  };

  return (
    <>
      {isOpen && (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form setIsOpen={setIsOpen}>
              <InvoiceFields onClick={isOpen == true} />
              <div className={styles.buttonContainer}>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Discard
                </button>
                <button onClick={() => addDraft(formik.values)}>
                  Save Draft
                </button>
                <button className={styles.submit} type="submit">
                  Save &amp; Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default CreateInvoice;
