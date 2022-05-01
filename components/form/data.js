export const initialValues = {
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientName: "",
  clientEmail: "",
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  createdAt: new Date(),
  paymentTerms: 30,
  description: "",
  items: [
    {
      name: "",
      qty: 0,
      price: 0,
      total: 0,
    },
  ],
};

export const formValues = {
  senderCity: "",
  senderAddress: "",
  senderPostCode: "",
  senderCountry: "",
  clientName: "",
  clientEmail: "",
  clientAddress: "",
  clientCity: "",
  clientPostCode: "",
  clientCountry: "",
  invoiceDate: "",
  paymentTerms: 11,
  projectDescription: "",
  status: "Pending",
  dueDate: "",
  grandTotal: 0,
  items: [],
};
