import ExampleCard from '../../shared/components/ExampleCard';
import StateCounter from './components/StateCounter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import StateTodoList from './components/StateTodoList';
import ColorSwitcher from './components/ColorSwitcher';
import StateSearchFilter from './components/StateSearchFilter';
import DragDropList from './components/DragDropList';
import RefPractice from './components/RefPractice';
// Trang bài 12: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise12() {
  return (
    <>
      <div className="demo-grid">
        <ExampleCard title="1. Counter">
          <StateCounter />
        </ExampleCard>
        <ExampleCard title="2. Controlled Input">
          <ControlledInput />
        </ExampleCard>
        <ExampleCard title="3. Toggle Visibility">
          <ToggleVisibility />
        </ExampleCard>
        <ExampleCard title="4. Todo List">
          <StateTodoList />
        </ExampleCard>
        <ExampleCard title="5. Color Switcher">
          <ColorSwitcher />
        </ExampleCard>
        <ExampleCard title="6. Search Filter">
          <StateSearchFilter />
        </ExampleCard>
      </div>
      <ExampleCard title="7. Drag and Drop List">
        <DragDropList />
      </ExampleCard>
      <details>
        <summary>Tham khảo thêm: useRef từ code ban đầu</summary>
        <ExampleCard title="useRef">
          <RefPractice />
        </ExampleCard>
      </details>
    </>
  );
}
