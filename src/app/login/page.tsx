"use client";
import OCForm from "@/components/Forms/OCForm";
import OCInput from "@/components/Forms/OCInput";
import { Button, Row } from "antd";

const LoginPage = () => {
  const handleLogin = () => {};
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <OCForm onSubmit={handleLogin}>
        <OCInput type="text" name="email" label="Email" />
        <OCInput type="password" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </OCForm>
    </Row>
  );
};

export default LoginPage;
