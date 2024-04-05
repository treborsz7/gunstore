import React from 'react';
import PropTypes from 'prop-types';
import './Admin.styles.css';
import './simplebar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashBoard from './DashBoard/DashBoard';
import SectionSetUp from './SectionSetUp/SectionSetUp';
import ProductSetUp from './ProductSetUp/ProductSetUp';
import SideBar from './SideBar/SideBar';


const Admin = (props) => {
  return (
    <>
      <SideBar></SideBar>

      {/* <div className='row col-12' style={{ height: "100px", position: "absolute", backgroundColor: "red" }}></div> */}
      <div className='row'>

        <div className='col-3'>

        </div>
        <div className='col-9 pt-5'>

          <Routes>


            {/* <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} /> 
<Route path="/login" element={<Login onLogin={login} />} />*/}
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/sectionsetup" element={<SectionSetUp />} />
            <Route path="/productsetup" element={<ProductSetUp />} />

          </Routes>
        </div>
      </div>
    </>
  );
}




export default Admin;
