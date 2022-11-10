import type { MenuProps } from "antd";
import { Button, Menu, Layout } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CommentOutlined,
  DesktopOutlined,
  ToolOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo.png";
import React from "react";

const { Sider, Content } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <AppstoreOutlined />),
  getItem("Thiết bị", "2", <DesktopOutlined />),
  getItem("Dịch vụ", "3", <CommentOutlined />),
  getItem("Cấp số", "4", <PieChartOutlined />),
  getItem("Báo cáo", "5", <BarChartOutlined />),
  getItem("Cài đặt hệ thống", "6", <ToolOutlined />),
  getItem("Đăng xuất", "7", <LogoutOutlined />),
];

const Profile: React.FC = () => (
  <>
    <Layout>
      <Sider width={200} style={{ backgroundColor: "#fff" }}>
        <div className="img-container">
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={logo}
            alt="Alta Media"
            width="80px"
          />
        </div>
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items}></Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: "1em" }}>Content</Content>
      </Layout>
    </Layout>
  </>
);

export default Profile;
