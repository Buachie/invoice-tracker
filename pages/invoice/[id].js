import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { storage } from "../api/firebaseconfig";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import InvoiceHeader from "../../components/Invoice/InvoiceHeader";
import { useAuth } from "../../contexts/AuthenticationContext";
import InvoiceBody from "../../components/Invoice/InvoiceBody";
import InvoiceFooter from "../../components/Invoice/InvoiceFooter";
import styles from "./InvoiceSummary.module.scss";
const InvoiceSummary = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const invoiceId = router.query.id;
  const [invoice, setInvoice] = useState({});
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [error, setError] = useState("");

  const getInvoice = async () => {
    const invoiceSnap = await getDoc(
      doc(storage, "users", currentUser.uid, "invoices", invoiceId)
    );
    const invoiceItemSnap = await getDocs(
      collection(
        storage,
        "users",
        currentUser.uid,
        "invoices",
        invoiceId,
        "items"
      )
    );

    if (invoiceSnap.exists()) {
      setError("");
      console.log("Document data: ", invoiceSnap.data());
      setInvoice(invoiceSnap.data());
      setInvoiceItems(
        invoiceItemSnap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    } else {
      setError("Invoice Not Found");
    }
  };

  useEffect(() => {
    getInvoice();
  }, []);

  return (
    <>
      <Head>
        <title>Invoice #{invoiceId}</title>
      </Head>
      {invoiceId ? (
        <>
          <InvoiceHeader status={invoice.status} />
          <InvoiceBody
            invoiceId={invoiceId}
            invoice={invoice}
            items={invoiceItems}
          />
          <InvoiceFooter />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default InvoiceSummary;
