import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import Analytics from "./pages/Profile/Analytics/Analytics";
import Dashboard from "./pages/Profile/Dashboard/Dashboard";
import Devices from "./pages/Profile/Devices/Devices";
import Profile from "./pages/Profile/Profile";
import Reports from "./pages/Profile/Reports/Reports";
import Services from "./pages/Profile/Services/Services";
import Settings from "./pages/Profile/Settings/Settings";
import ResetPassword from "./pages/resetPassword/ResetPassword";

function App() {
  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="thiet-bi" element={<Devices />} />
          <Route path="dich-vu" element={<Services />} />
          <Route path="cap-so" element={<Analytics />} />
          <Route path="bao-cao" element={<Reports />} />
          <Route path="cai-dat" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
