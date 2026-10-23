import Exercise12 from '../exercises/exercise-12/Exercise12';
import Exercise13 from '../exercises/exercise-13/Exercise13';
import Exercise14 from '../exercises/exercise-14/Exercise14';
import Exercise15 from '../exercises/exercise-15/Exercise15';

// Package chỉ chứa các bài trong nhóm này.
const exercises = [
  {
    id: '12',
    title: 'useState',
    group: 'React Hooks',
    summary: 'Bảy bài nhỏ minh họa state cục bộ và cập nhật giao diện.',
    slides: 'Slot 9,10 · Hooks',
    tasks: [
      'Counter',
      'Controlled Input',
      'Toggle Visibility: khởi đầu hidden',
      'Todo thêm/xóa',
      'Color Switcher',
      'Search Filter',
      'Drag and Drop với items và draggingItem',
    ],
    component: Exercise12,
  },
  {
    id: '13',
    title: 'useEffect',
    group: 'React Hooks',
    summary: 'Fetch theo prop, timer, resize listener và validation theo dependency.',
    slides: 'Slot 9,10 · Hooks',
    tasks: [
      'UserPosts dùng JSONPlaceholder, refetch khi userId đổi',
      'Countdown mỗi giây, dừng tại 0 và cleanup',
      'WindowSize thêm/gỡ resize listener',
      'ValidatedInput nhận validationFunction và errorMessage',
    ],
    component: Exercise13,
  },
  {
    id: '14',
    title: 'useContext',
    group: 'React Hooks',
    summary: 'ThemeProvider và CartProvider chia sẻ dữ liệu giữa component.',
    slides: 'Slot 8 và Slot 9,10 · Context',
    tasks: [
      'ThemeContext/ThemeProvider/Theme với màu theo đề',
      'CartContext/CartProvider/DishesList/Cart',
      'Count, quantity và giá trị cập nhật realtime',
      'Remove món và Clear Cart',
    ],
    component: Exercise14,
  },
  {
    id: '15',
    title: 'useReducer',
    group: 'React Hooks',
    summary: 'Reducer counter và ngân hàng câu hỏi với action rõ ràng.',
    slides: 'Slot 9,10 · Hooks',
    tasks: [
      'Counter INCREMENT/DECREMENT/RESET',
      'Question Bank với SELECT_OPTION/NEXT_QUESTION/RESTART_QUIZ',
      'Chặn Next khi chưa chọn, chấm điểm và restart',
    ],
    component: Exercise15,
  },
];
export default exercises;
