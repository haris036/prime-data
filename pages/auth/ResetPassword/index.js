import { Button, Space } from "antd";
import { PASSWORD_ICON } from "assets";
import { CustomInput } from "global/components";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => () => {
    navigate(path);
  };

  return (
    <div className="reset-password-rapper">
      <p>Please enter your new password to update your account details</p>
      <form>
        <Space direction="vertical" className="w-100" size={20}>
          <CustomInput
            label="Password"
            icon={PASSWORD_ICON}
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <CustomInput
            label="Confirm Password"
            icon={PASSWORD_ICON}
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
        </Space>

        <Button
          block
          type="primary"
          className="custom-btn"
          onClick={handleNavigation("/")}
        >
          Update Password
        </Button>
        <p className="text-center register-text">
          Already have an account ?{" "}
          <mark
            className="primary-text-lighten-10 font-bold cursor-pointer"
            onClick={handleNavigation("/auth/login")}
          >
            Login
          </mark>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
