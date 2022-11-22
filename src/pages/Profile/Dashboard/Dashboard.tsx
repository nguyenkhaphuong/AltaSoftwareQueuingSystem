import { Row, Col, Avatar, Card } from "antd";
import iconDashboard1 from "../../../assets/Home/Dashboard/icon_dashboad01.png";
import iconDashboard2 from "../../../assets/Home/Dashboard/icon_dashboad02.png";
import iconDashboard3 from "../../../assets/Home/Dashboard/icon_dashboad03.png";
import iconDashboard4 from "../../../assets/Home/Dashboard/icon_dashboad04.png";
import "./Dashboard.css";

import React from "react";

const { Meta } = Card;

const Dashboard: React.FC = () => (
  <>
    <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#FF9138" }}>
      Dashboard
    </h1>
    <div>
      <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#FF9138" }}>
        Biểu đồ cấp số
      </h1>
    </div>
    <div>
      <Row gutter={[16, 24]}>
        <Col style={{ marginRight: "24px" }}>
          <Meta
            className="card-item"
            avatar={<Avatar size="large" src={iconDashboard1} />}
            title={<h4 style={{ fontWeight: 700 }}>Số thứ tự đã cấp</h4>}
          />
        </Col>
        <Col style={{ marginRight: "24px" }}>
          <Meta
            className="card-item"
            avatar={<Avatar size="large" src={iconDashboard2} />}
            title={<h4 style={{ fontWeight: 700 }}>Số thứ tự đã sử dụng</h4>}
          />
        </Col>
        <Col style={{ marginRight: "24px" }}>
          <Meta
            className="card-item"
            avatar={<Avatar size="large" src={iconDashboard3} />}
            title={<h4 style={{ fontWeight: 700 }}>Số thứ tự đang chờ</h4>}
          />
        </Col>
        <Col style={{ marginRight: "24px" }}>
          <Meta
            className="card-item"
            avatar={<Avatar size="large" src={iconDashboard4} />}
            title={<h4 style={{ fontWeight: 700 }}>Số thứ tự đã bỏ qua</h4>}
          />
        </Col>
      </Row>
    </div>
  </>
);

export default Dashboard;
