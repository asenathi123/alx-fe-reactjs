import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '1rem' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '0.5rem' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '0.5rem' }}>Reset</button>
    </div>
  );
}

export default Counter;