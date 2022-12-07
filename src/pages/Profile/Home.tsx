import { Layout, Avatar, Space } from "antd";
import logo from "../../assets/logo.png";
import "./Home.css";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Devices from "./Devices/Devices";
import Services from "./Services/Services";
import Analytics from "./Analytics/Analytics";
import Reports from "./Reports/Reports";
import Settings from "./Settings/Settings";
import Sidebar from "../../components/Sidebar";
import Profile from "./Profile/Profile";
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { userCollection } from "../../firebase";
import { AuthState } from "../../redux/slice/authSlice";

const { Sider, Content, Header } = Layout;

function Contents() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/thiet-bi" element={<Devices />} />
        <Route path="dich-vu" element={<Services />} />
        <Route path="cap-so" element={<Analytics />} />
        <Route path="bao-cao" element={<Reports />} />
        <Route path="cai-dat" element={<Settings />} />
      </Routes>
    </>
  );
}

function Home() {
  const [users, setUsers] = useState<AuthState[]>([]);

  useEffect(() =>
    onSnapshot(userCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      setUsers(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    })
  );

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
              {users?.map((user) => (
                <>
                  <Avatar size={40} src={user.image}></Avatar>
                  <Link to="profile" style={{ color: "black" }}>
                    {user.name}
                  </Link>
                </>
              ))}
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
