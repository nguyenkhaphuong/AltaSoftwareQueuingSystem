import React, { useEffect, useState } from "react";
import "./Login.css";
// import Ant Design components
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
// import images assets
import logo from "../../assets/logo.png";
import login from "../../assets/group341.png";
// import useDispatch and useSelector
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

//import slice
import { setLogIn, setLogOut } from "../../redux/slice/authSlice";
import { RootState } from "../../redux/store";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { username, password } = useAppSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useAppDispatch();

  // const handleLogIn = (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // user is logged in, send the user's details to redux, store the current user in the state
  //         dispatch(
  //           setLogIn({
  //             // username: user.username,
  //             // password: user.password,
  //           })
  //         );
  //       } else {
  //         dispatch(setLogOut());
  //       }
  //     });
  //   }, []);
  // };

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
          <div style={{ marginTop: 82 }}>
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
            <div style={{ marginTop: 75 }}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                // onFinish={handleLogIn}
              >
                <Form.Item name="Username" rules={[{ required: true }]}>
                  <label htmlFor="username" style={{ fontSize: 18 }}>
                    T??n ????ng Nh???p *
                    <Input
                      size="large"
                      type="text"
                      style={{
                        borderRadius: "8px",
                      }}
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </label>
                </Form.Item>
                <Form.Item name="Password" rules={[{ required: true }]}>
                  <label htmlFor="password" style={{ fontSize: 18 }}>
                    M???t kh???u *
                    <Input.Password
                      size="large"
                      style={{ borderRadius: "8px" }}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </label>
                </Form.Item>
                <a
                  href="/forgotpassword"
                  style={{ fontSize: 14, color: "#E73F3F" }}
                >
                  Qu??n m???t kh???u?
                </a>
                <br />
                <a
                  href="/register"
                  style={{
                    textDecoration: "underline",
                    fontSize: 16,
                    color: "#E73F3F",
                  }}
                >
                  ????ng k?? t??i kho???n
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
                    ????ng Nh???p
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
          <div>
            <img
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 800,
              }}
              src={login}
              alt="Alta Software"
              width="90%"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
