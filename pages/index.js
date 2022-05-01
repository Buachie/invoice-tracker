import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import { withProtected } from "../hooks/route";
import Invoice from "../components/Invoice/Invoice";
import { useAuth } from "../contexts/AuthenticationContext";
import { storage } from "./api/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import styles from "../styles/Home.module.scss";
import InvoiceForm from "../components/form/Form";

const Home = () => {
  const { currentUser } = useAuth();
  const [invoices, setInvoices] = useState([]);

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
      <div className={styles.container}>
        {invoices.length > 0 ? (
          invoices.map((invoice, key) => {
            return (
              <Invoice
                key={key}
                invoiceId={invoice.id}
                dueDate={invoice.dueDate}
                clientName={invoice.clientName}
                total={invoice.grandTotal}
                status={invoice.status}
              />
            );
          })
        ) : (
          <div>
            <Image src="/illustration-emty.svg" width={50} height={50} />
          </div>
        )}
        <InvoiceForm />
      </div>
    </>
  );
};

export default Home;
