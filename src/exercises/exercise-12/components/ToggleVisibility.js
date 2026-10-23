import { useState } from 'react';
export default function ToggleVisibility() {
  // 1. State: Ban đầu visible=false để ẩn nội dung như yêu cầu đề.
  const [visible, setVisible] = useState(false);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <button
        className="btn btn-primary"
        aria-expanded={visible}
        onClick={() => setVisible((previous) => !previous)}
      >
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <p className="result-box">Toggle me!</p>}
    </>
  );
}
