import {useState} from 'react'

export default function App() {
  const [state, setState] = useState({
    fname: "",
    age: "",
    city: "",
    gender: "",

  })

  const setValues = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', state);
    setState({
      fname: '',
      age: '',
      city: '',
      gender: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.fname} onChange={(e) => {setValues("fname", e.target.value)}} />
        <br /><br />
        <input type="text" value={state.age} onChange={(e) => {setValues("age", e.target.value)}}/>
        <br /><br />
        <select value={state.city} onChange={(e) => {setValues("city", e.target.value)}}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Dinajpur">Dinajpur</option>
        </select>
        <br /><br />
        <input value={state.gender}  type="radio" name='gender' onChange={() => {setValues("gender", "male")}} checked={state.gender == 'male'}/>Male
        <input value={state.gender}  type="radio" name='gender' onChange={() => {setValues("gender", "female")}} checked={state.gender == 'female'}/>Female
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


