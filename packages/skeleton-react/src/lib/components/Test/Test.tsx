import { useState } from 'react';

function Test() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <button className="btn preset-filled" onClick={countUp}>
        Count is {count}
      </button>
    </>
  );
}

export default Test;
