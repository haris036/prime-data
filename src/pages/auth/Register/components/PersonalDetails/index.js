import { Button, Form, Space } from "antd";
import { PERSON_ICON } from "assets";
import { LOCATION_ICON } from "assets";
import { CustomInput } from "global/components";

const PersonalDetails = ({ onNextStep }) => {
  return (
    <Form>
      <p className="subtle-text">Please enter your personal detail</p>
      <Space direction="vertical" className="w-100">
        <CustomInput
          label="Full Name"
          icon={PERSON_ICON}
          placeholder={"John Doe"}
        />

        <CustomInput
          label="Country"
          type="text"
          icon={LOCATION_ICON}
          placeholder={"Pakistan"}
        />
      </Space>
      <Button
        block
        type="primary"
        className="custom-btn"
        onClick={onNextStep}
      >
        Finish
      </Button>
    </Form>
  );
};

export default PersonalDetails;
