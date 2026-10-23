# Bài 15 useReducer

Reducer counter và ngân hàng câu hỏi với action rõ ràng.

## Tài liệu đối chiếu

- Đề: `Exercise 15_use.Reducer.docx`
- Slide: Slot 9,10 · Hooks

## Yêu cầu đã triển khai

- Counter INCREMENT/DECREMENT/RESET
- Question Bank với SELECT_OPTION/NEXT_QUESTION/RESTART_QUIZ
- Chặn Next khi chưa chọn, chấm điểm và restart

## Thứ tự review

1. `Exercise15.js`: trang chỉ ghép các phần của bài.
2. reducers/counterReducer.js → components/ReducerCounter.js → data/questions.js → reducers/quizReducer.js → components/QuestionBank.js → components/QuizQuestion.js → components/QuizResult.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/15`.

Tăng/giảm/reset counter. Chọn Canberra và Mars để được 2/2. Restart rồi chọn sai để kiểm tra score.

## File trong module

- `Exercise15.js`
- `components/QuestionBank.js`
- `components/QuizQuestion.js`
- `components/QuizResult.js`
- `components/ReducerCounter.js`
- `data/questions.js`
- `reducers/counterReducer.js`
- `reducers/quizReducer.js`
