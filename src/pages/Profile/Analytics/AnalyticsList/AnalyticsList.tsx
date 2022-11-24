import React from "react";
import { Table } from "antd";
import "./AnalyticsList.css";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  number: number;
  customerName: string;
  serviceName: string;
  timeAdded: string;
  expiryDate: string;
  status: string;
  sources: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Số thứ tự",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Tên khách hàng",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Tên dịch vụ",
    dataIndex: "serviceName",
    key: "serviceName",
  },
  {
    title: "Thời gian cấp",
    dataIndex: "timeAdded",
    key: "timeAdded",
    responsive: ["md"],
  },
  {
    title: "Hạn sử dụng",
    dataIndex: "expiryDate",
    key: "expiryDate",
    responsive: ["md"],
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    responsive: ["lg"],
  },
  {
    title: "Nguồn cấp",
    dataIndex: "sources",
    key: "sources",
    responsive: ["lg"],
  },
];

const data: DataType[] = [
  {
    number: 2010001,
    customerName: "Lê Huỳnh Ái Vân",
    serviceName: "Khám tim mạch",
    timeAdded: "14:35 - 07/11/2021",
    expiryDate: "14:35 - 12/11/2021",
    status: "Đang chờ",
    sources: "Kiosk",
  },
  {
    number: 2010002,
    customerName: "Nguyễn Văn A",
    serviceName: "Khám mắt",
    timeAdded: "14:35 - 07/11/2021",
    expiryDate: "14:35 - 12/11/2021",
    status: "Đã sử dụng",
    sources: "Kiosk",
  },
];

export default function DeviceList() {
  return (
    <div>
      <Table
        className="ant-table-container"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}
