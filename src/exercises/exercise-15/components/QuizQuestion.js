export default function QuizQuestion({
  question,
  number,
  selectedOption,
  onSelect,
  onNext,
}) {
  return (
    <>
      <h3 className="h5">Question {number}</h3>
      <p className="fs-5">{question.question}</p>
      <div className="button-row">
        {question.options.map((option) => (
          <button
            key={option}
            aria-pressed={selectedOption === option}
            className={`btn ${selectedOption === option ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="btn btn-dark mt-2" disabled={!selectedOption} onClick={onNext}>
        Next
      </button>
    </>
  );
}
