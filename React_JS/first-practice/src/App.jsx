
// import './App.css'
// import {useState} from 'react'

// function App() {

//   const [item, setItem] = useState('');
//   const [list, setList] = useState([]);

//   const addToList = () => {
//     if (item.trim() !== ''){
//       setList([...list, item]);
//       setItem('');
//     }
    
//   }


//   return (
//     <>
//         {list.map((item, index) => <p key={index}>{item}</p>)}
//         <input type="text" value = {item} onChange={(e) => setItem(e.target.value)}/>
//         <button onClick={addToList}>Add</button>
//     </>
//   )
// }

// export default App




import './App.css'
import { useState } from 'react'

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addToList = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem(''); // Clear the input field after adding an item to the list
    }
  }

  const removeToList = (index) => {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <div>
        {list.map((item, index) => {
          return (
            <>
              <span key={index}>{item}</span>
              <button onClick={() => removeToList(index)}>Remove</button>
              <br></br>
              <br />
            </>
          )
        })}
      </div>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => addToList()}>Add</button>
    </>
  )
}

export default App
