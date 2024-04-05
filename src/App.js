import logo from './logo.svg';
import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Admin from './Components/Admin/Admin'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import DashBoard from './Components/Admin/DashBoard/DashBoard';



function App() {

  //let [itemsCount, setItemsCount] = useState(0)


  return (

    <>


      <Routes>


        {/* <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} /> 
        <Route path="/login" element={<Login onLogin={login} />} />*/}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path='/admin/*' element={<Admin />}>
          {/* <Route path='/dashboard' element={<DashBoard />} />
          <Route path='*' element={<DashBoard />} /> */}
        </Route>

      </Routes>

    </>
  );
}

export default App;
