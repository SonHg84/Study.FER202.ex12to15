import { useState } from 'react';
const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
export default function StateSearchFilter() {
  // 1. State: State chỉ chứa từ khóa, Array.filter tạo danh sách kết quả.
  const [query, setQuery] = useState('');
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  );

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <label className="form-label d-block">
        Tìm trái cây
        <input
          className="form-control"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {!filtered.length && <p>Không có trái cây phù hợp.</p>}
    </>
  );
}
