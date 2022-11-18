import { Menu } from "antd";
import React from "react";
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
import { Routes, useNavigate, Route } from "react-router-dom";

import Devices from "../pages/Profile/Devices/Devices";
import Services from "../pages/Profile/Dashboard/Dashboard";
import Analytics from "../pages/Profile/Dashboard/Dashboard";
import Reports from "../pages/Profile/Dashboard/Dashboard";
import Settings from "../pages/Profile/Dashboard/Dashboard";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        onClick={({ key }) => {
          if (key === "signOut") {
            navigate("/");
          } else {
            navigate(key);
          }
        }}
        mode="inline"
        items={[
          {
            key: "/profile/dashboard",
            icon: <AppstoreOutlined />,
            label: "Dashboard",
          },
          {
            key: "/profile/thiet-bi",
            icon: <DesktopOutlined />,
            label: "Thiết bị",
          },
          {
            key: "/profile/dich-vu",
            icon: <CommentOutlined />,
            label: "Dịch vụ",
          },
          {
            key: "/profile/cap-so",
            icon: <PieChartOutlined />,
            label: "Cấp số",
          },
          {
            key: "/profile/bao-cao",
            icon: <BarChartOutlined />,
            label: "Báo cáo",
          },
          {
            key: "/profile/cai-dat",
            icon: <ToolOutlined />,
            label: "Cài đặt hệ thống",
          },
          {
            key: "signOut",
            icon: <LogoutOutlined />,
            label: "Đăng xuất",
            danger: true,
          },
        ]}
      ></Menu>
    </div>
  );
}
