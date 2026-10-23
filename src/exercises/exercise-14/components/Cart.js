import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatMoney, priceInCents } from '../cartUtils';
export default function Cart() {
  const { cartItems, totals, removeFromCart, clearCart } = useContext(CartContext);
  return (
    <div className="border rounded p-3 mt-3">
      <h3 className="h5">Cart</h3>
      {!cartItems.length && <p>Giỏ hàng trống.</p>}
      <ul className="list-group mb-3">
        {cartItems.map((item) => (
          <li
            className="list-group-item d-flex flex-wrap justify-content-between gap-2"
            key={item.id}
          >
            <span>
              {item.name} × {item.quantity} ·{' '}
              {formatMoney(priceInCents(item.price) * item.quantity)}
            </span>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.name}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>
        Total items: {totals.count} · Total value: {formatMoney(totals.cents)}
      </p>
      <button
        className="btn btn-outline-danger"
        onClick={clearCart}
        disabled={!cartItems.length}
      >
        Clear Cart
      </button>
    </div>
  );
}
