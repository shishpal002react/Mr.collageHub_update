// Navbar.js

import React, { useState } from "react";
import "./Navbar2.css";
import logo from "../../image/logo2.PNG";
import Heart from "../../image/HeartLogo.png";
import Home from "../../image/HomeLogo.png";
import Phone from "../../image/PhoneLogo.png";
import Search from "../../image/SearchLogo.png";
import Upload from "../../image/UploadLogo.png";
import message from "../../image/messageLogo.png";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLock } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
 
  const location = useLocation();
  const { pathname } = location;

  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];

  return (
    <>
      <div className="navbarUpdate">
        <div className="navbarUpdate-child">
          <div>
            <img src={logo} alt="Logo" className="logo-update" />
          </div>

          <div className="header_list_left">
            <div>
              <select className="select-style">
                <option value="lorenepsom1@gmail.com">
                  lorenepsom1@gmail.com
                </option>
              </select>
            </div>

            <div className="header_left_side_content">
              <ul class="header-list">
                <li>
                <img src={Home} alt="Logo" className="" />
                </li>
                <li>
                <img src={message} alt="Logo" className="" />
                </li>
                <li>
                <img src={Heart} alt="Logo" className="" />
                </li>
                <li>
                <img src={Search} alt="Logo" className="" />
                </li>
                <li>
                <img src={Phone} alt="Logo" className="" />
                </li>
                <li>
                <img src={Upload} alt="Logo" className="" />
                </li>
              </ul>

              <button className="button_header_style">
              Send SMS/Mail
              </button>
            </div>
          </div>
        </div>

        <div className="navbarUpdate-bottom">
            <div>
              <select className="select-style-second">
                <option value="lorenepsom1@gmail.com">
                Loren Epsom
                </option>
              </select>
            </div>

            <ul class="header-list">
                <li>
                <p className={lastPart === "shortlisted_ups" ? "nav_bar_color" : ""}>Conversation&Activity</p>
                </li>
                <li>
                <p className={lastPart === "loan" ? "nav_bar_color" : ""} onClick={()=>navigate("/loan")}>Loan</p>
                </li>
                <li>
                <p className={lastPart === "shortlisted_ups" ? "nav_bar_color" : ""}>Profile</p>
                </li>
                <li>
               <p className={lastPart === "shortlisted_ups" ? "nav_bar_color" : ""}>College_Recommended</p>
                </li>
                <li>
                <p className={lastPart === "shortlisted_ups" ? "nav_bar_color" : ""}>Shortlisted_colleges (12)</p>
                </li>
                <li>
               <p className={lastPart === "shortlisted_CollageNotInterested" ? "nav_bar_color" : ""} onClick={()=>navigate("/shortlisted_CollageNotInterested")}>Colleges_Not_Interested (0)</p>
                </li>
              </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar2;
