import { useEffect, useState } from 'react';
export default function UserPosts({ userId }) {
  // 1. State: Phân biệt posts, loading, error và số lần retry.
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setLoading(true);
    setError('');
    setPosts([]);
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('Dữ liệu API không hợp lệ.');
        if (active) setPosts(data);
      } catch (error) {
        if (active && error.name !== 'AbortError')
          setError(`Không tải được bài viết. ${error.message}`);
      } finally {
        if (active) setLoading(false);
      }
    }
    fetchPosts();
    // Hủy request cũ khi đổi userId/unmount; tránh dữ liệu người cũ ghi đè người mới.
    return () => {
      active = false;
      controller.abort();
    };
  }, [userId, retry]);
  if (loading) return <p role="status">Đang tải posts của user {userId}…</p>;
  if (error)
    return (
      <div>
        <p role="alert" className="text-danger">
          {error}
        </p>
        <button
          className="btn btn-outline-primary"
          onClick={() => setRetry((value) => value + 1)}
        >
          Thử lại
        </button>
      </div>
    );

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="small text-muted">
        {posts.length} bài viết của user {userId}
      </p>
      {posts.map((post) => (
        <article className="border rounded p-3 mb-2" key={post.id}>
          <h3 className="h6">{post.title}</h3>
          <p className="mb-0 small">{post.body}</p>
        </article>
      ))}
      {!posts.length && <p>Người dùng này chưa có bài viết.</p>}
    </>
  );
}
