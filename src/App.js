import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Component/Login/Login';
import Home from "./Component/Home/Home";
import { Search } from "./Component/Search/Search";
import NewAssignment from "./Component/NewAssement/NewAssignment";
import ShortListedCollage from "./pages/ShortListedCollage";
import UspshortListPage from "./pages/UspshortListPage";
import FacilityShot from "./pages/FacilityShot";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/newassignmentlead" element={<NewAssignment />} />


        {/* screen 3 pages */}
        <Route path="/shortlisted_pages" element={<ShortListedCollage/>} />
        <Route path="/shortlisted_ups" element={<UspshortListPage/>} />
        <Route path="/shortlisted_facilty" element={<FacilityShot/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
