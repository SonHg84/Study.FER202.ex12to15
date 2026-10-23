import { useState } from 'react';
export default function StateCounter() {
  // 1. State: Khởi tạo count bằng 0; mỗi click cập nhật +1.
  const [count, setCount] = useState(0);
  // Functional update lấy state mới nhất khi tăng liên tiếp.

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="counter-value">Count: {count}</p>
      <button
        className="btn btn-primary"
        onClick={() => setCount((previous) => previous + 1)}
      >
        Increment
      </button>
    </>
  );
}
