import { useEffect, useState } from 'react';
export default function CountdownTimer({ initialValue = 10 }) {
  // 1. State: Khởi tạo từ initialValue; effect giảm từng giây và cleanup interval.
  const [timeRemaining, setTimeRemaining] = useState(initialValue);
  useEffect(() => {
    if (timeRemaining <= 0) return undefined;
    const timerId = setInterval(
      () => setTimeRemaining((previous) => Math.max(0, previous - 1)),
      1000,
    );
    return () => clearInterval(timerId); // Cleanup khi thay dependency hoặc unmount.
  }, [timeRemaining]);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="counter-value">Time Remaining: {timeRemaining}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setTimeRemaining(initialValue)}
      >
        Restart countdown
      </button>
    </>
  );
}
