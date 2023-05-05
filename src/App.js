import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bookmarks from './components/Bookmarks';
import { useState } from 'react';
import { Logincontext } from './Context/Logincontext';

function App() {
  const [ user,setuser]=useState({"name":"Getitem"})
  console.log("user",user);
  return (
    <Logincontext.Provider value={{user,setuser}}>

    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/navbar' element={<Navbar/>}/>
     <Route path='/bookmark' element={<Bookmarks/>}/>
     </Routes>
    </BrowserRouter>
    </Logincontext.Provider>
  );
}

export default App;
