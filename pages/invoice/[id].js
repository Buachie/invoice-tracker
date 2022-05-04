import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { storage } from "../api/firebaseconfig";
import { getDoc, doc } from "firebase/firestore";
import InvoiceHeader from "../../components/Invoice/InvoiceHeader";
import { useAuth } from "../../contexts/AuthenticationContext";
import InvoiceBody from "../../components/Invoice/InvoiceBody";
import InvoiceFooter from "../../components/Invoice/InvoiceFooter";

const InvoiceSummary = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const invoiceId = router.query.id;
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState("");

  const getInvoice = async () => {
    const invoiceSnap = await getDoc(
      doc(storage, "users", currentUser.uid, "invoices", invoiceId)
    );
    if (invoiceSnap.exists()) {
      setError("");
      console.log("Document data: ", invoiceSnap.data());
      setInvoice(invoiceSnap.data());
      console.log("Invoice: ", invoice);
    } else {
      setError("Invoice Not Found");
    }
  };

  useEffect(() => {
    getInvoice();
    console.log(invoice);
  }, []);

  return (
    <>
      <Head>
        <title>Invoice #{invoiceId}</title>
      </Head>
      {invoice ? (
        <>
          <InvoiceHeader status={invoice.status} />
          <InvoiceBody invoiceId={invoiceId} invoice={invoice} />
          <InvoiceFooter />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default InvoiceSummary;
