"use client";
import { removeUser } from "@/services/actions/auth.services";
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  BorderlessTableOutlined,
  DashboardOutlined,
  HomeOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, Typography, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const { Header, Content, Sider } = Layout;
const role = "admin";
const adminItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardOutlined,
  },
  {
    label: "All Products",
    path: "/dashboard/all-products",
    icon: AppstoreOutlined,
  },
  {
    label: "Add Product",
    path: "/dashboard/add-product",
    icon: AppstoreAddOutlined,
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
    icon: BorderlessTableOutlined,
  },
  {
    label: "Home",
    path: "/",
    icon: HomeOutlined,
  },
].map((item) => ({
  key: String(item.path),
  icon: React.createElement(item.icon),
  label: <Link href={item.path}>{item.label}</Link>,
}));

const userItems = [
  {
    label: "My Orders",
    path: "/dashboard/my-orders",
    icon: BorderlessTableOutlined,
  },
  {
    label: "Home",
    path: "/",
    icon: HomeOutlined,
  },
].map((item) => ({
  key: String(item.path),
  icon: React.createElement(item.icon),
  label: <Link href={item.path}>{item.label}</Link>,
}));

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    removeUser();
    router.push("/");
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="text-white text-center my-4 text-3xl">Ocean Catch</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={role === "admin" ? adminItems : userItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            paddingTop: "15px",
          }}
        >
          <Flex wrap="wrap" gap="large">
            <Flex style={{ marginLeft: "30px" }}>
              <Typography>Profile photo</Typography>
            </Flex>
            <Button
              onClick={handleLogout}
              type="primary"
              danger
              icon={<PoweroffOutlined />}
            >
              Logout
            </Button>
          </Flex>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
