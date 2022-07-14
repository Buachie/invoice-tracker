import * as Yup from "yup";

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
  paymentTerms: "30",
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

export const validationSchema = Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: Yup.string().required("- All fields must be filled."),
    city: Yup.string().required("- All fields must be filled."),
    postCode: Yup.string().required("- All fields must be filled."),
    country: Yup.string().required("- All fields must be filled."),
  }),
  clientName: Yup.string().required("- All fields must be filled."),
  clientEmail: Yup.string()
    .email("- Invalid email.")
    .required("- All fields must be filled."),
  clientAddress: Yup.object().shape({
    street: Yup.string().required("- All fields must be filled."),
    city: Yup.string().required("- All fields must be filled."),
    postCode: Yup.string().required("- All fields must be filled."),
    country: Yup.string().required("- All fields must be filled."),
  }),
  createdAt: Yup.date()
    .typeError("- Invalid date.")
    .required("- All fields must be filled."),
  paymentTerms: Yup.string().required("- All fields must be filled."),
  description: Yup.string().required("- All fields must be filled."),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("- All fields must be filled."),
        qty: Yup.number()
          .min(0)
          .typeError("- Invalid input.")
          .required("- All fields must be filled."),
        price: Yup.number()
          .min(0)
          .max(10000)
          .typeError("- Invalid input.")
          .required("- All fields must be filled."),
        total: Yup.number(),
      })
    )
    .min(1, "- An item must be added."),
});
