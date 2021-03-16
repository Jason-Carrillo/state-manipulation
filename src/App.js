import React, {useState} from 'react';

function App() {

  const [count, setCount ] = useState(0)

  function decrementCount() {
    setCount(count-1)
  }

  function increaseCount() {
    setCount(count+1)
  }

  return (
    <div className="App">
      <button onClick={decrementCount} >-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
