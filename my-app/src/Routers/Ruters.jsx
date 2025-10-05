import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../Pages/landingpage.jsx";
import Register from "../Pages/register.jsx";
import AdminDashboard from "../Dashboards/AdminDashboard.jsx";
import MemberDashboard from "../Dashboards/MemberDashboard.jsx";
import UserDashboard from "../Dashboards/UserDashboard.jsx";
import Login from "../Pages/login.jsx";
import { useAuth } from "../Contexts/AuthContext.jsx";

export default function Routers() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Role-based Dashboards */}
      <Route
        path="/admin/dashboard"
        element={
          currentUser?.role === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/member/dashboard"
        element={
          currentUser?.role === "member" ? (
            <MemberDashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/user/dashboard"
        element={
          currentUser?.role === "user" ? (
            <UserDashboard />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}
