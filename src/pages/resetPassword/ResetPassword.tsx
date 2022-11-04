import React from "react";
// import Ant Design components
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
// import images assets
import logo from "../../assets/logo.png";
import forgotPassword from "../../assets/forgotpassword.png";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ backgroundColor: "#F6F6F6" }}>
      <Row>
        <Col
          span={10}
          xs={24}
          md={12}
          xl={10}
          style={{
            padding: 20,
          }}
        >
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
                width="25%"
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
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 22,
                    textAlign: "center",
                  }}
                >
                  Đặt lại mật khẩu
                </p>
                <Form.Item name="Password" rules={[{ required: true }]}>
                  <label htmlFor="password">
                    Mật khẩu *
                    <Input.Password
                      size="large"
                      type="password"
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </label>
                </Form.Item>
                <Form.Item name="Password" rules={[{ required: true }]}>
                  <label htmlFor="confirm">
                    Nhập lại mật khẩu *
                    <Input.Password
                      size="large"
                      type="password"
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </label>
                </Form.Item>
                <Form.Item>
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
                    Xác nhận
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
        <Col
          span={14}
          xs={24}
          md={12}
          xl={14}
          style={{
            backgroundColor: "#fff",
            padding: 20,
            display: "flex",
          }}
        >
          <div className="container">
            <img
              style={{ display: "block" }}
              src={forgotPassword}
              alt="Alta Software"
              width="711px"
              height="560px"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
