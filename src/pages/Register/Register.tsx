// import Ant Design components
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
// import images assets
import logo from "../../assets/logo.png";
import login from "../../assets/group341.png";
import React from "react";

export default function Register() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <Row style={{ height: "120vh" }}>
        <Col
          xs={24}
          md={12}
          xl={10}
          style={{
            padding: 20,
          }}
        >
          <div className="container" style={{ marginTop: 0 }}>
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
            <div className="container" style={{ marginTop: 25 }}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                // onFinish={handleRegister}
              >
                <Form.Item name="Name" rules={[{ required: true }]}>
                  <label htmlFor="name" style={{ fontSize: 18 }}>
                    Tên người dùng *
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
                <Form.Item name="Username" rules={[{ required: true }]}>
                  <label htmlFor="username" style={{ fontSize: 18 }}>
                    Tên đăng nhập *
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
                <Form.Item name="Role" rules={[{ required: true }]}>
                  <label htmlFor="role" style={{ fontSize: 18 }}>
                    Vai trò *
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
                <Form.Item name="Email" rules={[{ required: true }]}>
                  <label htmlFor="email" style={{ fontSize: 18 }}>
                    Email *
                    <Input
                      size="large"
                      type="email"
                      style={{
                        borderRadius: "8px",
                      }}
                      onChange={handleChange}
                    />
                  </label>
                </Form.Item>
                <Form.Item name="Phone">
                  <label htmlFor="phone" style={{ fontSize: 18 }}>
                    Số điện thoại
                    <Input
                      size="large"
                      type="tel"
                      style={{
                        borderRadius: "8px",
                      }}
                      onChange={handleChange}
                    />
                  </label>
                </Form.Item>
                Đã có tài khoản?
                <a
                  href="/"
                  style={{
                    fontSize: 16,
                    color: "#E73F3F",
                    marginLeft: "0.3em",
                    textDecoration: "underline",
                  }}
                >
                  Đăng Nhập
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
                    Đăng Ký
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
