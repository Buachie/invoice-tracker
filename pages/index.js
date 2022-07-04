import { useState, useEffect } from "react";
import Head from "next/head";
import { useAuth } from "../contexts/AuthenticationContext";
import { storage } from "./api/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import CreateInvoice from "../components/form/CreateInvoice";
import Toolbar from "../components/toolbar/Toolbar";
import SignIn from "../components/Authentication/SignIn";
import InvoiceList from "../components/Invoice/InvoiceList";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import NoInvoices from "../components/Invoice/NoInvoices";

const Wrapper = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;
  @media screen and (max-width: 768px) {
    padding: 0 0.5em;
  }
`;

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
      <AnimatePresence key="homepage">
        <Toolbar
          setFormIsOpen={setFormIsOpen}
          invoices={invoices}
          filter={filteredInvoices}
          setFilter={setFilter}
          setLoginIsOpen={setLoginIsOpen}
        />
        {currentUser ? (
          <Wrapper>
            {invoices.length > 0 ? (
              <InvoiceList invoices={filteredInvoices} />
            ) : (
              <NoInvoices />
            )}
            <CreateInvoice isOpen={formIsOpen} setIsOpen={setFormIsOpen} />
          </Wrapper>
        ) : (
          <NoInvoices />
        )}
        <SignIn isOpen={loginIsOpen} setIsOpen={setLoginIsOpen} />
      </AnimatePresence>
    </>
  );
};

export default Home;
