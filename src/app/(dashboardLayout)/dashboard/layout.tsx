"use client";
import { AppstoreOutlined, DashboardOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import React, { ReactNode } from "react";

const { Header, Content, Sider } = Layout;

const items = [
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
].map((item) => ({
  key: String(item.path),
  icon: React.createElement(item.icon),
  label: <Link href={item.path}>{item.label}</Link>,
}));

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
        <div className="text-white">Logo</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
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
