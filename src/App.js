import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Component/Login/Login';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
