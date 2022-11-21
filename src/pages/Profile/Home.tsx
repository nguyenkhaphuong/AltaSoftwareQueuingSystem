import { Menu, Layout, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import "./Home.css";
import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Routes, useNavigate, Route, Outlet, Link } from "react-router-dom";
import Devices from "./Devices/Devices";
import Services from "./Services/Services";
import Analytics from "./Analytics/Analytics";
import Reports from "./Reports/Reports";
import Settings from "./Settings/Settings";
import Sidebar from "../../components/Sidebar";
import Profile from "./Profile/Profile";

const { Sider, Content, Header } = Layout;

function Contents() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="thiet-bi" element={<Devices />} />
        <Route path="dich-vu" element={<Services />} />
        <Route path="cap-so" element={<Analytics />} />
        <Route path="bao-cao" element={<Reports />} />
        <Route path="cai-dat" element={<Settings />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
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
          <Sidebar />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <Space>
              <Avatar size={40} icon={<UserOutlined />}></Avatar>
              <Link to="profile" style={{ color: "black" }}>
                Nguyễn Văn A
              </Link>
            </Space>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
