import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {
  let [count, setCount] = useState(0);
  

  const increment = () => {
    const incrementBtn = document.querySelector('.btn-primary');
    const decrementBtn = document.querySelector('.btn-danger');
    decrementBtn.removeAttribute('disabled')
    if(count==5){
      return incrementBtn.setAttribute('disabled', '20')
    }
    setCount(count + 1)
  }

  const decrement = () => {
    const incrementBtn = document.querySelector('.btn-primary');
    const decrementBtn = document.querySelector('.btn-danger');

    incrementBtn.removeAttribute('disabled')
    if(count==-5){
      return decrementBtn.setAttribute('disabled', '10');
    }
    setCount(count - 1)
  }

  const reset = () => {
    const incrementBtn = document.querySelector('.btn-primary');
    const decrementBtn = document.querySelector('.btn-danger');
    setCount(count=0)
    decrementBtn.removeAttribute('disabled');
    incrementBtn.removeAttribute('disabled');
  }

  return (
      <div className='card'>
       <div className="row">
        <div className="">
          <h1 className='title'>Counter App</h1>
          <h1>{count}</h1>
          <button className='btn btn-danger m-1' onClick={decrement}>Decrement</button>
          <button className='btn btn-primary m-1' onClick={increment}>Increment</button>
          <button className='btn btn-success m-1' onClick={reset}>0</button>
        </div>
      </div>
    </div>
  )
}

export default App
