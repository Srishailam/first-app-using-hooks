import react from 'react';

function Counter(props){
  const { initialCount, updateCount} = props;
  return (
    <div className="Counter">
      <p>Count: {initialCount}</p>
      <button onClick={() => updateCount()}>Increment Count</button>
    </div>
  );
}

export default Counter;