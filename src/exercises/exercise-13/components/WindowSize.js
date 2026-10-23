import { useEffect, useState } from 'react';
const readSize = () => ({ width: window.innerWidth, height: window.innerHeight });
export default function WindowSize() {
  // 1. State: Initializer đọc kích thước hiện tại một lần khi mount.
  const [size, setSize] = useState(readSize);
  useEffect(() => {
    const handleResize = () => setSize(readSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <p className="result-box">
      Window size: {size.width} × {size.height}
    </p>
  );
}
