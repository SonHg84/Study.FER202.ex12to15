import { useRef } from 'react';

export default function SearchBox() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Nhập tên trái cây..." />

      <button onClick={handleFocus}>Nhập tìm kiếm</button>
    </div>
  );
}
