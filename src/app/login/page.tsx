"use client";
import OCForm from "@/components/Forms/OCForm";
import OCInput from "@/components/Forms/OCInput";
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {
  const handleLogin = (values: FieldValues) => {
    console.log(values);
  };
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
