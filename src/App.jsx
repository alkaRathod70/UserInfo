import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Layout from './Layout';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Layout />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
