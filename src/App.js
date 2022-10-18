import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEmployee from './Component/CreateEmployee/CreateEmployee';
import DashBoard from './Component/DashBoard/DashBoard';
import Home from './Component/Home/Home';
import Navbar from './Component/Shared/Navbar/Navbar';
import SignIn from './Component/SignIn/SignIn';
import  { Toaster } from 'react-hot-toast';
import SignUp from './Component/Shared/SignUp/SignUp';

function App() {
  return (
    <div>
     <Navbar></Navbar>
         <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path='/home' element={<Home></Home>}/>
              <Route path='/dashBoard' element={<DashBoard></DashBoard>}/>
              <Route path='/signIn' element={<SignIn></SignIn>}/>
              <Route path='/signup' element={<SignUp></SignUp>}/>
              <Route path='/createEmployee' element={<CreateEmployee></CreateEmployee>}/>
        </Routes>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
