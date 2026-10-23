import { Link, Navigate, Route, Routes } from 'react-router-dom';
import CourseLayout from './app/CourseLayout';
import ExercisePage from './app/ExercisePage';
import exercises from './app/exerciseCatalog';
import './App.css';

const firstExercisePath = `/exercises/${exercises[0].id}`;

// App chỉ điều phối. Component, state và handler thuộc từng module bài tập.
export default function App() {
  return (
    <Routes>
      <Route element={<CourseLayout />}>
        <Route index element={<Navigate to={firstExercisePath} replace />} />
        {exercises.map((exercise) => (
          <Route
            key={exercise.id}
            path={`exercises/${exercise.id}/*`}
            element={<ExercisePage exercise={exercise} />}
          />
        ))}
        <Route
          path="*"
          element={
            <div className="example-card">
              <h1>Không tìm thấy bài</h1>
              <Link to={firstExercisePath}>Về bài {exercises[0].id}</Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
