import { Menu, Layout, Row, Col, Avatar, Form, Input } from "antd";
import "./Profile.css";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CommentOutlined,
  DesktopOutlined,
  ToolOutlined,
  PieChartOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo.png";
import React from "react";

const { Sider, Content, Header } = Layout;

const Profile: React.FC = () => (
  <>
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ backgroundColor: "#fff" }}>
        <div className="img-logo">
          <img
            style={{
              display: "block",
              padding: 20,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={logo}
            alt="Alta Media"
            width="125px"
          />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={[
            {
              key: "1",
              icon: <AppstoreOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <DesktopOutlined />,
              label: "Thiết bị",
            },
            {
              key: "3",
              icon: <CommentOutlined />,
              label: "Dịch vụ",
            },
            {
              key: "4",
              icon: <PieChartOutlined />,
              label: "Cấp số",
            },
            {
              key: "5",
              icon: <BarChartOutlined />,
              label: "Báo cáo",
            },
            {
              key: "6",
              icon: <ToolOutlined />,
              label: "Cài đặt hệ thống",
            },
            {
              key: "7",
              icon: <LogoutOutlined />,
              label: "Đăng xuất",
              danger: true,
            },
          ]}
        ></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <Avatar
            style={{ marginRight: ".5rem" }}
            size={40}
            icon={<UserOutlined />}
          ></Avatar>
          Nguyễn Văn A
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            borderRadius: "12px",
          }}
        >
          <Row>
            <Col xl={8} style={{ padding: 10 }}>
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
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  textAlign: "center",
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
                      type="number"
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
        </Content>
      </Layout>
    </Layout>
  </>
);

export default Profile;
