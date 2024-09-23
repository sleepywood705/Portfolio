import './Counter.css';
import { Window } from '../Interface/Window';
import { useState } from 'react';

export function Counter({ 창닫기 }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <Window id="Counter" tabText="카운터 연습" 닫기={창닫기}>
      <div className="Container">
        <span>{count}</span>
        <button onClick={incrementCount}>♥️</button>
      </div>
    </Window>
  )
}