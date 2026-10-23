import { Link } from 'react-router-dom';
import exercises from './exerciseCatalog';

export default function ExercisePage({ exercise }) {
  const Component = exercise.component;
  const position = exercises.findIndex((item) => item.id === exercise.id);
  return (
    <>
      <header className="exercise-heading">
        <div className="heading-top">
          <span className="course-eyebrow">{exercise.group}</span>
          <span className="lesson-pill">
            Bài {exercise.id} · {position + 1}/{exercises.length}
          </span>
        </div>
        <h1>{exercise.title}</h1>
        <p>{exercise.summary}</p>
        <span className="source-caption">Kiến thức: {exercise.slides}</span>
      </header>
      <details className="review-note">
        <summary>Mục tiêu và gợi ý trình bày</summary>
        <ul>
          {exercise.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </details>
      {/* Đổi bài sẽ unmount module cũ: effect và state không lẫn giữa các bài. */}
      <div className={`exercise-demo exercise-${exercise.id}`} key={exercise.id}>
        <Component />
      </div>
      <footer className="lesson-navigation">
        {position > 0 ? (
          <Link to={`/exercises/${exercises[position - 1].id}`}>
            ← Bài {exercises[position - 1].id}
          </Link>
        ) : (
          <span />
        )}
        {position < exercises.length - 1 && (
          <Link to={`/exercises/${exercises[position + 1].id}`}>
            Bài {exercises[position + 1].id} →
          </Link>
        )}
      </footer>
    </>
  );
}
