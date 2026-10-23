import { useState } from 'react';
import { CartContext } from './CartContext';
import { addDish, cartTotals } from '../cartUtils';
export default function CartProvider({ children }) {
  // 1. State: Provider giữ nguồn dữ liệu giỏ hàng dùng chung cho các consumer.
  const [cartItems, setCartItems] = useState([]);

  // 2. Handler: Các action cập nhật bất biến; tổng được suy ra từ cartItems.
  function addToCart(dish) {
    setCartItems((previous) => addDish(previous, dish));
  }
  function removeFromCart(id) {
    setCartItems((previous) => previous.filter((item) => item.id !== id));
  }
  function clearCart() {
    setCartItems([]);
  }
  // Totals là dữ liệu suy ra, không tạo thêm state cần đồng bộ.
  const totals = cartTotals(cartItems);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <CartContext.Provider
      value={{ cartItems, totals, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
