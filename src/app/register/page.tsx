"use client";
import OCForm from "@/components/Forms/OCForm";
import OCInput from "@/components/Forms/OCInput";
import { useCreateUserMutation } from "@/redux/api/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { Button, Flex, Row, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [createUser] = useCreateUserMutation();

  const handleRegistration = async (values: FieldValues) => {
    const toastId = toast.loading("Creating user");

    try {
      await createUser(values).unwrap();
      // dispatch(res);
      // console.log(res);
      toast.success("User is created", { id: toastId, duration: 2000 });
      router.push("/login");
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
      console.log(error);
    }
  };
  return (
    <Row justify={"center"} align={"middle"} style={{ height: " 100vh" }}>
      <Flex vertical>
        <Flex>
          <OCForm onSubmit={handleRegistration}>
            <OCInput type="text" name="name" label="Name" />
            <OCInput type="text" name="email" label="Email" />
            <OCInput type="password" name="password" label="Password" />
            <Button htmlType="submit">Register</Button>
          </OCForm>
        </Flex>
        <Flex style={{ marginTop: "20px" }}>
          <Typography>
            Already have an account? <Link href="/login">Login</Link>
          </Typography>
        </Flex>
      </Flex>
    </Row>
  );
};

export default RegisterPage;
