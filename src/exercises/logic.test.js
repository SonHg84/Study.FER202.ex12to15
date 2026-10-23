import { reorder } from './exercise-12/reorder';
import { addDish, cartTotals } from './exercise-14/cartUtils';
import quizReducer, { initialState } from './exercise-15/reducers/quizReducer';

test('reorder tạo mảng mới và không xóa item khi drag không hợp lệ', () => {
  const items = ['A', 'B', 'C'];
  expect(reorder(items, 0, 2)).toEqual(['B', 'C', 'A']);
  expect(items).toEqual(['A', 'B', 'C']);
  expect(reorder(items, null, 1)).toBe(items);
  expect(reorder(items, 0, 3)).toBe(items);
});
test('cart với id 0 tăng quantity bất biến và tính tiền chính xác', () => {
  const dish = { id: 0, price: '4.99' };
  const once = addDish([], dish);
  const twice = addDish(once, dish);
  expect(once[0].quantity).toBe(1);
  expect(twice[0].quantity).toBe(2);
  expect(cartTotals(twice)).toEqual({ count: 2, cents: 998 });
});
test('quiz reducer không chấm hai lần sau kết thúc và không nhận option sai', () => {
  expect(quizReducer(initialState, { type: 'NEXT_QUESTION' })).toBe(initialState);
  expect(quizReducer(initialState, { type: 'SELECT_OPTION', payload: 'Invalid' })).toBe(
    initialState,
  );
  const final = {
    ...initialState,
    showScore: true,
    selectedOption: 'Canberra',
    score: 2,
  };
  expect(quizReducer(final, { type: 'NEXT_QUESTION' })).toBe(final);
});
