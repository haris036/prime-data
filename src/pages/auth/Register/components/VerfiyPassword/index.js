import { Button, Form, Space } from "antd";
import { PASSWORD_ICON } from "assets";
import { CustomInput } from "global/components";

const VerifyPassword = ({ onNextStep }) => {
  return (
    <Form>
      <p>Please enter password for your account</p>
      <Space direction="vertical" className="w-100">
        <CustomInput
          label="Password"
          icon={PASSWORD_ICON}
          type='password'
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <CustomInput
          label="Confirm Password"
          icon={PASSWORD_ICON}
          type='password'
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
      </Space>
      <Button block type="primary" className="custom-btn" onClick={onNextStep}>
        Continue
      </Button>
    </Form>
  );
};

export default VerifyPassword;
