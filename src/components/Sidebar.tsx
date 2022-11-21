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
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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
            key: "/home/dashboard",
            icon: <AppstoreOutlined />,
            label: "Dashboard",
          },
          {
            key: "/home/thiet-bi",
            icon: <DesktopOutlined />,
            label: "Thiết bị",
          },
          {
            key: "/home/dich-vu",
            icon: <CommentOutlined />,
            label: "Dịch vụ",
          },
          {
            key: "/home/cap-so",
            icon: <PieChartOutlined />,
            label: "Cấp số",
          },
          {
            key: "/home/bao-cao",
            icon: <BarChartOutlined />,
            label: "Báo cáo",
          },
          {
            key: "/home/cai-dat",
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
