// Tính tiền bằng cents để tránh sai số 4.99 + 1.99 trong số thập phân JS.
export const priceInCents = (price) => Math.round(Number(price) * 100);
export const formatMoney = (cents) => `$${(cents / 100).toFixed(2)}`;
export function cartTotals(items) {
  return items.reduce(
    (totals, item) => ({
      count: totals.count + item.quantity,
      cents: totals.cents + priceInCents(item.price) * item.quantity,
    }),
    { count: 0, cents: 0 },
  );
}
export function addDish(items, dish) {
  return items.some((item) => item.id === dish.id)
    ? items.map((item) =>
        item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
      )
    : [...items, { ...dish, quantity: 1 }];
}
