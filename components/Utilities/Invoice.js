import { storage } from "../../pages/api/firebaseconfig";
import { setDoc, doc, deleteDoc } from "firebase/firestore";

export function displayErrors(errors) {
  const messages = [];

  for (const key in errors) {
    const value = errors[key];
    if (typeof value === "string") {
      messages.push(value);
    } else if (typeof value === "object") {
      messages.push(...displayErrors(value));
    } else if (Array.isArray(value)) {
      for (const item of value) {
        messages.push(...displayErrors(item));
      }
    }
  }
  return [...new Set(messages)];
}

export function markAsPaid(invoice, currentUser) {
  setDoc(
    doc(storage, "users", currentUser.uid, "invoices", invoice),
    { status: "Paid" },
    { merge: true }
  );
}

export function deleteInvoice(invoice, currentUser) {
  deleteDoc(doc(storage, "users", currentUser.uid, "invoices", invoice));
}

export function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
