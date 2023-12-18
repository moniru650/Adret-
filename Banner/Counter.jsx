import React, { useState, useEffect } from 'react';

function Counter({ maxCount, interval }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < maxCount) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [count, maxCount]);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
