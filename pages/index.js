import { useState, useEffect } from "react";
import Head from "next/head";
import { useAuth } from "../contexts/AuthenticationContext";
import { storage } from "./api/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import styles from "../styles/Home.module.scss";
import CreateInvoice from "../components/form/CreateInvoice";
import Toolbar from "../components/toolbar/Toolbar";
import SignIn from "../components/Authentication/SignIn";
import InvoiceList from "../components/Invoice/InvoiceList";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const { currentUser } = useAuth();
  const [invoices, setInvoices] = useState([]);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [filter, setFilter] = useState(null);
  const [filteredInvoices, setFilteredInvoices] = useState(null);

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
    currentUser ? getInvoices() : "";
  }, [currentUser]);

  useEffect(() => {
    setFilteredInvoices(invoices);

    if (invoices && filter) {
      setFilteredInvoices(
        invoices.filter((invoice) => {
          return invoice.status === filter;
        })
      );
    }
  }, [invoices, filter]);

  return (
    <>
      <Head>
        <title>My Invoices - Invoicer</title>
        <meta name="description" content="Available invoices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        <Toolbar
          setFormIsOpen={setFormIsOpen}
          invoices={invoices}
          filter={filter}
          setFilter={setFilter}
          setLoginIsOpen={setLoginIsOpen}
        />
        {currentUser && (
          <div className={styles.container}>
            {invoices.length > 0 ? (
              <InvoiceList invoices={filteredInvoices} />
            ) : (
              <div className={styles.noInvoices}>
                <img src="/illustration-empty.svg" />
                <h1>There is nothing here</h1>
                <p>
                  Create an invoice by clicking the <br />
                  <span className={styles.bold}>New Invoice</span> button and
                  get started
                </p>
              </div>
            )}
            <CreateInvoice isOpen={formIsOpen} setIsOpen={setFormIsOpen} />
          </div>
        )}
        <SignIn isOpen={loginIsOpen} setIsOpen={setLoginIsOpen} />
      </AnimatePresence>
    </>
  );
};

export default Home;
