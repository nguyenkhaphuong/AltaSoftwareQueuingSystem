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
    <div className="container" style={{ backgroundColor: "#F6F6F6" }}>
      <Row>
        <Col span={10} style={{ padding: 20 }}>
          <div className="container" style={{ marginTop: 35 }}>
            <div className="img-container">
              <img src={logo} alt="Alta Media" width="25%" />
            </div>
            <div className="container" style={{ marginTop: 50 }}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
              >
                <Form.Item name="Username" rules={[{ required: true }]}>
                  <label htmlFor="username">
                    Tên Đăng Nhập *
                    <Input
                      style={{
                        borderRadius: "8px",
                      }}
                      placeholder="Username"
                    />
                  </label>
                </Form.Item>
                <Form.Item name="Password" rules={[{ required: true }]}>
                  <label htmlFor="password">
                    Mật khẩu *
                    <Input
                      style={{ borderRadius: "8px" }}
                      type="password"
                      placeholder="Password"
                    />
                  </label>
                </Form.Item>
                <Form.Item>
                  <a href="#" style={{ color: "#E73F3F" }}>
                    Quên mật khẩu?
                  </a>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      width: "162px",
                      height: "40px",
                      borderRadius: "8px",
                      backgroundColor: "#FF9138",
                      color: "#fff",
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
        <Col span={14} style={{ backgroundColor: "#fff", padding: 20 }}>
          <div className="container">
            <img src={login} alt="Alta Software" width="65%" />
          </div>
          <div
            className="container-inline"
            style={{ justifyItems: "flex-end", color: "#FF9138", padding: 20 }}
          >
            <p
              style={{ fontWeight: 400, fontSize: 34, marginBottom: "0.01rem" }}
            >
              Hệ thống
            </p>
            <p
              style={{ fontWeight: 900, fontSize: 36, marginBottom: "0.01rem" }}
            >
              QUẢN LÝ XẾP HÀNG
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
