import dayjs from "dayjs";

// Calculates the total price of all listed items
export function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.total;
  }
  return total;
}

export function createInvoice(status, values) {
  return {
    ...values,
    createdAt: dayjs(values.createdAt).format("YYYY-MM-DD"),
    paymentDue: dayjs(values.createdAt)
      .add(Number(values.paymentTerms), "day")
      .format("YYYY-MM-DD"),
    status,
    total: calculateTotal(values.items),
  };
}
