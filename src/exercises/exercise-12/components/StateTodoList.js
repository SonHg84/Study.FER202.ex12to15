import { useState } from 'react';
import StateTodoItem from './StateTodoItem';
export default function StateTodoList() {
  // 1. State: Lưu text, mảng todo và ID kế tiếp bằng useState.
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [nextId, setNextId] = useState(1);

  // 2. Handler: Thêm một object mới, xóa theo ID và dùng functional update.
  function handleAdd(event) {
    event.preventDefault();
    if (!text.trim()) return;
    setItems((previous) => [...previous, { id: nextId, text: text.trim() }]);
    setNextId((previous) => previous + 1);
    setText('');
  }
  function handleDelete(id) {
    setItems((previous) => previous.filter((item) => item.id !== id));
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <form className="d-flex flex-wrap gap-2" onSubmit={handleAdd}>
        <input
          className="form-control flex-fill"
          style={{ width: 'auto' }}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Please input a Task"
          aria-label="Todo mới"
        />
        <button type="submit" className="btn btn-danger" disabled={!text.trim()}>
          Add Todo
        </button>
      </form>
      <ul className="list-group mt-3">
        {items.map((item) => (
          <StateTodoItem key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
      {!items.length && <p className="text-muted mt-3">Danh sách đang trống.</p>}
    </>
  );
}
