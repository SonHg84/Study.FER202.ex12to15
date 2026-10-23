# Bài 12 useState

Bảy bài nhỏ minh họa state cục bộ và cập nhật giao diện.

## Tài liệu đối chiếu

- Đề: `Exercise 12_useState.docx`
- Slide: Slot 9,10 · Hooks

## Yêu cầu đã triển khai

- Counter
- Controlled Input
- Toggle Visibility: khởi đầu hidden
- Todo thêm/xóa
- Color Switcher
- Search Filter
- Drag and Drop với items và draggingItem

## Thứ tự review

1. `Exercise12.js`: trang chỉ ghép các phần của bài.
2. components/StateCounter.js → components/ControlledInput.js → components/ToggleVisibility.js → components/StateTodoList.js → components/ColorSwitcher.js → components/StateSearchFilter.js → reorder.js → components/DragDropList.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/12`.

Chạy từng demo theo thứ tự 1–7. Kéo Item 1 xuống Item 3 rồi dùng nút lên/xuống. Mục useRef là phần bổ sung từ code ban đầu.

## File trong module

- `Exercise12.js`
- `components/ColorSwitcher.js`
- `components/ControlledInput.js`
- `components/DragDropList.js`
- `components/RefPractice.js`
- `components/StateCounter.js`
- `components/StateSearchFilter.js`
- `components/StateTodoItem.js`
- `components/StateTodoList.js`
- `components/ToggleVisibility.js`
- `reorder.js`
