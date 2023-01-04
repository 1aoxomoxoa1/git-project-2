import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"
import Orders from './Orders/Order';
import AddOrder from "./Orders/AddOrder"

function App() {
  return (
  <Routes>
    <Route exact path='/orders' element={<Orders />} />
    <Route exact path='/addNewOrder' element={<AddOrder />}/>
  </Routes>
  );
}

export default App;
