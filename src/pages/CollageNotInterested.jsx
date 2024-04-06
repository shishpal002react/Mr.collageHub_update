import React, { useState } from 'react'
import Navbar from '../Component/Navbar/Navbar2'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../App.css"
import Navbar2 from '../Component/Navbar/Navbar2';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CollageNotInterested = () => {
    const navigate = useNavigate();
 
    const location = useLocation();
    const { pathname } = location;
  
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];



    return (
        <>
            <Navbar2 />
           
            <div className='collegeNotInterested'>
                <p>Do not Proceed 1 Colleges</p>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>


        </>
    )
}

export default CollageNotInterested;