import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({
    name: "Sabbir",
    age: 23
  })

  const handleClick = () => {
    setCount({
      name: "mosh",
      age: 24
    });
  }

  return (
    <>
     <h1>{count.name}</h1>
     <h1>{count.age}</h1>
     <button onClick={handleClick}>click me</button>
    </>
  )
}

export default App
