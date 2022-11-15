import React from "react";
// import Ant Design components
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
// import images assets
import logo from "../../assets/logo.png";
import forgotPassword from "../../assets/forgotpassword.png";

export default function ResetPassword() {
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
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
                onFinish={handleSubmit}
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
                  <label htmlFor="password" style={{ fontSize: 18 }}>
                    Mật khẩu *
                    <Input.Password
                      size="large"
                      type="password"
                      style={{
                        borderRadius: "8px",
                      }}
                      onChange={handleChange}
                    />
                  </label>
                </Form.Item>
                <Form.Item name="Password" rules={[{ required: true }]}>
                  <label htmlFor="confirm" style={{ fontSize: 18 }}>
                    Nhập lại mật khẩu *
                    <Input.Password
                      size="large"
                      type="password"
                      style={{
                        borderRadius: "8px",
                      }}
                      onChange={handleChange}
                    />
                  </label>
                </Form.Item>
                <Form.Item
                  style={{ marginTop: "48px" }}
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
                    Xác nhận
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
            display: "flex",
          }}
        >
          <div className="container">
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 100,
                maxWidth: 900,
              }}
              src={forgotPassword}
              alt="Alta Software"
              width="95%"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
