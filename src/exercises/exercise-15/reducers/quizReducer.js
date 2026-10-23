import { questions } from '../data/questions';
export const initialState = {
  questions,
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};
export default function quizReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      if (
        state.showScore ||
        !state.questions[state.currentQuestion].options.includes(action.payload)
      )
        return state;
      return { ...state, selectedOption: action.payload };
    case 'NEXT_QUESTION': {
      // Guard bảo vệ khi chưa chọn hoặc dispatch lặp sau khi kết thúc quiz.
      if (!state.selectedOption || state.showScore) return state;
      const score =
        state.score +
        (state.selectedOption === state.questions[state.currentQuestion].answer ? 1 : 0);
      const isLast = state.currentQuestion === state.questions.length - 1;
      return {
        ...state,
        score,
        selectedOption: '',
        showScore: isLast,
        currentQuestion: isLast ? state.currentQuestion : state.currentQuestion + 1,
      };
    }
    case 'RESTART_QUIZ':
      return { ...initialState, questions: state.questions };
    default:
      return state;
  }
}
