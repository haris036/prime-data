import { Button, Divider, Space } from "antd";
import { MESSAGE_ICON } from "assets";
import { PASSWORD_ICON } from "assets";
import { GOOGLE_ICON, FACEBOOK_ICON } from "assets";
import { CustomInput } from "global/components";
import "./styles.scss";
import useLogin from "./useLogin";

const Login = () => {
  const { handleNavigation } = useLogin();

  return (
    <div className="login-form-wrapper">
      {/* <div className="social-btns-wrapper">
        <SocialButton title={"Login with Facebook"} icon={FACEBOOK_ICON} />
        <SocialButton title={"Login with Google"} icon={GOOGLE_ICON} />
      </div> */}
      {/* <Divider plain>OR</Divider> */}
      <form>
        <Space direction="vertical" className="w-100">
          <CustomInput
            label="Email"
            icon={MESSAGE_ICON}
            placeholder={"example@gmail.com"}
          />
          <CustomInput
            label="Password"
            icon={PASSWORD_ICON}
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
        </Space>

        <p
          className="text-small font-bold  cursor-pointer forgot-text primary-text-lighten-10"
          onClick={handleNavigation("/auth/forgot-password")}
        >
          Forgot Password?
        </p>

        <Button block type="primary" className="custom-btn">
          Login
        </Button>
        <p className="text-center register-text">
          Dont have an account?{" "}
          <mark
            className="primary-text-lighten-10 cursor-pointer font-bold"
            onClick={handleNavigation("/auth/register")}
          >
            Register
          </mark>
        </p>
      </form>
    </div>
  );
};

const SocialButton = ({ title, onClick = null, icon }) => (
  <button className="social-button" onClick={onClick}>
    <img src={icon} alt="" />
    {title}
  </button>
);

export default Login;
