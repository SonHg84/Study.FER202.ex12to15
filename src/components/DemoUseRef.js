import { useEffect, useRef, useState } from 'react';

function CountTime() {
  const [count, setCount] = useState(0);
  const timeRef = useRef(null);
  // Timer ID lưu trong ref; cleanup để không chạy ngầm khi đổi bài.
  useEffect(() => () => clearInterval(timeRef.current), []);

  function handleStart() {
    if (timeRef.current !== null) return;
    timeRef.current = setInterval(() => setCount((previous) => previous + 1), 1000);
  }
  function handleStop() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  return (
    <div>
      <p>Thời gian: {count}s</p>
      <button onClick={handleStart}>Start timer</button>
      <button onClick={handleStop}>Stop timer</button>
    </div>
  );
}

export default CountTime;
