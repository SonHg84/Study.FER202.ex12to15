import ExampleCard from '../../shared/components/ExampleCard';
import ReducerCounter from './components/ReducerCounter';
import QuestionBank from './components/QuestionBank';
// Trang bài 15: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise15() {
  return (
    <>
      <ExampleCard title="1. Counter bằng useReducer">
        <ReducerCounter />
      </ExampleCard>
      <ExampleCard
        title="2. Question Bank"
        description="Component dispatch action; reducer quyết định cách cập nhật state. Next chỉ hoạt động sau khi chọn đáp án."
      >
        <QuestionBank />
      </ExampleCard>
    </>
  );
}
