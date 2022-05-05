import { storage } from "../../pages/api/firebaseconfig";
import { setDoc, doc, deleteDoc } from "firebase/firestore";

export function markAsPaid(invoice, currentUser) {
  setDoc(
    doc(storage, "users", currentUser.uid, "invoices", invoice),
    { status: "Paid" },
    { merge: true }
  );
}

export function deleteInvoice(invoice, currentUser) {}
