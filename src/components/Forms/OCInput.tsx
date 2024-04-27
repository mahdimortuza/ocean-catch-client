import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type?: string;
  label?: string;
};
const OCInput = ({ name, type = "text", label }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              placeholder={name}
              id={name}
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default OCInput;
