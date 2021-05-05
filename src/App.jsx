import { useState } from 'react';
import randomColor from 'randomcolor';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(currentCount => currentCount + 1);
  }

  const decrement = () => {
    setCount(currentCount => currentCount - 1);
  }

  return (
    <div>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App;