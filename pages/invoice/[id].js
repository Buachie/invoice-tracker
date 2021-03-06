import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { storage } from "../api/firebaseconfig";
import { getDoc, doc } from "firebase/firestore";
import InvoiceHeader from "../../components/Invoice/InvoiceHeader";
import { useAuth } from "../../contexts/AuthenticationContext";
import InvoiceBody from "../../components/Invoice/InvoiceBody";
import InvoiceFooter from "../../components/Invoice/InvoiceFooter";
import DeletePopup from "../../components/Invoice/DeletePopup";
import EditInvoice from "../../components/form/EditInvoice";

const InvoiceSummary = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const invoiceId = router.query.id;
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState("");
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);

  const getInvoice = async () => {
    const invoiceSnap = await getDoc(
      doc(storage, "users", currentUser.uid, "invoices", invoiceId)
    );
    if (invoiceSnap.exists()) {
      setError("");
      setInvoice(invoiceSnap.data());
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
        <title>Invoice #{invoiceId.substring(0, 5)}</title>
      </Head>
      <DeletePopup
        invoiceId={invoiceId}
        isOpen={popupIsOpen}
        setIsOpen={setPopupIsOpen}
      />
      {invoice ? (
        <>
          <InvoiceHeader
            setPopupIsOpen={setPopupIsOpen}
            setFormIsOpen={setFormIsOpen}
            setInvoices={getInvoice}
            status={invoice.status}
            id={invoiceId}
            currentUser={currentUser}
          />
          <InvoiceBody invoiceId={invoiceId} invoice={invoice} />
          <InvoiceFooter
            status={invoice.status}
            setPopupIsOpen={setPopupIsOpen}
            setFormIsOpen={setFormIsOpen}
            currentUser={currentUser}
            id={invoiceId}
          />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
      <EditInvoice
        isOpen={formIsOpen}
        setIsOpen={setFormIsOpen}
        invoice={invoice}
        invoiceId={invoiceId}
        setInvoice={getInvoice}
      />
    </>
  );
};

export default InvoiceSummary;
