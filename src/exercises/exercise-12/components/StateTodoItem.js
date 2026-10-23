export default function StateTodoItem({ item, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between gap-2">
      <span>{item.text}</span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(item.id)}
        aria-label={`Delete ${item.text}`}
      >
        Delete
      </button>
    </li>
  );
}
