import { useReducer } from 'react';
import counterReducer from '../reducers/counterReducer';
export default function ReducerCounter() {
  // 1. State: useReducer nối state count với hàm counterReducer.
  const [count, dispatch] = useReducer(counterReducer, 0);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="counter-value">Count: {count}</p>
      <div className="button-row">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          +
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          -
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>
    </>
  );
}
