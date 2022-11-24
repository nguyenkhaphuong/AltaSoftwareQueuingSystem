import React from "react";
import { Link } from "react-router-dom";
import DeviceList from "./DeviceList/DeviceList";

export default function Devices() {
  return (
    <div>
      <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#FF9138" }}>
        Danh sách thiết bị
      </h1>
      <DeviceList />
    </div>
  );
}
