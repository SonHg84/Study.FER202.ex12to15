import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'increase') {
    return state + 1;
  }

  if (action.type === 'decrease') {
    return state - 1;
  }

  return state;
}

export function handleAction(state, action) {
  switch (action.type) {
    case 'increase':
      return state + 1;
    case 'decrease':
      return state - 1;

    default:
      return state;
  }
}

function View() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>-1</button>
    </div>
  );
}

export default View;
