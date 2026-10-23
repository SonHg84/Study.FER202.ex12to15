import ExampleCard from '../../shared/components/ExampleCard';
import ThemeProvider from './context/ThemeProvider';
import CartProvider from './context/CartProvider';
import Theme from './components/Theme';
import DishesList from './components/DishesList';
import Cart from './components/Cart';
import CartSummary from './components/CartSummary';
import { UserContext } from './context/UserContext';
import Header from './components/Header';
// Trang bài 14: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise14() {
  return (
    <>
      <ExampleCard title="1. ThemeContext">
        <ThemeProvider>
          <Theme />
        </ThemeProvider>
      </ExampleCard>
      <ExampleCard
        title="2 & 3. CartContext và cập nhật realtime"
        description="DishesList, CartSummary và Cart cùng đọc một CartProvider. Thêm lại một món để thấy quantity và tổng cập nhật."
      >
        <CartProvider>
          <CartSummary />
          <DishesList />
          <Cart />
        </CartProvider>
      </ExampleCard>
      <details>
        <summary>Tham khảo: UserContext từ code ban đầu</summary>
        <ExampleCard title="Provider → Header → UserMenu">
          <UserContext.Provider value={{ name: 'Son', role: 'Admin' }}>
            <Header />
          </UserContext.Provider>
        </ExampleCard>
      </details>
    </>
  );
}
