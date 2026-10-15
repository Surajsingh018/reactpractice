import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count => count + 1);
  };
  const decrement = () => {
    setCount(count => count - 1);
  }; 
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <h1 className="text-3xl font-bold text-blue-800">Hello, World!</h1>
        <button
          onClick={increment}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Decrement
        </button>
        <p className="text-2xl">count={count}</p>
      </div>
    </>
  )
}

export default Counter
