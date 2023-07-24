
import { useState } from 'react';

const State = () => {

    const [count, setCount] = useState({
        name: "Sabbir",
        age: 23
      })
   
      const handleClick = () => {
        setCount({
          ...count,
          age: 24
        });
      }


    return (
        <div>
      <h1>{count.name}</h1>
      <h1>{count.age}</h1>
      <button onClick={handleClick}>click me</button>
        </div>
    );
};

export default State;