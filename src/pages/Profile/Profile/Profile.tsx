import { Row, Col, Avatar, Upload, Button, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Form } from "antd";
import "./Profile.css";
import React, { useEffect, useState } from "react";
import { AuthState } from "../../../redux/slice/authSlice";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { userCollection } from "../../../firebase";

const Profile: React.FC = () => {
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
    <div className="container">
      {users?.map((user) => (
        <Row>
          <Col xl={8} style={{ padding: 10, textAlign: "center" }}>
            <Avatar
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
              size={{ xs: 108, sm: 115, md: 128, lg: 180, xl: 200, xxl: 248 }}
              src={user.image}
            ></Avatar>
            <br />
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "0.4em",
              }}
            >
              {user.name}
            </h1>
          </Col>
          <Col xl={8} style={{ padding: 10 }}>
            <Form>
              <Form.Item name="Name">
                <label htmlFor="name" style={{ fontSize: 16, fontWeight: 600 }}>
                  Tên Người Dùng
                  <Input
                    className="form-input"
                    type="text"
                    style={{
                      borderRadius: "6px",
                    }}
                    placeholder={user.name}
                    disabled
                  />
                </label>
              </Form.Item>
              <Form.Item name="Phone">
                <label
                  htmlFor="phone"
                  style={{ fontSize: 16, fontWeight: 600 }}
                >
                  Số điện thoại
                  <Input
                    className="form-input"
                    type="tel"
                    style={{ borderRadius: "6px" }}
                    placeholder={user.phone}
                    disabled
                  />
                </label>
              </Form.Item>
              <Form.Item name="Email">
                <label
                  htmlFor="email"
                  style={{ fontSize: 16, fontWeight: 600 }}
                >
                  Email
                  <Input
                    className="form-input"
                    type="email"
                    style={{ borderRadius: "6px" }}
                    placeholder={user.email}
                    disabled
                  />
                </label>
              </Form.Item>
            </Form>
          </Col>
          <Col xl={8} style={{ padding: 10 }}>
            <Form>
              <Form.Item name="Username">
                <label
                  htmlFor="username"
                  style={{ fontSize: 16, fontWeight: 600 }}
                >
                  Tên Đăng Nhập
                  <Input
                    className="form-input"
                    type="text"
                    style={{
                      borderRadius: "6px",
                    }}
                    placeholder={user.username}
                    disabled
                  />
                </label>
              </Form.Item>
              <Form.Item name="Password">
                <label
                  htmlFor="password"
                  style={{ fontSize: 16, fontWeight: 600 }}
                >
                  Mật khẩu
                  <Input.Password
                    className="form-input"
                    type="password"
                    style={{ borderRadius: "6px" }}
                    placeholder="********"
                    disabled
                  />
                </label>
              </Form.Item>
              <Form.Item name="Role">
                <label htmlFor="role" style={{ fontSize: 16, fontWeight: 600 }}>
                  Vai trò
                  <Input
                    className="form-input"
                    type="text"
                    style={{ borderRadius: "6px" }}
                    placeholder={user.role}
                    disabled
                  />
                </label>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Profile;
