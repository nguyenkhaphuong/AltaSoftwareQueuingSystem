import React, { useEffect } from "react";
import "./Login.css";
// import Ant Design components
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
// import images assets
import logo from "../../assets/logo.png";
import login from "../../assets/group341.png";
// import Firebase authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
// import useDispatch and useSelector
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

//import slice
import { setLogIn, setLogOut } from "../../redux/slice/authSlice";
import { RootState } from "../../redux/store";

export default function Login() {
  const { username, password } = useAppSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useAppDispatch();

  const handleLogIn = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // user is logged in, send the user's details to redux, store the current user in the state
          dispatch(
            setLogIn({
              // username: user.username,
              // password: user.password,
            })
          );
        } else {
          dispatch(setLogOut());
        }
      });
    }, []);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <Row style={{ height: "100vh" }}>
        <Col
          xs={24}
          md={12}
          xl={10}
          style={{
            padding: 20,
          }}
        >
          <div className="container" style={{ marginTop: 82 }}>
            <div className="img-container">
              <img
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={logo}
                alt="Alta Media"
                width="170px"
              />
            </div>
            <div className="container" style={{ marginTop: 75 }}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onFinish={handleLogIn}
              >
                <Form.Item name="Username" rules={[{ required: true }]}>
                  <label htmlFor="username" style={{ fontSize: 18 }}>
                    Tên Đăng Nhập *
                    <Input
                      size="large"
                      type="text"
                      style={{
                        borderRadius: "8px",
                      }}
                      onChange={handleChange}
                    />
                  </label>
                </Form.Item>
                <Form.Item name="Password" rules={[{ required: true }]}>
                  <label htmlFor="password" style={{ fontSize: 18 }}>
                    Mật khẩu *
                    <Input.Password
                      size="large"
                      style={{ borderRadius: "8px" }}
                      onChange={handleChange}
                    />
                  </label>
                </Form.Item>
                <a
                  href="/forgotpassword"
                  style={{ fontSize: 14, color: "#E73F3F" }}
                >
                  Quên mật khẩu?
                </a>
                <Form.Item
                  style={{ marginTop: "1.2rem" }}
                  wrapperCol={{ span: 14, offset: 7 }}
                >
                  <Button
                    style={{
                      width: "162px",
                      height: "40px",
                      borderRadius: "8px",
                      backgroundColor: "#FF9138",
                      color: "#fff",
                      justifySelf: "center",
                      fontWeight: 700,
                    }}
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Đăng Nhập
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          md={12}
          xl={14}
          style={{
            backgroundColor: "#fff",
            padding: 20,
          }}
        >
          <div className="container">
            <img
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 900,
              }}
              src={login}
              alt="Alta Software"
              width="95%"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
