"use client";
import OCForm from "@/components/Forms/OCForm";
import OCInput from "@/components/Forms/OCInput";
import { useLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/actions/auth.services";
import { verifyToken } from "@/utils/verifyToken";
import { Button, Row } from "antd";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const [login] = useLoginMutation();

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);
    const toastId = toast.loading("User logging in.");
    try {
      const res = await login(values).unwrap();

      if (res?.accessToken) {
        storeUserInfo({ accessToken: res?.accessToken });
      }

      const user = verifyToken(res.accessToken);
      if (user) {
        router.push("/dashboard/all-products");
      }
      toast.success("User logged in successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Can not login user", { id: toastId, duration: 2000 });
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
