import { useRef } from 'react';

export default function ClickTracker() {
  const clickRef = useRef(0);

  function handleClick() {
    clickRef.current += 1;
    console.log('So ' + clickRef.current);
  }

  return <button onClick={handleClick}>Click me!</button>;
}
