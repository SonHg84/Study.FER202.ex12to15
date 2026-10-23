import { useState } from 'react';
export default function ControlledInput() {
  // 1. State: text đồng thời điều khiển value của input và nội dung output.
  const [text, setText] = useState('');

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <label className="form-label d-block">
        Nhập văn bản
        <input
          className="form-control"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <p className="result-box">Input text: {text || '(trống)'}</p>
    </>
  );
}
