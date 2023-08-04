
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import Home from './components/home/Home';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Registeration from './pages/Registeration';




function App() {
  return (
    <div className=" font-bodyFont bg-gray-100">
      <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/Registeration' element={<Registeration/>}/>
       </Routes>    
  
      </BrowserRouter>
   
  
 
  
    </div>
  );
}

export default App;
