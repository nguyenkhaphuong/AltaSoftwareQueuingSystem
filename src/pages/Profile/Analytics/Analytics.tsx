import React from "react";
import AnalyticsList from "./AnalyticsList/AnalyticsList";

export default function Analytics() {
  return (
    <div>
      <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#FF9138" }}>
        Quản lý cấp số
      </h1>
      <AnalyticsList />
    </div>
  );
}
