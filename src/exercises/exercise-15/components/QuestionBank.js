import { useReducer } from 'react';
import quizReducer, { initialState } from '../reducers/quizReducer';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
export default function QuestionBank() {
  // 1. State: Một object state chứa question, selectedOption, score và showScore.
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return state.showScore ? (
    <QuizResult
      score={state.score}
      total={state.questions.length}
      onRestart={() => dispatch({ type: 'RESTART_QUIZ' })}
    />
  ) : (
    <QuizQuestion
      question={state.questions[state.currentQuestion]}
      number={state.currentQuestion + 1}
      selectedOption={state.selectedOption}
      onSelect={(option) => dispatch({ type: 'SELECT_OPTION', payload: option })}
      onNext={() => dispatch({ type: 'NEXT_QUESTION' })}
    />
  );
}
