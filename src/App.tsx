import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ResetPassword from "./pages/resetPassword/ResetPassword";

function App() {
  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
