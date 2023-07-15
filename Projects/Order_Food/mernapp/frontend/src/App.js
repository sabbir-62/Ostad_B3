
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = '/' element = {<Home></Home>} />
          <Route exact path = '/login' element = {<Login></Login>}></Route>
          <Route exact path = '/signup' element = {<Signup></Signup>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
