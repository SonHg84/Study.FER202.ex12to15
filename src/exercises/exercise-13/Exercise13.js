import { useState } from 'react';
import ExampleCard from '../../shared/components/ExampleCard';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';
const validateUsername = (value) => /^[a-zA-Z0-9_]{3,}$/.test(value);
// Trang bài 13: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise13() {
  const [userId, setUserId] = useState(1);
  return (
    <>
      <ExampleCard
        title="1. Data Fetching"
        description="useEffect chạy khi mount và khi prop userId thay đổi. API thật cần kết nối Internet."
      >
        <label className="form-label d-block mb-3">
          User ID
          <select
            className="form-select"
            value={userId}
            onChange={(event) => setUserId(Number(event.target.value))}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1}>{index + 1}</option>
            ))}
          </select>
        </label>
        <UserPosts userId={userId} />
      </ExampleCard>
      <div className="demo-grid">
        <ExampleCard title="2. Countdown Timer">
          <CountdownTimer initialValue={10} />
        </ExampleCard>
        <ExampleCard title="3. Window Resize Listener">
          <WindowSize />
        </ExampleCard>
      </div>
      <ExampleCard title="4. Form Input Validation">
        <ValidatedInput
          validationFunction={validateUsername}
          errorMessage="Nhập ít nhất 3 ký tự: chữ, số hoặc dấu gạch dưới."
        />
      </ExampleCard>
    </>
  );
}
