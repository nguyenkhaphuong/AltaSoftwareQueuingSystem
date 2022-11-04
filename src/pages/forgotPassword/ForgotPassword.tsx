import React from "react";
import "./ForgotPassword.css";
// import Ant Design components
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
// import images assets
import logo from "../../assets/logo.png";
import forgotPassword from "../../assets/forgotpassword.png";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div>
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
                <Form.Item name="Email" rules={[{ required: true }]}>
                  <label htmlFor="email" style={{ fontSize: 18 }}>
                    Vui lòng nhập email để đặt lại mật khẩu của bạn *
                    <Input
                      size="large"
                      type="text"
                      style={{
                        borderRadius: "8px",
                      }}
                    />
                  </label>
                </Form.Item>
                <Form.Item
                  style={{ marginTop: "1.2rem" }}
                  wrapperCol={{ span: 0, offset: 1 }}
                >
                  <Button
                    type="default"
                    style={{
                      width: "162px",
                      height: "40px",
                      borderRadius: "8px",
                      borderColor: "#FF9138",
                      color: "#FF9138",
                      justifySelf: "center",
                      fontWeight: 700,
                      marginRight: 24,
                    }}
                    onClick={() => navigate("/")}
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Huỷ
                  </Button>
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
                    onClick={() => navigate("/resetpassword")}
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Tiếp tục
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
