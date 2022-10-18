import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEmployee from './Component/CreateEmployee/CreateEmployee';
import DashBoard from './Component/DashBoard/DashBoard';
import Home from './Component/Home/Home';
import Navbar from './Component/Shared/Navbar/Navbar';
import SignIn from './Component/SignIn/SignIn';

function App() {
  return (
    <div>
     <Navbar></Navbar>
         <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path='/home' element={<Home></Home>}/>
              <Route path='/dashBoard' element={<DashBoard></DashBoard>}/>
              <Route path='/signInSignUp' element={<SignIn></SignIn>}/>
              <Route path='/createEmployee' element={<CreateEmployee></CreateEmployee>}/>
        </Routes>
    </div>
  );
}

export default App;
