"use client";
import OCForm from "@/components/Forms/OCForm";
import OCInput from "@/components/Forms/OCInput";
import { useLoginMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { Button, Row } from "antd";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);
    try {
      const userInfo = {
        email: values.email,
        Password: values.Password,
      };

      const res = await login(userInfo).unwrap();
      // const user = verifyToken(res.data.accessToken);
      dispatch(res);
    } catch (error) {
      console.log(error);
    }
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
