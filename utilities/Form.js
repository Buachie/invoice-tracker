// Calculates the total price of all listed items
export function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.total;
  }
  return total;
}
