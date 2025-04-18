import React, { useState, useMemo } from 'react';

const slowFunction = (num) => {
  console.log("⏳ Slow function is running...");
  for (let i = 0; i < 1e9; i++) {} // simulate heavy calculation
  return num * 2;
};

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

//   const doubleCount = () => {
//     return slowFunction(count);
//   };

  const doubleCount = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <div className={`p-4 text-center w-auto ${otherState ? 'bg-black text-white': ''}`}>
      <h1 className="text-xl mb-4">useMemo() Demo</h1>

      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded"
          onClick={() => setOtherState(!otherState)}
        >
          Toggle Theme
        </button>
      </div>

      <p>Count: {count}</p>
      <p>Double (from slow function): {doubleCount}</p>
      <p>Other State: {otherState.toString()}</p>
    </div>
  );
};

export default UseMemoDemo;
