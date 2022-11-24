import React from "react";
import { Table } from "antd";
import "./DeviceList.css";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  deviceName: string;
  ipAddress: string | null;
  operationStatus: string;
  connectStatus: string;
  services: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã thiết bị",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Tên thiết bị",
    dataIndex: "deviceName",
    key: "deviceName",
  },
  {
    title: "Địa chỉ IP",
    dataIndex: "ipAddress",
    key: "ipAddress",
    responsive: ["md"],
  },
  {
    title: "Trạng thái hoạt động",
    dataIndex: "operationStatus",
    key: "operationStatus",
    responsive: ["md"],
  },
  {
    title: "Trạng thái kết nối",
    dataIndex: "connectStatus",
    key: "connectStatus",
    responsive: ["lg"],
  },
  {
    title: "Dịch vụ",
    dataIndex: "services",
    key: "services",
    responsive: ["lg"],
  },
];

const data: DataType[] = [
  {
    key: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.10",
    operationStatus: "Ngưng hoạt động",
    connectStatus: "Mất kết nối",
    services: "Khám tim mạch, Khám mắt",
  },
  {
    key: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.168.1.10",
    operationStatus: "Hoạt động",
    connectStatus: "Kết nối",
    services: "Khám tim mạch, Khám mắt",
  },
];

export default function DeviceList() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
