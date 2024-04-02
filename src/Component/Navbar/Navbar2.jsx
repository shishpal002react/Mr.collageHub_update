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

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  function Logout(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        style={{ top: "10%", left: "38%" }}
      >
        <Modal.Body>
          <div className="logout">
            <div className="logout1">
              <span onClick={() => setShow1(true)}>
                <FaLock className="logout3" /> Change Password
              </span>
            </div>
            <div className="logout2">
              <hr />
            </div>
            <div className="logout1">
              <span onClick={() => navigate("/")}>
                <MdLogout className="logout3" /> Logout
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const [show1, setShow1] = useState(false);

  function ChangePassword(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="changepassword">
            <div className="changepassword1">
              <h6>Change Password</h6>
            </div>
            <div className="login4">
              <label htmlFor="">Old Password</label>
              <input type="password" />
            </div>
            <div className="login4">
              <label htmlFor="">New Password</label>
              <input type="password" />
            </div>
            <div className="login4">
              <label htmlFor="">Confirm Password</label>
              <input type="password" />
            </div>
            <div className="changepassword2">
              <button onClick={() => navigate("/home")}>Change Password</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
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
                <p>Conversation&Activity</p>
                </li>
                <li>
                <p>Loan</p>
                </li>
                <li>
                <p>Profile</p>
                </li>
                <li>
               <p>College_Recommended</p>
                </li>
                <li>
                <p>Shortlisted_colleges (12)</p>
                </li>
                <li>
               <p>Colleges_Not_Interested (0)</p>
                </li>
              </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar2;
