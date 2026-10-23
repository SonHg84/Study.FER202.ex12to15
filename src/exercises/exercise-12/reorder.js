export function reorder(items, from, to) {
  if (
    from === null ||
    from < 0 ||
    from >= items.length ||
    to < 0 ||
    to >= items.length ||
    from === to
  )
    return items;
  const updated = [...items];
  const [moved] = updated.splice(from, 1);
  updated.splice(to, 0, moved);
  return updated;
}
