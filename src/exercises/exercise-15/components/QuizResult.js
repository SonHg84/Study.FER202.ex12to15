export default function QuizResult({ score, total, onRestart }) {
  return (
    <>
      <p className="counter-value" role="status">
        Your Score: {score}/{total}
      </p>
      <button className="btn btn-primary" onClick={onRestart}>
        Restart Quiz
      </button>
    </>
  );
}
