import React from "react";
import "./Login.css";
// import Ant Design components
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
// import images assets
import logo from "../../assets/logo.png";
import login from "../../assets/group341.png";

export default function Login() {
  return (
    <div>
      <Row>
        <Col xs={24} xl={10}>
          <div className="container" style={{ marginTop: 35 }}>
            <div className="img-container">
              <img
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={logo}
                alt="Alta Media"
                width="165px"
              />
            </div>
            <div className="container" style={{ marginTop: 50 }}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
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
                    />
                  </label>
                </Form.Item>
                <Form.Item name="Password" rules={[{ required: true }]}>
                  <label htmlFor="password" style={{ fontSize: 18 }}>
                    Mật khẩu *
                    <Input.Password
                      size="large"
                      style={{ borderRadius: "8px" }}
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
          xl={14}
          style={{
            backgroundColor: "#fff",
            padding: 20,
            display: "inline-block",
          }}
        >
          <div className="container">
            <img
              style={{ display: "inline" }}
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
