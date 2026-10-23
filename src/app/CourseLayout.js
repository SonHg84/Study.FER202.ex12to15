import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import exercises from './exerciseCatalog';

export default function CourseLayout() {
  const { pathname } = useLocation();
  // Đổi route quay lên đầu bài; anchor nội trang vẫn giữ hành vi cuộn tự nhiên.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [query, setQuery] = useState('');
  const visible = exercises.filter((exercise) =>
    `${exercise.id} ${exercise.title} ${exercise.group}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <div className="course-app">
      <a className="skip-link" href="#exercise-content">
        Đến nội dung bài
      </a>
      <aside className="course-sidebar">
        <div className="course-brand">
          <span className="brand-mark">F</span>
          <div>
            <strong>FER202</strong>
            <span>EX12–15 · ex12to15</span>
          </div>
        </div>
        <p className="sidebar-caption">{exercises.length} BÀI THỰC HÀNH · EX12–15</p>
        <label className="visually-hidden" htmlFor="exercise-search">
          Tìm bài tập
        </label>
        <input
          id="exercise-search"
          className="form-control mb-3"
          placeholder="Tìm bài hoặc kiến thức…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <nav aria-label="Danh sách bài tập">
          {visible.map((exercise, index) => (
            <div key={exercise.id}>
              {(index === 0 || visible[index - 1].group !== exercise.group) && (
                <p className="exercise-group">{exercise.group}</p>
              )}
              <NavLink
                to={`/exercises/${exercise.id}`}
                className={({ isActive }) =>
                  `exercise-link ${isActive ? 'selected' : ''}`
                }
              >
                <span className="exercise-number">{exercise.id}</span>
                <span>{exercise.title}</span>
              </NavLink>
            </div>
          ))}
          {visible.length === 0 && <p>Không tìm thấy bài phù hợp.</p>}
        </nav>
        <p className="sidebar-note">
          Mỗi bài là một module riêng.
          <br />
          Chọn bài để bắt đầu demo.
        </p>
      </aside>
      <main id="exercise-content" className="course-main">
        <Outlet />
      </main>
    </div>
  );
}
