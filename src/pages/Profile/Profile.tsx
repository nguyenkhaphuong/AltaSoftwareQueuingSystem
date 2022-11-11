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
    <Layout>
      <Sider
        style={{ backgroundColor: "#fff", width: "200px", height: "700px" }}
      >
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
          <Row>
            <Col span={18}>
              <p
                style={{ color: "#FF9138", fontSize: "20px", fontWeight: 700 }}
              >
                Thông tin cá nhân
              </p>
            </Col>
            <Col span={6}>
              <div>
                <Avatar size={40} icon={<UserOutlined />}></Avatar> Nguyễn Văn A
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 20,
            minHeight: 280,
            borderRadius: "12px",
          }}
        >
          <Row>
            <Col span={8}>
              <Avatar
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                size={248}
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
            <Col span={8}>
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
                    />
                  </label>
                </Form.Item>
              </Form>
            </Col>
            <Col span={8}>
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
