import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Career from "./pages/Career";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/instructor/Dashboard";
import BasicInfo from "./pages/instructor/course-steps/BasicInfo";
import CourseLayout from "./pages/instructor/course-steps/CourseLayout";

import FixedElement from "./components/FixedElement";
import LayoutWithNav from "./pages/layouts/LayoutWithNav";
import LayoutWithoutNav from "./pages/layouts/LayoutWithoutNav";
import Goals from "./pages/instructor/course-steps/Goals";
import Basics from "./pages/instructor/course-steps/Basics";
import Curriculum from "./pages/instructor/course-steps/Curriculum";
import ComingSoon from "./components/ComingSoon";
import { useLocation } from "react-router-dom";

function App() {
  const [fixedData, setFixedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = fixedData ? "hidden" : "";
  }, [fixedData]);

  return (
    <>
      <FixedElement>{fixedData}</FixedElement>

      <Routes>
        {/* Public Routes with Navbar */}
        <Route element={<LayoutWithNav setFixedData={setFixedData} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/career" element={<Career />} />
          <Route
            path="/course"
            element={<CourseDetail setFixedData={setFixedData} />}
          />

          <Route path="*" element={<ComingSoon />} />
        </Route>

        {/* Auth or Instructor Pages without Navbar */}
        <Route element={<LayoutWithoutNav />}>
          <Route path="/instructor/dashboard" element={<Dashboard />} />
          <Route path="/instructor/course/basic-info" element={<BasicInfo />} />
        </Route>

        <Route path="/instructor" element={<Dashboard />} />
        <Route path="/instructor/course" element={<CourseLayout />}>
          <Route path="intended-learners" element={<Goals />} />
          <Route path="basics" element={<Basics />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="comingsoon" element={<ComingSoon />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
