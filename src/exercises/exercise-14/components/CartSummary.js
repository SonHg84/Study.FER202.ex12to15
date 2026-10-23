import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatMoney } from '../cartUtils';
export default function CartSummary() {
  const { totals } = useContext(CartContext);
  return (
    <p className="result-box" role="status">
      Giỏ hàng: {totals.count} món · Tổng: {formatMoney(totals.cents)}
    </p>
  );
}
