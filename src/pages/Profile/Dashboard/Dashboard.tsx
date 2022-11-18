import { Row, Col, Avatar, Form, Input, Upload, Button } from "antd";
import "./Dashboard.css";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import React from "react";

const Dashboard: React.FC = () => (
  <>
    <Row>
      <Col xl={8} style={{ padding: 10, textAlign: "center" }}>
        <Avatar
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          size={{ xs: 108, sm: 115, md: 128, lg: 180, xl: 200, xxl: 248 }}
          icon={<UserOutlined />}
        ></Avatar>
        <br />
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 700,
            marginTop: "0.4em",
          }}
        >
          Nguyễn Văn A
        </h1>
      </Col>
      <Col xl={8} style={{ padding: 10 }}>
        <Form>
          <Form.Item name="Name">
            <label htmlFor="name" style={{ fontSize: 18 }}>
              Tên Người Dùng
              <Input
                className="form-input"
                type="text"
                style={{
                  borderRadius: "6px",
                }}
                disabled
              />
            </label>
          </Form.Item>
          <Form.Item name="Phone">
            <label htmlFor="phone" style={{ fontSize: 18 }}>
              Số điện thoại
              <Input
                className="form-input"
                type="tel"
                style={{ borderRadius: "6px" }}
                disabled
              />
            </label>
          </Form.Item>
          <Form.Item name="Email">
            <label htmlFor="email" style={{ fontSize: 18 }}>
              Email
              <Input
                className="form-input"
                type="email"
                style={{ borderRadius: "6px" }}
                disabled
              />
            </label>
          </Form.Item>
        </Form>
      </Col>
      <Col xl={8} style={{ padding: 10 }}>
        <Form>
          <Form.Item name="Username">
            <label htmlFor="username" style={{ fontSize: 18 }}>
              Tên Đăng Nhập
              <Input
                className="form-input"
                type="text"
                style={{
                  borderRadius: "6px",
                }}
                disabled
              />
            </label>
          </Form.Item>
          <Form.Item name="Password">
            <label htmlFor="password" style={{ fontSize: 18 }}>
              Mật khẩu
              <Input.Password
                className="form-input"
                type="password"
                style={{ borderRadius: "6px" }}
                disabled
              />
            </label>
          </Form.Item>
          <Form.Item name="Role">
            <label htmlFor="role" style={{ fontSize: 18 }}>
              Vai trò
              <Input
                className="form-input"
                type="text"
                style={{ borderRadius: "6px" }}
                disabled
              />
            </label>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </>
);

export default Dashboard;
