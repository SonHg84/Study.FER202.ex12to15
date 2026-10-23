import { useState } from 'react';
export default function ColorSwitcher() {
  // 1. State: color ban đầu trống; dropdown cập nhật background của preview.
  const [color, setColor] = useState('');

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <label className="form-label d-block">
        Select a color
        <select
          className="form-select"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="">Select a color</option>
          {['Red', 'Blue', 'Green', 'Yellow'].map((name) => (
            <option value={name.toLowerCase()} key={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <div
        data-testid="color-preview"
        aria-label={color ? `Màu ${color}` : 'Chưa chọn màu'}
        style={{ height: 140, borderRadius: 8, background: color || '#edf2f7' }}
      />
    </>
  );
}
