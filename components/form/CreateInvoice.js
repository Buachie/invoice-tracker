import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik, Form } from "formik";
import { initialValues } from "./data";
import { storage } from "../../pages/api/firebaseconfig";
import { doc, addDoc, setDoc, collection } from "firebase/firestore";
import InvoiceFields from "./Form";
import styles from "./Form.module.scss";
import Backdrop from "./Backdrop";
import Invoice from "../Invoice/Invoice";

const CreateInvoice = () => {
  const { currentUser } = useAuth();

  return (
    <Backdrop>
      <div className={styles.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log(values);
              await addDoc(
                collection(storage, "users", currentUser.uid, "invoices"),
                values
              );
            } catch (error) {
              console.log(error);
            }
          }}
        >
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
  );
};

export default CreateInvoice;
