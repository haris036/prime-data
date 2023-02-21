import { Button, Form, Space } from "antd";
import { MESSAGE_ICON } from "assets";
import { CustomInput } from "global/components";

const VerifyEmail = ({ onNextStep }) => {
  return (
    <Form>
      <p>Please enter a valid email to verify</p>
      <Space direction="vertical" className="w-100">
        <CustomInput
          label="Email"
          icon={MESSAGE_ICON}
          placeholder="example@gmail.com"
        />
      </Space>
      <Button block type="primary" className="custom-btn" onClick={onNextStep}>
        Continue
      </Button>
    </Form>
  );
};

export default VerifyEmail;
