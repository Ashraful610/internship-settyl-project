import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
           <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path='/home' element={<Home></Home>}/>
              {/* <Route path='/employee:id' element={<Home></Home>}/> */}
           </Routes>
    </div>
  );
}

export default App;
