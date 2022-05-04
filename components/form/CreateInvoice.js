import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik, Form } from "formik";
import { initialValues } from "./data";
import { storage } from "../../pages/api/firebaseconfig";
import { doc, addDoc, setDoc, collection } from "firebase/firestore";
import InvoiceFields from "./Form";
import styles from "./Form.module.scss";
import Backdrop from "./Backdrop";
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
        <Backdrop setIsOpen={setIsOpen}>
          <div className={styles.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form>
                <InvoiceFields />
                <div className={styles.buttonContainer}>
                  <button type="button">Discard</button>
                  <button className={styles.submit} type="submit">
                    Save &amp; Send
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default CreateInvoice;
