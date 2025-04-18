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
    <div className={`my-4 m-auto p-4 w-100 h-100 border border-blue-200 text-center rounded-2xl ${otherState ? 'bg-gray-700 text-white': 'bg-blue-100'}`}>
      <h1 className="text-xl mb-4 border-b border-b-blue-800">useMemo() Demo</h1>

      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-300 border border-blue-800 rounded-xl m-2"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
        <button
          className="px-4 py-2  bg-blue-300 border border-blue-800 rounded-xl m-2"
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
