//IMPORTING FUNCTIONALITIES 
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//IMPORTING COMPONENTS
import './App.css'
import AllUsers from "./components/allUsers";
import EditUser from "./components/editUser";
import Home from "./components/home";
import Navbar from "./components/navbar";
import AddUser from './components/addUser';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<AllUsers/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
