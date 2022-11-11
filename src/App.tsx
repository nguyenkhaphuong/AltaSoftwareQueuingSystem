import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import auth from "./firebase";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ResetPassword from "./pages/resetPassword/ResetPassword";

// import useDispatch and useSelector
import { useAppDispatch, useAppSelector } from "./redux/hooks";

//import slice
import { addUser } from "./redux/slice/authSlice";
import { RootState } from "./redux/store";

function App() {
  const { name, email, username, password, phone, role } = useAppSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();

  // const handleSignIn = () => {};

  useEffect(() => {
    dispatch(
      addUser({
        name: "Nguyen Kha Phuong",
        email: "kha-phuong@gmail.com",
        username: "khapuong1506",
        password: "Khaphuong1506!",
        phone: "84834402094",
        role: "Front End Developer",
      })
    );
  }, []);

  console.log({ name, email, username, password, phone, role });
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
