import { useAuth } from "../../contexts/AuthenticationContext";
import { Formik } from "formik";
import Form from "./Form";
import { initialValues } from "./data";
import { storage } from "../../pages/api/firebaseconfig";
import { setDoc, collection } from "firebase/firestore";
import { createInvoice } from "../../utilities/Form";
import styles from "./Form.module.scss";

const EditInvoice = ({ setIsOpen, isOpen, values }) => {
  const { currentUser } = useAuth();

  const onSubmit = async (values) => {
    await setDoc(
      collection(storage, "users", currentUser.uid, "invoices"),
      createInvoice()
    );
  };
  return <div>EditInvoice</div>;
};

export default EditInvoice;
