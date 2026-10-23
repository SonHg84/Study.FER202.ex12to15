# Bài 13 useEffect

Fetch theo prop, timer, resize listener và validation theo dependency.

## Tài liệu đối chiếu

- Đề: `Exercise 13_useEffect.docx`
- Slide: Slot 9,10 · Hooks

## Yêu cầu đã triển khai

- UserPosts dùng JSONPlaceholder, refetch khi userId đổi
- Countdown mỗi giây, dừng tại 0 và cleanup
- WindowSize thêm/gỡ resize listener
- ValidatedInput nhận validationFunction và errorMessage

## Thứ tự review

1. `Exercise13.js`: trang chỉ ghép các phần của bài.
2. components/UserPosts.js → components/CountdownTimer.js → components/WindowSize.js → components/ValidatedInput.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/13`.

Đổi user 1 → 2, xem loading và dữ liệu mới. Chờ timer về 0, restart. Resize cửa sổ. Nhập ab rồi abc vào validation. Đổi bài để kiểm tra cleanup.

## File trong module

- `Exercise13.js`
- `components/CountdownTimer.js`
- `components/UserPosts.js`
- `components/ValidatedInput.js`
- `components/WindowSize.js`
