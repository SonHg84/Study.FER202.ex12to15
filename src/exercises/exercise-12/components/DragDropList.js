import { useState } from 'react';
import { reorder } from '../reorder';
export default function DragDropList() {
  // 1. State: items giữ thứ tự; draggingItem giữ index đang kéo.
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingItem, setDraggingItem] = useState(null);

  // 2. Handler: reorder sao chép mảng; drop/dragEnd trả draggingItem về null.
  function move(from, to) {
    setItems((previous) => reorder(previous, from, to));
  }
  function handleDrop(event, index) {
    event.preventDefault();
    move(draggingItem, index);
    setDraggingItem(null);
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="small text-muted">
        Kéo một hàng lên hàng khác. Trên điện thoại hoặc bàn phím, dùng nút ↑ / ↓.
      </p>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={(event) => {
              setDraggingItem(index);
              event.dataTransfer.setData('text/plain', item);
              event.dataTransfer.effectAllowed = 'move';
            }}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, index)}
            onDragEnd={() => setDraggingItem(null)}
            className={`list-group-item d-flex justify-content-between align-items-center ${draggingItem === index ? 'bg-warning-subtle' : ''}`}
          >
            <span>⠿ {item}</span>
            <div className="d-flex gap-1">
              <button
                className="btn btn-light btn-sm"
                aria-label={`Đưa ${item} lên`}
                disabled={index === 0}
                onClick={() => move(index, index - 1)}
              >
                ↑
              </button>
              <button
                className="btn btn-light btn-sm"
                aria-label={`Đưa ${item} xuống`}
                disabled={index === items.length - 1}
                onClick={() => move(index, index + 1)}
              >
                ↓
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
