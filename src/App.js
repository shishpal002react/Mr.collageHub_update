import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Component/Login/Login';
import Home from "./Component/Home/Home";
import { Search } from "./Component/Search/Search";
import NewAssignment from "./Component/NewAssement/NewAssignment";
import ShortListedCollage from "./pages/ShortListedCollage";
import UspshortListPage from "./pages/UspshortListPage";
import FacilityShot from "./pages/FacilityShot";
import PlacementShot from "./pages/PlacementShot";
import CourseAndFess from "./pages/CourseAndFess";
import CollageNotInterested from "./pages/CollageNotInterested";

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
        <Route path="/shortlisted_placement" element={<PlacementShot/>} />
        <Route path="/shortlisted_course_fess" element={<CourseAndFess/>} />

        <Route path="/shortlisted_CollageNotInterested" element={<CollageNotInterested/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
