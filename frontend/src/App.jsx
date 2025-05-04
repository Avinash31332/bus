import React from "react";
import ViewStudents from "./pages/ViewStudents";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Test from "./pages/Test";
import AdminAuth from "./pages/AdminAuth";
import "leaflet/dist/leaflet.css";
import StudentDriverCreate from "./admin/pages/StudentDriverCreate";
import AdminDashboard from "./admin/dashboard";
import HomePage from "./admin/pages/HomePage";
import ManageData from "./admin/pages/ManageData";
import EditCollegeData from "./admin/pages/EditCollegeData";
import Billing from "./admin/pages/Billing";
import AdminProfile from "./admin/pages/AdminProfile";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path={"/admin/students"} element={<ViewStudents />} />
          <Route path={"/admin/login"} element={<AdminLogin />} />
          <Route path={"/admin/auth"} element={<AdminAuth />} />
          <Route path={"/test"} element={<Test />} />
          <Route
            path={"/student-driver/create"}
            element={<StudentDriverCreate />}
          />

          {/* admin routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="" element={<HomePage />} />
            <Route path="manage-data" element={<ManageData />} />
            <Route path="create-data" element={<StudentDriverCreate />} />
            <Route path="edit-college-data" element={<EditCollegeData />} />
            <Route path="billing" element={<Billing />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
