import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik } from "formik";
import Form from "./Form";
import { storage } from "../../pages/api/firebaseconfig";
import { setDoc, collection, doc } from "firebase/firestore";
import { createInvoice } from "../../utilities/Form";
import styles from "./Form.module.scss";
import InvoiceFields from "./InvoiceFields";

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
    // console.log(createInvoice(invoice.status, values));
  };
  return (
    <>
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
              <InvoiceFields />

              <div className={styles.buttonContainer}>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Discard
                </button>
                <button className={styles.submit} type="submit">
                  Update Invoice
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default EditInvoice;
