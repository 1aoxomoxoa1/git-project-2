import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"
import Orders from './Orders/Order';
import AddOrder from "./Orders/AddOrder"
import Signup from './Signup/signup.jsx';

function App() {
  return (
  <Routes>
    <Route exact path='/' element={<Signup/> } />
    <Route exact path='/orders' element={<Orders />} />
    <Route exact path='/addNewOrder' element={<AddOrder />}/>
  </Routes>
  );
}

export default App;
