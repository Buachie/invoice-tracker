import { useState, useEffect } from "react";
import Head from "next/head";
import Invoice from "../components/Invoice/Invoice";
import { useAuth } from "../contexts/AuthenticationContext";
import { storage } from "./api/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import styles from "../styles/Home.module.scss";
import CreateInvoice from "../components/form/CreateInvoice";
import Toolbar from "../components/toolbar/Toolbar";

const Home = () => {
  const { currentUser } = useAuth();
  const [invoices, setInvoices] = useState([]);
  const [formIsOpen, setFormIsOpen] = useState(false);

  const getInvoices = async () => {
    const querySnapshot = await getDocs(
      collection(storage, "users", currentUser.uid, "invoices")
    );
    setInvoices(
      querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  };
  useEffect(() => {
    getInvoices();
  }, []);

  console.log(invoices);

  return (
    <>
      <Head>
        <title>My Invoices - Invoicer</title>
        <meta name="description" content="Available invoices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toolbar setFormIsOpen={setFormIsOpen} />
      <div className={styles.container}>
        {invoices.length > 0 ? (
          invoices.map((invoice, key) => {
            return (
              <Invoice
                key={key}
                invoiceId={invoice.id}
                paymentDue={invoice.paymentDue}
                clientName={invoice.clientName}
                total={invoice.total}
                status={invoice.status}
              />
            );
          })
        ) : (
          <div>
            <img src="/illustration-empty.svg" />
            <h1>There is nothing here</h1>
            <p>
              Create an invoice by clicking the <br />
              <span className={styles.bold}>New Invoice</span> button and get
              started
            </p>
          </div>
        )}
        <CreateInvoice isOpen={formIsOpen} setIsOpen={setFormIsOpen} />
      </div>
    </>
  );
};

export default Home;
