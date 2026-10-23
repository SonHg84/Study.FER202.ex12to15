# Bài 14 useContext

ThemeProvider và CartProvider chia sẻ dữ liệu giữa component.

## Tài liệu đối chiếu

- Đề: `Exercise 14_useContext.docx`
- Slide: Slot 8 và Slot 9,10 · Context

## Yêu cầu đã triển khai

- ThemeContext/ThemeProvider/Theme với màu theo đề
- CartContext/CartProvider/DishesList/Cart
- Count, quantity và giá trị cập nhật realtime
- Remove món và Clear Cart

## Thứ tự review

1. `Exercise14.js`: trang chỉ ghép các phần của bài.
2. context/ThemeContext.js → context/ThemeProvider.js → components/Theme.js → context/CartContext.js → cartUtils.js → context/CartProvider.js → components/DishesList.js → components/CartSummary.js → components/Cart.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/14`.

Toggle Theme hai lần. Thêm Uthappizza hai lần và Zucchipakoda một lần: 3 món, $11.97. Remove Uthappizza rồi Clear Cart.

## File trong module

- `Exercise14.js`
- `cartUtils.js`
- `components/Cart.js`
- `components/CartSummary.js`
- `components/DishesList.js`
- `components/Header.js`
- `components/Theme.js`
- `components/UserMenu.js`
- `context/CartContext.js`
- `context/CartProvider.js`
- `context/ThemeContext.js`
- `context/ThemeProvider.js`
- `context/UserContext.js`
