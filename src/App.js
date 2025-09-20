import { Routes, Route } from "react-router-dom";
import RoleSelectionPage from "./components/Home";
import LandingPage from "./components/LandingPage";
import AdminLoginPage from "./components/AdminLogin";
import StaffLoginPage from "./components/StaffLogin";
import StudentLoginPage from "./components/StudentLogin";
import AdminDashboard from "./components/AdminDashboard";
import About from "./components/About";
import Contact from "./components/Contact";


import Dashboard from "./components/Dashboard";
import AddClass from "./components/AddClass";
import AllClasses from "./components/AllClasses";   
import AddStudent from "./components/AddStudent";
import AllTeachers from "./components/AllTeachers";
import AddTeachers from "./components/AddTeachers";
import JobLetter from "./components/JobLetter";
import AllStudents from "./components/AllStudents";

function App() {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/home" element={<RoleSelectionPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/staff-login" element={<StaffLoginPage />} />
      <Route path="/student-login" element={<StudentLoginPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin Dashboard with nested routes */}
      <Route path="/dashboard" element={<AdminDashboard />}>
        {/* Default dashboard landing page */}
        <Route index element={<Dashboard />} />

        {/* Students */}
        <Route path="students/all" element={<AllStudents/>} />
        <Route path="students/add" element={<AddStudent/>} />

        {/* Teachers */}
        <Route path="teachers/all" element={<AllTeachers/>} />
        <Route path="teachers/add" element={<AddTeachers/>} />
        <Route path="teachers/jobletter" element={<JobLetter/>} />

        {/* Classes */}
        <Route path="classes/add" element={<AddClass />} />
        <Route path="classes/all" element={<AllClasses />} /> 
      </Route>
    </Routes>
  );
}

export default App;
