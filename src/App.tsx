import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import Analytics from "./pages/Profile/Analytics/Analytics";
import Dashboard from "./pages/Profile/Dashboard/Dashboard";
import Devices from "./pages/Profile/Devices/Devices";
import Home from "./pages/Profile/Home";
import Profile from "./pages/Profile/Profile/Profile";
import Reports from "./pages/Profile/Reports/Reports";
import Services from "./pages/Profile/Services/Services";
import Settings from "./pages/Profile/Settings/Settings";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/resetPassword/ResetPassword";

function App() {
  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/home" element={<Home />}>
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="thiet-bi" element={<Devices />} />
          <Route path="dich-vu" element={<Services />} />
          <Route path="cap-so" element={<Analytics />} />
          <Route path="bao-cao" element={<Reports />} />
          <Route path="cai-dat" element={<Settings />} />
        </Route>
        <Route
          path="*"
          element={
            <p
              style={{
                textAlign: "center",
                fontSize: "2em",
                color: "red",
                fontWeight: 600,
              }}
            >
              Error 404. Not found!
            </p>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
